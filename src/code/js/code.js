"use strict"

var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (e) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof i ? new i(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function e(n, t) {
                        var r, i;
                        switch (t = t || {}, a.util.type(n)) {
                            case "Object":
                                if (i = a.util.objId(n), t[i]) return t[i];
                                for (var l in r = {}, t[i] = r, n) n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                return r;
                            case "Array":
                                return i = a.util.objId(n), t[i] ? t[i] : (r = [], t[i] = r, n.forEach((function (n, a) {
                                    r[a] = e(n, t)
                                })), r);
                            default:
                                return n
                        }
                    },
                    getLanguage: function (e) {
                        for (; e;) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement
                        }
                        return "none"
                    },
                    setLanguage: function (e, t) {
                        e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t)
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                            if (e) {
                                var n = document.getElementsByTagName("script");
                                for (var t in n)
                                    if (n[t].src == e) return n[t]
                            }
                            return null
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = "no-" + n; e;) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!t
                    }
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function (e, n) {
                        var t = a.util.clone(a.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t
                    },
                    insertBefore: function (e, n, t, r) {
                        var i = (r = r || a.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == n)
                                    for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
                                t.hasOwnProperty(o) || (l[o] = i[o])
                            } var u = r[e];
                        return r[e] = l, a.languages.DFS(a.languages, (function (n, t) {
                            t === u && n != e && (this[n] = l)
                        })), l
                    },
                    DFS: function e(n, t, r, i) {
                        i = i || {};
                        var l = a.util.objId;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                t.call(n, o, n[o], r || o);
                                var s = n[o],
                                    u = a.util.type(s);
                                "Object" !== u || i[l(s)] ? "Array" !== u || i[l(s)] || (i[l(s)] = !0, e(s, t, o, i)) : (i[l(s)] = !0, e(s, t, null, i))
                            }
                    }
                },
                plugins: {},
                highlightAll: function (e, n) {
                    a.highlightAllUnder(document, e, n)
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);
                    for (var i, l = 0; i = r.elements[l++];) a.highlightElement(i, !0 === n, r.callback)
                },
                highlightElement: function (n, t, r) {
                    var i = a.util.getLanguage(n),
                        l = a.languages[i];
                    a.util.setLanguage(n, i);
                    var o = n.parentElement;
                    o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
                    var s = {
                        element: n,
                        language: i,
                        grammar: l,
                        code: n.textContent
                    };

                    function u(e) {
                        s.highlightedCode = e, a.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a.hooks.run("after-highlight", s), a.hooks.run("complete", s), r && r.call(s.element)
                    }
                    if (a.hooks.run("before-sanity-check", s), (o = s.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !s.code) return a.hooks.run("complete", s), void(r && r.call(s.element));
                    if (a.hooks.run("before-highlight", s), s.grammar)
                        if (t && e.Worker) {
                            var c = new Worker(a.filename);
                            c.onmessage = function (e) {
                                u(e.data)
                            }, c.postMessage(JSON.stringify({
                                language: s.language,
                                code: s.code,
                                immediateClose: !0
                            }))
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code))
                },
                highlight: function (e, n, t) {
                    var r = {
                        code: e,
                        grammar: n,
                        language: t
                    };
                    if (a.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
                    return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), i.stringify(a.util.encode(r.tokens), r.language)
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest
                    }
                    var a = new s;
                    return u(a, a.head, e), o(e, a, n, a.head, 0),
                        function (e) {
                            for (var n = [], t = e.head.next; t !== e.tail;) n.push(t.value), t = t.next;
                            return n
                        }(a)
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = a.hooks.all;
                        t[e] = t[e] || [], t[e].push(n)
                    },
                    run: function (e, n) {
                        var t = a.hooks.all[e];
                        if (t && t.length)
                            for (var r, i = 0; r = t[i++];) r(n)
                    }
                },
                Token: i
            };

        function i(e, n, t, r) {
            this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length
        }

        function l(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                a.index += i, a[0] = a[0].slice(i)
            }
            return a
        }

        function o(e, n, t, r, s, g) {
            for (var f in t)
                if (t.hasOwnProperty(f) && t[f]) {
                    var h = t[f];
                    h = Array.isArray(h) ? h : [h];
                    for (var d = 0; d < h.length; ++d) {
                        if (g && g.cause == f + "," + d) return;
                        var v = h[d],
                            p = v.inside,
                            m = !!v.lookbehind,
                            y = !!v.greedy,
                            k = v.alias;
                        if (y && !v.pattern.global) {
                            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                            v.pattern = RegExp(v.pattern.source, x + "g")
                        }
                        for (var b = v.pattern || v, w = r.next, A = s; w !== n.tail && !(g && A >= g.reach); A += w.value.length, w = w.next) {
                            var E = w.value;
                            if (n.length > e.length) return;
                            if (!(E instanceof i)) {
                                var P, L = 1;
                                if (y) {
                                    if (!(P = l(b, A, e, m)) || P.index >= e.length) break;
                                    var S = P.index,
                                        O = P.index + P[0].length,
                                        j = A;
                                    for (j += w.value.length; S >= j;) j += (w = w.next).value.length;
                                    if (A = j -= w.value.length, w.value instanceof i) continue;
                                    for (var C = w; C !== n.tail && (j < O || "string" == typeof C.value); C = C.next) L++, j += C.value.length;
                                    L--, E = e.slice(A, j), P.index -= A
                                } else if (!(P = l(b, 0, E, m))) continue;
                                S = P.index;
                                var N = P[0],
                                    _ = E.slice(0, S),
                                    M = E.slice(S + N.length),
                                    W = A + E.length;
                                g && W > g.reach && (g.reach = W);
                                var z = w.prev;
                                if (_ && (z = u(n, z, _), A += _.length), c(n, z, L), w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N)), M && u(n, w, M), L > 1) {
                                    var I = {
                                        cause: f + "," + d,
                                        reach: W
                                    };
                                    o(e, n, t, w.prev, A, I), g && I.reach > g.reach && (g.reach = I.reach)
                                }
                            }
                        }
                    }
                }
        }

        function s() {
            var e = {
                    value: null,
                    prev: null,
                    next: null
                },
                n = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = n, this.head = e, this.tail = n, this.length = 0
        }

        function u(e, n, t) {
            var r = n.next,
                a = {
                    value: t,
                    prev: n,
                    next: r
                };
            return n.next = a, r.prev = a, e.length++, a
        }

        function c(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            n.next = r, r.prev = n, e.length -= a
        }
        if (e.Prism = a, i.stringify = function e(n, t) {
                if ("string" == typeof n) return n;
                if (Array.isArray(n)) {
                    var r = "";
                    return n.forEach((function (n) {
                        r += e(n, t)
                    })), r
                }
                var i = {
                        type: n.type,
                        content: e(n.content, t),
                        tag: "span",
                        classes: ["token", n.type],
                        attributes: {},
                        language: t
                    },
                    l = n.alias;
                l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)), a.hooks.run("wrap", i);
                var o = "";
                for (var s in i.attributes) o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"';
                return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">"
            }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", (function (n) {
            var t = JSON.parse(n.data),
                r = t.language,
                i = t.code,
                l = t.immediateClose;
            e.postMessage(a.highlight(i, a.languages[r], r)), l && e.close()
        }), !1), a) : a;
        var g = a.util.currentScript();

        function f() {
            a.manual || a.highlightAll()
        }
        if (g && (a.filename = g.src, g.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
            var h = document.readyState;
            "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16)
        }
        return a
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        greedy: !0
    },
    "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: !0
    },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: {
            punctuation: /\./
        }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|buffer|callable|chr|cmp|coerce|compile|delattr|dir|divmod|eval|execfile|file|format|getattr|globals|hasattr|hash|help|hex|id|input|intern|isinstance|issubclass|iter|len|locals|long|max|min|next|oct|open|ord|pow|raw_input|reduce|reload|repr|round|setattr|sorted|sum|unichr|unicode|vars|xrange)\b/,
    builtin_yellow: /\b(self|bool|bytearray|bytes|classmethod|complex|dict|enumerate|filter|float|frozenset|int|list|map|memoryview|object|property|range|reversed|set|slice|staticmethod|str|super|tuple|type|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    methods: /(\.[A-z])\w+/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
! function () {
    if ("undefined" != typeof Prism) {
        var n, s, a = "";
        Prism.plugins.customClass = {
            add: function (s) {
                n = s
            },
            map: function (n) {
                s = "function" == typeof n ? n : function (s) {
                    return n[s] || s
                }
            },
            prefix: function (n) {
                a = n || ""
            },
            apply: t
        }, Prism.hooks.add("wrap", (function (e) {
            if (n) {
                var u = n({
                    content: e.content,
                    type: e.type,
                    language: e.language
                });
                Array.isArray(u) ? e.classes.push.apply(e.classes, u) : u && e.classes.push(u)
            }(s || a) && (e.classes = e.classes.map((function (n) {
                return t(n, e.language)
            })))
        }))
    }

    function t(n, t) {
        return a + (s ? s(n, t) : n)
    }
}();
"undefined" != typeof Prism && Prism.hooks.add("wrap", (function (e) {
    "keyword" === e.type && e.classes.push("keyword-" + e.content)
}));
! function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = {
                "(": ")",
                "[": "]",
                "{": "}"
            },
            t = {
                "(": "brace-round",
                "[": "brace-square",
                "{": "brace-curly"
            },
            n = {
                "${": "{"
            },
            r = 0,
            c = /^(pair-\d+-)(close|open)$/;
        Prism.hooks.add("complete", (function (c) {
            var i = c.element,
                d = i.parentElement;
            if (d && "PRE" == d.tagName) {
                var u = [];
                if (Prism.util.isActive(i, "match-braces") && u.push("(", "[", "{"), 0 != u.length) {
                    d.__listenerAdded || (d.addEventListener("mousedown", (function () {
                        var e = d.querySelector("code"),
                            t = s("brace-selected");
                        Array.prototype.slice.call(e.querySelectorAll("." + t)).forEach((function (e) {
                            e.classList.remove(t)
                        }))
                    })), Object.defineProperty(d, "__listenerAdded", {
                        value: !0
                    }));
                    var f = Array.prototype.slice.call(i.querySelectorAll("span." + s("token") + "." + s("punctuation"))),
                        h = [];
                    u.forEach((function (c) {
                        for (var i = e[c], d = s(t[c]), u = [], p = [], v = 0; v < f.length; v++) {
                            var m = f[v];
                            if (0 == m.childElementCount) {
                                var b = m.textContent;
                                (b = n[b] || b) === c ? (h.push({
                                    index: v,
                                    open: !0,
                                    element: m
                                }), m.classList.add(d), m.classList.add(s("brace-open")), p.push(v)) : b === i && (h.push({
                                    index: v,
                                    open: !1,
                                    element: m
                                }), m.classList.add(d), m.classList.add(s("brace-close")), p.length && u.push([v, p.pop()]))
                            }
                        }
                        u.forEach((function (e) {
                            var t = "pair-" + r++ + "-",
                                n = f[e[0]],
                                c = f[e[1]];
                            n.id = t + "open", c.id = t + "close", [n, c].forEach((function (e) {
                                e.addEventListener("mouseenter", a), e.addEventListener("mouseleave", o), e.addEventListener("click", l)
                            }))
                        }))
                    }));
                    var p = 0;
                    h.sort((function (e, t) {
                        return e.index - t.index
                    })), h.forEach((function (e) {
                        e.open ? (e.element.classList.add(s("brace-level-" + (p % 12 + 1))), p++) : (p = Math.max(0, p - 1), e.element.classList.add(s("brace-level-" + (p % 12 + 1))))
                    }))
                }
            }
        }))
    }

    function s(e) {
        var t = Prism.plugins.customClass;
        return t ? t.apply(e, "none") : e
    }

    function i(e) {
        var t = c.exec(e.id);
        return document.querySelector("#" + t[1] + ("open" == t[2] ? "close" : "open"))
    }

    function a() {
        Prism.util.isActive(this, "brace-hover", !0) && [this, i(this)].forEach((function (e) {
            e.classList.add(s("brace-hover"))
        }))
    }

    function o() {
        [this, i(this)].forEach((function (e) {
            e.classList.remove(s("brace-hover"))
        }))
    }

    function l() {
        Prism.util.isActive(this, "brace-select", !0) && [this, i(this)].forEach((function (e) {
            e.classList.add(s("brace-selected"))
        }))
    }
}();
