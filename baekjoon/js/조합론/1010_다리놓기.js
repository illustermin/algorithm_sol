const fs = require('fs');
const input = fs.readFileSync('personal.txt').toString().trim().split("\n");

const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
    let [n,m] = input[i].split(" ").map(Number);

    function fac(num){
    if(num==0 || num==1){
        return 1;
    }else{
        return num * fac(num-1);
    }
    }
    
    console.log( Math.round(fac(m) / (fac(n) * fac(m - n))) );
}



