/*
// Shallow Copy
// Original array will not change if you change the copy. 

let original = [1, 2, 3];
let copy1 = [...original]; // spread
// console.log(original);
// console.log(copy1);

let copy2 = original.slice();
// console.log(copy2);

let copy3 = Array.from(original);
//  console.log(copy3);

let copy4 = original.concat();
// console.log(copy4);

//Shallow copy - if you add to copy of array element only added to copy and not original. But if you change the value of an element in copy, it will also change in original.
console.log(" ---- ");
copy1.push(99);
console.log(original);
console.log(copy1);

// Deep cOPY
let deep_copy_array = original;
// Deep copy

deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);
*/

const students = [
    { name: 'Ali', scores: [95, 87, 92] },
    { name: 'Priya', scores: [88, 90, 85] }
];

// Shallow copy
const copy = [...students];

// Problem 1: Change object property
copy[0].name = 'Raj';
console.log(students[0].name);  // 'Raj' ❌ CHANGED!

// Problem 2: Change nested array
copy[0].scores[0] = 100;
console.log(students[0].scores[0]);  // 100 ❌ CHANGED!

console.log(students);
