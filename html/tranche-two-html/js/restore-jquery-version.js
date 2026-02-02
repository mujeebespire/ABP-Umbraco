/**
 * Restore Real jQuery Version
 * 
 * Load this AFTER Bootstrap 3.4.1 to restore the real jQuery version
 */

(function() {
    if (window._realJQueryVersion) {
        jQuery.fn.jquery = window._realJQueryVersion;
        console.log('Real jQuery version restored:', jQuery.fn.jquery);
        delete window._realJQueryVersion;
    }
})();
