let incrementHomeB = (cloneFn) => (obj) => {
  const newObj = cloneFn(obj);
  newObj.home += 1; // mutation
  return newObj;
};
incrementHomeB = incrementHomeB(shallowClone);
console.log(homeScoreB(scoreObj));
console.log(scoreObj);

const homeScoreB = pipe(incrementHomeB);




// clone funtion as dependancy

let incrementHomec =(obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1; // mutation
    return newObj;
  };

  const homeScoreC = pipe(
    X=>incrementHomeC(x,shallowClone)
    );

    console.log(homeScoreC(scoreObj));
    console.log(scoreObj);