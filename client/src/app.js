const Calculator = require('./models/calculator.js');
// const PubSub = require('./helpers/pub_sub.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');
  const calc = new Calculator();
  calc.bindEvents();
  // });

  // bindEvents form_view
  const inputTravel = document.querySelector('form#input-travel');
  const formView = new FormView(inputTravel);
  formView.bindEvents();
});
