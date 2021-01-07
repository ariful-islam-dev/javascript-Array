let names = [
  "Ariful Islam",
  "Johirul Islam",
  "Azizul Islam",
  "Asia Islam",
  "Zarif Islam",
  "Sadiqul Islam ",
];
// function reuse(arr, logic) {
//   for (let i = 0; i < arr.length; i++) {
//     logic(arr[i], i, arr);
//   }
// }

//Eample One
// const result = [];
// reuse(names, (value) => {
//   result.push(value.length);
// });
// console.log(result);
//  //Eample One
// const result2 = [];
// reuse(names, (value) => {
//   result2.push(value.toUpperCase());
// });
// console.log(result2);
// //Eample Three
// const result3 = [];
// reuse(names, (value) => {
//   result3.push(value.substr(0, 7) );
// });
// console.log(result3);

function reuseAndMap(arr, logic) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const r = logic(arr[i], i, arr);
    result.push(r);
  }
  return result;
}
const lengths = reuseAndMap(names, (value) => value.length);
const uppers = reuseAndMap(names, (value) => value.toUpperCase());
const sliced = reuseAndMap(names, (value) => value.substr(6));

// console.log(lengths);
// console.log(uppers);
// console.log(sliced);

const length1 = names.map((value) => value.length);
const upper1 = names.map((value) => value.toUpperCase());
const sliced1 = names.map((value) => value.substr(0));

// console.log("Array:", length1);
// console.log("Array:", upper1);
// console.log("Array:", sliced1);

const studentArray = [
  { id: 1, name: "Ariful Islam", gpa: 5.0, email: "ariful4082@gmail.com" },
  { id: 2, name: "Johirul Islam", gpa: 3.99, email: "johirul@gmail.com" },
  { id: 3, name: "Azizul Islam", gpa: 0.0, email: "azizul@gmail.com" },
  { id: 4, name: "Asia Akter", gpa: 2.52, email: "asia@gmail.com" },
  { id: 5, name: "Abdullah Al Zarif", gpa: 5.0, email: "zarif@gmail.com" },
  { id: 6, name: "Sadiqul Islam Jamil", gpa: 5.0, email: "jaril@gmail.com" },
];

const mappedStudent = studentArray.map((value) => {
  return {
    ...value,
    title: `Hello ${value.name} - your resutl has been published`,
    msg: `Hello ${value.name} - your resutl has been published, You have got ${
      value.gpa
    }, You have ${value.gpa >= 3 ? "Passed" : "Failed"} `,
  };
});
console.log(mappedStudent);
