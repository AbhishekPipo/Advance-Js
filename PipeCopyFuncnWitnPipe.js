const scoreObj = { home: 0, away: 0 };

const shallowClone = (obj) => Array.isArray(obj)? [...obj] : { ...obj }; 
const incrementHome = (obj) => {
obj.home += 1; // mutation

return obj;


//Clone the object before an impure function mutates it

};
const homeScore = pipe(
shallowClone,
incrementHome
// another function,
// and another function, etc
);
 console.log(homeScore (scoreObj));

console.log(scoreObj);
console.log(homeScore (scoreObj) === scoreObj);




