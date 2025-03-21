const fs = require("fs");
const input = fs.readFileSync("personal.txt").toString().trim().split("\n");

let [V, E] = input[0].split(" ").map(Number);
let K = Number(input[1].trim());
const graph = Array.from({ length: V + 1 }, () => []);

// **🚀 그래프 입력 처리**
for (let i = 2; i < input.length; i++) {
    const [u, v, w] = input[i].split(" ").map(Number);
    graph[u].push([v, w]); // v번 노드까지 가중치 w
}

// **🚀 Min Heap (우선순위 큐) 구현**
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (2 * index + 1 < length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = left;
            if (right < length && this.heap[right][1] < this.heap[left][1]) smallest = right;
            if (this.heap[index][1] <= this.heap[smallest][1]) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// **🚀 다익스트라 알고리즘 (Min Heap 사용)**
const dijkstra = (start) => {
    let dist = Array(V + 1).fill(Infinity);
    dist[start] = 0;

    let pq = new MinHeap();
    pq.push([start, 0]); // 시작 노드를 큐에 넣기

    while (!pq.isEmpty()) {
        let [current, cost] = pq.pop(); // **🚀 가장 작은 거리 노드 꺼내기 (O(log N))**

        if (dist[current] < cost) continue; // 이미 처리된 노드 무시

        for (let [next, weight] of graph[current]) {
            let newCost = cost + weight;
            if (newCost < dist[next]) {
                dist[next] = newCost;
                pq.push([next, newCost]); // **🚀 Min Heap에 추가 (O(log N))**
            }
        }
    }

    return dist;
};

// **🚀 실행 및 결과 출력**
let result = dijkstra(K);
for (let i = 1; i <= V; i++) {
    console.log(result[i] === Infinity ? "INF" : result[i]);
}
