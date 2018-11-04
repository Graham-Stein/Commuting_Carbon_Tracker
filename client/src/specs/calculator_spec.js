const assert = require('assert');
const Calculator = require('../models/calculator.js');

describe('Calculator', function(){

let calculator1;

beforeEach(function(){
  calculator1 = new Calculator(20, 10, 5)
});

it('should have a distance', function(){
  const actual = calculator1.distance;
  assert.strictEqual(20, actual);
});

xit('should have a number of trips', function(){
  const actual = calculator1.volume;
  assert.strictEqual(10, actual);
});

xit('should be able to return total distance', function(){
  const actual = calculator1.totalDistance;
  assert.strictEqual(200, actual);
});

xit('should be able to calculate distance', function(){
  const actual = calculator1.distanceByMode("Diesel Car");
  assert.strictEqual(100, actual);
});

xit('should be able to calculate emissions', function(){
  const actual = calculator1.emissionsByMode();
  assert.strictEqual("figure out what goes here", actual);
});

});
