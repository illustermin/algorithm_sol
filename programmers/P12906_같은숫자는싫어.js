function solution(arr){
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i+1] !== arr[i]) answer.push(arr[i]);
    }  
    return answer;
}

const input = [1, 1, 2, 2, 3, 3, 3, 4];
console.log(solution(input));
