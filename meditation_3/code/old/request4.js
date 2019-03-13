// sketch for http request
// must be run using web server for chrome

const key = 'ea58640e2c9c1f8612f4fd05ae0aa94c'; // open weather key

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=';
const urlForcst = 'https://api.openweathermap.org/data/2.5/forecast?q=';

let dataCurrent;
let tempCurrent = 0;
let humCurrent = 0;
let cloudsCurrent = 0;
let windCurrent = 0;

let dataForcst;
let tempForcst = 0;
let humForcst = 0;
let cloudsForcst = 0;
let windForcst = 0;

let city = "";
let timeFcst = [];

let reqCurrent = new XMLHttpRequest();
let reqForcst = new XMLHttpRequest();

reqCurrent.onload = function () {
  // Begin accessing JSON data here
  dataCurrent = JSON.parse(this.response);
  // sends request of forecast data as soon as current data is loaded
  reqForcst.send();
}

reqForcst.onload = function () {
  // Begin accessing JSON data here
  dataForcst = JSON.parse(this.response);
  // processes data when all data has been received
  getData();
  predict();
}

// predicts future based on weather data
function predict(){
  let dTemp = 100*(tempForcst-tempCurrent)/tempCurrent;
  let dClouds = cloudsForcst-cloudsCurrent;
  console.log("dTemp: " + dTemp + "\n" + "dClouds: " + dClouds);

  if(dTemp > 1 && dClouds > 5){
    console.log("Fresco");
  }
  else if(dTemp < -1 && dClouds > 5){
    console.log("Frío");
  }
  else if(dTemp > 1 && dClouds < -5){
    console.log("Calor");
  }
  else if(dTemp < -1 && dClouds < -5){
    console.log("Fresco");
  }
  else {
    console.log("No pasa na");
  }
}

// gets data
function getData(){
  tempCurrent = dataCurrent.main.temp;
  // humCurrent = dataCurrent.main.humidity;
  cloudsCurrent = dataCurrent.clouds.all;
  // windCurrent = dataCurrent.wind.speed;

  let futureIndex = findMatch();
  tempForcst = dataForcst.list[futureIndex].main.temp;
  // humForcst = dataForcst.list[futureIndex].main.humidity;
  cloudsForcst = dataForcst.list[futureIndex].clouds.all;
  // windForcst = dataForcst.list[futureIndex].wind.speed;
}

// finds 24 hours ahead match of current moment
function findMatch(){
  let futureCurrent = dataCurrent.dt + 60 * 60 * 24; //estimates current moment projected 24 hours ahead
  let match = 0;
  let dist = Math.abs(dataForcst.list[0].dt - futureCurrent);
  for(let i = 1; i < 10; i++){
    let aux = Math.abs(dataForcst.list[i].dt - futureCurrent);
    if(aux < dist){
      dist = aux;
      match = i;
    }
  }
  return match;
}

// activates sketch by pressing button declared on html file
document.querySelector('button').addEventListener('click', () => {
  city = document.getElementById("cityBox").value
  if(city != ""){
    console.log(city)
    reqCurrent.open('GET', urlCurrent + city + "&appid=" + key, true)
    reqForcst.open('GET', urlForcst + city + "&appid=" + key, true)
    reqCurrent.send();
  }
  else {
    console.log("Wrong city name.")
  }
})
