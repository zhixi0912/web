var regexEnum =
{
	unnull:'\\S',
	unZero:'^[1-9][0-9]{0,4}',
	unNullForEnd:'\\S$',//非空结尾
	chineseFixed:'^[A-Za-z\u2E80-\uFE4F]+$',
	intege:"^-?[1-9]\\d*$",					//整数
	intege1:"^[1-9]\\d*$",					//正整数
	intege2:"^-[1-9]\\d*$",					//负整数
	num:"^([+]?)\\d*\\.?\\d+$",			//数字
	num1:"^[1-9]\\d*|0$",					//正数（正整数 + 0）
	num2:"^-[1-9]\\d*|0$",					//负数（负整数 + 0）
	decmal:"^([+-]?)\\d*\\.\\d+$",			//浮点数
	intnum:"^\\d+$",			//浮点数
	//decmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",　　	//正浮点数
	decmal1:"^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9][1-9]*[0-9]*))$",　　	//正浮点数
	decmal2:"^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",　 //负浮点数
	decmal3:"^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",　 //浮点数
	decmal4:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",　　 //非负浮点数（正浮点数 + 0）
	decmal5:"^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",　　//非正浮点数（负浮点数 + 0）
	email:"^[a-zA-Z0-9_+\\.\\-]{2,}\@(([0-9a-zA-Z\\-]+)[.])+[a-zA-Z]{2,4}$", //邮件
	color:"^[a-fA-F0-9]{6}$",				//颜色
	url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	//url
	chinese:"c^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//仅中文
	nochinese:"^[^\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//非中文
	ascii:"^[\\x00-\\xFF]+$",				//仅ACSII字符
	zipcode:"^\\d{6}$",						//邮编
	mobile:"^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$",				//手机号严格版
	ip4:"^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip地址
	notempty:"^\\S+$",						//非空
	picture:"(.*)\\.(jpg|bmp|gif|jpeg|png|JPG|BMP|GIF|JPEG|PNG)$",	//图片
	rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//压缩文件
	rarzip:"(.*)\\.(rar|zip|RAR|ZIP)$",								//压缩文件(rar/zip)
	zip:"(.*)\\.(zip|ZIP)$",								//压缩文件(rar/zip)
	date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//日期
	qq:"^[1-9]*[1-9][0-9]*$",				//QQ号码
	tel:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",	//电话号码的函数(包括验证国内区号,国际区号,分机号)
	letter:"^[A-Za-z]+$",					//字母
	letter_u:"^[A-Z]+$",					//大写字母
	letter_l:"^[a-z]+$",					//小写字母
	letter_n:"^[A-Za-z0-9]+$",              //字母或数字
	letter_four:"^[A-Za-z0-9]{4}",              //4位字母或数字
	letter_nop:"^[A-Za-z0-9]{5,20}$",              //字母或数字
	letter_un:"^[A-Z0-9]+$",                //大写字母或数字
	username:"^[A-Za-z0-9_]{6,20}$",        //用户名
	username_n:"^[A-Za-z0-9_]{1,20}$",        //用户名
	username_val:"^([A-Za-z0-9_]{1,20}|([a-zA-Z0-9_+\\.\\-]{2,}\@(([0-9a-zA-Z\\-]+)[.])+[a-zA-Z]{2,4}|[A-Za-z0-9_]{6,20}))$",
	username_c:"^[A-Za-z0-9_\u4E00-\u9FBB\u3400-\u4DBF\uF900-\uFAD9\u3000-\u303F\u2000-\u206F\uFF00-\uFFEF]+$", //企业用户名
	userpwd:"^[~!@#$%^&*()=|{}':;',\\[\\].<>/?~！@#￥%……&*（）————|{}【】‘；：“”’。，、？A-Za-z0-9]{8,15}$", //用户密码
	idcard:"^[0-9]{15}([0-9]{2}x|[0-9]{2}X|[0-9]{3})?",	//身份证
	cadnum:"^([0-9 ]{15,16}|[0-9 ]{19})$",		//卡号
	phoneno:"^1[0-9]{10}$|^((0([0-9]{3}|[0-9]{2}))-?)?[0-9]{7,8}(-[0-9]*)?$" , //电话号码
	cardpwd:"^[0-9]{6}$",		            //电话密码
	etoken:"^[0-9]{9,12}$",		            //电子口令
	compnum:"^[A-Za-z0-9]{6,40}$",		    //企业证件号
	psssnum:"^[A-Za-z0-9]{5,20}$",		    //护照号
	mobile_u:"^1[3-8][0-9]{9}$",         //手机号不严格版
	mobilenum:"^[0-9]{11}$",                //11位数字
	realname:"^[A-Za-z \u4E00-\u9FBB\u3400-\u4DBF\uF900-\uFAD9\u3000-\u303F\u2000-\u206F\uFF00-\uFFEF]{1,26}$",//真实姓名
	cardname:"^[A-Za-z0-9\u4E00-\u9FBB\u3400-\u4DBF\uF900-\uFAD9\u3000-\u303F\u2000-\u206F\uFF00-\uFFEF]{1,16}$", //卡别名
	chinses_nl:"^[A-Za-z0-9\u4E00-\u9FBB\u3400-\u4DBF\uF900-\uFAD9\u3000-\u303F\u2000-\u206F\uFF00-\uFFEF]+$", //中英文数字
	chinses_e:"^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$",//中英文带空格
	chinses_e_nnum:"^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z])*$",//中英文带空格不带数字
	chinses_es:"^[A-Za-z\u4E00-\u9FBB\u3400-\u4DBF\uF900-\uFAD9\u3000-\u303F\u2000-\u206F\uFF00-\uFFEF]+$",    //中英文
	chinses_nel:"^[A-Za-z0-9\u4E00-\u9FBB\u3400-\u4DBF\uF900-\uFAD9\u3000-\u303F\u2000-\u206F\uFF00-\uFFEF\\·]+$", //中英文数字带空格
	letter_nd:"^[A-Za-z0-9.]{1,50}$",    //英文数字和点
	letter_ns:"^[A-Za-z0-9\\.\\-_@]{1,100}$",    //英文数字和点
	valLow:"^[1-9]|[1-9][0-9]|[1][0-9]{2}|200$", //1-200
	valUp:"^[1-9]|[1-9][0-9]|[1-9][0-9]{2}|1000$", //1-1000
	valDay:"^[1-9]|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}$", //1-9999
	valMonth:"^[1-9]|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|[1-9][0-9]{4}|[1-2][0-9]{5}$",//1-299999
	vernum: "^[0-9]\\.[0-9]\\.[0-9]$", //版本号
	orgcode:"^[0-9A-Z]{9}$", //组织机构代码

	int1ordecmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|^[1-9]\\d*",//浮点数和整数

	custom:"^[0-9]{15}$",  //商户号
	mcccode:"^[0-9]{4}$",  //Mcc码
	anrodid:"[A-Za-z0-9:]{17}$", //安卓设备
	appid:"[A-Za-z0-9-]{36}$", //苹果设备
	studentid:"^[A-Za-z0-9]{8,15}$",//学号
	imgTitle:"^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$",//中英文带空格,图片标题正则
	hostname:"^(([a-z0-9\\-]{1,62}\\.)?[a-z0-9\\-]{2,62}\\.([a-z0-9\\-]{1,62}\\.)?[a-z0-9]{2,5})?$",//域名
    fax:"^(\d{3,4}-)?\d{7,8}$",

    int12decimals4: "^([0-9]{1,12})(\\.[0-9]{1,4})?$",//整数最多12位，小数最多4位
    intXdecimals4: "(^([1-9][0-9]*)(\.\d{1,4})?$)|(^0(\.\d{1,4}){1}$)",//整数最多x位，小数最多4位


    int15decimals2: "^([1-9][0-9]{0,14})(\\.[0-9]{1,2})?$",
    int10decimals2: "(^([1-9]{1,}\\d*)(\\.\\d{1,2})?$)|(^0(\\.\\d{1,2}){1}$)|(^0$)",//整数最多x位，小数最多2位
	int10decmal2: "(^([0-9]{1,10})(\\.\\d{1,2})?$)|(^0(\\.\\d{1,2}){1}$)",//整数最多10位，小数最多2位
	int9decimals3: "(^([0-9]{1,9})(\\.\\d{1,3})?$)|(^0(\\.\\d{1,3}){1}$)"//整数最多9位，小数最多3位

}

var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}


function isCardID(sId){
	var iSum=0 ;
	var info="" ;
	if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
	sId=sId.replace(/x$/i,"a");
	if(aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法";
	sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
	var d=new Date(sBirthday.replace(/-/g,"/")) ;
	if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法";
	for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
	if(iSum%11!=1) return "你输入的身份证号非法";
	return true;//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女")
}

//短时间，形如 (13:04:06)
function isTime(str)
{
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
	if (a == null) {return false}
	if (a[1]>24 || a[3]>60 || a[4]>60)
	{
		return false;
	}
	return true;
}

//短日期，形如 (2003-12-05)
function isDate(str)
{
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if(r==null)return false;
	var d= new Date(r[1], r[3]-1, r[4]);
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}

//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str)
{
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var r = str.match(reg);
	if(r==null) return false;
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}

//当前时间要小于输入的时间
function notTimelt(val){
	var times=new Date().getTime();
	var val=new Date(val).getTime();
	if(times>val){
	  return false;
	}
}
function validator_list(arr,index){ //验证当前表单之前的所有表单
	for(var i =0;i<arr.length;i++){
		if(i < index){
			arr[i].focus()
			arr[i].blur()
		}
	}
}
