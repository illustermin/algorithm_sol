const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const [n,m] = input[0].split(" ").map(Number);
const board = input.slice(1);

const whiteStart = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];
const blackStart = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
]

//틀린 부분 체크
function check(x,y){
let whiteCount = 0;
let blackCount = 0;
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if(board[x+i][y+j]!== whiteStart[i][j]) whiteCount++;
        if(board[x+i][y+j]!== blackStart[i][j]) blackCount++;
    }
}
return Math.min(whiteCount, blackCount);
}

let min = Infinity;
//8x8 영역 정하기
for (let i = 0; i <= n-8; i++) {
    for (let j = 0; j <=m-8; j++) {
    min = Math.min(min, check(i,j));
    }
}

console.log(min);