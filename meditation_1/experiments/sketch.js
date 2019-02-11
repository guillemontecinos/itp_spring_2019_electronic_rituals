// Meditation 1 - Electronic Rituals, Oracles & Fortune Telling
// by Guillermo Montecinos
// NYU ITAP, Spring 2019
// Built up from Nicole He's "Hello Computer" class documentation
// https://github.com/nicolehe/ITP-hello-computer-f18
// and from Youtube API documentation
// https://developers.google.com/youtube/iframe_api_reference

//Load the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an <iframe> (and YouTube player) after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'vV6vuEOs1eE',
    events: {
    }
  });
}

// p5.js sketch begin
// variables declaration
let canvas;
let ytWidth;
let ytHeight;
let phrase = "";
const insults = ["culiao", "culeao", "culeado", "culiaos", "culeados", "culear", "culiar", "madre", "madres", "perra", "conchatumadre", "conchetumare", "la concha de tu madre", "maricón", "maricones", "maraca", "hueco"];
const SpeechRecognition = webkitSpeechRecognition;
let boxWidth;
let boxHeight;
let hasInsulted = false;

// setup
function setup(){
  // sizing canvas and moving to the front
  ytWidth = windowWidth;
  ytHeight = windowHeight;
  rectMode(CENTER);
  boxWidth = windowWidth/2;
  boxHeight = windowHeight/3;
  // resize YT player
  player.setSize(ytWidth,ytHeight)
  player.setPlaybackQuality('default');
}

// draw
function draw(){
  canvas = createCanvas(ytWidth,ytHeight);
  canvas.position(0,0);
  canvas.style('z-index','1');
  noStroke();
  fill(200,100);
  rect(width/2, height/2, boxWidth, boxHeight);
  fill(0);
  textSize(45);
  textAlign(CENTER, CENTER);
  text(phrase, width/2, height/2, boxWidth, boxHeight);
}

function mousePressed(){
  if (player.getPlayerState() == 1) {
    player.pauseVideo();
  }
  else {
    player.playVideo();
    getSpeech();
    hasInsulted == false;
  }
}

// SpeechRecognition sketch
const getSpeech = () => {
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-CL';
  recognition.start();
  recognition.continuous = false;
  recognition.interimResults = true;
  console.log('started rec');

  recognition.onresult = event => {
    phrase = event.results[0][0].transcript;
    console.log('result: ' + phrase);
    console.log('confidence: ' + event.results[0][0].confidence);

    for(let i = 0; i < insults.length; i++){
      const insult = insults[i];
      if(phrase.includes(insult)){
        // phrase = insults[i] + " es un insulto, tu ritual ha fracasado";
        phrase = insults[i] + " is an insult, your ritual has failed =/";
        hasInsulted = true;
        break;
      }
    }
  };

  recognition.onend = () => {
    console.log('it is over');
    if (!hasInsulted) {
      getSpeech();
    }
    else {
      player.stopVideo();
    }
  };

  recognition.onerror = event => {
    console.log('something went wrong: ' + event.error);
  };
};
