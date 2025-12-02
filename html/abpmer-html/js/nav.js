(function ($) {

    document.querySelector('#menu-btn').addEventListener('click', function () {
        this.classList.toggle('active');
    });

        $("#mainNav").aceResponsiveMenu({
        resizeWidth: '992', // Set the breakpoint same in Media query
        animationSpeed: 'fast', //slow, medium, fast
        accoridonExpAll: false //Expands all the accordion menu on click
    });

})(jQuery);

