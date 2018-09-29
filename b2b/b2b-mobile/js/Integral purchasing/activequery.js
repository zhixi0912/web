// integral creation_v1.js

$(function(){
    $('#tab1').tab({defaultIndex:0,activeClass:"tab-green"});
    $('#tab2').tab({defaultIndex:2,activeClass:"tab-red"});
    $('#tab3').tab({defaultIndex:0,activeClass:"tab-blue"});
    $('#tab4').tab({defaultIndex:0,activeClass:"tab-blue "});
    $('#tab5').tab({defaultIndex:1,activeClass:"bg_green"});
    $('#tab6').tab({defaultIndex:2,activeClass:"bg_red"});
});

$(function(){
    //搜索加载
    $('.searchbar_wrap').searchBar({
        cancelText:"取消",
        searchText:'查询',
        onfocus: function (value) {

        },
        onblur:function(value) {

        },
        oninput: function(value) {

        },
        onsubmit:function(value){
        },
        oncancel:function(){

        },

        onclear:function(){

        }
    });
    //列表折叠
    $('.js-category').click(function(){
        $parent = $(this).parent('li');
        if($parent.hasClass('js-show')){
            $parent.removeClass('js-show');
            $(this).children('i').removeClass('icon-35').addClass('icon-74');
        }else{
            $parent.siblings().removeClass('js-show');
            $parent.addClass('js-show');
            $(this).children('i').removeClass('icon-74').addClass('icon-35');
            $parent.siblings().find('i').removeClass('icon-35').addClass('icon-74');
        }
    });
    //合计金额
    var numb = 0;
    $(".b2b-sea-list li").each(function () {
        numb = numb + parseInt($(this).find(".red").text());
        $("#rmb").text(numb);
    })
});
