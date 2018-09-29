/**
 * Created by jc on 2017/9/25.
 */


$(function() {
    $.formValidator.initConfig({
        formID:"form1",debug:true
            ,onSuccess:function(){
                // alert("校验组1通过验证，不过我不给它提交");
                window.location.href="/web/b2b/b2b-marketingBackstage/game-add02.html"
            }
            ,onError:function(){
                alert("具体错误，请来找我")
            }
    });


    //活动名称
    $("#game-name").formValidator({})
        .inputValidator({min:1,onError:"请填写活动名称！"})
    //活动描述
    $("#game-describe").formValidator({})
        .inputValidator({min:1,onError:"请填写活动描述！"})
    //分享标题
    $("#game-title").formValidator({})
        .inputValidator({min:1,onError:"请填写分享标题！"})
    //分享文案
    $("#game-text").formValidator({})
        .inputValidator({min:1,onError:"请填写分享文案！"})

    $.formValidator.initConfig({
        validatorGroup:"2",formID:"form2",debug:true
        ,onSuccess:function(){
            alert("校验组2通过验证，不过我不给它提交");
        }
        ,onError:function(){
            alert("具体错误，请来找我")
        }
    });
});