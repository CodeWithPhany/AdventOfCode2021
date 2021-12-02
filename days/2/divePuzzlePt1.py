with open("input.txt", "r") as f:
    data = f.read().split("\n")
    forward = 0
    depth = 0

    for i in [i for i in data]:
        option, value = i.split(" ")[0], int(i.split(" ")[1])
        if option == "forward":
            forward += value

        if option == "down":
            depth += value
        if option == "up":
            depth -= value

    print(data)
    print(forward, depth, forward * depth)