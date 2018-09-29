!function (n) {
    function t(i) {
        if (e[i])return e[i].exports;
        var o = e[i] = {i: i, l: !1, exports: {}};
        return n[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var e = {};
    t.m = n, t.c = e, t.i = function (n) {
        return n
    }, t.d = function (n, e, i) {
        t.o(n, e) || Object.defineProperty(n, e, {configurable: !1, enumerable: !0, get: i})
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, t.p = "/", t(t.s = 37)
}({
    0: function (n, t) {
        n.exports = window.$
    }, 1: function (n, t) {
    }, 2: function (n, t, e) {
        "use strict";
        function i(n) {
            var t = a()(window).scrollTop(), e = void 0, i = void 0, o = 700;
            return "number" == typeof n && (o = n, n = !1), function () {
                n && c();
                var s = a()("header"), d = void 0, r = a()(window).scrollTop();
                if (r < o) s.velocity("stop"), a.a.Velocity.hook(s, "top", "0"); else if (r <= o + 145) d = o - r, a.a.Velocity.hook(s, "top", d + "px"); else {
                    var l = r - t;
                    i = 0 === l ? e : l < 0, i ? i !== e && s.velocity({top: -55}, {queue: !1}) : i !== e && s.velocity({top: -145}, {queue: !1})
                }
                t = r, e = i
            }
        }

        function o(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, e = a()(window).scrollTop(),
                i = e + a()(window).height(), o = a()(n).offset().top + t, s = o + a()(n).height() - t;
            return s >= e && s <= i || o >= e && o <= i
        }

        t.a = i, t.b = o;
        var s = e(0), a = e.n(s);
        a()(document).on("dragstart", function (n) {
            n.preventDefault()
        });
        var c = function () {
            var n = a()("#banner"), t = void 0, e = a()(window).scrollTop();
            e < 250 ? a.a.Velocity.hook(n, "top", "145px") : e <= 845 && (t = 145 - .8 * (e - 250), a.a.Velocity.hook(n, "top", t + "px"))
        }
    }, 23: function (n, t) {
    }, 3: function (n, t, e) {
        "use strict";
        function i() {
            e.i(d.b)(".needs", 200) && (l()(".needs").find(".need-item div").addClass("swingY"), l()(window).unbind("scroll", i))
        }

        function o() {
            e.i(d.b)(".solution-map", 200) && (setTimeout(function () {
                l()(".solution-map").find(".center-item").css({opacity: 1}).addClass("drop"), l()(".solution-map").find("svg").delayCss({
                    opacity: 1,
                    transitionDuration: "1s"
                }, 300), l()(".solution-map").find(".info").delayCss({display: "block"}, 5100), l()(".solution-map").find(".solution-item").eq(0).addClass("item1").prevObject.eq(1).addClass("item2").prevObject.eq(2).addClass("item3").prevObject.eq(3).addClass("item4").prevObject.eq(4).addClass("item5")
            }, 300), l()(window).unbind("scroll", o))
        }

        function s() {
            if (e.i(d.b)(".assistant-detail", 200)) {
                var n = l()(".assistant-detail");
                setTimeout(function () {
                    n.find(".img").css({opacity: 1}).addClass("fadeLeft"), n.find(".info").css({opacity: 1}).addClass("fadeRight"), setTimeout(function () {
                        n.find(".item-on-table").css({opacity: 1, transform: "none"})
                    }, 400), setTimeout(function () {
                        n.find(".shadow-box").addClass("waveCircle"), l()("#assistant").addClass("bg")
                    }, 1400), n.find(".circle-dot").css({display: "block"}).eq(0).delayCss({opacity: 1}, 1400).prevObject.eq(1).delayCss({opacity: .9}, 1500).prevObject.eq(2).delayCss({opacity: .8}, 1600).prevObject.eq(3).delayCss({opacity: .7}, 1700).prevObject.eq(4).delayCss({opacity: .6}, 2400)
                }, 300), l()(window).unbind("scroll", s)
            }
        }

        function a() {
            e.i(d.b)(".case-list", 200) && (l()(".case-list").find(".case-item").slice(0, 3).velocity({translateY: [0, 500]}, {duration: 1e3}), l()(".case-list").find(".case-item").slice(3).velocity({translateY: [0, 500]}, {
                delay: 500,
                duration: 1e3
            }), l()(window).unbind("scroll", a))
        }

        function c() {
            l()(".solution-map").find(".solution-item").map(function (n, t) {
                switch (l()(t).css({opacity: 1}), l()(t).find(".info").css({transform: "none"}), n) {
                    case 0:
                        return l()(t).css({left: 155, top: -120});
                    case 1:
                        return l()(t).css({left: 416, top: 70});
                    case 2:
                        return l()(t).css({left: 377, top: 316});
                    case 3:
                        return l()(t).css({left: -7, top: 316});
                    case 4:
                        return l()(t).css({left: -106, top: 70})
                }
            })
        }

        t.a = i, t.b = o, t.c = s, t.d = a, t.e = c;
        var d = e(2), r = e(0), l = e.n(r);
        l.a.fn.delayCss = function (n, t) {
            var e = this;
            return setTimeout(function () {
                e.css(n)
            }, t), this
        }
    }, 37: function (n, t, e) {
        n.exports = e(8)
    }, 8: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = e(0), o = e.n(i), s = e(3), a = e(2), c = e(1), d = (e.n(c), e(23));
        e.n(d);
        o()(function () {
            o()(window).scroll(s.a), o()(window).scroll(s.b), o()(window).scroll(s.c), o()(window).scroll(s.d), o()(window).scroll(e.i(a.a)(500)), o()(window).trigger("scroll"), o()(".need-container").find(".need-item").find("div").mouseenter(function () {
                o()(this).find("img").addClass("bounceLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    o()(this).removeClass("bounceLeft")
                })
            }), window.AnimationEvent || e.i(s.e)()
        })
    }
});
//# sourceMappingURL=community.cbff78a9.js.map