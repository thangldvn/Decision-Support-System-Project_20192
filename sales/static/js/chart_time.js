// $(document).ready(function() {

// })
//var ka = JSON.stringify(OTHER_VARIABLE)
//console.log(ka[4])
// (function (H) {
//     var pick = H.pick,
//         useUTC = H.getOptions().global.useUTC,
//         setMonth = useUTC ? 'setUTCMonth' : 'setMonth',
//         getMonth = useUTC ? 'getUTCMonth' : 'getMonth',
//         setFullYear = useUTC ? 'setUTCFullYear' : 'setFullYear',
//         getFullYear = useUTC ? 'getUTCFullYear' : 'getFullYear';

//     H.Series.prototype.autoIncrement = function () {

//         var options = this.options,
//             xIncrement = this.xIncrement,
//             date,
//             pointInterval;

//         xIncrement = pick(xIncrement, options.pointStart, 0);

//         this.pointInterval = pointInterval = pick(this.pointInterval, options.pointInterval, 1);

//         // Added code for pointInterval strings
//         if (pointInterval === 'month' || pointInterval === 'year') {
//             date = new Date(xIncrement);
//             date = (pointInterval === 'month') ?
//                 +date[setMonth](date[getMonth]() + 1) :
//                 +date[setFullYear](date[getFullYear]() + 1);
//             pointInterval = date - xIncrement;
//         }

//         this.xIncrement = xIncrement + pointInterval;
//         return xIncrement;
//     };
// }(Highcharts));
// var data = JSON.parse(OTHER_VARIABLE);
// Highcharts.chart('container1', {
//     chart: {
//         zoomType: 'x'
//     },
//     title: {
//         text: 'Chỉ số sản xuất công nghiệp thực tế và dự báo các tháng tiếp theo (ngành công nghiệp sản xuất đường và bánh kẹo)'
//     },
//     subtitle: {
//         text: document.ontouchstart === undefined ?
//             'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
//     },
//     xAxis: {
//         type: 'datetime'
//     },
//     yAxis: {
//         title: {
//             text: 'Exchange rate'
//         }
//     },
//     legend: {
//         enabled: false
//     },
//     plotOptions: {
//         area: {
//             fillColor: {
//                 linearGradient: {
//                     x1: 0,
//                     y1: 0,
//                     x2: 0,
//                     y2: 1
//                 },
//                 stops: [
//                     [0, Highcharts.getOptions().colors[0]],
//                     [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//                 ]
//             },
//             marker: {
//                 radius: 2
//             },
//             lineWidth: 1,
//             states: {
//                 hover: {
//                     lineWidth: 1
//                 }
//             },
//             threshold: null
//         }
//     },

//     series: [{
//         //type: 'area',
//         name: 'USD to EUR',
//         data: data['real'],
//         pointStart: Date.UTC(2019, 0, 1),
//                 pointInterval: 'month'
//     },

//        {
//        // type: 'area',
//         name: 'USD to EUR',
//         //fillColor: 'transparent',
//         lineColor: 'red',
//         data: data['predict'],
//         pointStart: Date.UTC(2019, 0, 1),
//                 pointInterval: 'month'
//     }

//     ]
// });


//new
// var data = JSON.parse(OTHER_VARIABLE);

// Highcharts.setOptions({
//     global: {
//         useUTC: true
//     }
// });
// console.log(data);
// Highcharts.chart('container1', {

//     chart: {
//         type: 'line',
//         zoomType: 'x'
//     },
//     title: {
//         text: 'Kết quả dự đoán so với thực tế trong 2 năm gần đây'
//     },
//     subtitle: {
//         text: document.ontouchstart === undefined ?
//             'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
//     },
//     xAxis: {
//         type: 'datetime'
//     },
//     yAxis: {
//         title: {
//             text: 'Exchange rate'
//         }
//     },
//     legend: {
//         enabled: true
//     },
//     plotOptions: {
//         // area: {
//         //     fillColor: {
//         //         linearGradient: {
//         //             x1: 0,
//         //             y1: 0,
//         //             x2: 0,
//         //             y2: 1
//         //         },
//         //         stops: [
//         //             [0, Highcharts.getOptions().colors[0]],
//         //             [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//         //         ]
//         //     },
//         //     marker: {
//         //         radius: 2
//         //     },
//         //     lineWidth: 1,
//         //     states: {
//         //         hover: {
//         //             lineWidth: 1
//         //         }
//         //     },
//         //     threshold: null
//         // }
//     },

//     series: [{
//         //type: 'area',
//         //lineColor: 'blue',
//         name: 'real',
//         data: data['test']
//     },
//     {
//         lineColor: 'red',
//         //type: 'area',
//         name: 'predict',
//         data: data['predict']
//     }
//     ]
// });


var result_5y = JSON.parse(RESULT_5Y);
var pie_result = JSON.parse(PIE_CHART);
var seriesOptions = []
// var seriesOptions1 = []
var lengthData = Object.keys(result_5y).length
console.log(Object.keys(result_5y)[0])
var k = Object.keys(result_5y)[0]
for (i = 0; i < lengthData; i++) {
    seriesOptions[i] = {
        id: Object.keys(result_5y)[i],
        name: Object.keys(result_5y)[i],
        data: result_5y[Object.keys(result_5y)[i]][1],
        visible: false,
        yAxis: 1,
        type: 'column'
    };
}

for (i=5;i< lengthData*2; i++) {
    seriesOptions[i] = {
        id: Object.keys(result_5y)[i-5],
        name: Object.keys(result_5y)[i-5],
        data: result_5y[Object.keys(result_5y)[i-5]][0],
        visible: false,
        showInLegend: false,
        color:'red',
        type: 'spline'
    };
}
seriesOptions[lengthData-1].visible = true
seriesOptions[lengthData*2-1].visible = true

Highcharts.chart('container2', {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'Lượng tiêu thụ kem và đồ tráng miệng đông lạnh theo tháng'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
        //type: 'datetime',
        //tickInterval: 1000 * 3600 * 24 *30
        /*    labels: {
             formatter: ['a']
           } */
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
            text: 'Month'
        }
    },
    // yAxis: {
    //     title: {
    //         text: 'Exchange rate'
    //     }
    // },

    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'đơn vị: million gallons',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'changes',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],

    legend: {
        enabled: true
    },
    plotOptions: {
        series: {
            events: {
                show: function () {
                    var chart = this.chart,
                        series = chart.series,
                        i = series.length,
                        otherSeries;
                        console.log(series);
                        console.log(this._i)
                    while (i--) {
                        otherSeries = series[i];
                        if (otherSeries != this && otherSeries.visible && otherSeries.name != this.name) {
                            otherSeries.hide();
                        } 
                    }
                },
                legendItemClick: function() {
                    var name = this.name;
                    var _i = this._i;
                    console.log(_i)
                    Highcharts.each(this.chart.series, function(p, i) {
                        //console.log(p._i)
                      if (name === p.name && _i !== p._i) {
                        (!p.visible) ? p.show(): p.hide()
                      }
                    })
                  }
                // legendItemClick: function(event) {
                //     // var XYZ = $('#container2').highcharts(),
                //     var chart = $('#container2').highcharts(),
                //         series = chart.get(this.options.id);
                //        // series = $('#container2').highcharts().get(this.options.id); //get corresponding series
                //     console.log(this.options.id)
                //     if (series) {
                //       if (this.visible) {
                //         series.hide();
                //       } else {
                //         series.show();
                //       }
                //     }
                //   }
                // legendItemClick: function() {
                //     console.log(this.id)
                //     if(this.visible){
                //             console.log(this.visible);
                //          return false;   
                //     }
                // }
            }
        }
    },
    series: seriesOptions,
});


// pie charts

var pieSeriesOptions = []
var pieLengthData = Object.keys(pie_result).length
console.log(Object.keys(pie_result)[0])
console.log(pie_result[Object.keys(pie_result)[i]])
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
for (i = 0; i < pieLengthData; i++) {
    pieSeriesOptions[i] = {
        name: months[i],
        y: pie_result[Object.keys(pie_result)[i]][0]
    };
}

console.log(pie_result);
var ctx = document.getElementById("myPieChart1");

Highcharts.chart('myPieChart1', {
    
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                //format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                format: '<b>{point.name}</b>'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: pieSeriesOptions
    }]
});

