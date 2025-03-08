const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split('\n');

const T = parseInt(input[0]);
let index = 1;

function solution(K, files) {
    const dp = Array.from({ length: K }, () => Array(K).fill(0));
    const sum = Array(K + 1).fill(0);

    // 누적합 만들기
    for (let i = 1; i <= K; i++) {
        sum[i] = sum[i - 1] + files[i - 1];
    }

    // 구간 길이
    for (let len = 2; len <= K; len++) {
        for (let i = 0; i <= K - len; i++) {
            let j = i + len - 1; 
            dp[i][j] = Infinity;

            for (let k = i; k < j; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i][k] + dp[k + 1][j] + (sum[j + 1] - sum[i])
                );
            }
        }
    }

    return dp[0][K - 1];
}

for (let t = 0; t < T; t++) {
    let K = parseInt(input[index]);
    let files = input[index + 1].split(" ").map(Number);
    index += 2;

    console.log(solution(K, files));
}
