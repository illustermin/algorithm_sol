# -*- coding: utf-8 -*-

# <����>
# ù° �ٿ� n,m,k�� �ڿ����� �־�����, �� �ڿ����� �������� �����Ѵ�.
# ��° �ٿ� n���� �ڿ����� �־�����. 
# �Է����� �־����� k�� �׻� m���� �۰ų� ����.
# <���> 
# ù° �ٿ� �������� ū ���� ��Ģ�� ���� ������ ���� ���

# <�������ٹ��>
# �׸��� �˰���
#  => ���� ū���� k�� ���ϰ� �� ��°�� ū ���� �� �� ���ϴ� ����


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