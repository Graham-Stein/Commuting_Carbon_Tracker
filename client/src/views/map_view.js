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
  // console.log('In map view bindevents', this.bikestations);
  console.log("window.google:", window.google);
  if (!window.google) {
      this.loadGoogleMapsAPI();
  }
};

MapView.prototype.loadGoogleMapsAPI = function() {
  window.loadGoogleMapsApiCallback = () => {
    this.initMap();
    this.onInitComplete();

    // PubSub.subscribe('CycleStations:stations-ready', (evt) => {
    //   this.bikeStations = evt;
    //   this.initMap();
    // });
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

  console.log("THIS.BIKESTATIONS:", this.bikeStations);
  console.log("this.container.id:", this.container.id);

  if (this.bikeStations != null && this.container.id == 'bikeMap') {
    console.log('this.bikeStations in init map', this.bikeStations);
    this.renderBikeStations(this.bikeStations, this.googleMap);
  }
};

MapView.prototype.populateBikeStations = function() {
  PubSub.subscribe('CycleStations:stations-ready', (evt) => {
    this.bikeStations = evt;
    this.initMap();
  });
};

MapView.prototype.renderBikeStations = function(stations, map) {
  const markers = [];
  const bounds = new google.maps.LatLngBounds();
// console.log('TEST', stations.detail);
  console.log('map in render bikeStations', this.googleMap);
  stations.forEach(function(marker) {
    // console.log(marker.lat);
    const position = new google.maps.LatLng(marker.lat, marker.lon);

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
