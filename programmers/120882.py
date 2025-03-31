def solution(score):
    avg = [i[0]+i[1] for i in score]
    s_avg = sorted(avg, reverse=True)
    
    answer = []
    for i in avg:
        answer.append(s_avg.index(i)+1)
    return answer