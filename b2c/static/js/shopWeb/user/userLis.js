

//查询
var config = {	   

	createTime:"日期",
	searchDefault:"请输入内容",
	timeDefault:"选择日期",
		
	projectOwnerName: '负责人',
	status:'状态',
	type:'类型',
	
	Equals: '等于',
	GreaterThanOrEqualTo: "不小于",
	LessThanOrEqualTo: '不大于',
	Like: '包含',
	Between: '范围'
}


//分页
$(function(){
	initPage(0);
});	
function initPage(pageNum) {
	$.ajax({
		 type : 'post',
		 url :  "./getList",
		 data : {
             'page' : pageNum,		
         },  
		dataType : 'json',
		success : function(PageData) {

//             var pages = PageData.totalPages;  //总页数
//             var pageNum = PageData.number + 1; //当前页面
//             var pageSize = PageData.size; //每页大小
//             var totalRows = PageData.totalElements;
			var pages=PageData.count/PageData.pageSize;
			var pageNum=PageData.pageNo+1;
			var pageSize =PageData.pageSize;
			var totalRows = PageData.count;
             $("#listpage")
                     .bs_pagination(
                             {
                                 currentPage : pageNum,
                                 totalPages : pages,
                                 totalRows : totalRows,
                                 visiblePageLinks : 8,
                                 rowsPerPage : pageSize,
                                 showGoToPage : false,
                                 showRowsPerPage : false,
                                 showRowsInfo : false,
                                 showRowsDefaultInfo : false,
                                 navListContainerClass : "col-xs-12 col-sm-12 col-md-12",//使分页按钮区域占一整行
                                 containerClass : "",//包含按钮的class为空，原为well，有背景
                                 onLoad : function(event, data) {//分页按钮加载时
//                                     showPageList(PageData);
                                 },
                                 onChangePage : function(event, data) {//分页按钮改变时
                                	 initPage(data.currentPage - 1);
                                 }
                             });
         },error:function(){
        	 }
		});
}
//window.location.href = "/accounting/account/review?accountId="+data.accountId;
function showPageList(data) {
	$("#listpage div div").addClass("blockquote-reverse");
	$("#listpage div div").attr("style", "border: 0px none;");
	$("#tablelist").empty();
	var tableHtml = "";//拼接展示列表		
	for ( var key in data.content) {
		tableHtml += "<tr><td style='text-align:center'><a href='/accounting/account/review?accountId="+data.content[key].id+"'>" + data.content[key].id
				+"</a></td><td style='text-align:center'>" + transDate(data.content[key].time)
				+ "</td><td style='text-align:center'>" + transState(data.content[key].state)
				+ "</td><td style='text-align:center'>" + transType(data.content[key].type)
				+ "</td><td style='text-align:right'>" + formatMoney(data.content[key].amount)
				+ "</td><td style='text-align:center'>" + data.content[key].projectOwnerName
				+ "</td></tr>";			
	};
	$("#tablelist").prepend(tableHtml);
	new CheckedTableAll($('#table1'));
	$('#table1').find('thead tr th input[type="checkbox"]').prop('checked', false);
}

function formatMoney(money){
	var n = Number(money.toFixed(2)).toLocaleString();
	if(n.indexOf(".") == -1){
		n += ".00"
	}
	return n;
}

function transState(state){
	if(state == 0){
		return "待审核";
	}else if(state == 1){
		return "通过";
	}else if(state == 2){
		return "未通过";
	}else{
		return "错误";
	}
}

function transType(type){
	switch(type){
	case 1:
		return "调整";
	case 2:
		return "其它内扣";
	case 3:
		return "返税";
	default:
		return "";
	}
}

function transDate(time){
	var date = new Date(time);
	return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}


