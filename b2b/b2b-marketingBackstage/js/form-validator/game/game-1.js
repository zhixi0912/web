/**
 * Created by jc on 2017/9/19.
 */
// JavaScript Document

var turnplate={
    restaraunts:[],				//大转盘奖品名称
    colors:[],	                //大转盘奖品区块对应背景颜色
    //fontcolors:[],				//大转盘奖品区块对应文字颜色
    outsideRadius:222,			//大转盘外圆的半径
    textRadius:165,				//大转盘奖品位置距离圆心的距离
    insideRadius:65,			//大转盘内圆的半径
    startAngle:0,				//开始角度
    bRotate:false				//false:停止;ture:旋转
};

var str = [["奖品一","0001","12","12"],["奖品二","0002","26","0"],["奖品三","0003","30","6"],["奖品四","0004","30","16"]];
var prizeName = []; //奖品名称
var map={}; //奖品名称和ID
var map1={}; //概率和ID
var map2=[]; //ID的数组
function game(str) {
    var num  = 6;//总奖品数
    var str2 = num - str.length; //不足总数需补齐数
    var str3 = ["谢谢参与","0","0","0"]; //补齐参数
    var str4 = num-str2-1; //奖品参数开始补齐位
    var str5 = []; //重置奖品数为0时的奖品参数
    var str6 = 0; //奖品个数

    var probability=0; //中奖概率
    for(var j=0;j<str.length;j++){ //循环取出所有奖品的库存个数
        str5=str[j];
        if(str5[3]==0){  //若有奖品库存为0，则将该奖品中奖概率清空为心
            str5[2]="0";
        }
        str6 = parseFloat(str5[3])+str6; //累加所有奖品的库存个数
        str[j]=str5; //将重置0库存的概率的奖品重新放入奖池
        prizeName[j]=str[j][0];

        probability+=parseFloat(str5[2]); //将所有奖品概率相加

        if(str6==0){ //若所有奖品库存都为0，则跳出抽奖环节
            alert("本活动已经结束，谢谢关注");
            return false;
        }
    }

    if(probability<100){ //奖品总概率若小于必中奖率
        probability = parseFloat(100)-probability; //得出剩余中奖率
        // console.log(probability);
        probability=probability/str2; //计算每个不中奖位的中奖机率
        str3[2]=probability.toString(); //将剩余中奖率平均分配给不中奖位
    }

    /*if(str2<num){
        //console.log(str2);
        for(var i=0;i<str2;i++){ //补全6格所有不中奖位
            //补齐参数
            str4 = str4+1;
            //console.log("0");
            str3[1]=str3[1]-1;
            // console.log(str3);
            str[str4]=[].concat(str3);
            prizeName[str4]=str3[0];
        }
    }*/



    // console.log(str);
    var bradge=str
    while(str2--){
        bradge.push(str3);
    }
    //最后排好的数组
    var res=[];

    var flag=[];
    i=1000;
    while(bradge.length>0){
        index=Math.ceil(Math.random()*(bradge.length-1));

        //flag=bradge.pop();
        flag=bradge.splice(index,1);

        if(res.length==0||flag[0]!=res[res.length-1][0]){
            res.push(flag);
        }else{
            bradge.unshift(flag);
        }
    }

    console.log(res);







    // console.log(map);
    // console.log(map1);
}

//设置map里面的值
function setMap(map,id,newsObj)
{
    //如果key也是动态的，则如下处理
    map[id]=newsObj;
}

$(document).ready(function(){

    game(str);


    //动态添加大转盘的奖品与奖品区域背景颜色
    //turnplate.restaraunts = [ "脱毛体验券(唇毛\n或腋毛单次）", "谢谢参与", "纪梵希禁忌之吻\n体验券", "纪梵希小羊皮", "50元\n话费卡", "洁牙券"];
    turnplate.restaraunts = prizeName;
    //turnplate.font = "Bold 30px Arial";
    //turnplate.colors = ["rgba(255,255,255,.0)", "rgba(255,255,255,.0)", "rgba(255,255,255,.0)", "rgba(255,255,255,.0)","rgba(255,255,255,.0)", "rgba(255,255,255,.0)"];
    turnplate.colors = ["#FF8584", "#FFEE7B", "#FF8584", "#FFEE7B","#FF8584", "#FFEE7B"];
    //turnplate.fontcolors = ["#CB0030", "#FFFFFF", "#CB0030", "#FFFFFF","#CB0030", "#FFFFFF"];

    var rotateTimeOut = function (){
        $('#wheelcanvas').rotate({
            angle:0,
            animateTo:2160,
            duration:6000,
            callback:function (){
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };


    //旋转转盘 item:奖品位置; txt：提示语;
    var rotateFn = function (item, txt){
        var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
        if(angles<270){
            angles = 270 - angles;
        }else{
            angles = 360 - angles + 270;
        }
        $('#wheelcanvas').stopRotate();
        $('#wheelcanvas').rotate({
            angle:0,
            animateTo:angles+1800,
            duration:6000,
            callback:function (){
                //中奖页面与谢谢参与页面弹窗
                //alert(txt);
                if(txt.indexOf("谢谢参与")>=0){
                    //$("#ml-main").fadeIn();
                    //$("#zj-main").fadeOut();
                    $("#xxcy-main").fadeIn();
                }else{
                    //$("#ml-main").fadeIn();
                    $("#zj-main").fadeIn();
                    //$("#xxcy-main").fadeOut();
                    //map2[item-1] 奖品ID
                    var resultTxt=txt.replace(/[\r\n]/g,"");//去掉回车换行
                    $("#jiangpin").text(resultTxt);
                }
                turnplate.bRotate = !turnplate.bRotate;
            }
        });
    };

    /********弹窗页面控制**********/

    $('.close_zj').click(function(){
        $('#zj-main').fadeOut();
        //$('#ml-main').fadeIn();
    });

    $('.close_xxcy').click(function(){
        $('#xxcy-main').fadeOut();
        //$('#ml-main').fadeIn();
    });
    $('.close_tjcg').click(function(){
        $('#tjcg-main').fadeOut();
        //$('#ml-main').fadeIn();
    });

    $('.info_tj').click(function(){
        $('#zj-main').fadeOut();
        $('#tjcg-main').fadeIn();
    });


    /********抽奖开始**********/
    $('#tupBtn').click(function (){
        $('#pp').show();



        if(turnplate.bRotate)return;
        turnplate.bRotate = !turnplate.bRotate;
        //获取随机数(奖品个数范围内)
        // var item = rnd(1,turnplate.restaraunts.length);
        //console.log(item);
        // var item = probability(0,turnplate.restaraunts.length);
        var item = probability(0,99);
        //奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
        rotateFn(item, turnplate.restaraunts[item-1]);
        //  switch (item) {
        //  case 1:
        //  rotateFn(252, turnplate.restaraunts[0]);
        //  break;
        //  case 2:
        //  rotateFn(216, turnplate.restaraunts[1]);
        //  break;
        //  case 3:
        //  rotateFn(180, turnplate.restaraunts[2]);
        //  break;
        //  case 4:
        //  rotateFn(144, turnplate.restaraunts[3]);
        //  break;
        //  case 5:
        //  rotateFn(108, turnplate.restaraunts[4]);
        //  break;
        //  case 6:
        //  rotateFn(72, turnplate.restaraunts[5]);
        //  break;
         /*case 7:
         rotateFn(36, turnplate.restaraunts[6]);
         break;
         case 8:
         rotateFn(360, turnplate.restaraunts[7]);
         break;
         case 9:
         rotateFn(324, turnplate.restaraunts[8]);
         break;
         case 10:
         rotateFn(288, turnplate.restaraunts[9]);
         break;*/
         // }
        // console.log(item);
    })

});

function rnd(n, m){
    var random = Math.floor(Math.random()*(m-n+1)+n);
    return random;

}
function probability(n,m) {
    //console.log(map2);
    //debugger;
    var random = Math.floor(Math.random()*(m-n+1)+n);
    // return random;
    var numb = 0; //中间区间的第二个值
    var first=0;//中间区间的第一个值
    var zhongId=0; //中奖ID
    var index=0; //中奖下标
    for(var i=0;i<map2.length;i++){
        var mapNum=parseInt(map1[map2[i]]);
        numb = numb+mapNum;
        if(random>=first&&random<numb){
            zhongId=map2[i];
            break;
        }else{
            first=numb;
            continue;
        }
    }
    for(var j=0;j<map2.length;j++){
        if(map2[j]==zhongId){
            index=j+1;
            break;
        }
    }
    console.log(index);
    return index;

}


//页面所有元素加载完毕后执行drawRouletteWheel()方法对转盘进行渲染
window.onload=function(){
    drawRouletteWheel();
};

function drawRouletteWheel() {
    var canvas = document.getElementById("wheelcanvas");
    if (canvas.getContext) {
        //根据奖品个数计算圆周角度
        var arc = Math.PI / (turnplate.restaraunts.length/2);
        var ctx = canvas.getContext("2d");
        //在给定矩形内清空一个矩形
        ctx.clearRect(0,0,516,516);
        //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = "#FFBE04";
        //font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = 'bold 22px Microsoft YaHei';
        for(var i = 0; i < turnplate.restaraunts.length; i++) {
            var angle = turnplate.startAngle + i * arc;
            ctx.fillStyle = turnplate.colors[i];
            ctx.beginPath();
            //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
            ctx.arc(258, 258, turnplate.outsideRadius, angle, angle + arc, false);
            ctx.arc(258, 258, turnplate.insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();
            //锁画布(为了保存之前的画布状态)
            ctx.save();

            //----绘制奖品开始----
            ctx.fillStyle = "#CB0030";
            //ctx.fillStyle = turnplate.fontcolors[i];
            var text = turnplate.restaraunts[i];
            var line_height = 30;
            //translate方法重新映射画布上的 (0,0) 位置
            ctx.translate(258 + Math.cos(angle + arc / 2) * turnplate.textRadius, 258 + Math.sin(angle + arc / 2) * turnplate.textRadius);

            //rotate方法旋转当前的绘图
            ctx.rotate(angle + arc / 2 + Math.PI / 2);

            /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
            if(text.indexOf("\n")>0){//换行
                var texts = text.split("\n");
                for(var j = 0; j<texts.length; j++){
                    ctx.font = j == 0?'bold 22px Microsoft YaHei':'bold 22px Microsoft YaHei';
                    //ctx.fillStyle = j == 0?'#FFFFFF':'#FFFFFF';
                    if(j == 0){
                        //ctx.fillText(texts[j]+"M", -ctx.measureText(texts[j]+"M").width / 2, j * line_height);
                        ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                    }else{
                        ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                    }
                }
            }else if(text.indexOf("\n") == -1 && text.length>6){//奖品名称长度超过一定范围
                text = text.substring(0,6)+"||"+text.substring(6);
                var texts = text.split("||");
                for(var j = 0; j<texts.length; j++){
                    ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
                }
            }else{

                //在画布上绘制填色的文本。文本的默认颜色是黑色
                //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
            }

            //把当前画布返回（调整）到上一个save()状态之前
            ctx.restore();
            //----绘制奖品结束----
        }
    }


    // 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
    /*var useragent = navigator.userAgent;
     if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
     // 这里警告框会阻塞当前页面继续加载
     alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
     // 以下代码是用javascript强行关闭当前页面
     var opened = window.open('about:blank', '_self');
     opened.opener = null;
     opened.close();
     }*/


}

function showDialog(id) {
    document.getElementById(id).style.display = "-webkit-box";
}

function showID(id) {
    document.getElementById(id).style.display = "block";
}
function hideID(id) {
    document.getElementById(id).style.display = "none";
}
$(function () {
    $(".game-rule").click(function () {
        $(".game-mask").css("display","block")
    })
    $(".game-mask-back").click(function () {
        $(".game-mask").css("display","none")
    })
})
