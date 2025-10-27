using Microsoft.AspNetCore.Mvc;

namespace uEspire.Controllers
{
    public class ErrorController : Controller
    {
        [Route("error")]
        public IActionResult Index()
        {
            // Handle 500 specifically
            if (Response.StatusCode == StatusCodes.Status500InternalServerError)
            {
                // redirect to your 500 error page (content URL)
                return Redirect("/error-page-500/");
            }

            // fallback for other status codes
            if (Response.StatusCode != StatusCodes.Status200OK)
            {
                return Redirect("/error/");
            }

            // default to home
            return Redirect("/");
        }
    }
}
