N,K = map(int, input().split(" "))
items= []
for _ in range(N):
    items.append(list(map(int, input().split(" "))))

dp = [0] * (K+1)
for w, v in items:
    for i in range(K, w - 1, -1):
        dp[i] = max(dp[i], dp[i - w] + v)

print(dp[K])