const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const n = parseInt(input[0]);

function fac(n) {
    if(n===1 || n===0) return 1;
    else{
        return n * fac(n-1);
    }
}

console.log(fac(n)); 