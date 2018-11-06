ResultView = require('./result_view.js');
ResultData = require('../models/result_data.js');

resultView = new ResultView();
resultData = new ResultData();

// populate the all outdata
resultData.carDiesel = 1;
resultData.carHybrid = 1;
resultData.carPetrol = 2;
resultData.bus = 3;
resultData.bike = 5;

// create a dake of the outputUserData
const outputUserData = {
  carDiesel: 1,
  carHyrid: 2,
  carPetrol: 3,
  bus: 1,
  bike: 1
};

//  call ResultView.populateUserCommuteData(outputUserData)
resultView.populateUserCommuteData(outputUserData);
