const assert = require('assert');
const Dinosaur = require('../dinosaur.js');


describe('dinosaur', function(){

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function(){
    dinosaur1 = new Dinosaur('Tyrannosaurus', 3);
    dinosaur2 = new Dinosaur('Velociraptor', 1);
    dinosaur3 = new Dinosaur('Diplodocus', 4);
  });

  it('should have type', function(){
    assert.strictEqual(dinosaur1.type, 'Tyrannosaurus');
  });

  it('should have offspring', function(){
    assert.strictEqual(dinosaur3.offspring, 4);
  });

});
