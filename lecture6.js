const arr = [1, 3, 78, 39, 22, 34, 22, 34, 2, 11, 30, 567, 19, 90];
const team = [
    { id: 2, name: 'Johirul' },
    { id: 4, name: 'Asia' },
    { id: 10, name: 'Jarif' },
    { id: 1, name: 'Ariful' },
    { id: 8, name: 'Rupa' },
    { id: 3, name: 'Azizul' },
    { id: 6, name: 'Yousuf' },
    { id: 5, name: 'Ismail' },
    { id: 9, name: 'Jamil' },
    { id: 7, name: 'Aysha' },
];

const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i
        }

    }
    return -1
}
const s1 = linearSearch(arr, 20)
console.log(s1);

const s2 = linearSearch(team, 'Ariful');

const linearSearchCB = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }

    }
    return -1
}

const s3 = linearSearchCB(team, item=>item.name === 'Ariful')
console.log(s3);

const s4 = linearSearchCB(team, item=> item.id=== 40)
console.log(s4);