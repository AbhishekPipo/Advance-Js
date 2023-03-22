// Object literals
const person = {
  alive: true,
};

const musician = {
  plays: true,
};
// JS now has getPrototypeof and set Prototypeof methods instead of using _proto_
Object.setPrototypeof(musician, person);

// Extending the prototype chain => general to specific to more specific
const guitarist = {
  strings: 6,
  _proto_: musician,
};

Object.setPrototypeof(musician, person);

console.log(musician.plays);
// missing property => go to person
console.log(musician.alive);

// Extending the prototype chain => general to specific to more specific

console.log(guitarist.alive);

console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);
