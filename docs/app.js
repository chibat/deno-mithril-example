var __global$ = window;
var __setImmediate$ = (cb, ...args)=>setTimeout(cb, 0, ...args)
;
var Ft = Object.create;
var ze = Object.defineProperty;
var Vt = Object.getOwnPropertyDescriptor;
var $t = Object.getOwnPropertyNames;
var Kt = Object.getPrototypeOf, Qt = Object.prototype.hasOwnProperty;
var St = (n)=>ze(n, "__esModule", {
        value: !0
    })
;
var L = (n, f)=>()=>(f || n((f = {
            exports: {
            }
        }).exports, f), f.exports)
;
var Jt = (n, f, u)=>{
    if (f && typeof f == "object" || typeof f == "function") for (let c of $t(f))!Qt.call(n, c) && c !== "default" && ze(n, c, {
        get: ()=>f[c]
        ,
        enumerable: !(u = Vt(f, c)) || u.enumerable
    });
    return n;
}, Bt = (n)=>Jt(St(ze(n != null ? Ft(Kt(n)) : {
    }, "default", n && n.__esModule && "default" in n ? {
        get: ()=>n.default
        ,
        enumerable: !0
    } : {
        value: n,
        enumerable: !0
    })), n)
;
var G = L((br, Qe)=>{
    "use strict";
    function v(n, f, u, c, b, h) {
        return {
            tag: n,
            key: f,
            attrs: u,
            children: c,
            text: b,
            dom: h,
            domSize: void 0,
            state: void 0,
            events: void 0,
            instance: void 0
        };
    }
    v.normalize = function(n) {
        return Array.isArray(n) ? v("[", void 0, void 0, v.normalizeChildren(n), void 0, void 0) : n == null || typeof n == "boolean" ? null : typeof n == "object" ? n : v("#", void 0, void 0, String(n), void 0, void 0);
    };
    v.normalizeChildren = function(n) {
        var f = [];
        if (n.length) {
            for(var u = n[0] != null && n[0].key != null, c = 1; c < n.length; c++)if ((n[c] != null && n[c].key != null) !== u) throw new TypeError("Vnodes must either always have keys or never have keys!");
            for(var c = 0; c < n.length; c++)f[c] = v.normalize(n[c]);
        }
        return f;
    };
    Qe.exports = v;
});
var Oe = L((xr, Se)=>{
    "use strict";
    var Gt = G();
    Se.exports = function() {
        var n = arguments[this], f = this + 1, u;
        if (n == null ? n = {
        } : (typeof n != "object" || n.tag != null || Array.isArray(n)) && (n = {
        }, f = this), arguments.length === f + 1) u = arguments[f], Array.isArray(u) || (u = [
            u
        ]);
        else for(u = []; f < arguments.length;)u.push(arguments[f++]);
        return Gt("", n.key, n, u);
    };
});
var je = L((qr, Xe)=>{
    "use strict";
    var Je = G(), Xt = Oe(), Zt = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g, Be = {
    }, te = {
    }.hasOwnProperty;
    function Ge(n) {
        for(var f in n)if (te.call(n, f)) return !1;
        return !0;
    }
    function Wt(n) {
        for(var f, u = "div", c = [], b = {
        }; f = Zt.exec(n);){
            var h = f[1], o = f[2];
            if (h === "" && o !== "") u = o;
            else if (h === "#") b.id = o;
            else if (h === ".") c.push(o);
            else if (f[3][0] === "[") {
                var s = f[6];
                s && (s = s.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")), f[4] === "class" ? c.push(s) : b[f[4]] = s === "" ? s : s || !0;
            }
        }
        return c.length > 0 && (b.className = c.join(" ")), Be[n] = {
            tag: u,
            attrs: b
        };
    }
    function Yt(n, f) {
        var u = f.attrs, c = Je.normalizeChildren(f.children), b = te.call(u, "class"), h = b ? u.class : u.className;
        if (f.tag = n.tag, f.attrs = null, f.children = void 0, !Ge(n.attrs) && !Ge(u)) {
            var o = {
            };
            for(var s in u)te.call(u, s) && (o[s] = u[s]);
            u = o;
        }
        for(var s in n.attrs)te.call(n.attrs, s) && s !== "className" && !te.call(u, s) && (u[s] = n.attrs[s]);
        (h != null || n.attrs.className != null) && (u.className = h != null ? n.attrs.className != null ? String(n.attrs.className) + " " + String(h) : h : n.attrs.className != null ? n.attrs.className : null), b && (u.class = null);
        for(var s in u)if (te.call(u, s) && s !== "key") {
            f.attrs = u;
            break;
        }
        return Array.isArray(c) && c.length === 1 && c[0] != null && c[0].tag === "#" ? f.text = c[0].children : f.children = c, f;
    }
    function kt(n) {
        if (n == null || typeof n != "string" && typeof n != "function" && typeof n.view != "function") throw Error("The selector must be either a string or a component.");
        var f = Xt.apply(1, arguments);
        return typeof n == "string" && (f.children = Je.normalizeChildren(f.children), n !== "[") ? Yt(Be[n] || Wt(n), f) : (f.tag = n, f);
    }
    Xe.exports = kt;
});
var We = L((Cr, Ze)=>{
    "use strict";
    var vt = G();
    Ze.exports = function(n) {
        return n == null && (n = ""), vt("<", void 0, void 0, n, void 0, void 0);
    };
});
var ke = L((Nr, Ye)=>{
    "use strict";
    var er = G(), tr = Oe();
    Ye.exports = function() {
        var n = tr.apply(0, arguments);
        return n.tag = "[", n.children = er.normalizeChildren(n.children), n;
    };
});
var et = L((Er, ve)=>{
    "use strict";
    var Le = je();
    Le.trust = We();
    Le.fragment = ke();
    ve.exports = Le;
});
var Re = L((Pr, tt)=>{
    "use strict";
    var H = function(n) {
        if (!(this instanceof H)) throw new Error("Promise must be called with `new`");
        if (typeof n != "function") throw new TypeError("executor must be a function");
        var f = this, u = [], c = [], b = l(u, !0), h = l(c, !1), o = f._instance = {
            resolvers: u,
            rejectors: c
        }, s = typeof __setImmediate$ == "function" ? __setImmediate$ : setTimeout;
        function l(g, w) {
            return function N(m) {
                var C;
                try {
                    if (w && m != null && (typeof m == "object" || typeof m == "function") && typeof (C = m.then) == "function") {
                        if (m === f) throw new TypeError("Promise can't be resolved w/ itself");
                        y(C.bind(m));
                    } else s(function() {
                        !w && g.length === 0 && console.error("Possible unhandled promise rejection:", m);
                        for(var x = 0; x < g.length; x++)g[x](m);
                        u.length = 0, c.length = 0, o.state = w, o.retry = function() {
                            N(m);
                        };
                    });
                } catch (x) {
                    h(x);
                }
            };
        }
        function y(g) {
            var w = 0;
            function N(C) {
                return function(x) {
                    w++ > 0 || C(x);
                };
            }
            var m = N(h);
            try {
                g(N(b), m);
            } catch (C) {
                m(C);
            }
        }
        y(n);
    };
    H.prototype.then = function(n, f) {
        var u = this, c = u._instance;
        function b(l, y, g, w) {
            y.push(function(N) {
                if (typeof l != "function") g(N);
                else try {
                    h(l(N));
                } catch (m) {
                    o && o(m);
                }
            }), typeof c.retry == "function" && w === c.state && c.retry();
        }
        var h, o, s = new H(function(l, y) {
            h = l, o = y;
        });
        return b(n, c.resolvers, h, !0), b(f, c.rejectors, o, !1), s;
    };
    H.prototype.catch = function(n) {
        return this.then(null, n);
    };
    H.prototype.finally = function(n) {
        return this.then(function(f) {
            return H.resolve(n()).then(function() {
                return f;
            });
        }, function(f) {
            return H.resolve(n()).then(function() {
                return H.reject(f);
            });
        });
    };
    H.resolve = function(n) {
        return n instanceof H ? n : new H(function(f) {
            f(n);
        });
    };
    H.reject = function(n) {
        return new H(function(f, u) {
            u(n);
        });
    };
    H.all = function(n) {
        return new H(function(f, u) {
            var c = n.length, b = 0, h = [];
            if (n.length === 0) f([]);
            else for(var o = 0; o < n.length; o++)(function(s) {
                function l(y) {
                    b++, h[s] = y, b === c && f(h);
                }
                n[s] != null && (typeof n[s] == "object" || typeof n[s] == "function") && typeof n[s].then == "function" ? n[s].then(l, u) : l(n[s]);
            })(o);
        });
    };
    H.race = function(n) {
        return new H(function(f, u) {
            for(var c = 0; c < n.length; c++)n[c].then(f, u);
        });
    };
    tt.exports = H;
});
var Ie = L((Ar, ce)=>{
    "use strict";
    var ie = Re();
    typeof window != "undefined" ? (typeof window.Promise == "undefined" ? window.Promise = ie : window.Promise.prototype.finally || (window.Promise.prototype.finally = ie.prototype.finally), ce.exports = window.Promise) : typeof __global$ != "undefined" ? (typeof __global$.Promise == "undefined" ? __global$.Promise = ie : __global$.Promise.prototype.finally || (__global$.Promise.prototype.finally = ie.prototype.finally), ce.exports = __global$.Promise) : ce.exports = ie;
});
var nt = L((Tr, rt)=>{
    "use strict";
    var re = G();
    rt.exports = function(n) {
        var f = n && n.document, u, c = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        };
        function b(t) {
            return t.attrs && t.attrs.xmlns || c[t.tag];
        }
        function h(t, e) {
            if (t.state !== e) throw new Error("`vnode.state` must not be modified");
        }
        function o(t) {
            var e = t.state;
            try {
                return this.apply(e, arguments);
            } finally{
                h(t, e);
            }
        }
        function s() {
            try {
                return f.activeElement;
            } catch (t) {
                return null;
            }
        }
        function l(t, e, r, i, a, p, E) {
            for(var P = r; P < i; P++){
                var q = e[P];
                q != null && y(t, q, a, E, p);
            }
        }
        function y(t, e, r, i, a) {
            var p = e.tag;
            if (typeof p == "string") switch(e.state = {
            }, e.attrs != null && xe(e.attrs, e, r), p){
                case "#":
                    g(t, e, a);
                    break;
                case "<":
                    N(t, e, i, a);
                    break;
                case "[":
                    m(t, e, r, i, a);
                    break;
                default:
                    C(t, e, r, i, a);
            }
            else A(t, e, r, i, a);
        }
        function g(t, e, r) {
            e.dom = f.createTextNode(e.children), Y(t, e.dom, r);
        }
        var w = {
            caption: "table",
            thead: "table",
            tbody: "table",
            tfoot: "table",
            tr: "tbody",
            th: "tr",
            td: "tr",
            colgroup: "table",
            col: "colgroup"
        };
        function N(t, e, r, i) {
            var a = e.children.match(/^\s*?<(\w+)/im) || [], p = f.createElement(w[a[1]] || "div");
            r === "http://www.w3.org/2000/svg" ? (p.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + e.children + "</svg>", p = p.firstChild) : p.innerHTML = e.children, e.dom = p.firstChild, e.domSize = p.childNodes.length, e.instance = [];
            for(var E = f.createDocumentFragment(), P; P = p.firstChild;)e.instance.push(P), E.appendChild(P);
            Y(t, E, i);
        }
        function m(t, e, r, i, a) {
            var p = f.createDocumentFragment();
            if (e.children != null) {
                var E = e.children;
                l(p, E, 0, E.length, r, null, i);
            }
            e.dom = p.firstChild, e.domSize = p.childNodes.length, Y(t, p, a);
        }
        function C(t, e, r, i, a) {
            var p = e.tag, E = e.attrs, P = E && E.is;
            i = b(e) || i;
            var q = i ? P ? f.createElementNS(i, p, {
                is: P
            }) : f.createElementNS(i, p) : P ? f.createElement(p, {
                is: P
            }) : f.createElement(p);
            if (e.dom = q, E != null && Lt(e, E, i), Y(t, q, a), !k(e) && (e.text != null && (e.text !== "" ? q.textContent = e.text : e.children = [
                re("#", void 0, void 0, e.text, void 0, void 0)
            ]), e.children != null)) {
                var z = e.children;
                l(q, z, 0, z.length, r, null, i), e.tag === "select" && E != null && It(e, E);
            }
        }
        function x(t, e) {
            var r;
            if (typeof t.tag.view == "function") {
                if (t.state = Object.create(t.tag), r = t.state.view, r.$$reentrantLock$$ != null) return;
                r.$$reentrantLock$$ = !0;
            } else {
                if (t.state = void 0, r = t.tag, r.$$reentrantLock$$ != null) return;
                r.$$reentrantLock$$ = !0, t.state = t.tag.prototype != null && typeof t.tag.prototype.view == "function" ? new t.tag(t) : t.tag(t);
            }
            if (xe(t.state, t, e), t.attrs != null && xe(t.attrs, t, e), t.instance = re.normalize(o.call(t.state.view, t)), t.instance === t) throw Error("A view cannot return the vnode it received as argument");
            r.$$reentrantLock$$ = null;
        }
        function A(t, e, r, i, a) {
            x(e, r), e.instance != null ? (y(t, e.instance, r, i, a), e.dom = e.instance.dom, e.domSize = e.dom != null ? e.instance.domSize : 0) : e.domSize = 0;
        }
        function T(t, e, r, i, a, p) {
            if (!(e === r || e == null && r == null)) if (e == null || e.length === 0) l(t, r, 0, r.length, i, a, p);
            else if (r == null || r.length === 0) J(t, e, 0, e.length);
            else {
                var E = e[0] != null && e[0].key != null, P = r[0] != null && r[0].key != null, q = 0, z = 0;
                if (!E) for(; z < e.length && e[z] == null;)z++;
                if (!P) for(; q < r.length && r[q] == null;)q++;
                if (P === null && E == null) return;
                if (E !== P) J(t, e, z, e.length), l(t, r, q, r.length, i, a, p);
                else if (P) {
                    for(var V = e.length - 1, d = r.length - 1, le, $, I, U, j, Ne; V >= z && d >= q && (U = e[V], j = r[d], U.key === j.key);)U !== j && M(t, U, j, i, a, p), j.dom != null && (a = j.dom), V--, d--;
                    for(; V >= z && d >= q && ($ = e[z], I = r[q], $.key === I.key);)z++, q++, $ !== I && M(t, $, I, i, S(e, z, a), p);
                    for(; V >= z && d >= q && !(q === d || $.key !== j.key || U.key !== I.key);)Ne = S(e, z, a), Q(t, U, Ne), U !== I && M(t, U, I, i, Ne, p), ++q <= --d && Q(t, $, a), $ !== j && M(t, $, j, i, a, p), j.dom != null && (a = j.dom), z++, V--, U = e[V], j = r[d], $ = e[z], I = r[q];
                    for(; V >= z && d >= q && U.key === j.key;)U !== j && M(t, U, j, i, a, p), j.dom != null && (a = j.dom), V--, d--, U = e[V], j = r[d];
                    if (q > d) J(t, e, z, V + 1);
                    else if (z > V) l(t, r, q, d + 1, i, a, p);
                    else {
                        var Ut = a, Ke = d - q + 1, ne = new Array(Ke), Ee = 0, R = 0, Pe = 2147483647, Ae = 0, le, Te;
                        for(R = 0; R < Ke; R++)ne[R] = -1;
                        for(R = d; R >= q; R--){
                            le == null && (le = B(e, z, V + 1)), j = r[R];
                            var ee = le[j.key];
                            ee != null && (Pe = ee < Pe ? ee : -1, ne[R - q] = ee, U = e[ee], e[ee] = null, U !== j && M(t, U, j, i, a, p), j.dom != null && (a = j.dom), Ae++);
                        }
                        if (a = Ut, Ae !== V - z + 1 && J(t, e, z, V + 1), Ae === 0) l(t, r, q, d + 1, i, a, p);
                        else if (Pe === -1) for(Te = W(ne), Ee = Te.length - 1, R = d; R >= q; R--)I = r[R], ne[R - q] === -1 ? y(t, I, i, p, a) : Te[Ee] === R - q ? Ee-- : Q(t, I, a), I.dom != null && (a = r[R].dom);
                        else for(R = d; R >= q; R--)I = r[R], ne[R - q] === -1 && y(t, I, i, p, a), I.dom != null && (a = r[R].dom);
                    }
                } else {
                    var Ce = e.length < r.length ? e.length : r.length;
                    for(q = q < z ? q : z; q < Ce; q++)$ = e[q], I = r[q], !($ === I || $ == null && I == null) && ($ == null ? y(t, I, i, p, S(e, q + 1, a)) : I == null ? ae(t, $) : M(t, $, I, i, S(e, q + 1, a), p));
                    e.length > Ce && J(t, e, q, e.length), r.length > Ce && l(t, r, q, r.length, i, a, p);
                }
            }
        }
        function M(t, e, r, i, a, p) {
            var E = e.tag, P = r.tag;
            if (E === P) {
                if (r.state = e.state, r.events = e.events, Dt(r, e)) return;
                if (typeof E == "string") switch(r.attrs != null && qe(r.attrs, r, i), E){
                    case "#":
                        X(e, r);
                        break;
                    case "<":
                        Z(t, e, r, p, a);
                        break;
                    case "[":
                        _(t, e, r, i, a, p);
                        break;
                    default:
                        O(e, r, i, p);
                }
                else D(t, e, r, i, a, p);
            } else ae(t, e), y(t, r, i, p, a);
        }
        function X(t, e) {
            t.children.toString() !== e.children.toString() && (t.dom.nodeValue = e.children), e.dom = t.dom;
        }
        function Z(t, e, r, i, a) {
            e.children !== r.children ? (Ue(t, e), N(t, r, i, a)) : (r.dom = e.dom, r.domSize = e.domSize, r.instance = e.instance);
        }
        function _(t, e, r, i, a, p) {
            T(t, e.children, r.children, i, a, p);
            var E = 0, P = r.children;
            if (r.dom = null, P != null) {
                for(var q = 0; q < P.length; q++){
                    var z = P[q];
                    z != null && z.dom != null && (r.dom == null && (r.dom = z.dom), E += z.domSize || 1);
                }
                E !== 1 && (r.domSize = E);
            }
        }
        function O(t, e, r, i) {
            var a = e.dom = t.dom;
            i = b(e) || i, e.tag === "textarea" && (e.attrs == null && (e.attrs = {
            }), e.text != null && (e.attrs.value = e.text, e.text = void 0)), Mt(e, t.attrs, e.attrs, i), k(e) || (t.text != null && e.text != null && e.text !== "" ? t.text.toString() !== e.text.toString() && (t.dom.firstChild.nodeValue = e.text) : (t.text != null && (t.children = [
                re("#", void 0, void 0, t.text, void 0, t.dom.firstChild)
            ]), e.text != null && (e.children = [
                re("#", void 0, void 0, e.text, void 0, void 0)
            ]), T(a, t.children, e.children, r, null, i)));
        }
        function D(t, e, r, i, a, p) {
            if (r.instance = re.normalize(o.call(r.state.view, r)), r.instance === r) throw Error("A view cannot return the vnode it received as argument");
            qe(r.state, r, i), r.attrs != null && qe(r.attrs, r, i), r.instance != null ? (e.instance == null ? y(t, r.instance, i, p, a) : M(t, e.instance, r.instance, i, a, p), r.dom = r.instance.dom, r.domSize = r.instance.domSize) : e.instance != null ? (ae(t, e.instance), r.dom = void 0, r.domSize = 0) : (r.dom = e.dom, r.domSize = e.domSize);
        }
        function B(t, e, r) {
            for(var i = Object.create(null); e < r; e++){
                var a = t[e];
                if (a != null) {
                    var p = a.key;
                    p != null && (i[p] = e);
                }
            }
            return i;
        }
        var K = [];
        function W(t) {
            for(var e = [
                0
            ], r = 0, i = 0, a = 0, p = K.length = t.length, a = 0; a < p; a++)K[a] = t[a];
            for(var a = 0; a < p; ++a)if (t[a] !== -1) {
                var E = e[e.length - 1];
                if (t[E] < t[a]) {
                    K[a] = E, e.push(a);
                    continue;
                }
                for(r = 0, i = e.length - 1; r < i;){
                    var P = (r >>> 1) + (i >>> 1) + (r & i & 1);
                    t[e[P]] < t[a] ? r = P + 1 : i = P;
                }
                t[a] < t[e[r]] && (r > 0 && (K[a] = e[r - 1]), e[r] = a);
            }
            for(r = e.length, i = e[r - 1]; r-- > 0;)e[r] = i, i = K[i];
            return K.length = 0, e;
        }
        function S(t, e, r) {
            for(; e < t.length; e++)if (t[e] != null && t[e].dom != null) return t[e].dom;
            return r;
        }
        function Q(t, e, r) {
            var i = f.createDocumentFragment();
            fe(t, i, e), Y(t, i, r);
        }
        function fe(t, e, r) {
            for(; r.dom != null && r.dom.parentNode === t;){
                if (typeof r.tag != "string") {
                    if (r = r.instance, r != null) continue;
                } else if (r.tag === "<") for(var i = 0; i < r.instance.length; i++)e.appendChild(r.instance[i]);
                else if (r.tag !== "[") e.appendChild(r.dom);
                else if (r.children.length === 1) {
                    if (r = r.children[0], r != null) continue;
                } else for(var i = 0; i < r.children.length; i++){
                    var a = r.children[i];
                    a != null && fe(t, e, a);
                }
                break;
            }
        }
        function Y(t, e, r) {
            r != null ? t.insertBefore(e, r) : t.appendChild(e);
        }
        function k(t) {
            if (t.attrs == null || t.attrs.contenteditable == null && t.attrs.contentEditable == null) return !1;
            var e = t.children;
            if (e != null && e.length === 1 && e[0].tag === "<") {
                var r = e[0].children;
                t.dom.innerHTML !== r && (t.dom.innerHTML = r);
            } else if (t.text != null || e != null && e.length !== 0) throw new Error("Child node of a contenteditable must be trusted");
            return !0;
        }
        function J(t, e, r, i) {
            for(var a = r; a < i; a++){
                var p = e[a];
                p != null && ae(t, p);
            }
        }
        function ae(t, e) {
            var r = 0, i = e.state, a, p;
            if (typeof e.tag != "string" && typeof e.state.onbeforeremove == "function") {
                var E = o.call(e.state.onbeforeremove, e);
                E != null && typeof E.then == "function" && (r = 1, a = E);
            }
            if (e.attrs && typeof e.attrs.onbeforeremove == "function") {
                var E = o.call(e.attrs.onbeforeremove, e);
                E != null && typeof E.then == "function" && (r |= 2, p = E);
            }
            if (h(e, i), !r) ue(e), me(t, e);
            else {
                if (a != null) {
                    var P = function() {
                        r & 1 && (r &= 2, r || q());
                    };
                    a.then(P, P);
                }
                if (p != null) {
                    var P = function() {
                        r & 2 && (r &= 1, r || q());
                    };
                    p.then(P, P);
                }
            }
            function q() {
                h(e, i), ue(e), me(t, e);
            }
        }
        function Ue(t, e) {
            for(var r = 0; r < e.instance.length; r++)t.removeChild(e.instance[r]);
        }
        function me(t, e) {
            for(; e.dom != null && e.dom.parentNode === t;){
                if (typeof e.tag != "string") {
                    if (e = e.instance, e != null) continue;
                } else if (e.tag === "<") Ue(t, e);
                else {
                    if (e.tag !== "[" && (t.removeChild(e.dom), !Array.isArray(e.children))) break;
                    if (e.children.length === 1) {
                        if (e = e.children[0], e != null) continue;
                    } else for(var r = 0; r < e.children.length; r++){
                        var i = e.children[r];
                        i != null && me(t, i);
                    }
                }
                break;
            }
        }
        function ue(t) {
            if (typeof t.tag != "string" && typeof t.state.onremove == "function" && o.call(t.state.onremove, t), t.attrs && typeof t.attrs.onremove == "function" && o.call(t.attrs.onremove, t), typeof t.tag != "string") t.instance != null && ue(t.instance);
            else {
                var e = t.children;
                if (Array.isArray(e)) for(var r = 0; r < e.length; r++){
                    var i = e[r];
                    i != null && ue(i);
                }
            }
        }
        function Lt(t, e, r) {
            for(var i in e)ye(t, i, null, e[i], r);
        }
        function ye(t, e, r, i, a) {
            if (!(e === "key" || e === "is" || i == null || ge(e) || r === i && !_t(t, e) && typeof i != "object")) {
                if (e[0] === "o" && e[1] === "n") return $e(t, e, i);
                if (e.slice(0, 6) === "xlink:") t.dom.setAttributeNS("http://www.w3.org/1999/xlink", e.slice(6), i);
                else if (e === "style") Ve(t.dom, r, i);
                else if (Fe(t, e, a)) {
                    if (e === "value" && ((t.tag === "input" || t.tag === "textarea") && t.dom.value === "" + i && t.dom === s() || t.tag === "select" && r !== null && t.dom.value === "" + i || t.tag === "option" && r !== null && t.dom.value === "" + i)) return;
                    t.tag === "input" && e === "type" ? t.dom.setAttribute(e, i) : t.dom[e] = i;
                } else typeof i == "boolean" ? i ? t.dom.setAttribute(e, "") : t.dom.removeAttribute(e) : t.dom.setAttribute(e === "className" ? "class" : e, i);
            }
        }
        function Rt(t, e, r, i) {
            if (!(e === "key" || e === "is" || r == null || ge(e))) if (e[0] === "o" && e[1] === "n" && !ge(e)) $e(t, e, void 0);
            else if (e === "style") Ve(t.dom, r, null);
            else if (Fe(t, e, i) && e !== "className" && !(e === "value" && (t.tag === "option" || t.tag === "select" && t.dom.selectedIndex === -1 && t.dom === s())) && !(t.tag === "input" && e === "type")) t.dom[e] = null;
            else {
                var a = e.indexOf(":");
                a !== -1 && (e = e.slice(a + 1)), r !== !1 && t.dom.removeAttribute(e === "className" ? "class" : e);
            }
        }
        function It(t, e) {
            if ("value" in e) if (e.value === null) t.dom.selectedIndex !== -1 && (t.dom.value = null);
            else {
                var r = "" + e.value;
                (t.dom.value !== r || t.dom.selectedIndex === -1) && (t.dom.value = r);
            }
            "selectedIndex" in e && ye(t, "selectedIndex", null, e.selectedIndex, void 0);
        }
        function Mt(t, e, r, i) {
            if (r != null) for(var a in r)ye(t, a, e && e[a], r[a], i);
            var p;
            if (e != null) for(var a in e)(p = e[a]) != null && (r == null || r[a] == null) && Rt(t, a, p, i);
        }
        function _t(t, e) {
            return e === "value" || e === "checked" || e === "selectedIndex" || e === "selected" && t.dom === s() || t.tag === "option" && t.dom.parentNode === f.activeElement;
        }
        function ge(t) {
            return t === "oninit" || t === "oncreate" || t === "onupdate" || t === "onremove" || t === "onbeforeremove" || t === "onbeforeupdate";
        }
        function Fe(t, e, r) {
            return r === void 0 && (t.tag.indexOf("-") > -1 || t.attrs != null && t.attrs.is || e !== "href" && e !== "list" && e !== "form" && e !== "width" && e !== "height") && e in t.dom;
        }
        var dt = /[A-Z]/g;
        function Ht(t) {
            return "-" + t.toLowerCase();
        }
        function we(t) {
            return t[0] === "-" && t[1] === "-" ? t : t === "cssFloat" ? "float" : t.replace(dt, Ht);
        }
        function Ve(t, e, r) {
            if (e !== r) if (r == null) t.style.cssText = "";
            else if (typeof r != "object") t.style.cssText = r;
            else if (e == null || typeof e != "object") {
                t.style.cssText = "";
                for(var i in r){
                    var a = r[i];
                    a != null && t.style.setProperty(we(i), String(a));
                }
            } else {
                for(var i in r){
                    var a = r[i];
                    a != null && (a = String(a)) !== String(e[i]) && t.style.setProperty(we(i), a);
                }
                for(var i in e)e[i] != null && r[i] == null && t.style.removeProperty(we(i));
            }
        }
        function be() {
            this._ = u;
        }
        be.prototype = Object.create(null), be.prototype.handleEvent = function(t) {
            var e = this["on" + t.type], r;
            typeof e == "function" ? r = e.call(t.currentTarget, t) : typeof e.handleEvent == "function" && e.handleEvent(t), this._ && t.redraw !== !1 && (0, this._)(), r === !1 && (t.preventDefault(), t.stopPropagation());
        };
        function $e(t, e, r) {
            if (t.events != null) {
                if (t.events[e] === r) return;
                r != null && (typeof r == "function" || typeof r == "object") ? (t.events[e] == null && t.dom.addEventListener(e.slice(2), t.events, !1), t.events[e] = r) : (t.events[e] != null && t.dom.removeEventListener(e.slice(2), t.events, !1), t.events[e] = void 0);
            } else r != null && (typeof r == "function" || typeof r == "object") && (t.events = new be, t.dom.addEventListener(e.slice(2), t.events, !1), t.events[e] = r);
        }
        function xe(t, e, r) {
            typeof t.oninit == "function" && o.call(t.oninit, e), typeof t.oncreate == "function" && r.push(o.bind(t.oncreate, e));
        }
        function qe(t, e, r) {
            typeof t.onupdate == "function" && r.push(o.bind(t.onupdate, e));
        }
        function Dt(t, e) {
            do {
                if (t.attrs != null && typeof t.attrs.onbeforeupdate == "function") {
                    var r = o.call(t.attrs.onbeforeupdate, t, e);
                    if (r !== void 0 && !r) break;
                }
                if (typeof t.tag != "string" && typeof t.state.onbeforeupdate == "function") {
                    var r = o.call(t.state.onbeforeupdate, t, e);
                    if (r !== void 0 && !r) break;
                }
                return !1;
            }while (!1)
            return t.dom = e.dom, t.domSize = e.domSize, t.instance = e.instance, t.attrs = e.attrs, t.children = e.children, t.text = e.text, !0;
        }
        return function(t, e, r) {
            if (!t) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
            var i = [], a = s(), p = t.namespaceURI;
            t.vnodes == null && (t.textContent = ""), e = re.normalizeChildren(Array.isArray(e) ? e : [
                e
            ]);
            var E = u;
            try {
                u = typeof r == "function" ? r : void 0, T(t, t.vnodes, e, i, null, p === "http://www.w3.org/1999/xhtml" ? void 0 : p);
            } finally{
                u = E;
            }
            t.vnodes = e, a != null && s() !== a && typeof a.focus == "function" && a.focus();
            for(var P = 0; P < i.length; P++)i[P]();
        };
    };
});
var Me = L((zr, it)=>{
    "use strict";
    it.exports = nt()(window);
});
var ut = L((Or, at)=>{
    "use strict";
    var ft = G();
    at.exports = function(n, f, u) {
        var c = [], b = !1, h = !1;
        function o() {
            if (b) throw new Error("Nested m.redraw.sync() call");
            b = !0;
            for(var y = 0; y < c.length; y += 2)try {
                n(c[y], ft(c[y + 1]), s);
            } catch (g) {
                u.error(g);
            }
            b = !1;
        }
        function s() {
            h || (h = !0, f(function() {
                h = !1, o();
            }));
        }
        s.sync = o;
        function l(y, g) {
            if (g != null && g.view == null && typeof g != "function") throw new TypeError("m.mount(element, component) expects a component, not a vnode");
            var w = c.indexOf(y);
            w >= 0 && (c.splice(w, 2), n(y, [], s)), g != null && (c.push(y, g), n(y, ft(g), s));
        }
        return {
            mount: l,
            redraw: s
        };
    };
});
var se = L((jr, lt)=>{
    "use strict";
    var rr = Me();
    lt.exports = ut()(rr, requestAnimationFrame, console);
});
var _e = L((Lr, ct)=>{
    "use strict";
    ct.exports = function(n) {
        if (Object.prototype.toString.call(n) !== "[object Object]") return "";
        var f = [];
        for(var u in n)c(u, n[u]);
        return f.join("&");
        function c(b, h) {
            if (Array.isArray(h)) for(var o = 0; o < h.length; o++)c(b + "[" + o + "]", h[o]);
            else if (Object.prototype.toString.call(h) === "[object Object]") for(var o in h)c(b + "[" + o + "]", h[o]);
            else f.push(encodeURIComponent(b) + (h != null && h !== "" ? "=" + encodeURIComponent(h) : ""));
        }
    };
});
var de = L((Rr, st)=>{
    "use strict";
    st.exports = Object.assign || function(n, f) {
        f && Object.keys(f).forEach(function(u) {
            n[u] = f[u];
        });
    };
});
var oe = L((Ir, ot)=>{
    "use strict";
    var nr = _e(), ir = de();
    ot.exports = function(n, f) {
        if (/:([^\/\.-]+)(\.{3})?:/.test(n)) throw new SyntaxError("Template parameter names *must* be separated");
        if (f == null) return n;
        var u = n.indexOf("?"), c = n.indexOf("#"), b = c < 0 ? n.length : c, h = u < 0 ? b : u, o = n.slice(0, h), s = {
        };
        ir(s, f);
        var l = o.replace(/:([^\/\.-]+)(\.{3})?/g, function(x, A, T) {
            return delete s[A], f[A] == null ? x : T ? f[A] : encodeURIComponent(String(f[A]));
        }), y = l.indexOf("?"), g = l.indexOf("#"), w = g < 0 ? l.length : g, N = y < 0 ? w : y, m = l.slice(0, N);
        u >= 0 && (m += n.slice(u, b)), y >= 0 && (m += (u < 0 ? "?" : "&") + l.slice(y, w));
        var C = nr(s);
        return C && (m += (u < 0 && y < 0 ? "?" : "&") + C), c >= 0 && (m += n.slice(c)), g >= 0 && (m += (c < 0 ? "" : "&") + l.slice(g)), m;
    };
});
var pt = L((Mr, ht)=>{
    "use strict";
    var fr = oe();
    ht.exports = function(n, f, u) {
        var c = 0;
        function b(s) {
            return new f(s);
        }
        b.prototype = f.prototype, b.__proto__ = f;
        function h(s) {
            return function(l, y) {
                typeof l != "string" ? (y = l, l = l.url) : y == null && (y = {
                });
                var g = new f(function(C, x) {
                    s(fr(l, y.params), y, function(A) {
                        if (typeof y.type == "function") if (Array.isArray(A)) for(var T = 0; T < A.length; T++)A[T] = new y.type(A[T]);
                        else A = new y.type(A);
                        C(A);
                    }, x);
                });
                if (y.background === !0) return g;
                var w = 0;
                function N() {
                    --w == 0 && typeof u == "function" && u();
                }
                return m(g);
                function m(C) {
                    var x = C.then;
                    return C.constructor = b, C.then = function() {
                        w++;
                        var A = x.apply(C, arguments);
                        return A.then(N, function(T) {
                            if (N(), w === 0) throw T;
                        }), m(A);
                    }, C;
                }
            };
        }
        function o(s, l) {
            for(var y in s.headers)if (({
            }).hasOwnProperty.call(s.headers, y) && l.test(y)) return !0;
            return !1;
        }
        return {
            request: h(function(s, l, y, g) {
                var w = l.method != null ? l.method.toUpperCase() : "GET", N = l.body, m = (l.serialize == null || l.serialize === JSON.serialize) && !(N instanceof n.FormData), C = l.responseType || (typeof l.extract == "function" ? "" : "json"), x = new n.XMLHttpRequest, A = !1, T = x, M, X = x.abort;
                x.abort = function() {
                    A = !0, X.call(this);
                }, x.open(w, s, l.async !== !1, typeof l.user == "string" ? l.user : void 0, typeof l.password == "string" ? l.password : void 0), m && N != null && !o(l, /^content-type$/i) && x.setRequestHeader("Content-Type", "application/json; charset=utf-8"), typeof l.deserialize != "function" && !o(l, /^accept$/i) && x.setRequestHeader("Accept", "application/json, text/*"), l.withCredentials && (x.withCredentials = l.withCredentials), l.timeout && (x.timeout = l.timeout), x.responseType = C;
                for(var Z in l.headers)({
                }).hasOwnProperty.call(l.headers, Z) && x.setRequestHeader(Z, l.headers[Z]);
                x.onreadystatechange = function(_) {
                    if (!A && _.target.readyState === 4) try {
                        var O = _.target.status >= 200 && _.target.status < 300 || _.target.status === 304 || /^file:\/\//i.test(s), D = _.target.response, B;
                        if (C === "json" ? !_.target.responseType && typeof l.extract != "function" && (D = JSON.parse(_.target.responseText)) : (!C || C === "text") && D == null && (D = _.target.responseText), typeof l.extract == "function" ? (D = l.extract(_.target, l), O = !0) : typeof l.deserialize == "function" && (D = l.deserialize(D)), O) y(D);
                        else {
                            try {
                                B = _.target.responseText;
                            } catch (W) {
                                B = D;
                            }
                            var K = new Error(B);
                            K.code = _.target.status, K.response = D, g(K);
                        }
                    } catch (W) {
                        g(W);
                    }
                }, typeof l.config == "function" && (x = l.config(x, l, s) || x, x !== T && (M = x.abort, x.abort = function() {
                    A = !0, M.call(this);
                })), N == null ? x.send() : typeof l.serialize == "function" ? x.send(l.serialize(N)) : N instanceof n.FormData ? x.send(N) : x.send(JSON.stringify(N));
            }),
            jsonp: h(function(s, l, y, g) {
                var w = l.callbackName || "_mithril_" + Math.round(Math.random() * 10000000000000000) + "_" + c++, N = n.document.createElement("script");
                n[w] = function(m) {
                    delete n[w], N.parentNode.removeChild(N), y(m);
                }, N.onerror = function() {
                    delete n[w], N.parentNode.removeChild(N), g(new Error("JSONP request failed"));
                }, N.src = s + (s.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(l.callbackKey || "callback") + "=" + encodeURIComponent(w), n.document.documentElement.appendChild(N);
            })
        };
    };
});
var yt = L((_r, mt)=>{
    "use strict";
    var ar = Ie(), ur = se();
    mt.exports = pt()(window, ar, ur.redraw);
});
var He = L((dr, gt)=>{
    "use strict";
    gt.exports = function(n) {
        if (n === "" || n == null) return {
        };
        n.charAt(0) === "?" && (n = n.slice(1));
        for(var f = n.split("&"), u = {
        }, c = {
        }, b = 0; b < f.length; b++){
            var h = f[b].split("="), o = decodeURIComponent(h[0]), s = h.length === 2 ? decodeURIComponent(h[1]) : "";
            s === "true" ? s = !0 : s === "false" && (s = !1);
            var l = o.split(/\]\[?|\[/), y = c;
            o.indexOf("[") > -1 && l.pop();
            for(var g = 0; g < l.length; g++){
                var w = l[g], N = l[g + 1], m = N == "" || !isNaN(parseInt(N, 10));
                if (w === "") {
                    var o = l.slice(0, g).join();
                    u[o] == null && (u[o] = Array.isArray(y) ? y.length : 0), w = u[o]++;
                } else if (w === "__proto__") break;
                if (g === l.length - 1) y[w] = s;
                else {
                    var C = Object.getOwnPropertyDescriptor(y, w);
                    C != null && (C = C.value), C == null && (y[w] = C = m ? [] : {
                    }), y = C;
                }
            }
        }
        return c;
    };
});
var he = L((Hr, wt)=>{
    "use strict";
    var lr = He();
    wt.exports = function(n) {
        var f = n.indexOf("?"), u = n.indexOf("#"), c = u < 0 ? n.length : u, b = f < 0 ? c : f, h = n.slice(0, b).replace(/\/{2,}/g, "/");
        return h ? (h[0] !== "/" && (h = "/" + h), h.length > 1 && h[h.length - 1] === "/" && (h = h.slice(0, -1))) : h = "/", {
            path: h,
            params: f < 0 ? {
            } : lr(n.slice(f + 1, c))
        };
    };
});
var xt = L((Dr, bt)=>{
    "use strict";
    var cr = he();
    bt.exports = function(n) {
        var f = cr(n), u = Object.keys(f.params), c = [], b = new RegExp("^" + f.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(h, o, s) {
            return o == null ? "\\" + h : (c.push({
                k: o,
                r: s === "..."
            }), s === "..." ? "(.*)" : s === "." ? "([^/]+)\\." : "([^/]+)" + (s || ""));
        }) + "$");
        return function(h) {
            for(var o = 0; o < u.length; o++)if (f.params[u[o]] !== h.params[u[o]]) return !1;
            if (!c.length) return b.test(h.path);
            var s = b.exec(h.path);
            if (s == null) return !1;
            for(var o = 0; o < c.length; o++)h.params[c[o].k] = c[o].r ? s[o + 1] : decodeURIComponent(s[o + 1]);
            return !0;
        };
    };
});
var Et = L((Ur, Nt)=>{
    "use strict";
    var sr = G(), or = je(), hr = Ie(), pr = oe(), qt = he(), mr = xt(), Ct = de(), De = {
    };
    Nt.exports = function(n, f) {
        var u;
        function c(w, N, m) {
            if (w = pr(w, N), u != null) {
                u();
                var C = m ? m.state : null, x = m ? m.title : null;
                m && m.replace ? n.history.replaceState(C, x, g.prefix + w) : n.history.pushState(C, x, g.prefix + w);
            } else n.location.href = g.prefix + w;
        }
        var b = De, h, o, s, l, y = g.SKIP = {
        };
        function g(w, N, m) {
            if (w == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
            var C = 0, x = Object.keys(m).map(function(O) {
                if (O[0] !== "/") throw new SyntaxError("Routes must start with a `/`");
                if (/:([^\/\.-]+)(\.{3})?:/.test(O)) throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");
                return {
                    route: O,
                    component: m[O],
                    check: mr(O)
                };
            }), A = typeof __setImmediate$ == "function" ? __setImmediate$ : setTimeout, T = hr.resolve(), M = !1, X;
            if (u = null, N != null) {
                var Z = qt(N);
                if (!x.some(function(O) {
                    return O.check(Z);
                })) throw new ReferenceError("Default route doesn't match any known routes");
            }
            function _() {
                M = !1;
                var O = n.location.hash;
                g.prefix[0] !== "#" && (O = n.location.search + O, g.prefix[0] !== "?" && (O = n.location.pathname + O, O[0] !== "/" && (O = "/" + O)));
                var D = O.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent).slice(g.prefix.length), B = qt(D);
                Ct(B.params, n.history.state);
                function K() {
                    if (D === N) throw new Error("Could not resolve default route " + N);
                    c(N, null, {
                        replace: !0
                    });
                }
                W(0);
                function W(S) {
                    for(; S < x.length; S++)if (x[S].check(B)) {
                        var Q = x[S].component, fe = x[S].route, Y = Q, k = l = function(J) {
                            if (k === l) {
                                if (J === y) return W(S + 1);
                                h = J != null && (typeof J.view == "function" || typeof J == "function") ? J : "div", o = B.params, s = D, l = null, b = Q.render ? Q : null, C === 2 ? f.redraw() : (C = 2, f.redraw.sync());
                            }
                        };
                        Q.view || typeof Q == "function" ? (Q = {
                        }, k(Y)) : Q.onmatch ? T.then(function() {
                            return Q.onmatch(B.params, D, fe);
                        }).then(k, K) : k("div");
                        return;
                    }
                    K();
                }
            }
            return u = function() {
                M || (M = !0, A(_));
            }, typeof n.history.pushState == "function" ? (X = function() {
                n.removeEventListener("popstate", u, !1);
            }, n.addEventListener("popstate", u, !1)) : g.prefix[0] === "#" && (u = null, X = function() {
                n.removeEventListener("hashchange", _, !1);
            }, n.addEventListener("hashchange", _, !1)), f.mount(w, {
                onbeforeupdate: function() {
                    return C = C ? 2 : 1, !(!C || De === b);
                },
                oncreate: _,
                onremove: X,
                view: function() {
                    if (!(!C || De === b)) {
                        var O = [
                            sr(h, o.key, o)
                        ];
                        return b && (O = b.render(O[0])), O;
                    }
                }
            });
        }
        return g.set = function(w, N, m) {
            l != null && (m = m || {
            }, m.replace = !0), l = null, c(w, N, m);
        }, g.get = function() {
            return s;
        }, g.prefix = "#!", g.Link = {
            view: function(w) {
                var N = w.attrs.options, m = {
                }, C, x;
                Ct(m, w.attrs), m.selector = m.options = m.key = m.oninit = m.oncreate = m.onbeforeupdate = m.onupdate = m.onbeforeremove = m.onremove = null;
                var A = or(w.attrs.selector || "a", m, w.children);
                return (A.attrs.disabled = Boolean(A.attrs.disabled)) ? (A.attrs.href = null, A.attrs["aria-disabled"] = "true", A.attrs.onclick = null) : (C = A.attrs.onclick, x = A.attrs.href, A.attrs.href = g.prefix + x, A.attrs.onclick = function(T) {
                    var M;
                    typeof C == "function" ? M = C.call(T.currentTarget, T) : C == null || typeof C != "object" || typeof C.handleEvent == "function" && C.handleEvent(T), M !== !1 && !T.defaultPrevented && (T.button === 0 || T.which === 0 || T.which === 1) && (!T.currentTarget.target || T.currentTarget.target === "_self") && !T.ctrlKey && !T.metaKey && !T.shiftKey && !T.altKey && (T.preventDefault(), T.redraw = !1, g.set(x, null, N));
                }), A;
            }
        }, g.param = function(w) {
            return o && w != null ? o[w] : o;
        }, g;
    };
});
var At = L((Fr, Pt)=>{
    "use strict";
    var yr = se();
    Pt.exports = Et()(window, yr);
});
var jt = L((Vr, Ot)=>{
    "use strict";
    var pe = et(), Tt = yt(), zt = se(), F = function() {
        return pe.apply(this, arguments);
    };
    F.m = pe;
    F.trust = pe.trust;
    F.fragment = pe.fragment;
    F.mount = zt.mount;
    F.route = At();
    F.render = Me();
    F.redraw = zt.redraw;
    F.request = Tt.request;
    F.jsonp = Tt.jsonp;
    F.parseQueryString = He();
    F.buildQueryString = _e();
    F.parsePathname = he();
    F.buildPathname = oe();
    F.vnode = G();
    F.PromisePolyfill = Re();
    Ot.exports = F;
});
var gr = Bt(jt());
var export_default = gr.default;
const root = document.body;
let count = 0;
const Hello = {
    view: function() {
        return export_default("main", [
            export_default("h1", {
                class: "title"
            }, "My first app"),
            export_default("button", {
                onclick: function() {
                    count++;
                }
            }, count + " clicks"), 
        ]);
    }
};
export_default.mount(root, Hello);
