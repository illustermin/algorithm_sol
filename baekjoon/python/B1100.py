board = [list(input()) for _ in range(8)]
result=0
for i in range(8):
  for j in range(8):
    if board[i][j] == "F" and (i+j)%2== 0:
      result+=1
print(result)

