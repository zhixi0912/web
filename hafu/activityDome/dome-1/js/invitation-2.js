/**
 * Created by jc on 2018/6/14.
 */


var showText = '<h4 class="weui_media_title weui_media_title-2"><img src="images/logo-icon-2.png"></h4><p class="weui_media_desc weui_media_desc-h1">恭喜您，成功领取</p><p class="weui_media_desc weui_media_desc-h2">夏日新品升杯券</p><p class="weui_media_desc">进入COSTA会员卡-我的礼券</p><p class="weui_media_desc weui_media_desc-2">查收属于你的夏日福利！</p>';
var msg = '3'
var invitation2 = new Vue({
    el:"#invitation2",
    data:{
        text:showText,
        btnMsg:"images/btn-icon-"+msg+".png",
    }
})

$(function () {
    var h = $(window).height();
    var w = $(window).width();
    $(".bg-img").height(h);
    // $(".btn-h2-text").width(w);

    $(".ex-btn").click(function () {
        $(".bg-box").show("normal");
        $(".btn-h2").show("normal");
        $(".ex-btn").css({background:"#ffffff"});
    })
    $(".bg-box").click(function () {
        $(this).hide();
        $(".btn-h2").hide();
        $(".ex-btn").css({background:"inherit"});
    })
})