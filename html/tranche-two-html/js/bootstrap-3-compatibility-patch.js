/**
 * Bootstrap 3.4.1 + jQuery 3.7.1 Compatibility Patch
 * 
 * Bootstrap 3.4.1 has a version check that prevents it from working with jQuery 3.x
 * This patch removes that restriction.
 * 
 * IMPORTANT: Bootstrap 3.4.1 was not designed for jQuery 3.x, so there may be
 * minor compatibility issues. Test thoroughly!
 * 
 * Usage: Load this BEFORE Bootstrap 3.4.1
 */

(function() {
    // Save the original jQuery version
    var originalVersion = jQuery.fn.jquery;
    
    // Temporarily report jQuery version as 2.2.4 to pass Bootstrap's version check
    jQuery.fn.jquery = '2.2.4';
    
    // After Bootstrap loads, we'll restore the real version
    // This will be done in a separate script after Bootstrap loads
    
    console.log('Bootstrap 3.4.1 compatibility patch loaded');
    console.log('Temporarily reporting jQuery version as:', jQuery.fn.jquery);
    console.log('Actual jQuery version:', originalVersion);
    
    // Store the real version for later restoration
    window._realJQueryVersion = originalVersion;
})();
