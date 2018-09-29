/**
 * Created by jc on 2017/7/4.
 */
$(function () {


})

//提交事件
function updata(){
    var ret = $.formValidator.pageIsValid("1");
    if(ret){
        $('#ajaxform').submit();
    }
}