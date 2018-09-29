(function(window,jQuery,undefined){   
    //隐藏出现效果
    function sidebarNoticesShow(){
        $('body').click(function(){
            $('aside.control-sidebar').removeClass('control-sidebar-open');
        });
        
        $('a[data-toggle="control-sidebar"]').click(function(e){
            e.stopPropagation();
        });
        
        $('div.control-sidebar-bg').click(function(e){
            e.stopPropagation();
        });
    }
    
    //展开收起效果
    function sidebarNoticesMenu(){
        $('section.inform-box').find('nav').click(function(e){
            e.stopPropagation();
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $(this).parents('h4').next('ul.control-sidebar-menu').slideDown(200);
                $(this).next('a').find('b').removeClass('fa-angle-right').addClass('fa-angle-down');
            }else{
                $(this).next('a').find('b').removeClass('fa-angle-down').addClass('fa-angle-right');
                $(this).parents('h4').next('ul.control-sidebar-menu').slideUp(200);
            }
        });
        $('section.inform-box').find('a').click(function(e){
            e.stopPropagation();
        });
    }
    
    //通过开关控制
    function sidebarNoticesToggle(isType){
        if(arguments.length === 0 || isType === true){
            $('aside.control-sidebar').addClass('control-sidebar-open');
        }else{
            $('aside.control-sidebar').removeClass('control-sidebar-open');
        }
    }
    
    //右上角抖动
    function noticeAnimate(){
        $('a[data-toggle="control-sidebar"]').addClass('shake');
        setTimeout(function(){
            $('a[data-toggle="control-sidebar"]').removeClass('shake');
        },1100);
    }
    
    function sidebarNoticesAll(){
        sidebarNoticesShow();
        sidebarNoticesMenu();
    }
    
    window.sidebarNoticesAll = sidebarNoticesAll;
    window.sidebarNoticesToggle = sidebarNoticesToggle;
    window.noticeAnimate = noticeAnimate;
})(window,$);

sidebarNoticesAll();