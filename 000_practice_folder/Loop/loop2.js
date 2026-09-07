//Print numbers from 1 to n using a loop in reverse.

const data = require('fs').readFileSync(0, 'utf8');

const num = parseInt(data.trim());

for (let i=num ; i >= 1 ; i--){
    console.log(i)
}