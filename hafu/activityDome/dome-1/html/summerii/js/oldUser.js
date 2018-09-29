/**
 * Created by jc on 2018/6/13.
 */

$(function () {
    var h = $(window).height();
    var w = $(window).width();
    $(".bg-img").height(h);
    // $(".btn-h2-text").width(w);

    $(".ex-btn").click(function () {
        $(".bg-box").show("normal");
        $(".btn-h2").show("normal");
    })
    $(".bg-box").click(function () {
        $(this).hide();
        $(".btn-h2").hide();
    })
})