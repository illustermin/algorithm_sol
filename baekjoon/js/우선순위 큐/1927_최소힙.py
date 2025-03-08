import sys
import heapq

with open('personal.txt', 'r') as f:
    input = f.read().strip().splitlines()

N = int(input[0])
commands = list(map(int, input[1:]))

heap = []
result = []
for cmd in commands:
    if cmd == 0:
        if heap:
            result.append(heapq.heappop(heap))
        else:
            result.append(0)
    else:
        heapq.heappush(heap, cmd)

print("\n".join(map(str, result)))
