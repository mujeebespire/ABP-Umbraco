using Microsoft.AspNetCore.Diagnostics;

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
    // Show detailed errors when debugging
    app.UseDeveloperExceptionPage();
}
else
{
    // 🔐 Security Headers Middleware
    app.Use(async (context, next) =>
    {
        // Basic headers applied to all requests
        context.Response.Headers["X-Frame-Options"] = "DENY";
        context.Response.Headers["X-Content-Type-Options"] = "nosniff";
        context.Response.Headers["Referrer-Policy"] = "strict-origin-when-cross-origin";
        context.Response.Headers["Permissions-Policy"] = "geolocation=(), camera=(), microphone=()";
        context.Response.Headers["Cross-Origin-Opener-Policy"] = "same-origin";
        context.Response.Headers["Cross-Origin-Embedder-Policy"] = "require-corp";
        context.Response.Headers["Cross-Origin-Resource-Policy"] = "same-origin";

        // HSTS only on HTTPS
        if (context.Request.IsHttps)
        {
            context.Response.Headers["Strict-Transport-Security"] =
                "max-age=31536000; includeSubDomains; preload";
        }

        // Apply different CSP based on request path
        if (context.Request.Path.StartsWithSegments("/umbraco", StringComparison.OrdinalIgnoreCase))
        {
            // 🔹 Loose CSP for backoffice (needs 'unsafe-inline' and 'unsafe-eval')
            context.Response.Headers["Content-Security-Policy"] =
                "default-src 'self'; " +
                "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
                "style-src 'self' 'unsafe-inline'; " +
                "img-src 'self' data: blob:; " +
                "font-src 'self' data:; " +
                "frame-ancestors 'none';";
        }
        else
        {
            // 🔹 Strict CSP for frontend (no unsafe-inline/eval)
            context.Response.Headers["Content-Security-Policy"] =
                "default-src 'self'; " +
                "script-src 'self'; " +
                "style-src 'self'; " +
                "img-src 'self' data: blob:; " +
                "font-src 'self'; " +
                "frame-ancestors 'none';";
        }

        await next();
    });
    // Send unhandled exceptions to /error
    app.UseExceptionHandler("/error");

    // Handle status codes like 404, 403, etc.
    app.UseStatusCodePagesWithReExecute("/error/statuscode", "?code={0}");
}

await app.BootUmbracoAsync();

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
