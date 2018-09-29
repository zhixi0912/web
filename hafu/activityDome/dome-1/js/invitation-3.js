/**
 * Created by jc on 2018/6/14.
 */


var showText = '<h4 class="weui_media_title"><img src="images/user-icon-1.png"><p>Evan</p></h4><p class="weui_media_desc ">亲爱的COSTA会员</p><p class="weui_media_desc weui_media_desc-h3">本次福利只限新会员领取哦！</p><p class="weui_media_desc">来COSTA品尝夏日新品吧！</p><p class="weui_media_desc">即有机会发出入会邀约</p><p class="weui_media_desc">get买一赠一礼券！</p>';
var msg = '4'
var invitation3 = new Vue({
    el:"#invitation3",
    data:{
        text:showText,
        btnMsg:"images/btn-icon-"+msg+".png",
    }
})

$(function () {
    var h = $(window).height();
    var w = $(window).width();
    $(".bg-img").height(h);

    // $(".ex-btn").click(function () {
    //     $(".bg-box").show("normal");
    //     $(".btn-h2").show("normal");
    //     $(".ex-btn").css({background:"#ffffff"});
    // })
    // $(".bg-box").click(function () {
    //     $(this).hide();
    //     $(".btn-h2").hide();
    //     $(".ex-btn").css({background:"inherit"});
    // })
})