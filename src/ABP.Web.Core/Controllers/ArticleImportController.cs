using ABP.Web.Models.UmbracoModels;
using CsvHelper;
using CsvHelper.Configuration;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Formats.Asn1;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Media.EmbedProviders;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;
using Umbraco.Extensions;
using static System.Net.Mime.MediaTypeNames;
using static Umbraco.Cms.Core.Constants.HttpContext;
using JsonExtensionDataAttribute = System.Text.Json.Serialization.JsonExtensionDataAttribute;
using JsonIgnoreAttribute = Newtonsoft.Json.JsonIgnoreAttribute;

namespace ABP.Web.UI.Controllers
{
    /// <summary>
    /// Surface Controller for importing articles from CSV
    /// </summary>
    public class ArticleImportController : SurfaceController
    {
        private readonly IContentService _contentService;
        private readonly IMediaService _mediaService;
        private readonly IContentTypeService _contentTypeService;
        private readonly IDataTypeService _dataTypeService;
        private readonly ILogger<ArticleImportController> _logger;
        private readonly IShortStringHelper _shortStringHelper;

        private const string CSV_FILE_PATH = @"C:\ABP Repo Archive\Migration\articles-and-blog\articles.csv";

        private const string PDF_CSV_FILE_PATH = @"C:\ABP Repo Archive\Migration\abp_reports.csv";

        private const string IMAGES_BASE_PATH = @"C:\ABP Repo Archive\Migration\articles-and-blog\images";

        // Document Type Aliases
        private const string REPOSITORY_ALIAS = "repository";
        private const string ARTICLE_ALIAS = "article";
        private const string DOWNLOAD_ITEM_ALIAS = "downloadItem";

        // Media Folder Structure
        private const string MEDIA_ABPORTS_NAME = "Abports";
        private const string MEDIA_NEWS_AND_MEDIA_NAME = "News And Media";
        private const string MEDIA_BLOGS_AND_ARTICLE_NAME = "Blogs And Article";

        private const string INVESTOR_RELATION_NAME = "Investor Relations";

        private readonly IContentTypeBaseServiceProvider _contentTypeBaseServiceProvider;
        private readonly MediaFileManager _mediaFileManager;
        private readonly MediaUrlGeneratorCollection _mediaUrlGeneratorCollection;

        private const string BASE_URL = "https://www.abports.co.uk";
        private readonly HttpClient _httpClient;

        //private readonly IMediaUrlGenerator _mediaUrlGenerator;
        private readonly IPublishedContentQuery _publishedContentQuery;

        public ArticleImportController(
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IContentService contentService,
            IMediaService mediaService,
            IContentTypeService contentTypeService,
            IDataTypeService dataTypeService,
            ILogger<ArticleImportController> logger,
            IShortStringHelper shortStringHelper,
            IContentTypeBaseServiceProvider contentTypeBaseServiceProvider,
            MediaUrlGeneratorCollection mediaUrlGenerators,
            MediaFileManager mediaFileManager,
           // IMediaUrlGenerator mediaUrlGenerator
           IPublishedContentQuery publishedContentQuery
            )
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _contentService = contentService;
            _mediaService = mediaService;
            _contentTypeService = contentTypeService;
            _dataTypeService = dataTypeService;
            _logger = logger;
            _shortStringHelper = shortStringHelper;
            _contentTypeBaseServiceProvider = contentTypeBaseServiceProvider;
            _mediaUrlGeneratorCollection = mediaUrlGenerators;
            _mediaFileManager = mediaFileManager;
            _httpClient = new HttpClient();
            // _mediaUrlGenerator = mediaUrlGenerator;
            _publishedContentQuery = publishedContentQuery;
        }


        [HttpGet]
        public async Task<IActionResult> ImportDownloadItems(string documentPath)
        {
            if(string.IsNullOrEmpty(documentPath))
            {
                return Json(new { success = false, message = "Document path is required" });
            }

            var summary = new ImportSummary();

            try
            {
                _logger.LogInformation("Starting article import from CSV");

                // Find Abports root node
                var abportsNode = FindAbportsNode();
                if (abportsNode == null)
                {
                    return Json(new { success = false, message = "Abports root node not found" });
                }

                // Read and process CSV
                if (!System.IO.File.Exists(PDF_CSV_FILE_PATH))
                {
                    return Json(new { success = false, message = $"CSV file not found at {PDF_CSV_FILE_PATH}" });
                }

                // Navigate to Articles And Blog folder
                var investorRelationsNode = FindOrCreatePath(abportsNode, new[] { INVESTOR_RELATION_NAME, documentPath });

                if (investorRelationsNode == null)
                {
                    return Json(new { success = false, message = "Could not find or create Investor Relations path" });
                }

                var records = ReadDownloadFileCsvFile();

                
                // Find/Create Media folders
                var mediaYearFolders = new Dictionary<string, IMedia>();

               

                foreach (var record in records)
                {
                    try
                    {
                        _logger.LogInformation($"Processing article: {record.Title}");

                        string year = string.Empty;

                        if (DateTime.TryParseExact(record.Date,
                   new[] { "dd MMM yyyy", "d MMM yyyy", "dd MMMM yyyy", "d MMMM yyyy" },
                   CultureInfo.InvariantCulture,
                   DateTimeStyles.None,
                   out var recordDate))
                        {
                            year = recordDate.Year.ToString();
                        }

                        // Get or create year folder
                        var yearFolder = GetOrCreateYearFolder(investorRelationsNode, year, summary);

                        // Check if article already exists
                        if (ArticleExists(yearFolder, record.Title))
                        {
                            summary.Skipped++;
                            _logger.LogInformation($"Skipped (already exists): {record.Title}");
                            continue;
                        }

                        // Get or create media year folder
                        if (!mediaYearFolders.ContainsKey(year))
                        {
                            mediaYearFolders[year] = GetOrCreateInvestorRelationMediaYearFolder(documentPath, year, summary);
                        }
                        var mediaYearFolder = mediaYearFolders[year];

                        string  fileId = await DownloadDocumentAsync(record.File);

                        // Upload media files
                        IMedia?fileMedia = null;

                        if (!string.IsNullOrEmpty(fileId))
                        {
                            fileMedia = UploadFile(fileId, mediaYearFolder, summary);
                        }


                        // Create article
                        var article = CreateDownloadItem(yearFolder, record, fileMedia, recordDate, summary);

                        if (article != null)
                        {
                            summary.Created++;
                            summary.CreatedArticles.Add(record.Title);
                            _logger.LogInformation($"Created Article: {record.Title}");
                        }
                    }
                    catch (Exception ex)
                    {
                        summary.Errors++;
                        summary.ErrorMessages.Add($"Error processing {record.Title}: {ex.Message}");
                        _logger.LogError(ex, $"Error processing article: {record.Title}");
                    }
                }

                return Json(new
                {
                    success = true,
                    summary = new
                    {
                        total = summary.Created + summary.Skipped + summary.Errors,
                        created = summary.Created,
                        skipped = summary.Skipped,
                        errors = summary.Errors,
                       // createdArticles = summary.CreatedArticles,
                        createdYearFolders = summary.CreatedYearFolders,
                       // uploadedMedia = summary.UploadedMedia,
                        errorMessages = summary.ErrorMessages
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Fatal error during article import");
                return Json(new { success = false, message = ex.Message });
            }
        }

        public async Task<IActionResult> ProcessAllArticles()
        {
            const string articleLinksPath = @"C:\ABP Repo Archive\Migration\ArticleLinks.txt";
            var results = new List<object>();
            var errors = new List<object>();

            try
            {
                if (!System.IO.File.Exists(articleLinksPath))
                {
                    return Json(new { success = false, error = "ArticleLinks.txt file not found" });
                }

                var lines = await System.IO.File.ReadAllLinesAsync(articleLinksPath);
                var totalArticles = lines.Length;
                var processedCount = 0;

                foreach (var line in lines)
                {
                    if (string.IsNullOrWhiteSpace(line))
                        continue;

                    try
                    {
                        // Split by comma to get URL and Region
                        var parts = line.Split(',');
                        if (parts.Length >= 2)
                        {
                            var url = parts[0].Trim();
                            var region = parts[1].Trim();

                            // Call ExtractArticleData for each URL
                            var articleData = await ExtractArticleDataAsync(url, region);

                            var result = ImportArticleData(articleData);

                            processedCount++;

                            results.Add(new
                            {
                                url = url,
                                region = region,
                                success = true,
                                data = articleData
                            });

                            // Optional: Add a small delay to avoid overwhelming the server
                            await Task.Delay(500);
                        }
                    }
                    catch (Exception ex)
                    {
                        errors.Add(new
                        {
                            line = line,
                            error = ex.Message
                        });
                    }
                }

                return Json(new
                {
                    success = true,
                    totalProcessed = processedCount,
                    totalErrors = errors.Count,
                    // results = results,
                    errors = errors
                });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, error = ex.Message });
            }
        }

        public static string ExtractName(string url)
        {
            // Remove leading/trailing slashes
            url = url.Trim('/');

            // Split by slash and get the last segment (the slug)
            string[] segments = url.Split('/');
            string slug = segments[segments.Length - 1];

            // Replace hyphens with spaces
            string title = slug.Replace('-', ' ');

            // Capitalize each word properly
            TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;
            title = textInfo.ToTitleCase(title);

            // Handle special cases for common words that should be lowercase
            string[] lowercaseWords = { "a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", "with", "from", "of", "in", "s" };

            string[] words = title.Split(' ');
            for (int i = 1; i < words.Length; i++) // Start from 1 to keep first word capitalized
            {
                if (lowercaseWords.Contains(words[i].ToLower()))
                {
                    words[i] = words[i].ToLower();
                }
            }

            // Handle possessive 's (change "S" to "'s")
            for (int i = 0; i < words.Length; i++)
            {
                if (i > 0 && words[i].Equals("s", StringComparison.OrdinalIgnoreCase) &&
                    !words[i - 1].EndsWith("'"))
                {
                    words[i - 1] = words[i - 1] + "'s";
                    words[i] = null; // Mark for removal
                }
            }

            // Remove null entries and join
            title = string.Join(" ", words.Where(w => w != null));

            // Add colons where appropriate (after common title patterns)
            title = Regex.Replace(title, @"\b(from|to|how|why|what|when|where)\b(.+?)\b(to|from|with|in|on|at)\b",
                "$1$2: $3", RegexOptions.IgnoreCase);

            return title;
        }

        public async Task<IActionResult> ExtractArticleData(string url, string region)
        {
            try
            {
                var articleData = await ExtractArticleDataAsync(url, region);

                var result = ImportArticleData(articleData);

                return result;
                // return Json(new { success = true});
            }
            catch (Exception ex)
            {
                return Json(new { success = false, error = ex.Message });
            }
        }

        private async Task<ArticleData> ExtractArticleDataAsync(string url, string region)
        {
            // Ensure IMAGES_BASE_PATH directory exists
            if (!Directory.Exists(IMAGES_BASE_PATH))
            {
                Directory.CreateDirectory(IMAGES_BASE_PATH);
            }

            var articleData = new ArticleData
            {
                Name = ExtractName(url),
                Region = region,
                ArticleDataItems = new List<ArticleDataItem>()
            };

            // Extract NewsMediaPath from URL
            articleData.NewsMediaPath = ExtractNewsMediaPath(url);

            // Extract Year from URL
            articleData.Year = ExtractYearFromUrl(url);

            // Fetch the HTML content
            var fullUrl = BASE_URL + url;
            var html = await _httpClient.GetStringAsync(fullUrl);

            // Load HTML document
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(html);

            // Extract Title
            var titleNode = htmlDoc.DocumentNode.SelectSingleNode("//h1[contains(@class, 'banner__title') and contains(@class, 'banner__title--article')]");
            articleData.Title = HttpUtility.HtmlDecode(titleNode?.InnerText.Trim());

            // Extract Category - from span with class banner__category
            var categoryNode = htmlDoc.DocumentNode.SelectSingleNode("//span[contains(@class, 'banner__category')]");
            articleData.Category = categoryNode?.InnerText.Trim();

            // Extract SubTitle - from span with class banner__category-date
            var subTitleNode = htmlDoc.DocumentNode.SelectSingleNode("//span[contains(@class, 'banner__category-date')]");
            articleData.SubTitle = HttpUtility.HtmlDecode(subTitleNode?.InnerText.Trim());

            // Extract Date
            var dateNode = htmlDoc.DocumentNode.SelectSingleNode("//span[contains(@class, 'banner__date')]");
            if (dateNode != null)
            {
                var dateText = dateNode.InnerText.Trim();
                if (DateTime.TryParse(dateText, out DateTime parsedDate))
                {
                    articleData.Date = parsedDate;
                }
            }

            // Extract and Download Banner Image
            var bannerNode = htmlDoc.DocumentNode.SelectSingleNode("//div[contains(@class, 'banner') and contains(@class, 'banner--big')]");
            if (bannerNode != null)
            {
                var style = bannerNode.GetAttributeValue("style", "");
                var imageUrl = ExtractBackgroundImageUrl(style);
                if (!string.IsNullOrEmpty(imageUrl))
                {
                    articleData.BanerImageId = await DownloadImageAsync(imageUrl);
                }
            }

            // Extract SEO Title
            var titleTag = htmlDoc.DocumentNode.SelectSingleNode("//head/title");
            if (titleTag != null)
            {
                articleData.SEOTitle = HttpUtility.HtmlDecode(titleTag.InnerText.Replace("Associated British Ports |", "").Trim());
            }

            // Extract SEO Description
            var metaDesc = htmlDoc.DocumentNode.SelectSingleNode("//meta[@name='description']");
            articleData.SEODescription = HttpUtility.HtmlDecode(metaDesc?.GetAttributeValue("content", ""));

            // Extract Article Content Items
            var wrapNode = htmlDoc.DocumentNode.SelectSingleNode("//div[contains(@class, 'wrap') and contains(@class, 'wrap--small')]");
            if (wrapNode != null)
            {
                await ExtractArticleContentItems(wrapNode, articleData.ArticleDataItems);

                if (articleData.ArticleDataItems != null)
                {
                    // Process Rich Text Media for each item
                    foreach (var item in articleData.ArticleDataItems)
                    {
                        if (!string.IsNullOrEmpty(item.RichText))
                        {
                            item.RichText = await ProcessRichTextMediaAsync(item.RichText);
                        }
                    }
                }
            }


            return articleData;
        }

        private async Task<string> ProcessRichTextMediaAsync(string richText)
        {
            if (string.IsNullOrEmpty(richText))
                return richText;

            var processedText = richText;

            // Process images in <img> tags
            var imgRegex = new Regex(@"<img[^>]*src=[""']([^""']+)[""'][^>]*>", RegexOptions.IgnoreCase);
            var imgMatches = imgRegex.Matches(richText);

            foreach (Match match in imgMatches)
            {
                var fullImgTag = match.Value;
                var imgSrc = match.Groups[1].Value;

                // Check if it's an internal ABP link
                if (IsInternalAbpUrl(imgSrc))
                {
                    var fullUrl = imgSrc.StartsWith("http") ? imgSrc : BASE_URL + imgSrc;

                    try
                    {
                        var mediaId = await DownloadImageAsync(fullUrl);
                        if (!string.IsNullOrEmpty(mediaId))
                        {
                            // Replace the src with <mediaid>uniqueId</mediaid>
                            var newImgTag = fullImgTag.Replace(imgSrc, $"<mediaid>{mediaId}</mediaid>");
                            processedText = processedText.Replace(fullImgTag, newImgTag);
                        }
                    }
                    catch (Exception ex)
                    {
                        // Log error but continue processing
                    }
                }
            }

            // Process PDFs and other documents in <a> tags
            var linkRegex = new Regex(@"<a[^>]*href=[""']([^""']+\.(?:pdf|doc|docx|xls|xlsx|ppt|pptx))[""'][^>]*>", RegexOptions.IgnoreCase);
            var linkMatches = linkRegex.Matches(richText);

            foreach (Match match in linkMatches)
            {
                var fullLinkTag = match.Value;
                var linkHref = match.Groups[1].Value;

                // Check if it's an internal ABP link
                if (IsInternalAbpUrl(linkHref))
                {
                    var fullUrl = linkHref.StartsWith("http") ? linkHref : BASE_URL + linkHref;

                    try
                    {
                        var mediaId = await DownloadDocumentAsync(fullUrl);
                        if (!string.IsNullOrEmpty(mediaId))
                        {
                            // Replace the href with <mediaid>uniqueId</mediaid>
                            var newLinkTag = fullLinkTag.Replace(linkHref, $"<mediaid>{mediaId}</mediaid>");
                            processedText = processedText.Replace(fullLinkTag, newLinkTag);
                        }
                    }
                    catch (Exception ex)
                    {
                        // Log error but continue processing
                    }
                }
            }

            return processedText;
        }

        private bool IsInternalAbpUrl(string url)
        {
            if (string.IsNullOrEmpty(url))
                return false;

            // Check if it's a relative URL (starts with /)
            if (url.StartsWith("/"))
                return true;

            // Check if it contains abports.co.uk domain
            if (url.Contains("abports.co.uk"))
                return true;

            return false;
        }

        private string ExtractNewsMediaPath(string url)
        {
            if (url.Contains("/news-and-media/articles-and-blog/"))
            {
                return "Articles And Blog";
            }
            else if (url.Contains("/news-and-media/latest-news/"))
            {
                return "Latest News";
            }
            return null;
        }

       

        private string ExtractYearFromUrl(string url)
        {
            var match = Regex.Match(url, @"/(\d{4})/");
            return match.Success ? match.Groups[1].Value : null;
        }

        private string ExtractBackgroundImageUrl(string style)
        {
            var match = Regex.Match(style, @"url\(['""]?([^'""]+)['""]?\)");
            if (match.Success)
            {
                var imageUrl = match.Groups[1].Value;
                if (!imageUrl.StartsWith("http"))
                {
                    imageUrl = BASE_URL + imageUrl;
                }
                return imageUrl;
            }
            return null;
        }

        private async Task<string> DownloadDocumentAsync(string documentUrl)
        {
            try
            {
                var uniqueId = Guid.NewGuid().ToString();
                var folderPath = Path.Combine(IMAGES_BASE_PATH, uniqueId);
                Directory.CreateDirectory(folderPath);

                var documentBytes = await _httpClient.GetByteArrayAsync(documentUrl);

                // Get file extension from URL
                var uri = new Uri(documentUrl);
                var extension = Path.GetExtension(uri.LocalPath.Split('?')[0]);

                var filenameWithoutExtension = Path.GetFileNameWithoutExtension(uri.LocalPath.Split('?')[0]);

                if (string.IsNullOrEmpty(extension))
                {
                    extension = ".pdf"; // Default to PDF if no extension found
                }

                var fileName = filenameWithoutExtension + extension;
                var filePath = Path.Combine(folderPath, fileName);

                await System.IO.File.WriteAllBytesAsync(filePath, documentBytes);

                return uniqueId;
            }
            catch (Exception ex)
            {
                // Log error
                return null;
            }
        }

        private async Task<string> DownloadImageAsync(string imageUrl)
        {
            try
            {
                var uniqueId = Guid.NewGuid().ToString();
                var folderPath = Path.Combine(IMAGES_BASE_PATH, uniqueId);
                Directory.CreateDirectory(folderPath);

                var imageBytes = await _httpClient.GetByteArrayAsync(imageUrl);
                var extension = Path.GetExtension(imageUrl.Split('?')[0]);

                var filenameWithoutExtension = Path.GetFileNameWithoutExtension(imageUrl.Split('?')[0]);

                if (string.IsNullOrEmpty(extension))
                {
                    extension = ".jpg";
                }

                var fileName = filenameWithoutExtension + extension;
                var filePath = Path.Combine(folderPath, fileName);

                await System.IO.File.WriteAllBytesAsync(filePath, imageBytes);

                return uniqueId;
            }
            catch (Exception ex)
            {
                // Log error
                return null;
            }
        }

        private async Task ExtractArticleContentItems(HtmlNode wrapNode, List<ArticleDataItem> items)
        {
            foreach (var childNode in wrapNode.ChildNodes)
            {
                if (childNode.NodeType != HtmlNodeType.Element)
                    continue;

                // Handle inline-image with text wrapper
                if (childNode.HasClass("inline-image"))
                {
                    var item = new ArticleDataItem
                    {
                        ArticleDataType = ArticleContentTypes.RichTextAndImage
                    };

                    // Extract image
                    var imgNode = childNode.SelectSingleNode(".//img");
                    if (imgNode != null)
                    {
                        var imgSrc = imgNode.GetAttributeValue("src", "");
                        var imgAlt = imgNode.GetAttributeValue("alt", "");

                        if (!string.IsNullOrEmpty(imgSrc))
                        {
                            if (!imgSrc.StartsWith("http"))
                            {
                                imgSrc = BASE_URL + imgSrc;
                            }
                            var uniqueId = await DownloadImageAsync(imgSrc);
                            item.ImageId = uniqueId;
                        }

                        // Use alt as title if available
                        if (!string.IsNullOrEmpty(imgAlt))
                        {
                            item.Title = imgAlt;
                        }
                    }

                    // Extract caption/text from inline-image__text-wrapper
                    var textWrapperNode = childNode.SelectSingleNode(".//div[contains(@class, 'inline-image__text-wrapper')]//div[contains(@class, 'rte')]");
                    if (textWrapperNode != null)
                    {
                        var rte = textWrapperNode.InnerHtml.Trim();
                        if (!string.IsNullOrEmpty(rte))
                        {
                            item.RichText = HttpUtility.HtmlDecode(rte);
                        }
                    }

                    items.Add(item);
                }
                // Handle block-quote
                else if (childNode.HasClass("block") && childNode.HasClass("block-quote"))
                {
                    var item = new ArticleDataItem
                    {
                        ArticleDataType = ArticleContentTypes.Quote
                    };

                    // Extract quote text from blockquote (without child nodes)
                    var quoteTextNode = childNode.SelectSingleNode(".//blockquote[contains(@class, 'quote__text')]");
                    if (quoteTextNode != null)
                    {
                        var quoteText = quoteTextNode.InnerText.Trim();
                        if (!string.IsNullOrEmpty(quoteText))
                        {
                            item.Text = HttpUtility.HtmlDecode(quoteText);
                        }
                    }

                    // Extract quote name and position
                    var nameNode = childNode.SelectSingleNode(".//span[contains(@class, 'quote__name')]");
                    var positionNode = childNode.SelectSingleNode(".//span[contains(@class, 'quote__position')]");

                    if (nameNode != null)
                    {
                        item.Title = nameNode.InnerText.Trim();
                    }

                    if (positionNode != null)
                    {
                        item.Caption = positionNode.InnerText.Trim();
                    }

                    // Extract quote text from rte
                    var rteNode = childNode.SelectSingleNode(".//div[contains(@class, 'rte')]");
                    if (rteNode != null)
                    {
                        var rteContent = rteNode.InnerHtml.Trim();
                        if (!string.IsNullOrEmpty(rteContent))
                        {
                            item.RichText = HttpUtility.HtmlDecode(rteContent);
                        }
                    }

                    items.Add(item);
                }
                // Handle standalone image-wrapper
                else if (childNode.HasClass("image-wrapper"))
                {
                    var imageNode = childNode.SelectSingleNode(".//div[contains(@class, 'banner') and contains(@class, 'banner--big')]");
                    if (imageNode == null)
                    {
                        // Try to find img tag
                        var imgTag = childNode.SelectSingleNode(".//img");
                        if (imgTag != null)
                        {
                            var imgSrc = imgTag.GetAttributeValue("src", "");
                            var imgAlt = imgTag.GetAttributeValue("alt", "");

                            if (!string.IsNullOrEmpty(imgSrc))
                            {
                                if (!imgSrc.StartsWith("http"))
                                {
                                    imgSrc = BASE_URL + imgSrc;
                                }
                                var uniqueId = await DownloadImageAsync(imgSrc);
                                if (!string.IsNullOrEmpty(uniqueId))
                                {
                                    items.Add(new ArticleDataItem
                                    {
                                        ArticleDataType = ArticleContentTypes.Image,
                                        ImageId = uniqueId,
                                        Title = imgAlt
                                    });
                                }
                            }
                        }
                    }
                    else
                    {
                        var style = imageNode.GetAttributeValue("style", "");
                        var imageUrl = ExtractBackgroundImageUrl(style);
                        if (!string.IsNullOrEmpty(imageUrl))
                        {
                            var uniqueId = await DownloadImageAsync(imageUrl);
                            if (!string.IsNullOrEmpty(uniqueId))
                            {
                                items.Add(new ArticleDataItem
                                {
                                    ArticleDataType = ArticleContentTypes.Image,
                                    ImageId = uniqueId
                                });
                            }
                        }
                    }
                }
                // Handle standalone RTE content
                else if (childNode.HasClass("rte"))
                {
                    var rteContent = childNode.InnerHtml.Trim();
                    if (!string.IsNullOrEmpty(rteContent))
                    {
                        // Decode HTML entities (e.g., &#163; to £)
                        rteContent = HttpUtility.HtmlDecode(rteContent);

                        items.Add(new ArticleDataItem
                        {
                            ArticleDataType = ArticleContentTypes.RichText,
                            RichText = rteContent
                        });
                    }
                }
            }
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _httpClient?.Dispose();
            }
            base.Dispose(disposing);
        }

        private JsonResult ImportArticleData(ArticleData? articleData)
        {
            var summary = new ImportSummary();

            if (articleData == null)
            {
                return Json(new { success = false, message = "Article Data not found" });
            }

            try
            {
                _logger.LogInformation("Starting article import from CSV");

                // Find Abports root node
                var abportsNode = FindAbportsNode();
                if (abportsNode == null)
                {
                    return Json(new { success = false, message = "Abports root node not found" });
                }

                // Navigate to Articles And Blog folder
                var articlesAndBlogNode = FindOrCreatePath(abportsNode, new[] { "News And Media", articleData.NewsMediaPath ?? "" });
                if (articlesAndBlogNode == null)
                {
                    return Json(new { success = false, message = "Could not find or create Articles And Blog path" });
                }

                // Find/Create Media folders
                var mediaYearFolders = new Dictionary<string, IMedia>();

                //// Read and process CSV
                //if (!System.IO.File.Exists(CSV_FILE_PATH))
                //{
                //    return Json(new { success = false, message = $"CSV file not found at {CSV_FILE_PATH}" });
                //}

                var record = articleData;

                try
                {
                    _logger.LogInformation($"Processing article: {record.Title}");

                    // Get or create year folder
                    var yearFolder = GetOrCreateYearFolder(articlesAndBlogNode, record.Year, summary);

                    // Check if article already exists
                    if (ArticleExists(yearFolder, record.Title))
                    {
                        summary.Skipped++;
                        _logger.LogInformation($"Skipped (already exists): {record.Title}");
                    }

                    // Get or create media year folder
                    if (!mediaYearFolders.ContainsKey(record.Year))
                    {
                        mediaYearFolders[record.Year] = GetOrCreateMediaYearFolder(articleData?.NewsMediaPath, record.Year, summary);
                    }
                    var mediaYearFolder = mediaYearFolders[record.Year];

                    // Upload media files
                    IMedia? bannerMedia = null;
                    //IMedia? mainMedia = null;

                    if (!string.IsNullOrEmpty(record.BanerImageId))
                    {
                        bannerMedia = UploadMedia(record.BanerImageId, mediaYearFolder, summary);
                    }

                    //if (!string.IsNullOrEmpty(record.mail))
                    //{
                    //    mainMedia = UploadImage(record.MainImageId, mediaYearFolder, summary);
                    //}

                    // Create article
                    var article = CreateArticleFromData(yearFolder, record, bannerMedia, summary, mediaYearFolder);

                    if (article != null)
                    {
                        summary.Created++;
                        summary.CreatedArticles.Add(record.Title);
                        _logger.LogInformation($"Created Article: {record.Title}");
                    }
                }
                catch (Exception ex)
                {
                    summary.Errors++;
                    summary.ErrorMessages.Add($"Error processing {record.Title}: {ex.Message}");
                    _logger.LogError(ex, $"Error processing article: {record.Title}");
                }

                return Json(new
                {
                    success = true,
                    summary = new
                    {
                        total = summary.Created + summary.Skipped + summary.Errors,
                        created = summary.Created,
                        skipped = summary.Skipped,
                        errors = summary.Errors,
                        createdArticles = summary.CreatedArticles,
                        createdYearFolders = summary.CreatedYearFolders,
                        uploadedMedia = summary.UploadedMedia,
                        errorMessages = summary.ErrorMessages
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Fatal error during article import");
                return Json(new { success = false, message = ex.Message });
            }
        }

        private async Task<IContent?> CreateArticleFromData(IContent parent, ArticleData record, IMedia? bannerMedia,
           ImportSummary summary, IMedia mediaYearFolder)
        {
            try
            {
                string regions = record.Region ?? "";

                var article = _contentService.Create(record.Name ?? "", parent.Id, ARTICLE_ALIAS);

                // Set basic properties
                article.SetValue("title", record.Title);
                article.SetValue("subtitle", record.SubTitle);
                article.SetValue("metaName", record.SEOTitle);
                article.SetValue("metaDescription", record.SEODescription);

                if (record.Date != null)
                {
                    var articleDate = (DateTime)record.Date;
                    article.SetValue("articleDate", articleDate);
                }

                // Set main image (banner)
                if (bannerMedia != null)
                {
                    var mainImageValue = new List<object>
                    {
                        new
                        {
                            key = Guid.NewGuid(),
                            mediaKey = bannerMedia.Key,
                            crops = Array.Empty<object>(),
                            focalPoint = (object?)null
                        }
                    };
                    article.SetValue("mainImage", System.Text.Json.JsonSerializer.Serialize(mainImageValue));
                }

                // Set categories
                if (!string.IsNullOrEmpty(record.Category))
                {
                    var categories = record.Category.Split(',', StringSplitOptions.RemoveEmptyEntries)
                        .Select(c => c.Trim())
                        .ToList();

                    var ctagoryIds = GetCtagoryIds(categories);


                    if (ctagoryIds != null && ctagoryIds.Any())
                    {
                        article.SetValue("categories", string.Join(", ", ctagoryIds));
                    }


                    // This is a simplified version
                    _logger.LogInformation($"Categories for {record.Title}: {string.Join(", ", categories)}");
                }


                if (!string.IsNullOrEmpty(regions))
                {
                    var regionsList = regions.Split(',', StringSplitOptions.RemoveEmptyEntries)
                        .Select(c => c.Trim())
                        .ToList();

                    var regionsIds = GetRegionIds(regionsList);


                    if (regionsIds != null && regionsIds.Any())
                    {
                        article.SetValue("region", string.Join(", ", regionsIds));
                    }


                    // This is a simplified version
                    _logger.LogInformation($"Regions for {record.Title}: {string.Join(", ", regionsList)}");
                }

                var contentItems = new List<ArticleContent>();

                await CreateContentRowsBlockList(article, record.ArticleDataItems, mediaYearFolder, summary);

                //CreateContentRowsBlockList(mainMedia, record.Richtext);
                // Save and publish
                var result = _contentService.Save(article);
                _contentService.Publish(article, new[] { "*" });
                if (result.Success)
                {
                    return article;
                }
                else
                {
                    _logger.LogError($"Failed to publish article: {string.Join(", ", result.EventMessages.GetAll().Select(m => m.Message))}");
                    return null;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error creating article: {record.Title}");
                return null;
            }
        }


        /// <summary>
        /// Import articles from CSV file
        /// GET: /umbraco/surface/ArticleImport/ImportArticles
        /// </summary>
        [HttpGet]
        public IActionResult ImportArticles(string regions = "Humber")
        {
            var summary = new ImportSummary();

            try
            {
                _logger.LogInformation("Starting article import from CSV");

                // Find Abports root node
                var abportsNode = FindAbportsNode();
                if (abportsNode == null)
                {
                    return Json(new { success = false, message = "Abports root node not found" });
                }

                // Navigate to Articles And Blog folder
                var articlesAndBlogNode = FindOrCreatePath(abportsNode, new[] { "News And Media", "Articles And Blog" });
                if (articlesAndBlogNode == null)
                {
                    return Json(new { success = false, message = "Could not find or create Articles And Blog path" });
                }

                // Find/Create Media folders
                var mediaYearFolders = new Dictionary<string, IMedia>();

                // Read and process CSV
                if (!System.IO.File.Exists(CSV_FILE_PATH))
                {
                    return Json(new { success = false, message = $"CSV file not found at {CSV_FILE_PATH}" });
                }

                var records = ReadCsvFile();

                foreach (var record in records)
                {
                    try
                    {
                        _logger.LogInformation($"Processing article: {record.Title}");

                        // Get or create year folder
                        var yearFolder = GetOrCreateYearFolder(articlesAndBlogNode, record.Year, summary);

                        // Check if article already exists
                        if (ArticleExists(yearFolder, record.Title))
                        {
                            summary.Skipped++;
                            _logger.LogInformation($"Skipped (already exists): {record.Title}");
                            continue;
                        }

                        // Get or create media year folder
                        if (!mediaYearFolders.ContainsKey(record.Year))
                        {
                            mediaYearFolders[record.Year] = GetOrCreateMediaYearFolder("Articles And Blog", record.Year, summary);
                        }
                        var mediaYearFolder = mediaYearFolders[record.Year];

                        // Upload media files
                        IMedia? bannerMedia = null;
                        IMedia? mainMedia = null;

                        if (!string.IsNullOrEmpty(record.BannerImageId))
                        {
                            bannerMedia = UploadMedia(record.BannerImageId, mediaYearFolder, summary);
                        }

                        if (!string.IsNullOrEmpty(record.MainImageId))
                        {
                            mainMedia = UploadMedia(record.MainImageId, mediaYearFolder, summary);
                        }

                        // Create article
                        var article = CreateArticle(yearFolder, record, bannerMedia, mainMedia, summary, regions);

                        if (article != null)
                        {
                            summary.Created++;
                            summary.CreatedArticles.Add(record.Title);
                            _logger.LogInformation($"Created Article: {record.Title}");
                        }
                    }
                    catch (Exception ex)
                    {
                        summary.Errors++;
                        summary.ErrorMessages.Add($"Error processing {record.Title}: {ex.Message}");
                        _logger.LogError(ex, $"Error processing article: {record.Title}");
                    }
                }

                return Json(new
                {
                    success = true,
                    summary = new
                    {
                        total = summary.Created + summary.Skipped + summary.Errors,
                        created = summary.Created,
                        skipped = summary.Skipped,
                        errors = summary.Errors,
                        createdArticles = summary.CreatedArticles,
                        createdYearFolders = summary.CreatedYearFolders,
                        uploadedMedia = summary.UploadedMedia,
                        errorMessages = summary.ErrorMessages
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Fatal error during article import");
                return Json(new { success = false, message = ex.Message });
            }
        }

        private IContent? FindAbportsNode()
        {
            var rootNodes = _contentService.GetRootContent();
            return rootNodes.FirstOrDefault(x => x.Name.Equals("Abports", StringComparison.OrdinalIgnoreCase));
        }

        private IContent? FindOrCreatePath(IContent? parent, string[] pathSegments)
        {
            if (parent == null)
            {
                return null;
            }
            var currentNode = parent;

            foreach (var segment in pathSegments)
            {
                var children = _contentService.GetPagedChildren(currentNode.Id, 0, int.MaxValue, out _);
                var childNode = children.FirstOrDefault(x => x.Name.Equals(segment, StringComparison.OrdinalIgnoreCase));

                if (childNode == null)
                {
                    _logger.LogWarning($"Path segment not found: {segment}");
                    return null;
                }

                currentNode = childNode;
            }

            return currentNode;
        }

        private IContent GetOrCreateYearFolder(IContent parent, string year, ImportSummary summary)
        {
            var children = _contentService.GetPagedChildren(parent.Id, 0, int.MaxValue, out _);
            var yearFolder = children.FirstOrDefault(x => x.Name.Equals(year, StringComparison.OrdinalIgnoreCase));

            if (yearFolder == null)
            {
                // Create new Repository folder for the year
                yearFolder = _contentService.Create(year, parent.Id, REPOSITORY_ALIAS);
                _contentService.Save(yearFolder);
                _contentService.Publish(yearFolder, new[] { "*" });
                summary.CreatedYearFolders.Add(year);
                _logger.LogInformation($"Created Year folder: {year}");
            }

            return yearFolder;
        }

        private bool ArticleExists(IContent parent, string title)
        {
            var children = _contentService.GetPagedChildren(parent.Id, 0, int.MaxValue, out _);
            return children.Any(x => x.Name.Equals(title, StringComparison.OrdinalIgnoreCase));
        }

        private IMedia GetOrCreateMediaYearFolder(string? newsMediaPath, string year, ImportSummary summary)
        {
            // Find or create: Media > Abports > News And Media > Blogs And Article > {Year}
            var mediaRoot = _mediaService.GetRootMedia();

            var abportsMedia = FindOrCreateMediaFolder(null, MEDIA_ABPORTS_NAME, mediaRoot);
            var newsAndMediaFolder = FindOrCreateMediaFolder(abportsMedia, MEDIA_NEWS_AND_MEDIA_NAME);
            var blogsAndArticleFolder = FindOrCreateMediaFolder(newsAndMediaFolder, newsMediaPath ?? "");

            var yearFolder = FindOrCreateMediaFolder(blogsAndArticleFolder, year);

            return yearFolder;
        }

        private IMedia GetOrCreateInvestorRelationMediaYearFolder(string? downloadPath, string year, ImportSummary summary)
        {
            // Find or create: Media > Abports > News And Media > Blogs And Article > {Year}
            var mediaRoot = _mediaService.GetRootMedia();

            var abportsMedia = FindOrCreateMediaFolder(null, MEDIA_ABPORTS_NAME, mediaRoot);
            var newsAndMediaFolder = FindOrCreateMediaFolder(abportsMedia, INVESTOR_RELATION_NAME);
            var blogsAndArticleFolder = FindOrCreateMediaFolder(newsAndMediaFolder, downloadPath ?? "");

            var yearFolder = FindOrCreateMediaFolder(blogsAndArticleFolder, year);

            return yearFolder;
        }

        private IMedia FindOrCreateMediaFolder(IMedia? parent, string folderName, IEnumerable<IMedia>? existingMedia = null)
        {
            IMedia? folder = null;

            if (existingMedia != null)
            {
                folder = existingMedia.FirstOrDefault(x => x.Name.Equals(folderName, StringComparison.OrdinalIgnoreCase));
            }
            else if (parent != null)
            {
                var children = _mediaService.GetPagedChildren(parent.Id, 0, int.MaxValue, out _);
                folder = children.FirstOrDefault(x => x.Name.Equals(folderName, StringComparison.OrdinalIgnoreCase));
            }

            if (folder == null)
            {
                folder = _mediaService.CreateMedia(folderName, parent?.Id ?? -1, "Folder");
                _mediaService.Save(folder);
                _logger.LogInformation($"Created Media folder: {folderName}");
            }

            return folder;
        }

        private IMedia? UploadMedia(string? imageId, IMedia parentFolder, ImportSummary summary)
        {
            try
            {
                if (string.IsNullOrEmpty(imageId))
                {
                    return null;
                }
                var imageFolderPath = Path.Combine(IMAGES_BASE_PATH, imageId);

                if (!Directory.Exists(imageFolderPath))
                {
                    _logger.LogWarning($"Image folder not found: {imageFolderPath}");
                    return null;
                }

                var imageFiles = Directory.GetFiles(imageFolderPath, "*.*")
                    .Where(f => f.EndsWith(".jpg", StringComparison.OrdinalIgnoreCase) ||
                               f.EndsWith(".jpeg", StringComparison.OrdinalIgnoreCase) ||
                               f.EndsWith(".png", StringComparison.OrdinalIgnoreCase) ||
                               f.EndsWith(".gif", StringComparison.OrdinalIgnoreCase) 
                               )
                    .ToList();

                if (!imageFiles.Any())
                {
                    _logger.LogWarning($"No image files found in: {imageFolderPath}");
                    return null;
                }

                var imageFile = imageFiles.First();
                var fileName = Path.GetFileName(imageFile);

                // Read the file
                // byte[] fileBytes = System.IO.File.ReadAllBytes(localFilePath);

                // Check if media already exists
                var existingMedia = _mediaService.GetPagedChildren(parentFolder.Id, 0, int.MaxValue, out _)
                    .FirstOrDefault(x => x.Name.Equals(fileName, StringComparison.OrdinalIgnoreCase));

                //if (existingMedia != null)
                //{
                //    return existingMedia;
                //}

                var media = UploadImageFromLocalFolder(imageFile, parentFolder.Id);

                return media;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error uploading image {imageId}");
                return null;
            }
        }

        private IMedia? UploadFile(string? imageId, IMedia parentFolder, ImportSummary summary)
        {
            try
            {
                if (string.IsNullOrEmpty(imageId))
                {
                    return null;
                }
                var imageFolderPath = Path.Combine(IMAGES_BASE_PATH, imageId);

                if (!Directory.Exists(imageFolderPath))
                {
                    _logger.LogWarning($"Image folder not found: {imageFolderPath}");
                    return null;
                }

                var imageFiles = Directory.GetFiles(imageFolderPath, "*.*")
                    .Where(f => f.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase))
                    .ToList();

                if (!imageFiles.Any())
                {
                    _logger.LogWarning($"No image files found in: {imageFolderPath}");
                    return null;
                }

                var imageFile = imageFiles.First();
                var fileName = Path.GetFileName(imageFile);

                // Read the file
                // byte[] fileBytes = System.IO.File.ReadAllBytes(localFilePath);

                // Check if media already exists
                var existingMedia = _mediaService.GetPagedChildren(parentFolder.Id, 0, int.MaxValue, out _)
                    .FirstOrDefault(x => x.Name.Equals(fileName, StringComparison.OrdinalIgnoreCase));

                //if (existingMedia != null)
                //{
                //    return existingMedia;
                //}

                var media = UploadFileFromLocalFolder(imageFile, parentFolder.Id);

                return media;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error uploading image {imageId}");
                return null;
            }
        }

        private IMedia UploadFileFromLocalFolder(string localFilePath, int parentMediaFolderId)
        {
            // Get the file name from the local path
            string fileName = Path.GetFileName(localFilePath);

            // Open the file stream
            using (var fileStream = System.IO.File.OpenRead(localFilePath))
            {
                // Create a new media item
                // The parentMediaFolderId specifies where in the media library the image should be placed.
                // Constants.Conventions.MediaTypes.Image is the alias for the default image media type.
                var media = _mediaService.CreateMedia(fileName, parentMediaFolderId, Constants.Conventions.MediaTypes.File);

                // Set the 'umbracoFile' property with the file stream
                // This handles the actual storage of the image file
                media.SetValue(_mediaFileManager, _mediaUrlGeneratorCollection, _shortStringHelper, _contentTypeBaseServiceProvider,
                               Constants.Conventions.Media.File, fileName, fileStream);

                // Save the media item to persist it in Umbraco
                _mediaService.Save(media);

                return media;
            }
        }

        private IMedia UploadImageFromLocalFolder(string localFilePath, int parentMediaFolderId)
        {
            // Get the file name from the local path
            string fileName = Path.GetFileName(localFilePath);

            // Open the file stream
            using (var fileStream = System.IO.File.OpenRead(localFilePath))
            {
                // Create a new media item
                // The parentMediaFolderId specifies where in the media library the image should be placed.
                // Constants.Conventions.MediaTypes.Image is the alias for the default image media type.
                var media = _mediaService.CreateMedia(fileName, parentMediaFolderId, Constants.Conventions.MediaTypes.Image);

                // Set the 'umbracoFile' property with the file stream
                // This handles the actual storage of the image file
                media.SetValue(_mediaFileManager, _mediaUrlGeneratorCollection, _shortStringHelper, _contentTypeBaseServiceProvider,
                               Constants.Conventions.Media.File, fileName, fileStream);

                // Save the media item to persist it in Umbraco
                _mediaService.Save(media);

                return media;
            }
        }

        private IContent? CreateDownloadItem(IContent parent, DownloadFileCsvRecord record, IMedia? fileMedia, DateTime date,
        ImportSummary summary)
        {
            try
            {
                var downloadItem = _contentService.Create(record.Title, parent.Id, DOWNLOAD_ITEM_ALIAS);

                // Set basic properties
                downloadItem.SetValue("title", record.Title);
                downloadItem.SetValue("date", date);

                // Set main image (banner)
                if (fileMedia != null)
                {
                    var fileValue = new List<object>
                    {
                        new
                        {
                            key = Guid.NewGuid(),
                            mediaKey = fileMedia.Key
                            //,
                            //crops = Array.Empty<object>(),
                            //focalPoint = (object?)null
                        }
                    };
                    downloadItem.SetValue("file", System.Text.Json.JsonSerializer.Serialize(fileValue));
                }

                // Set categories
                if (!string.IsNullOrEmpty(record.Type))
                {
                    var downloadItemTypeId = GetDownloadItemTypeId(record.Type);

                    downloadItem.SetValue("type", downloadItemTypeId);
                
                }

                var result = _contentService.Save(downloadItem);
                _contentService.Publish(downloadItem, new[] { "*" });
                if (result.Success)
                {
                    return downloadItem;
                }
                else
                {
                    _logger.LogError($"Failed to publish article: {string.Join(", ", result.EventMessages.GetAll().Select(m => m.Message))}");
                    return null;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error creating article: {record.Title}");
                return null;
            }
           
        }

        private IContent? CreateArticle(IContent parent, ArticleCsvRecord record, IMedia? bannerMedia, IMedia? mainMedia,
            ImportSummary summary, string regions)
        {
            try
            {
                var article = _contentService.Create(record.Title, parent.Id, ARTICLE_ALIAS);

                // Set basic properties
                article.SetValue("title", record.Title);
                article.SetValue("subtitle", record.SubTitle);


                if (DateTime.TryParseExact(record.Date,
                    new[] { "dd MMM yyyy", "d MMM yyyy", "dd MMMM yyyy", "d MMMM yyyy" },
                    CultureInfo.InvariantCulture,
                    DateTimeStyles.None,
                    out var articleDate))
                {
                    article.SetValue("articleDate", articleDate);
                }

                // Set main image (banner)
                if (bannerMedia != null)
                {
                    var mainImageValue = new List<object>
                    {
                        new
                        {
                            key = Guid.NewGuid(),
                            mediaKey = bannerMedia.Key,
                            crops = Array.Empty<object>(),
                            focalPoint = (object?)null
                        }
                    };
                    article.SetValue("mainImage", System.Text.Json.JsonSerializer.Serialize(mainImageValue));
                }

                // Set categories
                if (!string.IsNullOrEmpty(record.Category))
                {
                    var categories = record.Category.Split(',', StringSplitOptions.RemoveEmptyEntries)
                        .Select(c => c.Trim())
                        .ToList();

                    var ctagoryIds = GetCtagoryIds(categories);


                    if (ctagoryIds != null && ctagoryIds.Any())
                    {
                        article.SetValue("categories", string.Join(", ", ctagoryIds));
                    }


                    // This is a simplified version
                    _logger.LogInformation($"Categories for {record.Title}: {string.Join(", ", categories)}");
                }


                if (!string.IsNullOrEmpty(regions))
                {
                    var regionsList = regions.Split(',', StringSplitOptions.RemoveEmptyEntries)
                        .Select(c => c.Trim())
                        .ToList();

                    var regionsIds = GetRegionIds(regionsList);


                    if (regionsIds != null && regionsIds.Any())
                    {
                        article.SetValue("region", string.Join(", ", regionsIds));
                    }


                    // This is a simplified version
                    _logger.LogInformation($"Regions for {record.Title}: {string.Join(", ", regionsList)}");
                }

                //CreateContentRowsBlockList(article, new List<ArticleContent>
                //{
                //    new ArticleContent
                //    {
                //        ContentType = ArticleContentTypes.Image,
                //        Image = mainMedia
                //    },
                //    new ArticleContent
                //    {
                //        ContentType = ArticleContentTypes.RichText,
                //        RichText = record.Richtext
                //    }
                //});
                //CreateContentRowsBlockList(mainMedia, record.Richtext);
                // Save and publish
                var result = _contentService.Save(article);
                _contentService.Publish(article, new[] { "*" });
                if (result.Success)
                {
                    return article;
                }
                else
                {
                    _logger.LogError($"Failed to publish article: {string.Join(", ", result.EventMessages.GetAll().Select(m => m.Message))}");
                    return null;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error creating article: {record.Title}");
                return null;
            }
        }

        private GuidUdi? GetDownloadItemTypeId(string? itemTypeName)
        {
            if (string.IsNullOrEmpty(itemTypeName))
            {
                return null;
            }

            itemTypeName = itemTypeName.Trim().ToLower();

            var abportsNode = FindAbportsNode();
            var downloadItemTypes = FindOrCreatePath(abportsNode, new[] { "Repository", "Download Item Types" });

            var children = _contentService.GetPagedChildren(downloadItemTypes?.Id??0, 0, int.MaxValue, out _);

            var downloadItemTypeNode = children.FirstOrDefault(x => x.Name?.ToLower() == itemTypeName);

            if (downloadItemTypeNode == null)
            {
                return null;
            }

            var udid = new GuidUdi(Constants.UdiEntityType.Document, downloadItemTypeNode.Key);

            return udid;
        }

        private IList<GuidUdi>? GetCtagoryIds(IList<string>? categories)
        {
            if (categories == null || !categories.Any())
            {
                return null;
            }

            var abportsNode = FindAbportsNode();
            var subjectNode = FindOrCreatePath(abportsNode, new[] { "Repository", "Subject" });

            var children = _contentService.GetPagedChildren(subjectNode.Id, 0, int.MaxValue, out _);

            var catrgoryNodes = children.Where(x => categories.Contains(x.Name));

            if (catrgoryNodes == null || !catrgoryNodes.Any())
            {
                return null;
            }

            var udis = catrgoryNodes.Select(x => new GuidUdi(Constants.UdiEntityType.Document, x.Key)).ToList();

            return udis;
        }

        private IList<GuidUdi>? GetRegionIds(IList<string>? regions)
        {
            if (regions == null || !regions.Any())
            {
                return null;
            }

            var abportsNode = FindAbportsNode();
            var subjectNode = FindOrCreatePath(abportsNode, new[] { "Repository", "Region Container" });

            var children = _contentService.GetPagedChildren(subjectNode.Id, 0, int.MaxValue, out _);

            var catrgoryNodes = children.Where(x => regions.Contains(x.Name));

            if (catrgoryNodes == null || !catrgoryNodes.Any())
            {
                return null;
            }

            var udis = catrgoryNodes.Select(x => new GuidUdi(Constants.UdiEntityType.Document, x.Key)).ToList();

            return udis;
        }


        // The import method builds JSON and assigns it to the Block List property
        private async Task CreateContentRowsBlockList(IContent article, IList<ArticleDataItem>? articleDataItems,
            IMedia mediaYearFolder, ImportSummary summary)//IList<ArticleContent> contentItems
        {
            try
            {
                if (articleDataItems == null || !articleDataItems.Any())
                {
                    _logger?.LogWarning("No content items provided for Block List creation");
                    return;
                }

                // Get element type keys
                var richTextElementTypeKey = _contentTypeService.GetAll()
                    .FirstOrDefault(x => x.Alias == "richTextContent")?.Key;

                var imageElementTypeKey = _contentTypeService.GetAll()
                    .FirstOrDefault(x => x.Alias == "imageContent")?.Key;

                var richTextWithImageTypeKey = _contentTypeService.GetAll()
                   .FirstOrDefault(x => x.Alias == "richTextWithImage")?.Key;

                var quoteTypeKey = _contentTypeService.GetAll()
                    .FirstOrDefault(x => x.Alias == "quote")?.Key;

                if (richTextElementTypeKey == null || imageElementTypeKey == null || richTextWithImageTypeKey == null || quoteTypeKey == null)
                {
                    throw new InvalidOperationException("Element type keys not found");
                }

                var propertyAlias = "contentRows";
                var layoutItems = new List<object>();
                var contentDataItems = new List<object>();

                foreach (var articleDataItem in articleDataItems)
                {
                    var contentKey = Guid.NewGuid();
                    var contentUdi = $"umb://element/{contentKey:N}";

                    articleDataItem.RichText = RestoreRichTextMediaAsync(articleDataItem.RichText, mediaYearFolder, summary);

                    if (articleDataItem.ArticleDataType == ArticleContentTypes.RichText && !string.IsNullOrEmpty(articleDataItem.RichText))
                    {
                        // Create content data item with properties at root level
                        var blockItem = new
                        {
                            contentTypeKey = richTextElementTypeKey.Value,
                            udi = contentUdi,
                            content = articleDataItem.RichText // Your actual property alias

                        };
                        contentDataItems.Add(blockItem);

                        // Add to layout
                        layoutItems.Add(new { contentUdi = contentUdi });
                    }
                    else if (articleDataItem.ArticleDataType == ArticleContentTypes.Image)
                    {

                        var media = UploadMedia(articleDataItem.ImageId, mediaYearFolder, summary);

                        if (media == null)
                        {
                            _logger?.LogWarning($"Image upload failed for ID: {articleDataItem.ImageId}");
                            continue;
                        }

                        // Media Picker 3 format
                        var mediaValue = new[]
                        {
                            new
                            {
                                key = Guid.NewGuid(),
                                mediaKey = media.Key,
                                crops = new object[] { },
                                focalPoint = (object)null
                            }
                        };

                        var blockItem = new
                        {
                            contentTypeKey = imageElementTypeKey.Value,
                            udi = contentUdi,
                            image = mediaValue // Your actual property alias
                        };
                        contentDataItems.Add(blockItem);

                        // Add to layout
                        layoutItems.Add(new { contentUdi = contentUdi });
                    }
                    else if (articleDataItem.ArticleDataType == ArticleContentTypes.RichTextAndImage)
                    {

                        var media = UploadMedia(articleDataItem.ImageId, mediaYearFolder, summary);

                        object? mediaValue = null;

                        if (media != null)
                        {
                            // Media Picker 3 format
                            mediaValue = new[]
                           {
                             new
                             {
                                key = Guid.NewGuid(),
                                mediaKey = media.Key,
                                crops = new object[] { },
                                focalPoint = (object)null
                               }
                            };
                        }

                        var blockItem = new
                        {
                            contentTypeKey = richTextWithImageTypeKey.Value,
                            udi = contentUdi,
                            image = mediaValue, // Your actual property alias
                            text = articleDataItem.RichText
                        };
                        contentDataItems.Add(blockItem);

                        // Add to layout
                        layoutItems.Add(new { contentUdi = contentUdi });
                    }
                    else if (articleDataItem.ArticleDataType == ArticleContentTypes.Quote)
                    {


                        var blockItem = new
                        {
                            contentTypeKey = quoteTypeKey.Value,
                            udi = contentUdi,
                            authorName = articleDataItem.Title,
                            authorPosition = articleDataItem.Caption,
                            mainText = articleDataItem.RichText,
                            text = articleDataItem.Text
                        };
                        contentDataItems.Add(blockItem);

                        // Add to layout
                        layoutItems.Add(new { contentUdi = contentUdi });
                    }
                }

                // Build the complete block list structure
                var blockListValue = new
                {
                    layout = new Dictionary<string, object>
                {
                    { "Umbraco.BlockList", layoutItems }
                },
                    contentData = contentDataItems,
                    settingsData = new object[] { }
                };

                // Serialize to JSON
                var json = JsonConvert.SerializeObject(blockListValue, new JsonSerializerSettings
                {
                    // ContractResolver = new CamelCasePropertyNamesContractResolver(),
                    NullValueHandling = NullValueHandling.Ignore,
                    Formatting = Formatting.None
                });

                article.SetValue(propertyAlias, json);

                _logger?.LogInformation($"Created Block List for article: {article.Name} with {articleDataItems.Count} content items");
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error creating Block List");
                throw;
            }
        }

        private string? RestoreRichTextMediaAsync(string? richText, IMedia parentFolder, ImportSummary summary)// string year, string destinationBasePath
        {
            if (string.IsNullOrEmpty(richText))
                return null;

            var processedText = richText;

            // Find all <mediaid>uniqueId</mediaid> tags
            var mediaIdRegex = new Regex(@"<mediaid>([^<]+)</mediaid>", RegexOptions.IgnoreCase);
            var matches = mediaIdRegex.Matches(richText);

            foreach (Match match in matches)
            {
                var mediaIdTag = match.Value; // Full tag: <mediaid>abc-123</mediaid>
                var uniqueId = match.Groups[1].Value; // Just the ID: abc-123

                try
                {
                    var media = UploadMedia(uniqueId, parentFolder, summary);


                    if (media == null)
                    {
                        _logger.LogWarning($"Media upload failed for ID: {uniqueId}");
                        continue;
                    }

                    string? mediaUrl = GetMediaUrl(media);

                    // Replace <mediaid>uniqueId</mediaid> with the new URL
                    processedText = processedText.Replace(mediaIdTag, mediaUrl);


                }
                catch (Exception ex)
                {
                    // Log error but continue processing
                    // Could also leave the <mediaid> tag in place if upload fails
                }
            }

            return processedText;
        }

        private string? GetMediaUrl(IMedia? media)
        {
            if (media == null)
            {
                return string.Empty;
            }

            // Convert to IPublishedContent and get URL
            var publishedMedia = _publishedContentQuery.Media(media.Id);
            return publishedMedia?.Url() ?? string.Empty;


        }

        private Guid GetElementTypeKey(string alias)
        {
            // Helper method to get the element type key by alias
            // You'll need to replace these with your actual element type keys
            // You can find these in Umbraco backoffice or database

            var contentType = _contentTypeService.Get(alias);
            if (contentType != null)
            {
                return contentType.Key;
            }

            // Fallback - throw exception or return default
            throw new InvalidOperationException($"Element type with alias '{alias}' not found");
        }

        private string? CreateContentRowsBlockList(IMedia? mainMedia, string richtext)
        {
            try
            {
                var contentDataList = new List<object>();
                var layoutList = new List<object>();
                var exposeList = new List<object>();

                // Add Image + CTA Block if we have main media
                if (mainMedia != null)
                {
                    var imageBlockKey = Guid.NewGuid();

                    // You'll need to determine the correct contentTypeKey for your Image + CTA block
                    // This is a placeholder - get the actual GUID from your Umbraco instance
                    contentDataList.Add(new
                    {
                        key = imageBlockKey,
                        contentTypeKey = Guid.Parse("b17a1c6a-64c7-4cef-b3bc-5af1834fa3e9"), // Image with Rte and Cta
                        values = new[]
                        {
                            new
                            {
                                alias = "image",
                                value = new[]
                                {
                                    new
                                    {
                                        key = Guid.NewGuid(),
                                        mediaKey = mainMedia.Key,
                                        crops = Array.Empty<object>(),
                                        focalPoint = (object?)null
                                    }
                                }
                            }
                        }
                    });

                    layoutList.Add(new { contentKey = imageBlockKey });
                    exposeList.Add(new { contentKey = imageBlockKey, culture = (string?)null, segment = (string?)null });
                }

                // Add Rich Text Block
                if (!string.IsNullOrEmpty(richtext))
                {
                    var rteBlockKey = Guid.NewGuid();

                    contentDataList.Add(new
                    {
                        key = rteBlockKey,
                        contentTypeKey = Guid.Parse("dd183f78-7d69-4eda-9b4c-a25970583a28"), // Rich Text Content
                        values = new[]
                        {
                            new
                            {
                                alias = "richContent",
                                value = new
                                {
                                    markup = richtext,
                                    blocks = new
                                    {
                                        layout = new { },
                                        contentData = Array.Empty<object>(),
                                        settingsData = Array.Empty<object>(),
                                        expose = Array.Empty<object>()
                                    }
                                }
                            }
                        }
                    });

                    layoutList.Add(new { contentKey = rteBlockKey });
                    exposeList.Add(new { contentKey = rteBlockKey, culture = (string?)null, segment = (string?)null });
                }

                var blockListValue = new
                {
                    layout = new
                    {
                        __type = "Umbraco.Cms.Core.Models.Blocks.BlockListLayoutItem, Umbraco.Core",
                        Items = layoutList
                    },
                    contentData = contentDataList,
                    settingsData = Array.Empty<object>(),
                    expose = exposeList
                };

                return System.Text.Json.JsonSerializer.Serialize(blockListValue);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating content rows block list");
                return null;
            }
        }

        private List<ArticleCsvRecord> ReadCsvFile()
        {
            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = true,
                TrimOptions = TrimOptions.Trim,
                MissingFieldFound = null,
                Delimiter = "|", // Add this line to specify pipe as delimiter,
                                 // Add these configurations to handle multiline fields and bad data
                BadDataFound = null,  // Ignore bad data
                Mode = CsvMode.Escape  // Handle escaped delimiters properly
            };

            using var reader = new StreamReader(CSV_FILE_PATH);
            using var csv = new CsvReader(reader, config);

            return csv.GetRecords<ArticleCsvRecord>().ToList();
        }

        private List<DownloadFileCsvRecord> ReadDownloadFileCsvFile()
        {
            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = true,
                TrimOptions = TrimOptions.Trim,
                MissingFieldFound = null,
                Delimiter = ",", // Add this line to specify pipe as delimiter,
                                 // Add these configurations to handle multiline fields and bad data
                BadDataFound = null,  // Ignore bad data
                Mode = CsvMode.Escape  // Handle escaped delimiters properly
            };

            using var reader = new StreamReader(PDF_CSV_FILE_PATH);
            using var csv = new CsvReader(reader, config);

            return csv.GetRecords<DownloadFileCsvRecord>().ToList();
        }
    }

    // Model classes for Block List structure
    public class BlockEditorPropertyValue
    {
        [JsonProperty("contentData")]
        public List<BlockItemData> ContentData { get; set; } = new List<BlockItemData>();

        [JsonProperty("settingsData")]
        public List<BlockItemData> SettingsData { get; set; } = new List<BlockItemData>();

        [JsonProperty("layout")]
        public Dictionary<string, List<BlockListLayoutItem>> Layout { get; set; } = new Dictionary<string, List<BlockListLayoutItem>>();
    }

    public class BlockListLayoutItem
    {
        [JsonProperty("contentUdi")]
        public string ContentUdi { get; set; }

        [JsonProperty("settingsUdi", NullValueHandling = NullValueHandling.Ignore)]
        public string SettingsUdi { get; set; }
    }

    // Custom BlockItemData to ensure proper JSON serialization
    public class BlockItemData
    {
        [JsonProperty("contentTypeKey")]
        public Guid ContentTypeKey { get; set; }

        [JsonProperty("udi")]
        public Udi Udi { get; set; }

        [JsonProperty("key")]
        public Guid Key { get; set; }

        [JsonIgnore]
        public Dictionary<string, object> RawPropertyValues { get; set; } = new Dictionary<string, object>();

        // This ensures property values are serialized at the root level of the block
        [JsonExtensionData]
        public Dictionary<string, object> AdditionalData
        {
            get => RawPropertyValues;
            set => RawPropertyValues = value;
        }
    }

    public class MediaPickerValue
    {
        [JsonProperty("key")]
        public Guid Key { get; set; }

        [JsonProperty("mediaKey")]
        public Guid MediaKey { get; set; }

        [JsonProperty("crops")]
        public List<object> Crops { get; set; }

        [JsonProperty("focalPoint")]
        public object FocalPoint { get; set; }
    }
    /// <summary>
    /// CSV Record mapping class
    /// </summary>
    public class ArticleCsvRecord
    {
        public string Year { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string SubTitle { get; set; } = string.Empty;
        public string BannerImageId { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string MainImageId { get; set; } = string.Empty;
        public string Richtext { get; set; } = string.Empty;

        //public string Region { get; set; } = string.Empty;
    }


    public class DownloadFileCsvRecord
    {
        public string Title { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string File { get; set; } = string.Empty;
    }
    /// <summary>
    /// Import summary tracking
    /// </summary>
    public class ImportSummary
    {
        public int Created { get; set; }
        public int Skipped { get; set; }
        public int Errors { get; set; }
        public List<string> CreatedArticles { get; set; } = new();
        public List<string> CreatedYearFolders { get; set; } = new();
        public List<string> UploadedMedia { get; set; } = new();
        public List<string> ErrorMessages { get; set; } = new();
    }

    public enum ArticleContentTypes
    {
        RichText = 1, Image = 2, RichTextAndImage = 3, Quote = 4
    }

    public class ArticleContent
    {
        public ArticleContentTypes ContentType { get; set; }
        public string? RichText { get; set; }
        public IMedia? Image { get; set; }
    }

    public class ArticleData
    {
        public string? Name { get; set; }
        public string? Year { get; set; }
        public string? Title { get; set; }
        public string? SubTitle { get; set; }
        public string? BanerImageId { get; set; }
        public string? Category { get; set; }
        public DateTime? Date { get; set; }
        public string? Region { get; set; }

        public string? SEOTitle { get; set; }
        public string? SEODescription { get; set; }

        public string? NewsMediaPath { get; set; }
        public List<ArticleDataItem>? ArticleDataItems { get; set; }
    }

    public class ArticleDataItem
    {
        public ArticleContentTypes ArticleDataType { get; set; }
        public string? Text { get; set; }
        public string? ImageId { get; set; }
        public string? Title { get; set; }
        public string? Caption { get; set; }
        public string? RichText { get; set; }
    }
}