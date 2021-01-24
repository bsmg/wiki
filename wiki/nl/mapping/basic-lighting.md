---
sidebar: auto
prev: ./basic-mapping.md
next: ./intermediate-lighting.md
description: Leer hoe je handmatig aan de slag gaat met het verlichten van je level!
---

# Basis verlichting
_Maak van Beat Saber een lichtere plek door je levels handmatig te verlichten_

* [Glossary of Terms](./glossary.md)
---
Elk level moet een soort verlichting hebben. Als je eenmaal de hulpmiddelen kent die tot je beschikking zijn, kan simpele handmatige verlichting erg gemakkelijk zijn. [This link](https://streamable.com/s/x7zj0/vrugyj) is a video example of very simple manual lighting  (Note: The example uses [Map Color Overrides](#map-color-overrides)). Je hoeft geen AaltopahWi of Skeelie te zijn om geweldige verlichting te maken!

## Soorten verlichting
De beschikbare lichttypes zijn consistent in elk van de ingebouwde spelomgevingen, ze kunnen zich in een andere positie bevinden of in sommige gevallen niet aanwezig zijn.
* **Center Lights:** Generally lights along the side of the track, underneath the track, and sometimes a chevron at the back of the track. Soms "Bottom/Back/Side" of "BBS" lichten genoemd.
* **Side/Top Lasers:** Sets of rotating lasers to the sides of the track or above/below the track, depending on which environment you’ve selected. Rotatie is ingesteld met behulp van de Laser Speed functie.
* **Back Lasers:** Static lasers, often in an “X” pattern at the back of the track, behind the chevron.
* **Ring Lights:** Lichten aan de binnenkant van de grote buitenringen die in bijna alle omgevingen draaien.
* **Ring Spins:** Gebruikt om beweging in de ringen te creëren. In environments with both an inner and an outer ring, rings spins rotate both rings together.
* **Ring Zooms:** Wordt gebruikt om de innerlijke ringen in en uit te zoomen in omgevingen die deze hebben. Heeft geen invloed op de buitenste ring.
* **Laser Speed:** Verandert de snelheid van de side laser rotaties van stationair (0) tot heel snel (20). Stel onafhankelijk in voor de rechter en de linker side lasers. Back top lasers bewegen niet. Laser speed is lineair waardoor **2** twee keer zo snel is als **1** en **5** vijf keer zo snel is als **1**.
* **Boost Event:** Verandert de licht kleuren tussen twee paar kleuren. Off gebruikt het eerste paar kleuren. On gebruikt het tweede paar (boost) kleuren. Er is geen fade of flash optie voor dit evenement.

## Verlichtingsevenementen
Elk type verlichting kan gebruik maken van vier verschillende verlichtingsevenementen.
* **On:** Zet een lamp aan die aan blijft totdat je een ander evenement type plaatst.
* **Off:** Het uitschakelen van een lamp kan evenveel of meer impact hebben dan als het aan aanzetten ervan.
* **Flash:** knippert feller dan een standaard "on" evenement en blijft aan totdat je een ander evenement type plaatst.
* **Fade:** knippert feller dan een standaard "on" evenement maar word langzaam minder fel en gaat dan uit.

::: warning OPMERKING  
Het is onmogelijk om de duur van een fade out te bepalen, of om een fade in te gebruiken met standaard verlichting. Aangepaste fade tijden vereisen Chroma, dit zal worden besproken in Geavanceerde Verlichting (binnenkort beschikbaar). :::

## Beste werkwijzen & technieken
> "De enige verkeerde verlichting is **GEEN** verlichting.... of een lichtmap."  
> ~ Skeelie


Goed verlichten is een kunst, wat betekent dat het veel subjectiever is dan het maken van levels. Er zijn relatief weinig beste werkwijzen om aan de slag te gaan, en eenvoudige handmatige verlichting is bijna onmogelijk om slecht te doen.

**TranquillizeMe** heeft een verlichtingstutorial gecreëerd, [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc), met details van handige verlichtingstechnieken en algemene tips voor verlichting.

::: warning NOTE  
Verlichtingsvoorbeelden zijn niet realistisch in de editors die nu beschikbaar zijn, dus het is belangrijk om deze vaak in het spel te bekijken. Zie [Het bekijken van jouw verlichting](#previewing-your-lights) voor sommige programma's die kunnen helpen. :::

### Sneltoetsen
Elke level-editor werkt anders met verlichting, dus zorg dat je de sneltoetsen leert kennen en hoe de plaatsingen werken in je eigen editor. Verlichtingsneltoetsen variëren per editor. Raadpleeg de gebruikershandleiding van jouw editor of lees de README of verwijs naar deze handige lijst [Cross-Editor Sneltoetsen](./editor-keybinds.md).

### Het toewijzen van verlichtingsevenementen
Level makers die hun eerste level verlichten moeten beginnen met het toewijzen van specifieke [verlichtingstypen](#lighting-types) aan specifieke instrumenten, en vanuit daar verder gaan een meer ervaring opdoen. Deze methode produceert meestal niet de meest opwindende shows, maar het is moeilijk om het verkeerd te doen. Misschien ziet het uit zoals dit:
- **Track Lights:** Bass of Kick Drum
- **Lasers:** Melodie
- **Ring Lights:** Synth A of Cymbals
- **Ring Zoom:** Synth B

Zodra dit type basisstructuur op zijn plek is en je comfortabeler bent met hoe alles werkt, kan je bedenken waar je misschien dingen wilt aanpassen om daar nadruk op te leggen. Het instellen van een strikt patroon is noodzakelijk om impact te creëren voor wanneer je een aanpassing maakt; als je alles accentueert, dan accentueer je niks (dit geld ook voor blokplaatsing!).

**Een voorbeeld van verlichting Mentor, LittleAsi**

> Normaal verlicht ik de melodie met alle drie de lasers (vocaal en instrumentaal op verschillende kleuren, of primaire instrumentaal en accenten op een andere kleur), drums op de ring lichten, en of bas of iets harmonisch zoals synths op de Bottom/back/Side (BBS) (soms een beetje veel omdat ze de BBS-intensiteit hebben verhoogd). Als de drums te betrokken zijn om alleen op de ringlichten te gaan of er is niets anders op zijn plaats voor de BBS, verplaats ik de kick drum naar BBS. Als de drums echt dominant zijn, doe ik soms de back-top laser op de snare om daarna de ringlichten aan de cymbals te wijden. De talrijke mogelijkheden voor het veranderen van lasergedrag en uiterlijk, maken ze echter de beste kandidaat voor het volgen van de melodie. Ik heb 0 snelheid lasers gebruikt voor gesloten hi-hat met verschillende snelheden voor open hi-hat en cymbal crashes, Maar het hoeft zeker geen specifieke manier te zijn (alleen intern samenhangend).

### Laser Speed Resets
Applying the same laser speed twice in a row will cause it to reset to a random position. For example, setting speed 1 on every snare hit will cause the laser positions to randomize in time with the snare without ever actually changing their rotation speed.

If you don't reset the laser speed it will continue to spin consistently at that speed until changed.

### Off Event Placement
The sounds within a song rarely have a precise end point so there's not always a "correct" time to place the `Off` event). Be aware of when you're choosing to turn lights associated with specific sounds or instruments off, and apply those decisions consistently throughout the song.

Be cautious about putting off events exactly in the middle of two lights as it can sometimes create an unintended strobing effect.

## Standaard Omgevingen
Er zijn verschillende ingebouwde omgevingen in Beat Saber die deel uitmaken van het basisspel en met een paar klikken eenvoudig kunnen worden gebruikt.

::: warning OPMERKING Aangepaste omgevingsmodellen (platforms) gemaakt door de community bestaan, maar vereisen de Custom Platforms mod die momenteel niet beschikbaar is via Mod Assistant. A beta version may be available in the `#pc-mods` channel of the BSMG Discord. :::

De basisstructuur van elke omgeving is meestal hetzelfde. In the [Mediocre Map Assistant 2](./mediocre-map-assistant.md) editor the lighting track looks like this:
<p align="center">
![Screenshot of the MMA2 lighting track from the top down](~@images/mapping/mma2-lighting-track.jpg)
</p>

### Omgevingsvoorbeelden
**Opmerking:** De onderstaande afbeeldingen zijn gemaakt met behulp van een programma genaamd ReShade, dat het contrast in post-processing verhoogt om de verlichting beter te laten lijken. Omgevingen verschijnen minder donker in-game.

|        Video en Schermafbeelding (klik om de volledige grootte te openen)        | Omgeving                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:--------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       ![Image of Default environment](~@images/mapping/default_env16.jpg)        | **The First (Default) Environment**<br />**Info.dat naam:** `DefaultEnvironment` <br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (vierkant)<br />**Inner Ring:** :white_check_mark: (vierkant)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/800xuq), [YouTube](https://youtu.be/FOmVUpD4zHU)                                                                                                                                                                |
|       ![Image of Origins environment](~@images/mapping/origins_env16.jpg)        | **Origins Environment**<br />**Info.dat naam:** `OriginsEnvironment`<br />**Standaard kleuren:** Gele & Roze blokken, Blauwe & Lichtblauwe verlichting<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark:<br />**Track Ring:** :white_check_mark:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br /> **Video voorbeeld:** [Streamable](https://streamable.com/itxr1l), [YouTube](https://youtu.be/i5MBTgNs0Ek)                                                                                                                                                                                                                                                                          |
|      ![Image of Triangle environment](~@images/mapping/triangle_env16.jpg)       | **Triangle Environment**<br />**Info.dat naam:** `TriangleEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (compacte vierkant) <br />**Inner Ring:** :white_check_mark: (driehoek)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/tbvqoq), [YouTube](https://youtu.be/ErRIYIGQKOQ)                                                                                                                                                                 |
|          ![Image of Nice environment](~@images/mapping/nice_env16.jpg)           | **Nice Environment**<br />**Info.dat naam:** `NiceEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (bovenkant & onderkant)<br />**Track Ring:** :white_check_mark: (cirkel)<br />**Inner Ring:** :white_check_mark: (vorm)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/jrxxeg), [YouTube](https://youtu.be/-kAv1420TXU)                                                                                                                                                                                  |
|    ![Image of Big Mirror environment](~@images/mapping/big-mirror_env16.jpg)     | **Big Mirror Environment**<br />**Info.dat naam:** `BigMirrorEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (vierkant)<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br />**Video voorbeeld:**  [Streamable](https://streamable.com/cdxujt), [YouTube](https://youtu.be/S3AQu8y5p2g)                                                                                                                                                                                                                                                                                  |
|   ![Image of Imagine Dragons environment](~@images/mapping/dragons_env16.jpg)    | **Imagine Dragons Environment**<br />**Info.dat naam:** `DragonsEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (vierkant)<br />**Inner Ring:** :white_check_mark: (helix)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Back Top Laser position zijn de twee rails aan de verre zijkanten van het scherm. Het zal altijd de tegenovergestelde kleur verlichten dan wat je ingesteld hebt. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/y5u7zv), [YouTube](https://youtu.be/HTtwhBxrlrw)                                                           |
|           ![Image of K/DA environment](~@images/mapping/kda_env16.jpg)           | **K/DA Environment**<br />**Info.dat naam:** `KDAEnvironment`<br />**Standaard kleuren:** Oranje & Paars<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Opmerking:** Ring Light position verlicht de vijf rails bovenin. De lichten in het midden van de pijlen gaan nooit uit. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/iuwenc), [YouTube](https://youtu.be/LigJdd2hpLI)                                                                                                                                                                                                     |
|    ![Image of Monstercat environment](~@images/mapping/monstercat_env16.jpg)     | **Monstercat Environment**<br />**Info.dat naam:** `MonstercatEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (vierkant)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers. Ring Licht position verlicht de vijf rails bovenin. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/g436ij), [YouTube](https://youtu.be/9qjDCkJw-ts)                                                                                                                          |
|     ![Image of Crab Rave environment](~@images/mapping/crab-rave_env16.jpg)      | **Crab Rave Environment**<br />**Info.dat naam:** `CrabRaveEnvironment`<br />**Standaard kleuren:** Groen & Blauw<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (vierkant)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers. Ring Licht position verlicht de vijf rails bovenin. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/qov023), [YouTube](https://youtu.be/6ygTsCX8Ey4)                                                                                                                            |
|  ![Image of Panic at the Disco! environment](~@images/mapping/panic_env16.jpg)   | **Panic at the Disco! Environment**<br />**Info.dat naam:** `PanicEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark: (& ramen)<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (helix)<br />**Inner Ring:** :white_check_mark: (helix)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Ring Lights zijn veel feller in deze omgeving dan in andere. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/tysyou), [YouTube](https://youtu.be/LBUW9mDupxE)                                                                                                                                                       |
|     ![Image of Rocket League environment](~@images/mapping/rocket_env16.jpg)     | **Rocket League Environment**<br />**Info.dat naam:** `RocketEnvironment`<br />**Standaard kleuren:** Oranje & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x: <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/t624jp), [YouTube](https://youtu.be/r8qO6IUg2Ww)                                                                                                                                                                                                                                                                                                                              |
|     ![Image of Green Day environment](~@images/mapping/green-day_env16.jpg)      | **Green Day Environment**<br />**Info.dat naam:** `GreenDayEnvironment`<br />**Standaard kleuren:** Groen & Cyaan<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (helix)<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Opmerking:** De "Green Day" tekst in het midden gaat nooit uit. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/o7x37v), [YouTube](https://youtu.be/LuYAEk9iWFw)                                                                                                                                                                                                                           |
| ![Image of Green Day Grenade environment](~@images/mapping/gd-grenade_env16.jpg) | **Green Day Grenade Environment**<br />**Info.dat naam:** `GreenDayGrenadeEnvironment`<br />**Standaard kleuren:** Groen & Cyaan<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x: <br />**Equalizer:** :x:<br />**Opmerking:** Het granaat en de "Green Day" tekst in het midden gaan nooit uit. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/wddtmm), [YouTube](https://youtu.be/DQHdUGx3UE0)                                                                                                                                                                                                                     |
|      ![Image of Timbaland environment](~@images/mapping/timbaland_env.jpg)       | **Timbaland Environment**<br />**Info.dat naam:** `TimbalandEnvironment`<br />**Standaard kleuren:** Grijze & Blauwe blokken, Blauwe lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (linker & rechter ringen)<br />**Track Ring:** :white_check_mark: (rechthoek)<br />**Inner Ring:** :white_check_mark: (rechthoek)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** De "Timbaland" tekst op de zijkanten gaan nooit uit. Laser speed beïnvloed de Back Top Lasers op de linker en rechter ringen. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/w6crs0), [YouTube](https://youtu.be/5cXX04umDsY)                                                          |
|        ![Image of FitBeat environment](~@images/mapping/fitbeat_env.jpg)         | **FitBeat Environment**<br />**Info.dat naam:** `FitBeatEnvironment`<br />**Standaard kleuren:** Gele & Roze blokken, Bruine & Grijze lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (buitenste lasers) <br />**Inner Ring:** :white_check_mark: (helix) <br />**Equalizer:** :white_check_mark: <br />**Opmerking:** Back Top Lasers zullen te tegenovergestelde kleur weergeven dan wat is ingesteld. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/1vqpmw), [YouTube](https://youtu.be/Y5CtZTpCcF4)                                                                                                        |
|    ![Image of Linkin Park environment](~@images/mapping/linkin-park_env.jpg)     | **Linkin Park Environment**<br />**Info.dat naam:** `LinkinParkEnvironment`<br />**Standaard kleuren:** Rode & Blauw-Grijze blokken, Beige & Witte lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x: <br />**Inner Ring:** :x: <br />**Equalizer:** :white_check_mark: (op de zijmuur) <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/7xzwoz), [YouTube](https://youtu.be/I8tzKUI0xZ0)                                                                                                                                                                                                                                                     |
|          ![Image of BTS Park environment](~@images/mapping/bts_env.jpg)          | **BTS Environment**<br />**Info.dat naam:** `BTSEnvironment`<br />**Standaard kleuren:** Roze & Paarse blokken, Roze & Paarse lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (achtergrond pillaren) <br />**Inner Ring:** :white_check_mark: (track pillaren) <br />**Equalizer:** :x: <br />**Opmerking:** Het BTS logo in het midden gaat nooit uit.<br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/vo5x93), [YouTube](https://youtu.be/WOVRxc3lydI)                                                                                                                                                            |
|  ![Image of Glass Desert environment](~@images/mapping/glass-desert_env16.jpg)   | **Glass Desert Environment**<br />**Info.dat naam:** `GlassDesertEnvironment`<br />**Standaard kleuren:**  Gele & Roze blokken, Blauwe & Lichtblauwe lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: <br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Dit is de eerste 360&deg; omgeving. 360 levels MOETEN dit gebruiken en het is niet te gebruiken voor standaard levels. Ring Light position controleert de horizontale buitenste rails. Back Top Laser position controleert de zes rails aan de bovenkant. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/cnie5j), [YouTube](https://youtu.be/Nh6kSjobYB0) |

### Stel je omgeving in
Nieuwe standaard omgevingen worden redelijk vaak beschikbaar gemaakt, wat betekent dat level editors niet altijd de volledige lijst beschikbaar hebben. Als de omgeving die je wilt gebruiken geen optie is in de instellingen van je favoriete editor, moet je je `info.dat` bestand bewerken om de omgevingsnaam toe te voegen.

1. Bepaal welke omgeving je wilt gebruiken en kopieer vervolgens de `Info.dat naam` uit [omgevingsvoorbeelden](#omgevingsvoorbeelden) hierboven.
2. Open je `Info.dat` bestand in een tekst bewerker naar keuze.
3. Scroll naar beneden naar de `"_environmentName":` sectie.
4. Plak de naam die je gekopieerd hebt in stap 1.

> **LET OP:** Je kan geen custom platform gebruiken in dit veld. Dit wordt besproken in [Geavanceerde verlichting](./advanced-lighting.md#custom-environments).

## Map Color Overrides
You can force your own map color scheme in-game as long as the user has the SongCore mod installed and has enabled the `Enable Custom Song Colors` option in the mod settings.

Since Beat Saber version 1.4, users can set the Red/Green/Blue (RGB) colors of notes, lights, and walls for their game. However, they will be overridden with the colors defined in the `Info.dat` if the user has the `Enable Custom Song Colors` option enabled.

:::tip When choosing color overrides for the notes. It is **HIGHLY** recommended that you keep reddish/warm/aggressive colors on the left and blueish/cold/soft colors on the right to avoid confusing players. :::

See [Environment Default Colours](./lighting-defaults.md) for a list of default colors used in the environments.

[BeatMapper](./#beatmapper-app), [ChroMapper](./#chromapper-coming-soon), and [MMA2](./#mediocre-map-assistant-2) natively support color overrides. Check their respective guides for more information.

### Manually Adding Color Overrides
1. Bepaal welke RGB-kleuren jij jouw blokken en/of verlichting en/of muren wilt laten zijn zijn. Gebruik een kleurenschema programma zoals [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) om complementaire kleuren te vinden.
    * Jouw rood, groen en blauw waarden moeten worden veranderd van de normale 0-255 schaal naar de 0-1 schaal. Gebruik een site zoals [EasyRGB](https://www.easyrgb.com/en/convert.php) om jouw waarden te veranderen.
2. Open je `Info.dat` bestand in een tekst bewerker naar keuze
3. Scroll naar beneden naar de `"_customData": {` sectie van het niveau dat je wilt kleuren.
    * In het gebruik van de globale `"_customData": {` buiten de `"_difficultyBeatmapSets": [` reeks werkt mogelijk niet zoals verwacht.
4. Plak de codeblokken hieronder die je wilt forceren in de `_customData` accolades (`{` en `}`) en vervang vervolgens de `"r":`, `"g":`, en `"b":` waarden met wat je hebt gekozen in stap 1.
    * De `"r":` en `"g":` waarden **moeten** komma's hebben erna.

See lines 29-60 and 69-100 of this [Pastebin clip](https://pastebin.com/x9zEiHxR) for an example of these code blocks in action in a `.DAT` file.

## Jouw verlichting bekijken
These tools will help PC Beat Saber users preview their lighting more accurately. Most editors do not show true-to-life lighting effects.

### In-game met FPFC
First Person Flying Controller (FPFC) is a launch parameter that can be used by either Steam or Oculus users. FPFC will open an instance of Beat Saber on your desktop and allow you to control it with your keyboard and mouse. You will need the SiraUtil mod in order to interact while a map is playing.

It allows you to use WASD to "fly" around in your map, open the pause menu by hitting the <kbd>F2</kbd> key, or exit your level by hitting the <kbd>ESC</kbd> key (otherwise you must play your song to completion).

Install SiraUtil from ModAssistant and run Beat Saber to create a config json file. Edit the `SiraUtil.json` file in your `UserData` folder and change `"Enabled": false` to `"Enabled": true` under FPFCToggle and SongControl then follow the store platform specific steps below.  
![SiraUtil JSON Setting](~@images/mapping/sirautil-FPFC.png)

**For Steam Users:**   
Open the game properties and add `fpfc` to the Steam launch options.   
![Fpfc launch options](~@images/mapping/fpfc.png)

**For Oculus Users:**
1. Rechtsklik op Beat Saber.exe en maak een snelkoppeling.
2. Bewerk het doel en voeg "fpfc" toe aan het einde ervan. Bijv: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

After installing the mods and adding the launch parameter you can then now move around and pause in a map. The toggle key to switch between headset and mouse/keyboard control is <kbd>G</kbd>.

:::warning NOTE
- Als je weer in vr gaat en het spel niet laadt in de bril:
  - Druk op de <kbd>G</kbd> toets totdat de bril het spel weergeeft  
    **==OF==**
  - Sluit het spel, verwijder de startparameter en start het spel opnieuw.

- Als de mod niet lijkt te werken, zorg er dan voor dat de in-game Smooth camera instelling is uitgeschakeld. :::

### Online met BS Viewer
[BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit** is an online tool that is a convenient way to checkout how your map might look in game without the game. Just upload your map zip to the website and preview! Unfortunately **IOS and Safari are currently not supported.**

## Bijdragen
Content in this section was authored by [LittleAsi](./mapping-credits.md#littleasi) and [Kolezan](./mapping-credits.md#kolezan) or derived from guides by [Puds](./mapping-credits.md#puds) and [MandyNasty](./mapping-credits.md#mandynasty). With visual media contributions from [Aeroluna](./mapping-credits.md#aeroluna) and [Bullet](./mapping-credits.md#bullet).
