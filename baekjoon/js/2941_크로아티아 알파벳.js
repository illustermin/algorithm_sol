const fs = require('fs');
let input = fs.readFileSync('personal.txt').toString().trim();
const cro =["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for(let j of cro){
    input = input.replaceAll(j, "*")
}
console.log(input.length);
   

