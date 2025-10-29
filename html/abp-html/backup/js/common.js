!(function (n, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = n.document
        ? t(n, !0)
        : function (n) {
            if (!n.document)
              throw new Error("jQuery requires a window with a document");
            return t(n);
          })
    : t(n);
})("undefined" != typeof window ? window : this, function (n, t) {
  "use strict";
  function hr(n, t, i) {
    var r,
      u = (t = t || f).createElement("script");
    if (((u.text = n), i)) for (r in df) i[r] && (u[r] = i[r]);
    t.head.appendChild(u).parentNode.removeChild(u);
  }
  function it(n) {
    return null == n
      ? n + ""
      : "object" == typeof n || "function" == typeof n
      ? bt[or.call(n)] || "object"
      : typeof n;
  }
  function hi(n) {
    var t = !!n && "length" in n && n.length,
      i = it(n);
    return (
      !u(n) &&
      !tt(n) &&
      ("array" === i ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in n))
    );
  }
  function v(n, t) {
    return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
  }
  function li(n, t, r) {
    return u(t)
      ? i.grep(n, function (n, i) {
          return !!t.call(n, i, n) !== r;
        })
      : t.nodeType
      ? i.grep(n, function (n) {
          return (n === t) !== r;
        })
      : "string" != typeof t
      ? i.grep(n, function (n) {
          return wt.call(t, n) > -1 !== r;
        })
      : i.filter(t, n, r);
  }
  function wr(n, t) {
    for (; (n = n[t]) && 1 !== n.nodeType; );
    return n;
  }
  function ut(n) {
    return n;
  }
  function dt(n) {
    throw n;
  }
  function br(n, t, i, r) {
    var f;
    try {
      n && u((f = n.promise))
        ? f.call(n).done(t).fail(i)
        : n && u((f = n.then))
        ? f.call(n, t, i)
        : t.apply(void 0, [n].slice(r));
    } catch (n) {
      i.apply(void 0, [n]);
    }
  }
  function ni() {
    f.removeEventListener("DOMContentLoaded", ni);
    n.removeEventListener("load", ni);
    i.ready();
  }
  function ie(n, t) {
    return t.toUpperCase();
  }
  function y(n) {
    return n.replace(ne, "ms-").replace(te, ie);
  }
  function at() {
    this.expando = i.expando + at.uid++;
  }
  function dr(n, t, i) {
    var r;
    if (void 0 === i && 1 === n.nodeType)
      if (
        ((r = "data-" + t.replace(ue, "-$&").toLowerCase()),
        "string" == typeof (i = n.getAttribute(r)))
      ) {
        try {
          i = (function (n) {
            return (
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : n === +n + ""
                  ? +n
                  : re.test(n)
                  ? JSON.parse(n)
                  : n))
            );
          })(i);
        } catch (n) {}
        o.set(n, t, i);
      } else i = void 0;
    return i;
  }
  function tu(n, t, r, u) {
    var s,
      h,
      c = 20,
      l = u
        ? function () {
            return u.cur();
          }
        : function () {
            return i.css(n, t, "");
          },
      o = l(),
      e = (r && r[3]) || (i.cssNumber[t] ? "" : "px"),
      f = (i.cssNumber[t] || ("px" !== e && +o)) && vt.exec(i.css(n, t));
    if (f && f[3] !== e) {
      for (o /= 2, e = e || f[3], f = +o || 1; c--; )
        i.style(n, t, f + e),
          (1 - h) * (1 - (h = l() / o || 0.5)) <= 0 && (c = 0),
          (f /= h);
      f *= 2;
      i.style(n, t, f + e);
      r = r || [];
    }
    return (
      r &&
        ((f = +f || +o || 0),
        (s = r[1] ? f + (r[1] + 1) * r[2] : +r[2]),
        u && ((u.unit = e), (u.start = f), (u.end = s))),
      s
    );
  }
  function fe(n) {
    var r,
      f = n.ownerDocument,
      u = n.nodeName,
      t = ai[u];
    return (
      t ||
      ((r = f.body.appendChild(f.createElement(u))),
      (t = i.css(r, "display")),
      r.parentNode.removeChild(r),
      "none" === t && (t = "block"),
      (ai[u] = t),
      t)
    );
  }
  function ft(n, t) {
    for (var e, u, f = [], i = 0, o = n.length; i < o; i++)
      (u = n[i]).style &&
        ((e = u.style.display),
        t
          ? ("none" === e &&
              ((f[i] = r.get(u, "display") || null),
              f[i] || (u.style.display = "")),
            "" === u.style.display && ti(u) && (f[i] = fe(u)))
          : "none" !== e && ((f[i] = "none"), r.set(u, "display", e)));
    for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]);
    return n;
  }
  function s(n, t) {
    var r;
    return (
      (r =
        void 0 !== n.getElementsByTagName
          ? n.getElementsByTagName(t || "*")
          : void 0 !== n.querySelectorAll
          ? n.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && v(n, t)) ? i.merge([n], r) : r
    );
  }
  function vi(n, t) {
    for (var i = 0, u = n.length; i < u; i++)
      r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"));
  }
  function eu(n, t, r, u, f) {
    for (
      var e,
        o,
        p,
        a,
        w,
        v,
        h = t.createDocumentFragment(),
        y = [],
        l = 0,
        b = n.length;
      l < b;
      l++
    )
      if ((e = n[l]) || 0 === e)
        if ("object" === it(e)) i.merge(y, e.nodeType ? [e] : e);
        else if (fu.test(e)) {
          for (
            o = o || h.appendChild(t.createElement("div")),
              p = (ru.exec(e) || ["", ""])[1].toLowerCase(),
              a = c[p] || c._default,
              o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
              v = a[0];
            v--;

          )
            o = o.lastChild;
          i.merge(y, o.childNodes);
          (o = h.firstChild).textContent = "";
        } else y.push(t.createTextNode(e));
    for (h.textContent = "", l = 0; (e = y[l++]); )
      if (u && i.inArray(e, u) > -1) f && f.push(e);
      else if (
        ((w = i.contains(e.ownerDocument, e)),
        (o = s(h.appendChild(e), "script")),
        w && vi(o),
        r)
      )
        for (v = 0; (e = o[v++]); ) uu.test(e.type || "") && r.push(e);
    return h;
  }
  function ri() {
    return !0;
  }
  function et() {
    return !1;
  }
  function su() {
    try {
      return f.activeElement;
    } catch (n) {}
  }
  function yi(n, t, r, u, f, e) {
    var o, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof r && ((u = u || r), (r = void 0)), t))
        yi(n, s, r, u, t[s], e);
      return n;
    }
    if (
      (null == u && null == f
        ? ((f = r), (u = r = void 0))
        : null == f &&
          ("string" == typeof r
            ? ((f = u), (u = void 0))
            : ((f = u), (u = r), (r = void 0))),
      !1 === f)
    )
      f = et;
    else if (!f) return n;
    return (
      1 === e &&
        ((o = f),
        ((f = function (n) {
          return i().off(n), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = i.guid++))),
      n.each(function () {
        i.event.add(this, t, f, u, r);
      })
    );
  }
  function hu(n, t) {
    return (
      (v(n, "table") &&
        v(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        i(n).children("tbody")[0]) ||
      n
    );
  }
  function ae(n) {
    return (n.type = (null !== n.getAttribute("type")) + "/" + n.type), n;
  }
  function ve(n) {
    return (
      "true/" === (n.type || "").slice(0, 5)
        ? (n.type = n.type.slice(5))
        : n.removeAttribute("type"),
      n
    );
  }
  function cu(n, t) {
    var u, c, f, s, h, l, a, e;
    if (1 === t.nodeType) {
      if (
        r.hasData(n) &&
        ((s = r.access(n)), (h = r.set(t, s)), (e = s.events))
      )
        for (f in (delete h.handle, (h.events = {}), e))
          for (u = 0, c = e[f].length; u < c; u++) i.event.add(t, f, e[f][u]);
      o.hasData(n) && ((l = o.access(n)), (a = i.extend({}, l)), o.set(t, a));
    }
  }
  function ye(n, t) {
    var i = t.nodeName.toLowerCase();
    "input" === i && iu.test(n.type)
      ? (t.checked = n.checked)
      : ("input" !== i && "textarea" !== i) ||
        (t.defaultValue = n.defaultValue);
  }
  function ot(n, t, f, o) {
    t = er.apply([], t);
    var a,
      w,
      l,
      v,
      h,
      b,
      c = 0,
      y = n.length,
      d = y - 1,
      p = t[0],
      k = u(p);
    if (k || (y > 1 && "string" == typeof p && !e.checkClone && ce.test(p)))
      return n.each(function (i) {
        var r = n.eq(i);
        k && (t[0] = p.call(this, i, r.html()));
        ot(r, t, f, o);
      });
    if (
      y &&
      ((w = (a = eu(t, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === a.childNodes.length && (a = w),
      w || o)
    ) {
      for (v = (l = i.map(s(a, "script"), ae)).length; c < y; c++)
        (h = a),
          c !== d &&
            ((h = i.clone(h, !0, !0)), v && i.merge(l, s(h, "script"))),
          f.call(n[c], h, c);
      if (v)
        for (b = l[l.length - 1].ownerDocument, i.map(l, ve), c = 0; c < v; c++)
          (h = l[c]),
            uu.test(h.type || "") &&
              !r.access(h, "globalEval") &&
              i.contains(b, h) &&
              (h.src && "module" !== (h.type || "").toLowerCase()
                ? i._evalUrl && i._evalUrl(h.src)
                : hr(h.textContent.replace(le, ""), b, h));
    }
    return n;
  }
  function lu(n, t, r) {
    for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
      r || 1 !== u.nodeType || i.cleanData(s(u)),
        u.parentNode &&
          (r && i.contains(u.ownerDocument, u) && vi(s(u, "script")),
          u.parentNode.removeChild(u));
    return n;
  }
  function yt(n, t, r) {
    var o,
      s,
      h,
      f,
      u = n.style;
    return (
      (r = r || ui(n)) &&
        ("" !== (f = r.getPropertyValue(t) || r[t]) ||
          i.contains(n.ownerDocument, n) ||
          (f = i.style(n, t)),
        !e.pixelBoxStyles() &&
          pi.test(f) &&
          pe.test(t) &&
          ((o = u.width),
          (s = u.minWidth),
          (h = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = f),
          (f = r.width),
          (u.width = o),
          (u.minWidth = s),
          (u.maxWidth = h))),
      void 0 !== f ? f + "" : f
    );
  }
  function au(n, t) {
    return {
      get: function () {
        if (!n()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function bu(n) {
    var t = i.cssProps[n];
    return (
      t ||
        (t = i.cssProps[n] =
          (function (n) {
            if (n in wu) return n;
            for (var i = n[0].toUpperCase() + n.slice(1), t = pu.length; t--; )
              if ((n = pu[t] + i) in wu) return n;
          })(n) || n),
      t
    );
  }
  function ku(n, t, i) {
    var r = vt.exec(t);
    return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
  }
  function wi(n, t, r, u, f, e) {
    var o = "width" === t ? 1 : 0,
      h = 0,
      s = 0;
    if (r === (u ? "border" : "content")) return 0;
    for (; o < 4; o += 2)
      "margin" === r && (s += i.css(n, r + w[o], !0, f)),
        u
          ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)),
            "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f)))
          : ((s += i.css(n, "padding" + w[o], !0, f)),
            "padding" !== r
              ? (s += i.css(n, "border" + w[o] + "Width", !0, f))
              : (h += i.css(n, "border" + w[o] + "Width", !0, f)));
    return (
      !u &&
        e >= 0 &&
        (s += Math.max(
          0,
          Math.ceil(
            n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - 0.5
          )
        )),
      s
    );
  }
  function du(n, t, r) {
    var f = ui(n),
      u = yt(n, t, f),
      s = "border-box" === i.css(n, "boxSizing", !1, f),
      o = s;
    if (pi.test(u)) {
      if (!r) return u;
      u = "auto";
    }
    return (
      (o = o && (e.boxSizingReliable() || u === n.style[t])),
      ("auto" === u ||
        (!parseFloat(u) && "inline" === i.css(n, "display", !1, f))) &&
        ((u = n["offset" + t[0].toUpperCase() + t.slice(1)]), (o = !0)),
      (u = parseFloat(u) || 0) +
        wi(n, t, r || (s ? "border" : "content"), o, f, u) +
        "px"
    );
  }
  function h(n, t, i, r, u) {
    return new h.prototype.init(n, t, i, r, u);
  }
  function bi() {
    fi &&
      (!1 === f.hidden && n.requestAnimationFrame
        ? n.requestAnimationFrame(bi)
        : n.setTimeout(bi, i.fx.interval),
      i.fx.tick());
  }
  function tf() {
    return (
      n.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function ei(n, t) {
    var u,
      r = 0,
      i = {
        height: n,
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (u = w[r])] = i["padding" + u] = n;
    return t && (i.opacity = i.width = n), i;
  }
  function rf(n, t, i) {
    for (
      var u,
        f = (a.tweeners[t] || []).concat(a.tweeners["*"]),
        r = 0,
        e = f.length;
      r < e;
      r++
    )
      if ((u = f[r].call(i, t, n))) return u;
  }
  function a(n, t, r) {
    var o,
      s,
      h = 0,
      v = a.prefilters.length,
      e = i.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var o = st || tf(),
            t = Math.max(0, f.startTime + f.duration - o),
            i = 1 - (t / f.duration || 0),
            r = 0,
            u = f.tweens.length;
          r < u;
          r++
        )
          f.tweens[r].run(i);
        return (
          e.notifyWith(n, [f, i, t]),
          i < 1 && u
            ? t
            : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
        );
      },
      f = e.promise({
        elem: n,
        props: i.extend({}, t),
        opts: i.extend(
          !0,
          {
            specialEasing: {},
            easing: i.easing._default,
          },
          r
        ),
        originalProperties: t,
        originalOptions: r,
        startTime: st || tf(),
        duration: r.duration,
        tweens: [],
        createTween: function (t, r) {
          var u = i.Tween(
            n,
            f.opts,
            t,
            r,
            f.opts.specialEasing[t] || f.opts.easing
          );
          return f.tweens.push(u), u;
        },
        stop: function (t) {
          var i = 0,
            r = t ? f.tweens.length : 0;
          if (s) return this;
          for (s = !0; i < r; i++) f.tweens[i].run(1);
          return (
            t
              ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t]))
              : e.rejectWith(n, [f, t]),
            this
          );
        },
      }),
      c = f.props;
    for (
      (function (n, t) {
        var r, f, e, u, o;
        for (r in n)
          if (
            ((e = t[(f = y(r))]),
            (u = n[r]),
            Array.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
            r !== f && ((n[f] = u), delete n[r]),
            (o = i.cssHooks[f]) && ("expand" in o))
          )
            for (r in ((u = o.expand(u)), delete n[f], u))
              (r in n) || ((n[r] = u[r]), (t[r] = e));
          else t[f] = e;
      })(c, f.opts.specialEasing);
      h < v;
      h++
    )
      if ((o = a.prefilters[h].call(f, n, c, f.opts)))
        return (
          u(o.stop) &&
            (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
          o
        );
    return (
      i.map(c, rf, f),
      u(f.opts.start) && f.opts.start.call(n, f),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always),
      i.fx.timer(
        i.extend(l, {
          elem: n,
          anim: f,
          queue: f.opts.queue,
        })
      ),
      f
    );
  }
  function g(n) {
    return (n.match(l) || []).join(" ");
  }
  function nt(n) {
    return (n.getAttribute && n.getAttribute("class")) || "";
  }
  function ki(n) {
    return Array.isArray(n) ? n : ("string" == typeof n && n.match(l)) || [];
  }
  function tr(n, t, r, u) {
    var f;
    if (Array.isArray(t))
      i.each(t, function (t, i) {
        r || ke.test(n)
          ? u(n, i)
          : tr(
              n + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              r,
              u
            );
      });
    else if (r || "object" !== it(t)) u(n, t);
    else for (f in t) tr(n + "[" + f + "]", t[f], r, u);
  }
  function af(n) {
    return function (t, i) {
      "string" != typeof t && ((i = t), (t = "*"));
      var r,
        f = 0,
        e = t.toLowerCase().match(l) || [];
      if (u(i))
        for (; (r = e[f++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (n[r] = n[r] || []).unshift(i))
            : (n[r] = n[r] || []).push(i);
    };
  }
  function vf(n, t, r, u) {
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
      o = n === ir;
    return e(t.dataTypes[0]) || (!f["*"] && e("*"));
  }
  function ur(n, t) {
    var r,
      u,
      f = i.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
    return u && i.extend(!0, n, u), n;
  }
  var k = [],
    f = n.document,
    bf = Object.getPrototypeOf,
    d = k.slice,
    er = k.concat,
    si = k.push,
    wt = k.indexOf,
    bt = {},
    or = bt.toString,
    kt = bt.hasOwnProperty,
    sr = kt.toString,
    kf = sr.call(Object),
    e = {},
    u = function (n) {
      return "function" == typeof n && "number" != typeof n.nodeType;
    },
    tt = function (n) {
      return null != n && n === n.window;
    },
    df = {
      type: !0,
      src: !0,
      noModule: !0,
    },
    i = function (n, t) {
      return new i.fn.init(n, t);
    },
    gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    b,
    ci,
    ar,
    vr,
    yr,
    pr,
    l,
    kr,
    gt,
    lt,
    ai,
    fu,
    st,
    fi,
    gu,
    nf,
    uf,
    ht,
    ff,
    ef,
    of,
    di,
    gi,
    yf,
    ct,
    fr,
    oi,
    pf,
    wf;
  i.fn = i.prototype = {
    jquery: "3.3.1",
    constructor: i,
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (n) {
      return null == n ? d.call(this) : n < 0 ? this[n + this.length] : this[n];
    },
    pushStack: function (n) {
      var t = i.merge(this.constructor(), n);
      return (t.prevObject = this), t;
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
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (n) {
      var i = this.length,
        t = +n + (n < 0 ? i : 0);
      return this.pushStack(t >= 0 && t < i ? [this[t]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: si,
    sort: k.sort,
    splice: k.splice,
  };
  i.extend = i.fn.extend = function () {
    var o,
      e,
      t,
      r,
      s,
      h,
      n = arguments[0] || {},
      f = 1,
      l = arguments.length,
      c = !1;
    for (
      "boolean" == typeof n && ((c = n), (n = arguments[f] || {}), f++),
        "object" == typeof n || u(n) || (n = {}),
        f === l && ((n = this), f--);
      f < l;
      f++
    )
      if (null != (o = arguments[f]))
        for (e in o)
          (t = n[e]),
            n !== (r = o[e]) &&
              (c && r && (i.isPlainObject(r) || (s = Array.isArray(r)))
                ? (s
                    ? ((s = !1), (h = t && Array.isArray(t) ? t : []))
                    : (h = t && i.isPlainObject(t) ? t : {}),
                  (n[e] = i.extend(c, h, r)))
                : void 0 !== r && (n[e] = r));
    return n;
  };
  i.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (n) {
      throw new Error(n);
    },
    noop: function () {},
    isPlainObject: function (n) {
      var t, i;
      return !(
        !n ||
        "[object Object]" !== or.call(n) ||
        ((t = bf(n)) &&
          ("function" !=
            typeof (i = kt.call(t, "constructor") && t.constructor) ||
            sr.call(i) !== kf))
      );
    },
    isEmptyObject: function (n) {
      var t;
      for (t in n) return !1;
      return !0;
    },
    globalEval: function (n) {
      hr(n);
    },
    each: function (n, t) {
      var r,
        i = 0;
      if (hi(n)) for (r = n.length; i < r && !1 !== t.call(n[i], i, n[i]); i++);
      else for (i in n) if (!1 === t.call(n[i], i, n[i])) break;
      return n;
    },
    trim: function (n) {
      return null == n ? "" : (n + "").replace(gf, "");
    },
    makeArray: function (n, t) {
      var r = t || [];
      return (
        null != n &&
          (hi(Object(n))
            ? i.merge(r, "string" == typeof n ? [n] : n)
            : si.call(r, n)),
        r
      );
    },
    inArray: function (n, t, i) {
      return null == t ? -1 : wt.call(t, n, i);
    },
    merge: function (n, t) {
      for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
      return (n.length = r), n;
    },
    grep: function (n, t, i) {
      for (var u = [], r = 0, f = n.length, e = !i; r < f; r++)
        !t(n[r], r) !== e && u.push(n[r]);
      return u;
    },
    map: function (n, t, i) {
      var e,
        u,
        r = 0,
        f = [];
      if (hi(n))
        for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
      else for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
      return er.apply([], f);
    },
    guid: 1,
    support: e,
  });
  "function" == typeof Symbol && (i.fn[Symbol.iterator] = k[Symbol.iterator]);
  i.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function (n, t) {
      bt["[object " + t + "]"] = t.toLowerCase();
    }
  );
  b = (function (n) {
    function u(n, t, r, u) {
      var s,
        p,
        l,
        a,
        w,
        d,
        g,
        y = t && t.ownerDocument,
        v = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof n || !n || (1 !== v && 9 !== v && 11 !== v))
      )
        return r;
      if (
        !u &&
        ((t ? t.ownerDocument || t : c) !== i && b(t), (t = t || i), h)
      ) {
        if (11 !== v && (w = cr.exec(n)))
          if ((s = w[1])) {
            if (9 === v) {
              if (!(l = t.getElementById(s))) return r;
              if (l.id === s) return r.push(l), r;
            } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s)
              return r.push(l), r;
          } else {
            if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r;
            if (
              (s = w[3]) &&
              e.getElementsByClassName &&
              t.getElementsByClassName
            )
              return k.apply(r, t.getElementsByClassName(s)), r;
          }
        if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
          if (1 !== v) (y = t), (g = n);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute("id"))
                ? (a = a.replace(vi, yi))
                : t.setAttribute("id", (a = f)),
                p = (d = ft(n)).length;
              p--;

            )
              d[p] = "#" + a + " " + yt(d[p]);
            g = d.join(",");
            y = (ni.test(n) && ri(t.parentNode)) || t;
          }
          if (g)
            try {
              return k.apply(r, y.querySelectorAll(g)), r;
            } catch (n) {
            } finally {
              a === f && t.removeAttribute("id");
            }
        }
      }
      return si(n.replace(at, "$1"), t, r, u);
    }
    function ti() {
      var n = [];
      return function i(r, u) {
        return (
          n.push(r + " ") > t.cacheLength && delete i[n.shift()],
          (i[r + " "] = u)
        );
      };
    }
    function l(n) {
      return (n[f] = !0), n;
    }
    function a(n) {
      var t = i.createElement("fieldset");
      try {
        return !!n(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
        t = null;
      }
    }
    function ii(n, i) {
      for (var r = n.split("|"), u = r.length; u--; ) t.attrHandle[r[u]] = i;
    }
    function wi(n, t) {
      var i = t && n,
        r =
          i &&
          1 === n.nodeType &&
          1 === t.nodeType &&
          n.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
      return n ? 1 : -1;
    }
    function ar(n) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === n;
      };
    }
    function vr(n) {
      return function (t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === n;
      };
    }
    function bi(n) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === n
                : t.disabled === n
              : t.isDisabled === n || (t.isDisabled !== !n && lr(t) === n)
            : t.disabled === n
          : "label" in t && t.disabled === n;
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
    function ri(n) {
      return n && void 0 !== n.getElementsByTagName && n;
    }
    function ki() {}
    function yt(n) {
      for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
      return i;
    }
    function pt(n, t, i) {
      var r = t.dir,
        u = t.next,
        e = u || r,
        o = i && "parentNode" === e,
        s = di++;
      return t.first
        ? function (t, i, u) {
            for (; (t = t[r]); ) if (1 === t.nodeType || o) return n(t, i, u);
            return !1;
          }
        : function (t, i, h) {
            var c,
              l,
              y,
              a = [v, s];
            if (h) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || o) && n(t, i, h)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || o)
                  if (
                    ((l =
                      (y = t[f] || (t[f] = {}))[t.uniqueID] ||
                      (y[t.uniqueID] = {})),
                    u && u === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((c = l[e]) && c[0] === v && c[1] === s)
                      return (a[2] = c[2]);
                    if (((l[e] = a), (a[2] = n(t, i, h)))) return !0;
                  }
            return !1;
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
    function wt(n, t, i, r, u) {
      for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)
        (e = n[f]) && ((i && !i(e, r, u)) || (o.push(e), h && t.push(f)));
      return o;
    }
    function fi(n, t, i, r, e, o) {
      return (
        r && !r[f] && (r = fi(r)),
        e && !e[f] && (e = fi(e, o)),
        l(function (f, o, s, h) {
          var a,
            l,
            v,
            w = [],
            p = [],
            b = o.length,
            d =
              f ||
              (function (n, t, i) {
                for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                return i;
              })(t || "*", s.nodeType ? [s] : s, []),
            y = !n || (!f && t) ? d : wt(d, w, n, s, h),
            c = i ? (e || (f ? n : b || r) ? [] : o) : y;
          if ((i && i(y, c, s, h), r))
            for (a = wt(c, p), r(a, [], s, h), l = a.length; l--; )
              (v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
          if (f) {
            if (e || n) {
              if (e) {
                for (a = [], l = c.length; l--; )
                  (v = c[l]) && a.push((y[l] = v));
                e(null, (c = []), a, h);
              }
              for (l = c.length; l--; )
                (v = c[l]) &&
                  (a = e ? nt(f, v) : w[l]) > -1 &&
                  (f[a] = !(o[a] = v));
            }
          } else (c = wt(c === o ? c.splice(b, c.length) : c)), e ? e(null, o, c, h) : k.apply(o, c);
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
          l = pt(
            function (n) {
              return n === o;
            },
            c,
            !0
          ),
          a = pt(
            function (n) {
              return nt(o, n) > -1;
            },
            c,
            !0
          ),
          e = [
            function (n, t, i) {
              var r =
                (!h && (i || t !== ht)) ||
                ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
              return (o = null), r;
            },
          ];
        i < s;
        i++
      )
        if ((u = t.relative[n[i].type])) e = [pt(ui(e), u)];
        else {
          if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
            for (r = ++i; r < s && !t.relative[n[r].type]; r++);
            return fi(
              i > 1 && ui(e),
              i > 1 &&
                yt(
                  n.slice(0, i - 1).concat({
                    value: " " === n[i - 2].type ? "*" : "",
                  })
                ).replace(at, "$1"),
              u,
              i < r && ei(n.slice(i, r)),
              r < s && ei((n = n.slice(r))),
              r < s && yt(n)
            );
          }
          e.push(u);
        }
      return ui(e);
    }
    function yr(n, r) {
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
          for (
            a && (ht = s === i || s || a);
            p !== ft && null != (y = rt[p]);
            p++
          ) {
            if (e && y) {
              for (
                nt = 0, s || y.ownerDocument === i || (b(y), (c = !h));
                (d = n[nt++]);

              )
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
              if (g > 0) for (; p--; ) tt[p] || w[p] || (w[p] = nr.call(l));
              w = wt(w);
            }
            k.apply(l, w);
            a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l);
          }
          return a && ((v = ut), (ht = it)), tt;
        };
      return f ? l(o) : o;
    }
    var rt,
      e,
      t,
      st,
      oi,
      ft,
      bt,
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
      f = "sizzle" + 1 * new Date(),
      c = n.document,
      v = 0,
      di = 0,
      hi = ti(),
      ci = ti(),
      lt = ti(),
      kt = function (n, t) {
        return n === t && (ut = !0), 0;
      },
      gi = {}.hasOwnProperty,
      g = [],
      nr = g.pop,
      tr = g.push,
      k = g.push,
      li = g.slice,
      nt = function (n, t) {
        for (var i = 0, r = n.length; i < r; i++) if (n[i] === t) return i;
        return -1;
      },
      dt =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      r = "[\\x20\\t\\r\\n\\f]",
      tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ai =
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
      gt =
        ":(" +
        tt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ai +
        ")*)|.*)\\)|)",
      ir = new RegExp(r + "+", "g"),
      at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
      rr = new RegExp("^" + r + "*," + r + "*"),
      ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
      fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
      er = new RegExp(gt),
      or = new RegExp("^" + tt + "$"),
      vt = {
        ID: new RegExp("^#(" + tt + ")"),
        CLASS: new RegExp("^\\.(" + tt + ")"),
        TAG: new RegExp("^(" + tt + "|[*])"),
        ATTR: new RegExp("^" + ai),
        PSEUDO: new RegExp("^" + gt),
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
        bool: new RegExp("^(?:" + dt + ")$", "i"),
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
      sr = /^(?:input|select|textarea|button)$/i,
      hr = /^h\d$/i,
      ot = /^[^{]+\{\s*\[native \w/,
      cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ni = /[+~]/,
      y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
      p = function (n, t, i) {
        var r = "0x" + t - 65536;
        return r != r || i
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      yi = function (n, t) {
        return t
          ? "\0" === n
            ? "�"
            : n.slice(0, -1) +
              "\\" +
              n.charCodeAt(n.length - 1).toString(16) +
              " "
          : "\\" + n;
      },
      pi = function () {
        b();
      },
      lr = pt(
        function (n) {
          return !0 === n.disabled && ("form" in n || "label" in n);
        },
        {
          dir: "parentNode",
          next: "legend",
        }
      );
    try {
      k.apply((g = li.call(c.childNodes)), c.childNodes);
      g[c.childNodes.length].nodeType;
    } catch (n) {
      k = {
        apply: g.length
          ? function (n, t) {
              tr.apply(n, li.call(t));
            }
          : function (n, t) {
              for (var i = n.length, r = 0; (n[i++] = t[r++]); );
              n.length = i - 1;
            },
      };
    }
    for (rt in ((e = u.support = {}),
    (oi = u.isXML =
      function (n) {
        var t = n && (n.ownerDocument || n).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (b = u.setDocument =
      function (n) {
        var v,
          u,
          l = n ? n.ownerDocument || n : c;
        return l !== i && 9 === l.nodeType && l.documentElement
          ? ((s = (i = l).documentElement),
            (h = !oi(i)),
            c !== i &&
              (u = i.defaultView) &&
              u.top !== u &&
              (u.addEventListener
                ? u.addEventListener("unload", pi, !1)
                : u.attachEvent && u.attachEvent("onunload", pi)),
            (e.attributes = a(function (n) {
              return (n.className = "i"), !n.getAttribute("className");
            })),
            (e.getElementsByTagName = a(function (n) {
              return (
                n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
              );
            })),
            (e.getElementsByClassName = ot.test(i.getElementsByClassName)),
            (e.getById = a(function (n) {
              return (
                (s.appendChild(n).id = f),
                !i.getElementsByName || !i.getElementsByName(f).length
              );
            })),
            e.getById
              ? ((t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    return n.getAttribute("id") === t;
                  };
                }),
                (t.find.ID = function (n, t) {
                  if (void 0 !== t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : [];
                  }
                }))
              : ((t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    var i =
                      void 0 !== n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t;
                  };
                }),
                (t.find.ID = function (n, t) {
                  if (void 0 !== t.getElementById && h) {
                    var r,
                      u,
                      f,
                      i = t.getElementById(n);
                    if (i) {
                      if ((r = i.getAttributeNode("id")) && r.value === n)
                        return [i];
                      for (f = t.getElementsByName(n), u = 0; (i = f[u++]); )
                        if ((r = i.getAttributeNode("id")) && r.value === n)
                          return [i];
                    }
                    return [];
                  }
                })),
            (t.find.TAG = e.getElementsByTagName
              ? function (n, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(n)
                    : e.qsa
                    ? t.querySelectorAll(n)
                    : void 0;
                }
              : function (n, t) {
                  var i,
                    r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                  if ("*" === n) {
                    for (; (i = u[f++]); ) 1 === i.nodeType && r.push(i);
                    return r;
                  }
                  return u;
                }),
            (t.find.CLASS =
              e.getElementsByClassName &&
              function (n, t) {
                if (void 0 !== t.getElementsByClassName && h)
                  return t.getElementsByClassName(n);
              }),
            (d = []),
            (o = []),
            (e.qsa = ot.test(i.querySelectorAll)) &&
              (a(function (n) {
                s.appendChild(n).innerHTML =
                  "<a id='" +
                  f +
                  "'></a><select id='" +
                  f +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>";
                n.querySelectorAll("[msallowcapture^='']").length &&
                  o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length ||
                  o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length ||
                  o.push(".#.+[+~]");
              }),
              a(function (n) {
                n.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length &&
                  o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length &&
                  o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length &&
                  o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:");
              })),
            (e.matchesSelector = ot.test(
              (ct =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              a(function (n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt);
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
                          : n.compareDocumentPosition &&
                            16 & n.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (n, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === n) return !0;
                    return !1;
                  }),
            (kt = v
              ? function (n, t) {
                  if (n === t) return (ut = !0), 0;
                  var r =
                    !n.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (n.ownerDocument || n) === (t.ownerDocument || t)
                          ? n.compareDocumentPosition(t)
                          : 1) ||
                    (!e.sortDetached && t.compareDocumentPosition(n) === r)
                      ? n === i || (n.ownerDocument === c && et(c, n))
                        ? -1
                        : t === i || (t.ownerDocument === c && et(c, t))
                        ? 1
                        : w
                        ? nt(w, n) - nt(w, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
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
                    return n === i
                      ? -1
                      : t === i
                      ? 1
                      : o
                      ? -1
                      : s
                      ? 1
                      : w
                      ? nt(w, n) - nt(w, t)
                      : 0;
                  if (o === s) return wi(n, t);
                  for (r = n; (r = r.parentNode); ) f.unshift(r);
                  for (r = t; (r = r.parentNode); ) e.unshift(r);
                  for (; f[u] === e[u]; ) u++;
                  return u
                    ? wi(f[u], e[u])
                    : f[u] === c
                    ? -1
                    : e[u] === c
                    ? 1
                    : 0;
                }),
            i)
          : i;
      }),
    (u.matches = function (n, t) {
      return u(n, null, null, t);
    }),
    (u.matchesSelector = function (n, t) {
      if (
        ((n.ownerDocument || n) !== i && b(n),
        (t = t.replace(fr, "='$1']")),
        e.matchesSelector &&
          h &&
          !lt[t + " "] &&
          (!d || !d.test(t)) &&
          (!o || !o.test(t)))
      )
        try {
          var r = ct.call(n, t);
          if (
            r ||
            e.disconnectedMatch ||
            (n.document && 11 !== n.document.nodeType)
          )
            return r;
        } catch (n) {}
      return u(t, i, null, [n]).length > 0;
    }),
    (u.contains = function (n, t) {
      return (n.ownerDocument || n) !== i && b(n), et(n, t);
    }),
    (u.attr = function (n, r) {
      (n.ownerDocument || n) !== i && b(n);
      var f = t.attrHandle[r.toLowerCase()],
        u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
      return void 0 !== u
        ? u
        : e.attributes || !h
        ? n.getAttribute(r)
        : (u = n.getAttributeNode(r)) && u.specified
        ? u.value
        : null;
    }),
    (u.escape = function (n) {
      return (n + "").replace(vi, yi);
    }),
    (u.error = function (n) {
      throw new Error("Syntax error, unrecognized expression: " + n);
    }),
    (u.uniqueSort = function (n) {
      var r,
        u = [],
        t = 0,
        i = 0;
      if (
        ((ut = !e.detectDuplicates),
        (w = !e.sortStable && n.slice(0)),
        n.sort(kt),
        ut)
      ) {
        for (; (r = n[i++]); ) r === n[i] && (t = u.push(i));
        for (; t--; ) n.splice(u[t], 1);
      }
      return (w = null), n;
    }),
    (st = u.getText =
      function (n) {
        var r,
          i = "",
          u = 0,
          t = n.nodeType;
        if (t) {
          if (1 === t || 9 === t || 11 === t) {
            if ("string" == typeof n.textContent) return n.textContent;
            for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
          } else if (3 === t || 4 === t) return n.nodeValue;
        } else for (; (r = n[u++]); ) i += st(r);
        return i;
      }),
    ((t = u.selectors =
      {
        cacheLength: 50,
        createPseudo: l,
        match: vt,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: !0,
          },
          "~": {
            dir: "previousSibling",
          },
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
                  (n[4] = +(n[4]
                    ? n[5] + (n[6] || 1)
                    : 2 * ("even" === n[3] || "odd" === n[3]))),
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
                    er.test(t) &&
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
                      (void 0 !== n.getAttribute && n.getAttribute("class")) ||
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
                : !t ||
                    ((f += ""),
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
                      ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1
                      : "|=" === t &&
                        (f === i || f.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (n, t, i, r, u) {
            var s = "nth" !== n.slice(0, 3),
              o = "last" !== n.slice(-4),
              e = "of-type" === t;
            return 1 === r && 0 === u
              ? function (n) {
                  return !!n.parentNode;
                }
              : function (t, i, h) {
                  var p,
                    d,
                    y,
                    c,
                    a,
                    w,
                    b = s !== o ? "nextSibling" : "previousSibling",
                    k = t.parentNode,
                    nt = e && t.nodeName.toLowerCase(),
                    g = !h && !e,
                    l = !1;
                  if (k) {
                    if (s) {
                      for (; b; ) {
                        for (c = t; (c = c[b]); )
                          if (
                            e
                              ? c.nodeName.toLowerCase() === nt
                              : 1 === c.nodeType
                          )
                            return !1;
                        w = b = "only" === n && !w && "nextSibling";
                      }
                      return !0;
                    }
                    if (((w = [o ? k.firstChild : k.lastChild]), o && g)) {
                      for (
                        l =
                          (a =
                            (p =
                              (d =
                                (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] ||
                                (y[c.uniqueID] = {}))[n] || [])[0] === v &&
                            p[1]) && p[2],
                          c = a && k.childNodes[a];
                        (c = (++a && c && c[b]) || (l = a = 0) || w.pop());

                      )
                        if (1 === c.nodeType && ++l && c === t) {
                          d[n] = [v, a, l];
                          break;
                        }
                    } else if (
                      (g &&
                        (l = a =
                          (p =
                            (d =
                              (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] ||
                              (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]),
                      !1 === l)
                    )
                      for (
                        ;
                        (c = (++a && c && c[b]) || (l = a = 0) || w.pop()) &&
                        ((e
                          ? c.nodeName.toLowerCase() !== nt
                          : 1 !== c.nodeType) ||
                          !++l ||
                          (g &&
                            ((d =
                              (y = c[f] || (c[f] = {}))[c.uniqueID] ||
                              (y[c.uniqueID] = {}))[n] = [v, l]),
                          c !== t));

                      );
                    return (l -= u) === r || (l % r == 0 && l / r >= 0);
                  }
                };
          },
          PSEUDO: function (n, i) {
            var e,
              r =
                t.pseudos[n] ||
                t.setFilters[n.toLowerCase()] ||
                u.error("unsupported pseudo: " + n);
            return r[f]
              ? r(i)
              : r.length > 1
              ? ((e = [n, n, "", i]),
                t.setFilters.hasOwnProperty(n.toLowerCase())
                  ? l(function (n, t) {
                      for (var e, u = r(n, i), f = u.length; f--; )
                        n[(e = nt(n, u[f]))] = !(t[e] = u[f]);
                    })
                  : function (n) {
                      return r(n, 0, e);
                    })
              : r;
          },
        },
        pseudos: {
          not: l(function (n) {
            var t = [],
              r = [],
              i = bt(n.replace(at, "$1"));
            return i[f]
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
              or.test(n || "") || u.error("unsupported lang: " + n),
              (n = n.replace(y, p).toLowerCase()),
              function (t) {
                var i;
                do
                  if (
                    (i = h
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-")
                    );
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
          enabled: bi(!1),
          disabled: bi(!0),
          checked: function (n) {
            var t = n.nodeName.toLowerCase();
            return (
              ("input" === t && !!n.checked) || ("option" === t && !!n.selected)
            );
          },
          selected: function (n) {
            return (
              n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
            );
          },
          empty: function (n) {
            for (n = n.firstChild; n; n = n.nextSibling)
              if (n.nodeType < 6) return !1;
            return !0;
          },
          parent: function (n) {
            return !t.pseudos.empty(n);
          },
          header: function (n) {
            return hr.test(n.nodeName);
          },
          input: function (n) {
            return sr.test(n.nodeName);
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
              (null == (t = n.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: it(function () {
            return [0];
          }),
          last: it(function (n, t) {
            return [t - 1];
          }),
          eq: it(function (n, t, i) {
            return [i < 0 ? i + t : i];
          }),
          even: it(function (n, t) {
            for (var i = 0; i < t; i += 2) n.push(i);
            return n;
          }),
          odd: it(function (n, t) {
            for (var i = 1; i < t; i += 2) n.push(i);
            return n;
          }),
          lt: it(function (n, t, i) {
            for (var r = i < 0 ? i + t : i; --r >= 0; ) n.push(r);
            return n;
          }),
          gt: it(function (n, t, i) {
            for (var r = i < 0 ? i + t : i; ++r < t; ) n.push(r);
            return n;
          }),
        },
      }).pseudos.nth = t.pseudos.eq),
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    }))
      t.pseudos[rt] = ar(rt);
    for (rt in {
      submit: !0,
      reset: !0,
    })
      t.pseudos[rt] = vr(rt);
    return (
      (ki.prototype = t.filters = t.pseudos),
      (t.setFilters = new ki()),
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
            for (o in ((e && !(f = rr.exec(r))) ||
              (f && (r = r.slice(f[0].length) || r), h.push((s = []))),
            (e = !1),
            (f = ur.exec(r)) &&
              ((e = f.shift()),
              s.push({
                value: e,
                type: f[0].replace(at, " "),
              }),
              (r = r.slice(e.length))),
            t.filter))
              (f = vt[o].exec(r)) &&
                (!c[o] || (f = c[o](f))) &&
                ((e = f.shift()),
                s.push({
                  value: e,
                  type: o,
                  matches: f,
                }),
                (r = r.slice(e.length)));
            if (!e) break;
          }
          return i ? r.length : r ? u.error(n) : ci(n, h).slice(0);
        }),
      (bt = u.compile =
        function (n, t) {
          var r,
            u = [],
            e = [],
            i = lt[n + " "];
          if (!i) {
            for (t || (t = ft(n)), r = t.length; r--; )
              (i = ei(t[r]))[f] ? u.push(i) : e.push(i);
            (i = lt(n, yr(e, u))).selector = n;
          }
          return i;
        }),
      (si = u.select =
        function (n, i, r, u) {
          var o,
            f,
            e,
            l,
            a,
            c = "function" == typeof n && n,
            s = !u && ft((n = c.selector || n));
          if (((r = r || []), 1 === s.length)) {
            if (
              (f = s[0] = s[0].slice(0)).length > 2 &&
              "ID" === (e = f[0]).type &&
              9 === i.nodeType &&
              h &&
              t.relative[f[1].type]
            ) {
              if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]))
                return r;
              c && (i = i.parentNode);
              n = n.slice(f.shift().value.length);
            }
            for (
              o = vt.needsContext.test(n) ? 0 : f.length;
              o-- && ((e = f[o]), !t.relative[(l = e.type)]);

            )
              if (
                (a = t.find[l]) &&
                (u = a(
                  e.matches[0].replace(y, p),
                  (ni.test(f[0].type) && ri(i.parentNode)) || i
                ))
              ) {
                if ((f.splice(o, 1), !(n = u.length && yt(f))))
                  return k.apply(r, u), r;
                break;
              }
          }
          return (
            (c || bt(n, s))(
              u,
              i,
              !h,
              r,
              !i || (ni.test(n) && ri(i.parentNode)) || i
            ),
            r
          );
        }),
      (e.sortStable = f.split("").sort(kt).join("") === f),
      (e.detectDuplicates = !!ut),
      b(),
      (e.sortDetached = a(function (n) {
        return 1 & n.compareDocumentPosition(i.createElement("fieldset"));
      })),
      a(function (n) {
        return (
          (n.innerHTML = "<a href='#'></a>"),
          "#" === n.firstChild.getAttribute("href")
        );
      }) ||
        ii("type|href|height|width", function (n, t, i) {
          if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (e.attributes &&
        a(function (n) {
          return (
            (n.innerHTML = "<input/>"),
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
          );
        })) ||
        ii("value", function (n, t, i) {
          if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue;
        }),
      a(function (n) {
        return null == n.getAttribute("disabled");
      }) ||
        ii(dt, function (n, t, i) {
          var r;
          if (!i)
            return !0 === n[t]
              ? t.toLowerCase()
              : (r = n.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      u
    );
  })(n);
  i.find = b;
  i.expr = b.selectors;
  i.expr[":"] = i.expr.pseudos;
  i.uniqueSort = i.unique = b.uniqueSort;
  i.text = b.getText;
  i.isXMLDoc = b.isXML;
  i.contains = b.contains;
  i.escapeSelector = b.escape;
  var rt = function (n, t, r) {
      for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
        if (1 === n.nodeType) {
          if (f && i(n).is(r)) break;
          u.push(n);
        }
      return u;
    },
    cr = function (n, t) {
      for (var i = []; n; n = n.nextSibling)
        1 === n.nodeType && n !== t && i.push(n);
      return i;
    },
    lr = i.expr.match.needsContext;
  ci = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
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
        r,
        u = this.length,
        f = this;
      if ("string" != typeof n)
        return this.pushStack(
          i(n).filter(function () {
            for (t = 0; t < u; t++) if (i.contains(f[t], this)) return !0;
          })
        );
      for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
      return u > 1 ? i.uniqueSort(r) : r;
    },
    filter: function (n) {
      return this.pushStack(li(this, n || [], !1));
    },
    not: function (n) {
      return this.pushStack(li(this, n || [], !0));
    },
    is: function (n) {
      return !!li(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1)
        .length;
    },
  });
  vr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (i.fn.init = function (n, t, r) {
    var e, o;
    if (!n) return this;
    if (((r = r || ar), "string" == typeof n)) {
      if (
        !(e =
          "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3
            ? [null, n, null]
            : vr.exec(n)) ||
        (!e[1] && t)
      )
        return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
      if (e[1]) {
        if (
          ((t = t instanceof i ? t[0] : t),
          i.merge(
            this,
            i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)
          ),
          ci.test(e[1]) && i.isPlainObject(t))
        )
          for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
        return this;
      }
      return (
        (o = f.getElementById(e[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return n.nodeType
      ? ((this[0] = n), (this.length = 1), this)
      : u(n)
      ? void 0 !== r.ready
        ? r.ready(n)
        : n(i)
      : i.makeArray(n, this);
  }).prototype = i.fn;
  ar = i(f);
  yr = /^(?:parents|prev(?:Until|All))/;
  pr = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0,
  };
  i.fn.extend({
    has: function (n) {
      var t = i(n, this),
        r = t.length;
      return this.filter(function () {
        for (var n = 0; n < r; n++) if (i.contains(this, t[n])) return !0;
      });
    },
    closest: function (n, t) {
      var r,
        f = 0,
        o = this.length,
        u = [],
        e = "string" != typeof n && i(n);
      if (!lr.test(n))
        for (; f < o; f++)
          for (r = this[f]; r && r !== t; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (e
                ? e.index(r) > -1
                : 1 === r.nodeType && i.find.matchesSelector(r, n))
            ) {
              u.push(r);
              break;
            }
      return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
    },
    index: function (n) {
      return n
        ? "string" == typeof n
          ? wt.call(i(n), this[0])
          : wt.call(this, n.jquery ? n[0] : n)
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
        return rt(n, "parentNode");
      },
      parentsUntil: function (n, t, i) {
        return rt(n, "parentNode", i);
      },
      next: function (n) {
        return wr(n, "nextSibling");
      },
      prev: function (n) {
        return wr(n, "previousSibling");
      },
      nextAll: function (n) {
        return rt(n, "nextSibling");
      },
      prevAll: function (n) {
        return rt(n, "previousSibling");
      },
      nextUntil: function (n, t, i) {
        return rt(n, "nextSibling", i);
      },
      prevUntil: function (n, t, i) {
        return rt(n, "previousSibling", i);
      },
      siblings: function (n) {
        return cr((n.parentNode || {}).firstChild, n);
      },
      children: function (n) {
        return cr(n.firstChild);
      },
      contents: function (n) {
        return v(n, "iframe")
          ? n.contentDocument
          : (v(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes));
      },
    },
    function (n, t) {
      i.fn[n] = function (r, u) {
        var f = i.map(this, t, r);
        return (
          "Until" !== n.slice(-5) && (u = r),
          u && "string" == typeof u && (f = i.filter(u, f)),
          this.length > 1 &&
            (pr[n] || i.uniqueSort(f), yr.test(n) && f.reverse()),
          this.pushStack(f)
        );
      };
    }
  );
  l = /[^\x20\t\r\n\f]+/g;
  i.Callbacks = function (n) {
    n =
      "string" == typeof n
        ? (function (n) {
            var t = {};
            return (
              i.each(n.match(l) || [], function (n, i) {
                t[i] = !0;
              }),
              t
            );
          })(n)
        : i.extend({}, n);
    var f,
      r,
      c,
      e,
      t = [],
      s = [],
      o = -1,
      a = function () {
        for (e = e || n.once, c = f = !0; s.length; o = -1)
          for (r = s.shift(); ++o < t.length; )
            !1 === t[o].apply(r[0], r[1]) &&
              n.stopOnFalse &&
              ((o = t.length), (r = !1));
        n.memory || (r = !1);
        f = !1;
        e && (t = r ? [] : "");
      },
      h = {
        add: function () {
          return (
            t &&
              (r && !f && ((o = t.length - 1), s.push(r)),
              (function f(r) {
                i.each(r, function (i, r) {
                  u(r)
                    ? (n.unique && h.has(r)) || t.push(r)
                    : r && r.length && "string" !== it(r) && f(r);
                });
              })(arguments),
              r && !f && a()),
            this
          );
        },
        remove: function () {
          return (
            i.each(arguments, function (n, r) {
              for (var u; (u = i.inArray(r, t, u)) > -1; )
                t.splice(u, 1), u <= o && o--;
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
          return (e = s = []), (t = r = ""), this;
        },
        disabled: function () {
          return !t;
        },
        lock: function () {
          return (e = s = []), r || f || (t = r = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (n, t) {
          return (
            e ||
              ((t = [n, (t = t || []).slice ? t.slice() : t]),
              s.push(t),
              f || a()),
            this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return h;
  };
  i.extend({
    Deferred: function (t) {
      var f = [
          [
            "notify",
            "progress",
            i.Callbacks("memory"),
            i.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        o = "pending",
        e = {
          state: function () {
            return o;
          },
          always: function () {
            return r.done(arguments).fail(arguments), this;
          },
          catch: function (n) {
            return e.then(null, n);
          },
          pipe: function () {
            var n = arguments;
            return i
              .Deferred(function (t) {
                i.each(f, function (i, f) {
                  var e = u(n[f[4]]) && n[f[4]];
                  r[f[1]](function () {
                    var n = e && e.apply(this, arguments);
                    n && u(n.promise)
                      ? n
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[f[0] + "With"](this, e ? [n] : arguments);
                  });
                });
                n = null;
              })
              .promise();
          },
          then: function (t, r, e) {
            function s(t, r, f, e) {
              return function () {
                var h = this,
                  c = arguments,
                  a = function () {
                    var n, i;
                    if (!(t < o)) {
                      if ((n = f.apply(h, c)) === r.promise())
                        throw new TypeError("Thenable self-resolution");
                      i =
                        n &&
                        ("object" == typeof n || "function" == typeof n) &&
                        n.then;
                      u(i)
                        ? e
                          ? i.call(n, s(o, r, ut, e), s(o, r, dt, e))
                          : (o++,
                            i.call(
                              n,
                              s(o, r, ut, e),
                              s(o, r, dt, e),
                              s(o, r, ut, r.notifyWith)
                            ))
                        : (f !== ut && ((h = void 0), (c = [n])),
                          (e || r.resolveWith)(h, c));
                    }
                  },
                  l = e
                    ? a
                    : function () {
                        try {
                          a();
                        } catch (n) {
                          i.Deferred.exceptionHook &&
                            i.Deferred.exceptionHook(n, l.stackTrace);
                          t + 1 >= o &&
                            (f !== dt && ((h = void 0), (c = [n])),
                            r.rejectWith(h, c));
                        }
                      };
                t
                  ? l()
                  : (i.Deferred.getStackHook &&
                      (l.stackTrace = i.Deferred.getStackHook()),
                    n.setTimeout(l));
              };
            }
            var o = 0;
            return i
              .Deferred(function (n) {
                f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                f[1][3].add(s(0, n, u(t) ? t : ut));
                f[2][3].add(s(0, n, u(r) ? r : dt));
              })
              .promise();
          },
          promise: function (n) {
            return null != n ? i.extend(n, e) : e;
          },
        },
        r = {};
      return (
        i.each(f, function (n, t) {
          var i = t[2],
            u = t[5];
          e[t[1]] = i.add;
          u &&
            i.add(
              function () {
                o = u;
              },
              f[3 - n][2].disable,
              f[3 - n][3].disable,
              f[0][2].lock,
              f[0][3].lock
            );
          i.add(t[3].fire);
          r[t[0]] = function () {
            return (
              r[t[0] + "With"](this === r ? void 0 : this, arguments), this
            );
          };
          r[t[0] + "With"] = i.fireWith;
        }),
        e.promise(r),
        t && t.call(r, r),
        r
      );
    },
    when: function (n) {
      var e = arguments.length,
        t = e,
        o = Array(t),
        f = d.call(arguments),
        r = i.Deferred(),
        s = function (n) {
          return function (t) {
            o[n] = this;
            f[n] = arguments.length > 1 ? d.call(arguments) : t;
            --e || r.resolveWith(o, f);
          };
        };
      if (
        e <= 1 &&
        (br(n, r.done(s(t)).resolve, r.reject, !e),
        "pending" === r.state() || u(f[t] && f[t].then))
      )
        return r.then();
      for (; t--; ) br(f[t], s(t), r.reject);
      return r.promise();
    },
  });
  kr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  i.Deferred.exceptionHook = function (t, i) {
    n.console &&
      n.console.warn &&
      t &&
      kr.test(t.name) &&
      n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
  };
  i.readyException = function (t) {
    n.setTimeout(function () {
      throw t;
    });
  };
  gt = i.Deferred();
  i.fn.ready = function (n) {
    return (
      gt.then(n).catch(function (n) {
        i.readyException(n);
      }),
      this
    );
  };
  i.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (n) {
      (!0 === n ? --i.readyWait : i.isReady) ||
        ((i.isReady = !0),
        (!0 !== n && --i.readyWait > 0) || gt.resolveWith(f, [i]));
    },
  });
  i.ready.then = gt.then;
  "complete" === f.readyState ||
  ("loading" !== f.readyState && !f.documentElement.doScroll)
    ? n.setTimeout(i.ready)
    : (f.addEventListener("DOMContentLoaded", ni),
      n.addEventListener("load", ni));
  var p = function (n, t, r, f, e, o, s) {
      var h = 0,
        l = n.length,
        c = null == r;
      if ("object" === it(r))
        for (h in ((e = !0), r)) p(n, t, h, r[h], !0, o, s);
      else if (
        void 0 !== f &&
        ((e = !0),
        u(f) || (s = !0),
        c &&
          (s
            ? (t.call(n, f), (t = null))
            : ((c = t),
              (t = function (n, t, r) {
                return c.call(i(n), r);
              }))),
        t)
      )
        for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
      return e ? n : c ? t.call(n) : l ? t(n[0], r) : o;
    },
    ne = /^-ms-/,
    te = /-([a-z])/g;
  lt = function (n) {
    return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
  };
  at.uid = 1;
  at.prototype = {
    cache: function (n) {
      var t = n[this.expando];
      return (
        t ||
          ((t = {}),
          lt(n) &&
            (n.nodeType
              ? (n[this.expando] = t)
              : Object.defineProperty(n, this.expando, {
                  value: t,
                  configurable: !0,
                }))),
        t
      );
    },
    set: function (n, t, i) {
      var r,
        u = this.cache(n);
      if ("string" == typeof t) u[y(t)] = i;
      else for (r in t) u[y(r)] = t[r];
      return u;
    },
    get: function (n, t) {
      return void 0 === t
        ? this.cache(n)
        : n[this.expando] && n[this.expando][y(t)];
    },
    access: function (n, t, i) {
      return void 0 === t || (t && "string" == typeof t && void 0 === i)
        ? this.get(n, t)
        : (this.set(n, t, i), void 0 !== i ? i : t);
    },
    remove: function (n, t) {
      var u,
        r = n[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t)
          for (
            u = (t = Array.isArray(t)
              ? t.map(y)
              : ((t = y(t)) in r)
              ? [t]
              : t.match(l) || []).length;
            u--;

          )
            delete r[t[u]];
        (void 0 === t || i.isEmptyObject(r)) &&
          (n.nodeType ? (n[this.expando] = void 0) : delete n[this.expando]);
      }
    },
    hasData: function (n) {
      var t = n[this.expando];
      return void 0 !== t && !i.isEmptyObject(t);
    },
  };
  var r = new at(),
    o = new at(),
    re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ue = /[A-Z]/g;
  i.extend({
    hasData: function (n) {
      return o.hasData(n) || r.hasData(n);
    },
    data: function (n, t, i) {
      return o.access(n, t, i);
    },
    removeData: function (n, t) {
      o.remove(n, t);
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
      var f,
        u,
        e,
        i = this[0],
        s = i && i.attributes;
      if (void 0 === n) {
        if (
          this.length &&
          ((e = o.get(i)), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))
        ) {
          for (f = s.length; f--; )
            s[f] &&
              0 === (u = s[f].name).indexOf("data-") &&
              ((u = y(u.slice(5))), dr(i, u, e[u]));
          r.set(i, "hasDataAttrs", !0);
        }
        return e;
      }
      return "object" == typeof n
        ? this.each(function () {
            o.set(this, n);
          })
        : p(
            this,
            function (t) {
              var r;
              if (i && void 0 === t) {
                if (void 0 !== (r = o.get(i, n)) || void 0 !== (r = dr(i, n)))
                  return r;
              } else
                this.each(function () {
                  o.set(this, n, t);
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
        o.remove(this, n);
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
          u &&
            (!f || Array.isArray(u)
              ? (f = r.access(n, t, i.makeArray(u)))
              : f.push(u)),
          f || []
        );
    },
    dequeue: function (n, t) {
      t = t || "fx";
      var r = i.queue(n, t),
        e = r.length,
        u = r.shift(),
        f = i._queueHooks(n, t);
      "inprogress" === u && ((u = r.shift()), e--);
      u &&
        ("fx" === t && r.unshift("inprogress"),
        delete f.stop,
        u.call(
          n,
          function () {
            i.dequeue(n, t);
          },
          f
        ));
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
      for (
        "string" != typeof n && ((t = n), (n = void 0)), n = n || "fx";
        s--;

      )
        (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
      return h(), o.promise(t);
    },
  });
  var gr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    vt = new RegExp("^(?:([+-])=|)(" + gr + ")([a-z%]*)$", "i"),
    w = ["Top", "Right", "Bottom", "Left"],
    ti = function (n, t) {
      return (
        "none" === (n = t || n).style.display ||
        ("" === n.style.display &&
          i.contains(n.ownerDocument, n) &&
          "none" === i.css(n, "display"))
      );
    },
    nu = function (n, t, i, r) {
      var f,
        u,
        e = {};
      for (u in t) (e[u] = n.style[u]), (n.style[u] = t[u]);
      for (u in ((f = i.apply(n, r || [])), t)) n.style[u] = e[u];
      return f;
    };
  ai = {};
  i.fn.extend({
    show: function () {
      return ft(this, !0);
    },
    hide: function () {
      return ft(this);
    },
    toggle: function (n) {
      return "boolean" == typeof n
        ? n
          ? this.show()
          : this.hide()
        : this.each(function () {
            ti(this) ? i(this).show() : i(this).hide();
          });
    },
  });
  var iu = /^(?:checkbox|radio)$/i,
    ru = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    uu = /^$|^module$|\/(?:java|ecma)script/i,
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
  fu = /<|&#?\w+;/;
  !(function () {
    var n = f.createDocumentFragment().appendChild(f.createElement("div")),
      t = f.createElement("input");
    t.setAttribute("type", "radio");
    t.setAttribute("checked", "checked");
    t.setAttribute("name", "t");
    n.appendChild(t);
    e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
    n.innerHTML = "<textarea>x</textarea>";
    e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
  })();
  var ii = f.documentElement,
    ee = /^key/,
    oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ou = /^([^.]*)(?:\.(.+)|)/;
  i.event = {
    global: {},
    add: function (n, t, u, f, e) {
      var p,
        v,
        k,
        y,
        w,
        h,
        s,
        c,
        o,
        b,
        d,
        a = r.get(n);
      if (a)
        for (
          u.handler && ((u = (p = u).handler), (e = p.selector)),
            e && i.find.matchesSelector(ii, e),
            u.guid || (u.guid = i.guid++),
            (y = a.events) || (y = a.events = {}),
            (v = a.handle) ||
              (v = a.handle =
                function (t) {
                  if (void 0 !== i && i.event.triggered !== t.type)
                    return i.event.dispatch.apply(n, arguments);
                }),
            w = (t = (t || "").match(l) || [""]).length;
          w--;

        )
          (o = d = (k = ou.exec(t[w]) || [])[1]),
            (b = (k[2] || "").split(".").sort()),
            o &&
              ((s = i.event.special[o] || {}),
              (o = (e ? s.delegateType : s.bindType) || o),
              (s = i.event.special[o] || {}),
              (h = i.extend(
                {
                  type: o,
                  origType: d,
                  data: f,
                  handler: u,
                  guid: u.guid,
                  selector: e,
                  needsContext: e && i.expr.match.needsContext.test(e),
                  namespace: b.join("."),
                },
                p
              )),
              (c = y[o]) ||
                (((c = y[o] = []).delegateCount = 0),
                (s.setup && !1 !== s.setup.call(n, f, b, v)) ||
                  (n.addEventListener && n.addEventListener(o, v))),
              s.add &&
                (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)),
              e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
              (i.event.global[o] = !0));
    },
    remove: function (n, t, u, f, e) {
      var y,
        k,
        c,
        v,
        p,
        s,
        h,
        a,
        o,
        b,
        d,
        w = r.hasData(n) && r.get(n);
      if (w && (v = w.events)) {
        for (p = (t = (t || "").match(l) || [""]).length; p--; )
          if (
            ((o = d = (c = ou.exec(t[p]) || [])[1]),
            (b = (c[2] || "").split(".").sort()),
            o)
          ) {
            for (
              h = i.event.special[o] || {},
                a = v[(o = (f ? h.delegateType : h.bindType) || o)] || [],
                c =
                  c[2] &&
                  new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
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
                  h.remove && h.remove.call(n, s));
            k &&
              !a.length &&
              ((h.teardown && !1 !== h.teardown.call(n, b, w.handle)) ||
                i.removeEvent(n, o, w.handle),
              delete v[o]);
          } else for (o in v) i.event.remove(n, o + t[p], u, f, !0);
        i.isEmptyObject(v) && r.remove(n, "handle events");
      }
    },
    dispatch: function (n) {
      var u,
        h,
        c,
        e,
        f,
        l,
        t = i.event.fix(n),
        s = new Array(arguments.length),
        a = (r.get(this, "events") || {})[t.type] || [],
        o = i.event.special[t.type] || {};
      for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
      if (
        ((t.delegateTarget = this),
        !o.preDispatch || !1 !== o.preDispatch.call(this, t))
      ) {
        for (
          l = i.event.handlers.call(this, t, a), u = 0;
          (e = l[u++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = e.elem, h = 0;
            (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace && !t.rnamespace.test(f.namespace)) ||
              ((t.handleObj = f),
              (t.data = f.data),
              void 0 !==
                (c = (
                  (i.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, s)) &&
                !1 === (t.result = c) &&
                (t.preventDefault(), t.stopPropagation()));
        return o.postDispatch && o.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (n, t) {
      var f,
        h,
        u,
        e,
        o,
        c = [],
        s = t.delegateCount,
        r = n.target;
      if (s && r.nodeType && !("click" === n.type && n.button >= 1))
        for (; r !== this; r = r.parentNode || this)
          if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
            for (e = [], o = {}, f = 0; f < s; f++)
              void 0 === o[(u = (h = t[f]).selector + " ")] &&
                (o[u] = h.needsContext
                  ? i(u, this).index(r) > -1
                  : i.find(u, this, null, [r]).length),
                o[u] && e.push(h);
            e.length &&
              c.push({
                elem: r,
                handlers: e,
              });
          }
      return (
        (r = this),
        s < t.length &&
          c.push({
            elem: r,
            handlers: t.slice(s),
          }),
        c
      );
    },
    addProp: function (n, t) {
      Object.defineProperty(i.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: u(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function (t) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (n) {
      return n[i.expando] ? n : new i.Event(n);
    },
    special: {
      load: {
        noBubble: !0,
      },
      focus: {
        trigger: function () {
          if (this !== su() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === su() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && v(this, "input"))
            return this.click(), !1;
        },
        _default: function (n) {
          return v(n.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (n) {
          void 0 !== n.result &&
            n.originalEvent &&
            (n.originalEvent.returnValue = n.result);
        },
      },
    },
  };
  i.removeEvent = function (n, t, i) {
    n.removeEventListener && n.removeEventListener(t, i);
  };
  i.Event = function (n, t) {
    if (!(this instanceof i.Event)) return new i.Event(n, t);
    n && n.type
      ? ((this.originalEvent = n),
        (this.type = n.type),
        (this.isDefaultPrevented =
          n.defaultPrevented ||
          (void 0 === n.defaultPrevented && !1 === n.returnValue)
            ? ri
            : et),
        (this.target =
          n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target),
        (this.currentTarget = n.currentTarget),
        (this.relatedTarget = n.relatedTarget))
      : (this.type = n);
    t && i.extend(this, t);
    this.timeStamp = (n && n.timeStamp) || Date.now();
    this[i.expando] = !0;
  };
  i.Event.prototype = {
    constructor: i.Event,
    isDefaultPrevented: et,
    isPropagationStopped: et,
    isImmediatePropagationStopped: et,
    isSimulated: !1,
    preventDefault: function () {
      var n = this.originalEvent;
      this.isDefaultPrevented = ri;
      n && !this.isSimulated && n.preventDefault();
    },
    stopPropagation: function () {
      var n = this.originalEvent;
      this.isPropagationStopped = ri;
      n && !this.isSimulated && n.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var n = this.originalEvent;
      this.isImmediatePropagationStopped = ri;
      n && !this.isSimulated && n.stopImmediatePropagation();
      this.stopPropagation();
    },
  };
  i.each(
    {
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (n) {
        var t = n.button;
        return null == n.which && ee.test(n.type)
          ? null != n.charCode
            ? n.charCode
            : n.keyCode
          : !n.which && void 0 !== t && oe.test(n.type)
          ? 1 & t
            ? 1
            : 2 & t
            ? 3
            : 4 & t
            ? 2
            : 0
          : n.which;
      },
    },
    i.event.addProp
  );
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
            r = n.relatedTarget,
            f = n.handleObj;
          return (
            (r && (r === this || i.contains(this, r))) ||
              ((n.type = f.origType),
              (u = f.handler.apply(this, arguments)),
              (n.type = t)),
            u
          );
        },
      };
    }
  );
  i.fn.extend({
    on: function (n, t, i, r) {
      return yi(this, n, t, i, r);
    },
    one: function (n, t, i, r) {
      return yi(this, n, t, i, r, 1);
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
        (!1 !== t && "function" != typeof t) || ((r = t), (t = void 0)),
        !1 === r && (r = et),
        this.each(function () {
          i.event.remove(this, n, r, t);
        })
      );
    },
  });
  var se =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    he = /<script|<style|<link/i,
    ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
    le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  i.extend({
    htmlPrefilter: function (n) {
      return n.replace(se, "<$1></$2>");
    },
    clone: function (n, t, r) {
      var u,
        c,
        o,
        f,
        h = n.cloneNode(!0),
        l = i.contains(n.ownerDocument, n);
      if (
        !(
          e.noCloneChecked ||
          (1 !== n.nodeType && 11 !== n.nodeType) ||
          i.isXMLDoc(n)
        )
      )
        for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) ye(o[u], f[u]);
      if (t)
        if (r)
          for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++)
            cu(o[u], f[u]);
        else cu(n, h);
      return (f = s(h, "script")).length > 0 && vi(f, !l && s(n, "script")), h;
    },
    cleanData: function (n) {
      for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
        if (lt(t)) {
          if ((u = t[r.expando])) {
            if (u.events)
              for (f in u.events)
                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
            t[r.expando] = void 0;
          }
          t[o.expando] && (t[o.expando] = void 0);
        }
    },
  });
  i.fn.extend({
    detach: function (n) {
      return lu(this, n, !0);
    },
    remove: function (n) {
      return lu(this, n);
    },
    text: function (n) {
      return p(
        this,
        function (n) {
          return void 0 === n
            ? i.text(this)
            : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = n);
              });
        },
        null,
        n,
        arguments.length
      );
    },
    append: function () {
      return ot(this, arguments, function (n) {
        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
          hu(this, n).appendChild(n);
      });
    },
    prepend: function () {
      return ot(this, arguments, function (n) {
        if (
          1 === this.nodeType ||
          11 === this.nodeType ||
          9 === this.nodeType
        ) {
          var t = hu(this, n);
          t.insertBefore(n, t.firstChild);
        }
      });
    },
    before: function () {
      return ot(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this);
      });
    },
    after: function () {
      return ot(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
      });
    },
    empty: function () {
      for (var n, t = 0; null != (n = this[t]); t++)
        1 === n.nodeType && (i.cleanData(s(n, !1)), (n.textContent = ""));
      return this;
    },
    clone: function (n, t) {
      return (
        (n = null != n && n),
        (t = null == t ? n : t),
        this.map(function () {
          return i.clone(this, n, t);
        })
      );
    },
    html: function (n) {
      return p(
        this,
        function (n) {
          var t = this[0] || {},
            r = 0,
            u = this.length;
          if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
          if (
            "string" == typeof n &&
            !he.test(n) &&
            !c[(ru.exec(n) || ["", ""])[1].toLowerCase()]
          ) {
            n = i.htmlPrefilter(n);
            try {
              for (; r < u; r++)
                1 === (t = this[r] || {}).nodeType &&
                  (i.cleanData(s(t, !1)), (t.innerHTML = n));
              t = 0;
            } catch (n) {}
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
      return ot(
        this,
        arguments,
        function (t) {
          var r = this.parentNode;
          i.inArray(this, n) < 0 &&
            (i.cleanData(s(this)), r && r.replaceChild(t, this));
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
        for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
          (u = r === o ? this : this.clone(!0)),
            i(e[r])[t](u),
            si.apply(f, u.get());
        return this.pushStack(f);
      };
    }
  );
  var pi = new RegExp("^(" + gr + ")(?!px)[a-z%]+$", "i"),
    ui = function (t) {
      var i = t.ownerDocument.defaultView;
      return (i && i.opener) || (i = n), i.getComputedStyle(t);
    },
    pe = new RegExp(w.join("|"), "i");
  !(function () {
    function r() {
      if (t) {
        o.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        t.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        ii.appendChild(o).appendChild(t);
        var i = n.getComputedStyle(t);
        s = "1%" !== i.top;
        a = 12 === u(i.marginLeft);
        t.style.right = "60%";
        l = 36 === u(i.right);
        h = 36 === u(i.width);
        t.style.position = "absolute";
        c = 36 === t.offsetWidth || "absolute";
        ii.removeChild(o);
        t = null;
      }
    }
    function u(n) {
      return Math.round(parseFloat(n));
    }
    var s,
      h,
      c,
      l,
      a,
      o = f.createElement("div"),
      t = f.createElement("div");
    t.style &&
      ((t.style.backgroundClip = "content-box"),
      (t.cloneNode(!0).style.backgroundClip = ""),
      (e.clearCloneStyle = "content-box" === t.style.backgroundClip),
      i.extend(e, {
        boxSizingReliable: function () {
          return r(), h;
        },
        pixelBoxStyles: function () {
          return r(), l;
        },
        pixelPosition: function () {
          return r(), s;
        },
        reliableMarginLeft: function () {
          return r(), a;
        },
        scrollboxSize: function () {
          return r(), c;
        },
      }));
  })();
  var we = /^(none|table(?!-c[ea]).+)/,
    vu = /^--/,
    be = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    yu = {
      letterSpacing: "0",
      fontWeight: "400",
    },
    pu = ["Webkit", "Moz", "ms"],
    wu = f.createElement("div").style;
  i.extend({
    cssHooks: {
      opacity: {
        get: function (n, t) {
          if (t) {
            var i = yt(n, "opacity");
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
    cssProps: {},
    style: function (n, t, r, u) {
      if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
        var f,
          h,
          o,
          c = y(t),
          l = vu.test(t),
          s = n.style;
        if (
          (l || (t = bu(c)), (o = i.cssHooks[t] || i.cssHooks[c]), void 0 === r)
        )
          return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
        "string" == (h = typeof r) &&
          (f = vt.exec(r)) &&
          f[1] &&
          ((r = tu(n, t, f)), (h = "number"));
        null != r &&
          r == r &&
          ("number" === h && (r += (f && f[3]) || (i.cssNumber[c] ? "" : "px")),
          e.clearCloneStyle ||
            "" !== r ||
            0 !== t.indexOf("background") ||
            (s[t] = "inherit"),
          (o && "set" in o && void 0 === (r = o.set(n, r, u))) ||
            (l ? s.setProperty(t, r) : (s[t] = r)));
      }
    },
    css: function (n, t, r, u) {
      var f,
        e,
        o,
        s = y(t);
      return (
        vu.test(t) || (t = bu(s)),
        (o = i.cssHooks[t] || i.cssHooks[s]) &&
          "get" in o &&
          (f = o.get(n, !0, r)),
        void 0 === f && (f = yt(n, t, u)),
        "normal" === f && t in yu && (f = yu[t]),
        "" === r || r
          ? ((e = parseFloat(f)), !0 === r || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  });
  i.each(["height", "width"], function (n, t) {
    i.cssHooks[t] = {
      get: function (n, r, u) {
        if (r)
          return !we.test(i.css(n, "display")) ||
            (n.getClientRects().length && n.getBoundingClientRect().width)
            ? du(n, t, u)
            : nu(n, be, function () {
                return du(n, t, u);
              });
      },
      set: function (n, r, u) {
        var s,
          f = ui(n),
          h = "border-box" === i.css(n, "boxSizing", !1, f),
          o = u && wi(n, t, u, h, f);
        return (
          h &&
            e.scrollboxSize() === f.position &&
            (o -= Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] -
                parseFloat(f[t]) -
                wi(n, t, "border", !1, f) -
                0.5
            )),
          o &&
            (s = vt.exec(r)) &&
            "px" !== (s[3] || "px") &&
            ((n.style[t] = r), (r = i.css(n, t))),
          ku(0, r, o)
        );
      },
    };
  });
  i.cssHooks.marginLeft = au(e.reliableMarginLeft, function (n, t) {
    if (t)
      return (
        (parseFloat(yt(n, "marginLeft")) ||
          n.getBoundingClientRect().left -
            nu(
              n,
              {
                marginLeft: 0,
              },
              function () {
                return n.getBoundingClientRect().left;
              }
            )) + "px"
      );
  });
  i.each(
    {
      margin: "",
      padding: "",
      border: "Width",
    },
    function (n, t) {
      i.cssHooks[n + t] = {
        expand: function (i) {
          for (
            var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i];
            r < 4;
            r++
          )
            f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
          return f;
        },
      };
      "margin" !== n && (i.cssHooks[n + t].set = ku);
    }
  );
  i.fn.extend({
    css: function (n, t) {
      return p(
        this,
        function (n, t, r) {
          var f,
            e,
            o = {},
            u = 0;
          if (Array.isArray(t)) {
            for (f = ui(n), e = t.length; u < e; u++)
              o[t[u]] = i.css(n, t[u], !1, f);
            return o;
          }
          return void 0 !== r ? i.style(n, t, r) : i.css(n, t);
        },
        n,
        t,
        arguments.length > 1
      );
    },
  });
  i.Tween = h;
  h.prototype = {
    constructor: h,
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
      var n = h.propHooks[this.prop];
      return n && n.get ? n.get(this) : h.propHooks._default.get(this);
    },
    run: function (n) {
      var t,
        r = h.propHooks[this.prop];
      return (
        (this.pos = this.options.duration
          ? (t = i.easing[this.easing](
              n,
              this.options.duration * n,
              0,
              1,
              this.options.duration
            ))
          : (t = n)),
        (this.now = (this.end - this.start) * t + this.start),
        this.options.step && this.options.step.call(this.elem, this.now, this),
        r && r.set ? r.set(this) : h.propHooks._default.set(this),
        this
      );
    },
  };
  h.prototype.init.prototype = h.prototype;
  h.propHooks = {
    _default: {
      get: function (n) {
        var t;
        return 1 !== n.elem.nodeType ||
          (null != n.elem[n.prop] && null == n.elem.style[n.prop])
          ? n.elem[n.prop]
          : (t = i.css(n.elem, n.prop, "")) && "auto" !== t
          ? t
          : 0;
      },
      set: function (n) {
        i.fx.step[n.prop]
          ? i.fx.step[n.prop](n)
          : 1 !== n.elem.nodeType ||
            (null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop])
          ? (n.elem[n.prop] = n.now)
          : i.style(n.elem, n.prop, n.now + n.unit);
      },
    },
  };
  h.propHooks.scrollTop = h.propHooks.scrollLeft = {
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
  i.fx = h.prototype.init;
  i.fx.step = {};
  gu = /^(?:toggle|show|hide)$/;
  nf = /queueHooks$/;
  i.Animation = i.extend(a, {
    tweeners: {
      "*": [
        function (n, t) {
          var i = this.createTween(n, t);
          return tu(i.elem, n, vt.exec(t), i), i;
        },
      ],
    },
    tweener: function (n, t) {
      u(n) ? ((t = n), (n = ["*"])) : (n = n.match(l));
      for (var i, r = 0, f = n.length; r < f; r++)
        (i = n[r]),
          (a.tweeners[i] = a.tweeners[i] || []),
          a.tweeners[i].unshift(t);
    },
    prefilters: [
      function (n, t, u) {
        var f,
          y,
          w,
          c,
          b,
          h,
          o,
          l,
          k = "width" in t || "height" in t,
          v = this,
          p = {},
          s = n.style,
          a = n.nodeType && ti(n),
          e = r.get(n, "fxshow");
        for (f in (u.queue ||
          (null == (c = i._queueHooks(n, "fx")).unqueued &&
            ((c.unqueued = 0),
            (b = c.empty.fire),
            (c.empty.fire = function () {
              c.unqueued || b();
            })),
          c.unqueued++,
          v.always(function () {
            v.always(function () {
              c.unqueued--;
              i.queue(n, "fx").length || c.empty.fire();
            });
          })),
        t))
          if (((y = t[f]), gu.test(y))) {
            if (
              (delete t[f],
              (w = w || "toggle" === y),
              y === (a ? "hide" : "show"))
            ) {
              if ("show" !== y || !e || void 0 === e[f]) continue;
              a = !0;
            }
            p[f] = (e && e[f]) || i.style(n, f);
          }
        if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
          for (f in (k &&
            1 === n.nodeType &&
            ((u.overflow = [s.overflow, s.overflowX, s.overflowY]),
            null == (o = e && e.display) && (o = r.get(n, "display")),
            "none" === (l = i.css(n, "display")) &&
              (o
                ? (l = o)
                : (ft([n], !0),
                  (o = n.style.display || o),
                  (l = i.css(n, "display")),
                  ft([n]))),
            ("inline" === l || ("inline-block" === l && null != o)) &&
              "none" === i.css(n, "float") &&
              (h ||
                (v.done(function () {
                  s.display = o;
                }),
                null == o && ((l = s.display), (o = "none" === l ? "" : l))),
              (s.display = "inline-block"))),
          u.overflow &&
            ((s.overflow = "hidden"),
            v.always(function () {
              s.overflow = u.overflow[0];
              s.overflowX = u.overflow[1];
              s.overflowY = u.overflow[2];
            })),
          (h = !1),
          p))
            h ||
              (e
                ? "hidden" in e && (a = e.hidden)
                : (e = r.access(n, "fxshow", {
                    display: o,
                  })),
              w && (e.hidden = !a),
              a && ft([n], !0),
              v.done(function () {
                for (f in (a || ft([n]), r.remove(n, "fxshow"), p))
                  i.style(n, f, p[f]);
              })),
              (h = rf(a ? e[f] : 0, f, v)),
              f in e ||
                ((e[f] = h.start), a && ((h.end = h.start), (h.start = 0)));
      },
    ],
    prefilter: function (n, t) {
      t ? a.prefilters.unshift(n) : a.prefilters.push(n);
    },
  });
  i.speed = function (n, t, r) {
    var f =
      n && "object" == typeof n
        ? i.extend({}, n)
        : {
            complete: r || (!r && t) || (u(n) && n),
            duration: n,
            easing: (r && t) || (t && !u(t) && t),
          };
    return (
      i.fx.off
        ? (f.duration = 0)
        : "number" != typeof f.duration &&
          (f.duration =
            f.duration in i.fx.speeds
              ? i.fx.speeds[f.duration]
              : i.fx.speeds._default),
      (null != f.queue && !0 !== f.queue) || (f.queue = "fx"),
      (f.old = f.complete),
      (f.complete = function () {
        u(f.old) && f.old.call(this);
        f.queue && i.dequeue(this, f.queue);
      }),
      f
    );
  };
  i.fn.extend({
    fadeTo: function (n, t, i, r) {
      return this.filter(ti).css("opacity", 0).show().end().animate(
        {
          opacity: t,
        },
        n,
        i,
        r
      );
    },
    animate: function (n, t, u, f) {
      var s = i.isEmptyObject(n),
        o = i.speed(t, u, f),
        e = function () {
          var t = a(this, i.extend({}, n), o);
          (s || r.get(this, "finish")) && t.stop(!0);
        };
      return (
        (e.finish = e),
        s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
      );
    },
    stop: function (n, t, u) {
      var f = function (n) {
        var t = n.stop;
        delete n.stop;
        t(u);
      };
      return (
        "string" != typeof n && ((u = t), (t = n), (n = void 0)),
        t && !1 !== n && this.queue(n || "fx", []),
        this.each(function () {
          var s = !0,
            t = null != n && n + "queueHooks",
            o = i.timers,
            e = r.get(this);
          if (t) e[t] && e[t].stop && f(e[t]);
          else for (t in e) e[t] && e[t].stop && nf.test(t) && f(e[t]);
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
        !1 !== n && (n = n || "fx"),
        this.each(function () {
          var t,
            e = r.get(this),
            u = e[n + "queue"],
            o = e[n + "queueHooks"],
            f = i.timers,
            s = u ? u.length : 0;
          for (
            e.finish = !0,
              i.queue(this, n, []),
              o && o.stop && o.stop.call(this, !0),
              t = f.length;
            t--;

          )
            f[t].elem === this &&
              f[t].queue === n &&
              (f[t].anim.stop(!0), f.splice(t, 1));
          for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
          delete e.finish;
        })
      );
    },
  });
  i.each(["toggle", "show", "hide"], function (n, t) {
    var r = i.fn[t];
    i.fn[t] = function (n, i, u) {
      return null == n || "boolean" == typeof n
        ? r.apply(this, arguments)
        : this.animate(ei(t, !0), n, i, u);
    };
  });
  i.each(
    {
      slideDown: ei("show"),
      slideUp: ei("hide"),
      slideToggle: ei("toggle"),
      fadeIn: {
        opacity: "show",
      },
      fadeOut: {
        opacity: "hide",
      },
      fadeToggle: {
        opacity: "toggle",
      },
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
    for (st = Date.now(); n < t.length; n++)
      (r = t[n])() || t[n] !== r || t.splice(n--, 1);
    t.length || i.fx.stop();
    st = void 0;
  };
  i.fx.timer = function (n) {
    i.timers.push(n);
    i.fx.start();
  };
  i.fx.interval = 13;
  i.fx.start = function () {
    fi || ((fi = !0), bi());
  };
  i.fx.stop = function () {
    fi = null;
  };
  i.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400,
  };
  (i.fn.delay = function (t, r) {
    return (
      (t = (i.fx && i.fx.speeds[t]) || t),
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
      var n = f.createElement("input"),
        t = f.createElement("select").appendChild(f.createElement("option"));
      n.type = "checkbox";
      e.checkOn = "" !== n.value;
      e.optSelected = t.selected;
      (n = f.createElement("input")).value = "t";
      n.type = "radio";
      e.radioValue = "t" === n.value;
    })();
  ht = i.expr.attrHandle;
  i.fn.extend({
    attr: function (n, t) {
      return p(this, i.attr, n, t, arguments.length > 1);
    },
    removeAttr: function (n) {
      return this.each(function () {
        i.removeAttr(this, n);
      });
    },
  });
  i.extend({
    attr: function (n, t, r) {
      var f,
        u,
        e = n.nodeType;
      if (3 !== e && 8 !== e && 2 !== e)
        return void 0 === n.getAttribute
          ? i.prop(n, t, r)
          : ((1 === e && i.isXMLDoc(n)) ||
              (u =
                i.attrHooks[t.toLowerCase()] ||
                (i.expr.match.bool.test(t) ? uf : void 0)),
            void 0 !== r
              ? null === r
                ? void i.removeAttr(n, t)
                : u && "set" in u && void 0 !== (f = u.set(n, r, t))
                ? f
                : (n.setAttribute(t, r + ""), r)
              : u && "get" in u && null !== (f = u.get(n, t))
              ? f
              : null == (f = i.find.attr(n, t))
              ? void 0
              : f);
    },
    attrHooks: {
      type: {
        set: function (n, t) {
          if (!e.radioValue && "radio" === t && v(n, "input")) {
            var i = n.value;
            return n.setAttribute("type", t), i && (n.value = i), t;
          }
        },
      },
    },
    removeAttr: function (n, t) {
      var i,
        u = 0,
        r = t && t.match(l);
      if (r && 1 === n.nodeType) for (; (i = r[u++]); ) n.removeAttribute(i);
    },
  });
  uf = {
    set: function (n, t, r) {
      return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r;
    },
  };
  i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
    var r = ht[t] || i.find.attr;
    ht[t] = function (n, t, i) {
      var f,
        e,
        u = t.toLowerCase();
      return (
        i ||
          ((e = ht[u]),
          (ht[u] = f),
          (f = null != r(n, t, i) ? u : null),
          (ht[u] = e)),
        f
      );
    };
  });
  ff = /^(?:input|select|textarea|button)$/i;
  ef = /^(?:a|area)$/i;
  i.fn.extend({
    prop: function (n, t) {
      return p(this, i.prop, n, t, arguments.length > 1);
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
          (1 === e && i.isXMLDoc(n)) ||
            ((t = i.propFix[t] || t), (u = i.propHooks[t])),
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
          return t
            ? parseInt(t, 10)
            : ff.test(n.nodeName) || (ef.test(n.nodeName) && n.href)
            ? 0
            : -1;
        },
      },
    },
    propFix: {
      for: "htmlFor",
      class: "className",
    },
  });
  e.optSelected ||
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
  i.fn.extend({
    addClass: function (n) {
      var o,
        t,
        r,
        f,
        e,
        s,
        h,
        c = 0;
      if (u(n))
        return this.each(function (t) {
          i(this).addClass(n.call(this, t, nt(this)));
        });
      if ((o = ki(n)).length)
        for (; (t = this[c++]); )
          if (((f = nt(t)), (r = 1 === t.nodeType && " " + g(f) + " "))) {
            for (s = 0; (e = o[s++]); )
              r.indexOf(" " + e + " ") < 0 && (r += e + " ");
            f !== (h = g(r)) && t.setAttribute("class", h);
          }
      return this;
    },
    removeClass: function (n) {
      var o,
        r,
        t,
        f,
        e,
        s,
        h,
        c = 0;
      if (u(n))
        return this.each(function (t) {
          i(this).removeClass(n.call(this, t, nt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((o = ki(n)).length)
        for (; (r = this[c++]); )
          if (((f = nt(r)), (t = 1 === r.nodeType && " " + g(f) + " "))) {
            for (s = 0; (e = o[s++]); )
              for (; t.indexOf(" " + e + " ") > -1; )
                t = t.replace(" " + e + " ", " ");
            f !== (h = g(t)) && r.setAttribute("class", h);
          }
      return this;
    },
    toggleClass: function (n, t) {
      var f = typeof n,
        e = "string" === f || Array.isArray(n);
      return "boolean" == typeof t && e
        ? t
          ? this.addClass(n)
          : this.removeClass(n)
        : u(n)
        ? this.each(function (r) {
            i(this).toggleClass(n.call(this, r, nt(this), t), t);
          })
        : this.each(function () {
            var t, o, u, s;
            if (e)
              for (o = 0, u = i(this), s = ki(n); (t = s[o++]); )
                u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
            else
              (void 0 !== n && "boolean" !== f) ||
                ((t = nt(this)) && r.set(this, "__className__", t),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    t || !1 === n ? "" : r.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (n) {
      for (var t, r = 0, i = " " + n + " "; (t = this[r++]); )
        if (1 === t.nodeType && (" " + g(nt(t)) + " ").indexOf(i) > -1)
          return !0;
      return !1;
    },
  });
  of = /\r/g;
  i.fn.extend({
    val: function (n) {
      var t,
        r,
        e,
        f = this[0];
      return arguments.length
        ? ((e = u(n)),
          this.each(function (r) {
            var u;
            1 === this.nodeType &&
              (null == (u = e ? n.call(this, r, i(this).val()) : n)
                ? (u = "")
                : "number" == typeof u
                ? (u += "")
                : Array.isArray(u) &&
                  (u = i.map(u, function (n) {
                    return null == n ? "" : n + "";
                  })),
              ((t =
                i.valHooks[this.type] ||
                i.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, u, "value")) ||
                (this.value = u));
          }))
        : f
        ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (r = t.get(f, "value"))
          ? r
          : "string" == typeof (r = f.value)
          ? r.replace(of, "")
          : null == r
          ? ""
          : r
        : void 0;
    },
  });
  i.extend({
    valHooks: {
      option: {
        get: function (n) {
          var t = i.find.attr(n, "value");
          return null != t ? t : g(i.text(n));
        },
      },
      select: {
        get: function (n) {
          for (
            var e,
              t,
              o = n.options,
              u = n.selectedIndex,
              f = "select-one" === n.type,
              s = f ? null : [],
              h = f ? u + 1 : o.length,
              r = u < 0 ? h : f ? u : 0;
            r < h;
            r++
          )
            if (
              ((t = o[r]).selected || r === u) &&
              !t.disabled &&
              (!t.parentNode.disabled || !v(t.parentNode, "optgroup"))
            ) {
              if (((e = i(t).val()), f)) return e;
              s.push(e);
            }
          return s;
        },
        set: function (n, t) {
          for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; )
            ((u = f[o]).selected =
              i.inArray(i.valHooks.option.get(u), e) > -1) && (r = !0);
          return r || (n.selectedIndex = -1), e;
        },
      },
    },
  });
  i.each(["radio", "checkbox"], function () {
    i.valHooks[this] = {
      set: function (n, t) {
        if (Array.isArray(t))
          return (n.checked = i.inArray(i(n).val(), t) > -1);
      },
    };
    e.checkOn ||
      (i.valHooks[this].get = function (n) {
        return null === n.getAttribute("value") ? "on" : n.value;
      });
  });
  e.focusin = "onfocusin" in n;
  di = /^(?:focusinfocus|focusoutblur)$/;
  gi = function (n) {
    n.stopPropagation();
  };
  i.extend(i.event, {
    trigger: function (t, e, o, s) {
      var k,
        c,
        l,
        d,
        v,
        y,
        a,
        p,
        w = [o || f],
        h = kt.call(t, "type") ? t.type : t,
        b = kt.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((c = p = l = o = o || f),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !di.test(h + i.event.triggered) &&
          (h.indexOf(".") > -1 && ((h = (b = h.split(".")).shift()), b.sort()),
          (v = h.indexOf(":") < 0 && "on" + h),
          ((t = t[i.expando]
            ? t
            : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = o),
          (e = null == e ? [t] : i.makeArray(e, [t])),
          (a = i.event.special[h] || {}),
          s || !a.trigger || !1 !== a.trigger.apply(o, e)))
      ) {
        if (!s && !a.noBubble && !tt(o)) {
          for (
            d = a.delegateType || h, di.test(d + h) || (c = c.parentNode);
            c;
            c = c.parentNode
          )
            w.push(c), (l = c);
          l === (o.ownerDocument || f) &&
            w.push(l.defaultView || l.parentWindow || n);
        }
        for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
          (p = c),
            (t.type = k > 1 ? d : a.bindType || h),
            (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) &&
              y.apply(c, e),
            (y = v && c[v]) &&
              y.apply &&
              lt(c) &&
              ((t.result = y.apply(c, e)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          s ||
            t.isDefaultPrevented() ||
            (a._default && !1 !== a._default.apply(w.pop(), e)) ||
            !lt(o) ||
            (v &&
              u(o[h]) &&
              !tt(o) &&
              ((l = o[v]) && (o[v] = null),
              (i.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, gi),
              o[h](),
              t.isPropagationStopped() && p.removeEventListener(h, gi),
              (i.event.triggered = void 0),
              l && (o[v] = l))),
          t.result
        );
      }
    },
    simulate: function (n, t, r) {
      var u = i.extend(new i.Event(), r, {
        type: n,
        isSimulated: !0,
      });
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
  e.focusin ||
    i.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (n, t) {
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
            f
              ? r.access(i, t, f)
              : (i.removeEventListener(n, u, !0), r.remove(i, t));
          },
        };
      }
    );
  var pt = n.location,
    sf = Date.now(),
    nr = /\?/;
  i.parseXML = function (t) {
    var r;
    if (!t || "string" != typeof t) return null;
    try {
      r = new n.DOMParser().parseFromString(t, "text/xml");
    } catch (n) {
      r = void 0;
    }
    return (
      (r && !r.getElementsByTagName("parsererror").length) ||
        i.error("Invalid XML: " + t),
      r
    );
  };
  var ke = /\[\]$/,
    hf = /\r?\n/g,
    de = /^(?:submit|button|image|reset|file)$/i,
    ge = /^(?:input|select|textarea|keygen)/i;
  i.param = function (n, t) {
    var r,
      f = [],
      e = function (n, t) {
        var i = u(t) ? t() : t;
        f[f.length] =
          encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (Array.isArray(n) || (n.jquery && !i.isPlainObject(n)))
      i.each(n, function () {
        e(this.name, this.value);
      });
    else for (r in n) tr(r, n[r], t, e);
    return f.join("&");
  };
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
            ge.test(this.nodeName) &&
            !de.test(n) &&
            (this.checked || !iu.test(n))
          );
        })
        .map(function (n, t) {
          var r = i(this).val();
          return null == r
            ? null
            : Array.isArray(r)
            ? i.map(r, function (n) {
                return {
                  name: t.name,
                  value: n.replace(hf, "\r\n"),
                };
              })
            : {
                name: t.name,
                value: r.replace(hf, "\r\n"),
              };
        })
        .get();
    },
  });
  var no = /%20/g,
    to = /#.*$/,
    io = /([?&])_=[^&]*/,
    ro = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    uo = /^(?:GET|HEAD)$/,
    fo = /^\/\//,
    cf = {},
    ir = {},
    lf = "*/".concat("*"),
    rr = f.createElement("a");
  return (
    (rr.href = pt.href),
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: pt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            pt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": lf,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": i.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (n, t) {
        return t ? ur(ur(n, i.ajaxSettings), t) : ur(i.ajaxSettings, n);
      },
      ajaxPrefilter: af(cf),
      ajaxTransport: af(ir),
      ajax: function (t, r) {
        function b(t, r, f, c) {
          var v,
            rt,
            b,
            p,
            g,
            l = r;
          s ||
            ((s = !0),
            d && n.clearTimeout(d),
            (a = void 0),
            (k = c || ""),
            (e.readyState = t > 0 ? 4 : 0),
            (v = (t >= 200 && t < 300) || 304 === t),
            f &&
              (p = (function (n, t, i) {
                for (
                  var e, u, f, o, s = n.contents, r = n.dataTypes;
                  "*" === r[0];

                )
                  r.shift(),
                    void 0 === e &&
                      (e = n.mimeType || t.getResponseHeader("Content-Type"));
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
              })(u, e, f)),
            (p = (function (n, t, i, r) {
              var h,
                u,
                f,
                s,
                e,
                o = {},
                c = n.dataTypes.slice();
              if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
              for (u = c.shift(); u; )
                if (
                  (n.responseFields[u] && (i[n.responseFields[u]] = t),
                  !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                  (e = u),
                  (u = c.shift()))
                )
                  if ("*" === u) u = e;
                  else if ("*" !== e && e !== u) {
                    if (!(f = o[e + " " + u] || o["* " + u]))
                      for (h in o)
                        if (
                          (s = h.split(" "))[1] === u &&
                          (f = o[e + " " + s[0]] || o["* " + s[0]])
                        ) {
                          !0 === f
                            ? (f = o[h])
                            : !0 !== o[h] && ((u = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== f)
                      if (f && n.throws) t = f(t);
                      else
                        try {
                          t = f(t);
                        } catch (n) {
                          return {
                            state: "parsererror",
                            error: f
                              ? n
                              : "No conversion from " + e + " to " + u,
                          };
                        }
                  }
              return {
                state: "success",
                data: t,
              };
            })(u, p, e, v)),
            v
              ? (u.ifModified &&
                  ((g = e.getResponseHeader("Last-Modified")) &&
                    (i.lastModified[o] = g),
                  (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
                204 === t || "HEAD" === u.type
                  ? (l = "nocontent")
                  : 304 === t
                  ? (l = "notmodified")
                  : ((l = p.state), (rt = p.data), (v = !(b = p.error))))
              : ((b = l), (!t && l) || ((l = "error"), t < 0 && (t = 0))),
            (e.status = t),
            (e.statusText = (r || l) + ""),
            v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
            e.statusCode(w),
            (w = void 0),
            y &&
              nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
            it.fireWith(h, [e, l]),
            y &&
              (nt.trigger("ajaxComplete", [e, u]),
              --i.active || i.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((r = t), (t = void 0));
        r = r || {};
        var a,
          o,
          k,
          v,
          d,
          c,
          s,
          y,
          g,
          p,
          u = i.ajaxSetup({}, r),
          h = u.context || u,
          nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
          tt = i.Deferred(),
          it = i.Callbacks("once memory"),
          w = u.statusCode || {},
          rt = {},
          ut = {},
          ft = "canceled",
          e = {
            readyState: 0,
            getResponseHeader: function (n) {
              var t;
              if (s) {
                if (!v)
                  for (v = {}; (t = ro.exec(k)); ) v[t[1].toLowerCase()] = t[2];
                t = v[n.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return s ? k : null;
            },
            setRequestHeader: function (n, t) {
              return (
                null == s &&
                  ((n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n),
                  (rt[n] = t)),
                this
              );
            },
            overrideMimeType: function (n) {
              return null == s && (u.mimeType = n), this;
            },
            statusCode: function (n) {
              var t;
              if (n)
                if (s) e.always(n[e.status]);
                else for (t in n) w[t] = [w[t], n[t]];
              return this;
            },
            abort: function (n) {
              var t = n || ft;
              return a && a.abort(t), b(0, t), this;
            },
          };
        if (
          (tt.promise(e),
          (u.url = ((t || u.url || pt.href) + "").replace(
            fo,
            pt.protocol + "//"
          )),
          (u.type = r.method || r.type || u.method || u.type),
          (u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""]),
          null == u.crossDomain)
        ) {
          c = f.createElement("a");
          try {
            c.href = u.url;
            c.href = c.href;
            u.crossDomain =
              rr.protocol + "//" + rr.host != c.protocol + "//" + c.host;
          } catch (n) {
            u.crossDomain = !0;
          }
        }
        if (
          (u.data &&
            u.processData &&
            "string" != typeof u.data &&
            (u.data = i.param(u.data, u.traditional)),
          vf(cf, u, r, e),
          s)
        )
          return e;
        for (g in ((y = i.event && u.global) &&
          0 == i.active++ &&
          i.event.trigger("ajaxStart"),
        (u.type = u.type.toUpperCase()),
        (u.hasContent = !uo.test(u.type)),
        (o = u.url.replace(to, "")),
        u.hasContent
          ? u.data &&
            u.processData &&
            0 ===
              (u.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (u.data = u.data.replace(no, "+"))
          : ((p = u.url.slice(o.length)),
            u.data &&
              (u.processData || "string" == typeof u.data) &&
              ((o += (nr.test(o) ? "&" : "?") + u.data), delete u.data),
            !1 === u.cache &&
              ((o = o.replace(io, "$1")),
              (p = (nr.test(o) ? "&" : "?") + "_=" + sf++ + p)),
            (u.url = o + p)),
        u.ifModified &&
          (i.lastModified[o] &&
            e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
          i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])),
        ((u.data && u.hasContent && !1 !== u.contentType) || r.contentType) &&
          e.setRequestHeader("Content-Type", u.contentType),
        e.setRequestHeader(
          "Accept",
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] +
                ("*" !== u.dataTypes[0] ? ", " + lf + "; q=0.01" : "")
            : u.accepts["*"]
        ),
        u.headers))
          e.setRequestHeader(g, u.headers[g]);
        if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s))
          return e.abort();
        if (
          ((ft = "abort"),
          it.add(u.complete),
          e.done(u.success),
          e.fail(u.error),
          (a = vf(ir, u, r, e)))
        ) {
          if (((e.readyState = 1), y && nt.trigger("ajaxSend", [e, u]), s))
            return e;
          u.async &&
            u.timeout > 0 &&
            (d = n.setTimeout(function () {
              e.abort("timeout");
            }, u.timeout));
          try {
            s = !1;
            a.send(rt, b);
          } catch (n) {
            if (s) throw n;
            b(-1, n);
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
    }),
    i.each(["get", "post"], function (n, t) {
      i[t] = function (n, r, f, e) {
        return (
          u(r) && ((e = e || f), (f = r), (r = void 0)),
          i.ajax(
            i.extend(
              {
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f,
              },
              i.isPlainObject(n) && n
            )
          )
        );
      };
    }),
    (i._evalUrl = function (n) {
      return i.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    i.fn.extend({
      wrapAll: function (n) {
        var t;
        return (
          this[0] &&
            (u(n) && (n = n.call(this[0])),
            (t = i(n, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var n = this; n.firstElementChild; )
                  n = n.firstElementChild;
                return n;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return u(n)
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
        var t = u(n);
        return this.each(function (r) {
          i(this).wrapAll(t ? n.call(this, r) : n);
        });
      },
      unwrap: function (n) {
        return (
          this.parent(n)
            .not("body")
            .each(function () {
              i(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (i.expr.pseudos.hidden = function (n) {
      return !i.expr.pseudos.visible(n);
    }),
    (i.expr.pseudos.visible = function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }),
    (i.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (n) {}
    }),
    (yf = {
      0: 200,
      1223: 204,
    }),
    (ct = i.ajaxSettings.xhr()),
    (e.cors = !!ct && "withCredentials" in ct),
    (e.ajax = ct = !!ct),
    i.ajaxTransport(function (t) {
      var i, r;
      if (e.cors || (ct && !t.crossDomain))
        return {
          send: function (u, f) {
            var o,
              e = t.xhr();
            if (
              (e.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (o in t.xhrFields) e[o] = t.xhrFields[o];
            for (o in (t.mimeType &&
              e.overrideMimeType &&
              e.overrideMimeType(t.mimeType),
            t.crossDomain ||
              u["X-Requested-With"] ||
              (u["X-Requested-With"] = "XMLHttpRequest"),
            u))
              e.setRequestHeader(o, u[o]);
            i = function (n) {
              return function () {
                i &&
                  ((i =
                    r =
                    e.onload =
                    e.onerror =
                    e.onabort =
                    e.ontimeout =
                    e.onreadystatechange =
                      null),
                  "abort" === n
                    ? e.abort()
                    : "error" === n
                    ? "number" != typeof e.status
                      ? f(0, "error")
                      : f(e.status, e.statusText)
                    : f(
                        yf[e.status] || e.status,
                        e.statusText,
                        "text" !== (e.responseType || "text") ||
                          "string" != typeof e.responseText
                          ? {
                              binary: e.response,
                            }
                          : {
                              text: e.responseText,
                            },
                        e.getAllResponseHeaders()
                      ));
              };
            };
            e.onload = i();
            r = e.onerror = e.ontimeout = i("error");
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
            } catch (n) {
              if (i) throw n;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    i.ajaxPrefilter(function (n) {
      n.crossDomain && (n.contents.script = !1);
    }),
    i.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
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
      var r, t;
      if (n.crossDomain)
        return {
          send: function (u, e) {
            r = i("<script>")
              .prop({
                charset: n.scriptCharset,
                src: n.url,
              })
              .on(
                "load error",
                (t = function (n) {
                  r.remove();
                  t = null;
                  n && e("error" === n.type ? 404 : 200, n.type);
                })
              );
            f.head.appendChild(r[0]);
          },
          abort: function () {
            t && t();
          },
        };
    }),
    (fr = []),
    (oi = /(=)\?(?=&|$)|\?\?/),
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var n = fr.pop() || i.expando + "_" + sf++;
        return (this[n] = !0), n;
      },
    }),
    i.ajaxPrefilter("json jsonp", function (t, r, f) {
      var e,
        o,
        s,
        h =
          !1 !== t.jsonp &&
          (oi.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              oi.test(t.data) &&
              "data");
      if (h || "jsonp" === t.dataTypes[0])
        return (
          (e = t.jsonpCallback =
            u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          h
            ? (t[h] = t[h].replace(oi, "$1" + e))
            : !1 !== t.jsonp &&
              (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
          (t.converters["script json"] = function () {
            return s || i.error(e + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = n[e]),
          (n[e] = function () {
            s = arguments;
          }),
          f.always(function () {
            void 0 === o ? i(n).removeProp(e) : (n[e] = o);
            t[e] && ((t.jsonpCallback = r.jsonpCallback), fr.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0;
          }),
          "script"
        );
    }),
    (e.createHTMLDocument = (function () {
      var n = f.implementation.createHTMLDocument("").body;
      return (
        (n.innerHTML = "<form></form><form></form>"), 2 === n.childNodes.length
      );
    })()),
    (i.parseHTML = function (n, t, r) {
      return "string" != typeof n
        ? []
        : ("boolean" == typeof t && ((r = t), (t = !1)),
          t ||
            (e.createHTMLDocument
              ? (((s = (t =
                  f.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = f.location.href),
                t.head.appendChild(s))
              : (t = f)),
          (u = !r && []),
          (o = ci.exec(n))
            ? [t.createElement(o[1])]
            : ((o = eu([n], t, u)),
              u && u.length && i(u).remove(),
              i.merge([], o.childNodes)));
      var s, o, u;
    }),
    (i.fn.load = function (n, t, r) {
      var f,
        s,
        h,
        e = this,
        o = n.indexOf(" ");
      return (
        o > -1 && ((f = g(n.slice(o))), (n = n.slice(0, o))),
        u(t)
          ? ((r = t), (t = void 0))
          : t && "object" == typeof t && (s = "POST"),
        e.length > 0 &&
          i
            .ajax({
              url: n,
              type: s || "GET",
              dataType: "html",
              data: t,
            })
            .done(function (n) {
              h = arguments;
              e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n);
            })
            .always(
              r &&
                function (n, t) {
                  e.each(function () {
                    r.apply(this, h || [n.responseText, t, n]);
                  });
                }
            ),
        this
      );
    }),
    i.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (n, t) {
        i.fn[t] = function (n) {
          return this.on(t, n);
        };
      }
    ),
    (i.expr.pseudos.animated = function (n) {
      return i.grep(i.timers, function (t) {
        return n === t.elem;
      }).length;
    }),
    (i.offset = {
      setOffset: function (n, t, r) {
        var v,
          o,
          s,
          h,
          f,
          c,
          l = i.css(n, "position"),
          a = i(n),
          e = {};
        "static" === l && (n.style.position = "relative");
        f = a.offset();
        s = i.css(n, "top");
        c = i.css(n, "left");
        ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1
          ? ((h = (v = a.position()).top), (o = v.left))
          : ((h = parseFloat(s) || 0), (o = parseFloat(c) || 0));
        u(t) && (t = t.call(n, r, i.extend({}, f)));
        null != t.top && (e.top = t.top - f.top + h);
        null != t.left && (e.left = t.left - f.left + o);
        "using" in t ? t.using.call(n, e) : a.css(e);
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
        var r,
          u,
          t = this[0];
        if (t)
          return t.getClientRects().length
            ? ((r = t.getBoundingClientRect()),
              (u = t.ownerDocument.defaultView),
              {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              };
      },
      position: function () {
        if (this[0]) {
          var n,
            r,
            u,
            t = this[0],
            f = {
              top: 0,
              left: 0,
            };
          if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
          else {
            for (
              r = this.offset(),
                u = t.ownerDocument,
                n = t.offsetParent || u.documentElement;
              n &&
              (n === u.body || n === u.documentElement) &&
              "static" === i.css(n, "position");

            )
              n = n.parentNode;
            n &&
              n !== t &&
              1 === n.nodeType &&
              (((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0)),
              (f.left += i.css(n, "borderLeftWidth", !0)));
          }
          return {
            top: r.top - f.top - i.css(t, "marginTop", !0),
            left: r.left - f.left - i.css(t, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var n = this.offsetParent;
            n && "static" === i.css(n, "position");

          )
            n = n.offsetParent;
          return n || ii;
        });
      },
    }),
    i.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function (i) {
          return p(
            this,
            function (n, i, u) {
              var f;
              if (
                (tt(n) ? (f = n) : 9 === n.nodeType && (f = n.defaultView),
                void 0 === u)
              )
                return f ? f[t] : n[i];
              f
                ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset)
                : (n[i] = u);
            },
            n,
            i,
            arguments.length
          );
        };
      }
    ),
    i.each(["top", "left"], function (n, t) {
      i.cssHooks[t] = au(e.pixelPosition, function (n, r) {
        if (r)
          return (r = yt(n, t)), pi.test(r) ? i(n).position()[t] + "px" : r;
      });
    }),
    i.each(
      {
        Height: "height",
        Width: "width",
      },
      function (n, t) {
        i.each(
          {
            padding: "inner" + n,
            content: t,
            "": "outer" + n,
          },
          function (r, u) {
            i.fn[u] = function (f, e) {
              var o = arguments.length && (r || "boolean" != typeof f),
                s = r || (!0 === f || !0 === e ? "margin" : "border");
              return p(
                this,
                function (t, r, f) {
                  var e;
                  return tt(t)
                    ? 0 === u.indexOf("outer")
                      ? t["inner" + n]
                      : t.document.documentElement["client" + n]
                    : 9 === t.nodeType
                    ? ((e = t.documentElement),
                      Math.max(
                        t.body["scroll" + n],
                        e["scroll" + n],
                        t.body["offset" + n],
                        e["offset" + n],
                        e["client" + n]
                      ))
                    : void 0 === f
                    ? i.css(t, r, s)
                    : i.style(t, r, f, s);
                },
                t,
                o ? f : void 0,
                o
              );
            };
          }
        );
      }
    ),
    i.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (n, t) {
        i.fn[t] = function (n, i) {
          return arguments.length > 0
            ? this.on(t, null, n, i)
            : this.trigger(t);
        };
      }
    ),
    i.fn.extend({
      hover: function (n, t) {
        return this.mouseenter(n).mouseleave(t || n);
      },
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
        return 1 === arguments.length
          ? this.off(n, "**")
          : this.off(t, n || "**", i);
      },
    }),
    (i.proxy = function (n, t) {
      var r, f, e;
      if (("string" == typeof t && ((r = n[t]), (t = n), (n = r)), u(n)))
        return (
          (f = d.call(arguments, 2)),
          ((e = function () {
            return n.apply(t || this, f.concat(d.call(arguments)));
          }).guid = n.guid =
            n.guid || i.guid++),
          e
        );
    }),
    (i.holdReady = function (n) {
      n ? i.readyWait++ : i.ready(!0);
    }),
    (i.isArray = Array.isArray),
    (i.parseJSON = JSON.parse),
    (i.nodeName = v),
    (i.isFunction = u),
    (i.isWindow = tt),
    (i.camelCase = y),
    (i.type = it),
    (i.now = Date.now),
    (i.isNumeric = function (n) {
      var t = i.type(n);
      return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return i;
      }),
    (pf = n.jQuery),
    (wf = n.$),
    (i.noConflict = function (t) {
      return n.$ === i && (n.$ = wf), t && n.jQuery === i && (n.jQuery = pf), i;
    }),
    t || (n.jQuery = n.$ = i),
    i
  );
}),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "object" == typeof module && module.exports
      ? (module.exports = function (t, i) {
          return (
            void 0 === i &&
              (i =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(t)),
            n(i),
            i
          );
        })
      : n(jQuery);
  })(function (n) {
    "use strict";
    var t = n(document),
      i = n(window),
      f = ["a", "e", "i", "o", "u", "n", "c", "y"],
      r = [
        /[\xE0-\xE5]/g,
        /[\xE8-\xEB]/g,
        /[\xEC-\xEF]/g,
        /[\xF2-\xF6]/g,
        /[\xF9-\xFC]/g,
        /[\xF1]/g,
        /[\xE7]/g,
        /[\xFD-\xFF]/g,
      ],
      u = function (t, i) {
        this.element = t;
        this.$element = n(t);
        this.state = {
          multiple: !!this.$element.attr("multiple"),
          enabled: !1,
          opened: !1,
          currValue: -1,
          selectedIdx: -1,
          highlightedIdx: -1,
        };
        this.eventTriggers = {
          open: this.open,
          close: this.close,
          destroy: this.destroy,
          refresh: this.refresh,
          init: this.init,
        };
        this.init(i);
      };
    u.prototype = {
      utils: {
        isMobile: function () {
          return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
        },
        escapeRegExp: function (n) {
          return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        },
        replaceDiacritics: function (n) {
          for (var t = r.length; t--; ) n = n.toLowerCase().replace(r[t], f[t]);
          return n;
        },
        format: function (n) {
          var t = arguments;
          return ("" + n).replace(/\{(?:(\d+)|(\w+))\}/g, function (n, i, r) {
            return r && t[1] ? t[1][r] : t[i];
          });
        },
        nextEnabledItem: function (n, t) {
          for (; n[(t = (t + 1) % n.length)].disabled; );
          return t;
        },
        previousEnabledItem: function (n, t) {
          for (; n[(t = (t > 0 ? t : n.length) - 1)].disabled; );
          return t;
        },
        toDash: function (n) {
          return n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        },
        triggerCallback: function (t, i) {
          var r = i.element,
            u = i.options["on" + t],
            f = [r].concat([].slice.call(arguments).slice(1));
          n.isFunction(u) && u.apply(r, f);
          n(r).trigger("selectric-" + this.toDash(t), f);
        },
        arrayToClassname: function (t) {
          var i = n.grep(t, function (n) {
            return !!n;
          });
          return n.trim(i.join(" "));
        },
      },
      init: function (t) {
        var i = this;
        if (
          ((i.options = n.extend(
            !0,
            {},
            n.fn.selectric.defaults,
            i.options,
            t
          )),
          i.utils.triggerCallback("BeforeInit", i),
          i.destroy(!0),
          i.options.disableOnMobile && i.utils.isMobile())
        )
          i.disableOnMobile = !0;
        else {
          i.classes = i.getClassNames();
          var r = n("<input/>", {
              class: i.classes.input,
              readonly: i.utils.isMobile(),
            }),
            u = n("<div/>", {
              class: i.classes.items,
              tabindex: -1,
            }),
            s = n("<div/>", {
              class: i.classes.scroll,
            }),
            f = n("<div/>", {
              class: i.classes.prefix,
              html: i.options.arrowButtonMarkup,
            }),
            e = n("<span/>", {
              class: "label",
            }),
            h = i.$element.wrap("<div/>").parent().append(f.prepend(e), u, r),
            o = n("<div/>", {
              class: i.classes.hideselect,
            });
          i.elements = {
            input: r,
            items: u,
            itemsScroll: s,
            wrapper: f,
            label: e,
            outerWrapper: h,
          };
          i.options.nativeOnMobile &&
            i.utils.isMobile() &&
            ((i.elements.input = void 0),
            o.addClass(i.classes.prefix + "-is-native"),
            i.$element.on("change", function () {
              i.refresh();
            }));
          i.$element.on(i.eventTriggers).wrap(o);
          i.originalTabindex = i.$element.prop("tabindex");
          i.$element.prop("tabindex", -1);
          i.populate();
          i.activate();
          i.utils.triggerCallback("Init", i);
        }
      },
      activate: function () {
        var t = this.elements.items
            .closest(":visible")
            .children(":hidden")
            .addClass(this.classes.tempshow),
          n = this.$element.width();
        t.removeClass(this.classes.tempshow);
        this.utils.triggerCallback("BeforeActivate", this);
        this.elements.outerWrapper.prop(
          "class",
          this.utils.arrayToClassname([
            this.classes.wrapper,
            this.$element
              .prop("class")
              .replace(/\S+/g, this.classes.prefix + "-$&"),
            this.options.responsive ? this.classes.responsive : "",
          ])
        );
        this.options.inheritOriginalWidth &&
          n > 0 &&
          this.elements.outerWrapper.width(n);
        this.unbindEvents();
        this.$element.prop("disabled")
          ? (this.elements.outerWrapper.addClass(this.classes.disabled),
            this.elements.input && this.elements.input.prop("disabled", !0))
          : ((this.state.enabled = !0),
            this.elements.outerWrapper.removeClass(this.classes.disabled),
            (this.$li = this.elements.items.removeAttr("style").find("li")),
            this.bindEvents());
        this.utils.triggerCallback("Activate", this);
      },
      getClassNames: function () {
        var r = this,
          t = r.options.customClass,
          i = {};
        return (
          n.each(
            "Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(
              " "
            ),
            function (n, u) {
              var f = t.prefix + u;
              i[u.toLowerCase()] = t.camelCase ? f : r.utils.toDash(f);
            }
          ),
          (i.prefix = t.prefix),
          i
        );
      },
      setLabel: function () {
        var t = this,
          r = t.options.labelBuilder,
          u,
          i,
          f;
        t.state.multiple
          ? ((u = n.isArray(t.state.currValue)
              ? t.state.currValue
              : [t.state.currValue]),
            (u = 0 === u.length ? [0] : u),
            (i = n.map(u, function (i) {
              return n.grep(t.lookupItems, function (n) {
                return n.index === i;
              })[0];
            })),
            (i = n.grep(i, function (t) {
              return i.length > 1 || 0 === i.length
                ? "" !== n.trim(t.value)
                : t;
            })),
            (i = n.map(i, function (i) {
              return n.isFunction(r) ? r(i) : t.utils.format(r, i);
            })),
            t.options.multiple.maxLabelEntries &&
              (i.length >= t.options.multiple.maxLabelEntries + 1
                ? (i = i.slice(0, t.options.multiple.maxLabelEntries)).push(
                    n.isFunction(r)
                      ? r({
                          text: "...",
                        })
                      : t.utils.format(r, {
                          text: "...",
                        })
                  )
                : i.slice(i.length - 1)),
            t.elements.label.html(i.join(t.options.multiple.separator)))
          : ((f = t.lookupItems[t.state.currValue]),
            t.elements.label.html(
              n.isFunction(r) ? r(f) : t.utils.format(r, f)
            ));
      },
      populate: function () {
        var t = this,
          f = t.$element.children(),
          e = t.$element.find("option"),
          u = e.filter(":selected"),
          r = e.index(u),
          i = 0,
          o = t.state.multiple ? [] : 0;
        u.length > 1 &&
          t.state.multiple &&
          ((r = []),
          u.each(function () {
            r.push(n(this).index());
          }));
        t.state.currValue = ~r ? r : o;
        t.state.selectedIdx = t.state.currValue;
        t.state.highlightedIdx = t.state.currValue;
        t.items = [];
        t.lookupItems = [];
        f.length &&
          (f.each(function (r) {
            var u = n(this),
              f;
            u.is("optgroup")
              ? ((f = {
                  element: u,
                  label: u.prop("label"),
                  groupDisabled: u.prop("disabled"),
                  items: [],
                }),
                u.children().each(function (r) {
                  var u = n(this);
                  f.items[r] = t.getItemData(
                    i,
                    u,
                    f.groupDisabled || u.prop("disabled")
                  );
                  t.lookupItems[i] = f.items[r];
                  i++;
                }),
                (t.items[r] = f))
              : ((t.items[r] = t.getItemData(i, u, u.prop("disabled"))),
                (t.lookupItems[i] = t.items[r]),
                i++);
          }),
          t.setLabel(),
          t.elements.items.append(
            t.elements.itemsScroll.html(t.getItemsMarkup(t.items))
          ));
      },
      getItemData: function (t, i, r) {
        return {
          index: t,
          element: i,
          value: i.val(),
          className: i.prop("class"),
          text: i.html(),
          slug: n.trim(this.utils.replaceDiacritics(i.html())),
          alt: i.attr("data-alt"),
          selected: i.prop("selected"),
          disabled: r,
        };
      },
      getItemsMarkup: function (t) {
        var i = this,
          r = "<ul>";
        return (
          n.isFunction(i.options.listBuilder) &&
            i.options.listBuilder &&
            (t = i.options.listBuilder(t)),
          n.each(t, function (t, u) {
            void 0 !== u.label
              ? ((r += i.utils.format(
                  '<ul class="{1}"><li class="{2}">{3}</li>',
                  i.utils.arrayToClassname([
                    i.classes.group,
                    u.groupDisabled ? "disabled" : "",
                    u.element.prop("class"),
                  ]),
                  i.classes.grouplabel,
                  u.element.prop("label")
                )),
                n.each(u.items, function (n, t) {
                  r += i.getItemMarkup(t.index, t);
                }),
                (r += "</ul>"))
              : (r += i.getItemMarkup(u.index, u));
          }),
          r + "</ul>"
        );
      },
      getItemMarkup: function (t, i) {
        var r = this.options.optionsItemBuilder,
          u = {
            value: i.value,
            text: i.text,
            slug: i.slug,
            index: i.index,
          };
        return this.utils.format(
          '<li data-index="{1}" class="{2}">{3}</li>',
          t,
          this.utils.arrayToClassname([
            i.className,
            t === this.items.length - 1 ? "last" : "",
            i.disabled ? "disabled" : "",
            i.selected ? "selected" : "",
          ]),
          n.isFunction(r)
            ? this.utils.format(r(i, this.$element, t), i)
            : this.utils.format(r, u)
        );
      },
      unbindEvents: function () {
        this.elements.wrapper
          .add(this.$element)
          .add(this.elements.outerWrapper)
          .add(this.elements.input)
          .off(".sl");
      },
      bindEvents: function () {
        var t = this;
        t.elements.outerWrapper.on("mouseenter.sl mouseleave.sl", function (i) {
          n(this).toggleClass(t.classes.hover, "mouseenter" === i.type);
          t.options.openOnHover &&
            (clearTimeout(t.closeTimer),
            "mouseleave" === i.type
              ? (t.closeTimer = setTimeout(
                  n.proxy(t.close, t),
                  t.options.hoverIntentTimeout
                ))
              : t.open());
        });
        t.elements.wrapper.on("click.sl", function (n) {
          t.state.opened ? t.close() : t.open(n);
        });
        (t.options.nativeOnMobile && t.utils.isMobile()) ||
          (t.$element.on("focus.sl", function () {
            t.elements.input.focus();
          }),
          t.elements.input
            .prop({
              tabindex: t.originalTabindex,
              disabled: !1,
            })
            .on("keydown.sl", n.proxy(t.handleKeys, t))
            .on("focusin.sl", function (n) {
              t.elements.outerWrapper.addClass(t.classes.focus);
              t.elements.input.one("blur", function () {
                t.elements.input.blur();
              });
              t.options.openOnFocus && !t.state.opened && t.open(n);
            })
            .on("focusout.sl", function () {
              t.elements.outerWrapper.removeClass(t.classes.focus);
            })
            .on("input propertychange", function () {
              var r = t.elements.input.val(),
                i = new RegExp("^" + t.utils.escapeRegExp(r), "i");
              clearTimeout(t.resetStr);
              t.resetStr = setTimeout(function () {
                t.elements.input.val("");
              }, t.options.keySearchTimeout);
              r.length &&
                n.each(t.items, function (n, r) {
                  if (!r.disabled) {
                    if (i.test(r.text) || i.test(r.slug))
                      return t.highlight(n), !1;
                    if (r.alt)
                      for (
                        var f = r.alt.split("|"), u = 0;
                        u < f.length && f[u];
                        u++
                      )
                        if (i.test(f[u].trim())) return t.highlight(n), !1;
                  }
                });
            }));
        t.$li.on({
          mousedown: function (n) {
            n.preventDefault();
            n.stopPropagation();
          },
          click: function () {
            return t.select(n(this).data("index")), !1;
          },
        });
      },
      handleKeys: function (t) {
        var i = t.which,
          u = this.options.keys,
          f = n.inArray(i, u.previous) > -1,
          e = n.inArray(i, u.next) > -1,
          s = n.inArray(i, u.select) > -1,
          h = n.inArray(i, u.open) > -1,
          r = this.state.highlightedIdx,
          c = (f && 0 === r) || (e && r + 1 === this.items.length),
          o = 0;
        if (((13 !== i && 32 !== i) || t.preventDefault(), f || e)) {
          if (!this.options.allowWrap && c) return;
          f && (o = this.utils.previousEnabledItem(this.lookupItems, r));
          e && (o = this.utils.nextEnabledItem(this.lookupItems, r));
          this.highlight(o);
        }
        if (s && this.state.opened)
          return (
            this.select(r),
            void (
              (this.state.multiple && this.options.multiple.keepMenuOpen) ||
              this.close()
            )
          );
        h && !this.state.opened && this.open();
      },
      refresh: function () {
        this.populate();
        this.activate();
        this.utils.triggerCallback("Refresh", this);
      },
      setOptionsDimensions: function () {
        var r = this.elements.items
            .closest(":visible")
            .children(":hidden")
            .addClass(this.classes.tempshow),
          n = this.options.maxHeight,
          t = this.elements.items.outerWidth(),
          i =
            this.elements.wrapper.outerWidth() -
            (t - this.elements.items.width());
        !this.options.expandToItemText || i > t
          ? (this.finalWidth = i)
          : (this.elements.items.css("overflow", "scroll"),
            this.elements.outerWrapper.width(9e4),
            (this.finalWidth = this.elements.items.width()),
            this.elements.items.css("overflow", ""),
            this.elements.outerWrapper.width(""));
        this.elements.items.width(this.finalWidth).height() > n &&
          this.elements.items.height(n);
        r.removeClass(this.classes.tempshow);
      },
      isInViewport: function () {
        if (!0 === this.options.forceRenderAbove)
          this.elements.outerWrapper.addClass(this.classes.above);
        else if (!0 === this.options.forceRenderBelow)
          this.elements.outerWrapper.addClass(this.classes.below);
        else {
          var n = i.scrollTop(),
            u = i.height(),
            t = this.elements.outerWrapper.offset().top,
            f =
              t + this.elements.outerWrapper.outerHeight() + this.itemsHeight <=
              n + u,
            e = t - this.itemsHeight > n,
            r = !f && e,
            o = !r;
          this.elements.outerWrapper.toggleClass(this.classes.above, r);
          this.elements.outerWrapper.toggleClass(this.classes.below, o);
        }
      },
      detectItemVisibility: function (t) {
        var f = this.$li.filter("[data-index]");
        this.state.multiple &&
          ((t = n.isArray(t) && 0 === t.length ? 0 : t),
          (t = n.isArray(t) ? Math.min.apply(Math, t) : t));
        var i = f.eq(t).outerHeight(),
          r = f[t].offsetTop,
          u = this.elements.itemsScroll.scrollTop(),
          e = r + 2 * i;
        this.elements.itemsScroll.scrollTop(
          e > u + this.itemsHeight
            ? e - this.itemsHeight
            : r - i < u
            ? r - i
            : u
        );
      },
      open: function (i) {
        var r = this;
        if (r.options.nativeOnMobile && r.utils.isMobile()) return !1;
        r.utils.triggerCallback("BeforeOpen", r);
        i &&
          (i.preventDefault(),
          r.options.stopPropagation && i.stopPropagation());
        r.state.enabled &&
          (r.setOptionsDimensions(),
          n("." + r.classes.hideselect, "." + r.classes.open)
            .children()
            .selectric("close"),
          (r.state.opened = !0),
          (r.itemsHeight = r.elements.items.outerHeight()),
          (r.itemsInnerHeight = r.elements.items.height()),
          r.elements.outerWrapper.addClass(r.classes.open),
          r.elements.input.val(""),
          i && "focusin" !== i.type && r.elements.input.focus(),
          setTimeout(function () {
            t.on("click.sl", n.proxy(r.close, r)).on(
              "scroll.sl",
              n.proxy(r.isInViewport, r)
            );
          }, 1),
          r.isInViewport(),
          r.options.preventWindowScroll &&
            t.on(
              "mousewheel.sl DOMMouseScroll.sl",
              "." + r.classes.scroll,
              function (t) {
                var i = t.originalEvent,
                  f = n(this).scrollTop(),
                  u = 0;
                "detail" in i && (u = -1 * i.detail);
                "wheelDelta" in i && (u = i.wheelDelta);
                "wheelDeltaY" in i && (u = i.wheelDeltaY);
                "deltaY" in i && (u = -1 * i.deltaY);
                ((f === this.scrollHeight - r.itemsInnerHeight && u < 0) ||
                  (0 === f && u > 0)) &&
                  t.preventDefault();
              }
            ),
          r.detectItemVisibility(r.state.selectedIdx),
          r.highlight(r.state.multiple ? -1 : r.state.selectedIdx),
          r.utils.triggerCallback("Open", r));
      },
      close: function () {
        this.utils.triggerCallback("BeforeClose", this);
        t.off(".sl");
        this.elements.outerWrapper.removeClass(this.classes.open);
        this.state.opened = !1;
        this.utils.triggerCallback("Close", this);
      },
      change: function () {
        var t = this;
        t.utils.triggerCallback("BeforeChange", t);
        t.state.multiple
          ? (n.each(t.lookupItems, function (n) {
              t.lookupItems[n].selected = !1;
              t.$element.find("option").prop("selected", !1);
            }),
            n.each(t.state.selectedIdx, function (n, i) {
              t.lookupItems[i].selected = !0;
              t.$element.find("option").eq(i).prop("selected", !0);
            }),
            (t.state.currValue = t.state.selectedIdx),
            t.setLabel(),
            t.utils.triggerCallback("Change", t))
          : t.state.currValue !== t.state.selectedIdx &&
            (t.$element
              .prop("selectedIndex", (t.state.currValue = t.state.selectedIdx))
              .data("value", t.lookupItems[t.state.selectedIdx].text),
            t.setLabel(),
            t.utils.triggerCallback("Change", t));
      },
      highlight: function (n) {
        var t = this.$li.filter("[data-index]").removeClass("highlighted");
        this.utils.triggerCallback("BeforeHighlight", this);
        void 0 === n ||
          -1 === n ||
          this.lookupItems[n].disabled ||
          (t.eq((this.state.highlightedIdx = n)).addClass("highlighted"),
          this.detectItemVisibility(n),
          this.utils.triggerCallback("Highlight", this));
      },
      select: function (t) {
        var i = this,
          u = i.$li.filter("[data-index]"),
          r;
        (i.utils.triggerCallback("BeforeSelect", i, t),
        void 0 === t || -1 === t || i.lookupItems[t].disabled) ||
          (i.state.multiple
            ? ((i.state.selectedIdx = n.isArray(i.state.selectedIdx)
                ? i.state.selectedIdx
                : [i.state.selectedIdx]),
              (r = n.inArray(t, i.state.selectedIdx)),
              -1 !== r
                ? i.state.selectedIdx.splice(r, 1)
                : i.state.selectedIdx.push(t),
              u
                .removeClass("selected")
                .filter(function (t) {
                  return -1 !== n.inArray(t, i.state.selectedIdx);
                })
                .addClass("selected"))
            : u
                .removeClass("selected")
                .eq((i.state.selectedIdx = t))
                .addClass("selected"),
          (i.state.multiple && i.options.multiple.keepMenuOpen) || i.close(),
          i.change(),
          i.utils.triggerCallback("Select", i, t));
      },
      destroy: function (n) {
        this.state &&
          this.state.enabled &&
          (this.elements.items
            .add(this.elements.wrapper)
            .add(this.elements.input)
            .remove(),
          n || this.$element.removeData("selectric").removeData("value"),
          this.$element
            .prop("tabindex", this.originalTabindex)
            .off(".sl")
            .off(this.eventTriggers)
            .unwrap()
            .unwrap(),
          (this.state.enabled = !1));
      },
    };
    n.fn.selectric = function (t) {
      return this.each(function () {
        var i = n.data(this, "selectric");
        i && !i.disableOnMobile
          ? "string" == typeof t && i[t]
            ? i[t]()
            : i.init(t)
          : n.data(this, "selectric", new u(this, t));
      });
    };
    n.fn.selectric.defaults = {
      onChange: function (t) {
        n(t).change();
      },
      maxHeight: 300,
      keySearchTimeout: 500,
      arrowButtonMarkup: '<b class="button"></b>',
      disableOnMobile: !1,
      nativeOnMobile: !0,
      openOnFocus: !0,
      openOnHover: !1,
      hoverIntentTimeout: 500,
      expandToItemText: !1,
      responsive: !1,
      preventWindowScroll: !0,
      inheritOriginalWidth: !1,
      allowWrap: !0,
      forceRenderAbove: !1,
      forceRenderBelow: !1,
      stopPropagation: !0,
      optionsItemBuilder: "{text}",
      labelBuilder: "{text}",
      listBuilder: !1,
      keys: {
        previous: [37, 38],
        next: [39, 40],
        select: [9, 13, 27],
        open: [13, 32, 37, 38, 39, 40],
        close: [9, 27],
      },
      customClass: {
        prefix: "selectric",
        camelCase: !1,
      },
      multiple: {
        separator: ", ",
        keepMenuOpen: !0,
        maxLabelEntries: !1,
      },
    };
  }),
  (function (n, t) {
    var i = {
        catchMethods: {
          methodreturn: [],
          count: 0,
        },
        init: function (t) {
          var r, u, i;
          t.originalEvent.origin.match(/vimeo/g) &&
            "data" in t.originalEvent &&
            (i =
              "string" === n.type(t.originalEvent.data)
                ? n.parseJSON(t.originalEvent.data)
                : t.originalEvent.data) &&
            (r = this.setPlayerID(i)).length &&
            ((u = this.setVimeoAPIurl(r)),
            i.hasOwnProperty("event") && this.handleEvent(i, r, u),
            i.hasOwnProperty("method") && this.handleMethod(i, r, u));
        },
        setPlayerID: function (t) {
          return n("iframe[src*=" + t.player_id + "]");
        },
        setVimeoAPIurl: function (n) {
          return "http" !== n.attr("src").substr(0, 4)
            ? "https:" + n.attr("src").split("?")[0]
            : n.attr("src").split("?")[0];
        },
        handleMethod: function (n) {
          this.catchMethods.methodreturn.push(n.value);
        },
        handleEvent: function (t, i, r) {
          var e, f, u;
          switch (t.event.toLowerCase()) {
            case "ready":
              for (e in n._data(i[0], "events"))
                e.match(
                  /loadProgress|playProgress|play|pause|finish|seek|cuechange/
                ) &&
                  i[0].contentWindow.postMessage(
                    JSON.stringify({
                      method: "addEventListener",
                      value: e,
                    }),
                    r
                  );
              if (i.data("vimeoAPICall")) {
                for (f = i.data("vimeoAPICall"), u = 0; u < f.length; u++)
                  i[0].contentWindow.postMessage(
                    JSON.stringify(f[u].message),
                    f[u].api
                  );
                i.removeData("vimeoAPICall");
              }
              i.data("vimeoReady", !0);
              i.triggerHandler("ready");
              break;
            case "seek":
              i.triggerHandler("seek", [t.data]);
              break;
            case "loadprogress":
              i.triggerHandler("loadProgress", [t.data]);
              break;
            case "playprogress":
              i.triggerHandler("playProgress", [t.data]);
              break;
            case "pause":
              i.triggerHandler("pause");
              break;
            case "finish":
              i.triggerHandler("finish");
              break;
            case "play":
              i.triggerHandler("play");
              break;
            case "cuechange":
              i.triggerHandler("cuechange");
          }
        },
      },
      r = (n.fn.vimeoLoad = function () {
        var t = n(this).attr("src"),
          i,
          r;
        return (
          null === t.match(/player_id/g) &&
            ((i = -1 === t.indexOf("?") ? "?" : "&"),
            (r = n.param({
              api: 1,
              player_id:
                "vvvvimeoVideo-" +
                Math.floor(1e7 * Math.random() + 1).toString(),
            })),
            n(this).attr("src", t + i + r)),
          this
        );
      });
    jQuery(document).ready(function () {
      n("iframe[src*='vimeo.com']").each(function () {
        r.call(this);
      });
    });
    n(t).on("message", function (n) {
      i.init(n);
    });
    n.vimeo = function (n, r, u) {
      var o,
        s,
        h,
        c,
        f = {},
        l = i.catchMethods.methodreturn.length,
        e;
      return (
        ("string" == typeof r && (f.method = r),
        void 0 !== typeof u && "function" != typeof u && (f.value = u),
        "iframe" === n.prop("tagName").toLowerCase() &&
          f.hasOwnProperty("method")) &&
          (n.data("vimeoReady")
            ? n[0].contentWindow.postMessage(
                JSON.stringify(f),
                i.setVimeoAPIurl(n)
              )
            : ((e = n.data("vimeoAPICall") ? n.data("vimeoAPICall") : []),
              e.push({
                message: f,
                api: i.setVimeoAPIurl(n),
              }),
              n.data("vimeoAPICall", e))),
        ("get" !== r.toString().substr(0, 3) && "paused" !== r.toString()) ||
          "function" != typeof u ||
          ((o = l),
          (s = u),
          (h = i.catchMethods.count),
          (c = t.setInterval(function () {
            i.catchMethods.methodreturn.length != o &&
              (t.clearInterval(c), s(i.catchMethods.methodreturn[h]));
          }, 10)),
          i.catchMethods.count++),
        n
      );
    };
    n.fn.vimeo = function (t, i) {
      return n.vimeo(this, t, i);
    };
  })(jQuery, window),
  (function (n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "undefined" != typeof exports
      ? (module.exports = n(require("jquery")))
      : n(jQuery);
  })(function (n) {
    "use strict";
    var t = window.Slick || {};
    (t = (function () {
      var t = 0;
      return function (i, r) {
        var f,
          u = this;
        u.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: n(i),
          appendDots: n(i),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button"><span class="icon font-ico-arrow-left"></span></button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button"><span class="icon font-ico-arrow-right"></span></button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, i) {
            return n('<button type="button" />').text(i + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        };
        u.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        };
        n.extend(u, u.initials);
        u.activeBreakpoint = null;
        u.animType = null;
        u.animProp = null;
        u.breakpoints = [];
        u.breakpointSettings = [];
        u.cssTransitions = !1;
        u.focussed = !1;
        u.interrupted = !1;
        u.hidden = "hidden";
        u.paused = !0;
        u.positionProp = null;
        u.respondTo = null;
        u.rowCount = 1;
        u.shouldClick = !0;
        u.$slider = n(i);
        u.$slidesCache = null;
        u.transformType = null;
        u.transitionType = null;
        u.visibilityChange = "visibilitychange";
        u.windowWidth = 0;
        u.windowTimer = null;
        f = n(i).data("slick") || {};
        u.options = n.extend({}, u.defaults, r, f);
        u.currentSlide = u.options.initialSlide;
        u.originalSettings = u.options;
        void 0 !== document.mozHidden
          ? ((u.hidden = "mozHidden"),
            (u.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((u.hidden = "webkitHidden"),
            (u.visibilityChange = "webkitvisibilitychange"));
        u.autoPlay = n.proxy(u.autoPlay, u);
        u.autoPlayClear = n.proxy(u.autoPlayClear, u);
        u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
        u.changeSlide = n.proxy(u.changeSlide, u);
        u.clickHandler = n.proxy(u.clickHandler, u);
        u.selectHandler = n.proxy(u.selectHandler, u);
        u.setPosition = n.proxy(u.setPosition, u);
        u.swipeHandler = n.proxy(u.swipeHandler, u);
        u.dragHandler = n.proxy(u.dragHandler, u);
        u.keyHandler = n.proxy(u.keyHandler, u);
        u.instanceUid = t++;
        u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
        u.registerBreakpoints();
        u.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({
          "aria-hidden": "false",
        })
        .find("a, input, button, select")
        .attr({
          tabindex: "0",
        });
    };
    t.prototype.addSlide = t.prototype.slickAdd = function (t, i, r) {
      var u = this;
      if ("boolean" == typeof i) (r = i), (i = null);
      else if (i < 0 || i >= u.slideCount) return !1;
      u.unload();
      "number" == typeof i
        ? 0 === i && 0 === u.$slides.length
          ? n(t).appendTo(u.$slideTrack)
          : r
          ? n(t).insertBefore(u.$slides.eq(i))
          : n(t).insertAfter(u.$slides.eq(i))
        : !0 === r
        ? n(t).prependTo(u.$slideTrack)
        : n(t).appendTo(u.$slideTrack);
      u.$slides = u.$slideTrack.children(this.options.slide);
      u.$slideTrack.children(this.options.slide).detach();
      u.$slideTrack.append(u.$slides);
      u.$slides.each(function (t, i) {
        n(i).attr("data-slick-index", t);
      });
      u.$slidesCache = u.$slides;
      u.reinit();
    };
    t.prototype.animateHeight = function () {
      var n = this,
        t;
      1 === n.options.slidesToShow &&
        !0 === n.options.adaptiveHeight &&
        !1 === n.options.vertical &&
        ((t = n.$slides.eq(n.currentSlide).outerHeight(!0)),
        n.$list.animate(
          {
            height: t,
          },
          n.options.speed
        ));
    };
    t.prototype.animateSlide = function (t, i) {
      var u = {},
        r = this;
      r.animateHeight();
      !0 === r.options.rtl && !1 === r.options.vertical && (t = -t);
      !1 === r.transformsEnabled
        ? !1 === r.options.vertical
          ? r.$slideTrack.animate(
              {
                left: t,
              },
              r.options.speed,
              r.options.easing,
              i
            )
          : r.$slideTrack.animate(
              {
                top: t,
              },
              r.options.speed,
              r.options.easing,
              i
            )
        : !1 === r.cssTransitions
        ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
          n({
            animStart: r.currentLeft,
          }).animate(
            {
              animStart: t,
            },
            {
              duration: r.options.speed,
              easing: r.options.easing,
              step: function (n) {
                n = Math.ceil(n);
                !1 === r.options.vertical
                  ? ((u[r.animType] = "translate(" + n + "px, 0px)"),
                    r.$slideTrack.css(u))
                  : ((u[r.animType] = "translate(0px," + n + "px)"),
                    r.$slideTrack.css(u));
              },
              complete: function () {
                i && i.call();
              },
            }
          ))
        : (r.applyTransition(),
          (t = Math.ceil(t)),
          (u[r.animType] =
            !1 === r.options.vertical
              ? "translate3d(" + t + "px, 0px, 0px)"
              : "translate3d(0px," + t + "px, 0px)"),
          r.$slideTrack.css(u),
          i &&
            setTimeout(function () {
              r.disableTransition();
              i.call();
            }, r.options.speed));
    };
    t.prototype.getNavTarget = function () {
      var t = this.options.asNavFor;
      return t && null !== t && (t = n(t).not(this.$slider)), t;
    };
    t.prototype.asNavFor = function (t) {
      var i = this.getNavTarget();
      null !== i &&
        "object" == typeof i &&
        i.each(function () {
          var i = n(this).slick("getSlick");
          i.unslicked || i.slideHandler(t, !0);
        });
    };
    t.prototype.applyTransition = function (n) {
      var t = this,
        i = {};
      i[t.transitionType] =
        !1 === t.options.fade
          ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase
          : "opacity " + t.options.speed + "ms " + t.options.cssEase;
      !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i);
    };
    t.prototype.autoPlay = function () {
      var n = this;
      n.autoPlayClear();
      n.slideCount > n.options.slidesToShow &&
        (n.autoPlayTimer = setInterval(
          n.autoPlayIterator,
          n.options.autoplaySpeed
        ));
    };
    t.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    };
    t.prototype.autoPlayIterator = function () {
      var n = this,
        t = n.currentSlide + n.options.slidesToScroll;
      n.paused ||
        n.interrupted ||
        n.focussed ||
        (!1 === n.options.infinite &&
          (1 === n.direction && n.currentSlide + 1 === n.slideCount - 1
            ? (n.direction = 0)
            : 0 === n.direction &&
              ((t = n.currentSlide - n.options.slidesToScroll),
              n.currentSlide - 1 == 0 && (n.direction = 1))),
        n.slideHandler(t));
    };
    t.prototype.buildArrows = function () {
      var t = this;
      !0 === t.options.arrows &&
        ((t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow")),
        (t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow")),
        t.slideCount > t.options.slidesToShow
          ? (t.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            t.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            t.htmlExpr.test(t.options.prevArrow) &&
              t.$prevArrow.prependTo(t.options.appendArrows),
            t.htmlExpr.test(t.options.nextArrow) &&
              t.$nextArrow.appendTo(t.options.appendArrows),
            !0 !== t.options.infinite &&
              t.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
              "aria-disabled": "true",
              tabindex: "-1",
            }));
    };
    t.prototype.buildDots = function () {
      var i,
        r,
        t = this;
      if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
        for (
          t.$slider.addClass("slick-dotted"),
            r = n("<ul />").addClass(t.options.dotsClass),
            i = 0;
          i <= t.getDotCount();
          i += 1
        )
          r.append(n("<li />").append(t.options.customPaging.call(this, t, i)));
        t.$dots = r.appendTo(t.options.appendDots);
        t.$dots.find("li").first().addClass("slick-active");
      }
    };
    t.prototype.buildOut = function () {
      var t = this;
      t.$slides = t.$slider
        .children(t.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide");
      t.slideCount = t.$slides.length;
      t.$slides.each(function (t, i) {
        n(i)
          .attr("data-slick-index", t)
          .data("originalStyling", n(i).attr("style") || "");
      });
      t.$slider.addClass("slick-slider");
      t.$slideTrack =
        0 === t.slideCount
          ? n('<div class="slick-track"/>').appendTo(t.$slider)
          : t.$slides.wrapAll('<div class="slick-track"/>').parent();
      t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent();
      t.$slideTrack.css("opacity", 0);
      (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
        (t.options.slidesToScroll = 1);
      n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
      t.setupInfinite();
      t.buildArrows();
      t.buildDots();
      t.updateDots();
      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
      !0 === t.options.draggable && t.$list.addClass("draggable");
    };
    t.prototype.buildRows = function () {
      var t,
        i,
        r,
        f,
        c,
        u,
        e,
        n = this,
        o,
        s,
        h;
      if (
        ((f = document.createDocumentFragment()),
        (u = n.$slider.children()),
        n.options.rows > 0)
      ) {
        for (
          e = n.options.slidesPerRow * n.options.rows,
            c = Math.ceil(u.length / e),
            t = 0;
          t < c;
          t++
        ) {
          for (
            o = document.createElement("div"), i = 0;
            i < n.options.rows;
            i++
          ) {
            for (
              s = document.createElement("div"), r = 0;
              r < n.options.slidesPerRow;
              r++
            )
              (h = t * e + (i * n.options.slidesPerRow + r)),
                u.get(h) && s.appendChild(u.get(h));
            o.appendChild(s);
          }
          f.appendChild(o);
        }
        n.$slider.empty().append(f);
        n.$slider
          .children()
          .children()
          .children()
          .css({
            width: 100 / n.options.slidesPerRow + "%",
            display: "inline-block",
          });
      }
    };
    t.prototype.checkResponsive = function (t, i) {
      var f,
        u,
        e,
        r = this,
        o = !1,
        s = r.$slider.width(),
        h = window.innerWidth || n(window).width();
      if (
        ("window" === r.respondTo
          ? (e = h)
          : "slider" === r.respondTo
          ? (e = s)
          : "min" === r.respondTo && (e = Math.min(h, s)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        for (f in ((u = null), r.breakpoints))
          r.breakpoints.hasOwnProperty(f) &&
            (!1 === r.originalSettings.mobileFirst
              ? e < r.breakpoints[f] && (u = r.breakpoints[f])
              : e > r.breakpoints[f] && (u = r.breakpoints[f]));
        null !== u
          ? null !== r.activeBreakpoint
            ? (u !== r.activeBreakpoint || i) &&
              ((r.activeBreakpoint = u),
              "unslick" === r.breakpointSettings[u]
                ? r.unslick(u)
                : ((r.options = n.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[u]
                  )),
                  !0 === t && (r.currentSlide = r.options.initialSlide),
                  r.refresh(t)),
              (o = u))
            : ((r.activeBreakpoint = u),
              "unslick" === r.breakpointSettings[u]
                ? r.unslick(u)
                : ((r.options = n.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[u]
                  )),
                  !0 === t && (r.currentSlide = r.options.initialSlide),
                  r.refresh(t)),
              (o = u))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === t && (r.currentSlide = r.options.initialSlide),
            r.refresh(t),
            (o = u));
        t || !1 === o || r.$slider.trigger("breakpoint", [r, o]);
      }
    };
    t.prototype.changeSlide = function (t, i) {
      var f,
        e,
        r = this,
        u = n(t.currentTarget),
        o;
      switch (
        (u.is("a") && t.preventDefault(),
        u.is("li") || (u = u.closest("li")),
        (f =
          r.slideCount % r.options.slidesToScroll != 0
            ? 0
            : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        t.data.message)
      ) {
        case "previous":
          e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f;
          r.slideCount > r.options.slidesToShow &&
            r.slideHandler(r.currentSlide - e, !1, i);
          break;
        case "next":
          e = 0 === f ? r.options.slidesToScroll : f;
          r.slideCount > r.options.slidesToShow &&
            r.slideHandler(r.currentSlide + e, !1, i);
          break;
        case "index":
          o =
            0 === t.data.index
              ? 0
              : t.data.index || u.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(o), !1, i);
          u.children().trigger("focus");
          break;
        default:
          return;
      }
    };
    t.prototype.checkNavigable = function (n) {
      var t, i, r;
      if (((i = 0), n > (t = this.getNavigableIndexes())[t.length - 1]))
        n = t[t.length - 1];
      else
        for (r in t) {
          if (n < t[r]) {
            n = i;
            break;
          }
          i = t[r];
        }
      return n;
    };
    t.prototype.cleanUpEvents = function () {
      var t = this;
      t.options.dots &&
        null !== t.$dots &&
        (n("li", t.$dots)
          .off("click.slick", t.changeSlide)
          .off("mouseenter.slick", n.proxy(t.interrupt, t, !0))
          .off("mouseleave.slick", n.proxy(t.interrupt, t, !1)),
        !0 === t.options.accessibility &&
          t.$dots.off("keydown.slick", t.keyHandler));
      t.$slider.off("focus.slick blur.slick");
      !0 === t.options.arrows &&
        t.slideCount > t.options.slidesToShow &&
        (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
        !0 === t.options.accessibility &&
          (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
          t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler)));
      t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
      t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
      t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
      t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
      t.$list.off("click.slick", t.clickHandler);
      n(document).off(t.visibilityChange, t.visibility);
      t.cleanUpSlideEvents();
      !0 === t.options.accessibility &&
        t.$list.off("keydown.slick", t.keyHandler);
      !0 === t.options.focusOnSelect &&
        n(t.$slideTrack).children().off("click.slick", t.selectHandler);
      n(window).off(
        "orientationchange.slick.slick-" + t.instanceUid,
        t.orientationChange
      );
      n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
      n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
      n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
    };
    t.prototype.cleanUpSlideEvents = function () {
      var t = this;
      t.$list.off("mouseenter.slick", n.proxy(t.interrupt, t, !0));
      t.$list.off("mouseleave.slick", n.proxy(t.interrupt, t, !1));
    };
    t.prototype.cleanUpRows = function () {
      var t,
        n = this;
      n.options.rows > 0 &&
        ((t = n.$slides.children().children()).removeAttr("style"),
        n.$slider.empty().append(t));
    };
    t.prototype.clickHandler = function (n) {
      !1 === this.shouldClick &&
        (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault());
    };
    t.prototype.destroy = function (t) {
      var i = this;
      i.autoPlayClear();
      i.touchObject = {};
      i.cleanUpEvents();
      n(".slick-cloned", i.$slider).detach();
      i.$dots && i.$dots.remove();
      i.$prevArrow &&
        i.$prevArrow.length &&
        (i.$prevArrow
          .removeClass("slick-disabled slick-arrow slick-hidden")
          .removeAttr("aria-hidden aria-disabled tabindex")
          .css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
      i.$nextArrow &&
        i.$nextArrow.length &&
        (i.$nextArrow
          .removeClass("slick-disabled slick-arrow slick-hidden")
          .removeAttr("aria-hidden aria-disabled tabindex")
          .css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
      i.$slides &&
        (i.$slides
          .removeClass(
            "slick-slide slick-active slick-center slick-visible slick-current"
          )
          .removeAttr("aria-hidden")
          .removeAttr("data-slick-index")
          .each(function () {
            n(this).attr("style", n(this).data("originalStyling"));
          }),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides));
      i.cleanUpRows();
      i.$slider.removeClass("slick-slider");
      i.$slider.removeClass("slick-initialized");
      i.$slider.removeClass("slick-dotted");
      i.unslicked = !0;
      t || i.$slider.trigger("destroy", [i]);
    };
    t.prototype.disableTransition = function (n) {
      var t = this,
        i = {};
      i[t.transitionType] = "";
      !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i);
    };
    t.prototype.fadeSlide = function (n, t) {
      var i = this;
      !1 === i.cssTransitions
        ? (i.$slides.eq(n).css({
            zIndex: i.options.zIndex,
          }),
          i.$slides.eq(n).animate(
            {
              opacity: 1,
            },
            i.options.speed,
            i.options.easing,
            t
          ))
        : (i.applyTransition(n),
          i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex,
          }),
          t &&
            setTimeout(function () {
              i.disableTransition(n);
              t.call();
            }, i.options.speed));
    };
    t.prototype.fadeSlideOut = function (n) {
      var t = this;
      !1 === t.cssTransitions
        ? t.$slides.eq(n).animate(
            {
              opacity: 0,
              zIndex: t.options.zIndex - 2,
            },
            t.options.speed,
            t.options.easing
          )
        : (t.applyTransition(n),
          t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2,
          }));
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function (n) {
      var t = this;
      null !== n &&
        ((t.$slidesCache = t.$slides),
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(n).appendTo(t.$slideTrack),
        t.reinit());
    };
    t.prototype.focusHandler = function () {
      var t = this;
      t.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function () {
          var i = n(this);
          setTimeout(function () {
            t.options.pauseOnFocus &&
              i.is(":focus") &&
              ((t.focussed = !0), t.autoPlay());
          }, 0);
        })
        .on("blur.slick", "*", function () {
          n(this);
          t.options.pauseOnFocus && ((t.focussed = !1), t.autoPlay());
        });
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
      return this.currentSlide;
    };
    t.prototype.getDotCount = function () {
      var n = this,
        i = 0,
        r = 0,
        t = 0;
      if (!0 === n.options.infinite)
        if (n.slideCount <= n.options.slidesToShow) ++t;
        else
          for (; i < n.slideCount; )
            ++t,
              (i = r + n.options.slidesToScroll),
              (r +=
                n.options.slidesToScroll <= n.options.slidesToShow
                  ? n.options.slidesToScroll
                  : n.options.slidesToShow);
      else if (!0 === n.options.centerMode) t = n.slideCount;
      else if (n.options.asNavFor)
        for (; i < n.slideCount; )
          ++t,
            (i = r + n.options.slidesToScroll),
            (r +=
              n.options.slidesToScroll <= n.options.slidesToShow
                ? n.options.slidesToScroll
                : n.options.slidesToShow);
      else
        t =
          1 +
          Math.ceil(
            (n.slideCount - n.options.slidesToShow) / n.options.slidesToScroll
          );
      return t - 1;
    };
    t.prototype.getLeft = function (n) {
      var f,
        r,
        i,
        e,
        t = this,
        u = 0;
      return (
        (t.slideOffset = 0),
        (r = t.$slides.first().outerHeight(!0)),
        !0 === t.options.infinite
          ? (t.slideCount > t.options.slidesToShow &&
              ((t.slideOffset = t.slideWidth * t.options.slidesToShow * -1),
              (e = -1),
              !0 === t.options.vertical &&
                !0 === t.options.centerMode &&
                (2 === t.options.slidesToShow
                  ? (e = -1.5)
                  : 1 === t.options.slidesToShow && (e = -2)),
              (u = r * t.options.slidesToShow * e)),
            t.slideCount % t.options.slidesToScroll != 0 &&
              n + t.options.slidesToScroll > t.slideCount &&
              t.slideCount > t.options.slidesToShow &&
              (n > t.slideCount
                ? ((t.slideOffset =
                    (t.options.slidesToShow - (n - t.slideCount)) *
                    t.slideWidth *
                    -1),
                  (u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1))
                : ((t.slideOffset =
                    (t.slideCount % t.options.slidesToScroll) *
                    t.slideWidth *
                    -1),
                  (u = (t.slideCount % t.options.slidesToScroll) * r * -1))))
          : n + t.options.slidesToShow > t.slideCount &&
            ((t.slideOffset =
              (n + t.options.slidesToShow - t.slideCount) * t.slideWidth),
            (u = (n + t.options.slidesToShow - t.slideCount) * r)),
        t.slideCount <= t.options.slidesToShow &&
          ((t.slideOffset = 0), (u = 0)),
        !0 === t.options.centerMode && t.slideCount <= t.options.slidesToShow
          ? (t.slideOffset =
              (t.slideWidth * Math.floor(t.options.slidesToShow)) / 2 -
              (t.slideWidth * t.slideCount) / 2)
          : !0 === t.options.centerMode && !0 === t.options.infinite
          ? (t.slideOffset +=
              t.slideWidth * Math.floor(t.options.slidesToShow / 2) -
              t.slideWidth)
          : !0 === t.options.centerMode &&
            ((t.slideOffset = 0),
            (t.slideOffset +=
              t.slideWidth * Math.floor(t.options.slidesToShow / 2))),
        (f =
          !1 === t.options.vertical
            ? n * t.slideWidth * -1 + t.slideOffset
            : n * r * -1 + u),
        !0 === t.options.variableWidth &&
          ((i =
            t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite
              ? t.$slideTrack.children(".slick-slide").eq(n)
              : t.$slideTrack
                  .children(".slick-slide")
                  .eq(n + t.options.slidesToShow)),
          (f =
            !0 === t.options.rtl
              ? i[0]
                ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width())
                : 0
              : i[0]
              ? -1 * i[0].offsetLeft
              : 0),
          !0 === t.options.centerMode &&
            ((i =
              t.slideCount <= t.options.slidesToShow ||
              !1 === t.options.infinite
                ? t.$slideTrack.children(".slick-slide").eq(n)
                : t.$slideTrack
                    .children(".slick-slide")
                    .eq(n + t.options.slidesToShow + 1)),
            (f =
              !0 === t.options.rtl
                ? i[0]
                  ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            (f += (t.$list.width() - i.outerWidth()) / 2))),
        f
      );
    };
    t.prototype.getOption = t.prototype.slickGetOption = function (n) {
      return this.options[n];
    };
    t.prototype.getNavigableIndexes = function () {
      var i,
        n = this,
        t = 0,
        r = 0,
        u = [];
      for (
        !1 === n.options.infinite
          ? (i = n.slideCount)
          : ((t = -1 * n.options.slidesToScroll),
            (r = -1 * n.options.slidesToScroll),
            (i = 2 * n.slideCount));
        t < i;

      )
        u.push(t),
          (t = r + n.options.slidesToScroll),
          (r +=
            n.options.slidesToScroll <= n.options.slidesToShow
              ? n.options.slidesToScroll
              : n.options.slidesToShow);
      return u;
    };
    t.prototype.getSlick = function () {
      return this;
    };
    t.prototype.getSlideCount = function () {
      var i,
        r,
        u,
        t = this;
      return (
        (u = !0 === t.options.centerMode ? Math.floor(t.$list.width() / 2) : 0),
        (r = -1 * t.swipeLeft + u),
        !0 === t.options.swipeToSlide
          ? (t.$slideTrack.find(".slick-slide").each(function (u, f) {
              var e, o;
              if (
                ((e = n(f).outerWidth()),
                (o = f.offsetLeft),
                !0 !== t.options.centerMode && (o += e / 2),
                r < o + e)
              )
                return (i = f), !1;
            }),
            Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1)
          : t.options.slidesToScroll
      );
    };
    t.prototype.goTo = t.prototype.slickGoTo = function (n, t) {
      this.changeSlide(
        {
          data: {
            message: "index",
            index: parseInt(n),
          },
        },
        t
      );
    };
    t.prototype.init = function (t) {
      var i = this;
      n(i.$slider).hasClass("slick-initialized") ||
        (n(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler());
      t && i.$slider.trigger("init", [i]);
      !0 === i.options.accessibility && i.initADA();
      i.options.autoplay && ((i.paused = !1), i.autoPlay());
    };
    t.prototype.initADA = function () {
      var t = this,
        f = Math.ceil(t.slideCount / t.options.slidesToShow),
        r = t.getNavigableIndexes().filter(function (n) {
          return n >= 0 && n < t.slideCount;
        }),
        i,
        u;
      for (
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({
            "aria-hidden": "true",
            tabindex: "-1",
          })
          .find("a, input, button, select")
          .attr({
            tabindex: "-1",
          }),
          null !== t.$dots &&
            (t.$slides
              .not(t.$slideTrack.find(".slick-cloned"))
              .each(function (i) {
                var f = r.indexOf(i),
                  u;
                (n(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + t.instanceUid + i,
                  tabindex: -1,
                }),
                -1 !== f) &&
                  ((u = "slick-slide-control" + t.instanceUid + f),
                  n("#" + u).length &&
                    n(this).attr({
                      "aria-describedby": u,
                    }));
              }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (i) {
                var u = r[i];
                n(this).attr({
                  role: "presentation",
                });
                n(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + i,
                    "aria-controls": "slick-slide" + t.instanceUid + u,
                    "aria-label": i + 1 + " of " + f,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({
                "aria-selected": "true",
                tabindex: "0",
              })
              .end()),
          i = t.currentSlide,
          u = i + t.options.slidesToShow;
        i < u;
        i++
      )
        t.options.focusOnChange
          ? t.$slides.eq(i).attr({
              tabindex: "0",
            })
          : t.$slides.eq(i).removeAttr("tabindex");
      t.activateADA();
    };
    t.prototype.initArrowEvents = function () {
      var n = this;
      !0 === n.options.arrows &&
        n.slideCount > n.options.slidesToShow &&
        (n.$prevArrow.off("click.slick").on(
          "click.slick",
          {
            message: "previous",
          },
          n.changeSlide
        ),
        n.$nextArrow.off("click.slick").on(
          "click.slick",
          {
            message: "next",
          },
          n.changeSlide
        ),
        !0 === n.options.accessibility &&
          (n.$prevArrow.on("keydown.slick", n.keyHandler),
          n.$nextArrow.on("keydown.slick", n.keyHandler)));
    };
    t.prototype.initDotEvents = function () {
      var t = this;
      !0 === t.options.dots &&
        t.slideCount > t.options.slidesToShow &&
        (n("li", t.$dots).on(
          "click.slick",
          {
            message: "index",
          },
          t.changeSlide
        ),
        !0 === t.options.accessibility &&
          t.$dots.on("keydown.slick", t.keyHandler));
      !0 === t.options.dots &&
        !0 === t.options.pauseOnDotsHover &&
        t.slideCount > t.options.slidesToShow &&
        n("li", t.$dots)
          .on("mouseenter.slick", n.proxy(t.interrupt, t, !0))
          .on("mouseleave.slick", n.proxy(t.interrupt, t, !1));
    };
    t.prototype.initSlideEvents = function () {
      var t = this;
      t.options.pauseOnHover &&
        (t.$list.on("mouseenter.slick", n.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", n.proxy(t.interrupt, t, !1)));
    };
    t.prototype.initializeEvents = function () {
      var t = this;
      t.initArrowEvents();
      t.initDotEvents();
      t.initSlideEvents();
      t.$list.on(
        "touchstart.slick mousedown.slick",
        {
          action: "start",
        },
        t.swipeHandler
      );
      t.$list.on(
        "touchmove.slick mousemove.slick",
        {
          action: "move",
        },
        t.swipeHandler
      );
      t.$list.on(
        "touchend.slick mouseup.slick",
        {
          action: "end",
        },
        t.swipeHandler
      );
      t.$list.on(
        "touchcancel.slick mouseleave.slick",
        {
          action: "end",
        },
        t.swipeHandler
      );
      t.$list.on("click.slick", t.clickHandler);
      n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
      !0 === t.options.accessibility &&
        t.$list.on("keydown.slick", t.keyHandler);
      !0 === t.options.focusOnSelect &&
        n(t.$slideTrack).children().on("click.slick", t.selectHandler);
      n(window).on(
        "orientationchange.slick.slick-" + t.instanceUid,
        n.proxy(t.orientationChange, t)
      );
      n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
      n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
      n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
      n(t.setPosition);
    };
    t.prototype.initUI = function () {
      var n = this;
      !0 === n.options.arrows &&
        n.slideCount > n.options.slidesToShow &&
        (n.$prevArrow.show(), n.$nextArrow.show());
      !0 === n.options.dots &&
        n.slideCount > n.options.slidesToShow &&
        n.$dots.show();
    };
    t.prototype.keyHandler = function (n) {
      var t = this;
      n.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === n.keyCode && !0 === t.options.accessibility
          ? t.changeSlide({
              data: {
                message: !0 === t.options.rtl ? "next" : "previous",
              },
            })
          : 39 === n.keyCode &&
            !0 === t.options.accessibility &&
            t.changeSlide({
              data: {
                message: !0 === t.options.rtl ? "previous" : "next",
              },
            }));
    };
    t.prototype.lazyLoad = function () {
      function f(i) {
        n("img[data-lazy]", i).each(function () {
          var i = n(this),
            r = n(this).attr("data-lazy"),
            f = n(this).attr("data-srcset"),
            e = n(this).attr("data-sizes") || t.$slider.attr("data-sizes"),
            u = document.createElement("img");
          u.onload = function () {
            i.animate(
              {
                opacity: 0,
              },
              100,
              function () {
                f && (i.attr("srcset", f), e && i.attr("sizes", e));
                i.attr("src", r).animate(
                  {
                    opacity: 1,
                  },
                  200,
                  function () {
                    i.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }
                );
                t.$slider.trigger("lazyLoaded", [t, i, r]);
              }
            );
          };
          u.onerror = function () {
            i.removeAttr("data-lazy")
              .removeClass("slick-loading")
              .addClass("slick-lazyload-error");
            t.$slider.trigger("lazyLoadError", [t, i, r]);
          };
          u.src = r;
        });
      }
      var u,
        i,
        r,
        t = this;
      if (
        (!0 === t.options.centerMode
          ? !0 === t.options.infinite
            ? (r =
                (i = t.currentSlide + (t.options.slidesToShow / 2 + 1)) +
                t.options.slidesToShow +
                2)
            : ((i = Math.max(
                0,
                t.currentSlide - (t.options.slidesToShow / 2 + 1)
              )),
              (r = t.options.slidesToShow / 2 + 1 + 2 + t.currentSlide))
          : ((i = t.options.infinite
              ? t.options.slidesToShow + t.currentSlide
              : t.currentSlide),
            (r = Math.ceil(i + t.options.slidesToShow)),
            !0 === t.options.fade && (i > 0 && i--, r <= t.slideCount && r++)),
        (u = t.$slider.find(".slick-slide").slice(i, r)),
        "anticipated" === t.options.lazyLoad)
      )
        for (
          var e = i - 1, o = r, s = t.$slider.find(".slick-slide"), h = 0;
          h < t.options.slidesToScroll;
          h++
        )
          e < 0 && (e = t.slideCount - 1),
            (u = (u = u.add(s.eq(e))).add(s.eq(o))),
            e--,
            o++;
      f(u);
      t.slideCount <= t.options.slidesToShow
        ? f(t.$slider.find(".slick-slide"))
        : t.currentSlide >= t.slideCount - t.options.slidesToShow
        ? f(t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow))
        : 0 === t.currentSlide &&
          f(t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow));
    };
    t.prototype.loadSlider = function () {
      var n = this;
      n.setPosition();
      n.$slideTrack.css({
        opacity: 1,
      });
      n.$slider.removeClass("slick-loading");
      n.initUI();
      "progressive" === n.options.lazyLoad && n.progressiveLazyLoad();
    };
    t.prototype.next = t.prototype.slickNext = function () {
      this.changeSlide({
        data: {
          message: "next",
        },
      });
    };
    t.prototype.orientationChange = function () {
      this.checkResponsive();
      this.setPosition();
    };
    t.prototype.pause = t.prototype.slickPause = function () {
      this.autoPlayClear();
      this.paused = !0;
    };
    t.prototype.play = t.prototype.slickPlay = function () {
      var n = this;
      n.autoPlay();
      n.options.autoplay = !0;
      n.paused = !1;
      n.focussed = !1;
      n.interrupted = !1;
    };
    t.prototype.postSlide = function (t) {
      var i = this;
      i.unslicked ||
        (i.$slider.trigger("afterChange", [i, t]),
        (i.animating = !1),
        i.slideCount > i.options.slidesToShow && i.setPosition(),
        (i.swipeLeft = null),
        i.options.autoplay && i.autoPlay(),
        !0 === i.options.accessibility &&
          (i.initADA(),
          i.options.focusOnChange &&
            n(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
    };
    t.prototype.prev = t.prototype.slickPrev = function () {
      this.changeSlide({
        data: {
          message: "previous",
        },
      });
    };
    t.prototype.preventDefault = function (n) {
      n.preventDefault();
    };
    t.prototype.progressiveLazyLoad = function (t) {
      t = t || 1;
      var r,
        u,
        f,
        e,
        o,
        i = this,
        s = n("img[data-lazy]", i.$slider);
      s.length
        ? ((r = s.first()),
          (u = r.attr("data-lazy")),
          (f = r.attr("data-srcset")),
          (e = r.attr("data-sizes") || i.$slider.attr("data-sizes")),
          ((o = document.createElement("img")).onload = function () {
            f && (r.attr("srcset", f), e && r.attr("sizes", e));
            r.attr("src", u)
              .removeAttr("data-lazy data-srcset data-sizes")
              .removeClass("slick-loading");
            !0 === i.options.adaptiveHeight && i.setPosition();
            i.$slider.trigger("lazyLoaded", [i, r, u]);
            i.progressiveLazyLoad();
          }),
          (o.onerror = function () {
            t < 3
              ? setTimeout(function () {
                  i.progressiveLazyLoad(t + 1);
                }, 500)
              : (r
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                i.$slider.trigger("lazyLoadError", [i, r, u]),
                i.progressiveLazyLoad());
          }),
          (o.src = u))
        : i.$slider.trigger("allImagesLoaded", [i]);
    };
    t.prototype.refresh = function (t) {
      var r,
        u,
        i = this;
      u = i.slideCount - i.options.slidesToShow;
      !i.options.infinite && i.currentSlide > u && (i.currentSlide = u);
      i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0);
      r = i.currentSlide;
      i.destroy(!0);
      n.extend(i, i.initials, {
        currentSlide: r,
      });
      i.init();
      t ||
        i.changeSlide(
          {
            data: {
              message: "index",
              index: r,
            },
          },
          !1
        );
    };
    t.prototype.registerBreakpoints = function () {
      var u,
        f,
        i,
        t = this,
        r = t.options.responsive || null;
      if ("array" === n.type(r) && r.length) {
        for (u in ((t.respondTo = t.options.respondTo || "window"), r))
          if (((i = t.breakpoints.length - 1), r.hasOwnProperty(u))) {
            for (f = r[u].breakpoint; i >= 0; )
              t.breakpoints[i] &&
                t.breakpoints[i] === f &&
                t.breakpoints.splice(i, 1),
                i--;
            t.breakpoints.push(f);
            t.breakpointSettings[f] = r[u].settings;
          }
        t.breakpoints.sort(function (n, i) {
          return t.options.mobileFirst ? n - i : i - n;
        });
      }
    };
    t.prototype.reinit = function () {
      var t = this;
      t.$slides = t.$slideTrack
        .children(t.options.slide)
        .addClass("slick-slide");
      t.slideCount = t.$slides.length;
      t.currentSlide >= t.slideCount &&
        0 !== t.currentSlide &&
        (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
      t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
      t.registerBreakpoints();
      t.setProps();
      t.setupInfinite();
      t.buildArrows();
      t.updateArrows();
      t.initArrowEvents();
      t.buildDots();
      t.updateDots();
      t.initDotEvents();
      t.cleanUpSlideEvents();
      t.initSlideEvents();
      t.checkResponsive(!1, !0);
      !0 === t.options.focusOnSelect &&
        n(t.$slideTrack).children().on("click.slick", t.selectHandler);
      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
      t.setPosition();
      t.focusHandler();
      t.paused = !t.options.autoplay;
      t.autoPlay();
      t.$slider.trigger("reInit", [t]);
    };
    t.prototype.resize = function () {
      var t = this;
      n(window).width() !== t.windowWidth &&
        (clearTimeout(t.windowDelay),
        (t.windowDelay = window.setTimeout(function () {
          t.windowWidth = n(window).width();
          t.checkResponsive();
          t.unslicked || t.setPosition();
        }, 50)));
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function (n, t, i) {
      var r = this;
      if (
        ((n =
          "boolean" == typeof n
            ? !0 === (t = n)
              ? 0
              : r.slideCount - 1
            : !0 === t
            ? --n
            : n),
        r.slideCount < 1 || n < 0 || n > r.slideCount - 1)
      )
        return !1;
      r.unload();
      !0 === i
        ? r.$slideTrack.children().remove()
        : r.$slideTrack.children(this.options.slide).eq(n).remove();
      r.$slides = r.$slideTrack.children(this.options.slide);
      r.$slideTrack.children(this.options.slide).detach();
      r.$slideTrack.append(r.$slides);
      r.$slidesCache = r.$slides;
      r.reinit();
    };
    t.prototype.setCSS = function (n) {
      var r,
        u,
        t = this,
        i = {};
      !0 === t.options.rtl && (n = -n);
      r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px";
      u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px";
      i[t.positionProp] = n;
      !1 === t.transformsEnabled
        ? t.$slideTrack.css(i)
        : ((i = {}),
          !1 === t.cssTransitions
            ? ((i[t.animType] = "translate(" + r + ", " + u + ")"),
              t.$slideTrack.css(i))
            : ((i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)"),
              t.$slideTrack.css(i)));
    };
    t.prototype.setDimensions = function () {
      var n = this,
        t;
      !1 === n.options.vertical
        ? !0 === n.options.centerMode &&
          n.$list.css({
            padding: "0px " + n.options.centerPadding,
          })
        : (n.$list.height(
            n.$slides.first().outerHeight(!0) * n.options.slidesToShow
          ),
          !0 === n.options.centerMode &&
            n.$list.css({
              padding: n.options.centerPadding + " 0px",
            }));
      n.listWidth = n.$list.width();
      n.listHeight = n.$list.height();
      !1 === n.options.vertical && !1 === n.options.variableWidth
        ? ((n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow)),
          n.$slideTrack.width(
            Math.ceil(
              n.slideWidth * n.$slideTrack.children(".slick-slide").length
            )
          ))
        : !0 === n.options.variableWidth
        ? n.$slideTrack.width(5e3 * n.slideCount)
        : ((n.slideWidth = Math.ceil(n.listWidth)),
          n.$slideTrack.height(
            Math.ceil(
              n.$slides.first().outerHeight(!0) *
                n.$slideTrack.children(".slick-slide").length
            )
          ));
      t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
      !1 === n.options.variableWidth &&
        n.$slideTrack.children(".slick-slide").width(n.slideWidth - t);
    };
    t.prototype.setFade = function () {
      var i,
        t = this;
      t.$slides.each(function (r, u) {
        i = t.slideWidth * r * -1;
        !0 === t.options.rtl
          ? n(u).css({
              position: "relative",
              right: i,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0,
            })
          : n(u).css({
              position: "relative",
              left: i,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0,
            });
      });
      t.$slides.eq(t.currentSlide).css({
        zIndex: t.options.zIndex - 1,
        opacity: 1,
      });
    };
    t.prototype.setHeight = function () {
      var n = this,
        t;
      1 === n.options.slidesToShow &&
        !0 === n.options.adaptiveHeight &&
        !1 === n.options.vertical &&
        ((t = n.$slides.eq(n.currentSlide).outerHeight(!0)),
        n.$list.css("height", t));
    };
    t.prototype.setOption = t.prototype.slickSetOption = function () {
      var u,
        f,
        e,
        i,
        r,
        t = this,
        o = !1;
      if (
        ("object" === n.type(arguments[0])
          ? ((e = arguments[0]), (o = arguments[1]), (r = "multiple"))
          : "string" === n.type(arguments[0]) &&
            ((e = arguments[0]),
            (i = arguments[1]),
            (o = arguments[2]),
            "responsive" === arguments[0] && "array" === n.type(arguments[1])
              ? (r = "responsive")
              : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
      )
        t.options[e] = i;
      else if ("multiple" === r)
        n.each(e, function (n, i) {
          t.options[n] = i;
        });
      else if ("responsive" === r)
        for (f in i)
          if ("array" !== n.type(t.options.responsive))
            t.options.responsive = [i[f]];
          else {
            for (u = t.options.responsive.length - 1; u >= 0; )
              t.options.responsive[u].breakpoint === i[f].breakpoint &&
                t.options.responsive.splice(u, 1),
                u--;
            t.options.responsive.push(i[f]);
          }
      o && (t.unload(), t.reinit());
    };
    t.prototype.setPosition = function () {
      var n = this;
      n.setDimensions();
      n.setHeight();
      !1 === n.options.fade ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
      n.$slider.trigger("setPosition", [n]);
    };
    t.prototype.setProps = function () {
      var n = this,
        t = document.body.style;
      n.positionProp = !0 === n.options.vertical ? "top" : "left";
      "top" === n.positionProp
        ? n.$slider.addClass("slick-vertical")
        : n.$slider.removeClass("slick-vertical");
      (void 0 === t.WebkitTransition &&
        void 0 === t.MozTransition &&
        void 0 === t.msTransition) ||
        (!0 === n.options.useCSS && (n.cssTransitions = !0));
      n.options.fade &&
        ("number" == typeof n.options.zIndex
          ? n.options.zIndex < 3 && (n.options.zIndex = 3)
          : (n.options.zIndex = n.defaults.zIndex));
      void 0 !== t.OTransform &&
        ((n.animType = "OTransform"),
        (n.transformType = "-o-transform"),
        (n.transitionType = "OTransition"),
        void 0 === t.perspectiveProperty &&
          void 0 === t.webkitPerspective &&
          (n.animType = !1));
      void 0 !== t.MozTransform &&
        ((n.animType = "MozTransform"),
        (n.transformType = "-moz-transform"),
        (n.transitionType = "MozTransition"),
        void 0 === t.perspectiveProperty &&
          void 0 === t.MozPerspective &&
          (n.animType = !1));
      void 0 !== t.webkitTransform &&
        ((n.animType = "webkitTransform"),
        (n.transformType = "-webkit-transform"),
        (n.transitionType = "webkitTransition"),
        void 0 === t.perspectiveProperty &&
          void 0 === t.webkitPerspective &&
          (n.animType = !1));
      void 0 !== t.msTransform &&
        ((n.animType = "msTransform"),
        (n.transformType = "-ms-transform"),
        (n.transitionType = "msTransition"),
        void 0 === t.msTransform && (n.animType = !1));
      void 0 !== t.transform &&
        !1 !== n.animType &&
        ((n.animType = "transform"),
        (n.transformType = "transform"),
        (n.transitionType = "transition"));
      n.transformsEnabled =
        n.options.useTransform && null !== n.animType && !1 !== n.animType;
    };
    t.prototype.setSlideClasses = function (n) {
      var u,
        i,
        r,
        f,
        t = this,
        e;
      ((i = t.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
      t.$slides.eq(n).addClass("slick-current"),
      !0 === t.options.centerMode)
        ? ((e = t.options.slidesToShow % 2 == 0 ? 1 : 0),
          (u = Math.floor(t.options.slidesToShow / 2)),
          !0 === t.options.infinite &&
            (n >= u && n <= t.slideCount - 1 - u
              ? t.$slides
                  .slice(n - u + e, n + u + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((r = t.options.slidesToShow + n),
                i
                  .slice(r - u + 1 + e, r + u + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === n
              ? i
                  .eq(i.length - 1 - t.options.slidesToShow)
                  .addClass("slick-center")
              : n === t.slideCount - 1 &&
                i.eq(t.options.slidesToShow).addClass("slick-center")),
          t.$slides.eq(n).addClass("slick-center"))
        : n >= 0 && n <= t.slideCount - t.options.slidesToShow
        ? t.$slides
            .slice(n, n + t.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false")
        : i.length <= t.options.slidesToShow
        ? i.addClass("slick-active").attr("aria-hidden", "false")
        : ((f = t.slideCount % t.options.slidesToShow),
          (r = !0 === t.options.infinite ? t.options.slidesToShow + n : n),
          t.options.slidesToShow == t.options.slidesToScroll &&
          t.slideCount - n < t.options.slidesToShow
            ? i
                .slice(r - (t.options.slidesToShow - f), r + f)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i
                .slice(r, r + t.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false"));
      ("ondemand" !== t.options.lazyLoad &&
        "anticipated" !== t.options.lazyLoad) ||
        t.lazyLoad();
    };
    t.prototype.setupInfinite = function () {
      var i,
        r,
        u,
        t = this;
      if (
        (!0 === t.options.fade && (t.options.centerMode = !1),
        !0 === t.options.infinite &&
          !1 === t.options.fade &&
          ((r = null), t.slideCount > t.options.slidesToShow))
      ) {
        for (
          u =
            !0 === t.options.centerMode
              ? t.options.slidesToShow + 1
              : t.options.slidesToShow,
            i = t.slideCount;
          i > t.slideCount - u;
          i -= 1
        )
          (r = i - 1),
            n(t.$slides[r])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", r - t.slideCount)
              .prependTo(t.$slideTrack)
              .addClass("slick-cloned");
        for (i = 0; i < u + t.slideCount; i += 1)
          (r = i),
            n(t.$slides[r])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", r + t.slideCount)
              .appendTo(t.$slideTrack)
              .addClass("slick-cloned");
        t.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            n(this).attr("id", "");
          });
      }
    };
    t.prototype.interrupt = function (n) {
      n || this.autoPlay();
      this.interrupted = n;
    };
    t.prototype.selectHandler = function (t) {
      var i = this,
        u = n(t.target).is(".slick-slide")
          ? n(t.target)
          : n(t.target).parents(".slick-slide"),
        r = parseInt(u.attr("data-slick-index"));
      r || (r = 0);
      i.slideCount <= i.options.slidesToShow
        ? i.slideHandler(r, !1, !0)
        : i.slideHandler(r);
    };
    t.prototype.slideHandler = function (n, t, i) {
      var u,
        f,
        s,
        e,
        h,
        o,
        r = this;
      if (
        ((t = t || !1),
        !(
          (!0 === r.animating && !0 === r.options.waitForAnimate) ||
          (!0 === r.options.fade && r.currentSlide === n)
        ))
      )
        if (
          (!1 === t && r.asNavFor(n),
          (u = n),
          (h = r.getLeft(u)),
          (e = r.getLeft(r.currentSlide)),
          (r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft),
          !1 === r.options.infinite &&
            !1 === r.options.centerMode &&
            (n < 0 || n > r.getDotCount() * r.options.slidesToScroll))
        )
          !1 === r.options.fade &&
            ((u = r.currentSlide),
            !0 !== i && r.slideCount > r.options.slidesToShow
              ? r.animateSlide(e, function () {
                  r.postSlide(u);
                })
              : r.postSlide(u));
        else if (
          !1 === r.options.infinite &&
          !0 === r.options.centerMode &&
          (n < 0 || n > r.slideCount - r.options.slidesToScroll)
        )
          !1 === r.options.fade &&
            ((u = r.currentSlide),
            !0 !== i && r.slideCount > r.options.slidesToShow
              ? r.animateSlide(e, function () {
                  r.postSlide(u);
                })
              : r.postSlide(u));
        else {
          if (
            (r.options.autoplay && clearInterval(r.autoPlayTimer),
            (f =
              u < 0
                ? r.slideCount % r.options.slidesToScroll != 0
                  ? r.slideCount - (r.slideCount % r.options.slidesToScroll)
                  : r.slideCount + u
                : u >= r.slideCount
                ? r.slideCount % r.options.slidesToScroll != 0
                  ? 0
                  : u - r.slideCount
                : u),
            (r.animating = !0),
            r.$slider.trigger("beforeChange", [r, r.currentSlide, f]),
            (s = r.currentSlide),
            (r.currentSlide = f),
            r.setSlideClasses(r.currentSlide),
            r.options.asNavFor &&
              (o = (o = r.getNavTarget()).slick("getSlick")).slideCount <=
                o.options.slidesToShow &&
              o.setSlideClasses(r.currentSlide),
            r.updateDots(),
            r.updateArrows(),
            !0 === r.options.fade)
          )
            return (
              !0 !== i
                ? (r.fadeSlideOut(s),
                  r.fadeSlide(f, function () {
                    r.postSlide(f);
                  }))
                : r.postSlide(f),
              void r.animateHeight()
            );
          !0 !== i && r.slideCount > r.options.slidesToShow
            ? r.animateSlide(h, function () {
                r.postSlide(f);
              })
            : r.postSlide(f);
        }
    };
    t.prototype.startLoad = function () {
      var n = this;
      !0 === n.options.arrows &&
        n.slideCount > n.options.slidesToShow &&
        (n.$prevArrow.hide(), n.$nextArrow.hide());
      !0 === n.options.dots &&
        n.slideCount > n.options.slidesToShow &&
        n.$dots.hide();
      n.$slider.addClass("slick-loading");
    };
    t.prototype.swipeDirection = function () {
      var i,
        r,
        u,
        n,
        t = this;
      return (
        (i = t.touchObject.startX - t.touchObject.curX),
        (r = t.touchObject.startY - t.touchObject.curY),
        (u = Math.atan2(r, i)),
        (n = Math.round((180 * u) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
        n <= 45 && n >= 0
          ? !1 === t.options.rtl
            ? "left"
            : "right"
          : n <= 360 && n >= 315
          ? !1 === t.options.rtl
            ? "left"
            : "right"
          : n >= 135 && n <= 225
          ? !1 === t.options.rtl
            ? "right"
            : "left"
          : !0 === t.options.verticalSwiping
          ? n >= 35 && n <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    };
    t.prototype.swipeEnd = function () {
      var t,
        i,
        n = this;
      if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
        return (n.scrolling = !1), !1;
      if (
        ((n.interrupted = !1),
        (n.shouldClick = !(n.touchObject.swipeLength > 10)),
        void 0 === n.touchObject.curX)
      )
        return !1;
      if (
        (!0 === n.touchObject.edgeHit &&
          n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe)
      ) {
        switch ((i = n.swipeDirection())) {
          case "left":
          case "down":
            t = n.options.swipeToSlide
              ? n.checkNavigable(n.currentSlide + n.getSlideCount())
              : n.currentSlide + n.getSlideCount();
            n.currentDirection = 0;
            break;
          case "right":
          case "up":
            t = n.options.swipeToSlide
              ? n.checkNavigable(n.currentSlide - n.getSlideCount())
              : n.currentSlide - n.getSlideCount();
            n.currentDirection = 1;
        }
        "vertical" != i &&
          (n.slideHandler(t),
          (n.touchObject = {}),
          n.$slider.trigger("swipe", [n, i]));
      } else
        n.touchObject.startX !== n.touchObject.curX &&
          (n.slideHandler(n.currentSlide), (n.touchObject = {}));
    };
    t.prototype.swipeHandler = function (n) {
      var t = this;
      if (
        !(
          !1 === t.options.swipe ||
          ("ontouchend" in document && !1 === t.options.swipe) ||
          (!1 === t.options.draggable && -1 !== n.type.indexOf("mouse"))
        )
      )
        switch (
          ((t.touchObject.fingerCount =
            n.originalEvent && void 0 !== n.originalEvent.touches
              ? n.originalEvent.touches.length
              : 1),
          (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
          !0 === t.options.verticalSwiping &&
            (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
          n.data.action)
        ) {
          case "start":
            t.swipeStart(n);
            break;
          case "move":
            t.swipeMove(n);
            break;
          case "end":
            t.swipeEnd(n);
        }
    };
    t.prototype.swipeMove = function (n) {
      var f,
        e,
        r,
        u,
        i,
        o,
        t = this;
      return (
        (i = void 0 !== n.originalEvent ? n.originalEvent.touches : null),
        !(!t.dragging || t.scrolling || (i && 1 !== i.length)) &&
          ((f = t.getLeft(t.currentSlide)),
          (t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX),
          (t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY),
          (t.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))
          )),
          (o = Math.round(
            Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2))
          )),
          !t.options.verticalSwiping && !t.swiping && o > 4
            ? ((t.scrolling = !0), !1)
            : (!0 === t.options.verticalSwiping &&
                (t.touchObject.swipeLength = o),
              (e = t.swipeDirection()),
              void 0 !== n.originalEvent &&
                t.touchObject.swipeLength > 4 &&
                ((t.swiping = !0), n.preventDefault()),
              (u =
                (!1 === t.options.rtl ? 1 : -1) *
                (t.touchObject.curX > t.touchObject.startX ? 1 : -1)),
              !0 === t.options.verticalSwiping &&
                (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1),
              (r = t.touchObject.swipeLength),
              (t.touchObject.edgeHit = !1),
              !1 === t.options.infinite &&
                ((0 === t.currentSlide && "right" === e) ||
                  (t.currentSlide >= t.getDotCount() && "left" === e)) &&
                ((r = t.touchObject.swipeLength * t.options.edgeFriction),
                (t.touchObject.edgeHit = !0)),
              (t.swipeLeft =
                !1 === t.options.vertical
                  ? f + r * u
                  : f + r * (t.$list.height() / t.listWidth) * u),
              !0 === t.options.verticalSwiping && (t.swipeLeft = f + r * u),
              !0 !== t.options.fade &&
                !1 !== t.options.touchMove &&
                (!0 === t.animating
                  ? ((t.swipeLeft = null), !1)
                  : void t.setCSS(t.swipeLeft))))
      );
    };
    t.prototype.swipeStart = function (n) {
      var i,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== n.originalEvent &&
        void 0 !== n.originalEvent.touches &&
        (i = n.originalEvent.touches[0]);
      t.touchObject.startX = t.touchObject.curX =
        void 0 !== i ? i.pageX : n.clientX;
      t.touchObject.startY = t.touchObject.curY =
        void 0 !== i ? i.pageY : n.clientY;
      t.dragging = !0;
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
      var n = this;
      null !== n.$slidesCache &&
        (n.unload(),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slidesCache.appendTo(n.$slideTrack),
        n.reinit());
    };
    t.prototype.unload = function () {
      var t = this;
      n(".slick-cloned", t.$slider).remove();
      t.$dots && t.$dots.remove();
      t.$prevArrow &&
        t.htmlExpr.test(t.options.prevArrow) &&
        t.$prevArrow.remove();
      t.$nextArrow &&
        t.htmlExpr.test(t.options.nextArrow) &&
        t.$nextArrow.remove();
      t.$slides
        .removeClass("slick-slide slick-active slick-visible slick-current")
        .attr("aria-hidden", "true")
        .css("width", "");
    };
    t.prototype.unslick = function (n) {
      var t = this;
      t.$slider.trigger("unslick", [t, n]);
      t.destroy();
    };
    t.prototype.updateArrows = function () {
      var n = this;
      Math.floor(n.options.slidesToShow / 2);
      !0 === n.options.arrows &&
        n.slideCount > n.options.slidesToShow &&
        !n.options.infinite &&
        (n.$prevArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false"),
        n.$nextArrow
          .removeClass("slick-disabled")
          .attr("aria-disabled", "false"),
        0 === n.currentSlide
          ? (n.$prevArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
            n.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow &&
            !1 === n.options.centerMode
          ? (n.$nextArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
            n.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"))
          : n.currentSlide >= n.slideCount - 1 &&
            !0 === n.options.centerMode &&
            (n.$nextArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
            n.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false")));
    };
    t.prototype.updateDots = function () {
      var n = this;
      null !== n.$dots &&
        (n.$dots.find("li").removeClass("slick-active").end(),
        n.$dots
          .find("li")
          .eq(Math.floor(n.currentSlide / n.options.slidesToScroll))
          .addClass("slick-active"));
    };
    t.prototype.visibility = function () {
      var n = this;
      n.options.autoplay && (n.interrupted = document[n.hidden] ? !0 : !1);
    };
    n.fn.slick = function () {
      for (
        var u,
          i = this,
          r = arguments[0],
          f = Array.prototype.slice.call(arguments, 1),
          e = i.length,
          n = 0;
        n < e;
        n++
      )
        if (
          ("object" == typeof r || void 0 === r
            ? (i[n].slick = new t(i[n], r))
            : (u = i[n].slick[r].apply(i[n].slick, f)),
          void 0 !== u)
        )
          return u;
      return i;
    };
  }),
  (function (n) {
    function t(r) {
      if (i[r]) return i[r].exports;
      var u = (i[r] = {
        exports: {},
        id: r,
        loaded: !1,
      });
      return n[r].call(u.exports, u, u.exports, t), (u.loaded = !0), u.exports;
    }
    var i = {};
    t.m = n;
    t.c = i;
    t.p = "";
    t(0);
  })([
    function (n, t, i) {
      "use strict";
      function r(n) {
        return n && n.__esModule
          ? n
          : {
              default: n,
            };
      }
      var e = r(i(1)),
        o = r(i(2)),
        s = r(i(3)),
        h = r(i(5)),
        u = r(i(6)),
        c = r(i(7)),
        l = r(i(8)),
        a = r(i(9)),
        v = r(i(10)),
        y = r(i(11)),
        p = r(i(12)),
        w = r(i(13)),
        f = r(i(14)),
        b = r(i(15)),
        k = r(i(16)),
        d = r(i(17)),
        g = r(i(18)),
        nt = r(i(19)),
        tt = r(i(20)),
        it = r(i(21)),
        rt = r(i(22)),
        ut = r(i(23)),
        ft = r(i(24)),
        et = r(i(25)),
        ot = r(i(26)),
        st = r(i(27)),
        ht = r(i(28)),
        ct = r(i(29));
      e.default.init();
      o.default.init();
      nt.default.init();
      tt.default.init();
      it.default.init();
      $(window).on("resize", function () {
        f.default.init();
      });
      $(window).on("resize", function () {
        f.default.init();
        u.default.init();
      });
      $(document).ready(function () {
        ft.default.init();
        ut.default.init();
        et.default.init();
        ot.default.init();
        g.default.init();
        d.default.init();
        k.default.init();
        b.default.init();
        w.default.init();
        p.default.init();
        y.default.init();
        a.default.init();
        v.default.init();
        l.default.init();
        c.default.init();
        u.default.init();
        h.default.init();
        st.default.init();
        ht.default.init();
        rt.default.init();
        ct.default.init();
        document.documentElement.scrollTop = 0;
        s.default.init();
      });
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        init: function () {
          this.addActiveClass();
        },
        addActiveClass: function () {
          setTimeout(function () {
            $(document).ready(function () {
              var t = location.pathname,
                i,
                n;
              if (1 !== t.lenght) {
                if (
                  ((i = location.pathname.split("/")[1]),
                  (n = $('.nav__submenu-link[href*="' + i + '"]')),
                  void 0 === n || 0 === n.length)
                ) {
                  if (
                    !(
                      void 0 !== (n = $('.js-nav-link[href="' + t + '"]')) ||
                      n.length > 0
                    )
                  )
                    return;
                  n.addClass("nav__link--current");
                }
                n.closest("li.has-children")
                  .find("a.js-nav-link")
                  .addClass("nav__link--current");
              }
            });
          }, 50);
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $announcement: $(".urgent__btn-wrapper"),
        init: function () {
          this.acceptCookie();
        },
        acceptCookie: function () {
          var n = this.$announcement.data("accept-cookie-url");
          n &&
            this.$announcement.on(
              "click",
              "[announcement-cookie-close]",
              function () {
                $.post(n, {});
              }
            );
        },
      };
      t.default = i;
    },
    function (n, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r,
        u =
          (r = i(4)) && r.__esModule
            ? r
            : {
                default: r,
              },
        f = {
          $downloadbtn: $(".js-download-btn"),
          init: function () {
            this.downloadButtonClick();
            this.handleLabelShow();
            this.closePopup();
          },
          downloadButtonClick: function () {
            this.$downloadbtn.on("click", function () {
              var n = $(this),
                t = n.data("file-guid"),
                i = n.data("recipient-guid"),
                r;
              r = n.data("controller-url");
              $(".js-download-popup").addClass("download-form__popup--show");
              $.ajax({
                url: r,
                type: "GET",
                success: function (n) {
                  u.default.disableScroll();
                  $("#response-container").html(n);
                },
                error: function (n) {
                  u.default.enableScroll();
                  $(".js-download-popup").removeClass(
                    "download-form__popup--show"
                  );
                  console.error("Error:", n);
                },
              });
            });
          },
          handleLabelShow: function () {
            $(document).on("input", ".js-download-input", function (n) {
              var t = $(n.currentTarget),
                i = t.parent().find(".js-download-label");
              "" !== t.val()
                ? i.addClass("download-form__input-label--show")
                : i.removeClass("download-form__input-label--show");
            });
            $(document).on("change", ".js-download-consent", function (n) {
              var i = $(n.currentTarget),
                t = $(".js-download-consent-label").parent();
              i.is(":checked")
                ? t.removeClass("download-form__input-holder--invalid")
                : t.addClass("download-form__input-holder--invalid");
            });
          },
          closePopup: function () {
            $(document).on("click", ".js-download-close", function () {
              u.default.enableScroll();
              $(".js-download-popup").removeClass("download-form__popup--show");
              $("#response-container").html("");
            });
          },
        };
      t.default = f;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        topScroll: 0,
        isScrollDisabled: !1,
        disableScroll: function () {
          this.isScrollDisabled ||
            ((this.topScroll = $(window).scrollTop()),
            $("body")
              .css("top", -this.topScroll + "px")
              .addClass("scroll-disabled"),
            (this.isScrollDisabled = !0));
        },
        enableScroll: function () {
          $("body").removeAttr("style").removeClass("scroll-disabled");
          $(window).scrollTop(this.topScroll);
          this.isScrollDisabled = !1;
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        init: function () {
          var n = $("html");
          ("ontouchstart" in window || navigator.msMaxTouchPoints > 0) &&
          window.matchMedia("screen and (max-width: 1024px)").matches
            ? n.addClass("touch")
            : n.addClass("no-touch");
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $parentElement: $(".js-equal-heights"),
        itemsClass: ".js-equal-heights-item",
        init: function () {
          this.setHeights();
        },
        setHeights: function () {
          var n = this;
          this.$parentElement.each(function (t, i) {
            var e = $(i),
              s = $(window).width(),
              f = 0,
              u,
              r,
              h,
              c,
              o,
              l,
              v,
              a;
            switch (!0) {
              case s > 1024:
                f = parseInt(e.attr("data-equal-desk"));
                break;
              case s > 768 && s <= 1024:
                f = parseInt(e.attr("data-equal-tablet"));
                break;
              case s <= 768:
                f = parseInt(e.attr("data-equal-phone"));
                break;
              default:
                f = parseInt(e.attr("data-equal-desk"));
            }
            if (((u = e.find(n.itemsClass)), u.length > 0))
              if ((u.height(""), (r = 0), f)) {
                for (h = []; u.length > 0; ) h.push(u.splice(0, f));
                for (c = 0; c < h.length; c += 1) {
                  for (o = h[c], r = 0, l = 0; l < o.length; l += 1)
                    (v = $(o[l]).outerHeight(!0)), v > r && (r = v);
                  for (a = 0; a < o.length; a += 1) $(o[a]).css("height", r);
                }
              } else
                u.each(function () {
                  var n = $(this).outerHeight(!0);
                  n > r && (r = n);
                }),
                  u.css("height", r);
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $betaButton: $(".js-is-beta-button"),
        $betaContent: $(".js-is-beta-content"),
        init: function () {
          this.$betaButton.on("click", this.toggleContent.bind(this));
        },
        toggleContent: function () {
          this.$betaContent.fadeToggle();
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        selector: $(".js-slider"),
        sliderMap: $(".js-slider-map"),
        sliderReport: $(".js-report-slider"),
        sliderHome: $(".js-home-slider"),
        status: ".slider-counter",
        sum: ".slider-sum",
        init: function () {
          this.initRegularSlider();
          this.initMapSlider();
          this.initReportSlider();
          this.homeSlider();
        },
        initRegularSlider: function () {
          var n = this;
          n.selector.each(function () {
            var t = $(this),
              i = t.parent().parent(),
              r = void 0;
            t.hasClass("hero__slider")
              ? (r = t.closest(".hero__slider"))
              : t.parent().hasClass("promoted-article__slider")
              ? (r = t.closest(".promoted-article__container"))
              : t.parent().hasClass("gallery__slider") &&
                (r = t.closest(".gallery__container"));
            t.on("init", function (t, r, u) {
              var f = (u || 0) + 1;
              i.find(n.status).text(n.addZeros(f));
              i.find(n.sum).text(n.addZeros(r.slideCount));
            });
            t.slick({
              slidesToShow: 1,
              arrows: !0,
              prevArrow:
                '<button class="slick-prev slider__arrow" aria-label="Previous" type="button"><span class="icon font-ico-arrow-left"></span></button>',
              nextArrow:
                '<button class="slick-next slider__arrow" aria-label="Next" type="button"><span class="icon font-ico-arrow-right"></span></button>',
              infinite: !1,
              appendArrows: r,
            });
            t.on("afterChange", function (t, r, u) {
              var f = (u || 0) + 1;
              i.find(n.status).text(n.addZeros(f));
              i.find(n.sum).text(n.addZeros(r.slideCount));
            });
          });
        },
        initMapSlider: function () {
          this.sliderMap.slick({
            slidesToShow: 1,
            arrows: !1,
            dots: !0,
          });
        },
        homeSlider: function () {
          this.sliderHome.slick({
            slidesToShow: 1,
            dots: !0,
            infinite: !1,
            prevArrow:
              '<button class="slick-prev" aria-label="Previous" type="button"><span class="icon font-ico-arrow-back"></span></button>',
            nextArrow:
              '<button class="slick-next" aria-label="Next" type="button"><span class="icon font-ico-arrow-short-right2"></span></button>',
          });
        },
        addZeros: function (n) {
          return n < 10 ? "0" + n : "" + n;
        },
        initReportSlider: function () {
          this.sliderReport.slick();
          var n = $(".slick-slide").length,
            t = $(".slider-sum"),
            i = $(".slider-counter"),
            r = $(".report");
          n <= 1 && (t.hide(), i.hide(), r.addClass("hide-after"));
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        init: function () {
          var t = $("body"),
            n = $("html, body"),
            i = $(".header");
          t.find(".hero").on("click", ".js-home-arrow-down", function () {
            var r = $(".header").outerHeight(),
              t = $(this).closest(".hero").next("div").offset().top;
            i.hasClass("show")
              ? n.stop().animate(
                  {
                    scrollTop: t,
                  },
                  600
                )
              : n.stop().animate(
                  {
                    scrollTop: t - r - 10,
                  },
                  600
                );
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $doc: $(document),
        $win: $(window),
        $playBtn: $(".js-btn-play"),
        $videoPopup: $(".has-video-popup"),
        $videoWrap: $(".js-video-parent"),
        $videoOverlay: $(".video__overlay"),
        playBtn: ".js-btn-play",
        video: ".js-video",
        videoPlaying: "collaborate__video--playing",
        videoPopup: ".has-video-popup",
        videoOverlay: ".video__overlay",
        videoClsBtn: ".video__close-btn",
        speed: "500",
        videoUrl: "video-url",
        iframe: "iframe",
        init: function () {
          this.bindVideoEvents();
        },
        bindVideoEvents: function () {
          var n = this,
            t;
          ($(document).on("click", n.playBtn, function () {
            var t = $(this),
              i = t.closest(n.videoPopup).find(n.videoOverlay);
            i.find(n.iframe).attr("src", t.data(n.videoUrl) + "?autoplay=1");
            setTimeout(function () {
              i.fadeIn(n.speed);
            }, n.speed);
          }),
          this.$videoPopup.find(n.videoClsBtn).on("click", function () {
            var t = $(this).closest(n.videoOverlay),
              i = t.find(n.iframe);
            t.fadeOut(n.speed, function () {
              i.attr("src", "");
            });
          }),
          this.$win.width() > 1024) &&
            (n.$doc.keydown(function (t) {
              if (27 === t.keyCode) {
                var i = n.$videoOverlay.find(n.iframe);
                n.$videoOverlay.fadeOut(n.speed, function () {
                  i.attr("src", "");
                });
              }
            }),
            (t = null),
            n.$videoWrap.hover(
              function () {
                var i = $(this).find(n.video);
                i.addClass(n.videoPlaying);
                i.get(0).play();
                t = setInterval(function () {
                  i.get(0).currentTime = 0;
                }, 4e3);
              },
              function () {
                var i = $(this).find(n.video);
                i.removeClass(n.videoPlaying);
                i.get(0).currentTime = 0;
                i.get(0).pause();
                clearInterval(t);
              }
            ));
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        init: function () {
          this.mapLinkPopup();
          this.mapPosition();
        },
        mapLinkPopup: function () {
          var n = $(".map__image").find(".map__dot");
          n.on("mouseenter", function () {
            var n = $(this);
            n.addClass("active");
            n.siblings().removeClass("active");
          });
          $(document).click(function (t) {
            $(t.target).closest(".map__image").length ||
              n.removeClass("active");
          });
        },
        mapPosition: function () {
          var n = $(".map__dot");
          $(".map__image")
            .find(n)
            .each(function () {
              var n = $(this),
                t = n.data("top"),
                i = n.data("left");
              n.css({
                top: t,
                left: i,
              });
            });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        init: function () {
          var i = $("[data-tab]"),
            n = $(".tab__content"),
            t = "",
            r = $(".tab__link");
          n.length &&
            (i.each(function () {
              var n = $(this);
              n.hasClass("selected") && (t = n.data("tab"));
            }),
            n.each(function () {
              var n = $(this);
              n.hasClass("js_" + t) && n.show();
            }),
            r.on("click", function () {
              var t = $(this),
                i = t.data("tab"),
                n = t.parents(".tabs__container");
              n.find("[data-tab]").removeClass("selected");
              t.addClass("selected");
              n.find('[data-tab="' + i + '"]').addClass("selected");
              n.find(".tab__content").hide();
              n.find(".js_" + i).show();
            }));
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $person: $(".people__widget"),
        $otherPeople: $(".people__item"),
        $peopleList: $(".people__list"),
        init: function () {
          this.peopleExpand();
          this.personPopupAutoOpen();
          this.checkPeopleItemPosition();
        },
        peopleExpand: function () {
          this.$person.on("click", function () {
            var t = this,
              n = $(this),
              i,
              r;
            if (n.closest(".people__item").hasClass("open"))
              n.closest(".people__item").hasClass("open") &&
                (n.next(".people__details").slideUp(300),
                n.closest(".people__item").removeClass("open"));
            else {
              i = $(".people__details");
              r = $(".people__item");
              i.slideUp(300);
              r.removeClass("open");
              setTimeout(function () {
                n.next(".people__details").slideDown(300);
              }, 400);
              n.closest(".people__item").addClass("open");
              var u = $(".people__details"),
                f = $(".contact-card__container"),
                e = $("html, body"),
                o = $(".header").height(),
                s = f.height();
              setTimeout(function () {
                function n(n, t, i, r, u) {
                  n.animate(
                    {
                      scrollTop: t - i - r - u,
                    },
                    600
                  );
                }
                var i, r;
                f.length
                  ? u &&
                    ((i = $(t).closest(".people__widget").offset().top),
                    n(e, i, o, s, 20))
                  : u &&
                    ((r = $(t).closest(".people__widget").offset().top),
                    n(e, r, o, 0, 10));
              }, 300);
            }
          });
        },
        personPopupAutoOpen: function () {
          var n = $(".people__item[selected]");
          null != n &&
            setTimeout(function () {
              n.find("button").click();
            }, 200);
        },
        checkPeopleItemPosition: function () {
          this.$peopleList.each(function () {
            var n = !1;
            $(this)
              .children()
              .each(function () {
                $(this).hasClass("people__description")
                  ? (n = !n)
                  : n && $(this).addClass("reversed");
              });
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $bgSwitch: $(".js-grid-bg-img"),
        $images: $("img[data-desktop][data-tablet][data-mobile]"),
        init: function () {
          this.resizeImages();
        },
        resizeImages: function () {
          this.$bgSwitch.length &&
            this.$bgSwitch.each(function () {
              var n = $(this),
                t = n.data("desktop-img"),
                r = n.data("tablet-img"),
                u = n.data("mobile-img"),
                i = $(window).width();
              i > 1024
                ? "" !== n.data("desktop-img") &&
                  n.css("background-image", "url(" + t + ")")
                : i > 767 && $(window).width() < 1025
                ? n.attr("data-tablet-img")
                  ? n.css("background-image", "url(" + r + ")")
                  : n.css("background-image", "url(" + t + ")")
                : n.attr("data-mobile-img")
                ? n.css("background-image", "url(" + u + ")")
                : n.css("background-image", "url(" + t + ")");
            });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $yearTabList: $(".downloads__links"),
        $filter: $(".js-last_news-filter"),
        $articleWrapper: $(".articles"),
        guidEmpty: "00000000-0000-0000-0000-000000000000",
        init: function () {
          this.clearFilters();
          this.filterArticlesByType();
          this.filterArticlesByYear();
          this.filterArticlesByRegion();
          this.pagination();
          this.deleteUncessaryItems();
        },
        clearFilters: function () {
          $("#ListingYears").prop("selectedIndex", 0).selectric("refresh");
          $("#ListingCategories").prop("selectedIndex", 0).selectric("refresh");
          $("#ListingRegions").prop("selectedIndex", 0).selectric("refresh");
        },
        filterArticlesByType: function () {
          var n = this;
          $("#ListingCategories")
            .off("change")
            .on("change", function () {
              n.callAjax(1);
            });
        },
        filterArticlesByYear: function () {
          var n = this;
          $("#ListingYears")
            .off("change")
            .on("change", function () {
              n.callAjax(1);
            });
        },
        filterArticlesByRegion: function () {
          var n = this;
          $("#ListingRegions")
            .off("change")
            .on("change", function () {
              n.callAjax(1);
            });
        },
        pagination: function () {
          var n = this;
          n.$articleWrapper
            .off("click", ".pagination__link")
            .on("click", ".pagination__link", function () {
              var i = $(this),
                t;
              i.hasClass("pagination__link--disabled") ||
                ((t = i.data("page")),
                n.callAjax(t),
                setTimeout(function () {
                  n.$articleWrapper
                    .find(".pagination__link--active")
                    .removeClass("pagination__link--active");
                  n.$articleWrapper
                    .find("[pagination-number][data-page=" + t + "]")
                    .addClass("pagination__link--active");
                }, 50));
            });
        },
        callAjax: function (n) {
          var t = this,
            i = t.$articleWrapper.data("controller-url"),
            r = t.$articleWrapper.data("page-key");
          i &&
            ($.get(
              i,
              {
                pageKey: r,
                year: (function () {
                  var n = $("#ListingYears option:selected").val();
                  return (void 0 !== n && 0 !== n.length) || (n = 0), n;
                })(),
                typeKey: (function () {
                  var n = $("#ListingCategories option:selected").val();
                  return (
                    (void 0 !== n && 0 !== n.length) || (n = t.guidEmpty), n
                  );
                })(),
                regionKey: (function () {
                  var n = $("#ListingRegions option:selected").val();
                  return (
                    (void 0 !== n && 0 !== n.length) || (n = t.guidEmpty), n
                  );
                })(),
                page: n,
              },
              function (n) {
                t.$articleWrapper.empty();
                t.$articleWrapper.append(n);
              },
              "html"
            ),
            history.pushState(null, null, window.location.pathname));
        },
        deleteUncessaryItems: function () {
          var n = this;
          $(document).ready(function () {
            n.$filter
              .find(".selectric-scroll")
              .find("li[data-index=0]")
              .remove();
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        init: function () {
          this.mapPosition();
          this.mapHover();
        },
        mapPosition: function () {
          var n = $(".map-locations__dot");
          $(".map-locations__image")
            .find(n)
            .each(function () {
              var n = $(this),
                t = n.data("top"),
                i = n.data("left");
              n.css({
                top: t,
                left: i,
              });
            });
        },
        mapHover: function () {
          var n = $(".map-locations__dot"),
            t = $(".map-locations__item");
          t.on("mouseover", function () {
            var n = $(this).data("link");
            $('.map-locations__dot[data-dot="' + n + '"]').addClass("active");
          });
          n.on("mouseover", function () {
            var n = $(this).data("dot"),
              t = $('.map-locations__item[data-link="' + n + '"]');
            $(this).addClass("active");
            t.css("text-decoration", "underline");
          });
          n.on("mouseleave", function () {
            n.removeClass("active");
            $(".map-locations__item").css("text-decoration", "none");
          });
          t.on("mouseleave", function () {
            n.removeClass("active");
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $articleWrapper: $(".video-gallery__container"),
        init: function () {
          this.pagination();
        },
        pagination: function () {
          var n = this;
          n.$articleWrapper
            .off("click", ".pagination__link")
            .on("click", ".pagination__link", function () {
              var i = $(this),
                t;
              i.hasClass("pagination__link--disabled") ||
                ((t = i.data("page")),
                n.callAjax(t, n.$articleWrapper),
                setTimeout(function () {
                  n.$articleWrapper
                    .find(".pagination__link--active")
                    .removeClass("pagination__link--active");
                  n.$articleWrapper
                    .find("[pagination-number][data-page=" + t + "]")
                    .addClass("pagination__link--active");
                }, 50));
            });
        },
        callAjax: function (n, t) {
          var i = t.data("controller-url"),
            r = t.data("page-key");
          i &&
            $.get(
              i,
              {
                pageKey: r,
                page: n,
              },
              function (n) {
                t.empty();
                t.append(n);
              },
              "html"
            );
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $searchWrapper: $("[search-results]"),
        $search: $(".js-search-wildcards"),
        $wildcard: $(".js-wildcard"),
        $nav: $(".js-search-open"),
        $wildcardLink: $(".js-wildcard-link"),
        init: function () {
          var n = this;
          this.pagination();
          this.focusoutWildcards();
          this.$search.on("click", function () {
            n.$wildcard.show();
          });
          this.$nav.on("click", function () {
            n.$wildcard.show();
          });
        },
        pagination: function () {
          var n = this;
          n.$searchWrapper
            .off("click", ".pagination__link")
            .on("click", ".pagination__link", function () {
              var i = $(this),
                t;
              i.hasClass("pagination__link--disabled") ||
                ((t = i.data("page")),
                n.callAjax(t),
                setTimeout(function () {
                  n.$searchWrapper
                    .find(".pagination__link--active")
                    .removeClass("pagination__link--active");
                  n.$searchWrapper
                    .find("[pagination-number][data-page=" + t + "]")
                    .addClass("pagination__link--active");
                }, 50));
            });
        },
        callAjax: function (n) {
          var t = this.$searchWrapper,
            i = t.data("controller-url"),
            r = t.data("page-key"),
            u = t.data("query");
          i &&
            $.get(
              i,
              {
                query: u,
                page: n,
                pageKey: r,
              },
              function (n) {
                t.empty();
                t.append(n);
              },
              "html"
            );
        },
        focusinWildcards: function () {
          this.$wildcard.show();
        },
        focusoutWildcards: function () {
          var n = this;
          $("body").on("click", function (t) {
            $(t.target).closest(".js-wildcard").length ||
              $(t.target).closest(".search__input").length ||
              $(t.target).closest(".js-search-wildcards").length ||
              $(t.target).closest(".js-search-open").length ||
              n.$wildcard.hide();
          });
        },
      };
      t.default = i;
    },
    // function (n, t) {
    //   "use strict";
    //   Object.defineProperty(t, "__esModule", {
    //     value: !0,
    //   });
    //   var i = {
    //     $newsletterWrapper: $(".newsletter__container"),
    //     $newsletterBtn: $(".newsletter__btn"),
    //     init: function () {
    //       this.subscribe();
    //     },
    //     subscribe: function () {
    //       var n = this;
    //       n.$newsletterBtn.on("click", function (t) {

    //         if (1 !== $("span[generated=true]").length) {
    //           var r = $(this).data("controller-url"),
    //             i = $(this).siblings("input").val();

    //           i &&
    //             ($.post(
    //               r,
    //               {
    //                 emailAddress: i,
    //               },
    //               function (t) {
    //                 n.$newsletterWrapper.empty();
    //                 n.$newsletterWrapper.addClass(
    //                   "newsletter__container--success"
    //                 );
    //                 n.$newsletterWrapper.append(
    //                   '<span class="newsletter__success">' + t + "</span>"
    //                 );
    //               },
    //               "html"
    //             ),
    //             t.preventDefault());
    //         }
    //       });
    //     },
    //   };
    //   t.default = i;
    // },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $newsletterWrapper: $(".newsletter__container"),
        $newsletterBtn: $(".newsletter__btn"),
        $newsletterForm: $(".newsletter__form"),
        init: function () {
          this.initValidation();
          this.subscribe();
        },
        initValidation: function () {
          // Reinitialize jQuery validation
          if ($.validator && $.validator.unobtrusive) {
            $.validator.unobtrusive.parse(this.$newsletterForm);
          }
        },
        subscribe: function () {
          var n = this;
          n.$newsletterForm.on("submit", function (t) {
            t.preventDefault();
            // Check if form is valid
            if (!$(this).valid()) {
              return false;
            }
            if (1 !== $("span[generated=true]").length) {
              var btn = n.$newsletterBtn;
              var r = btn.data("controller-url");
              var i = $("#EmailAddress").val();
              var form = $(this);
              var token = form
                .find('input[name="__RequestVerificationToken"]')
                .val();
              if (i) {
                $.ajax({
                  url: r,
                  type: "POST",
                  data: {
                    EmailAddress: i,
                    __RequestVerificationToken: token,
                  },
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                  },
                  success: function (response) {
                    n.$newsletterWrapper.empty();
                    n.$newsletterWrapper.addClass(
                      "newsletter__container--success"
                    );
                    n.$newsletterWrapper.append(
                      '<span class="newsletter__success">' +
                        response.message +
                        "</span>"
                    );
                  },
                  error: function (xhr, status, error) {
                    console.error("Subscription error:", error);
                    n.$newsletterWrapper.append(
                      '<span class="newsletter__error">An error occurred. Please try again.</span>'
                    );
                  },
                });
              }
            }
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $downloadsWrapper: $(".downloads"),
        guidEmpty: "00000000-0000-0000-0000-000000000000",
        init: function () {
          this.filterByType();
          this.filterByYear();
          this.pagination();
        },
        filterByType: function () {
          var n = this;
          $("#Categories")
            .off("change")
            .on("change", function () {
              n.callAjax(1);
            });
        },
        filterByYear: function () {
          var n = this;
          $("#Years")
            .off("change")
            .on("change", function () {
              n.callAjax(1);
            });
        },
        pagination: function () {
          var n = this;
          n.$downloadsWrapper
            .off("click", ".pagination__link")
            .on("click", ".pagination__link", function () {
              var i = $(this),
                t;
              i.hasClass("pagination__link--disabled") ||
                ((t = i.data("page")),
                n.callAjax(t),
                setTimeout(function () {
                  n.$downloadsWrapper
                    .find(".pagination__link--active")
                    .removeClass("pagination__link--active");
                  n.$downloadsWrapper
                    .find("[pagination-number][data-page=" + t + "]")
                    .addClass("pagination__link--active");
                }, 50));
            });
        },
        callAjax: function (n) {
          var t = this,
            i = t.$downloadsWrapper.data("controller-url"),
            r = t.$downloadsWrapper.data("page-key");
          i &&
            $.get(
              i,
              {
                pageKey: r,
                year: (function () {
                  var n = $("#Years option:selected").val();
                  return (void 0 !== n && 0 !== n.length) || (n = 0), n;
                })(),
                typeKey: (function () {
                  var n = $("#Categories option:selected").val();
                  return (
                    (void 0 !== n && 0 !== n.length) || (n = t.guidEmpty), n
                  );
                })(),
                page: n,
              },
              function (n) {
                t.$downloadsWrapper.empty();
                t.$downloadsWrapper.append(n);
              },
              "html"
            );
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        searchOverlayInputField: $(".search-overlay__input"),
        searchOverlayFormWrapper: $(".js-search-wrapper"),
        searchPageFormWrapper: $(".search-page__form-wrapper"),
        searchPageInputField: $(".search__input"),
        overlaySearchList: $(".search-overlay__wildcard-list-items"),
        pageSearchList: $(".search__wildcard-list-items"),
        homeSearchList: $(".hero__wildcard-list-items"),
        homeInput: $(".hero__input"),
        throttlingTime: 500,
        init: function () {
          this.bindOverlaySearch();
          this.bindSearchPageSearch();
          this.bindHomePageSearch();
        },
        bindOverlaySearch: function () {
          this.handleInputChange(
            this.searchOverlayInputField,
            void 0,
            this.overlaySearchList
          );
        },
        bindSearchPageSearch: function () {
          this.handleInputChange(
            this.searchPageInputField,
            void 0,
            this.pageSearchList
          );
        },
        bindHomePageSearch: function () {
          this.handleInputChange(this.homeInput, void 0, this.homeSearchList);
        },
        handleInputChange: function (n, t, i) {
          var r = this,
            u = r.searchOverlayFormWrapper.data("controller-url");
          n.on("keyup", function () {
            clearTimeout(t);
            t = setTimeout(function () {
              var t = n.val();
              0 !== t.length ? r.callAjax(t, u, i) : i.html("");
            }, r.throttlingTime);
          });
        },
        callAjax: function (n, t, i) {
          $.get(
            t,
            {
              query: n,
            },
            function (n) {
              0 !== n.length ? (i.html(n), i.show()) : i.html("");
            }
          );
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        lists: document.querySelectorAll(".js-map-info-list"),
        classModifier: "map__info-list--columns",
        init: function () {
          this.countItems();
        },
        countItems: function () {
          var n = !0,
            r = !1,
            u = void 0,
            f,
            t,
            i;
          try {
            for (
              t = this.lists[Symbol.iterator]();
              !(n = (f = t.next()).done);
              n = !0
            )
              (i = f.value), i.children.length > 5 && this.addModifierToList(i);
          } catch (n) {
            r = !0;
            u = n;
          } finally {
            try {
              !n && t.return && t.return();
            } finally {
              if (r) throw u;
            }
          }
        },
        addModifierToList: function (n) {
          n.classList.add(this.classModifier);
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $authorWrapper: $(".js-author-wrapper"),
        $filters: $(".js-filters"),
        $clickable: $(".js-clickable"),
        init: function () {
          this.moveElement();
          this.contactCard();
          this.paginationScroll();
          this.newsletterMargin();
          this.wrapTable();
          this.scrollTop();
          this.searchMargin();
          this.filters();
          this.clickableBox();
          this.tableColspan();
          this.iframeheight();
        },
        moveElement: function () {
          if ($(window).width() < 768) {
            var t = $(".author__info"),
              i = $(".author__link"),
              n = this.$authorWrapper;
            t.appendTo(n);
            i.appendTo(n);
          }
        },
        contactCard: function () {
          $(window).width() < 768 &&
            $(".contact-card__img-wrapper").appendTo(".contact-card__author");
        },
        paginationScroll: function () {
          var u = $(".contact-card__container"),
            r = u.height(),
            n = $(".header").height(),
            t = $("html, body"),
            i = $(".search"),
            f = $(".video-gallery");
          $(document).on(
            "click",
            ".pagination__link:not(.pagination__link--disabled)",
            function () {
              function e(n, t, i, r, u) {
                n.animate(
                  {
                    scrollTop: t - i - r - u,
                  },
                  600
                );
              }
              var o, s, h, c, l, a;
              u.length
                ? i.length
                  ? ((o = $(this)),
                    e(
                      t,
                      o.closest(i).find(".search__item:first-of-type").offset()
                        .top,
                      n,
                      r,
                      -30
                    ))
                  : f.length
                  ? ((s = $(this)),
                    e(
                      t,
                      s.closest(".video-gallery__container").offset().top,
                      n,
                      r,
                      -10
                    ))
                  : ((h = $(this)),
                    e(
                      t,
                      h.closest(".pagination").parent().offset().top,
                      n,
                      r,
                      -30
                    ))
                : i.length
                ? ((c = $(this)),
                  e(
                    t,
                    c.closest(i).find(".search__item:first-of-type").offset()
                      .top,
                    n,
                    0,
                    10
                  ))
                : f.length
                ? ((l = $(this)),
                  e(
                    t,
                    l.closest(".video-gallery__container").offset().top,
                    n,
                    0,
                    30
                  ))
                : ((a = $(this)),
                  e(
                    t,
                    a.closest(".pagination").parent().offset().top,
                    n,
                    0,
                    10
                  ));
            }
          );
        },
        newsletterMargin: function () {
          var t = $(".newsletter"),
            n = $(".newsletter__container"),
            i = $(".full-image"),
            r = $(".related-content"),
            u = $(".error"),
            f = n.height() / 2 + parseInt(n.css("padding-top")) - 4;
          i.length || r.length || u.length || t.css("margin-top", f);
        },
        wrapTable: function () {
          $("table").wrap(
            '<div class="table-wrapper" style="overflow-x: auto;"></div>'
          );
        },
        scrollTop: function () {
          var t = $(".scroll-to-top"),
            i = $("html, body"),
            n = $(window);
          n.on("scroll", function () {
            var i = $(this).scrollTop(),
              t = $(".scroll-to-top");
            n.width() >= 768 && (i < 100 ? t.fadeOut() : t.fadeIn());
          });
          t.on("click", function () {
            i.animate(
              {
                scrollTop: 0,
              },
              1e3
            );
          });
        },
        searchMargin: function () {
          var n = $(".search__item"),
            t = $(".search__container");
          n.length || t.css("margin-bottom", "140px");
        },
        filters: function () {
          this.$filters.selectric();
        },
        clickableBox: function () {
          var n = this.$clickable;
          n.find("a").length
            ? n.on("click", function () {
                var n = $(this);
                window.location = n.find("a").attr("href");
              })
            : n.css("cursor", "default");
        },
        tableColspan: function () {
          $("td[colspan]").css("width", "auto");
          $("th[colspan]").css("width", "auto");
        },
        iframeheight: function () {
          if ($(window).width() < 768) {
            var n = $(".video-wrapper").data("mobile-height");
            $("iframe").height(n);
          }
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        init: function () {
          this.stickyCard();
          this.stickyHeader();
        },
        stickyHeader: function () {
          $(document).ready(function () {
            var t = $(window),
              n = $(".header"),
              r = n.offset().top,
              u = $(".cookies").length,
              f = $(".urgent").length,
              i;
            u ||
              f ||
              ((i = $("body")),
              n.addClass("header--sticky"),
              t.width() < 992
                ? i.css("padding-top", "70px")
                : i.css("padding-top", "134px"));
            t.on("scroll", function () {
              var u = t.scrollTop(),
                i = $("body"),
                f = n.scrollTop();
              t.width() < 992
                ? u + f >= r
                  ? (n.addClass("header--sticky"), i.css("padding-top", "70px"))
                  : (n.removeClass("header--sticky"), i.css("padding-top", "0"))
                : u + f >= r
                ? (n.addClass("header--sticky"), i.css("padding-top", "134px"))
                : (n.removeClass("header--sticky"), i.css("padding-top", "0"));
            });
          });
        },
        stickyCard: function () {
          $(document).ready(function () {
            var t = $(window),
              n = $(".contact-card__container"),
              f = $(".header"),
              i = $(".contact-card__wrapper"),
              r,
              u;
            n.length &&
              ((r = n.offset().top),
              (u = document.querySelectorAll(".contact-card--multi")),
              u.length
                ? u.forEach(function (n, u) {
                    if (0 === u) {
                      var e = n.querySelector(".contact-card__container"),
                        o = n.querySelector(".contact-card__wrapper");
                      t.on("scroll", function () {
                        var u = t.scrollTop(),
                          n = f.height(),
                          s = n;
                        u + n - parseInt(i.css("padding-top")) >= r
                          ? (e.classList.remove(
                              "contact-card__container--shadow"
                            ),
                            e.parentElement.classList.add(
                              "contact-card--sticky"
                            ),
                            (o.style.top = s + "px"))
                          : (e.classList.add("contact-card__container--shadow"),
                            e.parentElement.classList.remove(
                              "contact-card--sticky"
                            ),
                            (o.style.top = 0));
                      });
                    }
                  })
                : t.on("scroll", function () {
                    var e = t.scrollTop(),
                      u = f.height(),
                      o = u;
                    e + u - parseInt(i.css("padding-top")) >= r
                      ? (n.removeClass("contact-card__container--shadow"),
                        n.parent().addClass("contact-card--sticky"),
                        i.css("top", o))
                      : (n.addClass("contact-card__container--shadow"),
                        n.parent().removeClass("contact-card--sticky"),
                        i.css("top", 0));
                  }));
          });
        },
      };
      t.default = i;
    },
    function (n, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var u,
        r =
          (u = i(4)) && u.__esModule
            ? u
            : {
                default: u,
              },
        f = {
          $urgentClose: $(".js-urgent-close"),
          $cookiesClose: $(".js-cookies-close"),
          $headerBtn: $(".js-dropdown-btn"),
          $headerDropdown: $(".js-header-dropdown"),
          $navSubmenu: $(".js-submenu"),
          $navLink: $(".js-nav-link"),
          $searchOpen: $(".js-search-open"),
          $searchClose: $(".js-search-close"),
          navigation: $(".js-navigation"),
          navToggle: $(".js-nav-toggle"),
          init: function () {
            this.bindClickEvents();
            this.navigationFunction();
          },
          bindClickEvents: function () {
            function c() {
              var r = $(window),
                t = $(".header"),
                e = t.offset().top,
                u,
                i,
                f,
                s;
              ("none" === h.css("display") || "none" === o.css("display")) &&
                ((u = $("body")),
                t.addClass("header--sticky"),
                r.width() < 992
                  ? u.css("padding-top", "70px")
                  : n.width() >= 992 && n.width() <= 1500
                  ? u.css("padding-top", "154px")
                  : u.css("padding-top", "134px"));
              r.on("scroll", function () {
                var u = r.scrollTop(),
                  i = $("body"),
                  f = t.scrollTop();
                r.width() < 992
                  ? u + f >= e
                    ? (t.addClass("header--sticky"),
                      i.css("padding-top", "70px"))
                    : (t.removeClass("header--sticky"),
                      i.css("padding-top", "0"))
                  : n.width() >= 992 && n.width() <= 1500
                  ? u + f >= e
                    ? (t.addClass("header--sticky"),
                      i.css("padding-top", "154px"))
                    : (t.removeClass("header--sticky"),
                      i.css("padding-top", "0"))
                  : u + f >= e
                  ? (t.addClass("header--sticky"),
                    i.css("padding-top", "134px"))
                  : (t.removeClass("header--sticky"),
                    i.css("padding-top", "0"));
              });
              if (
                ((i = $(".contact-card__container")),
                (f = $(".contact-card__wrapper")),
                i.length)
              ) {
                s = i.offset().top;
                r.on("scroll", function () {
                  var u = r.scrollTop(),
                    n = t.height(),
                    e = n;
                  u + n - parseInt(f.css("padding-top")) >= s
                    ? (i.removeClass("contact-card__container--shadow"),
                      i.parent().addClass("contact-card--sticky"),
                      f.css("top", e))
                    : (i.addClass("contact-card__container--shadow"),
                      i.parent().removeClass("contact-card--sticky"),
                      f.css("top", 0));
                });
              }
            }
            var v = this.$urgentClose,
              o = $(".urgent"),
              s = this.$cookiesClose,
              h = $(".cookies"),
              y = s.data("accept-cookie-url"),
              u,
              f,
              n;
            v.on("click", function () {
              o.stop().slideUp(300);
              setTimeout(c, 300);
            });
            s.on("click", function () {
              $.post(y, {});
              h.stop().slideUp(300);
              setTimeout(c, 300);
            });
            u = this.$headerBtn;
            f = this.$headerDropdown;
            u.on("click", function () {
              $(this).toggleClass("header__btn--active");
              f.stop().slideToggle();
            });
            if (
              ((n = $(window)),
              n.width() >= 992 &&
                $(document).on("click", function (n) {
                  u.is(n.target) ||
                    f.is(n.target) ||
                    $(".js-header-dropdown *").is(n.target) ||
                    (u.removeClass("header__btn--active"), f.stop().slideUp());
                }),
              n.width() >= 992)
            ) {
              var l = this.$navLink,
                t = this.$navSubmenu,
                a = $(".nav__item"),
                i = $(".header"),
                p = $("html, body");
              l.on("click", function () {
                var u = $(this),
                  f,
                  e;
                u.hasClass("nav__link--active")
                  ? (u.removeClass("nav__link--active"),
                    u.siblings(t).stop().slideUp(),
                    n.width() >= 992 &&
                      (r.default.enableScroll(),
                      $(".header--sticky").removeAttr("style"),
                      n.height() <
                        $(".nav__link--active").siblings(t).height() +
                          i.height() &&
                        u.siblings(t).css({
                          position: "absolute",
                          top: "100%",
                          height: "0",
                        }),
                      n.width() <= 1500
                        ? $("body").css("padding-top", "154px")
                        : $("body").css("padding-top", "134px")))
                  : (u.addClass("nav__link--active"),
                    u
                      .closest(a)
                      .siblings()
                      .find(l)
                      .removeClass("nav__link--active"),
                    u.closest(a).siblings().find(t).slideUp(),
                    (f = $(".urgent").length),
                    (e = $(".cookies").length),
                    f && e
                      ? "none" === $(".urgent").css("display") &&
                        "none" === $(".cookies").css("display")
                        ? (u.siblings(t).stop().slideDown(),
                          n.width() >= 992
                            ? (r.default.disableScroll(),
                              setTimeout(function () {
                                n.height() <
                                  $(".nav__link--active").siblings(t).height() +
                                    i.height() &&
                                  (n.width() <= 1500
                                    ? u.siblings(t).css({
                                        position: "fixed",
                                        top: "154px",
                                        overflow: "auto",
                                        height: "calc(100% - 154px)",
                                      })
                                    : u.siblings(t).css({
                                        position: "fixed",
                                        top: "134px",
                                        overflow: "auto",
                                        height: "calc(100% - 134px)",
                                      }));
                              }, 500))
                            : ($("body").css("overflow", "auto"),
                              $(".header--sticky").removeAttr("style")))
                        : setTimeout(function () {
                            u.siblings(t).stop().slideDown();
                            $("body").css("margin-top", "154px");
                          }, 500)
                      : (u.siblings(t).stop().slideDown(),
                        n.width() >= 992
                          ? (r.default.disableScroll(),
                            setTimeout(function () {
                              n.height() <
                                $(".nav__link--active").siblings(t).height() +
                                  i.height() &&
                                (n.width() <= 1500
                                  ? u.siblings(t).css({
                                      position: "fixed",
                                      top: "154px",
                                      overflow: "auto",
                                      height: "calc(100% - 154px)",
                                    })
                                  : u.siblings(t).css({
                                      position: "fixed",
                                      top: "134px",
                                      overflow: "auto",
                                      height: "calc(100% - 134px)",
                                    }));
                            }, 500))
                          : ($("body").css("overflow", "auto"),
                            $(".header--sticky").removeAttr("style"))),
                    p.animate(
                      {
                        scrollTop: i.offset().top,
                      },
                      500,
                      function () {
                        n.width() >= 992
                          ? (r.default.disableScroll(),
                            setTimeout(function () {
                              n.height() <
                                $(".nav__link--active").siblings(t).height() +
                                  i.height() &&
                                (n.width() <= 1500
                                  ? u.siblings(t).css({
                                      position: "fixed",
                                      top: "154px",
                                      overflow: "auto",
                                      height: "calc(100% - 154px)",
                                    })
                                  : u.siblings(t).css({
                                      position: "fixed",
                                      top: "134px",
                                      overflow: "auto",
                                      height: "calc(100% - 134px)",
                                    }));
                            }, 500))
                          : ($("body").css("overflow", "auto"),
                            $(".header--sticky").removeAttr("style"));
                      }
                    ));
              });
            }
            var w = this.$searchOpen,
              b = this.$searchClose,
              e = $(".search-overlay"),
              k = this.navToggle,
              d = $(".nav__list");
            w.on("click", function () {
              e.fadeIn(300);
              setTimeout(function () {
                r.default.disableScroll();
              }, 300);
              e.find("input").focus();
              n.width() < 992 &&
                (k.removeClass("nav__toggle--open"), d.stop().slideUp(200));
              n.width() > 1024 &&
                $(document).keydown(function (n) {
                  27 === n.keyCode &&
                    (e.fadeOut(300), r.default.enableScroll());
                });
            });
            b.on("click", function () {
              e.fadeOut(300);
              $(".search-overlay__input").val("");
              $(".search-overlay__wildcard-list-items").html("");
              r.default.enableScroll();
            });
          },
          navigationFunction: function () {
            var i = this.$navSubmenu,
              u = $(".nav__link"),
              f = this.navigation,
              e = $(window),
              v = $(document),
              t,
              o,
              s,
              h;
            if (
              (($(".nav__sub-block-title").length ||
                ($(this).hide(), $(this).parent().hide()),
              e.width() < 992) &&
                ($(".nav__submenu-title").parent().hide(),
                (t = this.navigation.find(".nav__item > .btn")),
                t.addClass("nav__link js-nav-link"),
                t.removeClass("btn btn--grey"),
                (o = f.find(".nav__link")),
                (s = f.find(".nav__submenu-item--back")),
                o.on("click", function () {
                  var n = $(this),
                    i = n.parents(".nav"),
                    t = $(".nav__submenu"),
                    r = t.height();
                  i.find(".nav__list").addClass("nav__list--open");
                  n.closest(".nav__item")
                    .find(".nav__submenu")
                    .css("display", "block");
                  n.closest(".nav__item")
                    .siblings()
                    .find(".nav__submenu")
                    .css("display", "none");
                  n.closest(".nav__item").siblings().hide();
                  a < r + l &&
                    t.css({
                      height: "100%",
                      overflow: "auto",
                    });
                }),
                s.on("click", function () {
                  var n = $(this);
                  n.parents(".nav")
                    .find(".nav__list")
                    .removeClass("nav__list--open");
                  n.closest(".nav__submenu").css("display", "none");
                  n.closest(".nav__item").siblings().show();
                })),
              e.width() > 991)
            ) {
              h = $("body");
              v.on("click", function (n) {
                $("#downloadForm").length ||
                  u.is(n.target) ||
                  i.is(n.target) ||
                  $(".nav__submenu *").is(n.target) ||
                  $(".search-overlay").is(n.target) ||
                  $(".search-overlay *").is(n.target) ||
                  (i.stop().slideUp(400),
                  u.removeClass("nav__link--active"),
                  h.removeClass("scroll-disabled"),
                  (r.default.isScrollDisabled = !1));
              });
            }
            var y = this.navToggle,
              n = $(".nav__list"),
              p = $("html, body"),
              c = $(".header"),
              l = c.height(),
              a = $(window).height(),
              w = n.height();
            y.on("click", function () {
              function i() {
                $(".nav__item").show();
                n.stop().slideDown(200);
                t.siblings(".nav__list").removeClass("nav__list--open");
                t.siblings(".nav__list").find(".nav__submenu").hide();
                r.default.disableScroll();
              }
              var t = $(this),
                u,
                f;
              a < w + l &&
                n.css({
                  height: "calc(100% - 69px)",
                  overflow: "auto",
                });
              u = $(".urgent").length;
              f = $(".cookies").length;
              t.hasClass("nav__toggle--open")
                ? (t.removeClass("nav__toggle--open"),
                  n.stop().slideUp(200),
                  r.default.enableScroll())
                : (t.addClass("nav__toggle--open"),
                  u && f ? setTimeout(i, 500) : i(),
                  p.animate(
                    {
                      scrollTop: c.offset().top,
                    },
                    500
                  ));
            });
          },
        };
      t.default = f;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        accordion: $(".js-accordion"),
        init: function () {
          this.accordions();
        },
        accordions: function () {
          function t(n, t, i, r, u) {
            n.animate(
              {
                scrollTop: t - i - r - u,
              },
              400
            );
          }
          var i = this.accordion,
            r = this.accordion.find(".accordion__button"),
            n = this.accordion.find(".accordion__content");
          i.each(function () {
            $(this)
              .find(r)
              .on("click", function () {
                var u = $(this),
                  o = $(".contact-card__container"),
                  f = $(".header").height(),
                  s = o.height(),
                  e = $("html, body");
                u
                  .find(".accordion__button-circle")
                  .hasClass("accordion__button-circle--opened")
                  ? (u
                      .find(".accordion__button-circle")
                      .removeClass("accordion__button-circle--opened"),
                    u.css("color", "#1a191b"),
                    u
                      .next(n)
                      .stop()
                      .slideUp(400, function () {
                        $(this).attr("aria-hidden", "true");
                        o.length
                          ? t(e, u.offset().top, f, s, 10)
                          : t(e, u.offset().top, f, 0, 10);
                      }),
                    u.next(n).find("iframe").vimeo("pause"))
                  : (u
                      .parent()
                      .siblings()
                      .find(".accordion__button-circle--opened")
                      .removeClass("accordion__button-circle--opened"),
                    u.css("color", "#2a61ff"),
                    u.parent().siblings().find(r).css("color", "#1a191b"),
                    u
                      .parent()
                      .siblings()
                      .find(n)
                      .stop()
                      .slideUp(400, function () {
                        $(this).attr("aria-hidden", "true");
                      }),
                    u
                      .closest(i)
                      .siblings()
                      .find(".accordion__button-circle--opened")
                      .removeClass("accordion__button-circle--opened"),
                    u
                      .closest(i)
                      .siblings()
                      .find(n)
                      .stop()
                      .slideUp(400, function () {
                        $(this).attr("aria-hidden", "true");
                      }),
                    u
                      .find(".accordion__button-circle")
                      .addClass("accordion__button-circle--opened"),
                    u
                      .next(n)
                      .stop()
                      .slideDown(400, function () {
                        $(this).removeAttr("aria-hidden");
                        o.length
                          ? t(e, u.offset().top, f, s, 10)
                          : t(e, u.offset().top, f, 0, 10);
                      }),
                    u.parent().siblings().find("iframe").vimeo("pause"),
                    setTimeout(function () {
                      u.parent().find(".js-slider").length &&
                        u.parent().find(".js-slider").slick("setPosition");
                    }, 10));
              });
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        $popupBtn: $(".js-popup"),
        $popupContainer: $(".popup"),
        init: function () {
          this.showPopup();
          this.hidePopup();
        },
        showPopup: function () {
          this.$popupBtn.on("click", function (n) {
            var i, t, r;
            n.preventDefault();
            n.stopPropagation();
            i = $(this).find("a").data("anchor");
            t = $(i).closest("p");
            void 0 !== $(t).offset() &&
              ((r =
                '<div class="popup"><div class="popup-text">' +
                $(t).text() +
                "</div></div>"),
              $(this).find(".popup").length > 0
                ? $(".js-popup").find(".popup").remove()
                : $(this).append(r));
          });
        },
        hidePopup: function () {
          $("body").on("click", function () {
            $(".js-popup").find(".popup").remove();
          });
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        map: document.querySelector(".js-map"),
        points: document.querySelectorAll(".js-map-point"),
        infoConts: document.querySelectorAll(".js-map-info-cont"),
        closeButtons: document.querySelectorAll(".js-map-info-close"),
        list: document.querySelector(".js-map-list"),
        listControls: document.querySelectorAll(".js-map-control"),
        nameListItems: document.querySelectorAll(".js-map-list-item"),
        mapWrap: document.querySelector(".js-map-wrap"),
        tabletView: !1,
        tabletBreakpoint: 992,
        isInfoContOpen: !1,
        classInfoCont: ".js-map-info-cont",
        classInfoContActive: "map__info-cont--active",
        classInfoCloseBtn: ".js-map-info-close",
        classPointFocus: "map__point--focus",
        classPointHide: "map__point--hide",
        classMapCont: ".js-map-cont",
        classMapContent: ".js-map-content",
        classMapWrap: ".js-map-wrap",
        classListItem: "js-map-list-item",
        classListControl: "js-map-control",
        init: function () {
          this.map &&
            (this.settingStyles(),
            this.bindClickEvent(),
            this.bindHoverEvent(),
            this.tabletViewChange(),
            this.windowListener(),
            this.mapListener());
        },
        settingStyles: function () {
          var t = !0,
            r = !1,
            u = void 0,
            f,
            i;
          try {
            for (
              i = this.points[Symbol.iterator]();
              !(t = (f = i.next()).done);
              t = !0
            ) {
              var n = f.value,
                e = n.getAttribute("data-y-align"),
                o = n.getAttribute("data-x-align");
              if (void 0 === e || void 0 === o)
                return void (n.style.display = "none");
              n.style.top = e + "%";
              n.style.left = o + "%";
            }
          } catch (t) {
            r = !0;
            u = t;
          } finally {
            try {
              !t && i.return && i.return();
            } finally {
              if (r) throw u;
            }
          }
        },
        bindClickEvent: function () {
          var n = this,
            f = !0,
            h = !1,
            c = void 0,
            l,
            t,
            y,
            i,
            b,
            r,
            g,
            u;
          try {
            for (
              t = this.points[Symbol.iterator]();
              !(f = (l = t.next()).done);
              f = !0
            )
              l.value.addEventListener("click", function (t) {
                n.openInfoCont(t);
              });
          } catch (n) {
            h = !0;
            c = n;
          } finally {
            try {
              !f && t.return && t.return();
            } finally {
              if (h) throw c;
            }
          }
          var e = !0,
            a = !1,
            v = void 0;
          try {
            for (
              i = this.closeButtons[Symbol.iterator]();
              !(e = (y = i.next()).done);
              e = !0
            )
              y.value.addEventListener("click", function (t) {
                n.closeInfoCont(t);
              });
          } catch (n) {
            a = !0;
            v = n;
          } finally {
            try {
              !e && i.return && i.return();
            } finally {
              if (a) throw v;
            }
          }
          var nt = function (t) {
              t.addEventListener("click", function (i) {
                var r = i.target;
                i.target !== t &&
                  (r = i.target.closest("." + n.classListControl));
                n.scrollList(r);
              });
            },
            o = !0,
            p = !1,
            w = void 0;
          try {
            for (
              r = this.listControls[Symbol.iterator]();
              !(o = (b = r.next()).done);
              o = !0
            )
              nt(b.value);
          } catch (n) {
            p = !0;
            w = n;
          } finally {
            try {
              !o && r.return && r.return();
            } finally {
              if (p) throw w;
            }
          }
          var tt = function (t) {
              t.addEventListener(
                "click",
                function (i) {
                  var r = i.target;
                  i.target !== t &&
                    (r = i.target.closest("." + n.classListItem));
                  n.openInfoCont(r);
                },
                !1
              );
            },
            s = !0,
            k = !1,
            d = void 0;
          try {
            for (
              u = this.nameListItems[Symbol.iterator]();
              !(s = (g = u.next()).done);
              s = !0
            )
              tt(g.value);
          } catch (n) {
            k = !0;
            d = n;
          } finally {
            try {
              !s && u.return && u.return();
            } finally {
              if (k) throw d;
            }
          }
        },
        bindHoverEvent: function () {
          var t = this,
            i = !0,
            u = !1,
            f = void 0,
            e,
            n,
            r;
          try {
            for (
              n = this.nameListItems[Symbol.iterator]();
              !(i = (e = n.next()).done);
              i = !0
            )
              (r = e.value),
                r.addEventListener("mouseenter", function (n) {
                  t.hoverPointName(n);
                }),
                r.addEventListener("mouseleave", function () {
                  t.mouseLeaveItems();
                });
          } catch (t) {
            u = !0;
            f = t;
          } finally {
            try {
              !i && n.return && n.return();
            } finally {
              if (u) throw f;
            }
          }
        },
        windowListener: function () {
          var n = this;
          window.addEventListener("resize", function () {
            !1 === n.tabletView && window.innerWidth < n.tabletBreakpoint
              ? n.tabletViewChange()
              : !0 === n.tabletView &&
                window.innerWidth > n.tabletBreakpoint - 1 &&
                n.tabletViewChange();
          });
        },
        mapListener: function () {
          var n = this;
          this.map.addEventListener("click", function (t) {
            n.handleBodyClick(t);
          });
        },
        handleBodyClick: function (n) {
          !this.isInfoContOpen ||
            void 0 === n ||
            n.target.getAttribute("data-id") ||
            n.target.closest("." + this.classListItem) ||
            n.target.closest(".js-map-info-cont") ||
            this.closeInfoCont(!1);
        },
        openInfoCont: function (n) {
          var e, h, t, i, a, r;
          e =
            !0 === n.isTrusted
              ? n.target.getAttribute("data-id")
              : n.getAttribute("data-id");
          var u = !0,
            o = !1,
            s = void 0;
          try {
            for (
              t = this.infoConts[Symbol.iterator]();
              !(u = (h = t.next()).done);
              u = !0
            )
              (i = h.value),
                i.getAttribute("data-id") === e
                  ? i.classList.add(this.classInfoContActive)
                  : i.classList.remove(this.classInfoContActive);
          } catch (n) {
            o = !0;
            s = n;
          } finally {
            try {
              !u && t.return && t.return();
            } finally {
              if (o) throw s;
            }
          }
          this.isInfoContOpen = !0;
          var f = !0,
            c = !1,
            l = void 0;
          try {
            for (
              r = this.points[Symbol.iterator]();
              !(f = (a = r.next()).done);
              f = !0
            )
              a.value.classList.add(this.classPointHide);
          } catch (n) {
            c = !0;
            l = n;
          } finally {
            try {
              !f && r.return && r.return();
            } finally {
              if (c) throw l;
            }
          }
        },
        closeInfoCont: function (n) {
          var h, t, a, i, p, r;
          if (n) {
            n.target
              .closest(this.classInfoCont)
              .classList.remove(this.classInfoContActive);
            this.isInfoContOpen = !1;
            var u = !0,
              o = !1,
              s = void 0;
            try {
              for (
                t = this.points[Symbol.iterator]();
                !(u = (h = t.next()).done);
                u = !0
              )
                h.value.classList.remove(this.classPointHide);
            } catch (n) {
              o = !0;
              s = n;
            } finally {
              try {
                !u && t.return && t.return();
              } finally {
                if (o) throw s;
              }
            }
          } else {
            var f = !0,
              c = !1,
              l = void 0;
            try {
              for (
                i = this.infoConts[Symbol.iterator]();
                !(f = (a = i.next()).done);
                f = !0
              )
                a.value.classList.remove(this.classInfoContActive);
            } catch (n) {
              c = !0;
              l = n;
            } finally {
              try {
                !f && i.return && i.return();
              } finally {
                if (c) throw l;
              }
            }
            this.isInfoContOpen = !1;
            var e = !0,
              v = !1,
              y = void 0;
            try {
              for (
                r = this.points[Symbol.iterator]();
                !(e = (p = r.next()).done);
                e = !0
              )
                p.value.classList.remove(this.classPointHide);
            } catch (n) {
              v = !0;
              y = n;
            } finally {
              try {
                !e && r.return && r.return();
              } finally {
                if (v) throw y;
              }
            }
          }
        },
        hoverPointName: function (n) {
          var o = n.target.getAttribute("data-id"),
            r = !0,
            u = !1,
            f = void 0,
            e,
            t,
            i;
          try {
            for (
              t = this.points[Symbol.iterator]();
              !(r = (e = t.next()).done);
              r = !0
            )
              (i = e.value),
                i.getAttribute("data-id") === o
                  ? i.classList.add(this.classPointFocus)
                  : i.classList.add(this.classPointHide);
          } catch (n) {
            u = !0;
            f = n;
          } finally {
            try {
              !r && t.return && t.return();
            } finally {
              if (u) throw f;
            }
          }
        },
        mouseLeaveItems: function () {
          var o, t, c, i, u;
          if (this.isInfoContOpen) {
            var n = !0,
              f = !1,
              e = void 0;
            try {
              for (
                t = this.points[Symbol.iterator]();
                !(n = (o = t.next()).done);
                n = !0
              )
                o.value.classList.remove(this.classPointFocus);
            } catch (n) {
              f = !0;
              e = n;
            } finally {
              try {
                !n && t.return && t.return();
              } finally {
                if (f) throw e;
              }
            }
          } else {
            var r = !0,
              s = !1,
              h = void 0;
            try {
              for (
                i = this.points[Symbol.iterator]();
                !(r = (c = i.next()).done);
                r = !0
              )
                (u = c.value),
                  u.classList.remove(this.classPointFocus),
                  u.classList.remove(this.classPointHide);
            } catch (n) {
              s = !0;
              h = n;
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (s) throw h;
              }
            }
          }
        },
        scrollList: function (n) {
          var t = n.getAttribute("data-direction");
          if (window.innerWidth < this.tabletBreakpoint)
            if ("up" === t) this.list.scrollLeft = this.list.scrollLeft + 346;
            else {
              if ("down" !== t) return;
              this.list.scrollLeft = this.list.scrollLeft - 346;
            }
          else if ("up" === t) this.list.scrollTop = this.list.scrollTop - 305;
          else {
            if ("down" !== t) return;
            this.list.scrollTop = this.list.scrollTop + 305;
          }
        },
        tabletViewChange: function () {
          window.innerWidth < this.tabletBreakpoint
            ? ($(this.classMapCont).detach().appendTo(this.classMapContent),
              (this.tabletView = !0))
            : ($(this.classMapCont).detach().appendTo(this.classMapWrap),
              (this.tabletView = !1));
        },
      };
      t.default = i;
    },
    function (n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var i = {
        iframeWrapper: $(".js-iframe-wrapper"),
        iframeWrapperClass: ".js-iframe-wrapper",
        iframeClass: ".js-video-iframe",
        iframeExpandClass: "js-iframe-expand",
        popupClass: ".js-iframe-popup",
        popupIframeClass: ".js-popup-iframe",
        playBtnClass: ".js-iframe-play",
        closeBtnClass: ".js-popup-close",
        popupShowClass: "video-wrapper__popup--show",
        windowWidth: $(window).width(),
        init: function () {
          this.iframeWrapper.length &&
            (this.handleIframes(),
            this.addPlayBtnsClickEvent(),
            this.addCloseBtnsClickEvent());
        },
        handleIframes: function () {
          var n = this;
          this.iframeWrapper.each(function (t, i) {
            var r = $(i),
              u = r.find(n.iframeClass);
            r.hasClass(n.iframeExpandClass) && n.setIframeFullWidth(u);
            n.createIntersectionObserver(u);
          });
        },
        addPlayBtnsClickEvent: function () {
          var n = this;
          $(document).on("click", this.playBtnClass, function (t) {
            var r = $(t.currentTarget),
              i = n.findElements(r),
              u = i.$popupIframe;
            i.$popup.addClass(n.popupShowClass);
            n.startAutoplay(u);
          });
        },
        addCloseBtnsClickEvent: function () {
          var n = this;
          $(document).on("click", this.closeBtnClass, function (t) {
            var r = $(t.currentTarget),
              i = n.findElements(r),
              u = i.$popupIframe,
              f = i.$popup;
            n.stopAutoplay(u);
            f.removeClass(n.popupShowClass);
          });
        },
        findElements: function (n) {
          var t = n.closest(this.iframeWrapperClass),
            r = t.find(this.iframeClass),
            i = t.find(this.popupClass);
          return {
            $iframe: r,
            $popupIframe: i.find(this.popupIframeClass),
            $popup: i,
          };
        },
        startAutoplay: function (n) {
          var t = n.attr("src") + "&autoplay=1&muted=1&autopause=0";
          n.attr("src", t);
        },
        stopAutoplay: function (n) {
          var t = n
            .attr("src")
            .replace(/(&?autoplay=1|&?muted=1|&?autopause=0)/g, "");
          n.attr("src", t);
        },
        setIframeFullWidth: function (n) {
          var t = n[0].getBoundingClientRect().left;
          n.css({
            width: this.windowWidth + "px",
            "margin-left": "-" + Math.ceil(t) + "px",
            height: (9 * this.windowWidth) / 16 + "px",
          });
        },
        createIntersectionObserver: function (n) {
          var i = this,
            t = new IntersectionObserver(
              function (r) {
                r.forEach(function (r) {
                  r.isIntersecting && (i.startAutoplay(n), t.unobserve(n[0]));
                });
              },
              {
                root: null,
                threshold: 0.7,
              }
            );
          t.observe(n[0]);
        },
      };
      t.default = i;
    },
  ]);
