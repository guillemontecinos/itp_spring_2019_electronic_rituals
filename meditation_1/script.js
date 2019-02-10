// Meditation 1 - Electronic Rituals, Oracles & Fortune Telling
// by Guillermo Montecinos
// NYU ITAP, Spring 2019
// Built up from Nicole He's "Hello Computer" class documentation
// https://github.com/nicolehe/ITP-hello-computer-f18

let phrase = "";
const SpeechRecognition = webkitSpeechRecognition;

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

document.querySelector('#my-button').onclick = () => {
  console.log('clickity');
  getSpeech();
};
