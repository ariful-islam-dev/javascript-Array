//Array Literal
const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[99] = 100;
console.log(arr.length);
console.log(arr);

//Length = lastIndex+1
//lastIndex = lenght -1

const names = [
    'Ariful Islam',
    'Johirul Islam',
    'Azizul Islam',
    'Asia Begum',
    'Asysha Mone',
    'Rupa Begum'
];
// names[5]='Rupa Begum'
names[names.length]='Jamil'
console.log(names);