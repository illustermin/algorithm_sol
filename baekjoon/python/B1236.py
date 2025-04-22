N,M = map(int, input().split(" "))
grid = [list(input()) for _ in range(N)]
countN=0
for row in grid:
  if "X" not in row:
    countN+=1
    
countM=0
for col in range(M):
  if all(grid[row][col] != "X" for row in range(N)): 
    countM+=1
print(max(countN, countM))