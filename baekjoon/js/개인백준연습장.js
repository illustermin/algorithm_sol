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
function check(x,y){
    let whiteCount = 0;
    let blackCount = 0;

    //8x8에서 다시 칠해야 하는 칸 개수 세기
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(board[x+i][y+j]!== whiteStart[i][j]) whiteCount++;
            if(board[x+i][y+j]!== blackStart[i][j]) blackCount++;
        }
    }
    return Math.min(whiteCount, blackCount);
}

//8x8 사이즈 잡고, 최소값 찾기
let min = Infinity;

for (let i = 0; i <= n-8; i++) {
    for (let j = 0; j <= m-8; j++) {
        min = Math.min(min, check(i,j));
    }
}

console.log(min);