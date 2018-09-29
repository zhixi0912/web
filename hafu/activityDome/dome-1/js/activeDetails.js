/**
 * Created by jc on 2018/6/13.
 */

var imgSrc = "3";
var msg = [{
        textB:"XXX已入会并获赠COSTA好礼",
        time:"YYYY年MM月XX日 13:00:00",
        srcUserB:"images/logo-icon-1.png",
        voucher:"XX券"
    },
    {
        textB:"XXX已入会并获赠COSTA好礼",
        time:"YYYY年MM月XX日 13:00:00",
        srcUserB:"images/logo-icon-1.png",
        voucher:"XX券"
    }];
var showText = '<h4 class="weui_media_title">活动细则</h4><p class="weui_media_desc">会员消费指定酷乐冰或冷萃系列新品，即可点击消费成功通知模板消息链接发起活动；</p><p class="weui_media_desc">活动发起者邀请5位好友入会，即可获赠买一赠一礼券；</p><p class="weui_media_desc">新用户接受邀请入会，可随机领取新人入会礼券，每个用户限领一张；</p><p class="weui_media_desc">优惠券使用规则详见优惠券描述。</p>';
var activeDetail = new Vue({
    el:"#activeDetail",
    data:{
        image:{
            srcTitle:"images/detils-top-title.png",
            srcL:"images/l-box-bg.png",
            srcR:"images/r-box-bg.png",
            srcTop:"images/"+imgSrc+".gif",
            srcUserA:"images/user-icon-1.png",
            userName:"Evan,",
            textA:"再邀请X位好友入会，即可获赠买一赠一礼券"
        },
        msg:msg,
        text:showText
    }
})
