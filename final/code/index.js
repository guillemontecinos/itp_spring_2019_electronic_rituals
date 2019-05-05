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

let client = new Client({database: 'mapmemory'})
client.connect()

// storage variables
let location
let lat, lon
let memory = 'NA'
let address = 'NA'

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/', function(req, res){
    location = req.body.location
    scrape(location).then((value) => {
        lat = value.latitude
        lon = value.longitude
        let myVar = lat + '_' + lon 
        console.log(myVar)
        res.render('memone',{
            myVar
        })
    })
})

app.post('/memory', function(req, res){
    // TODO: add input confirmation
    memory = req.body.memory
    console.log('Memory: ' + memory)
    res.sendFile(path.join(__dirname + '/memtwo.html'))
})

app.get('/memory', function(req, res){
    // TODO: add input confirmation
    address = req.query.address
    console.log('Address: ' + address)

    // post on database
    client.query('INSERT INTO posts (lat1, lon1, memory, address) VALUES ($1, $2, $3, $4)',[lat, lon, memory, address], (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
            console.log('posted successfully')
        }
      })
    
    // pass variable from express to client-side js
    // res.render('/memtwo', function(req, res){
    //     memoryTwo: 'This is my second memory'
    // })
    // res.redirect('/')
})



app.listen(3000, function(){
    console.log('App listening at port 3000')
})



let scrape = async (loc) => {
    // const browser = await puppeteer.launch()
    // const page = await browser.newPage()
    // await page.goto('https://www.latlong.net/')
    // await page.type('#place', loc)
    // await page.click('#btnfind')
    // await page.waitFor(1500)
    // const result = await page.evaluate(()=>{
    //     let latitude = document.getElementById('lat').value
    //     let longitude = document.getElementById('lng').value
    //     return {
    //         latitude, longitude
    //     }
    // })
    // browser.close()
    // return result
    // TODO: uncomment above and comment below
    return {
                latitude:-25.358655, longitude:-49.250455
            }
}