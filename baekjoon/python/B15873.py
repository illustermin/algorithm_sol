num = input()
if len(num)==2:
  a=int(num[0])
  b=int(num[1])
elif len(num)==3:
  if int(num[1])==0:
    a=int(num) // 10
    b=int(num) % 100      
  elif int(num[1])!=0:
    a=int(num[0])
    b=int(num) % 100      
elif len(num) ==4:
  a=10
  b=10
print(a+b)