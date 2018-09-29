/**
 * Created by admin on 2016/11/17.
 */
//扩展字符串对象替换方法
String.prototype.replaceAll = function(s1,s2){
    return this.replace(new RegExp(s1,"gm"),s2);
}


//1.获取参与tab-map的表单  这里用 form-maps 这个className 作为参与的标志

var MapForm=function(scalss){
    var father = this;
    var data_lists =$('.'+scalss);
    var data_lists_len = data_lists.length;
    var focus_obj;//当前焦点所在的表单
    var sel_colseEvent_fromr ='';

    father.change_data_lists=function(){
        var data_lists_io =[]

        data_lists =$('.'+scalss);
        $(data_lists).each(function(){
            $(this).unbind('keydown');
            if(this.disabled){

            }else{
                data_lists_io.push(this);
            }
        })
        data_lists = data_lists_io;
        data_lists_len = data_lists.length;
    }
    father.int=function(){

        father.change_data_lists();

        $(data_lists).each(function(index){
            var _this = this;
            $(this).attr('index',index);
            var next_node,prev_node;
            if(index == 0){
                next_node = data_lists[index - 0 + 1];
                prev_node = data_lists[data_lists_len -1];
            }else if(index ==data_lists_len - 1){
                next_node = data_lists[0];
                prev_node = data_lists[index -1];
            }else{
                next_node = data_lists[index -0 +1];
                prev_node = data_lists[index -1];
            }
            $(_this).on('keydown',function(e){

                var dir = e.keyCode;

                if (dir == 37) {
                    if(index ==0){
                        return;
                    }
                    try{
                        _this.blur();
                        $(_this).datepicker( "hide" );
                    }catch (e){

                    }
                    if( prev_node.tagName==='SELECT'){
                        $(prev_node).select2("open");
                    }else{
                        prev_node.focus()
                    }
                    focus_obj = prev_node;
                    return false;
                }else if(dir == 39 || dir == 9){


                    if(index ==data_lists_len - 1){
                        return;
                    }

                    try{
                        _this.blur();
                        $(_this).datepicker( "hide" );
                    }catch (e){

                    }
                    if( next_node.tagName==='SELECT'){
                        $(next_node).select2("open");
                    }else{
                        next_node.focus()
                    }
                    focus_obj = next_node;
                    return false;
                }
            })
        });
    };
    // 针对select2做事件委托
    $('.'+scalss).on('select2:open',function(){
        focus_obj = this;
        $('.select2-search__field').addClass('FMAP') //非常重要 用于区别 谁的下拉框
        $('.select2-selection__rendered .select2-search__field').removeClass('FMAP').addClass('FMAP-M') //非常重要 用于区别 谁的下拉框
        $(".FMAP-M").unbind('keydown');
        $('.FMAP-M').on('keydown',function(e){
            var index = $(focus_obj).attr('index');
            var prev_node;
            if(index == 0){
                return;
                prev_node = data_lists[data_lists_len -1];
            }else{
                prev_node = data_lists[index -1];
            }

            var dir = e.keyCode;
            if (dir == 37) {
                sel_colseEvent_fromr = 'key'//设置关闭事件来自 key
                $(focus_obj).select2("close");//手动关闭
                focus_obj = prev_node;//焦点移到 上一个对象上
                if( prev_node.tagName==='SELECT'){
                    $(prev_node).select2("open");
                }else{
                    prev_node.focus()
                }
                return false;
            }else if(dir == 39){
                $(focus_obj).select2("close");
                return false;
            }
        })
    })
    // $('.'+scalss).on('select2:close',function(){
    //
    //     var index = $(focus_obj).attr('index');
    //     var next_node;
    //     if(sel_colseEvent_fromr == 'key'){ //如果关闭事件 来自键盘
    //         sel_colseEvent_fromr = '';
    //
    //     }else{
    //         return ;
    //     }
    //     if(index ==data_lists_len - 1){
    //         return;
    //         next_node = data_lists[0];
    //     }else{
    //         next_node = data_lists[index -0 +1];
    //     }
    //     focus_obj = next_node;
    //     if( next_node.tagName==='SELECT'){
    //         $(next_node).select2("open");
    //     }else{
    //         next_node.focus()
    //     }
    //
    // })
    $("body").delegate(".FMAP","keydown",function(e){ //jq2.0+ 动态绑定

        var index = $(focus_obj).attr('index');
        var prev_node,next_node;

        var dir = e.keyCode;
        if (dir == 37) {
            if(index == 0){
                return;
                prev_node = data_lists[data_lists_len -1];
            }else{
                prev_node = data_lists[index -1];
            }

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
                return;
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
    // $(":text,textarea").on('focus',function(){
    //     if(!!$(this).attr('maxlength')){
    //         var paopao =document.createElement('div');
    //         paopao.style.left= $(this).offset().left+'px';
    //         paopao.style.top= $(this).offset().top-30+'px';
    //         document.body.appendChild(paopao);
    //         paopao.className ='PP-Tips';
    //         paopao.innerHTML = $(this).val().length+"/"+$(this).attr('maxlength');
    //         $(this).bind('input',function(){
    //             paopao.innerHTML = $(this).val().length+"/"+$(this).attr('maxlength');
    //         });
    //         $(this).bind('blur',function(){
    //             paopao.remove()
    //         })
    //     }else{
    //         return ;
    //     }
    // })

})