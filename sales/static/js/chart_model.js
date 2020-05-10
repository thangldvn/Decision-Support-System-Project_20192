var data = JSON.parse(OTHER_VARIABLE);
var mape = JSON.parse(mape);

// Highcharts.setOptions({
//     global: {
//         useUTC: true
//     }
// });
console.log(mape);
Highcharts.chart('container1', {

    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Kết quả dự đoán so với thực tế trong 2 năm gần đây'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
        type: 'datetime',
        // tickInterval: 24 * 3600 * 1000 * 365 // mills in a year. 

        // dateTimeLabelFormats: {
        //     month: '%mm',
        //     year: '%Y'
        // }
    },
    yAxis: {
        title: {
            text: 'IPN31152N'
        }
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        // area: {
        //     fillColor: {
        //         linearGradient: {
        //             x1: 0,
        //             y1: 0,
        //             x2: 0,
        //             y2: 1
        //         },
        //         stops: [
        //             [0, Highcharts.getOptions().colors[0]],
        //             [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        //         ]
        //     },
        //     marker: {
        //         radius: 2
        //     },
        //     lineWidth: 1,
        //     states: {
        //         hover: {
        //             lineWidth: 1
        //         }
        //     },
        //     threshold: null
        // }
    },

    series: [{
        //type: 'area',
        //lineColor: 'blue',
        name: 'dự đoán',
        data: data['test']
    },
    {
        //lineColor: 'red',
        //type: 'area',
        name: 'thực tế',
        data: data['predict']
    }
    ]
});


Highcharts.chart('container2', {

    chart: {
        type: 'column',
        zoomType: 'x'
    },
    title: {
        text: 'Sai số dự báo (theo năm)'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
        // tickInterval: 24 * 3600 * 1000 * 365 // mills in a year. 

        // dateTimeLabelFormats: {
        //     month: '%mm',
        //     year: '%Y'
        // }
    },
    yAxis: {
        title: {
            text: '% Error'
        }
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        // area: {
        //     fillColor: {
        //         linearGradient: {
        //             x1: 0,
        //             y1: 0,
        //             x2: 0,
        //             y2: 1
        //         },
        //         stops: [
        //             [0, Highcharts.getOptions().colors[0]],
        //             [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        //         ]
        //     },
        //     marker: {
        //         radius: 2
        //     },
        //     lineWidth: 1,
        //     states: {
        //         hover: {
        //             lineWidth: 1
        //         }
        //     },
        //     threshold: null
        // }
    },

    series: [{
        //type: 'area',
        //lineColor: 'blue',
        name: '2018',
        data: mape[2018]
    },
    {
        //lineColor: 'red',
        //type: 'area',
        name: '2019',
        data: mape[2019]
    }
    ]
});