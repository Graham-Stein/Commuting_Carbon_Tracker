const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:added-item', (evt) => {
    console.log('result view', evt);
    this.render(evt.details);
  });
};
/*
ResultView.prototype.render = function(form) {
  const singleTripDistance = this.createTextElement('p', form.value);
  this.container.appendChild(singleTripDistance);

  const commutingDays =
  this.createTextElement('p', form.value);
  this.container.appendChild(commutingDays);
  const singleTripsPerDay =
  this.createTextElement('p', form.value);
  this.container.appendChild(singleTripsPerDay);

  const carDiesel =
  this.createTextElement('p', form.value);
  this.container.appendChild(carDiesel);

  const carPetrol =
  this.createTextElement('p', form.value);
  this.container.appendChild(carPetrol);

  const carHyrid =
  this.createTextElement('p', form.value);
  this.container.appendChild(carHyrid);

  const bus =
  this.createTextElement('p', form.value);
  this.container.appendChild(bus);

  const cycle =
  this.createTextElement('p', form.value);
  this.container.appendChild(cycle);
};
*/

// };

module.exports = ResultView;
