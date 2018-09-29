$(function () {
    $(".btn-rule").click(function () {
        $(".szmmask").slideDown();
        $(".btn-rule").slideUp();
    })  ;
    $(".btn-back").click(function () {
        $(".szmmask").slideUp()
        $(".btn-rule").slideDown();
    })
    $(".btnCodeNext").click(function () {
        if($(".codeInput").val()!=""){
            $(".szmPopupfather").show();
            $(".szmPopup").show();
        }
    })
    $(".close_zj").click(function () {
        $(".szmPopupfather").hide();
        $(".szmPopup").hide();
    })


});
function copyContent(a){
    var copyName = $(a).parents("span").siblings("input");//获取名称
    copyName.select();
    document.execCommand("Copy");
    alert("复制成功");
};