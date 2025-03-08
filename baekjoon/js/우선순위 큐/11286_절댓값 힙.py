import sys
import heapq

with open('personal.txt', 'r') as f:
    input = f.read().strip().splitlines()

N = int(input[0])
lists = list(map(int, input[1:]))

heap = [] 

for x in lists:
    if x==0 :
        if heap:
            abs_val, original_val = heapq.heappop(heap)
            print(original_val)
        else:
            print(0)
    else:
        heapq.heappush(heap, (abs(x), x))