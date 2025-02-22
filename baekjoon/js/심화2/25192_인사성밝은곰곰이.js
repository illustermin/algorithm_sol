const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const n = parseInt(input[0]);
const list = input.slice(1);

let temp = new Set(); 
let count=0;

for (let i = 1; i < n; i++) {
    if(list[i] == "ENTER"){
        temp.clear();
    }else{
        if(!temp.has(list[i])){
            temp.add(list[i]);
            count++;
        }
    }
}
console.log(count);
