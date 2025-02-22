const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const N = parseInt(input[0]);
const people = input[1].split(" ").map(Number);

people.sort((a,b) => a-b);

let wait=[];
for (let i = 0; i < N; i++) {
    if(i===0){
        wait[i] = people[i];
    }else{
        wait[i] = wait[i-1]+people[i]; 
    }
}
console.log(wait.reduce((a,b) => a+b,0));