//默认类型      
var searchType={
      input: '<input type="text" class="form-control" placeholder="' + config.searchDefault + '"/>',
      customInput:'<div class="dataUlSelect">' + '<input type="text" AUTOCOMPLETE ="off" class="form-control" placeholder="' + config.searchDefault + '" id="customerId" data-select data-select-go="searchList">' + '</div>',
      dateTime:'<input type="text" class="form-control tool-date date-input" readonly placeholder="'+config.timeDefault+'">'
      +'<section class="row tool-date-plus">'
      +'<div class="col-sm-6">'
          +'<input  type="text" id="endtime-s" readonly class="form-control date-input" placeholder="'+config.timeDefault+'">'
      +'</div>'
      +'<div class="col-sm-6">' 
          +'<input  type="text" id="endtime-e" readonly class="form-control date-input" placeholder="'+config.timeDefault+'">'
      +'</div>'
 	  +'</section>',
    }


/*搜索逻辑*/
//新建构造函数
function SearchListView(domHtml){ 
	//初始化配置文件
    this.domHtml = configToDomHTml(domHtml);
    this.eachList = eachList;
    this.eachListChange = eachListChange;
    this.toolCheck = toolCheck;
    var dataSeachTmp = {};
    
    $(this.domHtml).each(function(){
    var curDomHtml =  $(this)[0];
   	 var serSel = curDomHtml.selectAction;
   	 var conditionName = curDomHtml.id;
   	 
   	 //比较选项的下拉菜单
     var selectOptions= "";
     
	  for(var j=0; j<serSel.length; j++){
		 selectOptions+=('<option value='+ serSel[j].value +'>' + serSel[j].text + '</option>');
	  }       
   	
     	dataSeachTmp[conditionName]=  {
          'tit': curDomHtml.tit,
          'dom': '<section class="row tool-serach-list" data-id=' + curDomHtml.id + ' checked="true">'
                   +'<div class="col-sm-2">' 
                       +'<span class="weian-check checked"><input type="checkbox" checked="checked" /></span> <span>' + curDomHtml.tit + '</span>'
                   +'</div>'
                   +'<div class="col-sm-4">'
                       +'<select class="form-control" name="" id="">'
                       +selectOptions
                       +'</select>'
                   +'</div>'
                   +'<div class="col-sm-6">'
                       + curDomHtml.domhtml_spec
                   +'</div>'   
               +'</section>',
          'fun': curDomHtml.fun,
          'type':curDomHtml.type,
          'id':curDomHtml.id
       }
     	
   })
   
   this.dataSearch = dataSeachTmp;
   
};



//遍历添加
function eachList(){
    var data = this.dataSearch;
    for(var j in data){
        var option = '<option  value='+j+'>'+data[j].tit+'</option>';
        $('#tool-search-select').append(option);
    }
    return this;
};

//change显示
function eachListChange(){
    var data = this.dataSearch;
    var domHtmlconfig = this.domHtml;
    $('#tool-search-select').on('change',function(){
        var value = $(this).val();
        $('#tool-serach-main').append(data[value].dom);
        //除了实时查询以外执行函数
        if("default_select_input"!=data[value].type){
        data[value].fun(data[value]);
        }
        value = JSON.stringify(value);
        $(this).find('option[value='+value+']').prop('disabled','disabled');
        //添加搜索条件
    });
    return this;
}

//checke显示
function toolCheck(){
    $('#tool-serach-main').on('change','.tool-serach-list .weian-check input[type="checkbox"]',function(){
        var isChecked = $(this).prop('checked');
        if(!isChecked){
            $(this).parents('.tool-serach-list').children('div:nth-child(2)').hide();
            $(this).parents('.tool-serach-list').children('div:nth-child(3)').hide();
        }else{
            $(this).parents('.tool-serach-list').children('div:nth-child(2)').show();
            $(this).parents('.tool-serach-list').children('div:nth-child(3)').show();
        }
        $(this).parents("section").attr("checked",isChecked);
    });
}


//搜索重置
$('#goToolSearch').click(function(){
    var $tool = $('#tool-serach-main .tool-serach-list');
    $tool.each(function(i){
        var isChecked = $tool.eq(i).find('.weian-check input[type="checkbox"]').prop('checked');
        if(!isChecked){
            var value = $(this).attr('data-id');
            $('#tool-search-select').find('option[value='+value+']').prop('disabled',false);
            $(this).remove();
        }
    })
    $("#tool-search-select").val("");
});

//几种默认类型可以自动设置
function configToDomHTml(domConfig){    
	
	for(var i=0;i<domConfig.length;i++){
		var curitem = domConfig[i];
		//判断domHtml的原来内容是不是array
		if(curitem.domhtml_spec instanceof Array){
			curitem.domhtml_spec = configArraySelectOption(curitem.domhtml_spec);
		}
		//没有类型参数什么都不做
		if(curitem.type==null){
			continue;
		}
			switch(curitem.type){
			case 'defaultDatetime':
				//时间空间默认值
				curitem.domhtml_spec = searchType.dateTime;
				curitem.selectAction= [
    	          			{value: "eq", text: config.Equals},
    	          			{value: "ge", text:config.GreaterThanOrEqualTo},
    	          			{value: "le", text: config.LessThanOrEqualTo},
    	          			{value: "between", text: config.Between},
    	          		 	],
	    	        curitem.fun=function(curSearchConfig){
                 	$('.tool-serach-list[data-id='+curSearchConfig.id+'] .date-input').each(function(){
                 		$(this).datepicker({
                 	  		language: lang,
                 	  		multidate: false,
                 	  		autoclose: true,
                 	  	  	format: 'yyyy-mm-dd',
                 	  		orientation: "bottom auto",
                 	  		todayHighlight: true
                 	  	});
                 	})
                 	
               $('#endtime-s')
     		    	.datepicker()
     		    	.on('changeDate', function(ev){
     		    	$(this).parents('form').find('#endtime-e').datepicker('setStartDate', ev.date);
     	    	});
         	
     	    	$('#endtime-e')
     	    		.datepicker()
     	    		.on('changeDate', function(ev){
     	    		$(this).parents('form').find('#endtime-s').datepicker('setEndDate', ev.date);
     	    	});
     	    	
     	    	$('[data-id="'+curSearchConfig.id+'"] > .col-sm-4 > select').addClass('expeEndTime-sel');

                /*$("#tool-serach-main").find('.tool-date-plus').show();*/
                $("#tool-serach-main").on("change",'[data-id="'+curSearchConfig.id+'"] .expeEndTime-sel',function(){
                    var value = $(this).val();
                    var cur = $(this).parents(".tool-serach-list");
                    if(value === 'between'){
                  	  cur.find('.tool-date-plus').show();
                  	  cur.find('.tool-date').hide();
                    }else{
                  	  cur.find('.tool-date').show();
                  	  cur.find('.tool-date-plus').hide();
                    }
                });
          		};    				
				break;
			case 'default_select_input':    				
				curitem.domhtml_spec = $(searchType.customInput).find('input').attr("id",curitem.searchInputId).parent('.dataUlSelect').get(0).outerHTML;
				//curitem.domhtml_spec = searchType.customInput
				curitem.selectAction = [{
				    value: "eq",
				    text: config.Equals
				}];
				var inputid = curitem.searchInputId;
				var url =curitem.ajaxurl;
				var ajaxData = curitem.ajaxData;
				curitem.fun = function() {
				    // 客户名字关联
				    $('#tool-serach-main').on("keyup","#"+inputid,function(event) {
//				    	/当前输入框
				    	var curinput = $(this) 
				    	
				        if ($.trim(curinput.val() != '')) {
				            if (event.keyCode !== 38 && event.keyCode !== 40 && event.keyCode !== 13) {
				                var customerName = curinput.val()
				                if ($.trim(customerName) == "") {
				                	 curinput.attr('data-cid',"-99");
				                    return false;
				                }
				                $.ajax({
				                    type: 'get',
				                    url:  url+ customerName,
				                    data: ajaxData,
				                    success: function(data) {
				                        appendShowList(data,curinput);
				                        // 输入绑定框
				                        var searchresult = curinput.parent('.dataUlSelect').find('ul').eq(1);
				                        searchresult.find('li').each(function() {
				                            if ($(this).text() == curinput.val()) {
				                                curinput.attr('data-cid', $(this).find('a').attr('id'));
				                                return
				                            }
				                        })

				                    },
				                    error: function() {}
				                });
				            }
				        }
				    });
				    //添加客户
				    function appendShowList(data,curinput) {
				        //$('[data-select-go="searchList"]').next('ul.data-select').empty();
				    	curinput.next('ul.data-select').empty();
				        var div = curinput.parent('div');
				        var afterSelect = $('<ul class="data-select" style="display:block;"></ul>') 
				        for (var key in data) {
				            var li = $('<li><a href="###" id=' + data[key].id + '>' + data[key].name + '</a></li>');
				            //$('[data-select-go="searchList"]').next('ul.data-select').append(li);
				            curinput.next('ul.data-select').append(li);
				            afterSelect.append(li);
				        }
				        div.find(".data-select").eq(0).siblings(".data-select").remove();
				        div.append(afterSelect);
				    }

				}()
				break;
		default:
			break;
		}
}
	
	return domConfig;
	
}

function configArraySelectOption(array){
	var selectResult = "" 
		selectResult+='<select class="form-control" name="" id="">';
	for(var i=0; i<array.length; i++){
		selectResult+=('<option value="'+array[i].id+'">'+array[i].value+'</option>')
	}
	
	selectResult+= '</select>';
	return  selectResult;
}

/* 通过搜索条件初始化表单 */
function formatSearchInput(){
	$("#searchConditionArea").html("");
	var queryParamViewer = $("#queryParamViewer").html("");
	
	$("#searchConditionArea").append('<input type="hidden" id="pageNumber" name="page" value="0">');
	$("#searchConditionArea").append('<input type="hidden" id="pageSize" name="size" value="10">');
	
	var conditionCount = 0 ;
    $("#tool-serach-main > section[checked=true]").each(function(){
    	
    	var field = $(this).attr("data-id");
    	$("#searchConditionArea").append('<input type="hidden" name="conditions['+conditionCount+'].field" value="'+field+'">');

    	var fieldName = $(this).find("div:nth-child(1) > span:nth-child(2)").text();
    	
    	// 条件在第二个
    	var action =$(this).find("div:nth-child(2)").find("select").val();
    	$("#searchConditionArea").append('<input type="hidden" name="conditions['+conditionCount+'].action" value="'+action+'">');
    	
    	var actionName =$(this).find("div:nth-child(2)").find("select option:selected").text();
    	
    	// 显示用的变量值
    	var paramsValue = "";
    	
    	var paramInput = $(this).find("div:nth-child(3)").find("input:visible");
    	
    	if( paramInput.length == 0 )
    		paramsValue = $(this).find("div:nth-child(3)").find("select option:selected").text();
    	
    	// 可能是下拉框或者是输入框
    	paramInput.length != 0 ? (paramInput):paramInput =$(this).find("div:nth-child(3)").find("select");
    	
    	var paramsTempValue = "";
    	
    	// 计数
    	var paramCount = 0
    	paramInput.each(function(){    			
    		var param = $(this).val();
    		if("like" == action){
    			param = "%"+param+"%";
    		}

    		// 客户id
    		if("customerId" == field) {
    			param = $(this).attr('data-cid');
    		}
    		
    		$("#searchConditionArea").append('<input type="hidden" name="conditions['+conditionCount+'].params['+paramCount+']" value="'+param+'">');
    		
    		// param values for shown
    		if(paramCount > 0)
    			paramsTempValue = paramsTempValue + ' - ';
    		paramsTempValue = paramsTempValue + param;
    		
    		paramCount++;
    	})
    	
    	if(paramCount>1 || paramsValue == "")
    		paramsValue = paramsTempValue;
    	
    	conditionCount++;
    	queryParamViewer.append(' <span class="label label-primary">' + fieldName + ' ' + actionName + ' ' + paramsValue + '</span> ');
    })
    
    queryParamViewer.append('<span><a href="javascript:showQueryParamViewer()"><i class="fa fa-pencil"></i></a></span> <span><a href="javascript:clearQueryParam()"><i class="fa fa-close"></i></a></span>');
}

function showQueryParamViewer() {
	$("#queryParamEditor").toggle();
	$("#queryParamViewer").toggle();
}

function clearQueryParam() {
	$("#searchConditionArea").html("");
	$("#tool-serach-main").html("");
	$('#tool-search-select>option').each(function(){$(this).attr('disabled',false)});
	showQueryParamViewer();
}