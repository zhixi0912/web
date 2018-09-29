function fmoney(s, n) {
	if(s == null){
		return '0.00';
	}else{
		n = n > 0 && n <= 20 ? n : 2;
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
		t = "";
		for (i = 0; i < l.length; i++) {
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		}
		var formatmoney = t.split("").reverse().join("") + "." + r;
		if(s<0 && formatmoney.charAt(1) == ',')
			formatmoney = formatmoney.substring(0,1) + formatmoney.substring(2,formatmoney.length)
		return formatmoney;
	}
}