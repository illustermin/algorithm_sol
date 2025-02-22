const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const n = parseInt(input[0]);


function fac(n) {
    if(n===0) return 0;
    if(n===1 || n===2) return 1;
    else{
        return fac(n-1) + fac(n-2);
    }
}

console.log(fac(n)); 