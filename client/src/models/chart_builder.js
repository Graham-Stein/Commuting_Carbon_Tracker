const PubSub = require('../helpers/pub_sub.js');

// create a constructor
const ChartBuilder = function() {
  this.data = null;
};

// give it a bind events
ChartBuilder.prototype.bindEvents = function() {
  PubSub.subscribe('ResultView:highchart-data-ready', (evt) => {
    console.log('chartbuilder getting data', evt.detail);
    this.setData(evt.detail);
    this.build();
  });
};

// give a set data
ChartBuilder.prototype.setData = function(data) {
  this.data = data;
};

// ////////////////////////////////////////////////////
ChartBuilder.prototype.build = function() {
  const chartContainer = document.querySelector('#chart-container');
  Highcharts.setOptions({
    colors: ['#51b148', ]
});
  const myChart = Highcharts.chart(chartContainer, {

    chart: {
      type: 'bar',
    },

    title: {
      text: 'Your Weekly Commute',
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          inside: true,
        },
      },
    },

    xAxis: {
      type: 'category',
      lineWidth: 0,
      tickWidth: 0,
    },

    yAxis: {
      title: {
        text: '',
      },
    },

    series: [{
      dataLabels: [{
        align: 'right',
        format: '{y} kgCO2e',
      }],
      data: [{
        y: this.data.userMix,
        name: 'Your current mix',
        dataLabels: {
          color: 'white',
        },
      }, {
        y: this.data.cycle,
        name: 'All Bike',
      }, {
        y: this.data.carHybrid,
        name: 'All Hybrid Car',
      }, {
        y: this.data.bus,
        name: 'All Bus',
      }, {
        y: this.data.carDiesel,
        name: 'All Diesel Car',
      }, {
        y: this.data.carPetrol,
        name: 'All Petrol Car',
      }],
      showInLegend: false,
    }],

  });
};

module.exports = ChartBuilder;
