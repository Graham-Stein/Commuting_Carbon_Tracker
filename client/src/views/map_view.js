const MapKey = require('../key.js');
const AutocompleteDirectionsHandler = require('./gmap.js');

const MapView = function(container, onInitComplete) {
  this.container = container;
  this.googleMap = null;
  this.onInitComplete = onInitComplete;
};

MapView.prototype.bindEvents = function() {

  if (window.google) {
    console.log('not inserting script again')
    this.initMap();
  }
  else {
    console.log('inserting script for gmaps API')
    this.loadGoogleMapsAPI();
  }
};

MapView.prototype.loadGoogleMapsAPI = function() {
  window.loadGoogleMapsApiCallback = () => {
    this.initMap();
    this.onInitComplete();
  };
  const jsFile = document.createElement('script');
  jsFile.type = 'text/javascript';
  jsFile.src = `https://maps.googleapis.com/maps/api/js?callback=loadGoogleMapsApiCallback&key=${MapKey}&libraries=places`;
  document.getElementsByTagName('head')[0].appendChild(jsFile);
};

MapView.prototype.initMap = function() {
  this.googleMap = new google.maps.Map(this.container, {
    center: {lat: 55.93715871276677, lng: -3.206435329645956},
    zoom: 10,
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    zoomControl: false
  });

};

module.exports = MapView;
