//Problem 1: Check if Number is Positive
const data = require('fs').readFileSync(0, 'utf8');

const num = parseInt(data.trim());

if (num > 0) {
    console.log(`Number: ${num} is Positive`);
} else if (num < 0) {
    console.log(`Number: ${num} is Negative`);
} else {
    console.log("Number is Zero");
}