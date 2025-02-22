const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

let [n , k] = input[0].split(" ").map(Number);
let coins = input.slice(1).map(Number).reverse();

let count=0;

for (let i = 0; i < n; i++) {
    if( k >= coins[i]){
        let num = Math.floor(k/ coins[i]);
        count+=num;
        k = k % coins[i]; // 나머지
    }
}

console.log(count);

