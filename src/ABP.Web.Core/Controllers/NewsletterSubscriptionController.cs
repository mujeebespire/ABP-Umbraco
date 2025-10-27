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
using Umbraco.Cms.Web.Website.Controllers;

namespace uEspire.Core.Controllers
{
    public class NewsletterSubscriptionController : SurfaceController
    {
        private readonly IContentService _contentService;
        private readonly ILogger<NewsletterSubscriptionController> _logger;

        public NewsletterSubscriptionController(
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IContentService contentService,
            ILogger<NewsletterSubscriptionController> logger)
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _contentService = contentService;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Subscribe(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                TempData["SubscriptionStatus"] = "error";
                TempData["SubscriptionMessage"] = "Please enter a valid email address.";
                return CurrentUmbracoPage();
            }

            try
            {
                // Find the NewsletterSubscriberList node as a child of home
                var homeNode = _contentService.GetRootContent().FirstOrDefault(x => x.ContentType.Alias == Home.ModelTypeAlias);

                if (homeNode == null)
                {
                    _logger.LogError("Home node not found");
                    TempData["SubscriptionStatus"] = "error";
                    TempData["SubscriptionMessage"] = "An error occurred. Please try again later.";
                    return CurrentUmbracoPage();
                }

                var childNodes = _contentService.GetPagedChildren(homeNode.Id, 0, int.MaxValue, out _);
                var subscriberListNode = childNodes.FirstOrDefault(x => x.ContentType.Alias == NewsletterSubscrberList.ModelTypeAlias);

                if (subscriberListNode == null)
                {
                    _logger.LogError("NewsletterSubscriberList node not found");
                    TempData["SubscriptionStatus"] = "error";
                    TempData["SubscriptionMessage"] = "An error occurred. Please try again later.";
                    return CurrentUmbracoPage();
                }

                // Check if email already exists
                var existingSubscribers = _contentService.GetPagedChildren(subscriberListNode.Id, 0, int.MaxValue, out _);
                var emailExists = existingSubscribers.Any(s =>
                    s.GetValue<string>("email")?.Equals(email, StringComparison.OrdinalIgnoreCase) ?? false);

                if (emailExists)
                {
                    TempData["SubscriptionStatus"] = "warning";
                    TempData["SubscriptionMessage"] = "This email is already subscribed.";
                    return CurrentUmbracoPage();
                }

                // Create new NewsletterSubscriber
                var subscriber = _contentService.Create(
                    $"Subscriber - {email}",
                    subscriberListNode.Id,
                    "newsletterSubscriber"
                );

                subscriber.SetValue("email", email);
                //subscriber.SetValue("subscribedDate", DateTime.Now); // If you have this property

                // Save and publish
                var saveResult = _contentService.Save(subscriber);

                if (saveResult.Success)
                {
                    var publishResult = _contentService.Publish(subscriber, new string[] { });

                    if (publishResult.Success)
                    {
                        TempData["SubscriptionStatus"] = "success";
                        TempData["SubscriptionMessage"] = "Thank you for subscribing!";
                    }
                    else
                    {
                        _logger.LogError("Failed to publish subscriber");
                        TempData["SubscriptionStatus"] = "error";
                        TempData["SubscriptionMessage"] = "An error occurred. Please try again.";
                    }
                }
                else
                {
                    _logger.LogError("Failed to save subscriber");
                    TempData["SubscriptionStatus"] = "error";
                    TempData["SubscriptionMessage"] = "An error occurred. Please try again.";
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error subscribing email: {Email}", email);
                TempData["SubscriptionStatus"] = "error";
                TempData["SubscriptionMessage"] = "An error occurred. Please try again later.";
            }

            return CurrentUmbracoPage();
        }
    }
}
