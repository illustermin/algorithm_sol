import sys
import heapq

input = sys.stdin.read().strip().splitlines()
N = int(input[0])
lists = list(map(int, input[1:]))

heap = []
result = []
for cmd in lists:
    if cmd == 0:
        if heap:
            # 최대값 추출: 음수로 저장했으므로 -heapq.heappop(heap)
            result.append(-heapq.heappop(heap))
        else:
            result.append(0)
    else:
        # 최대 힙으로 사용하려면 음수로 삽입
        heapq.heappush(heap, -cmd)

print("\n".join(map(str, result)))
