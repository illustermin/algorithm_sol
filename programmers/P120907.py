def solution(quiz):
    result=[]
    for q in quiz:
        left, right = q.split("=")
        left_result = eval(left)
        if left_result == int(right):
            result.append("O")
        else: result.append("X")
    return result