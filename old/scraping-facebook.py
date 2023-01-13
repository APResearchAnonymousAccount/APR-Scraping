from facebook_scraper import *
import sys
import json
set_user_agent("Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")

searchTerm = sys.argv[1]
posts = []
for post in get_posts(f'search/top?q={searchTerm}',cookies='cookies.json',pages=17):
    print(post['text'])
    posts.append(post)
with open(f'scraping-facebook-{searchTerm}.json', 'w') as resFile:
    resFile.write(json.dumps(posts))