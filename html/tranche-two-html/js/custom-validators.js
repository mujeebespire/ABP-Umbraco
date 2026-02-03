/**
 * Custom jQuery Validation Methods
 * Extracted from common.js and updated for jQuery 3.7.1 compatibility
 */

// Helper function to add jQuery validator methods
function addjQueryValidatorMethod(n, t, i) {
    $.validator.addMethod(n, i, "");
    $.validator.unobtrusive.adapters.add(n, t, function (i) {
        for (var f = {}, u, r = 0; r < t.length; r++) (u = t[r]), (f[u] = i.params[u]);
        i.rules[n] = f;
        i.messages[n] = i.message;
    });
}

// Set default validation styling for form groups
$.validator.setDefaults({
    highlight: function (n) {
        $(n).closest(".form-group").addClass("has-error");
    },
    unhighlight: function (n) {
        $(n).closest(".form-group").removeClass("has-error");
    },
    errorPlacement: function (n, t) {
        t.parent(".input-group").length ? n.insertAfter(t.parent()) : n.insertAfter(t);
    },
    ignore: null,
});

// Custom validator: Required If
$.validator.addMethod("requiredif", function (n, t, i) {
    var e = "#" + i.dependentproperty,
        r = i.targetvalue;
    r = (r === null ? "" : r).toString();
    var u = $(e),
        o = u.attr("type"),
        f = o === "checkbox" ? u.prop("checked").toString() : u.val();
    return ((r === "true" || r === "false") && (f = f.toLowerCase()), r === f)
        ? $.validator.methods.required.call(this, n, t, i)
        : !0;
});

$.validator.unobtrusive.adapters.add("requiredif", ["dependentproperty", "targetvalue"], function (n) {
    n.rules.requiredif = { dependentproperty: n.params.dependentproperty, targetvalue: n.params.targetvalue };
    n.messages.requiredif = n.message;
});

// Custom validator: Checkbox Required
addjQueryValidatorMethod("checkboxrequired", [], function (n, t) {
    return $(t).is(":checked");
});

// Custom validator: File Size
addjQueryValidatorMethod("filesize", ["maxlengthinbytes"], function (n, t, i) {
    for (var f = parseInt(i.maxlengthinbytes), u, r = 0; r < t.files.length; r++)
        if (((u = t.files[r]), u.size > f)) return !1;
    return !0;
});

// Custom validator: File List Max Size
addjQueryValidatorMethod("filelistmaxsizeattribute", ["combinedmaxlengthinbytes"], function (n, t, i) {
    for (var e = parseInt(i.combinedmaxlengthinbytes), u = 0, f, r = 0; r < t.files.length; r++)
        (f = t.files[r]), (u = u + f.size);
    return e >= u;
});

// Custom validator: Files of Type
addjQueryValidatorMethod("filesoftype", ["validmimetypes"], function (n, t, i) {
    for (var f = i.validmimetypes.split(","), u, r = 0; r < t.files.length; r++)
        if (((u = t.files[r]), f.indexOf(u.type) === -1)) return !1;
    return !0;
});

// Custom validator: List Length
addjQueryValidatorMethod("listlength", ["minlength", "maxlength"], function (n, t, i) {
    var r = 0,
        e,
        u,
        f = parseInt(i.minlength),
        o = parseInt(i.maxlength);
    
    for (e = 0; e < t.options.length; e++)
        if (((u = t.options[e]), u.selected === !0 && (r++, r > o))) return !1;
    
    return r >= f;
});

// Custom validator: File List Length
addjQueryValidatorMethod("filelistlength", ["minlength", "maxlength"], function (n, t, i) {
    var r = t.files.length,
        u = parseInt(i.minlength),
        f = parseInt(i.maxlength);
    return r >= u && f >= r;
});

// Log that custom validators are loaded
console.log('Custom jQuery validators loaded successfully');
