/**
 * Created by jc on 2018/5/2.
 */

var voide = '<video id="video-main" x-webkit-airplay="" autoplay="autoplay" controls="controls" controlslist="nodownload" width="100%" height="auto">'
            +'<source src="https://hafu365.oss-cn-beijing.aliyuncs.com/hafu365.mp4">'
            +'</video>';
$(function () {
    $("#t-h2").click(function () {
        $('#myModal').modal('show');
    })
    $('#myModal').on('show.bs.modal', function (e) {
        $(".modal-body").html(voide);
    });
    $('#myModal').on('hidden.bs.modal', function (e) {
        $(".modal-body").find("video").remove();
    });
    $(".aboutus-list").find(".fadeInUp-tip").mousemove(function () {
        if(!$(this).hasClass("active")){
            $(this).addClass("active pulse animated");
            $(this).find(".sp-img").addClass("slidelnUp animated");
            $(this).siblings().removeClass("active pulse animated");
            $(this).siblings().find(".sp-img").removeClass("slidelnUp animated");
        }
    })
    $(".aboutus-list").find(".fadeInUp-tip").mouseout(function () {
        $(".aboutus-list").find(".fadeInUp-tip").removeClass("active pulse animated");
        $(".aboutus-list").find(".fadeInUp-tip:first-child").addClass("active pulse animated");
        $(".aboutus-list").find(".fadeInUp-tip .sp-img").removeClass("slidelnUp animated");
        $(".aboutus-list").find(".fadeInUp-tip:first-child .sp-img").addClass("slidelnUp animated");
    })



    $(".aboutus-list-3").find(".sp-img").mousemove(function () {
        if(!$(this).hasClass("adim")){
            $(this).addClass("adim");
            $(this).siblings().removeClass("adim");
        }
    })
    $(".aboutus-list-3").find(".sp-img").mouseout(function () {
        $(this).removeClass("adim");
    })




    var i = 0;
    $('.animate-box').waypoint( function( direction ) {
        if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
            i++;
            $(this.element).addClass('item-animate');
            setTimeout(function(){
                $('body .animate-box.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        var effect = el.data('animate-effect');
                        el.addClass(effect + ' animated');

                        el.removeClass('item-animate');
                    },  k * 200, 'easeInOutExpo' );
                });
            }, 100);
        }
    } , { offset: '85%' } );
    $('.main-nav').waypoint( function( direction ) {
        $("header").animate({
            top:-145
        },"500")
    } , { offset: '10%' } );
    $('.main-nav').waypoint( function( direction ) {
        $("header").animate({
            top:0
        },"500")
    } , { offset: '50%' } );

})
