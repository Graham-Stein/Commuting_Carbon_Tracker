const PubSub = require("../helpers/pub_sub.js");

const Calculator = function(distance, volume, emissions, frequency){
  // travel distance
  this.distance = distance;
  // number of trips
  this.volume = volume;
  // diesel/petrol/bus/bike/electric etc.
  this.emissions = emissions;
  // number of a certain trip (based on each case passed to the calculator)
  this.frequency = frequency;
};

// we want the calculator to subscribe to a bunch of data, not 100% what that will be just yet but will be ready for it

// Calculator.prototype.bindEvents = function () {
//   // thinking it should subscribe to direct emissions multipliers
//   //// Cancel that, subscribe to a list of modes rather than emissions multipliers as we can pass it directly instead
//   PubSub.subscribe("", (evt) => {
//     // adding a feature to the model
//     this.emissions = evt.detail
//   });
// };

Calculator.prototype.totalDistance = function () {
  const total += (this.distance * this.volume)
  return total
};

Calculator.prototype.distanceByMode = function () {
  const total = (this.distance * this.frequency)
  return total
};

Calculator.prototype.emissionsByMode = function () {
  const total = ((this.distanceByMode()) * )
};


module.exports = Calculator;
