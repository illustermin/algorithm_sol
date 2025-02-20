const fs = require('fs');
let input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n").map(Number);

let sum =0;
let sortNum = input.sort((a,b) => a-b);

for (let i = 0; i < 5; i++) {
    sum +=input[i];    
}

console.log(sum/5);
console.log(sortNum[2]);