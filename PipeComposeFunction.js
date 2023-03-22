const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((prev, fn) => fn(prev), val);
const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult);

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => fn(prev), val);
const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult);

const pipeResult2 = pipe(add2, subtract1, multiplyBy5)(6);
console.log(pipeResult2);
// pointer free
//example with 2nd paraameter
const divideBy = (divisor, num) => num / divisor;

const pipeResult3 = pipe(add2, subtract1, multiplyBy5, (x) => divideBy(2, x))(
  5
);
console.log(pipeResult3);
const divBy = (divisor) => (num) => num / divisor;
const divideBy2 = divBy(2);

const pipeResult4 = pipe(add2, subtract1, multiplyBy5, divideBy2)(5);
console.log(pipeResult4);
