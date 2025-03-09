const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const [N,M,R] = input[0].split(" ").map(Number);
const graph = Array.from({length: N+1}, ()=>[]);

for (let i = 1; i <= M; i++) {
   const [u,v] = input[i].split(" ").map(Number);
   graph[u].push(v);
   graph[v].push(u);
}
for (let i = 1; i <= N; i++) {
   graph[i].sort((a,b) => b-a);
}

//방문처리
const visited= Array(N+1).fill(false); 
//방문순서
const visitOrder = Array(N+1).fill(0);
let order=1;
const DFS =(graph, R) => {
    visited[R] = true;
    visitOrder[R] = order++;
    for(const node of graph[R]){
        if(!visited[node]){
            DFS(graph, node);
        }
    }
}

DFS(graph, R);

for (let i = 1; i <=N; i++) {
    console.log(visitOrder[i]);
    
}
