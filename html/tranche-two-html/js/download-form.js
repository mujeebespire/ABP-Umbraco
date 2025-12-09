function DownloadForm(downloadButtonElement, downloadFormModalElement, downloadFormElement, tryStartDownloadInit) {
    var self = this;

    var readCookie = function (cookieName) {
        var nameEquals = cookieName + "=";
        var cookieArray = document.cookie.split(";");

        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i].trim();

            if (cookie.indexOf(nameEquals) === 0) {
                return cookie.substring(nameEquals.length, cookie.length);
            }
        }

        return undefined;
    };

    var name = document.getElementById("nameInput");
    var email = document.getElementById("emailInput");
    var confirmEmail = document.getElementById("confirmEmailInput");
    var organisation = document.getElementById("organisationInput");
    var organisationRole = document.getElementById("roleInput");
    var $downloadFormModal = $(downloadFormModalElement);
    var $downloadForm = $(downloadFormElement);

    self.tryStartDownload = function (event) {
        if (tryStartDownloadInit) {
            tryStartDownloadInit(event);
        }

        var downloadSubmissionUId = readCookie("downloadSubmissionUId");

        if (downloadSubmissionUId === undefined) {
            name.value = "";
            email.value = "";
            organisation.value = "";
            organisationRole.value = "";

            $downloadFormModal.modal();
        } else {
            $downloadForm[0].submit();            
        }
    };

    self.initialize = function () {
        $downloadForm.submit(function (event) {
            $("#captcha-required").hide();

            var gCaptcha = $("input[name=CaptchaResponse]").val();

            if ($downloadForm.valid() && !!gCaptcha) {
                $downloadFormModal.modal("hide");
            }
            else {
                if (!gCaptcha) {
                    $("#captcha-required").show();
                }
            }
        });

        $(downloadButtonElement).click(self.tryStartDownload);
    }
}