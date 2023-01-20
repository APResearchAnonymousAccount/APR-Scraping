import os
import openai
from dotenv import load_dotenv
import json
import time


load_dotenv()
with open('human.json') as f:
	humanPosts = json.load(f)
outfile = "ai3.json"
# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")
for post in humanPosts:
    start = time.time()
    prompt = "Does this tweet convey a left-wing, right-wing, or neutral perspective?\n"
    prompt+= post+"\n"
    
    response = openai.Completion.create(model="text-curie-003", prompt=prompt, temperature=0, max_tokens=10)
    genText = str(response.choices[0].text)
    classification = ""
    if("left" in genText.lower()):
        classification = "left"
    if("right" in genText.lower()):
        classification = "right"
    if("neutral" in genText.lower()):
        classification = "neutral"    
    
    print(response)
    with open('human2.json','a') as f:
        f.write(","+json.dumps([post,classification]))
    time.sleep(time.time()-start+1.2)
    
print("Done")