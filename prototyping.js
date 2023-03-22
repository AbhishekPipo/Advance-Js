
// Object literals
const person = {
alive: true

}
const musician = {
plays: true

}
// JS now has getPrototypeof and set Prototypeof methods instead of using _proto_
 Object.setPrototypeof (musician, person);
 console.log(Object.getPrototypeof (musician)); //returs only alive (means person property)
 console.log(musician._proto_);
 console.log(Object.getPrototypeof (musician) === musician._proto_); //which gives true bcz they r same


