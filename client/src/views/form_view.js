const PubSub = require('../helpers/pub_sub.js');

const FormView = function(formElement) {
  this.element = formElement;
};

FormView.prototype.bindEvents = function() {
  console.log('this element',this.element);
  this.element.addEventListener('submit', (evt) => {
    // call handlesubmit
    this.handleSubmit(evt);
  });
};

FormView.prototype.catchMapData = function () {
  PubSub.subscribe('gmap:single-trip-distance', (evt) => {
    const singleTripDistance = evt.detail;
    this.distance = singleTripDistance / 1000;
  });
};

FormView.prototype.handleSubmit = function(evt) {
  evt.preventDefault();
  // const form = evt.target;
  // console.log('event target in handle submit', evt.target);
  const newCommuteData = this.createNewCommute(evt.target);
  PubSub.publish('FormView:add-item', newCommuteData);
};

FormView.prototype.createNewCommute = function(form) {
//pubsub subscribe
// const distance = evt.detail/1000
  const newCommuteData = {
    singleTripDistance: this.distance,//Dist in Km from gmap:single-trip-distance
    commutingDays: form['commuting-days'].value,
    singleTripsPerDay: form['single-trips-per-day'].value,
    carDiesel: form['car-diesel'].value,
    carPetrol: form['car-petrol'].value,
    carHybrid: form['car-hybrid'].value,
    bus: form['bus'].value,
    cycle: form['cycle'].value,
  };
  console.log('formview new item', newCommuteData);
  return newCommuteData;
};
// };

// form.reset();
// });
// };


module.exports = FormView;
