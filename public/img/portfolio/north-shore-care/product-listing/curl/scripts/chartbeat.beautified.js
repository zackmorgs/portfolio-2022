(function() {
    var g = void 0, h = true, i = null, k = false, l, m = this;
    function aa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.S = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
    }
    var ba = {
        scroll: 5e3,
        keydown: 5e3,
        mousemove: 5e3,
        resize: 5e3,
        mousedown: 5e3,
        focus: 5e3,
        pageload: 5e3
    }, ca = {
        scroll: 2e4,
        keydown: 5e3,
        mousemove: 5e3,
        resize: 5e3,
        mousedown: 5e3,
        focus: 5e3,
        pageload: 5e3
    };
    function ea() {
        for (var a = "", b = 0; b < 16; b++) a += Math.random();
        return a;
    }
    function fa(a, b) {
        var c = "", d = ga(encodeURIComponent(a));
        d.splice(b || 5, d.length);
        o(d, function(a) {
            if (a == 0) a = "A"; else {
                a >>>= 0;
                for (var b = "", d; a > 0; ) d = a % 64, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d) + b, 
                a >>>= 6;
                a = b;
            }
            c += a;
        });
        return c;
    }
    function ga(a) {
        a += String.fromCharCode(128);
        for (var b = [ 1518500249, 1859775393, 2400959708, 3395469782 ], c = 1732584193, d = 4023233417, e = 2562383102, f = 271733878, p = 3285377520, n = [], j, u, y, J, K, da = Math.ceil((a.length / 4 + 2) / 16), U = [ da ], z = 0, w; z < da; z++) {
            U[z] = [];
            for (j = 0; j < 16; j++) U[z][j] = a.charCodeAt(z * 64 + j * 4) << 24 | a.charCodeAt(z * 64 + j * 4 + 1) << 16 | a.charCodeAt(z * 64 + j * 4 + 2) << 8 | a.charCodeAt(z * 64 + j * 4 + 3);
        }
        z = (a.length - 1) * 8;
        a = da - 1;
        U[a][14] = Math.floor(z / Math.pow(2, 32));
        U[a][15] = z & 4294967295;
        for (z = 0; z < da; z++) {
            for (w = 0; w < 16; w++) n[w] = U[z][w];
            for (w = 16; w < 80; w++) n[w] = (n[w - 3] ^ n[w - 8] ^ n[w - 14] ^ n[w - 16]) << 1 | (n[w - 3] ^ n[w - 8] ^ n[w - 14] ^ n[w - 16]) >>> 31;
            a = c;
            j = d;
            u = e;
            y = f;
            J = p;
            for (w = 0; w < 80; w++) K = Math.floor(w / 20), K = (a << 5 | a >>> 27) + (K == 0 ? j & u ^ ~j & y : K == 1 ? j ^ u ^ y : K == 2 ? j & u ^ j & y ^ u & y : j ^ u ^ y) + J + b[K] + n[w] & 4294967295, 
            J = y, y = u, u = j << 30 | j >>> 2, j = a, a = K;
            c = c + a & 4294967295;
            d = d + j & 4294967295;
            e = e + u & 4294967295;
            f = f + y & 4294967295;
            p = p + J & 4294967295;
        }
        return [ c, d, e, f, p ];
    }
    function ha(a) {
        var b = m.navigator, c = m.window.screen, d = [ b.userAgent, b.platform, new Date().getTimezoneOffset(), c.width + c.height + c.colorDepth ];
        o(b.plugins, function(a) {
            d.push(a.name + a.description + a.filename + a[0].type);
        });
        b = m.performance;
        d = d.concat([ b && b.now ? b.now() : "", document.title, m.location.href, q(), ea() ]);
        return d.concat(a || []).join();
    }
    function r(a, b, c) {
        var d = Array.prototype.slice, e = d.call(arguments, 2);
        return function() {
            return a.apply(b, e.concat(d.call(arguments)));
        };
    }
    function s(a) {
        return typeof a !== "undefined";
    }
    function ia(a) {
        return a.replace(/^www\./, "");
    }
    function t(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    }
    function ja(a, b) {
        var c = m;
        c.removeEventListener ? c.removeEventListener(a, b, k) : c.detachEvent && c.detachEvent("on" + a, b);
    }
    function v(a) {
        return typeof a === "number";
    }
    function x(a) {
        return typeof a === "string";
    }
    function ka(a) {
        a = new Date(+a);
        return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    }
    function q() {
        return new Date().getTime();
    }
    function o(a, b) {
        if ((!!a && a.constructor === Object) === h) for (var c in a) {
            if (a.hasOwnProperty(c) && b(a[c], c) === k) break;
        } else {
            c = 0;
            for (var d = a.length; c < d; c++) if (b(a[c], c) === k) break;
        }
    }
    function la(a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (b(a[c])) return c;
        return -1;
    }
    function ma(a, b) {
        if (a === b) return 0;
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        for (var c = [], d = 0, e = b.length; d <= e; d++) c[d] = [ d ];
        for (var f = 0, p = a.length; f <= p; f++) c[0][f] = f;
        for (var n, j, u, d = 1; d <= e; d++) for (f = 1; f <= p; f++) n = d - 1, j = f - 1, 
        u = c[n][j], b.charAt(n) == a.charAt(j) ? c[d][f] = u : (j = c[d][j] + 1, n = c[n][f] + 1, 
        u += 2, c[d][f] = Math.min(j, n, u));
        return c[b.length][a.length];
    }
    var na, oa = m.setInterval, pa = m.clearInterval, qa = m.setTimeout, A = m.clearTimeout;
    function ra(a) {
        switch (a) {
          case g:
            return "undefined";

          case "":
            return "empty";

          default:
            return a;
        }
    }
    function sa(a, b, c) {
        a = "page" + a + "Offset";
        b = "scroll" + b;
        if (c) {
            var d, e;
            d = d || "*";
            e = e || document;
            if ("querySelectorAll" in e) c = e.querySelectorAll(d + "[data-cb-scroll-element]"); else {
                c = [];
                d = e.getElementsByTagName(d);
                for (e = d.length; e--; ) d[e].getAttribute("data-cb-scroll-element") && c.push(d[e]);
            }
            if (c && c.length) return c[0][b];
        }
        if (v(m[a])) return m[a]; else if (document.body && document.body[b]) return document.body[b]; else if (document.documentElement[b]) return document.documentElement[b];
        return 0;
    }
    function ta(a) {
        var b = document, b = b[b.compatMode === "CSS1Compat" ? "documentElement" : "body"]["client" + a] || 0;
        window["inner" + a] && (b = Math.min(window["inner" + a], b));
        return b;
    }
    function B(a) {
        a = "scroll" + a;
        return Math.max(document.body[a], document.documentElement[a]) || 0;
    }
    function ua(a, b, c) {
        a.ownerDocument || (a = a.correspondingUseElement);
        if (!a || !a.ownerDocument) return i;
        var d = a.ownerDocument.documentElement, e = 0, f = s(c) ? c + 1 : -1;
        x(b) ? (b = b.toLowerCase(), c = function(a) {
            return (a = a.nodeName) && a.toLowerCase() === b;
        }) : c = b;
        for (;a && a !== d && e !== f; ) {
            if (c(a)) return a;
            a = a.parentNode;
            e++;
        }
        return i;
    }
    function va(a) {
        return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml");
    }
    function wa(a) {
        a = a || window.event;
        return !a ? i : ua(a.target || a.srcElement, va, 10);
    }
    function xa(a, b) {
        var c = document.createElement(a);
        o(b, function(a, b) {
            c.setAttribute(b, a);
        });
        return c;
    }
    function ya() {
        this.G = {};
        this.Ra = 1;
    }
    function C(a, b, c, d) {
        a.Ra++;
        a.G[b] = a.G[b] || {};
        a.G[b][a.Ra] = [ c, d ];
        return a.Ra;
    }
    function D(a, b) {
        if (x(b)) a.G[b] = g, delete a.G[b]; else if (v(b)) {
            var c = h;
            o(a.G, function(a) {
                o(a, function(e, f) {
                    if (parseInt(f, 10) === b) return a[f] = g, delete a[f], c = k;
                });
                return c;
            });
        }
    }
    ya.prototype.O = function(a, b) {
        if (this.G[a]) {
            var c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
            o(this.G[a], function(a) {
                var b;
                a && a.length === 2 && (b = a[0], a = a[1], b.apply(a, c));
            });
        }
    };
    ya.prototype.addEventListener = function(a, b) {
        var c = C(this, a, b);
        b._cbEventId = c;
    };
    ya.prototype.removeEventListener = function(a, b) {
        this.G[a] && this.G[a][b._cbEventId] && this.G[a][b._cbEventId][0] === b && D(this, b._cbEventId);
    };
    var E = new ya(), za = "a";
    var F = {};
    F.q = function() {
        F.Ea ? F.oa("pageload") : (F.lb = [ {
            target: m,
            event: "scroll"
        }, {
            target: document.body,
            event: "keydown"
        }, {
            target: document.body,
            event: "mousemove"
        }, {
            target: m,
            event: "resize"
        }, {
            target: document.body,
            event: "mousedown"
        } ], F.va = i, F.T = i, F.Da = {}, F.Ca = {}, F.ab = {}, F.wa = {}, o(F.lb, function(a) {
            var b = a.event;
            t(a.target, b, function(a) {
                F.oa.call(F, b, a);
            });
        }), C(E, "f", function() {
            F.oa("focus");
        }), F.oa("pageload"), t(document.body, "click", function(a) {
            (a = wa(a)) && E.O("c", a);
        }, h), t(document.body, "contextmenu", function(a) {
            (a = wa(a)) && E.O("r", a);
        }), F.Ea = h);
    };
    F.sb = function() {
        var a, b = F.ab.keydown;
        if (b === g) return k;
        b = q() - b;
        return b <= (a || 15e3) && b >= 0;
    };
    F.ea = function(a, b) {
        var c = F.wa[a];
        if (!c) return "";
        var b = b || q(), d, e = 0;
        o(c, function(a) {
            d = Math.floor((b - a) / 1e3);
            d >= 0 && d < 16 && (e |= 1 << d);
        });
        c = ("0000" + e.toString(16)).slice(-4);
        return c == "0000" ? "" : c;
    };
    F.Qb = function() {
        F.wa = {};
    };
    F.Va = 100;
    F.oa = function(a, b) {
        if (!b) b = window.event;
        if (b && a === "keydown") {
            var c = b.keyCode ? b.keyCode : b.which;
            if (c === 32 || c > 36 && c < 41) a = "scroll";
        }
        F.Vb(a);
        if (F.va === i) F.jb(a); else if (!F.T || ba[F.T] < ba[a] || ca[F.T] < ca[a]) F.T = a;
    };
    F.Vb = function(a) {
        var b = q();
        F.ab[a] = b;
        var c = F.wa[a];
        c ? c.length < 2 ? c.push(b) : c[c.length - 2] > b - 1e3 ? c[c.length - 1] = b : c.push(b) : c = [ b ];
        c.length > 32 && c.shift();
        F.wa[a] = c;
    };
    F.jb = function(a) {
        F.va = qa(F.wb, F.Va);
        E.O(za);
        F.Da[a] !== i && A(F.Da[a]);
        F.Ca[a] !== i && A(F.Ca[a]);
        F.ib(a, F.Da, ba, "i");
        F.ib(a, F.Ca, ca, "j");
    };
    F.ib = function(a, b, c, d) {
        b[a] = qa(function() {
            A(b[a]);
            delete b[a];
            var c = k;
            o(b, function() {
                c = h;
                return k;
            });
            c || E.O(d);
        }, c[a] + F.Va);
    };
    F.wb = function() {
        A(F.va);
        F.va = i;
        if (F.T) F.jb(F.T), F.T = i;
    };
    var Aa, Ba, G, Ca, Da;
    (function() {
        var a, b;
        o([ "", "moz", "o", "ms", "webkit" ], function(c) {
            a = (c + "Hidden").charAt(0).toLowerCase() + (c + "Hidden").slice(1);
            if (typeof m.document[a] === "boolean") return b = c, k;
        });
        b !== g && (Ca = a, Da = (b + "VisibilityState").charAt(0).toLowerCase() + (b + "VisibilityState").slice(1), 
        G = b + "visibilitychange");
    })();
    var H = k;
    function Ea() {
        H = Da && m.document[Da] === "prerender" ? h : k;
    }
    function Fa() {
        Ba = h;
        E.O("f");
    }
    function Ga() {
        Ba = k;
        E.O("b");
    }
    function Ha(a, b, c) {
        m.addEventListener ? m.addEventListener(a, c, k) : m.document.attachEvent && m.document.attachEvent(b, c);
    }
    function Ia() {
        var a = h;
        m.document.hasFocus && (a = m.document.hasFocus());
        var b = k;
        Ca && (b = m.document[Ca]);
        return a && !b;
    }
    function Ja() {
        Ia() ? Fa() : Ga();
    }
    function Ka(a) {
        Ea();
        if (H) {
            var b = k, c = function() {
                b || (Ea(), H || (b = h, a(), m.window.setTimeout(function() {
                    m.document.removeEventListener(G, c, k);
                }, 100)));
            };
            m.document.addEventListener(G, c, k);
        } else a();
    }
    function I() {
        this.a = m._sf_async_config || {};
        this.Wa = r(this.fb, this);
    }
    I.prototype.q = function() {
        this.gb = 0;
    };
    I.prototype.fb = function() {};
    I.prototype.sa = function(a) {
        if (!H) {
            var b = this.Wa, c;
            c = new Image(1, 1);
            if (b) c.onerror = b;
            c.src = a;
        }
    };
    I.prototype.ca = function() {
        this.Wa = i;
    };
    function La(a) {
        var b = {};
        a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace("+", " "), o(a.split(/[&;]/g), function(a) {
            a = a.split("=");
            b[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        }));
        return b;
    }
    function Ma(a, b) {
        var c = "", d = m.location.href.split("?");
        if (d.length) {
            var d = La(d[1]), e = b || a;
            d[e] && (c = d[e]);
        }
        return c;
    }
    function Na(a, b) {
        return !b ? h : a === "http:" && b === "80" || a === "https:" && b === "443";
    }
    function Oa(a) {
        var b = [];
        o(Pa, function(c) {
            var d = a[c];
            s(d) && (Object.prototype.toString.call(d) === "[object Array]" ? o(d, function(a) {
                b.push(c + "=" + a);
            }) : d && d.constructor === Object ? o(d, function(a, c) {
                b.push(c + "=" + a);
            }) : ((d + "").length || c == "r") && b.push(c + "=" + d));
        });
        b.push("_");
        return b.join("&");
    }
    function Qa(a) {
        var b = {
            hostname: "",
            pathname: "",
            search: "",
            protocol: "",
            port: "",
            hash: ""
        };
        if (!a) return b;
        var c = document.createElement("a"), d = m.location;
        if (!/^https?:/.test(a) && a.indexOf("javascript:") !== 0) if (a.indexOf("//") === 0) a = d.protocol + a; else if (a.indexOf("/") === 0) var e = Na(d.protocol, d.port) ? "" : d.port, a = d.protocol + "//" + d.hostname + (e ? ":" + e : "") + a; else {
            var e = document.baseURI || d.href, f = e.indexOf("?");
            f === -1 && (f = e.indexOf("#"));
            if (f === -1) f = e.length;
            f = e.lastIndexOf("/", f);
            a = f === -1 ? "/" + a : e.substr(0, f) + "/" + a;
        }
        c.href = a;
        b.hostname = c.hostname;
        b.pathname = c.pathname;
        b.search = c.search;
        b.protocol = c.protocol;
        b.port = c.port;
        b.hash = c.hash;
        if (b.pathname.charAt(0) !== "/") b.pathname = "/" + b.pathname;
        if (b.hostname === "") b.hostname = d.hostname;
        if (b.protocol === "") b.protocol = d.protocol;
        if (b.protocol === "javascript:") b.pathname = "", b.hostname = "", b.port = "", 
        b.hash = "";
        if (Na(b.protocol, b.port) || b.port === "0") b.port = "";
        return b;
    }
    function Ra(a) {
        var b = a.protocol;
        a.hostname && (b += "//" + a.hostname, a.port && (b += ":" + a.port));
        return b + a.pathname + a.search + a.hash;
    }
    function L(a, b, c) {
        a[b] = a[b] || c;
    }
    function Sa(a, b) {
        for (var c = m[a] || []; c.length; ) b(c.shift());
        m[a] = {
            push: b
        };
    }
    function Ta(a) {
        o(document.getElementsByTagName("script"), function(b) {
            if (b.src.match(/chartbeat.js/)) return b = La(b.src.split("?")[1]), L(a, "uid", b.uid), 
            L(a, "domain", b.domain), k;
        });
    }
    function M(a, b) {
        return a[b] ? encodeURIComponent(a[b]) : "";
    }
    function Ua(a) {
        var b = {};
        o(a, function(a, d) {
            d.charAt(0) == "_" && (b[d] = a);
        });
        return b;
    }
    var N = {};
    N.vb = function() {
        try {
            N.create("_cb_test", "1", 1);
            var a = N.k("_cb_test");
            N.remove("_cb_test");
            return a === "1";
        } catch (b) {
            return k;
        }
    };
    N.k = function(a) {
        a += "=";
        var b = "";
        o(document.cookie.split(";"), function(c) {
            for (;c.charAt(0) === " "; ) c = c.substring(1, c.length);
            if (c.indexOf(a) === 0) return b = c.substring(a.length, c.length), k;
        });
        return b;
    };
    N.create = function(a, b, c) {
        var d = m._sf_async_config;
        if (d && d.noCookies) return "";
        d = new Date();
        d.setTime(q() + c * 1e3);
        a = a + "=" + b + ("; expires=" + d.toGMTString()) + "; path=/";
        return document.cookie = a;
    };
    N.remove = function(a) {
        return N.k(a) ? N.create(a, "", -86400) : "";
    };
    var O = {};
    O.B = function(a) {
        var b = m._sf_async_config;
        if (!a && b && b.noCookies) return i;
        if (O.B.Aa !== g) return O.B.Aa;
        var a = q() + "", c, d;
        try {
            if ((d = m.localStorage).setItem(a, a), c = d.getItem(a) === a, d.removeItem(a), 
            c) return O.B.Aa = d;
        } catch (e) {}
        return O.B.Aa = i;
    };
    O.k = function(a) {
        var b = O.B();
        if (!b) return "";
        var c = b.getItem(a + "_expires");
        return c && (c = +c, !isNaN(c) && q() > c) ? (O.remove(a), "") : b.getItem(a) || "";
    };
    O.create = function(a, b, c) {
        var d = O.B();
        if (d) {
            var e = new Date();
            e.setTime(q() + c * 1e3);
            try {
                d.setItem(a, b), d.setItem(a + "_expires", e.getTime());
            } catch (f) {}
        }
    };
    O.remove = function(a) {
        var b = O.B();
        b && (b.removeItem(a), b.removeItem(a + "_expires"));
    };
    function Va(a) {
        this.ra = a || "";
        this.xb = O.B() !== i || N.vb();
        this.Qa = k;
        Wa(this);
    }
    l = Va.prototype;
    l.isSupported = function() {
        return this.xb;
    };
    function Wa(a) {
        if (!N.k("_cb_ls")) {
            var b = O.B() !== i, c = N.k("_SUPERFLY_lockout");
            c && o([ "", "_v_", "_p_" ], function(b) {
                a.create(b + "_SUPERFLY_lockout", c, 600, h);
            });
            var d = N.k("_chartbeat3");
            d && (a.create("_v__chartbeat3", d, 34128e3, h), N.remove("_chartbeat3"));
            b && ((b = N.k("_chartbeat2")) && a.create("_chartbeat2", b, 34128e3, h), (b = N.k("_chartbeat_uuniq")) && a.create("_chartbeat_uuniq", b, 34128e3, h), 
            (b = N.k("_chartbeat5")) && a.create("_chartbeat5", b, 60, h));
            N.create("_cb_ls", "1", 34128e3);
        }
    }
    l.create = function(a, b, c, d) {
        a = d ? a : this.ra + a;
        (O.B() ? O : N).create(a, b, c);
        O.B() && N.create(a, b, c);
    };
    l.update = function(a, b, c, d, e, f, p) {
        a = d ? a : this.ra + a;
        e = x(e) ? e : "::";
        d = (d = this.k(a, h)) ? d.split(e) : [];
        if (p && d.length) {
            var n = p(b), j = la(d, function(a) {
                return p(a) === n;
            });
            j !== -1 && d.splice(j, 1);
        }
        d.push(b);
        for (v(f) && d.length > f && d.splice(0, d.length - f); d.length > 1 && d.join(e).length > 4e3; ) d.shift();
        this.create(a, d.join(e), c, h);
    };
    l.k = function(a, b) {
        var a = b ? a : this.ra + a, c = (O.B() ? O : N).k(a);
        if (!c && O.B() && (c = N.k(a)) && N.k("_cb_ls")) {
            this.Qa = h;
            var d;
            switch (a) {
              case "_SUPERFLY_lockout":
                d = 600;
                break;

              case "_chartbeat4":
                d = 60;
                break;

              case "_cb_cp":
                d = 60;
                break;

              case "_chartbeat3":
                d = 34128e3;
                break;

              default:
                d = 34128e3;
            }
            O.create(a, c, d);
        }
        return c;
    };
    l.remove = function(a, b) {
        a = b ? a : this.ra + a;
        (O.B() ? O : N).remove(a);
        O.B() && N.remove(a);
    };
    function Xa(a) {
        var b = i;
        if (a && (b = Ya())) return b;
        var c = m.location, b = P(c.pathname), a = c.search || "", a = a.replace(/PHPSESSID=[^&]+/, ""), d = /&utm_[^=]+=[^&]+/gi;
        (c = d.exec(c.search)) && (a = a.replace(d, ""));
        d = /\?utm_[^=]+=[^&]+(.*)/i;
        (c = d.exec(a)) && (a = a.replace(d, c[1] != "" ? "?" + c[1] : ""));
        return b + a;
    }
    function Ya() {
        var a = i;
        o(document.getElementsByTagName("link"), function(b) {
            if (b.rel == "canonical") return b = Qa(b.href), a = P(b.pathname) + b.search + b.hash, 
            k;
        });
        return a;
    }
    for (var Za = {}, $a = 0; $a < 81; $a++) Za["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt($a)] = h;
    function ab(a, b) {
        if (a === "%") return "%25";
        var c = parseInt(b, 16);
        return Za[c] ? String.fromCharCode(c) : "%" + b.toUpperCase();
    }
    function P(a) {
        if (!x(a)) return a;
        a = a.replace(/%([0-9A-Fa-f]{2})?/g, ab);
        return a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent);
    }
    function Q(a, b) {
        var c = R();
        return s(b) && !s(c[a]) ? b : c[a];
    }
    function R() {
        s(m._cb_shared) || (m._cb_shared = {});
        return m._cb_shared;
    }
    var S = {
        ob: {
            IDLE: 0,
            nb: 1,
            mb: 2,
            xa: 3
        },
        pb: {
            IDLE: 0,
            nb: 1,
            mb: 2,
            xa: 3
        },
        H: 0,
        J: 0
    };
    S.q = function() {
        if (!S.Ea) C(E, za, S.Db, S), C(E, "i", S.Hb, S), C(E, "f", S.Fb, S), C(E, "b", S.Eb, S), 
        C(E, "j", S.Gb, S), S.Ea = h;
    };
    S.Bb = function() {
        return S.H;
    };
    S.Cb = function() {
        return S.J;
    };
    S.Db = function() {
        S.H === 1 ? S.Q(3) : S.H === 0 && S.Q(2);
        S.J === 1 ? S.P(3) : S.J === 0 && S.P(2);
    };
    S.Hb = function() {
        S.H === 3 ? S.Q(1) : S.H === 2 && S.Q(0);
    };
    S.Gb = function() {
        S.J === 3 ? S.P(1) : S.J === 2 && S.P(0);
    };
    S.Fb = function() {
        (S.H === 0 || S.H === 2) && S.Q(3);
        (S.J === 0 || S.J === 2) && S.P(3);
    };
    S.Eb = function() {
        S.H === 3 ? S.Q(2) : S.H === 1 && S.Q(0);
        S.J === 3 ? S.P(2) : S.J === 1 && S.P(0);
    };
    S.Q = function(a) {
        S.H = a;
        E.O("s", a);
    };
    S.P = function(a) {
        S.J = a;
        E.O("x", a);
    };
    function bb(a, b) {
        this.Ba = a || g;
        this.Ha = b || g;
        this.Z = this.N = 0;
        this.Za = r(this.Kb, this);
        this.Pa = this.M = i;
    }
    l = bb.prototype;
    l.q = function() {
        this.Z = this.N = 0;
        this.M = i;
        this.Pa = C(E, "s", this.fa, this);
        this.fa(S.Bb());
    };
    l.fa = function(a) {
        pa(this.M);
        this.M = i;
        if (a === S.ob.xa) this.M = oa(this.Za, 1e3);
    };
    l.Kb = function() {
        if (this.Ba === g || this.Ba()) this.N++, this.Z++, this.Ha && this.Ha();
    };
    l.terminate = function() {
        pa(this.M);
        this.M = i;
        D(E, this.Pa);
    };
    l.ca = function() {
        this.terminate();
        this.Ha = this.Ba = g;
    };
    function cb(a, b) {
        bb.call(this, a, b);
    }
    aa(cb, bb);
    cb.prototype.q = function() {
        this.Z = this.N = 0;
        this.M = i;
        this.Pa = C(E, "x", this.fa, this);
        this.fa(S.Cb());
    };
    cb.prototype.fa = function(a) {
        pa(this.M);
        this.M = i;
        if (a === S.pb.xa) this.M = oa(this.Za, 1e3);
    };
    function T() {
        I.call(this);
        this.X = [];
        this.D = new Va(this.Sb);
        this.D.remove("_SUPERFLY_nosample");
        this.F = new bb();
        this.U = new cb();
        this.Ia = r(this.qa, this);
        t(m, "unload", this.Ia);
        Ka(r(this.q, this));
    }
    aa(T, I);
    l = T.prototype;
    l.Ma = h;
    l.q = function() {
        T.S.q.call(this);
        this.ma = this.$ = 0;
        this.ba = q();
        this.La = fa(db(this));
        this.Ka = h;
        this.Fa = 72e5;
        if (this.Ma) {
            var a = +this.a.sessionLength;
            if (!isNaN(a)) this.Fa = a * 6e4;
        }
        a = Q("d");
        if (!a) {
            var a = [], b = this.D.k("_chartbeat2", h);
            b.length > 0 && (a = b.split("."));
            a.length > 4 && (a = []);
            var b = q(), c = b - +(a[1] || 0), d = b - +(a[2] || 0), c = a[0] && c > 18e5 && d < 2592e6 ? 0 : 1;
            R().n = c;
            var d = "1", e = a && +a[2], c = a && a[3];
            if (a && e && c) if (d = Math.abs((ka(b) - ka(e)) / 864e5)) {
                d = Math.min(d, 16) - 1;
                for (e = ""; d--; ) e += 0;
                d = (c + e + "1").slice(-16);
            } else d = c;
            c = d;
            a[0] || (a[0] = this.a.utoken || fa(db(this), 3), a[1] = b);
            a[2] = b;
            a[3] = c;
            this.a.utoken = this.ka;
            this.D.create("_chartbeat2", a.join("."), 34128e3, h);
            R().d = a;
        }
        this.fc = a.join(".");
        var f;
        c = +a[1];
        d = +a[2];
        if ((b = a[3]) && c && d) f = (Math.min((Math.abs((ka(d) - ka(c)) / 864e5) || 0) + 1, 16, b.length) - 1).toString(16), 
        f += ("0000" + parseInt(b, 2).toString(16)).slice(-4);
        this.Ya = f;
        this.Mb = Q("n", 1);
        this.ka = a[0];
        this.F.q();
        this.U.q();
        S.q();
        F.q();
        Aa || (Ba = Ia(), G && m.document.addEventListener && m.document.addEventListener(G, Ja, k), 
        Ha("focus", "onfocusin", Fa), Ha("blur", "onfocusout", Ga), Ba && Fa(), Aa = h);
        this.ha = 0;
        this.rb = C(E, za, this.Nb, this);
    };
    function eb(a) {
        if (!a.D.k("_SUPERFLY_lockout") && !H) a.Lb ? a.ta() : (a.Lb = h, !m._sf_async_config && !m._cbq ? (a.pa = r(a.ta, a), 
        t(m, "load", a.pa)) : a.ta());
    }
    l.ta = function() {
        var a = m._sf_startpt, b = m._sf_endpt;
        if (v(a)) this.Ja = v(b) ? b - a : q() - a;
        F.q();
        a = r(this.ia, this);
        this.$a = oa(a, 15e3);
        this.ia();
    };
    l.ia = function() {
        var a = this.F.Z, a = this.a.reading && +this.a.reading || a > 0;
        if (this.ma < this.$ && !a) this.ma++; else {
            var b;
            if (na === g) b = m.navigator.userAgent, na = b.indexOf("AppleWebKit") > 0 && b.indexOf("FBIOS") > 0;
            b = na;
            b && !a ? this.ma++ : (a ? this.$ = 0 : fb(this), this.ma = 0, this.X.push(0), this.X.length > 18 && this.X.shift(), 
            this.Ma && q() - this.ba >= this.Fa ? this.terminate() : this.ja());
        }
    };
    l.fb = function() {
        this.X.push(1);
        var a = 0;
        o(this.X, function(b) {
            a += b;
        });
        a < 3 ? (this.Ka = h, fb(this)) : (this.terminate(), this.D.create("_SUPERFLY_lockout", "1", 600));
    };
    l.qa = function() {};
    l.Nb = function() {
        var a = gb(this);
        this.ha = Math.max(this.ha, a);
    };
    function gb(a) {
        return sa("Y", "Top", !!a.a.scrollElement);
    }
    function fb(a) {
        var b = a.$, b = b ? Math.min(b * 2, 16) : 1;
        a.$ = b;
    }
    l.la = function() {
        this.qa();
        this.terminate();
    };
    l.kb = function() {
        this.q();
        eb(this);
    };
    function hb(a) {
        if (a.a.virtualReferrer) return h;
        a = (document.referrer || "").indexOf("://" + m.location.hostname + "/");
        return a != -1 && a < 9;
    }
    function ib(a) {
        a = a.a.virtualReferrer;
        if (!a && (a = document.referrer || "")) {
            var b = Qa(a);
            if (b.protocol === "http:" || b.protocol === "https:") b.pathname = P(b.pathname), 
            a = Ra(b);
        }
        return encodeURIComponent(a);
    }
    function jb(a) {
        a = a.a.title.slice(0, 100);
        return encodeURIComponent(a);
    }
    function db(a) {
        a = [ ib(a), B("Width"), B("Height") ];
        return ha(a);
    }
    function kb(a) {
        var b = [], c = a.D.k("_chartbeat4");
        c && (o(c.split("::"), function(a) {
            b.push(encodeURIComponent(a));
        }), a.D.remove("_chartbeat4"));
        return b;
    }
    l.terminate = function() {
        this.F.terminate();
        this.U.terminate();
        D(E, this.rb);
        this.pa !== g && ja("load", this.pa);
        pa(this.$a);
        R().d = g;
        R().n = g;
    };
    l.ca = function() {
        this.terminate();
        ja("unload", this.Ia);
        this.Ia = this.pa = this.D = this.X = this.a = i;
        this.F.ca();
        this.F = i;
        this.U.ca();
        this.U = i;
        T.S.ca.call(this);
    };
    function lb(a) {
        for (var b = Q("m") || []; b.length; ) a(b.shift());
        a = {
            push: a
        };
        R().m = a;
    }
    function mb(a, b, c) {
        var d = a.offsetLeft, e = a.offsetTop, f = nb(a);
        d += f.x;
        e += f.y;
        for (var p = k, n = c ? 0 : sa("X", "Left", g), j = c ? 0 : sa("Y", "Top", g), f = a.offsetParent; a && a !== b && a !== document.body; ) {
            if (a === f) f = nb(a), d += a.offsetLeft + f.x, e += a.offsetTop + f.y, f = a.offsetParent;
            c || (d -= a.scrollLeft, e -= a.scrollTop);
            if (ob(a, [ "position" ]).position === "fixed") {
                p = h;
                break;
            }
            a = a.parentElement;
        }
        c || (d -= b ? b.scrollLeft : n, e -= b ? b.scrollTop : j);
        p && (d += n, e += j);
        return {
            x: d,
            y: e
        };
    }
    function ob(a, b) {
        var c = {}, d, e;
        m.getComputedStyle ? d = m.getComputedStyle(a, i) : a.currentStyle ? e = "currentStyle" : a.style && (e = "style");
        o(b, function(b) {
            c[b] = d ? d[b] || d.getPropertyValue(b) : a[e][b];
        });
        return c;
    }
    var pb = /matrix(3d)?\((.*)\)/;
    function nb(a) {
        var b = {
            x: 0,
            y: 0
        }, a = ob(a, [ "transform" ]).transform;
        if (!x(a)) return b;
        var c = a.match(pb);
        if (!c) return b;
        var a = c[2].split(", "), d;
        s(c[1]) ? (c = 12, d = 13) : (c = 4, d = 5);
        b.x = parseInt(a[c], 10);
        b.y = parseInt(a[d], 10);
        return b;
    }
    function qb() {
        var a = m.location.href, a = a.replace(/-{2,}/g, "-"), a = Qa(a);
        a.pathname = P(a.pathname);
        return a;
    }
    function rb(a) {
        var b = N.k("_chartbeat6");
        if (!b) return i;
        var b = b.split("::"), c, d;
        if (b.length === 1) c = b[0].split(","), d = 0; else {
            var e, f = qb(), p = Ra(f);
            o(b, function(a, b) {
                var f = a.split(","), j = ma(p, decodeURIComponent(f[0]));
                if (j === 0) return c = f, d = b, k;
                if (e === g || j < e) e = j, c = f, d = b;
            });
        }
        b.splice(d, 1);
        a = "_chartbeat6=" + b.join("::") + sb(a);
        document.cookie = a;
        var a = [], b = decodeURIComponent(c[0]), f = decodeURIComponent(c[1]), n = c[2];
        c.splice(0, 3);
        for (var j = c.length / 2, u = 0; u < j; u++) a.push({
            dc: b,
            origin: f,
            aa: n,
            yb: c[u * 2],
            Wb: c[u * 2 + 1]
        });
        return a;
    }
    function sb(a) {
        var b = "", c;
        if (!(a && a.constructor === Object)) return b;
        a.cb && (c = new Date(), c.setTime(c.getTime() + a.cb), b += "; expires=" + c.toGMTString());
        a.domain && (b += "; domain=" + a.domain);
        a.path && (b += "; path=" + a.path);
        return b;
    }
    function tb(a) {
        var b = a.topStorageDomain, a = a.domain, c = m.location.hostname;
        return b ? b : ub(c, a) ? a : c.replace(/^www\./, "");
    }
    function ub(a, b) {
        if (a === b) return h;
        for (var c = b.split("."), d = a.split("."); c.length; ) {
            if (d.length === 0) return k;
            if (c.pop() !== d.pop()) return k;
        }
        return h;
    }
    function vb(a, b, c, d) {
        this.Ab = a;
        this.zb = b;
        this.Xb = c;
        this.aa = d;
    }
    function wb(a, b) {
        for (var c = b || document.documentElement, d = [], e = i, f = a, p, n, j, u, y, J; f && f !== c; ) {
            p = f.nodeName.toLowerCase();
            e = f;
            n = e.nodeName;
            if ((f = f.parentNode) && f !== document.documentElement) {
                j = f.children;
                u = 0;
                for (y = 0, J = j.length; y < J; y++) {
                    if (e === j[y]) {
                        p += "[" + (1 + y - u) + "]";
                        break;
                    }
                    j[y].nodeName !== n && u++;
                }
            }
            d.unshift(p);
        }
        return d.join("/");
    }
    function V() {
        this.Sb = "_t_";
        T.call(this);
    }
    aa(V, T);
    l = V.prototype;
    l.q = function() {
        V.S.q.call(this);
        Ta(this.a);
        var a = m.location;
        L(this.a, "mabServer", "mabping.chartbeat.net");
        L(this.a, "title", document.title);
        L(this.a, "domain", a.hostname);
        L(this.a, "path", Xa(!!this.a.useCanonical));
        this.ga = ia(a.hostname);
        this.a.domain = ia(this.a.domain);
        this.Ub = tb(this.a);
        this.da = this.na = k;
        this.Xa = [];
        var b = this, a = rb({
            domain: "." + this.Ub,
            cb: 6e4,
            path: "/"
        });
        if (a !== i) this.na = h, o(a, function(a) {
            b.Xa.push(new vb(a.origin, a.yb, a.Wb, a.aa));
        });
        this.eb = 0;
        this.ua = i;
        lb(r(this.Jb, this));
    };
    l.ja = function() {
        var a = this.F.N, b = xb(this), c, d = this;
        this.na && o(this.Xa, function(e) {
            c = b + "&x=" + e.zb + "&v=" + e.Xb + "&ml=" + e.aa + "&xo=" + e.Ab + "&e=" + a;
            d.sa(c);
        });
        !this.da && this.ua && yb(this, this.ua);
        this.da = h;
    };
    l.ta = function() {
        var a = m._sf_startpt, b = m._sf_endpt;
        if (v(a)) this.Ja = v(b) ? b - a : q() - a;
        F.q();
        if (this.na) a = r(this.ia, this), this.$a = oa(a, 500);
        this.ia();
    };
    l.ia = function() {
        var a, b;
        this.da ? (a = this.F.N, b = this.eb * 15, a - b >= 15 && (this.ja(), this.eb += 1), 
        a >= 45 && this.terminate()) : this.ja();
    };
    function xb(a) {
        var b = a.a;
        return (m.location.protocol || "http:") + "//" + b.mabServer + "/ping/mab?h=" + encodeURIComponent(b.domain) + "&p=" + encodeURIComponent(b.path) + "&d=" + encodeURIComponent(a.ga) + "&u=" + a.ka + "&c=" + Math.round((q() - a.ba) / 600) / 100;
    }
    l.qa = function() {};
    l.Tb = function(a) {
        var b = a.d, c = i;
        b !== i && (c = {
            Na: b.s,
            aa: b.g,
            bb: b.m
        });
        a = {
            status: a.s,
            data: c,
            code: a.c,
            message: a.m
        };
        this.da ? yb(this, a) : this.ua = a;
    };
    function yb(a, b) {
        var c = xb(a), d = b.status, e = b.data;
        if (d == "s" && e !== i) {
            var f = r(a.sa, a);
            e.Na && e.Na.constructor === Object && o(e.Na, function(a, b) {
                f(c + "&x=" + b + "&v=" + a + "&ml=" + e.aa + "&e=-1");
            });
            Object.prototype.toString.call(e.bb) === "[object Array]" && o(e.bb, function(a) {
                f(c + "&me=3&ml=" + e.aa + "&x=" + a);
            });
        } else d == "e" && a.sa(c + "&me=" + b.code);
    }
    l.Jb = function(a, b) {
        for (var c = 0, d = arguments.length; c < d; c++) {
            var a = arguments[c], e = a.shift();
            e === "t" ? this.Tb.apply(this, a) : e === "v" && this.Rb.apply(this, a);
        }
    };
    l.la = function() {
        R().m = [];
        s(this.Sa) && this.Sa();
        V.S.la.call(this);
    };
    l.Rb = function(a) {
        this.Sa = a;
    };
    l.terminate = function() {
        this.Sa = this.ec = g;
        this.ua = i;
        this.da = this.na = g;
        V.S.terminate.call(this);
    };
    if (!m.pSUPERFLY_mab) {
        var W = new V(), zb = {};
        zb.evps = r(W.la, W);
        zb.svps = r(W.kb, W);
        m.pSUPERFLY_mab = zb;
        eb(W);
    }
    var Ab = "engagedSeconds", Bb = {
        bc: "id",
        ac: Ab,
        Yb: "campaignId",
        Zb: "creativeId",
        cc: "placementId",
        $b: "element"
    };
    var Cb, Db, X;
    function Eb(a) {
        if (a.origin === "https://chartbeat.com" && (a = String(a.data), a.indexOf("_cb_hud_version=") === 0)) {
            var b = a.substr(16);
            Fb();
            if (b !== "NONE") b = b.indexOf("HUD2.") === 0 ? b.substr(5) : "OLD", a = "https://static.chartbeat.com/js/inpage.js", 
            b !== "OLD" && (a = "https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-" + b + ".js"), 
            b = s(g) ? g : {}, b.src = a, a = xa("script", b), a.setAttribute("type", "text/javascript"), 
            b = document.head || document.getElementsByTagName("head")[0], s(g) ? g.appendChild(a) : b && b.appendChild(a);
        }
    }
    function Fb() {
        A(Db);
        Db = g;
        ja("message", Eb);
        X && X.parentNode && X.parentNode.removeChild(X);
        X = g;
    }
    function Gb() {
        var a = m._sf_async_config && m._sf_async_config.domain;
        if (a && !Cb) {
            Cb = h;
            a = "https://chartbeat.com/publishing/hud2/versioninfo/?host=" + encodeURIComponent(a);
            t(m, "message", Eb);
            Db = qa(Fb, 1e4);
            var b = s(g) ? g : {};
            b.src = a;
            a = xa("iframe", b);
            a.style.display = "none";
            s(g) ? g.appendChild(a) : document.body && document.body.appendChild(a);
            X = a;
        }
    }
    function Hb(a) {
        if (/[\/.]chartbeat\.com$/.test(a.origin)) {
            var b = O.B(h), c = String(a.data);
            b && c.indexOf("_cb_ip") == 0 && (b.setItem("_cb_ip", "1"), a.source.postMessage(1, a.origin), 
            Gb(), ja("message", Hb));
        }
    }
    function Y() {
        "postMessage" in window && t(m, "message", r(this.Ib, this));
        T.call(this);
        Sa("_cbq", r(this.hb, this));
    }
    aa(Y, T);
    Y.prototype.q = function() {
        Y.S.q.call(this);
        var a = this.ka;
        R().u = a;
        a = this.La;
        R().t = a;
        this.za = i;
        Ta(this.a);
        a = m.location;
        L(this.a, "pingServer", "ping.chartbeat.net");
        L(this.a, "title", document.title);
        L(this.a, "domain", a.hostname);
        this.a.path = this.a.path ? P(this.a.path) : Xa(!!this.a.useCanonical);
        this.ga = ia(a.hostname);
        this.a.domain = ia(this.a.domain);
        this.tb = C(E, "c", this.Ob, this);
        this.ub = C(E, "r", this.Pb, this);
        this.Y = i;
    };
    Y.prototype.qb = function(a) {
        this.za = a;
    };
    Y.prototype.qa = function() {
        this.D.update("_chartbeat4", [ "t=" + this.La, "E=" + this.F.N, "EE=" + this.U.N, "x=" + gb(this), "c=" + Math.round((q() - this.ba) / 600) / 100, "y=" + B("Height"), "w=" + ta("Height") ].join("&"), 60, g, g, 1);
    };
    var Pa = "h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,t,V,z,i,L,tz,l,,sn,C,eS,eM,eD,eK,eR,EE".split(",");
    l = Y.prototype;
    l.ja = function(a) {
        this.gb++;
        var b = {};
        b.g = this.a.uid;
        b.g0 = M(this.a, "sections");
        b.g1 = M(this.a, "authors");
        b.g2 = M(this.a, "zone");
        b.g3 = M(this.a, "sponsorName");
        b.g4 = M(this.a, "type");
        !this.a.noCookies && this.D.isSupported() ? b.n = this.Mb : b.nc = 1;
        b.c = Math.round((q() - this.ba) / 600) / 100;
        b.E = this.F.N;
        b.EE = this.U.N;
        var c = gb(this);
        this.ha = Math.max(this.ha, c);
        b.x = c;
        b.m = this.ha;
        b.y = B("Height");
        b.o = B("Width");
        b.w = ta("Height");
        b.b = this.Ja ? this.Ja : "";
        if (this.Ya) b.f = this.Ya;
        b[""] = Ua(this.a);
        b.t = this.La;
        b.V = 78;
        b.tz = new Date().getTimezoneOffset();
        b.sn = this.gb;
        c = this.F.Z;
        b.h = encodeURIComponent(this.a.domain);
        b.p = encodeURIComponent(this.a.path);
        b.u = this.ka;
        b.d = encodeURIComponent(this.ga);
        b.j = Math.round((this.$ + 2) * 15e3 / 1e3);
        b.R = 0;
        b.W = 0;
        b.I = 0;
        var d = b.c * 6e4 + this.ba;
        b.eD = F.ea("mousedown", d);
        b.eM = F.ea("mousemove", d);
        b.eK = F.ea("keydown", d);
        b.eR = F.ea("resize", d);
        b.eS = F.ea("scroll", d);
        F.Qb();
        F.sb() ? b.W = 1 : this.a.reading && +this.a.reading || c > 0 || b.c < .09 ? b.R = 1 : b.I = 1;
        b.e = c;
        c = hb(this);
        if (this.Ka) {
            this.Ka = k;
            if (c) this.Y = Ib(this);
            b.i = jb(this);
            d = this.a.hudTrackable;
            d !== g && (b.L = d ? "1" : "0");
            this.a.alias && (b.PA = encodeURIComponent(this.a.alias));
        }
        if (c) {
            if (this.Y) {
                if (b.v = encodeURIComponent(this.Y.path), b.K = Jb(this.Y), this.Y.Ga > 1) b.l1 = this.Y.Ga;
            } else b.v = ib(this);
            this.a.virtualReferrer && (b.vp = 1);
        } else b.r = ib(this);
        c = ra(b.v);
        R().v = c;
        c = ra(b.r);
        R().r = c;
        b.A = this.za ? this.za : "";
        b._c = Ma("utm_campaign", this.a.campaignTag);
        b._m = Ma("utm_medium", this.a.mediumTag);
        b.z = kb(this);
        b.C = this.a.mobileApp ? 1 : "";
        b.KK = a ? Jb(a) : "";
        a = this.D;
        c = a.Qa;
        a.Qa = k;
        b.l = c ? 1 : "";
        this.F.Z = 0;
        this.sa((m.location.protocol || "http:") + "//" + this.a.pingServer + "/ping?" + Oa(b));
    };
    l.Ib = function(a) {
        var b = this.a;
        if (a.origin === "http://" + (b.playerdomain || this.ga)) {
            var c = a.data;
            if (x(c) && c.indexOf("cbqpush::") === 0) a = c.split("::"), a.length == 3 && (a = a.slice(1), 
            a[0].indexOf("_") === 0 && this.hb(a)); else if (c == "cbdata?") {
                var c = "&u=" + Q("u"), d = "&t=" + Q("t"), e = "&v=" + Q("v"), f = "&r=" + Q("r"), b = "domain=" + encodeURIComponent(b.domain) + "&uid=" + encodeURIComponent(b.uid) + "&path=" + encodeURIComponent(b.path) + "&title=" + jb(this) + "&referrer=" + ib(this) + "&internal=" + (hb(this) ? "1" : "0") + "&subdomain=" + encodeURIComponent(this.ga) + c + d + e + f + "&utoken=" + this.ka;
                a.source.postMessage(b, "*");
            }
        }
    };
    l.hb = function(a) {
        a[0] === "_demo" && this.a._demo ? this.a._demo = this.a._demo + "%2C" + a[1] : this.a[a[0]] = a[1];
        this.$ = 0;
    };
    function Kb(a) {
        a = a.replace(/-{2,}/g, "-");
        a = Qa(a);
        a.pathname = P(a.pathname);
        return a;
    }
    l.Ob = function(a) {
        Lb(this, a, "c");
    };
    l.Pb = function(a) {
        Lb(this, a, "r");
    };
    function Lb(a, b, c) {
        if (a.Ma && q() - a.ba >= a.Fa) a.terminate(); else {
            var d = b.href || "", d = Kb(d);
            if (d.protocol.indexOf("http") === 0) {
                var e = d.hostname !== m.location.hostname, d = Ra(d), f = ua(b, function(a) {
                    return a.id;
                }), p = wb(b, f), n;
                f ? (p && (p = "/" + p), p = "*[@id='" + f.id + "']" + p, n = wb(b)) : n = p;
                f = fa(p);
                n = fa(n);
                b = mb(b, g, h);
                c = {
                    left: b.x,
                    top: b.y,
                    path: a.a.path,
                    href: d,
                    Ua: f,
                    ya: n,
                    Ta: p,
                    Oa: c,
                    Ga: 0
                };
                a.ja(c);
                e || a.D.update("_chartbeat5", Mb(c), 60, k, g, 5, function(a) {
                    a = a.split(",");
                    return a[2] + "," + a[3];
                });
            }
        }
    }
    function Jb(a) {
        return [ a.left, a.top, a.Ua, encodeURIComponent(a.Ta), a.Oa, encodeURIComponent(a.href), a.ya ].join("::");
    }
    function Mb(a) {
        var b = encodeURIComponent(a.Ta), b = b.replace(/-/g, "%2D");
        b.length > 512 && (b = "");
        return [ a.left, a.top, encodeURIComponent(a.path), encodeURIComponent(a.href), a.Ua, b, a.Oa, a.ya ].join(",");
    }
    function Ib(a) {
        var b = a.D.k("_chartbeat5");
        if (!b) return i;
        var c = b.split("::"), b = c.length, d, e;
        if (b === 1) d = c[0].split(","), e = 0; else {
            var f, p = Kb(m.location.href), n = Ra(p);
            o(c, function(a, b) {
                var c = a.split(","), p = ma(n, decodeURIComponent(c[3]));
                if (p === 0) return d = c, e = b, k;
                if (f === g || p < f) f = p, d = c, e = b;
            });
        }
        c.splice(e, 1);
        a.D.create("_chartbeat5", c.join("::"), 60);
        (a = d[5]) ? (a = a.replace(/%2D/g, "-"), a = decodeURIComponent(a)) : a = "";
        return {
            left: d[0],
            top: d[1],
            path: decodeURIComponent(d[2]),
            href: decodeURIComponent(d[3]),
            Ua: d[4] || "",
            Ta: a,
            ya: d.length > 7 ? d[7] : "",
            Oa: d.length > 6 ? d[6] : "c",
            Ga: b
        };
    }
    l.terminate = function() {
        D(E, this.tb);
        D(E, this.ub);
        Y.S.terminate.call(this);
    };
    if (!m.pSUPERFLY) {
        var Nb = new Y(), Z = {};
        m.pSUPERFLY = Z;
        var Ob = m.pSUPERFLY_mab, $ = m.pSUPERFLY_pub, Pb = [];
        Ob && Pb.push(Ob);
        if ($) Pb.push($), $.addEngagedAdFilter && (Z.addEngagedAdFilter = $.addEngagedAdFilter), 
        $.refreshAd && (Z.refreshAd = $.refreshAd), $.registerGptSlot && (Z.registerGptSlot = $.registerGptSlot), 
        Sa("_cba", function(a) {
            a();
        });
        Z.virtualPage = function(a, b) {
            if (!H) {
                var c = m._sf_async_config;
                c.virtualReferrer = m.location.protocol + "//" + c.domain + c.path;
                c.path = P(a);
                b && (c.title = b);
                Nb.la();
                o(Pb, function(a) {
                    a.evps();
                });
                Nb.kb();
                o(Pb, function(a) {
                    a.svps();
                });
            }
        };
        Z.activity = r(Nb.qb, Nb);
        eb(Nb);
        var Qb = O.B(h);
        if (Qb) if (Qb.getItem("_cb_ip")) {
            var Rb = m.location;
            (!/^(.+[.])?chartbeat\.com$/.test(Rb.hostname) ? 0 : /^\/publishing\/(overlay|hud|mab)\//.test(Rb.pathname)) || Gb();
        } else t(m, "message", Hb);
    }
})();