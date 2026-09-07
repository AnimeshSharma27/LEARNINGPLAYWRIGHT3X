
function gradeRemark (num) {
    switch (true) {
        case (num >= 90 && num <= 100):  return "A - Excellent";
        case (num >= 80 && num < 90):    return "B - Very Good";
        case (num >= 70 && num < 80):    return "C - Good";
        case (num >= 60 && num < 70):    return "D - Average";
        case (num >= 50 && num < 60):    return "F - Fail";
        default: return "Invalid Grade";  
    }
}

console.log(gradeRemark(95));
console.log(gradeRemark(85));
console.log(gradeRemark(75));
console.log(gradeRemark(65));
console.log(gradeRemark(55));
