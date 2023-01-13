const puppeteer = require('puppeteer')
const fs = require('fs');
const path = require('path');
const prompt = require("prompt-sync")();
var searchTerm = process.argv[2];
const settings = {
    headless: true,
}
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
var results = []

const main = async () => {
    const browser = await puppeteer.launch(settings)
    const page = await browser.newPage()
    await page.goto('https://twitter.com/search?q=' + searchTerm, { waitUntil: 'networkidle2' })
    try {

        await page.waitForSelector('[aria-label="Timeline: Search timeline"] > div > div:nth-child(8)')
        var results = await page.evaluate((search) => {
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function scrape(search) {
                var post = document.querySelector('[aria-label="Timeline: Search timeline"] > div > div:nth-child(8)')
                var posts = []
                for (var i = 0; i < 500; i++) {
                    var j = 0;

                    while (post.nextSibling == null) {
                        window.scrollBy(0, 20)
                        j++

                        if (j > 500) {
                            break;
                        }
                        await sleep(100)

                    }
                    if(post.nextSibling == null){
                        break
                    }
                    post = post.nextSibling
                    try {
                        var postAuthor = post.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerText
                    } catch (error) {
                        console.log(error + " @ " + i)
                    }
                    try {
                        var postText = post.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[1].children[0].innerText
                    } catch (error) {
                        console.log(error + " @ " + i)
                    }
                    console.log("Index: " + i)

                    var templ = {
                        source: "twitter.com",
                        search: search,
                        author: postAuthor,
                        text: postText,
                    }
                    console.log(JSON.stringify(templ))
                    posts.push(templ)

                }
                return posts;
            };
            return scrape("immigration")

        }, searchTerm);

    }
    catch (error) {
        console.log(error)
    }

    await browser.close()
    fs.writeFileSync(path.resolve(__dirname, 'resTwitter/results-twitter-'+searchTerm+'.json'), JSON.stringify(results));
}
main()