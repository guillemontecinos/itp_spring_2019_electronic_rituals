const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express');

let app = express()
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
    // TODO: add numeric input confirmation
    let lat = req.query.lat_0
    let lon = req.query.lon_0

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
    let memory = req.body.memory
    console.log('Memory: ' + memory)
    res.sendFile(path.join(__dirname + '/memtwo.html'))
})

app.get('/memory', function(req, res){
    // TODO: add input confirmation
    let address = req.query.address
    console.log('Address: ' + address)
    
    // pass variable from express to client-side js
    // res.render('/memtwo', function(req, res){
    //     memoryTwo: 'This is my second memory'
    // })
    // res.redirect('/')
})



app.listen(3000, function(){
    console.log('App listening at port 3000')
})
