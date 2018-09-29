/**
 * Created by jc on 2017/9/22.
 */



var prize = new Array();
$(function () {
    
    $("#reset").click(function () {
        $(".slideTxtBox .bd").html("");
        $(".slideTxtBox .hd ul.clearfix").html("");
        $("#dLabel").css("color","#C1A270");
        $("#dLabel").attr("data-toggle","dropdown");
        $(".mobile-box").html("");
    })
    //奖品设置切换
    // $(".slideTxtBox").slide({trigger:"click"});
    //初始化时间控件
    $('.data-time').datetimepicker({
        needDay:true,
        changeMonth: true, //显示月份
        changeYear: true, //显示年份
        showButtonPanel: true, //显示按钮
        timeFormat: "HH:mm:ss",
        dateFormat: "yy-mm-dd"
    });
    //规则设置，分享选中效果
    $("#radio-ip-opportunity").click(function () {
        if($(this).is(':checked')){
            $(this).parents("label").find("select").show();
        }else {
            $(this).parents("label").find("select").hide();
        }
        if ($(this).is(':checked')){
            $(this).next().removeAttr("disabled");
        }else{
            $(this).next().val("").attr("disabled","disabled");
        }
    });
    //添加奖项选择效果
    $("#dropdown-menu-a li a").click(function () {
        var dataVal = $(this).attr("data-val");
        $(this).parents(".dropdown").find("#dLabel").attr("data-val",dataVal);
        if($(this).parents(".dropdown").find("#dLabel").attr("data-val")==1){
            $("#shop-list-box-1").removeClass("box-hide");
            $("#shop-list-box-2").addClass("box-hide");
        }else if($(this).parents(".dropdown").find("#dLabel").attr("data-val")==2){
            $("#shop-list-box-2").removeClass("box-hide");
            $("#shop-list-box-1").addClass("box-hide");
        }
    });

    //表单校验
    var step1 = {};
    $("#step-1").click(function () {
        var ret = $.formValidator.pageIsValid("1");
        var gameName = $("#game-name").val();
       if(ret){
           //step1.game-name:gameName;
       }
       //console.log(step1);
    });

    $("#step-2").click(function () {
        window.location.href="/web/b2b/b2b-marketingBackstage/game-add03.html"
    });
    $("#step-3").click(function () {
        window.location.href="/web/b2b/b2b-marketingBackstage/game-add04.html"
    });




    gameBg();


    //转盘游戏添加背景遮罩层
    $(".game-mb-bg-2").hover(
        function () {
            $(this).find(".btn-bg").show();
        },
        function () {
            $(this).find(".btn-bg").hide();
        }
    );
})

//默认加载转盘游戏背景图片
function gameBg() {
    var gameBg = "url(images/game/turnplate-bg_3.png)";
    $("#turnplate").css({background:gameBg,backgroundSize: "100% 98%",backgroundRepeat: "no-repeat"});
}

//选择电子卡券
$(function () {
    $("#choice-card").click(function () {
        layer.open({
            title: '幸运大转盘'
            ,area: ['900px','820px']
            ,type: 1
            ,content: $('#game-card').html()

        });
    })
})

// 按钮单选
$(function () {
    // var gameadd = $("input[name='gameadd']:checked").val();
    // alert(gameadd)

    $(".gameadd2").click(function () {
        $(".gamedis").val("").attr({disabled:"disabled"}).removeAttr("checked","checked")
        $(".gameadd").removeAttr("checked","checked")
        $(".gameadd2").attr("checked","checked")

    });
    $(".gameadd").click(function () {
        $(".gamedis").attr("checked","checked").removeAttr("disabled","disabled")
        $(".gameadd2").removeAttr("checked","checked")
    });

})
//电子券选择名称积分库存id
function aaa(a){
    var add2name = $(a).parents("li").find("div:eq(0) .add2name").text();//获取名称
    var add2points = $(a).parents("li").find("div:eq(0) .add2points").text();//获取积分
    $("#succ1").attr("value",add2name);
    $("#succ2").attr("value",add2points);
    $("#succ3").attr("value","库存");
    $("#succ4").attr("value","id");
};
function test(obj){

    // var num=$(".slideTxtBox .bd ul").length;
    // // for(var i=0;i<num;i++){}
    // $(".slideTxtBox .bd ul").eq(num).css("display","block").siblings().css("display","block")
    // console.log(num)
    $(obj).addClass("on");
    $(obj).siblings("li").removeClass("on");
    var name = $(obj).attr("name");
    $("[name='"+name+"-ul']").show();
    $("[name='"+name+"-ul']").siblings("ul").hide();

}

$(function () {

    // 添加通用积分

    $(".integral").click(function () {
        var length2 = $("#buttonPrize").children("li").length;
        var length = length2 + 1;

        prizes(length2);


        if(length>=6){
            $("#dLabel").css("color","#ccc");
            $("#dLabel").attr("data-toggle","");
            $("#dLabel").parent("div").removeClass("open")
        }




        var name = "name-"+length;
        // 添加通用积分按钮
        $(".slideTxtBox .hd ul.clearfix").append("<li onclick='test(this)' name='"+name+"' class='btn-delete'><button type=\"button\" class=\"btn btn-w-m btn-default\">通用积分</button><span class='btn-span'>X</span></li>")

        // 添加通用积分表单
        $(".slideTxtBox .bd").append("<ul style=\"display: none;\" name='"+name+"-ul"+"'>\n" +
            "    <li class=\"form-horizontal t\">\n" +
            "        <div class=\"form-group\">\n" +
            "            <label for=\"\" class=\"col-sm-2 control-label\">奖品名称：</label>\n" +
            "            <div class=\"col-sm-8\">\n" +
            "                <input type=\"text\" class=\"form-control name-input\" id=\"\" placeholder=\"奖品名称\" name='"+name+"-1"+"'/>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"form-group\">\n" +
            "            <label for=\"\" class=\"col-sm-2 control-label\">奖品分类：</label>\n" +
            "            <div class=\"col-sm-3\">\n" +
            "                 <input type=\"text\" class=\"form-control name-input\" placeholder=\"通用积分\" name='"+name+"-2"+"' disabled style=\" border: none;background: none;\"/>\n" +
            "            </div>\n" +
            "            <label for=\"\" class=\"col-sm-2 control-label\">中奖可得：</label>\n" +
            "            <div class=\"col-sm-3\">\n" +
            "                <div class=\"input-group\">\n" +
            "                    <input type=\"text\" class=\"form-control name-input\" name='"+name+"-3"+"' onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='100'\" placeholder=\"100\"/>\n" +
            "                    <span class=\"input-group-addon\">钡</span>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"form-group\">\n" +
            "            <label for=\"\" class=\"col-sm-2 control-label\">中奖概率：</label>\n" +
            "            <div class=\"col-sm-3\">\n" +
            "                <div class=\"input-group\">\n" +
            "                    <input type=\"text\" class=\"form-control name-input\"  name='"+name+"-4"+"' placeholder=\"100\"/>\n" +
            "                    <span class=\"input-group-addon\">%</span>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <label for=\"\" class=\"col-sm-2 control-label\">奖品数量：</label>\n" +
            "            <div class=\"col-sm-3\">\n" +
            "                <div class=\"input-group\">\n" +
            "                    <input type=\"text\" class=\"form-control name-input\" name='"+name+"-5"+"' id=\"\" placeholder=\"10\"/>\n" +
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
            "    </li>\n <input type='hidden' value='1' name='"+name+"-6"+"'/>" +
            "</ul>")


        // $(function () {
        //     var holder = $(this).attr("placeholder")
        //     $(".name-input").focus(function () {
        //         $(this).attr("placeholder","")
        //     })
        //     $(".name-input").blur(function () {
        //         $(this).attr("placeholder",holder)
        //     })
        //
        // })


    })




        //添加彩票
        $(".caipiao").click(function () {
            var length2 = $("#buttonPrize").children("li").length;
            var length = length2 + 1;
            if (length >= 6) {
                $("#dLabel").css("color", "#ccc");
                $("#dLabel").attr("data-toggle", "");
                $("#dLabel").parent("div").removeClass("open")
            }
            prizes(length2);
            var name = "name-" + length;
            // 添加通用彩票按钮
            $(".slideTxtBox .hd ul.clearfix").append("<li onclick='test(this)' name='" + name + "' class='btn-delete'><button type=\"button\" class=\"btn btn-w-m btn-default\">彩票</button><span class='btn-span'>X</span></li>")

            // 添加通用彩票表单
            $(".slideTxtBox .bd").append("<ul style=\"display: none;\" name='" + name + "-ul" + "'>\n" +
                "    <li class=\"form-horizontal t\">\n" +
                "        <div class=\"form-group\">\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">奖品名称：</label>\n" +
                "            <div class=\"col-sm-8\">\n" +
                "                <input type=\"text\" class=\"form-control name-input\" id=\"\" placeholder=\"奖品名称\" name='" + name + "-1" + "'/>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"form-group\">\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">彩票种类：</label>\n" +
                "            <div class=\"col-sm-2\">\n" +
                "                 <label class='pt5 f14'>\n" +
                "                   <input class='radio-input' type=\"radio\" name='" + name + "-2" + "' >\n" + "彩票" +
                "                 </label> "+
                "            </div>\n" +
                "            <div class=\"col-sm-3\">\n" +
                "                 <label class='pt5 f14'>\n" +
                "                   <input type=\"radio\" name='" + name + "-2" + "' >\n" + "双色球" +
                "                 </label> "+
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"form-group\">\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">中奖概率：</label>\n" +
                "            <div class=\"col-sm-3\">\n" +
                "                <div class=\"input-group\">\n" +
                "                    <input type=\"text\" class=\"form-control name-input\"  name='" + name + "-3" + "' placeholder=\"100\"/>\n" +
                "                    <span class=\"input-group-addon\">%</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <label for=\"\" class=\"col-sm-2 control-label\">奖品数量：</label>\n" +
                "            <div class=\"col-sm-3\">\n" +
                "                <div class=\"input-group\">\n" +
                "                    <input type=\"text\" class=\"form-control name-input\" name='" + name + "-4" + "' id=\"\" placeholder=\"10\"/>\n" +
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
                "    </li>\n <input type='hidden' value='3' name='"+name+"-5"+"'/>" +
                "</ul>")
        })

    })

$(function () {
    $(".integral,.caipiao").click(function () {
        var num = $(".mobile-box span").length + 1;
        var className = "jp" + num;
        $(".mobile-box").append(" <span class="+className+">奖品"+num+"</span>");
    })
    $(".mobile-box").click(function () {
        alert("活动未开始，请填写内容！")
    })
})

function prizes(length2) {
    var num = 0;
    for(var i=0;i<=length2;i++){
        num =num+1;
        prize[i]=num+"等奖";
    }
    $("#prize").val(prize);
    console.log(prize);
    console.log($("#prize").val());
}


