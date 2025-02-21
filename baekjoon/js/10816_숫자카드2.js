const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const sangCard = input[1].split(" ").map(Number);
const m = parseInt(input[2]);
const compareCard = input[3].split(" ").map(Number);

const cardCount = {};
sangCard.forEach(num => {
    cardCount[num] = (cardCount[num] || 0) + 1;
})

let result = compareCard.map(card => cardCount[card] || 0)
console.log(result.join(" "));
