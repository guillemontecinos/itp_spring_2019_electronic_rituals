# Meditation 4 - Auto Self-medium
In this meditation I explored a way to interpret the electronic noise captured in an Arduino analog pin into readable-ish text. Noise is something we usually struggle with because blurs the information we are trying to retrieve, especially in low-accuracy measure instrument.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_4/documentation/noise_autowriter.gif" align="middle" width="70%">
</p>

To do this I set an analog pin in the Arduino as a reading pin and send the retrieved data through the serial communication to my laptop.

```Java
int analogPin = A3;
int val = 0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  val = analogRead(analogPin);
  Serial.println(val);
}
```

The measured data was received in a p5.js sketch using Shawn Van Every's [p5.serialport](https://github.com/vanevery/p5.serialport) library and analyzed. Because we are talking of noise it is hard to know what of the read data is electronic/thermal variation and what is DC signal. So, I decided not to use the received data to feed an auto-writing algorithm, but the variation of data over n mobile average of the last 5 received values. That delta was mapped into a dictionary that contains the unicode representation of the english alphabet in lowercase.

```javascript
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
  console.log(delta)
  if (random(1) > .85) {
    autoText += " "
  }
  autoText += String.fromCharCode(dict[int(map(delta, -.15, .15, 1, 24))]);
  // text(autoText, 10, 10, 400, 400);
  updateContent();
}
```

Originally I set the range of delta in [-0.4, 0.4], but lately I realized the noise is related with other factors besides electronic ones, as temperature and humidity. This is because the sensor is measuring a virtual resistance between the analog pin and ground.

For a next iteration I'd like to explore how the string of characters can be more human readable or meaningful. I'd like to explore using Markov chain or LSTM word generation, starting from a seed interpreted from noise.
