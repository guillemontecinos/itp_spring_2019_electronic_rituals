# Meditation 2: Generative Major Arcana Deck

## Introduction
Oracle decks for divination –Tarot among them– are symbolic frameworks that  provide diviners of a set of elements that can be used to build narratives, which are the divination ridings. This framework is based on the human process of cumulative learning how to understand their environment, their feelings, their roles in the world, life, and death, etc. In certain way we can say oracles are symbols that inherently belong to human existentialism and can be understood by different cultures. Even, we can say some symbols are shared by different cultures.

From this idea of oracles as symbols, and attempting to address the querying of building my own deck, I decided to explore internet and more particularly *Google* as a source of a variety of symbolic representations of Tarot cards. We know internet is the great archive of our time –and the future–, because the existence of something can be supported by its existence in internet, and *Google* is the bigger provider of this archiving-service. In the process of searching information in the web we can find diverse symbols –related or non-related with the subject, and most of them *curated* by the provider's bias– which are part of the reality understanding process. This is what makes internet so important nowadays for me.

I decided to build an oracle deck based on the archived symbols of Tarot decks available in the internet, and particularly the symbols curated by *Google Images* –world's favorite bias provider. This symbols were afterwards used to feed an IA model that could analyze the symbols and predict new ones from them. I'd like to think of IA as an algorithm that analyzes certain data in order to find patterns and then reproduce them, which totally makes sense with the symbolic composition of tarot. So, the hypothesis here is: as tarot cards are composed by iconic symbols, an IA algorithm can be able to create new symbols from these, and we can interpret them based on our cumulative knowledge and experience with these symbols. In order to make this experiment affordable, I limited the base data only to the Major Arcana cards of a tarot deck.

The IA model chosen was Deep Convolutional Generative Adversarial Networks ([DCGAN](https://github.com/genekogan/DCGAN-tensorflow)), an unsupervised representation learning which attempts to understand patterns in data without pre-assigned labels that can attach names or categories to each element.


## Data gathering and cleaning
In order to train the a DC-GAN model that allowed to predict a generative Major Arcana Tarot deck, a big amount of data had to be collected. Each card was searched at *Google Images* and downloaded using he Chrome extension [Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj/related) which downloads all the thumbnails displayed in the page.

For data cleaning process non-tarot cards images were deleted, as well as tarot-related images that didn't represent deck cards. The final dataset comprised 3700 images all of them 128x128 pixels and RGB-jpg.

<p align="center">
  <a href="https://vimeo.com/317116574">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/assets/scrolling.gif" align="middle" width="70%">
  </a>
</p>

## DC-GAN model training and samples generation
The model was trained following Gene Kogan's [tutorial](http://ml4a.github.io/classes/itp-F18/06/) (thanks Sofía for helping me) in a *Paperspace* Ubuntu 16.04 machine and using *Gradient*. After the training, 100 samples were generated with 64 images each which were used to build the final deck.

<p align="center">
  <a href="https://vimeo.com/317116574">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/assets/test_arange_0.png" align="middle" width="70%">
  </a>
</p>

## Deck conformation and restoration (ESRGAN)

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
