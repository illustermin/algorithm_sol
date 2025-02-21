const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const [n,m]= input[0].split(" ").map(Number);


const strings = new Set(input.slice(1, n + 1)); 
const checkStrings = input.slice(n + 1);

let count = 0;
checkStrings.forEach(word => {
    if(strings.has(word)) count++;
})    
console.log(count);
