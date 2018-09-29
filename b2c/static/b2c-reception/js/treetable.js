/**
 * Created by jc on 2017/7/18.
 */
$(function () {
    var treetable     = $(".b2c-treetable");
    var tdBtn         = "<a class='indenter' href='javascript:void(0);'onclick='indenter(this);'><i class='fa fa-caret-right'></i></a>";
    var treetableLine = treetable.find("tbody tr");
    treetable.find("tbody tr.collapsed").hide();

    treetableLine.each(function () {
        var ttId = $(this).attr("data-tt-id");
        if(ttId==3){
            $(this).find("td:first").html(tdBtn);
            $(this).addClass("branch");
        }else if(ttId=="3-1"){
            $(this).addClass("leaf");
        }
    })
    


})


//展开收缩折叠表格
function indenter(aBtn) {
    var tr1 = $(aBtn).parents("tr").attr("data-tt-id");
    var tr2 = $(aBtn).parents("tbody").find("tr");

    if($(aBtn).parents("tr").hasClass("on") && $(aBtn).parents("tr").nextAll("tr.collapsed").hasClass("on")){
        $(aBtn).find("i").removeClass("fa-caret-down").addClass("fa-caret-right");
        $(aBtn).parents("tr").removeClass("on");
        $(aBtn).parents("tr").nextUntil("tr.branch",".collapsed").hide().removeClass("on");
    }else {
        $(aBtn).find("i").removeClass("fa-caret-right").addClass("fa-caret-down");
        $(aBtn).parents("tr").addClass("on");
        $(aBtn).parents("tr").nextUntil("tr.branch",".collapsed").show().addClass("on");
    }

}