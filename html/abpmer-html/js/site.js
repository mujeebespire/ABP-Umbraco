$(function () {
    //var eZineForm = document.getElementById("e-zine-form");
    //if (eZineForm) {
    //    TrySubmitEZineForm(eZineForm);
    //}

    var contactUsForm = document.getElementById("contact-us-form");
    if (contactUsForm) {
        TrySubmitContactUsForm(contactUsForm);
    }

    var contactPersonForm = document.getElementById("contact-person-form");
    if (contactPersonForm) {
        TrySubmitContactPersonForm(contactPersonForm);
    }

    var bookCourseForm = document.getElementById("book-course-form");
    if (bookCourseForm) {
        TrySubmitBookCourseForm(bookCourseForm);
    }

    var downloadResourceForm = document.getElementById("download-resource-form");
    if (downloadResourceForm) {
        TrySubmitResourcesDownloadForm(downloadResourceForm);
    }

    InitTagFilters()

    InitActiveMenuHiglighting()

    InitResourceAnchorHighlighting()

    var msie = window.document.documentMode;
    if (msie && GetCookie("IE-MODAL") != true) {
        MicroModal.show("internet-explorer-modal");
        SetCookie("IE-MODAL", true, 365)
    }


    $('.toggle-expand').click(function () {
        var targetGroupId = $(this).data('toggle-id')
        var toggleTarget = targetGroupId == null
            ? $('.toggle-expand-target')
            : $('.toggle-expand-target[data-toggle-target-id="' + targetGroupId + '"]')

        toggleTarget.removeClass('toggle-expand-target');
        $(this).hide();
    })
});


function InitActiveMenuHiglighting() {
    $('.menu-top-link')
        .toArray()
        .filter(x =>
            window.location.href.startsWith(x.href)
            //Special cases for mismatched routes to fix menu highlighting
            || x.href.includes('/blog-overview') && window.location.href.includes('/blog/')
            || x.href.includes('/resources') && window.location.href.includes('/training/')
            )
        .forEach(x => {
            $(x).addClass('menu-top-link-active')
        })
}

function InitResourceAnchorHighlighting() {
    $("[data-resource-url-tag]")
    console.log($("[data-resource-url-tag]"));

    var resourceTag = window.location.href.split('?resource=')[1]?.toLowerCase()

    var resource = $(`[data-resource-url-tag='${resourceTag}']`)
    if (!!resource) {
        resource.addClass('resource-hightlight')
        setTimeout(() => { $('body').scrollTo(resource, 500, { over: { top: -0.04 }}); }, 500);        
    }    
}

function InitTagFilters() {
    $('.filter-tag').prop("checked", false);

    $('.filter-tag').change(function () {
        if (this.checked) {
            var tag = $(this).data("tag").replace(/\s/g, '').toLowerCase();

            ChangeUrl("", `?tag=${tag}`)
            ChangeTag(tag)
        }
        else {
            $('.filter-tag-content').show();
            ChangeTag("", window.location.href.split('?')[0])
        }
    })

    window.onpopstate = history.onpushstate = function (event) {
        var tag = window.location.href.split('?tag=')[1]
        ChangeTag(tag)
    }

    if ($('.filter-tag').length != 0) {
        var tag = window.location.href.split('?tag=')[1]
        ChangeTag(tag)
    }

    function ChangeTag(tag) {
        tag = tag?.toLowerCase()

        if (tag == null) return

        $('.resource-hightlight').removeClass('resource-hightlight')

        $('.filter-tag').filter(function () { return $(this).data("tag").toLowerCase() != tag }).prop("checked", false);
        $('.filter-tag').filter(function () { return $(this).data("tag").toLowerCase() == tag }).prop("checked", true);

        $('.filter-tag-content').show();
        $('.filter-tag-content').filter(function () {
            return !$(this).data("tags").includes(tag)
        }).hide();
    }
}

function TrySubmitContactPersonForm(contactPersonForm) {
    $(contactPersonForm).submit(function (event) {
        event.preventDefault();

        var $form = $(this);
        var url = $form.attr("action");
        var token = $('input[name=__RequestVerificationToken]', contactPersonForm).val();
        var formData = $form.serialize();

        var $eZineForm = $('#contact-person-modal #e-zine-form')
        $eZineForm.find("#EZineName").val($form.find('#Name').val())
        $eZineForm.find("#EZineEmail").val($form.find('#Email').val())
        var subscribeToEzine = $form.find('#AddToMailingList').is(":checked")
        
        $.extend(formData, { '__RequestVerificationToken': token });

        $('#send-message-button').prop("disabled", true);

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                contactPersonForm.reset();
                MicroModal.close('contact-person-modal');
                Swal.fire(
                    'Thank you!',
                    'We will get back to you shortly',
                    'success'
                )
                $('#send-message-button').removeAttr("disabled");
                GenerateReCapchaTokens();                

                if (subscribeToEzine) {
                    $eZineForm.submit()
                    $eZineForm.reset()
                }                

            },
            error: function (data) {
                MicroModal.close('contact-person-modal');
                Swal.fire(
                    'Ohh no. :(',
                    'Something went wrong',
                    'error'
                )
                $('#send-message-button').removeAttr("disabled");
                GenerateReCapchaTokens();
            }
        });
    });
}

function TrySubmitBookCourseForm(bookCourseForm) {
    $(bookCourseForm).submit(function (event) {
        event.preventDefault();

        var $form = $(this);
        var url = $form.attr("action");
        var token = $('input[name=__RequestVerificationToken]', bookCourseForm).val();
        var formData = $form.serialize();
        $.extend(formData, { '__RequestVerificationToken': token });

        $('#send-message-button').prop("disabled", true);

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                bookCourseForm.reset();
                MicroModal.close('book-course-modal');
                Swal.fire(
                    'Thank you!',
                    'We will get back to you shortly',
                    'success'
                )
                $('#send-message-button').removeAttr("disabled");
            },
            error: function (data) {
                MicroModal.close('book-course-modal');
                Swal.fire(
                    'Ohh no. :(',
                    'Something went wrong',
                    'error'
                )
                $('#send-message-button').removeAttr("disabled");
            }
        });
    });
}

function TrySubmitContactUsForm(contactUsForm) {
    $("#AreaOfInterest").change(function (event) {
        var toEmail = $(this).find("option:selected").data("toemail");
        $("#ToEmail").val(toEmail);
    })

    $(contactUsForm).submit(function (event) {
        event.preventDefault();

        var $form = $(this);
        var url = $form.attr("action");
        var token = $('input[name=__RequestVerificationToken]', contactUsForm).val();
        var formData = $form.serialize();
        $.extend(formData, { '__RequestVerificationToken': token });

        $('#send-message-button').prop("disabled", true);

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                if (data.success) {
                    $(contactUsForm).addClass('hidden')
                    $('.contact-form__confirmation').removeClass('hidden')
                } else {
                    $(contactUsForm).addClass('hidden')
                    $('.contact-form__error').removeClass('hidden')
                }
                contactUsForm.reset();
            },
            error: function (data) {
                $(contactUsForm).addClass('hidden')
                $('.contact-form__error').removeClass('hidden')
            }
        });
    });
}

function resetErrors() {
    $("#resource-download-error-text").css('color', 'red');
    $("#resource-download-error-text").css('display', 'none');
}

function compareEmail() {
    var email = $("#EmailInput").val();
    var confirmEmail = $("#ConfirmEmail").val();

    if (email == confirmEmail) {
        return true;
    }
    else {
        return false;
    }
}


function TrySubmitResourcesDownloadForm(resourcesDownloadForm) {
    $("a[data-resource-url]").click(function () {
        $("#FileToDownload").attr("value", $(this).data("resource-url"));
        $("#DownloadResourceName").attr("value", $(this).data("resource-name"));
    })

    $(resourcesDownloadForm).submit(function (event) {
        event.preventDefault();

        resetErrors();

        var acceptedTermsOfUse = document.getElementById("AcceptedTermsOfUse").checked;

        if (acceptedTermsOfUse == false) {
            $("#resource-download-error-text").css('display', 'block');
            $("#resource-download-error-text").html("Please accept terms of use");
            return;
        }

        var result = compareEmail();
        if (result == false) {
            $("#resource-download-error-text").css('display', 'block');
            $("#resource-download-error-text").html("Email does not match");
            return;
        }

        var $form = $(this);
        var url = $form.attr("action");
        var token = $('input[name=__requestVarificationToken]', resourcesDownloadForm).val();

        //Remove commas so DownloadHistory CSV can be saved correctly
        $form.find('#Name').val(($form.find('#Name').val() || '').replace(/,/g,' '))
        $form.find('#Role').val(($form.find('#Role').val() || '').replace(/,/g,' '))
        $form.find('#Organisation').val(($form.find('#Organisation').val() || '').replace(/,/g, ' '))

        var formData = $form.serialize();
        $.extend(formData, { '__RequestVerificationToken': token });
        var fileToDownload = document.getElementById("FileToDownload").value;

        var $eZineForm = $('#download-resource-modal #e-zine-form')
        $eZineForm.find("#EZineName").val($form.find('#Name').val())
        $eZineForm.find("#EZineEmail").val($form.find('#EmailInput').val())
        $eZineForm.find("#EZineOrganisation").val($form.find('#Organisation').val())
        var subscribeToEzine = $form.find('#AddToMailingList').is(":checked")

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                if (data.success) {                                        
                    var downloadFile = document.getElementById('download-file');
                    $(downloadFile).attr("href", fileToDownload);
                    downloadFile.click();
                    MicroModal.close('download-resource-modal');
                }
                else {
                    $("#resource-download-error-text").css('display', 'block');
                    $("#resource-download-error-text").html("Ops something went wrong :(");
                }

                if (subscribeToEzine) {
                    $eZineForm.submit()
                    $eZineForm.reset()
                }                

                resourcesDownloadForm.reset();


                console.log(data);


            },
            error: function (data) {
                $("#resource-download-error-text").css('display', 'block');
                $("#resource-download-error-text").html("Email does not match");
            }
        })

    });
}

function TrySubmitEZineForm(eZineForm) {
    $(eZineForm).submit(function (event) {
        event.preventDefault();

        var $form = $(this);
        var url = $form.attr("action");
        var token = $('input[name=__RequestVerificationToken]', eZineForm).val();
        var formData = $form.serialize();
        $.extend(formData, { '__RequestVerificationToken': token });

        document.getElementsByName("Sign me up")[0].style.display = 'none';
        var resultTxt = document.getElementById("result-txt");
        resultTxt.style.display = 'block';

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                if (data.success) {
                    resultTxt.style.color = "#67ca67";
                    resultTxt.innerHTML = "Subscribed!";
                } else {
                    resultTxt.style.color = "#d73f3f";
                    resultTxt.innerHTML = "Ops something went wrong :(";
                }
                eZineForm.reset();
            },
            error: function (data) {
                console.log("E-zine form ajax post error");
                resultTxt.style.color = "#d73f3f";
                resultTxt.innerHTML = "Ops something went wrong :(";
            }
        });
    });
}

grecaptcha.ready(function () {
    GenerateReCapchaTokens()
});

function GenerateReCapchaTokens() {
    grecaptcha.execute('6LdX2skZAAAAAJppEB7uc_KDWeyLEnjx_sa2lAxy', { action: 'contact' }).then(function (token) {
        var eZineFormGReCaptcha = document.getElementById("GoogleReCaptchaTokenEZine");
        if (eZineFormGReCaptcha) {
            $("#GoogleReCaptchaTokenEZine").val(token);
        }

        var contactUsFormGReCaptcha = document.getElementById("GoogleReCaptchaTokenContactUs")
        if (contactUsFormGReCaptcha) {
            $("#GoogleReCaptchaTokenContactUs").val(token);
        }

        var contactPersonFormGReCaptcha = document.getElementById("GoogleReCaptchaTokenContactPerson")
        if (contactPersonFormGReCaptcha) {
            $("#GoogleReCaptchaTokenContactPerson").val(token);
        }

        var downloadResourceFormGReCaptcha = document.getElementById("GoogleReCaptchaTokenResourceDownload")
        if (downloadResourceFormGReCaptcha) {
            $("#GoogleReCaptchaTokenResourceDownload").val(token);
        }
    });
}

$(document).ready(function () {
    $(".satisfied-clients__carousel__content").slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        infinite: true
    });

    Array.from(document.getElementsByClassName('footer-content__column__header__toggle')).forEach(element => {
        element.addEventListener('click', () => {
            element.querySelectorAll('img').forEach(child => child.classList.toggle('d-none'));
            element.parentElement.nextElementSibling.classList.toggle('is-hidden');
            element.parentElement.parentElement.classList.toggle('pb-0');
        });
    });
});


$(document).ready(function () {
    MicroModal.init();
})


function FillPersonModal(personData, personImageUrl) {
    var modal = $('#contact-person-modal');

    modal.find('.modal__title').text(personData.contactName)
    modal.find('.modal__subtitle').text(personData.contactRole)
    modal.find('.modal__person-image').attr('src', personImageUrl)
    modal.find('#ContactPersonToEmail').val(personData.email)
}

function FillCourseModal(courseData) {
    var modal = $('#book-course-modal');

    modal.find('.modal__title').text(courseData.contactName)
    modal.find('.modal__subtitle').text(courseData.courseName)
    modal.find('.modal__image').attr('src', courseData.courseImage)
    modal.find('#CourseDate').val(courseData.courseDate)
    modal.find('#CourseName').val(courseData.courseName)
    modal.find('#CourseBookingEmail').val(courseData.courseBookingEmail)
}


function SetCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function GetCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function ChangeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        window.location.href = "homePage";
        // alert("Browser does not support HTML5.");
    }
}