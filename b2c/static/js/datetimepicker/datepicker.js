var lang = navigator.language.substring(0,2).toLowerCase();
/**
 * 单选日期选择器
 * @param dom
 * @param start 开始时间
 * @param end  结束时间
 */
function singleDatePicker(dom,start,end) {
	$(dom).datepicker({
  		language: lang,
  		multidate: false,
  		autoclose: true,
  	  	format: 'yyyy-mm-dd',
  		orientation: "bottom auto",
  		todayHighlight: true,
  		startDate:start,
  		endDate:end
  	});
	
}

/**
 * 多选日期选择器
 * @param dom
 * @param start 开始时间
 * @param end  结束时间
 */
function multiDatePicker(dom,start,end) {
	$(dom).datepicker({
		language: lang,
		multidate: true,
		format: 'yyyy-mm-dd',
		orientation: "bottom auto",
		todayHighlight: true,
		startDate:start,
  		endDate:end
	});
}


