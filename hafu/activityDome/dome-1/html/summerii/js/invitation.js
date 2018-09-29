/**
 * Created by jc on 2018/6/14.
 */

$(function () {
    var h = $(window).height();
    var w = $(window).width();
    $(".bg-img").height(h);

    $(".ex-btn").click(function () {
        $(".bg-box").show("normal");
        $(".btn-h2").show("normal");
        $(".ex-btn").css({background:"#ffffff"});
    });
});