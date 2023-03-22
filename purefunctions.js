//learning  pure functions
// retrun same as input
const add = (x, y) => x + y;
console.log(add (2, 3));
const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Dave", "Gray"));

//hv atleast 1 parameter
const firstName = () => "Dave";



// 2) No side effects:
// This also means accessing the
// the function impure
const z = 5;
const sum = (x, y) => x + y +
console.log(sum (2, 2));


//impure functions
let x=1;
 const increment =()=> x+=1;
 console.log(increment());
 console.log(x);


                     //example 2
                     const myArray = [1, 2, 3];
const addToArray = (array, data) => {
array.push(data);
return array;
}
console.log(addToArray(myArray, 4));
console.log(myArray);


// Refactored Example 1:
const pureIncrement = (num) => num += 1;
console.log(pureIncrement (x));
console.log(x);

// Refactored Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);