const assert = require('assert');
const Calculator = require('../models/calculator.js');

describe('Calculator', function() {
  let calculator1;
  let data;

  beforeEach(function() {
    data = {
      singleTripDistance: '10',
      commutingDays: '5',
      singleTripsPerDay: '2',
      carDiesel: '6',
      carPetrol: '0',
      carHybrid: '0',
      bus: '4',
      cycle: '0',
    };
    calculator1 = new Calculator(data);
    // calculator1.bindEvents();
    // PubSub.publish('FormView:add-item', data);
  });

  it('should have a distance', function() {
    const actual = calculator1.data.singleTripDistance;
    assert.strictEqual('10', actual);
  });

  it('should have a number of trips', function() {
    const actual = calculator1.carbonOutput();
    assert.strictEqual('10', actual);
  });

  xit('should be able to return total distance', function() {
    const actual = calculator1.totalDistance;
    assert.strictEqual(200, actual);
  });

  xit('should be able to calculate distance', function() {
    const actual = calculator1.distanceByMode('Diesel Car');
    assert.strictEqual(100, actual);
  });

  xit('should be able to calculate emissions', function() {
    const actual = calculator1.emissionsByMode();
    assert.strictEqual('figure out what goes here', actual);
  });
});
