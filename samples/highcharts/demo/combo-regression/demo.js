Highcharts.chart('container', {
    title: {
        text: 'Scatter plot with regression line'
    },
    caption: {
        text: 'Chart showing how a line chart can be used to show a regression line for a dataset.',
        align: 'center'
    },
    xAxis: {
        min: -0.5,
        max: 5.5
    },
    yAxis: {
        min: 0
    },
    series: [{
        type: 'line',
        name: 'Regression Line',
        data: [[0, 1.11], [5, 4.51]],
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    }, {
        type: 'scatter',
        name: 'Observations',
        data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
        marker: {
            radius: 4
        }
    }]
});