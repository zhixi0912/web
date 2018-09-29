var sourceOptionArray = new Array();
//sourceOptionArray.push(new selectionOpt("时间",config.verbal));

sourceOptionArray.push(new selectionOpt("Verbal",config.verbal));
sourceOptionArray.push(new selectionOpt("Written",config.written));

function selectionOpt(id, value) {
	this.id = id;
	this.value = value;
}
//实例化  
$(function(){
	 var domHtml = [           
		{
		    id: 'createDate',
		    tit: config.createTime,
		    type:'defaultDatetime'
		},
		{
  			id: 'status',
      		tit: config.status,
      		selectAction: [{
      				value: "equalTo", 
      				text: config.Equals
      				}],
      		domhtml_spec: [{'id':'0','value':'待审核'},
      		               {'id':'1','value':'通过'},
      		              ],
      		fun: function(){}
  		},
  		{
  			id: 'type',
      		tit: config.type,
      		selectAction: [{
      				value: "equalTo", 
      				text: config.Equals
      				}],
      		domhtml_spec: [
      		               {'id':'1','value':'调整'},
      		               {'id':'2','value':'其它内扣'},
      		               {'id':'3','value':'返税'},
      		              ],
      		fun: function(){}
  		},
        
		{
		    id: 'projectOwnerName',
		    tit: config.projectOwnerName,
		    selectAction: [{
		        value: "like",
		        text: config.Like
		    },
		    {
		        value: "eq",
		        text: config.Equals
		    }],
		    domhtml_spec: searchType.input,
		    fun: function() {}
		},
  		
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
        type: 'get',
        url: "//virtual/list",
        data: $('#searchConditionForm').serialize(),
        async:false,
        dataType:'json',
        success: function(pageData){
        	updateTableResult(pageData);
        	if(isInit) {
        		updatePagebar(pageData);
        	}
      	},
	    error:function(){
	    }
	});
}


function updateTableResult(data) {
	$("#tablelist").empty();
	var tableHtml = "";//拼接展示列表		
	for ( var key in data.searchResults) {
		tableHtml += "<tr><td style='text-align:center'><a href='/accounting/account/review?accountId="+data.searchResults[key].id+"'>" + data.searchResults[key].id
		+"</a></td><td style='text-align:center'>" + transDate(data.searchResults[key].time)
		+ "</td><td style='text-align:center'>" + transState(data.searchResults[key].state)
		+ "</td><td style='text-align:center'>" + transType(data.searchResults[key].type)
		+ "</td><td style='text-align:right'>" + formatMoney(data.searchResults[key].amount)
		+ "</td><td style='text-align:right'>" + data.searchResults[key].projectOwnerName
		+ "</td></tr>";		
			
	};
	$("#tablelist").prepend(tableHtml);
} 


function complainSourcei18n(source) {
	if(source == "Written") {
		return config.written;
	} else {
		return config.verbal;
	}
}


function updatePagebar(data) {
    $("#listpage").bs_pagination({
      currentPage: data.currentPageNum+1,     
      totalPages: data.pageNum, 
      visiblePageLinks: 5,
      rowsPerPage: 1,     
      showGoToPage: false,
      showRowsPerPage: false,
      showRowsInfo: false,
      showRowsDefaultInfo: false,
      navListContainerClass: "col-xs-12 col-sm-12 col-md-12 blockquote-reverse ",
      containerClass: "",
      onLoad: function(event, data) {
    		
      },
      onChangePage: function(event, data) {
    	  $("#pageNumber")[0].value = data.currentPage-1;
    	  
    	  ajaxQuery(false);
      }
  	});
	
} 


//格式化时间戳
function formatTime(time) {
	if(time != null){
	var date = new Date(time)
	var year = date.getFullYear(); //年
	var month = date.getMonth() + 1; //月
	month = month < 10 ? '0' + month : month;
	var day = date.getDate();//日
	day = day < 10 ? '0' + day : day;
	return year+'-'+month+'-'+day;
	}
}


//金额格式化
/**
 * 
 * @param s 金额
 * @param n 小数位
 * @returns
 */
function fmoney(s, n) 
{
	if(s == null){
		return '0.00';
	}else{
		
		n = n > 0 && n <= 20 ? n : 2;
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
		t = "";
		for (i = 0; i < l.length; i++) {
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		}
		var formatmoney = t.split("").reverse().join("") + "." + r;
		if(s<0 && formatmoney.charAt(1) == ',')
			formatmoney = formatmoney.substring(0,1) + formatmoney.substring(2,formatmoney.length)
		return formatmoney;
	}
} 
