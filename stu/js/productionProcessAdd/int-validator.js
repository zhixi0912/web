/**
 * Created by admin on 2016/11/23.
 */
var rop_all = new XinJinAlert();

rop_all.int([{
    text:'确定',
    callback:'close'
}] )

function fs(id){

    var o = document.getElementById(id);
    var index = $(o).parents('.swiper-slide').attr('group');
    var active = myswiper.activeIndex;
    if(!!index && active != index){
        myswiper.slideTo(index, 1000,false);
        window.setTimeout(function(){
            if(o.tagName == 'SELECT'){
                $(o).select2('open')
            }else{
                o.focus();
            }
        },1000)
    }else{
        if(o.tagName == 'SELECT'){
            $(o).select2('open')
        }else{
            o.focus();
        }
    }


}

$(function() {
    $.formValidator.initConfig({formID:"ajaxform",theme:"126",
        onError:function(msg,obj,errorlist){
            var errrhtml = "<ul class='err-list'>";
            $.map(errorlist,function(msg){
                errrhtml+="<li onclick='fs(\""+msg.errorId+"\")' id='"+msg.errorId+"'>" + msg.errorMessage + "</li>";
            });
            errrhtml +="</ul>"
            rop_all.alertList(errrhtml)
        }
    });
    //产品系列
    $("#shopList").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择产品系列'
            }else{
                return true;
            }
        }});
    //下单日期
    $("#startTime").formValidator({})
        .inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"请选择日期！"},onError:"请选择日期！"})
        .functionValidator({fun:isDate});
    //单据状态
    $("#state").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择单据状态'
            }else{
                return true;
            }
        }});

    //产品名称
    $("#shopName").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择产品名称'
            }else{
                return true;
            }
        }});


    //规格
    $("#specifications").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择规格'
            }else{
                return true;
            }
        }});
    //生产釉线
    $("#productionLine").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择生产釉线'
            }else{
                return true;
            }
        }});
    // .inputValidator({min:1,onError:"请填写生产釉线！"})
    //.regexValidator({regExp:"intege1",dataType:"enum",onError:"生产釉线应为正整数"})

    //生产窑号
    $("#productionHouse").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择生产窑号'
            }else{
                return true;
            }
        }});
    // .inputValidator({min:1,onError:"请填写生产窑号！"})
    // .regexValidator({regExp:"intege1",dataType:"enum",onError:"生产窑号应为正整数"})

    //底标
    $("#bottomMark").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择底标'
            }else{
                return true;
            }
        }});
    //生产数量
    $("#productionNum").formValidator({})
        .inputValidator({min:1,onError:"请填写生产数量！"})
        .regexValidator({regExp:"intege1",dataType:"enum",onError:"生产数量应为正整数"})
    //单位
    $("#company").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择单位'
            }else{
                return true;
            }
        }});    


    //干燥出口温度
    $("#temperature_1").formValidator({})
        .inputValidator({min:1,onError:"请填写干燥出口温度！"})
        .regexValidator({regExp:"intege1",dataType:"enum",onError:"干燥出口温度应为正整数"})
    //干燥出口温度
    $("#temperature_2").formValidator({})
        .inputValidator({min:1,onError:"请填写干燥出口温度！"})
        .regexValidator({regExp:"intege1",dataType:"enum",onError:"干燥出口温度应为正整数"})
    //喷水量
    $("#water_1").formValidator({})
        .inputValidator({min:1,onError:"请填写喷水量！"})
        .regexValidator({regExp:"intege1",dataType:"enum",onError:"喷水量应为正整数"})
    //喷水量
    $("#water_2").formValidator({})
        .inputValidator({min:1,onError:"请填写喷水量！"})
        .regexValidator({regExp:"intege1",dataType:"enum",onError:"喷水量应为正整数"})
    //喷墨文件编号
    $("#workId").formValidator({})
        .inputValidator({min:1,onError:"请填写喷墨文件编号！"})
        .regexValidator({regExp:"letter_n",dataType:"enum",onError:"喷墨文件编号应为字母数字"})
    //打印要求
    $("#print").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择打印要求'
            }else{
                return true;
            }
        }});
    //抛光要求
    $("#requirement").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择抛光要求'
            }else{
                return true;
            }
        }});
});

