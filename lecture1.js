// use push to insert at the end
const arrp1 = [1, 2, 3];
const arrp2 = [8, 9];
arrp1[arrp1.length] = 4;
arrp1.push(5);
arrp1.push(6, 7);
// arrp1.push(...arrp2)
Array.prototype.push.apply(arrp1, arrp2);

// console.log(arrp1);

//Use unshift to insert at the beginnig
const arrU1 = [5, 6, 7];
const arrU2 = [1, 2, 3];
arrU1.unshift(4);
// arrU1.unshift(...arrU2);
Array.prototype.unshift.apply(arrU1, arrU2);
// console.log(arrU1);

//Use Splice to insert at the given index
const arrS1 = [1, 2, 3, 5, 9];
const arrS2 = [6, 7, 8];
arrS1.splice(3, 0, 4);
// arrS1.splice(5, 0, arrS2);
arrS1.splice(5, 0, ...arrS2);
console.log(arrS1);
