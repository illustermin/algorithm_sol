const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const n = parseInt(input[0]);

function f(n) {
    if(n===1 || n===0){
        return 1;
    }
    return n* f(n-1);
}

console.log(f(n));
