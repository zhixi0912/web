/**
 * Created by admin on 2017/2/14.
 */

//变量名和系统变量名app冲突
/*
var app = new Vue({
    el: '#vueArea',
    data: {
        show_btn:'',
        lists:[],
        opts:[],
        char:[{"name":"等于","value":"char_dengyu"},{"name":"包含","value":"char_baohan"}],
        num:[{"name":"等于","value":"num_dengyu"},{"name":"大于","value":"num_dayu"},{"name":"小于","value":"num_xiaoyu"}],
        date:[{"name":"等于","value":"date_dengyu"},{"name":"大于","value":"date_dayu"},{"name":"小于","value":"date_xiaoyu"}]
    },
    methods: {
        deleteLine:function(i){
            app.lists.splice(i,1);
        }
    }
});
function setTab(num){
    app.show_btn = num;
    app.lists=[];
    if(num == 1){
        $.ajax({
            type: "POST",
            timeout: 60000,
            url:'js/dPushSettingAdd/fwq.json',
            data: '',
            success: function (obj) {
                app.opts= obj;
            }
        })
    }else{
        $.ajax({
            type: "POST",
            timeout: 60000,
            url:'js/dPushSettingAdd/fwq2.json',
            data: '',
            success: function (obj) {
                app.opts= obj;
            }
        })
    }
}
function changeSecond(o){
    var type = $(o).find('option:selected').attr('typeChange');
    $(o).parent().parent().find('.bind_with_date').hide();
    $(o).parent().parent().find('.bind_with_num').hide();
    $(o).parent().parent().find('.bind_with_char').hide();
    $(o).parent().parent().find('.bind_with_'+ type).show();
}
function addToWin(){
    app.lists.push("1");
    setTimeout(function(){
        $('.vue_intsel').select2({});
        $('.datepicker ').datepicker();
    },500)
}
*/

var appRemind = new Vue({
    el: '#vueArea',
    data: {
        show_btn:'',
        lists:[],
        opts:[],
        /*
        char:[{"name":"等于","value":"char_dengyu"},{"name":"包含","value":"char_baohan"}],
        num:[{"name":"等于","value":"num_dengyu"},{"name":"大于","value":"num_dayu"},{"name":"小于","value":"num_xiaoyu"}],
        date:[{"name":"等于","value":"date_dengyu"},{"name":"大于","value":"date_dayu"},{"name":"小于","value":"date_xiaoyu"}]
        */
        char:[{"name":"等于","value":"="},{"name":"包含","value":"like"}],
        num:[{"name":"等于","value":"="},{"name":"大于","value":">"},{"name":"小于","value":"<"}],
        date:[{"name":"等于","value":"="},{"name":"大于","value":">"},{"name":"小于","value":"<"}]
    },
    methods: {
        deleteLine:function(i){
            appRemind.lists.splice(i,1);
        }
    }
});

function setTab(num){
    appRemind.show_btn = num;
    appRemind.lists=[];

    $('#ji_div_push_sql').html('');

    $.ajax({
        type: "POST",
        timeout: 60000,
        //url:'js/dPushSettingAdd/fwq.json',
        //url:'/static/pc/js/dPushSettingAdd/fwq.json',
        url: uGetTableField + '?id=' + num,
        data: '',
        success: function (obj) {
            appRemind.opts= obj;
        }
    });

    /*
     if(num == 1){
     $.ajax({
     type: "POST",
     timeout: 60000,
     //url:'js/dPushSettingAdd/fwq.json',
     url:'/static/pc/js/dPushSettingAdd/fwq.json',
     data: '',
     success: function (obj) {
     appRemind.opts= obj;
     }
     })
     }else{
     $.ajax({
     type: "POST",
     timeout: 60000,
     //url:'js/dPushSettingAdd/fwq2.json',
     url:'/static/pc/js/dPushSettingAdd/fwq2.json',
     data: '',
     success: function (obj) {
     appRemind.opts= obj;
     }
     })
     }
     */
}
function setTab_edit(){
    appRemind.show_btn = intAskValue;
    appRemind.lists=intDataList;

    $.ajax({
        type: "POST",
        timeout: 60000,
        //url:'js/dPushSettingAdd/fwq.json',
        //url:'/static/pc/js/dPushSettingAdd/fwq.json',
        url: uGetTableField + '?id=' + intAskValue,
        data: '',
        success: function (obj) {
            appRemind.opts= obj;

            setTimeout(function(){
                $('.vue_intsel').select2({});
                $('.datepicker ').datepicker();
            },500);
        }
    });
}
if ( intFlag == 'create' ) {
    //;
}
else if ( intFlag == 'edit' ) {
    setTab_edit();
}
else {
    //;
}
function changeSecond(o){
    var type = $(o).find('option:selected').attr('typeChange');
    $(o).parent().parent().find('.bind_with_date').each(function(){
        $(this).hide();
        $(this).attr('disabled','disabled');
        $(this).find('select').attr('disabled','disabled');
    })
    $(o).parent().parent().find('.bind_with_num').each(function(){
        $(this).hide();
        $(this).attr('disabled','disabled');
        $(this).find('select').attr('disabled','disabled');
    })
    $(o).parent().parent().find('.bind_with_char').each(function(){
        $(this).hide();
        $(this).attr('disabled','disabled');
        $(this).find('select').attr('disabled','disabled');
    })
    $(o).parent().parent().find('.bind_with_'+ type).each(function(){
        $(this).show();
        $(this).removeAttr('disabled');
        $(this).find('select').removeAttr('disabled');
    })
}
function addToWin(){
    appRemind.lists.push("1");
    setTimeout(function(){
        $('.vue_intsel').select2({});
        $('.datepicker ').datepicker();
    },500)
}

