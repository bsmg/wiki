---
sidebar: auto
prev: ./basic-audio.md
next: false
description: Duik dieper in audiobewerking.
---

# Geavanceerde audiobewerking
_Duik dieper in audiobewerking._

* [Woordenlijst](./glossary.md)

Op deze pagina vindt je extra handleidingen en bronnen voor een beter begrip van audio of meer geavanceerdere technieken voor het bewerken van audio.

## Audiokwaliteit controleren
Over het algemeen, als regel, gebruik altijd **WAV(E) of FLAC (lossless ongecomprimeerd of gecomprimeerd)** bestanden als bronnen voor je nummers. Dit komt omdat **verlichte bestandstypen zoals MP3, AAC of OGG altijd informatie verliezen wanneer deze worden geconverteerd naar hun bestandstypen** en kunnen niet worden hersteld door ze te on-converteren. Dit is waarom je nooit jouw geëxporteerde OGG-bestand moet gebruiken om jouw audio te bewerken. Gebruik daarom altijd een lossless bronbestand als dit mogelijk is. Echte, sommige FLAC bronnen kunnen omhoog worden geconverteerd vanuit lossy bestandstypen, dus het gebruik van een spectral analyser programma om jouw audio bestand(en) te controleren voordat je ze gaat gebruiken word sterk aangeraden. Voor meer informatie over audio bestandstypen is [dit artikel aanbevolen](https://opentrackers.org/whatinterviewprep.com/prepare-for-the-interview/audio-formats/index.html).

::: tip Sla je eigen lossless WAV(E) bestanden op wanneer je wijzigingen doet, zodat je altijd een lossless bron hebt om vanuit verder te gaan zodat je niet alles opnieuw hoeft te doen. :::

De beste manier op de bron kwaliteit en loss kwaliteit te controleren is door [Spek](http://spek.cc/) te gebruiken, een gratis spectrum analyser programma:

![Spectrum voorbeeld](https://i.imgur.com/fdOZR2K.png "Spectrum voorbeeld")

Dit programma laat de tijd van het nummer zien van links naar rechts, de frequenties van de laagste aan de onderkant en hoogste aan de bovenkant, en de luidheid in kleur (de legenda is aan de linker kant). Deze schermafbeelding laat hetzelfde nummer zien met de bovenste grafiek als WAVE bestand en de onderste als OGG bestandsexport vanuit hetzelfde WAVE bestand.

Hoe herken je lage kwaliteit:

* Het grootste verschil tussen de twee grafieken is de frequentie dat aan de bovenkant in het lossy bestandstype is afgesneden. Dit is een gebruikelijke techniek voor lossy bestandstypen om gegevens te besparen omdat deze hoge frequenties niet zo belangrijk zijn voor de geluidsreproductie. Dit is ook omdat het gehoorberijk van een mens, wat tussen 20hz en 20khz zit bij geboorte, kan worden beïnvloed door [noise-induced hearing loss](https://en.wikipedia.org/wiki/Noise-induced_hearing_loss) en/of [leeftijd](https://en.wikipedia.org/wiki/Presbycusis), waardoor sommige mensen geleidelijk hun gehoor verliezen boven frequenties van 15khz. Het bespaard dus data door deze frequenties niet te gebruiken, iets wat een onbewuste luisteraar toch niet zou merken.
* Belangrijker nog, als je de frequenties in het hoorbare spectrum beter bekijkt (20hz tot 20khz) dan zie je dat de bovenste grafiek er veel soepeler uitziet met mooie verlopingen en donkerblauwe gebieden (zacht geluid) in vergelijking met de onderste grafiek dat meer gekarteld is en een groot deel van de fijnere verlopingen mist, de meeste flauw donkerblauwe gebieden zijn hier zwart.

Deze twee kenmerken zijn waar je naar kan zoeken bij het analyseren van jouw bron bestanden. Voor meer informatie over spectrum analysen is [dit artikel aanbevolen](https://opentrackers.org/whatinterviewprep.com/prepare-for-the-interview/spectral-analysis/index.html).

Om dit programma te gebruiken open je Spek.exe en sleep dan jouw audiobestand vanuit de bestandsverkenner op het Spek venster. Je kan het scherm vergroten of verkleinen voor meer of minder detail in de grafiek.

### De juiste OGG exporteerkwaliteit kiezen
Je zou moeten streven naar het bewaren van de meeste van de brongegevens, terwijl je nog steeds de kleinste bestandsgrootte hebt. Houd de OGG-bestandsgrootte onder de 14MB (voor BeatSaver) of 7MB (voor Discord zonder Nitro).

Om te weten welk level ideaal is voor jouw nummer, kan je je nummer exporteren met verschillende kwaliteiten en [de grafieken vergelijken ](#checking-audio-quality). Maar als een algemene aanbeveling volg dan deze instellingen:

* Hoge kwaliteit bron (WAVE, FLAC of MP3/AAC@+200kbps): kies een OGG kwaliteit level tussen 9 en 6.
* Lage kwaliteit bron (MP3 / AAC / OGG): kies een OGG kwaliteit level tussen 5 en 3.

Je kunt de geluidskwaliteit niet verhogen door een lossy spoor met een hogere bitrate (bijv. het opslaan een YouTube-bron nummer met een kwaliteit van niveau 10), je zal alleen maar het bestand groter maken. Zoals uitgelegd in het vorige hoofdstuk, gaat informatie verloren bij het converteren naar een lossy bestandstype en dit kan dus niet hersteld worden. Het converteren van een lossless bestandstype naar een ander lossless bestandstype is daarintegen prima, bijv. FLAC naar WAV(E).

## Audioverwerking uitleggen
Om te werken met audio en om de geluidsgolven te verwerken zijn er verschillende programma's beschikbaar om te helpen met het bereiken van ons doel. Twee van de programma's die gebruikt worden zijn *Compressor* en *Limiter* die we voor geluidsverwerking in [volumewijziging: jouw nummer luider maken](./basic-audio.md#jouw-nummer-luider-maken) hebben gebruikt.

Hieronder worden deze programma's in meer detail uitgelegd:

### Compressor
In wezen verlaagt een compressor de dynamiek boven een bepaald niveau en maakt het uiteindelijk het geluid minder dynamisch en lager in volume. Wanneer je ook het signaal versterkt na een compressor (Make Up Gain/Normalize) kan je het geluid nog luider maken.

Het compressor effect van Audacity is eigenlijk niet het beste hulpmiddel voor muziek, omdat het is gemaakt voor meer spraak georiënteerde audio. Maar, het is erg makkelijk om te gebruiken, en daarom is het in [volumewijziging: compressie](./basic-audio.md#compression) is gebruikt. Maar als je dit leest dan heb je of een onaangename verdraaiing in het geluid waargenomen (het geluid stopt een beetje na luide piekjes) of je bent nieuwsgierig naar de instellingen die je kunt aanpassen in een compressor, dus laten we deze instellingen bekijken met behulp van de geavanceerdere [SC4 plug-in](https://ttmanual.audacityteam.org/o/man/sc4.html) voor Audacity (je moet mogelijk ook de [LADSPA bundle](http://www.audacityteam.org/download/plug-ins/#ladspa) installeren om toegang tot dit programma te krijgen).

![SC4](https://i.imgur.com/koad1gL.png)

<!-- markdownlint-disable MD013 -->
| Effect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Omschrijving                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **RMS/peak**                                                                                                                                           | Enigszins uniek voor deze specifieke plug-in, je kan het zien als een agressievieteitsschuifbalk. Voor ons doel willen we dat het de Peak op **1.0** staat.                                                                                                                                                                                                                                                       |
| **Attack time (ms)**                                                                                                                                   | Hoe snel de compressor de dynamiek begint te comprimeren nadat de drempel is overschreden, in milliseconden. Om de compressor zo transparant mogelijk te maken wordt **1.5 ms** aanbevolen.                                                                                                                                                                                                                       |
| **Release time (ms)**                                                                                                                                  | Hoe snel de compressor begint het volumeniveau weer normaal te maken nadat het niveau onder de drempel daalt, in milliseconden. Om de compressor zo transparant mogelijk te maken wordt **2.0 ms** aanbevolen. Deze instelling is één van de redenen waarom het compressor-effect dat in Audacity zit niet optimaal is, aangezien het de release-tijden alleen van, op zijn hoogst, 1 seconde (1000 ms) toestaat. |
| **Threshold level (dB)**                                                                                                                               | Het niveau waarop de compressor zal beginnen met toepassen. Dit is de waarde die je moet aanpassen als je meer of minder compressie wilt.                                                                                                                                                                                                                                                                         |
| **Ratio (1:n)**                                                                                                                                        | De toename reductieverhouding die wordt gebruikt wanneer het signaalniveau het drempelniveau overschrijdt. Een goed startpunt is **1:3**. Zet dit hoger voor een nog agressievere reductie.                                                                                                                                                                                                                       |
| **Knee radius (dB)**                                                                                                                                   | De afstand van de drempel waar de knee curve begint. Dit instellen op **1 dB** of minder zou voldoende moeten zijn.                                                                                                                                                                                                                                                                                               |
| **Makeup gain (dB)**                                                                                                                                   | De hoeveelheid gain dat wordt toegevoegd aan het verwerkte resultaat. In vergelijking met het met de compressor van Audacity is er geen *Make-up gain tot 0dB na de compressor* in de instelling in deze plug-in. Maar je kan dit eenvoudig op 0dB zetten en vervolgens een *Normalize* effect op 0dB toepassen op het hele nummer en het zal precies dezelfde verwerking doen.                                   |
| **Enable**                                                                                                                                             | Een handige functie van deze plug-in is het `Enable` aankruisvakje. Hiermee kan je de audio weer afspelen met het effectvenster en de instellingen tijdens het spelen aanpassen. Zet `Enable` aan en uit om op elk gewenst moment te schakelen tussen verwerkt en onverwerkt geluid tijdens het afspelen van het nummer. Op deze manier kan je jouw veranderingen direct vergelijken.                             |
<!-- markdownlint-enable MD013 -->

Een voorbeeld van hoe de compressie de audio beïnvloedt, het gemarkeerde deel is gecomprimeerd op een 1:3 ratio met een drempel van -30db (rode lijn).

![Compressie](https://i.imgur.com/6VMXy3j.png)

::: tip Om het makkelijker te maken om de dynamiek van het nummer in dB visueel te beoordelen, kan je de drempel instellen op het volgende:

1. Klik met de linkermuisknop op het spoorlabel en kies `Waveform (dB)`. Dit toont een logaritmische golfvorm met dB in de schaal in plaats van een lineaire schaal.
2. Om de schaal van het spoor te vergroten klik je met de rechtermuisknop op scale aan de linkerkant van het spoor en klik dan op `Half Wave`.
3. Om de hoogte van het spoor te maximaliseren, ga je naar `View -> Track Size -> Fit to Height` of druk gewoon op `Ctrl + Shift + F`. Dit zal meer het schaal laten zien.

![Spoor](https://i.imgur.com/2zWoX9q.png) :::

Meer gedetailleerde informatie over compressors [kan je hier vinden](https://www.practical-music-production.com/audio-compressor/).

### Limiter
Een limiter is in essentie een compressor effect met een oneindige gain reductie verhouding, waarbij elk signaal van boven de drempel wordt afgebroken. Het betekent dat een Limiter handig is om de pieken van een golfvorm af te snijden en de audio nog harder te laten lijken.

Laten we een kijkje nemen bij Audacity's [Limiter](https://manual.audacityteam.org/man/limiter.html) effect:

![Limiter](https://i.imgur.com/6fAwHCv.png)

<!-- markdownlint-disable MD013 -->
| Effect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Omschrijving                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type**                                                                                                                                               | Hoe het effect de limiter toepast. Voor ons doel willen we een **Hard Limit**.                                                                                                                                                                                                 |
| **Input Gain (dB) mono/Left/Right channel**                                                                                                            | Dit is met hoeveel je de audio wilt boosten. Eigenlijk hetzelfde als het amplify effect. Zet dezelfde waarde oor zowel links als rechts want anders zal je de stereo afbeelding scheef zetten. Dit is de waarde die je aanpast als je een harder of zachter effect nodig hebt. |
| **Limit to (dB)**                                                                                                                                      | Vanaf welk volume zal het effect het signaal beperken. Dit kan worden ingesteld op 0dB en voorkomt zo verstoring maar om lossy bestandstypen te geven wat ruimte te geven bij het coderen is de beste waarde **-0.1 dB**.                                                      |
| **Hold (ms)**                                                                                                                                          | Voor hoe lang het limiter effect moet duren als het eenmaal aan staat. Om de limiter zo transparant mogelijk te maken wordt **1ms** aanbevolen.                                                                                                                                |
| **Apply Make-up Gain**                                                                                                                                 | Zal de pieken normaliseren tot dicht bij de 0dB, maar we hebben al het juiste volume ingesteld met `Limit to (dB)` waardoor deze instelling niet nodig is. Voor ons doel zetten we het op **No**.                                                                              |
<!-- markdownlint-enable MD013 -->

Meer gedetailleerde informatie over limiters [kan je hier vinden](https://www.practical-music-production.com/audio-limiter/).

## Nummerbewerking met behulp van Cross-fades
Bij het bewerken van een kortere versie van een liedje en een simpele sprong tussen twee soortgelijke delen van een liedje niet genoeg is om je oren te overtuigen (meestal zijn de secties niet precies hetzelfde, vaak in niet-elektronische muziek) dan helpt het vaak om een cross-fade toe te voegen. Elk type herstructureringsbewerking is makkelijker in een DAW software dat gebruik maakt van beat grid bewerking, maar het is mogelijk om dat ook te doen in de gratis software van Audacity, wat we hier zullen laten zien.

Voor degenen die het niet weten, een cross-fade is wanneer het ene audiospoor stopt terwijl een ander tegelijkertijd begint. Voor de beste resultaten moet je twee gelijke of bijna-gelijke secties vinden aan elke kant van de regio die je wilt verkleinen. Instrumentale regio's in elektronische muziek zijn beter geschikt dan regio's met zang. **Het gebruiken van het kleinst mogelijke segment, met name een kleine sectie tussen twee peaks/beats in, is beter om een luisteraar te overtuigen.**

Er is ook een video van dit proces dat [hier](https://www.youtube.com/watch?v=oSua4ITfPy8) beschikbaar is.

**Om twee delen van een liedje in een cross-fade te maken doe je het volgende:**

1. Open het nummer in Audacity.
2. Dupliceer het nummerspoor (`Select menu -> All + Edit menu -> Duplicate`, of druk gewoon op `Ctrl+A` en dan `Ctrl+D`).
3. Vul het ongewenste einde van het eerste spoor en het ongewenste begin van het tweede spoor met stilte (Selecteer, dan `Generate menu -> Silence...`).

![Geknipte nummer sectie](https://i.imgur.com/IRiNCz0.png "Geknipte nummer sectie")

4. Leg de sporen gelijk door gebruik te maken van het Time Shift programma (![Time Shift Tool](~@images/mapping/timeshift.png "Timeshift tool")) om het tweede spoor ongeveer op een plek te leggen zodat de vergelijkbare secties dicht bij elkaar liggen. Zoom dan in, pas het aan, en herhaal dat tot de golven stippen worden als je zoomt. Leg, wanneer mogelijk, de stippen van het onderste spoor gelijk met de vergelijkbare stippen van het bovenste spoor.

::: tip Gebruik een klik spoor om ervoor te zorgen dat de sporen met elkaar gelijk zijn.   
Zie [Audiovoorbereiding: een klik spoor toevoegen](./basic-audio.md#voeg-een-klik-spoor-toe). :::

![Gezoomde synchronisatie](https://i.imgur.com/9jyrzzv.png "Gezoomde synchronisatie")

5. De laatste sectie van het bovenste spoor moet nu identiek of vergelijkbaar zijn met de eerste sectie van het onderste spoor, maar van verschillende tijden in het nummer. Luister naar het overlappende gebied om een match te bevestigen, en zorg ervoor dat er geen echo/offset is van verkeerd gelegde sporen.

::: tip Om overdrive/clipping van twee -0db piekende sporen te voorkomen, kan je de faders voor beide tracks instellen op -6db ![Fader](https://i.imgur.com/kvsHvMT.png) en later terugzetten naar +0db als de crossfade is toegepast. Dubbelklik op de fader om het nummer in te vullen. :::

7. Selecteer de overlappende regio van beide sporen.
8. Ga naar `Effect menu -> Crossfade Tracks`. Zet de fade direction op `Alternating Out / In`. Klik op OK om de crossfade toe te passen.

![Crossfade](https://i.imgur.com/amqrj1I.png "Crossfade")

9. Luister nog een keer naar de overlappende secties. Als alles goed ging, zou je nu een perfect mengsel tussen de twee sporen moeten hebben.
10. Combineer de sporen door all (`Select menu -> All` or `Ctrl+A`) te selecteren en vervolgens naar `Tracks menu -> Mix` en dan `Mix and Render` te gaan.
11. Klaar. Je kan nu doorgaan met andere [Audio-bewerking](./basic-audio.md#optional-audio-editing) of eindigen met [exporteren](./basic-audio.md#exporting).

## Variabele BPM
Als het nummer dat je probeert te maken een tempo heeft dat niet synchroniseert met een vaste BPM (als in, even BPM waarden met decimalen), zoals (oudere) akoestische pop, rock, of metal nummers, deze zijn waarschijnlijk niet opgenomen met een metronoom en zullen daarom niet makkelijk synchroniseren met een vaste BPM in Audacity of de level editor. Dit kost veel tijd en geduld, dus zorg ervoor dat het de extra inspanning waard is, omdat sommige oplossingen neerkomen door de BPM (tempo spoor) op brute kracht handmatig op intervallen of soms zelfs elke beat aan te passen om het lied te laten kloppen.

Het voordeel van een gesynchroniseerde BPM/tempo is makkelijkere en consistentere blok plaatsing en bewerking, evenals makkelijkere en consistentere verlichtingsbewerking, vooral met meer dan één niveau in een level.

Er zijn verschillende manieren om met variabele BPM om te gaan:

* Time warp het geluid naar een vaste BPM door DAW software te gebruiken. Zie [warping met Reaper](#warping-with-reaper) voor informatie.
* De BPM veranderingen handmatig timen in MMA2.
  * [Hier is een video-tutorial van BennyDaBeast](https://www.youtube.com/watch?v=6AwR4SeaiHU)   
    **OPMERKING:** Benny gebruikt een oudere editor, Mediocre Mapper, in deze tutorial. Sommige UI elementen zijn mogelijk veranderd in de nieuwste editor, [MMA2](./#mediocre-map-assistant-2), maar, de rest van de inhoud is geweldig!
* Gebruik DAW software en vind alle tempo wijzigingen met behulp van een tempo spoor editor. Gebruik Jumps in plaats van Ramps omdat dat is hoe MMA2 van tempo veranderd. Wanneer je alle tempoveranderingen hebt gevonden, voer ze dan in MMA2 in. (Onthoud dat DAW software meestal measures en beats weergeeft, maar MMA2 geeft alleen beats weer).

### Warping met Reaper
[Reaper](https://www.reaper.fm/) is een DAW (Digital Audio Workstation) dat een permanente gratis proefperiode heeft en een geweldig alternatief is voor dure professionele software zoals [Ableton Live](https://www.ableton.com/en/live/). Als je comfortabel bent met Ableton, dan moet je dat gebruiken in plaats van Reaper.

Hier gebruiken we de warp functie om de audio subtiel aan te passen tot een consistent tempo. Wat de hoeveelheid BPM veranderingen die je moet instellen in je editor verminderd.

#### Om te beginnen

1. Download [Reaper](https://www.reaper.fm/) als je dat nog niet hebt.
2. Maak een nieuw project.
3. Stel jouw projectinstellingen in.
   * File > Project Settings
   * Stel de initiële BPM van het nummer in en zet de twee Timebase dropdowns op `Time` in plaats van `Beats`.

![Reaper Project Settings venster](~@images/mapping/reaperProjectSettings.png)

:::danger Dit is een cruciale stap! **Je kan je audio verpesten als je de eerste BPM en Timebase instellingen niet correct instelt!** :::

4. Zet Snap To Grid uit. Het is de groene magneeticoon links bovenin.
5. Voeg jouw audio toe aan het project. Insert > Media File, en vind jouw nummer.
6. Sleep het hele audiospoor naar zijn goede plek om een hot start of een te lange intro te voorkomen.
   * Zie [standaard audio: plan je eerste blok](./basic-audio.md#plan-je-eerste-blok) voor meer informatie.

![Audio goedleggen in Reaper](~@images/mapping/reaperFirstBeat.png)

#### Up Beats goed leggen
Nu het belangrijke deel. We gaan de audio warpen om het perfect te laten passen met de BPM die we in Project Settings hebben ingesteld.

Dit process word ook uitgelegd in [deze video](https://www.youtube.com/watch?v=nrd37K3sCF8) van TechButterfly.

Je zou pieken moeten zien waar de hoofddrum beats zijn. Op een nummer met een vaste BPM zullen die pieken precies op de beat markeerders landen. Voor jouw nummer zullen die piek op een gegeven moment weglopen van die beat markeerders.

Wanneer dat het geval is, moet je:

1. Klik op de piek.
2. Gebruik <kbd>Shift + W</kbd> om een stretch markeerder toe te voegen.
3. Sleep de stretch markeerder naar de lijn van de beat.

| Stap 1                                                                              | Stap 2                                                                      | Stap 3                                                                                    |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Piek staat niet op de beat markeerder](~@images/mapping/reaperWarpAudioStep1.png) | ![Stretch markeerder toegevoegd](~@images/mapping/reaperWarpAudioStep2.png) | ![Markeerder op de lijn van de beat geplaatst](~@images/mapping/reaperWarpAudioStep3.png) |

Het warpen van jouw nummer is simpelweg het herhalen van dit proces over het hele nummer. Begin ermee om dit ongeveer elke 4 beats te doen. Meestal is dit goed genoeg om het hele liedje goed te leggen, maar houd een let op voor beats tussen stretch markeerders. Als ze beginnen met weglopen moet je een nieuwe stretch markeerder gebruiken om dit op te lossen.

:::warning OPMERKING Te veel warps kunnen artefacten introduceren of het nummer zo erg veranderen dat het hoorbaar is voor luisteraars/spelers. :::

#### Dingen om te onthouden
Er kunnen veel verborgen "gochas" zijn bij het warpen van een nummer. Hier zijn enkele dingen die je zou kunnen tegenkomen en hun mogelijke oplossingen.

* Als je de beats aan het warpen bent en je merkt dat het driften groten en groter word, dan heb je misschien een tempo verandering nodig om de audio niet zo sterk te warpen. Dit kan worden veroorzaakt door een BPM verandering in het lied of sommige bands die zich geen zorgen maken over tempo.
  1. Klik daar waar je wilt dat de tempo verandering begint.
  2. <kbd>Shift + C</kbd> om een tempo verandering toe te voegen.
  3. Bewerk de positie van de verandering zodat deze precies aan het begin van de beat is.
  4. Verander het tempo.
  5. Pas en meet een beetje om de hoeveelheid drifting te verminderen over het volgende stuk van de audio.
  6. **Je moet dezelfde BPM verandering in de level editor toevoegen!**

![Verander de tempo tijdens het afspelen van het nummer](~@images/mapping/reaperChangeTempo.png)

* Sommige pieken kunnen vaag zijn, vooral wanneer er meerdere geluiden tegelijkertijd gebeuren. Er zijn een paar manieren om een piek te testen om te achterhalen wanneer de trommel is geslagen.
  * Door de cursor heen en weer over de piek te slepen, je zou een bons moeten horen als je de piek raakt.
  * Als je vlak voor het piekje klikt, klik en dan op de spatiebalk drukt om het geluid af te spelen, dan zou je direct de trommelslag moeten horen.  
    ![Vage piek](~@images/mapping/reaperVaguePeak.png)

* Let op hoe het lied zich zou moeten voelen. Niet elke grote drumslag is op een beat markeerder. Bijvoorbeeld, sommige liedjes hebben grote crash cymbal slagen een halve of een kwart beat voor de hoofdbeat. Je kunt proberen om muziektabbladen of andere bronnen te vinden om de gewenste timing van een nummer te achterhalen. Wees er van bewust dat online tabbladen niet gegarandeerd accuraat zijn, in feite, sommige tabbladen die op songsterr staan zijn helemaal nep!

#### Het renderen/exporteren van de audio
Zodra je klaar bent met bewerken van je audio, wil je het renderen als een `.ogg` bestand dat Beat Saber kan gebruiken.

1. File > Render
2. Vink het vakje voor Tail uit, tenzij je stilte wilt toevoegen aan het einde van het nummer.
3. Stel het bestemmingspad en de bestandsnaam in (zonder de `.ogg` extensie, omdat deze automatisch wordt toegevoegd).
4. Selecteer OGG Vorbis als het uitvoerformaat.
5. Stel de kwaliteit in zoals het hoort. Reaper gebruikt een schaal van 0 tot 1 in plaats van 0 tot 10. Maar, de principes die in [standaard audio: exporteren](./basic-audio.md#exporteren) staan, gelden nog steeds.
   * Hoge kwaliteit audiobestand (WAVE / FLAC / MP3 / AAC): gebruik 0.6-0.9 (tenzij er problemen zijn met de bestandsgrootte).
   * Lage kwaliteit audiobestand (YouTube of vergelijkbaar): gebruik 0.3-0.5.
6. Klik op de Render 1 file knop. Na enige tijd heb je een OGG-bestand met netjes neergelegde beats!

![Audio-Render/Export instellingen](~@images/mapping/reaperRenderAudio.png)

## Bijdragen
Inhoud in deze sectie wordt afgeleid van handleidingen door [Nik](./mapping-credits.html#nik-n3tman), [LittleAsi](./mapping-credits.html#littleasi), en [Ris](./mapping-credits.html#ris) die **Heisenberg_IRL**s methode hebben aangepast over het warpen in Ableton. Extra bijdragen van [Kolezan](./mapping-credits.html#kolezan).
