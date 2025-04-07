def solution(name, yearning, photo):
    answer = []
    
    for p in photo:
        s_yearn = 0  
        for person in p:  
            if person in name: 
                idx = name.index(person)  
                s_yearn += yearning[idx]  
        answer.append(s_yearn)  
    
    return answer