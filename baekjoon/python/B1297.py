import math
D, H, W = map(int, input().split(" "))

x = D / math.sqrt(H**2 + W**2)
height = int(H *x)
width = int(W*x)
print(height, width)