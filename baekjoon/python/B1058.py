n = int(input())
friend_map = [list(input()) for _ in range(n)]

def count_friends(i):
  friends = [False] * n
  for j in range(n):
    if i==j:
      continue
    if friend_map[i][j] =='Y':
      friends[j] = True
    else:
      for k in range(n):
          if friend_map[i][k] == 'Y' and friend_map[k][j] == 'Y':
              friends[j] = True
              break
  return sum(friends)
  
max_friends=0
for i in range(n):
   max_friends = max(max_friends, count_friends(i))

print(max_friends)
