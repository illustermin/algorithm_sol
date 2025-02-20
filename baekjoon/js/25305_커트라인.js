const fs = require('fs');
let input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

let [n,k] = input[0].split(" ").map(Number);
let student =input[1].split(" ").map(Number);

let sortStudent = student.sort((a,b) => b-a);

console.log(sortStudent[k-1]);