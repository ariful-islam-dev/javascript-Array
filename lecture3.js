let numbers = [1, 2, 3, 4, 5];

//Implementation of sum

function sumFunc(accumulator, currentValue, index) {
    console.log(`Index ${index} - Acc ${accumulator} - Curr ${currentValue}`);
  return accumulator + currentValue;
}

const sum = numbers.reduce(sumFunc, 10);
console.log(sum);
