const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split('\n').map(Number);

//조합 구하기
function getCombi(arr, selectNum){
    let result=[];

    function dfs(start, path){  //path: 현재까지 뽑은 숫자들을 저장하는 배열
        if (path.length == selectNum){
            result.push([...path]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            dfs(i+1, path);
            path.pop();
        }
    }
    dfs(0, []);
    return result;
}

//getCombi 함수로부터 반환하고, 합이 100인 조합 구하기
function findCombi(){
    const combination = getCombi(input, 7);  //9개 조합에서 7개 뽑는 조합
    
    for(let comb of combination){
        //reduce: 배열을 하나의 값으로 압축하는 함수 => 배열의 요소들을 누적해서 하나의 값
        const sum = comb.reduce((total, cur) => total + cur, 0);
        if (sum === 100) {
            comb.forEach(num => console.log(num)); 
            break;  
          }
    }
}

findCombi();