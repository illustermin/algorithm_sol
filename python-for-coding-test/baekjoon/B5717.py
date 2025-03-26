import sys
data = sys.stdin.read().strip().split("\n")

for line in data:
  a,b = map(int, line.split())
  if a==0 and b==0:
    break
  print(a+b)