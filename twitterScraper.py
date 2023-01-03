import twint
import sys
st = sys.argv[1]
# configuration
config = twint.Config()
config.Search = st
config.Lang = "en"
config.Limit = 3000
config.Since = "2015-04-29 00:00:00"
config.Until = "2020-04-29 00:00:00"
config.Store_json = True
config.Output = f"resTwitter/{st}.json"
# running search
twint.run.Search(config)
data = ""
with open(f"resTwitter/{st}.json", "r") as f:
    data = (f.read())
    data = ",".join(data.splitlines())
    data = "["+data+"]"
with open(f"resTwitter/{st}.json", "w") as f:
    f.write(data)
