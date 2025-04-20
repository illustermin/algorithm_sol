N = int(input())
original = N
count=0
while True:
    a= N//10
    b= N%10
    total = a+b
    N = b*10 + total%10
    count+=1
    
    if N== original:
        break
print(count)