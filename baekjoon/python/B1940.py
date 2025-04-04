n= int(input())
m= int(input())
numbers = list(map(int, input().split()))

numbers.sort()
count=0
start=0
end=n-1

while start< end:
  total = numbers[start] + numbers[end]
  if total == m :
    count+=1
    start+=1
    end-=1
  elif total<m:
    start+=1
  elif total>m:
    end-=1
  
print(count)