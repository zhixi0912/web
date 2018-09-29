/*modfu*/
var modfu = '<div class="modfu"></div>';

$('[data-modfu-for]').click(function(){
	var moduFor = $(this).attr('data-modfu-for');
	$('div[data-modfu-id='+moduFor+']').wrap(modfu);
	$('.modfu').fadeIn(500);
	$('div[data-modfu-id='+moduFor+']').addClass('position').addClass('move');
});
$('.modfu-content-header .closen').click(function(){
	$(this).parents('.modfu-main').removeClass('move');
	$('.modfu').fadeOut(500);
	setTimeout(function(){
		$('.modfu-main').removeClass('position');
		$('.modfu-main').unwrap();
	},600);
	$('.people-tab > span:nth-child(1)').addClass('active').siblings('span').removeClass('active');
	$(this).parents('.modfu-content-header').siblings('.modfu-content-main').find('.people-tab > section').eq(0).addClass('active').siblings('section').removeClass('active');
});

function moduFuShow(obj){
	$('.modfu').fadeIn(500);
	$('div[data-modfu-id='+obj+']').addClass('move');
}

function moduFuHide(obj){
	$('div[data-modfu-id='+obj+']').removeClass('move');
	$('.modfu').fadeOut(500);
	setTimeout(function(){
		$('.modfu-main').removeClass('position');
		$('.modfu-main').unwrap();
	},600);
	$('.people-tab > span:nth-child(1)').addClass('active').siblings('span').removeClass('active');
	$('.people-tab > section').eq(0).addClass('active').siblings('section').removeClass('active');
}

/*modfu浮框层内部操作*/
$('.people-tab > span').click(function(){
	$(this).addClass('active').siblings('span').removeClass('active');
	console.log($(this).index());
	$($(this).siblings('section')[$(this).index()]).addClass('active').siblings('section').removeClass('active');
})

/*一些表格操作的通用代码*/
//删除操作
var deleteModal = '<div class="modal fade" id="deletemodal">'
					  +'<div class="modal-dialog modal-sm">'
						+'<div class="modal-content">'
						  +'<div class="modal-header">'
							+'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
							+'<h4 class="modal-title">通知！</h4>'
						  +'</div>'
						  +'<div class="modal-body tecenter pdb15" id="delete-model-main">'
							+'Do you wish to delete?'
						  +'</div>'
						  +'<div class="modal-footer pdt10">'
							+'<button type="button" class="btn btn-default pull-left btn-sm" data-dismiss="modal">取消</button>'
							+'<button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" id="delMod">确认</button>'
						  +'</div>'
						+'</div>'
					  +'</div>'
					+'</div>';

$('body').append(deleteModal);

$('.operator-table').on('click','tbody>tr>td.operator-table-td>a>i.glyphicon-trash',function(){
	var self = this;
	$('#deletemodal').modal();
	$('#delMod').click(function(){
		$(self).parents('tr').remove();
//		calloutOptResult('删除',false); //显示提示信息，这部分为演示，实际使用的时候请根据具体情况调用，就这样
	})
	$('#deletemodal').on('hidden.bs.modal', function (e) {
		self = null;
	})
})

//关闭操作
var closeModal = '<div class="modal fade" id="closemodal">'
					  +'<div class="modal-dialog modal-sm">'
						+'<div class="modal-content">'
						  +'<div class="modal-header">'
							+'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
							+'<h4 class="modal-title">通知！</h4>'
						  +'</div>'
						  +'<div class="modal-body tecenter pdb15">'
							+'Do you wish to close?'
						  +'</div>'
						  +'<div class="modal-footer pdt10">'
							+'<button type="button" class="btn btn-default pull-left btn-sm" data-dismiss="modal">取消</button>'
							+'<button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" id="closeMod">确认</button>'
						  +'</div>'
						+'</div>'
					  +'</div>'
					+'</div>';

$('body').append(closeModal);

$('.operator-table').on('click','tbody>tr>td.operator-table-td>a>i.glyphicon-ban-circle',function(){
	var self = this;
	$('#closemodal').modal();
	$('#closeMod').click(function(){
		
	})
	$('#closemodal').on('hidden.bs.modal', function (e) {
		self = null;
	})
})

//关闭操作
var openModal = '<div class="modal fade" id="openmodal">'
					  +'<div class="modal-dialog modal-sm">'
						+'<div class="modal-content">'
						  +'<div class="modal-header">'
							+'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
							+'<h4 class="modal-title">通知！</h4>'
						  +'</div>'
						  +'<div class="modal-body tecenter pdb15">'
							+'Do you wish to open?'
						  +'</div>'
						  +'<div class="modal-footer pdt10">'
							+'<button type="button" class="btn btn-default pull-left btn-sm" data-dismiss="modal">取消</button>'
							+'<button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" id="openMod">确认</button>'
						  +'</div>'
						+'</div>'
					  +'</div>'
					+'</div>';

$('body').append(openModal);

$('.operator-table').on('click','tbody>tr>td.operator-table-td>a>i.fa-folder-open',function(){
	var self = this;
	$('#openmodal').modal();
	$('#openMod').click(function(){
		
	})
	$('#openmodal').on('hidden.bs.modal', function (e) {
		self = null;
	})
})

//通用提示框
function adModal(default_txt,makebtn,showCallback,hideCallback){
    var defaulbtn = '';
    if(makebtn){
        defaulbtn = '<button type="button" class="btn btn-default pull-left btn-sm" data-dismiss="modal">取消</button>'
             +'<button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" id="closeMod">确认</button>';   
    }else{
        defaulbtn = '';
    }
    
    var defaultModal = '<div class="modal fade" id="defaultModal">'
					  +'<div class="modal-dialog modal-sm">'
						+'<div class="modal-content">'
						  +'<div class="modal-header">'
							+'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
							+'<h4 class="modal-title">通知！</h4>'
						  +'</div>'
						  +'<div class="modal-body tecenter pdb15">'
							+default_txt
						  +'</div>'
						  +'<div class="modal-footer pdt10">'
				            +defaulbtn
						  +'</div>'
						+'</div>'
					  +'</div>'
					+'</div>';
    
    if($('#defaultModal').length === 0){
        $('body').append(defaultModal);  
    }
        
    $('#defaultModal').modal();
    $('#defaultModal').on('shown.bs.modal', function (e) {
        if(showCallback){
            showCallback();   
        }
    });
    $('#defaultModal').on('hidden.bs.modal', function (e) {
        if(hideCallback){
            hideCallback();   
        }
        $('#defaultModal').remove();
	})
};




/*weian-checkbox表单相关*/
$('.weian-check').append("<input type='checkbox'>");

$('*').on('change','.weian-check > input[type="checkbox"]',function(){
	isChecked = $(this).is(':checked');
	if(isChecked){
		$(this).prop("checked", true).parent('.weian-check').addClass('checked');
	}else{
		$(this).prop("checked", false).parent('.weian-check').removeClass('checked');
	}
})

//默认选中
$('.weian-check.checked').find('input[type="checkbox"]').prop('checked',true).parent('.weian-check').addClass('checked');


/*data-select下拉组件*/
var selEach = function(obj,callback){
	var value,
		i = 0,
		length = obj.length,
		isArray = Object.prototype.toString.call(obj) == '[object Array]';
	
	if(isArray){
		for(;i<length; i++){
			callback.call(obj[i],i,obj[i]);
		}
	}else{
		for(i in obj){
			value = callback.call(obj[i],i,obj[i]);
		}
	}
	
	return obj;
}

/*var appendSelLi = function(goId,data){
	selEach(data,function(i,n){
		var li = $('<li><a href="###" id='+n.id+'>'+n.firstname+' '+n.lastname+'</a></li>')
		$('[data-select-go='+goId+']').next('ul.data-select').append(li);
	});
}
*/

var appendSelLi = function(goId,data,field){
	selEach(data,function(i,n){
		var showfield = "";	
		for (i = 0; i < field.length; i++){
			showfield += n[field[i]];
		}
		var li = $('<li><a href="###" id='+n.id+'>'+showfield+'</a></li>')
		$('[data-select-go='+goId+']').next('ul.data-select').append(li);
	});
}

var appendSelLiDefault = function(goId,data){
	selEach(data,function(i,n){
		var li = $('<li><a href="###">'+n+'</a></li>')
		$('[data-select-go='+goId+']').next('ul.data-select').append(li);
	});
}

var appendSelLiDefault = function(goId,data){
	selEach(data,function(i,n){
		li = $('<li><a href="###">'+n+'</a></li>')
		$('[data-select-go='+goId+']').next('ul.data-select').append(li);
	});
}

$('[data-select]').wrap("<div class='dataUlSelect'></div>");
$('.dataUlSelect').append("<ul class='data-select'></ul>");
$('body').on('mouseover','.dataUlSelect .data-select li a',function(){
	$(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
});

$('body').click(function(){
	$('.data-select').hide();
})

$('body').on('click','.dataUlSelect .data-select li a',function(){
	var text = $(this).text();
	var cid = $(this).attr('id');
	$(this).parents('.data-select').siblings($('[data-select]')).val(text);
	$(this).parents('ul').siblings($("[data-select]")).attr('data-cid',cid);
});


function filterSelect(input,div){
	
	var re = new RegExp(".*"+input+".*");
	var afterSelect = $('<ul class="data-select" style="display:block;"></ul>')
	var count = 0 ;
	div.find(".data-select").eq(0).find('li').each(function(index,li){
		if(count>9){
			return;
		}
		
		if(re.test($(li).find('a').text())){
			//只取前10個
			var newli = $(li).clone();
			afterSelect.append(newli);
			count++;
		}
	})
	div.find(".data-select").eq(0).siblings(".data-select").remove();
	div.append(afterSelect);
}

$('body').on('keyup','.dataUlSelect input',function(event){
	event.preventDefault();
	//清空
	$(this).attr('data-cid','-99');
	if($(this).val() != ''){
		
		if(event.keyCode !== 38 && event.keyCode !== 40 && event.keyCode !== 13){
			filterSelect($(this).val(),$(this).parent('div'));
		}
		
		$(this).siblings($('.data-select')).last().show();
		var isFirst = $(this).parent('div').find('ul').last().find('li:first-child').find('a').hasClass('active'),
			isLast = $(this).parent('div').find('ul').last().find('li:last-child').find('a').hasClass('active'),
			isAll = $(this).parent('div').find('ul').last().find('li').find('a').hasClass('active')
		if(event.keyCode === 38){			
			if(isFirst){
				$(this).parent('div').find('ul').last().find('li:first-child').find('a').addClass('active');
			}else{
				$(this).parent('div').find('ul').last().find('li').find('a.active').removeClass('active').parent('li').prev('li').find('a').addClass('active');	
			}			
		}else if(event.keyCode === 40){			
			if(isAll){
				$(this).parent('div').find('ul').last().find('li').find('a.active').removeClass('active').parent('li').next('li').find('a').addClass('active');		
			}else{
				$(this).parent('div').find('ul').last().find('li:first-child').find('a').addClass('active');
			}	
			
			if(isLast){
				$(this).parent('div').find('ul').last().find('li:last-child').find('a').addClass('active');
			}			
		}
		
		if(event.keyCode === 13){
			event.preventDefault();
			var cid = $(this).parent('.dataUlSelect').find('ul').last().find('li').find('a.active').attr('id');
			var text = $(this).parent('.dataUlSelect').find('ul').last().find('li').find('a.active').text();
			var cid =  $(this).parent('.dataUlSelect').find('ul').last().find('li').find('a.active').attr('id');
			if(text != ''){
				$(this).val(text);
				$(this).attr('data-cid',cid);
				$('.data-select').hide();
			}
		}
	}else{
		$('.data-select').hide();
	}
});

/*操作成功与失败的提示*/
var calloutHTML = '<div class="callout calloutfa">'+
	          		'<p><span></span> <strong></strong></p>'+
          		  '</div>';
if($('.calloutfa').length == 0){
	$('.content-header').after(calloutHTML);
}

function calloutOptResult(text,issuccess){
	$('.calloutfa').find('p').find('span').text(text);
	$('.calloutfa').fadeIn(300);
	if(issuccess){
		//$('.calloutfa').find('p').find('strong').text('成功:-D');
		$('.calloutfa').addClass('callout-success').removeClass('callout-danger');
	}else{
		//$('.calloutfa').find('p').find('strong').text('失败/(ㄒoㄒ)/~~');
		$('.calloutfa').addClass('callout-danger').removeClass('callout-success');
	}
	setTimeout(function(){
		$('.calloutfa').fadeOut(300);
	},2000);
}
//calloutOptResult('2333',false);

/*dropdown扩展*/
$('.dropdown').find('.dropdown-menu li a').click(function(){
	var text = $(this).text();
	$(this).parents('.dropdown-menu').siblings('button').text(text);
})

/*sidebar侧边栏固定效果*/
function listenSidebar(){
	var sidHeight = $('.sidebar').height(),
		winHeight = $(window).scrollTop();
	
	if(winHeight>sidHeight){
		$('.sidebar').addClass('fixed').css('top','0px');
	}else if(winHeight == 0){
		$('.sidebar').removeClass('fixed');
	}
}

setInterval(function(){
	$(document).on('scroll',function(){
		listenSidebar();
	});
},1500);

/*loading效果*/
var loadHtml = '<div class="loading">'
                +'<div class="loader">Loading...</div>'
             + '</div>';
$('body').append(loadHtml);
var loading = $('.loading');
$(document).ajaxStart(function(){
    loading.show();
});
$(document).ajaxStop(function(){
    loading.hide();
});
$(document).ajaxError(function(){
    adModal("请求内容不存在");
});

/*获取input[file]的路径和文件名*/
function fileChange(e){

    var src=e.target || window.event.srcElement; //获取事件源，兼容chrome/IE
    //alert( src.value );
    //测试chrome浏览器、IE6，获取的文件名带有文件的path路径

    //下面把路径截取为文件名
    var file=src.value
    var filename = file.substring( file.lastIndexOf('\\')+1 ) ;

    //获取文件名的后缀名（文件格式）
    //alert( filename.substring( filename.lastIndexOf('.')+1 ) );

    return {
        _file: file,
        _filename: filename
    }

};


/*
    checkedTableAll通用表格头部checkbox全选与全不选.
    example: new CheckedTableAll($('#example'));
*/
    function CheckedTableAll($element){
        var $element = this.$element = $element;
        this.$thckeck = $element.find('thead tr th:first-child input[type="checkbox"]');
        this.$tdcheck = $element.find('tbody tr td:first-child input[type="checkbox"]');
        this.$length = this.$tdcheck.length;
        this.$len = 0;
        this.bind();
    };

    CheckedTableAll.prototype = {
        bind: function(){
            var _this = this;
            _this.checkedAll();
            _this.checkEd();
            console.log('length ' + _this.$length);
        },
        checkedAll: function(){
            var _this = this;
            this.$thckeck.on('change', function(){
                if(_this.$thckeck.prop('checked')){
                    _this.$tdcheck.prop('checked', true);
                    _this.$len = _this.$length;
                }else{
                    _this.$tdcheck.prop('checked', false);
                    _this.$len = 0;
                }
                console.log('len ' + _this.$len);
            });
        },
        checkEd: function(){
            var _this = this;
            this.$tdcheck.on('change', function(){
                if($(this).prop('checked')){
                    $(this).prop('checked', true);
                    _this.$len += 1;
                }else{
                    $(this).prop('checked', false);
                    _this.$len -= 1;
                }
                if(_this.$len<_this.$length){
                    _this.$thckeck.prop('checked', false);
                }else{
                    _this.$thckeck.prop('checked', true);
                }
                console.log('len ' + _this.$len);
            });
        }
    };

/*modalTab modal内部的tab切换中英文*/
$('.modalTab .nav-tabs li').click(function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	$($(this).parents('.modalTab').find('.modal-body')[$(this).index()]).addClass('active').siblings('.modal-body').removeClass('active');
});
//关闭后默认为英文
$('.modalTab').on('hidden.bs.modal', function (e) {
	$('.modalTab .nav-tabs li:nth-child(1)').addClass('active').siblings('li').removeClass('active');
	$(this).find('.modal-body').eq(0).addClass('active').siblings('.modal-body').removeClass('active');
})

/*range效果*/
$('.range input[type="range"]').on('change',function(){
    var value = $(this).val();
    $(this).next('span.ranv').text(value+'%');
});

/*表格行点击active效果*/
$('body').mousedown(function(){
    $('.table>tbody>tr').removeClass('active');
});
$('.table').on('mousedown', 'tbody>tr', function(e){
    e.stopPropagation();
    $('.table>tbody>tr').removeClass('active');
    $(this).addClass('active');
});
$('.table tbody').on('mousedown', 'tr>td a', function(e){
    e.stopPropagation();
    $('.table>tbody>tr').removeClass('active');
});
$('.table tbody').on('mouseup', 'tr>td a', function(e){
    e.stopPropagation();
    $('.table>tbody>tr').removeClass('active');
});
function trActMousUp(url){
    $('body').mouseup(function(){
        if($('.table>tbody>tr').hasClass('active')){
            window.location.href=url; 
            $('.table>tbody>tr').removeClass('active');
        }
    });
};

/*格式化钱*/
function formatMoney(s, type) {  
    if (/[^0-9\.]/.test(s))  
        return "0";  
    if (s == null || s == "")  
        return "0";  
    s = s.toString().replace(/^(\d*)$/, "$1.");  
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");  
    s = s.replace(".", ",");  
    var re = /(\d)(\d{3},)/;  
    while (re.test(s))  
        s = s.replace(re, "$1,$2");  
        s = s.replace(/,(\d\d)$/, ".$1");  
    if (type == 0) {// 不带小数位(默认是有小数位)  
        var a = s.split(".");  
        if (a[1] == "00") {  
            s = a[0];  
        }  
    }  
    return s;  
}  

/*data-table-arrow*/
$('table th[data-table-arrow]').append('<button type="button" title="点击展开" data-table-btn-arrows><i class="fa fa-arrows-h"></i></button>');
$('table th[data-table-arrow]').on('click', 'button[data-table-btn-arrows]', function(){
    $(this).parent('th[data-table-arrow]').toggleClass('width').siblings('th').removeClass('width');
});


//对导入Excel表导入的警告信息的提示
function alertNoHide(statemain, title, content) {
    var dom = '';
    
    if($('.alert').length === 0) {
        dom = '<div class="alert alertNoHide alert-dismissible '+state[statemain].classname+'">'
                +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
                +'<h4><i class="icon fa '+state[statemain].faname+'"></i> '+title+'</h4>'
                +content
              +'</div>';
        $('body').append(dom);
        setTimeout(function(){
            $('.alert').addClass('show');
        }, 50);
    } else {
        return false;
    }
};


/*alertNoHide提示栏，需要手动关闭*/
(function(window,jQuery,undefined){
    var state = {
        success: {
            classname: 'alert-success',
            faname: 'fa-check'
        },
        warning: {
            classname: 'alert-warning',
            faname: 'fa-warning'
        },
        error: {
            classname: 'alert-danger',
            faname: 'fa-ban'
        }
    }
    
    function alertNoHide(statemain, title, content) {
        var dom = '';
        
        if($('.alert').length === 0) {
            dom = '<div class="alert alertNoHide alert-dismissible '+state[statemain].classname+'">'
                    +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
                    +'<h4><i class="icon fa '+state[statemain].faname+'"></i> '+title+'</h4>'
                    +content
                  +'</div>';
            //$("#section").append(dom);
            $('body').prepend(dom);
            setTimeout(function(){
                $('.alert').addClass('show');
            }, 50);
        } else {
            return false;
        }
    };
    
 window.alertNoHide = alertNoHide;
})(window,$);