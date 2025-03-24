# -*- coding: utf-8 -*-

# <문제>
# 첫째 줄에 n,m,k의 자연수가 주어지며, 각 자연수는 공백으로 구분한다.
# 둘째 줄에 n개의 자연수가 주어진다. 
# 입력으로 주어지는 k는 항상 m보다 작거나 같다.
# <출력> 
# 첫째 줄에 동빈이의 큰 수의 법칙에 따라 더해진 답을 출력

# <문제접근방식>
# 그리디 알고리즘
#  => 가장 큰수를 k번 더하고 두 번째로 큰 수를 한 번 더하는 연산


n,m,k= map(int, input().split())
data = list(map(int, input().split()))

data.sort(reverse=True)
first = data[0]
second = data[1]

count = (m // (k + 1)) * k
count += m %(k+1)

result = 0
result += (count) * first
result += (m-count) * second

print(result)