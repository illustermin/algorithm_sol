const fs = require('fs');
const input = fs.readFileSync('lecture.txt').toString().trim().split("\n");

const sol = (input) => {
    let answer = 0;
    const [R, C] = input[0].split(" ").map(Number); 
    const map = input.slice(1).map((str) => str.split("")); 
    const check = Array(R).fill().map((_) => Array(C).fill(0));
      // map과 동일한 크기, 고슴도치가 같은 칸 여러번 안가도록 관리
  
    let D, S;
    let water = [];
    // D, S, 물의 좌표 찾기
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (map[i][j] === "D") D = [i, j];
        if (map[i][j] === "S") S = [i, j];
        if (map[i][j] === "*") water.push([i, j]);
      }
    } 
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
  
    //물 퍼뜨리기 - 현재 물들의 위치를 기준으로 
    function spreadWater() {
      const spread = [];
      for (let [x, y] of water) {
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
          if (map[nx][ny] === ".") {
            map[nx][ny] = "*";
            spread.push([nx, ny]);
          }
        }
      } 
      water.push(...spread);
      // 퍼진 물의 위치들을 모두 모은 spread 배열의 원소들을 기존의 water 배열에 넣어준다.
    }
  
    function bfs() {
      const queue = [];
      queue.push([...S, 0]); // S: 고슴도치 위치 -> 여기서부터 시작한다.
      check[S[0]][S[1]] = 1;

      while (queue.length) {
        const len = queue.length; // 현재 queue에 담긴만큼 반복해야 "매 분" 조건이 완성된다.
        spreadWater(); // 매 분마다 먼저 물을 퍼뜨린다.
        for (let cycle = 0; cycle < len; cycle++) {
          const [x, y, cnt] = queue.shift();
          if (x === D[0] && y === D[1]) {
            answer = cnt;
            return;
          } // 굴에 들어가면 종료
  
          for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
            if (map[nx][ny] === "*" || map[nx][ny] === "X" || check[nx][ny]) continue;
            check[nx][ny] = 1;
            queue.push([nx, ny, cnt + 1]);
          } //이동 가능하면 고슴도치 이동
        } // 이 블록까지 수행되어야 1분이 지난 것
      }
      return;
    }
    bfs();
  
    return answer || "KAKTUS"; 
  };
  
  console.log(sol(input));
