colors={
 "black": (0, 1),
  "brown": (1, 10),
  "red": (2, 100),
  "orange": (3, 1000),
  "yellow": (4, 10000),
  "green": (5, 100_000),
  "blue": (6, 1000000),
  "violet": (7, 10000000),
  "grey": (8, 100000000),
  "white": (9, 1000000000)
}

color1 = input().strip()
color2 = input().strip()
color3 = input().strip()

num = colors[color1][0] * 10 + colors[color2][0]
result = num * colors[color3][1]
print(result)