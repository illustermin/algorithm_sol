h,m,s = map(int, input().split())
sum = h*3600 + m*60 + s
q = int(input())
for _ in range(q):
    cmd = list(map(int, input().split()))
    t = cmd[0]  
    if t==1:
      c = cmd[1]
      sum = (sum + c) % 86400  
  
    elif t == 2:
      c = cmd[1]
      sum = (sum - c) % 86400 
  
    elif t == 3:
      H = (sum // 3600) % 24  
      M = (sum % 3600) // 60  
      S = (sum % 3600) % 60 
      print(H, M, S)