/**
 * Created by admin on 2016/12/22.
 */
// 数字键盘
$.fn.numpad.defaults.gridTpl = '<table class="table modal-content"></table>';
$.fn.numpad.defaults.backgroundTpl = '<div class="modal-backdrop in"></div>';
$.fn.numpad.defaults.displayTpl = '<input type="text" class="form-control" />';
$.fn.numpad.defaults.buttonNumberTpl = '<button type="button" class="btn btn-default"></button>';
$.fn.numpad.defaults.buttonFunctionTpl = '<button type="button" class="btn"></button>';
$.fn.numpad.defaults.onKeypadCreate = function () {
    $(this).find('.done').addClass('btn-primary');
};

// 数字键盘 ---end ----


// 提交成功跳轉
function goToSuccess() {
    var left_url = arguments[0] ? arguments[0] : '';    //左侧按钮url
    var left_msg = arguments[1] ? arguments[1] : '继续新增';           //左侧按钮信息
    var right_url = arguments[2] ? arguments[2] : '';  //右侧按钮url
    var right_msg = arguments[3] ? arguments[3] : '查看详情';         //右侧按钮信息
    window.parent.afresh("{{route('admin_system_success')}}?left_url=" + encodeURIComponent(left_url) + "&left_msg=" + encodeURIComponent(left_msg) + "&right_url=" + encodeURIComponent(right_url) + "&right_msg=" + encodeURIComponent(right_msg));
}


// class名：  erpDate：选择日期   erpTime：时间   erpDateTime：日期和时间

jQuery(function ($) {
    var currYear = (new Date()).getFullYear();
    var opt = {};
    opt.date = {preset: 'date'};
    opt.datetime = {preset: 'datetime'};
    opt.time = {preset: 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: true,
        nowText: "今天",
        startYear: currYear - 100, //开始年份
        endYear: currYear + 100 //结束年份
    };

    $(".erpDate").mobiscroll($.extend(opt['date'], opt['default']));
    var optDateTime = $.extend(opt['datetime'], opt['default']);
    var optTime = $.extend(opt['time'], opt['default']);
    $(".erpDateTime").mobiscroll(optDateTime).datetime(optDateTime);
    $(".erpTime").mobiscroll(optTime).time(optTime);

    //高级搜索栏被键盘挡住时的滚动事件
    /*$("#wg-gjss-content").find("input").focus(function(){
        if(!$(this).attr("readonly")){
            $(this).parents(".form-group").addClass("height-auto");
        }
    });
    $("#wg-gjss-content").find("input").focusout(function(){
        if(!$(this).attr("readonly")){
            $(this).parents(".form-group").removeClass("height-auto");
        }

    });*/
});

//pad的提醒按钮
$.ajax({
    type: 'POST',
    url: '/admin/reply/all_list',
    success: function (data) {
        var str = '<a href="/admin/reply" class="gTimeWrap">提醒(<i class="gTime">' + data.list + '</i>)</a>';
        $(".coal-top-r.col-lg-6.pull-right").prepend(str);
    }
});

//提醒闪烁特效
setInterval(function () {
    $.ajax({
        type: 'POST',
        url: '/admin/reply/all_list',
        success: function (data) {
            if (data.list > $('.gTime').html()) {
                $('.gTime').html(data.list)
                if (!!$('#lay')) {
                    $('<div id="lay" class="cbg" onclick="nowarn()"></div>').appendTo($('body'));
                }
            }
        }
    })
}, 30000)

function nowarn() {
    $('#lay').remove();
}

