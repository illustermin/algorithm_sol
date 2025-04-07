from collections import Counter
def solution(a, b, c, d):
    answer = 0
    origin = [a,b,c,d]
    
    count = Counter(origin)
    freq = count.most_common()
    
    if len(freq) == 1:
        answer = int(str(freq[0][0]) *4)
    elif len(freq) == 2:
        p = freq[0][0]
        q = freq[1][0]
        if freq[0][1]>2:
            answer = pow(((10 * p) + q), 2) 
        else: answer = (p+q) * abs(p-q)
    elif len(freq) ==3:
        answer = freq[1][0] * freq[2][0]
    elif len(freq) ==4:
        answer = min(freq[0][0],freq[1][0],freq[2][0],freq[3][0])
    return answer