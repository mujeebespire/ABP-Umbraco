using ABP.Web.Models.UmbracoModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Website.Controllers;

namespace uEspire.Core.Controllers
{
    public class NewsletterSubscriptionController : SurfaceController
    {
        private readonly IContentService _contentService;
        private readonly ILogger<NewsletterSubscriptionController> _logger;
        private readonly UmbracoHelper _umbracoHelper;
        public NewsletterSubscriptionController(
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IContentService contentService,
            ILogger<NewsletterSubscriptionController> logger,
            UmbracoHelper umbracoHelper)
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _contentService = contentService;
            _logger = logger;
            _umbracoHelper = umbracoHelper;
        }

        [HttpPost]
        public IActionResult Subscribe(string emailAddress)
        {
            if (string.IsNullOrWhiteSpace(emailAddress))
            {
               
                if (Request.Headers["X-Requested-With"] == "XMLHttpRequest")
                {
                    return Json(new { status = "error", message = _umbracoHelper.GetDictionaryValue("Newsletter.EmailIsNotValidaMessage") });
                }

                TempData["SubscriptionStatus"] = "error";
                TempData["SubscriptionMessage"] = _umbracoHelper.GetDictionaryValue("Newsletter.EmailIsNotValidaMessage");
                return CurrentUmbracoPage();
            }

            try
            {
                // Find the NewsletterSubscriberList node as a child of home
                var homeNode = _contentService.GetRootContent().FirstOrDefault(x => x.ContentType.Alias == Home.ModelTypeAlias);

                if (homeNode == null)
                {
                    _logger.LogError("Home node not found");
                    return HandleResponse("error", _umbracoHelper.GetDictionaryValue("Newsletter.ErrorOccuredMessage"));
                }

                var childNodes = _contentService.GetPagedChildren(homeNode.Id, 0, int.MaxValue, out _);
                var subscriberListNode = childNodes.FirstOrDefault(x => x.ContentType.Alias == NewsletterSubscrberList.ModelTypeAlias);

                if (subscriberListNode == null)
                {
                    _logger.LogError("NewsletterSubscriberList node not found");
                    return HandleResponse("error", _umbracoHelper.GetDictionaryValue("Newsletter.ErrorOccuredMessage"));
                }

                // Check if email already exists
                var existingSubscribers = _contentService.GetPagedChildren(subscriberListNode.Id, 0, int.MaxValue, out _);
                var emailExists = existingSubscribers.Any(s =>
                    s.GetValue<string>("email")?.Equals(emailAddress, StringComparison.OrdinalIgnoreCase) ?? false);

                if (emailExists)
                {
                    return HandleResponse("warning", _umbracoHelper.GetDictionaryValue("Newsletter.EmailAlreadySubscribedMessage"));
                }

                // Create new NewsletterSubscriber
                var subscriber = _contentService.Create(
                    $"Subscriber - {emailAddress}",
                    subscriberListNode.Id,
                    "newsletterSubscriber"
                );

                subscriber.SetValue("email", emailAddress);

                // Save and publish
                var saveResult = _contentService.Save(subscriber);

                if (saveResult.Success)
                {
                    var publishResult = _contentService.Publish(subscriber, new string[] { });

                    if (publishResult.Success)
                    {
                        return HandleResponse("success", _umbracoHelper.GetDictionaryValue("Newsletter.SubscribtionSuccessMessage"));
                    }
                    else
                    {
                        _logger.LogError("Failed to publish subscriber");
                        return HandleResponse("error", _umbracoHelper.GetDictionaryValue("Newsletter.ErrorOccuredMessage"));
                    }
                }
                else
                {
                    _logger.LogError("Failed to save subscriber");
                    return HandleResponse("error", _umbracoHelper.GetDictionaryValue("Newsletter.ErrorOccuredMessage"));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error subscribing email: {Email}", emailAddress);
                return HandleResponse("error", _umbracoHelper.GetDictionaryValue("Newsletter.ErrorOccuredMessage"));
            }
        }

        private IActionResult HandleResponse(string status, string? message)
        {
            if (Request.Headers["X-Requested-With"] == "XMLHttpRequest")
            {
                return Json(new { status = status, message = message });
            }

            TempData["SubscriptionStatus"] = status;
            TempData["SubscriptionMessage"] = message;
            return CurrentUmbracoPage();
        }

       
    }
}
