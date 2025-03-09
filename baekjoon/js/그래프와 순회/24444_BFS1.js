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
   graph[i].sort((a,b) => a-b);
}

const visited= Array(N+1).fill(0); 
let order=1;

const BFS =(start) => {
    const queue = [start];
    visited[start] = order++;

    while(queue.length>0){
        const node = queue.shift();
    
    for(const next of graph[node]){
        if(visited[next] ===0 ){
            queue.push(next);
            visited[next] = order++;
            }
        }
    }
}

BFS(R);
for (let i = 1; i <=N; i++) {
    console.log(visited[i]);   
}