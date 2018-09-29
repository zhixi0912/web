var sourceOptionArray = new Array();
sourceOptionArray.push(new selectionOpt("新建",config.created));
sourceOptionArray.push(new selectionOpt("审批中",config.inApprove));
sourceOptionArray.push(new selectionOpt("生效",config.efficient));
sourceOptionArray.push(new selectionOpt("已归档",config.archived));
sourceOptionArray.push(new selectionOpt("关闭",config.close));



function selectionOpt(id, value) {
	this.id = id;
	this.value = value;
}
//实例化  
$(function(){
	 var domHtml = [
	    {
			id : '合同状态',
      		tit: config.status,
      		selectAction: [
      			{value: "eq", text: config.Equals}
      		 		],
      		domhtml_spec: sourceOptionArray,
      		fun: function() {}
  		}
	   ];
	    
	    var queryBox = new SearchListView(domHtml);
	    queryBox.eachList().eachListChange().toolCheck();
})

function query(){
	formatSearchInput();
	showQueryParamViewer();
	ajaxQuery(true);
}

function ajaxQuery(isInit) {
	$.ajax({
        type: 'post',
        url: "./contract/query",
        data: $('#searchConditionForm').serialize(),
        dataType:'json',
        success: function(pageData){
        	console.log(pageData);
        	updateTableResult(pageData);
        	
        	if(isInit) {
        		updatePagebar(pageData);
        	}
      	}
	});
}

function updateTableResult(data) {
	$('#resultTable > tbody').empty();
	
	var complainList =data.contractVoList;
	
	for (var key in complainList) {
		var stateHtml = '';
		if(complainList[key].contract.externalId==null)
			complainList[key].contract.externalId=" "
		if(complainList[key].contract.ValueAddTax)
			complainList[key].ValueAddTax="新项目";
			   else 
				  complainList[key].ValueAddTax="旧项目"
					  
		 if(complainList[key].contract.type)
			complainList[key].type="新项目";
			   else 
			 complainList[key].type="旧项目"	
				 
		 if(complainList[key].contract.payType==0)
			 complainList[key].payType="银行支付";
		  if(complainList[key].contract.payType==1)
		     complainList[key].payType="支付宝支付"
		  if(complainList[key].contract.payType==2)
		     complainList[key].payType="现金支付"	
		  if(complainList[key].contract.payType==3)
		     complainList[key].payType="其他"
		  if(complainList[key].contract.payType==null)
		     complainList[key].payType=" "	
								  			  
		$('#resultTable > tbody').append('<tr><td><input type="checkbox" name="check" value='+complainList[key].contract.id+'>  <a href="./contract/detail?id='+ complainList[key].contract.id +'">'+ complainList[key].contract.id +'</a></td>'
				+ '<td>'+ complainList[key].contract.externalId +'</td>'
				+ '<td>'+ complainList[key].statusName +'</td>'
			+ '<td>'+ complainList[key].contract.projectName+'</td>'
 			+ '<td>'+ complainList[key].contract.projectOwnername+'</td>'
				+ '<td>'+ complainList[key].contract.amount +'</td>'
     			+ '<td>'+ complainList[key].type +'</td>'
				+ '<td>'+ complainList[key].payType +'</td>'
			+ '<td>'+ complainList[key].ValueAddTax+'</td>'
				);
    	
    	
	};
}

function complainSourcei18n(source) {
	if(source == "Written") {
		return config.written;
	} else {
		return config.verbal;
	}
}

function updatePagebar(data) {
	//console.log(data);
	
    $("#paginationArea").bs_pagination({
      currentPage: data.number+1,     
      totalPages: data.totalPages,      
      totalRows : data.totalElements,
      visiblePageLinks: 5,
     rowsPerPage: data.numberOfElements,     
      showGoToPage: false,
      showRowsPerPage: false,
      showRowsInfo: false,
     showRowsDefaultInfo: false,
      navListContainerClass: "col-xs-12 col-sm-12 col-md-12",
      containerClass: "",
      onLoad: function(event, data) {
    	  // console.log(data);
    	 // showPageList(PageData);
      },
      onChangePage: function(event, data) {
    	 // console.log(data);
    	  $("#pageNumber")[0].value = data.currentPage-1;
    	 // initPage(data.currentPage - 1);
    	 ajaxQuery(false);
      }
  	});
	
}