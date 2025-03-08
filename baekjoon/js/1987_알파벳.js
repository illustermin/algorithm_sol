const fs = require('fs');
const input = fs.readFileSync('lecture.txt').toString().trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(line => line.split(""));

const visited = Array(26).fill(0);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let count = 0;
const dfs = (x, y) => {
    const alphabet = arr[x][y].charCodeAt(0) - 65; 
    
    if (visited[alphabet] === 0) {
        visited[alphabet] = 1;
        count++;
    } else{
        return;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < R && ny < C) {
            dfs(nx, ny);  
        }
    }
};

dfs(0, 0);

console.log(count);
