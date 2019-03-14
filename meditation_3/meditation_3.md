# Meditation 3 - Weather predict-o-scope

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_3/interface_demo.gif" align="middle" width="70%">
</p>

I'm still working on documentation. The piece can be found [here](http://guillemontecinos.cl/projects/weather_predict/).

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

Finally, the
