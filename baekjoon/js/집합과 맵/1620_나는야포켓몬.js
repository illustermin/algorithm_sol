const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const [m,n] = input[0].split(" ").map(Number);

let nametoNum = {};
let numtoName = {};
for (let i = 1; i <= m; i++) {
    const name = input[i].trim();
    nametoNum[name] = i;
    numtoName[i] = name;
}

let checkList = input.slice(m+1);
let answer = [];

for (let list of checkList){
    if(!isNaN(list)){
        answer.push(numtoName[Number(list)]);
    }else{
        answer.push(nametoNum[list]);
    }
}
console.log(answer.join("\n"));