const PubSub = require("../helpers/pub_sub.js");

// We should initialise the calculator with all the conversion factors already present and pass it a set of form data that is unique to each trip! much simpler than having this many different arguments/inputs.
// need to know what the form looks like though before we can do that



const Calculator = function(distance, volume, frequency){
  // travel distance
  this.distance = distance;
  // number of trips
  this.volume = volume;
  // // diesel/petrol/bus/bike/electric etc.
  // this.emissions = emissions; // going to pass this in from a PubSub later to get an array of hashes?
  // number of a certain trip (based on each case passed to the calculator)
  this.frequency = frequency;
  // mpty array for projection calculations that can be returned later
  this.projections = [];
};

// we want the calculator to subscribe to a bunch of data, not 100% what that will be just yet but will be ready for it

Calculator.prototype.bindEvents = function () {
  // thinking it should subscribe to direct emissions multipliers
  //// Cancel that, subscribe to a list of modes rather than emissions multipliers as we can pass it directly instead
  // cancel the cancel, subscribe to both, emissions their mode (and their frequency) so that we can calculate each of the projections
  PubSub.subscribe("", (evt) => {
    // adding a feature to the model
    this.modes = evt.detail
  });
};

Calculator.prototype.totalDistance = function () {
  const total += (this.distance * this.volume);
  return total;
};

Calculator.prototype.distanceByMode = function (mode) {
  const total = (this.distance * this.modes.frequency);
  return total
}; //  need to get some data in and then get the specific one out to get the answer

Calculator.prototype.emissionsByMode = function () {
  const total = ((this.distanceByMode()) * this.emissions);
  return total
};

Calculator.prototype.emissionProjections = function () {
  this.modes.forEach((mode) => {
    const total = (mode.emissions * this.distance)
    projections.push(total);
  });
  return total
};

// Calculator.prototype.totalEmissions = function () {
//   const total = ((this.emissionsByMode()))
// };


module.exports = Calculator;
