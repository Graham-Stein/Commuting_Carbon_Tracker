const MapKey = require('../key.js');
const AutocompleteDirectionsHandler = require('./gmap.js');
const PubSub = require('../helpers/pub_sub.js');

const MapView = function(container, onInitComplete) {
  this.container = container;
  this.googleMap = null;
  this.onInitComplete = onInitComplete;
  this.bikeStations = null;
};

MapView.prototype.bindEvents = function() {
  if (window.google) {
    // console.log('not inserting script again');
    this.initMap();
  } else {
    // console.log('inserting script for gmaps API');
    this.loadGoogleMapsAPI();
    this.populateBikeStations();
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
  });
  if (this.container.id == 'bikeMap') {
    console.log('this.bikeStations in init map', this.bikeStations);
    this.renderBikeStations(this.bikeStations);
  }
};

MapView.prototype.populateBikeStations = function() {
  // subscribe to just eat bike api getData
  PubSub.subscribe('CycleStations:stations-ready', (evt) => {
    // reformat into appropriate json to populate the bikeMap here or in cycle_stations
    // console.log(evt);
    this.bikeStations = evt;
    console.log('this bikestations:', this.bikeStations);
  });
};

MapView.prototype.renderBikeStations = function(stations) {
  const markers = [];
  const bounds = new google.maps.LatLngBounds();
console.log('TEST', stations);
  stations.forEach(function (marker) {
    var position = new google.maps.LatLng(marker.lat, marker.lng);

    markers.push(
      new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      })
    );

    bounds.extend(position);
  });

  map.fitBounds(bounds);
};

module.exports = MapView;
