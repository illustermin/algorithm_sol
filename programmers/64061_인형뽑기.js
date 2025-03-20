function solution(board, moves){
    let temp=[]; 
    let count=0; 
    
    moves.forEach(move => {
        for (let i = 0; i < board.length; i++) {
           if(board[i][move-1] !==0){
               let pick = board[i][move-1];
               board[i][move-1]=0;
           
            
            if(temp.length>0 && pick === temp.at(-1)){
                temp.pop();
                count+=2;
            }else{
                temp.push(pick);
            }
               break;
           }
            
        }
    });
    
    return count;
}