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
  PubSub.subscribe('FormView:add-item', (evt) => {
    this.data = evt.detail;
    console.log('Calc receiving data', this.data);
    // this.handleData(this.data.target);
    // console.log('data', this.data);
    // console.log('Data Arriving', this.data['singe-trip-disance'].value);
  });
};

Calculator.prototype.totalDistance = function() {
  const singleDistance = this.data.singleTripDistance;
  const days = this.data.commutingDays;
  const tripsPerDay = this.data.singleTripsPerDay;

  const totalDistance = singleDistance * days * tripsPerDay;

  return totalDistance;
};

Calculator.prototype.carbonOutput = function() {
  
};


module.exports = Calculator;
