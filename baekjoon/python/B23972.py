k,n = map(int, input().split())
if n==1:
  print(-1)
else:
  result = (k*n)//(n-1)
  if (k*n)%(n-1):
    result+=1
  print(result)