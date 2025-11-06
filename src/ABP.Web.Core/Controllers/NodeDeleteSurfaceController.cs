using ABP.Web.Models.UmbracoModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging;
using System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using uEspire.Core.Controllers;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Website.Controllers;
using Umbraco.Cms.Web.Website.Controllers;
using Umbraco.Extensions;

namespace  ABP.Web.Core.Controllers
{
    public class NodeDeleteSurfaceController : SurfaceController
    {

        private readonly IContentService _contentService;
        private readonly ILogger<NewsletterSubscriptionController> _logger;
        private readonly UmbracoHelper _umbracoHelper;
        public NodeDeleteSurfaceController(
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

        //[HttpPost]
        //public IActionResult DeleteNode(Guid key)
        //{
        //    if (key == Guid.Empty)
        //        return BadRequest("Invalid node key");

        //    // Try to get the content item by key
        //    var content = _contentService.GetById(key);

        //    if (content == null)
        //        return NotFound($"No content found with key {key}");

        //    try
        //    {
        //        _contentService.Delete(content);
        //        return Ok($"Node '{content.Name}' deleted successfully.");
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, "An error occurred while deleting the node.");
        //    }
        //}
    }
}
