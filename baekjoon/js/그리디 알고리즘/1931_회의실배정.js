const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const n = parseInt(input[0]);

const meetings = [];
for (let i = 1; i < n+1; i++) {
    const [s,e] = input[i].split(" ").map(Number);
    meetings.push([s,e]);
}


meetings.sort((a,b) =>{
    if(a[1] ===b[1]){
        return a[0]- b[0];
    }
    return a[1]- b[1];
})

let count=0;
let endTime = 0;

for (let i = 0; i < n; i++) {
    const [newS, newE] = meetings[i];
    if(newS >= endTime){
        endTime = newE;
        count++;
    }
}

console.log(count);


