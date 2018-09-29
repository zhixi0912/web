/**
 * Created by jc on 2017/9/18.
 */

$(function () {
    //显示/隐藏操作
    $("#game-list li").on({
        mouseover : function(){
            $(this).find(".game-operation").css("display","block");
        } ,
        mouseout : function(){
            $(this).find(".game-operation").css("display","none");
        }
    });
    $(".winning").click(function () {
        layer.open({
            title: '中奖信息'
            ,area: ['700px','500px']
            ,type: 1
            ,content: $('#game-tab').html()
        });
    });
    $(".abolish").click(function () {
        layer.open({
            title: '作废活动'
            ,area: ['400px','300px']
            ,btn: ['取消', '确定']
            ,type: 1
            ,content: $('#game-abolish').html()

        });
    });

    $(".effect").click(function () {
        layer.open({
            title: '活动效果'
            ,area: ['700px','700px']
            ,btn: ['取消', '确定']
            ,type: 1
            ,content: $('#game-effect').html()
        });
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '活动参与趋势'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['最高气温','最低气温']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['10:00','12:00','14:00','16:00','18:00']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                }
            },
            series: [
                {
                    name:'浏览',
                    type:'line',
                    data:[0, 20, 50, 70, 100, 120, 150],
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                color:'#33b819'
                            }
                        }
                    },
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    }
                },
                {
                    name:'浏览',
                    type:'line',
                    data:[11, 70, 50, 30, 100, 120, 150],
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                color:'#ff312a'
                            }
                        }
                    },
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    }
                },
                {
                    name:'浏览',
                    type:'line',
                    data:[120, 130, 50, 10,0, 120, 130],
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                color:'#ffbe08'
                            }
                        }
                    },
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    }
                }

                ]
        };
        // 使用刚指定的配置项和数据显示图表。
        window.onload = myChart.setOption(option);
    });
    $(".preview").click(function () {
        layer.open({
            title: '幸运大转盘'
            ,area: ['900px','820px']
            ,type: 1
            ,content: $('#game-preview').html()

        });
    });
});


// 游戏弹窗

$(function () {
    $(".preview1").click(function () {
        layer.open({
            title: '幸运大转盘'
            ,area: ['900px','820px']
            ,type: 1
            ,content: $('#game-preview-2').html()

        });
    });
});
// // 按钮收起
// $(function () {
//     $(".game-btn-span").css("display","none")
//     $(".open-a").click(function () {
//         $(".game-btn-span").css("display","inline-block")
//         $(".open-a").remove()
//     })
// })
