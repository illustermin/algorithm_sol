const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const [N,M,R] = input[0].split(" ").map(Number);
const graph = Array.from({length: N+1}, ()=> []);

for (let i = 1; i <=M; i++) {
    const[u,v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
}
//각 노드의 인접 리스트를 오름차순으로 정렬(DFS 방문 순서 보장)
for (let i = 1; i <=N; i++) {
    graph[i].sort((a,b)=> a-b); 
}

const visited = [];
let needVisit=[];
const DFS = (graph, startNode) =>{

    needVisit.push(startNode);

    while(needVisit.length!==0){
        const node = needVisit.pop();
        if(!visited.includes(node)){
            visited.push(node);
            needVisit.push(...graph[node].slice().reverse());
        }
    }
    visited.push(0)
    return visited;
};
const result = DFS(graph, R);
console.log(result.join("\n"));