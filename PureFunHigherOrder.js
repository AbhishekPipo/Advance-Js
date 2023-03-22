// These common Higher Order Functions are Pure Functions:
const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter (elem => elem % 2 !== 0);
console.log(oddToFive);
const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled);
const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);
console.log(oneToFive);