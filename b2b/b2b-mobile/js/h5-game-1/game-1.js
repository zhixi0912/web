/**
 * Created by jc on 2018/1/17.
 */
$(function () {
    $("#draw-btn,.draw-img").on("click", function () {
        $(".draw-mid").removeClass("draw-mid-move").css({display:"none"});
        $(".draw-up").animate({
            opacity: "1"
        }, 100);
        $("#draw-up-up").animate({
            opacity: "1",
            top: "-1rem"
        }, 200);

        $(".draw-down").animate({
            opacity: "0"
        }, 300);
        $(".draw-down2").animate({
            opacity: "1"
        }, 300);
        $(".draw-list").animate({opacity:"1"},600).animate({top:"-0.5rem"},1000,function () {
            console.log("111");
        });
    });
})