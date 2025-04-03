n= int(input())
students = [input().strip() for _ in range(n)]

k=1

while True:
  seen = set()
  unique = True

  for num in students:
    suffix = num[-k::]
    if suffix in seen:
      unique = False
      break
    seen.add(suffix)

  if unique:
    print(k)
    break

  k+=1