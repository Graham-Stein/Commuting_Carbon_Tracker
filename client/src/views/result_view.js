const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:added-item', (evt) => {
    console.log('result view', evt);
    this.render(evt.details);
  });
  //  create an object that will get populated with the data that's coming
  allResultData = new AllResultData();
  // subscribe for all output
  PubSub.subscribe('Calculator:output-all', (evt) =>{
    // trigger an all output function
    this.populateAllData(evt.detail);
  });
  // subscribe for user output
  PubSub.subscribe('Calcultator:output-user-commute', (evt) =>{
    // trigger a user output function
    this.populateUserCommuteData(evt.detail);
  });
};

//  all output function
ResultView.prototype.populateAllData = function(outputAllData) {
  // populate the object
  allResultData.carDiesel = outputAllData.carDiesel;
  allResultData.carPetrol = outputAllData.carPetrol;
  allResultData.carHyrid = outputAllData.carHyrid;
  allResultData.bus = outputAllData.bus;
  allResultData.bike = outputAllData.bike;
  // if statement to check the object is fully populated.
  if (allResultData.userCommute === null) {
    return allResultData;
  } else {
    // we might not be publishing --- this line is to send the data to highcharts
    console.log('all result data ready', allResultData);
    PubSub.publish('ResultView:highchart-data-ready', allResultData);
  }
};

// your output function
ResultView.prototype.populateUserCommuteData = function(outputUserData) {
  console.log('output user data', outputUserData);
  // add first
  let userData = 0;

  userTotal = userData + outputUserData.carDiesel;
  userTotal = userTotal + outputUserData.carPetrol;
  userTotal = userTotal + outputUserData.carHyrid;
  userTotal = userTotal + outputUserData.bus;
  userTotal = userTotal + outputUserData.bike;
  // set user value
  allResultData.userCommute = userData;
  // console.log('final', userTotal);

  if (allResultData.carDiesel > 0) {
    // we might not be publishing --- this line is to send the data to highcharts
    console.log('all result data ready', allResultData);
    PubSub.publish('ResultView:highchart-data-ready', allResultData);
  } else {
    return allResultData;
  }
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
