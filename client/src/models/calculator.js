const PubSub = require('../helpers/pub_sub.js');

const Calculator = function() {
  this.coversionFactors = {carDiesel: 0.218, // add values here
    carPetrol: 0.286, // gCO2e/km
    carHybrid: 0.118,
    bus: 0.124,
    cycle: 10}; // more figures on docs
  // this.data = data;
};

Calculator.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:add-item', (evt) => {
    this.setData(evt.detail);
    console.log('Calc receiving data', this.data);
  });
};

Calculator.prototype.setData = function(data) {
  this.data = data;
};

Calculator.prototype.totalDistance = function() {
  const singleDistance = this.data.singleTripDistance;
  const days = this.data.commutingDays;
  const tripsPerDay = this.data.singleTripsPerDay;

  const totalDistance = singleDistance * days * tripsPerDay;

  return totalDistance;
};

Calculator.prototype.carbonOutput = function() {
  // take in this.data
  // loop through this.coversionFactors keys and values
  Object.entries(this.conversionFactors).forEach(
      ([key, value]) => {
        console.log(key, value);
        const tripNumber = handleTripData(key);
        return tripNumber;
      });
  // this.coversionFactors.forEach((key) => {
  // return key;
  // const factor = this.coversionFactors[key];
  //   console.log('Factor', factor);

  // const tripNumber = handleTripData(key);
  // console.log('tripNumber in carbon output:', tripNumber);
  // use those to extract number of trips from this.data for each key
  // });
  // then multiply by this.data.STD and const for travel type}
};


Calculator.prototype.worstCase = function() {
  const petrol = this.coversionFactors['carPetrol'];
  const result = petrol * this.totalDistance();

  return Math.round(result*100)/100;
};

Calculator.prototype.bus = function() {
  const bus = this.coversionFactors['bus'];
  const result = bus * this.totalDistance();
  return result;
};

Calculator.prototype.inputCarbon = function() {
  this.data.forEach();

  return result;
};

Calculator.prototype.handleTripData = function(factorKey) {
  this.data.forEach((dataKey) => {
    if (factorKey == dataKey) {
      travelModeTrips = this.data[dataKey];
      console.log('Travel mode Trips:', travelModeTrips);
      return travelModeTrips;
    };
  });
};


module.exports = Calculator;
