const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const unknown = input.slice(1,n+1);
const unseen = input.slice(n+1);

const unseenSet=  new Set(unseen);
let list = [];

unknown.forEach(person => {
    if(unseenSet.has(person)) {
        list.push(person);
    } 
})
list.sort();
console.log(list.length);
console.log(list.join("\n"));