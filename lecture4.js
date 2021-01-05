const arr1 = new Array(10);

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = false;
}
// console.log(arr1);

const arr2 = new Array(10);
arr2.fill(0);
// console.log(arr2);

const names = ["Ariful Islam", "Aysha Mone", "Abdullah-Al-Zarif"];

names[0] = "Ariful";
names[1] = "Moyna";
names[2] = "Zarif";
// console.log(names);

const response = new Array(9);
response.fill(false);
for (let i = 0; i < response.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);

  response[i] = rand > 5 ? "X" : "O";
}
console.log(response);

//Array is mutable
function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}.${arr[i]}`;
  }
  return arr
}
const updateNames = update(names);
console.log(names);
console.log(updateNames);


console.log(names === updateNames);