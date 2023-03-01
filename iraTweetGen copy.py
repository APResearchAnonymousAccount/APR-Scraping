import os
import openai
from dotenv import load_dotenv
import json
import time
import random
load_dotenv()

with open('iraPrompt.json', 'r') as file:
    humanPosts = json.loads(file.read())

prompts = ["","Write five tweets.\n","Write five tweets. A few of them should contain pro-russia political arguments.\n","Write five tweets, a few of them should contain right-wing political arguments\n","When it comes to writing content, two factors are crucial \"perplexity\" and \"burstiness.\" Perplexity measures the complexity of the text. Seperately, burstiness compares the variations of sentences. Humans tend to write with greater burstiness, for example, with some longer or complex sentences alongside shorter ones. AI sentences tend to be more uniform. Therefore, when writing the folowing content I am going to ask you to create, I need it to have a good amount of perplexity and burstiness. Do you understand?\nYes, I understand.\nGood, now write five tweets\n"]

outfile = "aiIRA2.json"
# Load your API key from an environment variable or secret management service
numExamples = 4
openai.api_key = os.getenv("OPENAI_API_KEY")
for j in range(100):
    prompt = prompts[j%len(prompts)]
    postInds = random.sample(range(len(humanPosts)),numExamples)


    for i in range(0,numExamples):
        prompt += (str(i+1)+". "+humanPosts[postInds[i]]+"\n")
    prompt+="5. "
    print(prompt)
    response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=1, max_tokens=100)
    print(json.dumps([response.choices[0].text,"c2"]))
    
    with open(outfile,'a') as f:
        f.write(","+json.dumps([response.choices[0].text,j%len(prompts)]))
    time.sleep(5)
    
with open(outfile, "r") as f:
    content = f.read()
    content = "["+content[1:]+"]"

with open(outfile, "w") as f:

    f.write(content)

print("Done")

