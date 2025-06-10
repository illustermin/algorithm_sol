# n,m,start = map(int, input().split())
# graph = [[] for _ in range(n+1)]

# for _ in range(m):
#     a,b = map(int, input().split())
#     graph[a].append(b)
#     graph[b].append(a)

# for edges in graph:
#     edges.sort()

# visited = [False] * (n+1)


# def dfs(start, visited, graph)