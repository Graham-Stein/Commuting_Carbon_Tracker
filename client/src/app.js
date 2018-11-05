const Calculator = require('./models/calculator.js');
// const PubSub = require('./helpers/pub_sub.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');
  const calc = new Calculator();
  calc.bindEvents();
  const form = document.querySelector('#input-travel');
  // console.log('What is the form?', form);
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const event = evt;
    // PubSub.publish('Form', event)
    console.log('Event', event);
  });

});
