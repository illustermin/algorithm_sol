const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
let count = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
     if(i!==j && arr[i] > arr[j]) {
        count[i]++;
    }

}
}
console.log(count);