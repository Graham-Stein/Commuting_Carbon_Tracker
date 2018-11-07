```javascript

const PubSub = require(‘../helpers/pub_sub.js’);
const Highcharts = require(‘highcharts’);

const TotalCalculator = function () {
// const Total = function() {
 this.values = {food: 0, travel: 0, lifestyle: 0};
};

TotalCalculator.prototype.bindEvents = function () {
// populates their chart data for highchart
 PubSub.subscribe(‘FoodInfo’, (event) => {
   console.log(‘Results from food form’, event.detail);
   const foodData = event.detail;
   this.values.food = parseInt(foodData)
 });

 // populates their chart data for highchart
 PubSub.subscribe(‘TravelForm:display-results’, (event) => {
   console.log(‘Results from travel form’, event.detail);
   const travelData = event.detail;
   this.values.travel = parseInt(travelData)
 });

 // populates their chart data for highchart
 PubSub.subscribe(‘LifestyleView:result’, (event) => {
   console.log(‘Results from lifestyle form’, event.detail);
   const lifestyleData = event.detail;
   this.values.lifestyle = parseInt(lifestyleData)
 });


 const button = document.querySelector(‘#clicky-button’);

   button.addEventListener(‘click’, () => {
     // for their pie charts -- don't believe relevant to us
   const result = this.calculateTotal();
   // calls chart function
   this.chart()

   console.log(result);
// ?? does this send their result or the data for the chart?
   PubSub.publish(“PublishView:final-result”, result);
   // need to subscribe to this in results view
 });

};

TotalCalculator.prototype.calculateTotal = function () {
 const array = Object.values(this.values)
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 const result = array.reduce(reducer);

 return result;
};

TotalCalculator.prototype.chart = function () {
 const myChart = document.createElement(“div”)
 myChart.id = “chart-section”
 const theChart = Highcharts.chart(myChart, {
   chart: {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false,
       type: ‘pie’
   },
   title: {
       text: ‘Your CO2 Footprint’
   },
   tooltip: {
       pointFormat: ‘{series.name}: <b>{point.percentage:.1f}%</b>’
   },
   plotOptions: {
       pie: {
           allowPointSelect: true,
           cursor: ‘pointer’,
           dataLabels: {
               enabled: true,
               format: ‘<b>{point.name}</b>: {point.percentage:.1f} %‘,
               style: {
                   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || ‘black’
               }
           }
       }
   },
   series: [{
       name: ‘Allowance’,
       colorByPoint: true,
       data: [{
           name: ‘Allowance’,
           y: 100,
           sliced: true,
           selected: true
       }, {
           name: ‘Food’,
           y: this.values.food
       }, {
           name: ‘Travel’,
           y: this.values.travel
       }, {
           name: ‘Lifestyle’,
           y: this.values.lifestyle
       }]
   }]
});
const result = document.querySelector(“#result-menu-item”)
result.appendChild(myChart)
}
// chart();


module.exports = TotalCalculator;
```
