n = int(input())
data = input().split()
x,y = 1,1

dx = [-1,1,0,0]
dy = [0,0,-1,1]
direction = ['U', 'D', 'L', 'R']

for d in data:
  for i in range(len(direction)):
    if d  == direction[i]:
      nx = x+dx[i]      
      ny = y+dy[i]
  if nx<1 or ny<1 or nx>n or ny>n:
    continue
  x,y = nx, ny
print(x,y)
