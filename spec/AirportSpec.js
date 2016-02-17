'use strict';

describe('Airport', function() {
  describe('#land', function() {
    it('lands planes in hangars', function() {
      var airport = new Airport();
      var plane = 'plane';
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });
});