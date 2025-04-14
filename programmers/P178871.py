def solution(players, callings):
    name_to_index = {name:idx for idx,name in enumerate(players)}
    
    for c in callings:
        idx = name_to_index[c]
        front = idx-1
        players[front], players[idx] = players[idx], players[front] 
        
        name_to_index[players[idx]] = idx
        name_to_index[players[front]] = front
    return players