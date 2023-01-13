from facebook_scraper import *
import json
set_user_agent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36")

for post in get_posts('zuck', pages=13):
    print(json.dumps(post))