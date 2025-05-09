def solution(board, h, w):
    answer = 0
    start= board[h][w]
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    for i in range(4):
        nx = h+ dx[i]
        ny = w+ dy[i]
        
        if 0<=nx<len(board) and  0<=ny<len(board):
            if board[nx][ny] == start:
                answer+=1
    return answer


# 출발좌표
# 사방위
# 범위 넘어가지 않는지
# 카운트

