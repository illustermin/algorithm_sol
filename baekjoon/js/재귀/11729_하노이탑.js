const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const n = parseInt(input[0]);

const answer = [];

function hanoi(n, from, temp, to){
    if(n ===0){
        return;
    }else{
        hanoi(n-1, from, to, temp);
        answer.push(`${from} ${to}`);
        hanoi(n-1, temp, from , to);
    }
}

hanoi(n,1,2,3);
console.log(answer.length);
console.log(answer.join("\n"));


