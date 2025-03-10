const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
let houses = input.slice(1).map((row) => row.split("").map((num) => +num));
let housesNeighborhood = [];

const dirs = [
    [-1, 0], 
    [1, 0], 
    [0, -1], 
    [0, 1], 
  ];
  
  const solution = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (houses[i][j]) bfs(i, j);
      }
    }
  
    housesNeighborhood.sort((a, b) => a - b);
    // 총 단지 수 
    console.log(housesNeighborhood.length);
    // 각 단지의 크기 
    housesNeighborhood.forEach((size) => console.log(size));
  };
  
  const bfs = (startX, startY) => {
    let result = 0;
    const queue = [[startX, startY]];
  
    while (queue.length) {
      const [x, y] = queue.shift();
  
      // 이미 방문했으면 건너뛰기
      if (houses[x][y] === 0) continue;
  
      // 방문 표시 및 집의 수 증가
      houses[x][y] = 0; 
      result += 1;
  
      for (let dir of dirs) {
        const newX = x + dir[0];
        const newY = y + dir[1];
  
        if ( newX < 0 || newY < 0 ||   newX >= N ||   newY >= N )  continue;
  
        // 집이 있는 위치를 큐에 추가
        if (houses[newX][newY]) 
            queue.push([newX, newY]);
      }
    }
    housesNeighborhood.push(result);
  };
  
  solution();