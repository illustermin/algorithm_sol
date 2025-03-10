const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
let houses = input.slice(1).map((row) => row.split("").map((num) => +num));
let housesNeighborhood = [];

