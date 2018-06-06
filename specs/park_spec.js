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

  it('should be able to remove dinosaur of certain type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaursOfSameType('Tyrannosaurus');
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should have more than two offspring', function(){
  park.addDinosaur(dinosaur1);
  park.addDinosaur(dinosaur2);
  park.addDinosaur(dinosaur3);
    assert.strictEqual(park.moreThanTwoOffspring().length, 2)
  });

  it('should be able to calculate the number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.numberOfDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.numberOfDinosaurs(2), 16);
  });

  it('should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(park.numberOfDinosaurs(2), 20);
  });






});
