// Meditation 4, EROFT
// Noise Autowriting
// Guillermo Montecinos
// Based on the p5 Serial Server by Shawn Van Every
// to run this sketch
// 1) go to ../p5_serial_server
// 2) install the packages: $ npm install
// 3) then run the server: $ node startserver.js
// 4) double click index.html

let serial;
let latestData = "waiting for data";  // you'll use this to write incoming data to the canvas
let autoText = "";
let lastValues = []; //array with length 10
let canvas;

const dict = {
  0:32, 1:97, 2:98, 3:99, 4:100, 5:101, 6:102, 7:103, 8:104, 9:105, 10:106, 11:107, 12:108, 13:109, 14:110, 15:111, 16:112, 17:113, 18:114, 19:115, 20:116, 21:117, 22:118, 23:119, 24:120, 23:121, 24:121
}

function setup(){
  frameRate(37); //37 fps, so it types a word each 10 frames
  // createCanvas(800,500);
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  serial = new p5.SerialPort();
  serial.open("/dev/cu.usbmodem1411");
  serial.on('connected', serverConnected);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  textSize(20);
  textFont('Courier');
}

// We are connected and ready to go
function serverConnected() {
  console.log("Connected to Server");
}

// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is Open");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  console.log(theerror);
}

// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming string
  trim(currentString);                    // remove any trailing whitespace
  if (!currentString) return;             // if the string is empty, do no more
  // console.log(currentString);             // println the string
  latestData = currentString;            // save it for the draw method
}

// We got raw from the serial port
function gotRawData(thedata) {
  console.log("gotRawData" + thedata);
}

function draw() {
  // update lastValues array
  lastValues.push(latestData);
  if (lastValues.length > 2) {
    for (var i = 0; i < lastValues.length - 1; i++) {
      lastValues[i] = lastValues[i + 1];
    }
    lastValues.pop();
  }
  // calculate average
  let average = 0;
  for (var i = 0; i < lastValues.length; i++) {
    average += int(lastValues[i]);
  }
  average = average / lastValues.length;

  // estimate and display char
  if (frameCount % int(random(5, 10)) == 0) {
    fill(0);
    // estimate variation
    let delta = (latestData - average) / average;
    // let delta = random(-.4, .4); //for debug purposes
    console.log(delta)
    if (random(1) > .85) {
      autoText += " "
    }
    autoText += String.fromCharCode(dict[int(map(delta, -.15, .15, 1, 24))]);
    // text(autoText, 10, 10, 400, 400);
    updateContent();
  }

  if (frameCount % 20 == 0) {
    // draw noise on background
    noStroke();
    for (var x = 0; x < width; x+=5) {
      for (var y = 0; y < height; y+=5) {
        fill(random(255));
        rect(x,y,10,10);
      }
    }
  }
}

function updateContent(){
  document.getElementById("textBox").innerHTML = autoText;
}
