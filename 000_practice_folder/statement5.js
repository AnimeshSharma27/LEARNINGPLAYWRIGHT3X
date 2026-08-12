// ### Problem 5: Check if Number is in Range
// **Difficulty:** ⭐ Easy

// Check if number is between 1 and 100.

// **Input:** num = 50  
// **Expected Output:** In range

// **Input:** num = 150  
// **Expected Output:** Not in range

let num = 1;
if( num > 0 && num <= 100){
    console.log("In range ");
}else if (num > 100){
    console.log("Not in range");
}else (
    console.log("Invalid")
);