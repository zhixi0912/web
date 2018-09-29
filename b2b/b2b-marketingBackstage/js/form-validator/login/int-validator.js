/**
 * Created by jc on 2017/7/3.
 */

$(function() {
    $.formValidator.initConfig({formID:"ajaxform",
        onError:function(msg,obj,errorlist){
            //var errrhtml = msg.errorMessage;
            //rop_all.alertList(errrhtml)
        }
    });
    //用户名
    $("#user").formValidator({onShowText:"请输入用户名",onShow:"请输入用户名,只有输入\"maodong\"才是对的",onFocus:"用户名至少5个字符,最多10个字符",onCorrect:"该用户名可以注册"})
        .inputValidator({min:5,max:10,onError:"你输入的用户名非法,请确认"})
        .regexValidator({regExp:"username",dataType:"enum",onError:"用户名格式不正确"})
        /*.ajaxValidator({
            dataType : "json",
            async : true,
            url : "http://www.yhuan.com/Handler.ashx",
            success : function(data){
                if( data == "0" ) return true;
                return "该用户名不可用，请更换用户名";
            },
            buttons: $("#button"),
            error: function(jqXHR, textStatus, errorThrown){alert("服务器没有返回数据，可能服务器忙，请重试"+errorThrown);},
            onError : "该用户名不可用，请更换用户名",
            onWait : "正在对用户名进行合法性校验，请稍候..."
        }).defaultPassed();*/
    $("#pw").formValidator({onShow:"请输入密码",onFocus:"至少1个长度",onCorrect:"密码合法"})
        .inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"});

});