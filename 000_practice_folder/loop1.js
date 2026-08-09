//Print numbers from 1 to n using a loop.

const data = require('fs').readFileSync(0, 'utf8');

const num = parseInt(data.trim());


for (let i=1 ; i <= num ; i++ ){
    console.log(i)
}