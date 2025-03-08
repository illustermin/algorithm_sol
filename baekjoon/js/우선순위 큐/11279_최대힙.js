const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const list = input.slice(1).map(Number);

let Q = [];
for (let i = 0; i < list.length; i++) {
    if(list[i]===0){
        if(Q.length>0){
            let max = Math.max(...Q);
            console.log(max);
            Q.pop(max);
        }else{
            console.log("0");
        }
    }else{
        Q.push(list[i]);
    }
    
}
