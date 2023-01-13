var results = require("./refined-protrump.json") 
const fs = require('fs');
const path = require('path');
const { tmpdir } = require('os');
var top10 = results.sort((a,b) => b.wordCount - a.wordCount).slice(0,10)
console.log(top10)
results.forEach(element => {
    if(element.title == "What is the liberal ideal behind stricter gun control?"){
    fs.appendFile('search.txt',"Title: "+element.title+"\n\nText: "+element.text+"\n\n\n\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });}
});

fs.writeFileSync(path.resolve(__dirname, 'top10.json'), JSON.stringify(top10));


