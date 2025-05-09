yd = input()
caseNum = int(input())
win =[]

for i in range(caseNum):
  teamN = input()
  L = yd.count("L") + teamN.count("L")
  O = yd.count("O") + teamN.count("O")
  V = yd.count("V") + teamN.count("V")
  E = yd.count("E") + teamN.count("E")
  score= (((L+O) * (L+V) * (L+E) * (O+V) * (O+E) * (V+E))) % 100
  win.append((score, teamN))

win.sort(key=lambda x: (-x[0], x[1])) 
print(win[0][1]) 