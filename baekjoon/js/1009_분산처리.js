const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const T = parseInt(input[0]);
for (let i = 0; i < T; i++) {
    let [a,b] = input.slice(1)[i].split(" ");
    let total = (BigInt(a) ** BigInt(b)) % BigInt(10);
    console.log(total.toString());
    
}