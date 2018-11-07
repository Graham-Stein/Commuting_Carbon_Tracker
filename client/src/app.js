const Calculator = require('./models/calculator.js');
// const PubSub = require('./helpers/pub_sub.js');
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const MapView = require('./views/map_view.js');
const AutocompleteDirectionsHandler = require('./views/gmap.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');
  const calc = new Calculator();
  calc.bindEvents();
  // });

  const onInitComplete = () => {
    const bikemap = document.querySelector('#bikeMap');
    const bikeMapView = new MapView(bikemap);
    bikeMapView.bindEvents();
    new AutocompleteDirectionsHandler(mapView.googleMap);
  }

  const map = document.querySelector('#googleMap');
  const mapView = new MapView(map, onInitComplete);
  mapView.bindEvents();




  // bindEvents form_view
  const inputTravel = document.querySelector('form#input-travel');
  console.log('input travel from app', inputTravel);
  const formView = new FormView(inputTravel);
  formView.bindEvents();

  // bindEvents ResultView
  const resultContainer = document.querySelector('section#result-view');
  const resultView = new ResultView(resultContainer);
  resultView.bindEvents();

});
