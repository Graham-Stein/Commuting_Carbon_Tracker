const PubSub = require('../helpers/pub_sub.js');

const Calculator = function() {
  this.consts = [{'diesel': 0.218}, // add values here
    {'petrol': 0.286}, // gCO2e/km
    {'bus': 0.124},
    {'hybrid': 0.118},
    {'train': 0.05},
    {'cycle': 0}]; // more figures on docs
};

Calculator.prototype.bindEvents = function() {
  PubSub.subscribe('Form', (evt) => {
    this.data = evt.detail;
  });
};


module.exports = Calculator;
