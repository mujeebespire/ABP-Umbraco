
+(function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", (r = new t(this, f)));
            "string" == typeof i && r[i]();
        });
    }
    var t = function (i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target)
                .on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this))
                .on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition();
        },
        r;
    t.VERSION = "3.3.6";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = { offset: 0, target: window };
    t.prototype.getState = function (n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (null != i && "top" == this.affixed) return i > u ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != i ? (u + this.unpin <= f.top ? !1 : "bottom") : n - r >= u + e ? !1 : "bottom";
        var o = null == this.affixed,
            s = o ? u : f.top,
            h = o ? e : t;
        return null != i && i >= u ? "top" : null != r && s + h >= n - r ? "bottom" : !1;
    };
    t.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return (this.pinnedOffset = i.top - n);
    };
    t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(n.proxy(this.checkPosition, this), 1);
    };
    t.prototype.checkPosition = function () {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if (
                ("object" != typeof r && (u = f = r),
                "function" == typeof f && (f = r.top(this.$element)),
                "function" == typeof u && (u = r.bottom(this.$element)),
                (i = this.getState(h, s, f, u)),
                this.affixed != i)
            ) {
                if (
                    (null != this.unpin && this.$element.css("top", ""),
                    (e = "affix" + (i ? "-" + i : "")),
                    (o = n.Event(e + ".bs.affix")),
                    this.$element.trigger(o),
                    o.isDefaultPrevented())
                )
                    return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element
                    .removeClass(t.RESET)
                    .addClass(e)
                    .trigger(e.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == i && this.$element.offset({ top: h - s - u });
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function () {
        return (n.fn.affix = r), this;
    };
    n(window).on("load", function () {
        n('[data-spy="affix"]').each(function () {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t);
        });
    });
})(jQuery),
function () {
        "use strict";
        var n, t;
        n = jQuery;
        t = function (t, i) {
            var f, r, u;
            return (
                (this.options = n.extend(
                    { title: null, footer: null, remote: null },
                    n.fn.ekkoLightbox.defaults,
                    i || {}
                )),
                (this.$element = n(t)),
                (f = ""),
                (this.modal_id = this.options.modal_id
                    ? this.options.modal_id
                    : "ekkoLightbox-" + Math.floor(1e3 * Math.random() + 1)),
                (u =
                    '<div class="modal-header"' +
                    (this.options.title || this.options.always_show_close ? "" : ' style="display:none"') +
                    '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' +
                    (this.options.title || "&nbsp;") +
                    "</h4></div>"),
                (r =
                    '<div class="modal-footer"' +
                    (this.options.footer ? "" : ' style="display:none"') +
                    ">" +
                    this.options.footer +
                    "</div>"),
                n(document.body).append(
                    '<div id="' +
                        this.modal_id +
                        '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' +
                        u +
                        '<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>' +
                        r +
                        "</div></div></div>"
                ),
                (this.modal = n("#" + this.modal_id)),
                (this.modal_dialog = this.modal.find(".modal-dialog").first()),
                (this.modal_content = this.modal.find(".modal-content").first()),
                (this.modal_body = this.modal.find(".modal-body").first()),
                (this.modal_header = this.modal.find(".modal-header").first()),
                (this.modal_footer = this.modal.find(".modal-footer").first()),
                (this.lightbox_container = this.modal_body.find(".ekko-lightbox-container").first()),
                (this.lightbox_body = this.lightbox_container.find("> div:first-child").first()),
                this.showLoading(),
                (this.modal_arrows = null),
                (this.border = {
                    top:
                        parseFloat(this.modal_dialog.css("border-top-width")) +
                        parseFloat(this.modal_content.css("border-top-width")) +
                        parseFloat(this.modal_body.css("border-top-width")),
                    right:
                        parseFloat(this.modal_dialog.css("border-right-width")) +
                        parseFloat(this.modal_content.css("border-right-width")) +
                        parseFloat(this.modal_body.css("border-right-width")),
                    bottom:
                        parseFloat(this.modal_dialog.css("border-bottom-width")) +
                        parseFloat(this.modal_content.css("border-bottom-width")) +
                        parseFloat(this.modal_body.css("border-bottom-width")),
                    left:
                        parseFloat(this.modal_dialog.css("border-left-width")) +
                        parseFloat(this.modal_content.css("border-left-width")) +
                        parseFloat(this.modal_body.css("border-left-width")),
                }),
                (this.padding = {
                    top:
                        parseFloat(this.modal_dialog.css("padding-top")) +
                        parseFloat(this.modal_content.css("padding-top")) +
                        parseFloat(this.modal_body.css("padding-top")),
                    right:
                        parseFloat(this.modal_dialog.css("padding-right")) +
                        parseFloat(this.modal_content.css("padding-right")) +
                        parseFloat(this.modal_body.css("padding-right")),
                    bottom:
                        parseFloat(this.modal_dialog.css("padding-bottom")) +
                        parseFloat(this.modal_content.css("padding-bottom")) +
                        parseFloat(this.modal_body.css("padding-bottom")),
                    left:
                        parseFloat(this.modal_dialog.css("padding-left")) +
                        parseFloat(this.modal_content.css("padding-left")) +
                        parseFloat(this.modal_body.css("padding-left")),
                }),
                this.modal
                    .on("show.bs.modal", this.options.onShow.bind(this))
                    .on(
                        "shown.bs.modal",
                        (function (n) {
                            return function () {
                                return n.modal_shown(), n.options.onShown.call(n);
                            };
                        })(this)
                    )
                    .on("hide.bs.modal", this.options.onHide.bind(this))
                    .on(
                        "hidden.bs.modal",
                        (function (t) {
                            return function () {
                                return (
                                    t.gallery && n(document).off("keydown.ekkoLightbox"),
                                    t.modal.remove(),
                                    t.options.onHidden.call(t)
                                );
                            };
                        })(this)
                    )
                    .modal("show", i),
                this.modal
            );
        };
        t.prototype = {
            modal_shown: function () {
                var t;
                return this.options.remote
                    ? ((this.gallery = this.$element.data("gallery")),
                      this.gallery &&
                          ((this.gallery_items =
                              "document.body" === this.options.gallery_parent_selector ||
                              "" === this.options.gallery_parent_selector
                                  ? n(document.body).find('*[data-gallery="' + this.gallery + '"]')
                                  : this.$element
                                        .parents(this.options.gallery_parent_selector)
                                        .first()
                                        .find('*[data-gallery="' + this.gallery + '"]')),
                          (this.gallery_index = this.gallery_items.index(this.$element)),
                          n(document).on("keydown.ekkoLightbox", this.navigate.bind(this)),
                          this.options.directional_arrows &&
                              this.gallery_items.length > 1 &&
                              (this.lightbox_container.append(
                                  '<div class="ekko-lightbox-nav-overlay"><a href="#" class="' +
                                      this.strip_stops(this.options.left_arrow_class) +
                                      '"></a><a href="#" class="' +
                                      this.strip_stops(this.options.right_arrow_class) +
                                      '"></a></div>'
                              ),
                              (this.modal_arrows = this.lightbox_container
                                  .find("div.ekko-lightbox-nav-overlay")
                                  .first()),
                              this.lightbox_container.find("a" + this.strip_spaces(this.options.left_arrow_class)).on(
                                  "click",
                                  (function (n) {
                                      return function (t) {
                                          return t.preventDefault(), n.navigate_left();
                                      };
                                  })(this)
                              ),
                              this.lightbox_container.find("a" + this.strip_spaces(this.options.right_arrow_class)).on(
                                  "click",
                                  (function (n) {
                                      return function (t) {
                                          return t.preventDefault(), n.navigate_right();
                                      };
                                  })(this)
                              ))),
                      this.options.type
                          ? "image" === this.options.type
                              ? this.preloadImage(this.options.remote, !0)
                              : "youtube" === this.options.type && (t = this.getYoutubeId(this.options.remote))
                                ? this.showYoutubeVideo(t)
                                : "vimeo" === this.options.type
                                  ? this.showVimeoVideo(this.options.remote)
                                  : "instagram" === this.options.type
                                    ? this.showInstagramVideo(this.options.remote)
                                    : "url" === this.options.type
                                      ? this.loadRemoteContent(this.options.remote)
                                      : "video" === this.options.type
                                        ? this.showVideoIframe(this.options.remote)
                                        : this.error(
                                              'Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|instagram|url|video"'
                                          )
                          : this.detectRemoteType(this.options.remote))
                    : this.error("No remote target given");
            },
            strip_stops: function (n) {
                return n.replace(/\./g, "");
            },
            strip_spaces: function (n) {
                return n.replace(/\s/g, "");
            },
            isImage: function (n) {
                return n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
            },
            isSwf: function (n) {
                return n.match(/\.(swf)((\?|#).*)?$/i);
            },
            getYoutubeId: function (n) {
                var t;
                return (
                    (t = n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)),
                    t && 11 === t[2].length ? t[2] : !1
                );
            },
            getVimeoId: function (n) {
                return n.indexOf("vimeo") > 0 ? n : !1;
            },
            getInstagramId: function (n) {
                return n.indexOf("instagram") > 0 ? n : !1;
            },
            navigate: function (n) {
                if (((n = n || window.event), 39 === n.keyCode || 37 === n.keyCode)) {
                    if (39 === n.keyCode) return this.navigate_right();
                    if (37 === n.keyCode) return this.navigate_left();
                }
            },
            navigateTo: function (t) {
                var r, i;
                return 0 > t || t > this.gallery_items.length - 1
                    ? this
                    : (this.showLoading(),
                      (this.gallery_index = t),
                      (this.$element = n(this.gallery_items.get(this.gallery_index))),
                      this.updateTitleAndFooter(),
                      (i = this.$element.attr("data-remote") || this.$element.attr("href")),
                      this.detectRemoteType(i, this.$element.attr("data-type") || !1),
                      this.gallery_index + 1 < this.gallery_items.length &&
                      ((r = n(this.gallery_items.get(this.gallery_index + 1), !1)),
                      (i = r.attr("data-remote") || r.attr("href")),
                      "image" === r.attr("data-type") || this.isImage(i))
                          ? this.preloadImage(i, !1)
                          : void 0);
            },
            navigate_left: function () {
                if (1 !== this.gallery_items.length)
                    return (
                        0 === this.gallery_index
                            ? (this.gallery_index = this.gallery_items.length - 1)
                            : this.gallery_index--,
                        this.options.onNavigate.call(this, "left", this.gallery_index),
                        this.navigateTo(this.gallery_index)
                    );
            },
            navigate_right: function () {
                if (1 !== this.gallery_items.length)
                    return (
                        this.gallery_index === this.gallery_items.length - 1
                            ? (this.gallery_index = 0)
                            : this.gallery_index++,
                        this.options.onNavigate.call(this, "right", this.gallery_index),
                        this.navigateTo(this.gallery_index)
                    );
            },
            detectRemoteType: function (n, t) {
                var i;
                return (
                    (t = t || !1),
                    "image" === t || this.isImage(n)
                        ? ((this.options.type = "image"), this.preloadImage(n, !0))
                        : "youtube" === t || (i = this.getYoutubeId(n))
                          ? ((this.options.type = "youtube"), this.showYoutubeVideo(i))
                          : "vimeo" === t || (i = this.getVimeoId(n))
                            ? ((this.options.type = "vimeo"), this.showVimeoVideo(i))
                            : "instagram" === t || (i = this.getInstagramId(n))
                              ? ((this.options.type = "instagram"), this.showInstagramVideo(i))
                              : "video" === t
                                ? ((this.options.type = "video"), this.showVideoIframe(i))
                                : ((this.options.type = "url"), this.loadRemoteContent(n))
                );
            },
            updateTitleAndFooter: function () {
                var n, t, i, r;
                return (
                    (i = this.modal_content.find(".modal-header")),
                    (t = this.modal_content.find(".modal-footer")),
                    (r = this.$element.data("title") || ""),
                    (n = this.$element.data("footer") || ""),
                    r || this.options.always_show_close
                        ? i
                              .css("display", "")
                              .find(".modal-title")
                              .html(r || "&nbsp;")
                        : i.css("display", "none"),
                    n ? t.css("display", "").html(n) : t.css("display", "none"),
                    this
                );
            },
            showLoading: function () {
                return (
                    this.lightbox_body.html('<div class="modal-loading">' + this.options.loadingMessage + "</div>"),
                    this
                );
            },
            showYoutubeVideo: function (n) {
                var i, r, t;
                return (
                    (r = null != this.$element.attr("data-norelated") || this.options.no_related ? "&rel=0" : ""),
                    (t = this.checkDimensions(this.$element.data("width") || 560)),
                    (i = t / (560 / 315)),
                    this.showVideoIframe("//www.youtube.com/embed/" + n + "?badge=0&autoplay=1&html5=1" + r, t, i)
                );
            },
            showVimeoVideo: function (n) {
                var i, t;
                return (
                    (t = this.checkDimensions(this.$element.data("width") || 560)),
                    (i = t / (500 / 281)),
                    this.showVideoIframe(n + "?autoplay=1", t, i)
                );
            },
            showInstagramVideo: function (n) {
                var i, t;
                return (
                    (t = this.checkDimensions(this.$element.data("width") || 612)),
                    this.resize(t),
                    (i = t + 80),
                    this.lightbox_body.html(
                        '<iframe width="' +
                            t +
                            '" height="' +
                            i +
                            '" src="' +
                            this.addTrailingSlash(n) +
                            'embed/" frameborder="0" allowfullscreen></iframe>'
                    ),
                    this.options.onContentLoaded.call(this),
                    this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
                );
            },
            showVideoIframe: function (n, t, i) {
                return (
                    (i = i || t),
                    this.resize(t),
                    this.lightbox_body.html(
                        '<div class="embed-responsive embed-responsive-16by9"><iframe width="' +
                            t +
                            '" height="' +
                            i +
                            '" src="' +
                            n +
                            '" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'
                    ),
                    this.options.onContentLoaded.call(this),
                    this.modal_arrows && this.modal_arrows.css("display", "none"),
                    this
                );
            },
            loadRemoteContent: function (t) {
                var r, i;
                return (
                    (i = this.$element.data("width") || 560),
                    this.resize(i),
                    (r = this.$element.data("disableExternalCheck") || !1),
                    r || this.isExternal(t)
                        ? (this.lightbox_body.html(
                              '<iframe width="' +
                                  i +
                                  '" height="' +
                                  i +
                                  '" src="' +
                                  t +
                                  '" frameborder="0" allowfullscreen></iframe>'
                          ),
                          this.options.onContentLoaded.call(this))
                        : this.lightbox_body.load(
                              t,
                              n.proxy(
                                  (function (n) {
                                      return function () {
                                          return n.$element.trigger("loaded.bs.modal");
                                      };
                                  })(this)
                              )
                          ),
                    this.modal_arrows && this.modal_arrows.css("display", "none"),
                    this
                );
            },
            isExternal: function (n) {
                var t;
                return (
                    (t = n.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/)),
                    "string" == typeof t[1] && t[1].length > 0 && t[1].toLowerCase() !== location.protocol
                        ? !0
                        : "string" == typeof t[2] &&
                            t[2].length > 0 &&
                            t[2].replace(
                                new RegExp(":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"),
                                ""
                            ) !== location.host
                          ? !0
                          : !1
                );
            },
            error: function (n) {
                return this.lightbox_body.html(n), this;
            },
            preloadImage: function (t, i) {
                var r;
                return (
                    (r = new Image()),
                    (null == i || i === !0) &&
                        ((r.onload = (function (t) {
                            return function () {
                                var i;
                                return (
                                    (i = n("<img />")),
                                    i.attr("src", r.src),
                                    i.addClass("img-responsive"),
                                    t.lightbox_body.html(i),
                                    t.modal_arrows && t.modal_arrows.css("display", "block"),
                                    i.load(function () {
                                        return (
                                            t.options.scale_height
                                                ? t.scaleHeight(r.height, r.width)
                                                : t.resize(r.width),
                                            t.options.onContentLoaded.call(t)
                                        );
                                    })
                                );
                            };
                        })(this)),
                        (r.onerror = (function (n) {
                            return function () {
                                return n.error("Failed to load image: " + t);
                            };
                        })(this))),
                    (r.src = t),
                    r
                );
            },
            scaleHeight: function (t, i) {
                var e, o, r, u, s, f;
                return (
                    (u = this.modal_header.outerHeight(!0) || 0),
                    (r = this.modal_footer.outerHeight(!0) || 0),
                    this.modal_footer.is(":visible") || (r = 0),
                    this.modal_header.is(":visible") || (u = 0),
                    (e = this.border.top + this.border.bottom + this.padding.top + this.padding.bottom),
                    (s =
                        parseFloat(this.modal_dialog.css("margin-top")) +
                        parseFloat(this.modal_dialog.css("margin-bottom"))),
                    (f = n(window).height() - e - s - u - r),
                    (o = Math.min(f / t, 1)),
                    this.modal_dialog.css("height", "auto").css("max-height", f),
                    this.resize(o * i)
                );
            },
            resize: function (t) {
                var i;
                return (
                    (i = t + this.border.left + this.padding.left + this.padding.right + this.border.right),
                    this.modal_dialog.css("width", "auto").css("max-width", i),
                    this.lightbox_container.find("a").css("line-height", function () {
                        return n(this).parent().height() + "px";
                    }),
                    this
                );
            },
            checkDimensions: function (n) {
                var t, i;
                return (
                    (i = n + this.border.left + this.padding.left + this.padding.right + this.border.right),
                    (t = document.body.clientWidth),
                    i > t && (n = this.modal_body.width()),
                    n
                );
            },
            close: function () {
                return this.modal.modal("hide");
            },
            addTrailingSlash: function (n) {
                return "/" !== n.substr(-1) && (n += "/"), n;
            },
        };
        n.fn.ekkoLightbox = function (i) {
            return this.each(function () {
                var r;
                return (
                    (r = n(this)),
                    (i = n.extend(
                        {
                            remote: r.attr("data-remote") || r.attr("href"),
                            gallery_parent_selector: r.attr("data-parent"),
                            type: r.attr("data-type"),
                        },
                        i,
                        r.data()
                    )),
                    new t(this, i),
                    this
                );
            });
        };
        n.fn.ekkoLightbox.defaults = {
            gallery_parent_selector: "document.body",
            left_arrow_class: ".glyphicon .glyphicon-chevron-left",
            right_arrow_class: ".glyphicon .glyphicon-chevron-right",
            directional_arrows: !0,
            type: null,
            always_show_close: !0,
            no_related: !1,
            scale_height: !0,
            loadingMessage: "Loading...",
            onShow: function () {},
            onShown: function () {},
            onHide: function () {},
            onHidden: function () {},
            onNavigate: function () {},
            onContentLoaded: function () {},
        };
    }.call(this);

    window.Modernizr = (function (n, t, i) {
    function a(n) {
        c.cssText = n;
    }
    function vt(n, t) {
        return a(y.join(n + ";") + (t || ""));
    }
    function h(n, t) {
        return typeof n === t;
    }
    function v(n, t) {
        return !!~("" + n).indexOf(t);
    }
    function lt(n, t) {
        var u, r;
        for (u in n) if (((r = n[u]), !v(r, "-") && c[r] !== i)) return t == "pfx" ? r : !0;
        return !1;
    }
    function yt(n, t, r) {
        var f, u;
        for (f in n) if (((u = t[n[f]]), u !== i)) return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u;
        return !1;
    }
    function f(n, t, i) {
        var r = n.charAt(0).toUpperCase() + n.slice(1),
            u = (n + " " + ot.join(r + " ") + r).split(" ");
        return h(t, "string") || h(t, "undefined")
            ? lt(u, t)
            : ((u = (n + " " + st.join(r + " ") + r).split(" ")), yt(u, t, i));
    }
    function pt() {
        u.input = (function (i) {
            for (var r = 0, u = i.length; r < u; r++) w[i[r]] = !!(i[r] in o);
            return w.list && (w.list = !!(t.createElement("datalist") && n.HTMLDataListElement)), w;
        })("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        u.inputtypes = (function (n) {
            for (var u = 0, r, f, e, h = n.length; u < h; u++)
                o.setAttribute("type", (f = n[u])),
                    (r = o.type !== "text"),
                    r &&
                        ((o.value = g),
                        (o.style.cssText = "position:absolute;visibility:hidden;"),
                        /^range$/.test(f) && o.style.WebkitAppearance !== i
                            ? (s.appendChild(o),
                              (e = t.defaultView),
                              (r =
                                  e.getComputedStyle &&
                                  e.getComputedStyle(o, null).WebkitAppearance !== "textfield" &&
                                  o.offsetHeight !== 0),
                              s.removeChild(o))
                            : /^(search|tel)$/.test(f) ||
                              (r = /^(url|email)$/.test(f)
                                  ? o.checkValidity && o.checkValidity() === !1
                                  : o.value != g)),
                    (ht[n[u]] = !!r);
            return ht;
        })("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var u = {},
        d = !0,
        s = t.documentElement,
        e = "modernizr",
        ut = t.createElement(e),
        c = ut.style,
        o = t.createElement("input"),
        g = ":)",
        ft = {}.toString,
        y = " -webkit- -moz- -o- -ms- ".split(" "),
        et = "Webkit Moz O ms",
        ot = et.split(" "),
        st = et.toLowerCase().split(" "),
        p = { svg: "http://www.w3.org/2000/svg" },
        r = {},
        ht = {},
        w = {},
        nt = [],
        tt = nt.slice,
        b,
        l = function (n, i, r, u) {
            var l,
                a,
                c,
                v,
                f = t.createElement("div"),
                h = t.body,
                o = h || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) (c = t.createElement("div")), (c.id = u ? u[r] : e + (r + 1)), f.appendChild(c);
            return (
                (l = ["&#173;", '<style id="s', e, '">', n, "</style>"].join("")),
                (f.id = e),
                ((h ? f : o).innerHTML += l),
                o.appendChild(f),
                h ||
                    ((o.style.background = ""),
                    (o.style.overflow = "hidden"),
                    (v = s.style.overflow),
                    (s.style.overflow = "hidden"),
                    s.appendChild(o)),
                (a = i(f, n)),
                h ? f.parentNode.removeChild(f) : (o.parentNode.removeChild(o), (s.style.overflow = v)),
                !!a
            );
        },
        at = function (t) {
            var i = n.matchMedia || n.msMatchMedia,
                r;
            return i
                ? (i(t) && i(t).matches) || !1
                : (l("@media " + t + " { #" + e + " { position: absolute; } }", function (t) {
                      r = (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == "absolute";
                  }),
                  r);
        },
        ct = (function () {
            function r(r, u) {
                u = u || t.createElement(n[r] || "div");
                r = "on" + r;
                var f = r in u;
                return (
                    f ||
                        (u.setAttribute || (u = t.createElement("div")),
                        u.setAttribute &&
                            u.removeAttribute &&
                            (u.setAttribute(r, ""),
                            (f = h(u[r], "function")),
                            h(u[r], "undefined") || (u[r] = i),
                            u.removeAttribute(r))),
                    (u = null),
                    f
                );
            }
            var n = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img",
            };
            return r;
        })(),
        it = {}.hasOwnProperty,
        rt,
        k;
    rt =
        h(it, "undefined") || h(it.call, "undefined")
            ? function (n, t) {
                  return t in n && h(n.constructor.prototype[t], "undefined");
              }
            : function (n, t) {
                  return it.call(n, t);
              };
    Function.prototype.bind ||
        (Function.prototype.bind = function (n) {
            var t = this,
                i,
                r;
            if (typeof t != "function") throw new TypeError();
            return (
                (i = tt.call(arguments, 1)),
                (r = function () {
                    var f, e, u;
                    return this instanceof r
                        ? ((f = function () {}),
                          (f.prototype = t.prototype),
                          (e = new f()),
                          (u = t.apply(e, i.concat(tt.call(arguments)))),
                          Object(u) === u)
                            ? u
                            : e
                        : t.apply(n, i.concat(tt.call(arguments)));
                }),
                r
            );
        });
    r.flexbox = function () {
        return f("flexWrap");
    };
    r.flexboxlegacy = function () {
        return f("boxDirection");
    };
    r.canvas = function () {
        var n = t.createElement("canvas");
        return !!(n.getContext && n.getContext("2d"));
    };
    r.canvastext = function () {
        return !!(u.canvas && h(t.createElement("canvas").getContext("2d").fillText, "function"));
    };
    r.webgl = function () {
        return !!n.WebGLRenderingContext;
    };
    r.touch = function () {
        var i;
        return (
            "ontouchstart" in n || (n.DocumentTouch && t instanceof DocumentTouch)
                ? (i = !0)
                : l(
                      ["@media (", y.join("touch-enabled),("), e, ")", "{#modernizr{top:9px;position:absolute}}"].join(
                          ""
                      ),
                      function (n) {
                          i = n.offsetTop === 9;
                      }
                  ),
            i
        );
    };
    r.geolocation = function () {
        return "geolocation" in navigator;
    };
    r.postmessage = function () {
        return !!n.postMessage;
    };
    r.websqldatabase = function () {
        return !!n.openDatabase;
    };
    r.indexedDB = function () {
        return !!f("indexedDB", n);
    };
    r.hashchange = function () {
        return ct("hashchange", n) && (t.documentMode === i || t.documentMode > 7);
    };
    r.history = function () {
        return !!(n.history && history.pushState);
    };
    r.draganddrop = function () {
        var n = t.createElement("div");
        return "draggable" in n || ("ondragstart" in n && "ondrop" in n);
    };
    r.websockets = function () {
        return "WebSocket" in n || "MozWebSocket" in n;
    };
    r.rgba = function () {
        return a("background-color:rgba(150,255,150,.5)"), v(c.backgroundColor, "rgba");
    };
    r.hsla = function () {
        return (
            a("background-color:hsla(120,40%,100%,.5)"), v(c.backgroundColor, "rgba") || v(c.backgroundColor, "hsla")
        );
    };
    r.multiplebgs = function () {
        return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background);
    };
    r.backgroundsize = function () {
        return f("backgroundSize");
    };
    r.borderimage = function () {
        return f("borderImage");
    };
    r.borderradius = function () {
        return f("borderRadius");
    };
    r.boxshadow = function () {
        return f("boxShadow");
    };
    r.textshadow = function () {
        return t.createElement("div").style.textShadow === "";
    };
    r.opacity = function () {
        return vt("opacity:.55"), /^0.55$/.test(c.opacity);
    };
    r.cssanimations = function () {
        return f("animationName");
    };
    r.csscolumns = function () {
        return f("columnCount");
    };
    r.cssgradients = function () {
        var n = "background-image:";
        return (
            a(
                (
                    n +
                    "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + n) +
                    y.join("linear-gradient(left top,#9f9, white);" + n)
                ).slice(0, -n.length)
            ),
            v(c.backgroundImage, "gradient")
        );
    };
    r.cssreflections = function () {
        return f("boxReflect");
    };
    r.csstransforms = function () {
        return !!f("transform");
    };
    r.csstransforms3d = function () {
        var n = !!f("perspective");
        return (
            n &&
                "webkitPerspective" in s.style &&
                l(
                    "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
                    function (t) {
                        n = t.offsetLeft === 9 && t.offsetHeight === 3;
                    }
                ),
            n
        );
    };
    r.csstransitions = function () {
        return f("transition");
    };
    r.fontface = function () {
        var n;
        return (
            l('@font-face {font-family:"font";src:url("https://")}', function (i, r) {
                var f = t.getElementById("smodernizr"),
                    u = f.sheet || f.styleSheet,
                    e = u ? (u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "") : "";
                n = /src/i.test(e) && e.indexOf(r.split(" ")[0]) === 0;
            }),
            n
        );
    };
    r.generatedcontent = function () {
        var n;
        return (
            l(
                ["#", e, "{font:0/0 a}#", e, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}'].join(""),
                function (t) {
                    n = t.offsetHeight >= 3;
                }
            ),
            n
        );
    };
    r.video = function () {
        var i = t.createElement("video"),
            n = !1;
        try {
            (n = !!i.canPlayType) &&
                ((n = new Boolean(n)),
                (n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")),
                (n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")),
                (n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")));
        } catch (r) {}
        return n;
    };
    r.audio = function () {
        var i = t.createElement("audio"),
            n = !1;
        try {
            (n = !!i.canPlayType) &&
                ((n = new Boolean(n)),
                (n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")),
                (n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, "")),
                (n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
                (n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, "")));
        } catch (r) {}
        return n;
    };
    r.localstorage = function () {
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
        } catch (n) {
            return !1;
        }
    };
    r.sessionstorage = function () {
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
        } catch (n) {
            return !1;
        }
    };
    r.webworkers = function () {
        return !!n.Worker;
    };
    r.applicationcache = function () {
        return !!n.applicationCache;
    };
    r.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(p.svg, "svg").createSVGRect;
    };
    r.inlinesvg = function () {
        var n = t.createElement("div");
        return (n.innerHTML = "<svg/>"), (n.firstChild && n.firstChild.namespaceURI) == p.svg;
    };
    r.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(ft.call(t.createElementNS(p.svg, "animate")));
    };
    r.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(ft.call(t.createElementNS(p.svg, "clipPath")));
    };
    for (k in r) rt(r, k) && ((b = k.toLowerCase()), (u[b] = r[k]()), nt.push((u[b] ? "" : "no-") + b));
    return (
        u.input || pt(),
        (u.addTest = function (n, t) {
            if (typeof n == "object") for (var r in n) rt(n, r) && u.addTest(r, n[r]);
            else {
                if (((n = n.toLowerCase()), u[n] !== i)) return u;
                t = typeof t == "function" ? t() : t;
                typeof d != "undefined" && d && (s.className += " " + (t ? "" : "no-") + n);
                u[n] = t;
            }
            return u;
        }),
        a(""),
        (ut = o = null),
        (function (n, t) {
            function p(n, t) {
                var i = n.createElement("p"),
                    r = n.getElementsByTagName("head")[0] || n.documentElement;
                return (i.innerHTML = "x<style>" + t + "</style>"), r.insertBefore(i.lastChild, r.firstChild);
            }
            function c() {
                var n = r.elements;
                return typeof n == "string" ? n.split(" ") : n;
            }
            function o(n) {
                var t = h[n[s]];
                return t || ((t = {}), e++, (n[s] = e), (h[e] = t)), t;
            }
            function l(n, r, u) {
                if ((r || (r = t), i)) return r.createElement(n);
                u || (u = o(r));
                var f;
                return (
                    (f = u.cache[n]
                        ? u.cache[n].cloneNode()
                        : y.test(n)
                          ? (u.cache[n] = u.createElem(n)).cloneNode()
                          : u.createElem(n)),
                    f.canHaveChildren && !v.test(n) && !f.tagUrn ? u.frag.appendChild(f) : f
                );
            }
            function w(n, r) {
                if ((n || (n = t), i)) return n.createDocumentFragment();
                r = r || o(n);
                for (var f = r.frag.cloneNode(), u = 0, e = c(), s = e.length; u < s; u++) f.createElement(e[u]);
                return f;
            }
            function b(n, t) {
                t.cache ||
                    ((t.cache = {}),
                    (t.createElem = n.createElement),
                    (t.createFrag = n.createDocumentFragment),
                    (t.frag = t.createFrag()));
                n.createElement = function (i) {
                    return r.shivMethods ? l(i, n, t) : t.createElem(i);
                };
                n.createDocumentFragment = Function(
                    "h,f",
                    "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                        c()
                            .join()
                            .replace(/[\w\-]+/g, function (n) {
                                return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")';
                            }) +
                        ");return n}"
                )(r, t.frag);
            }
            function a(n) {
                n || (n = t);
                var u = o(n);
                return (
                    !r.shivCSS ||
                        f ||
                        u.hasCSS ||
                        (u.hasCSS = !!p(
                            n,
                            "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
                        )),
                    i || b(n, u),
                    n
                );
            }
            var u = n.html5 || {},
                v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                y =
                    /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                f,
                s = "_html5shiv",
                e = 0,
                h = {},
                i,
                r;
            (function () {
                try {
                    var n = t.createElement("a");
                    n.innerHTML = "<xyz></xyz>";
                    f = "hidden" in n;
                    i =
                        n.childNodes.length == 1 ||
                        (function () {
                            t.createElement("a");
                            var n = t.createDocumentFragment();
                            return (
                                typeof n.cloneNode == "undefined" ||
                                typeof n.createDocumentFragment == "undefined" ||
                                typeof n.createElement == "undefined"
                            );
                        })();
                } catch (r) {
                    f = !0;
                    i = !0;
                }
            })();
            r = {
                elements:
                    u.elements ||
                    "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: u.shivCSS !== !1,
                supportsUnknownElements: i,
                shivMethods: u.shivMethods !== !1,
                type: "default",
                shivDocument: a,
                createElement: l,
                createDocumentFragment: w,
            };
            n.html5 = r;
            a(t);
        })(this, t),
        (u._version = "2.8.3"),
        (u._prefixes = y),
        (u._domPrefixes = st),
        (u._cssomPrefixes = ot),
        (u.mq = at),
        (u.hasEvent = ct),
        (u.testProp = function (n) {
            return lt([n]);
        }),
        (u.testAllProps = f),
        (u.testStyles = l),
        (u.prefixed = function (n, t, i) {
            return t ? f(n, t, i) : f(n, "pfx");
        }),
        (s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + nt.join(" ") : "")),
        u
    );
})(this, this.document);

$(document).ready(function () {
    $(".mobile-menu").on('click', function () {
        $(".menu").slideToggle();
    });
    $(function () {
        var n = "";
        $(".btn").on('click', function () {
            n = $(this).attr("data-rel");
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div")
                .not("." + n)
                .fadeOut()
                .removeClass("scale-anm");
            setTimeout(function () {
                $("." + n)
                    .fadeIn()
                    .addClass("scale-anm");
                $("#portfolio").fadeTo(300, 1);
            }, 300);
        });
    });
    $(function () {
        $("#toggle").on('click',function () {
            $(this).toggleClass("active");
            $("#overlay").toggleClass("open");
        });
    });
    $(function () {
        $("#partners-slider").owlCarousel({
            autoPlay: 3500,
            stopOnHover: !0,
            items: 6,
            itemsDesktop: [1170, 5],
            itemsDesktopSmall: [1024, 4],
            itemsTabletSmall: [768, 3],
            itemsMobile: [480, 1],
            pagination: !1,
            navigation: !1,
        });
    });
    $(function () {
        $("#testimonials").owlCarousel({
            autoPlay: 4e3,
            stopOnHover: !0,
            items: 2,
            itemsDesktop: [1170, 2],
            itemsDesktopSmall: [1024, 2],
            itemsTabletSmall: [768, 1],
            itemsMobile: [480, 1],
            pagination: !1,
            navigation: !1,
        });
    });
    $(".testimonials").owlCarousel({
        autoPlay: 4e3,
        stopOnHover: !0,
        items: 1,
        itemsDesktop: [1170, 1],
        itemsDesktopSmall: [1024, 1],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: !0,
        navigation: !1,
    });
    $(function () {
        $(".skills4 .progress .progress-bar").css("width", function () {
            return $(this).attr("aria-valuenow") + "%";
        });
    });
    $(".counter-count").each(function () {
        $(this)
            .prop("Counter", 0)
            .animate(
                { Counter: $(this).text() },
                {
                    duration: 2e3,
                    easing: "swing",
                    step: function (n) {
                        $(this).text(Math.ceil(n));
                    },
                }
            );
    });
});


jQuery(document).ready(function (n) {
    n(".videoplay-on-hover").hover(
        function () {
            n(this).find("video").length > 0 && n(this).find("video").get(0).play();
        },
        function () {
            n(this).find("video").length > 0 && n(this).find("video").get(0).pause();
        }
    );
});

var $ = jQuery.noConflict();
$(window).on("ready load resize", function () {
    function i() {
        $(".box-background").css({ opacity: 1 });
        $(".box-info").css({ opacity: 1 });
        $("#box-area").css("background-size", "100%");
    }
    function r() {
        $("body").hasClass("home") &&
            $(window).width() > 1220 &&
            (t++,
            t >= 2 && $(window).scrollTop() >= u && $(window).scrollTop() <= f
                ? $("html, body").stop().animate({ scrollTop: n }, 500)
                : $(window).scrollTop() == n && (t = 0));
    }
    $(".box").mouseenter(function () {
        if ($(window).width() > 1220) {
            var n = $(this)
                .find(".back-image")
                .css("background-image")
                .replace(/^url\(['"](.+)['"]\)/, "$1");
            $("#box-area").css("background-image", 'url("' + n + '")');
            $("#box-area").stop().animate({ backgroundSize: "100%" }, 0);
            $(".box-background").css({ opacity: 0 });
            $(this).find(".box-background").css({ opacity: 1 });
            $(".box-info").not(this).css({ opacity: 0 });
            $(this).find(".box-info").css({ opacity: 1 });
            $(this).css({ opacity: 1 });
            $(".box").not(this).removeClass("visible");
            setTimeout(function () {
                $("#box-area").stop().animate({ backgroundSize: "110%" }, 1e4);
            }, 100);
        }
    });
    $("#box-area").mouseleave(function () {
        i();
    });
    $(".visible").mouseleave(function () {
        $("#box-area").stop().css({ backgroundSize: "100%" }, 0);
    });
    $(".box").on('click', function (t) {
        if ($(window).width() > 1220) {
            t.preventDefault();
            var i = $(this).find(".box-link").attr("href");
            $(".box").not(this).addClass("disable-mouse");
            $(".box").animate({ borderWidth: 0 });
            $("#box-area").addClass("cover");
            $("body, html").animate({ scrollTop: n + "px" }, 300);
            $(".box").addClass("disable-mouse").animate({ opacity: 0 });
            setTimeout(function () {
                window.location = i;
            }, 1500);
        }
    });
    var n,
        u,
        f,
        t = (setInterval(r, 500), 0);
});

"function" != typeof Object.create &&
    (Object.create = function (n) {
        function t() {}
        return (t.prototype = n), new t();
    }),
    (function (n, t, i) {
        var r = {
            init: function (t, i) {
                this.$elem = n(i);
                this.options = n.extend({}, n.fn.owlCarousel.options, this.$elem.data(), t);
                this.userOptions = t;
                this.loadContent();
            },
            loadContent: function () {
                function r(n) {
                    var i,
                        r = "";
                    if ("function" == typeof t.options.jsonSuccess) t.options.jsonSuccess.apply(this, [n]);
                    else {
                        for (i in n.owl) n.owl.hasOwnProperty(i) && (r += n.owl[i].item);
                        t.$elem.html(r);
                    }
                    t.logIn();
                }
                var t = this,
                    i;
                "function" == typeof t.options.beforeInit && t.options.beforeInit.apply(this, [t.$elem]);
                "string" == typeof t.options.jsonPath ? ((i = t.options.jsonPath), n.getJSON(i, r)) : t.logIn();
            },
            logIn: function () {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
                this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
                this.$elem.css({ opacity: 0 });
                this.orignalItems = this.options.items;
                this.checkBrowser();
                this.wrapperWidth = 0;
                this.checkVisible = null;
                this.setVars();
            },
            setVars: function () {
                if (0 === this.$elem.children().length) return !1;
                this.baseClass();
                this.eventTypes();
                this.$userItems = this.$elem.children();
                this.itemsAmount = this.$userItems.length;
                this.wrapItems();
                this.$owlItems = this.$elem.find(".owl-item");
                this.$owlWrapper = this.$elem.find(".owl-wrapper");
                this.playDirection = "next";
                this.prevItem = 0;
                this.prevArr = [0];
                this.currentItem = 0;
                this.customEvents();
                this.onStartup();
            },
            onStartup: function () {
                this.updateItems();
                this.calculateAll();
                this.buildControls();
                this.updateControls();
                this.response();
                this.moveEvents();
                this.stopOnHover();
                this.owlStatus();
                !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
                !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
                this.play();
                this.$elem.find(".owl-wrapper").css("display", "block");
                this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
                this.onstartup = !1;
                this.eachMoveUpdate();
                "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
            },
            eachMoveUpdate: function () {
                !0 === this.options.lazyLoad && this.lazyLoad();
                !0 === this.options.autoHeight && this.autoHeight();
                this.onVisibleItems();
                "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]);
            },
            updateVars: function () {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
                this.watchVisibility();
                this.updateItems();
                this.calculateAll();
                this.updatePosition();
                this.updateControls();
                this.eachMoveUpdate();
                "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]);
            },
            reload: function () {
                var n = this;
                t.setTimeout(function () {
                    n.updateVars();
                }, 0);
            },
            watchVisibility: function () {
                var n = this;
                if (!1 === n.$elem.is(":visible"))
                    n.$elem.css({ opacity: 0 }), t.clearInterval(n.autoPlayInterval), t.clearInterval(n.checkVisible);
                else return !1;
                n.checkVisible = t.setInterval(function () {
                    n.$elem.is(":visible") &&
                        (n.reload(), n.$elem.animate({ opacity: 1 }, 200), t.clearInterval(n.checkVisible));
                }, 500);
            },
            wrapItems: function () {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
                this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
                this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
                this.$elem.css("display", "block");
            },
            baseClass: function () {
                var n = this.$elem.hasClass(this.options.baseClass),
                    t = this.$elem.hasClass(this.options.theme);
                n || this.$elem.addClass(this.options.baseClass);
                t || this.$elem.addClass(this.options.theme);
            },
            updateItems: function () {
                var t, i;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem)
                    return (
                        (this.options.items = this.orignalItems = 1),
                        (this.options.itemsCustom = !1),
                        (this.options.itemsDesktop = !1),
                        (this.options.itemsDesktopSmall = !1),
                        (this.options.itemsTablet = !1),
                        (this.options.itemsTabletSmall = !1),
                        (this.options.itemsMobile = !1)
                    );
                if (
                    ((t = n(this.options.responsiveBaseWidth).width()),
                    t > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems),
                    !1 !== this.options.itemsCustom)
                )
                    for (
                        this.options.itemsCustom.sort(function (n, t) {
                            return n[0] - t[0];
                        }),
                            i = 0;
                        i < this.options.itemsCustom.length;
                        i += 1
                    )
                        this.options.itemsCustom[i][0] <= t && (this.options.items = this.options.itemsCustom[i][1]);
                else
                    t <= this.options.itemsDesktop[0] &&
                        !1 !== this.options.itemsDesktop &&
                        (this.options.items = this.options.itemsDesktop[1]),
                        t <= this.options.itemsDesktopSmall[0] &&
                            !1 !== this.options.itemsDesktopSmall &&
                            (this.options.items = this.options.itemsDesktopSmall[1]),
                        t <= this.options.itemsTablet[0] &&
                            !1 !== this.options.itemsTablet &&
                            (this.options.items = this.options.itemsTablet[1]),
                        t <= this.options.itemsTabletSmall[0] &&
                            !1 !== this.options.itemsTabletSmall &&
                            (this.options.items = this.options.itemsTabletSmall[1]),
                        t <= this.options.itemsMobile[0] &&
                            !1 !== this.options.itemsMobile &&
                            (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount &&
                    !0 === this.options.itemsScaleUp &&
                    (this.options.items = this.itemsAmount);
            },
            response: function () {
                var i = this,
                    u,
                    r;
                if (!0 !== i.options.responsive) return !1;
                r = n(t).width();
                i.resizer = function () {
                    n(t).width() !== r &&
                        (!1 !== i.options.autoPlay && t.clearInterval(i.autoPlayInterval),
                        t.clearTimeout(u),
                        (u = t.setTimeout(function () {
                            r = n(t).width();
                            i.updateVars();
                        }, i.options.responsiveRefreshRate)));
                };
                n(t).resize(i.resizer);
            },
            updatePosition: function () {
                this.jumpTo(this.currentItem);
                !1 !== this.options.autoPlay && this.checkAp();
            },
            appendItemsSizes: function () {
                var t = this,
                    i = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function (u) {
                    var f = n(this);
                    f.css({ width: t.itemWidth }).data("owl-item", Number(u));
                    (0 == u % t.options.items || u === r) && (u > r || (i += 1));
                    f.data("owl-roundPages", i);
                });
            },
            appendWrapperSizes: function () {
                this.$owlWrapper.css({ width: this.$owlItems.length * this.itemWidth * 2, left: 0 });
                this.appendItemsSizes();
            },
            calculateAll: function () {
                this.calculateWidth();
                this.appendWrapperSizes();
                this.loops();
                this.max();
            },
            calculateWidth: function () {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items);
            },
            max: function () {
                var n = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return (
                    this.options.items > this.itemsAmount
                        ? (this.maximumPixels = n = this.maximumItem = 0)
                        : ((this.maximumItem = this.itemsAmount - this.options.items), (this.maximumPixels = n)),
                    n
                );
            },
            min: function () {
                return 0;
            },
            loops: function () {
                var r = 0,
                    u = 0,
                    t,
                    i;
                for (this.positionsInArray = [0], this.pagesInArray = [], t = 0; t < this.itemsAmount; t += 1)
                    (u += this.itemWidth),
                        this.positionsInArray.push(-u),
                        !0 === this.options.scrollPerPage &&
                            ((i = n(this.$owlItems[t])),
                            (i = i.data("owl-roundPages")),
                            i !== r && ((this.pagesInArray[r] = this.positionsInArray[t]), (r = i)));
            },
            buildControls: function () {
                (!0 === this.options.navigation || !0 === this.options.pagination) &&
                    (this.owlControls = n('<div class="owl-controls"/>')
                        .toggleClass("clickable", !this.browser.isTouch)
                        .appendTo(this.$elem));
                !0 === this.options.pagination && this.buildPagination();
                !0 === this.options.navigation && this.buildButtons();
            },
            buildButtons: function () {
                var t = this,
                    i = n('<div class="owl-buttons"/>');
                t.owlControls.append(i);
                t.buttonPrev = n("<div/>", { class: "owl-prev", html: t.options.navigationText[0] || "" });
                t.buttonNext = n("<div/>", { class: "owl-next", html: t.options.navigationText[1] || "" });
                i.append(t.buttonPrev).append(t.buttonNext);
                i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (n) {
                    n.preventDefault();
                });
                i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (i) {
                    i.preventDefault();
                    n(this).hasClass("owl-next") ? t.next() : t.prev();
                });
            },
            buildPagination: function () {
                var t = this;
                t.paginationWrapper = n('<div class="owl-pagination"/>');
                t.owlControls.append(t.paginationWrapper);
                t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (i) {
                    i.preventDefault();
                    Number(n(this).data("owl-page")) !== t.currentItem && t.goTo(Number(n(this).data("owl-page")), !0);
                });
            },
            updatePagination: function () {
                var r, u, f, t, i, e;
                if (!1 === this.options.pagination) return !1;
                for (
                    this.paginationWrapper.html(""),
                        r = 0,
                        u = this.itemsAmount - (this.itemsAmount % this.options.items),
                        t = 0;
                    t < this.itemsAmount;
                    t += 1
                )
                    0 == t % this.options.items &&
                        ((r += 1),
                        u === t && (f = this.itemsAmount - this.options.items),
                        (i = n("<div/>", { class: "owl-page" })),
                        (e = n("<span></span>", {
                            text: !0 === this.options.paginationNumbers ? r : "",
                            class: !0 === this.options.paginationNumbers ? "owl-numbers" : "",
                        })),
                        i.append(e),
                        i.data("owl-page", u === t ? f : t),
                        i.data("owl-roundPages", r),
                        this.paginationWrapper.append(i));
                this.checkPagination();
            },
            checkPagination: function () {
                var t = this;
                if (!1 === t.options.pagination) return !1;
                t.paginationWrapper.find(".owl-page").each(function () {
                    n(this).data("owl-roundPages") === n(t.$owlItems[t.currentItem]).data("owl-roundPages") &&
                        (t.paginationWrapper.find(".owl-page").removeClass("active"), n(this).addClass("active"));
                });
            },
            checkNavigation: function () {
                if (!1 === this.options.navigation) return !1;
                !1 === this.options.rewindNav &&
                    (0 === this.currentItem && 0 === this.maximumItem
                        ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled"))
                        : 0 === this.currentItem && 0 !== this.maximumItem
                          ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled"))
                          : this.currentItem === this.maximumItem
                            ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled"))
                            : 0 !== this.currentItem &&
                              this.currentItem !== this.maximumItem &&
                              (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")));
            },
            updateControls: function () {
                this.updatePagination();
                this.checkNavigation();
                this.owlControls &&
                    (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show());
            },
            destroyControls: function () {
                this.owlControls && this.owlControls.remove();
            },
            next: function (n) {
                if (this.isTransition) return !1;
                if (
                    ((this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1),
                    this.currentItem >
                        this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                )
                    if (!0 === this.options.rewindNav) (this.currentItem = 0), (n = "rewind");
                    else return (this.currentItem = this.maximumItem), !1;
                this.goTo(this.currentItem, n);
            },
            prev: function (n) {
                if (this.isTransition) return !1;
                if (
                    ((this.currentItem =
                        !0 === this.options.scrollPerPage &&
                        0 < this.currentItem &&
                        this.currentItem < this.options.items
                            ? 0
                            : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1)),
                    0 > this.currentItem)
                )
                    if (!0 === this.options.rewindNav) (this.currentItem = this.maximumItem), (n = "rewind");
                    else return (this.currentItem = 0), !1;
                this.goTo(this.currentItem, n);
            },
            goTo: function (n, i, r) {
                var u = this;
                if (u.isTransition) return !1;
                if (
                    ("function" == typeof u.options.beforeMove && u.options.beforeMove.apply(this, [u.$elem]),
                    n >= u.maximumItem ? (n = u.maximumItem) : 0 >= n && (n = 0),
                    (u.currentItem = u.owl.currentItem = n),
                    !1 !== u.options.transitionStyle &&
                        "drag" !== r &&
                        1 === u.options.items &&
                        !0 === u.browser.support3d)
                )
                    return (
                        u.swapSpeed(0),
                        !0 === u.browser.support3d
                            ? u.transition3d(u.positionsInArray[n])
                            : u.css2slide(u.positionsInArray[n], 1),
                        u.afterGo(),
                        u.singleItemTransition(),
                        !1
                    );
                n = u.positionsInArray[n];
                !0 === u.browser.support3d
                    ? ((u.isCss3Finish = !1),
                      !0 === i
                          ? (u.swapSpeed("paginationSpeed"),
                            t.setTimeout(function () {
                                u.isCss3Finish = !0;
                            }, u.options.paginationSpeed))
                          : "rewind" === i
                            ? (u.swapSpeed(u.options.rewindSpeed),
                              t.setTimeout(function () {
                                  u.isCss3Finish = !0;
                              }, u.options.rewindSpeed))
                            : (u.swapSpeed("slideSpeed"),
                              t.setTimeout(function () {
                                  u.isCss3Finish = !0;
                              }, u.options.slideSpeed)),
                      u.transition3d(n))
                    : !0 === i
                      ? u.css2slide(n, u.options.paginationSpeed)
                      : "rewind" === i
                        ? u.css2slide(n, u.options.rewindSpeed)
                        : u.css2slide(n, u.options.slideSpeed);
                u.afterGo();
            },
            jumpTo: function (n) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
                n >= this.maximumItem || -1 === n ? (n = this.maximumItem) : 0 >= n && (n = 0);
                this.swapSpeed(0);
                !0 === this.browser.support3d
                    ? this.transition3d(this.positionsInArray[n])
                    : this.css2slide(this.positionsInArray[n], 1);
                this.currentItem = this.owl.currentItem = n;
                this.afterGo();
            },
            afterGo: function () {
                this.prevArr.push(this.currentItem);
                this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
                this.prevArr.shift(0);
                this.prevItem !== this.currentItem &&
                    (this.checkPagination(),
                    this.checkNavigation(),
                    this.eachMoveUpdate(),
                    !1 !== this.options.autoPlay && this.checkAp());
                "function" == typeof this.options.afterMove &&
                    this.prevItem !== this.currentItem &&
                    this.options.afterMove.apply(this, [this.$elem]);
            },
            stop: function () {
                this.apStatus = "stop";
                t.clearInterval(this.autoPlayInterval);
            },
            checkAp: function () {
                "stop" !== this.apStatus && this.play();
            },
            play: function () {
                var n = this;
                if (((n.apStatus = "play"), !1 === n.options.autoPlay)) return !1;
                t.clearInterval(n.autoPlayInterval);
                n.autoPlayInterval = t.setInterval(function () {
                    n.next(!0);
                }, n.options.autoPlay);
            },
            swapSpeed: function (n) {
                "slideSpeed" === n
                    ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed))
                    : "paginationSpeed" === n
                      ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed))
                      : "string" != typeof n && this.$owlWrapper.css(this.addCssSpeed(n));
            },
            addCssSpeed: function (n) {
                return {
                    "-webkit-transition": "all " + n + "ms ease",
                    "-moz-transition": "all " + n + "ms ease",
                    "-o-transition": "all " + n + "ms ease",
                    transition: "all " + n + "ms ease",
                };
            },
            removeTransition: function () {
                return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" };
            },
            doTranslate: function (n) {
                return {
                    "-webkit-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + n + "px, 0px, 0px)",
                    transform: "translate3d(" + n + "px, 0px,0px)",
                };
            },
            transition3d: function (n) {
                this.$owlWrapper.css(this.doTranslate(n));
            },
            css2move: function (n) {
                this.$owlWrapper.css({ left: n });
            },
            css2slide: function (n, t) {
                var i = this;
                i.isCssFinish = !1;
                i.$owlWrapper.stop(!0, !0).animate(
                    { left: n },
                    {
                        duration: t || i.options.slideSpeed,
                        complete: function () {
                            i.isCssFinish = !0;
                        },
                    }
                );
            },
            checkBrowser: function () {
                var n = i.createElement("div");
                n.style.cssText =
                    "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
                n = n.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
                this.browser = {
                    support3d: null !== n && 1 === n.length,
                    isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints,
                };
            },
            moveEvents: function () {
                (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) &&
                    (this.gestures(), this.disabledEvents());
            },
            eventTypes: function () {
                var n = ["s", "e", "x"];
                this.ev_types = {};
                !0 === this.options.mouseDrag && !0 === this.options.touchDrag
                    ? (n = [
                          "touchstart.owl mousedown.owl",
                          "touchmove.owl mousemove.owl",
                          "touchend.owl touchcancel.owl mouseup.owl",
                      ])
                    : !1 === this.options.mouseDrag && !0 === this.options.touchDrag
                      ? (n = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"])
                      : !0 === this.options.mouseDrag &&
                        !1 === this.options.touchDrag &&
                        (n = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
                this.ev_types.start = n[0];
                this.ev_types.move = n[1];
                this.ev_types.end = n[2];
            },
            disabledEvents: function () {
                this.$elem.on("dragstart.owl", function (n) {
                    n.preventDefault();
                });
                this.$elem.on("mousedown.disableTextSelect", function (t) {
                    return n(t.target).is("input, textarea, select, option");
                });
            },
            gestures: function () {
                function f(n) {
                    if (void 0 !== n.touches) return { x: n.touches[0].pageX, y: n.touches[0].pageY };
                    if (void 0 === n.touches) {
                        if (void 0 !== n.pageX) return { x: n.pageX, y: n.pageY };
                        if (void 0 === n.pageX) return { x: n.clientX, y: n.clientY };
                    }
                }
                function e(t) {
                    "on" === t
                        ? (n(i).on(r.ev_types.move, o), n(i).on(r.ev_types.end, s))
                        : "off" === t && (n(i).off(r.ev_types.move), n(i).off(r.ev_types.end));
                }
                function o(e) {
                    e = e.originalEvent || e || t.event;
                    r.newPosX = f(e).x - u.offsetX;
                    r.newPosY = f(e).y - u.offsetY;
                    r.newRelativeX = r.newPosX - u.relativePos;
                    "function" == typeof r.options.startDragging &&
                        !0 !== u.dragging &&
                        0 !== r.newRelativeX &&
                        ((u.dragging = !0), r.options.startDragging.apply(r, [r.$elem]));
                    (8 < r.newRelativeX || -8 > r.newRelativeX) &&
                        !0 === r.browser.isTouch &&
                        (void 0 !== e.preventDefault ? e.preventDefault() : (e.returnValue = !1), (u.sliding = !0));
                    (10 < r.newPosY || -10 > r.newPosY) && !1 === u.sliding && n(i).off("touchmove.owl");
                    r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5);
                    !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX);
                }
                function s(i) {
                    i = i.originalEvent || i || t.event;
                    var f;
                    i.target = i.target || i.srcElement;
                    u.dragging = !1;
                    !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing");
                    r.dragDirection = r.owl.dragDirection = 0 > r.newRelativeX ? "left" : "right";
                    0 !== r.newRelativeX &&
                        ((f = r.getNewPosition()),
                        r.goTo(f, !1, "drag"),
                        u.targetElement === i.target &&
                            !0 !== r.browser.isTouch &&
                            (n(i.target).on("click.disable", function (t) {
                                t.stopImmediatePropagation();
                                t.stopPropagation();
                                t.preventDefault();
                                n(t.target).off("click.disable");
                            }),
                            (i = n._data(i.target, "events").click),
                            (f = i.pop()),
                            i.splice(0, 0, f)));
                    e("off");
                }
                var r = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null,
                    };
                r.isCssFinish = !0;
                r.$elem.on(r.ev_types.start, ".owl-wrapper", function (i) {
                    i = i.originalEvent || i || t.event;
                    var o;
                    if (3 === i.which) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (
                            (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish) ||
                            (!1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish)
                        )
                            return !1;
                        !1 !== r.options.autoPlay && t.clearInterval(r.autoPlayInterval);
                        !0 === r.browser.isTouch ||
                            r.$owlWrapper.hasClass("grabbing") ||
                            r.$owlWrapper.addClass("grabbing");
                        r.newPosX = 0;
                        r.newRelativeX = 0;
                        n(this).css(r.removeTransition());
                        o = n(this).position();
                        u.relativePos = o.left;
                        u.offsetX = f(i).x - o.left;
                        u.offsetY = f(i).y - o.top;
                        e("on");
                        u.sliding = !1;
                        u.targetElement = i.target || i.srcElement;
                    }
                });
            },
            getNewPosition: function () {
                var n = this.closestItem();
                return (
                    n > this.maximumItem
                        ? (n = this.currentItem = this.maximumItem)
                        : 0 <= this.newPosX && (this.currentItem = n = 0),
                    n
                );
            },
            closestItem: function () {
                var t = this,
                    i = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray,
                    u = t.newPosX,
                    r = null;
                return (
                    n.each(i, function (f, e) {
                        u - t.itemWidth / 20 > i[f + 1] && u - t.itemWidth / 20 < e && "left" === t.moveDirection()
                            ? ((r = e),
                              (t.currentItem = !0 === t.options.scrollPerPage ? n.inArray(r, t.positionsInArray) : f))
                            : u + t.itemWidth / 20 < e &&
                              u + t.itemWidth / 20 > (i[f + 1] || i[f] - t.itemWidth) &&
                              "right" === t.moveDirection() &&
                              (!0 === t.options.scrollPerPage
                                  ? ((r = i[f + 1] || i[i.length - 1]),
                                    (t.currentItem = n.inArray(r, t.positionsInArray)))
                                  : ((r = i[f + 1]), (t.currentItem = f + 1)));
                    }),
                    t.currentItem
                );
            },
            moveDirection: function () {
                var n;
                return (
                    0 > this.newRelativeX
                        ? ((n = "right"), (this.playDirection = "next"))
                        : ((n = "left"), (this.playDirection = "prev")),
                    n
                );
            },
            customEvents: function () {
                var n = this;
                n.$elem.on("owl.next", function () {
                    n.next();
                });
                n.$elem.on("owl.prev", function () {
                    n.prev();
                });
                n.$elem.on("owl.play", function (t, i) {
                    n.options.autoPlay = i;
                    n.play();
                    n.hoverStatus = "play";
                });
                n.$elem.on("owl.stop", function () {
                    n.stop();
                    n.hoverStatus = "stop";
                });
                n.$elem.on("owl.goTo", function (t, i) {
                    n.goTo(i);
                });
                n.$elem.on("owl.jumpTo", function (t, i) {
                    n.jumpTo(i);
                });
            },
            stopOnHover: function () {
                var n = this;
                !0 === n.options.stopOnHover &&
                    !0 !== n.browser.isTouch &&
                    !1 !== n.options.autoPlay &&
                    (n.$elem.on("mouseover", function () {
                        n.stop();
                    }),
                    n.$elem.on("mouseout", function () {
                        "stop" !== n.hoverStatus && n.play();
                    }));
            },
            lazyLoad: function () {
                var r, t, u, i, f;
                if (!1 === this.options.lazyLoad) return !1;
                for (r = 0; r < this.itemsAmount; r += 1)
                    (t = n(this.$owlItems[r])),
                        "loaded" !== t.data("owl-loaded") &&
                            ((u = t.data("owl-item")),
                            (i = t.find(".lazyOwl")),
                            "string" != typeof i.data("src")
                                ? t.data("owl-loaded", "loaded")
                                : (void 0 === t.data("owl-loaded") &&
                                      (i.hide(), t.addClass("loading").data("owl-loaded", "checked")),
                                  (f = !0 === this.options.lazyFollow ? u >= this.currentItem : !0) &&
                                      u < this.currentItem + this.options.items &&
                                      i.length &&
                                      this.lazyPreload(t, i)));
            },
            lazyPreload: function (n, i) {
                function u() {
                    n.data("owl-loaded", "loaded").removeClass("loading");
                    i.removeAttr("data-src");
                    "fade" === r.options.lazyEffect ? i.fadeIn(400) : i.show();
                    "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem]);
                }
                function f() {
                    e += 1;
                    r.completeImg(i.get(0)) || !0 === o ? u() : 100 >= e ? t.setTimeout(f, 100) : u();
                }
                var r = this,
                    e = 0,
                    o;
                "DIV" === i.prop("tagName")
                    ? (i.css("background-image", "url(" + i.data("src") + ")"), (o = !0))
                    : (i[0].src = i.data("src"));
                f();
            },
            autoHeight: function () {
                function u() {
                    var r = n(i.$owlItems[i.currentItem]).height();
                    i.wrapperOuter.css("height", r + "px");
                    i.wrapperOuter.hasClass("autoHeight") ||
                        t.setTimeout(function () {
                            i.wrapperOuter.addClass("autoHeight");
                        }, 0);
                }
                function f() {
                    r += 1;
                    i.completeImg(e.get(0)) ? u() : 100 >= r ? t.setTimeout(f, 100) : i.wrapperOuter.css("height", "");
                }
                var i = this,
                    e = n(i.$owlItems[i.currentItem]).find("img"),
                    r;
                void 0 !== e.get(0) ? ((r = 0), f()) : u();
            },
            completeImg: function (n) {
                return !n.complete || ("undefined" != typeof n.naturalWidth && 0 === n.naturalWidth) ? !1 : !0;
            },
            onVisibleItems: function () {
                var t;
                for (
                    !0 === this.options.addClassActive && this.$owlItems.removeClass("active"),
                        this.visibleItems = [],
                        t = this.currentItem;
                    t < this.currentItem + this.options.items;
                    t += 1
                )
                    this.visibleItems.push(t),
                        !0 === this.options.addClassActive && n(this.$owlItems[t]).addClass("active");
                this.owl.visibleItems = this.visibleItems;
            },
            transitionTypes: function (n) {
                this.outClass = "owl-" + n + "-out";
                this.inClass = "owl-" + n + "-in";
            },
            singleItemTransition: function () {
                var n = this,
                    u = n.outClass,
                    f = n.inClass,
                    t = n.$owlItems.eq(n.currentItem),
                    i = n.$owlItems.eq(n.prevItem),
                    e = Math.abs(n.positionsInArray[n.currentItem]) + n.positionsInArray[n.prevItem],
                    r = Math.abs(n.positionsInArray[n.currentItem]) + n.itemWidth / 2;
                n.isTransition = !0;
                n.$owlWrapper
                    .addClass("owl-origin")
                    .css({
                        "-webkit-transform-origin": r + "px",
                        "-moz-perspective-origin": r + "px",
                        "perspective-origin": r + "px",
                    });
                i.css({ position: "relative", left: e + "px" })
                    .addClass(u)
                    .on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                        n.endPrev = !0;
                        i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                        n.clearTransStyle(i, u);
                    });
                t.addClass(f).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                    n.endCurrent = !0;
                    t.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                    n.clearTransStyle(t, f);
                });
            },
            clearTransStyle: function (n, t) {
                n.css({ position: "", left: "" }).removeClass(t);
                this.endPrev &&
                    this.endCurrent &&
                    (this.$owlWrapper.removeClass("owl-origin"),
                    (this.isTransition = this.endCurrent = this.endPrev = !1));
            },
            owlStatus: function () {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection,
                };
            },
            clearEvents: function () {
                this.$elem.off(".owl owl mousedown.disableTextSelect");
                n(i).off(".owl owl");
                n(t).off("resize", this.resizer);
            },
            unWrap: function () {
                0 !== this.$elem.children().length &&
                    (this.$owlWrapper.unwrap(),
                    this.$userItems.unwrap().unwrap(),
                    this.owlControls && this.owlControls.remove());
                this.clearEvents();
                this.$elem
                    .attr("style", this.$elem.data("owl-originalStyles") || "")
                    .attr("class", this.$elem.data("owl-originalClasses"));
            },
            destroy: function () {
                this.stop();
                t.clearInterval(this.checkVisible);
                this.unWrap();
                this.$elem.removeData();
            },
            reinit: function (t) {
                t = n.extend({}, this.userOptions, t);
                this.unWrap();
                this.init(t, this.$elem);
            },
            addItem: function (n, t) {
                var i;
                if (!n) return !1;
                if (0 === this.$elem.children().length) return this.$elem.append(n), this.setVars(), !1;
                this.unWrap();
                i = void 0 === t || -1 === t ? -1 : t;
                i >= this.$userItems.length || -1 === i
                    ? this.$userItems.eq(-1).after(n)
                    : this.$userItems.eq(i).before(n);
                this.setVars();
            },
            removeItem: function (n) {
                if (0 === this.$elem.children().length) return !1;
                n = void 0 === n || -1 === n ? -1 : n;
                this.unWrap();
                this.$userItems.eq(n).remove();
                this.setVars();
            },
        };
        n.fn.owlCarousel = function (t) {
            return this.each(function () {
                if (!0 === n(this).data("owl-init")) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this);
                n.data(this, "owlCarousel", i);
            });
        };
        n.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1,
        };
    })(jQuery, window, document),
    (function () {
        function n() {
            const n = {};
            return (
                (n.init = function (n, t) {
                    t = t || {};
                    const i = {
                        autoPlay: (t.autoPlay || 3500) + 1e3,
                        stopOnHover: t.stopOnHover || !0,
                        items: t.items || 1,
                        itemsDesktop: t.itemsDesktop || [1170, 1],
                        itemsDesktopSmall: t.itemsDesktopSmall || [1024, 1],
                        itemsTabletSmall: t.itemsTabletSmall || [768, 1],
                        itemsMobile: t.itemsMobile || [480, 1],
                        pagination: t.pagination || !1,
                        navigation: t.navigation || !1,
                    };
                    n.owlCarousel(i);
                }),
                n
            );
        }
        window.carousel = n();
    })();

$(function () {
    var n = $("iframe[src^='//www.youtube.com']"),
        t = $("body");
    n.each(function () {
        $(this)
            .data("aspectRatio", this.height / this.width)
            .removeAttr("height")
            .removeAttr("width");
    });
    $(window)
        .resize(function () {
            var i = t.width();
            n.each(function () {
                var n = $(this);
                n.width(i).height(i * n.data("aspectRatio"));
            });
        })
        .resize();
});

$(function () {
    $(".nav-tabs a").on("click", function (n) {
        n.preventDefault();
        $(this).tab("show");
    });
    $(".portfolio a.over").each(function () {
        overlay = $('<span class="overlay"><span class="fui-eye"></span></span>');
        $(this).append(overlay);
    });
});




