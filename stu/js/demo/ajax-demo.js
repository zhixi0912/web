function click(page) {
    var param = {};
    param.limit = 15;
    param.page = page;
    param.column = "created_time"
    param.dir = "desc";
    param.type=$("#type").val();
    param.code=$("#code").val();
    param.businessNo=$("#businessNo").val();
    param.state=$("#state").val();
    param.terraceId=$("#terraceId").val();
    param.supplierId=$("#supplierId").val();
    param.start=$("#start").val();
    param.end=$("#end").val();
    $.ajax({
        type : "get",
        url : "orderAll",
        cache : false, //禁用缓存
        dataType : "json",
        data : param,
        success : function(result) {
            var total = result["total"];//返回数据全部记录
            var content = result["content"];//返回的数据列表
            var html = "";
            for (var i = 0; i < content.length; i++) {
                var temp = content[i];
                html += "<tr><td>" + temp["code"]
                    + "</td><td>" +  temp["time"] + "</td><td>"
                    + temp["terraceName"] + "</td><td>"
                    + temp["supplierName"] + "</td><td>"
                    + temp["content"] + "</td><td>"
                    + temp["price"] + "</td><td>"
                    + temp["num"] + "</td><td>"
                    + temp["profit"] + "</td><td>"
                    + temp["amount"] + "</td><td>"
                    + temp["serviceCharge"] + "</td><td>"
                    + temp["businessNo"] + "</td><td>"
                    + temp["stateStr"] + "</td></tr>";
            }
            $("tbody").html(html);
            var html2 = "<a href=";
            if (page == 1) {
                html2+="'javascript:void(0)'";
            }else{
                html2+="'javascript:click("+ (page - 1)+ ")'";
            }
            html2+="> <button type='button' class='btn btn-white'";
            if (page == 1) {
                html2 += " disabled='disabled'";
            }
            html2 += "><i class='fa fa-chevron-left'></i></button></a>";
            var pageTotal = Math.ceil(total / param.limit);
            for (var j = 1; j <= pageTotal; j++) {
                html2 += "<a href='javascript:click("
                    + j
                    + ")'> <button type='button' class='btn btn-white ";
                if (page == j) {
                    html2 += "active";
                }
                html2 += "'>" + j + "</button></a>";
            }
            html2 += "<a href=";
            if (page == pageTotal) {
                html2+="'javascript:void(0)'";
            }else{
                html2+="'javascript:click("+ (page + 1)+ ")'";
            }
            html2+="> <button type='button' class='btn btn-white'";
            if (page == pageTotal) {
                html2 += " disabled='disabled'";
            }
            html2 += "><i class='fa fa-chevron-right'></i></button></a>";
            if (total > 0) {
                $("#fen").html(html2);
            } else {
                $("#fen").html("");
            }
        },error:function(){
            $("tbody").html("");
            $("#fen").html("");
        }
    });
}