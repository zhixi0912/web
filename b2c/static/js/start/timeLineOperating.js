var timeLineOpearting = (function(){
    
    var siteHash = {
        yes: 'yes',
        no: 'no',
        out: 'out',
        loaded: 'loaded'
    }
    
    var init = {
        isCallback: false,
        edit: function(){
            var self = this;
            $(self).parents('header').next('article').find('p').hide();
            $(self).parents('header').next('article').find('textarea').show();
            $(self).text('保存');
            $(self).attr('data-timeline-card-name', 'save');
        },
        save: function(){
            var self = this;
            var text = $(self).parents('header').next('article').find('textarea').val();
            $(self).parents('header').next('article').find('textarea').remove();
            $(self).parents('header').next('article').find('p').text(text).show();
            init.isCallback = true;
        }
    }
    
    return function(text, site){
        $('[data-timeline-card-name]').click(function(){
            var name = $(this).attr('data-timeline-card-name');
            init[name].apply(this, arguments);
            if(init.isCallback === true){
                if(site){
                    if(site in siteHash){
                        site = siteHash[site];
                    }
                }else{
                    site = 'yes';
                }
                $(this).parents('.card').find('.site').removeClass('yes no out loaded').addClass(site);
                
                //额外样式怎增加处理函数
                function domIType(self, type, text){
                    var $i = $(self).parents('.card').find('.site i');
                    if($i.parent('.site').hasClass(type)){
                        $i.addClass('iconfont').removeClass('fa');
                        $i.html(text);
                    }else{
                        $i.removeClass('iconfont').addClass('fa').text('');
                    }    
                }
                domIType(this, 'loaded', '&#xe600');
                
                $(this).parents('.card').find('.title').find('h4:last-child').text(text);
                $(this).remove();
                init.isCallback = false;
            }
        });
    }
    
})();