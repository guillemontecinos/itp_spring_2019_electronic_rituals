# Meditation 4 - Auto Self-medium
This meditation explores a way to interpret the electronic noise captured in an Arduino analog pin into readable-ish text. Noise is a thing usually we struggle with because blurs the information we are trying to retrieve.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_4/documentation/noise_autowriter.gif" align="middle" width="70%">
</p>

* originally i set the range of the parameter delta in [-0.4, 0.4], but when i tried again the circuit i realized that the oscillation of delta had changed, because the temperature had changed
* for next time i'd like to explore how the string of characters can be human readable or meaningful. I'd like to explore using Markov chain or LSTM word generation starting from a seed interpreted from noise.

* Arduino code

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
