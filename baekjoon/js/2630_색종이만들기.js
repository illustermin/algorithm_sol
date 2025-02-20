const fs = require('fs');
const input = fs.readFileSync('lecture.txt').toString().trim().split("\n");

const N = parseInt(input[0]);
let box = input.slice(1).map(line => line.split(" ").map(Number));
let blueCount=0;
let whiteCount=0;

while(true){
    if(box.includes(1) && box.includes(0)) {
        const m = box.length;    
        const n = box[0].length;  
        
        //mid구하기
        const midRow = Math.floor(m / 2); 
        const midCol = Math.floor(n / 2); 
        
        // 4등분
        const topLeft = box.slice(0, midRow).map(row => row.slice(0, midCol));
        const topRight = box.slice(0, midRow).map(row => row.slice(midCol));
        const bottomLeft = box.slice(midRow).map(row => row.slice(0, midCol));
        const bottomRight = box.slice(midRow).map(row => row.slice(midCol));
        console.log(topLeft);
    }else{
        //box 1포함 -> blueCount++;
       box.forEach(smallbox => {
        if(smallbox.includes(1)) blueCount++;
        else{whiteCount++;}
       })
    }
}
    // console.log(blueCount);
    // console.log(whiteCount);





