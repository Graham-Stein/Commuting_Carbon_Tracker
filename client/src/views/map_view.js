const MapKey = require('../key.js');

const MapView = function(formElement) {
  this.element = formElement;
  this.googleMap = null;
};

MapView.prototype.bindEvents = function() {
  this.loadGoogleMapsAPI();
};

MapView.prototype.loadGoogleMapsAPI = function() {
  window.loadGoogleMapsApiCallback = () => {
    this.initMap();
  };
  const jsFile = document.createElement('script');
  jsFile.type = 'text/javascript';
  jsFile.src = `https://maps.googleapis.com/maps/api/js?callback=loadGoogleMapsApiCallback&key=${MapKey}`;
  document.getElementsByTagName('head')[0].appendChild(jsFile);
};

MapView.prototype.initMap = function() {
  this.googleMap = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: 55.93715871276677, lng: -3.206435329645956},
    zoom: 10,
  });
};

module.exports = MapView;
