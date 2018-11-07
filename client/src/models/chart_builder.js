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
  const chartContainer = document.querySelector('#container');
  const myChart = Highcharts.chart(chartContainer, {

    chart: {
      type: 'bar',
    },

    title: {
      text: 'Your Commute',
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
        format: '{y} c02/km',
      }],
      data: [{
        y: this.data.userMix,
        name: 'Your mix',
        dataLabels: {
          color: 'white',
        },
      }, {
        y: this.data.cycle,
        name: 'If only Bike',
      }, {
        y: this.data.bus,
        name: 'If only Bus',
      }, {
        y: this.data.carDiesel,
        name: 'If only Diesel',
      }, {
        y: this.data.carPetrol,
        name: 'If only Petrol',
      }, {
        y: this.data.carHybrid,
        name: 'If only Hybrid',
      }],
      showInLegend: false,
    }],

  });
  // chartContainer.appendChild(myChart);
};

module.exports = ChartBuilder;
