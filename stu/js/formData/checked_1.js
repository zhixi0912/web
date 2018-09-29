/**
 * Created by admin on 2016/11/15.
 */
var formmapLayer = new XinJinAlert();
$(function(){

    formmapLayer.int([{
        text:'确定',
        callback:function(){
            formmapLayer.closed();
            opening_inpu.focus()
        }
    }])
    binde_closelayer(formmapLayer);
    bind_callback();

})
function bind_callback(){
    $("[dataname ='test1']").each(function(){
        this.callback=checkspace.test1
    })
    $("[dataname ='test3']").each(function(){
        this.callback=checkspace.test2
    })
    $("[dataname ='test4']").each(function(){
        this.callback=checkspace.test3
    })
    $("[dataname ='test6']").each(function(){
        this.callback=checkspace.test4
    })
}
var checkspace =  {
    test1:function(o){
        if(!!o.value){
            return true;
        }else{
            formmapLayer.layerOut('hehehe');

            return false;
        }
    },
    test2:function(o){
        if(!!o.value){
            return true;
        }else{
            formmapLayer.layerOut('wowwowo');

            return false;
        }
    },
    test3:function(o){
        if(!!o.value){
            return true;
        }else{
            formmapLayer.layerOut('ononno');

            return false;
        }
    },
    test4:function(o){
        if(!!o.value){
            return true;
        }else{
            formmapLayer.layerOut('uouououu');
            return false;
        }
    }
}
function binde_closelayer(a){ //绑定关闭弹出事件  返回input焦点
    document.onkeyup=function(event){
        var ret = $('.modal').hasClass('in');
        if( !ret){
            return false;
        }
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
            a.closed()
            opening_inpu.focus();
        }else if(e && e.keyCode==108){
            a.closed()
            opening_inpu.focus();
        }
    };
}