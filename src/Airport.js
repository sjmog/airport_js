'use strict';

function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  var weather = this._setWeather();
  if(weather === 'stormy') { throw new Error('cannot land plane: weather is stormy') };
  this.planes += plane;
};

Airport.prototype._setWeather = function() {
  return (Math.random(6) <= 2) ? 'stormy' : 'sunny';
};