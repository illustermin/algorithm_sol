const fs = require("fs");
const input = fs.readFileSync("personal.txt").toString().trim().split("\n");
const T = parseInt(input[0]);
let temp=[];
for (let i = 1; i <= T; i++) {
    temp = input[i].split(" ").map(Number);
    const dist = Math.sqrt(Math.pow(temp[0] - temp[3], 2) + Math.pow(temp[1] - temp[4], 2)); 
    const sumRadius = temp[2] + temp[5]; 
    const diffRadius = Math.abs(temp[2] - temp[5]); 

    if (temp[0] === temp[3] && temp[1] === temp[4]) {
        if (temp[2] === temp[5]) {
            console.log("-1"); 
        } else {
            console.log("0"); 
        }
    }
    else if(dist === sumRadius || dist=== diffRadius){
        console.log("1");
    } 
    else if (dist === sumRadius || dist === diffRadius) {
        console.log("1");
    } 
    // 두 원이 두 점에서 교차하는 경우
    else if (dist < sumRadius && dist > diffRadius) {
        console.log("2");
    } 
    // 그 외의 경우 (교차하지 않음)
    else {
        console.log("0");
    }
}