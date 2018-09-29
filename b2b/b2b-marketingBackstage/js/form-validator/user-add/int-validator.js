/**
 * Created by jc on 2017/7/4.
 */
$(function() {
    $.formValidator.initConfig({formID:"ajaxform",theme:"126",
        onError:function(msg,obj,errorlist){
            //var errrhtml = msg.errorMessage;
            //rop_all.alertList(errrhtml)
        }
    });

    /*$("#company").formValidator({onShow:"请输入密码",onFocus:"至少1个长度",onCorrect:"密码合法"})
        .inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"});
     */


    //所属公司
    $("#company").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择所属公司'
            }else{
                return true;
            }
        }});
    //所属部门
    $("#department").formValidator({})
        .inputValidator({min:1,onError:"请填写所属部门！"})
        // .regexValidator({regExp:"intege1",dataType:"enum",onError:"所属部门应为正整数"})
    $("#user").formValidator({})
        .inputValidator({min:1,onError:"请填写登录名"})
    // .regexValidator({regExp:"intege1",dataType:"enum",onError:"登录名应为正整数"})
    $("#username").formValidator({})
        .inputValidator({min:1,onError:"请填写真实姓名"})
    // .regexValidator({regExp:"intege1",dataType:"enum",onError:"真实姓名应为正整数"})
    $("#pw").formValidator({onShow:"请输入初始密码",onFocus:"至少1个长度",onCorrect:"密码合法"})
        .inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"});
    //性别
    $("#gender").formValidator({})
        .functionValidator({fun:function(val){
            if(val == ''){
                return '请选择性别'
            }else{
                return true;
            }
        }});
});