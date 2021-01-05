const arr = [1, 2, 3, 4, 5, 6];
//Slice
const sliced = arr.slice(1, 3);
console.log(sliced);

//Clone Array
const cloned = arr.slice();
console.log(cloned === arr);
//Array Like Objects to Array

function toArray() {
  return Array.prototype.slice.call(arguments);
}
const argArray = toArray(4, 5, 7, 9, "test");
console.log(argArray);
console.log(argArray.__proto__.constructor);

// console.log(arr);
