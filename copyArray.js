const arr = [1, 2, 3, 4, [], {}];
const arr2 = arr;
arr.push(5)
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
pointsCopy[0][0] = 100;
pointsCopy[0][1] = 120;
pointsCopy.push([1, 3])
// console.log(points);
// console.log(pointsCopy);



