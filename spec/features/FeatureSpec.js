'use strict';
// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport and be available in the airport's hangar
describe('Landing a plane at the airport', function(){
  it('inserts a plane into airport hangar', function(){
    var airport = new Airport();
    var plane = new Plane();
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });
});

// As an air traffic controller 
// To ensure safety 
// I want to prevent landing when weather is stormy