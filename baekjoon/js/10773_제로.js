const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input.slice(1).map(Number);

const stack = [];

for (let i = 0; i < n; i++) {
    if(arr[i] !==0){
        stack.push(arr[i]);
    }else{
        stack.pop();
    }
    
}

console.log(stack.reduce((a,b)=> a+b, 0));

