# 데이터 입력받기
# 각 숫자 제곱하고 합하기
# 10으로 나눈 나머지
import sys
data = list(map(int, sys.stdin.read().split()))

sum=0
for i in data:
  i = i*i
  sum +=i

print(sum%10)