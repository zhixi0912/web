$(function(){
	$.ajax({
        type: 'get',
        url: "/51pointsBackstage/virtual/list",
        data: "",
        async:false,
        dataType:'json',
        success: function(pageData){
        	updateMenu(pageData);
      	},
	    error:function(){
	    }
	});
});

function updateMenu(pageData){
	$("#sidebar-menu").empty();
	var menu="";
	for(var key in pageData){
		menu+="<li>"
		+"<a href='#'>"
        +" <i class='glyphicon glyphicon-th-list'></i>"
        +" <span >"+pageData[key].resourceName+"</span>"
        +" <i class='fa fa-angle-left pull-right'></i>"
        +"</a>"
        if(pageData[key].lis!=""){
        	 menu+="<ul class='treeview-menu'>"
        	for(var re in pageData[key].lis){
        	  menu+="<li class='treeview' >"
              +"     <a href='/51pointsBackstage/product/test'>"
              +"         <i class='glyphicon glyphicon-list-alt'></i> "
              +"         <span>"+pageData[key].lis[re].resourceName+"</span>"
              +"    </a>"
              +" </li>"
        	}
        	 menu+=" </ul>";
        }
        +"</li>";
	}
	$("#sidebar-menu").prepend(menu);
}