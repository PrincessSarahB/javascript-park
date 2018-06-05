const Dinosaur = require('./dinosaur.js');

const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaursOfSameType = function (dinosaurType) {


  for(i = 0; i < this.enclosure.length; i++) {
    if(this.enclosure[i].type === dinosaurType) {
       this.enclosure.splice(i, 1);
       i--;
      
    }
}
};

module.exports = Park;
