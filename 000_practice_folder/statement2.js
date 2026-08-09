// check the person is adult or minor 
const data = require('fs').readFileSync(0, 'utf8');

const age = parseInt(data.trim());

if(age >= 18 && age <=100 ){
    console.log(`Person age is : ${age} : adult`)
} else if(age > 0 && age< 18){
    console.log(`Person age is : ${age} : minor`)
} else {
    console.log(`Invalid input: ${age}`)
}

