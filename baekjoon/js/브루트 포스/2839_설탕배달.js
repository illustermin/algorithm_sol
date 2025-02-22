const fs = require('fs');
let n = parseInt(fs.readFileSync('personal.bj.txt').toString().trim());

//5로 최대한 나눠보고 나머지는 3kg로 이동

let count=0;

while(n>=0){
    if(n%5 ===0){
        count += n/5;
        console.log(count);
        return;
    }
    n-=3;
    count++;
}
console.log("-1");

