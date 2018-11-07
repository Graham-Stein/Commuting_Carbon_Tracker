const MapView = function(formElement) {
  this.element = formElement;
};

MapView.prototype.bindEvents = function() {
  this.render();
};

MapView.prototype.render = function() {
  const jsFile = document.createElement('script');
  jsFile.type = 'text/javascript';
  jsFile.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyBoO6B6p5m4VVbdXE0aN5C-CTa9ECTXeCs';
  document.getElementsByTagName('head')[0].appendChild(jsFile);
};

var mapProp;

MapView.prototype.initMap = function() {
  mapProp = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: 55.93715871276677, lng: -3.206435329645956},
    zoom: 8,
  });
};

module.exports = MapView;
