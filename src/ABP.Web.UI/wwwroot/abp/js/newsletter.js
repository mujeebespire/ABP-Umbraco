$(function () {
    $('#newsletter-form').on('submit', function (e) {
        e.preventDefault();

        var $form = $(this);
        var $container = $('#newsletter-container');
        var $emailInput = $('#email');
        var $emailError = $('[data-valmsg-for="email"]');
        var email = $emailInput.val().trim();

        // Clear previous messages
        $('.field-validation-error').removeClass('field-validation-error').addClass('field-validation-valid').text('');
        $('.alert', $container).remove();

        // Email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate email
        if (!email) {
            $emailError.removeClass('field-validation-valid')
                .addClass('field-validation-error')
                .text('The email address is required');
            return false;
        }

        if (!emailRegex.test(email)) {
            $emailError.removeClass('field-validation-valid')
                .addClass('field-validation-error')
                .text('The email address is not valid');
            return false;
        }

        // If validation passes, submit via AJAX
        $.ajax({
            url: $form.attr('action'),
            type: 'POST',
            data: $form.serialize(),
            success: function (response) {
                if (response.status === 'success') {
                    $container.html('<div class="newsletter__container newsletter__container--success"><span class="newsletter__success">' + response.message + '</span></div>');
                } else if (response.status === 'warning') {
                    $container.prepend('<div class="alert alert-warning">' + response.message + '</div>');
                } else {
                    $container.prepend('<div class="alert alert-danger">' + response.message + '</div>');
                }
            },
            error: function () {
                $container.prepend('<div class="alert alert-danger">An error occurred. Please try again later.</div>');
            }
        });
    });
});