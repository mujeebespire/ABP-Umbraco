function addjQueryValidatorMethod(n, t, i) {
    $.validator.addMethod(n, i, "");
    $.validator.unobtrusive.adapters.add(n, t, function (i) {
        for (var f = {}, u, r = 0; r < t.length; r++) (u = t[r]), (f[u] = i.params[u]);
        i.rules[n] = f;
        i.messages[n] = i.message;
    });
}
if (
    (!(function (n, t) {
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = n.document
                  ? t(n, !0)
                  : function (n) {
                        if (!n.document) throw new Error("jQuery requires a window with a document");
                        return t(n);
                    })
            : t(n);
    })("undefined" != typeof window ? window : this, function (n, t) {
        function ii(n) {
            var t = !!n && "length" in n && n.length,
                r = i.type(n);
            return "function" === r || i.isWindow(n)
                ? !1
                : "array" === r || 0 === t || ("number" == typeof t && t > 0 && t - 1 in n);
        }
        function ri(n, t, r) {
            if (i.isFunction(t))
                return i.grep(n, function (n, i) {
                    return !!t.call(n, i, n) !== r;
                });
            if (t.nodeType)
                return i.grep(n, function (n) {
                    return (n === t) !== r;
                });
            if ("string" == typeof t) {
                if (bf.test(t)) return i.filter(t, n, r);
                t = i.filter(t, n);
            }
            return i.grep(n, function (n) {
                return lt.call(t, n) > -1 !== r;
            });
        }
        function hr(n, t) {
            while ((n = n[t]) && 1 !== n.nodeType);
            return n;
        }
        function kf(n) {
            var t = {};
            return (
                i.each(n.match(h) || [], function (n, i) {
                    t[i] = !0;
                }),
                t
            );
        }
        function yt() {
            u.removeEventListener("DOMContentLoaded", yt);
            n.removeEventListener("load", yt);
            i.ready();
        }
        function et() {
            this.expando = i.expando + et.uid++;
        }
        function lr(n, t, r) {
            var u;
            if (void 0 === r && 1 === n.nodeType)
                if (
                    ((u = "data-" + t.replace(cr, "-$&").toLowerCase()), (r = n.getAttribute(u)), "string" == typeof r)
                ) {
                    try {
                        r =
                            "true" === r
                                ? !0
                                : "false" === r
                                  ? !1
                                  : "null" === r
                                    ? null
                                    : +r + "" === r
                                      ? +r
                                      : df.test(r)
                                        ? i.parseJSON(r)
                                        : r;
                    } catch (f) {}
                    e.set(n, t, r);
                } else r = void 0;
            return r;
        }
        function vr(n, t, r, u) {
            var h,
                e = 1,
                l = 20,
                c = u
                    ? function () {
                          return u.cur();
                      }
                    : function () {
                          return i.css(n, t, "");
                      },
                s = c(),
                o = (r && r[3]) || (i.cssNumber[t] ? "" : "px"),
                f = (i.cssNumber[t] || ("px" !== o && +s)) && ot.exec(i.css(n, t));
            if (f && f[3] !== o) {
                o = o || f[3];
                r = r || [];
                f = +s || 1;
                do (e = e || ".5"), (f /= e), i.style(n, t, f + o);
                while (e !== (e = c() / s) && 1 !== e && --l);
            }
            return (
                r &&
                    ((f = +f || +s || 0),
                    (h = r[1] ? f + (r[1] + 1) * r[2] : +r[2]),
                    u && ((u.unit = o), (u.start = f), (u.end = h))),
                h
            );
        }
        function o(n, t) {
            var r =
                "undefined" != typeof n.getElementsByTagName
                    ? n.getElementsByTagName(t || "*")
                    : "undefined" != typeof n.querySelectorAll
                      ? n.querySelectorAll(t || "*")
                      : [];
            return void 0 === t || (t && i.nodeName(n, t)) ? i.merge([n], r) : r;
        }
        function ui(n, t) {
            for (var i = 0, u = n.length; u > i; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"));
        }
        function kr(n, t, r, u, f) {
            for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; b > l; l++)
                if (((e = n[l]), e || 0 === e))
                    if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e);
                    else if (br.test(e)) {
                        for (
                            s = s || h.appendChild(t.createElement("div")),
                                p = (pr.exec(e) || ["", ""])[1].toLowerCase(),
                                a = c[p] || c._default,
                                s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
                                v = a[0];
                            v--;

                        )
                            s = s.lastChild;
                        i.merge(y, s.childNodes);
                        s = h.firstChild;
                        s.textContent = "";
                    } else y.push(t.createTextNode(e));
            for (h.textContent = "", l = 0; (e = y[l++]); )
                if (u && i.inArray(e, u) > -1) f && f.push(e);
                else if (((w = i.contains(e.ownerDocument, e)), (s = o(h.appendChild(e), "script")), w && ui(s), r))
                    for (v = 0; (e = s[v++]); ) wr.test(e.type || "") && r.push(e);
            return h;
        }
        function pt() {
            return !0;
        }
        function nt() {
            return !1;
        }
        function gr() {
            try {
                return u.activeElement;
            } catch (n) {}
        }
        function fi(n, t, r, u, f, e) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof r && ((u = u || r), (r = void 0));
                for (s in t) fi(n, s, r, u, t[s], e);
                return n;
            }
            if (
                (null == u && null == f
                    ? ((f = r), (u = r = void 0))
                    : null == f && ("string" == typeof r ? ((f = u), (u = void 0)) : ((f = u), (u = r), (r = void 0))),
                f === !1)
            )
                f = nt;
            else if (!f) return n;
            return (
                1 === e &&
                    ((o = f),
                    (f = function (n) {
                        return i().off(n), o.apply(this, arguments);
                    }),
                    (f.guid = o.guid || (o.guid = i.guid++))),
                n.each(function () {
                    i.event.add(this, t, f, u, r);
                })
            );
        }
        function nu(n, t) {
            return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
                ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody"))
                : n;
        }
        function ee(n) {
            return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
        }
        function oe(n) {
            var t = ue.exec(n.type);
            return t ? (n.type = t[1]) : n.removeAttribute("type"), n;
        }
        function tu(n, t) {
            var u, c, f, s, h, l, a, o;
            if (1 === t.nodeType) {
                if (r.hasData(n) && ((s = r.access(n)), (h = r.set(t, s)), (o = s.events))) {
                    delete h.handle;
                    h.events = {};
                    for (f in o) for (u = 0, c = o[f].length; c > u; u++) i.event.add(t, f, o[f][u]);
                }
                e.hasData(n) && ((l = e.access(n)), (a = i.extend({}, l)), e.set(t, a));
            }
        }
        function se(n, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && yr.test(n.type)
                ? (t.checked = n.checked)
                : ("input" !== i && "textarea" !== i) || (t.defaultValue = n.defaultValue);
        }
        function b(n, t, u, e) {
            t = gi.apply([], t);
            var l,
                p,
                c,
                a,
                s,
                w,
                h = 0,
                v = n.length,
                d = v - 1,
                y = t[0],
                k = i.isFunction(y);
            if (k || (v > 1 && "string" == typeof y && !f.checkClone && re.test(y)))
                return n.each(function (i) {
                    var r = n.eq(i);
                    k && (t[0] = y.call(this, i, r.html()));
                    b(r, t, u, e);
                });
            if (
                v &&
                ((l = kr(t, n[0].ownerDocument, !1, n, e)),
                (p = l.firstChild),
                1 === l.childNodes.length && (l = p),
                p || e)
            ) {
                for (c = i.map(o(l, "script"), ee), a = c.length; v > h; h++)
                    (s = l), h !== d && ((s = i.clone(s, !0, !0)), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
                if (a)
                    for (w = c[c.length - 1].ownerDocument, i.map(c, oe), h = 0; a > h; h++)
                        (s = c[h]),
                            wr.test(s.type || "") &&
                                !r.access(s, "globalEval") &&
                                i.contains(w, s) &&
                                (s.src ? i._evalUrl && i._evalUrl(s.src) : i.globalEval(s.textContent.replace(fe, "")));
            }
            return n;
        }
        function iu(n, t, r) {
            for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
                r || 1 !== u.nodeType || i.cleanData(o(u)),
                    u.parentNode &&
                        (r && i.contains(u.ownerDocument, u) && ui(o(u, "script")), u.parentNode.removeChild(u));
            return n;
        }
        function ru(n, t) {
            var r = i(t.createElement(n)).appendTo(t.body),
                u = i.css(r[0], "display");
            return r.detach(), u;
        }
        function oi(n) {
            var r = u,
                t = ei[n];
            return (
                t ||
                    ((t = ru(n, r)),
                    ("none" !== t && t) ||
                        ((wt = (wt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement)),
                        (r = wt[0].contentDocument),
                        r.write(),
                        r.close(),
                        (t = ru(n, r)),
                        wt.detach()),
                    (ei[n] = t)),
                t
            );
        }
        function tt(n, t, r) {
            var o,
                s,
                h,
                u,
                e = n.style;
            return (
                (r = r || bt(n)),
                (u = r ? r.getPropertyValue(t) || r[t] : void 0),
                ("" !== u && void 0 !== u) || i.contains(n.ownerDocument, n) || (u = i.style(n, t)),
                r &&
                    !f.pixelMarginRight() &&
                    si.test(u) &&
                    uu.test(t) &&
                    ((o = e.width),
                    (s = e.minWidth),
                    (h = e.maxWidth),
                    (e.minWidth = e.maxWidth = e.width = u),
                    (u = r.width),
                    (e.width = o),
                    (e.minWidth = s),
                    (e.maxWidth = h)),
                void 0 !== u ? u + "" : u
            );
        }
        function ci(n, t) {
            return {
                get: function () {
                    return n() ? void delete this.get : (this.get = t).apply(this, arguments);
                },
            };
        }
        function su(n) {
            if (n in ou) return n;
            for (var i = n[0].toUpperCase() + n.slice(1), t = eu.length; t--; )
                if (((n = eu[t] + i), n in ou)) return n;
        }
        function hu(n, t, i) {
            var r = ot.exec(t);
            return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
        }
        function cu(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
                "margin" === r && (o += i.css(n, r + w[e], !0, f)),
                    u
                        ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)),
                          "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f)))
                        : ((o += i.css(n, "padding" + w[e], !0, f)),
                          "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
            return o;
        }
        function lu(n, t, r) {
            var o = !0,
                u = "width" === t ? n.offsetWidth : n.offsetHeight,
                e = bt(n),
                s = "border-box" === i.css(n, "boxSizing", !1, e);
            if (0 >= u || null == u) {
                if (((u = tt(n, t, e)), (0 > u || null == u) && (u = n.style[t]), si.test(u))) return u;
                o = s && (f.boxSizingReliable() || u === n.style[t]);
                u = parseFloat(u) || 0;
            }
            return u + cu(n, t, r || (s ? "border" : "content"), o, e) + "px";
        }
        function au(n, t) {
            for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++)
                (u = n[f]),
                    u.style &&
                        ((o[f] = r.get(u, "olddisplay")),
                        (e = u.style.display),
                        t
                            ? (o[f] || "none" !== e || (u.style.display = ""),
                              "" === u.style.display && st(u) && (o[f] = r.access(u, "olddisplay", oi(u.nodeName))))
                            : ((s = st(u)),
                              ("none" === e && s) || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
            for (f = 0; h > f; f++)
                (u = n[f]),
                    u.style &&
                        ((t && "none" !== u.style.display && "" !== u.style.display) ||
                            (u.style.display = t ? o[f] || "" : "none"));
            return n;
        }
        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u);
        }
        function pu() {
            return (
                n.setTimeout(function () {
                    it = void 0;
                }),
                (it = i.now())
            );
        }
        function dt(n, t) {
            var r,
                u = 0,
                i = { height: n };
            for (t = t ? 1 : 0; 4 > u; u += 2 - t) (r = w[u]), (i["margin" + r] = i["padding" + r] = n);
            return t && (i.opacity = i.width = n), i;
        }
        function wu(n, t, i) {
            for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; e > r; r++)
                if ((u = f[r].call(i, t, n))) return u;
        }
        function le(n, t, u) {
            var f,
                a,
                p,
                v,
                o,
                w,
                h,
                b,
                l = this,
                y = {},
                s = n.style,
                c = n.nodeType && st(n),
                e = r.get(n, "fxshow");
            u.queue ||
                ((o = i._queueHooks(n, "fx")),
                null == o.unqueued &&
                    ((o.unqueued = 0),
                    (w = o.empty.fire),
                    (o.empty.fire = function () {
                        o.unqueued || w();
                    })),
                o.unqueued++,
                l.always(function () {
                    l.always(function () {
                        o.unqueued--;
                        i.queue(n, "fx").length || o.empty.fire();
                    });
                }));
            1 === n.nodeType &&
                ("height" in t || "width" in t) &&
                ((u.overflow = [s.overflow, s.overflowX, s.overflowY]),
                (h = i.css(n, "display")),
                (b = "none" === h ? r.get(n, "olddisplay") || oi(n.nodeName) : h),
                "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
            u.overflow &&
                ((s.overflow = "hidden"),
                l.always(function () {
                    s.overflow = u.overflow[0];
                    s.overflowX = u.overflow[1];
                    s.overflowY = u.overflow[2];
                }));
            for (f in t)
                if (((a = t[f]), vu.exec(a))) {
                    if ((delete t[f], (p = p || "toggle" === a), a === (c ? "hide" : "show"))) {
                        if ("show" !== a || !e || void 0 === e[f]) continue;
                        c = !0;
                    }
                    y[f] = (e && e[f]) || i.style(n, f);
                } else h = void 0;
            if (i.isEmptyObject(y)) "inline" === ("none" === h ? oi(n.nodeName) : h) && (s.display = h);
            else {
                e ? "hidden" in e && (c = e.hidden) : (e = r.access(n, "fxshow", {}));
                p && (e.hidden = !c);
                c
                    ? i(n).show()
                    : l.done(function () {
                          i(n).hide();
                      });
                l.done(function () {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in y) i.style(n, t, y[t]);
                });
                for (f in y)
                    (v = wu(c ? e[f] : 0, f, l)),
                        f in e ||
                            ((e[f] = v.start),
                            c && ((v.end = v.start), (v.start = "width" === f || "height" === f ? 1 : 0)));
            }
        }
        function ae(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (
                    ((f = i.camelCase(r)),
                    (e = t[f]),
                    (u = n[r]),
                    i.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
                    r !== f && ((n[f] = u), delete n[r]),
                    (o = i.cssHooks[f]),
                    o && "expand" in o)
                ) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || ((n[r] = u[r]), (t[r] = e));
                } else t[f] = e;
        }
        function l(n, t, r) {
            var e,
                o,
                s = 0,
                a = l.prefilters.length,
                f = i.Deferred().always(function () {
                    delete c.elem;
                }),
                c = function () {
                    if (o) return !1;
                    for (
                        var s = it || pu(),
                            t = Math.max(0, u.startTime + u.duration - s),
                            h = t / u.duration || 0,
                            i = 1 - h,
                            r = 0,
                            e = u.tweens.length;
                        e > r;
                        r++
                    )
                        u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && e ? t : (f.resolveWith(n, [u]), !1);
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: it || pu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function (t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f;
                    },
                    stop: function (t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; r > i; i++) u.tweens[i].run(1);
                        return (
                            t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                        );
                    },
                }),
                h = u.props;
            for (ae(h, u.opts.specialEasing); a > s; s++)
                if ((e = l.prefilters[s].call(u, n, h, u.opts)))
                    return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
            return (
                i.map(h, wu, u),
                i.isFunction(u.opts.start) && u.opts.start.call(n, u),
                i.fx.timer(i.extend(c, { elem: n, anim: u, queue: u.opts.queue })),
                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            );
        }
        function k(n) {
            return (n.getAttribute && n.getAttribute("class")) || "";
        }
        function ff(n) {
            return function (t, r) {
                "string" != typeof t && ((r = t), (t = "*"));
                var u,
                    f = 0,
                    e = t.toLowerCase().match(h) || [];
                if (i.isFunction(r))
                    while ((u = e[f++]))
                        "+" === u[0]
                            ? ((u = u.slice(1) || "*"), (n[u] = n[u] || []).unshift(r))
                            : (n[u] = n[u] || []).push(r);
            };
        }
        function ef(n, t, r, u) {
            function e(s) {
                var h;
                return (
                    (f[s] = !0),
                    i.each(n[s] || [], function (n, i) {
                        var s = i(t, r, u);
                        return "string" != typeof s || o || f[s]
                            ? o
                                ? !(h = s)
                                : void 0
                            : (t.dataTypes.unshift(s), e(s), !1);
                    }),
                    h
                );
            }
            var f = {},
                o = n === yi;
            return e(t.dataTypes[0]) || (!f["*"] && e("*"));
        }
        function wi(n, t) {
            var r,
                u,
                f = i.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n;
        }
        function be(n, t, i) {
            for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; )
                r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (u in s)
                    if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break;
                    }
            if (r[0] in i) f = r[0];
            else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break;
                    }
                    o || (o = u);
                }
                f = f || o;
            }
            if (f) return f !== r[0] && r.unshift(f), i[f];
        }
        function ke(n, t, i, r) {
            var h,
                u,
                f,
                s,
                e,
                o = {},
                c = n.dataTypes.slice();
            if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u; )
                if (
                    (n.responseFields[u] && (i[n.responseFields[u]] = t),
                    !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                    (e = u),
                    (u = c.shift()))
                )
                    if ("*" === u) u = e;
                    else if ("*" !== e && e !== u) {
                        if (((f = o[e + " " + u] || o["* " + u]), !f))
                            for (h in o)
                                if (((s = h.split(" ")), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]]))) {
                                    f === !0 ? (f = o[h]) : o[h] !== !0 && ((u = s[0]), c.unshift(s[1]));
                                    break;
                                }
                        if (f !== !0)
                            if (f && n.throws) t = f(t);
                            else
                                try {
                                    t = f(t);
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: f ? l : "No conversion from " + e + " to " + u,
                                    };
                                }
                    }
            return { state: "success", data: t };
        }
        function bi(n, t, r, u) {
            var f;
            if (i.isArray(t))
                i.each(t, function (t, i) {
                    r || ge.test(n)
                        ? u(n, i)
                        : bi(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u);
                });
            else if (r || "object" !== i.type(t)) u(n, t);
            else for (f in t) bi(n + "[" + f + "]", t[f], r, u);
        }
        function hf(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView;
        }
        var y = [],
            u = n.document,
            v = y.slice,
            gi = y.concat,
            ti = y.push,
            lt = y.indexOf,
            at = {},
            af = at.toString,
            ft = at.hasOwnProperty,
            f = {},
            nr = "2.2.4",
            i = function (n, t) {
                return new i.fn.init(n, t);
            },
            vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            yf = /^-ms-/,
            pf = /-([\da-z])/gi,
            wf = function (n, t) {
                return t.toUpperCase();
            },
            p,
            ur,
            fr,
            er,
            or,
            sr,
            h,
            vt,
            a,
            g,
            br,
            wt,
            ei,
            it,
            kt,
            vu,
            yu,
            bu,
            rt,
            ku,
            du,
            gt,
            gu,
            nf,
            li,
            sf,
            ut,
            ki,
            ni,
            di,
            cf,
            lf;
        i.fn = i.prototype = {
            jquery: nr,
            constructor: i,
            selector: "",
            length: 0,
            toArray: function () {
                return v.call(this);
            },
            get: function (n) {
                return null != n ? (0 > n ? this[n + this.length] : this[n]) : v.call(this);
            },
            pushStack: function (n) {
                var t = i.merge(this.constructor(), n);
                return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function (n) {
                return i.each(this, n);
            },
            map: function (n) {
                return this.pushStack(
                    i.map(this, function (t, i) {
                        return n.call(t, i, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(v.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (n) {
                var i = this.length,
                    t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: ti,
            sort: y.sort,
            splice: y.splice,
        };
        i.extend = i.fn.extend = function () {
            var e,
                f,
                r,
                t,
                o,
                s,
                n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for (
                "boolean" == typeof n && ((h = n), (n = arguments[u] || {}), u++),
                    "object" == typeof n || i.isFunction(n) || (n = {}),
                    u === c && ((n = this), u--);
                c > u;
                u++
            )
                if (null != (e = arguments[u]))
                    for (f in e)
                        (r = n[f]),
                            (t = e[f]),
                            n !== t &&
                                (h && t && (i.isPlainObject(t) || (o = i.isArray(t)))
                                    ? (o
                                          ? ((o = !1), (s = r && i.isArray(r) ? r : []))
                                          : (s = r && i.isPlainObject(r) ? r : {}),
                                      (n[f] = i.extend(h, s, t)))
                                    : void 0 !== t && (n[f] = t));
            return n;
        };
        i.extend({
            expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (n) {
                throw new Error(n);
            },
            noop: function () {},
            isFunction: function (n) {
                return "function" === i.type(n);
            },
            isArray: Array.isArray,
            isWindow: function (n) {
                return null != n && n === n.window;
            },
            isNumeric: function (n) {
                var t = n && n.toString();
                return !i.isArray(n) && t - parseFloat(t) + 1 >= 0;
            },
            isPlainObject: function (n) {
                var t;
                if (
                    "object" !== i.type(n) ||
                    n.nodeType ||
                    i.isWindow(n) ||
                    (n.constructor &&
                        !ft.call(n, "constructor") &&
                        !ft.call(n.constructor.prototype || {}, "isPrototypeOf"))
                )
                    return !1;
                for (t in n);
                return void 0 === t || ft.call(n, t);
            },
            isEmptyObject: function (n) {
                var t;
                for (t in n) return !1;
                return !0;
            },
            type: function (n) {
                return null == n
                    ? n + ""
                    : "object" == typeof n || "function" == typeof n
                      ? at[af.call(n)] || "object"
                      : typeof n;
            },
            globalEval: function (n) {
                var t,
                    r = eval;
                n = i.trim(n);
                n &&
                    (1 === n.indexOf("use strict")
                        ? ((t = u.createElement("script")),
                          (t.text = n),
                          u.head.appendChild(t).parentNode.removeChild(t))
                        : r(n));
            },
            camelCase: function (n) {
                return n.replace(yf, "ms-").replace(pf, wf);
            },
            nodeName: function (n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (n, t) {
                var r,
                    i = 0;
                if (ii(n)) {
                    for (r = n.length; r > i; i++) if (t.call(n[i], i, n[i]) === !1) break;
                } else for (i in n) if (t.call(n[i], i, n[i]) === !1) break;
                return n;
            },
            trim: function (n) {
                return null == n ? "" : (n + "").replace(vf, "");
            },
            makeArray: function (n, t) {
                var r = t || [];
                return null != n && (ii(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r;
            },
            inArray: function (n, t, i) {
                return null == t ? -1 : lt.call(t, n, i);
            },
            merge: function (n, t) {
                for (var u = +t.length, i = 0, r = n.length; u > i; i++) n[r++] = t[i];
                return (n.length = r), n;
            },
            grep: function (n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) (u = !t(n[r], r)), u !== o && f.push(n[r]);
                return f;
            },
            map: function (n, t, i) {
                var e,
                    u,
                    r = 0,
                    f = [];
                if (ii(n)) for (e = n.length; e > r; r++) (u = t(n[r], r, i)), null != u && f.push(u);
                else for (r in n) (u = t(n[r], r, i)), null != u && f.push(u);
                return gi.apply([], f);
            },
            guid: 1,
            proxy: function (n, t) {
                var u, f, r;
                return (
                    "string" == typeof t && ((u = n[t]), (t = n), (n = u)),
                    i.isFunction(n)
                        ? ((f = v.call(arguments, 2)),
                          (r = function () {
                              return n.apply(t || this, f.concat(v.call(arguments)));
                          }),
                          (r.guid = n.guid = n.guid || i.guid++),
                          r)
                        : void 0
                );
            },
            now: Date.now,
            support: f,
        });
        "function" == typeof Symbol && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
        i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
            at["[object " + t + "]"] = t.toLowerCase();
        });
        p = (function (n) {
            function u(n, t, r, u) {
                var l,
                    w,
                    a,
                    s,
                    nt,
                    d,
                    y,
                    g,
                    p = t && t.ownerDocument,
                    v = t ? t.nodeType : 9;
                if (((r = r || []), "string" != typeof n || !n || (1 !== v && 9 !== v && 11 !== v))) return r;
                if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), (t = t || i), h)) {
                    if (11 !== v && (d = sr.exec(n)))
                        if ((l = d[1])) {
                            if (9 === v) {
                                if (!(a = t.getElementById(l))) return r;
                                if (a.id === l) return r.push(a), r;
                            } else if (p && (a = p.getElementById(l)) && et(t, a) && a.id === l) return r.push(a), r;
                        } else {
                            if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                            if ((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName)
                                return k.apply(r, t.getElementsByClassName(l)), r;
                        }
                    if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                        if (1 !== v) (p = t), (g = n);
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for (
                                (s = t.getAttribute("id"))
                                    ? (s = s.replace(hr, "\\$&"))
                                    : t.setAttribute("id", (s = e)),
                                    y = ft(n),
                                    w = y.length,
                                    nt = yi.test(s) ? "#" + s : "[id='" + s + "']";
                                w--;

                            )
                                y[w] = nt + " " + yt(y[w]);
                            g = y.join(",");
                            p = (gt.test(n) && ii(t.parentNode)) || t;
                        }
                        if (g)
                            try {
                                return k.apply(r, p.querySelectorAll(g)), r;
                            } catch (tt) {
                            } finally {
                                s === e && t.removeAttribute("id");
                            }
                    }
                }
                return si(n.replace(at, "$1"), t, r, u);
            }
            function ni() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], (n[r + " "] = u);
                }
                var i = [];
                return n;
            }
            function l(n) {
                return (n[e] = !0), n;
            }
            function a(n) {
                var t = i.createElement("div");
                try {
                    return !!n(t);
                } catch (r) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null;
                }
            }
            function ti(n, i) {
                for (var r = n.split("|"), u = r.length; u--; ) t.attrHandle[r[u]] = i;
            }
            function wi(n, t) {
                var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                if (r) return r;
                if (i) while ((i = i.nextSibling)) if (i === t) return -1;
                return n ? 1 : -1;
            }
            function cr(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n;
                };
            }
            function lr(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n;
                };
            }
            function it(n) {
                return l(function (t) {
                    return (
                        (t = +t),
                        l(function (i, r) {
                            for (var u, f = n([], i.length, t), e = f.length; e--; )
                                i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
                        })
                    );
                });
            }
            function ii(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n;
            }
            function bi() {}
            function yt(n) {
                for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                return i;
            }
            function ri(n, t, i) {
                var r = t.dir,
                    u = i && "parentNode" === r,
                    f = ki++;
                return t.first
                    ? function (t, i, f) {
                          while ((t = t[r])) if (1 === t.nodeType || u) return n(t, i, f);
                      }
                    : function (t, i, o) {
                          var s,
                              h,
                              c,
                              l = [v, f];
                          if (o) {
                              while ((t = t[r])) if ((1 === t.nodeType || u) && n(t, i, o)) return !0;
                          } else
                              while ((t = t[r]))
                                  if (1 === t.nodeType || u) {
                                      if (
                                          ((c = t[e] || (t[e] = {})),
                                          (h = c[t.uniqueID] || (c[t.uniqueID] = {})),
                                          (s = h[r]) && s[0] === v && s[1] === f)
                                      )
                                          return (l[2] = s[2]);
                                      if (((h[r] = l), (l[2] = n(t, i, o)))) return !0;
                                  }
                      };
            }
            function ui(n) {
                return n.length > 1
                    ? function (t, i, r) {
                          for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
                          return !0;
                      }
                    : n[0];
            }
            function ar(n, t, i) {
                for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
                return i;
            }
            function pt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
                    (e = n[f]) && ((i && !i(e, r, u)) || (o.push(e), h && t.push(f)));
                return o;
            }
            function fi(n, t, i, r, u, f) {
                return (
                    r && !r[e] && (r = fi(r)),
                    u && !u[e] && (u = fi(u, f)),
                    l(function (f, e, o, s) {
                        var l,
                            c,
                            a,
                            p = [],
                            y = [],
                            w = e.length,
                            b = f || ar(t || "*", o.nodeType ? [o] : o, []),
                            v = !n || (!f && t) ? b : pt(b, p, n, o, s),
                            h = i ? (u || (f ? n : w || r) ? [] : e) : v;
                        if ((i && i(v, h, o, s), r))
                            for (l = pt(h, y), r(l, [], o, s), c = l.length; c--; )
                                (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                        if (f) {
                            if (u || n) {
                                if (u) {
                                    for (l = [], c = h.length; c--; ) (a = h[c]) && l.push((v[c] = a));
                                    u(null, (h = []), l, s);
                                }
                                for (c = h.length; c--; )
                                    (a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a));
                            }
                        } else (h = pt(h === e ? h.splice(w, h.length) : h)), u ? u(null, e, h, s) : k.apply(e, h);
                    })
                );
            }
            function ei(n) {
                for (
                    var o,
                        u,
                        r,
                        s = n.length,
                        h = t.relative[n[0].type],
                        c = h || t.relative[" "],
                        i = h ? 1 : 0,
                        l = ri(
                            function (n) {
                                return n === o;
                            },
                            c,
                            !0
                        ),
                        a = ri(
                            function (n) {
                                return nt(o, n) > -1;
                            },
                            c,
                            !0
                        ),
                        f = [
                            function (n, t, i) {
                                var r = (!h && (i || t !== ht)) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                                return (o = null), r;
                            },
                        ];
                    s > i;
                    i++
                )
                    if ((u = t.relative[n[i].type])) f = [ri(ui(f), u)];
                    else {
                        if (((u = t.filter[n[i].type].apply(null, n[i].matches)), u[e])) {
                            for (r = ++i; s > r; r++) if (t.relative[n[r].type]) break;
                            return fi(
                                i > 1 && ui(f),
                                i > 1 &&
                                    yt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(
                                        at,
                                        "$1"
                                    ),
                                u,
                                r > i && ei(n.slice(i, r)),
                                s > r && ei((n = n.slice(r))),
                                s > r && yt(n)
                            );
                        }
                        f.push(u);
                    }
                return ui(f);
            }
            function vr(n, r) {
                var f = r.length > 0,
                    e = n.length > 0,
                    o = function (o, s, c, l, a) {
                        var y,
                            nt,
                            d,
                            g = 0,
                            p = "0",
                            tt = o && [],
                            w = [],
                            it = ht,
                            rt = o || (e && t.find.TAG("*", a)),
                            ut = (v += null == it ? 1 : Math.random() || 0.1),
                            ft = rt.length;
                        for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                            if (e && y) {
                                for (nt = 0, s || y.ownerDocument === i || (b(y), (c = !h)); (d = n[nt++]); )
                                    if (d(y, s || i, c)) {
                                        l.push(y);
                                        break;
                                    }
                                a && (v = ut);
                            }
                            f && ((y = !d && y) && g--, o && tt.push(y));
                        }
                        if (((g += p), f && p !== g)) {
                            for (nt = 0; (d = r[nt++]); ) d(tt, w, s, c);
                            if (o) {
                                if (g > 0) while (p--) tt[p] || w[p] || (w[p] = gi.call(l));
                                w = pt(w);
                            }
                            k.apply(l, w);
                            a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l);
                        }
                        return a && ((v = ut), (ht = it)), tt;
                    };
                return f ? l(o) : o;
            }
            var rt,
                f,
                t,
                st,
                oi,
                ft,
                wt,
                si,
                ht,
                w,
                ut,
                b,
                i,
                s,
                h,
                o,
                d,
                ct,
                et,
                e = "sizzle" + 1 * new Date(),
                c = n.document,
                v = 0,
                ki = 0,
                hi = ni(),
                ci = ni(),
                lt = ni(),
                bt = function (n, t) {
                    return n === t && (ut = !0), 0;
                },
                li = -2147483648,
                di = {}.hasOwnProperty,
                g = [],
                gi = g.pop,
                nr = g.push,
                k = g.push,
                ai = g.slice,
                nt = function (n, t) {
                    for (var i = 0, r = n.length; r > i; i++) if (n[i] === t) return i;
                    return -1;
                },
                kt =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                r = "[\\x20\\t\\r\\n\\f]",
                tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi =
                    "\\[" +
                    r +
                    "*(" +
                    tt +
                    ")(?:" +
                    r +
                    "*([*^$|!~]?=)" +
                    r +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    tt +
                    "))|)" +
                    r +
                    "*\\]",
                dt =
                    ":(" +
                    tt +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    vi +
                    ")*)|.*)\\)|)",
                tr = new RegExp(r + "+", "g"),
                at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                ir = new RegExp("^" + r + "*," + r + "*"),
                rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
                fr = new RegExp(dt),
                yi = new RegExp("^" + tt + "$"),
                vt = {
                    ID: new RegExp("^#(" + tt + ")"),
                    CLASS: new RegExp("^\\.(" + tt + ")"),
                    TAG: new RegExp("^(" + tt + "|[*])"),
                    ATTR: new RegExp("^" + vi),
                    PSEUDO: new RegExp("^" + dt),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            r +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            r +
                            "*(?:([+-]|)" +
                            r +
                            "*(\\d+)|))" +
                            r +
                            "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + kt + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                            r +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            r +
                            "*((?:-\\d)?\\d*)" +
                            r +
                            "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                er = /^(?:input|select|textarea|button)$/i,
                or = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                hr = /'|\\/g,
                y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
                p = function (n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i
                        ? t
                        : 0 > r
                          ? String.fromCharCode(r + 65536)
                          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
                },
                pi = function () {
                    b();
                };
            try {
                k.apply((g = ai.call(c.childNodes)), c.childNodes);
                g[c.childNodes.length].nodeType;
            } catch (yr) {
                k = {
                    apply: g.length
                        ? function (n, t) {
                              nr.apply(n, ai.call(t));
                          }
                        : function (n, t) {
                              for (var i = n.length, r = 0; (n[i++] = t[r++]); );
                              n.length = i - 1;
                          },
                };
            }
            f = u.support = {};
            oi = u.isXML = function (n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? "HTML" !== t.nodeName : !1;
            };
            b = u.setDocument = function (n) {
                var v,
                    u,
                    l = n ? n.ownerDocument || n : c;
                return l !== i && 9 === l.nodeType && l.documentElement
                    ? ((i = l),
                      (s = i.documentElement),
                      (h = !oi(i)),
                      (u = i.defaultView) &&
                          u.top !== u &&
                          (u.addEventListener
                              ? u.addEventListener("unload", pi, !1)
                              : u.attachEvent && u.attachEvent("onunload", pi)),
                      (f.attributes = a(function (n) {
                          return (n.className = "i"), !n.getAttribute("className");
                      })),
                      (f.getElementsByTagName = a(function (n) {
                          return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length;
                      })),
                      (f.getElementsByClassName = ot.test(i.getElementsByClassName)),
                      (f.getById = a(function (n) {
                          return (s.appendChild(n).id = e), !i.getElementsByName || !i.getElementsByName(e).length;
                      })),
                      f.getById
                          ? ((t.find.ID = function (n, t) {
                                if ("undefined" != typeof t.getElementById && h) {
                                    var i = t.getElementById(n);
                                    return i ? [i] : [];
                                }
                            }),
                            (t.filter.ID = function (n) {
                                var t = n.replace(y, p);
                                return function (n) {
                                    return n.getAttribute("id") === t;
                                };
                            }))
                          : (delete t.find.ID,
                            (t.filter.ID = function (n) {
                                var t = n.replace(y, p);
                                return function (n) {
                                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                                    return i && i.value === t;
                                };
                            })),
                      (t.find.TAG = f.getElementsByTagName
                          ? function (n, t) {
                                return "undefined" != typeof t.getElementsByTagName
                                    ? t.getElementsByTagName(n)
                                    : f.qsa
                                      ? t.querySelectorAll(n)
                                      : void 0;
                            }
                          : function (n, t) {
                                var i,
                                    r = [],
                                    f = 0,
                                    u = t.getElementsByTagName(n);
                                if ("*" === n) {
                                    while ((i = u[f++])) 1 === i.nodeType && r.push(i);
                                    return r;
                                }
                                return u;
                            }),
                      (t.find.CLASS =
                          f.getElementsByClassName &&
                          function (n, t) {
                              if ("undefined" != typeof t.getElementsByClassName && h)
                                  return t.getElementsByClassName(n);
                          }),
                      (d = []),
                      (o = []),
                      (f.qsa = ot.test(i.querySelectorAll)) &&
                          (a(function (n) {
                              s.appendChild(n).innerHTML =
                                  "<a id='" +
                                  e +
                                  "'></a><select id='" +
                                  e +
                                  "-\r\\' msallowcapture=''><option selected=''></option></select>";
                              n.querySelectorAll("[msallowcapture^='']").length &&
                                  o.push("[*^$]=" + r + "*(?:''|\"\")");
                              n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
                              n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                              n.querySelectorAll(":checked").length || o.push(":checked");
                              n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
                          }),
                          a(function (n) {
                              var t = i.createElement("input");
                              t.setAttribute("type", "hidden");
                              n.appendChild(t).setAttribute("name", "D");
                              n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                              n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                              n.querySelectorAll("*,:x");
                              o.push(",.*:");
                          })),
                      (f.matchesSelector = ot.test(
                          (ct =
                              s.matches ||
                              s.webkitMatchesSelector ||
                              s.mozMatchesSelector ||
                              s.oMatchesSelector ||
                              s.msMatchesSelector)
                      )) &&
                          a(function (n) {
                              f.disconnectedMatch = ct.call(n, "div");
                              ct.call(n, "[s!='']:x");
                              d.push("!=", dt);
                          }),
                      (o = o.length && new RegExp(o.join("|"))),
                      (d = d.length && new RegExp(d.join("|"))),
                      (v = ot.test(s.compareDocumentPosition)),
                      (et =
                          v || ot.test(s.contains)
                              ? function (n, t) {
                                    var r = 9 === n.nodeType ? n.documentElement : n,
                                        i = t && t.parentNode;
                                    return (
                                        n === i ||
                                        !(
                                            !i ||
                                            1 !== i.nodeType ||
                                            !(r.contains
                                                ? r.contains(i)
                                                : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i))
                                        )
                                    );
                                }
                              : function (n, t) {
                                    if (t) while ((t = t.parentNode)) if (t === n) return !0;
                                    return !1;
                                }),
                      (bt = v
                          ? function (n, t) {
                                if (n === t) return (ut = !0), 0;
                                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                                return r
                                    ? r
                                    : ((r =
                                          (n.ownerDocument || n) === (t.ownerDocument || t)
                                              ? n.compareDocumentPosition(t)
                                              : 1),
                                      1 & r || (!f.sortDetached && t.compareDocumentPosition(n) === r)
                                          ? n === i || (n.ownerDocument === c && et(c, n))
                                              ? -1
                                              : t === i || (t.ownerDocument === c && et(c, t))
                                                ? 1
                                                : w
                                                  ? nt(w, n) - nt(w, t)
                                                  : 0
                                          : 4 & r
                                            ? -1
                                            : 1);
                            }
                          : function (n, t) {
                                if (n === t) return (ut = !0), 0;
                                var r,
                                    u = 0,
                                    o = n.parentNode,
                                    s = t.parentNode,
                                    f = [n],
                                    e = [t];
                                if (!o || !s)
                                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                                if (o === s) return wi(n, t);
                                for (r = n; (r = r.parentNode); ) f.unshift(r);
                                for (r = t; (r = r.parentNode); ) e.unshift(r);
                                while (f[u] === e[u]) u++;
                                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0;
                            }),
                      i)
                    : i;
            };
            u.matches = function (n, t) {
                return u(n, null, null, t);
            };
            u.matchesSelector = function (n, t) {
                if (
                    ((n.ownerDocument || n) !== i && b(n),
                    (t = t.replace(ur, "='$1']")),
                    f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))
                )
                    try {
                        var r = ct.call(n, t);
                        if (r || f.disconnectedMatch || (n.document && 11 !== n.document.nodeType)) return r;
                    } catch (e) {}
                return u(t, i, null, [n]).length > 0;
            };
            u.contains = function (n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t);
            };
            u.attr = function (n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var e = t.attrHandle[r.toLowerCase()],
                    u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
                return void 0 !== u
                    ? u
                    : f.attributes || !h
                      ? n.getAttribute(r)
                      : (u = n.getAttributeNode(r)) && u.specified
                        ? u.value
                        : null;
            };
            u.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function (n) {
                var r,
                    u = [],
                    t = 0,
                    i = 0;
                if (((ut = !f.detectDuplicates), (w = !f.sortStable && n.slice(0)), n.sort(bt), ut)) {
                    while ((r = n[i++])) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1);
                }
                return (w = null), n;
            };
            st = u.getText = function (n) {
                var r,
                    i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
                    } else if (3 === t || 4 === t) return n.nodeValue;
                } else while ((r = n[u++])) i += st(r);
                return i;
            };
            t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (n) {
                        return (
                            (n[1] = n[1].replace(y, p)),
                            (n[3] = (n[3] || n[4] || n[5] || "").replace(y, p)),
                            "~=" === n[2] && (n[3] = " " + n[3] + " "),
                            n.slice(0, 4)
                        );
                    },
                    CHILD: function (n) {
                        return (
                            (n[1] = n[1].toLowerCase()),
                            "nth" === n[1].slice(0, 3)
                                ? (n[3] || u.error(n[0]),
                                  (n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3]))),
                                  (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                                : n[3] && u.error(n[0]),
                            n
                        );
                    },
                    PSEUDO: function (n) {
                        var i,
                            t = !n[6] && n[2];
                        return vt.CHILD.test(n[0])
                            ? null
                            : (n[3]
                                  ? (n[2] = n[4] || n[5] || "")
                                  : t &&
                                    fr.test(t) &&
                                    (i = ft(t, !0)) &&
                                    (i = t.indexOf(")", t.length - i) - t.length) &&
                                    ((n[0] = n[0].slice(0, i)), (n[2] = t.slice(0, i))),
                              n.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n
                            ? function () {
                                  return !0;
                              }
                            : function (n) {
                                  return n.nodeName && n.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (n) {
                        var t = hi[n + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) &&
                                hi(n, function (n) {
                                    return t.test(
                                        ("string" == typeof n.className && n.className) ||
                                            ("undefined" != typeof n.getAttribute && n.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (n, t, i) {
                        return function (r) {
                            var f = u.attr(r, n);
                            return null == f
                                ? "!=" === t
                                : t
                                  ? ((f += ""),
                                    "=" === t
                                        ? f === i
                                        : "!=" === t
                                          ? f !== i
                                          : "^=" === t
                                            ? i && 0 === f.indexOf(i)
                                            : "*=" === t
                                              ? i && f.indexOf(i) > -1
                                              : "$=" === t
                                                ? i && f.slice(-i.length) === i
                                                : "~=" === t
                                                  ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1
                                                  : "|=" === t
                                                    ? f === i || f.slice(0, i.length + 1) === i + "-"
                                                    : !1)
                                  : !0;
                        };
                    },
                    CHILD: function (n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            f = "of-type" === t;
                        return 1 === r && 0 === u
                            ? function (n) {
                                  return !!n.parentNode;
                              }
                            : function (t, i, h) {
                                  var p,
                                      w,
                                      y,
                                      c,
                                      a,
                                      b,
                                      k = s !== o ? "nextSibling" : "previousSibling",
                                      d = t.parentNode,
                                      nt = f && t.nodeName.toLowerCase(),
                                      g = !h && !f,
                                      l = !1;
                                  if (d) {
                                      if (s) {
                                          while (k) {
                                              for (c = t; (c = c[k]); )
                                                  if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                              b = k = "only" === n && !b && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((b = [o ? d.firstChild : d.lastChild]), o && g)) {
                                          for (
                                              c = d,
                                                  y = c[e] || (c[e] = {}),
                                                  w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                                                  p = w[n] || [],
                                                  a = p[0] === v && p[1],
                                                  l = a && p[2],
                                                  c = a && d.childNodes[a];
                                              (c = (++a && c && c[k]) || (l = a = 0) || b.pop());

                                          )
                                              if (1 === c.nodeType && ++l && c === t) {
                                                  w[n] = [v, a, l];
                                                  break;
                                              }
                                      } else if (
                                          (g &&
                                              ((c = t),
                                              (y = c[e] || (c[e] = {})),
                                              (w = y[c.uniqueID] || (y[c.uniqueID] = {})),
                                              (p = w[n] || []),
                                              (a = p[0] === v && p[1]),
                                              (l = a)),
                                          l === !1)
                                      )
                                          while ((c = (++a && c && c[k]) || (l = a = 0) || b.pop()))
                                              if (
                                                  (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) &&
                                                  ++l &&
                                                  (g &&
                                                      ((y = c[e] || (c[e] = {})),
                                                      (w = y[c.uniqueID] || (y[c.uniqueID] = {})),
                                                      (w[n] = [v, l])),
                                                  c === t)
                                              )
                                                  break;
                                      return (l -= u), l === r || (l % r == 0 && l / r >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (n, i) {
                        var f,
                            r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[e]
                            ? r(i)
                            : r.length > 1
                              ? ((f = [n, n, "", i]),
                                t.setFilters.hasOwnProperty(n.toLowerCase())
                                    ? l(function (n, t) {
                                          for (var u, f = r(n, i), e = f.length; e--; )
                                              (u = nt(n, f[e])), (n[u] = !(t[u] = f[e]));
                                      })
                                    : function (n) {
                                          return r(n, 0, f);
                                      })
                              : r;
                    },
                },
                pseudos: {
                    not: l(function (n) {
                        var t = [],
                            r = [],
                            i = wt(n.replace(at, "$1"));
                        return i[e]
                            ? l(function (n, t, r, u) {
                                  for (var e, o = i(n, null, u, []), f = n.length; f--; )
                                      (e = o[f]) && (n[f] = !(t[f] = e));
                              })
                            : function (n, u, f) {
                                  return (t[0] = n), i(t, null, f, r), (t[0] = null), !r.pop();
                              };
                    }),
                    has: l(function (n) {
                        return function (t) {
                            return u(n, t).length > 0;
                        };
                    }),
                    contains: l(function (n) {
                        return (
                            (n = n.replace(y, p)),
                            function (t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1;
                            }
                        );
                    }),
                    lang: l(function (n) {
                        return (
                            yi.test(n || "") || u.error("unsupported lang: " + n),
                            (n = n.replace(y, p).toLowerCase()),
                            function (t) {
                                var i;
                                do
                                    if ((i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                                        return (i = i.toLowerCase()), i === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id;
                    },
                    root: function (n) {
                        return n === s;
                    },
                    focus: function (n) {
                        return (
                            n === i.activeElement &&
                            (!i.hasFocus || i.hasFocus()) &&
                            !!(n.type || n.href || ~n.tabIndex)
                        );
                    },
                    enabled: function (n) {
                        return n.disabled === !1;
                    },
                    disabled: function (n) {
                        return n.disabled === !0;
                    },
                    checked: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return ("input" === t && !!n.checked) || ("option" === t && !!n.selected);
                    },
                    selected: function (n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0;
                    },
                    empty: function (n) {
                        for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (n) {
                        return !t.pseudos.empty(n);
                    },
                    header: function (n) {
                        return or.test(n.nodeName);
                    },
                    input: function (n) {
                        return er.test(n.nodeName);
                    },
                    button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return ("input" === t && "button" === n.type) || "button" === t;
                    },
                    text: function (n) {
                        var t;
                        return (
                            "input" === n.nodeName.toLowerCase() &&
                            "text" === n.type &&
                            (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                        );
                    },
                    first: it(function () {
                        return [0];
                    }),
                    last: it(function (n, t) {
                        return [t - 1];
                    }),
                    eq: it(function (n, t, i) {
                        return [0 > i ? i + t : i];
                    }),
                    even: it(function (n, t) {
                        for (var i = 0; t > i; i += 2) n.push(i);
                        return n;
                    }),
                    odd: it(function (n, t) {
                        for (var i = 1; t > i; i += 2) n.push(i);
                        return n;
                    }),
                    lt: it(function (n, t, i) {
                        for (var r = 0 > i ? i + t : i; --r >= 0; ) n.push(r);
                        return n;
                    }),
                    gt: it(function (n, t, i) {
                        for (var r = 0 > i ? i + t : i; ++r < t; ) n.push(r);
                        return n;
                    }),
                },
            };
            t.pseudos.nth = t.pseudos.eq;
            for (rt in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = cr(rt);
            for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = lr(rt);
            return (
                (bi.prototype = t.filters = t.pseudos),
                (t.setFilters = new bi()),
                (ft = u.tokenize =
                    function (n, i) {
                        var e,
                            f,
                            s,
                            o,
                            r,
                            h,
                            c,
                            l = ci[n + " "];
                        if (l) return i ? 0 : l.slice(0);
                        for (r = n, h = [], c = t.preFilter; r; ) {
                            (!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push((s = [])));
                            e = !1;
                            (f = rr.exec(r)) &&
                                ((e = f.shift()),
                                s.push({ value: e, type: f[0].replace(at, " ") }),
                                (r = r.slice(e.length)));
                            for (o in t.filter)
                                (f = vt[o].exec(r)) &&
                                    (!c[o] || (f = c[o](f))) &&
                                    ((e = f.shift()),
                                    s.push({ value: e, type: o, matches: f }),
                                    (r = r.slice(e.length)));
                            if (!e) break;
                        }
                        return i ? r.length : r ? u.error(n) : ci(n, h).slice(0);
                    }),
                (wt = u.compile =
                    function (n, t) {
                        var r,
                            u = [],
                            f = [],
                            i = lt[n + " "];
                        if (!i) {
                            for (t || (t = ft(n)), r = t.length; r--; ) (i = ei(t[r])), i[e] ? u.push(i) : f.push(i);
                            i = lt(n, vr(f, u));
                            i.selector = n;
                        }
                        return i;
                    }),
                (si = u.select =
                    function (n, i, r, u) {
                        var s,
                            e,
                            o,
                            a,
                            v,
                            l = "function" == typeof n && n,
                            c = !u && ft((n = l.selector || n));
                        if (((r = r || []), 1 === c.length)) {
                            if (
                                ((e = c[0] = c[0].slice(0)),
                                e.length > 2 &&
                                    "ID" === (o = e[0]).type &&
                                    f.getById &&
                                    9 === i.nodeType &&
                                    h &&
                                    t.relative[e[1].type])
                            ) {
                                if (((i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0]), !i)) return r;
                                l && (i = i.parentNode);
                                n = n.slice(e.shift().value.length);
                            }
                            for (s = vt.needsContext.test(n) ? 0 : e.length; s--; ) {
                                if (((o = e[s]), t.relative[(a = o.type)])) break;
                                if (
                                    (v = t.find[a]) &&
                                    (u = v(o.matches[0].replace(y, p), (gt.test(e[0].type) && ii(i.parentNode)) || i))
                                ) {
                                    if ((e.splice(s, 1), (n = u.length && yt(e)), !n)) return k.apply(r, u), r;
                                    break;
                                }
                            }
                        }
                        return (l || wt(n, c))(u, i, !h, r, !i || (gt.test(n) && ii(i.parentNode)) || i), r;
                    }),
                (f.sortStable = e.split("").sort(bt).join("") === e),
                (f.detectDuplicates = !!ut),
                b(),
                (f.sortDetached = a(function (n) {
                    return 1 & n.compareDocumentPosition(i.createElement("div"));
                })),
                a(function (n) {
                    return (n.innerHTML = "<a href='#'></a>"), "#" === n.firstChild.getAttribute("href");
                }) ||
                    ti("type|href|height|width", function (n, t, i) {
                        if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                    }),
                (f.attributes &&
                    a(function (n) {
                        return (
                            (n.innerHTML = "<input/>"),
                            n.firstChild.setAttribute("value", ""),
                            "" === n.firstChild.getAttribute("value")
                        );
                    })) ||
                    ti("value", function (n, t, i) {
                        if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
                    }),
                a(function (n) {
                    return null == n.getAttribute("disabled");
                }) ||
                    ti(kt, function (n, t, i) {
                        var r;
                        if (!i)
                            return n[t] === !0
                                ? t.toLowerCase()
                                : (r = n.getAttributeNode(t)) && r.specified
                                  ? r.value
                                  : null;
                    }),
                u
            );
        })(n);
        i.find = p;
        i.expr = p.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.uniqueSort = i.unique = p.uniqueSort;
        i.text = p.getText;
        i.isXMLDoc = p.isXML;
        i.contains = p.contains;
        var d = function (n, t, r) {
                for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
                    if (1 === n.nodeType) {
                        if (f && i(n).is(r)) break;
                        u.push(n);
                    }
                return u;
            },
            tr = function (n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i;
            },
            ir = i.expr.match.needsContext,
            rr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            bf = /^.[^:#\[\.,]*$/;
        i.filter = function (n, t, r) {
            var u = t[0];
            return (
                r && (n = ":not(" + n + ")"),
                1 === t.length && 1 === u.nodeType
                    ? i.find.matchesSelector(u, n)
                        ? [u]
                        : []
                    : i.find.matches(
                          n,
                          i.grep(t, function (n) {
                              return 1 === n.nodeType;
                          })
                      )
            );
        };
        i.fn.extend({
            find: function (n) {
                var t,
                    u = this.length,
                    r = [],
                    f = this;
                if ("string" != typeof n)
                    return this.pushStack(
                        i(n).filter(function () {
                            for (t = 0; u > t; t++) if (i.contains(f[t], this)) return !0;
                        })
                    );
                for (t = 0; u > t; t++) i.find(n, f[t], r);
                return (
                    (r = this.pushStack(u > 1 ? i.unique(r) : r)),
                    (r.selector = this.selector ? this.selector + " " + n : n),
                    r
                );
            },
            filter: function (n) {
                return this.pushStack(ri(this, n || [], !1));
            },
            not: function (n) {
                return this.pushStack(ri(this, n || [], !0));
            },
            is: function (n) {
                return !!ri(this, "string" == typeof n && ir.test(n) ? i(n) : n || [], !1).length;
            },
        });
        fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        er = i.fn.init = function (n, t, r) {
            var f, e;
            if (!n) return this;
            if (((r = r || ur), "string" == typeof n)) {
                if (
                    ((f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : fr.exec(n)),
                    !f || (!f[1] && t))
                )
                    return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
                if (f[1]) {
                    if (
                        ((t = t instanceof i ? t[0] : t),
                        i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                        rr.test(f[1]) && i.isPlainObject(t))
                    )
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this;
                }
                return (
                    (e = u.getElementById(f[2])),
                    e && e.parentNode && ((this.length = 1), (this[0] = e)),
                    (this.context = u),
                    (this.selector = n),
                    this
                );
            }
            return n.nodeType
                ? ((this.context = this[0] = n), (this.length = 1), this)
                : i.isFunction(n)
                  ? void 0 !== r.ready
                      ? r.ready(n)
                      : n(i)
                  : (void 0 !== n.selector && ((this.selector = n.selector), (this.context = n.context)),
                    i.makeArray(n, this));
        };
        er.prototype = i.fn;
        ur = i(u);
        or = /^(?:parents|prev(?:Until|All))/;
        sr = { children: !0, contents: !0, next: !0, prev: !0 };
        i.fn.extend({
            has: function (n) {
                var t = i(n, this),
                    r = t.length;
                return this.filter(function () {
                    for (var n = 0; r > n; n++) if (i.contains(this, t[n])) return !0;
                });
            },
            closest: function (n, t) {
                for (
                    var r,
                        f = 0,
                        o = this.length,
                        u = [],
                        e = ir.test(n) || "string" != typeof n ? i(n, t || this.context) : 0;
                    o > f;
                    f++
                )
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (
                            r.nodeType < 11 &&
                            (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))
                        ) {
                            u.push(r);
                            break;
                        }
                return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
            },
            index: function (n) {
                return n
                    ? "string" == typeof n
                        ? lt.call(i(n), this[0])
                        : lt.call(this, n.jquery ? n[0] : n)
                    : this[0] && this[0].parentNode
                      ? this.first().prevAll().length
                      : -1;
            },
            add: function (n, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))));
            },
            addBack: function (n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
            },
        });
        i.each(
            {
                parent: function (n) {
                    var t = n.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (n) {
                    return d(n, "parentNode");
                },
                parentsUntil: function (n, t, i) {
                    return d(n, "parentNode", i);
                },
                next: function (n) {
                    return hr(n, "nextSibling");
                },
                prev: function (n) {
                    return hr(n, "previousSibling");
                },
                nextAll: function (n) {
                    return d(n, "nextSibling");
                },
                prevAll: function (n) {
                    return d(n, "previousSibling");
                },
                nextUntil: function (n, t, i) {
                    return d(n, "nextSibling", i);
                },
                prevUntil: function (n, t, i) {
                    return d(n, "previousSibling", i);
                },
                siblings: function (n) {
                    return tr((n.parentNode || {}).firstChild, n);
                },
                children: function (n) {
                    return tr(n.firstChild);
                },
                contents: function (n) {
                    return n.contentDocument || i.merge([], n.childNodes);
                },
            },
            function (n, t) {
                i.fn[n] = function (r, u) {
                    var f = i.map(this, t, r);
                    return (
                        "Until" !== n.slice(-5) && (u = r),
                        u && "string" == typeof u && (f = i.filter(u, f)),
                        this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()),
                        this.pushStack(f)
                    );
                };
            }
        );
        h = /\S+/g;
        i.Callbacks = function (n) {
            n = "string" == typeof n ? kf(n) : i.extend({}, n);
            var o,
                r,
                h,
                f,
                t = [],
                e = [],
                u = -1,
                c = function () {
                    for (f = n.once, h = o = !0; e.length; u = -1)
                        for (r = e.shift(); ++u < t.length; )
                            t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && ((u = t.length), (r = !1));
                    n.memory || (r = !1);
                    o = !1;
                    f && (t = r ? [] : "");
                },
                s = {
                    add: function () {
                        return (
                            t &&
                                (r && !o && ((u = t.length - 1), e.push(r)),
                                (function f(r) {
                                    i.each(r, function (r, u) {
                                        i.isFunction(u)
                                            ? (n.unique && s.has(u)) || t.push(u)
                                            : u && u.length && "string" !== i.type(u) && f(u);
                                    });
                                })(arguments),
                                r && !o && c()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            i.each(arguments, function (n, r) {
                                for (var f; (f = i.inArray(r, t, f)) > -1; ) t.splice(f, 1), u >= f && u--;
                            }),
                            this
                        );
                    },
                    has: function (n) {
                        return n ? i.inArray(n, t) > -1 : t.length > 0;
                    },
                    empty: function () {
                        return t && (t = []), this;
                    },
                    disable: function () {
                        return (f = e = []), (t = r = ""), this;
                    },
                    disabled: function () {
                        return !t;
                    },
                    lock: function () {
                        return (f = e = []), r || (t = r = ""), this;
                    },
                    locked: function () {
                        return !!f;
                    },
                    fireWith: function (n, t) {
                        return f || ((t = t || []), (t = [n, t.slice ? t.slice() : t]), e.push(t), o || c()), this;
                    },
                    fire: function () {
                        return s.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!h;
                    },
                };
            return s;
        };
        i.extend({
            Deferred: function (n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")],
                    ],
                    f = "pending",
                    r = {
                        state: function () {
                            return f;
                        },
                        always: function () {
                            return t.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var n = arguments;
                            return i
                                .Deferred(function (f) {
                                    i.each(u, function (u, e) {
                                        var o = i.isFunction(n[u]) && n[u];
                                        t[e[1]](function () {
                                            var n = o && o.apply(this, arguments);
                                            n && i.isFunction(n.promise)
                                                ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject)
                                                : f[e[0] + "With"](
                                                      this === r ? f.promise() : this,
                                                      o ? [n] : arguments
                                                  );
                                        });
                                    });
                                    n = null;
                                })
                                .promise();
                        },
                        promise: function (n) {
                            return null != n ? i.extend(n, r) : r;
                        },
                    },
                    t = {};
                return (
                    (r.pipe = r.then),
                    i.each(u, function (n, i) {
                        var e = i[2],
                            o = i[3];
                        r[i[1]] = e.add;
                        o &&
                            e.add(
                                function () {
                                    f = o;
                                },
                                u[1 ^ n][2].disable,
                                u[2][2].lock
                            );
                        t[i[0]] = function () {
                            return t[i[0] + "With"](this === t ? r : this, arguments), this;
                        };
                        t[i[0] + "With"] = e.fireWith;
                    }),
                    r.promise(t),
                    n && n.call(t, t),
                    t
                );
            },
            when: function (n) {
                var t = 0,
                    u = v.call(arguments),
                    r = u.length,
                    e = 1 !== r || (n && i.isFunction(n.promise)) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function (n, t, i) {
                        return function (r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? v.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i);
                        };
                    },
                    o,
                    c,
                    s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++)
                        u[t] && i.isFunction(u[t].promise)
                            ? u[t]
                                  .promise()
                                  .progress(h(t, c, o))
                                  .done(h(t, s, u))
                                  .fail(f.reject)
                            : --e;
                return e || f.resolveWith(s, u), f.promise();
            },
        });
        i.fn.ready = function (n) {
            return i.ready.promise().done(n), this;
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (n) {
                n ? i.readyWait++ : i.ready(!0);
            },
            ready: function (n) {
                (n === !0 ? --i.readyWait : i.isReady) ||
                    ((i.isReady = !0),
                    (n !== !0 && --i.readyWait > 0) ||
                        (vt.resolveWith(u, [i]),
                        i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))));
            },
        });
        i.ready.promise = function (t) {
            return (
                vt ||
                    ((vt = i.Deferred()),
                    "complete" === u.readyState || ("loading" !== u.readyState && !u.documentElement.doScroll)
                        ? n.setTimeout(i.ready)
                        : (u.addEventListener("DOMContentLoaded", yt), n.addEventListener("load", yt))),
                vt.promise(t)
            );
        };
        i.ready.promise();
        a = function (n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) a(n, t, s, r[s], !0, e, o);
            } else if (
                void 0 !== u &&
                ((f = !0),
                i.isFunction(u) || (o = !0),
                h &&
                    (o
                        ? (t.call(n, u), (t = null))
                        : ((h = t),
                          (t = function (n, t, r) {
                              return h.call(i(n), r);
                          }))),
                t)
            )
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e;
        };
        g = function (n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
        };
        et.uid = 1;
        et.prototype = {
            register: function (n, t) {
                var i = t || {};
                return (
                    n.nodeType
                        ? (n[this.expando] = i)
                        : Object.defineProperty(n, this.expando, { value: i, writable: !0, configurable: !0 }),
                    n[this.expando]
                );
            },
            cache: function (n) {
                if (!g(n)) return {};
                var t = n[this.expando];
                return (
                    t ||
                        ((t = {}),
                        g(n) &&
                            (n.nodeType
                                ? (n[this.expando] = t)
                                : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))),
                    t
                );
            },
            set: function (n, t, i) {
                var r,
                    u = this.cache(n);
                if ("string" == typeof t) u[t] = i;
                else for (r in t) u[r] = t[r];
                return u;
            },
            get: function (n, t) {
                return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][t];
            },
            access: function (n, t, r) {
                var u;
                return void 0 === t || (t && "string" == typeof t && void 0 === r)
                    ? ((u = this.get(n, t)), void 0 !== u ? u : this.get(n, i.camelCase(t)))
                    : (this.set(n, t, r), void 0 !== r ? r : t);
            },
            remove: function (n, t) {
                var f,
                    r,
                    e,
                    u = n[this.expando];
                if (void 0 !== u) {
                    if (void 0 === t) this.register(n);
                    else
                        for (
                            i.isArray(t)
                                ? (r = t.concat(t.map(i.camelCase)))
                                : ((e = i.camelCase(t)),
                                  (t in u) ? (r = [t, e]) : ((r = e), (r = (r in u) ? [r] : r.match(h) || []))),
                                f = r.length;
                            f--;

                        )
                            delete u[r[f]];
                    (void 0 === t || i.isEmptyObject(u)) &&
                        (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
                }
            },
            hasData: function (n) {
                var t = n[this.expando];
                return void 0 !== t && !i.isEmptyObject(t);
            },
        };
        var r = new et(),
            e = new et(),
            df = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            cr = /[A-Z]/g;
        i.extend({
            hasData: function (n) {
                return e.hasData(n) || r.hasData(n);
            },
            data: function (n, t, i) {
                return e.access(n, t, i);
            },
            removeData: function (n, t) {
                e.remove(n, t);
            },
            _data: function (n, t, i) {
                return r.access(n, t, i);
            },
            _removeData: function (n, t) {
                r.remove(n, t);
            },
        });
        i.fn.extend({
            data: function (n, t) {
                var o,
                    f,
                    s,
                    u = this[0],
                    h = u && u.attributes;
                if (void 0 === n) {
                    if (this.length && ((s = e.get(u)), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--; )
                            h[o] &&
                                ((f = h[o].name),
                                0 === f.indexOf("data-") && ((f = i.camelCase(f.slice(5))), lr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0);
                    }
                    return s;
                }
                return "object" == typeof n
                    ? this.each(function () {
                          e.set(this, n);
                      })
                    : a(
                          this,
                          function (t) {
                              var r, f;
                              if (u && void 0 === t) {
                                  if (
                                      ((r = e.get(u, n) || e.get(u, n.replace(cr, "-$&").toLowerCase())),
                                      void 0 !== r) ||
                                      ((f = i.camelCase(n)), (r = e.get(u, f)), void 0 !== r) ||
                                      ((r = lr(u, f, void 0)), void 0 !== r)
                                  )
                                      return r;
                              } else
                                  (f = i.camelCase(n)),
                                      this.each(function () {
                                          var i = e.get(this, f);
                                          e.set(this, f, t);
                                          n.indexOf("-") > -1 && void 0 !== i && e.set(this, n, t);
                                      });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (n) {
                return this.each(function () {
                    e.remove(this, n);
                });
            },
        });
        i.extend({
            queue: function (n, t, u) {
                var f;
                if (n)
                    return (
                        (t = (t || "fx") + "queue"),
                        (f = r.get(n, t)),
                        u && (!f || i.isArray(u) ? (f = r.access(n, t, i.makeArray(u))) : f.push(u)),
                        f || []
                    );
            },
            dequeue: function (n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function () {
                        i.dequeue(n, t);
                    };
                "inprogress" === u && ((u = r.shift()), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire();
            },
            _queueHooks: function (n, t) {
                var u = t + "queueHooks";
                return (
                    r.get(n, u) ||
                    r.access(n, u, {
                        empty: i.Callbacks("once memory").add(function () {
                            r.remove(n, [t + "queue", u]);
                        }),
                    })
                );
            },
        });
        i.fn.extend({
            queue: function (n, t) {
                var r = 2;
                return (
                    "string" != typeof n && ((t = n), (n = "fx"), r--),
                    arguments.length < r
                        ? i.queue(this[0], n)
                        : void 0 === t
                          ? this
                          : this.each(function () {
                                var r = i.queue(this, n, t);
                                i._queueHooks(this, n);
                                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n);
                            })
                );
            },
            dequeue: function (n) {
                return this.each(function () {
                    i.dequeue(this, n);
                });
            },
            clearQueue: function (n) {
                return this.queue(n || "fx", []);
            },
            promise: function (n, t) {
                var u,
                    e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function () {
                        --e || o.resolveWith(f, [f]);
                    };
                for ("string" != typeof n && ((t = n), (n = void 0)), n = n || "fx"; s--; )
                    (u = r.get(f[s], n + "queueHooks")), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t);
            },
        });
        var ar = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ot = new RegExp("^(?:([+-])=|)(" + ar + ")([a-z%]*)$", "i"),
            w = ["Top", "Right", "Bottom", "Left"],
            st = function (n, t) {
                return (n = t || n), "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n);
            };
        var yr = /^(?:checkbox|radio)$/i,
            pr = /<([\w:-]+)/,
            wr = /^$|\/(?:java|ecma)script/i,
            c = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
        c.optgroup = c.option;
        c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
        c.th = c.td;
        br = /<|&#?\w+;/;
        !(function () {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x</textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
        })();
        var gf = /^key/,
            ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            dr = /^([^.]*)(?:\.(.+)|)/;
        i.event = {
            global: {},
            add: function (n, t, u, f, e) {
                var v,
                    y,
                    w,
                    p,
                    b,
                    c,
                    s,
                    l,
                    o,
                    k,
                    d,
                    a = r.get(n);
                if (a)
                    for (
                        u.handler && ((v = u), (u = v.handler), (e = v.selector)),
                            u.guid || (u.guid = i.guid++),
                            (p = a.events) || (p = a.events = {}),
                            (y = a.handle) ||
                                (y = a.handle =
                                    function (t) {
                                        if ("undefined" != typeof i && i.event.triggered !== t.type)
                                            return i.event.dispatch.apply(n, arguments);
                                    }),
                            t = (t || "").match(h) || [""],
                            b = t.length;
                        b--;

                    )
                        (w = dr.exec(t[b]) || []),
                            (o = d = w[1]),
                            (k = (w[2] || "").split(".").sort()),
                            o &&
                                ((s = i.event.special[o] || {}),
                                (o = (e ? s.delegateType : s.bindType) || o),
                                (s = i.event.special[o] || {}),
                                (c = i.extend(
                                    {
                                        type: o,
                                        origType: d,
                                        data: f,
                                        handler: u,
                                        guid: u.guid,
                                        selector: e,
                                        needsContext: e && i.expr.match.needsContext.test(e),
                                        namespace: k.join("."),
                                    },
                                    v
                                )),
                                (l = p[o]) ||
                                    ((l = p[o] = []),
                                    (l.delegateCount = 0),
                                    (s.setup && s.setup.call(n, f, k, y) !== !1) ||
                                        (n.addEventListener && n.addEventListener(o, y))),
                                s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)),
                                e ? l.splice(l.delegateCount++, 0, c) : l.push(c),
                                (i.event.global[o] = !0));
            },
            remove: function (n, t, u, f, e) {
                var y,
                    k,
                    c,
                    v,
                    p,
                    s,
                    l,
                    a,
                    o,
                    b,
                    d,
                    w = r.hasData(n) && r.get(n);
                if (w && (v = w.events)) {
                    for (t = (t || "").match(h) || [""], p = t.length; p--; )
                        if (((c = dr.exec(t[p]) || []), (o = d = c[1]), (b = (c[2] || "").split(".").sort()), o)) {
                            for (
                                l = i.event.special[o] || {},
                                    o = (f ? l.delegateType : l.bindType) || o,
                                    a = v[o] || [],
                                    c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    k = y = a.length;
                                y--;

                            )
                                (s = a[y]),
                                    (!e && d !== s.origType) ||
                                        (u && u.guid !== s.guid) ||
                                        (c && !c.test(s.namespace)) ||
                                        (f && f !== s.selector && ("**" !== f || !s.selector)) ||
                                        (a.splice(y, 1),
                                        s.selector && a.delegateCount--,
                                        l.remove && l.remove.call(n, s));
                            k &&
                                !a.length &&
                                ((l.teardown && l.teardown.call(n, b, w.handle) !== !1) ||
                                    i.removeEvent(n, o, w.handle),
                                delete v[o]);
                        } else for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                    i.isEmptyObject(v) && r.remove(n, "handle events");
                }
            },
            dispatch: function (n) {
                n = i.event.fix(n);
                var o,
                    s,
                    e,
                    u,
                    t,
                    h = [],
                    c = v.call(arguments),
                    l = (r.get(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (((c[0] = n), (n.delegateTarget = this), !f.preDispatch || f.preDispatch.call(this, n) !== !1)) {
                    for (h = i.event.handlers.call(this, n, l), o = 0; (u = h[o++]) && !n.isPropagationStopped(); )
                        for (
                            n.currentTarget = u.elem, s = 0;
                            (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();

                        )
                            (n.rnamespace && !n.rnamespace.test(t.namespace)) ||
                                ((n.handleObj = t),
                                (n.data = t.data),
                                (e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c)),
                                void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result;
                }
            },
            handlers: function (n, t) {
                var e,
                    u,
                    f,
                    o,
                    h = [],
                    s = t.delegateCount,
                    r = n.target;
                if (s && r.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1))
                    for (; r !== this; r = r.parentNode || this)
                        if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                            for (u = [], e = 0; s > e; e++)
                                (o = t[e]),
                                    (f = o.selector + " "),
                                    void 0 === u[f] &&
                                        (u[f] = o.needsContext
                                            ? i(f, this).index(r) > -1
                                            : i.find(f, this, null, [r]).length),
                                    u[f] && u.push(o);
                            u.length && h.push({ elem: r, handlers: u });
                        }
                return s < t.length && h.push({ elem: this, handlers: t.slice(s) }), h;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                " "
            ),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n;
                },
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                    " "
                ),
                filter: function (n, t) {
                    var e,
                        i,
                        r,
                        f = t.button;
                    return (
                        null == n.pageX &&
                            null != t.clientX &&
                            ((e = n.target.ownerDocument || u),
                            (i = e.documentElement),
                            (r = e.body),
                            (n.pageX =
                                t.clientX +
                                ((i && i.scrollLeft) || (r && r.scrollLeft) || 0) -
                                ((i && i.clientLeft) || (r && r.clientLeft) || 0)),
                            (n.pageY =
                                t.clientY +
                                ((i && i.scrollTop) || (r && r.scrollTop) || 0) -
                                ((i && i.clientTop) || (r && r.clientTop) || 0))),
                        n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                        n
                    );
                },
            },
            fix: function (n) {
                if (n[i.expando]) return n;
                var f,
                    e,
                    o,
                    r = n.type,
                    s = n,
                    t = this.fixHooks[r];
                for (
                    t || (this.fixHooks[r] = t = ne.test(r) ? this.mouseHooks : gf.test(r) ? this.keyHooks : {}),
                        o = t.props ? this.props.concat(t.props) : this.props,
                        n = new i.Event(s),
                        f = o.length;
                    f--;

                )
                    (e = o[f]), (n[e] = s[e]);
                return (
                    n.target || (n.target = u),
                    3 === n.target.nodeType && (n.target = n.target.parentNode),
                    t.filter ? t.filter(n, s) : n
                );
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        if (this !== gr() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        if (this === gr() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && i.nodeName(this, "input"))
                            return this.click(), !1;
                    },
                    _default: function (n) {
                        return i.nodeName(n.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result);
                    },
                },
            },
        };
        i.removeEvent = function (n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i);
        };
        i.Event = function (n, t) {
            return this instanceof i.Event
                ? (n && n.type
                      ? ((this.originalEvent = n),
                        (this.type = n.type),
                        (this.isDefaultPrevented =
                            n.defaultPrevented || (void 0 === n.defaultPrevented && n.returnValue === !1) ? pt : nt))
                      : (this.type = n),
                  t && i.extend(this, t),
                  (this.timeStamp = (n && n.timeStamp) || i.now()),
                  void (this[i.expando] = !0))
                : new i.Event(n, t);
        };
        i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: nt,
            isPropagationStopped: nt,
            isImmediatePropagationStopped: nt,
            isSimulated: !1,
            preventDefault: function () {
                var n = this.originalEvent;
                this.isDefaultPrevented = pt;
                n && !this.isSimulated && n.preventDefault();
            },
            stopPropagation: function () {
                var n = this.originalEvent;
                this.isPropagationStopped = pt;
                n && !this.isSimulated && n.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = pt;
                n && !this.isSimulated && n.stopImmediatePropagation();
                this.stopPropagation();
            },
        };
        i.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (n, t) {
                i.event.special[n] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (n) {
                        var u,
                            f = this,
                            r = n.relatedTarget,
                            e = n.handleObj;
                        return (
                            (r && (r === f || i.contains(f, r))) ||
                                ((n.type = e.origType), (u = e.handler.apply(this, arguments)), (n.type = t)),
                            u
                        );
                    },
                };
            }
        );
        i.fn.extend({
            on: function (n, t, i, r) {
                return fi(this, n, t, i, r);
            },
            one: function (n, t, i, r) {
                return fi(this, n, t, i, r, 1);
            },
            off: function (n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj)
                    return (
                        (u = n.handleObj),
                        i(n.delegateTarget).off(
                            u.namespace ? u.origType + "." + u.namespace : u.origType,
                            u.selector,
                            u.handler
                        ),
                        this
                    );
                if ("object" == typeof n) {
                    for (f in n) this.off(f, t, n[f]);
                    return this;
                }
                return (
                    (t !== !1 && "function" != typeof t) || ((r = t), (t = void 0)),
                    r === !1 && (r = nt),
                    this.each(function () {
                        i.event.remove(this, n, r, t);
                    })
                );
            },
        });
        var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ie = /<script|<style|<link/i,
            re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ue = /^true\/(.*)/,
            fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        i.extend({
            htmlPrefilter: function (n) {
                return n.replace(te, "<$1></$2>");
            },
            clone: function (n, t, r) {
                var u,
                    c,
                    s,
                    e,
                    h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
                if (!(f.noCloneChecked || (1 !== n.nodeType && 11 !== n.nodeType) || i.isXMLDoc(n)))
                    for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++) se(s[u], e[u]);
                if (t)
                    if (r) for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++) tu(s[u], e[u]);
                    else tu(n, h);
                return (e = o(h, "script")), e.length > 0 && ui(e, !l && o(n, "script")), h;
            },
            cleanData: function (n) {
                for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)
                    if (g(t)) {
                        if ((u = t[r.expando])) {
                            if (u.events)
                                for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                            t[r.expando] = void 0;
                        }
                        t[e.expando] && (t[e.expando] = void 0);
                    }
            },
        });
        i.fn.extend({
            domManip: b,
            detach: function (n) {
                return iu(this, n, !0);
            },
            remove: function (n) {
                return iu(this, n);
            },
            text: function (n) {
                return a(
                    this,
                    function (n) {
                        return void 0 === n
                            ? i.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                                      (this.textContent = n);
                              });
                    },
                    null,
                    n,
                    arguments.length
                );
            },
            append: function () {
                return b(this, arguments, function (n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = nu(this, n);
                        t.appendChild(n);
                    }
                });
            },
            prepend: function () {
                return b(this, arguments, function (n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = nu(this, n);
                        t.insertBefore(n, t.firstChild);
                    }
                });
            },
            before: function () {
                return b(this, arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this);
                });
            },
            after: function () {
                return b(this, arguments, function (n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
                });
            },
            empty: function () {
                for (var n, t = 0; null != (n = this[t]); t++)
                    1 === n.nodeType && (i.cleanData(o(n, !1)), (n.textContent = ""));
                return this;
            },
            clone: function (n, t) {
                return (
                    (n = null == n ? !1 : n),
                    (t = null == t ? n : t),
                    this.map(function () {
                        return i.clone(this, n, t);
                    })
                );
            },
            html: function (n) {
                return a(
                    this,
                    function (n) {
                        var t = this[0] || {},
                            r = 0,
                            u = this.length;
                        if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof n && !ie.test(n) && !c[(pr.exec(n) || ["", ""])[1].toLowerCase()]) {
                            n = i.htmlPrefilter(n);
                            try {
                                for (; u > r; r++)
                                    (t = this[r] || {}), 1 === t.nodeType && (i.cleanData(o(t, !1)), (t.innerHTML = n));
                                t = 0;
                            } catch (f) {}
                        }
                        t && this.empty().append(n);
                    },
                    null,
                    n,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return b(
                    this,
                    arguments,
                    function (t) {
                        var r = this.parentNode;
                        i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this));
                    },
                    n
                );
            },
        });
        i.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (n, t) {
                i.fn[n] = function (n) {
                    for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++)
                        (u = r === o ? this : this.clone(!0)), i(e[r])[t](u), ti.apply(f, u.get());
                    return this.pushStack(f);
                };
            }
        );
        ei = { HTML: "block", BODY: "block" };
        var uu = /^margin/,
            si = new RegExp("^(" + ar + ")(?!px)[a-z%]+$", "i"),
            bt = function (t) {
                var i = t.ownerDocument.defaultView;
                return (i && i.opener) || (i = n), i.getComputedStyle(t);
            },
            hi = function (n, t, i, r) {
                var f,
                    u,
                    e = {};
                for (u in t) (e[u] = n.style[u]), (n.style[u] = t[u]);
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f;
            },
            ht = u.documentElement;
        !(function () {
            var s,
                e,
                h,
                c,
                r = u.createElement("div"),
                t = u.createElement("div");
            if (t.style) {
                t.style.backgroundClip = "content-box";
                t.cloneNode(!0).style.backgroundClip = "";
                f.clearCloneStyle = "content-box" === t.style.backgroundClip;
                r.style.cssText =
                    "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
                r.appendChild(t);
                function o() {
                    t.style.cssText =
                        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                    t.innerHTML = "";
                    ht.appendChild(r);
                    var i = n.getComputedStyle(t);
                    s = "1%" !== i.top;
                    c = "2px" === i.marginLeft;
                    e = "4px" === i.width;
                    t.style.marginRight = "50%";
                    h = "4px" === i.marginRight;
                    ht.removeChild(r);
                }
                i.extend(f, {
                    pixelPosition: function () {
                        return o(), s;
                    },
                    boxSizingReliable: function () {
                        return null == e && o(), e;
                    },
                    pixelMarginRight: function () {
                        return null == e && o(), h;
                    },
                    reliableMarginLeft: function () {
                        return null == e && o(), c;
                    },
                    reliableMarginRight: function () {
                        var f,
                            i = t.appendChild(u.createElement("div"));
                        return (
                            (i.style.cssText = t.style.cssText =
                                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (i.style.marginRight = i.style.width = "0"),
                            (t.style.width = "1px"),
                            ht.appendChild(r),
                            (f = !parseFloat(n.getComputedStyle(i).marginRight)),
                            ht.removeChild(r),
                            t.removeChild(i),
                            f
                        );
                    },
                });
            }
        })();
        var he = /^(none|table(?!-c[ea]).+)/,
            ce = { position: "absolute", visibility: "hidden", display: "block" },
            fu = { letterSpacing: "0", fontWeight: "400" },
            eu = ["Webkit", "O", "Moz", "ms"],
            ou = u.createElement("div").style;
        i.extend({
            cssHooks: {
                opacity: {
                    get: function (n, t) {
                        if (t) {
                            var i = tt(n, "opacity");
                            return "" === i ? "1" : i;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: { float: "cssFloat" },
            style: function (n, t, r, u) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var e,
                        h,
                        o,
                        s = i.camelCase(t),
                        c = n.style;
                    return (
                        (t = i.cssProps[s] || (i.cssProps[s] = su(s) || s)),
                        (o = i.cssHooks[t] || i.cssHooks[s]),
                        void 0 === r
                            ? o && "get" in o && void 0 !== (e = o.get(n, !1, u))
                                ? e
                                : c[t]
                            : ((h = typeof r),
                              "string" === h && (e = ot.exec(r)) && e[1] && ((r = vr(n, t, e)), (h = "number")),
                              null != r &&
                                  r === r &&
                                  ("number" === h && (r += (e && e[3]) || (i.cssNumber[s] ? "" : "px")),
                                  f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                  (o && "set" in o && void 0 === (r = o.set(n, r, u))) || (c[t] = r)),
                              void 0)
                    );
                }
            },
            css: function (n, t, r, u) {
                var f,
                    s,
                    o,
                    e = i.camelCase(t);
                return (
                    (t = i.cssProps[e] || (i.cssProps[e] = su(e) || e)),
                    (o = i.cssHooks[t] || i.cssHooks[e]),
                    o && "get" in o && (f = o.get(n, !0, r)),
                    void 0 === f && (f = tt(n, t, u)),
                    "normal" === f && t in fu && (f = fu[t]),
                    "" === r || r ? ((s = parseFloat(f)), r === !0 || isFinite(s) ? s || 0 : f) : f
                );
            },
        });
        i.each(["height", "width"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r, u) {
                    if (r)
                        return he.test(i.css(n, "display")) && 0 === n.offsetWidth
                            ? hi(n, ce, function () {
                                  return lu(n, t, u);
                              })
                            : lu(n, t, u);
                },
                set: function (n, r, u) {
                    var f,
                        e = u && bt(n),
                        o = u && cu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e);
                    return (
                        o && (f = ot.exec(r)) && "px" !== (f[3] || "px") && ((n.style[t] = r), (r = i.css(n, t))),
                        hu(n, r, o)
                    );
                },
            };
        });
        i.cssHooks.marginLeft = ci(f.reliableMarginLeft, function (n, t) {
            if (t)
                return (
                    (parseFloat(tt(n, "marginLeft")) ||
                        n.getBoundingClientRect().left -
                            hi(n, { marginLeft: 0 }, function () {
                                return n.getBoundingClientRect().left;
                            })) + "px"
                );
        });
        i.cssHooks.marginRight = ci(f.reliableMarginRight, function (n, t) {
            if (t) return hi(n, { display: "inline-block" }, tt, [n, "marginRight"]);
        });
        i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
            i.cssHooks[n + t] = {
                expand: function (i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                        f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                    return f;
                },
            };
            uu.test(n) || (i.cssHooks[n + t].set = hu);
        });
        i.fn.extend({
            css: function (n, t) {
                return a(
                    this,
                    function (n, t, r) {
                        var f,
                            e,
                            o = {},
                            u = 0;
                        if (i.isArray(t)) {
                            for (f = bt(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                            return o;
                        }
                        return void 0 !== r ? i.style(n, t, r) : i.css(n, t);
                    },
                    n,
                    t,
                    arguments.length > 1
                );
            },
            show: function () {
                return au(this, !0);
            },
            hide: function () {
                return au(this);
            },
            toggle: function (n) {
                return "boolean" == typeof n
                    ? n
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          st(this) ? i(this).show() : i(this).hide();
                      });
            },
        });
        i.Tween = s;
        s.prototype = {
            constructor: s,
            init: function (n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || i.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px");
            },
            cur: function () {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this);
            },
            run: function (n) {
                var t,
                    r = s.propHooks[this.prop];
                return (
                    (this.pos = this.options.duration
                        ? (t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration))
                        : (t = n)),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    r && r.set ? r.set(this) : s.propHooks._default.set(this),
                    this
                );
            },
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function (n) {
                    var t;
                    return 1 !== n.elem.nodeType || (null != n.elem[n.prop] && null == n.elem.style[n.prop])
                        ? n.elem[n.prop]
                        : ((t = i.css(n.elem, n.prop, "")), t && "auto" !== t ? t : 0);
                },
                set: function (n) {
                    i.fx.step[n.prop]
                        ? i.fx.step[n.prop](n)
                        : 1 !== n.elem.nodeType || (null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop])
                          ? (n.elem[n.prop] = n.now)
                          : i.style(n.elem, n.prop, n.now + n.unit);
                },
            },
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function (n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
            },
        };
        i.easing = {
            linear: function (n) {
                return n;
            },
            swing: function (n) {
                return 0.5 - Math.cos(n * Math.PI) / 2;
            },
            _default: "swing",
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        vu = /^(?:toggle|show|hide)$/;
        yu = /queueHooks$/;
        i.Animation = i.extend(l, {
            tweeners: {
                "*": [
                    function (n, t) {
                        var i = this.createTween(n, t);
                        return vr(i.elem, n, ot.exec(t), i), i;
                    },
                ],
            },
            tweener: function (n, t) {
                i.isFunction(n) ? ((t = n), (n = ["*"])) : (n = n.match(h));
                for (var r, u = 0, f = n.length; f > u; u++)
                    (r = n[u]), (l.tweeners[r] = l.tweeners[r] || []), l.tweeners[r].unshift(t);
            },
            prefilters: [le],
            prefilter: function (n, t) {
                t ? l.prefilters.unshift(n) : l.prefilters.push(n);
            },
        });
        i.speed = function (n, t, r) {
            var u =
                n && "object" == typeof n
                    ? i.extend({}, n)
                    : {
                          complete: r || (!r && t) || (i.isFunction(n) && n),
                          duration: n,
                          easing: (r && t) || (t && !i.isFunction(t) && t),
                      };
            return (
                (u.duration = i.fx.off
                    ? 0
                    : "number" == typeof u.duration
                      ? u.duration
                      : u.duration in i.fx.speeds
                        ? i.fx.speeds[u.duration]
                        : i.fx.speeds._default),
                (null != u.queue && u.queue !== !0) || (u.queue = "fx"),
                (u.old = u.complete),
                (u.complete = function () {
                    i.isFunction(u.old) && u.old.call(this);
                    u.queue && i.dequeue(this, u.queue);
                }),
                u
            );
        };
        i.fn.extend({
            fadeTo: function (n, t, i, r) {
                return this.filter(st).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r);
            },
            animate: function (n, t, u, f) {
                var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function () {
                        var t = l(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0);
                    };
                return (e.finish = e), s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e);
            },
            stop: function (n, t, u) {
                var f = function (n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u);
                };
                return (
                    "string" != typeof n && ((u = t), (t = n), (n = void 0)),
                    t && n !== !1 && this.queue(n || "fx", []),
                    this.each(function () {
                        var s = !0,
                            t = null != n && n + "queueHooks",
                            o = i.timers,
                            e = r.get(this);
                        if (t) e[t] && e[t].stop && f(e[t]);
                        else for (t in e) e[t] && e[t].stop && yu.test(t) && f(e[t]);
                        for (t = o.length; t--; )
                            o[t].elem !== this ||
                                (null != n && o[t].queue !== n) ||
                                (o[t].anim.stop(u), (s = !1), o.splice(t, 1));
                        (!s && u) || i.dequeue(this, n);
                    })
                );
            },
            finish: function (n) {
                return (
                    n !== !1 && (n = n || "fx"),
                    this.each(function () {
                        var t,
                            e = r.get(this),
                            u = e[n + "queue"],
                            o = e[n + "queueHooks"],
                            f = i.timers,
                            s = u ? u.length : 0;
                        for (
                            e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length;
                            t--;

                        )
                            f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                        for (t = 0; s > t; t++) u[t] && u[t].finish && u[t].finish.call(this);
                        delete e.finish;
                    })
                );
            },
        });
        i.each(["toggle", "show", "hide"], function (n, t) {
            var r = i.fn[t];
            i.fn[t] = function (n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(dt(t, !0), n, i, u);
            };
        });
        i.each(
            {
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (n, t) {
                i.fn[n] = function (n, i, r) {
                    return this.animate(t, n, i, r);
                };
            }
        );
        i.timers = [];
        i.fx.tick = function () {
            var r,
                n = 0,
                t = i.timers;
            for (it = i.now(); n < t.length; n++) (r = t[n]), r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            it = void 0;
        };
        i.fx.timer = function (n) {
            i.timers.push(n);
            n() ? i.fx.start() : i.timers.pop();
        };
        i.fx.interval = 13;
        i.fx.start = function () {
            kt || (kt = n.setInterval(i.fx.tick, i.fx.interval));
        };
        i.fx.stop = function () {
            n.clearInterval(kt);
            kt = null;
        };
        i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
        (i.fn.delay = function (t, r) {
            return (
                (t = i.fx ? i.fx.speeds[t] || t : t),
                (r = r || "fx"),
                this.queue(r, function (i, r) {
                    var u = n.setTimeout(i, t);
                    r.stop = function () {
                        n.clearTimeout(u);
                    };
                })
            );
        }),
            (function () {
                var n = u.createElement("input"),
                    t = u.createElement("select"),
                    i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = "" !== n.value;
                f.optSelected = i.selected;
                t.disabled = !0;
                f.optDisabled = !i.disabled;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = "t" === n.value;
            })();
        rt = i.expr.attrHandle;
        i.fn.extend({
            attr: function (n, t) {
                return a(this, i.attr, n, t, arguments.length > 1);
            },
            removeAttr: function (n) {
                return this.each(function () {
                    i.removeAttr(this, n);
                });
            },
        });
        i.extend({
            attr: function (n, t, r) {
                var u,
                    f,
                    e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e)
                    return "undefined" == typeof n.getAttribute
                        ? i.prop(n, t, r)
                        : ((1 === e && i.isXMLDoc(n)) ||
                              ((t = t.toLowerCase()),
                              (f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bu : void 0))),
                          void 0 !== r
                              ? null === r
                                  ? void i.removeAttr(n, t)
                                  : f && "set" in f && void 0 !== (u = f.set(n, r, t))
                                    ? u
                                    : (n.setAttribute(t, r + ""), r)
                              : f && "get" in f && null !== (u = f.get(n, t))
                                ? u
                                : ((u = i.find.attr(n, t)), null == u ? void 0 : u));
            },
            attrHooks: {
                type: {
                    set: function (n, t) {
                        if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t;
                        }
                    },
                },
            },
            removeAttr: function (n, t) {
                var r,
                    u,
                    e = 0,
                    f = t && t.match(h);
                if (f && 1 === n.nodeType)
                    while ((r = f[e++]))
                        (u = i.propFix[r] || r), i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r);
            },
        });
        bu = {
            set: function (n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r;
            },
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
            var r = rt[t] || i.find.attr;
            rt[t] = function (n, t, i) {
                var u, f;
                return (
                    i || ((f = rt[t]), (rt[t] = u), (u = null != r(n, t, i) ? t.toLowerCase() : null), (rt[t] = f)), u
                );
            };
        });
        ku = /^(?:input|select|textarea|button)$/i;
        du = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function (n, t) {
                return a(this, i.prop, n, t, arguments.length > 1);
            },
            removeProp: function (n) {
                return this.each(function () {
                    delete this[i.propFix[n] || n];
                });
            },
        });
        i.extend({
            prop: function (n, t, r) {
                var f,
                    u,
                    e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e)
                    return (
                        (1 === e && i.isXMLDoc(n)) || ((t = i.propFix[t] || t), (u = i.propHooks[t])),
                        void 0 !== r
                            ? u && "set" in u && void 0 !== (f = u.set(n, r, t))
                                ? f
                                : (n[t] = r)
                            : u && "get" in u && null !== (f = u.get(n, t))
                              ? f
                              : n[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : ku.test(n.nodeName) || (du.test(n.nodeName) && n.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        });
        f.optSelected ||
            (i.propHooks.selected = {
                get: function (n) {
                    var t = n.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (n) {
                    var t = n.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            });
        i.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                i.propFix[this.toLowerCase()] = this;
            }
        );
        gt = /[\t\r\n\f]/g;
        i.fn.extend({
            addClass: function (n) {
                var o,
                    t,
                    r,
                    u,
                    f,
                    s,
                    e,
                    c = 0;
                if (i.isFunction(n))
                    return this.each(function (t) {
                        i(this).addClass(n.call(this, t, k(this)));
                    });
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; (t = this[c++]); )
                        if (((u = k(t)), (r = 1 === t.nodeType && (" " + u + " ").replace(gt, " ")))) {
                            for (s = 0; (f = o[s++]); ) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                            e = i.trim(r);
                            u !== e && t.setAttribute("class", e);
                        }
                return this;
            },
            removeClass: function (n) {
                var o,
                    r,
                    t,
                    u,
                    f,
                    s,
                    e,
                    c = 0;
                if (i.isFunction(n))
                    return this.each(function (t) {
                        i(this).removeClass(n.call(this, t, k(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; (r = this[c++]); )
                        if (((u = k(r)), (t = 1 === r.nodeType && (" " + u + " ").replace(gt, " ")))) {
                            for (s = 0; (f = o[s++]); )
                                while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                            e = i.trim(t);
                            u !== e && r.setAttribute("class", e);
                        }
                return this;
            },
            toggleClass: function (n, t) {
                var u = typeof n;
                return "boolean" == typeof t && "string" === u
                    ? t
                        ? this.addClass(n)
                        : this.removeClass(n)
                    : i.isFunction(n)
                      ? this.each(function (r) {
                            i(this).toggleClass(n.call(this, r, k(this), t), t);
                        })
                      : this.each(function () {
                            var t, e, f, o;
                            if ("string" === u)
                                for (e = 0, f = i(this), o = n.match(h) || []; (t = o[e++]); )
                                    f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                            else
                                (void 0 !== n && "boolean" !== u) ||
                                    ((t = k(this)),
                                    t && r.set(this, "__className__", t),
                                    this.setAttribute &&
                                        this.setAttribute(
                                            "class",
                                            t || n === !1 ? "" : r.get(this, "__className__") || ""
                                        ));
                        });
            },
            hasClass: function (n) {
                for (var t, r = 0, i = " " + n + " "; (t = this[r++]); )
                    if (1 === t.nodeType && (" " + k(t) + " ").replace(gt, " ").indexOf(i) > -1) return !0;
                return !1;
            },
        });
        gu = /\r/g;
        nf = /[\x20\t\r\n\f]+/g;
        i.fn.extend({
            val: function (n) {
                var t,
                    r,
                    f,
                    u = this[0];
                return arguments.length
                    ? ((f = i.isFunction(n)),
                      this.each(function (r) {
                          var u;
                          1 === this.nodeType &&
                              ((u = f ? n.call(this, r, i(this).val()) : n),
                              null == u
                                  ? (u = "")
                                  : "number" == typeof u
                                    ? (u += "")
                                    : i.isArray(u) &&
                                      (u = i.map(u, function (n) {
                                          return null == n ? "" : n + "";
                                      })),
                              (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]),
                              (t && "set" in t && void 0 !== t.set(this, u, "value")) || (this.value = u));
                      }))
                    : u
                      ? ((t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()]),
                        t && "get" in t && void 0 !== (r = t.get(u, "value"))
                            ? r
                            : ((r = u.value), "string" == typeof r ? r.replace(gu, "") : null == r ? "" : r))
                      : void 0;
            },
        });
        i.extend({
            valHooks: {
                option: {
                    get: function (n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : i.trim(i.text(n)).replace(nf, " ");
                    },
                },
                select: {
                    get: function (n) {
                        for (
                            var o,
                                t,
                                s = n.options,
                                r = n.selectedIndex,
                                u = "select-one" === n.type || 0 > r,
                                h = u ? null : [],
                                c = u ? r + 1 : s.length,
                                e = 0 > r ? c : u ? r : 0;
                            c > e;
                            e++
                        )
                            if (
                                ((t = s[e]),
                                (t.selected || e === r) &&
                                    (f.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) &&
                                    (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup")))
                            ) {
                                if (((o = i(t).val()), u)) return o;
                                h.push(o);
                            }
                        return h;
                    },
                    set: function (n, t) {
                        for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                            (r = f[o]), (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                        return u || (n.selectedIndex = -1), e;
                    },
                },
            },
        });
        i.each(["radio", "checkbox"], function () {
            i.valHooks[this] = {
                set: function (n, t) {
                    if (i.isArray(t)) return (n.checked = i.inArray(i(n).val(), t) > -1);
                },
            };
            f.checkOn ||
                (i.valHooks[this].get = function (n) {
                    return null === n.getAttribute("value") ? "on" : n.value;
                });
        });
        li = /^(?:focusinfocus|focusoutblur)$/;
        i.extend(i.event, {
            trigger: function (t, f, e, o) {
                var w,
                    s,
                    c,
                    b,
                    a,
                    v,
                    l,
                    p = [e || u],
                    h = ft.call(t, "type") ? t.type : t,
                    y = ft.call(t, "namespace") ? t.namespace.split(".") : [];
                if (
                    ((s = c = e = e || u),
                    3 !== e.nodeType &&
                        8 !== e.nodeType &&
                        !li.test(h + i.event.triggered) &&
                        (h.indexOf(".") > -1 && ((y = h.split(".")), (h = y.shift()), y.sort()),
                        (a = h.indexOf(":") < 0 && "on" + h),
                        (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)),
                        (t.isTrigger = o ? 2 : 3),
                        (t.namespace = y.join(".")),
                        (t.rnamespace = t.namespace
                            ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
                            : null),
                        (t.result = void 0),
                        t.target || (t.target = e),
                        (f = null == f ? [t] : i.makeArray(f, [t])),
                        (l = i.event.special[h] || {}),
                        o || !l.trigger || l.trigger.apply(e, f) !== !1))
                ) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (b = l.delegateType || h, li.test(b + h) || (s = s.parentNode); s; s = s.parentNode)
                            p.push(s), (c = s);
                        c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n);
                    }
                    for (w = 0; (s = p[w++]) && !t.isPropagationStopped(); )
                        (t.type = w > 1 ? b : l.bindType || h),
                            (v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle")),
                            v && v.apply(s, f),
                            (v = a && s[a]),
                            v && v.apply && g(s) && ((t.result = v.apply(s, f)), t.result === !1 && t.preventDefault());
                    return (
                        (t.type = h),
                        o ||
                            t.isDefaultPrevented() ||
                            (l._default && l._default.apply(p.pop(), f) !== !1) ||
                            !g(e) ||
                            (a &&
                                i.isFunction(e[h]) &&
                                !i.isWindow(e) &&
                                ((c = e[a]),
                                c && (e[a] = null),
                                (i.event.triggered = h),
                                e[h](),
                                (i.event.triggered = void 0),
                                c && (e[a] = c))),
                        t.result
                    );
                }
            },
            simulate: function (n, t, r) {
                var u = i.extend(new i.Event(), r, { type: n, isSimulated: !0 });
                i.event.trigger(u, null, t);
            },
        });
        i.fn.extend({
            trigger: function (n, t) {
                return this.each(function () {
                    i.event.trigger(n, t, this);
                });
            },
            triggerHandler: function (n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0);
            },
        });
        i.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (n, t) {
                i.fn[t] = function (n, i) {
                    return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t);
                };
            }
        );
        i.fn.extend({
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n);
            },
        });
        f.focusin = "onfocusin" in n;
        f.focusin ||
            i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
                var u = function (n) {
                    i.event.simulate(t, n.target, i.event.fix(n));
                };
                i.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this,
                            f = r.access(i, t);
                        f || i.addEventListener(n, u, !0);
                        r.access(i, t, (f || 0) + 1);
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this,
                            f = r.access(i, t) - 1;
                        f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t));
                    },
                };
            });
        var ct = n.location,
            ai = i.now(),
            vi = /\?/;
        i.parseJSON = function (n) {
            return JSON.parse(n + "");
        };
        i.parseXML = function (t) {
            var r;
            if (!t || "string" != typeof t) return null;
            try {
                r = new n.DOMParser().parseFromString(t, "text/xml");
            } catch (u) {
                r = void 0;
            }
            return (r && !r.getElementsByTagName("parsererror").length) || i.error("Invalid XML: " + t), r;
        };
        var ve = /#.*$/,
            tf = /([?&])_=[^&]*/,
            ye = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            pe = /^(?:GET|HEAD)$/,
            we = /^\/\//,
            rf = {},
            yi = {},
            uf = "*/".concat("*"),
            pi = u.createElement("a");
        pi.href = ct.href;
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": uf,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (n, t) {
                return t ? wi(wi(n, i.ajaxSettings), t) : wi(i.ajaxSettings, n);
            },
            ajaxPrefilter: ff(rf),
            ajaxTransport: ff(yi),
            ajax: function (t, r) {
                function b(t, r, u, h) {
                    var a,
                        rt,
                        it,
                        p,
                        b,
                        l = r;
                    2 !== s &&
                        ((s = 2),
                        d && n.clearTimeout(d),
                        (v = void 0),
                        (k = h || ""),
                        (e.readyState = t > 0 ? 4 : 0),
                        (a = (t >= 200 && 300 > t) || 304 === t),
                        u && (p = be(f, e, u)),
                        (p = ke(f, p, e, a)),
                        a
                            ? (f.ifModified &&
                                  ((b = e.getResponseHeader("Last-Modified")),
                                  b && (i.lastModified[o] = b),
                                  (b = e.getResponseHeader("etag")),
                                  b && (i.etag[o] = b)),
                              204 === t || "HEAD" === f.type
                                  ? (l = "nocontent")
                                  : 304 === t
                                    ? (l = "notmodified")
                                    : ((l = p.state), (rt = p.data), (it = p.error), (a = !it)))
                            : ((it = l), (!t && l) || ((l = "error"), 0 > t && (t = 0))),
                        (e.status = t),
                        (e.statusText = (r || l) + ""),
                        a ? nt.resolveWith(c, [rt, l, e]) : nt.rejectWith(c, [e, l, it]),
                        e.statusCode(w),
                        (w = void 0),
                        y && g.trigger(a ? "ajaxSuccess" : "ajaxError", [e, f, a ? rt : it]),
                        tt.fireWith(c, [e, l]),
                        y && (g.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")));
                }
                "object" == typeof t && ((r = t), (t = void 0));
                r = r || {};
                var v,
                    o,
                    k,
                    p,
                    d,
                    l,
                    y,
                    a,
                    f = i.ajaxSetup({}, r),
                    c = f.context || f,
                    g = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                    nt = i.Deferred(),
                    tt = i.Callbacks("once memory"),
                    w = f.statusCode || {},
                    it = {},
                    rt = {},
                    s = 0,
                    ut = "canceled",
                    e = {
                        readyState: 0,
                        getResponseHeader: function (n) {
                            var t;
                            if (2 === s) {
                                if (!p) for (p = {}; (t = ye.exec(k)); ) p[t[1].toLowerCase()] = t[2];
                                t = p[n.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === s ? k : null;
                        },
                        setRequestHeader: function (n, t) {
                            var i = n.toLowerCase();
                            return s || ((n = rt[i] = rt[i] || n), (it[n] = t)), this;
                        },
                        overrideMimeType: function (n) {
                            return s || (f.mimeType = n), this;
                        },
                        statusCode: function (n) {
                            var t;
                            if (n)
                                if (2 > s) for (t in n) w[t] = [w[t], n[t]];
                                else e.always(n[e.status]);
                            return this;
                        },
                        abort: function (n) {
                            var t = n || ut;
                            return v && v.abort(t), b(0, t), this;
                        },
                    };
                if (
                    ((nt.promise(e).complete = tt.add),
                    (e.success = e.done),
                    (e.error = e.fail),
                    (f.url = ((t || f.url || ct.href) + "").replace(ve, "").replace(we, ct.protocol + "//")),
                    (f.type = r.method || r.type || f.method || f.type),
                    (f.dataTypes = i
                        .trim(f.dataType || "*")
                        .toLowerCase()
                        .match(h) || [""]),
                    null == f.crossDomain)
                ) {
                    l = u.createElement("a");
                    try {
                        l.href = f.url;
                        l.href = l.href;
                        f.crossDomain = pi.protocol + "//" + pi.host != l.protocol + "//" + l.host;
                    } catch (ft) {
                        f.crossDomain = !0;
                    }
                }
                if (
                    (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)),
                    ef(rf, f, r, e),
                    2 === s)
                )
                    return e;
                y = i.event && f.global;
                y && 0 == i.active++ && i.event.trigger("ajaxStart");
                f.type = f.type.toUpperCase();
                f.hasContent = !pe.test(f.type);
                o = f.url;
                f.hasContent ||
                    (f.data && ((o = f.url += (vi.test(o) ? "&" : "?") + f.data), delete f.data),
                    f.cache === !1 &&
                        (f.url = tf.test(o)
                            ? o.replace(tf, "$1_=" + ai++)
                            : o + (vi.test(o) ? "&" : "?") + "_=" + ai++));
                f.ifModified &&
                    (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
                    i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
                ((f.data && f.hasContent && f.contentType !== !1) || r.contentType) &&
                    e.setRequestHeader("Content-Type", f.contentType);
                e.setRequestHeader(
                    "Accept",
                    f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                        ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + uf + "; q=0.01" : "")
                        : f.accepts["*"]
                );
                for (a in f.headers) e.setRequestHeader(a, f.headers[a]);
                if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || 2 === s)) return e.abort();
                ut = "abort";
                for (a in { success: 1, error: 1, complete: 1 }) e[a](f[a]);
                if ((v = ef(yi, f, r, e))) {
                    if (((e.readyState = 1), y && g.trigger("ajaxSend", [e, f]), 2 === s)) return e;
                    f.async &&
                        f.timeout > 0 &&
                        (d = n.setTimeout(function () {
                            e.abort("timeout");
                        }, f.timeout));
                    try {
                        s = 1;
                        v.send(it, b);
                    } catch (ft) {
                        if (!(2 > s)) throw ft;
                        b(-1, ft);
                    }
                } else b(-1, "No Transport");
                return e;
            },
            getJSON: function (n, t, r) {
                return i.get(n, t, r, "json");
            },
            getScript: function (n, t) {
                return i.get(n, void 0, t, "script");
            },
        });
        i.each(["get", "post"], function (n, t) {
            i[t] = function (n, r, u, f) {
                return (
                    i.isFunction(r) && ((f = f || u), (u = r), (r = void 0)),
                    i.ajax(i.extend({ url: n, type: t, dataType: f, data: r, success: u }, i.isPlainObject(n) && n))
                );
            };
        });
        i._evalUrl = function (n) {
            return i.ajax({ url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
        };
        i.fn.extend({
            wrapAll: function (n) {
                var t;
                return i.isFunction(n)
                    ? this.each(function (t) {
                          i(this).wrapAll(n.call(this, t));
                      })
                    : (this[0] &&
                          ((t = i(n, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && t.insertBefore(this[0]),
                          t
                              .map(function () {
                                  for (var n = this; n.firstElementChild; ) n = n.firstElementChild;
                                  return n;
                              })
                              .append(this)),
                      this);
            },
            wrapInner: function (n) {
                return i.isFunction(n)
                    ? this.each(function (t) {
                          i(this).wrapInner(n.call(this, t));
                      })
                    : this.each(function () {
                          var t = i(this),
                              r = t.contents();
                          r.length ? r.wrapAll(n) : t.append(n);
                      });
            },
            wrap: function (n) {
                var t = i.isFunction(n);
                return this.each(function (r) {
                    i(this).wrapAll(t ? n.call(this, r) : n);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        i.nodeName(this, "body") || i(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        });
        i.expr.filters.hidden = function (n) {
            return !i.expr.filters.visible(n);
        };
        i.expr.filters.visible = function (n) {
            return n.offsetWidth > 0 || n.offsetHeight > 0 || n.getClientRects().length > 0;
        };
        var de = /%20/g,
            ge = /\[\]$/,
            of = /\r?\n/g,
            no = /^(?:submit|button|image|reset|file)$/i,
            to = /^(?:input|select|textarea|keygen)/i;
        return (
            (i.param = function (n, t) {
                var r,
                    u = [],
                    f = function (n, t) {
                        t = i.isFunction(t) ? t() : null == t ? "" : t;
                        u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t);
                    };
                if (
                    (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional),
                    i.isArray(n) || (n.jquery && !i.isPlainObject(n)))
                )
                    i.each(n, function () {
                        f(this.name, this.value);
                    });
                else for (r in n) bi(r, n[r], t, f);
                return u.join("&").replace(de, "+");
            }),
            i.fn.extend({
                serialize: function () {
                    return i.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var n = i.prop(this, "elements");
                        return n ? i.makeArray(n) : this;
                    })
                        .filter(function () {
                            var n = this.type;
                            return (
                                this.name &&
                                !i(this).is(":disabled") &&
                                to.test(this.nodeName) &&
                                !no.test(n) &&
                                (this.checked || !yr.test(n))
                            );
                        })
                        .map(function (n, t) {
                            var r = i(this).val();
                            return null == r
                                ? null
                                : i.isArray(r)
                                  ? i.map(r, function (n) {
                                        return { name: t.name, value: n.replace(of, "\r\n") };
                                    })
                                  : { name: t.name, value: r.replace(of, "\r\n") };
                        })
                        .get();
                },
            }),
            (i.ajaxSettings.xhr = function () {
                try {
                    return new n.XMLHttpRequest();
                } catch (t) {}
            }),
            (sf = { 0: 200, 1223: 204 }),
            (ut = i.ajaxSettings.xhr()),
            (f.cors = !!ut && "withCredentials" in ut),
            (f.ajax = ut = !!ut),
            i.ajaxTransport(function (t) {
                var i, r;
                if (f.cors || (ut && !t.crossDomain))
                    return {
                        send: function (u, f) {
                            var o,
                                e = t.xhr();
                            if ((e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                                for (o in t.xhrFields) e[o] = t.xhrFields[o];
                            t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                            t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                            for (o in u) e.setRequestHeader(o, u[o]);
                            i = function (n) {
                                return function () {
                                    i &&
                                        ((i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null),
                                        "abort" === n
                                            ? e.abort()
                                            : "error" === n
                                              ? "number" != typeof e.status
                                                  ? f(0, "error")
                                                  : f(e.status, e.statusText)
                                              : f(
                                                    sf[e.status] || e.status,
                                                    e.statusText,
                                                    "text" !== (e.responseType || "text") ||
                                                        "string" != typeof e.responseText
                                                        ? { binary: e.response }
                                                        : { text: e.responseText },
                                                    e.getAllResponseHeaders()
                                                ));
                                };
                            };
                            e.onload = i();
                            r = e.onerror = i("error");
                            void 0 !== e.onabort
                                ? (e.onabort = r)
                                : (e.onreadystatechange = function () {
                                      4 === e.readyState &&
                                          n.setTimeout(function () {
                                              i && r();
                                          });
                                  });
                            i = i("abort");
                            try {
                                e.send((t.hasContent && t.data) || null);
                            } catch (s) {
                                if (i) throw s;
                            }
                        },
                        abort: function () {
                            i && i();
                        },
                    };
            }),
            i.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (n) {
                        return i.globalEval(n), n;
                    },
                },
            }),
            i.ajaxPrefilter("script", function (n) {
                void 0 === n.cache && (n.cache = !1);
                n.crossDomain && (n.type = "GET");
            }),
            i.ajaxTransport("script", function (n) {
                if (n.crossDomain) {
                    var r, t;
                    return {
                        send: function (f, e) {
                            r = i("<script>")
                                .prop({ charset: n.scriptCharset, src: n.url })
                                .on(
                                    "load error",
                                    (t = function (n) {
                                        r.remove();
                                        t = null;
                                        n && e("error" === n.type ? 404 : 200, n.type);
                                    })
                                );
                            u.head.appendChild(r[0]);
                        },
                        abort: function () {
                            t && t();
                        },
                    };
                }
            }),
            (ki = []),
            (ni = /(=)\?(?=&|$)|\?\?/),
            i.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var n = ki.pop() || i.expando + "_" + ai++;
                    return (this[n] = !0), n;
                },
            }),
            i.ajaxPrefilter("json jsonp", function (t, r, u) {
                var f,
                    e,
                    o,
                    s =
                        t.jsonp !== !1 &&
                        (ni.test(t.url)
                            ? "url"
                            : "string" == typeof t.data &&
                              0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                              ni.test(t.data) &&
                              "data");
                if (s || "jsonp" === t.dataTypes[0])
                    return (
                        (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                        s
                            ? (t[s] = t[s].replace(ni, "$1" + f))
                            : t.jsonp !== !1 && (t.url += (vi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
                        (t.converters["script json"] = function () {
                            return o || i.error(f + " was not called"), o[0];
                        }),
                        (t.dataTypes[0] = "json"),
                        (e = n[f]),
                        (n[f] = function () {
                            o = arguments;
                        }),
                        u.always(function () {
                            void 0 === e ? i(n).removeProp(f) : (n[f] = e);
                            t[f] && ((t.jsonpCallback = r.jsonpCallback), ki.push(f));
                            o && i.isFunction(e) && e(o[0]);
                            o = e = void 0;
                        }),
                        "script"
                    );
            }),
            (i.parseHTML = function (n, t, r) {
                if (!n || "string" != typeof n) return null;
                "boolean" == typeof t && ((r = t), (t = !1));
                t = t || u;
                var f = rr.exec(n),
                    e = !r && [];
                return f
                    ? [t.createElement(f[1])]
                    : ((f = kr([n], t, e)), e && e.length && i(e).remove(), i.merge([], f.childNodes));
            }),
            (di = i.fn.load),
            (i.fn.load = function (n, t, r) {
                if ("string" != typeof n && di) return di.apply(this, arguments);
                var u,
                    o,
                    s,
                    f = this,
                    e = n.indexOf(" ");
                return (
                    e > -1 && ((u = i.trim(n.slice(e))), (n = n.slice(0, e))),
                    i.isFunction(t) ? ((r = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                    f.length > 0 &&
                        i
                            .ajax({ url: n, type: o || "GET", dataType: "html", data: t })
                            .done(function (n) {
                                s = arguments;
                                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n);
                            })
                            .always(
                                r &&
                                    function (n, t) {
                                        f.each(function () {
                                            r.apply(this, s || [n.responseText, t, n]);
                                        });
                                    }
                            ),
                    this
                );
            }),
            i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
                i.fn[t] = function (n) {
                    return this.on(t, n);
                };
            }),
            (i.expr.filters.animated = function (n) {
                return i.grep(i.timers, function (t) {
                    return n === t.elem;
                }).length;
            }),
            (i.offset = {
                setOffset: function (n, t, r) {
                    var e,
                        o,
                        s,
                        h,
                        u,
                        c,
                        v,
                        l = i.css(n, "position"),
                        a = i(n),
                        f = {};
                    "static" === l && (n.style.position = "relative");
                    u = a.offset();
                    s = i.css(n, "top");
                    c = i.css(n, "left");
                    v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
                    v
                        ? ((e = a.position()), (h = e.top), (o = e.left))
                        : ((h = parseFloat(s) || 0), (o = parseFloat(c) || 0));
                    i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
                    null != t.top && (f.top = t.top - u.top + h);
                    null != t.left && (f.left = t.left - u.left + o);
                    "using" in t ? t.using.call(n, f) : a.css(f);
                },
            }),
            i.fn.extend({
                offset: function (n) {
                    if (arguments.length)
                        return void 0 === n
                            ? this
                            : this.each(function (t) {
                                  i.offset.setOffset(this, n, t);
                              });
                    var t,
                        f,
                        r = this[0],
                        u = { top: 0, left: 0 },
                        e = r && r.ownerDocument;
                    if (e)
                        return (
                            (t = e.documentElement),
                            i.contains(t, r)
                                ? ((u = r.getBoundingClientRect()),
                                  (f = hf(e)),
                                  {
                                      top: u.top + f.pageYOffset - t.clientTop,
                                      left: u.left + f.pageXOffset - t.clientLeft,
                                  })
                                : u
                        );
                },
                position: function () {
                    if (this[0]) {
                        var n,
                            r,
                            u = this[0],
                            t = { top: 0, left: 0 };
                        return (
                            "fixed" === i.css(u, "position")
                                ? (r = u.getBoundingClientRect())
                                : ((n = this.offsetParent()),
                                  (r = this.offset()),
                                  i.nodeName(n[0], "html") || (t = n.offset()),
                                  (t.top += i.css(n[0], "borderTopWidth", !0)),
                                  (t.left += i.css(n[0], "borderLeftWidth", !0))),
                            {
                                top: r.top - t.top - i.css(u, "marginTop", !0),
                                left: r.left - t.left - i.css(u, "marginLeft", !0),
                            }
                        );
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var n = this.offsetParent; n && "static" === i.css(n, "position"); ) n = n.offsetParent;
                        return n || ht;
                    });
                },
            }),
            i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (n, t) {
                var r = "pageYOffset" === t;
                i.fn[n] = function (i) {
                    return a(
                        this,
                        function (n, i, u) {
                            var f = hf(n);
                            return void 0 === u
                                ? f
                                    ? f[t]
                                    : n[i]
                                : void (f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : (n[i] = u));
                        },
                        n,
                        i,
                        arguments.length
                    );
                };
            }),
            i.each(["top", "left"], function (n, t) {
                i.cssHooks[t] = ci(f.pixelPosition, function (n, r) {
                    if (r) return (r = tt(n, t)), si.test(r) ? i(n).position()[t] + "px" : r;
                });
            }),
            i.each({ Height: "height", Width: "width" }, function (n, t) {
                i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function (r, u) {
                    i.fn[u] = function (u, f) {
                        var e = arguments.length && (r || "boolean" != typeof u),
                            o = r || (u === !0 || f === !0 ? "margin" : "border");
                        return a(
                            this,
                            function (t, r, u) {
                                var f;
                                return i.isWindow(t)
                                    ? t.document.documentElement["client" + n]
                                    : 9 === t.nodeType
                                      ? ((f = t.documentElement),
                                        Math.max(
                                            t.body["scroll" + n],
                                            f["scroll" + n],
                                            t.body["offset" + n],
                                            f["offset" + n],
                                            f["client" + n]
                                        ))
                                      : void 0 === u
                                        ? i.css(t, r, o)
                                        : i.style(t, r, u, o);
                            },
                            t,
                            e ? u : void 0,
                            e,
                            null
                        );
                    };
                });
            }),
            i.fn.extend({
                bind: function (n, t, i) {
                    return this.on(n, null, t, i);
                },
                unbind: function (n, t) {
                    return this.off(n, null, t);
                },
                delegate: function (n, t, i, r) {
                    return this.on(t, n, i, r);
                },
                undelegate: function (n, t, i) {
                    return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i);
                },
                size: function () {
                    return this.length;
                },
            }),
            (i.fn.andSelf = i.fn.addBack),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return i;
                }),
            (cf = n.jQuery),
            (lf = n.$),
            (i.noConflict = function (t) {
                return n.$ === i && (n.$ = lf), t && n.jQuery === i && (n.jQuery = cf), i;
            }),
            t || (n.jQuery = n.$ = i),
            i
        );
    }),
    !(function (n) {
        "function" == typeof define && define.amd
            ? define(["jquery"], n)
            : "object" == typeof module && module.exports
              ? (module.exports = n(require("jquery")))
              : n(jQuery);
    })(function (n) {
        n.extend(n.fn, {
            validate: function (t) {
                if (!this.length)
                    return void (
                        t &&
                        t.debug &&
                        window.console &&
                        console.warn("Nothing selected, can't validate, returning nothing.")
                    );
                var i = n.data(this[0], "validator");
                return i
                    ? i
                    : (this.attr("novalidate", "novalidate"),
                      (i = new n.validator(t, this[0])),
                      n.data(this[0], "validator", i),
                      i.settings.onsubmit &&
                          (this.on("click.validate", ":submit", function (t) {
                              i.settings.submitHandler && (i.submitButton = t.target);
                              n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                              void 0 !== n(this).attr("formnovalidate") && (i.cancelSubmit = !0);
                          }),
                          this.on("submit.validate", function (t) {
                              function r() {
                                  var u, r;
                                  return (
                                      !i.settings.submitHandler ||
                                      (i.submitButton &&
                                          (u = n("<input type='hidden'/>")
                                              .attr("name", i.submitButton.name)
                                              .val(n(i.submitButton).val())
                                              .appendTo(i.currentForm)),
                                      (r = i.settings.submitHandler.call(i, i.currentForm, t)),
                                      i.submitButton && u.remove(),
                                      void 0 !== r && r)
                                  );
                              }
                              return (
                                  i.settings.debug && t.preventDefault(),
                                  i.cancelSubmit
                                      ? ((i.cancelSubmit = !1), r())
                                      : i.form()
                                        ? i.pendingRequest
                                            ? ((i.formSubmitted = !0), !1)
                                            : r()
                                        : (i.focusInvalid(), !1)
                              );
                          })),
                      i);
            },
            valid: function () {
                var t, i, r;
                return (
                    n(this[0]).is("form")
                        ? (t = this.validate().form())
                        : ((r = []),
                          (t = !0),
                          (i = n(this[0].form).validate()),
                          this.each(function () {
                              t = i.element(this) && t;
                              t || (r = r.concat(i.errorList));
                          }),
                          (i.errorList = r)),
                    t
                );
            },
            rules: function (t, i) {
                var e,
                    s,
                    f,
                    u,
                    o,
                    h,
                    r = this[0];
                if (null != r && null != r.form) {
                    if (t)
                        switch (
                            ((e = n.data(r.form, "validator").settings),
                            (s = e.rules),
                            (f = n.validator.staticRules(r)),
                            t)
                        ) {
                            case "add":
                                n.extend(f, n.validator.normalizeRule(i));
                                delete f.messages;
                                s[r.name] = f;
                                i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                                break;
                            case "remove":
                                return i
                                    ? ((h = {}),
                                      n.each(i.split(/\s/), function (t, i) {
                                          h[i] = f[i];
                                          delete f[i];
                                          "required" === i && n(r).removeAttr("aria-required");
                                      }),
                                      h)
                                    : (delete s[r.name], f);
                        }
                    return (
                        (u = n.validator.normalizeRules(
                            n.extend(
                                {},
                                n.validator.classRules(r),
                                n.validator.attributeRules(r),
                                n.validator.dataRules(r),
                                n.validator.staticRules(r)
                            ),
                            r
                        )),
                        u.required &&
                            ((o = u.required),
                            delete u.required,
                            (u = n.extend({ required: o }, u)),
                            n(r).attr("aria-required", "true")),
                        u.remote && ((o = u.remote), delete u.remote, (u = n.extend(u, { remote: o }))),
                        u
                    );
                }
            },
        });
        n.extend(n.expr.pseudos || n.expr[":"], {
            blank: function (t) {
                return !n.trim("" + n(t).val());
            },
            filled: function (t) {
                var i = n(t).val();
                return null !== i && !!n.trim("" + i);
            },
            unchecked: function (t) {
                return !n(t).prop("checked");
            },
        });
        n.validator = function (t, i) {
            this.settings = n.extend(!0, {}, n.validator.defaults, t);
            this.currentForm = i;
            this.init();
        };
        n.validator.format = function (t, i) {
            return 1 === arguments.length
                ? function () {
                      var i = n.makeArray(arguments);
                      return i.unshift(t), n.validator.format.apply(this, i);
                  }
                : void 0 === i
                  ? t
                  : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)),
                    i.constructor !== Array && (i = [i]),
                    n.each(i, function (n, i) {
                        t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function () {
                            return i;
                        });
                    }),
                    t);
        };
        n.extend(n.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: n([]),
                errorLabelContainer: n([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (n) {
                    this.lastActive = n;
                    this.settings.focusCleanup &&
                        (this.settings.unhighlight &&
                            this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass),
                        this.hideThese(this.errorsFor(n)));
                },
                onfocusout: function (n) {
                    !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n);
                },
                onkeyup: function (t, i) {
                    (9 === i.which && "" === this.elementValue(t)) ||
                        n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) !== -1 ||
                        ((t.name in this.submitted || t.name in this.invalid) && this.element(t));
                },
                onclick: function (n) {
                    n.name in this.submitted
                        ? this.element(n)
                        : n.parentNode.name in this.submitted && this.element(n.parentNode);
                },
                highlight: function (t, i, r) {
                    "radio" === t.type
                        ? this.findByName(t.name).addClass(i).removeClass(r)
                        : n(t).addClass(i).removeClass(r);
                },
                unhighlight: function (t, i, r) {
                    "radio" === t.type
                        ? this.findByName(t.name).removeClass(i).addClass(r)
                        : n(t).removeClass(i).addClass(r);
                },
            },
            setDefaults: function (t) {
                n.extend(n.validator.defaults, t);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: n.validator.format("Please enter no more than {0} characters."),
                minlength: n.validator.format("Please enter at least {0} characters."),
                rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
                range: n.validator.format("Please enter a value between {0} and {1}."),
                max: n.validator.format("Please enter a value less than or equal to {0}."),
                min: n.validator.format("Please enter a value greater than or equal to {0}."),
                step: n.validator.format("Please enter a multiple of {0}."),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function i(t) {
                        !this.form && this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0]);
                        var r = n.data(this.form, "validator"),
                            u = "on" + t.type.replace(/^validate/, ""),
                            i = r.settings;
                        i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t);
                    }
                    this.labelContainer = n(this.settings.errorLabelContainer);
                    this.errorContext = (this.labelContainer.length && this.labelContainer) || n(this.currentForm);
                    this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                    this.submitted = {};
                    this.valueCache = {};
                    this.pendingRequest = 0;
                    this.pending = {};
                    this.invalid = {};
                    this.reset();
                    var t,
                        r = (this.groups = {});
                    n.each(this.settings.groups, function (t, i) {
                        "string" == typeof i && (i = i.split(/\s/));
                        n.each(i, function (n, i) {
                            r[i] = t;
                        });
                    });
                    t = this.settings.rules;
                    n.each(t, function (i, r) {
                        t[i] = n.validator.normalizeRule(r);
                    });
                    n(this.currentForm)
                        .on(
                            "focusin.validate focusout.validate keyup.validate",
                            ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                            i
                        )
                        .on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                    this.settings.invalidHandler &&
                        n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    n(this.currentForm)
                        .find("[required], [data-rule-required], .required")
                        .attr("aria-required", "true");
                },
                form: function () {
                    return (
                        this.checkForm(),
                        n.extend(this.submitted, this.errorMap),
                        (this.invalid = n.extend({}, this.errorMap)),
                        this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                        this.showErrors(),
                        this.valid()
                    );
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var n = 0, t = (this.currentElements = this.elements()); t[n]; n++) this.check(t[n]);
                    return this.valid();
                },
                element: function (t) {
                    var e,
                        o,
                        i = this.clean(t),
                        r = this.validationTargetFor(i),
                        u = this,
                        f = !0;
                    return (
                        void 0 === r
                            ? delete this.invalid[i.name]
                            : (this.prepareElement(r),
                              (this.currentElements = n(r)),
                              (o = this.groups[r.name]),
                              o &&
                                  n.each(this.groups, function (n, t) {
                                      t === o &&
                                          n !== r.name &&
                                          ((i = u.validationTargetFor(u.clean(u.findByName(n)))),
                                          i &&
                                              i.name in u.invalid &&
                                              (u.currentElements.push(i), (f = u.check(i) && f)));
                                  }),
                              (e = this.check(r) !== !1),
                              (f = f && e),
                              (this.invalid[r.name] = e ? !1 : !0),
                              this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                              this.showErrors(),
                              n(t).attr("aria-invalid", !e)),
                        f
                    );
                },
                showErrors: function (t) {
                    if (t) {
                        var i = this;
                        n.extend(this.errorMap, t);
                        this.errorList = n.map(this.errorMap, function (n, t) {
                            return { message: n, element: i.findByName(t)[0] };
                        });
                        this.successList = n.grep(this.successList, function (n) {
                            return !(n.name in t);
                        });
                    }
                    this.settings.showErrors
                        ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
                        : this.defaultShowErrors();
                },
                resetForm: function () {
                    n.fn.resetForm && n(this.currentForm).resetForm();
                    this.invalid = {};
                    this.submitted = {};
                    this.prepareForm();
                    this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t);
                },
                resetElements: function (n) {
                    var t;
                    if (this.settings.unhighlight)
                        for (t = 0; n[t]; t++)
                            this.settings.unhighlight.call(this, n[t], this.settings.errorClass, ""),
                                this.findByName(n[t].name).removeClass(this.settings.validClass);
                    else n.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (n) {
                    var t,
                        i = 0;
                    for (t in n) n[t] && i++;
                    return i;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (n) {
                    n.not(this.containers).text("");
                    this.addWrapper(n).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            n(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (t) {}
                },
                findLastActive: function () {
                    var t = this.lastActive;
                    return (
                        t &&
                        1 ===
                            n.grep(this.errorList, function (n) {
                                return n.element.name === t.name;
                            }).length &&
                        t
                    );
                },
                elements: function () {
                    var t = this,
                        i = {};
                    return n(this.currentForm)
                        .find("input, select, textarea, [contenteditable]")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                            var r = this.name || n(this).attr("name");
                            return (
                                !r &&
                                    t.settings.debug &&
                                    window.console &&
                                    console.error("%o has no name assigned", this),
                                this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0]),
                                !(r in i || !t.objectLength(n(this).rules())) && ((i[r] = !0), !0)
                            );
                        });
                },
                clean: function (t) {
                    return n(t)[0];
                },
                errors: function () {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return n(this.settings.errorElement + "." + t, this.errorContext);
                },
                resetInternals: function () {
                    this.successList = [];
                    this.errorList = [];
                    this.errorMap = {};
                    this.toShow = n([]);
                    this.toHide = n([]);
                },
                reset: function () {
                    this.resetInternals();
                    this.currentElements = n([]);
                },
                prepareForm: function () {
                    this.reset();
                    this.toHide = this.errors().add(this.containers);
                },
                prepareElement: function (n) {
                    this.reset();
                    this.toHide = this.errorsFor(n);
                },
                elementValue: function (t) {
                    var i,
                        r,
                        f = n(t),
                        u = t.type;
                    return "radio" === u || "checkbox" === u
                        ? this.findByName(t.name).filter(":checked").val()
                        : "number" === u && "undefined" != typeof t.validity
                          ? t.validity.badInput
                              ? "NaN"
                              : f.val()
                          : ((i = t.hasAttribute("contenteditable") ? f.text() : f.val()),
                            "file" === u
                                ? "C:\\fakepath\\" === i.substr(0, 12)
                                    ? i.substr(12)
                                    : ((r = i.lastIndexOf("/")),
                                      r >= 0
                                          ? i.substr(r + 1)
                                          : ((r = i.lastIndexOf("\\")), r >= 0 ? i.substr(r + 1) : i))
                                : "string" == typeof i
                                  ? i.replace(/\r/g, "")
                                  : i);
                },
                check: function (t) {
                    t = this.validationTargetFor(this.clean(t));
                    var u,
                        f,
                        r,
                        i = n(t).rules(),
                        h = n.map(i, function (n, t) {
                            return t;
                        }).length,
                        s = !1,
                        e = this.elementValue(t);
                    if ("function" == typeof i.normalizer) {
                        if (((e = i.normalizer.call(t, e)), "string" != typeof e))
                            throw new TypeError("The normalizer should return a string value.");
                        delete i.normalizer;
                    }
                    for (f in i) {
                        r = { method: f, parameters: i[f] };
                        try {
                            if (
                                ((u = n.validator.methods[f].call(this, e, t, r.parameters)),
                                "dependency-mismatch" === u && 1 === h)
                            ) {
                                s = !0;
                                continue;
                            }
                            if (((s = !1), "pending" === u))
                                return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!u) return this.formatAndAdd(t, r), !1;
                        } catch (o) {
                            throw (
                                (this.settings.debug &&
                                    window.console &&
                                    console.log(
                                        "Exception occurred when checking element " +
                                            t.id +
                                            ", check the '" +
                                            r.method +
                                            "' method.",
                                        o
                                    ),
                                o instanceof TypeError &&
                                    (o.message +=
                                        ".  Exception occurred when checking element " +
                                        t.id +
                                        ", check the '" +
                                        r.method +
                                        "' method."),
                                o)
                            );
                        }
                    }
                    if (!s) return this.objectLength(i) && this.successList.push(t), !0;
                },
                customDataMessage: function (t, i) {
                    return (
                        n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
                    );
                },
                customMessage: function (n, t) {
                    var i = this.settings.messages[n];
                    return i && (i.constructor === String ? i : i[t]);
                },
                findDefined: function () {
                    for (var n = 0; n < arguments.length; n++) if (void 0 !== arguments[n]) return arguments[n];
                },
                defaultMessage: function (t, i) {
                    "string" == typeof i && (i = { method: i });
                    var r = this.findDefined(
                            this.customMessage(t.name, i.method),
                            this.customDataMessage(t, i.method),
                            (!this.settings.ignoreTitle && t.title) || void 0,
                            n.validator.messages[i.method],
                            "<strong>Warning: No message defined for " + t.name + "</strong>"
                        ),
                        u = /\$?\{(\d+)\}/g;
                    return (
                        "function" == typeof r
                            ? (r = r.call(this, i.parameters, t))
                            : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)),
                        r
                    );
                },
                formatAndAdd: function (n, t) {
                    var i = this.defaultMessage(n, t);
                    this.errorList.push({ message: i, element: n, method: t.method });
                    this.errorMap[n.name] = i;
                    this.submitted[n.name] = i;
                },
                addWrapper: function (n) {
                    return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n;
                },
                defaultShowErrors: function () {
                    for (var i, t, n = 0; this.errorList[n]; n++)
                        (t = this.errorList[n]),
                            this.settings.highlight &&
                                this.settings.highlight.call(
                                    this,
                                    t.element,
                                    this.settings.errorClass,
                                    this.settings.validClass
                                ),
                            this.showLabel(t.element, t.message);
                    if (
                        (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                    )
                        for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                    if (this.settings.unhighlight)
                        for (n = 0, i = this.validElements(); i[n]; n++)
                            this.settings.unhighlight.call(
                                this,
                                i[n],
                                this.settings.errorClass,
                                this.settings.validClass
                            );
                    this.toHide = this.toHide.not(this.toShow);
                    this.hideErrors();
                    this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return n(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (t, i) {
                    var u,
                        s,
                        e,
                        o,
                        r = this.errorsFor(t),
                        h = this.idOrName(t),
                        f = n(t).attr("aria-describedby");
                    r.length
                        ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i))
                        : ((r = n("<" + this.settings.errorElement + ">")
                              .attr("id", h + "-error")
                              .addClass(this.settings.errorClass)
                              .html(i || "")),
                          (u = r),
                          this.settings.wrapper &&
                              (u = r
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.length
                              ? this.labelContainer.append(u)
                              : this.settings.errorPlacement
                                ? this.settings.errorPlacement.call(this, u, n(t))
                                : u.insertAfter(t),
                          r.is("label")
                              ? r.attr("for", h)
                              : 0 === r.parents("label[for='" + this.escapeCssMeta(h) + "']").length &&
                                ((e = r.attr("id")),
                                f
                                    ? f.match(new RegExp("\\b" + this.escapeCssMeta(e) + "\\b")) || (f += " " + e)
                                    : (f = e),
                                n(t).attr("aria-describedby", f),
                                (s = this.groups[t.name]),
                                s &&
                                    ((o = this),
                                    n.each(o.groups, function (t, i) {
                                        i === s &&
                                            n("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr(
                                                "aria-describedby",
                                                r.attr("id")
                                            );
                                    }))));
                    !i &&
                        this.settings.success &&
                        (r.text(""),
                        "string" == typeof this.settings.success
                            ? r.addClass(this.settings.success)
                            : this.settings.success(r, t));
                    this.toShow = this.toShow.add(r);
                },
                errorsFor: function (t) {
                    var r = this.escapeCssMeta(this.idOrName(t)),
                        u = n(t).attr("aria-describedby"),
                        i = "label[for='" + r + "'], label[for='" + r + "'] *";
                    return u && (i = i + ", #" + this.escapeCssMeta(u).replace(/\s+/g, ", #")), this.errors().filter(i);
                },
                escapeCssMeta: function (n) {
                    return n.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
                },
                idOrName: function (n) {
                    return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name);
                },
                validationTargetFor: function (t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), n(t).not(this.settings.ignore)[0];
                },
                checkable: function (n) {
                    return /radio|checkbox/i.test(n.type);
                },
                findByName: function (t) {
                    return n(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
                },
                getLength: function (t, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return n("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
                    }
                    return t.length;
                },
                depend: function (n, t) {
                    return !this.dependTypes[typeof n] || this.dependTypes[typeof n](n, t);
                },
                dependTypes: {
                    boolean: function (n) {
                        return n;
                    },
                    string: function (t, i) {
                        return !!n(t, i.form).length;
                    },
                    function: function (n, t) {
                        return n(t);
                    },
                },
                optional: function (t) {
                    var i = this.elementValue(t);
                    return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch";
                },
                startRequest: function (t) {
                    this.pending[t.name] ||
                        (this.pendingRequest++, n(t).addClass(this.settings.pendingClass), (this.pending[t.name] = !0));
                },
                stopRequest: function (t, i) {
                    this.pendingRequest--;
                    this.pendingRequest < 0 && (this.pendingRequest = 0);
                    delete this.pending[t.name];
                    n(t).removeClass(this.settings.pendingClass);
                    i && 0 === this.pendingRequest && this.formSubmitted && this.form()
                        ? (n(this.currentForm).submit(), (this.formSubmitted = !1))
                        : !i &&
                          0 === this.pendingRequest &&
                          this.formSubmitted &&
                          (n(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                },
                previousValue: function (t, i) {
                    return (
                        (i = ("string" == typeof i && i) || "remote"),
                        n.data(t, "previousValue") ||
                            n.data(t, "previousValue", {
                                old: null,
                                valid: !0,
                                message: this.defaultMessage(t, { method: i }),
                            })
                    );
                },
                destroy: function () {
                    this.resetForm();
                    n(this.currentForm)
                        .off(".validate")
                        .removeData("validator")
                        .find(".validate-equalTo-blur")
                        .off(".validate-equalTo")
                        .removeClass("validate-equalTo-blur");
                },
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
            },
            addClassRules: function (t, i) {
                t.constructor === String ? (this.classRuleSettings[t] = i) : n.extend(this.classRuleSettings, t);
            },
            classRules: function (t) {
                var i = {},
                    r = n(t).attr("class");
                return (
                    r &&
                        n.each(r.split(" "), function () {
                            this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this]);
                        }),
                    i
                );
            },
            normalizeAttributeRule: function (n, t, i, r) {
                /min|max|step/.test(i) &&
                    (null === t || /number|range|text/.test(t)) &&
                    ((r = Number(r)), isNaN(r) && (r = void 0));
                r || 0 === r ? (n[i] = r) : t === i && "range" !== t && (n[i] = !0);
            },
            attributeRules: function (t) {
                var r,
                    i,
                    u = {},
                    f = n(t),
                    e = t.getAttribute("type");
                for (r in n.validator.methods)
                    "required" === r ? ((i = t.getAttribute(r)), "" === i && (i = !0), (i = !!i)) : (i = f.attr(r)),
                        this.normalizeAttributeRule(u, e, r, i);
                return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u;
            },
            dataRules: function (t) {
                var i,
                    r,
                    u = {},
                    f = n(t),
                    e = t.getAttribute("type");
                for (i in n.validator.methods)
                    (r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())),
                        this.normalizeAttributeRule(u, e, i, r);
                return u;
            },
            staticRules: function (t) {
                var i = {},
                    r = n.data(t.form, "validator");
                return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i;
            },
            normalizeRules: function (t, i) {
                return (
                    n.each(t, function (r, u) {
                        if (u === !1) return void delete t[r];
                        if (u.param || u.depends) {
                            var f = !0;
                            switch (typeof u.depends) {
                                case "string":
                                    f = !!n(u.depends, i.form).length;
                                    break;
                                case "function":
                                    f = u.depends.call(i, i);
                            }
                            f
                                ? (t[r] = void 0 === u.param || u.param)
                                : (n.data(i.form, "validator").resetElements(n(i)), delete t[r]);
                        }
                    }),
                    n.each(t, function (r, u) {
                        t[r] = n.isFunction(u) && "normalizer" !== r ? u(i) : u;
                    }),
                    n.each(["minlength", "maxlength"], function () {
                        t[this] && (t[this] = Number(t[this]));
                    }),
                    n.each(["rangelength", "range"], function () {
                        var i;
                        t[this] &&
                            (n.isArray(t[this])
                                ? (t[this] = [Number(t[this][0]), Number(t[this][1])])
                                : "string" == typeof t[this] &&
                                  ((i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                                  (t[this] = [Number(i[0]), Number(i[1])])));
                    }),
                    n.validator.autoCreateRanges &&
                        (null != t.min && null != t.max && ((t.range = [t.min, t.max]), delete t.min, delete t.max),
                        null != t.minlength &&
                            null != t.maxlength &&
                            ((t.rangelength = [t.minlength, t.maxlength]), delete t.minlength, delete t.maxlength)),
                    t
                );
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var i = {};
                    n.each(t.split(/\s/), function () {
                        i[this] = !0;
                    });
                    t = i;
                }
                return t;
            },
            addMethod: function (t, i, r) {
                n.validator.methods[t] = i;
                n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
                i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t));
            },
            methods: {
                required: function (t, i, r) {
                    if (!this.depend(r, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var u = n(i).val();
                        return u && u.length > 0;
                    }
                    return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0;
                },
                email: function (n, t) {
                    return (
                        this.optional(t) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                            n
                        )
                    );
                },
                url: function (n, t) {
                    return (
                        this.optional(t) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                            n
                        )
                    );
                },
                date: function (n, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString());
                },
                dateISO: function (n, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n);
                },
                number: function (n, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n);
                },
                digits: function (n, t) {
                    return this.optional(t) || /^\d+$/.test(n);
                },
                minlength: function (t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || u >= r;
                },
                maxlength: function (t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || u <= r;
                },
                rangelength: function (t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || (u >= r[0] && u <= r[1]);
                },
                min: function (n, t, i) {
                    return this.optional(t) || n >= i;
                },
                max: function (n, t, i) {
                    return this.optional(t) || n <= i;
                },
                range: function (n, t, i) {
                    return this.optional(t) || (n >= i[0] && n <= i[1]);
                },
                step: function (t, i, r) {
                    var u,
                        f = n(i).attr("type"),
                        h = "Step attribute on input type " + f + " is not supported.",
                        c = new RegExp("\\b" + f + "\\b"),
                        l = f && !c.test("text,number,range"),
                        e = function (n) {
                            var t = ("" + n).match(/(?:\.(\d+))?$/);
                            return t && t[1] ? t[1].length : 0;
                        },
                        o = function (n) {
                            return Math.round(n * Math.pow(10, u));
                        },
                        s = !0;
                    if (l) throw new Error(h);
                    return (u = e(r)), (e(t) > u || o(t) % o(r) != 0) && (s = !1), this.optional(i) || s;
                },
                equalTo: function (t, i, r) {
                    var u = n(r);
                    return (
                        this.settings.onfocusout &&
                            u.not(".validate-equalTo-blur").length &&
                            u.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                                n(i).valid();
                            }),
                        t === u.val()
                    );
                },
                remote: function (t, i, r, u) {
                    if (this.optional(i)) return "dependency-mismatch";
                    u = ("string" == typeof u && u) || "remote";
                    var f,
                        o,
                        s,
                        e = this.previousValue(i, u);
                    return (
                        this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                        (e.originalMessage = e.originalMessage || this.settings.messages[i.name][u]),
                        (this.settings.messages[i.name][u] = e.message),
                        (r = ("string" == typeof r && { url: r }) || r),
                        (s = n.param(n.extend({ data: t }, r.data))),
                        e.old === s
                            ? e.valid
                            : ((e.old = s),
                              (f = this),
                              this.startRequest(i),
                              (o = {}),
                              (o[i.name] = t),
                              n.ajax(
                                  n.extend(
                                      !0,
                                      {
                                          mode: "abort",
                                          port: "validate" + i.name,
                                          dataType: "json",
                                          data: o,
                                          context: f.currentForm,
                                          success: function (n) {
                                              var r,
                                                  s,
                                                  h,
                                                  o = n === !0 || "true" === n;
                                              f.settings.messages[i.name][u] = e.originalMessage;
                                              o
                                                  ? ((h = f.formSubmitted),
                                                    f.resetInternals(),
                                                    (f.toHide = f.errorsFor(i)),
                                                    (f.formSubmitted = h),
                                                    f.successList.push(i),
                                                    (f.invalid[i.name] = !1),
                                                    f.showErrors())
                                                  : ((r = {}),
                                                    (s = n || f.defaultMessage(i, { method: u, parameters: t })),
                                                    (r[i.name] = e.message = s),
                                                    (f.invalid[i.name] = !0),
                                                    f.showErrors(r));
                                              e.valid = o;
                                              f.stopRequest(i, o);
                                          },
                                      },
                                      r
                                  )
                              ),
                              "pending")
                    );
                },
            },
        });
        var i,
            t = {};
        return (
            n.ajaxPrefilter
                ? n.ajaxPrefilter(function (n, i, r) {
                      var u = n.port;
                      "abort" === n.mode && (t[u] && t[u].abort(), (t[u] = r));
                  })
                : ((i = n.ajax),
                  (n.ajax = function (r) {
                      var f = ("mode" in r ? r : n.ajaxSettings).mode,
                          u = ("port" in r ? r : n.ajaxSettings).port;
                      return "abort" === f
                          ? (t[u] && t[u].abort(), (t[u] = i.apply(this, arguments)), t[u])
                          : i.apply(this, arguments);
                  })),
            n
        );
    }),
    (function (n) {
        function i(n, t, i) {
            n.rules[t] = i;
            n.message && (n.messages[t] = n.message);
        }
        function h(n) {
            return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
        }
        function f(n) {
            return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
        }
        function e(n) {
            return n.substr(0, n.lastIndexOf(".") + 1);
        }
        function o(n, t) {
            return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n;
        }
        function c(t, i) {
            var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
                u = r.attr("data-valmsg-replace"),
                e = u ? n.parseJSON(u) !== !1 : null;
            r.removeClass("field-validation-valid").addClass("field-validation-error");
            t.data("unobtrusiveContainer", r);
            e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide();
        }
        function l(t, i) {
            var u = n(this).find("[data-valmsg-summary=true]"),
                r = u.find("ul");
            r &&
                r.length &&
                i.errorList.length &&
                (r.empty(),
                u.addClass("validation-summary-errors").removeClass("validation-summary-valid"),
                n.each(i.errorList, function () {
                    n("<li />").html(this.message).appendTo(r);
                }));
        }
        function a(t) {
            var i = t.data("unobtrusiveContainer"),
                r = i.attr("data-valmsg-replace"),
                u = r ? n.parseJSON(r) : null;
            i &&
                (i.addClass("field-validation-valid").removeClass("field-validation-error"),
                t.removeData("unobtrusiveContainer"),
                u && i.empty());
        }
        function v() {
            var t = n(this),
                i = "__jquery_unobtrusive_validation_form_reset";
            if (!t.data(i)) {
                t.data(i, !0);
                try {
                    t.data("validator").resetForm();
                } finally {
                    t.removeData(i);
                }
                t.find(".validation-summary-errors")
                    .addClass("validation-summary-valid")
                    .removeClass("validation-summary-errors");
                t.find(".field-validation-error")
                    .addClass("field-validation-valid")
                    .removeClass("field-validation-error")
                    .removeData("unobtrusiveContainer")
                    .find(">*")
                    .removeData("unobtrusiveContainer");
            }
        }
        function s(t) {
            var i = n(t),
                f = i.data(u),
                s = n.proxy(v, t),
                e = r.unobtrusive.options || {},
                o = function (i, r) {
                    var u = e[i];
                    u && n.isFunction(u) && u.apply(t, r);
                };
            return (
                f ||
                    ((f = {
                        options: {
                            errorClass: e.errorClass || "input-validation-error",
                            errorElement: e.errorElement || "span",
                            errorPlacement: function () {
                                c.apply(t, arguments);
                                o("errorPlacement", arguments);
                            },
                            invalidHandler: function () {
                                l.apply(t, arguments);
                                o("invalidHandler", arguments);
                            },
                            messages: {},
                            rules: {},
                            success: function () {
                                a.apply(t, arguments);
                                o("success", arguments);
                            },
                        },
                        attachValidation: function () {
                            i.off("reset." + u, s)
                                .on("reset." + u, s)
                                .validate(this.options);
                        },
                        validate: function () {
                            return i.validate(), i.valid();
                        },
                    }),
                    i.data(u, f)),
                f
            );
        }
        var r = n.validator,
            t,
            u = "unobtrusiveValidation";
        r.unobtrusive = {
            adapters: [],
            parseElement: function (t, i) {
                var u = n(t),
                    f = u.parents("form")[0],
                    r,
                    e,
                    o;
                f &&
                    ((r = s(f)),
                    (r.options.rules[t.name] = e = {}),
                    (r.options.messages[t.name] = o = {}),
                    n.each(this.adapters, function () {
                        var i = "data-val-" + this.name,
                            r = u.attr(i),
                            s = {};
                        r !== undefined &&
                            ((i += "-"),
                            n.each(this.params, function () {
                                s[this] = u.attr(i + this);
                            }),
                            this.adapt({ element: t, form: f, message: r, params: s, rules: e, messages: o }));
                    }),
                    n.extend(e, { __dummy__: !0 }),
                    i || r.attachValidation());
            },
            parse: function (t) {
                var i = n(t),
                    u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
                i.find("[data-val=true]").each(function () {
                    r.unobtrusive.parseElement(this, !0);
                });
                u.each(function () {
                    var n = s(this);
                    n && n.attachValidation();
                });
            },
        };
        t = r.unobtrusive.adapters;
        t.add = function (n, t, i) {
            return i || ((i = t), (t = [])), this.push({ name: n, params: t, adapt: i }), this;
        };
        t.addBool = function (n, t) {
            return this.add(n, function (r) {
                i(r, t || n, !0);
            });
        };
        t.addMinMax = function (n, t, r, u, f, e) {
            return this.add(n, [f || "min", e || "max"], function (n) {
                var f = n.params.min,
                    e = n.params.max;
                f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e);
            });
        };
        t.addSingleVal = function (n, t, r) {
            return this.add(n, [t || "val"], function (u) {
                i(u, r || n, u.params[t]);
            });
        };
        r.addMethod("__dummy__", function () {
            return !0;
        });
        r.addMethod("regex", function (n, t, i) {
            var r;
            return this.optional(t)
                ? !0
                : ((r = new RegExp(i).exec(n)), r && r.index === 0 && r[0].length === n.length);
        });
        r.addMethod("nonalphamin", function (n, t, i) {
            var r;
            return i && ((r = n.match(/\W/g)), (r = r && r.length >= i)), r;
        });
        r.methods.extension
            ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension"))
            : t.addSingleVal("extension", "extension", "accept");
        t.addSingleVal("regex", "pattern");
        t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
        t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
        t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
        t.add("equalto", ["other"], function (t) {
            var r = e(t.element.name),
                u = t.params.other,
                s = o(u, r),
                h = n(t.form)
                    .find(":input")
                    .filter("[name='" + f(s) + "']")[0];
            i(t, "equalTo", h);
        });
        t.add("required", function (n) {
            (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") &&
                i(n, "required", !0);
        });
        t.add("remote", ["url", "type", "additionalfields"], function (t) {
            var r = { url: t.params.url, type: t.params.type || "GET", data: {} },
                u = e(t.element.name);
            n.each(h(t.params.additionalfields || t.element.name), function (i, e) {
                var s = o(e, u);
                r.data[s] = function () {
                    var i = n(t.form)
                        .find(":input")
                        .filter("[name='" + f(s) + "']");
                    return i.is(":checkbox")
                        ? i.filter(":checked").val() || i.filter(":hidden").val() || ""
                        : i.is(":radio")
                          ? i.filter(":checked").val() || ""
                          : i.val();
                };
            });
            i(t, "remote", r);
        });
        t.add("password", ["min", "nonalphamin", "regex"], function (n) {
            n.params.min && i(n, "minlength", n.params.min);
            n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
            n.params.regex && i(n, "regex", n.params.regex);
        });
        n(function () {
            r.unobtrusive.parse(document);
        });
    })(jQuery),
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
    }),
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
    }),
    $.validator.unobtrusive.adapters.add("requiredif", ["dependentproperty", "targetvalue"], function (n) {
        n.rules.requiredif = { dependentproperty: n.params.dependentproperty, targetvalue: n.params.targetvalue };
        n.messages.requiredif = n.message;
    }),
    addjQueryValidatorMethod("checkboxrequired", [], function (n, t) {
        return $(t).is(":checked");
    }),
    addjQueryValidatorMethod("filesize", ["maxlengthinbytes"], function (n, t, i) {
        for (var f = parseInt(i.maxlengthinbytes), u, r = 0; r < t.files.length; r++)
            if (((u = t.files[r]), u.size > f)) return !1;
        return !0;
    }),
    addjQueryValidatorMethod("filelistmaxsizeattribute", ["combinedmaxlengthinbytes"], function (n, t, i) {
        for (var e = parseInt(i.combinedmaxlengthinbytes), u = 0, f, r = 0; r < t.files.length; r++)
            (f = t.files[r]), (u = u + f.size);
        return e >= u;
    }),
    addjQueryValidatorMethod("filesoftype", ["validmimetypes"], function (n, t, i) {
        for (var f = i.validmimetypes.split(","), u, r = 0; r < t.files.length; r++)
            if (((u = t.files[r]), f.indexOf(u.type) === -1)) return !1;
        return !0;
    }),
    addjQueryValidatorMethod("listlength", ["minlength", "maxlength"], function (n, t, i) {
        var r = 0,
            e,
            u,
            f;
        return (
            t.type === "file"
                ? (r = t.files.length)
                : ((e = $("input[name='" + $(t).prop("name") + "'], input[class='" + $(t).prop("class") + "']").filter(
                      function () {
                          return $(this).is(":checked");
                      }
                  )),
                  (r = e.length)),
            (u = parseInt(i.minlength)),
            (f = parseInt(i.maxlength)),
            (u && r >= u && r <= f) || r <= f
        );
    }),
    addjQueryValidatorMethod("requirediflistcontains", ["dependentproperty", "targetvalue"], function (n, t, i) {
        var r = $("input[class='" + i.dependentproperty + "']"),
            u = i.targetvalue,
            f;
        if (r.prop("type") === "checkbox") {
            if (
                ((f = r.filter(function () {
                    return $(this).is(":checked") && $(this).val() === u;
                })),
                f.length > 0)
            )
                return n !== undefined && n !== null && n !== "";
        } else if (r.val() === u) return n !== undefined && n !== null && n !== "";
        return !0;
    }),
    addjQueryValidatorMethod("requiredlist", [], function (n, t) {
        var i = $("input[name='" + $(t).prop("name") + "'],input[class='" + $(t).prop("class") + "']").filter(
            function () {
                return $(this).is(":checked");
            }
        );
        return i.length > 0;
    }),
    (function (n) {
        typeof define == "function" && define.amd && define.amd.jQuery
            ? define(["jquery"], n)
            : typeof module != "undefined" && module.exports
              ? n(require("jquery"))
              : n(jQuery);
    })(function (n) {
        function ft(t) {
            return (
                t &&
                    t.allowPageScroll === undefined &&
                    (t.swipe !== undefined || t.swipeStatus !== undefined) &&
                    (t.allowPageScroll = p),
                t.click !== undefined && t.tap === undefined && (t.tap = t.click),
                t || (t = {}),
                (t = n.extend({}, n.fn.swipe.defaults, t)),
                this.each(function () {
                    var r = n(this),
                        i = r.data(h);
                    i || ((i = new et(this, t)), r.data(h, i));
                })
            );
        }
        function et(ft, et) {
            function tr(t) {
                if (!pu() && !(n(t.target).closest(et.excludedElements, ot).length > 0)) {
                    var r = t.originalEvent ? t.originalEvent : t,
                        f,
                        u = r.touches,
                        e = u ? u[0] : r;
                    return ((st = rt),
                    u ? (ct = u.length) : et.preventDefaultEvents !== !1 && t.preventDefault(),
                    (at = 0),
                    (vt = null),
                    (yt = null),
                    (kt = null),
                    (lt = 0),
                    (gt = 0),
                    (ni = 0),
                    (pt = 1),
                    (bt = 0),
                    (li = ku()),
                    dr(),
                    wi(0, e),
                    !u || ct === et.fingers || et.fingers === l || oi()
                        ? ((gi = ii()),
                          ct == 2 && (wi(1, u[1]), (gt = ni = cr(ht[0].start, ht[1].start))),
                          (et.swipeStatus || et.pinchStatus) && (f = wt(r, st)))
                        : (f = !1),
                    f === !1)
                        ? ((st = i), wt(r, st), f)
                        : (et.hold &&
                              (ei = setTimeout(
                                  n.proxy(function () {
                                      ot.trigger("hold", [r.target]);
                                      et.hold && (f = et.hold.call(ot, r, r.target));
                                  }, this),
                                  et.longTapThreshold
                              )),
                          pi(!0),
                          null);
                }
            }
            function ir(n) {
                var f = n.originalEvent ? n.originalEvent : n,
                    e,
                    h;
                if (st !== t && st !== i && !yi()) {
                    var s,
                        r = f.touches,
                        c = r ? r[0] : f,
                        u = gr(c);
                    ai = ii();
                    r && (ct = r.length);
                    et.hold && clearTimeout(ei);
                    st = o;
                    ct == 2 &&
                        (gt == 0
                            ? (wi(1, r[1]), (gt = ni = cr(ht[0].start, ht[1].start)))
                            : (gr(r[1]), (ni = cr(ht[0].end, ht[1].end)), (kt = gu(ht[0].end, ht[1].end))),
                        (pt = du(gt, ni)),
                        (bt = Math.abs(gt - ni)));
                    ct === et.fingers || et.fingers === l || !r || oi()
                        ? ((vt = iu(u.start, u.end)),
                          (yt = iu(u.last, u.end)),
                          uu(n, yt),
                          (at = nf(u.start, u.end)),
                          (lt = tu()),
                          bu(vt, at),
                          (s = wt(f, st)),
                          (!et.triggerOnTouchEnd || et.triggerOnTouchLeave) &&
                              ((e = !0),
                              et.triggerOnTouchLeave && ((h = rf(this)), (e = uf(u.end, h))),
                              !et.triggerOnTouchEnd && e ? (st = fr(o)) : et.triggerOnTouchLeave && !e && (st = fr(t)),
                              (st == i || st == t) && wt(f, st)))
                        : ((st = i), wt(f, st));
                    s === !1 && ((st = i), wt(f, st));
                }
            }
            function rr(n) {
                var r = n.originalEvent ? n.originalEvent : n,
                    u = r.touches;
                if (u) {
                    if (u.length && !yi()) return yu(r), !0;
                    if (u.length && yi()) return !0;
                }
                return (
                    yi() && (ct = nr),
                    (ai = ii()),
                    (lt = tu()),
                    or() || !er()
                        ? ((st = i), wt(r, st))
                        : et.triggerOnTouchEnd || (et.triggerOnTouchEnd == !1 && st === o)
                          ? (et.preventDefaultEvents !== !1 && n.preventDefault(), (st = t), wt(r, st))
                          : !et.triggerOnTouchEnd && br()
                            ? ((st = t), dt(r, st, k))
                            : st === o && ((st = i), wt(r, st)),
                    pi(!1),
                    null
                );
            }
            function ui() {
                ct = 0;
                ai = 0;
                gi = 0;
                gt = 0;
                ni = 0;
                pt = 1;
                dr();
                pi(!1);
            }
            function ur(n) {
                var i = n.originalEvent ? n.originalEvent : n;
                et.triggerOnTouchLeave && ((st = fr(t)), wt(i, st));
            }
            function lr() {
                ot.unbind(hi, tr);
                ot.unbind(ci, ui);
                ot.unbind(ki, ir);
                ot.unbind(di, rr);
                ri && ot.unbind(ri, ur);
                pi(!1);
            }
            function fr(n) {
                var r = n,
                    f = ar(),
                    u = er(),
                    e = or();
                return (
                    !f || e
                        ? (r = i)
                        : u && n == o && (!et.triggerOnTouchEnd || et.triggerOnTouchLeave)
                          ? (r = t)
                          : !u && n == t && et.triggerOnTouchLeave && (r = i),
                    r
                );
            }
            function wt(n, r) {
                var u,
                    f = n.touches;
                return (
                    (eu() || sr()) && (u = dt(n, r, w)),
                    (fu() || oi()) && u !== !1 && (u = dt(n, r, b)),
                    au() && u !== !1
                        ? (u = dt(n, r, tt))
                        : vu() && u !== !1
                          ? (u = dt(n, r, it))
                          : lu() && u !== !1 && (u = dt(n, r, k)),
                    r === i && (sr() && (u = dt(n, r, w)), oi() && (u = dt(n, r, b)), ui(n)),
                    r === t && (f ? f.length || ui(n) : ui(n)),
                    u
                );
            }
            function dt(o, s, h) {
                var c;
                if (h == w) {
                    if (
                        (ot.trigger("swipeStatus", [s, vt || null, at || 0, lt || 0, ct, ht, yt]),
                        et.swipeStatus &&
                            ((c = et.swipeStatus.call(ot, o, s, vt || null, at || 0, lt || 0, ct, ht, yt)), c === !1))
                    )
                        return !1;
                    if (s == t && yr()) {
                        if (
                            (clearTimeout(fi),
                            clearTimeout(ei),
                            ot.trigger("swipe", [vt, at, lt, ct, ht, yt]),
                            et.swipe && ((c = et.swipe.call(ot, o, vt, at, lt, ct, ht, yt)), c === !1))
                        )
                            return !1;
                        switch (vt) {
                            case r:
                                ot.trigger("swipeLeft", [vt, at, lt, ct, ht, yt]);
                                et.swipeLeft && (c = et.swipeLeft.call(ot, o, vt, at, lt, ct, ht, yt));
                                break;
                            case u:
                                ot.trigger("swipeRight", [vt, at, lt, ct, ht, yt]);
                                et.swipeRight && (c = et.swipeRight.call(ot, o, vt, at, lt, ct, ht, yt));
                                break;
                            case f:
                                ot.trigger("swipeUp", [vt, at, lt, ct, ht, yt]);
                                et.swipeUp && (c = et.swipeUp.call(ot, o, vt, at, lt, ct, ht, yt));
                                break;
                            case e:
                                ot.trigger("swipeDown", [vt, at, lt, ct, ht, yt]);
                                et.swipeDown && (c = et.swipeDown.call(ot, o, vt, at, lt, ct, ht, yt));
                        }
                    }
                }
                if (h == b) {
                    if (
                        (ot.trigger("pinchStatus", [s, kt || null, bt || 0, lt || 0, ct, pt, ht]),
                        et.pinchStatus &&
                            ((c = et.pinchStatus.call(ot, o, s, kt || null, bt || 0, lt || 0, ct, pt, ht)), c === !1))
                    )
                        return !1;
                    if (s == t && vr())
                        switch (kt) {
                            case v:
                                ot.trigger("pinchIn", [kt || null, bt || 0, lt || 0, ct, pt, ht]);
                                et.pinchIn && (c = et.pinchIn.call(ot, o, kt || null, bt || 0, lt || 0, ct, pt, ht));
                                break;
                            case y:
                                ot.trigger("pinchOut", [kt || null, bt || 0, lt || 0, ct, pt, ht]);
                                et.pinchOut && (c = et.pinchOut.call(ot, o, kt || null, bt || 0, lt || 0, ct, pt, ht));
                        }
                }
                return (
                    h == k
                        ? (s === i || s === t) &&
                          (clearTimeout(fi),
                          clearTimeout(ei),
                          hr() && !su()
                              ? ((ti = ii()),
                                (fi = setTimeout(
                                    n.proxy(function () {
                                        ti = null;
                                        ot.trigger("tap", [o.target]);
                                        et.tap && (c = et.tap.call(ot, o, o.target));
                                    }, this),
                                    et.doubleTapThreshold
                                )))
                              : ((ti = null),
                                ot.trigger("tap", [o.target]),
                                et.tap && (c = et.tap.call(ot, o, o.target))))
                        : h == tt
                          ? (s === i || s === t) &&
                            (clearTimeout(fi),
                            clearTimeout(ei),
                            (ti = null),
                            ot.trigger("doubletap", [o.target]),
                            et.doubleTap && (c = et.doubleTap.call(ot, o, o.target)))
                          : h == it &&
                            (s === i || s === t) &&
                            (clearTimeout(fi),
                            (ti = null),
                            ot.trigger("longtap", [o.target]),
                            et.longTap && (c = et.longTap.call(ot, o, o.target))),
                    c
                );
            }
            function er() {
                var n = !0;
                return et.threshold !== null && (n = at >= et.threshold), n;
            }
            function or() {
                var n = !1;
                return et.cancelThreshold !== null && vt !== null && (n = nu(vt) - at >= et.cancelThreshold), n;
            }
            function ru() {
                return et.pinchThreshold !== null ? bt >= et.pinchThreshold : !0;
            }
            function ar() {
                return et.maxTimeThreshold ? (lt >= et.maxTimeThreshold ? !1 : !0) : !0;
            }
            function uu(n, t) {
                if (et.preventDefaultEvents !== !1)
                    if (et.allowPageScroll === p) n.preventDefault();
                    else {
                        var i = et.allowPageScroll === nt;
                        switch (t) {
                            case r:
                                ((et.swipeLeft && i) || (!i && et.allowPageScroll != d)) && n.preventDefault();
                                break;
                            case u:
                                ((et.swipeRight && i) || (!i && et.allowPageScroll != d)) && n.preventDefault();
                                break;
                            case f:
                                ((et.swipeUp && i) || (!i && et.allowPageScroll != g)) && n.preventDefault();
                                break;
                            case e:
                                ((et.swipeDown && i) || (!i && et.allowPageScroll != g)) && n.preventDefault();
                        }
                    }
            }
            function vr() {
                var n = pr(),
                    t = wr(),
                    i = ru();
                return n && t && i;
            }
            function oi() {
                return !!(et.pinchStatus || et.pinchIn || et.pinchOut);
            }
            function fu() {
                return !!(vr() && oi());
            }
            function yr() {
                var n = ar(),
                    t = er(),
                    i = pr(),
                    r = wr(),
                    u = or();
                return !u && r && i && t && n;
            }
            function sr() {
                return !!(et.swipe || et.swipeStatus || et.swipeLeft || et.swipeRight || et.swipeUp || et.swipeDown);
            }
            function eu() {
                return !!(yr() && sr());
            }
            function pr() {
                return ct === et.fingers || et.fingers === l || !c;
            }
            function wr() {
                return ht[0].end.x !== 0;
            }
            function br() {
                return !!et.tap;
            }
            function hr() {
                return !!et.doubleTap;
            }
            function ou() {
                return !!et.longTap;
            }
            function kr() {
                if (ti == null) return !1;
                var n = ii();
                return hr() && n - ti <= et.doubleTapThreshold;
            }
            function su() {
                return kr();
            }
            function hu() {
                return (ct === 1 || !c) && (isNaN(at) || at < et.threshold);
            }
            function cu() {
                return lt > et.longTapThreshold && at < ut;
            }
            function lu() {
                return !!(hu() && br());
            }
            function au() {
                return !!(kr() && hr());
            }
            function vu() {
                return !!(cu() && ou());
            }
            function yu(n) {
                vi = ii();
                nr = n.touches.length + 1;
            }
            function dr() {
                vi = 0;
                nr = 0;
            }
            function yi() {
                var n = !1,
                    t;
                return vi && ((t = ii() - vi), t <= et.fingerReleaseThreshold && (n = !0)), n;
            }
            function pu() {
                return !!(ot.data(h + "_intouch") === !0);
            }
            function pi(n) {
                ot &&
                    (n === !0
                        ? (ot.bind(ki, ir), ot.bind(di, rr), ri && ot.bind(ri, ur))
                        : (ot.unbind(ki, ir, !1), ot.unbind(di, rr, !1), ri && ot.unbind(ri, ur, !1)),
                    ot.data(h + "_intouch", n === !0));
            }
            function wi(n, t) {
                var i = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
                return (
                    (i.start.x = i.last.x = i.end.x = t.pageX || t.clientX),
                    (i.start.y = i.last.y = i.end.y = t.pageY || t.clientY),
                    (ht[n] = i),
                    i
                );
            }
            function gr(n) {
                var i = n.identifier !== undefined ? n.identifier : 0,
                    t = wu(i);
                return (
                    t === null && (t = wi(i, n)),
                    (t.last.x = t.end.x),
                    (t.last.y = t.end.y),
                    (t.end.x = n.pageX || n.clientX),
                    (t.end.y = n.pageY || n.clientY),
                    t
                );
            }
            function wu(n) {
                return ht[n] || null;
            }
            function bu(n, t) {
                t = Math.max(t, nu(n));
                li[n].distance = t;
            }
            function nu(n) {
                return li[n] ? li[n].distance : undefined;
            }
            function ku() {
                var n = {};
                return (n[r] = bi(r)), (n[u] = bi(u)), (n[f] = bi(f)), (n[e] = bi(e)), n;
            }
            function bi(n) {
                return { direction: n, distance: 0 };
            }
            function tu() {
                return ai - gi;
            }
            function cr(n, t) {
                var i = Math.abs(n.x - t.x),
                    r = Math.abs(n.y - t.y);
                return Math.round(Math.sqrt(i * i + r * r));
            }
            function du(n, t) {
                var i = (t / n) * 1;
                return i.toFixed(2);
            }
            function gu() {
                return pt < 1 ? y : v;
            }
            function nf(n, t) {
                return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)));
            }
            function tf(n, t) {
                var r = n.x - t.x,
                    u = t.y - n.y,
                    f = Math.atan2(u, r),
                    i = Math.round((f * 180) / Math.PI);
                return i < 0 && (i = 360 - Math.abs(i)), i;
            }
            function iu(n, t) {
                var i = tf(n, t);
                return i <= 45 && i >= 0
                    ? r
                    : i <= 360 && i >= 315
                      ? r
                      : i >= 135 && i <= 225
                        ? u
                        : i > 45 && i < 135
                          ? e
                          : f;
            }
            function ii() {
                var n = new Date();
                return n.getTime();
            }
            function rf(t) {
                t = n(t);
                var i = t.offset();
                return { left: i.left, right: i.left + t.outerWidth(), top: i.top, bottom: i.top + t.outerHeight() };
            }
            function uf(n, t) {
                return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom;
            }
            var et = n.extend({}, et),
                si = c || s || !et.fallbackToMouseEvents,
                hi = si ? (s ? (a ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
                ki = si ? (s ? (a ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
                di = si ? (s ? (a ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
                ri = si ? (s ? "mouseleave" : null) : "mouseleave",
                ci = s ? (a ? "MSPointerCancel" : "pointercancel") : "touchcancel",
                at = 0,
                vt = null,
                yt = null,
                lt = 0,
                gt = 0,
                ni = 0,
                pt = 1,
                bt = 0,
                kt = 0,
                li = null,
                ot = n(ft),
                st = "start",
                ct = 0,
                ht = {},
                gi = 0,
                ai = 0,
                vi = 0,
                nr = 0,
                ti = 0,
                fi = null,
                ei = null;
            try {
                ot.bind(hi, tr);
                ot.bind(ci, ui);
            } catch (ff) {
                n.error("events not supported " + hi + "," + ci + " on jQuery.swipe");
            }
            this.enable = function () {
                return ot.bind(hi, tr), ot.bind(ci, ui), ot;
            };
            this.disable = function () {
                return lr(), ot;
            };
            this.destroy = function () {
                lr();
                ot.data(h, null);
                ot = null;
            };
            this.option = function (t, i) {
                if (typeof t == "object") et = n.extend(et, t);
                else if (et[t] !== undefined) {
                    if (i === undefined) return et[t];
                    et[t] = i;
                } else if (t) n.error("Option " + t + " does not exist on jQuery.swipe.options");
                else return et;
                return null;
            };
        }
        var r = "left",
            u = "right",
            f = "up",
            e = "down",
            v = "in",
            y = "out",
            p = "none",
            nt = "auto",
            w = "swipe",
            b = "pinch",
            k = "tap",
            tt = "doubletap",
            it = "longtap",
            d = "horizontal",
            g = "vertical",
            l = "all",
            ut = 10,
            rt = "start",
            o = "move",
            t = "end",
            i = "cancel",
            c = "ontouchstart" in window,
            a = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !c,
            s = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !c,
            h = "TouchSwipe";
        n.fn.swipe = function (t) {
            var r = n(this),
                i = r.data(h);
            if (i && typeof t == "string") {
                if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
                n.error("Method " + t + " does not exist on jQuery.swipe");
            } else if (i && typeof t == "object") i.option.apply(this, arguments);
            else if (!i && (typeof t == "object" || !t)) return ft.apply(this, arguments);
            return r;
        };
        n.fn.swipe.version = "1.6.15";
        n.fn.swipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe",
            preventDefaultEvents: !0,
        };
        n.fn.swipe.phases = { PHASE_START: rt, PHASE_MOVE: o, PHASE_END: t, PHASE_CANCEL: i };
        n.fn.swipe.directions = { LEFT: r, RIGHT: u, UP: f, DOWN: e, IN: v, OUT: y };
        n.fn.swipe.pageScroll = { NONE: p, HORIZONTAL: d, VERTICAL: g, AUTO: nt };
        n.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: l };
    }),
    "undefined" == typeof jQuery)
)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if ((t[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1) || t[0] > 2)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
})(jQuery);
+(function (n) {
    "use strict";
    function t() {
        var i = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend",
            },
            n;
        for (n in t) if (void 0 !== i.style[n]) return { end: t[n] };
        return !1;
    }
    n.fn.emulateTransitionEnd = function (t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function () {
            i = !0;
        });
        return (
            (r = function () {
                i || n(u).trigger(n.support.transition.end);
            }),
            setTimeout(r, t),
            this
        );
    };
    n(function () {
        n.support.transition = t();
        n.support.transition &&
            (n.event.special.bsTransitionEnd = {
                bindType: n.support.transition.end,
                delegateType: n.support.transition.end,
                handle: function (t) {
                    if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                },
            });
    });
})(jQuery);
+(function (n) {
    "use strict";
    function u(i) {
        return this.each(function () {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", (u = new t(this)));
            "string" == typeof i && u[i].call(r);
        });
    }
    var i = '[data-dismiss="alert"]',
        t = function (t) {
            n(t).on("click", i, this.close);
        },
        r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function (i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove();
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        u || ((u = f.attr("href")), (u = u && u.replace(/.*(?=#[^\s]*$)/, "")));
        r = n(u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger((i = n.Event("close.bs.alert")));
        i.isDefaultPrevented() ||
            (r.removeClass("in"),
            n.support.transition && r.hasClass("fade")
                ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION)
                : e());
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function () {
        return (n.fn.alert = r), this;
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close);
})(jQuery);
+(function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", (r = new t(this, f)));
            "toggle" == i ? r.toggle() : i && r.setState(i);
        });
    }
    var t = function (i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1;
        },
        r;
    t.VERSION = "3.3.6";
    t.DEFAULTS = { loadingText: "loading..." };
    t.prototype.setState = function (t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t += "Text";
        null == u.resetText && i.data("resetText", i[f]());
        setTimeout(
            n.proxy(function () {
                i[f](null == u[t] ? this.options[t] : u[t]);
                "loadingText" == t
                    ? ((this.isLoading = !0), i.addClass(r).attr(r, r))
                    : this.isLoading && ((this.isLoading = !1), i.removeClass(r).removeAttr(r));
            }, this),
            0
        );
    };
    t.prototype.toggle = function () {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length
            ? ((n = this.$element.find("input")),
              "radio" == n.prop("type")
                  ? (n.prop("checked") && (t = !1),
                    i.find(".active").removeClass("active"),
                    this.$element.addClass("active"))
                  : "checkbox" == n.prop("type") &&
                    (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
                    this.$element.toggleClass("active")),
              n.prop("checked", this.$element.hasClass("active")),
              t && n.trigger("change"))
            : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
              this.$element.toggleClass("active"));
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function () {
        return (n.fn.button = r), this;
    };
    n(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var r = n(t.target);
            r.hasClass("btn") || (r = r.closest(".btn"));
            i.call(r, "toggle");
            n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault();
        })
        .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            n(t.target)
                .closest(".btn")
                .toggleClass("focus", /^focus(in)?$/.test(t.type));
        });
})(jQuery);
+(function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", (r = new t(this, f)));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle();
        });
    }
    var t = function (t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            "hover" == this.options.pause &&
                !("ontouchstart" in document.documentElement) &&
                this.$element
                    .on("mouseenter.bs.carousel", n.proxy(this.pause, this))
                    .on("mouseleave.bs.carousel", n.proxy(this.cycle, this));
        },
        u,
        r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 };
    t.prototype.keydown = function (n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return;
            }
            n.preventDefault();
        }
    };
    t.prototype.cycle = function (t) {
        return (
            t || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval &&
                !this.paused &&
                (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)),
            this
        );
    };
    t.prototype.getItemIndex = function (n) {
        return (this.$items = n.parent().children(".item")), this.$items.index(n || this.$active);
    };
    t.prototype.getItemForDirection = function (n, t) {
        var i = this.getItemIndex(t),
            f = ("prev" == n && 0 === i) || ("next" == n && i == this.$items.length - 1),
            r,
            u;
        return f && !this.options.wrap
            ? t
            : ((r = "prev" == n ? -1 : 1), (u = (i + r) % this.$items.length), this.$items.eq(u));
    };
    t.prototype.to = function (n) {
        var i = this,
            t = this.getItemIndex((this.$active = this.$element.find(".item.active")));
        if (!(n > this.$items.length - 1) && !(0 > n))
            return this.sliding
                ? this.$element.one("slid.bs.carousel", function () {
                      i.to(n);
                  })
                : t == n
                  ? this.pause().cycle()
                  : this.slide(n > t ? "next" : "prev", this.$items.eq(n));
    };
    t.prototype.pause = function (t) {
        return (
            t || (this.paused = !0),
            this.$element.find(".next, .prev").length &&
                n.support.transition &&
                (this.$element.trigger(n.support.transition.end), this.cycle(!0)),
            (this.interval = clearInterval(this.interval)),
            this
        );
    };
    t.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
    };
    t.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
    };
    t.prototype.slide = function (i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = "next" == i ? "left" : "right",
            a = this,
            o,
            s,
            h,
            c;
        return u.hasClass("active")
            ? (this.sliding = !1)
            : ((o = u[0]),
              (s = n.Event("slide.bs.carousel", { relatedTarget: o, direction: f })),
              (this.$element.trigger(s), !s.isDefaultPrevented())
                  ? (((this.sliding = !0), l && this.pause(), this.$indicators.length) &&
                        (this.$indicators.find(".active").removeClass("active"),
                        (h = n(this.$indicators.children()[this.getItemIndex(u)])),
                        h && h.addClass("active")),
                    (c = n.Event("slid.bs.carousel", { relatedTarget: o, direction: f })),
                    n.support.transition && this.$element.hasClass("slide")
                        ? (u.addClass(i),
                          u[0].offsetWidth,
                          e.addClass(f),
                          u.addClass(f),
                          e
                              .one("bsTransitionEnd", function () {
                                  u.removeClass([i, f].join(" ")).addClass("active");
                                  e.removeClass(["active", f].join(" "));
                                  a.sliding = !1;
                                  setTimeout(function () {
                                      a.$element.trigger(c);
                                  }, 0);
                              })
                              .emulateTransitionEnd(t.TRANSITION_DURATION))
                        : (e.removeClass("active"),
                          u.addClass("active"),
                          (this.sliding = !1),
                          this.$element.trigger(c)),
                    l && this.cycle(),
                    this)
                  : void 0);
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function () {
        return (n.fn.carousel = u), this;
    };
    r = function (t) {
        var o,
            r = n(this),
            u = n(r.attr("data-target") || ((o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""))),
            e,
            f;
        u.hasClass("carousel") &&
            ((e = n.extend({}, u.data(), r.data())),
            (f = r.attr("data-slide-to")),
            f && (e.interval = !1),
            i.call(u, e),
            f && u.data("bs.carousel").to(f),
            t.preventDefault());
    };
    n(document)
        .on("click.bs.carousel.data-api", "[data-slide]", r)
        .on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function () {
        n('[data-ride="carousel"]').each(function () {
            var t = n(this);
            i.call(t, t.data());
        });
    });
})(jQuery);
+(function (n) {
    "use strict";
    function r(t) {
        var i,
            r = t.attr("data-target") || ((i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        return n(r);
    }
    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", (r = new t(this, f)));
            "string" == typeof i && r[i]();
        });
    }
    var t = function (i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n(
                '[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'
            );
            this.transitioning = null;
            this.options.parent
                ? (this.$parent = this.getParent())
                : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle();
        },
        u;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = { toggle: !0 };
    t.prototype.dimension = function () {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height";
    };
    t.prototype.show = function () {
        var f, r, e, u, o, s;
        if (
            !this.transitioning &&
            !this.$element.hasClass("in") &&
            ((r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing")),
            !(r && r.length && ((f = r.data("bs.collapse")), f && f.transitioning)) &&
                ((e = n.Event("show.bs.collapse")), this.$element.trigger(e), !e.isDefaultPrevented()))
        ) {
            if (
                (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)),
                (u = this.dimension()),
                this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0),
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                (this.transitioning = 1),
                (o = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse");
                }),
                !n.support.transition)
            )
                return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element
                .one("bsTransitionEnd", n.proxy(o, this))
                .emulateTransitionEnd(t.TRANSITION_DURATION)
                [u](this.$element[0][s]);
        }
    };
    t.prototype.hide = function () {
        var r, i, u;
        if (
            !this.transitioning &&
            this.$element.hasClass("in") &&
            ((r = n.Event("hide.bs.collapse")), this.$element.trigger(r), !r.isDefaultPrevented())
        )
            return (
                (i = this.dimension()),
                this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                (this.transitioning = 1),
                (u = function () {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                }),
                n.support.transition
                    ? void this.$element[i](0)
                          .one("bsTransitionEnd", n.proxy(u, this))
                          .emulateTransitionEnd(t.TRANSITION_DURATION)
                    : u.call(this)
            );
    };
    t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    t.prototype.getParent = function () {
        return n(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each(
                n.proxy(function (t, i) {
                    var u = n(i);
                    this.addAriaAndCollapsedClass(r(u), u);
                }, this)
            )
            .end();
    };
    t.prototype.addAriaAndCollapsedClass = function (n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i);
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function () {
        return (n.fn.collapse = u), this;
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o);
    });
})(jQuery);
+(function (n) {
    "use strict";
    function r(t) {
        var i = t.attr("data-target"),
            r;
        return (
            i || ((i = t.attr("href")), (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""))),
            (r = i && n(i)),
            r && r.length ? r : t.parent()
        );
    }
    function u(t) {
        (t && 3 === t.which) ||
            (n(o).remove(),
            n(i).each(function () {
                var u = n(this),
                    i = r(u),
                    f = { relatedTarget: this };
                i.hasClass("open") &&
                    ((t &&
                        "click" == t.type &&
                        /input|textarea/i.test(t.target.tagName) &&
                        n.contains(i[0], t.target)) ||
                        (i.trigger((t = n.Event("hide.bs.dropdown", f))),
                        t.isDefaultPrevented() ||
                            (u.attr("aria-expanded", "false"),
                            i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))));
            }));
    }
    function e(i) {
        return this.each(function () {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", (u = new t(this)));
            "string" == typeof i && u[i].call(r);
        });
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function (t) {
            n(t).on("click.bs.dropdown", this.toggle);
        },
        f;
    t.VERSION = "3.3.6";
    t.prototype.toggle = function (t) {
        var f = n(this),
            i,
            o,
            e;
        if (!f.is(".disabled, :disabled")) {
            if (((i = r(f)), (o = i.hasClass("open")), u(), !o)) {
                if (
                    ("ontouchstart" in document.documentElement &&
                        !i.closest(".navbar-nav").length &&
                        n(document.createElement("div"))
                            .addClass("dropdown-backdrop")
                            .insertAfter(n(this))
                            .on("click", u),
                    (e = { relatedTarget: this }),
                    i.trigger((t = n.Event("show.bs.dropdown", e))),
                    t.isDefaultPrevented())
                )
                    return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e));
            }
            return !1;
        }
    };
    t.prototype.keydown = function (t) {
        var e, o, s, h, f, u;
        if (
            /(38|40|27|32)/.test(t.which) &&
            !/input|textarea/i.test(t.target.tagName) &&
            ((e = n(this)), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))
        ) {
            if (((o = r(e)), (s = o.hasClass("open")), (!s && 27 != t.which) || (s && 27 == t.which)))
                return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length &&
                ((u = f.index(t.target)),
                38 == t.which && u > 0 && u--,
                40 == t.which && u < f.length - 1 && u++,
                ~u || (u = 0),
                f.eq(u).trigger("focus"));
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function () {
        return (n.fn.dropdown = f), this;
    };
    n(document)
        .on("click.bs.dropdown.data-api", u)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
            n.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", i, t.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", i, t.prototype.keydown)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown);
})(jQuery);
+(function (n) {
    "use strict";
    function i(i, r) {
        return this.each(function () {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", (u = new t(this, e)));
            "string" == typeof i ? u[i](r) : e.show && u.show(r);
        });
    }
    var t = function (t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote &&
                this.$element.find(".modal-content").load(
                    this.options.remote,
                    n.proxy(function () {
                        this.$element.trigger("loaded.bs.modal");
                    }, this)
                );
        },
        r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 };
    t.prototype.toggle = function (n) {
        return this.isShown ? this.hide() : this.show(n);
    };
    t.prototype.show = function (i) {
        var r = this,
            u = n.Event("show.bs.modal", { relatedTarget: i });
        this.$element.trigger(u);
        this.isShown ||
            u.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                r.$element.one("mouseup.dismiss.bs.modal", function (t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0);
                });
            }),
            this.backdrop(function () {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body);
                r.$element.show().scrollTop(0);
                r.adjustDialog();
                f && r.$element[0].offsetWidth;
                r.$element.addClass("in");
                r.enforceFocus();
                u = n.Event("shown.bs.modal", { relatedTarget: i });
                f
                    ? r.$dialog
                          .one("bsTransitionEnd", function () {
                              r.$element.trigger("focus").trigger(u);
                          })
                          .emulateTransitionEnd(t.TRANSITION_DURATION)
                    : r.$element.trigger("focus").trigger(u);
            }));
    };
    t.prototype.hide = function (i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown &&
            !i.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            n(document).off("focusin.bs.modal"),
            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            n.support.transition && this.$element.hasClass("fade")
                ? this.$element
                      .one("bsTransitionEnd", n.proxy(this.hideModal, this))
                      .emulateTransitionEnd(t.TRANSITION_DURATION)
                : this.hideModal());
    };
    t.prototype.enforceFocus = function () {
        n(document)
            .off("focusin.bs.modal")
            .on(
                "focusin.bs.modal",
                n.proxy(function (n) {
                    this.$element[0] === n.target ||
                        this.$element.has(n.target).length ||
                        this.$element.trigger("focus");
                }, this)
            );
    };
    t.prototype.escape = function () {
        this.isShown && this.options.keyboard
            ? this.$element.on(
                  "keydown.dismiss.bs.modal",
                  n.proxy(function (n) {
                      27 == n.which && this.hide();
                  }, this)
              )
            : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    };
    t.prototype.resize = function () {
        this.isShown
            ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this))
            : n(window).off("resize.bs.modal");
    };
    t.prototype.hideModal = function () {
        var n = this;
        this.$element.hide();
        this.backdrop(function () {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal");
        });
    };
    t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    t.prototype.backdrop = function (i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r,
            u;
        if (this.isShown && this.options.backdrop) {
            if (
                ((r = n.support.transition && f),
                (this.$backdrop = n(document.createElement("div"))
                    .addClass("modal-backdrop " + f)
                    .appendTo(this.$body)),
                this.$element.on(
                    "click.dismiss.bs.modal",
                    n.proxy(function (n) {
                        return this.ignoreBackdropClick
                            ? void (this.ignoreBackdropClick = !1)
                            : void (
                                  n.target === n.currentTarget &&
                                  ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                              );
                    }, this)
                ),
                r && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                !i)
            )
                return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i();
        } else
            !this.isShown && this.$backdrop
                ? (this.$backdrop.removeClass("in"),
                  (u = function () {
                      e.removeBackdrop();
                      i && i();
                  }),
                  n.support.transition && this.$element.hasClass("fade")
                      ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION)
                      : u())
                : i && i();
    };
    t.prototype.handleUpdate = function () {
        this.adjustDialog();
    };
    t.prototype.adjustDialog = function () {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : "",
        });
    };
    t.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
    };
    t.prototype.checkScrollbar = function () {
        var n = window.innerWidth,
            t;
        n || ((t = document.documentElement.getBoundingClientRect()), (n = t.right - Math.abs(t.left)));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar();
    };
    t.prototype.setScrollbar = function () {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth);
    };
    t.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
    };
    t.prototype.measureScrollbar = function () {
        var n = document.createElement("div"),
            t;
        return (
            (n.className = "modal-scrollbar-measure"),
            this.$body.append(n),
            (t = n.offsetWidth - n.clientWidth),
            this.$body[0].removeChild(n),
            t
        );
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function () {
        return (n.fn.modal = r), this;
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || (f && f.replace(/.*(?=#[^\s]+$)/, ""))),
            e = u.data("bs.modal") ? "toggle" : n.extend({ remote: !/#/.test(f) && f }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function (n) {
            n.isDefaultPrevented() ||
                u.one("hidden.bs.modal", function () {
                    r.is(":visible") && r.trigger("focus");
                });
        });
        i.call(u, e, this);
    });
})(jQuery);
+(function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) &&
                (r || u.data("bs.tooltip", (r = new t(this, f))), "string" == typeof i && r[i]());
        });
    }
    var t = function (n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t);
        },
        i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
    };
    t.prototype.init = function (t, i, r) {
        var f, e, u, o, s;
        if (
            ((this.enabled = !0),
            (this.type = t),
            (this.$element = n(i)),
            (this.options = this.getOptions(r)),
            (this.$viewport =
                this.options.viewport &&
                n(
                    n.isFunction(this.options.viewport)
                        ? this.options.viewport.call(this, this.$element)
                        : this.options.viewport.selector || this.options.viewport
                )),
            (this.inState = { click: !1, hover: !1, focus: !1 }),
            this.$element[0] instanceof document.constructor && !this.options.selector)
        )
            throw new Error(
                "`selector` option must be specified when initializing " + this.type + " on the window.document object!"
            );
        for (f = this.options.trigger.split(" "), e = f.length; e--; )
            if (((u = f[e]), "click" == u))
                this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else
                "manual" != u &&
                    ((o = "hover" == u ? "mouseenter" : "focusin"),
                    (s = "hover" == u ? "mouseleave" : "focusout"),
                    this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)),
                    this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector
            ? (this._options = n.extend({}, this.options, { trigger: "manual", selector: "" }))
            : this.fixTitle();
    };
    t.prototype.getDefaults = function () {
        return t.DEFAULTS;
    };
    t.prototype.getOptions = function (t) {
        return (
            (t = n.extend({}, this.getDefaults(), this.$element.data(), t)),
            t.delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }),
            t
        );
    };
    t.prototype.getDelegateOptions = function () {
        var t = {},
            i = this.getDefaults();
        return (
            this._options &&
                n.each(this._options, function (n, r) {
                    i[n] != r && (t[n] = r);
                }),
            t
        );
    };
    t.prototype.enter = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return (
            i ||
                ((i = new this.constructor(t.currentTarget, this.getDelegateOptions())),
                n(t.currentTarget).data("bs." + this.type, i)),
            t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0),
            i.tip().hasClass("in") || "in" == i.hoverState
                ? void (i.hoverState = "in")
                : (clearTimeout(i.timeout),
                  (i.hoverState = "in"),
                  i.options.delay && i.options.delay.show
                      ? void (i.timeout = setTimeout(function () {
                            "in" == i.hoverState && i.show();
                        }, i.options.delay.show))
                      : i.show())
        );
    };
    t.prototype.isInStateTrue = function () {
        for (var n in this.inState) if (this.inState[n]) return !0;
        return !1;
    };
    t.prototype.leave = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return (
            i ||
                ((i = new this.constructor(t.currentTarget, this.getDelegateOptions())),
                n(t.currentTarget).data("bs." + this.type, i)),
            t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1),
            i.isInStateTrue()
                ? void 0
                : (clearTimeout(i.timeout),
                  (i.hoverState = "out"),
                  i.options.delay && i.options.delay.hide
                      ? void (i.timeout = setTimeout(function () {
                            "out" == i.hoverState && i.hide();
                        }, i.options.delay.hide))
                      : i.hide())
        );
    };
    t.prototype.show = function () {
        var c = n.Event("show.bs." + this.type),
            l,
            p,
            e,
            w,
            h;
        if (this.hasContent() && this.enabled) {
            if (
                (this.$element.trigger(c),
                (l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])),
                c.isDefaultPrevented() || !l)
            )
                return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i =
                    "function" == typeof this.options.placement
                        ? this.options.placement.call(this, r[0], this.$element[0])
                        : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach()
                .css({ top: 0, left: 0, display: "block" })
                .addClass(i)
                .data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y &&
                ((p = i),
                (e = this.getPosition(this.$viewport)),
                (i =
                    "bottom" == i && f.bottom + s > e.bottom
                        ? "top"
                        : "top" == i && f.top - s < e.top
                          ? "bottom"
                          : "right" == i && f.right + o > e.width
                            ? "left"
                            : "left" == i && f.left - o < e.left
                              ? "right"
                              : i),
                r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function () {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u);
            };
            n.support.transition && this.$tip.hasClass("fade")
                ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION)
                : h();
        }
    };
    t.prototype.applyPlacement = function (t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h,
            f,
            u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(
            r[0],
            n.extend(
                {
                    using: function (n) {
                        r.css({ top: Math.round(n.top), left: Math.round(n.left) });
                    },
                },
                t
            ),
            0
        );
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? (t.left += u.left) : (t.top += u.top);
        var c = /top|bottom/.test(i),
            a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c);
    };
    t.prototype.replaceArrow = function (n, t, i) {
        this.arrow()
            .css(i ? "left" : "top", 50 * (1 - n / t) + "%")
            .css(i ? "top" : "left", "");
    };
    t.prototype.setContent = function () {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right");
    };
    t.prototype.hide = function (i) {
        function f() {
            "in" != u.hoverState && r.detach();
            u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
            i && i();
        }
        var u = this,
            r = n(this.$tip),
            e = n.Event("hide.bs." + this.type);
        return (
            this.$element.trigger(e),
            e.isDefaultPrevented()
                ? void 0
                : (r.removeClass("in"),
                  n.support.transition && r.hasClass("fade")
                      ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION)
                      : f(),
                  (this.hoverState = null),
                  this)
        );
    };
    t.prototype.fixTitle = function () {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) &&
            n.attr("data-original-title", n.attr("title") || "").attr("title", "");
    };
    t.prototype.hasContent = function () {
        return this.getTitle();
    };
    t.prototype.getPosition = function (t) {
        t = t || this.$element;
        var u = t[0],
            r = "BODY" == u.tagName,
            i = u.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, { width: i.right - i.left, height: i.bottom - i.top }));
        var f = r ? { top: 0, left: 0 } : t.offset(),
            e = { scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
            o = r ? { width: n(window).width(), height: n(window).height() } : null;
        return n.extend({}, i, e, o, f);
    };
    t.prototype.getCalculatedOffset = function (n, t, i, r) {
        return "bottom" == n
            ? { top: t.top + t.height, left: t.left + t.width / 2 - i / 2 }
            : "top" == n
              ? { top: t.top - r, left: t.left + t.width / 2 - i / 2 }
              : "left" == n
                ? { top: t.top + t.height / 2 - r / 2, left: t.left - i }
                : { top: t.top + t.height / 2 - r / 2, left: t.left + t.width };
    };
    t.prototype.getViewportAdjustedDelta = function (n, t, i, r) {
        var f = { top: 0, left: 0 },
            e,
            u,
            o,
            s,
            h,
            c;
        return this.$viewport
            ? ((e = (this.options.viewport && this.options.viewport.padding) || 0),
              (u = this.getPosition(this.$viewport)),
              /right|left/.test(n)
                  ? ((o = t.top - e - u.scroll),
                    (s = t.top + e - u.scroll + r),
                    o < u.top ? (f.top = u.top - o) : s > u.top + u.height && (f.top = u.top + u.height - s))
                  : ((h = t.left - e),
                    (c = t.left + e + i),
                    h < u.left ? (f.left = u.left - h) : c > u.right && (f.left = u.left + u.width - c)),
              f)
            : f;
    };
    t.prototype.getTitle = function () {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title);
    };
    t.prototype.getUID = function (n) {
        do n += ~~(1e6 * Math.random());
        while (document.getElementById(n));
        return n;
    };
    t.prototype.tip = function () {
        if (!this.$tip && ((this.$tip = n(this.options.template)), 1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    };
    t.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
    };
    t.prototype.enable = function () {
        this.enabled = !0;
    };
    t.prototype.disable = function () {
        this.enabled = !1;
    };
    t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
    };
    t.prototype.toggle = function (t) {
        var i = this;
        t &&
            ((i = n(t.currentTarget).data("bs." + this.type)),
            i ||
                ((i = new this.constructor(t.currentTarget, this.getDelegateOptions())),
                n(t.currentTarget).data("bs." + this.type, i)));
        t
            ? ((i.inState.click = !i.inState.click), i.isInStateTrue() ? i.enter(i) : i.leave(i))
            : i.tip().hasClass("in")
              ? i.leave(i)
              : i.enter(i);
    };
    t.prototype.destroy = function () {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function () {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
        });
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function () {
        return (n.fn.tooltip = i), this;
    };
})(jQuery);
+(function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) &&
                (r || u.data("bs.popover", (r = new t(this, f))), "string" == typeof i && r[i]());
        });
    }
    var t = function (n, t) {
            this.init("popover", n, t);
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.6";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function () {
        return t.DEFAULTS;
    };
    t.prototype.setContent = function () {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content")
            .children()
            .detach()
            .end()
            [this.options.html ? ("string" == typeof t ? "html" : "append") : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide();
    };
    t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
    };
    t.prototype.getContent = function () {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content);
    };
    t.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function () {
        return (n.fn.popover = i), this;
    };
})(jQuery);
+(function (n) {
    "use strict";
    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process();
    }
    function i(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", (r = new t(this, f)));
            "string" == typeof i && r[i]();
        });
    }
    t.VERSION = "3.3.6";
    t.DEFAULTS = { offset: 10 };
    t.prototype.getScrollHeight = function () {
        return (
            this.$scrollElement[0].scrollHeight ||
            Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        );
    };
    t.prototype.refresh = function () {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || ((i = "position"), (r = this.$scrollElement.scrollTop()));
        this.$body
            .find(this.selector)
            .map(function () {
                var f = n(this),
                    u = f.data("target") || f.attr("href"),
                    t = /^#./.test(u) && n(u);
                return (t && t.length && t.is(":visible") && [[t[i]().top + r, u]]) || null;
            })
            .sort(function (n, t) {
                return n[0] - t[0];
            })
            .each(function () {
                t.offsets.push(this[0]);
                t.targets.push(this[1]);
            });
    };
    t.prototype.process = function () {
        var n,
            i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget;
        if ((this.scrollHeight != f && this.refresh(), i >= e)) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return (this.activeTarget = null), this.clear();
        for (n = t.length; n--; )
            u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n]);
    };
    t.prototype.activate = function (t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy");
    };
    t.prototype.clear = function () {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function () {
        return (n.fn.scrollspy = r), this;
    };
    n(window).on("load.bs.scrollspy.data-api", function () {
        n('[data-spy="scroll"]').each(function () {
            var t = n(this);
            i.call(t, t.data());
        });
    });
})(jQuery);
+(function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", (r = new t(this)));
            "string" == typeof i && r[i]();
        });
    }
    var t = function (t) {
            this.element = n(t);
        },
        u,
        i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function () {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (
            (i || ((i = t.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))),
            !t.parent("li").hasClass("active"))
        ) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", { relatedTarget: t[0] }),
                o = n.Event("show.bs.tab", { relatedTarget: r[0] });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) ||
                ((u = n(i)),
                this.activate(t.closest("li"), f),
                this.activate(u, u.parent(), function () {
                    r.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] });
                    t.trigger({ type: "shown.bs.tab", relatedTarget: r[0] });
                }));
        }
    };
    t.prototype.activate = function (i, r, u) {
        function e() {
            f.removeClass("active")
                .find("> .dropdown-menu > .active")
                .removeClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length &&
                i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u();
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && ((f.length && f.hasClass("fade")) || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in");
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function () {
        return (n.fn.tab = u), this;
    };
    i = function (t) {
        t.preventDefault();
        r.call(n(this), "show");
    };
    n(document)
        .on("click.bs.tab.data-api", '[data-toggle="tab"]', i)
        .on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
})(jQuery);
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
    $(".mobile-menu").click(function () {
        $(".menu").slideToggle();
    });
    $(function () {
        var n = "";
        $(".btn").click(function () {
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
        $("#toggle").click(function () {
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
    $(".box").click(function (t) {
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
!(function (n) {
    "use strict";
    var t = 0,
        i = 0,
        r = n(".carousel").find("[class=thumb_scroll_y]"),
        u = n(".carousel").find("[class=thumb_scroll_x]");
    r &&
        n(".thumb_scroll_y").on("slid.bs.carousel", function () {
            var r =
                    -1 * n(".thumb_scroll_y .carousel-indicators li:first").position().top +
                    n(".thumb_scroll_y .carousel-indicators li:last").position().top +
                    n(".thumb_scroll_y .carousel-indicators li:last").height(),
                i =
                    n(".thumb_scroll_y .carousel-indicators li.active").position().top +
                    n(".thumb_scroll_y .carousel-indicators li.active").height() / 1 +
                    t -
                    n(".thumb_scroll_y .carousel-indicators").height() / 2;
            i < 0 && (i = 0);
            i > r - n(".thumb_scroll_y .carousel-indicators").height() &&
                (i = r - n(".thumb_scroll_y .carousel-indicators").height());
            n(".thumb_scroll_y .carousel-indicators").animate({ scrollTop: i }, 800);
            t = i;
        });
    u &&
        n(".thumb_scroll_x").on("slid.bs.carousel", function () {
            var r =
                    -1 * n(".thumb_scroll_x .carousel-indicators li:first").position().left +
                    n(".thumb_scroll_x .carousel-indicators li:last").position().left +
                    n(".thumb_scroll_x .carousel-indicators li:last").width(),
                t =
                    n(".thumb_scroll_x .carousel-indicators li.active").position().left +
                    n(".thumb_scroll_x .carousel-indicators li.active").width() / 1 +
                    i -
                    n(".thumb_scroll_x .carousel-indicators").width() / 1;
            t < 0 && (t = 0);
            t > r - n(".thumb_scroll_x .carousel-indicators").width() &&
                (t = r - n(".thumb_scroll_x .carousel-indicators").width());
            n(".thumb_scroll_x .carousel-indicators").animate({ scrollLeft: t }, 800);
            i = t;
        });
    n(".selfPauseVids").on("slide.bs.carousel", function () {
        n("video").each(function () {
            this.pause();
        });
    });
    n(".selfPauseVidm").on("hide.bs.modal", function () {
        n("video").each(function () {
            this.pause();
        });
    });
    n(".onlinePauseVideos").on("slide.bs.carousel", function (t) {
        n(t.target)
            .find("iframe")
            .each(function (t, i) {
                n(i).attr("src", n(i).attr("src"));
            });
    });
    n(".onlinePauseVideom").on("hide.bs.modal", function (t) {
        n(t.target)
            .find("iframe")
            .each(function (t, i) {
                n(i).attr("src", n(i).attr("src"));
            });
    });
    n(".carousel").swipe({
        swipe: function (t, i) {
            "left" == i && n(this).carousel("next");
            "right" == i && n(this).carousel("prev");
        },
        allowPageScroll: "vertical",
        threshold: 0,
    });
})(jQuery);
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
$(function () {
    $(".mailingsignup").submit(function (n) {
        var t = $(".mailingsignup"),
            i = t.validate();
        t.valid() || n.preventDefault();
    });
});
$(function () {
    function t(n) {
        $(n).submit(function (t) {
            var u;
            t.preventDefault();
            var i = $(this),
                f = i.attr("action"),
                e = i.serialize(),
                r = $("#contact-person-modal #e-zine-form");
            r.find("#EZineName").val(i.find("#Name").val());
            r.find("#EZineEmail").val(i.find("#Email").val());
            u = i.find("#AddToMailingList").is(":checked");
            $("#send-message-button").prop("disabled", !0);
            $.ajax({
                type: "POST",
                url: f,
                data: e,
                success: function () {
                    n.reset();
                    MicroModal.close("contact-person-modal");
                    Swal.fire("Thank you!", "We will get back to you shortly", "success");
                    $("#send-message-button").removeAttr("disabled");
                    u && (r.submit(), r.reset());
                },
                error: function () {
                    MicroModal.close("contact-person-modal");
                    Swal.fire("Ohh no. :(", "Something went wrong", "error");
                    $("#send-message-button").removeAttr("disabled");
                },
            });
        });
    }
    $(document).ready(function () {
        MicroModal.init();
    });
    var n = document.getElementById("contact-person-form");
    n && t(n);
}),
    (function () {
        (function (n) {
            var r = this || eval("this"),
                t = r.document,
                f = r.navigator,
                i = r.jQuery,
                u = r.JSON;
            (function (n) {
                "function" == typeof define && define.amd
                    ? define(["exports", "require"], n)
                    : "object" == typeof exports && "object" == typeof module
                      ? n(module.exports || exports)
                      : n((r.ko = {}));
            })(function (e, o) {
                function b(n, t) {
                    return null === n || (typeof n) in nt ? n === t : !1;
                }
                function tt(t, i) {
                    var r;
                    return function () {
                        r ||
                            (r = s.a.setTimeout(function () {
                                r = n;
                                t();
                            }, i));
                    };
                }
                function it(n, t) {
                    var i;
                    return function () {
                        clearTimeout(i);
                        i = s.a.setTimeout(n, t);
                    };
                }
                function rt(n, t) {
                    t && t !== v ? ("beforeChange" === t ? this.Ob(n) : this.Ja(n, t)) : this.Pb(n);
                }
                function ut(n, t) {
                    null !== t && t.k && t.k();
                }
                function ft(n, t) {
                    var i = this.Mc,
                        r = i[h];
                    r.T ||
                        (this.ob && this.Oa[t]
                            ? (i.Sb(t, n, this.Oa[t]), (this.Oa[t] = null), --this.ob)
                            : r.s[t] || i.Sb(t, n, r.t ? { $: n } : i.yc(n)),
                        n.Ha && n.Hc());
                }
                function k(n, t, i, r) {
                    s.d[n] = {
                        init: function (n, u, f, e, o) {
                            var c, h;
                            return (
                                s.m(
                                    function () {
                                        var l = u(),
                                            f = s.a.c(l),
                                            f = !i != !f,
                                            e = !h;
                                        (e || t || f !== c) &&
                                            (e && s.xa.Ca() && (h = s.a.wa(s.f.childNodes(n), !0)),
                                            f ? (e || s.f.fa(n, s.a.wa(h)), s.hb(r ? r(o, l) : o, n)) : s.f.za(n),
                                            (c = f));
                                    },
                                    null,
                                    { i: n }
                                ),
                                { controlsDescendantBindings: !0 }
                            );
                        },
                    };
                    s.h.va[n] = !1;
                    s.f.aa[n] = !0;
                }
                var s = "undefined" != typeof e ? e : {},
                    nt,
                    v,
                    l,
                    y,
                    a,
                    p,
                    h,
                    d,
                    g,
                    w;
                s.b = function (n, t) {
                    for (var i = n.split("."), r = s, u = 0; u < i.length - 1; u++) r = r[i[u]];
                    r[i[i.length - 1]] = t;
                };
                s.H = function (n, t, i) {
                    n[t] = i;
                };
                s.version = "3.4.2";
                s.b("version", s.version);
                s.options = { deferUpdates: !1, useOnlyNativeEvents: !1 };
                s.a = (function () {
                    function o(n, t) {
                        for (var i in n) n.hasOwnProperty(i) && t(i, n[i]);
                    }
                    function l(n, t) {
                        if (t) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                        return n;
                    }
                    function a(n, t) {
                        return (n.__proto__ = t), n;
                    }
                    function v(n, t, i, r) {
                        var u = n[t].match(c) || [];
                        s.a.r(i.match(c), function (n) {
                            s.a.ra(u, n, r);
                        });
                        n[t] = u.join(" ");
                    }
                    var y = { __proto__: [] } instanceof Array,
                        w = "function" == typeof Symbol,
                        h = {},
                        p = {};
                    h[f && /Firefox\/2/i.test(f.userAgent) ? "KeyboardEvent" : "UIEvents"] = [
                        "keyup",
                        "keydown",
                        "keypress",
                    ];
                    h.MouseEvents =
                        "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(
                            " "
                        );
                    o(h, function (n, t) {
                        if (t.length) for (var i = 0, r = t.length; i < r; i++) p[t[i]] = n;
                    });
                    var b = { propertychange: !0 },
                        e =
                            t &&
                            (function () {
                                for (
                                    var i = 3, r = t.createElement("div"), u = r.getElementsByTagName("i");
                                    (r.innerHTML = "<!--[if gt IE " + ++i + "]><i></i><![endif]-->"), u[0];

                                );
                                return 4 < i ? i : n;
                            })(),
                        c = /\S+/g;
                    return {
                        gc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                        r: function (n, t) {
                            for (var i = 0, r = n.length; i < r; i++) t(n[i], i);
                        },
                        o: function (n, t) {
                            if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(n, t);
                            for (var i = 0, r = n.length; i < r; i++) if (n[i] === t) return i;
                            return -1;
                        },
                        Vb: function (n, t, i) {
                            for (var r = 0, u = n.length; r < u; r++) if (t.call(i, n[r], r)) return n[r];
                            return null;
                        },
                        Na: function (n, t) {
                            var i = s.a.o(n, t);
                            0 < i ? n.splice(i, 1) : 0 === i && n.shift();
                        },
                        Wb: function (n) {
                            n = n || [];
                            for (var i = [], t = 0, r = n.length; t < r; t++) 0 > s.a.o(i, n[t]) && i.push(n[t]);
                            return i;
                        },
                        ib: function (n, t) {
                            n = n || [];
                            for (var r = [], i = 0, u = n.length; i < u; i++) r.push(t(n[i], i));
                            return r;
                        },
                        Ma: function (n, t) {
                            n = n || [];
                            for (var r = [], i = 0, u = n.length; i < u; i++) t(n[i], i) && r.push(n[i]);
                            return r;
                        },
                        ta: function (n, t) {
                            if (t instanceof Array) n.push.apply(n, t);
                            else for (var i = 0, r = t.length; i < r; i++) n.push(t[i]);
                            return n;
                        },
                        ra: function (n, t, i) {
                            var r = s.a.o(s.a.Bb(n), t);
                            0 > r ? i && n.push(t) : i || n.splice(r, 1);
                        },
                        la: y,
                        extend: l,
                        $a: a,
                        ab: y ? a : l,
                        D: o,
                        Ea: function (n, t) {
                            if (!n) return n;
                            var r = {},
                                i;
                            for (i in n) n.hasOwnProperty(i) && (r[i] = t(n[i], i, n));
                            return r;
                        },
                        rb: function (n) {
                            for (; n.firstChild; ) s.removeNode(n.firstChild);
                        },
                        nc: function (n) {
                            n = s.a.W(n);
                            for (
                                var r = ((n[0] && n[0].ownerDocument) || t).createElement("div"), i = 0, u = n.length;
                                i < u;
                                i++
                            )
                                r.appendChild(s.ba(n[i]));
                            return r;
                        },
                        wa: function (n, t) {
                            for (var r, i = 0, f = n.length, u = []; i < f; i++)
                                (r = n[i].cloneNode(!0)), u.push(t ? s.ba(r) : r);
                            return u;
                        },
                        fa: function (n, t) {
                            if ((s.a.rb(n), t)) for (var i = 0, r = t.length; i < r; i++) n.appendChild(t[i]);
                        },
                        uc: function (n, t) {
                            var r = n.nodeType ? [n] : n;
                            if (0 < r.length) {
                                for (var f = r[0], e = f.parentNode, i = 0, u = t.length; i < u; i++)
                                    e.insertBefore(t[i], f);
                                for (i = 0, u = r.length; i < u; i++) s.removeNode(r[i]);
                            }
                        },
                        Ba: function (n, t) {
                            if (n.length) {
                                for (t = (8 === t.nodeType && t.parentNode) || t; n.length && n[0].parentNode !== t; )
                                    n.splice(0, 1);
                                for (; 1 < n.length && n[n.length - 1].parentNode !== t; ) n.length--;
                                if (1 < n.length) {
                                    var i = n[0],
                                        r = n[n.length - 1];
                                    for (n.length = 0; i !== r; ) n.push(i), (i = i.nextSibling);
                                    n.push(r);
                                }
                            }
                            return n;
                        },
                        wc: function (n, t) {
                            7 > e ? n.setAttribute("selected", t) : (n.selected = t);
                        },
                        cb: function (t) {
                            return null === t || t === n
                                ? ""
                                : t.trim
                                  ? t.trim()
                                  : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                        },
                        sd: function (n, t) {
                            return (n = n || ""), t.length > n.length ? !1 : n.substring(0, t.length) === t;
                        },
                        Rc: function (n, t) {
                            if (n === t) return !0;
                            if (11 === n.nodeType) return !1;
                            if (t.contains) return t.contains(3 === n.nodeType ? n.parentNode : n);
                            if (t.compareDocumentPosition) return 16 == (t.compareDocumentPosition(n) & 16);
                            for (; n && n != t; ) n = n.parentNode;
                            return !!n;
                        },
                        qb: function (n) {
                            return s.a.Rc(n, n.ownerDocument.documentElement);
                        },
                        Tb: function (n) {
                            return !!s.a.Vb(n, s.a.qb);
                        },
                        A: function (n) {
                            return n && n.tagName && n.tagName.toLowerCase();
                        },
                        Zb: function (n) {
                            return s.onError
                                ? function () {
                                      try {
                                          return n.apply(this, arguments);
                                      } catch (t) {
                                          throw (s.onError && s.onError(t), t);
                                      }
                                  }
                                : n;
                        },
                        setTimeout: function (n, t) {
                            return setTimeout(s.a.Zb(n), t);
                        },
                        dc: function (n) {
                            setTimeout(function () {
                                s.onError && s.onError(n);
                                throw n;
                            }, 0);
                        },
                        q: function (n, t, r) {
                            var u = s.a.Zb(r),
                                f,
                                o;
                            if (((r = e && b[t]), s.options.useOnlyNativeEvents || r || !i))
                                if (r || "function" != typeof n.addEventListener)
                                    if ("undefined" != typeof n.attachEvent)
                                        (f = function (t) {
                                            u.call(n, t);
                                        }),
                                            (o = "on" + t),
                                            n.attachEvent(o, f),
                                            s.a.G.qa(n, function () {
                                                n.detachEvent(o, f);
                                            });
                                    else throw Error("Browser doesn't support addEventListener or attachEvent");
                                else n.addEventListener(t, u, !1);
                            else i(n).bind(t, u);
                        },
                        Fa: function (n, u) {
                            if (!n || !n.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                            var f;
                            if (
                                ("input" === s.a.A(n) && n.type && "click" == u.toLowerCase()
                                    ? ((f = n.type), (f = "checkbox" == f || "radio" == f))
                                    : (f = !1),
                                s.options.useOnlyNativeEvents || !i || f)
                            )
                                if ("function" == typeof t.createEvent)
                                    if ("function" == typeof n.dispatchEvent)
                                        (f = t.createEvent(p[u] || "HTMLEvents")),
                                            f.initEvent(u, !0, !0, r, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, n),
                                            n.dispatchEvent(f);
                                    else throw Error("The supplied element doesn't support dispatchEvent");
                                else if (f && n.click) n.click();
                                else if ("undefined" != typeof n.fireEvent) n.fireEvent("on" + u);
                                else throw Error("Browser doesn't support triggering events");
                            else i(n).trigger(u);
                        },
                        c: function (n) {
                            return s.I(n) ? n() : n;
                        },
                        Bb: function (n) {
                            return s.I(n) ? n.p() : n;
                        },
                        fb: function (n, t, i) {
                            var r;
                            t &&
                                ("object" == typeof n.classList
                                    ? ((r = n.classList[i ? "add" : "remove"]),
                                      s.a.r(t.match(c), function (t) {
                                          r.call(n.classList, t);
                                      }))
                                    : "string" == typeof n.className.baseVal
                                      ? v(n.className, "baseVal", t, i)
                                      : v(n, "className", t, i));
                        },
                        bb: function (t, i) {
                            var r = s.a.c(i),
                                u;
                            (null === r || r === n) && (r = "");
                            u = s.f.firstChild(t);
                            !u || 3 != u.nodeType || s.f.nextSibling(u)
                                ? s.f.fa(t, [t.ownerDocument.createTextNode(r)])
                                : (u.data = r);
                            s.a.Wc(t);
                        },
                        vc: function (n, i) {
                            if (((n.name = i), 7 >= e))
                                try {
                                    n.mergeAttributes(t.createElement("<input name='" + n.name + "'/>"), !1);
                                } catch (r) {}
                        },
                        Wc: function (n) {
                            9 <= e &&
                                ((n = 1 == n.nodeType ? n : n.parentNode), n.style && (n.style.zoom = n.style.zoom));
                        },
                        Sc: function (n) {
                            if (e) {
                                var t = n.style.width;
                                n.style.width = 0;
                                n.style.width = t;
                            }
                        },
                        nd: function (n, t) {
                            n = s.a.c(n);
                            t = s.a.c(t);
                            for (var r = [], i = n; i <= t; i++) r.push(i);
                            return r;
                        },
                        W: function (n) {
                            for (var i = [], t = 0, r = n.length; t < r; t++) i.push(n[t]);
                            return i;
                        },
                        bc: function (n) {
                            return w ? Symbol(n) : n;
                        },
                        xd: 6 === e,
                        yd: 7 === e,
                        C: e,
                        ic: function (n, t) {
                            for (
                                var r = s.a
                                        .W(n.getElementsByTagName("input"))
                                        .concat(s.a.W(n.getElementsByTagName("textarea"))),
                                    f =
                                        "string" == typeof t
                                            ? function (n) {
                                                  return n.name === t;
                                              }
                                            : function (n) {
                                                  return t.test(n.name);
                                              },
                                    u = [],
                                    i = r.length - 1;
                                0 <= i;
                                i--
                            )
                                f(r[i]) && u.push(r[i]);
                            return u;
                        },
                        kd: function (n) {
                            return "string" == typeof n && (n = s.a.cb(n))
                                ? u && u.parse
                                    ? u.parse(n)
                                    : new Function("return " + n)()
                                : null;
                        },
                        Gb: function (n, t, i) {
                            if (!u || !u.stringify)
                                throw Error(
                                    "Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"
                                );
                            return u.stringify(s.a.c(n), t, i);
                        },
                        ld: function (n, i, r) {
                            var c, e, h, f, u, l;
                            r = r || {};
                            var a = r.params || {},
                                v = r.includeFields || this.gc,
                                c = n;
                            if ("object" == typeof n && "form" === s.a.A(n))
                                for (c = n.action, e = v.length - 1; 0 <= e; e--)
                                    for (h = s.a.ic(n, v[e]), f = h.length - 1; 0 <= f; f--) a[h[f].name] = h[f].value;
                            i = s.a.c(i);
                            u = t.createElement("form");
                            u.style.display = "none";
                            u.action = c;
                            u.method = "post";
                            for (l in i)
                                (n = t.createElement("input")),
                                    (n.type = "hidden"),
                                    (n.name = l),
                                    (n.value = s.a.Gb(s.a.c(i[l]))),
                                    u.appendChild(n);
                            o(a, function (n, i) {
                                var r = t.createElement("input");
                                r.type = "hidden";
                                r.name = n;
                                r.value = i;
                                u.appendChild(r);
                            });
                            t.body.appendChild(u);
                            r.submitter ? r.submitter(u) : u.submit();
                            setTimeout(function () {
                                u.parentNode.removeChild(u);
                            }, 0);
                        },
                    };
                })();
                s.b("utils", s.a);
                s.b("utils.arrayForEach", s.a.r);
                s.b("utils.arrayFirst", s.a.Vb);
                s.b("utils.arrayFilter", s.a.Ma);
                s.b("utils.arrayGetDistinctValues", s.a.Wb);
                s.b("utils.arrayIndexOf", s.a.o);
                s.b("utils.arrayMap", s.a.ib);
                s.b("utils.arrayPushAll", s.a.ta);
                s.b("utils.arrayRemoveItem", s.a.Na);
                s.b("utils.extend", s.a.extend);
                s.b("utils.fieldsIncludedWithJsonPost", s.a.gc);
                s.b("utils.getFormFields", s.a.ic);
                s.b("utils.peekObservable", s.a.Bb);
                s.b("utils.postJson", s.a.ld);
                s.b("utils.parseJson", s.a.kd);
                s.b("utils.registerEventHandler", s.a.q);
                s.b("utils.stringifyJson", s.a.Gb);
                s.b("utils.range", s.a.nd);
                s.b("utils.toggleDomNodeCssClass", s.a.fb);
                s.b("utils.triggerEvent", s.a.Fa);
                s.b("utils.unwrapObservable", s.a.c);
                s.b("utils.objectForEach", s.a.D);
                s.b("utils.addOrRemoveItem", s.a.ra);
                s.b("utils.setTextContent", s.a.bb);
                s.b("unwrap", s.a.c);
                Function.prototype.bind ||
                    (Function.prototype.bind = function (n) {
                        var t = this,
                            i;
                        return 1 === arguments.length
                            ? function () {
                                  return t.apply(n, arguments);
                              }
                            : ((i = Array.prototype.slice.call(arguments, 1)),
                              function () {
                                  var r = i.slice(0);
                                  return r.push.apply(r, arguments), t.apply(n, r);
                              });
                    });
                s.a.e = new (function () {
                    function r(r, f) {
                        var e = r[t];
                        if (!e || "null" === e || !i[e]) {
                            if (!f) return n;
                            e = r[t] = "ko" + u++;
                            i[e] = {};
                        }
                        return i[e];
                    }
                    var u = 0,
                        t = "__ko__" + new Date().getTime(),
                        i = {};
                    return {
                        get: function (t, i) {
                            var u = r(t, !1);
                            return u === n ? n : u[i];
                        },
                        set: function (t, i, u) {
                            (u !== n || r(t, !1) !== n) && (r(t, !0)[i] = u);
                        },
                        clear: function (n) {
                            var r = n[t];
                            return r ? (delete i[r], (n[t] = null), !0) : !1;
                        },
                        J: function () {
                            return u++ + t;
                        },
                    };
                })();
                s.b("utils.domData", s.a.e);
                s.b("utils.domData.clear", s.a.e.clear);
                s.a.G = new (function () {
                    function t(t, i) {
                        var r = s.a.e.get(t, u);
                        return r === n && i && ((r = []), s.a.e.set(t, u, r)), r;
                    }
                    function r(n) {
                        var i = t(n, !1),
                            u;
                        if (i) for (i = i.slice(0), u = 0; u < i.length; u++) i[u](n);
                        if ((s.a.e.clear(n), s.a.G.cleanExternalData(n), f[n.nodeType]))
                            for (i = n.firstChild; (n = i); ) (i = n.nextSibling), 8 === n.nodeType && r(n);
                    }
                    var u = s.a.e.J(),
                        e = { 1: !0, 8: !0, 9: !0 },
                        f = { 1: !0, 9: !0 };
                    return {
                        qa: function (n, i) {
                            if ("function" != typeof i) throw Error("Callback must be a function");
                            t(n, !0).push(i);
                        },
                        tc: function (i, r) {
                            var f = t(i, !1);
                            f && (s.a.Na(f, r), 0 == f.length && s.a.e.set(i, u, n));
                        },
                        ba: function (n) {
                            var t, i, u;
                            if (e[n.nodeType] && (r(n), f[n.nodeType]))
                                for (t = [], s.a.ta(t, n.getElementsByTagName("*")), i = 0, u = t.length; i < u; i++)
                                    r(t[i]);
                            return n;
                        },
                        removeNode: function (n) {
                            s.ba(n);
                            n.parentNode && n.parentNode.removeChild(n);
                        },
                        cleanExternalData: function (n) {
                            i && "function" == typeof i.cleanData && i.cleanData([n]);
                        },
                    };
                })();
                s.ba = s.a.G.ba;
                s.removeNode = s.a.G.removeNode;
                s.b("cleanNode", s.ba);
                s.b("removeNode", s.removeNode);
                s.b("utils.domNodeDisposal", s.a.G);
                s.b("utils.domNodeDisposal.addDisposeCallback", s.a.G.qa);
                s.b("utils.domNodeDisposal.removeDisposeCallback", s.a.G.tc),
                    (function () {
                        var h = [0, "", ""],
                            u = [1, "<table>", "</table>"],
                            f = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            e = [1, "<select multiple='multiple'>", "</select>"],
                            c = {
                                thead: u,
                                tbody: u,
                                tfoot: u,
                                tr: [2, "<table><tbody>", "</tbody></table>"],
                                td: f,
                                th: f,
                                option: e,
                                optgroup: e,
                            },
                            o = 8 >= s.a.C;
                        s.a.na = function (n, u) {
                            var f, e;
                            if (i) {
                                if (i.parseHTML) f = i.parseHTML(n, u) || [];
                                else if ((f = i.clean([n], u)) && f[0]) {
                                    for (e = f[0]; e.parentNode && 11 !== e.parentNode.nodeType; ) e = e.parentNode;
                                    e.parentNode && e.parentNode.removeChild(e);
                                }
                            } else {
                                (f = u) || (f = t);
                                var e = f.parentWindow || f.defaultView || r,
                                    v = s.a.cb(n).toLowerCase(),
                                    l = f.createElement("div"),
                                    a;
                                for (
                                    a = ((v = v.match(/^<([a-z]+)[ >]/)) && c[v[1]]) || h,
                                        v = a[0],
                                        a = "ignored<div>" + a[1] + n + a[2] + "</div>",
                                        "function" == typeof e.innerShiv
                                            ? l.appendChild(e.innerShiv(a))
                                            : (o && f.appendChild(l),
                                              (l.innerHTML = a),
                                              o && l.parentNode.removeChild(l));
                                    v--;

                                )
                                    l = l.lastChild;
                                f = s.a.W(l.lastChild.childNodes);
                            }
                            return f;
                        };
                        s.a.Eb = function (t, r) {
                            if ((s.a.rb(t), (r = s.a.c(r)), null !== r && r !== n))
                                if (("string" != typeof r && (r = r.toString()), i)) i(t).html(r);
                                else
                                    for (var f = s.a.na(r, t.ownerDocument), u = 0; u < f.length; u++)
                                        t.appendChild(f[u]);
                        };
                    })();
                s.b("utils.parseHtmlFragment", s.a.na);
                s.b("utils.setHtml", s.a.Eb);
                s.N = (function () {
                    function i(n, t) {
                        var r;
                        if (n)
                            if (8 == n.nodeType) (r = s.N.pc(n.nodeValue)), null != r && t.push({ Qc: n, hd: r });
                            else if (1 == n.nodeType)
                                for (var r = 0, u = n.childNodes, f = u.length; r < f; r++) i(u[r], t);
                    }
                    var t = {};
                    return {
                        yb: function (n) {
                            if ("function" != typeof n)
                                throw Error("You can only pass a function to ko.memoization.memoize()");
                            var i =
                                ((4294967296 * (1 + Math.random())) | 0).toString(16).substring(1) +
                                ((4294967296 * (1 + Math.random())) | 0).toString(16).substring(1);
                            return (t[i] = n), "<!--[ko_memo:" + i + "]-->";
                        },
                        Bc: function (i, r) {
                            var u = t[i];
                            if (u === n)
                                throw Error(
                                    "Couldn't find any memo with ID " + i + ". Perhaps it's already been unmemoized."
                                );
                            try {
                                return u.apply(null, r || []), !0;
                            } finally {
                                delete t[i];
                            }
                        },
                        Cc: function (n, t) {
                            var f = [],
                                u,
                                o,
                                r,
                                e;
                            for (i(n, f), u = 0, o = f.length; u < o; u++)
                                (r = f[u].Qc),
                                    (e = [r]),
                                    t && s.a.ta(e, t),
                                    s.N.Bc(f[u].hd, e),
                                    (r.nodeValue = ""),
                                    r.parentNode && r.parentNode.removeChild(r);
                        },
                        pc: function (n) {
                            return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : null;
                        },
                    };
                })();
                s.b("memoization", s.N);
                s.b("memoization.memoize", s.N.yb);
                s.b("memoization.unmemoize", s.N.Bc);
                s.b("memoization.parseMemoText", s.N.pc);
                s.b("memoization.unmemoizeDomNodeAndDescendants", s.N.Cc);
                s.Z = (function () {
                    function f() {
                        if (n)
                            for (var t = n, r = 0, f; i < n; )
                                if ((f = u[i++])) {
                                    if (i > t) {
                                        if (5e3 <= ++r) {
                                            i = n;
                                            s.a.dc(
                                                Error("'Too much recursion' after processing " + r + " task groups.")
                                            );
                                            break;
                                        }
                                        t = n;
                                    }
                                    try {
                                        f();
                                    } catch (e) {
                                        s.a.dc(e);
                                    }
                                }
                    }
                    function e() {
                        f();
                        i = n = u.length = 0;
                    }
                    var u = [],
                        n = 0,
                        o = 1,
                        i = 0;
                    return {
                        scheduler: r.MutationObserver
                            ? (function (n) {
                                  var i = t.createElement("div");
                                  return (
                                      new MutationObserver(n).observe(i, { attributes: !0 }),
                                      function () {
                                          i.classList.toggle("foo");
                                      }
                                  );
                              })(e)
                            : t && "onreadystatechange" in t.createElement("script")
                              ? function (n) {
                                    var i = t.createElement("script");
                                    i.onreadystatechange = function () {
                                        i.onreadystatechange = null;
                                        t.documentElement.removeChild(i);
                                        i = null;
                                        n();
                                    };
                                    t.documentElement.appendChild(i);
                                }
                              : function (n) {
                                    setTimeout(n, 0);
                                },
                        Za: function (t) {
                            return n || s.Z.scheduler(e), (u[n++] = t), o++;
                        },
                        cancel: function (t) {
                            t -= o - n;
                            t >= i && t < n && (u[t] = null);
                        },
                        resetForTesting: function () {
                            var t = n - i;
                            return (i = n = u.length = 0), t;
                        },
                        rd: f,
                    };
                })();
                s.b("tasks", s.Z);
                s.b("tasks.schedule", s.Z.Za);
                s.b("tasks.runEarly", s.Z.rd);
                s.Aa = {
                    throttle: function (n, t) {
                        n.throttleEvaluation = t;
                        var i = null;
                        return s.B({
                            read: n,
                            write: function (r) {
                                clearTimeout(i);
                                i = s.a.setTimeout(function () {
                                    n(r);
                                }, t);
                            },
                        });
                    },
                    rateLimit: function (n, t) {
                        var i, r, u;
                        "number" == typeof t ? (i = t) : ((i = t.timeout), (r = t.method));
                        n.gb = !1;
                        u = "notifyWhenChangesStop" == r ? it : tt;
                        n.Wa(function (n) {
                            return u(n, i);
                        });
                    },
                    deferred: function (t, i) {
                        if (!0 !== i)
                            throw Error(
                                "The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled."
                            );
                        t.gb ||
                            ((t.gb = !0),
                            t.Wa(function (i) {
                                var u,
                                    r = !1;
                                return function () {
                                    if (!r) {
                                        s.Z.cancel(u);
                                        u = s.Z.Za(i);
                                        try {
                                            r = !0;
                                            t.notifySubscribers(n, "dirty");
                                        } finally {
                                            r = !1;
                                        }
                                    }
                                };
                            }));
                    },
                    notify: function (n, t) {
                        n.equalityComparer = "always" == t ? null : b;
                    },
                };
                nt = { undefined: 1, boolean: 1, number: 1, string: 1 };
                s.b("extenders", s.Aa);
                s.zc = function (n, t, i) {
                    this.$ = n;
                    this.jb = t;
                    this.Pc = i;
                    this.T = !1;
                    s.H(this, "dispose", this.k);
                };
                s.zc.prototype.k = function () {
                    this.T = !0;
                    this.Pc();
                };
                s.K = function () {
                    s.a.ab(this, l);
                    l.ub(this);
                };
                v = "change";
                l = {
                    ub: function (n) {
                        n.F = { change: [] };
                        n.Qb = 1;
                    },
                    Y: function (n, t, i) {
                        var r = this,
                            u;
                        return (
                            (i = i || v),
                            (u = new s.zc(r, t ? n.bind(t) : n, function () {
                                s.a.Na(r.F[i], u);
                                r.Ka && r.Ka(i);
                            })),
                            r.ua && r.ua(i),
                            r.F[i] || (r.F[i] = []),
                            r.F[i].push(u),
                            u
                        );
                    },
                    notifySubscribers: function (n, t) {
                        var u, i, r;
                        if (((t = t || v), t === v && this.Kb(), this.Ra(t))) {
                            u = (t === v && this.Fc) || this.F[t].slice(0);
                            try {
                                for (s.l.Xb(), i = 0; (r = u[i]); ++i) r.T || r.jb(n);
                            } finally {
                                s.l.end();
                            }
                        }
                    },
                    Pa: function () {
                        return this.Qb;
                    },
                    Zc: function (n) {
                        return this.Pa() !== n;
                    },
                    Kb: function () {
                        ++this.Qb;
                    },
                    Wa: function (n) {
                        var t = this,
                            o = s.I(t),
                            u,
                            f,
                            r,
                            i,
                            e;
                        t.Ja || ((t.Ja = t.notifySubscribers), (t.notifySubscribers = rt));
                        e = n(function () {
                            t.Ha = !1;
                            o && i === t && (i = t.Mb ? t.Mb() : t());
                            var n = f || t.Ua(r, i);
                            f = u = !1;
                            n && t.Ja((r = i));
                        });
                        t.Pb = function (n) {
                            t.Fc = t.F[v].slice(0);
                            t.Ha = u = !0;
                            i = n;
                            e();
                        };
                        t.Ob = function (n) {
                            u || ((r = n), t.Ja(n, "beforeChange"));
                        };
                        t.Hc = function () {
                            t.Ua(r, t.p(!0)) && (f = !0);
                        };
                    },
                    Ra: function (n) {
                        return this.F[n] && this.F[n].length;
                    },
                    Xc: function (n) {
                        if (n) return (this.F[n] && this.F[n].length) || 0;
                        var t = 0;
                        return (
                            s.a.D(this.F, function (n, i) {
                                "dirty" !== n && (t += i.length);
                            }),
                            t
                        );
                    },
                    Ua: function (n, t) {
                        return !this.equalityComparer || !this.equalityComparer(n, t);
                    },
                    extend: function (n) {
                        var t = this;
                        return (
                            n &&
                                s.a.D(n, function (n, i) {
                                    var r = s.Aa[n];
                                    "function" == typeof r && (t = r(t, i) || t);
                                }),
                            t
                        );
                    },
                };
                s.H(l, "subscribe", l.Y);
                s.H(l, "extend", l.extend);
                s.H(l, "getSubscriptionsCount", l.Xc);
                s.a.la && s.a.$a(l, Function.prototype);
                s.K.fn = l;
                s.lc = function (n) {
                    return null != n && "function" == typeof n.Y && "function" == typeof n.notifySubscribers;
                };
                s.b("subscribable", s.K);
                s.b("isSubscribable", s.lc);
                s.xa = s.l = (function () {
                    function t(t) {
                        r.push(n);
                        n = t;
                    }
                    function i() {
                        n = r.pop();
                    }
                    var r = [],
                        n,
                        u = 0;
                    return {
                        Xb: t,
                        end: i,
                        sc: function (t) {
                            if (n) {
                                if (!s.lc(t)) throw Error("Only subscribable things can act as dependencies");
                                n.jb.call(n.Lc, t, t.Gc || (t.Gc = ++u));
                            }
                        },
                        w: function (n, r, u) {
                            try {
                                return t(), n.apply(r, u || []);
                            } finally {
                                i();
                            }
                        },
                        Ca: function () {
                            if (n) return n.m.Ca();
                        },
                        Va: function () {
                            if (n) return n.Va;
                        },
                    };
                })();
                s.b("computedContext", s.xa);
                s.b("computedContext.getDependenciesCount", s.xa.Ca);
                s.b("computedContext.isInitial", s.xa.Va);
                s.b("ignoreDependencies", (s.wd = s.l.w));
                y = s.a.bc("_latestValue");
                s.O = function (n) {
                    function t() {
                        return 0 < arguments.length
                            ? (t.Ua(t[y], arguments[0]) && (t.ia(), (t[y] = arguments[0]), t.ha()), this)
                            : (s.l.sc(t), t[y]);
                    }
                    return (
                        (t[y] = n),
                        s.a.la || s.a.extend(t, s.K.fn),
                        s.K.fn.ub(t),
                        s.a.ab(t, a),
                        s.options.deferUpdates && s.Aa.deferred(t, !0),
                        t
                    );
                };
                a = {
                    equalityComparer: b,
                    p: function () {
                        return this[y];
                    },
                    ha: function () {
                        this.notifySubscribers(this[y]);
                    },
                    ia: function () {
                        this.notifySubscribers(this[y], "beforeChange");
                    },
                };
                s.a.la && s.a.$a(a, s.K.fn);
                p = s.O.md = "__ko_proto__";
                a[p] = s.O;
                s.Qa = function (t, i) {
                    return null === t || t === n || t[p] === n ? !1 : t[p] === i ? !0 : s.Qa(t[p], i);
                };
                s.I = function (n) {
                    return s.Qa(n, s.O);
                };
                s.Da = function (n) {
                    return ("function" == typeof n && n[p] === s.O) || ("function" == typeof n && n[p] === s.B && n.$c)
                        ? !0
                        : !1;
                };
                s.b("observable", s.O);
                s.b("isObservable", s.I);
                s.b("isWriteableObservable", s.Da);
                s.b("isWritableObservable", s.Da);
                s.b("observable.fn", a);
                s.H(a, "peek", a.p);
                s.H(a, "valueHasMutated", a.ha);
                s.H(a, "valueWillMutate", a.ia);
                s.ma = function (n) {
                    if (((n = n || []), "object" != typeof n || !("length" in n)))
                        throw Error(
                            "The argument passed when initializing an observable array must be an array, or null, or undefined."
                        );
                    return (n = s.O(n)), s.a.ab(n, s.ma.fn), n.extend({ trackArrayChanges: !0 });
                };
                s.ma.fn = {
                    remove: function (n) {
                        for (
                            var u,
                                r = this.p(),
                                i = [],
                                f =
                                    "function" != typeof n || s.I(n)
                                        ? function (t) {
                                              return t === n;
                                          }
                                        : n,
                                t = 0;
                            t < r.length;
                            t++
                        )
                            (u = r[t]), f(u) && (0 === i.length && this.ia(), i.push(u), r.splice(t, 1), t--);
                        return i.length && this.ha(), i;
                    },
                    removeAll: function (t) {
                        if (t === n) {
                            var i = this.p(),
                                r = i.slice(0);
                            return this.ia(), i.splice(0, i.length), this.ha(), r;
                        }
                        return t
                            ? this.remove(function (n) {
                                  return 0 <= s.a.o(t, n);
                              })
                            : [];
                    },
                    destroy: function (n) {
                        var i = this.p(),
                            r =
                                "function" != typeof n || s.I(n)
                                    ? function (t) {
                                          return t === n;
                                      }
                                    : n,
                            t;
                        for (this.ia(), t = i.length - 1; 0 <= t; t--) r(i[t]) && (i[t]._destroy = !0);
                        this.ha();
                    },
                    destroyAll: function (t) {
                        return t === n
                            ? this.destroy(function () {
                                  return !0;
                              })
                            : t
                              ? this.destroy(function (n) {
                                    return 0 <= s.a.o(t, n);
                                })
                              : [];
                    },
                    indexOf: function (n) {
                        var t = this();
                        return s.a.o(t, n);
                    },
                    replace: function (n, t) {
                        var i = this.indexOf(n);
                        0 <= i && (this.ia(), (this.p()[i] = t), this.ha());
                    },
                };
                s.a.la && s.a.$a(s.ma.fn, s.O.fn);
                s.a.r("pop push reverse shift sort splice unshift".split(" "), function (n) {
                    s.ma.fn[n] = function () {
                        var t = this.p(),
                            i;
                        return (
                            this.ia(),
                            this.Yb(t, n, arguments),
                            (i = t[n].apply(t, arguments)),
                            this.ha(),
                            i === t ? this : i
                        );
                    };
                });
                s.a.r(["slice"], function (n) {
                    s.ma.fn[n] = function () {
                        var t = this();
                        return t[n].apply(t, arguments);
                    };
                });
                s.b("observableArray", s.ma);
                s.Aa.trackArrayChanges = function (t, i) {
                    function l() {
                        if (!f) {
                            f = !0;
                            u = t.notifySubscribers;
                            t.notifySubscribers = function (n, t) {
                                return (t && t !== v) || ++e, u.apply(this, arguments);
                            };
                            var n = [].concat(t.p() || []);
                            r = null;
                            o = t.Y(function (i) {
                                if (((i = [].concat(i || [])), t.Ra("arrayChange"))) {
                                    var u;
                                    (!r || 1 < e) && (r = s.a.lb(n, i, t.kb));
                                    u = r;
                                }
                                n = i;
                                r = null;
                                e = 0;
                                u && u.length && t.notifySubscribers(u, "arrayChange");
                            });
                        }
                    }
                    if (((t.kb = {}), i && "object" == typeof i && s.a.extend(t.kb, i), (t.kb.sparse = !0), !t.Yb)) {
                        var f = !1,
                            r = null,
                            o,
                            e = 0,
                            u,
                            h = t.ua,
                            c = t.Ka;
                        t.ua = function (n) {
                            h && h.call(t, n);
                            "arrayChange" === n && l();
                        };
                        t.Ka = function (i) {
                            c && c.call(t, i);
                            "arrayChange" !== i ||
                                t.Ra("arrayChange") ||
                                (u && ((t.notifySubscribers = u), (u = n)), o.k(), (f = !1));
                        };
                        t.Yb = function (n, t, i) {
                            function c(n, t, i) {
                                return (l[l.length] = { status: n, value: t, index: i });
                            }
                            if (f && !e) {
                                var l = [],
                                    u = n.length,
                                    h = i.length,
                                    o = 0;
                                switch (t) {
                                    case "push":
                                        o = u;
                                    case "unshift":
                                        for (t = 0; t < h; t++) c("added", i[t], o + t);
                                        break;
                                    case "pop":
                                        o = u - 1;
                                    case "shift":
                                        u && c("deleted", n[o], o);
                                        break;
                                    case "splice":
                                        t = Math.min(Math.max(0, 0 > i[0] ? u + i[0] : i[0]), u);
                                        for (
                                            var u = 1 === h ? u : Math.min(t + (i[1] || 0), u),
                                                h = t + h - 2,
                                                o = Math.max(u, h),
                                                a = [],
                                                v = [],
                                                y = 2;
                                            t < o;
                                            ++t, ++y
                                        )
                                            t < u && v.push(c("deleted", n[t], t)),
                                                t < h && a.push(c("added", i[y], t));
                                        s.a.hc(v, a);
                                        break;
                                    default:
                                        return;
                                }
                                r = l;
                            }
                        };
                    }
                };
                h = s.a.bc("_state");
                s.m = s.B = function (t, i, r) {
                    function u() {
                        if (0 < arguments.length) {
                            if ("function" == typeof e) e.apply(f.sb, arguments);
                            else
                                throw Error(
                                    "Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."
                                );
                            return this;
                        }
                        return s.l.sc(u), (f.V || (f.t && u.Sa())) && u.U(), f.M;
                    }
                    if (
                        ("object" == typeof t ? (r = t) : ((r = r || {}), t && (r.read = t)),
                        "function" != typeof r.read)
                    )
                        throw Error("Pass a function that returns the value of the ko.computed");
                    var e = r.write,
                        f = {
                            M: n,
                            da: !0,
                            V: !0,
                            Ta: !1,
                            Hb: !1,
                            T: !1,
                            Ya: !1,
                            t: !1,
                            od: r.read,
                            sb: i || r.owner,
                            i: r.disposeWhenNodeIsRemoved || r.i || null,
                            ya: r.disposeWhen || r.ya,
                            pb: null,
                            s: {},
                            L: 0,
                            fc: null,
                        };
                    return (
                        (u[h] = f),
                        (u.$c = "function" == typeof e),
                        s.a.la || s.a.extend(u, s.K.fn),
                        s.K.fn.ub(u),
                        s.a.ab(u, c),
                        r.pure ? ((f.Ya = !0), (f.t = !0), s.a.extend(u, et)) : r.deferEvaluation && s.a.extend(u, ot),
                        s.options.deferUpdates && s.Aa.deferred(u, !0),
                        f.i && ((f.Hb = !0), f.i.nodeType || (f.i = null)),
                        f.t || r.deferEvaluation || u.U(),
                        f.i &&
                            u.ca() &&
                            s.a.G.qa(
                                f.i,
                                (f.pb = function () {
                                    u.k();
                                })
                            ),
                        u
                    );
                };
                var c = {
                        equalityComparer: b,
                        Ca: function () {
                            return this[h].L;
                        },
                        Sb: function (n, t, i) {
                            if (this[h].Ya && t === this)
                                throw Error("A 'pure' computed must not be called recursively");
                            this[h].s[n] = i;
                            i.Ia = this[h].L++;
                            i.pa = t.Pa();
                        },
                        Sa: function () {
                            var t,
                                n,
                                i = this[h].s;
                            for (t in i)
                                if (i.hasOwnProperty(t) && ((n = i[t]), (this.oa && n.$.Ha) || n.$.Zc(n.pa))) return !0;
                        },
                        gd: function () {
                            this.oa && !this[h].Ta && this.oa(!1);
                        },
                        ca: function () {
                            var n = this[h];
                            return n.V || 0 < n.L;
                        },
                        qd: function () {
                            this.Ha ? this[h].V && (this[h].da = !0) : this.ec();
                        },
                        yc: function (n) {
                            if (n.gb && !this[h].i) {
                                var t = n.Y(this.gd, this, "dirty"),
                                    i = n.Y(this.qd, this);
                                return {
                                    $: n,
                                    k: function () {
                                        t.k();
                                        i.k();
                                    },
                                };
                            }
                            return n.Y(this.ec, this);
                        },
                        ec: function () {
                            var n = this,
                                t = n.throttleEvaluation;
                            t && 0 <= t
                                ? (clearTimeout(this[h].fc),
                                  (this[h].fc = s.a.setTimeout(function () {
                                      n.U(!0);
                                  }, t)))
                                : n.oa
                                  ? n.oa(!0)
                                  : n.U(!0);
                        },
                        U: function (n) {
                            var t = this[h],
                                i = t.ya,
                                r = !1;
                            if (!t.Ta && !t.T) {
                                if ((t.i && !s.a.qb(t.i)) || (i && i())) {
                                    if (!t.Hb) {
                                        this.k();
                                        return;
                                    }
                                } else t.Hb = !1;
                                t.Ta = !0;
                                try {
                                    r = this.Vc(n);
                                } finally {
                                    t.Ta = !1;
                                }
                                return t.L || this.k(), r;
                            }
                        },
                        Vc: function (t) {
                            var i = this[h],
                                u = !1,
                                f = i.Ya ? n : !i.L,
                                r = { Mc: this, Oa: i.s, ob: i.L };
                            return (
                                s.l.Xb({ Lc: r, jb: ft, m: this, Va: f }),
                                (i.s = {}),
                                (i.L = 0),
                                (r = this.Uc(i, r)),
                                this.Ua(i.M, r) &&
                                    (i.t || this.notifySubscribers(i.M, "beforeChange"),
                                    (i.M = r),
                                    i.t ? this.Kb() : t && this.notifySubscribers(i.M),
                                    (u = !0)),
                                f && this.notifySubscribers(i.M, "awake"),
                                u
                            );
                        },
                        Uc: function (n, t) {
                            try {
                                var i = n.od;
                                return n.sb ? i.call(n.sb) : i();
                            } finally {
                                s.l.end();
                                t.ob && !n.t && s.a.D(t.Oa, ut);
                                n.da = n.V = !1;
                            }
                        },
                        p: function (n) {
                            var t = this[h];
                            return ((t.V && (n || !t.L)) || (t.t && this.Sa())) && this.U(), t.M;
                        },
                        Wa: function (n) {
                            s.K.fn.Wa.call(this, n);
                            this.Mb = function () {
                                return this[h].da ? this.U() : (this[h].V = !1), this[h].M;
                            };
                            this.oa = function (n) {
                                this.Ob(this[h].M);
                                this[h].V = !0;
                                n && (this[h].da = !0);
                                this.Pb(this);
                            };
                        },
                        k: function () {
                            var n = this[h];
                            !n.t &&
                                n.s &&
                                s.a.D(n.s, function (n, t) {
                                    t.k && t.k();
                                });
                            n.i && n.pb && s.a.G.tc(n.i, n.pb);
                            n.s = null;
                            n.L = 0;
                            n.T = !0;
                            n.da = !1;
                            n.V = !1;
                            n.t = !1;
                            n.i = null;
                        },
                    },
                    et = {
                        ua: function (n) {
                            var i = this,
                                t = i[h],
                                r;
                            !t.T &&
                                t.t &&
                                "change" == n &&
                                ((t.t = !1),
                                t.da || i.Sa()
                                    ? ((t.s = null), (t.L = 0), i.U() && i.Kb())
                                    : ((r = []),
                                      s.a.D(t.s, function (n, t) {
                                          r[t.Ia] = n;
                                      }),
                                      s.a.r(r, function (n, r) {
                                          var f = t.s[n],
                                              u = i.yc(f.$);
                                          u.Ia = r;
                                          u.pa = f.pa;
                                          t.s[n] = u;
                                      })),
                                t.T || i.notifySubscribers(t.M, "awake"));
                        },
                        Ka: function (t) {
                            var i = this[h];
                            i.T ||
                                "change" != t ||
                                this.Ra("change") ||
                                (s.a.D(i.s, function (n, t) {
                                    t.k && ((i.s[n] = { $: t.$, Ia: t.Ia, pa: t.pa }), t.k());
                                }),
                                (i.t = !0),
                                this.notifySubscribers(n, "asleep"));
                        },
                        Pa: function () {
                            var n = this[h];
                            return n.t && (n.da || this.Sa()) && this.U(), s.K.fn.Pa.call(this);
                        },
                    },
                    ot = {
                        ua: function (n) {
                            ("change" != n && "beforeChange" != n) || this.p();
                        },
                    };
                s.a.la && s.a.$a(c, s.K.fn);
                d = s.O.md;
                s.m[d] = s.O;
                c[d] = s.m;
                s.bd = function (n) {
                    return s.Qa(n, s.m);
                };
                s.cd = function (n) {
                    return s.Qa(n, s.m) && n[h] && n[h].Ya;
                };
                s.b("computed", s.m);
                s.b("dependentObservable", s.m);
                s.b("isComputed", s.bd);
                s.b("isPureComputed", s.cd);
                s.b("computed.fn", c);
                s.H(c, "peek", c.p);
                s.H(c, "dispose", c.k);
                s.H(c, "isActive", c.ca);
                s.H(c, "getDependenciesCount", c.Ca);
                s.rc = function (n, t) {
                    return "function" == typeof n
                        ? s.m(n, t, { pure: !0 })
                        : ((n = s.a.extend({}, n)), (n.pure = !0), s.m(n, t));
                };
                s.b("pureComputed", s.rc),
                    (function () {
                        function t(u, f, e) {
                            if (
                                ((e = e || new i()),
                                (u = f(u)),
                                "object" != typeof u ||
                                    null === u ||
                                    u === n ||
                                    u instanceof RegExp ||
                                    u instanceof Date ||
                                    u instanceof String ||
                                    u instanceof Number ||
                                    u instanceof Boolean)
                            )
                                return u;
                            var o = u instanceof Array ? [] : {};
                            return (
                                e.save(u, o),
                                r(u, function (i) {
                                    var r = f(u[i]),
                                        s;
                                    switch (typeof r) {
                                        case "boolean":
                                        case "number":
                                        case "string":
                                        case "function":
                                            o[i] = r;
                                            break;
                                        case "object":
                                        case "undefined":
                                            s = e.get(r);
                                            o[i] = s !== n ? s : t(r, f, e);
                                    }
                                }),
                                o
                            );
                        }
                        function r(n, t) {
                            if (n instanceof Array) {
                                for (var i = 0; i < n.length; i++) t(i);
                                "function" == typeof n.toJSON && t("toJSON");
                            } else for (i in n) t(i);
                        }
                        function i() {
                            this.keys = [];
                            this.Lb = [];
                        }
                        s.Ac = function (n) {
                            if (0 == arguments.length)
                                throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return t(n, function (n) {
                                for (var t = 0; s.I(n) && 10 > t; t++) n = n();
                                return n;
                            });
                        };
                        s.toJSON = function (n, t, i) {
                            return (n = s.Ac(n)), s.a.Gb(n, t, i);
                        };
                        i.prototype = {
                            save: function (n, t) {
                                var i = s.a.o(this.keys, n);
                                0 <= i ? (this.Lb[i] = t) : (this.keys.push(n), this.Lb.push(t));
                            },
                            get: function (t) {
                                return (t = s.a.o(this.keys, t)), 0 <= t ? this.Lb[t] : n;
                            },
                        };
                    })();
                s.b("toJS", s.Ac);
                s.b("toJSON", s.toJSON),
                    (function () {
                        s.j = {
                            u: function (t) {
                                switch (s.a.A(t)) {
                                    case "option":
                                        return !0 === t.__ko__hasDomDataOptionValue__
                                            ? s.a.e.get(t, s.d.options.zb)
                                            : 7 >= s.a.C
                                              ? t.getAttributeNode("value") && t.getAttributeNode("value").specified
                                                  ? t.value
                                                  : t.text
                                              : t.value;
                                    case "select":
                                        return 0 <= t.selectedIndex ? s.j.u(t.options[t.selectedIndex]) : n;
                                    default:
                                        return t.value;
                                }
                            },
                            ja: function (t, i, r) {
                                switch (s.a.A(t)) {
                                    case "option":
                                        switch (typeof i) {
                                            case "string":
                                                s.a.e.set(t, s.d.options.zb, n);
                                                "__ko__hasDomDataOptionValue__" in t &&
                                                    delete t.__ko__hasDomDataOptionValue__;
                                                t.value = i;
                                                break;
                                            default:
                                                s.a.e.set(t, s.d.options.zb, i);
                                                t.__ko__hasDomDataOptionValue__ = !0;
                                                t.value = "number" == typeof i ? i : "";
                                        }
                                        break;
                                    case "select":
                                        ("" === i || null === i) && (i = n);
                                        for (var f = -1, u = 0, o = t.options.length, e; u < o; ++u)
                                            if (((e = s.j.u(t.options[u])), e == i || ("" == e && i === n))) {
                                                f = u;
                                                break;
                                            }
                                        (r || 0 <= f || (i === n && 1 < t.size)) && (t.selectedIndex = f);
                                        break;
                                    default:
                                        (null === i || i === n) && (i = "");
                                        t.value = i;
                                }
                            },
                        };
                    })();
                s.b("selectExtensions", s.j);
                s.b("selectExtensions.readValue", s.j.u);
                s.b("selectExtensions.writeValue", s.j.ja);
                s.h = (function () {
                    function n(n) {
                        var c, u, i;
                        n = s.a.cb(n);
                        123 === n.charCodeAt(0) && (n = n.slice(1, -1));
                        var a = [],
                            h = n.match(t),
                            o,
                            r = [],
                            l = 0;
                        if (h)
                            for (h.push(","), c = 0; (u = h[c]); ++c) {
                                if (((i = u.charCodeAt(0)), 44 === i)) {
                                    if (0 >= l) {
                                        a.push(
                                            o && r.length ? { key: o, value: r.join("") } : { unknown: o || r.join("") }
                                        );
                                        o = l = 0;
                                        r = [];
                                        continue;
                                    }
                                } else if (58 === i) {
                                    if (!l && !o && 1 === r.length) {
                                        o = r.pop();
                                        continue;
                                    }
                                } else
                                    47 === i && c && 1 < u.length
                                        ? (i = h[c - 1].match(f)) &&
                                          !e[i[0]] &&
                                          ((n = n.substr(n.indexOf(u) + 1)),
                                          (h = n.match(t)),
                                          h.push(","),
                                          (c = -1),
                                          (u = "/"))
                                        : 40 === i || 123 === i || 91 === i
                                          ? ++l
                                          : 41 === i || 125 === i || 93 === i
                                            ? --l
                                            : o || r.length || (34 !== i && 39 !== i) || (u = u.slice(1, -1));
                                r.push(u);
                            }
                        return a;
                    }
                    var r = ["true", "false", "null", "undefined"],
                        u = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                        t = RegExp(
                            "\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
                            "g"
                        ),
                        f = /[\])"'A-Za-z0-9_$]+$/,
                        e = { in: 1, return: 1, typeof: 1 },
                        i = {};
                    return {
                        va: [],
                        ga: i,
                        Ab: n,
                        Xa: function (t, f) {
                            function e(n, t) {
                                var a, f;
                                if (!l) {
                                    if (
                                        ((f = s.getBindingHandler(n)),
                                        f && f.preprocess && !(t = f.preprocess(t, n, e)))
                                    )
                                        return;
                                    (f = i[n]) &&
                                        ((a = t),
                                        0 <= s.a.o(r, a)
                                            ? (a = !1)
                                            : ((f = a.match(u)),
                                              (a = null === f ? !1 : f[1] ? "Object(" + f[1] + ")" + f[2] : a)),
                                        (f = a));
                                    f && o.push("'" + n + "':function(_z){" + a + "=_z}");
                                }
                                c && (t = "function(){return " + t + " }");
                                h.push("'" + n + "':" + t);
                            }
                            f = f || {};
                            var h = [],
                                o = [],
                                c = f.valueAccessors,
                                l = f.bindingParams,
                                a = "string" == typeof t ? n(t) : t;
                            return (
                                s.a.r(a, function (n) {
                                    e(n.key || n.unknown, n.value);
                                }),
                                o.length && e("_ko_property_writers", "{" + o.join(",") + " }"),
                                h.join(",")
                            );
                        },
                        fd: function (n, t) {
                            for (var i = 0; i < n.length; i++) if (n[i].key == t) return !0;
                            return !1;
                        },
                        Ga: function (n, t, i, r, u) {
                            n && s.I(n)
                                ? !s.Da(n) || (u && n.p() === r) || n(r)
                                : (n = t.get("_ko_property_writers")) && n[i] && n[i](r);
                        },
                    };
                })();
                s.b("expressionRewriting", s.h);
                s.b("expressionRewriting.bindingRewriteValidators", s.h.va);
                s.b("expressionRewriting.parseObjectLiteral", s.h.Ab);
                s.b("expressionRewriting.preProcessBindings", s.h.Xa);
                s.b("expressionRewriting._twoWayBindings", s.h.ga);
                s.b("jsonExpressionRewriting", s.h);
                s.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", s.h.Xa),
                    (function () {
                        function n(n) {
                            return 8 == n.nodeType && e.test(i ? n.text : n.nodeValue);
                        }
                        function r(n) {
                            return 8 == n.nodeType && o.test(i ? n.text : n.nodeValue);
                        }
                        function u(t, i) {
                            for (var u = t, f = 1, e = []; (u = u.nextSibling); ) {
                                if (r(u) && (f--, 0 === f)) return e;
                                e.push(u);
                                n(u) && f++;
                            }
                            if (!i) throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
                            return null;
                        }
                        function f(n, t) {
                            var i = u(n, t);
                            return i ? (0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling) : null;
                        }
                        var i = t && "<!--test-->" === t.createComment("test").text,
                            e = i ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            o = i ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            h = { ul: !0, ol: !0 };
                        s.f = {
                            aa: {},
                            childNodes: function (t) {
                                return n(t) ? u(t) : t.childNodes;
                            },
                            za: function (t) {
                                if (n(t)) {
                                    t = s.f.childNodes(t);
                                    for (var i = 0, r = t.length; i < r; i++) s.removeNode(t[i]);
                                } else s.a.rb(t);
                            },
                            fa: function (t, i) {
                                if (n(t)) {
                                    s.f.za(t);
                                    for (var u = t.nextSibling, r = 0, f = i.length; r < f; r++)
                                        u.parentNode.insertBefore(i[r], u);
                                } else s.a.fa(t, i);
                            },
                            qc: function (t, i) {
                                n(t)
                                    ? t.parentNode.insertBefore(i, t.nextSibling)
                                    : t.firstChild
                                      ? t.insertBefore(i, t.firstChild)
                                      : t.appendChild(i);
                            },
                            kc: function (t, i, r) {
                                r
                                    ? n(t)
                                        ? t.parentNode.insertBefore(i, r.nextSibling)
                                        : r.nextSibling
                                          ? t.insertBefore(i, r.nextSibling)
                                          : t.appendChild(i)
                                    : s.f.qc(t, i);
                            },
                            firstChild: function (t) {
                                return n(t)
                                    ? !t.nextSibling || r(t.nextSibling)
                                        ? null
                                        : t.nextSibling
                                    : t.firstChild;
                            },
                            nextSibling: function (t) {
                                return n(t) && (t = f(t)), t.nextSibling && r(t.nextSibling) ? null : t.nextSibling;
                            },
                            Yc: n,
                            vd: function (n) {
                                return (n = (i ? n.text : n.nodeValue).match(e)) ? n[1] : null;
                            },
                            oc: function (t) {
                                var o, i, u, e;
                                if (h[s.a.A(t)] && ((o = t.firstChild), o))
                                    do
                                        if (1 === o.nodeType) {
                                            if (((i = o.firstChild), (u = null), i))
                                                do
                                                    u
                                                        ? u.push(i)
                                                        : n(i)
                                                          ? ((e = f(i, !0)), e ? (i = e) : (u = [i]))
                                                          : r(i) && (u = [i]);
                                                while ((i = i.nextSibling));
                                            if ((i = u))
                                                for (u = o.nextSibling, e = 0; e < i.length; e++)
                                                    u ? t.insertBefore(i[e], u) : t.appendChild(i[e]);
                                        }
                                    while ((o = o.nextSibling));
                            },
                        };
                    })();
                s.b("virtualElements", s.f);
                s.b("virtualElements.allowedBindings", s.f.aa);
                s.b("virtualElements.emptyNode", s.f.za);
                s.b("virtualElements.insertAfter", s.f.kc);
                s.b("virtualElements.prepend", s.f.qc);
                s.b("virtualElements.setDomNodeChildren", s.f.fa),
                    (function () {
                        s.S = function () {
                            this.Kc = {};
                        };
                        s.a.extend(s.S.prototype, {
                            nodeHasBindings: function (n) {
                                switch (n.nodeType) {
                                    case 1:
                                        return null != n.getAttribute("data-bind") || s.g.getComponentNameForNode(n);
                                    case 8:
                                        return s.f.Yc(n);
                                    default:
                                        return !1;
                                }
                            },
                            getBindings: function (n, t) {
                                var i = this.getBindingsString(n, t),
                                    i = i ? this.parseBindingsString(i, t, n) : null;
                                return s.g.Rb(i, n, t, !1);
                            },
                            getBindingAccessors: function (n, t) {
                                var i = this.getBindingsString(n, t),
                                    i = i ? this.parseBindingsString(i, t, n, { valueAccessors: !0 }) : null;
                                return s.g.Rb(i, n, t, !0);
                            },
                            getBindingsString: function (n) {
                                switch (n.nodeType) {
                                    case 1:
                                        return n.getAttribute("data-bind");
                                    case 8:
                                        return s.f.vd(n);
                                    default:
                                        return null;
                                }
                            },
                            parseBindingsString: function (n, t, i, r) {
                                var u, f, e, h, c;
                                try {
                                    return (
                                        (u = this.Kc),
                                        (f = n + ((r && r.valueAccessors) || "")),
                                        (e = u[f]) ||
                                            ((c = "with($context){with($data||{}){return{" + s.h.Xa(n, r) + "}}}"),
                                            (h = new Function("$context", "$element", c)),
                                            (e = u[f] = h)),
                                        e(t, i)
                                    );
                                } catch (o) {
                                    throw (
                                        ((o.message =
                                            "Unable to parse bindings.\nBindings value: " +
                                            n +
                                            "\nMessage: " +
                                            o.message),
                                        o)
                                    );
                                }
                            },
                        });
                        s.S.instance = new s.S();
                    })();
                s.b("bindingProvider", s.S),
                    (function () {
                        function v(n) {
                            return function () {
                                return n;
                            };
                        }
                        function u(n) {
                            return n();
                        }
                        function o(n) {
                            return s.a.Ea(s.l.w(n), function (t, i) {
                                return function () {
                                    return n()[i];
                                };
                            });
                        }
                        function y(n, t, i) {
                            return "function" == typeof n ? o(n.bind(null, t, i)) : s.a.Ea(n, v);
                        }
                        function p(n, t) {
                            return o(this.getBindings.bind(this, n, t));
                        }
                        function h(n, t, i) {
                            var r,
                                u = s.f.firstChild(t),
                                f = s.S.instance,
                                e = f.preprocessNode;
                            if (e) {
                                for (; (r = u); ) (u = s.f.nextSibling(r)), e.call(f, r);
                                u = s.f.firstChild(t);
                            }
                            for (; (r = u); ) (u = s.f.nextSibling(r)), c(n, r, i);
                        }
                        function c(n, t, i) {
                            var u = !0,
                                r = 1 === t.nodeType;
                            r && s.f.oc(t);
                            ((r && i) || s.S.instance.nodeHasBindings(t)) &&
                                (u = l(t, null, n, i).shouldBindDescendants);
                            u && !a[s.a.A(t)] && h(n, t, !r);
                        }
                        function w(n) {
                            var i = [],
                                r = {},
                                t = [];
                            return (
                                s.a.D(n, function u(f) {
                                    if (!r[f]) {
                                        var e = s.getBindingHandler(f);
                                        e &&
                                            (e.after &&
                                                (t.push(f),
                                                s.a.r(e.after, function (i) {
                                                    if (n[i]) {
                                                        if (-1 !== s.a.o(t, i))
                                                            throw Error(
                                                                "Cannot combine the following bindings, because they have a cyclic dependency: " +
                                                                    t.join(", ")
                                                            );
                                                        u(i);
                                                    }
                                                }),
                                                t.length--),
                                            i.push({ key: f, jc: e }));
                                        r[f] = !0;
                                    }
                                }),
                                i
                            );
                        }
                        function l(t, i, r, e) {
                            var v = s.a.e.get(t, f),
                                o,
                                l,
                                a,
                                c;
                            if (!i) {
                                if (v) throw Error("You cannot apply bindings multiple times to the same element.");
                                s.a.e.set(t, f, !0);
                            }
                            if ((!v && e && s.xc(t, r), i && "function" != typeof i)) o = i;
                            else {
                                var y = s.S.instance,
                                    b = y.getBindingAccessors || p,
                                    h = s.B(
                                        function () {
                                            return (o = i ? i(r, t) : b.call(y, t, r)) && r.Q && r.Q(), o;
                                        },
                                        null,
                                        { i: t }
                                    );
                                (o && h.ca()) || (h = null);
                            }
                            return (
                                o &&
                                    ((a = h
                                        ? function (n) {
                                              return function () {
                                                  return u(h()[n]);
                                              };
                                          }
                                        : function (n) {
                                              return o[n];
                                          }),
                                    (c = function () {
                                        return s.a.Ea(h ? h() : o, u);
                                    }),
                                    (c.get = function (n) {
                                        return o[n] && u(a(n));
                                    }),
                                    (c.has = function (n) {
                                        return n in o;
                                    }),
                                    (e = w(o)),
                                    s.a.r(e, function (i) {
                                        var e = i.jc.init,
                                            h = i.jc.update,
                                            u = i.key;
                                        if (8 === t.nodeType && !s.f.aa[u])
                                            throw Error("The binding '" + u + "' cannot be used with virtual elements");
                                        try {
                                            "function" == typeof e &&
                                                s.l.w(function () {
                                                    var i = e(t, a(u), c, r.$data, r);
                                                    if (i && i.controlsDescendantBindings) {
                                                        if (l !== n)
                                                            throw Error(
                                                                "Multiple bindings (" +
                                                                    l +
                                                                    " and " +
                                                                    u +
                                                                    ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."
                                                            );
                                                        l = u;
                                                    }
                                                });
                                            "function" == typeof h &&
                                                s.B(
                                                    function () {
                                                        h(t, a(u), c, r.$data, r);
                                                    },
                                                    null,
                                                    { i: t }
                                                );
                                        } catch (f) {
                                            throw (
                                                ((f.message =
                                                    'Unable to process binding "' +
                                                    u +
                                                    ": " +
                                                    o[u] +
                                                    '"\nMessage: ' +
                                                    f.message),
                                                f)
                                            );
                                        }
                                    })),
                                { shouldBindDescendants: l === n }
                            );
                        }
                        function t(n) {
                            return n && n instanceof s.R ? n : new s.R(n);
                        }
                        var a, f, e;
                        s.d = {};
                        a = { script: !0, textarea: !0, template: !0 };
                        s.getBindingHandler = function (n) {
                            return s.d[n];
                        };
                        s.R = function (t, i, r, u, f) {
                            function c() {
                                var f = a ? t() : t,
                                    n = s.a.c(f);
                                return (
                                    i
                                        ? (i.Q && i.Q(), s.a.extend(e, i), (e.Q = o))
                                        : ((e.$parents = []), (e.$root = n), (e.ko = s)),
                                    (e.$rawData = f),
                                    (e.$data = n),
                                    r && (e[r] = n),
                                    u && u(e, i, n),
                                    e.$data
                                );
                            }
                            function l() {
                                return h && !s.a.Tb(h);
                            }
                            var e = this,
                                a = "function" == typeof t && !s.I(t),
                                h,
                                o;
                            f && f.exportDependencies
                                ? c()
                                : ((o = s.B(c, null, { ya: l, i: !0 })),
                                  o.ca() &&
                                      ((e.Q = o),
                                      (o.equalityComparer = null),
                                      (h = []),
                                      (o.Dc = function (t) {
                                          h.push(t);
                                          s.a.G.qa(t, function (t) {
                                              s.a.Na(h, t);
                                              h.length || (o.k(), (e.Q = o = n));
                                          });
                                      })));
                        };
                        s.R.prototype.createChildContext = function (n, t, i, r) {
                            return new s.R(
                                n,
                                this,
                                t,
                                function (n, t) {
                                    n.$parentContext = t;
                                    n.$parent = t.$data;
                                    n.$parents = (t.$parents || []).slice(0);
                                    n.$parents.unshift(n.$parent);
                                    i && i(n);
                                },
                                r
                            );
                        };
                        s.R.prototype.extend = function (n) {
                            return new s.R(this.Q || this.$data, this, null, function (t, i) {
                                t.$rawData = i.$rawData;
                                s.a.extend(t, "function" == typeof n ? n() : n);
                            });
                        };
                        s.R.prototype.ac = function (n, t) {
                            return this.createChildContext(n, t, null, { exportDependencies: !0 });
                        };
                        f = s.a.e.J();
                        e = s.a.e.J();
                        s.xc = function (n, t) {
                            if (2 == arguments.length) s.a.e.set(n, e, t), t.Q && t.Q.Dc(n);
                            else return s.a.e.get(n, e);
                        };
                        s.La = function (n, i, r) {
                            return 1 === n.nodeType && s.f.oc(n), l(n, i, t(r), !0);
                        };
                        s.Ic = function (n, i, r) {
                            return (r = t(r)), s.La(n, y(i, r, n), r);
                        };
                        s.hb = function (n, i) {
                            (1 !== i.nodeType && 8 !== i.nodeType) || h(t(n), i, !0);
                        };
                        s.Ub = function (n, u) {
                            if ((!i && r.jQuery && (i = r.jQuery), u && 1 !== u.nodeType && 8 !== u.nodeType))
                                throw Error(
                                    "ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"
                                );
                            u = u || r.document.body;
                            c(t(n), u, !0);
                        };
                        s.nb = function (t) {
                            switch (t.nodeType) {
                                case 1:
                                case 8:
                                    var i = s.xc(t);
                                    if (i) return i;
                                    if (t.parentNode) return s.nb(t.parentNode);
                            }
                            return n;
                        };
                        s.Oc = function (t) {
                            return (t = s.nb(t)) ? t.$data : n;
                        };
                        s.b("bindingHandlers", s.d);
                        s.b("applyBindings", s.Ub);
                        s.b("applyBindingsToDescendants", s.hb);
                        s.b("applyBindingAccessorsToNode", s.La);
                        s.b("applyBindingsToNode", s.Ic);
                        s.b("contextFor", s.nb);
                        s.b("dataFor", s.Oc);
                    })(),
                    (function (n) {
                        function u(t, u) {
                            var e = i.hasOwnProperty(t) ? i[t] : n,
                                o;
                            e
                                ? e.Y(u)
                                : ((e = i[t] = new s.K()),
                                  e.Y(u),
                                  f(t, function (n, u) {
                                      var f = !(!u || !u.synchronous);
                                      r[t] = { definition: n, dd: f };
                                      delete i[t];
                                      o || f
                                          ? e.notifySubscribers(n)
                                          : s.Z.Za(function () {
                                                e.notifySubscribers(n);
                                            });
                                  }),
                                  (o = !0));
                        }
                        function f(n, i) {
                            t("getConfig", [n], function (r) {
                                r
                                    ? t("loadComponent", [n, r], function (n) {
                                          i(n, r);
                                      })
                                    : i(null, null);
                            });
                        }
                        function t(i, r, u, f) {
                            var e, o, h;
                            if ((f || (f = s.g.loaders.slice(0)), (e = f.shift()), e))
                                if (((o = e[i]), o)) {
                                    if (
                                        ((h = !1),
                                        o.apply(
                                            e,
                                            r.concat(function (n) {
                                                h ? u(null) : null !== n ? u(n) : t(i, r, u, f);
                                            })
                                        ) !== n && ((h = !0), !e.suppressLoaderExceptions))
                                    )
                                        throw Error(
                                            "Component loaders must supply values by invoking the callback, not by returning values synchronously."
                                        );
                                } else t(i, r, u, f);
                            else u(null);
                        }
                        var i = {},
                            r = {};
                        s.g = {
                            get: function (t, i) {
                                var f = r.hasOwnProperty(t) ? r[t] : n;
                                f
                                    ? f.dd
                                        ? s.l.w(function () {
                                              i(f.definition);
                                          })
                                        : s.Z.Za(function () {
                                              i(f.definition);
                                          })
                                    : u(t, i);
                            },
                            $b: function (n) {
                                delete r[n];
                            },
                            Nb: t,
                        };
                        s.g.loaders = [];
                        s.b("components", s.g);
                        s.b("components.get", s.g.get);
                        s.b("components.clearCachedDefinition", s.g.$b);
                    })(),
                    (function () {
                        function l(n, t, r, f) {
                            function e() {
                                0 == --c && f(o);
                            }
                            var o = {},
                                c = 2,
                                h = r.template;
                            r = r.viewModel;
                            h
                                ? u(t, h, function (t) {
                                      s.g.Nb("loadTemplate", [n, t], function (n) {
                                          o.template = n;
                                          e();
                                      });
                                  })
                                : e();
                            r
                                ? u(t, r, function (t) {
                                      s.g.Nb("loadViewModel", [n, t], function (n) {
                                          o[i] = n;
                                          e();
                                      });
                                  })
                                : e();
                        }
                        function e(n, t, r) {
                            if ("function" == typeof t)
                                r(function (n) {
                                    return new t(n);
                                });
                            else if ("function" == typeof t[i]) r(t[i]);
                            else if ("instance" in t) {
                                var u = t.instance;
                                r(function () {
                                    return u;
                                });
                            } else "viewModel" in t ? e(n, t.viewModel, r) : n("Unknown viewModel value: " + t);
                        }
                        function h(n) {
                            switch (s.a.A(n)) {
                                case "script":
                                    return s.a.na(n.text);
                                case "textarea":
                                    return s.a.na(n.value);
                                case "template":
                                    if (c(n.content)) return s.a.wa(n.content.childNodes);
                            }
                            return s.a.wa(n.childNodes);
                        }
                        function c(n) {
                            return r.DocumentFragment ? n instanceof DocumentFragment : n && 11 === n.nodeType;
                        }
                        function u(n, t, i) {
                            "string" == typeof t.require
                                ? o || r.require
                                    ? (o || r.require)([t.require], i)
                                    : n("Uses require, but no AMD loader is present")
                                : i(t);
                        }
                        function f(n) {
                            return function (t) {
                                throw Error("Component '" + n + "': " + t);
                            };
                        }
                        var n = {},
                            i;
                        s.g.register = function (t, i) {
                            if (!i) throw Error("Invalid configuration for " + t);
                            if (s.g.wb(t)) throw Error("Component " + t + " is already registered");
                            n[t] = i;
                        };
                        s.g.wb = function (t) {
                            return n.hasOwnProperty(t);
                        };
                        s.g.ud = function (t) {
                            delete n[t];
                            s.g.$b(t);
                        };
                        s.g.cc = {
                            getConfig: function (t, i) {
                                i(n.hasOwnProperty(t) ? n[t] : null);
                            },
                            loadComponent: function (n, t, i) {
                                var r = f(n);
                                u(r, t, function (t) {
                                    l(n, r, t, i);
                                });
                            },
                            loadTemplate: function (n, i, u) {
                                if (((n = f(n)), "string" == typeof i)) u(s.a.na(i));
                                else if (i instanceof Array) u(i);
                                else if (c(i)) u(s.a.W(i.childNodes));
                                else if (i.element)
                                    if (
                                        ((i = i.element),
                                        r.HTMLElement ? i instanceof HTMLElement : i && i.tagName && 1 === i.nodeType)
                                    )
                                        u(h(i));
                                    else if ("string" == typeof i) {
                                        var e = t.getElementById(i);
                                        e ? u(h(e)) : n("Cannot find element with ID " + i);
                                    } else n("Unknown element type: " + i);
                                else n("Unknown template value: " + i);
                            },
                            loadViewModel: function (n, t, i) {
                                e(f(n), t, i);
                            },
                        };
                        i = "createViewModel";
                        s.b("components.register", s.g.register);
                        s.b("components.isRegistered", s.g.wb);
                        s.b("components.unregister", s.g.ud);
                        s.b("components.defaultLoader", s.g.cc);
                        s.g.loaders.push(s.g.cc);
                        s.g.Ec = n;
                    })(),
                    (function () {
                        function n(n, t) {
                            var r = n.getAttribute("params");
                            if (r) {
                                var r = i.parseBindingsString(r, t, n, { valueAccessors: !0, bindingParams: !0 }),
                                    r = s.a.Ea(r, function (t) {
                                        return s.m(t, null, { i: n });
                                    }),
                                    u = s.a.Ea(r, function (t) {
                                        var i = t.p();
                                        return t.ca()
                                            ? s.m({
                                                  read: function () {
                                                      return s.a.c(t());
                                                  },
                                                  write:
                                                      s.Da(i) &&
                                                      function (n) {
                                                          t()(n);
                                                      },
                                                  i: n,
                                              })
                                            : i;
                                    });
                                return u.hasOwnProperty("$raw") || (u.$raw = r), u;
                            }
                            return { $raw: {} };
                        }
                        s.g.getComponentNameForNode = function (n) {
                            var t = s.a.A(n);
                            if (
                                s.g.wb(t) &&
                                (-1 != t.indexOf("-") ||
                                    "[object HTMLUnknownElement]" == "" + n ||
                                    (8 >= s.a.C && n.tagName === t))
                            )
                                return t;
                        };
                        s.g.Rb = function (t, i, r, u) {
                            var f, e;
                            if (1 === i.nodeType && ((f = s.g.getComponentNameForNode(i)), f)) {
                                if (((t = t || {}), t.component))
                                    throw Error(
                                        'Cannot use the "component" binding on a custom element matching a component'
                                    );
                                e = { name: f, params: n(i, r) };
                                t.component = u
                                    ? function () {
                                          return e;
                                      }
                                    : e;
                            }
                            return t;
                        };
                        var i = new s.S();
                        9 > s.a.C &&
                            ((s.g.register = (function (n) {
                                return function (i) {
                                    return t.createElement(i), n.apply(this, arguments);
                                };
                            })(s.g.register)),
                            (t.createDocumentFragment = (function (n) {
                                return function () {
                                    var i = n(),
                                        r = s.g.Ec,
                                        t;
                                    for (t in r) r.hasOwnProperty(t) && i.createElement(t);
                                    return i;
                                };
                            })(t.createDocumentFragment)));
                    })(),
                    (function (n) {
                        function t(n, t, i) {
                            if (((t = t.template), !t)) throw Error("Component '" + n + "' has no template");
                            n = s.a.wa(t);
                            s.f.fa(i, n);
                        }
                        function i(n, t, i, r) {
                            var u = n.createViewModel;
                            return u ? u.call(n, r, { element: t, templateNodes: i }) : r;
                        }
                        var r = 0;
                        s.d.component = {
                            init: function (u, f, e, o, h) {
                                function a() {
                                    var n = c && c.dispose;
                                    "function" == typeof n && n.call(c);
                                    l = c = null;
                                }
                                var c,
                                    l,
                                    v = s.a.W(s.f.childNodes(u));
                                return (
                                    s.a.G.qa(u, a),
                                    s.m(
                                        function () {
                                            var o = s.a.c(f()),
                                                e,
                                                y,
                                                p;
                                            if (
                                                ("string" == typeof o
                                                    ? (e = o)
                                                    : ((e = s.a.c(o.name)), (y = s.a.c(o.params))),
                                                !e)
                                            )
                                                throw Error("No component name specified");
                                            p = l = ++r;
                                            s.g.get(e, function (r) {
                                                if (l === p) {
                                                    if ((a(), !r)) throw Error("Unknown component '" + e + "'");
                                                    t(e, r, u);
                                                    var f = i(r, u, v, y);
                                                    r = h.createChildContext(f, n, function (n) {
                                                        n.$component = f;
                                                        n.$componentTemplateNodes = v;
                                                    });
                                                    c = f;
                                                    s.hb(r, u);
                                                }
                                            });
                                        },
                                        null,
                                        { i: u }
                                    ),
                                    { controlsDescendantBindings: !0 }
                                );
                            },
                        };
                        s.f.aa.component = !0;
                    })();
                g = { class: "className", for: "htmlFor" };
                (s.d.attr = {
                    update: function (t, i) {
                        var r = s.a.c(i()) || {};
                        s.a.D(r, function (i, r) {
                            r = s.a.c(r);
                            var u = !1 === r || null === r || r === n;
                            u && t.removeAttribute(i);
                            8 >= s.a.C && i in g
                                ? ((i = g[i]), u ? t.removeAttribute(i) : (t[i] = r))
                                : u || t.setAttribute(i, r.toString());
                            "name" === i && s.a.vc(t, u ? "" : r.toString());
                        });
                    },
                }),
                    (function () {
                        s.d.checked = {
                            after: ["value", "attr"],
                            init: function (t, i, r) {
                                function l() {
                                    var l = t.checked,
                                        o = y ? f() : l,
                                        n,
                                        h;
                                    s.xa.Va() ||
                                        (e && !l) ||
                                        ((n = s.l.w(i)),
                                        u
                                            ? ((h = a ? n.p() : n),
                                              c !== o
                                                  ? (l && (s.a.ra(h, o, !0), s.a.ra(h, c, !1)), (c = o))
                                                  : s.a.ra(h, o, l),
                                              a && s.Da(n) && n(h))
                                            : s.h.Ga(n, r, "checked", o, !0));
                                }
                                function v() {
                                    var n = s.a.c(i());
                                    t.checked = u ? 0 <= s.a.o(n, f()) : h ? n : f() === n;
                                }
                                var f = s.rc(function () {
                                        return r.has("checkedValue")
                                            ? s.a.c(r.get("checkedValue"))
                                            : r.has("value")
                                              ? s.a.c(r.get("value"))
                                              : t.value;
                                    }),
                                    h = "checkbox" == t.type,
                                    e = "radio" == t.type;
                                if (h || e) {
                                    var o = i(),
                                        u = h && s.a.c(o) instanceof Array,
                                        a = !(u && o.push && o.splice),
                                        c = u ? f() : n,
                                        y = e || u;
                                    e &&
                                        !t.name &&
                                        s.d.uniqueName.init(t, function () {
                                            return !0;
                                        });
                                    s.m(l, null, { i: t });
                                    s.a.q(t, "click", l);
                                    s.m(v, null, { i: t });
                                    o = n;
                                }
                            },
                        };
                        s.h.ga.checked = !0;
                        s.d.checkedValue = {
                            update: function (n, t) {
                                n.value = s.a.c(t());
                            },
                        };
                    })();
                s.d.css = {
                    update: function (n, t) {
                        var i = s.a.c(t());
                        null !== i && "object" == typeof i
                            ? s.a.D(i, function (t, i) {
                                  i = s.a.c(i);
                                  s.a.fb(n, t, i);
                              })
                            : ((i = s.a.cb(String(i || ""))),
                              s.a.fb(n, n.__ko__cssValue, !1),
                              (n.__ko__cssValue = i),
                              s.a.fb(n, i, !0));
                    },
                };
                s.d.enable = {
                    update: function (n, t) {
                        var i = s.a.c(t());
                        i && n.disabled ? n.removeAttribute("disabled") : i || n.disabled || (n.disabled = !0);
                    },
                };
                s.d.disable = {
                    update: function (n, t) {
                        s.d.enable.update(n, function () {
                            return !s.a.c(t());
                        });
                    },
                };
                s.d.event = {
                    init: function (n, t, i, r, u) {
                        var f = t() || {};
                        s.a.D(f, function (f) {
                            "string" == typeof f &&
                                s.a.q(n, f, function (n) {
                                    var o,
                                        h = t()[f],
                                        e;
                                    if (h) {
                                        try {
                                            e = s.a.W(arguments);
                                            r = u.$data;
                                            e.unshift(r);
                                            o = h.apply(r, e);
                                        } finally {
                                            !0 !== o && (n.preventDefault ? n.preventDefault() : (n.returnValue = !1));
                                        }
                                        !1 === i.get(f + "Bubble") &&
                                            ((n.cancelBubble = !0), n.stopPropagation && n.stopPropagation());
                                    }
                                });
                        });
                    },
                };
                s.d.foreach = {
                    mc: function (n) {
                        return function () {
                            var i = n(),
                                t = s.a.Bb(i);
                            return !t || "number" == typeof t.length
                                ? { foreach: i, templateEngine: s.X.vb }
                                : (s.a.c(i),
                                  {
                                      foreach: t.data,
                                      as: t.as,
                                      includeDestroyed: t.includeDestroyed,
                                      afterAdd: t.afterAdd,
                                      beforeRemove: t.beforeRemove,
                                      afterRender: t.afterRender,
                                      beforeMove: t.beforeMove,
                                      afterMove: t.afterMove,
                                      templateEngine: s.X.vb,
                                  });
                        };
                    },
                    init: function (n, t) {
                        return s.d.template.init(n, s.d.foreach.mc(t));
                    },
                    update: function (n, t, i, r, u) {
                        return s.d.template.update(n, s.d.foreach.mc(t), i, r, u);
                    },
                };
                s.h.va.foreach = !1;
                s.f.aa.foreach = !0;
                s.d.hasfocus = {
                    init: function (n, t, i) {
                        function r(r) {
                            var u, f;
                            if (((n.__ko_hasfocusUpdating = !0), (u = n.ownerDocument), "activeElement" in u)) {
                                try {
                                    f = u.activeElement;
                                } catch (e) {
                                    f = u.body;
                                }
                                r = f === n;
                            }
                            u = t();
                            s.h.Ga(u, i, "hasfocus", r, !0);
                            n.__ko_hasfocusLastValue = r;
                            n.__ko_hasfocusUpdating = !1;
                        }
                        var u = r.bind(null, !0),
                            f = r.bind(null, !1);
                        s.a.q(n, "focus", u);
                        s.a.q(n, "focusin", u);
                        s.a.q(n, "blur", f);
                        s.a.q(n, "focusout", f);
                    },
                    update: function (n, t) {
                        var i = !!s.a.c(t());
                        n.__ko_hasfocusUpdating ||
                            n.__ko_hasfocusLastValue === i ||
                            (i ? n.focus() : n.blur(),
                            !i && n.__ko_hasfocusLastValue && n.ownerDocument.body.focus(),
                            s.l.w(s.a.Fa, null, [n, i ? "focusin" : "focusout"]));
                    },
                };
                s.h.ga.hasfocus = !0;
                s.d.hasFocus = s.d.hasfocus;
                s.h.ga.hasFocus = !0;
                s.d.html = {
                    init: function () {
                        return { controlsDescendantBindings: !0 };
                    },
                    update: function (n, t) {
                        s.a.Eb(n, t());
                    },
                };
                k("if");
                k("ifnot", !1, !0);
                k("with", !0, !1, function (n, t) {
                    return n.ac(t);
                });
                w = {};
                s.d.options = {
                    init: function (n) {
                        if ("select" !== s.a.A(n)) throw Error("options binding applies only to SELECT elements");
                        for (; 0 < n.length; ) n.remove(0);
                        return { controlsDescendantBindings: !0 };
                    },
                    update: function (t, i, r) {
                        function a() {
                            return s.a.Ma(t.options, function (n) {
                                return n.selected;
                            });
                        }
                        function v(n, t, i) {
                            var r = typeof t;
                            return "function" == r ? t(n) : "string" == r ? n[t] : i;
                        }
                        function y(n, i) {
                            if (o && e) s.j.ja(t, s.a.c(r.get("value")), !0);
                            else if (f.length) {
                                var u = 0 <= s.a.o(f, s.j.u(i[0]));
                                s.a.wc(i[0], u);
                                o && !u && s.l.w(s.a.Fa, null, [t, "change"]);
                            }
                        }
                        var h = t.multiple,
                            c = 0 != t.length && h ? t.scrollTop : null,
                            u = s.a.c(i()),
                            e = r.get("valueAllowUnset") && r.has("value"),
                            p = r.get("optionsIncludeDestroyed"),
                            l,
                            f,
                            o;
                        i = {};
                        f = [];
                        e ||
                            (h
                                ? (f = s.a.ib(a(), s.j.u))
                                : 0 <= t.selectedIndex && f.push(s.j.u(t.options[t.selectedIndex])));
                        u &&
                            ("undefined" == typeof u.length && (u = [u]),
                            (l = s.a.Ma(u, function (t) {
                                return p || t === n || null === t || !s.a.c(t._destroy);
                            })),
                            r.has("optionsCaption") &&
                                ((u = s.a.c(r.get("optionsCaption"))), null !== u && u !== n && l.unshift(w)));
                        o = !1;
                        i.beforeRemove = function (n) {
                            t.removeChild(n);
                        };
                        u = y;
                        r.has("optionsAfterRender") &&
                            "function" == typeof r.get("optionsAfterRender") &&
                            (u = function (t, i) {
                                y(0, i);
                                s.l.w(r.get("optionsAfterRender"), null, [i[0], t !== w ? t : n]);
                            });
                        s.a.Db(
                            t,
                            l,
                            function (i, u, h) {
                                return (
                                    h.length && ((f = !e && h[0].selected ? [s.j.u(h[0])] : []), (o = !0)),
                                    (u = t.ownerDocument.createElement("option")),
                                    i === w
                                        ? (s.a.bb(u, r.get("optionsCaption")), s.j.ja(u, n))
                                        : ((h = v(i, r.get("optionsValue"), i)),
                                          s.j.ja(u, s.a.c(h)),
                                          (i = v(i, r.get("optionsText"), h)),
                                          s.a.bb(u, i)),
                                    [u]
                                );
                            },
                            i,
                            u
                        );
                        s.l.w(function () {
                            e
                                ? s.j.ja(t, s.a.c(r.get("value")), !0)
                                : (h
                                      ? f.length && a().length < f.length
                                      : f.length && 0 <= t.selectedIndex
                                        ? s.j.u(t.options[t.selectedIndex]) !== f[0]
                                        : f.length || 0 <= t.selectedIndex) && s.a.Fa(t, "change");
                        });
                        s.a.Sc(t);
                        c && 20 < Math.abs(c - t.scrollTop) && (t.scrollTop = c);
                    },
                };
                s.d.options.zb = s.a.e.J();
                s.d.selectedOptions = {
                    after: ["options", "foreach"],
                    init: function (n, t, i) {
                        s.a.q(n, "change", function () {
                            var u = t(),
                                r = [];
                            s.a.r(n.getElementsByTagName("option"), function (n) {
                                n.selected && r.push(s.j.u(n));
                            });
                            s.h.Ga(u, i, "selectedOptions", r);
                        });
                    },
                    update: function (n, t) {
                        if ("select" != s.a.A(n)) throw Error("values binding applies only to SELECT elements");
                        var i = s.a.c(t()),
                            r = n.scrollTop;
                        i &&
                            "number" == typeof i.length &&
                            s.a.r(n.getElementsByTagName("option"), function (n) {
                                var t = 0 <= s.a.o(i, s.j.u(n));
                                n.selected != t && s.a.wc(n, t);
                            });
                        n.scrollTop = r;
                    },
                };
                s.h.ga.selectedOptions = !0;
                s.d.style = {
                    update: function (t, i) {
                        var r = s.a.c(i() || {});
                        s.a.D(r, function (i, r) {
                            r = s.a.c(r);
                            (null === r || r === n || !1 === r) && (r = "");
                            t.style[i] = r;
                        });
                    },
                };
                s.d.submit = {
                    init: function (n, t, i, r, u) {
                        if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
                        s.a.q(n, "submit", function (i) {
                            var r,
                                f = t();
                            try {
                                r = f.call(u.$data, n);
                            } finally {
                                !0 !== r && (i.preventDefault ? i.preventDefault() : (i.returnValue = !1));
                            }
                        });
                    },
                };
                s.d.text = {
                    init: function () {
                        return { controlsDescendantBindings: !0 };
                    },
                    update: function (n, t) {
                        s.a.bb(n, t());
                    },
                };
                (s.f.aa.text = !0),
                    (function () {
                        if (r && r.navigator)
                            var t = function (n) {
                                    if (n) return parseFloat(n[1]);
                                },
                                e = r.opera && r.opera.version && parseInt(r.opera.version()),
                                i = r.navigator.userAgent,
                                o = t(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                                h = t(i.match(/Firefox\/([^ ]*)/));
                        if (10 > s.a.C)
                            var u = s.a.e.J(),
                                f = s.a.e.J(),
                                c = function (n) {
                                    var t = this.activeElement;
                                    (t = t && s.a.e.get(t, f)) && t(n);
                                },
                                l = function (n, t) {
                                    var i = n.ownerDocument;
                                    s.a.e.get(i, u) || (s.a.e.set(i, u, !0), s.a.q(i, "selectionchange", c));
                                    s.a.e.set(n, f, t);
                                };
                        s.d.textInput = {
                            init: function (t, i, r) {
                                function u(n, i) {
                                    s.a.q(t, n, i);
                                }
                                function p() {
                                    var r = s.a.c(i());
                                    (null === r || r === n) && (r = "");
                                    v !== n && r === v
                                        ? s.a.setTimeout(p, 4)
                                        : t.value !== r && ((y = r), (t.value = r));
                                }
                                function c() {
                                    a || ((v = t.value), (a = s.a.setTimeout(f, 4)));
                                }
                                function f() {
                                    clearTimeout(a);
                                    v = a = n;
                                    var u = t.value;
                                    y !== u && ((y = u), s.h.Ga(i(), r, "textInput", u));
                                }
                                var y = t.value,
                                    a,
                                    v,
                                    w = 9 == s.a.C ? c : f;
                                10 > s.a.C
                                    ? (u("propertychange", function (n) {
                                          "value" === n.propertyName && w(n);
                                      }),
                                      8 == s.a.C && (u("keyup", f), u("keydown", f)),
                                      8 <= s.a.C && (l(t, w), u("dragend", c)))
                                    : (u("input", f),
                                      5 > o && "textarea" === s.a.A(t)
                                          ? (u("keydown", c), u("paste", c), u("cut", c))
                                          : 11 > e
                                            ? u("keydown", c)
                                            : 4 > h && (u("DOMAutoComplete", f), u("dragdrop", f), u("drop", f)));
                                u("change", f);
                                s.m(p, null, { i: t });
                            },
                        };
                        s.h.ga.textInput = !0;
                        s.d.textinput = {
                            preprocess: function (n, t, i) {
                                i("textInput", n);
                            },
                        };
                    })();
                s.d.uniqueName = {
                    init: function (n, t) {
                        if (t()) {
                            var i = "ko_unique_" + ++s.d.uniqueName.Nc;
                            s.a.vc(n, i);
                        }
                    },
                };
                s.d.uniqueName.Nc = 0;
                s.d.value = {
                    after: ["options", "foreach"],
                    init: function (n, t, i) {
                        var o, h;
                        if ("input" != n.tagName.toLowerCase() || ("checkbox" != n.type && "radio" != n.type)) {
                            var r = ["change"],
                                u = i.get("valueUpdate"),
                                f = !1,
                                e = null;
                            u && ("string" == typeof u && (u = [u]), s.a.ta(r, u), (r = s.a.Wb(r)));
                            o = function () {
                                e = null;
                                f = !1;
                                var r = t(),
                                    u = s.j.u(n);
                                s.h.Ga(r, i, "value", u);
                            };
                            !s.a.C ||
                                "input" != n.tagName.toLowerCase() ||
                                "text" != n.type ||
                                "off" == n.autocomplete ||
                                (n.form && "off" == n.form.autocomplete) ||
                                -1 != s.a.o(r, "propertychange") ||
                                (s.a.q(n, "propertychange", function () {
                                    f = !0;
                                }),
                                s.a.q(n, "focus", function () {
                                    f = !1;
                                }),
                                s.a.q(n, "blur", function () {
                                    f && o();
                                }));
                            s.a.r(r, function (t) {
                                var i = o;
                                s.a.sd(t, "after") &&
                                    ((i = function () {
                                        e = s.j.u(n);
                                        s.a.setTimeout(o, 0);
                                    }),
                                    (t = t.substring(5)));
                                s.a.q(n, t, i);
                            });
                            h = function () {
                                var r = s.a.c(t()),
                                    u = s.j.u(n),
                                    f;
                                null !== e && r === e
                                    ? s.a.setTimeout(h, 0)
                                    : r !== u &&
                                      ("select" === s.a.A(n)
                                          ? ((f = i.get("valueAllowUnset")),
                                            (u = function () {
                                                s.j.ja(n, r, f);
                                            }),
                                            u(),
                                            f || r === s.j.u(n)
                                                ? s.a.setTimeout(u, 0)
                                                : s.l.w(s.a.Fa, null, [n, "change"]))
                                          : s.j.ja(n, r));
                            };
                            s.m(h, null, { i: n });
                        } else s.La(n, { checkedValue: t });
                    },
                    update: function () {},
                };
                s.h.ga.value = !0;
                (s.d.visible = {
                    update: function (n, t) {
                        var i = s.a.c(t()),
                            r = "none" != n.style.display;
                        i && !r ? (n.style.display = "") : !i && r && (n.style.display = "none");
                    },
                }),
                    (function (n) {
                        s.d[n] = {
                            init: function (t, i, r, u, f) {
                                return s.d.event.init.call(
                                    this,
                                    t,
                                    function () {
                                        var t = {};
                                        return (t[n] = i()), t;
                                    },
                                    r,
                                    u,
                                    f
                                );
                            },
                        };
                    })("click");
                s.P = function () {};
                s.P.prototype.renderTemplateSource = function () {
                    throw Error("Override renderTemplateSource");
                };
                s.P.prototype.createJavaScriptEvaluatorBlock = function () {
                    throw Error("Override createJavaScriptEvaluatorBlock");
                };
                s.P.prototype.makeTemplateSource = function (n, i) {
                    if ("string" == typeof n) {
                        i = i || t;
                        var r = i.getElementById(n);
                        if (!r) throw Error("Cannot find template with ID " + n);
                        return new s.v.n(r);
                    }
                    if (1 == n.nodeType || 8 == n.nodeType) return new s.v.sa(n);
                    throw Error("Unknown template type: " + n);
                };
                s.P.prototype.renderTemplate = function (n, t, i, r) {
                    return (n = this.makeTemplateSource(n, r)), this.renderTemplateSource(n, t, i, r);
                };
                s.P.prototype.isTemplateRewritten = function (n, t) {
                    return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(n, t).data("isRewritten");
                };
                s.P.prototype.rewriteTemplate = function (n, t, i) {
                    n = this.makeTemplateSource(n, i);
                    t = t(n.text());
                    n.text(t);
                    n.data("isRewritten", !0);
                };
                s.b("templateEngine", s.P);
                s.Ib = (function () {
                    function n(n, t, i, r) {
                        var o, f, u, e;
                        for (n = s.h.Ab(n), o = s.h.va, f = 0; f < n.length; f++)
                            if (((u = n[f].key), o.hasOwnProperty(u)))
                                if (((e = o[u]), "function" == typeof e)) {
                                    if ((u = e(n[f].value))) throw Error(u);
                                } else if (!e)
                                    throw Error(
                                        "This template engine does not support the '" +
                                            u +
                                            "' binding within its templates"
                                    );
                        return (
                            (i =
                                "ko.__tr_ambtns(function($context,$element){return(function(){return{ " +
                                s.h.Xa(n, { valueAccessors: !0 }) +
                                " } })()},'" +
                                i.toLowerCase() +
                                "')"),
                            r.createJavaScriptEvaluatorBlock(i) + t
                        );
                    }
                    var t =
                            /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                        i = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                    return {
                        Tc: function (n, t, i) {
                            t.isTemplateRewritten(n, i) ||
                                t.rewriteTemplate(
                                    n,
                                    function (n) {
                                        return s.Ib.jd(n, t);
                                    },
                                    i
                                );
                        },
                        jd: function (r, u) {
                            return r
                                .replace(t, function (t, i, r, f, e) {
                                    return n(e, i, r, u);
                                })
                                .replace(i, function (t, i) {
                                    return n(i, "<!-- ko -->", "#comment", u);
                                });
                        },
                        Jc: function (n, t) {
                            return s.N.yb(function (i, r) {
                                var u = i.nextSibling;
                                u && u.nodeName.toLowerCase() === t && s.La(u, n, r);
                            });
                        },
                    };
                })();
                s.b("__tr_ambtns", s.Ib.Jc),
                    (function () {
                        var i, t;
                        s.v = {};
                        s.v.n = function (n) {
                            if ((this.n = n)) {
                                var t = s.a.A(n);
                                this.eb =
                                    "script" === t
                                        ? 1
                                        : "textarea" === t
                                          ? 2
                                          : "template" == t && n.content && 11 === n.content.nodeType
                                            ? 3
                                            : 4;
                            }
                        };
                        s.v.n.prototype.text = function () {
                            var n = 1 === this.eb ? "text" : 2 === this.eb ? "value" : "innerHTML",
                                t;
                            if (0 == arguments.length) return this.n[n];
                            t = arguments[0];
                            "innerHTML" === n ? s.a.Eb(this.n, t) : (this.n[n] = t);
                        };
                        i = s.a.e.J() + "_";
                        s.v.n.prototype.data = function (n) {
                            if (1 === arguments.length) return s.a.e.get(this.n, i + n);
                            s.a.e.set(this.n, i + n, arguments[1]);
                        };
                        t = s.a.e.J();
                        s.v.n.prototype.nodes = function () {
                            var i = this.n;
                            if (0 == arguments.length)
                                return (
                                    (s.a.e.get(i, t) || {}).mb || (3 === this.eb ? i.content : 4 === this.eb ? i : n)
                                );
                            s.a.e.set(i, t, { mb: arguments[0] });
                        };
                        s.v.sa = function (n) {
                            this.n = n;
                        };
                        s.v.sa.prototype = new s.v.n();
                        s.v.sa.prototype.text = function () {
                            if (0 == arguments.length) {
                                var i = s.a.e.get(this.n, t) || {};
                                return i.Jb === n && i.mb && (i.Jb = i.mb.innerHTML), i.Jb;
                            }
                            s.a.e.set(this.n, t, { Jb: arguments[0] });
                        };
                        s.b("templateSources", s.v);
                        s.b("templateSources.domElement", s.v.n);
                        s.b("templateSources.anonymousTemplate", s.v.sa);
                    })(),
                    (function () {
                        function t(n, t, i) {
                            var r;
                            for (t = s.f.nextSibling(t); n && (r = n) !== t; ) (n = s.f.nextSibling(r)), i(r, n);
                        }
                        function f(n, i) {
                            if (n.length) {
                                var r = n[0],
                                    u = n[n.length - 1],
                                    f = r.parentNode,
                                    e = s.S.instance,
                                    o = e.preprocessNode;
                                if (o) {
                                    if (
                                        (t(r, u, function (n, t) {
                                            var f = n.previousSibling,
                                                i = o.call(e, n);
                                            i && (n === r && (r = i[0] || t), n === u && (u = i[i.length - 1] || f));
                                        }),
                                        (n.length = 0),
                                        !r)
                                    )
                                        return;
                                    r === u ? n.push(r) : (n.push(r, u), s.a.Ba(n, f));
                                }
                                t(r, u, function (n) {
                                    (1 !== n.nodeType && 8 !== n.nodeType) || s.Ub(i, n);
                                });
                                t(r, u, function (n) {
                                    (1 !== n.nodeType && 8 !== n.nodeType) || s.N.Cc(n, [i]);
                                });
                                s.a.Ba(n, f);
                            }
                        }
                        function i(n) {
                            return n.nodeType ? n : 0 < n.length ? n[0] : null;
                        }
                        function e(n, t, u, e, o) {
                            o = o || {};
                            var h = ((n && i(n)) || u || {}).ownerDocument,
                                c = o.templateEngine || r;
                            if (
                                (s.Ib.Tc(u, c, h),
                                (u = c.renderTemplate(u, e, o, h)),
                                "number" != typeof u.length || (0 < u.length && "number" != typeof u[0].nodeType))
                            )
                                throw Error("Template engine must return an array of DOM nodes");
                            h = !1;
                            switch (t) {
                                case "replaceChildren":
                                    s.f.fa(n, u);
                                    h = !0;
                                    break;
                                case "replaceNode":
                                    s.a.uc(n, u);
                                    h = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + t);
                            }
                            return h && (f(u, e), o.afterRender && s.l.w(o.afterRender, null, [u, e.$data])), u;
                        }
                        function o(n, t, i) {
                            return s.I(n) ? n() : "function" == typeof n ? n(t, i) : n;
                        }
                        var r, u;
                        s.Fb = function (t) {
                            if (t != n && !(t instanceof s.P))
                                throw Error("templateEngine must inherit from ko.templateEngine");
                            r = t;
                        };
                        s.Cb = function (t, u, f, h, c) {
                            if (((f = f || {}), (f.templateEngine || r) == n))
                                throw Error("Set a template engine before calling renderTemplate");
                            if (((c = c || "replaceChildren"), h)) {
                                var l = i(h);
                                return s.B(
                                    function () {
                                        var n =
                                                u && u instanceof s.R
                                                    ? u
                                                    : new s.R(u, null, null, null, { exportDependencies: !0 }),
                                            r = o(t, n.$data, n),
                                            n = e(h, c, r, n, f);
                                        "replaceNode" == c && ((h = n), (l = i(h)));
                                    },
                                    null,
                                    {
                                        ya: function () {
                                            return !l || !s.a.qb(l);
                                        },
                                        i: l && "replaceNode" == c ? l.parentNode : l,
                                    }
                                );
                            }
                            return s.N.yb(function (n) {
                                s.Cb(t, u, f, n, "replaceNode");
                            });
                        };
                        s.pd = function (t, i, r, u, h) {
                            function l(n, t) {
                                f(t, c);
                                r.afterRender && r.afterRender(t, n);
                                c = null;
                            }
                            function a(n, i) {
                                c = h.createChildContext(n, r.as, function (n) {
                                    n.$index = i;
                                });
                                var u = o(t, n, c);
                                return e(null, "ignoreTargetNode", u, c, r);
                            }
                            var c;
                            return s.B(
                                function () {
                                    var t = s.a.c(i) || [];
                                    "undefined" == typeof t.length && (t = [t]);
                                    t = s.a.Ma(t, function (t) {
                                        return r.includeDestroyed || t === n || null === t || !s.a.c(t._destroy);
                                    });
                                    s.l.w(s.a.Db, null, [u, t, a, r, l]);
                                },
                                null,
                                { i: u }
                            );
                        };
                        u = s.a.e.J();
                        s.d.template = {
                            init: function (n, t) {
                                var i = s.a.c(t());
                                if ("string" == typeof i || i.name) s.f.za(n);
                                else {
                                    if ("nodes" in i) {
                                        if (((i = i.nodes || []), s.I(i)))
                                            throw Error('The "nodes" option must be a plain, non-observable array.');
                                    } else i = s.f.childNodes(n);
                                    i = s.a.nc(i);
                                    new s.v.sa(n).nodes(i);
                                }
                                return { controlsDescendantBindings: !0 };
                            },
                            update: function (t, i, r, f, e) {
                                var o = i();
                                i = s.a.c(o);
                                r = !0;
                                f = null;
                                "string" == typeof i
                                    ? (i = {})
                                    : ((o = i.name),
                                      "if" in i && (r = s.a.c(i["if"])),
                                      r && "ifnot" in i && (r = !s.a.c(i.ifnot)));
                                "foreach" in i
                                    ? (f = s.pd(o || t, (r && i.foreach) || [], i, t, e))
                                    : r
                                      ? ((e = "data" in i ? e.ac(i.data, i.as) : e), (f = s.Cb(o || t, e, i, t)))
                                      : s.f.za(t);
                                e = f;
                                (i = s.a.e.get(t, u)) && "function" == typeof i.k && i.k();
                                s.a.e.set(t, u, e && e.ca() ? e : n);
                            },
                        };
                        s.h.va.template = function (n) {
                            return (
                                (n = s.h.Ab(n)),
                                (1 == n.length && n[0].unknown) || s.h.fd(n, "name")
                                    ? null
                                    : "This template engine does not support anonymous templates nested within its templates"
                            );
                        };
                        s.f.aa.template = !0;
                    })();
                s.b("setTemplateEngine", s.Fb);
                s.b("renderTemplate", s.Cb);
                s.a.hc = function (n, t, i) {
                    if (n.length && t.length)
                        for (var o, r, f, e, u = (o = 0); (!i || u < i) && (f = n[o]); ++o) {
                            for (r = 0; (e = t[r]); ++r)
                                if (f.value === e.value) {
                                    f.moved = e.index;
                                    e.moved = f.index;
                                    t.splice(r, 1);
                                    u = r = 0;
                                    break;
                                }
                            u += r;
                        }
                };
                s.a.lb = (function () {
                    function n(n, t, i, r, u) {
                        for (
                            var o = Math.min,
                                l = Math.max,
                                a = [],
                                c = n.length,
                                f,
                                h = t.length,
                                v = h - c || 1,
                                w = c + h + 1,
                                y,
                                p,
                                b,
                                e = 0;
                            e <= c;
                            e++
                        )
                            for (p = y, a.push((y = [])), b = o(h, e + v), f = l(0, e - 1); f <= b; f++)
                                y[f] = f
                                    ? e
                                        ? n[e - 1] === t[f - 1]
                                            ? p[f - 1]
                                            : o(p[f] || w, y[f - 1] || w) + 1
                                        : f + 1
                                    : e + 1;
                        for (o = [], l = [], v = [], e = c, f = h; e || f; )
                            (h = a[e][f] - 1),
                                f && h === a[e][f - 1]
                                    ? l.push((o[o.length] = { status: i, value: t[--f], index: f }))
                                    : e && h === a[e - 1][f]
                                      ? v.push((o[o.length] = { status: r, value: n[--e], index: e }))
                                      : (--f, --e, u.sparse || o.push({ status: "retained", value: t[f] }));
                        return s.a.hc(v, l, !u.dontLimitMoves && 10 * c), o.reverse();
                    }
                    return function (t, i, r) {
                        return (
                            (r = "boolean" == typeof r ? { dontLimitMoves: r } : r || {}),
                            (t = t || []),
                            (i = i || []),
                            t.length < i.length ? n(t, i, "added", "deleted", r) : n(i, t, "deleted", "added", r)
                        );
                    };
                })();
                s.b("utils.compareArrays", s.a.lb),
                    (function () {
                        function r(t, i, r, u, f) {
                            var e = [],
                                o = s.B(
                                    function () {
                                        var n = i(r, f, s.a.Ba(e, t)) || [];
                                        0 < e.length && (s.a.uc(e, n), u && s.l.w(u, null, [r, n, f]));
                                        e.length = 0;
                                        s.a.ta(e, n);
                                    },
                                    null,
                                    {
                                        i: t,
                                        ya: function () {
                                            return !s.a.Tb(e);
                                        },
                                    }
                                );
                            return { ea: e, B: o.ca() ? o : n };
                        }
                        var t = s.a.e.J(),
                            i = s.a.e.J();
                        s.a.Db = function (u, f, e, o, h) {
                            function ut(n, t) {
                                c = nt[t];
                                tt !== t && (rt[n] = c);
                                c.tb(tt++);
                                s.a.Ba(c.ea, u);
                                b.push(c);
                                k.push(c);
                            }
                            function p(n, t) {
                                if (n)
                                    for (var i = 0, r = t.length; i < r; i++)
                                        t[i] &&
                                            s.a.r(t[i].ea, function (r) {
                                                n(r, i, t[i].ka);
                                            });
                            }
                            var l, y, ft;
                            f = f || [];
                            o = o || {};
                            var y = s.a.e.get(u, t) === n,
                                nt = s.a.e.get(u, t) || [],
                                w = s.a.ib(nt, function (n) {
                                    return n.ka;
                                }),
                                a = s.a.lb(w, f, o.dontLimitMoves),
                                b = [],
                                v = 0,
                                tt = 0,
                                it = [],
                                k = [];
                            f = [];
                            for (var rt = [], w = [], c, l = 0, d, g; (d = a[l]); l++)
                                switch (((g = d.moved), d.status)) {
                                    case "deleted":
                                        g === n &&
                                            ((c = nt[v]),
                                            c.B && (c.B.k(), (c.B = n)),
                                            s.a.Ba(c.ea, u).length &&
                                                (o.beforeRemove &&
                                                    (b.push(c), k.push(c), c.ka === i ? (c = null) : (f[l] = c)),
                                                c && it.push.apply(it, c.ea)));
                                        v++;
                                        break;
                                    case "retained":
                                        ut(l, v++);
                                        break;
                                    case "added":
                                        g !== n
                                            ? ut(l, g)
                                            : ((c = { ka: d.value, tb: s.O(tt++) }),
                                              b.push(c),
                                              k.push(c),
                                              y || (w[l] = c));
                                }
                            for (
                                s.a.e.set(u, t, b),
                                    p(o.beforeMove, rt),
                                    s.a.r(it, o.beforeRemove ? s.ba : s.removeNode),
                                    l = 0,
                                    y = s.f.firstChild(u);
                                (c = k[l]);
                                l++
                            ) {
                                for (
                                    c.ea || s.a.extend(c, r(u, e, c.ka, h, c.tb)), v = 0;
                                    (a = c.ea[v]);
                                    y = a.nextSibling, ft = a, v++
                                )
                                    a !== y && s.f.kc(u, a, ft);
                                !c.ad && h && (h(c.ka, c.ea, c.tb), (c.ad = !0));
                            }
                            for (p(o.beforeRemove, f), l = 0; l < f.length; ++l) f[l] && (f[l].ka = i);
                            p(o.afterMove, rt);
                            p(o.afterAdd, w);
                        };
                    })();
                s.b("utils.setDomNodeChildrenFromArrayMapping", s.a.Db);
                s.X = function () {
                    this.allowTemplateRewriting = !1;
                };
                s.X.prototype = new s.P();
                s.X.prototype.renderTemplateSource = function (n, t, i, r) {
                    return (t = (9 > s.a.C ? 0 : n.nodes) ? n.nodes() : null)
                        ? s.a.W(t.cloneNode(!0).childNodes)
                        : ((n = n.text()), s.a.na(n, r));
                };
                s.X.vb = new s.X();
                s.Fb(s.X.vb);
                s.b("nativeTemplateEngine", s.X),
                    (function () {
                        s.xb = function () {
                            var n = (this.ed = (function () {
                                if (!i || !i.tmpl) return 0;
                                try {
                                    if (0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                                } catch (n) {}
                                return 1;
                            })());
                            this.renderTemplateSource = function (r, u, f, e) {
                                if (((e = e || t), (f = f || {}), 2 > n))
                                    throw Error(
                                        "Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."
                                    );
                                var o = r.data("precompiled");
                                return (
                                    o ||
                                        ((o = r.text() || ""),
                                        (o = i.template(
                                            null,
                                            "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"
                                        )),
                                        r.data("precompiled", o)),
                                    (r = [u.$data]),
                                    (u = i.extend({ koBindingContext: u }, f.templateOptions)),
                                    (u = i.tmpl(o, r, u)),
                                    u.appendTo(e.createElement("div")),
                                    (i.fragments = {}),
                                    u
                                );
                            };
                            this.createJavaScriptEvaluatorBlock = function (n) {
                                return "{{ko_code ((function() { return " + n + " })()) }}";
                            };
                            this.addTemplate = function (n, i) {
                                t.write("<script type='text/html' id='" + n + "'>" + i + "</script>");
                            };
                            0 < n &&
                                ((i.tmpl.tag.ko_code = { open: "__.push($1 || '');" }),
                                (i.tmpl.tag.ko_with = { open: "with($1) {", close: "} " }));
                        };
                        s.xb.prototype = new s.P();
                        var n = new s.xb();
                        0 < n.ed && s.Fb(n);
                        s.b("jqueryTmplTemplateEngine", s.xb);
                    })();
            });
        })();
    })();
