const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);  //4
const people = input.slice(1);

let checkList = new Set();

for (let i = 0; i < people.length; i++) {
    
    const [name, log] = people[i].split(" ");

    if(log === "enter") checkList.add(name);
    else if(log==="leave") checkList.delete(name);
    
}

console.log([...checkList].sort().reverse().join("\n"));
