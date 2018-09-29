/**
 * Created by admin on 2016/12/30.
 */
var moban_id//用於記錄 彈出选择的 备注 id号
var ajax_success;//用于ajax请求成后 修改 input的值
function setPoop() {
    $('select').each(function() {
        var _this =this;
        var titles = this.title;
        if(this.type == 'select-one'){
            if( $(this).hasClass('inted')){
                return;
            }else{


                $(this).css({'height':0+'px','width':0+'px'});

                $(this).addClass('inted');var inp = document.createElement('input');

                $(this).find("option:selected").each(function(){

                    inp.value = $(this).text()? $(this).text():'请选择'; //这里得到的就是
                    ajax_success=function(str,callBakc){
                        inp.value = str;
                        try{
                            if(callBakc){
                                callBakc();
                            }
                        }catch(e){}
                    }
                });
                // inp.value = _this.options[index].text;

                $(inp).addClass('public_show form-control')
                $(inp).attr('readonly',true);

                $(this).parent().append(inp);
            }
            inp.onclick=function () {
                var c_close =  document.createElement('a');
                //c_close.innerHTML='【关闭】';
                c_close.className='c_close';
                var title = document.createElement('h3');
                title.innerHTML = titles+"：";
                title.appendChild(c_close);
                var div = document.createElement('div');
                div.className ='box_input_1';
                var list = $(_this).find('option');
                div.appendChild(title);
                for( var i =0; i< list.length;i++){

                    var spa = document.createElement('div');


                    spa.className='pad-btn pad-btn-select box';
                    spa.innerHTML = '<div class="flex1"></div><p>' + list[i].innerHTML + '</p><div class="flex1"></div>';
                    $(spa).attr('value',list[i].value)
                    if($(list[i]).attr('selected')){
                        spa.className='pad-btn pad-btn-select box active';
                    }
                    spa.onclick= (function(f){
                        return function(){
                            /*if(_this.value == list[f].value){
                             return;
                             }*/
                            inp.value = list[f].innerHTML;
                            _this.value = list[f].value;
                            if( $(_this).hasClass('lian-dong')){
                                $(_this).parent().next().find('.wg-td-input').val($(list[f]).attr('data-standard'))
                            }
                            console.log($(list[f]).attr('data-standard'))
                            slect(list[f]);
                            $('.box_back').hide();
                            div.remove();
                            if(_this.onchange){
                                _this.onchange();
                            }
                            if($(_this).data("events")){

                            }
                            _this.focus();
                            _this.blur();
                        };
                    })(i)
                    div.appendChild(spa);
                }
                document.body.appendChild(div);

                $('.box_back').show();
                $('.box_back').click(function(){
                    $('.box_back').hide();
                    div.remove();
                })
                $(c_close).click(function(){
                    $('.box_back').hide();
                    div.remove();
                })
            }
        }
        else{
            var max = $(_this).attr('max-chose')?$(_this).attr('max-chose'):10;
            if($(this).hasClass('inted')){
                return;
            }else{


                $(this).css({'height':0+'px','width':0+'px'});

                $(this).addClass('inted');
                var inp = document.createElement('input');
                $(this).find("option:selected").each(function(){
                    inp.value += $(this).text()+',' //这里得到的就是
                });
                // inp.value = _this.options[index].text;

                $(inp).addClass('public_show form-control')
                $(inp).attr('readonly',true);

                $(this).parent().append(inp);
            }
            inp.onclick=function () {
                var c_close =  document.createElement('a');
                //c_close.innerHTML='【关闭】';
                c_close.className='c_close';
                var title = document.createElement('h3');
                title.innerHTML = titles+"：";
                title.appendChild(c_close);
                var div = document.createElement('div');
                div.className ='box_input_1';
                var list = $(_this).find('option');
                div.appendChild(title);
                var cfm =document.createElement('div');
                cfm.className='pad-btn pad-btn-select pad-btn-cfm box';
                cfm.innerHTML = '<div class="flex1"></div><p>选择完成</p><div class="flex1"></div>';
                div.appendChild(cfm);
                for( var i =1; i< list.length;i++){

                    var spa = document.createElement('div');
                    spa.className='pad-btn pad-btn-select box';
                    spa.innerHTML = '<div class="flex1"></div><p>' + list[i].innerHTML + '</p><div class="flex1"></div>';
                    $(spa).attr('value',list[i].value);
                    $(spa).attr('txt',list[i].innerHTML);
                    $(spa).attr('option_index',i);
                    if($(list[i]).attr('selected')){
                        spa.className='pad-btn pad-btn-select box active';
                    }
                    spa.onclick=function(){

                        if($('.pad-btn-select.active').length == max && !$(this).hasClass('active')){
                            return;
                        }
                        $(this).toggleClass('active');

                    }

                    div.appendChild(spa);
                }


                cfm.onclick=function(){
                    inp.value ='';
                    $(list).each(function(){
                        $(this).removeAttr('selected');
                    })
                    _this.ary=[];
                    $('.pad-btn-select.active').each(function(){
                        var i = $(this).attr('option_index');
                        $(list[i]).attr('selected',true);
                        _this.ary.push(list[i].value);
                        inp.value = inp.value+$(this).attr('txt')+',';
                    })
                    $(_this).val(_this.ary)
                    $('.box_back').hide();
                    div.remove();
                    if(_this.onchange){
                        _this.onchange();
                    }
                    _this.focus();
                    _this.blur();

                }


                document.body.appendChild(div);
                $('.box_back').show();
                $('.box_back').html('');
                $('.box_back').click(function(){
                    $('.box_back').hide();
                    div.remove();
                })
                $(c_close).click(function(){
                    $('.box_back').hide();
                    div.remove();
                })
            }
        }



    })
}
$(function(){
    setPoop();
})

function slect(obj){
    $(obj).prevAll().removeAttr('selected');
    $(obj).nextAll().removeAttr('selected');
    $(obj).attr('selected',true);
}




var myswiper,btnJson=[]
window.onload=function(){
    var h = $('html,body').height() - 60-30;
    $('#main').css({'height':h+'px'});
    $('#ajaxform').css({'height':h+'px'});
    try {
        myswiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction:'vertical',
            loop:false,
            prevButton:'.prev-btn',
            nextButton:'.next-btn',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                btnJson = btnJson ? btnJson : '';
                if(btnJson.length >1 ){
                    return '<div class="pad-btn pad-btn-paging ' + className + '">'+btnJson[index]+'</div>';
                }else{
                    return '<div class="pad-btn pad-btn-paging ' + className + '">第' + (index + 1) + '页</div>';
                }

            }
        });
    }catch (e){}

    creatScorll();
}
function creatScorll() {
    var objlist = $('.swiper-pagination .pad-btn');
    var len = objlist.length;
    if(len<6){
        return;
    }
    var contDiv = document.createElement('div');
    contDiv.className='contDiv';
    for(var i =0;i<len;i++){
        contDiv.appendChild(objlist[i]);
    }
    var upbtn =  document.createElement('input');
    upbtn.type ='button';
    upbtn.className ='pad-btn pad-btn-arrowup pad-btn-hover-gray';
    upbtn.onclick=function(){

        $(contDiv).animate({'scrollTop':contDiv.scrollTop-70},100)
    }
    var downbtn =  document.createElement('input');
    downbtn.type ='button';
    downbtn.className ='pad-btn pad-btn-arrowdown pad-btn-hover-gray';
    downbtn.onclick=function(){
        $(contDiv).animate({'scrollTop':contDiv.scrollTop+70},300)
    }
    $('.swiper-pagination ')[0].appendChild(upbtn);
    $('.swiper-pagination ')[0].appendChild(contDiv);
    $('.swiper-pagination ')[0].appendChild(downbtn);

}

$('.next-btn').click(function(){
    var contDiv = $('.contDiv')[0];
    if(!!contDiv){
        $(contDiv).animate({'scrollTop':contDiv.scrollTop+70},300);
    }

})
$('.prev-btn').click(function(){
    var contDiv = $('.contDiv')[0];
    if(!!contDiv){
        $(contDiv).animate({'scrollTop':contDiv.scrollTop-70},300);
    }
})

$('html,body').height($(window).height())
$('#box_body').height($(window).height())


