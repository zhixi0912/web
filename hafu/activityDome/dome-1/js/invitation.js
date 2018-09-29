/**
 * Created by jc on 2018/6/14.
 */


var showText = '<h4 class="weui_media_title"><img src="images/user-icon-1.png"><p>Evan</p></h4><p class="weui_media_desc">送你一份COSTA新人好礼！</p><p class="weui_media_desc">点击领取礼券</p><p class="weui_media_desc">放入COSTA会员卡吧。</p>';
var msg = '2'
var invitation = new Vue({
    el:"#invitation",
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
        // $(".bg-box").show("normal");
        // $(".btn-h2").show("normal");
        // $(".ex-btn").css({background:"#ffffff"});
        setTimeout(function () {
            window.location.href="invitation-2.html";
        },1000)
    })
    $(".bg-box").click(function () {
        // $(this).hide();
        // $(".btn-h2").hide();
        // $(".ex-btn").css({background:"inherit"});
    })
})