$(function(){
    $('.js-category').click(function(){
        $parent = $(this).parent('li');
        if($parent.hasClass('js-show')){
            $parent.removeClass('js-show');
            $(this).children('.i-icon').find("i").removeClass('icon-35').addClass('icon-74');
        }else{
            $parent.siblings().removeClass('js-show');
            $parent.addClass('js-show');
            $(this).children('.i-icon').find("i").removeClass('icon-74').addClass('icon-35');
            $parent.siblings().find('i').removeClass('icon-35').addClass('icon-74');
        }
    });

    $("#sd3").on("click", function() {
    	var houqauNum =6 - $("#houqauNum").val();
    	var lanqauNum =1 - $("#lanqauNum").val();
    	if (houqauNum != 0 || lanqauNum != 0) {
    		$.modal({
                title: "还差"+houqauNum+"个红球，还差"+lanqauNum+"个蓝球",
                text: "至少选择6个红球+1个篮球",
                buttons: [
                    { text: "自己选", className: "default"},
                    { text: "帮我补全", onClick: function(){
                    	houqau(houqauNum);
                    	lanqau(lanqauNum);
                    	submitChromosphereLottery();
                        }
                    },

                ]
            });
		}else{
			submitChromosphereLottery();
		}
    });
  //双色球-红球区随机选球
    $("#random").click(function(){
        $(".qiu").find(".qiu-l .th2 span").each(function(){
            $(this).removeClass("ck");
        });
        var arr = [];
        for (var j = 1; j <=33; j++) {
            arr.push(j);
        }
        arr.sort(
            function () {
                return 0.5 - Math.random();
            }
        );
        var ar = new Array(6);
        for(var i = 1; i <=6; i++) {
            ar[i]=arr[i];
            //取6个随机数给红球上色
            $(".qiu").find(".qiu-l .th2 span").each(function(){
                var dataId = $(this).attr("data-id");
                if( dataId== ar[i]){
                    $(this).addClass("ck");
                    houqiuNum();
                }
            });
        }

    });
    //双色球-蓝球区随机选球
    $("#random").click(function(){
        $(".qiu").find(".qiu-r .th2 span").each(function(){
            $(this).removeClass("ck");
        });
        var arr = [];
        for (var j = 1; j <=16; j++) {
            arr.push(j);
        }
        arr.sort(
            function () {
                return 0.5 - Math.random();
            }
        );
        var ar = new Array(6);
        for(var i = 1; i <=1; i++) {
            ar[i]=arr[i];
            //取1个随机数给蓝球上色
            $(".qiu").find(".qiu-r .th2 span").each(function(){
                var dataId = $(this).attr("data-id");
                if( dataId== ar[i]){
                    $(this).addClass("ck");
                    lanqiuNum();
                }
            });
        }
    });
    //双色球-红球区修改
    $(".qiu").find(".qiu-l .th2 span").click(function(){
    	
        if($(this).hasClass("ck")){
            $(this).removeClass("ck");
            houqiuNum();
        }else{
            var ck = $(".qiu").find(".qiu-l .th2 span.ck");
            if(ck.length>5){
                ck.last().removeClass("ck");
            }
            $(this).addClass("ck");
            houqiuNum();
        }
    });
    //双色球-蓝球区修改
    $(".qiu").find(".qiu-r .th2 span").click(function(){
        var ck = $(".qiu").find(".qiu-r .th2 span.ck");
        if($(this).hasClass("ck")){
            $(this).removeClass("ck");
            lanqiuNum()
        }else{
            if(ck.length>0){
                ck.last().removeClass("ck");
            }
            $(this).addClass("ck");
            lanqiuNum()
        }

    });
})

//双色球-红球补全
function houqau(numl){
    for(var i = 0; i < numl; i++){
        var remainNum = $(".qiu").find(".qiu-l .th2 span:not(.ck)").length;
        var random = Math.floor(Math.random()*remainNum);
        $(".qiu").find(".qiu-l .th2 span:not(.ck)").each(function(n){
            if(random == n){
                $(this).addClass("ck");
                houqiuNum();
            }
        });
    }
}

//双色球-蓝球补全
function lanqau(numr){
    for(var i = 0; i < numr; i++){
        var remainNum = $(".qiu").find(".qiu-r .th2 span:not(.ck)").length;
        var random = Math.floor(Math.random()*remainNum);
        $(".qiu").find(".qiu-r .th2 span:not(.ck)").each(function(n){
            if(random == n){
                $(this).addClass("ck");
                lanqiuNum();
            }
        });
    }
}
//双色球-红球数量
function houqiuNum(){
    var ckNum =$(".qiu").find(".qiu-l .th2 span.ck").length;
    $("#houqauNum").val(ckNum);
    checkDoublebollNum();

}
//双色球-蓝球数量
function lanqiuNum(){
    var ckNum =$(".qiu").find(".qiu-r .th2 span.ck").length;
    $("#lanqauNum").val(ckNum);
    checkDoublebollNum();
}
//修改双色球按钮
function checkDoublebollNum() {
	var lanqauNum = $("#lanqauNum").val();
	var houqauNum = $("#houqauNum").val();
	if (lanqauNum==1 && houqauNum==6) {
		$("#chromosphereLotterySubmit").text("确认双色球")
	}else{
		$("#chromosphereLotterySubmit").text("请选择6个红球和1个蓝球")
	}
}
//提交双色球表单
function submitChromosphereLottery() {
	var chromosphereStopDate = new Date($("#chromosphereStopDate").val());
	var date = new Date();
	if(chromosphereStopDate.getTime() < date.getTime()){
		$.alert("现在已经超过了投注截至时间了", "时间已过期");
		return;
	}
	 $.modal({
         title: "投注须知",
         text: "<p class='noticeText'>投注结果将会以公众号消息的形式反馈！如因系统原因导致出票失败，将会返还一次重新投注机会且不为本次投注失败负责，请关注公众号消息</p>",
         buttons: [
           { text: "不同意", className: "default"},
           { text: "同意", onClick: function(){ 
        	   var redNo = $(".qiu").find(".qiu-l .th2 span.ck").text();
	           var blueNo = $(".qiu").find(".qiu-r .th2 span.ck").text();
        	   $.modal({
   		        title: "请确认投注信息",
   		        text: "<div style='text-align: left;margin-left: 35px;'><p class='weui_lottery_alert'>期号：双色球"+$("#chromosphereNumber").text()+"期</p><p>彩号：<span class=\"f-red\">"+redNo.replace(/\s/g,'').replace(/(.{2})/g,"$1 ")+"</span><span class=\"f-blue\"> "+blueNo+"</span></p></div>" ,
   		        buttons: [
   		            { text: "放弃", className: "default"},
   		            { text: "确认投注", onClick: function(){
                            window.location.href="http://qy.51points.com.cn/game/lotteryCenter/center/index?userId=1"
   		                }
   		            },
   		        ]
   		    });
           } },
         ]
       });
}
$(function () {
	$("#sd4").on("click", function() {
    	var houqiuQLCNum =7 - $("#houqiuQLC").val();
    	if (houqiuQLCNum != 0) {
    		$.modal({
                title: "还差"+houqiuQLCNum+"个红球",
                text: "至少选择7个红球",
                buttons: [
                    { text: "自己选", className: "default"},
                    { text: "帮我补全", onClick: function(){
                    	houqauQLC(houqiuQLCNum);
                    	submitSevenMusicLottery();
                        }
                    },

                ]
            });
		}else{
			submitSevenMusicLottery();
		}
    });
	//七乐彩随机7选
	$("#random2").click(function(){
	    $(".qiu").find(".qiu-c .th2 span").each(function(){
	        $(this).removeClass("ck");
	    });
	    var arr = [];
	    for (var j = 1; j <=30; j++) {
	        arr.push(j);
	    }
	    arr.sort(
	        function () {
	            return 0.5 - Math.random();
	        }
	    );
	    var ar = new Array(7);
	    for(var i = 1; i <=7; i++) {
	        ar[i]=arr[i];
	        //取6个随机数给红球上色
	        $(".qiu").find(".qiu-c .th2 span").each(function(){

	            var dataId = $(this).attr("data-id");
	            if( dataId== ar[i]){
	                $(this).addClass("ck");
	                houqiuQLC();
	            }
	        });
	    }
	});
	//七乐彩修改
	$(".qiu").find(".qiu-c .th2 span").click(function(){
	    if($(this).hasClass("ck")){
	        $(this).removeClass("ck");
	        houqiuQLC();
	    }else{
	        var ck = $(".qiu").find(".qiu-c .th2 span.ck");
	        if(ck.length>6){
	            ck.last().removeClass("ck");
	        }
	        $(this).addClass("ck");
	        houqiuQLC();
	    }
	});
})
//重置选项卡球
$(function () {
    $("#duble").click(function () {
        $(".qiu-c .th2 span").removeClass("ck");
        houqiuQLC();
    })
    $("#seven").click(function () {
        $(".qiu-l .th2 span").removeClass("ck");
        $(".qiu-r .th2 span").removeClass("ck");
        houqiuNum();
        lanqiuNum();
    })
})

//七乐彩补全
function houqauQLC(numl){
    for(var i = 0; i < numl; i++){
        var remainNum = $(".qiu").find(".qiu-c .th2 span:not(.ck)").length;
        var random = Math.floor(Math.random()*remainNum);
        $(".qiu").find(".qiu-c .th2 span:not(.ck)").each(function(n){
            if(random == n){
                $(this).addClass("ck");
                houqiuQLC();
            }
        });
    }
}
//七乐彩数量
function houqiuQLC(){
    var ckNum =$(".qiu").find(".qiu-c .th2 span.ck").length;
    $("#houqiuQLC").val(ckNum);
    checkSevenMusicNum();
}
//修改七乐彩按钮
function checkSevenMusicNum() {
	var houqiuQLC = $("#houqiuQLC").val();
	if (houqiuQLC==7) {
		$("#sevenMusicLotterySubmit").text("确认七乐彩")
	}else{
		$("#sevenMusicLotterySubmit").text("请选择7个球")
	}
}
//提交七乐彩表单
function submitSevenMusicLottery() {
	var sevenMusicStopdate = new Date($("#sevenMusicStopDate").val());
	var date = new Date();
	if(sevenMusicStopdate.getTime() < date.getTime()){
		$.alert("现在已经超过了投注截至时间了", "时间已过期");
		return;
	}
	 $.modal({
         title: "投注须知",
         text: "<p class='noticeText'>投注结果将会以公众号消息的形式反馈！如因系统原因导致出票失败，将会返还一次重新投注机会且不为本次投注失败负责，请关注公众号消息</p>",
         buttons: [
           { text: "不同意", className: "default"},
           { text: "同意", onClick: function(){ 
        	   var detail = $(".qiu").find(".qiu-c .th2 span.ck").text();
				$.modal({
			        title: "请确认投注信息",
			        text: "<div style='text-align: left;margin-left: 35px;'><p class='weui_lottery_alert'>期号：七乐彩"+$("#sevenMusicNumber").text()+"期</p><p>彩号：<span class=\"f-red\">"+detail.replace(/\s/g,'').replace(/(.{2})/g,"$1 ")+"</span></p></div>" ,
			        buttons: [
			            { text: "放弃", className: "default"},
			            { text: "确认投注", onClick: function(){
                            window.location.href="http://qy.51points.com.cn/game/lotteryCenter/center/index?userId=1"
			                }
			            },
			        ]
			    });
           } },
         ]
       });
}

function clickFunc(id) {
    var params = new Array();
    params.push({ name: "userId", value: id});
    Post("../../lotteryCenter/center/index", params);
}

function Post(URL, PARAMTERS) {
    //创建form表单
    var temp_form = document.createElement("form");
    temp_form.action = URL;
    //如需打开新窗口，form的target属性要设置为'_blank'
    temp_form.target = "_self";
    temp_form.method = "post";
    temp_form.style.display = "none";
    //添加参数
    for (var item in PARAMTERS) {
        var opt = document.createElement("textarea");
        opt.name = PARAMTERS[item].name;
        opt.value = PARAMTERS[item].value;
        temp_form.appendChild(opt);
    }
    document.body.appendChild(temp_form);
    //提交数据
    temp_form.submit();
}
