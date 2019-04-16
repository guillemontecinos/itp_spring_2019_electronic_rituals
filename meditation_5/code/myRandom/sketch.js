// Meditation 5
// by Guillermo Montecinos
// sketch developed by Allison Parrish

// ---
// try to keep the code below unchanged (unless you have a really
// clever idea).
// ---
var pos = 0;
var step = 8;
var randomCanvas;
function setup() { 
  pixelDensity(1);
  createCanvas(200, 200);
  randomCanvas = createGraphics(40, 40);
  console.log(myRandom(), ",", myRandom(), ",", myRandom());
} 

function draw() {
  background(0);
  noSmooth();
  randomCanvas.loadPixels();
  for (var i = 0; i < step; i++) {
  	var pxval = myRandom() * 255;
  	for (var j = 0; j < 4; j++) {
    	randomCanvas.pixels[pos+j] = pxval;
  	}
  	pos += 4;
	}

  if (pos > randomCanvas.width * randomCanvas.height * 4) {
    pos = 0;
  }
  randomCanvas.updatePixels();
  scale(5);
  image(randomCanvas, 0, 0);
}

