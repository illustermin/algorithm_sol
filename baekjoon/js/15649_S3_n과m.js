const fs = require('fs');
const [n, m] = fs.readFileSync('input2.txt').toString().trim().split(' ').map(Number);

let result = '';
let arr = [];
const visited = [...Array(n + 1)].fill(false); // 1부터 n까지 사용 => n+1 크기

function dfs(cnt) {
    if (cnt === m) {
        result += `${arr.join(' ')}\n`; // 순열이 m개 되면 result에 저장
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {  
            visited[i] = true;  
            arr.push(i);         // 배열에 숫자 추가
            dfs(cnt + 1);        // 재귀
            arr.pop();           // 원래로 되돌리기
            visited[i] = false;  
        }
    }
}

dfs(0); 
console.log(result); 
