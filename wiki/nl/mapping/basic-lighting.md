---
sidebar: auto
prev: ./basic-mapping.md
next: ./intermediate-lighting.md
description: Leer hoe je handmatig aan de slag gaat met het verlichten van je level!
---

# Basis verlichting
_Maak van Beat Saber een lichtere plek door je levels handmatig te verlichten._

* [Woordenlijst](./glossary.md)

---

Elk level moet een soort verlichting hebben. Als je eenmaal de hulpmiddelen kent die tot je beschikking zijn, kan simpele handmatige verlichting erg gemakkelijk zijn. [Deze link](https://streamable.com/s/x7zj0/vrugyj) is een videovoorbeeld van zeer eenvoudige handmatige verlichting.

::: tip OPMERKING Het voorbeeld gebruikt [Map Color Overrides](#map-color-overrides). Je hoeft geen AaltopahWi of Skeelie te zijn om geweldige verlichting te maken! :::

## Soorten verlichting
De beschikbare lichttypes zijn consistent in elk van de ingebouwde spelomgevingen, ze kunnen zich in een andere positie bevinden of in sommige gevallen niet aanwezig zijn.

* **Center Lights:** Over het algemeen verlichting aan de zijkant van het spoor, onder het spoor, en soms de chevron aan het eind van het spoor. Soms "Bottom/Back/Side" of "BBS" lichten genoemd.
* **Side/Top lasers:** Set van roterende lasers aan de zijkanten van het spoor of boven/onder het spoor, afhankelijk van de omgeving dat je hebt geselecteerd. Rotatie is ingesteld met behulp van de Laser Speed functie.
* **Back Lasers:** Statische lasers, vaak in een "X" patroon aan het eind van het spoor, achter de chevron.
* **Ring Lights:** Lichten aan de binnenkant van de grote buitenringen die in bijna alle omgevingen draaien.
* **Ring Spins:** Gebruikt om beweging in de ringen te creëren. In omgevingen met zowel een binnenste als een buitenste ring draaien de ring spins beide ringen tegelijkertijd.
* **Ring Zooms:** Wordt gebruikt om de innerlijke ringen in en uit te zoomen in omgevingen die deze hebben. Heeft geen invloed op de buitenste ring.
* **Laser Speed:** Verandert de snelheid van de side laser rotaties van stationair (0) tot heel snel (20). Stel het onafhankelijk in voor de rechter en de linker side lasers. Back top lasers bewegen niet. Laser speed is lineair waardoor **2** twee keer zo snel is als **1** en **5** vijf keer zo snel is als **1**.
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

::: warning OPMERKING   
Verlichtingsvoorbeelden zijn niet realistisch in de editors die nu beschikbaar zijn, dus het is belangrijk om deze vaak in het spel te bekijken. Zie [Het bekijken van jouw verlichting](#previewing-your-lights) voor sommige programma's die kunnen helpen. :::

### Sneltoetsen
Elke level-editor werkt anders met verlichting, dus zorg dat je de sneltoetsen leert kennen en hoe de plaatsingen werken in je eigen editor. Verlichtingsneltoetsen variëren per editor. Raadpleeg de gebruikershandleiding van jouw editor of lees de README of verwijs naar deze handige lijst [Cross-Editor Sneltoetsen](./editor-keybinds.md).

### Het toewijzen van verlichtingsevenementen
Level makers die hun eerste level verlichten moeten beginnen met het toewijzen van specifieke [verlichtingstypen](#lighting-types) aan specifieke instrumenten, en vanuit daar verder gaan een meer ervaring opdoen. Deze methode produceert meestal niet de meest opwindende shows, maar het is moeilijk om het verkeerd te doen. Het ziet er misschien uit als:

* **Track Lights:** Bass of Kick Drum
* **Lasers:** Melodie
* **Ring Lights:** Synth A of Cymbals
* **Ring Zoom:** Synth B

Zodra dit type basisstructuur op zijn plek is en je comfortabeler bent met hoe alles werkt, kan je bedenken waar je misschien dingen wilt aanpassen om daar nadruk op te leggen. Het instellen van een strikt patroon is noodzakelijk om impact te creëren voor wanneer je een aanpassing maakt; als je alles accentueert, dan accentueer je niks (dit geld ook voor blokplaatsing!).

#### Een voorbeeld van verlichtingsmentor, LittleAsi
> Normaal verlicht ik de melodie met alle drie de lasers (vocaal en instrumentaal op verschillende kleuren, of primaire instrumentaal en accenten op een andere kleur), drums op de ring lichten, en of bas of iets harmonisch zoals synths op de Bottom/back/Side (BBS) (soms een beetje veel omdat ze de BBS-intensiteit hebben verhoogd). Als de drums te betrokken zijn om alleen op de ringlichten te gaan of er is niets anders op zijn plaats voor de BBS, verplaats ik de kick drum naar BBS. Als de drums echt dominant zijn, doe ik soms de back-top laser op de snare om daarna de ringlichten aan de cymbals te wijden. De talrijke mogelijkheden voor het veranderen van lasergedrag en uiterlijk, maken ze echter de beste kandidaat voor het volgen van de melodie. Ik heb 0 snelheid lasers gebruikt voor gesloten hi-hat met verschillende snelheden voor open hi-hat en cymbal crashes, Maar het hoeft zeker geen specifieke manier te zijn (alleen intern samenhangend).

### Laser Speed Resetten
Dezelfde laser speed twee keer op rij instellen zal ervoor zorgen dat deze wordt gereset naar een willekeurige positie. Bijvoorbeeld, de speed instellen op 1 voor elke snare hit zal ervoor zorgen dat de laser posities willekeurig worden gepaald zonder dat ze ooit hun rotatie snelheid veranderen.

Als je de laser speed niet reset, zal het voor altijd blijven draaien met die snelheid totdat het veranderd word.

### Off Event plaatsing
De geluiden binnen een liedje hebben zelden een precies eindpunt, dus er is niet altijd een "juiste" tijd om het `Off` evenement te plaatsen. Wees er van bewust wanneer je ervoor kiest om de lichten die zijn gekoppeld aan specifieke geluiden of instrumenten uit te zetten, en pas dit consistent toe tijdens het lied.

Wees voorzichtig met het plaatsen van off evenementen precies tussen twee lichten in, omdat dit een onbedoeld stroboscoop effect kan veroorzaken.

## Standaard Omgevingen
Er zijn verschillende ingebouwde omgevingen in Beat Saber die deel uitmaken van het basisspel en met een paar klikken eenvoudig kunnen worden gebruikt.

::: warning OPMERKING Aangepaste omgevingsmodellen (platforms) gemaakt door de community bestaan, maar vereisen de Custom Platforms mod die momenteel niet beschikbaar is via Mod Assistant. Er kan een bèta versie beschikbaar zijn in het `#pc-mods` kanaal van de BSMG Discord. :::

De basisstructuur van elke omgeving is meestal hetzelfde. In de [Mediocre Map Assistant 2](./mediocre-map-assistant.md) editor ziet het lichtspoor er als volgt uit:

::: align center ![Screenshot of the MMA2 lighting track from the top down](~@images/mapping/mma2-lighting-track.jpg) :::

### Omgevingsvoorbeelden
|             Video en Schermafbeelding (klik om de volledige grootte te openen)             | Omgeving                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         ![Afbeelding van de standaard omgeving](~@images/mapping/default_env.jpg)          | **The First (Default) Environment**<br />**Info.dat naam:** `DefaultEnvironment` <br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (vierkant)<br />**Inner Ring:** :white_check_mark: (vierkant)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/800xuq), [YouTube](https://youtu.be/FOmVUpD4zHU)                                                                                                                                                                |
|          ![Afbeelding van de Origins omgeving](~@images/mapping/origins_env.jpg)           | **Origins Environment**<br />**Info.dat naam:** `OriginsEnvironment`<br />**Standaard kleuren:** Gele & Roze blokken, Blauwe & Lichtblauwe verlichting<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark:<br />**Track Ring:** :white_check_mark:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br /> **Video voorbeeld:** [Streamable](https://streamable.com/itxr1l), [YouTube](https://youtu.be/i5MBTgNs0Ek)                                                                                                                                                                                                                                                                          |
|         ![Afbeelding van de Triangle omgeving](~@images/mapping/triangle_env.jpg)          | **Triangle Environment**<br />**Info.dat naam:** `TriangleEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (compacte vierkant) <br />**Inner Ring:** :white_check_mark: (driehoek)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/tz1s60), [YouTube](https://youtu.be/qGeZtlyXpZk)                                                                                                                                                                 |
|             ![Afbeelding van de Nice omgeving](~@images/mapping/nice_env.jpg)              | **Nice Environment**<br />**Info.dat naam:** `NiceEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (bovenkant & onderkant)<br />**Track Ring:** :white_check_mark: (cirkel)<br />**Inner Ring:** :white_check_mark: (vorm)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/jrxxeg), [YouTube](https://youtu.be/-kAv1420TXU)                                                                                                                                                                                  |
|       ![Afbeelding van de Big Mirror omgeving](~@images/mapping/big-mirror_env.jpg)        | **Big Mirror Environment**<br />**Info.dat naam:** `BigMirrorEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (vierkant)<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br />**Video voorbeeld:**  [Streamable](https://streamable.com/euojzp), [YouTube](https://youtu.be/TUt9aJ5yNTA)                                                                                                                                                                                                                                                                                  |
|      ![Afbeelding van de Imagine Dragons omgeving](~@images/mapping/dragons_env.jpg)       | **Imagine Dragons Environment**<br />**Info.dat naam:** `DragonsEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (vierkant)<br />**Inner Ring:** :white_check_mark: (helix)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Back Top Laser position zijn de twee rails aan de verre zijkanten van het scherm. Het zal altijd de tegenovergestelde kleur verlichten dan wat je ingesteld hebt. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/a0rw2o), [YouTube](https://youtu.be/L-9gTWGY_FQ)                                                           |
|              ![Afbeelding van de K/DA omgeving](~@images/mapping/kda_env.jpg)              | **K/DA Environment**<br />**Info.dat naam:** `KDAEnvironment`<br />**Standaard kleuren:** Oranje & Paars<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Opmerking:** Ring Light position verlicht de vijf rails bovenin. De lichten in het midden van de pijlen gaan nooit uit. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/dibv17), [YouTube](https://youtu.be/ZWfZQfx5MqY)                                                                                                                                                                                                     |
|       ![Afbeelding van de Monstercat omgeving](~@images/mapping/monstercat_env.jpg)        | **Monstercat Environment**<br />**Info.dat naam:** `MonstercatEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (vierkant)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers. Ring Licht position verlicht de vijf rails bovenin. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/9g84m6), [YouTube](https://youtu.be/QSYw41_1EmM)                                                                                                                          |
|        ![Afbeelding van de Crab Rave omgeving](~@images/mapping/crab-rave_env.jpg)         | **Crab Rave Environment**<br />**Info.dat naam:** `CrabRaveEnvironment`<br />**Standaard kleuren:** Groen & Blauw<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (vierkant)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Sinds 1.6 zijn Back Top Lasers onder de Track Lasers. Ring Licht position verlicht de vijf rails bovenin. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/5d46nv), [YouTube](https://youtu.be/AAPtI8SAE6s)                                                                                                                            |
| ![Afbeelding van de Panic at the Disco! omgeving omgeving](~@images/mapping/panic_env.jpg) | **Panic at the Disco! Environment**<br />**Info.dat naam:** `PanicEnvironment`<br />**Standaard kleuren:** Rood & Blauw<br />**Center Lighting:** :white_check_mark: (& ramen)<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (helix)<br />**Inner Ring:** :white_check_mark: (helix)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Ring Lights zijn veel feller in deze omgeving dan in andere. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/8lvbda), [YouTube](https://youtu.be/hOhOFgvxSrU)                                                                                                                                                       |
|        ![Afbeelding van de Rocket League omgeving](~@images/mapping/rocket_env.jpg)        | **Rocket League Environment**<br />**Info.dat naam:** `RocketEnvironment`<br />**Standaard kleuren:** Oranje & Blauw<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x: <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/t624jp), [YouTube](https://youtu.be/r8qO6IUg2Ww)                                                                                                                                                                                                                                                                                                                              |
|        ![Afbeelding van de Green Day omgeving](~@images/mapping/green-day_env.jpg)         | **Green Day Environment**<br />**Info.dat naam:** `GreenDayEnvironment`<br />**Standaard kleuren:** Groen & Cyaan<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (helix)<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Opmerking:** De "Green Day" tekst in het midden gaat nooit uit. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/npgn2p), [YouTube](https://youtu.be/jkaeINyLMo0)                                                                                                                                                                                                                           |
|    ![Afbeelding van de Green Day Grenade omgeving](~@images/mapping/gd-grenade_env.jpg)    | **Green Day Grenade Environment**<br />**Info.dat naam:** `GreenDayGrenadeEnvironment`<br />**Standaard kleuren:** Groen & Cyaan<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x: <br />**Equalizer:** :x:<br />**Opmerking:** Het granaat en de "Green Day" tekst in het midden gaan nooit uit. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/ew43z1), [YouTube](https://youtu.be/ocnD-WdrrOw)                                                                                                                                                                                                                     |
|        ![Afbeelding van de Timbaland omgeving](~@images/mapping/timbaland_env.jpg)         | **Timbaland Environment**<br />**Info.dat naam:** `TimbalandEnvironment`<br />**Standaard kleuren:** Grijze & Blauwe blokken, Blauwe lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (linker & rechter ringen)<br />**Track Ring:** :white_check_mark: (rechthoek)<br />**Inner Ring:** :white_check_mark: (rechthoek)<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** De "Timbaland" tekst op de zijkanten gaan nooit uit. Laser speed beïnvloed de Back Top Lasers op de linker en rechter ringen. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/2fjejm), [YouTube](https://youtu.be/vLYybHUh5Nw)                                                          |
|          ![Afbeelding van de FitBeat omgeving](~@images/mapping/fitbeat_env.jpg)           | **FitBeat Environment**<br />**Info.dat naam:** `FitBeatEnvironment`<br />**Standaard kleuren:** Gele & Roze blokken, Bruine & Grijze lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (buitenste lasers) <br />**Inner Ring:** :white_check_mark: (helix) <br />**Equalizer:** :white_check_mark: <br />**Opmerking:** Back Top Lasers zullen te tegenovergestelde kleur weergeven dan wat is ingesteld. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/75sxr3), [YouTube](https://youtu.be/FA0ZjR1_3LA)                                                                                                        |
|      ![Afbeelding van de Linkin Park omgeving](~@images/mapping/linkin-park_env.jpg)       | **Linkin Park Environment**<br />**Info.dat naam:** `LinkinParkEnvironment`<br />**Standaard kleuren:** Rode & Blauw-Grijze blokken, Beige & Witte lichten, oranje & blauwe boost lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :x: <br />**Inner Ring:** :x: <br />**Equalizer:** :white_check_mark: (op de zijmuur) <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/7xzwoz), [YouTube](https://youtu.be/I8tzKUI0xZ0)                                                                                                                                                                                                                      |
|              ![Afbeelding van de BTS omgeving](~@images/mapping/bts_env.jpg)               | **BTS Environment**<br />**Info.dat naam:** `BTSEnvironment`<br />**Standaard kleuren:** Roze & Paarse blokken, Roze & Paarse lichten, licht roze & licht blauwe boost lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (achtergrond pillaren) <br />**Inner Ring:** :white_check_mark: (track pillaren) <br />**Equalizer:** :x: <br />**Opmerking:** Het BTS logo in het midden gaat nooit uit.<br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/vo5x93), [YouTube](https://youtu.be/WOVRxc3lydI)                                                                                                                   |
|     ![Afbeelding van de Kaleidoscope omgeving](~@images/mapping/kaleidoscope_env.jpg)      | **Kaleidoscope Environment**<br />**Info.dat Naam:** `KaleidoscopeEnvironment`<br />**Standaard kleuren:**  Rode & Zwarte blokken, Rode & Witte lichten, Rode & Magenta boost lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: <br />**Track Ring:** :white_check_mark:<br />**Inner Ring:** :white_check_mark:<br />**Equalizer:** :x:<br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/ru9urj), [YouTube](https://youtu.be/RQDHRyJEU64)                                                                                                                                                                                                                                            |
|     ![Afbeelding van de Glass Desert omgeving](~@images/mapping/glass-desert_env.jpg)      | **Glass Desert Environment**<br />**Info.dat naam:** `GlassDesertEnvironment`<br />**Standaard kleuren:**  Gele & Roze blokken, Blauwe & Lichtblauwe lichten<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: <br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark:<br />**Opmerking:** Dit is de eerste 360&deg; omgeving. 360 levels MOETEN dit gebruiken en het is niet te gebruiken voor standaard levels. Ring Light position controleert de horizontale buitenste rails. Back Top Laser position controleert de zes rails aan de bovenkant. <br /><br />**Video voorbeeld:** [Streamable](https://streamable.com/8hlr6x), [YouTube](https://youtu.be/WGSxgVvazNM) |

### Stel je omgeving in
Nieuwe standaard omgevingen worden redelijk vaak beschikbaar gemaakt, wat betekent dat level editors niet altijd de volledige lijst beschikbaar hebben. Als de omgeving die je wilt gebruiken geen optie is in de instellingen van je favoriete editor, moet je je `info.dat` bestand bewerken om de omgevingsnaam toe te voegen.

1. Bepaal welke omgeving je wilt gebruiken en kopieer vervolgens de `Info.dat naam` uit [omgevingsvoorbeelden](#omgevingsvoorbeelden) hierboven.
2. Open jouw `Info.dat` bestand in een tekst bewerker naar keuze.
3. Scroll naar beneden naar de `"_environmentName":` sectie.
4. Plak de naam die je gekopieerd hebt in stap 1.

> **LET OP:** Je kan geen custom platform gebruiken in dit veld. Dit wordt besproken in [Geavanceerde verlichting](./advanced-lighting.md#custom-environments).

## Map color overrides
Je kunt je eigen level-kleurenschema forceren in het spel, zolang de gebruiker de SongCore mod geïnstalleerd heeft en de `Enable Custom Song Colors` optie in de mod instellingen aan heeft.

Sinds Beat Saber versie 1.4 kunnen gebruikers de Rood/Groen/Blauw (RGB) kleuren van blokken, verlichting en muren voor hun spel instellen. Maar, deze worden overgeschreven met de kleuren die gedefinieerd zijn in het `Info.dat` bestand als de gebruiker de `Enable Custom Song Colors` optie aan heeft.

::: tip Bij het kiezen van color overrides voor de blokken. Het is **STERK** aanbevolen dat je rode/warme/agressieve kleuren aan de linkerkant en blauwe/koude/zachte kleuren aan de rechterkant houdt om verwarring van de spelers te voorkomen. :::

Zie [standaard omgevingskleuren](./lighting-defaults.md) voor een lijst van standaard kleuren die in de omgevingen worden gebruikt.

[Beatmapper](./#beatmapper-app), [ChroMapper](./#chromapper-coming-soon), en [MMA2](./#mediocre-map-assistant-2) ondersteunen color overrides. Bekijk hun respectievelijke gidsen voor meer informatie.

### Color overrides handmatig toevoegen

1. Bepaal welke RGB-kleuren jij jouw blokken en/of verlichting en/of muren wilt laten zijn. Gebruik een kleurenschema programma zoals [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) om complementaire kleuren te vinden.
   * Jouw rood, groen en blauw waarden moeten worden veranderd van de normale 0-255 schaal naar de 0-1 schaal. Gebruik een site zoals [EasyRGB](https://www.easyrgb.com/en/convert.php) om jouw waarden te veranderen.
2. Open jouw `Info.dat` bestand in een tekst bewerker naar keuze.
3. Scroll naar beneden naar de `"_customData": {` sectie van het niveau waar je een kleur aan wilt geven.
    * Het gebruik van de globale `"_customData": {` buiten de `"_difficultyBeatmapSets": [` reeks werkt mogelijk niet zoals verwacht.
4. Plak de codeblokken hieronder die je wilt forceren in de `_customData` accolades (`{` en `}`) en vervang vervolgens de `"r":`, `"g":`, en `"b":` waarden met wat je hebt gekozen in stap 1.
   * De `"r":` en `"g":` waarden **moeten** komma's hebben erna.

Zie de lijnen 29-60 en 69-100 van deze [Pastebin clip](https://pastebin.com/x9zEiHxR) voor een voorbeeld van deze codeblokken in actie in een `.DAT` bestand.

## Jouw verlichting bekijken
Deze programma's zullen ervoor zorgen dat PC Beat Saber gebruikers hun verlichting nauwkeuriger kunnen bekijken. De meeste editors laten geen levensechte verlichtingseffecten zien.

### In-game met FPFC
First Person Flying Controller (FPFC) is een startparameter wat gebruikt kan worden door Steam of Oculus gebruikers. FPFC opent Beat Saber op je computer en laat je het besturen met je toetsenbord en muis. Je hebt de SiraUtil mod nodig om te kunnen bewegen terwijl een level speelt.

Hiermee kun je WASD gebruiken om rond te "vliegen" in je level, het pauze menu openen door op de <kbd>F2</kbd> toets te drukken, of je level verlaten door op de <kbd>ESC</kbd> toets te drukken (anders moet je wachten tot het eind van het nummer).

Installeer SiraUtil met Mod Assistant en start Beat Saber om een configuratie .json bestand aan te maken. Bewerk het `SiraUtil.json` bestand in jouw `UserData` map en verander `"Enabled": false` naar `"Enabled": true` onder FPFCToggle en SongControl en volg vervolgens de platform specifieke stappen hieronder.

![SiraUtil JSON instelling](~@images/mapping/sirautil-FPFC.png)

**Voor Steam gebruikers:**

Open de spel eigenschappen en voeg `fpfc` toe aan de Steam start opties in het "Algemeen" tabblad. ![FPFC lanceringeninstellingen](~@images/mapping/fpfc.png)

**Voor Oculus gebruikers:**

1. Rechtsklik op Beat Saber.exe en maak een snelkoppeling.
2. Bewerk het doel en voeg "fpfc" toe aan het einde ervan. Bijv: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`.

Na het installeren van de mods en het toevoegen van het startparameter kan je nu bewegen en pauzeren in een level. De knop om te wisselen tussen bril- en muis/toetsenbord bediening is <kbd>G</kbd>.

:::warning OPMERKING

* Als je weer in vr gaat en het spel laadt niet in de bril:
  * Druk op de <kbd>G</kbd> toets totdat de bril het spel weergeeft.   
    **==OF==**
  * Sluit het spel, verwijder de startparameter en start het spel opnieuw.

* Als de mod niet lijkt te werken, zorg er dan voor dat de in-game Smooth camera instelling is uitgeschakeld. :::

### Online met BS Viewer
[BS Viewer](https://skystudioapps.com/bs-viewer/) van **+1 Rabbit** is een handige manier om te zien hoe je level er ongeveer uit gaat zien in het spel. Upload je level zip naar de website en bekijk het voorbeeld! Helaas ** zijn IOS en Safari momenteel niet ondersteund.**

## Bijdragen
Inhoud in deze sectie werd geschreven door [LittleAsi](./mapping-credits.md#littleasi) en [Kolezan](./mapping-credits.md#kolezan) of afgeleid van handleidingen van [Puds](./mapping-credits.md#puds) en [MandyNasty](./mapping-credits.md#mandynasty). Met visuele media-bijdragen van [Aeroluna](./mapping-credits.md#aeroluna) en [Bullet](./mapping-credits.md#bullet).
