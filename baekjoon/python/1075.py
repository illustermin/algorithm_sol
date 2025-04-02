n=int(input())
f=int(input())
newN = n- (n%100)
result=0
while True:
  if newN%f==0:
   print(str(newN)[-2:])
   break
  newN+=1