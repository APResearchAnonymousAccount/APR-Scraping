import os
import openai
from dotenv import load_dotenv
import json

load_dotenv()
with open('human.json') as f:
	humanPosts = json.load(f)
outfile = "ai3.json"
# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")
for j in range(len(humanPosts)-4):
    prompt = "Write five tweets\n"

    for i in range(0,4):
        prompt += (str(i+1)+". "+humanPosts[i+j]+"\n")
    prompt+="5. "
    print(prompt)
    response = openai.Completion.create(model="text-curie-001", prompt=prompt, temperature=1, max_tokens=100)
    print(response)
    with open('ai2.json','a') as f:
        f.write(","+json.dumps([response.choices[0].text,"d"]))
print("Done")