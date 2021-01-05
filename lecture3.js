let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//Remove First Element
numbers.shift();

//Remove Last Element
numbers.pop();
numbers.length = numbers.length - 1;

//Remove Inside Elemnts
numbers.splice(2, 1);

// Remove Inside Elements - Splice using value

const toBeDeleted = 5;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === toBeDeleted) {
    numbers.splice(i, 1);
  }
}

// Filter Array
const toBeDelted1 = 6;
numbers = numbers.filter((item) => item !== toBeDelted1);

// Delete Operator
// numbers[1] = undefined;
delete numbers[1];

// Reset Whole Array
let x = [1, 2, 3];
let y = x;
x = [];

//Alternative
let xx = [1, 2, 3];
let yy = xx;
xx.length = 0;
console.log(xx, yy);

// Reset array using while loop
while (numbers.length) numbers.pop();

console.log(numbers);
