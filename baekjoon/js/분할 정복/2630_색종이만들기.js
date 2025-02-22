const fs = require('fs');
const input = fs.readFileSync('lecture.txt').toString().trim().split("\n");

const N = parseInt(input[0]);
let box = input.slice(1).map(line => line.split(" ").map(Number));
let blueCount = 0;
let whiteCount = 0;

function countColor(x, y, size) {
    let color = box[x][y];
    let isSame = true;

    // 같은 색깔로 모두 채워졌는지 확인
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (box[i][j] !== color) {
                isSame = false;
                break;
            }
        }
        if (!isSame) break;
    }

    // 동일한 색깔로 모두 채워졌다면
    if (isSame) {
        if (color === 1) {
            blueCount++;
        } else {
            whiteCount++;
        }
    } else {
        // 4등분하여 다시 확인
        const half = size / 2;
        countColor(x, y, half); // 왼쪽 상단
        countColor(x, y + half, half); // 오른쪽 상단
        countColor(x + half, y, half); // 왼쪽 하단
        countColor(x + half, y + half, half); // 오른쪽 하단
    }
}

// 시작점에서부터 호출
countColor(0, 0, N);

console.log(whiteCount);  // 흰색 영역의 수
console.log(blueCount);   // 파란색 영역의 수
