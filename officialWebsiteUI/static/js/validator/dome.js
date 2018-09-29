/**
 * Created by jc on 2017/7/27.
 */
$(function () {
    $(".datetimepicker").datetimepicker({
        needDay:true,
        changeMonth: true, //显示月份
        changeYear: true, //显示年份
        showButtonPanel: true, //显示按钮
        timeFormat: "HH:mm:ss",
        dateFormat: "yy-mm-dd"
    });



    $(".highlight").each(function () {
        $(this).find("pre").text($(this).prev(".bs-example").html());
    })
})