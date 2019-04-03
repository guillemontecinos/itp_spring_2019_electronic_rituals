# Auto Self-medium

* describes what do spirits want to say to you by automatic writing based on your body pose.
* define three postures that can set different moods
* find writing descriptions and use rita to auto generate text and display it in real time
* consider posnet's glitch of reading more than one pose and use it to tell there are more spirits
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
