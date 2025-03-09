const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const [N,M,V] = input[0].split(" ").map(Number);

const graph = Array.from({length: N+1}, () => []);

for (let i = 1; i <=M; i++) {
    const [u,v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
}
for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
}

const visited = Array(N+1).fill(false);
const visitOrder = Array(N+1).fill(0);
let dfsOrder=1;

const DFS=(R)=>{
    visited[R] = true;
    visitOrder[R] = dfsOrder++;
    for(const node of graph[R]){
        if(!visited[node]){
            DFS(node);
        }
    }
}

const BFSvisited = Array(N+1).fill(0);
let BFSorder=1;

const BFS = (start) => {
    const queue = [start];
    BFSvisited[start] = BFSorder++;

    while(queue.length>0){
        const node = queue.shift();

        for(const next of graph[node]){
            if(BFSvisited[next] ===0){
                queue.push(next);
                BFSvisited[next] = BFSorder++;
            }
        }
    }
}
DFS(V);
BFS(V);

console.log(visitOrder.slice(1).join(" "));
console.log(BFSvisited.slice(1).join(" "));