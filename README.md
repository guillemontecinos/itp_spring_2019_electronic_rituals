# Electronic Rituals, Oracles and Fortune Telling

*by Guillermo Montecinos, NYU ITP Spring 2019*

This document and the contents stored in this repo corresponds to the class Electronic Rituals, Oracles and Fortune Telling taught by Allison Parrish, at NYU ITP during the 2019 Spring term.

## Week 2 - Ritual and Society

We belong to a technologized society that thinks itself as truthful and deterministic, because the narrative of the western side of the world has moved from shamans to doctors and scientists, and from gods to algorithms. That narrative –which exists in an imaginary layer of reality– intends to define our behavior without total success because by the end of the day humans keep making decision based on magic and superstition.

It's interesting how that deterministic ideal struggles with our intuition or with certain magic situations that lead us to make decisions like –for example– when I wore the same shirt at the stadium for an entire year just because the first time I wore it the football team I support won. I just can think superstition drove that behavior because I certainly knew that no matter what cloth I wore the match result won't be affected by me. Yet it's still pretty interesting, even more with technology because we know that circuits are driven by physic's laws but no by god's laws, so it's pointless to lean to one side when the car is turning in a race game because it won't *turn better*.

But there should be something attached to a social heritage that makes us believe in magic. In certain cases it can be related with syncretism due the colonization and imposition of western culture over pre-colombus cultures in America –talking of America as continent. Probably –and I'm speculating with this– that magical heritage is what leads us to search rituals in foreign religions to fulfill a gap that determinism can't address.

## Week 3 - Meditation 1

### Background

According with Juan Fernando Rivera and his article *[El fútbol como ritual](https://cuadrivio.net/el-futbol-como-ritual/)*, football is a social phenomenon that can be clearly qualified as a ritual under Turner's definition of a ritual. When a football match is played, everyday life gets disrupted both for players, supporters, neighbors of the stadium, police. At the same time that the stadium is a defined temporal-space framework were symbolic gestures and words are uttered the attendants. Football itself is a ritual but the sub-ritual that mostly calls my attention is the ritual of supporting the team as a fan –surely because is the role I have played in the football ritual for the last 15 years.

<p align="center">
  <a href="https://www.youtube.com/watch?v=Akd6HyJMYJQ">
    <img src="http://img.youtube.com/vi/Akd6HyJMYJQ/0.jpg" align="middle" width="70%">
  </a>
</p>

In South America football plays a significant role in social dynamics –hardly understandable by other cultures– because in most of our countries football is a place where the left behind can find a shelter to express theirselves and where they can belong to. But these expressions are most of the time anger and hateful manifestations against an otherness – others which probably occupies the same place in the society but supports the arch-rival team. This has converted football into a dangerous ritual, where hooligans theft *brethren*, fight against the police and their rivals.

<p align="center">
  <a href="https://www.youtube.com/watch?v=6q_ztcTLF1Y&t=28">
    <img src="http://img.youtube.com/vi/6q_ztcTLF1Y/0.jpg" align="middle" width="70%">
  </a>
</p>

In the above video, supporters of the Argentinian team River Plate attack the bus in which the players of their rival team Boca Juniors are transported. This was December 2018 at the Final of the Copa Libertadores –the most important football championship in South America– which finally was suspended. As can be seen, River's supporters play a role in which they hate Boca's players and fans so much that they even can attack them.

### The Ritual

This ritual is about supporting a team and is called "Alentar al Colo" (Support Colo Colo). Attending a football match and supporting a team consists in a ritual in which the attendant is engaged with sort of ideology related with the team values and a bunch of prejudices and hateful links with supporters, players, and even workers of other teams. Football is most of the time a rude and macho space which reflects the violence, misogyny and economic segregation of the society in which it is experienced.

In this ritual the participant is invited to support Colo - Colo –the most popular Chilean football club in a match agains it's *arch-rival* Universidad de Chile. This match has a long history of violence which is expressed in the language that supporters use to refer opponent, full of misogynic terms related with the mother. But the ritual can only be successful if you don't use a violent, misogynic or homophobic language.

[Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) was used for the design of the ritual as a tool that allows to detect and write down the words are uttered by the ritual performer. The text was analyzed in terms of detecting if a banned word was said by the performer in order to decide if the ritual can be successfully completed. Additionally, by using the [Iframe API for YouTube](https://developers.google.com/youtube/iframe_api_reference) the video of the football match is displayed in the back of the screen in order to create the proper space-temporal conditions to perform the ritual.

As a ritual, it has not a clear effect in the real life space in which it is performed, but it can be called a banning-style ritual because can't be completed if some rule are violated, in this case the rule of not using a violent or misogynic language. I think it's important to remark that the way of building a better society by banning negative behaviors is not wrong, specially in the regard of discrimination of minorities by violent language usage.

<p align="center">
  <a href="https://vimeo.com/317116574">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_1/meditation1_cover.png" align="middle" width="70%">
  </a>
</p>

## Meditation 2: Generative Major Arcana Deck

### Introduction
Oracle decks for divination –Tarot among them– are symbolic frameworks that  provide diviners of a set of elements that can be used to build narratives, which are the divination ridings. These frameworks are based on the human process of cumulative learning on how to understand their environment, their feelings, their roles in the world, life, and death, etc. In certain way we can say oracles are symbols that inherently belong to human existentialism and can be understood by different cultures. Even, we can say some symbols are shared by different cultures.

From this idea, and attempting to address the querying of building my own deck, I decided to explore internet and more particularly *Google* as a source of a variety of symbolic representations of Tarot cards. We know internet is the great archive of our time –and the future–, and *Google* is the bigger archiving-service provider. In the process of searching information in the web we can find diverse symbols, some related and some non-related with the searched subject, and most of them *curated* by the provider's bias– which are part of the understanding process.

I decided to build an oracle deck based on the archived symbols of Tarot cards available on the internet, and particularly the symbols curated by *Google Images* –world's favorite bias provider. This symbols were afterwards used to feed an AI model that could analyze symbols and predict new ones. Let's think of AI as an algorithm that analyzes certain data in order to find patterns and then reproduce them, which can be proved with the symbolic composition of tarot. So, the hypothesis here is: as tarot cards are composed by iconic symbols, an AI algorithm can be able to create new symbols, and we can afterwards interpret them based on our cumulative knowledge and experience with these symbols. In order to make this experiment affordable, I limited the database only to the Major Arcana cards of a tarot deck.

The AI model chosen was Deep Convolutional Generative Adversarial Networks ([DCGAN](https://github.com/genekogan/DCGAN-tensorflow)), an unsupervised representation learning which attempts to understand patterns in data without pre-assigned labels that can attach names or categories to each element.


### Data gathering and cleaning
In order to train the a DC-GAN model that allowed to predict a generative Major Arcana Tarot deck, a big amount of data had to be collected. Each card was searched at *Google Images* and downloaded using he Chrome extension [Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj/related) which downloads all the thumbnails displayed in the page.

For data cleaning process non-tarot cards images were deleted, as well as tarot-related images that didn't represent deck cards. The final dataset comprised 3700 images all of them 128x128 pixels and RGB-jpg.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/05_assets/scrolling.gif" align="middle" width="70%">
</p>

### DC-GAN model training and samples generation
The model was trained following Gene Kogan's [tutorial](http://ml4a.github.io/classes/itp-F18/06/) (thanks Sofía for helping me) in a *Paperspace* Ubuntu 16.04 machine and using *Gradient*. After the training, 100 samples were generated with 64 images each which were used to build the final deck.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/05_assets/test_arange_0.png" align="middle" width="70%">
</p>

### Deck conformation and restoration (ESRGAN)
I inspected the 6,400 samples looking for symbols that could be recognized within the Major Arcana deck and labeled with the name of the original card I recognized by making a pre-selection. After that I defined a final Major Arcana deck entirely generated by AI, which were up-sized using an ESRGAN model in order to improve image quality and sharping shapes borders (of course this process added more bias as well). According to this process, an interesting question emerged during the in-class presentation, which was *what's the purpose of labeling incomprehensible generative symbols when the quest is to interpret a reinterpretation of the original ones?*. This is a key point that I'd like to explore further, because probably the necessity attaching generated symbols to a *deterministic* meaning may undermine the process of interpreting these new symbols during a tarot reading.

<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/00_the_fool.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/01_the_magician.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/02_the_high_priest.jpg" width="30%">
    <div align="middle">
      <p>The Fool / The Magician / The High Priest</p>
    </div>
</div>
<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/03_the_empress.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/04_the_emperor.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/05_the_hierophant.jpg" width="30%">
    <div align="middle">
      <p>The Empress / The Emperor / The Hierophant</p>
    </div>
</div>
<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/06_the_lovers.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/07_the_chariot.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/08_the_justice.jpg" width="30%">
    <div align="middle">
      <p>The Lovers / The Chariot / The Justice</p>
    </div>
</div>
<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/09_the_hermit.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/10_wheel_of_fortune.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/11_strength.jpg" width="30%">
    <div align="middle">
      <p>The Hermit / Wheel of Fortune / Strength</p>
    </div>
</div>
<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/12_the_hanged_man.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/13_death.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/14_temperance.jpg" width="30%">
    <div align="middle">
      <p>The Hanged Man / Death / Temperance</p>
    </div>
</div>
<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/15_the_devil.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/16_the_tower.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/17_the_star.jpg" width="30%">
    <div align="middle">
      <p>The Devil / The Tower / The Star</p>
    </div>
</div>
<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/18_the_moon.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/19_the_sun.jpg" width="30%">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/20_judgement.jpg" width="30%">
    <div align="middle">
      <p>The Moon / The Sun / Judgement</p>
    </div>
</div>
<div align="middle">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/04_final_deck_hires/21_the_world.jpg" width="30%">
    <div align="middle">
      <p>The World</p>
    </div>
</div>

## Meditation 3 - Weather predict-o-scope

The test Weather predict-o-scope please click [here](http://guillemontecinos.cl/projects/weather_predict/).

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_3/interface_demo.gif" align="middle" width="70%">
</p>

For this meditation, in which we had to invent an “-omancy,” or a form of divination/prophecy based on observing and interpreting natural events, I decided to inspire in a Chilean popular tradition for predicting "how the weather will come this year" by observing the weather of twelve first days of the year. Chilean countryside people are strongly religion and superstitions believers, they believe –for example– that the Devil shows up during Saint John's night, the same night in which you can learn to play guitar if you sit with a guitar under a fig tree. They say, as well, that seeing a dark circle around the sun may presage that an earthquake or a storm can come soon.

I'm interested in the idea of assigning supernatural attributes to natural elements as weather, a tree, the sun or the moon, and how they can affect people's life. The divinatory practice in which I'm inspired states that the weather of each month of a year can be predicted by observing the weather of the first 12 days of January (let's remember that Chile is in the South hemisphere, so seasons are inverted respect the US). This means that if January 1st and 2nd are cold, cloudy or rainy days, the rest of the summer –it means January and February– will be fresher than other years. In the same regard, if January 4th is a rainy day people would tend to believe that the rainy season –which should start in May– will come up early in April.

Furthermore, I'm strongly interested in how homeland –understood as the physical place of birth– may define a person culturally, and how that can affect a person behavior in other ways. For example it's fair to guess that political issues on the homeland can affect a person who lives abroad, so why not suppose that the current weather at the homeland can affect the mood of a person who lives abroad? Regarding the above I designed a divination system that predicts how the day of tomorrow will be for a querent based on tomorrows weather at the querent city of birth, highly inspired in newspaper tarot predictions (this is from the Chicago Sun, March 12th, 2019).

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_3/horoscope_chicago.png" align="middle" width="70%">
</p>

In order to make it possible I used a weather API called [OpenWeather](https://openweathermap.org/api) from which current weather and 5 day forecast can be reached. The logic of the system consists in querying the user its birthplace, then send a query to the API of the current and forecasted weather for the city submitted by the user, and then calculate the weather variation between now and tomorrow. For this, temperature (in ºKelvin) and cloudiness (in percentage) was used based on the following set of rules defined arbitrarily:

```
delta Tº > 1% and delta Clouds > 5%:
  weather will evolve positively

delta Tº < -1% and delta Clouds < -5%:
  weather will evolve positively

delta Tº < -1% and delta Clouds > 5%:
  weather will evolve negatively

delta Tº > 1% and delta Clouds < -5%:
  weather will evolve negatively

any other case:
  nothing will change
```

As can be guessed there are three possible states: tomorrow will be a good day, tomorrow will be a bad day, tomorrow will be an OK day. Finally, output predictions were built from these states by using a mad lib designed following an horoscope mood, and which was filled with nouns and positive, negative or neutral adjectives randomly picked from a set of words lists I collected from internet.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_3/mad_lib.png" align="middle" width="70%">
</p>

## Meditation 4 - Auto Self-medium
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
