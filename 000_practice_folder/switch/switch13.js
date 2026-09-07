
function dayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Weekday";
  }
}

console.log(dayType("Saturday")); // "Weekend"
console.log(dayType("Monday")); // "Weekday"