const array = ['a', 'b', 'c'];
const keys = array.keys() //0, 1,2,
const values = array.values() // 'a', 'b', 'c'
const entries = array.entries() // [0, 'a'], [1, 'b'], [2, 'c']

console.log(keys);
console.log(values);
console.log(entries);

const loop = (it, name) => {
    for (let v of it) {
        console.log(`[${name}]- ${v}`);
    }
}

loop(keys, 'KEY')
loop(values, 'VALUES')
loop(entries, 'ENTRIES')

const arr = [2, 4, 6, 9]
// for(let v of arr){
//     console.log(v);
// }
loop(arr, 'ARRAY')