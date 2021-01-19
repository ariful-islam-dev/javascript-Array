// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// numbers.sort();
// console.log(numbers);
const numbers = [10, 1, 3, 78, 39, 22, 34, 22, 34, 2, 11, 30, 567, 19, 90, 100];

console.log(numbers.sort());
// numbers.sort((a, b) => {
//     console.log(a, b);
//     return b-a
// })

// console.log(numbers);

let strings = ['apple', 'Cat', 'Ball', 'Apple'];
strings.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    if (b > a) return -1;
    return a
})
console.log(strings);

let strings2 = ['Apple', 'Ant', 'Ball', 'Cat'];