
function Animal(species) {
    this.species=species;
    this.eats=true;
}
 Animal.prototype.walks = function () {
return  ' a ${this.species) is walking.';
 };
const Bear = new Animal ("bear");

console.log(Bear. species);

console.log(Bear.walks());
 // The prototype property is where inheritable props and methods are 
 console.log(Bear._proto__);
 console.log(Bear._proto_ === Animal.prototype);
 console.log(Animal.prototype);
 console.log(Bear);