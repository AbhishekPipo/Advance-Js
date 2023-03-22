

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x* 5;

//  execute from right to left 
const result = multiplyBy5 (subtract1(add2 (4)));
console.log(result);

