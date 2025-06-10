n,m = map(int, input().split())

result=0
for i in range(n):
  data = list(map(int, input().split()))
  min_num = min(data)
  result = max(min_num, result)
print(result)