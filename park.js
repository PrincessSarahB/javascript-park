const Dinosaur = require('./dinosaur.js');

const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaursOfSameType = function (dinosaurType) {

//   for(let i = this.enclosure.length -1; i >= 0; i--){
//   if(this.enclosure[i].type === dinosaurType){
//     this.enclosure.splice(i,1);
//   }
// }

  // for(i = 0; i < this.enclosure.length; i++) {
  //   if(this.enclosure[i].type === dinosaurType) {
  //      this.enclosure.splice(i, 1);
  //      i--;
  //
  //   }
// }
const newEnclosure =[];
for(let dinosaur of this.enclosure){
  if(dinosaur.type !== dinosaurType){
    newEnclosure.push(dinosaur);
  }
  this.enclosure = newEnclosure;
}
};

Park.prototype.moreThanTwoOffspring = function () {
  const moreThanTwoOffspring = [];
  for(let dinosaur of this.enclosure){
    if(dinosaur.offspring > 2)
    moreThanTwoOffspring.push(dinosaur);
  } return moreThanTwoOffspring;
};

Park.prototype.numberOfDinosaurs = function () {
  for (dinosaur of this.enclosure){
    return dinosaur += dinosaur.offspring;
  }
};

module.exports = Park;
