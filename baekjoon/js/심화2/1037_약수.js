const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const numList = input[1].split(" ").map(Number);

const maxNum = Math.max(...numList);
const minNum = Math.min(...numList);

const result = parseInt(maxNum * minNum)
console.log(result);


