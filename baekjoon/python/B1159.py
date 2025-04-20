T = int(input())
count={}
for i in range(T):
    name = input()
    first = name[0]

    if first in count:
        count[first]+=1
    else:
        count[first]=1

result=[]
for key in count:
    if count[key] >=5:
        result.append(key)
if result:
    print("".join(sorted(result)))
else:
    print("PREDAJA")