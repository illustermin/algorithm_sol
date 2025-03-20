n=1260
count=0

coint_types = [500, 100, 50, 10]

for coin in coint_types:
    count+=n
    n%=coin
print(count)