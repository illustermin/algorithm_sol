const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const M = parseInt(input[1]);
const graph = Array.from({length: N+1}, () => []);

for (let i = 2; i < M+2; i++) {
    const [u,v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
}
const visited = Array(N+1).fill(false);
let count=0;

const DFS=(R)=>{
    visited[R] = true;
    count++;
    for(const node of graph[R]){
        if(!visited[node]){
            DFS(node);
        }
    }
}
DFS(1);
console.log(count-1);