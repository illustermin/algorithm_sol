const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");
const n = parseInt(input[0]);

let arr = input.slice(1).map(line => {
    const [deadline, count] = line.split(" ").map(Number);
    return {deadline, count};
})

arr.sort((a,b)=> {
    // if(a.count === b.count) return b.deadline - a.deadline;
    return b.count - a.count;

})

let maxCount = 0;
let schedule = new Array(200001).fill(false);

arr.forEach(item => {
    for (let deadline= item.deadline; deadline >0; deadline--){
        if(!schedule[deadline]){
            schedule[deadline] = true;
            maxCount +=item.count;
            break;
        }
    }
})

console.log(maxCount);