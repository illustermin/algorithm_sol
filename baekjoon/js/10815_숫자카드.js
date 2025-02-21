const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const sangCard = new Set(input[1].split(" ").map(Number)); 
const m = parseInt(input[2]);
const compareCard = input[3].split(" ").map(Number); 

let check = compareCard.map(card => sangCard.has(card)?1: 0);

console.log(check.join(" "));

