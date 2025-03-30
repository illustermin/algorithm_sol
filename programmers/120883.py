def solution(id_pw, db):
    for a,b in db:
        if id_pw[0]== a and id_pw[1]==b:
            return "login"
        elif id_pw[0]== a and id_pw[1]!=b:
            return "wrong pw"
    return "fail"