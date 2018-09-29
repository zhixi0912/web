/**
 * Created by admin on 2016/11/17.
 */
//1.获取参与tab-map的表单  这里默认用 tab-maps 这个className 作为参与的标志

var MapTab=function(scalss,tabId,msg,sel_int,add_tab_bind){

    var focus_obj;
    var data_lists =$('.'+scalss); //获取参与map的表单
    var start_tr = msg;//初始 的原始行 tr对象
    var tabId = tabId;
    var father = this;
    var sel_colseEvent_fromr ='';

    father.int=function() {  //第一次初始化
        $("#"+tabId+" .intsel").select2({});
        var trlist = $('#'+ tabId).find('tr');
        $(trlist).each(function(){
            var _this =this;
            data_lists = $(_this).find('.'+scalss);
            $(data_lists).each(function(index){
                $(this).attr('index',index);
                if(this.tagName == 'SELECT'){
                    //$(this).select2({});
                    $(this).on('select2:open', father.sel_open )
                }
                father.keys(this);
            })
        })

    }
    father.int_tr=function(data_lists) {
        $(data_lists).each(function(index){
            $(this).attr('index',index);
            if(this.tagName == 'SELECT'){
                $(this).select2({});
                $(this).on('select2:open', father.sel_open )
            }

            father.keys(this);
        })
        sel_int()
        if(!!add_tab_bind){
            add_tab_bind(data_lists)
        }
    }
    father.keys=function(obj){
        var prev_node,up_node,next_node,down_node;
        var tr = $(obj).parents('tr')[0];
        var data_lists = $(tr).find('.'+scalss);
        var data_lists_len = data_lists.length;
        var index = $(obj).attr('index');
        $(obj).on('keydown',function(e){
            var evt = e;
            var dir = evt.keyCode;

            if (dir == 37) {
                if(index == 0){
                    prev_node = data_lists[data_lists_len -1];
                }else{
                    prev_node = data_lists[index -1];
                }
                father.changeDom(obj,prev_node);
                return false;
            }
            if(dir == 38){
                if( !!father.checked_tr_is_first(tr) ){ //如果是第一行

                    return;
                }else{
                    up_node = $(tr).prev('tr').find("[index='"+index+"']")[0]
                }
                father.changeDom(obj,up_node);
                return false;
            }
            if(dir == 39 || dir == 13 || dir == 9 ){
                if(index == data_lists_len - 1){
                    next_node = data_lists[0];
                }else{
                    next_node = data_lists[index -0+1];
                }
                father.changeDom(obj,next_node);
                return false;
            }
            if(dir == 40){
                if( !!father.checked_tr_is_last(tr)){ //如果是第最后一行
                ;
                    if( !!msg){
                        father.creat();
                    }else{
                        return false;
                    }
                }
                down_node = $(tr).next('tr').find("[index='"+index+"']")[0]
                father.changeDom(obj,down_node);
                return false;
            }
        })
    }
    father.creat=function(){
        //var tr = document.createElement('tr');
        var tr = $(start_tr)[0];
        document.getElementById(tabId).appendChild(tr);
        var data_lists = $(tr).find('.'+scalss);

        father.int_tr(data_lists);

    }
    father.changeDom =function(formDom,toDom){
        try{
            formDom.blur();
            $(formDom).datepicker( "hide" );
        }catch (e){

        }
        if( toDom.tagName==='SELECT'){
            $(toDom).select2("open");
        }else{
            toDom.focus()
        }
        focus_obj = toDom;
        return false;
    }
    father.checked_tr_is_first=function(tr){ //判断tr是不是第一行
        var rowIndex = tr.rowIndex;

        if(rowIndex == 1){
            return true;
        }else{
            return false;
        }

    }
    father.checked_tr_is_last=function(tr){ //判断tr是不是最后一行
        var rowIndex = tr.rowIndex;
        var tr_len =  $('#'+tabId).find('tr').length;

        if(rowIndex == tr_len){
            return true;
        }else{
            return false;
        }

    }
    father.sel_open =function(){
        focus_obj = this;
        $('.select2-search__field').addClass('TMAP') //非常重要 用于区别 谁的下拉框
    }
    father.sel_close =function(){
        var tr = $(focus_obj).parents('tr')[0];
        var data_lists = $(tr).find('.'+scalss);
        var data_lists_len = data_lists.length;
        var index = $(focus_obj).attr('index');
        var next_node;
        if(sel_colseEvent_fromr == 'key'){ //如果关闭事件 来自 向左键盘  则返回
            sel_colseEvent_fromr = '';
            return ;
        }
        if(index ==data_lists_len - 1){
            next_node = data_lists[0];
        }else{
            next_node = data_lists[index -0 +1];
        }
        focus_obj = next_node;
        if( next_node.tagName==='SELECT'){
            $(next_node).select2("open");
        }else{
            next_node.focus()
        }

    }
    $('.'+scalss).on('select2:open', father.sel_open )
    //$('.'+scalss).on('select2:close', father.sel_close)
    $("body").delegate(".TMAP","keydown",function(e){ //jq2.0+ 动态绑定

        var tr = $(focus_obj).parents('tr')[0];
        var data_lists = $(tr).find('.'+scalss);
        var data_lists_len = data_lists.length;
        var index = $(focus_obj).attr('index');
        var prev_node,next_node;


        var dir = e.keyCode;
        if (dir == 37) {
            if(index == 0){
                prev_node = data_lists[data_lists_len -1];
            }else{
                prev_node = data_lists[index -1];
            }
            sel_colseEvent_fromr = 'key'//设置关闭事件来自 key

            $(focus_obj).select2("close");//手动关闭
            focus_obj = prev_node;//焦点移到 上一个对象上
            if( prev_node.tagName==='SELECT'){
                $(prev_node).select2("open");
            }else{
                prev_node.focus()
            }
            return false;
        }else if(dir == 39 || dir == 9 || dir == 13){
            if(index ==data_lists_len - 1){
                next_node = data_lists[0];
            }else{
                next_node = data_lists[index -0 +1];
            }

            $(focus_obj).select2("close");
            if( next_node.tagName==='SELECT'){
                $(next_node).select2("open");
            }else{
                next_node.focus()
            }
            return false;
        }
    })

}

function moveEnd(obj){// 光标切换至末尾

    if(!obj.value){
        return false;
    }
    var len = obj.value.length;
    function ss(){
        if (document.selection) {
            var sel = obj.createTextRange();
            sel.moveStart('character',len); //设置开头的位置
            sel.collapse();
            sel.select();
        } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
            obj.selectionStart = obj.selectionEnd = len;
        }
    }
    window.setTimeout(ss,200)
}

function bind_id(obj){
   obj.id = obj.name.replaceAll('\\[','').replaceAll('\\]','');
/*    $(obj).after('<div id="'+obj.id+'Tip" class="help-block"></div>');*/
}


