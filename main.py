def pikachucount(pi):
    prv = ""
    nprv = 0
    pikachu = 0
    pi = pi.strip().split(' ')

    for a in range(len(pi)):
        if pi[a] == "pi" or pi[a] == "pika" or pi[a] == "pikachu":
            if nprv == 1 and prv == pi[a]:
                return pi[a] + " " + pi[a] + " " + pi[a] + " found "
            elif prv == pi[a]:
                nprv += 1
            else:
                nprv = 0
            pikachu += 1
            prv = pi[a]
        else:
            return "Non-pikachu language found"
    return pikachu
