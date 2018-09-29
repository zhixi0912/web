// integral creation_v1.js
$(function(){
    $("#d1").select({
        title: "展示类型",
        autoClose:true,
        items: ['日用品','家居用品','食品','酒/饮料','服饰','化妆品','化妆品','化妆品','化妆品','化妆品'],
        onChange: function(d) {
            $.alert("你选择了"+d.values);
        }
    });
});
$(function(){
    $("#d2").select({
        title: "展示类型",
        autoClose:true,
        items: ['日用品','家居用品','食品','酒/饮料','服饰','化妆品'],
        onChange: function(d) {
            $.alert("你选择了"+d.values);
        }
    });
});
$(function(){
    $('#tab1').tab({defaultIndex:0,activeClass:"tab-green"});
    $('#tab2').tab({defaultIndex:2,activeClass:"tab-red"});
    $('#tab3').tab({defaultIndex:0,activeClass:"tab-blue"});
    $('#tab4').tab({defaultIndex:0,activeClass:"tab-blue "});
    $('#tab5').tab({defaultIndex:1,activeClass:"bg_green"});
    $('#tab6').tab({defaultIndex:2,activeClass:"bg_red"});
});

$(function(){

    $("#selection-1,#selection-1-1").picker({
        title: "请选择类型",
        toolbarCloseText:'确定',
        cols: [
            {
                textAlign: 'center',
                values: ["类型一","类型二","类型三","类型四"],
//                        displayValues:['新西兰','美国','日本'],
            }
        ]
    });
    $("#selection-2,#selection-2-1").picker({
        title: "请选择类型",
        toolbarCloseText:'确定',
        cols: [
            {
                textAlign: 'center',
                values: ["代打印一","代打印二","代打印三","代打印四"],
//                        displayValues:['新西兰','美国','日本'],
            }
        ]
    });
    $("#selection-3,#selection-3-1,#selection-3-2").picker({
        title: "请选择领取规则",
        toolbarCloseText:'确定',
        cols: [
            {
                textAlign: 'center',
                values: ["规则一","规则二","规则三","规则四"],
//                        displayValues:['新西兰','美国','日本'],
            }
        ]
    });


    $("#date,#date1,#date2,#date3").datetimePicker({title:"选择日期",m:1});
    $("#datetime,#datetime1").datetimePicker({title:"选择日期时间",min:'2015-12-10',max:'2050-10-01'});
    $("#time,#time1,#time2,#time3,.time").picker({title:"选择时间",
        cols: [
            {
                textAlign: 'right',
                values: (function () {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) { arr.push(i < 10 ? '0' + i : i); }
                    return arr;
                })()

            },
            {
                textAlign: 'right',
                values:  (function () {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                    return arr;
                })(),
            }
        ]});
});
// $(function () {
//     $(".form1").click(function () {
//         $("#form-2").reset();
//     })
//     $(".form2").click(function () {
//         $("#form-1").reset();
//     })
//
// })

function form1() {
    document.getElementById("form1").reset()
    return
}
function form2() {
    document.getElementById("form2").reset()
    return
}