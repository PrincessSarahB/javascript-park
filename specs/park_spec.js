const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('park', function(){
  let enclosure;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function(){
    enclosure = new Enclosure();
    dinosaur1 = new Dinosaur('Tyrannosaurus', 3);
    dinosaur2 = new Dinosaur('Velociraptor', 1);
    dinosaur3 = new Dinosaur('Diplodocus', 4);
  });


});
