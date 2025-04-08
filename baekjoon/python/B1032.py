n=int(input())
data1 = list(input())

for i in range(1,n):
  data = list(input())
  for j in range(len(data1)):
    if data1[j] != data[j]:
      data1[j] = "?"
print("".join(data1))