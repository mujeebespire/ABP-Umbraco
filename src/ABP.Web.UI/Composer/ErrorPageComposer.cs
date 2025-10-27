

using Umbraco.Cms.Core.Composing;

namespace uEspire.Composer
{
    public class ErrorPageComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            // Register our custom last chance finder
            builder.SetContentLastChanceFinder<ErrorPageLastChanceFinder>();
        }
    }
}

