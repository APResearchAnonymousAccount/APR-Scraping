import json
humanPosts = []
aiPosts = []

with open("manualScrapeAll copy.json", "r") as file:
    res = json.loads(file.read())
    for post in res:
        if(post["aiText"] != ""):
            aiPosts.append([post["aiText"],0])

with open("manualScrapeAll copy 2.json", "r") as file:
    res = json.loads(file.read())
    for post in res:
        if(post["text"] != ""):
            humanPosts.append(post["text"])

with open("aigenChat.txt","r") as file:
    res = file.readlines()
    i = 0
    for line in res:
        
        line = line.strip()
        if(line == ""):
            continue
        postText = line.split('"')[1]
        if(postText == ""):
            continue

        aiPosts.append([postText,i])
        i+= 1
with open("human.json","w") as file:
    file.write(json.dumps(humanPosts))
with open("ai.json","w") as file:
    file.write(json.dumps(aiPosts))