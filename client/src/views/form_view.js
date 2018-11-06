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

FormView.prototype.handleSubmit = function(evt) {
  evt.preventDefault();
  // const form = evt.target;
  // console.log('event target in handle submit', evt.target);
  const newCommuteData = this.createNewCommute(evt.target);
  PubSub.publish('FormView:add-item', newCommuteData);
};

FormView.prototype.createNewCommute = function(form) {
  const newCommuteData = {
    singleTripDistance: form['single-trip-distance'].value,
    commutingDays: form['commuting-days'].value,
    singleTripsPerDay: form['single-trips-per-day'].value,
    modes: {carDiesel: form['car-diesel'].value,
      carPetrol: form['car-petrol'].value,
      carHyrid: form['car-hybrid'].value,
      bus: form['bus'].value,
      cycle: form['cycle'].value}
  };
  console.log('formview new item', newCommuteData);
  return newCommuteData;
};
// };


// form.reset();
// });
// };


module.exports = FormView;
