!function (o) {
    function n(i) {
        if (t[i])return t[i].exports;
        var e = t[i] = {i: i, l: !1, exports: {}};
        return o[i].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }

    var t = {};
    n.m = o, n.c = t, n.i = function (o) {
        return o
    }, n.d = function (o, t, i) {
        n.o(o, t) || Object.defineProperty(o, t, {configurable: !1, enumerable: !0, get: i})
    }, n.n = function (o) {
        var t = o && o.__esModule ? function () {
            return o.default
        } : function () {
            return o
        };
        return n.d(t, "a", t), t
    }, n.o = function (o, n) {
        return Object.prototype.hasOwnProperty.call(o, n)
    }, n.p = "/", n(n.s = 33)
}({
    0: function (o, n) {
        o.exports = window.$
    }, 1: function (o, n) {
    }, 19: function (o, n, t) {
        "use strict";
        function i() {
            var o = c()(".value-list"), n = null, e = function (o, n) {
                o.velocity({translateX: [0, n], opacity: [1, 0]}, {duration: 2e3})
            };
            t.i(s.b)(o) && (n = o.find(".value-item"), e(n.eq(0), -200), e(n.eq(1), -100), e(n.eq(2), 0), e(n.eq(3), 100), e(n.eq(4), 200), c()(window).unbind("scroll", i))
        }

        function e() {
            var o = c()(".care-list");
            t.i(s.b)(o, 300) && (o.find(".care-3").velocity({translateY: [0, 1e3]}, {
                easing: "ease",
                duration: 1e3
            }), o.find(".care-2").velocity({translateY: [0, 1e3]}, {
                delay: 500,
                easing: "ease",
                duration: 1e3
            }), c()(window).unbind("scroll", e))
        }

        function a() {
            var o = c()(".solution-list"), n = null, i = function (o) {
                c()(o).find("p").velocity({opacity: 1}), c()("#clipPath").find("rect").velocity({width: 1240}), c()(o).find(".solution-img").mouseenter(function () {
                    4 !== c()(o).index() && (c()(o).addClass("item-hover"), setTimeout(function () {
                        c()(o).removeClass("item-hover")
                    }, 700))
                })
            }, e = function (o, n) {
                o.eq(n).velocity({top: -100}, {
                    delay: 200 * n, duration: 300, easing: "ease-out", begin: function (o) {
                        c()(o).css({display: "block"})
                    }
                }).velocity({top: 0}, {easing: "ease-in", duration: 200}).velocity({top: -30}, {
                    duration: 100,
                    easing: "ease-out"
                }).velocity({top: 0}, {easing: "ease-in", duration: 100}).velocity({top: -10}, {
                    duration: 50,
                    easing: "ease-out"
                }).velocity({top: 0}, {easing: "ease-in", duration: 50, complete: i})
            };
            t.i(s.b)(o) && (n = o.find(".solution-item"), e(n, 0), e(n, 1), e(n, 2), e(n, 3), c()(window).unbind("scroll", a))
        }

        n.a = i, n.b = e, n.c = a;
        var r = t(0), c = t.n(r), s = t(2)
    }, 2: function (o, n, t) {
        "use strict";
        function i(o) {
            var n = r()(window).scrollTop(), t = void 0, i = void 0, e = 700;
            return "number" == typeof o && (e = o, o = !1), function () {
                o && c();
                var a = r()("header"), s = void 0, l = r()(window).scrollTop();
                if (l < e) a.velocity("stop"), r.a.Velocity.hook(a, "top", "0"); else if (l <= e + 145) s = e - l, r.a.Velocity.hook(a, "top", s + "px"); else {
                    var d = l - n;
                    i = 0 === d ? t : d < 0, i ? i !== t && a.velocity({top: -55}, {queue: !1}) : i !== t && a.velocity({top: -145}, {queue: !1})
                }
                n = l, t = i
            }
        }

        function e(o) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = r()(window).scrollTop(),
                i = t + r()(window).height(), e = r()(o).offset().top + n, a = e + r()(o).height() - n;
            return a >= t && a <= i || e >= t && e <= i
        }

        n.a = i, n.b = e;
        var a = t(0), r = t.n(a);
        r()(document).on("dragstart", function (o) {
            o.preventDefault()
        });
        var c = function () {
            var o = r()("#banner"), n = void 0, t = r()(window).scrollTop();
            t < 250 ? r.a.Velocity.hook(o, "top", "145px") : t <= 845 && (n = 145 - .8 * (t - 250), r.a.Velocity.hook(o, "top", n + "px"))
        }
    }, 20: function (o, n, t) {
        "use strict";
        function i(o, n) {
            if (!(o instanceof n))throw new TypeError("Cannot call a class as a function")
        }

        var e = t(0), a = t.n(e), r = Object.assign || function (o) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t)Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i])
                }
                return o
            }, c = function () {
            function o(o, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, i.key, i)
                }
            }

            return function (n, t, i) {
                return t && o(n.prototype, t), i && o(n, i), n
            }
        }(), s = function () {
            function o() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, o);
                var t = {};
                this.options = r({}, n, t), this.initBackdrop(), this.initModal()
            }

            return c(o, [{
                key: "open", value: function () {
                    o.isOpen || (o.isOpen = !0, this.drawBackdrop(), this.drawModal())
                }
            }, {
                key: "close", value: function () {
                    o.isOpen = !1, console.log(this.modalContainer), this.backdrop.remove(), this.modalContainer.detach(), a()("html").css({overflow: "auto"})
                }
            }, {
                key: "initBackdrop", value: function () {
                    this.backdrop = a()("<div>"), this.backdrop.addClass("modal-backdrop").click(this.close.bind(this))
                }
            }, {
                key: "drawBackdrop", value: function () {
                    a()("html").css({overflow: "hidden"}), a()("body").append(this.backdrop), this.backdrop.velocity({
                        opacity: [.8, 0],
                        scale: [1, 0]
                    }, {duration: 200})
                }
            }, {
                key: "initModal", value: function () {
                    var o = this;
                    this.modalContainer = a()("<div>"), this.modalContainer.addClass("modal-container");
                    var n = a()('<a href="#">');
                    n.text("×"), this.modalContainer.html('\n      <div class="video-container">\n        <video x-webkit-airplay controls controlsList="nodownload">\n          <source src="https://video.maimai100.cn/promote-video.mp4"></source>\n        </video>\n      </div>\n    ').append(n), this.modalContainer.find("a").click(this.close.bind(this)), this.modalContainer.find("video").on("ended", function () {
                        o.close()
                    })
                }
            }, {
                key: "drawModal", value: function () {
                    var o = this;
                    a()("body").append(this.modalContainer), this.modalContainer.velocity({scale: [1, 0]}, {
                        duration: 200,
                        complete: function () {
                            o.modalContainer.find("video").get(0).play()
                        }
                    })
                }
            }]), o
        }();
        s.isOpen = !1, n.a = s
    }, 27: function (o, n) {
    }, 33: function (o, n, t) {
        o.exports = t(4)
    }, 4: function (o, n, t) {
        "use strict";
        function i() {
            var o = c()(".solution-list");
            o.find(".solution-img:not(.last)").hover(function () {
                var o = c()(this);
                o.data("bouncing") || (o.data("bouncing", !0), o.velocity("stop", !0).velocity({top: -100}, {
                    duration: 300,
                    easing: "ease-out"
                }).velocity({top: 0}, {easing: "ease-in", duration: 200}).velocity({top: -30}, {
                    duration: 100,
                    easing: "ease-out"
                }).velocity({top: 0}, {easing: "ease-in", duration: 100}).velocity({top: -10}, {
                    duration: 50,
                    easing: "ease-out"
                }).velocity({top: 0}, {
                    easing: "ease-in", duration: 50, complete: function () {
                        o.data("bouncing", !1)
                    }
                }))
            }), o.find(".solution-img.last").hover(function () {
                c()(this).find(".more").velocity({rotateZ: "180deg"})
            }, function () {
                c()(this).find(".more").velocity({rotateZ: "0deg"})
            }), c()("#wise-care").find(".top").find("img").hover(function () {
                c()(this).velocity({rotateZ: "180deg"})
            }, function () {
                c()(this).velocity({rotateZ: "0deg"})
            }), c()("#wise-care-add").find(".top").find("img").hover(function () {
                c()(this).velocity({rotateZ: "180deg"})
            }, function () {
                c()(this).velocity({rotateZ: "0deg"})
            })
        }

        Object.defineProperty(n, "__esModule", {value: !0});
        var e = t(1), a = (t.n(e), t(27)), r = (t.n(a), t(0)), c = t.n(r), s = t(19), l = t(2), d = t(20);
        c()(function () {
            c()(window).scroll(s.a), c()(window).scroll(s.b), c()(window).scroll(s.c), c()(window).scroll(t.i(l.a)(!0)), c()(window).trigger("scroll");
            var o = new d.a;
            if (c()("#play").click(function () {
                    o.open()
                }), c()(".bulb").hover(function () {
                    var o = this;
                    c()(this).addClass("swing"), setTimeout(function () {
                        c()(o).removeClass("swing")
                    }, 200)
                }), c()("#showEn").click(function () {
                    document.webL10n.setLanguage("en-US")
                }), c()("#showZh").click(function () {
                    document.webL10n.setLanguage("zh")
                }), c()("#showjp").click(function () {
                    document.webL10n.setLanguage("jp")
                }), !window.AnimationEvent) {
                var n = c()(".banner-text");
                n.find(".focus-zh").velocity({translateX: [0, -400], opacity: 1}, {
                    delay: 800,
                    duration: 700
                }), n.find(".focus-en").velocity({translateX: [0, -400], opacity: 1}, {
                    delay: 1e3,
                    duration: 700
                }), n.find(".video").velocity({translateX: [0, -400], opacity: 1}, {delay: 1200, duration: 700}), i()
            }
        })
    }
});
//# sourceMappingURL=index.cbff78a9.js.map