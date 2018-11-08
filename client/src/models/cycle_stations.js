const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const CycleStations = function() {
  this.data = null;
};

// bind events . also needed in app. fires on load.
// CycleStations.prototype.bindEvents = function() {
//   this.getData();
// };


// get data
CycleStations.prototype.getData = function(bikeMapView) {
  console.log('get data running');
  const request = new Request('http://gbfs.urbansharing.com/edinburghcyclehire.com/station_information.json');
  request.get()
      .then((data) => {
        this.data = data.data.stations;
        console.log('stations ready', this.data);
        // PubSub.publish('CycleStations:stations-ready', this.data);
        bikeMapView.bikeStations = this.data;
        bikeMapView.initMap();
      })
      .catch((error) =>{
        PubSub.publish('CycleStations:Error', error);
      });
};

// CycleStations.prototype.orderData = function() {
// reorder JSON data here if required.
// };


module.exports = CycleStations;
