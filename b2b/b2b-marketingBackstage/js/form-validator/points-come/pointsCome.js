/**
 * Created by jc on 2018/1/15.
 */

$(function () {
    $(".btndemand tr td a").click(function () {
        layer.open({
            title: '需求'
            ,content: '<p class="textindet2 pb10">一家从事在线旅游预订服务 （就像 Hotels 或者 Airbnb 但是规模更小一些）的公司。' +
            '目前这家公司的支付转化率偏低，所以这个季度大家打算尝试通过在支付环节加入在线客服的方案来提升转化。</p>' +
            '       <p class="textindet2">一家从事在线旅游预订服务 （就像 Hotels 或者 Airbnb 但是规模更小一些）的公司。' +
            '目前这家公司的支付转化率偏低，所以这个季度大家打算尝试通过在支付环节加入在线客服的方' +
            '案来提升转化。   一家从事在线旅游预订服务 （就像 Hotels 或者 Airbnb 但是规模更小一些）的' +
            '公司。目前这家公司的支付转化率偏低，所以这个季度大家打算尝试通过在支付环节加入在线客服' +
            '的方案来提升转化。</p>' +
            ' <form class="form-horizontal clearfix mt20">\n' +
            '                <div class="row">\n' +
            '                    <div class="col-sm-12">\n' +
            '                        <div class="form-group">\n' +
            '                            <label class="col-sm-2 control-label">*处理人</label>\n' +
            '                            <div class="col-sm-10">\n' +
            '                                <input type="text" class="form-control" placeholder="请输入处理人">\n' +
            '                            </div>\n' +
            '                        </div>'+
            '                    </div>'+
            '                 </div>'+
            '</form>'
            ,area: ['500px', '430px']
            ,btn: ['关闭', '处理']
            ,btnAlign: 'c'
        });
    });

});