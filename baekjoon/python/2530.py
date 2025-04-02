a,b,c = map(int, input().split())
d= int(input())
sum= (a*3600 + b*60 + c) + d
h= (sum//3600) %24
m= (sum%3600)//60
s= (sum%3600)%60
  
print(h, m, s)