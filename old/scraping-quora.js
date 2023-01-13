const puppeteer = require('puppeteer')
var space = process.argv[2]
const fs = require('fs');
const path = require('path');
const { tmpdir } = require('os');
const prompt = require("prompt-sync")();  
const settings = {
    headless:false,
    slowMo: 10
}
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
var info = {
    email: "thisisforresearchiswear@gmail.com",
    password: "iBN6Fh5XtML34ci"
}
var results = []

const main = async () => {
    const browser = await puppeteer.launch(settings)
    const page = await browser.newPage()
    var result = {}
    /*await page.goto('https://quora.com', { waitUntil: 'networkidle2' })
    await page.waitForSelector('input#email')
    await page.type('input#email', info.email)
    await page.type('input#password', info.password)
    await delay(1000)
    await Promise.all([
        page.click(".cCiFZD"),
        delay(3000)
    ])*/

    await page.goto('https://'+space+'.quora.com/', { waitUntil: 'networkidle2' })
    prompt("start?")
    try {
        
    
    for(var index = 1;index<500;index++){
        var post = await page.waitForSelector('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+index+')')
        var more = await page.evaluate(indexArg => {return document.querySelector('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+indexArg+') .QTextTruncated__StyledReadMoreLink-sc-1pev100-2')},index)
        if(more !== null){
            await page.click('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+index+') .QTextTruncated__StyledReadMoreLink-sc-1pev100-2')
        }
        var postText = await page.evaluate((indexArg,space) => {
            console.log("Index: "+indexArg)

            var templ = {
                source: space+".quora.com",
                author: "",
                title: "",
                text: "",
                code: 0
            }
            var post = document.querySelector('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+indexArg+') > div > div > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1)')
            console.log(post)
            if(post == null){
                var post = document.querySelector('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+indexArg+') > div > div > div > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div:nth-child(1)')
                templ.code += 1
            }
            if(post == null){
                var post = document.querySelector('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+indexArg+') > div > div > div > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1)')
                templ.code += 2
            }
            if(post !== null && post.children[1] !== undefined && post.children[1] !== null){
                console.log("reading post")
                if(post.children[0].children[0].children[0].children[0].children[0].children[1] == null){
                    console.log("took r1")
                    templ.author = post.children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].innerText
                    templ.title = post.children[2].innerText
                    templ.text = post.children[3].innerText
                    
                }else{
                    console.log("took r2")

                    templ.author = post.children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].innerText
                    templ.title = post.children[1].innerText
                    templ.text = post.children[2].innerText
                    templ.code += 3
                }
            }else{
                console.log("broke")
            }
        

            return templ;
          },index,space);
        results.push(postText)
        console.log(postText.text )
        await page.evaluate( indexArg => {
            console.log(indexArg)
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function next(){

                var post = document.querySelector('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+indexArg+')')
                            
                post.scrollIntoView(false)

                while(document.querySelector('div#mainContent > div:nth-child(3) > div > div > div:nth-child('+(indexArg+1)+')') == null){
                  window.scrollBy(0,20)
                  i++
              
                  if (i>30){
                    console.log("broke")
                    break;
                  }
                  await sleep(100)
              
                }
              }
            next()

        },index)
        await delay(1000)
    }
    } catch (error) {
        console.log(error)
    }
    prompt("end?")
    await browser.close()
    fs.writeFileSync(path.resolve(__dirname, 'results-'+space+'.json'), JSON.stringify(results));
}
main()