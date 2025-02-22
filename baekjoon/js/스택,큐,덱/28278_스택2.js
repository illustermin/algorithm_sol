const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input.slice(1);

let stack = [];
let result = [];

for (let i = 0; i < n ; i++) {
    let list = arr[i]
    let [cmd, value] = list.split(" ");


switch (cmd){
    case "1":
        stack.push(parseInt(value));
        break;
    case "2":
        if(stack.length>0){
            result.push(stack.pop())
        }else{
            result.push(-1)
        }
        break;
    case "3":
        result.push(stack.length)
        break;
    case "4":
        result.push(stack.length===0 ?1:0);
        break;
    case "5":
        if(stack.length>0){
            result.push(stack[stack.length - 1])
        }else{
            result.push(-1);
        }
        break;
    default:
        break;
}
}
console.log(result.join("\n"));
