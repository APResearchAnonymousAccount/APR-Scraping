import json
import random
with open("aiRightNone.json","r") as f:
    rightNone = json.loads(f.read())
with open("aiRight.json","r") as f:
    rightBasic = json.loads(f.read())
with open("aiRightSpec.json","r") as f:
    rightSpecific = json.loads(f.read())

with open("aiLeftNone.json","r") as f:
    leftNone = json.loads(f.read())
with open("aiLeft.json","r") as f:
    leftBasic = json.loads(f.read())
with open("aiLeftSpec.json","r") as f:
    leftSpecific = json.loads(f.read())
aiLen = 100
aiPosts = []
typeNames = ["rightNone","rightBasic","rightSpecific","leftNone","leftBasic","leftSpecific"]
types = [rightNone,rightBasic,rightSpecific,leftNone,leftBasic,leftSpecific]
for i in range(aiLen):
    listInd = i % len(types)
    list = types[listInd]
    postIndex = random.randint(0,len(list)-1)
    postContent = list[postIndex][0]
    aiPosts.append([postContent,typeNames[listInd],postIndex])

with open("ai.json","w") as f:
    f.write(json.dumps(aiPosts))