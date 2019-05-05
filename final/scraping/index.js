const puppeteer = require('puppeteer');

let scrape = async (loc) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.latlong.net/')
    await page.type('#place', loc)
    await page.click('#btnfind')
    await page.waitFor(1500)
    const result = await page.evaluate(()=>{
        let latitude = document.getElementById('lat').value
        let longitude = document.getElementById('lng').value
        return {
            latitude, longitude
        }
    })
    browser.close()
    return result
}

scrape('cotapos 1091, independencia').then((value) => {
    console.log(value); // Success!
})


