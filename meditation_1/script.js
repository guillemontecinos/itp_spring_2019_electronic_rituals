// Meditation 1 - Electronic Rituals, Oracles & Fortune Telling
// by Guillermo Montecinos
// NYU ITAP, Spring 2019
// Built up from Nicole He's "Hello Computer" class documentation
// https://github.com/nicolehe/ITP-hello-computer-f18

let phrase = "";
const insults = ["culiao", "culeado", "madre", "perra", "conchatumadre", "conchetumare", "la concha de tu madre", "chuncho"];
const SpeechRecognition = webkitSpeechRecognition;

// p5 sketch
let canvas;
function setup(){
  canvas = createCanvas(560,315);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function draw(){
  background(0);
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

    // for(let i = 0; i < insults.length; i++){
    //   const insult = insults[i];
    //   if(phrase.includes(insult)){
    //     document.querySelector('#speech-div').textContent = phrase + " es un insulto";
    //     break;
    //   }
    // }
    document.querySelector('#speech-div').textContent = phrase;

  };

  recognition.onend = () => {
    console.log('it is over');
    getSpeech();
  };

  recognition.onerror = event => {
    console.log('something went wrong: ' + event.error);
  };
};

// document.querySelector('#my-button').onclick = () => {
//   console.log('clickity');
//   getSpeech();
// };
