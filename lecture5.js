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

const bubbleSort = (array, cb) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length - 1; j++) {
            if (cb(array[j], array[j + 1]) > 0) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }

        }

    }
}

const arr = [1, 3, 78, 39, 22, 34, 22, 34, 2, 11, 30, 567, 19, 90];
bubbleSort(arr, (a, b) => b - a)
console.log(arr);

bubbleSort(team, (a, b) => a.id - b.id)
console.log(team);

bubbleSort(team, (a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0;
})
console.log((team));