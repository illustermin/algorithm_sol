N = int(input())
data = list(map(int, input().split(" ")))
Y=0
M=0
for d in data:
  Y += (d//30 +1)*10
  M += (d//60 +1)*15

if Y > M:
  print("M", M)
elif Y < M:
  print("Y", Y)
else:
  print("Y", "M", Y)