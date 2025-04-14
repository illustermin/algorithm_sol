def solution(price, money, count):
    total=0
    for i in range(count+1):
        total += price*i
    if money - total >=0:
        return 0
    else:
        return total-money    