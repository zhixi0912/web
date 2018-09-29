/**
 * Created by admin on 2016/12/22.
 *
 * 公用的报错弹出
 */



$(function(){
    $.formValidator.initConfig({
        formID: "ajaxform", theme: "126", onError:function(msg, obj, errorlist){
            showErrs(errorlist);
        }
    });
    $('.modal-LF-wrap input[type="button"]').click(function(){
        $(this).attr('disabled','disabled');
        setTimeout(function(){
            $('.modal-LF-wrap input[type="button"]').removeAttr('disabled')
        }, 5000)
    });
    $('.modal-body [value="新增"]').click(function(){
      $('.modal-LF-wrap input[type="button"]').removeAttr('disabled')
    });
})
function showErrs(errorlist){
    var len = errorlist.length;
    var top=100;
    for(var i =0; i<len;i++){
        var _id = errorlist[i].errorId;
        var _index = $('#'+ _id).attr('group');
        if(_index<top){
            top = _index;
        }
    }

    myswiper.slideTo(top, 1000, false);
}

/* 模板替换 */
function data2html(temp, line, msg) {
    return temp.replace("@line", line).replace("@msg", msg);
}

function modalErrorReset() {
    $('#modal_error_2016,.modal-backdrop').remove();
    $('body').removeClass('modal-open');
}

function modalErrorMsg(errMsg, ifMore) {
    $(".help-block").text("");
    var err_begin = '<div class="modal fade" id="modal_error_2016" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog xj-modal-dialog xj-modal-400" role="document"><div class="modal-content xj-modal-content"><div class="modal-header xj-modal-header"><button type="button" class="close xj-modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button><h4 class="modal-title" id="myModalLabel"></h4></div><div class="modal-body leave_query_notice err-body"><div class="row form-horizontal"><div class="col-lg-12">'
    var err_end = '</div></div></div><div class="modal-footer xj-modal-footer"><div class="row"><div class="col-lg-12 text-center"><button type="button" class="btn btn-primary xj-btn xj-btn-primary query_leave" data-dismiss="modal" onclick="modalErrorReset();">确定</button></div></div></div></div></div></div>';
    /* 后台返回模拟数据 */
    var errHtml = "";
    var errTemp = '<div class="form-group has-error"><div class="col-sm-12 xj-label-min-height">@line@msg</div></div>';
    /* 拼装html */
    for (n in errMsg) {
        if (n.indexOf(".") == -1) {
            errHtml += data2html(errTemp, "", errMsg[n]);
            if ($('[name=' + n + ']').length > 0) {
                $('[name=' + n + ']').parents(".form-group").find(".help-block").text(errMsg[n]);
            }
        } else {
            errHtml += data2html(errTemp, "第" + (Number(n.split('.')[1]) + 1) + "行：", errMsg[n]);
        }
    }
    /* HTML渲染 */
    var needLay = true;
    if (ifMore === false) {
        needLay = false
    }
    if (needLay) {
        $("body").append(err_begin + errHtml + err_end);
        $('#modal_error_2016').modal('show');
        $('body').on('click','#modal_error_2016',function(){
            $('#modal_error_2016,.modal-backdrop').remove();
            $('body').removeClass('modal-open');
        });
    }
}

/*小屏幕兼容实验-xhl-2017.01.12*/
$(function(){
    $('[class*=col-lg]').each(function(){
        var classList = this.classList;
        for(var i=0; i<classList.length; i++){
            var className = classList[i];
            if(className.indexOf('col-lg') > -1){
                className = className.replace('lg', 'md');
                this.classList.value = this.classList.value + ' ' + className;
                break;
            }
        }
    });
});
$.ajaxSetup( {
    timeout: 60000  // 默认URL
    //type: "POST" , // 默认使用POST方式
    // headers: { // 默认添加请求头
    //     "Author": "CodePlayer" ,
    //     "Powered-By": "CodePlayer"
    // } ,
    // error: function(jqXHR, textStatus, errorMsg){ // 出错时默认的处理函数
    //     // jqXHR 是经过jQuery封装的XMLHttpRequest对象
    //     // textStatus 可能为： null、"timeout"、"error"、"abort"或"parsererror"
    //     // errorMsg 可能为： "Not Found"、"Internal Server Error"等
    //
    //     // 提示形如：发送AJAX请求到"/lottery.html"时出错[404]：Not Found
    //     alert( '发送AJAX请求到"' + this.url + '"时出错[' + jqXHR.status + ']：' + errorMsg );
    // }
} );


