import json
import sys
inf = sys.argv[1]
outf = sys.argv[2]
# configuration
def getTextLen(post):
  return len(post['tweet'])


with open(inf, "r") as f:
    posts = f.read().split("-------")
with open(inf, "w") as f:
    f.write(json.dumps(posts))
   