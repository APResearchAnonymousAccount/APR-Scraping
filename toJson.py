import json

with open("manualScrapeAll copy.json", "r") as file:
    res = json.loads(file.read())
    print(res)