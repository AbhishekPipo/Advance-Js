// No circular references allowed (person._proto_ can't be guitarist)
// The _proto_ value must be an object or null.
// An object can only directly inherit from one object

// object with getter and setter methods
const car = {
  doors: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  },
};
const luxuryCar = {};
Object.setPrototypeof(luxuryCar, car);
luxurycar.seatMaterial = "leather"; //Note keyword "this"
console.log(luxuryCar);
console.log(luxurycar.doors);

console.log(car);

//walking up the chain - properties and methods r not copied
console.log(luxuryCar.valueOf());

// Getting the keys of an object
console.log(Object.keys(luxuryCar));
// loop through each object key
Object.keys(luxuryCar).forEach((key) => {
  console.log(key);
});
// But a for..in loop includes inherited props
for (let key in luxuryCar) {
  console.log(key);
}
