const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express');
const { Client } = require('pg')

let app = express()
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(bodyParser.urlencoded({ extended: false }))

let client = new Client({database: 'mapmemory'})
client.connect()

// storage variables
let lat = 0
let lon = 0
let memory = ''
let address = ''

app.get('/', function(req, res){
    // TODO: add numeric input confirmation
    lat = req.query.lat_0
    lon = req.query.lon_0

    if(lat === undefined || lon === undefined){
        res.sendFile(path.join(__dirname + '/index.html'))
    }
    else{
        console.log("Lat: " + lat + ", lon: " + lon)
        res.sendFile(path.join(__dirname + '/memone.html'))
    }  
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
