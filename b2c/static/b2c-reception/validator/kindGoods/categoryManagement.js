/**
 * Created by jc on 2017/7/17.
 */

$(function () {

    
})
//上移一行表格
function trUp(td) {
    var trDataId = $(td).parents("tr").prev("tr").attr("data-tt-id");
    var tr =$(td).parents("tr").clone();
    if(trDataId != "3"){
        $(td).parents("tr").prev("tr").before(tr);
        $(td).parents("tr").remove();
    }else {
        layer.open({
            type: 1
            ,area: ['280px', '160px']
            ,title: '温馨提示'
            ,shade: 0.6
            ,anim: -1
            ,content: '<p class="text-center" style="line-height: 40px;">已经到顶了，不能再移动</p>'
            ,btn: ['确定','取消']
            ,yes:function(index, layero){
                layer.close(index);
            }
        });
    }

    // console.log(trDataId);
}
//下移一行表格
function trDown(td) {
    var trDataId = $(td).parents("tr").next("tr").find("td").length;
    var tr =$(td).parents("tr").clone();
    if(trDataId != "2"){

        $(td).parents("tr").next("tr").after(tr);
        $(td).parents("tr").remove();
    }else {
        layer.open({
            type: 1
            ,area: ['280px', '160px']
            ,title: '温馨提示'
            ,shade: 0.6
            ,anim: -1
            ,content: '<p class="text-center" style="line-height: 40px;">已经到顶了，不能再移动</p>'
            ,btn: ['确定','取消']
            ,yes:function(index, layero){
                layer.close(index);
            }
        });
    }

    // console.log(trDataId);
}
//上移一大行表格
function headTrUp(td) {
    var trDataId = $(td).parents("tr").prev("tr");
    if(trDataId.length!=0){
        var tr1 =$(td).parents("tr").clone();
        var tr2 =$(td).parents("tr").nextUntil("tr.branch").clone();
        $(td).parents("tr").prevAll("tr.branch").first().before(tr1);
        tr1.after(tr2);
        $(td).parents("tr").nextUntil("tr.branch").remove();
        $(td).parents("tr").remove("tr");
    }else {
        layer.open({
            type: 1
            ,area: ['280px', '160px']
            ,title: '温馨提示'
            ,shade: 0.6
            ,anim: -1
            ,content: '<p class="text-center" style="line-height: 40px;">已经到顶了，不能再移动</p>'
            ,btn: ['确定','取消']
            ,yes:function(index, layero){
                layer.close(index);
            }
        });
    }
}
//下移一大行表格
function headTrDown(td) {
    var trDataId = $(td).parents("tr").nextAll("tr.branch");
    console.log(trDataId);
    if(trDataId.length!=0){
        var tr1 =$(td).parents("tr").clone();
        var tr2 =$(td).parents("tr").nextUntil("tr.branch").clone();
        $(td).parents("tr").nextAll("tr.branch").first().nextUntil("tr.branch").last().after(tr1);
        tr1.after(tr2);
        $(td).parents("tr").nextUntil("tr.branch").remove();
        $(td).parents("tr").remove("tr");
    }else {
        layer.open({
            type: 1
            ,area: ['280px', '160px']
            ,title: '温馨提示'
            ,shade: 0.6
            ,anim: -1
            ,content: '<p class="text-center" style="line-height: 40px;">已经到顶了，不能再移动</p>'
            ,btn: ['确定','取消']
            ,yes:function(index, layero){
                layer.close(index);
            }
        });
    }
}
//上移到顶
function headTrUpTip(td) {
    var trDataId = $(td).parents("tr").prev("tr");
    if(trDataId.length!=0){
        var tr1 =$(td).parents("tr").clone();
        var tr2 =$(td).parents("tr").nextUntil("tr.branch").clone();
        $(td).parents("tr").prevAll("tr.branch").last().before(tr1);
        tr1.after(tr2);
        $(td).parents("tr").nextUntil("tr.branch").remove();
        $(td).parents("tr").remove("tr");
    }else {
        layer.open({
            type: 1
            ,area: ['280px', '160px']
            ,title: '温馨提示'
            ,shade: 0.6
            ,anim: -1
            ,content: '<p class="text-center" style="line-height: 40px;">已经到顶了，不能再移动</p>'
            ,btn: ['确定','取消']
            ,yes:function(index, layero){
                layer.close(index);
            }
        });
    }
}

//下移到底
function headTrUpBottom(td) {
    var trDataId = $(td).parents("tr").nextAll("tr.branch");
    console.log(trDataId);
    if(trDataId.length!=0){
        var tr1 =$(td).parents("tr").clone();
        var tr2 =$(td).parents("tr").nextUntil("tr.branch").clone();
        $(td).parents("tr").nextAll("tr.branch").last().nextUntil("tr.branch").last().after(tr1);
        tr1.after(tr2);
        $(td).parents("tr").nextUntil("tr.branch").remove();
        $(td).parents("tr").remove("tr");
    }else {
        layer.open({
            type: 1
            ,area: ['280px', '160px']
            ,title: '温馨提示'
            ,shade: 0.6
            ,anim: -1
            ,content: '<p class="text-center" style="line-height: 40px;">已经到顶了，不能再移动</p>'
            ,btn: ['确定','取消']
            ,yes:function(index, layero){
                layer.close(index);
            }
        });
    }
}


//添加一大行
function headTrAdd(tr) {
    var headTabTr = $("#tab-line-1").html();
    $(tr).parents(".ibox-content").prev(".ibox-content").find("table tbody").append(headTabTr);
}

//添加一小行
function trAdd(tr) {
    // debugger;
    var tabTr = $("#tab-line-2").html();
    if($(tr).prev("tr").hasClass("collapsed")){
        $(tr).parents("tr").before(tabTr);
    }else {
        $(tr).parents("tr").prevUntil("tr.branch",".collapsed").show().addClass("on");
        $(tr).parents("tr").prevAll("tr.branch").last().find("i").removeClass("fa-caret-right").addClass("fa-caret-down");
        $(tr).parents("tr").before(tabTr);
    }

}

//删除大行
function dleTr(tr) {
    $(tr).parents("tr").nextUntil("tr.branch",".leaf").remove();
    $(tr).parents("tr").remove();
}
//删除小行
function dleTrLine(tr) {
    $(tr).parents("tr").remove();
}
