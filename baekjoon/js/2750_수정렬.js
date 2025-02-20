const fs = require('fs');
let input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n= parseInt(input[0]);  //5
const number = input.slice(1).map(Number);
let answer = [];

answer  = number.sort((a,b) => a-b);

console.log(answer.join("\n"));