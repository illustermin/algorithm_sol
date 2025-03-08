const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const N = parseInt(input[0]);
const list = input[1].split(" ").map(Number);

let stack=[];
let result = Array(N).fill(-1);

for (let i = 0; i < N; i++) {
    while(stack.length>0 && list[stack[stack.length-1]] <list[i]){
        result[stack.pop()] = list[i];
    }
    stack.push(i);
}

console.log(result.join(" "));
