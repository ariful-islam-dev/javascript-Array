let nestedArray = [[1, 2], 3, [4, 5], [6]];

//Array Flat Method
const flatArray1 = nestedArray.flat();

console.log(flatArray1);

// we can do the same using reduce method

const flatArray2 = nestedArray.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(flatArray2);