const API_TOKEN = "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"
var infile = process.argv[2]
const fs = require('fs')
const results = require(infile);
const fetch = require('node-fetch');	
var generated = []

const path = require('path')
var model = "bloom"

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/bigscience/bloom",
        {
            headers: { Authorization: `Bearer ${API_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const res = await response.json();
    return res;
}
async function generatedResponse(post) {
    var queryText
   
        queryText = post.text + "\n\n"

    var response = await query({ inputs: queryText, parameters: {max_new_tokens: 150, return_full_text: true}})
    console.log(queryText + " \n | \n | ")
    console.log(JSON.stringify(post) + " \n | \n | ")
    console.log(JSON.stringify(response) + " \n | \n | ");


    var genRes = post
    genRes.aiText = response[0].generated_text
    genRes.model = model
    console.log(JSON.stringify(genRes));

    generated.push(genRes)
    console.log(" \n | \n |  \n | \n | ")

}
async function run() {

    for (var i = 0; i < 2; i++) {
        var result = results[i]
        result = await generatedResponse(result)
    }
    fs.writeFileSync('generated-' + infile.slice(2), JSON.stringify(generated));
}


run()