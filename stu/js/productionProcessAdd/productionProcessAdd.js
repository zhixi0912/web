/**
 * Created by admin on 2017/1/8.
 */

btnJson=['工艺要求','釉料','丝网印花','包装纸箱'];
var glazeArry=['glaze_type','glaze_cylinder_id','glaze_no_id','proportion','proportion_tolerance','velocity','velocity_tolerance','weight','weight_tolerance'];//釉料
var floralArry=['screen_number','flower_glaze_number','print_proportion','print_proportion_tolerance','screen_aperture'];//丝网印花
var wrapArry=['product_id','grade','carton_printing_requirement'];//包装纸箱
function delLine(v) {
    del_this_tr( v.parents("tr")[0]);
};
function bindAdd(){
    $("#add-line-1").click(function () {
        var str = $("#tab-line-1").html();
        $(this).parents("tbody").prev("tbody").append(str);
        int_name_and_id(glazeArry); //初始化id和name
        bind_validator();//绑定验证
        $(".xj-sel").select2({});
    });
    $("#add-line-2").click(function () {
        var str = $("#tab-line-2").html();
        $(this).parents("tbody").prev("tbody").append(str);
        int_name_and_id(floralArry); //初始化id和name
        bind_validator();//绑定验证
        $(".xj-sel").select2({});
    });
    $("#add-line-3").click(function () {
        var str = $("#tab-line-3").html();
        $(this).parents("tbody").prev("tbody").append(str);
        int_name_and_id(wrapArry); //初始化id和name

        $(".xj-sel").select2({});
    });
}
// 根据className 初始化 id 和 name
function setformedata(sClass){
    $('.'+sClass).each(function(index){
        var _this =this;
        this.id=sClass+'_'+index;
        this.name=sClass+'['+index+']';
        if($(this).nextAll('.help-block').length>0){ //如果有期报错提示 则不再次创建
            var spa = $(this).nextAll('.help-block')[0];
            spa.id= sClass+'_'+index+'Tip';
           return ;
        }
        // 创建报错提示
        var spa = document.createElement('span');
        spa.className = 'help-block';
        spa.id= sClass+'_'+index+'Tip';
        $(this).parent().append(spa);
    })
}

function int_name_and_id(arr){
    var len = arr.length;
    for(var i =0;i<len;i++){
        setformedata(arr[i]);
    }
}
function updata(draft){
    if(draft == 2 ){
        initConfig_setting.needValidator =true;
        var ret = $.formValidator.pageIsValid("1");
    }else if(draft == 1){
        initConfig_setting.needValidator =false;
    }


    if(draft == 1 || ret){
        $('#ajaxform').submit();
    }
}



$(function(){
    $('#ajaxform').ajaxForm({

        success: function(rsp){
            if(rsp.status == 'ok'){
                //goToSuccess(rsp.data.create,rsp.data.detail,rsp.data.list)
				if(rsp.draft == 1)
					goToSuccess(rsp.data.create, '继续新增', rsp.data.detail, '继续编辑');
				else
					goToSuccess(rsp.data.create, '继续新增', rsp.data.detail, '查看详情');
            }else{
				modalErrorMsg(rsp.data)
            }
        },
        error:function (rsp) {
            var data={'name':'ceshi','name1':'ceshi1','name2':'ceshi2'};
            modalErrorMsg(rsp.responseJSON)
        },
        complete:function(){
            //do something
        },
        //url: url,                 //默认是form的action， 如果申明，则会覆盖
        //type: type,               //默认是form的method（get or post），如果申明，则会覆盖
        //dataType: null,           //html(默认), xml, script, json...接受服务端返回的类型
        //clearForm: true,          //成功提交后，清除所有表单元素的值
        //resetForm: true,          //成功提交后，重置所有表单元素的值
        timeout: 6000               //限制请求的时间，当请求大于3秒后，跳出请求
    });

    myswiper = new Swiper('.swiper-container', {
        pagination: '#myTab',
        loop:false,
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            btnJson = btnJson ? btnJson : '';
            if(btnJson){
                return '<li role="presentation" class="'+className+'"><a href="#profile-1"  role="tab" data-toggle="tab" aria-controls="profile-1" aria-expanded="true">'+btnJson[index]+'</a></li>';
            }else{
                return '<div class="pad-btn pad-btn-paging ' + className + '">第' + (index + 1) + '页</div>';
            }

        }
    });
    bindAdd();
    //-----初始化 id 和 name-----

    //----釉料
    int_name_and_id(glazeArry);
    //----丝网印花
    int_name_and_id(floralArry);
    //----包装纸箱
    int_name_and_id(wrapArry);

    //-----初始化 id 和 name---------end ----
    bind_validator();//绑定验证

   /* var mydate = new Date();
    var t=mydate.toLocaleDateString();
    $(".datepicker-today").val(t);*/


    $(".xj-sel").select2({});
    $( ".datepicker").datepicker({
        needDay:true,
        changeMonth: true, //显示月份
        changeYear: true, //显示年份
        showButtonPanel: true, //显示按钮
        dateFormat: 'yy-mm-dd', //日期格式
    });
    $('.datepicker-times').datetimepicker({
        needDay:true,
        changeMonth: true, //显示月份
        changeYear: true, //显示年份
        showButtonPanel: true, //显示按钮
        timeFormat: "HH:mm:ss",
        dateFormat: "yy-mm-dd"
    });
    
    /*以下代码将英文改成了中文*/
    jQuery(function($) {
        $.datepicker.regional['zh-CN'] = {
            closeText : '关闭',
            prevText : '<上月',
            nextText: '下月>',
            currentText : '今天',
            monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月',
                '九月', '十月', '十一月', '十二月' ],
            monthNamesShort : [ '一', '二', '三', '四', '五', '六', '七', '八',
                '九', '十', '十一', '十二' ],
            dayNames : [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
            dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
            dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
            dateFormat : 'yy-mm-dd',
            weekHeader : '周',
            firstDay : 1,
            isRTL : false,
            showMonthAfterYear : true,
            yearSuffix : '年'
        };
        $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
    });
})
