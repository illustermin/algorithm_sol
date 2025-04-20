nums = list(map(int, input().split(" ")))
start=min(nums)

while True:
    count=0
    for n in nums:
        if start%n==0:
            count+=1
    if count>=3:
        print(start)
        break
    start+=1