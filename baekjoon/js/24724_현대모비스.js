const fs = require("fs");
const input = fs.readFileSync("personal.txt").toString().trim().split("\n");
const T = parseInt(input[0]);

for (let i = 1; i < T; i++) {
    let N = parseInt(input[i]);
    let [A,B] = input[i+1].split(" ");
    for (let j = 2; j <= N+2; j++) {
        let [u, v] = input[i+j];
        
        console.log(u);
    }
}