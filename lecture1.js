const arr = [];
// arr.concat();
// Array.from(); //Static Method

// Array.from()

const s = Array.from('Stack Learner')
console.log(s);

const set = new Set(['foo', 'bar', 'baz', 'foo'])
const s1 = Array.from(set)
console.log(s1);

const mapper = new Map([
    ['1', 'a'],
    ['2', 'b'],
]);

Array.from(mapper.values());
Array.from(mapper.keys());

function f() {
    return Array.from(arguments);
}
f(1, 2, 3)

Array.from([1, 2, 3], (x) => x + x);

Array.from({ length: 5 }, (v, i) => i * 2);

const range = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
    );

range(0, 4, 1);

range(1, 10, 2);

range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x =>
    String.fromCharCode(x)
)

//All following calls return true

Array.isArray([])
Array.isArray([1])
Array.isArray(new Array())
Array.isArray(new Array(('a', 'b', 'c', 'd')));
Array.isArray(new Array(3));

//Little know fact: Array.prototype itself is an Array:
Array.isArray(Array.prototype)

//All following calls return false
Array.isArray()
Array.isArray({})
Array.isArray(null)
Array.isArray(undefined)
Array.isArray(17)
Array.isArray('Array')
Array.isArray(ture)
Array.isArray(false)
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype })

//Array.of()
Array.of(7)
Array.of(1, 2, 3)
Array.of(undefined)

Array(7)
Array(1, 2, 3)