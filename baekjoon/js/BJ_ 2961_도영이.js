const fs = require('fs');
const input = fs.readFileSync('lecture.txt').toString().trim().split('\n');

const n = parseInt(input[0]);

let s = [] // 신 맛
let b = [] // 쓴 맛

for (let i = 1; i <= n; i++) { 
    const [S, B] = input[i].split(' ').map(Number); 
    s.push(S);
    b.push(B);
}

let min = Infinity; // 최소 신맛-쓴맛 차이 저장

for (let i = 1, size = 1<<n; i < size; i++) {
    let sumS = 1;
    let sumB = 0;
    
    for (let j = 0; j < n; j++) {
        if(i & (1<<j)){
            sumS *=s[j];
            sumB +=b[j];
        }
    }
    min = Math.min(min, Math.abs(sumS- sumB));
}
console.log(min);