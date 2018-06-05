const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('park', function(){
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur('Tyrannosaurus', 3);
    dinosaur2 = new Dinosaur('Velociraptor', 1);
    dinosaur3 = new Dinosaur('Diplodocus', 4);
  });

  it('should have empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add dinosaur', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(park.enclosure.length, 2);
  });


});
