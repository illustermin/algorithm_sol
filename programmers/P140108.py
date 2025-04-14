def solution(s):
    first = s[0]
    count=0
    same=1
    diff=0
    for i in range(1,len(s)):
        if s[i] == first:
            same+=1
        else:
            diff+=1
        if same == diff:
            count+=1
            same=0
            diff=0
            if i+1 <len(s):
                first = s[i+1]
    if same != 0 or diff != 0:
        count += 1
    return count