const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const a = new Set(input[1].split(" ").map(Number));
const b = new Set(input[2].split(" ").map(Number));

let count = 0;

a.forEach(num =>{
    if(b.has(num)){
       count++;
    }
})


console.log((a.size + b.size) - (2* count));
