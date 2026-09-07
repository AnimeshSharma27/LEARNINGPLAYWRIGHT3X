
function monthName(name) {
    switch (name) {
        case "January":return 1;
        case "February":return 2;
        case "March":return 3;
        case "April":return 4;
        case "May":return 5;
        case "June":return 6;
        case "July":return 7;
        case "August":return 8;
        case "September":return 9;
        case "October":return 10;   
        case "November":return 11;
        case "December":return 12;
        default: return "Invalid month";
    }    
}
console.log(monthName("March")); // 3
console.log(monthName("December")); // 12   
console.log(monthName("Invalid")); // "Invalid month"