const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n= parseInt(input[0]);
const number = input.slice(1).map(Number);

let sortNum = number.sort((a,b) => a-b);

console.log(sortNum.join("\n"));