n = int(input())

speak = [
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you",
    "Never gonna stop"
] 

check = False 

for line in range(n):
  data = input()
  if data not in speak:
    check = True
    break
if check: 
  print("Yes")
else:
  print("No")

