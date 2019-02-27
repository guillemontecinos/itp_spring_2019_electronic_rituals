# Meditation 2: Generative Major Arcana Deck

## Introduction
## Data gathering and cleaning
In order to train the a DC-GAN model that allowed to predict a generative Major Arcana Tarot deck, a big amount of data had to be collected. Each card was searched at *Google Images* and downloaded using he Chrome extension [Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj/related) which downloads all the thumbnails displayed in the page.

<p align="center">
  <a href="https://vimeo.com/317116574">
    <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_2/05_assets/meditation_2_downloading.png" align="middle" width="30%">
  </a>
</p>

For data cleaning process non-tarot cards images were deleted, as well as tarot-related images that didn't represent deck cards. The final dataset comprised 3700 images all of them 128x128 pixels and RGB-jpg.

## DC-GAN model training
## Samples generation
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
