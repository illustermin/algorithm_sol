const fs = require('fs');
const n = parseInt(fs.readFileSync('personal.bj.txt').toString().trim());

let num = 666;
let count= 0;

while (count !== n) {
    if(String(num).includes("666")) {
    count++;
    }
    num++;
}

console.log(num-1);