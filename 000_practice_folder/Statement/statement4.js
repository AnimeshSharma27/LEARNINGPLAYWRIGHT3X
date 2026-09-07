// Grade Assignment
// **Difficulty:** ⭐ Easy

// Assign grade based on marks.

// **Input:** marks = 85  
// **Expected Output:** A

// **Input:** marks = 75  
// **Expected Output:** B

// **Input:** marks = 65  
// **Expected Output:** C

// **Input:** marks = 50  
// **Expected Output:** D

// **Marks:** 80+ = A, 70-79 = B, 60-69 = C, Below 60 = D

let marks = 59;

if(marks >= 80 && marks <= 100){
    console.log("Grade - A")
}else if ( marks >= 70 && marks <= 79){
    console.log("Grade - B")
}else if ( marks >= 60 && marks <= 69){
    console.log("Grade - c")
}else if (marks <= 60){
    console.log("Grade - D")
}