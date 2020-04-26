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
// console.log(data)
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
//         data: data['test'],
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


//newCharts
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

    var data = JSON.parse(OTHER_VARIABLE);
    console.log(data)
    Highcharts.chart('container1', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            //type: 'area',
            name: 'USD to EUR',
            data: data['test']
        },
        {
                lineColor: 'red',
            //type: 'area',
            name: 'USD to EUR',
            data: data['predict']
        }
        ]
    });


