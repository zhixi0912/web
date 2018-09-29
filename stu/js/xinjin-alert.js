/**
 * Created by liuchao on 2016/11/2.
 * 依赖JQ1.11.1以上版本
 * 依赖bootstrap.css
 * 依赖bootstrap.js
 * 每一个弹出都是一个实例化XinJinAlert
 * XinJinAlert提供int方法初始化 参数为按钮数组[{},{},{}...]
 * int数组里的对象为{ text：按钮展示的文本  callback：按钮点击事件执行的方法 className:按钮的类名}
 * 约定int参数数组里对象callback 的值为 'close' 点击当前按钮 关闭弹窗
 * XinJinAlert实例化的closed方法可用来关闭当前弹窗
 * XinJinAlert实例化的layerOut方法显示弹窗；xxx.layerOut('消息体','窗口标题')  默认对应的是（空，'提示'）
 *
 *案例
 ==begin==
 <input type="button" value="弹出" onclick="a.layerOut('消息消息','文星提示')">
 <input type="button" value="弹出2" onclick="b.layerOut('消息2222')">
 var a = new XinJinAlert();
 var b = new XinJinAlert();
 b.int([{
    text:'确定',
    callback:a2
 },{
    text:'取消',
    callback:'close',
    className:'btn btn-default xj-btn xj-btn-normal'
 }
])
 ==end==
 */
$(function(){
    $("body").on("focus","input,textarea", function() {
        if(!!$(this).attr('maxlength')){
            var paopao =document.createElement('div');
            paopao.style.left= $(this).offset().left+'px';
            paopao.style.top= $(this).offset().top-30+'px';
            document.body.appendChild(paopao);
            paopao.className ='PP-Tips';
            paopao.innerHTML = $(this).val().length+"/"+$(this).attr('maxlength');
            $(this).bind('input',function(){
                paopao.innerHTML = $(this).val().length+"/"+$(this).attr('maxlength');
            });
            $(this).bind('blur',function(){
                paopao.remove()
            })
        }else{
            return ;
        }
    });
})

function XinJinAlert() {
    var _this =this;

    var popdivArea,errolist; //定义闭包变量
    this.closedCallback =function(){}
    this.ops = [  //定义默认属性 默认一个按钮对话框
        {
            text:'确定',
            callback:'close',
            id:'',
            className:'btn btn-primary xj-btn xj-btn-primary query_leave'
        }
        // ,{
        //     text:'取消',
        //     callback:'close',
        //     className:'btn btn-default xj-btn xj-btn-normal'
        // }
    ]
    this.closed=function(){ //关闭当前弹出
        $(popdivArea).modal('hide');//调用bootstrap 方法
    }
    this.int=function(opt){ //以传入参数为准
        if(!!opt){
            this.ops =  opt;
        }
    }
    // this.isFunction=function(fn){ //判断是否为function 返回fn 或 false
    //     if(!!fn && Object.prototype.toString.call(fn)=== '[object Function]' ){ //如果是function
    //         return fn;
    //     }else{
    //         return false;
    //     }
    // }
    this.is_Close_Or_function = function(fn){
        if(!!fn && Object.prototype.toString.call(fn)=== '[object Function]' ){ //如果是function
            return fn;
        }else if(fn == 'close'){
            return this.closed;
        }else{
            return false;
        }
    }
    this.completeOps=function(){ //自动补全默认值
        for(var i =0; i<this.ops.length;i++){
            this.ops[i].text = this.ops[i].text?this.ops[i].text :'确认';
            this.ops[i].callback = this.is_Close_Or_function(this.ops[i].callback);
            this.ops[i].className = this.ops[i].className ? this.ops[i].className :'btn btn-primary xj-btn xj-btn-primary query_leave';
            this.ops[i].id = this.ops[i].id ? this.ops[i].id :'';
        }
    }
    this.layerOut=function(){

        var msg =  arguments[0]?arguments[0]:'';//第一个参数为 msg
        var title = arguments[1]?arguments[1]:'提示';

        this.completeOps();//自动补全默认值
        this.creatHtml(msg,title); //创建html代码
        $(popdivArea).modal('show'); //调用bootstrap 方法
    }
    this.creatHtml=function(msg,title){//创建html代码
        if(popdivArea){ //如果弹出层存在则显示 不必再次创建
            //$(popdivArea).find('#myModalLabel').text(title);
            $(popdivArea).find('.form-horizontal .col-lg-12').html(msg);
            $(popdivArea).modal('show');
            return;
        }
        popdivArea =document.createElement('div');
        popdivArea.className ='modal fade';
        $(popdivArea).attr('tabindex',-1);
        $(popdivArea).attr('role','dialog');
        $(popdivArea).attr('aria-labelledby','myModalLabel');
        var popdiv =document.createElement('div');
        popdiv.className ='modal-dialog xj-modal-dialog xj-modal-400';
        $(popdiv).attr('role','document');
        var contentdiv =document.createElement('div');
        contentdiv.className ='modal-content xj-modal-content xj-alert-con';

        var headdiv =document.createElement('div');
        headdiv.className ='modal-header xj-modal-header xj-modal-header-no-bg';
        headdiv.innerHTML =
            '<button type="button" class="close xj-modal-close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true" class="xj-close-btn"></span>' +
            '</button>' ;//+
            //'<h4 class="modal-title" id="myModalLabel">'+title+'</h4>';
        var bodydiv =document.createElement('div');
        bodydiv.className ='modal-body leave_query_notice';
        bodydiv.innerHTML=
            '<div class="row form-horizontal">' +
            '<div class="col-lg-12 xj-modal-main">'+ msg +
            '</div>'+
            '</div>'
        var footdiv =document.createElement('div');
        footdiv.className ='modal-footer xj-modal-footer';
        var footrow =document.createElement('div');
        footrow.className ='row';
        var footbtn =document.createElement('div');
        footbtn.className ='col-lg-12 text-center';
        for( var i =0; i<this.ops.length;i++){ //循环创建按钮
            var button = document.createElement('button');
            $(button).attr('type','button');
            button.innerHTML=this.ops[i].text;
            button.className =this.ops[i].className;
            if(this.ops[i].id) button.id = this.ops[i].id;
            $(button).bind('click', this.ops[i].callback)

            footbtn.appendChild(button);
        }
        footrow.appendChild(footbtn);
        footdiv.appendChild(footrow);
        contentdiv.appendChild(headdiv);
        contentdiv.appendChild(bodydiv);
        contentdiv.appendChild(footdiv);
        popdiv.appendChild(contentdiv);
        popdivArea.appendChild(popdiv);
        document.body.appendChild(popdivArea);
    }
    this.alertList=function(html){
        if(!!errolist){
            errolist.remove();
        }
        errolist =document.createElement('div');
        errolist.className ='alertList';
        errolist.id='alertList';
        var title = document.createElement('div');
        var icon = document.createElement('icon');
        var h3 = document.createElement('h3');
        h3.className ='h3';
        h3.innerHTML='数据录入错误';
        icon.className = "close-mod";
        icon.onclick=function(){
            errolist.remove();
        }
        title.className = 'alertList-title clearfix';
        title.id ='draw_bar';
        title.appendChild(icon);
        title.appendChild(h3);
       
        var content = document.createElement('div');
        content.className = 'alertList-content';
        var foot = document.createElement('div');
        foot.className =  'alertList-foot';
        var inpu = document.createElement('input');
        inpu.className ='alertList-foot-btn';
        inpu.type ='button';
        inpu.value = '知道了';
        inpu.onclick=function(){
            errolist.remove();
        }
        content.innerHTML =html;
        errolist.appendChild(title);
        errolist.appendChild(content);
        foot.appendChild(inpu);
        errolist.appendChild(foot);
        document.body.appendChild(errolist);
        var oBox = document.getElementById("alertList");
        var oBar = document.getElementById("draw_bar");
        startDrag(oBar, oBox);
    }
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



