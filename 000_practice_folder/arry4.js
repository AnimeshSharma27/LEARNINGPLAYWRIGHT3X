//find min in array

const arr = [3, 1, 4, 1, 5, 9, 2, 6];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);