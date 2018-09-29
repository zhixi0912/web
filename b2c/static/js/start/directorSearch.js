/*
    生成部门树弹框以后再次生成搜索框初步逻辑，
    日后必有修改，
    那就日后在说
*/
var DirectorSearchModule = (function(){ 
        
    function DirectorSearch($element, ok){ //初始化构造函数，传入弹框选择器和状态
        var $element = this.$element = $element;  
        this.ok = ok || false;
        this.list = [];
        this.copyData = []
    }

    DirectorSearch.prototype = {
        bind: function(){ //函数汇总
            var _this = this;
            if(this.$element.find('a[data-direSearch-Btn]').length>0){
                return;
            }
            _this.ulInit();
            _this.ulEvent();
        },
        ulInit: function(){ //初始化UI函数
            var _this = this;
            var direSearchBtnHtml = '<a href="###" data-direSearch-Btn><i class="fa fa-search"></i></a>';
            var direSearchInputHtml = '<section class="direSerachInput" data-direSearch-Input><input class="up" type="text" autofocus="autofocus" placeholder="要搜索的人名" /></section>';
            var direSearchListHTml = '<div class="direSearchList" data-direSearch-List>'
                                        +'<section class="direloading none"><b class="scale1"></b><b class="scale2"></b><b class="scale3"></b><p>正在搜索</p></section>'
                                        +'<ul></ul>'
                                     +'</div>';
            this.$element.find('.modal-title').append(direSearchBtnHtml);
            this.$element.find('.modal-header').append(direSearchInputHtml);
            this.$element.find('.modal-content').append(direSearchListHTml);
        },
        ulEvent: function(){ //初始化事件函数
            var _this = this;
            
            this.$element.find('a[data-direSearch-Btn]').on('click', function(){
                $(this).parents('.modal-title').siblings('.direSerachInput').addClass('active');
            });
            this.$element.find('[data-direSearch-Input] input').on('keyup',function(){
                $(this).removeClass('up');
                _this.$element.find('[data-direSearch-List]').find('ul').html('');
            });
            this.$element.find('[data-direSearch-Input] input').on('blur',function(){
                $(this).addClass('up');
            });
        },
        reflashList: function(list){ //更新|添加数据并展示在列表中函数
            var _this = this;
            this.list = list;
            
            //console.log('copydata length-1 ' + this.copyData.length);
            
            if(this.copyData.length === 0){
                _this.copyDataFn();   
            }
            
            //console.log('copydata length-2 ' + this.copyData.length);
            
            this.$element.find('[data-diresearch-list]').addClass('active');
            if(this.ok){
                _this.returnOkList();
                this.$element.find('[data-direSearch-List]').scrollTop(0);
            }else{
                _this.direLoading();
            } 
        },    
        direLoading: function(){ //等待函数
            var _this = this;
            this.$element.find('.direloading').addClass('aniload').removeClass('none');
        },
        returnOkList: function(){ //添加数据到列表函数
            var _this = this;
            
            if(this.copyData.length != 0){
                this.list.length = 0; 
                this.list = this.copyData.concat();
            }
            
            //console.log('return list: ' + this.list.length);
            //console.log('return copydata: ' + this.copyData.length);
            
            this.$element.find('.direloading').addClass('none').removeClass('aniload');
            
            var listlen = this.list.length;
            var dataList = [];
            
            if(listlen<=15){
                this.addUlDataHtml(_this.list);
                console.log('t1');
            }else{
                for(var j=0; j<=15; j++){
                    dataList.push(this.list.shift());
                }
                this.addUlDataHtml(dataList);
                listlen = this.list.length;

                console.log('lis: ' + listlen);

                this.$element.find('[data-direSearch-List]').on('scroll', function(){
                    if(_this.isUpDown()){
                        if(listlen<=5){
                            _this.addUlDataHtml(_this.list);
                            $(this).off('scroll');
                            //console.log('t2-1: ' + listlen);
                        }else{  
                            for(var i=0; i<5; i++){
                                dataList.push(_this.list.shift());
                            }
                            listlen = _this.list.length;
                            var littleData = dataList.slice(-5);
                            _this.addUlDataHtml(littleData);
                            //console.log('t2-2: ' + listlen);
                        }
                    }
                });
            }           
        },
        addUlDataHtml: function(data){ //遍历数据函数
            var _this = this;
            for(var i=0; i<data.length; i++){
                _this.littleAppendList(data[i].name, data[i].job, data[i].department);  
            }
        },
        littleAppendList: function(name, job, department){ //生成列表函数
            var _this = this;
            this.$element.find('[data-direSearch-List]').find('ul').append('<li>'
                                +'<section class="row">'
                                    +'<div class="col-xs-3">'
                                        +'<label>'
                                            +'<span><input type="checkbox" /></span>'
                                            +'<section>'
                                                +'<h5>'+name+'</h5>'
                                                +'<h6>'+job+'</h6>'
                                            +'</section>'
                                        +'</label>'
                                    +'</div>'
                                    +'<div class="col-xs-9 diredepart">'
                                        +'<a href="###">'+department+'</a>'
                                    +'</div>'
                                +'</section>'   
                            +'</li>');
        },
        isUpDown: function(){ //判断是否滚动函数
            var _this = this;
            var posHeight = this.$element.find('[data-direSearch-List]').scrollTop();
            var cilHeight = this.$element.find('[data-direSearch-List]').height();
            var domHeight = this.$element.find('[data-direSearch-List]').find('ul').height();
            if(domHeight-posHeight-cilHeight<=30){
                return true;
            }
        },
        copyDataFn: function(){ //复制数据函数
            var _this = this;
            if(this.copyData.length === 0){
                var len = this.list.length;
                this.copyData.length = 0;
                this.copyData = this.list.concat();
            }
        },
        setok: function(){ //切换状态函数
           var _this = this;
           this.ok = !this.ok;
        },
        remove: function(){ //UI重置函数
            var _this = this;
            this.$element.find('[data-diresearch-input]').removeClass('active');
            this.$element.find('[data-diresearch-input] input').val('');
            this.$element.find('[data-diresearch-input] input').addClass('up');
            this.$element.find('.direloading').addClass('none').removeClass('aniload');
            this.$element.find('[data-diresearch-list] ul').html('');
            this.$element.find('[data-diresearch-list]').removeClass('active');
        },
        destroy: function(){ //事件销毁，样式重置
            var _this = this;
            _this.remove();
            this.$element.off();
            $('body').off();
        }
    }
    
    //实例化步骤
    var direct; //公共变量
    
    function DirectFn($element, ok){ //实例化函数
        
        if(direct === undefined){
            direct = new DirectorSearch($element, ok);
        }
        
        direct.bind();
            
        function setok(){
            direct.setok();
        }
        
        function reflashList(list){
            direct.reflashList(list);
        }

        function remove(){
            direct.remove();
        }
        
        function destroy(){
            direct.destroy();
        }

        return {
            setok: setok,              //切换状态接口
            remove: remove,            //UI重置接口
            reflashList: reflashList,  //添加或更新数据接口
            destroy: destroy           //销毁重置接口 
        }
        
    }
    
    return {
        DirectFn: DirectFn //对外公共接口
    }
   
})();

/*
    example: 
    DirectorSearchModule.DirectFn($element, true);
*/
/*
+'<div class="direSearchList" data-direSearch-List>'
    +'<ul>'
        +'<li>'
            +'<section class="row">'
                +'<div class="col-xs-3">'
                    +'<label>'
                        +'<span><input type="checkbox" /></span>'
                        +'<section>'
                            +'<h5>黄子韬</h5>'
                            +'<h6>护国英雄</h6>'
                        +'</section>'
                    +'</label>'
                +'</div>'
                +'<div class="col-xs-9 diredepart">'
                    +'<a href="###">分公司-业务部门-宇宙发展研究部-劳动生产兴趣组-一大部-二分队-三小组</a>'
                +'</div>'
            +'</section>'   
        +'</li>'
    +'</ul>'
+'</div>'
*/