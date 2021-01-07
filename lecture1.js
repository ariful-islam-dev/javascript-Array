let names = ["Ariful Islam", "Johirul Islam", "Azizul Islam", "Asia Akter"];

for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
  //   console.log(`${i + 1}: ${names[i]}`);
}

//Iterationg -> Business  Logic

// function reuse(arr, logic) {
//   for (let i = 0; i < arr.length; i++) {
//     logic(arr[i], i, arr);
//   }
// }
// function log(value){
//     console.log(value);
// }
// function logic(value, index, arr) {
//   console.log(value, index, arr);
// }
// // reuse([])
// reuse([1, 2], log);
// reuse(["One", "Two", "Three"], logic);

function myForeach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

const nums = [1, 2, 3, 4];
let sum = 0;

myForeach(nums, function sumFunc(v) {
  sum += v;
});
console.log(sum);

myForeach(names, (value, index) => {
  console.log(`${index + 1}: ${value}`);
});

names.forEach((value, index)=>{
    console.log(`[Array] ${index + 1}: ${value}`);
})