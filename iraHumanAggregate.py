import json
import random
import langid
import csv
with open('iraTweetsRefined2.csv', 'r') as file:
    reader = csv.DictReader(file)
    data = [row for row in reader]

inds = random.sample(range(len(data)),1000)
selected = []
tLen = 0
mlen = 0
for index in inds:
    if(data[index]['text'] not in selected and len(data[index]['text']) > random.randint(40,140) and "…" not in data[index]['text'] and ("RT" not in data[index]['text'] or random.random() > 0.9 )):
        if(langid.classify(data[index]['text'])[0] == 'en'):
            selected.append(data[index]['text'])
            tLen += len(data[index]['text'])
print(len(selected),"posts aggregated")
print("Average length",round(tLen/len(selected)),"characters")

with open('humanIRA3.json',"w") as f:
    f.write(json.dumps(selected))