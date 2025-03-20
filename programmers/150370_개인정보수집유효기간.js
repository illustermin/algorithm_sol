const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split("\n");
const today = input[0].trim("").split(".")
console.log(today);
