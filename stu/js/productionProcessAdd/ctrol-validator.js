/**
 * Created by admin on 2016/12/22.
 */
function bind_validator(){

    // ----------------------------------釉料-----------------------------
    //釉料类型
    $(".glaze_type").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .functionValidator({fun:function(val){
                if(val==''){
                    return '请选择釉料类型'
                }else{
                    return true;
                }
            }});
    })
    //釉浆编号
    $(".glaze_cylinder_id").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .functionValidator({fun:function(val){
                if(val==''){
                    return '请选择釉浆编号'
                }else{
                    return true;
                }
            }});
    })
    //釉缸号
    $(".glaze_no_id").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .functionValidator({fun:function(val){
                if(val==''){
                    return '请选择釉缸号'
                }else{
                    return true;
                }
            }});
    })

    //比重
    $(".proportion").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入比重！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"比重应为正数"})
    })
    //比重
    $(".proportion_tolerance").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入比重！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"比重应为正数"})
    })

    //流速
    $(".velocity").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入流速！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"流速应为正数"})
    })
    //流速
    $(".velocity_tolerance").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入流速！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"流速应为正数"})
    })

    //重量
    $(".weight").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入重量！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"重量应为正数"})
    })
    //重量
    $(".weight_tolerance").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入重量！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"重量应为正数"})
    })
// ----------------------------------丝网印花-----------------------------
    //网版编号
    $(".screen_number").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入网版编号！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"网版编号应为正数"})
    })
    //花釉编号
    $(".flower_glaze_number").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入花釉编号！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"花釉编号应为正数"})
    })

    //比重
    $(".print_proportion").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入比重！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"比重应为正数"})
    })
    //比重
    $(".print_proportion_tolerance").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .inputValidator({min:1,onError:"请输入比重！"})
            .regexValidator({regExp:"decmal1",dataType:"enum",onError:"比重应为正数"})
    })
    //丝网孔径
    $(".screen_aperture").each(function(){
        var _thisId = this.id;
        $('#'+_thisId).formValidator({})
            .functionValidator({fun:function(val){
                if(val==''){
                    return '请选丝网孔径'
                }else{
                    return true;
                }
            }});
    })
}
function del_this_tr(tr){
    $(tr).find('[id]').each(function(){

        $('#'+this.id).unFormValidator(true);
    });

    $(tr).remove();
    //----釉料
    int_name_and_id(glazeArry);
    //----丝网印花
    int_name_and_id(floralArry);
    //----包装纸箱
    int_name_and_id(wrapArry);
}