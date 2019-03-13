let data;
let client = new XMLHttpRequest();
client.open('GET', '/entries.txt');
client.onreadystatechange = function() {
  data = client.responseText.split("\n");
  processText();
}
client.send();

function processText(){
  for (var i = 0; i < data.length; i++) {
    if (data[i] == "" || data[i].search("Aries") != -1 || data[i].search("Taurus") != -1 || data[i].search("Gemini") != -1 || data[i].search("Cancer") != -1 || data[i].search("Leo") != -1 || data[i].search("Virgo") != -1 || data[i].search("Libra") != -1 || data[i].search("Scorpio") != -1 || data[i].search("Sagittarius") != -1 || data[i].search("Capricorn") != -1 || data[i].search("Aquarius") != -1 || data[i].search("Aquarius") != -1 || data[i].search("Pisces") != -1) {
      data.splice(i, 1);
    }
  }
}
