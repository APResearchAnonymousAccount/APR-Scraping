import os
import openai
from dotenv import load_dotenv
import json
import time
load_dotenv()
with open('human.json') as f:
	humanPosts = json.load(f)
outfile = "ai5.json"
# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")
for j in range(len(humanPosts)-4):
    prompt = "Write five tweets. Make a few spelling and/or grammar mistakes, don't be afraid to use all caps (within reason), use hashtags sparingly, and use a distinct/different tone for each post. These should be as realistic as possible.\n"

    for i in range(0,4):
        prompt += (str(i+1)+". "+humanPosts[i+j]+"\n")
    prompt+="5. "
    print(prompt)
    response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=1, max_tokens=100)
    print(response)
    with open(outfile,'a') as f:
        f.write(","+json.dumps([response.choices[0].text,"c2"]))
    time.sleep(2)
    
print("Done")