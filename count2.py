import json

with open('ai2.json') as f:
	humanPosts = json.load(f)
print(len(humanPosts))