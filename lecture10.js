let todos = [
    { id: '123', task: 'Eat', time: 'Morgning' },
    { id: '234', task: 'Code!', time: 'Afternoon' },
    { id: '532', task: 'Coffee Break', time: 'Evening' },
    { id: '121', task: 'Sleep', time: 'Night' },
];

const todo = todos.find(item => item.time === 'Afternoon');
todo.task = 'Debugging!!';
console.log(todo);


let result = [
    { name: 'Tamim', score: 89 },
    { name: 'Reya', score: 85 },
    { name: 'Sakib', score: 96 },
    { name: 'Mehedi', score: 90 },
];

const highest = 96
const student = result.find(item => item.score === highest)
console.log(student);

const ourFind = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }

    }
    return undefined
}

const lowest = 85;
const student2 = ourFind(result, item => item.score === lowest)
console.log(student2);