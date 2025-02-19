const fs = require('fs');
const n = Number(fs.readFileSync('input.txt').toString().trim());

 //백준제출용
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();

function star(n){       
    for (let i = 1; i <= n; i++){
        let blank = ''.repeat(n-i);
        let star = "*".repeat(2*i-1);
        console.log(blank+star);
    }
    for (let j = n-1; j >0 ; j--){
        let blank = ''.repeat(n-j);
        let star = '*'.repeat(2*j-1);
        console.log(blank+star);
    }
}    
star(n);