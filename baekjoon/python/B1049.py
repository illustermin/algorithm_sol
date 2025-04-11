n,m = map(int, input().split(" "))
needPack = n//6
needEach = n%6

pack_prices = []
each_prices = []
for i in range(m):
  pack,each = map(int, input().split(" "))
  pack_prices.append(pack)
  each_prices.append(each)
min_pack = min(pack_prices)
min_each = min(each_prices)

onlyPackage = min_pack * (needPack + 1)  
mixedCost = min_pack * needPack + min_each * needEach  
onlyEach = min_each * n  

total_cost = min(onlyPackage, mixedCost, onlyEach)
print(total_cost)