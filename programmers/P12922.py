def solution(n):
    if n%2==0:
        return (str("수박") * (n//2))
    else: 
        return (str("수박") * (n//2) + str("수"))