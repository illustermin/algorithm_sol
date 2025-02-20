const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const points = input.slice(1).map(line => line.split(" ").map(Number));

let sortPoint = points.sort((a,b)=>{
    if(a[1] === b[1]){
        return a[0]-b[0];
    }
    return a[1] - b[1];
})

sortPoint.forEach(point =>{
    console.log(`${point[0]} ${point[1]}`);
} )