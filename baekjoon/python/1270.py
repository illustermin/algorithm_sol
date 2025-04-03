n= int(input())
for _ in range(n):
  data = list(map(int, input().split()))
  count = data[0]
  people = data[1:]

  counts={}
  for person in people:
    counts[person] = counts.get(person,0) +1

  maxPerson = max(counts, key=counts.get)
  if counts[maxPerson] > (count//2):
    print(maxPerson)
  else:
    print("SYJKGW")