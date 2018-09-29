/**
 * Created by jc on 2017/7/3.
 */
$(function () {
    $("#my_button").click(function () {
        updata();
    });

    $('#ajaxform').ajaxForm({
        success: function(rsp){
            /*if(rsp.status == 'ok'){
                //goToSuccess(rsp.data.create,rsp.data.detail,rsp.data.list)
                console.log("1");
            }else{
                //modalErrorMsg(rsp.data)
                console.log(rsp.data);
            }*/
            console.log(rsp.data);
        },
        error:function (rsp) {
           // var data={'name':'ceshi','name1':'ceshi1','name2':'ceshi2'};
            //modalErrorMsg(rsp.responseJSON)
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
})

//提交事件
function updata(){
    var ret = $.formValidator.pageIsValid("1");
    if(ret){
        $('#ajaxform').submit();
    }
}

