import json

with open('ai4.json') as f:
	humanPosts = json.load(f)
print(len(humanPosts))