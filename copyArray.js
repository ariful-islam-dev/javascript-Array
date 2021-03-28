const arr = [1, 2, 3, 4, [], {}];
const arr2 = arr;
arr.push(5)
console.log('Arr2', arr === arr2);
// console.log(arr, arr2);

//copying using ES6 spred Operator [Shallow Copy]

const arr3 = [...arr];
arr3.push(6);
// console.log(arr, arr3);

//Shallow copy vs Deep Copy

const points = [
    [10, 12],
    [2, 55],
    [67, 31],
];

const pointsCopy = [...points];
// pointsCopy[0][0] = 100;
// pointsCopy[0][1] = 120;
// pointsCopy.push([1, 3])
// console.log(points);
// console.log(pointsCopy);


//[].map [Shallow Copy]
const arr4 = arr.map(x => x)
console.log('arr4', arr === arr4);


// [].filter [Shallow Copy]

const arr5 = arr.filter(() => true)
console.log(arr === arr5);

// [].slice [Shallow Copy]
const arr6 = arr.slice();
console.log(arr === arr6);

// [].concat [Shallow Copy]
const arr7 = arr.concat()
console.log(arr === arr7);

//Array.from()
const arr8 = Array.from(arr)
console.log(arr === arr8);

//JSON.stringify and JSON.parse [Deep Copy]

const pointsDeepcopy = JSON.parse(JSON.stringify(points));
pointsDeepcopy[0][0] = 100;
pointsDeepcopy[0][1] = 120;
console.log(points);
console.log(pointsDeepcopy);