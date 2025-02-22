const fs = require('fs');
const [n, m] = fs.readFileSync('personal.txt').toString().trim().split(' ').map(Number);


let answer = [];

function dfs(depth, start, arr){
    if(depth == m) {
        answer.push([...arr]);
        return;
    }else{
        for (let i = start; i <= n; i++) {
            dfs(depth+1, i+1, [...arr, i]  )

        }
    }

}
dfs(0,1,[]);
console.log(answer.map(arr => arr.join(" ")).join("\n"));
