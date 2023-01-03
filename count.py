
import os
import json
directory = 'manualScraping'
posts = []
for filename in os.listdir(directory):
        if filename.endswith(".txt"):
            with open(f"{directory}/{filename}") as f:
                data = f.read().split("-------")
                for post in data:
                    if(post != "" and post != "\n" and post != "\n\n"):
                        posts.append({"text":post,"source":filename,"aiText":""})

print(len(posts))
with open("manualScrapeAll.json", "w") as f:
    f.write(json.dumps(posts))