const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("");

let sortNum = input.sort((a,b) => b-a);
console.log(sortNum.join(""));