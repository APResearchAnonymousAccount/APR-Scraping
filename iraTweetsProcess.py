import csv
import random 
tLen = 0
numPosts = 0
data = []
with open('tweets.csv') as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    for row in reader:
        tLen += len(row['text'])
        numPosts += 1
        if('http' in row['text']):
            continue
#        b = False
#        for post in data:
#            if post['text'] == row['text']:
#                b = True
#                break
#        if(b):
#            continue
        data.append(row)

print(len(data)," posts aggregated")
print("Average length",round(tLen/numPosts),"characters")

with open('iraTweetsRefined2.csv', 'w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(data)