# 입력받기
n,m = map(int,input().split())
x,y,direction= map(int, input().split())
array=[]
for i in range(n):
    array.append(list(map(int, input().split())))

#방문기록관리
d=[[0]*m for _ in range(n)]
d[x][y] =1

#방향
dx=[-1,0,1,0]
dy=[0,1,0,-1]

#왼쪽으로 회전
def turn_left(direction):
    return (direction-1) %4

#시뮬 반복
count=1
turn_time=0
while True:
    direction = turn_left(direction)
    nx= x+dx[direction]
    ny= y+dy[direction]
    if d[nx][ny] ==0 and array[nx][ny]==0:
        d[nx][ny]=1
        x=nx
        y=ny
        count+=1
        turn_time=0
        continue
    else:
        turn_time+=1
    if turn_time==4:
        nx=x-dx[direction]
        ny=y-dy[direction]
        if array[nx][ny]==0:
            x=nx
            y=ny
        else:
            break
        turn_time=0

#출력
print(count)