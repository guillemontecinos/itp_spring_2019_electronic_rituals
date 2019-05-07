const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express');
const { Client } = require('pg')
const puppeteer = require('puppeteer');

let app = express()
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(bodyParser.urlencoded({ extended: false }))

let client = new Client({database: 'mapmemory2'})
client.connect()

// storage variables
let location
let lat, lon
let memory

// first connection to server
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

// location posted to server, then scrape and render to url in client side
app.post('/', function(req, res){
    location = req.body.location
    scrape(location).then((value) => {
        lat = value.latitude
        lon = value.longitude
        let myVar = lat + '_' + lon 
        // console.log('Scraped (debug mode)')
        res.render('memone',{
            myVar
        })
    })
})

// memory received in server and posted to database. memtwo sent back to allow question
app.post('/memory', function(req, res){
    // TODO: add input confirmation
    memory = req.body.memory
    console.log('Memory: ' + memory)
    // post on database
    client.query('INSERT INTO posts (latitude, longitude, memory) VALUES ($1, $2, $3)',[lat, lon, memory], (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log('posted successfully')
        }
      })
    // console.log('posted to database (debug mode)')
    res.sendFile(path.join(__dirname + '/memtwo.html'))
})

app.get('/memory', function(req, res){
     //request to database
     client.query('SELECT * FROM posts', (err, resSQL) => {
        if (err) {
          console.log(err.stack)
        } else {
            let dbContent = resSQL.rows
            console.log(dbContent)
            res.json(dbContent)
        }
      })
})

app.listen(3000, function(){
    console.log('App listening at port 3000')
})

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
    // return {
    //     latitude: 40.729462,
    //     longitude: -73.993568
    // }
}