---
sidebar: auto
---

# Gripid ja trikid
_Kogumik ressursse, aitamaks virutada kuubikutele_

## Edetabelis tõusmise megajuhend
Imeline kirjutis TeknozFR poolt, mis aitab saada PPd. [Edetabeli ja skooride juhend](./ranking-guide)

## Skoor
Vaadake seda [Cube Community YT](https://www.youtube.com/channel/UCdG9zS8jVcQIKl7plwWXUkg) videot, mis selgitab, kuidas Beat Saberi skoorisüsteem töötab.

<YouTube url='https://www.youtube.com/watch?v=rVbXCGddspA' />

Lisaks, siin on pilt mängu arendajatelt [hitboxide](https://twitter.com/Split82/status/979365834324889600) töötamise kohta.

![Bloq Hitbox](~@images/mapping/hitbox-from-split.jpg)

## Edetabel
*Kuidas töötab ülemaailmne edetabel? Mis on performance pointid? Mida tähendavad mul numbrid sulgudes? Miks mu PP nii väike?*

Oma asukoha ülemaailmses edetabelis ja oma PP leiate [ScoreSaberist](https://scoresaber.com/global), otsides oma kasutajanime. Tere scoresaber konto on seotud teie Steami/Oculuse kasutajanimega.

1. Edetabelisse vastuvõetud lauludele määratakse PP väärtus (PP = performance points; ingl k soorituspunktid). Laulu mängimisest saadud PP hulk sõltub ka täpsusest (accuracy), millega edetabeli laulu läbisite. Kui palju PPd edetabeli laul väärt on, määrab kindlaks salajane algoritm, mille lõi Umbranox, meie Pandajumal.
2. Et vältida olukorda, kus osavamad mängijad mängivad hulgaliselt lihtsamaid laule, et hõlpsasti PPd saada, vähendatakse skoore kõverjoone põhjal. See kõverjoon on 0.965^(x-1), kus x on mõjutatava skoori asukoht mängija parimate skooride nimekirjas. Nt kui teie parim skoor on väärt 260PP, siis saategi selle eest 260 mõjutatud PPd, mis on 100% teie selle skoori bruto-PPst. Kui teie teine parim skoor on väärt 247 bruto-PPd, siis selle eest saate aga tegelikkuses 238 mõjutatud PPd. Näiteks siin on minu 4 parimat skoori, kus bruto-PP on kursiivkirjas ja mõjutatud PP on rasvases kirjas.

| Bruto-PP | Mõjutatud PP                 |
| -------- | ---------------------------- |
| 260pp    | **260pp** (100% bruto-PPst)  |
| 247pp    | **238pp** (96.5% bruto-PPst) |
| 246pp    | **229pp** (93.1% bruto-PPst) |
| 244pp    | **219pp** (89.9% bruto-PPst) |

3. Et tõusta edetabelis, saage skoore uutel lauludel, mis on väärt rohkem või umbes sama palju PPd, kui teie parimad skoorid. Kui teil pole enam järel uusi kõrge-PPlisi laule, mida mängida, proovige saada paremaid skoore oma edetabeli esimeste lehekülgede lauludel. Siin on [DuoVR tehtud](https://docs.google.com/spreadsheets/d/1ufWgF2tWS0gD3pIr0_d37EkIcmCrUy1x6hyzPEZDPNc/edit#gid=1775412672) tabel kõigist edetabeli lauludest ja nende PP-väärtustest. Seda nimekirja uuendatakse iga 24 tunni tagant.

Siin on [veel üks veebileht](https://duovr.github.io/BigPP/) DuoVR poolt, kus saate sisestada oma ScoreSaber'i profiili ja see näitab teile laule, mida võiksite mängida, et saada palju PPd.

*See osa artiklist on kohandatud Tek'i kirjutisest Kanada Beat Saber discord serveris.*

::: tip Mappe võtab edetabelisse vastu tiim [ScoreSaber'i Discordis](https://discord.gg/WpuDMwU). Võite jälgida sündmusi selles serveris, et näha toimuvaid muutusi! :::

## Gripid (haarded)
Cube Community on teinud mõned videod, kus näidatakse populaarsemaid grippe Oculus Touch kontrollerite (CV1) ja Vive Wandide jaoks.

### HTC Vive Wandid
<YouTube url='https://www.youtube.com/watch?v=G7x_wb7RrgU' />

![Vive Grips Guide](~@images/grips-and-tricks/vive-grips-guide.jpg)

### Oculus Rift
<YouTube url='https://www.youtube.com/watch?v=XFt90q69aEA' />

![Oculus Grips Guide](~@images/grips-and-tricks/oculus-grips-guide.jpg)

### Oculus Rift S ja Quest
Rift S'i ja Quest'i kontrollerite kohta pole veel videot tehtud, aga all võite näha mõningaid näiteid! ![Oculus Rift S/Quest Guide](~@images/grips-and-tricks/touch2-grips.jpg)

### Valve Index'i kontrollerid
Index'i kontrollerite kohta pole veel videot tehtud, aga võite leida mõningaid näiteid nende `#tips-and-grips` kanalis! [CC Discord](https://discord.gg/dwe8mbC)

### Oculus Quest 2
Quest 2 kontrollerite kohta pole veel videot tehtud, aga all võite näha mõningaid näiteid! ![Oculus Quest 2](~@images/grips-and-tricks/touch3-grips.jpg)

Vaadake Cube Community [Discord serveris](https://discord.gg/dwe8mbC) `#tips-and-grips` kanalit, et leida veel soovitusi ja näiteid. Palun pidage meeles, et igaühe mängustiil ja keha on erinev; kellegi teise grip ei pruugi funktsioneerida täpselt nii, nagu vajate. Ärge kartke eksperimenteerida, et leida, mis sobib just teile!

## Improve Vive controller tracking
Your body may be blocking one lighthouse from seeing one of your controllers. Here are some steps that may help improve tracking.

1. Move into the corner of your playspace.
2. Rotate your body 45 degrees so that your lighthouses can see both controllers.
3. Rotate the room within Beat Saber's settings to compensate, so that you appear facing forward within the game.

![Vive Tracking Help](~@images/grips-and-tricks/vive-tracking-help.gif)

This can apply to Oculus sensors too.

## Touch Controller Battery Disconnect
The force of your swings in Beat Saber can cause the spring in the touch controllers to compress and disconnect the battery for a brief moment. This is what happens when you see your saber lose positional tracking but still rotate in place. To alleviate this, ragesaq recommends adding extra springs inside the battery compartment to decrease the likelihood of battery disconnects happening, explained in this [Reddit post](https://www.reddit.com/r/oculus/comments/a2h7o4/psa_adding_an_additional_spring_to_the_battery/?st=JR9Q7OEZ&sh=a7a3d091)

## Also Consider
![Also Consider](~@images/grips-and-tricks/allow-adequate-room-around-you-during-game-play-put-on-27689465.png)
