const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const n = parseInt(input[0]);

console.log(n * (n-1));