/**
 * Created by jc on 2017/9/22.
 */




$(function () {
    
    $("#reset").click(function () {
        $(".slideTxtBox .bd").html("");
        $(".slideTxtBox .hd ul.clearfix").html("");
        $("#dLabel").css("color","#C1A270");
        $("#dLabel").attr("data-toggle","dropdown");
        $(".mobile-box").html("");
    })
    //初始化时间控件
    $('.data-time').datetimepicker({
        needDay:true,
        changeMonth: true, //显示月份
        changeYear: true, //显示年份
        showButtonPanel: true, //显示按钮
        timeFormat: "HH:mm:ss",
        dateFormat: "yy-mm-dd"
    });

    //表单校验
    // var step1 = {};
    // $("#step-1").click(function () {
    //     var ret = $.formValidator.pageIsValid("1");
    //     var gameName = $("#game-name").val();
    //    if(ret){
    //        //step1.game-name:gameName;
    //    }
    //    //console.log(step1);
    // });

})


function test(obj){
    $(obj).addClass("on");
    $(obj).siblings("li").removeClass("on");
    var name = $(obj).attr("name");
    $("[name='"+name+"-ul']").show();
    $("[name='"+name+"-ul']").siblings("ul").hide();

}
$(function () {
        // 添加通用积分
        $(".integral").click(function () {
            var length = $(".slideTxtBox .hd ul").children("li").length+1;
            if(length>=3){
                $("#dLabel").css("color","#ccc");
                $("#dLabel").attr("data-toggle","");
                $("#dLabel").parent("div").removeClass("open")
            }
            var name = "name-"+length;
            // 添加通用积分按钮
            $(".slideTxtBox .hd ul.clearfix").append("<li onclick='test(this)' name='"+name+"'><button type=\"button\" class=\"btn btn-w-m btn-default\">通用积分</button></li>")
            // 添加通用积分表单
            $(".slideTxtBox .bd").append("<ul style=\"display: none;\" name='"+name+"-ul"+"'>\n" +
                "    <li class=\"form-horizontal t\">\n" +
                "        <div class=\"form-group\">\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">奖品分类：</label>\n" +
                "            <div class=\"col-sm-8\">\n" +
                "                <input type=\"text\" class=\"form-control name-input\" id=\"\" disabled placeholder=\"通用积分\" style=\" border: none;background: none;\" name='"+name+"-1"+"'/>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"form-group\">\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">中奖可得：</label>\n" +
                "            <div class=\"col-sm-3\">\n" +
                "                <div class=\"input-group\">\n" +
                "                    <input type=\"text\" class=\"form-control name-input\" name='"+name+"-2"+"' placeholder=\"100\"/>\n" +
                "                    <span class=\"input-group-addon\">钡</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">奖品数量：</label>\n" +
                "            <div class=\"col-sm-3\">\n" +
                "                <div class=\"input-group\">\n" +
                "                    <input type=\"text\" class=\"form-control name-input\" name='"+name+"-3"+"' id=\"\" placeholder=\"10\"/>\n" +
                "                    <span class=\"input-group-addon\">个</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"form-group\">\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">消耗积分：</label>\n" +
                "            <div class=\"col-sm-10 f-blod\">\n" +
                "                <p class=\"form-control-static f16 pt3\">100 钡 * 10个 = <span class=\"red\">1000</span> 钡</p>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </li>\n <input type='hidden' value='1' name='"+name+"-4"+"'/>" +
                "</ul>")
        })




            //添加彩票
            $(".caipiao").click(function () {
                var length2 = $(".slideTxtBox .bd ul").children("li").length;
                var length = length2 + 1;
                if (length >= 3) {
                    $("#dLabel").css("color", "#ccc");
                    $("#dLabel").attr("data-toggle", "");
                    $("#dLabel").parent("div").removeClass("open")
                }
                var name = "name-" + length;
                // 添加通用彩票按钮
                $(".slideTxtBox .hd ul.clearfix").append("<li onclick='test(this)' name='" + name + "'><button type=\"button\" class=\"btn btn-w-m btn-default\">彩票</button></li>")

                // 添加通用彩票表单
                $(".slideTxtBox .bd").append("<ul style=\"display: none;\" name='" + name + "-ul" + "'>\n" +
                    "    <li class=\"form-horizontal t\">\n" +
                    "        <div class=\"form-group\">\n" +
                    "            <label for=\"\" class=\"col-sm-2 control-label\">奖品名称：</label>\n" +
                    "            <div class=\"col-sm-8\">\n" +
                    "                <input type=\"text\" class=\"form-control name-input\" id=\"\" placeholder=\"福利彩票\" disabled style=\" border: none;background: none;\" name='" + name + "-1" + "'/>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group\">\n" +
                    "            <label for=\"\" class=\"col-sm-2 control-label\">奖品数量：</label>\n" +
                    "            <div class=\"col-sm-3\">\n" +
                    "                <div class=\"input-group\">\n" +
                    "                    <input type=\"text\" class=\"form-control name-input\" name='" + name + "-2" + "' id=\"\" placeholder=\"10\"/>\n" +
                    "                    <span class=\"input-group-addon\">个</span>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group\">\n" +
                    "            <label for=\"\" class=\"col-sm-2 control-label\">消耗积分：</label>\n" +
                    "            <div class=\"col-sm-10 f-blod\">\n" +
                    "                <p class=\"form-control-static f16 pt3\">200 钡 * 10个 = <span class=\"red\">2000</span> 钡</p>\n" +
                    "            </div>\n" +
                    "            <p class=\"pl15 f-red\">目前仅限支持双色球和七乐彩</p>\n"+
                    "        </div>\n" +
                    "    </li>\n <input type='hidden' value='3' name='"+name+"-3"+"'/>" +
                    "</ul>")
            })


        $(function () {
            // 添加通用流量
            $(".tyll").click(function () {
                var length = $(".slideTxtBox .hd ul").children("li").length + 1;
                if (length >= 3) {
                    $("#dLabel").css("color", "#ccc");
                    $("#dLabel").attr("data-toggle", "");
                    $("#dLabel").parent("div").removeClass("open")
                }
                var name = "name-" + length;
                // 添加通用积分按钮
                $(".slideTxtBox .hd ul.clearfix").append("<li onclick='test(this)' name='" + name + "'><button type=\"button\" class=\"btn btn-w-m btn-default\">通用流量</button></li>")
                // 添加通用积分表单
                $(".slideTxtBox .bd").append("<ul style=\"display: none;\" name='" + name + "-ul" + "'>\n" +
                    "    <li class=\"form-horizontal t\">\n" +
                    "        <div class=\"form-group\">\n" +
                    "            <label for=\"\" class=\"col-sm-2 control-label\">奖品名称：</label>\n" +
                    "            <div class=\"col-sm-8\">\n" +
                    "                <input type=\"text\" class=\"form-control name-input\" id=\"\" placeholder=\"通用流量\" disabled style=\" border: none;background: none;\" name='" + name + "-1" + "'/>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group\">\n" +
                    "            <label for=\"\" class=\"col-sm-2 control-label\">奖品分类：</label>\n" +
                    "            <div class=\"col-sm-2\">\n" +
                    "                 <label class='pt5 f14'>\n" +
                    "                   <input class='radio-input' type=\"radio\" name='" + name + "-2" + "' >\n" + "30M" +
                    "                 </label> "+
                    "            </div>\n" +
                    "            <div class=\"col-sm-2\">\n" +
                    "                 <label class='pt5 f14'>\n" +
                    "                   <input type=\"radio\" name='" + name + "-2" + "' >\n" + "100M" +
                    "                 </label> "+
                    "            </div>\n" +
                    "            <div class=\"col-sm-2\">\n" +
                    "                 <label class='pt5 f14'>\n" +
                    "                   <input type=\"radio\" name='" + name + "-2" + "' >\n" + "500M" +
                    "                 </label> "+
                    "            </div>\n" +
                    "            <div class=\"col-sm-2\">\n" +
                    "                 <label class='pt5 f14'>\n" +
                    "                   <input type=\"radio\" name='" + name + "-2" + "' >\n" + "1G" +
                    "                 </label> "+
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group\">\n" +
                    "            <label for=\"\" class=\"col-sm-2 control-label\">奖品数量：</label>\n" +
                    "            <div class=\"col-sm-3\">\n" +
                    "                <div class=\"input-group\">\n" +
                    "                    <input type=\"text\" class=\"form-control name-input\" name='" + name + "-3" + "' id=\"\" placeholder=\"10\"/>\n" +
                    "                    <span class=\"input-group-addon\">个</span>\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"form-group\">\n" +
                    "            <label for=\"\" class=\"col-sm-2 control-label\">消耗积分：</label>\n" +
                    "            <div class=\"col-sm-10 f-blod\">\n" +
                    "                <p class=\"form-control-static f16 pt3\">500 钡 * 10个 = <span class=\"red\">5000</span> 钡</p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </li>\n <input type='hidden' value='1' name='" + name + "-4" + "'/>" +
                    "</ul>")
            })
        })
        $(function () {
            $(".mobile-szmposbg").mouseover(function () {
                $(".mobile-szmposbg1").show().css("background","rgba(0,0,0,.9)");
            });
            $(".mobile-szmposbg").mouseout(function () {
                $(".mobile-szmposbg1").hide();
            });

            $("#step-1").click(function () {
                window.location.href="/web/b2b/b2b-marketingBackstage/game-code02.html"
            });
            $("#step-2").click(function () {
                window.location.href="/web/b2b/b2b-marketingBackstage/game-code03.html"
            });



        })


    })


