const PubSub = require('../helpers/pub_sub.js');

const FormView = function(formElement) {
  this.element = formElement;
};

FormView.prototype.bindEvents = function() {
  // console.log('this element', this.element);
  this.element.addEventListener('submit', (evt) => {
    // call handlesubmit
    this.handleSubmit(evt);
  });
  const singleTripsInput = this.element.querySelector('input#single-trips-per-day');
  singleTripsInput.addEventListener('blur', (evt) => {
    this.handleBlur(evt)
  });
  // const dieselCarInput = this.element.querySelector('input#car-diesel');
  // dieselCarInput.addEventListener('click', (evt) => {
  //   this.handleBlur(evt)
  // });
};

FormView.prototype.catchMapData = function () {
  PubSub.subscribe('gmap:single-trip-distance', (evt) => {
    const singleTripDistance = evt.detail;
    let kilometers = this.distance = singleTripDistance / 1000;
    this.calculateSingleTrip(kilometers);
  });
};

// render the sentence - pass in the distance
FormView.prototype.calculateSingleTrip = function (kilometers) {
  let distKilometers = Math.round((kilometers * 2)*100)/100;
  let miles = Math.round((distKilometers * 0.621371)*100)/100;
  // console.log("mi", miles);
  // console.log("km", distKilometers);
  this.renderSingleTripTip(distKilometers, miles)
};

FormView.prototype.renderSingleTripTip = function (distKilometers, miles) {
  let singleTripString = `Based on your entries you travel ${distKilometers}km or ${miles} miles per day`
  // console.log("trip string", singleTripString);

  const singleTripTipDiv = this.element.querySelector('div#total-daily-distance');
  const singleTripTipContent = document.createElement("p");
  singleTripTipContent.textContent = singleTripString;

  singleTripTipDiv.innerHTML = '';
  singleTripTipDiv.appendChild(singleTripTipContent);
};

// FormView.prototype.getCommuteNumbers = function () {
//
// };

FormView.prototype.handleBlur = function () {
  const daysPerWeekInput = this.element.querySelector('input#commuting-days');
  let numOfDays = daysPerWeekInput.value;
  // console.log('number of days', numOfDays);
  const timesPerDayInput = this.element.querySelector('input#single-trips-per-day');
  let numOfTrips = timesPerDayInput.value;
  // console.log('number of trips', numOfTrips);
  let totalTrips = numOfDays * numOfTrips;
  console.log('total trips', totalTrips);

  const tripCountDiv = this.element.querySelector("span#trip-count");

  const tripCountContent = document.createElement("span");
  tripCountContent.textContent = ` ${totalTrips} `;

  tripCountDiv.innerHTML = '';
  tripCountDiv.appendChild(tripCountContent);

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
  // console.log('formview new item', newCommuteData);
  return newCommuteData;
};
// };

// form.reset();
// });
// };


module.exports = FormView;
