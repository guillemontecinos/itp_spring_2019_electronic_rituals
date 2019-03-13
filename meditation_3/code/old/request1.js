// sketch for http request
// must be run using web server for chrome

const key = 'ea58640e2c9c1f8612f4fd05ae0aa94c'; // open weather key
// const key = 'yXTDURiADBdiholUDYEyGZYX5ZMd5MKu'; // accu weather trial key
// const url = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid='; //url for

let data;
let temp = 0;
let temp_max = 0;
let temp_min = 0;

let request = new XMLHttpRequest();

request.open('GET', url + key, true)

request.onload = function () {
  // Begin accessing JSON data here
  data = JSON.parse(this.response);
  getTemp();
}

function getTemp(){
  temp = data.main.temp;
  temp_max = data.main.temp_max;
  temp_min = data.main.temp_min;
  document.write("current temp: " + temp);
}


document.querySelector('button').addEventListener('click', () => {
	 request.send();
})
