const PubSub = require("../helpers/pub_sub.js");

const Calculator = function(){
  this.consts = [{"diesel", }, // add values here
                 {"petrol", },
                 {"bus", }];
};

Calculator.prototype.bindEvents = function () {
  PubSub.subscribe('Form', (evt) => {
    this.data = evt.detail
  });
};
