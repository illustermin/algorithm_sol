const fs = require('fs');
const input = fs.readFileSync('lecture.txt').toString().trim().split('\n');
const n = parseInt(input[0]);

let assignments = input.slice(1).map(line => {
    const [d, score] = line.split(" ").map(Number);
    return {d, score};
})

//정렬
assignments.sort((a, b) => {
    if (b.score === a.score) return a.d - b.d;
    return b.score - a.score;
 });

let maxScore = 0;
let schedule = new Array(1001).fill(false);

assignments.forEach(assign => {
    for (let day = assign.d; day >0; day--){
        if(!schedule[day]){
            schedule[day] = true;
            maxScore +=assign.score;
            break;
        }
    }
})
console.log(maxScore);




