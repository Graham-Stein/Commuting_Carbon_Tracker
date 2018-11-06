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
      carDiesel: '5',
      carPetrol: '0',
      carHybrid: '0',
      bus: '4',
      cycle: '1',
    };
    calculator1 = new Calculator();
    calculator1.setData(data);
    // calculator1.bindEvents();
    // PubSub.publish('FormView:add-item', data);
  });

  it('should have a distance', function() {
    const actual = calculator1.data.singleTripDistance;
    assert.strictEqual('10', actual);
  });

  it('should be able to return total distance', function() {
    const actual = calculator1.totalDistance();
    assert.strictEqual(actual, 100);
  });

  it('should be able to calculate a worst case scenario', function() {
    const actual = calculator1.worstCase();
    assert.strictEqual(actual, 28.6);
  });

  xit('should be able to calculate distance', function() {
    const actual = calculator1.distanceByMode('Diesel Car');
    assert.strictEqual(actual, 50);
  });

  xit('should be able to calculate emissions', function() {
    const actual = calculator1.emissionsByMode();
    assert.strictEqual('figure out what goes here', actual);
  });
});
