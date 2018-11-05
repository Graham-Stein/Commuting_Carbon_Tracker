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
    this.handleData(this.data.target);
    // console.log('data', this.data);
    // console.log('Data Arriving', this.data['singe-trip-disance'].value);
  });
};

Calculator.prototype.handleData = function(data) {

  this.singleTripDistance = data['singe-trip-disance'].value;

  this.commutingDays = data['commuting-days'].value;

  this.tripsPerDay = data['single-trips-per-day'].value;

  // trip numbers for each mode here (so eg 5 diesel trips)
  this.dieselCar = data['car-diesel'].value;

  this.petrolCar = data['car-petrol'].value;

  this.hybrid = data['car-hybrid'].value;

  this.bus = data['bus'].value;

  this.cycle = data['cycle'].value;
};


module.exports = Calculator;
