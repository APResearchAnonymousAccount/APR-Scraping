const puppeteer = require('puppeteer')
const fs = require('fs');
const path = require('path');
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
    email: "GODBLESSMURICA",
    password: "sojc13kiss"
}
var results = []

const main = async () => {
    const browser = await puppeteer.launch(settings)
    const page = await browser.newPage()
    var result = {}
    await page.goto('https://www.facebook.com', { waitUntil: 'networkidle2' })
    await page.waitForSelector('[data-testid="card-body"]')
    await page.type('input[name="username"]', info.uname)
    await page.type('input[name="password"]', info.password)

    console.log("clicked the submit button")
    await page.evaluate( () => {
        window.scrollBy(0,200)
    })
    await Promise.all([
        page.click("button[type='submit']"),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ])
    console.log("end")
    await page.goto('https://truthsocial.com/tags/russia', { waitUntil: 'networkidle2' })
    prompt("start?")
    for(var index = 0;index<500;index++){
        var templ = {
            source: "truthsocial.com",
            text: ""
        }
        var post = await page.waitForSelector('[data-index="'+index+'"]')
        templ.text = await post.$eval("div", el => el.innerText)
        results.push(templ)
        console.log(templ.text )
        await page.evaluate( indexArg => {
            console.log(indexArg)
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function next(){

                
                console.log("Before: "+document.querySelector('[data-index="'+(indexArg)+'"]'))
              
                var element = document.querySelector('[data-index="'+(indexArg)+'"]')
              
                element.scrollIntoView(false)
                i = 0
              
                while(document.querySelector('[data-index="'+(indexArg+1)+'"]') == null){
                  window.scrollBy(0,10)
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
    prompt("end?")
    await browser.close()
    fs.writeFileSync(path.resolve(__dirname, 'results.json'), JSON.stringify(results));
}
main()