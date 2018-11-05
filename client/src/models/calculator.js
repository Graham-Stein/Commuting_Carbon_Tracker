const PubSub = require('../helpers/pub_sub.js');

const Calculator = function(data) {
  this.consts = [{'carDiesel': 0.218}, // add values here
    {'carPetrol': 0.286}, // gCO2e/km
    {'carHybrid': 0.118},
    {'bus': 0.124},
    {'cycle': 0}]; // more figures on docs
  this.data = data;
};

Calculator.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:add-item', (evt) => {
    this.data = evt.detail;
    console.log('Calc receiving data', this.data);
  });
};

Calculator.prototype.totalDistance = function() {
  const singleDistance = this.data.singleTripDistance;
  const days = this.data.commutingDays;
  const tripsPerDay = this.data.singleTripsPerDay;

  const totalDistance = singleDistance * days * tripsPerDay;

  return totalDistance;
};

// Calculator.prototype.carbonOutput = function() {
//   // take in this.data
//   // loop through this.consts keys and values
//   this.consts.forEach((key) => {
//     const constant = this.consts[key]
//     this.data.forEach((dataKey) => {
//       if key == dataKey
//     })
//     // use those to extract number of trips from this.data for each key
//   });
//   // then multiply by this.data.STD and const for travel type
// };

Calculator.prototype.worstCase = function() {
  const petrol = this.consts['diesel'];
  const result = petrol * totalDistance();
  return result;
};

Calculator.prototype.bus = function() {
  const bus = this.consts['bus'];
  const result = bus * totalDistance();
  return result;
};

Calculator.prototype.inputCarbon = function() {
  this.data.forEach();

  return result;
};

module.exports = Calculator;
