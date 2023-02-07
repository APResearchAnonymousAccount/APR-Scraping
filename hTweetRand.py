import json
import random
import csv
with open('iraTweetsRefined.csv', 'r') as file:
    reader = csv.DictReader(file)
    data = [row for row in reader]
refined = []
for post in data:
    if(post['account_type'] == "Right"):
        refined.append(post)
inds = random.sample(range(len(refined)),100)
selected = []
for index in inds:
    selected.append(refined[index])
with open('humanIRA.json',"w") as f:
    f.write(json.dumps(selected))