import os
import json
directory = 'resTwitter'


def getTextLen(post):
  return len(post['tweet'])


with open('bestResults.json', "a") as f:
      f.write("[")
for filename in os.listdir(directory):
    if filename.endswith(".json"):
      # do smth
      print(filename)
      with open(f"{directory}/{filename}") as f:
        data = json.load(f)
      print(len(data))
      toPop = []
      for i in range(0, len(data)):
        post = data[i]
        if (post["reply_to"] != [] or "http" in post['tweet'] or post["urls"] != [] or post["photos"] != [] or post['retweet'] == True or post["quote_url"] != ""):

          toPop.append(i)
          continue

        with open('log', "a") as f:
          f.write(json.dumps(post)+"  \n\n\n\n\n ")
      for i in toPop:
        data[i] = {}
      with open('log', "a") as f:
        f.write(json.dumps(data)+"  \n\n\n\n\n ")
      # data.sort(key=getTextLen,reverse=True)
      with open('bestResults.json', "a") as f:
        f.write(json.dumps(data)+",")
      continue
    else:
        continue

with open('bestResults.json', 'rb+') as fh:
    fh.seek(-1, 2)
    fh.truncate()

with open('bestResults.json', "a") as f:
      f.write("]")

with open('bestResults.json', "r") as f:
  data = json.load(f)
ndata = []
for i in range(0, len(data)):
  if (i >= len(data)):
    break
  set = data[i]

  if (set == []):
    data.pop(i)
    continue
  for j in range(0, len(set)):
    if (j >= len(set)):
      break
    post = set[j]
    if(post == {}):
      data[i].pop(j)
    else:
      ndata.append(post)

with open('bestResults.json', "w") as f:
  f.write(json.dumps(ndata))        
print(len(ndata))