T = int(input())

for _ in range(T):
    s= input()
    ans=0
    for i in range(65,91):
        if chr(i) not in s:
            ans+=i
    print(ans)