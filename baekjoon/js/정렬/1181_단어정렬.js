const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const words = input.slice(1);
let uniquewords = [...new Set(words)];
//단어길이 저장

let length = uniquewords.map(uniquewords => uniquewords.length);

uniquewords.sort((a,b) => { 
    if(a.length === b.length){
        return a.localeCompare(b);  
    }else{
        return a.length- b.length;
    }
})
console.log(uniquewords.join("\n"));



