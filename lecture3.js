const arr = [48, 39, 59, 23, 54, 32, 98, 105];
const n = arr[3];
const m = arr[2];
const x = 1,
  y = 0;
// console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// console.log(sum);
// console.log(sum / arr.length);

//Find Largest Number
let largestNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
}
console.log(largestNumber);

//Find Smallest Number
let smallestNumber = arr[0];
for(let i = 0; i<arr.length; i++){
    if(arr[i]<smallestNumber){
        smallestNumber= arr[i]
    }
}
console.log(smallestNumber);