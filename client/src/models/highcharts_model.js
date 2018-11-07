
Highcharts.chart('container', {

    chart: {
        type: 'bar'
    },

    title: {
        text: 'Your Commute'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                inside: true
            }
        }
    },

    xAxis: {
        type: 'category',
        lineWidth: 0,
        tickWidth: 0
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    series: [{
        dataLabels: [{
            align: 'right',
            format: '{y} c02/km'
        }],
        data: [{
            y: 100.9999999999999999,
            name: 'Your mix',
            dataLabels: {
            color: 'white'
            }
        }, {
            y: 1,
            name: 'If only Bike',
        }, {
            y: 5,
            name: 'If only Bus',
        }, {
            y: 40,
            name: 'If only Diesel',
        }, {
            y: 30,
            name: 'If only Petrol',
        }, {
            y: 10,
            name: 'If only Hybrid',
        }],
        showInLegend: false
    }]

});
