N, m, M, T, R = map(int, input().split(" "))
if M-m < T:
  print(-1)
else:
  Ncount=0
  count=0
  start=m
  while Ncount<N:
    if start+T<=M:
      start+=T
      Ncount+=1
    else:
      start= max(start-R, m)
    count+=1
  print(count)  