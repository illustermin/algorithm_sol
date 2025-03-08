const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const line = input[0];
const check = input[1];


let stack=[];
for (let i = 0; i < line.length; i++) {
    stack.push(line[i]);
    
    if(stack.length >= check.length){
        if (stack.slice(-check.length).join("") === check) {
            for (let j = 0; j < check.length; j++) {
                stack.pop();
            }
        }
        
    }
}

if (stack.length === 0) {
    console.log("FRULA");
}else{
    console.log(stack.join(""));
}