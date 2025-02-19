const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split('\n');

//일단 다 입력 받음 1:집, 2: 치킨집
const [n, m] = input[0].split(" ").map(Number);
const city = input.slice(1).map((line) => line.split(' ').map(Number));
const house = [];
const chicken = [];

//city 순회
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) house.push([i, j]);
    else if (city[i][j]===2) chicken.push([i, j]);
  }
}
  //선택된 치킨집 기준으로 모든 집들의 최소거리 계산
  const minDistance = () => {
    let sum = 0;
    house.forEach(([x, y]) => {
      let min = Infinity;  
      chicken.forEach((_, index) => {
          if (check[index]) {  // 선택된 치킨집만 고려
            const [cx, cy] = chicken[index];
            const dist = Math.abs(x - cx) + Math.abs(y - cy);  // 거리 계산
            min = Math.min(min, dist);  // 최소 거리 갱신
          }
        });
        sum += min;  // 모든 집에 대해 최소 거리 합산
      });
      return sum;  // 최종적으로 모든 집들의 최소 거리를 반환
    };

const check = new Array(chicken.length).fill(false); //선택된 치킨집을 true
let answer = Infinity; ; //최소 치킨 거리 저장


//m개의 치킨집 선택하기
const DFS = (start, depth) => {
    // console.log(start);
    if (depth === m) { 
      answer = Math.min(answer, minDistance());
    //   console.log(subset)
      return;
    } else {
      for (let i = start; i < chicken.length; i++) {
        // console.log(chicken);
        if(check[i]) continue;
        check[i] = true;
        DFS(i+1, depth+1);
        check[i] = false;
      }
    }
  };

DFS(0, 0);
console.log(answer);