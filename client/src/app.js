const Calculator = require('./models/calculator.js');
// const PubSub = require('./helpers/pub_sub.js');
const ChartBuilder = require('./models/chart_builder.js');
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const CycleStations = require('./models/cycle_stations.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');
  const calc = new Calculator();
  calc.bindEvents();
  // });

  // bindEvents JustEatCycles
  const cycleStations = new CycleStations();
  cycleStations.getData();

  // bindEvents form_view
  const inputTravel = document.querySelector('form#input-travel');
  // console.log('input travel from app', inputTravel);
  const formView = new FormView(inputTravel);
  formView.bindEvents();

  // bindEvents ChartBuilder
  const chartBuilder = new ChartBuilder();
  chartBuilder.bindEvents();

  // bindEvents ResultView
  const resultContainer = document.querySelector('section#result-view');
  const resultView = new ResultView(resultContainer);
  resultView.bindEvents();
});
