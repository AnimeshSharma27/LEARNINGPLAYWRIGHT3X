//Sum of Array Elements
//  **Input:** arr = [1, 2, 3, 4, 5]  
//Expected Output:** 15
 

const arr = [1,2,3,4,5];

let sum = 0;
for (let i=0; i < arr.length; i++){
    sum += arr[i];
}  
console.log(sum); 
