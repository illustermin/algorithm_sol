def solution(food):
    answer = ''
    i=1
    for f in food[1:]:
        count = int(f)//2
        answer += str(i) * count
        i+=1
    ranswer = answer[::-1]
    return answer + "0" + ranswer