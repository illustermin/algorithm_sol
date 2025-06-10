n,k  = map(int, input().split())

count=0
while n>1:
    if n%k==0:
        n//=k
        count+=1
    else:
        if n<k:
            count += n-1
            break
        count += n%k
        n -= n%k
print(count)