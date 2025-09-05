def solution(n, m, section):
    count=0
    covered=0
    
    for s in section:
        if s > covered:
            count+=1
            covered = s+m-1
    return count
