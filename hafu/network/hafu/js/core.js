!function (t) {
    function e(o) {
        if (n[o])return n[o].exports;
        var i = n[o] = {i: o, l: !1, exports: {}};
        return t[o].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }

    var n = {};
    e.m = t, e.c = n, e.i = function (t) {
        return t
    }, e.d = function (t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: o})
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/", e(e.s = 39)
}({
    0: function (t, e) {
        t.exports = window.$
    }, 1: function (t, e) {
    }, 10: function (t, e, n) {
        "use strict";
        function o() {
            n.i(l.b)(".flip-wrap", 200) && (a()(".flip-wrap").addClass("regular"), a()(window).unbind("scroll", o))
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(0), a = n.n(i), s = n(17), c = n(16), l = n(2), r = n(1), d = (n.n(r), n(25));
        n.n(d);
        a()(function () {
            a()(window).scroll(o), a()(window).scroll(n.i(l.a)(500)), n.i(c.a)(), new s.a(".swiper-container").init()
        })
    }, 16: function (t, e, n) {
        "use strict";
        function o(t, e, o, i) {
            n.i(l.a)(i).forEach(function (n, i) {
                var a = c()('<div class="item item' + (i + 1) + '"></div>');
                0 === n.tls ? a.text(n.text) : 1 === n.tls ? a.text(n.desc).data("desc", n.desc).data("all", n.text).addClass("medium").append(c()(' <i class="icon-more_ic2"></i>')) : a.text(n.desc).data("desc", n.desc).data("all", n.text).addClass("more").append(c()(' <i class="icon-more_ic2"></i>')), a.prependTo(t).shotBullet(e, o[i])
            })
        }

        function i(t) {
            var e = c()(window).width() / 2 + 220;
            o(t, e, r), setTimeout(function () {
                !t.data("hovered") && t.find(".item").length <= 5 && i(t)
            }, 8e3)
        }

        function a(t) {
            var e = c()(window).width() / 2 + 220;
            o(t, -e, d, !0), setTimeout(function () {
                !t.data("hovered") && t.find(".item").length <= 5 && a(t)
            }, 8e3)
        }

        var s = n(0), c = n.n(s), l = n(18);
        c.a.fn.shotBullet = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = c()(this), o = n.parent(),
                s = function () {
                    if (console.log(n.attr("class")), o.data("hovered", !0), n.velocity("stop", !0), n.hasClass("more")) {
                        var t = n.data("all");
                        n.addClass("mask"), n.html(c()("<div></div>").html(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + t).addClass("move")), n.velocity({width: 330})
                    }
                    n.hasClass("medium") && n.velocity({width: 330}, {
                        complete: function () {
                            n.text(n.data("all"))
                        }
                    })
                }, l = function () {
                    o.data("hovered", !1), n.hasClass("more") && (n.removeClass("mask"), n.empty().text(n.data("desc")).append(c()(' <i class="icon-more_ic2"></i>')), n.velocity({width: 220})), n.hasClass("medium") && n.velocity({width: 220}, {
                        begin: function () {
                            n.text(n.data("desc")).append(c()(' <i class="icon-more_ic2"></i>'))
                        }
                    });
                    var e = 300, s = 3e3;
                    t > 0 ? (e = c()(window).width() - n.offset().left, s = 1e4 * e / t) : (e = n.offset().left + 220, s = -1 * e * 1e4 / t), n.velocity({
                        translateX: t,
                        opacity: 8
                    }, {
                        duration: s, easing: "linear", complete: function () {
                            !o.data("hovered") && o.find(".item").length <= 5 && (t > 0 ? i(o) : a(o)), n.remove()
                        }
                    })
                };
            !function () {
                n.velocity({translateX: [t, 0], opacity: [8, 0]}, {
                    duration: 1e4,
                    delay: e,
                    easing: "linear",
                    complete: function () {
                        n.remove()
                    }
                })
            }(), n.hover(s, l)
        };
        var r = [1100, 200, 1800, 800, 2400], d = [700, 1900, 0, 1400, 800];
        e.a = function () {
            var t = c()("#technology>.center"), e = t.find(".right-box"), n = t.find(".left-box");
            i(e), a(n)
        }
    }, 17: function (t, e, n) {
        "use strict";
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        var i = n(0), a = n.n(i), s = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }

                return function (e, n, o) {
                    return n && t(e.prototype, n), o && t(e, o), e
                }
            }(), c = [{left: -60, width: 180, height: 240, top: 120, zIndex: 10}, {
                left: 40,
                width: 240,
                height: 320,
                top: 80,
                zIndex: 20
            }, {left: 200, width: 300, height: 400, top: 40, zIndex: 30}, {
                left: 420,
                width: 360,
                height: 480,
                top: 0,
                zIndex: 40
            }, {left: 700, width: 300, height: 400, top: 40, zIndex: 30}, {
                left: 920,
                width: 240,
                height: 320,
                top: 80,
                zIndex: 20
            }, {left: 1080, width: 180, height: 240, top: 120, zIndex: 10}],
            l = [{left: 72, width: 144, height: 192, top: 96, zIndex: 10}, {
                left: 152,
                width: 192,
                height: 256,
                top: 64,
                zIndex: 20
            }, {left: 280, width: 240, height: 320, top: 32, zIndex: 30}, {
                left: 456,
                width: 288,
                height: 384,
                top: 0,
                zIndex: 40
            }, {left: 680, width: 240, height: 320, top: 32, zIndex: 30}, {
                left: 856,
                width: 192,
                height: 256,
                top: 64,
                zIndex: 20
            }, {left: 984, width: 144, height: 192, top: 96, zIndex: 10}], r = function () {
                function t(e) {
                    o(this, t), this.container = a()(e)
                }

                return s(t, [{
                    key: "init", value: function () {
                        this.containerWidth = this.container.width();
                        for (var t = this.items = this.container.find(".item"), e = t.length, n = [], o = 0; o < e; o++)n.push(o);
                        var i = a()(window).width() > 1320 ? c : l;
                        t.each(function (t, e) {
                            t > 6 ? a()(e).css(i[6]).css({zIndex: 1, opacity: 0}) : a()(e).css(i[t])
                        }), t.click(function (n) {
                            var o = a()(this).index();
                            console.log(o);
                            var s = [o - 3 < 0 ? e + o - 3 : o - 3, o - 2 < 0 ? e + o - 2 : o - 2, o - 1 < 0 ? e + o - 1 : o - 1, o, o + 1 >= e ? o + 1 - e : o + 1, o + 2 >= e ? o + 2 - e : o + 2, o + 3 >= e ? o + 3 - e : o + 3];
                            t.each(function (t, e) {
                                s.indexOf(t) > -1 ? a()(e).css(i[s.indexOf(t)]).css({opacity: 1}) : a()(e).css(i[6]).css({opacity: 0})
                            })
                        })
                    }
                }]), t
            }();
        e.a = r
    }, 18: function (t, e, n) {
        "use strict";
        function o(t) {
            var e = [];
            return i(11, 5).map(function (n) {
                e.push(a[t ? n + 11 : n])
            }), e
        }

        function i(t, e) {
            var n, o = [], i = [];
            for (n = 0; n < t; n++)o.push(n);
            for (n = 0; n < e; n++) {
                var a = Math.floor(Math.random() * o.length);
                i.push(o[a]), o.splice(a, 1)
            }
            return i
        }

        e.a = o;
        var a = [{text: "智能节能电源管理系统", tls: 0}, {text: "太阳能网关技术", tls: 0}, {
            text: "高效无线充电技术",
            tls: 0
        }, {text: "自适应无线网络及数据传输方案", desc: "自适应无线网络及数据", tls: 1}, {text: "一体化弧面超声成型工艺", tls: 0}, {
            text: "射频自动识别技术",
            tls: 0
        }, {text: "高精度定距超低模糊区域非接触式无线射频识别技术", desc: "高精度定距超低模糊区", tls: 2}, {text: "自适应硬件适配模块", tls: 0}, {
            text: "人体工学双色铸塑工艺",
            tls: 0
        }, {text: "基于微服务应用架构的“智慧照护+”管理系统", desc: "基于微服务应用架构", tls: 2}, {
            text: "基于Restfull规范+Outh2.0的健康云开放平台",
            desc: "基于Restfull规范",
            tls: 2
        }, {text: "与业务系统无缝连接的呼叫中心客服系统", desc: "与业务系统无缝连接", tls: 1}, {
            text: "基于SocketIO的硬件状态实时监控平台",
            desc: "基于SocketIO的硬件状态",
            tls: 1
        }, {text: "Hadoop+Spark健康档案大数据分析系统", desc: "Hadoop+Spark健康", tls: 2}, {
            text: "基于Docker的容器云基础架构",
            desc: "基于Docker的容器云",
            tls: 1
        }, {
            text: "Gitlab+Docker 持续集成交付系统",
            desc: "Gitlab+Docker ",
            tls: 1
        }, {text: "基于ElasticSearch+Logstash+Kibana的集中式日志分析系统", desc: "基于ElasticSearch", tls: 2}, {
            text: "核心运动&睡眠算法",
            tls: 0
        }, {text: "呼叫服务智能管理调度算法", desc: "呼叫服务智能管理", tls: 1}, {
            text: "TensorFlow 室内外精准定位学习算法",
            desc: "TensorFlow 室内外",
            tls: 1
        }, {text: "床垫离床智能判定算法", tls: 0}, {text: "照护计划智能生成学习算法", desc: "照护计划智能生成", tls: 1}]
    }, 2: function (t, e, n) {
        "use strict";
        function o(t) {
            var e = s()(window).scrollTop(), n = void 0, o = void 0, i = 700;
            return "number" == typeof t && (i = t, t = !1), function () {
                t && c();
                var a = s()("header"), l = void 0, r = s()(window).scrollTop();
                if (r < i) a.velocity("stop"), s.a.Velocity.hook(a, "top", "0"); else if (r <= i + 145) l = i - r, s.a.Velocity.hook(a, "top", l + "px"); else {
                    var d = r - e;
                    o = 0 === d ? n : d < 0, o ? o !== n && a.velocity({top: -55}, {queue: !1}) : o !== n && a.velocity({top: -145}, {queue: !1})
                }
                e = r, n = o
            }
        }

        function i(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = s()(window).scrollTop(),
                o = n + s()(window).height(), i = s()(t).offset().top + e, a = i + s()(t).height() - e;
            return a >= n && a <= o || i >= n && i <= o
        }

        e.a = o, e.b = i;
        var a = n(0), s = n.n(a);
        s()(document).on("dragstart", function (t) {
            t.preventDefault()
        });
        var c = function () {
            var t = s()("#banner"), e = void 0, n = s()(window).scrollTop();
            n < 250 ? s.a.Velocity.hook(t, "top", "145px") : n <= 845 && (e = 145 - .8 * (n - 250), s.a.Velocity.hook(t, "top", e + "px"))
        }
    }, 25: function (t, e) {
    }, 39: function (t, e, n) {
        t.exports = n(10)
    }
});
//# sourceMappingURL=core.cbff78a9.js.map