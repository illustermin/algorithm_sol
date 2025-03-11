const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const T = parseInt(input[0]);
const [M, N, K] = input[1].split(" ").map(Number);

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
    
    }
}

let houses = input.slice(2).map((row) => row.split("").map((num) => +num));
let housesNeighborhood = [];

