using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Web;

namespace uEspire.Composer
{
    /// <summary>
    /// Ensures that when no document is found, Umbraco will render the "Error Page".
    /// </summary>
    public class ErrorPageLastChanceFinder : IContentLastChanceFinder
    {
        private readonly IServiceProvider _serviceProvider;

        public ErrorPageLastChanceFinder(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public Task<bool> TryFindContent(IPublishedRequestBuilder request)
        {
            using var scope = _serviceProvider.CreateScope();
            var umbracoContextAccessor = scope.ServiceProvider.GetRequiredService<IUmbracoContextAccessor>();

            if (!umbracoContextAccessor.TryGetUmbracoContext(out var umbracoContext))
            {
                return Task.FromResult(false);
            }

            // 🔹 Look for the first content node with Document Type alias "errorPage"
            var errorPage = umbracoContext
                .Content
                ?.GetAtRoot()
                .SelectMany(x => x.DescendantsOrSelf())
                .FirstOrDefault(c => c.ContentType.Alias == "errorPage");

            if (errorPage == null)
            {
                return Task.FromResult(false);
            }

            request.SetPublishedContent(errorPage);
            request.SetResponseStatus(404); // Mark response as 404
            return Task.FromResult(true);
        }
    }
}
