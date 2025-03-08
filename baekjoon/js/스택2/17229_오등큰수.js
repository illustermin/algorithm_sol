const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const list = input[1].split(" ").map(Number);

let result = Array(N).fill(-1);
let maxNum = Math.max(...list); 
let F = new Array(maxNum + 1).fill(0);
let stack = [];

for (let i = 0; i < N; i++) {
    F[list[i]]++;
}
for (let i = 0; i < N; i++) {
    while (stack.length > 0 && F[list[stack[stack.length - 1]]] < F[list[i]]) {
        result[stack.pop()] = list[i]; 
    }
    stack.push(i); 
}

console.log(result.join(" "));
