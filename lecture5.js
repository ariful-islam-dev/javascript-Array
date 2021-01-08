const arr = [1, 2, 3, 4];

//FlatMap = Map->Flat

const map = arr.map((x) => [x * 2]);

console.log(map);

// flateMap & Reduce Method
const flatMap = arr.flatMap((x) => [x * 2]);
console.log(flatMap);

const reduceFlatMap = arr.reduce((acc, cur) => {
  return acc.concat(cur * 2);
}, []);
console.log(reduceFlatMap);

//FlatMap and Reduce

const flatmap1 = arr.flatMap((x) => [x, x * 2]);
console.log(flatmap1);

const reduceFlatMap1 = arr.reduce((acc, cur) => {
  return acc.concat([cur, cur * 2]);
}, []);
console.log(reduceFlatMap1);
