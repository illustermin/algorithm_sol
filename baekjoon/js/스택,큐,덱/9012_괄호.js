const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input.slice(1);


for (let i = 0; i < n; i++) {
    const line = arr[i];
    let stack = [];
    let isVPS = true;

    for (let j = 0; j < line.length; j++) {
       if(line[j]=== "("){
        stack.push("(");
       }else{
        if(stack[stack.length-1] ==="("){
            stack.pop();
        }else{
            stack.push(")")
        }
       }
    }

    console.log(stack.length===0? "Yes": "No"); 
}
