import json
import random
import csv
with open('iraTweetsRefined.csv', 'r') as file:
    reader = csv.DictReader(file)
    data = [row for row in reader]

inds = random.sample(range(len(data)),100)
selected = []
for index in inds:
    selected.append(data[index])
with open('humanIRA2.json',"w") as f:
    f.write(json.dumps(selected))