/**
 * Created by jc on 2017/7/4.
 */
$(function () {
    $(".b2b-sel").select2();
    $(".b2b-updata").click(function () {
        updata();
    });

})

//提交事件
function updata(){
    var ret = $.formValidator.pageIsValid("1");
    if(ret){
        $('#ajaxform').submit();
    }
}