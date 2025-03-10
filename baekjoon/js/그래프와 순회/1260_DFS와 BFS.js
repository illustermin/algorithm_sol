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
const DFSresult= [];

const DFS=(graph, R)=>{
    visited[R] = true;
    DFSresult.push(R);
    for(const node of graph[R]){
        if(!visited[node]){
            DFS(graph, node);
        }
    }
}
DFS(graph, V);

const BFSvisited = Array(N+1).fill(false);
const BFSresult= [];

const BFS = (start) => {
    const queue = [start];
    BFSvisited[start] = true;

    while(queue.length>0){
        const node = queue.shift();
        BFSresult.push(node);

        for(const next of graph[node]){
            if(!BFSvisited[next]){
                queue.push(next);
                BFSvisited[next] = true;
            }
        }
    }
}
BFS(V);


console.log(DFSresult.join(" "));
console.log(BFSresult.join(" "));
