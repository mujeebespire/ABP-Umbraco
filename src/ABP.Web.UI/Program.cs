using Microsoft.AspNetCore.Diagnostics;
using System.Security.Cryptography;
using System.Text;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

builder.Services.AddHttpClient();

WebApplication app = builder.Build();

// 🔹 Error Handling Middleware
if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    //  Security Headers Middleware
    app.Use(async (context, next) =>
    {
        //  Generate a unique nonce per request
        var nonceBytes = RandomNumberGenerator.GetBytes(16);
        var nonce = Convert.ToBase64String(nonceBytes);
        context.Items["CSPNonce"] = nonce;

        // Basic Security Headers
        context.Response.Headers["X-Frame-Options"] = "DENY";
        context.Response.Headers["X-Content-Type-Options"] = "nosniff";
        context.Response.Headers["Referrer-Policy"] = "strict-origin-when-cross-origin";
        context.Response.Headers["Cross-Origin-Opener-Policy"] = "same-origin";

        // Apply HSTS for HTTPS
        if (context.Request.IsHttps)
        {
            context.Response.Headers["Strict-Transport-Security"] =
                "max-age=31536000; includeSubDomains; preload";
        }

        // 🔹 CSP Rules
        if (context.Request.Path.StartsWithSegments("/umbraco", StringComparison.OrdinalIgnoreCase))
        {
            // Relaxed CSP for Umbraco backoffice
            context.Response.Headers["Content-Security-Policy"] =
                "default-src 'self'; " +
                "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
                "style-src 'self' 'unsafe-inline'; " +
                "img-src 'self' data: blob:; " +
                "font-src 'self' data:; " +
                "frame-ancestors 'none';";

            context.Response.Headers["Permissions-Policy"] =
                "geolocation=(), camera=(), microphone=()";

            context.Response.Headers["Cross-Origin-Embedder-Policy"] = "require-corp";
            context.Response.Headers["Cross-Origin-Resource-Policy"] = "same-origin";
        }
        else
        {
            context.Response.Headers.Remove("Content-Security-Policy");

            var csp = new StringBuilder();
            csp.Append("default-src 'self'; ");
            csp.Append("script-src 'self'; ");
            // ✅ Keep nonce for <style> blocks, allow unsafe-inline only for style attributes
            csp.Append($"style-src 'self' 'nonce-{nonce}'; ");
            csp.Append("style-src-attr 'unsafe-inline'; "); // Only for inline style="" attributes
            csp.Append("img-src 'self' data: blob:; ");
            csp.Append("font-src 'self'; ");
            csp.Append("frame-src 'self' https://player.vimeo.com https://www.youtube.com; ");
            csp.Append("child-src 'self' https://player.vimeo.com https://www.youtube.com; ");
            csp.Append("media-src 'self' https://player.vimeo.com https://www.youtube.com; ");
            csp.Append("frame-ancestors 'self';");

            context.Response.Headers["Content-Security-Policy"] = csp.ToString();

            context.Response.Headers["Permissions-Policy"] =
                "geolocation=(), camera=(), microphone=(), fullscreen=(self \"https://player.vimeo.com\" \"https://www.youtube.com\")";

            context.Response.Headers["Cross-Origin-Embedder-Policy"] = "unsafe-none";
            context.Response.Headers["Cross-Origin-Resource-Policy"] = "cross-origin";
        }

        await next();
    });

    // Global error handling
    app.UseExceptionHandler("/error");
    app.UseStatusCodePagesWithReExecute("/error/statuscode", "?code={0}");
}

await app.BootUmbracoAsync();

// 🔹 Umbraco Middleware
app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
