var infile = process.argv[2]
var results = require("./results-"+infile+".json") 
const fs = require('fs');
const path = require('path');
const { tmpdir } = require('os');
var refined = []
for(var i = 0;i<results.length;i++){
    var result = results[i]
    if(result.text == "" || result.title == "" || result.code !== 3){continue}
    result.wordCount = result.text.split(' ').length
    refined.push(result)
}
console.log(refined.length)
var wcSum = 0
refined.forEach(a => {wcSum+=a.wordCount})
console.log("Avg len: "+wcSum/refined.length)
fs.writeFileSync(path.resolve(__dirname, 'refined-'+infile+'.json'), JSON.stringify(refined));
