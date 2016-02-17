'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
  });

  describe('#land', function() {
    describe('when the weather is sunny', function() {
      it('lands planes in hangars', function() {
        _setWeatherToBeSunny();
        airport.land(plane);
        expect(airport.planes).toContain(plane);
      });
    });
    describe('when the weather is stormy', function() {
      it('throws an error', function() {
        _setWeatherToBeStormy();
        expect(function() { airport.land(plane) }).toThrowError('cannot land plane: weather is stormy');
      });
    });
  });

  function _setWeatherToBeStormy() {
    spyOn(Math, 'random').and.returnValue(1);
  };

  function _setWeatherToBeSunny() {
    spyOn(Math, 'random').and.returnValue(6);
  };
});