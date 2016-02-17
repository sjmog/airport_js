'use strict';
describe('Features', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('when the weather is sunny', function() {
    // As an air traffic controller 
    // So I can get passengers to a destination 
    // I want to instruct a plane to land at an airport and be available in the airport's hangar
    it('lands a plane at an airport, available in the airport\'s hangar', function(){
      _setWeatherToBeSunny();
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });

  describe('when the weather is stormy', function() {
    // As an air traffic controller 
    // To ensure safety 
    // I want to prevent landing when weather is stormy
    it('prevents landing', function() {
      _setWeatherToBeStormy();
      expect(function() { airport.land(plane) }).toThrowError('cannot land plane: weather is stormy');
    });
  });

  function _setWeatherToBeStormy() {
    spyOn(Math, 'random').and.returnValue(1);
  };

  function _setWeatherToBeSunny() {
    spyOn(Math, 'random').and.returnValue(6);
  };
});