// //var data = JSON.parse(OTHER_VARIABLE);
// var data = JSON.parse(re);
// Highcharts.setOptions({
//     global: {
//         useUTC: false
//     }
// });
// console.log(data);
// Highcharts.chart('container1', {

//     chart: {
//         type: 'line',
//         zoomType: 'x'
//     },
//     title: {
//         text: 'Dự báo năm 2020'
//     },
//     subtitle: {
//         text: document.ontouchstart === undefined ?
//             'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
//     },
//     xAxis: {
//         // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         // title: {
//         //     text: 'Tháng'
//         // }
//         type: 'datetime',
//         //type: 'datetime',
//         // tickInterval: 24 * 3600 * 1000 * 365 // mills in a year. 

//         // dateTimeLabelFormats: {
//         //     month: '%mm',
//         //     year: '%Y'
//         // }
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
//         type: 'spline',
//         //lineColor: 'blue',
//         name: '2020',
//         data: data['2020']
//     },
//     ]
// });

var result_5y = JSON.parse(re);
var seriesOptions = []
var lengthData = Object.keys(result_5y).length
console.log(Object.keys(result_5y)[0])
var k = Object.keys(result_5y)[0]
// for (i = 0; i < lengthData; i++) {
//     seriesOptions[i] = {
//         id: Object.keys(result_5y)[i],
//         name: Object.keys(result_5y)[i],
//         data: result_5y[Object.keys(result_5y)[i]][1],
//         visible: false,
//         yAxis: 1,
//         type: 'column'
//     };
// }
seriesOptions[0] = {
    id: Object.keys(result_5y)[0],
    name: Object.keys(result_5y)[0],
    data: result_5y[Object.keys(result_5y)[0]][0],
    visible: false,
    type: 'column'
};
// seriesOptions[1] = {
//     id: Object.keys(result_5y)[0],
//     name: Object.keys(result_5y)[0],
//     data: result_5y[Object.keys(result_5y)[0]][1],
//     visible: false,
//     yAxis: 1,
//     type: 'column'
// };


// for (i=5;i< lengthData*2; i++) {
//     seriesOptions[i] = {
//         id: Object.keys(result_5y)[i-5],
//         name: Object.keys(result_5y)[i-5],
//         data: result_5y[Object.keys(result_5y)[i-5]][0],
//         visible: false,
//         showInLegend: false,
//         color:'red',
//         type: 'spline'
//     };
// }
seriesOptions[0].visible = true
// seriesOptions[1].visible = true
// seriesOptions[lengthData*2-1].visible = true

Highcharts.chart('container1', {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'Dự báo trong năm 2020'
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
    }], 
    // { // Secondary yAxis
    //     title: {
    //         text: 'changes',
    //         style: {
    //             color: Highcharts.getOptions().colors[0]
    //         }
    //     },
    //     labels: {
    //         format: '{value} %',
    //         style: {
    //             color: Highcharts.getOptions().colors[0]
    //         }
    //     },
    //     opposite: true
    // }],

    legend: {
        enabled: true
    },
    // plotOptions: {
    //     series: {
    //         events: {
    //             show: function () {
    //                 var chart = this.chart,
    //                     series = chart.series,
    //                     i = series.length,
    //                     otherSeries;
    //                     console.log(series);
    //                     console.log(this._i)
    //                 while (i--) {
    //                     otherSeries = series[i];
    //                     if (otherSeries != this && otherSeries.visible && otherSeries.name != this.name) {
    //                         otherSeries.hide();
    //                     } 
    //                 }
    //             },
    //         }
    //     }
    // },
    series: seriesOptions,
});

