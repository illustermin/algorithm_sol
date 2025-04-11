cycle = [
  [1,1,1,1],
  [2,4,8,6],
  [3,9,7,1],
  [4,6,4,6],
  [5,5,5,5],
  [6,6,6,6],
  [7,9,3,1],
  [8,4,2,6],
  [9,1,9,1]
]
T= int(input())
for _ in range(T):
  a,b = map(int, input().split())
  if a % 10 == 0:
    print(10)
  else:
    base = a%10
    index = (b - 1) % 4
    result = cycle[base-1][index]
    print(result)