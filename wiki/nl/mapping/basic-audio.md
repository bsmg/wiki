---
sidebar: auto
prev: false
next: ./advanced-audio.md
description: Het klaar zetten van jou audio bestand om het te gebruiken voor het maken van levels.
---

# Standaard audio setup
_Zet jou audio bestand klaar voor het gebruik voor het maken van levels._

* [Woordenlijst](./glossary.md)

Deze pagina biedt zowel nieuwe als ervaren level makers algemene aanbevelingen aan voor het opzetten van een nieuw audiobestand voordat je begint aan je nummer. Bekijk de onderstaande snelle startgids voor stappen die **kritisch** zijn voordat je begint met het maken van je nummer vs. de dingen die op elk moment kunnen worden gedaan, als ze nodig zijn.

## Snelle startgids voor audio
::: warning

* Stappen 1-3 **MOETEN** worden voltooid voordat je begint met het maken van je nummer, anders zal uw audio niet gesynchroniseerd zijn en kan een [*hot start*](./glossary.md#h) hebben.
* Het gebruik van online websites om jouw audio te veranderen naar `.ogg` kan er voor zorgen dat deze word gezien als ongeldig en zal dan niet door het spel worden geladen! Verwerken en exporteren via [Audacity](https://www.audacityteam.org/) is de eenvoudigste manier om ervoor te zorgen dat jouw audiobestand werkt zoals dat verwacht word. :::

1. Download en installeer [Audacity](https://www.audacityteam.org/)
   * Installeer optioneel de [ffmpeg voor windows](https://manual.audacityteam.org/man/installing_ffmpeg_for_windows.html) addon om extra bestandstypen te openen zoals `.aac` of `.m4a` van iTunes.
2. Zoek de BPM en offset van je audio bestand op om [je nummer te synchroniseren](#syncing-audio)
3. [Exporteer jouw audiobestand](#exporting) als een `.ogg` bestandstype

**Altijd vóór het uploaden:**
4. [Controleer het volume van jouw audiobestand](#check-song-volume) en maak het [harder](#making-your-song-louder) of [zachter](#making-your-song-softer) indien nodig
5. Controleer de lengte van jouw audiobestand outro en [trim](#trimming-the-outro) het indien nodig

## Nummer selectie voor nieuwe level makers
Hieronder staan aanbevelingen, **geen** vereisten, deze zullen je helpen om je langzaam op gang te laten komen in het maken van nummers. Als je 17 minuten van "In A Gadda Da Vida" voor je eerste nummer wilt doen, ga je gang, maar weet dat je te maken krijgt met een **veel** extra uitdagingen.

* Kies een nummer met een duidelijke beat om je level op te maken. Sommige genres werken beter dan andere.
* Kies een nummer met een consistent tempo (bijvoorbeeld liedjes met elektronische drums). Nummers die langzaam van tempo/BPM veranderen kunnen erg moeilijk zijn om een level op te maken.
* Kies een nummer aan de kortere kant (minder dan 3 minuten is beter). Een 10 minuten durende level maken is geweldig om mee te beginnen maar kan tot frustratie en/of een burnout leiden.
* Kies ten slotte een liedje waarvan je het niet erg vind om er steeds weer opnieuw naar te luisteren. Maar voorkom dat je je favoriete nummer als eerste maakt, wacht daarmee totdat je wat meer ervaring hebt.

## Audio Kwaliteit
Voordat je begint met het maken van je level, zorg er dan voor dat je audiobestand van hoge kwaliteit is. Veel levels hebben super slechte audiobestanden, vaak worden ze geripped van YouTube of komt het door lage bitrate bestanden. Het is niet voor niks een spel gericht op muziek, dus een goede audio kwaliteit is belangrijk voor een goede spelerservaring.

Volg deze algemene richtlijnen terwijl je werkt aan het maken van je levels:

* Gebruik de hoogste kwaliteit audio zoals **.FLAC of .WAV(E)** bestanden (lossless format).
* Dingen die er het meest op lijken zijn de hoge bitrate (+200kbps) **.MP3 of .AAC** bestanden (lossy formats).
* Gebruik een YouTube rip **alleen** als je geen andere opties meer hebt. De bitrate is laag en het volume is zelden goed. In dit geval is er waarschijnlijk audiobewerking nodig (zie [Optionele Audiobewerking](#optional-audio-editing)).

> Websites waar je tracks/album kunt kopen, zoals een artiest's [Bandcamp](https://bandcamp.com/), hebben meestal de hoogste kwaliteit audiobestanden. Als de artiest geen Bandcamp beschikbaar heeft, zijn Google Play Music, Amazon Music en iTunes alternatieven voor MP3 bestanden van hoge kwaliteit.

Door een audiobestand van hoge kwaliteit te kopen en te gebruiken, steun je niet alleen jouw artiest, maar bespaar je jezelf veel hoofdpijn tijdens het maken van je level. Kijk naar het verschil in kwaliteit voor hetzelfde liedje, op dezelfde beat.

| OGG kwaliteit |                   YouTube Rip                   |                  MP3                  |                  WAV                  |                  FLAC                   |
|:-------------:|:-----------------------------------------------:|:-------------------------------------:|:-------------------------------------:|:---------------------------------------:|
|       1       |  ![YouTube Rip 1](~@images/mapping/ytrip1.jpg)  |  ![MP3 1](~@images/mapping/mp31.jpg)  |  ![WAV 1](~@images/mapping/wav1.jpg)  |  ![FLAC 1](~@images/mapping/flac1.jpg)  |
|       5       |  ![YouTube Rip 5](~@images/mapping/ytrip5.jpg)  |  ![MP3 5](~@images/mapping/mp35.jpg)  |  ![WAV 5](~@images/mapping/wav5.jpg)  |  ![FLAC 5](~@images/mapping/flac5.jpg)  |
|      10       | ![YouTube Rip 10](~@images/mapping/ytrip10.jpg) | ![MP3 10](~@images/mapping/mp310.jpg) | ![WAV 10](~@images/mapping/wav10.jpg) | ![FLAC 10](~@images/mapping/flac10.jpg) |

Kan je het verschil zien? Je kunt de audiokwaliteit niet beter maken; alleen met een audiobestand van hoge kwaliteit kan je duidelijke en precieze lijnen zien.

Zie de [Geavanceerde Audio-bewerking](./advanced-audio.md) pagina voor meer diepgaande technieken en hulpmiddelen voor het analyseren van de audiokwaliteit van bestanden.

## Audio synchroniseren
Om het makkelijker te maken en ervoor te zorgen dat het nummer perfect gesynchroniseerd is met de beat, moet je je audiobestand correct instellen. In deze sectie gaan we ervan uit dat je [Audacity](https://www.audacityteam.org/) gebruikt.

### Plan je eerste blok
Analyseer het begin van het nummer. Afhankelijk van waar in het nummer je je eerste blok wilt plaatsen, moet je zowel een *hot start* (niet genoeg tijd vóór het eerste blok) als een te lange intro vermijden. Je nummer past in een van deze drie categorieën:

1. **Nummers zonder intro:** het is cruciaal om **op zijn minst twee seconden** te wachten voordat de speler de eerste speelbare blok(ken) tegenkomt in jouw level, anders staat dit bekend als een "Hot Start."
2. **Nummers met een korte intro:** als je nummer een korte intro heeft dat **minder dan 8 seconden** is, is het OK voor de muziek om direct te beginnen met spelen.
3. **Nummers met een lange intro:** als het nummer een zeer lange en oninteressante/fade-in intro heeft voor **meer dan tien seconden** wordt het sterk aangeraden om de intro korter te maken, zodat de eerste blok(ken) binnen acht seconden worden geplaatst vanaf het begin van het level.

In alle bovenstaande gevallen zal je het nummer moeten aanpassen naar een passende tijd gebaseerd op je behoeften:

1. **No intro:** verplaats het nummer terug in de tijd (naar rechts op het audiospoor), wat de eerste gemappte blok(ken) na twee seconden plaatst. Synchroniseer het nummer dan met de beat. Vul daarna de leegte in met stilte.
2. **Short Intro:** synchroniseer het nummer met de beat en vul vervolgens de leegte met stilte, afhankelijk van wat van toepassing is.
3. **Long intro:** beweeg het nummer vooruit in de tijd (naar links in het audiospoor), wat de eerste blok(ken) binnen 8 seconden plaatst, trim daarna de audio voor 0 seconden.

Er zijn twee manieren om je audio te synchroniseren:

* De aanbevolen methode voor het synchroniseren van nummers is met [Arrow Vortex](#Synchroniseer-met-Arrow-Vortex).
* De alternatieve methode om nummers te synchroniseren is door het handmatig te doen met een [Click Track](#sync-using-a-click-track).

### Synchroniseer met Arrow Vortex
[Arrow Vortex](https://arrowvortex.ddrnl.com/) is een gratis hulpmiddel om de BPM van een nummer automatisch te analyseren. Het vindt ook de offset die nodig is om de audio aan te passen aan de beat in Audacity of jouw level editor.

**Het gebruik van Arrow Vortex om de BPM en offset te vinden:**  
De hieronder vermelde stappen zijn dezelfde als die gebruikt worden in Ryger’s [Arrow Vortex BPM Analysis Video Tutorial](https://youtu.be/Z49UKFefu5c) (inclusief BPM bevestiging).

1. Download Arrow Vortex (AV), pak het bestand uit en open `ArrowVortex.exe`
   * Discord [Zip Download](https://cdn.discordapp.com/attachments/443569023951568906/662417326771273728/ArrowVortex.zip) (aanbevolen methode).
   * Arrow Vortex website [.Rar download](https://arrowvortex.ddrnl.com/).
   * Je hebt extra software nodig zoals [7zip](https://www.7-zip.org/) om `.rar` bestanden zoals deze uit te pakken.
2. Exporteren jouw audiobestand naar `.ogg` met [Audacity](https://www.audacityteam.org/)
   * Andere bestandtypen gebruiken (zoals bijv. `.mp3` of `.m4a`) voegt een vertraging toe aan de audio die elke keer verschilt en geen rekening houdt met wanneer je wijzigingen exporteert voor gebruik in de editor.

#### Probleemoplossing voor Arrow Vortex

##### The code execution cannot proceed because MSVCP120.dll was not found

* Installeer [vcredist_x86.exe](https://support.microsoft.com/en-us/help/4032938/update-for-visual-c-2013-redistributable-package) in jouw taal van voorkeur en probeer het opnieuw.
  * Als het nog steeds niet werkt, zorg ervoor dat je de `x86` versie download, wat dichtbij de onderkant van de pagina staat. En niet de `x64` versie.

::danger **Dit is een cruciale stap!**  
geen `.ogg` bestand gebruiken of het gebruik van de exportfunctie in AV **zal** jouw nummer desynchroniseren met een inconsistente tijd. :::

3. Sleep het audiobestand naar het AV-venster.
4. Ga naar het `View` menu en klik op `Time based (C-mod)` om de golfvorm te zien.
   * Gebruik <kbd>CTRL</kbd> + muis scrolwiel om in/uit te zoomen
5. Ga naar het `Tempo` menu en klik op `Adjust sync...` of druk gewoon op <kbd>SHIFT</kbd>+<kbd>S</kbd> om het aanpassingsvenster te openen.
6. Klik op de <kbd>Find BPM</kbd> knop.
   * Als je geluk hebt, geeft AV een enkele BPM waarde met 100% vergelijkenis.  
     ![AV adjustment venster](~@images/mapping/adjustments.png)
   * Als je meerdere opties krijgt, moet je luisteren naar de opties om te zien of ze overeenkomen met het nummer. Meestal zal het de eerste optie zijn, maar volg de stappen 7 en 8 om zeker te zijn.  
     ![Meerdere BPM Waarden](~@images/mapping/alternateAdjustments.png)
7. Klik op de <kbd>Apply BPM</kbd> knop.
8. Druk op <kbd>F3</kbd> om beat ticks in te schakelen en druk op de <kbd>Spatiebalk</kbd> om door het nummer heen te luisteren om te bevestigen dat het begin, midden en einde van jouw nummer overeenkomen.
   * Als er maar één resultaat is gegeven en de ticks niet overeenkomen, duidt dit erop dat het nummer een variabele BPM heeft.
   * Als de detectie meerdere opties heeft gegeven en de ticks niet overeenkomen, selecteer dan de volgende optie, klik op de <kbd>Apply BPM</kbd> knop en luister opnieuw. Als geen van de opties bij het nummer past, duidt dit erop dat het een variabele BPM heeft.

:::warning WAARSCHUWING bij Variabele BPM Het is aanbevolen dat nieuwere level makers een ander nummer kiezen vanwege de toegenomen moeilijkheid geassocieerd met een variabele BPM. Ben je niet zeker of jouw nummer variabel is? Ga naar BSMG's `#mapping-discussion` en vraag het!

Als je de ervaring hebt, zie [Geavanceerde audio Bewerking: variabele BPM](./advanced-audio.md#variable-bpm) over hoe je hier mee moet werken. :::

10. Geef de speler ongeveer twee seconden wachttijd door zo vaak mogelijk op de `Move first beat` knop te klikken![Arrow Vortex move beat button](~@images/mapping/av_movebeat.png) en de begintijd zo dicht mogelijk bij 2.00 seconden te krijgen, of zet het geluid waarop je het eerste blok wilt plaatsen op het eerste streepje.  
    ![Uitgelijnd met de eerste balk](~@images/mapping/av_aligned.png) ![Alternatief uitgelijnd met de eerste balk](~@images/mapping/av_altAligned2.png)
    * Na het uitlijnen moet je het liedje opnieuw controleren om te kijken of de beats nog steeds overeenkomen.
11. Nu je de BPM en offset hebt, moet je de juiste stilte aan het nummer toevoegen of verwijderen.

---

**Als je een positieve offset hebt**, moet je die hoeveelheid van de intro toevoegen.

1. Open het nummer in Audacity als je dit nog niet gedaan hebt, schakel dan over naar de Selection Tool (![Selection Tool](~@images/mapping/selection.png)).
2. Plaats de cursor aan het begin van het nummer (Klik op het nummer en druk op de <kbd>Home</kbd> toets op je toetsenbord).
3. Klik op `Generate – > Silence…`. ![Generate Silence...](~@images/mapping/audacity-generate_silence.png)
4. Voer de sync `Music offset` waarde in die je kreeg van Arrow Vortex (of een andere vergelijkbare tool) en klik vervolgens op OK. ![Stilte toevoegen met Audacity](~@images/mapping/av_audacity.png)
5. Klaar. Je kan nu verder gaan naar [exporteren](#exporteren) of [Optionele Audiobewerking](#optionele-audiobewerking).

Na het genereren van de stilte kan je op de donkere lijn klikken in het nummerspoor om de cut weg te halen.

---

**Als je een negatieve offset hebt**, moet je die hoeveelheid van de intro aftrekken.

1. Open het nummer in Audacity als je dit nog niet gedaan hebt, schakel dan over naar de Selection Tool (![Selection Tool](~@images/mapping/selection.png)).
2. Voeg een nieuw mono spoor toe.![Nieuw mono spoor toevoegen](~@images/mapping/audacity-add_new-mono-track.png)
3. Selecteer het nieuwe spoor en drup om de <kbd>Home</kbd> knop.
4. Klik op `Generate – > Silence…`. ![Generate Silence...](~@images/mapping/audacity-generate_silence.png)
5. Voer de negatieve offset waarde in die je kreeg van Arrow Vortex (of een andere vergelijkbare tool) in in het Duration veld en klik vervolgens op OK.![Stilte toevoegen met Audacity](~@images/mapping/av_audacity-negative.png)
   * Het zou er ongeveer zo moeten uitzien:  
     ![Resulterende stilte](~@images/mapping/audacity-neg-generated_silence.png)
6. Selecteer vanaf het einde van de gegenereerde stilte (de gele verticale lijn) tot het begin van het nummer door de inhoud van beide sporen te selecteren.<br/>![Selecteer tot gegenereerde stilte](~@images/mapping/audacity-neg-select_silence.png)
7. Druk op de <kbd>Delete</kbd> toets.
8. Klik op de X op het nieuwste spoot om het te verwijderen.  
   ![Het spoor verwijderen](~@images/mapping/audacity-delete_track.png)
9. Klaar. Je kan nu verder gaan naar [exporteren](#exporteren) of [optionele audiobewerking](#optionele-audiobewerking).

> Als je niet vertrouwd bent met het verwijderen van de exacte hoeveelheid, kan je meer dan nodig verwijderen, de gewijzigde `.ogg` exporteren en [re-syncen met behulp van jouw tool](#sync-using-arrow-vortex) met het nieuwe bestand om een positieve offset te krijgen.

### Synchroniseren met een Klik Spoor

#### Handmatige BPM berekening
Als de methode hierboven niet lukt, moet je de BPM handmatig vinden, maar dit is makkelijker dan je zou denken.

1. Gebruik een online BPM tapping calculator (zoals de [Tap for BPM Tool](https://www.all8.com/tools/bpm.htm), open de pagina in jouw webbrowser).
2. Speel het nummer in je favoriete muziekspeler.
3. Met de webpagina in focus, tik op een toets (elke kwart noot) voor ongeveer 30 seconden en de tool zal de BPM van het nummer tonen.
4. Noteer de dichtstbijzijnde hele waarde.

#### Voeg een klik spoor toe
Dit om te bevestigen dat de BPM die je online of handmatig hebt gevonden overeenkomt met het audiobestand dat je hebt. Deze toevoeging is tijdelijk; je moet de klik spoor verwijderen voordat je [jouw audio exporteerd](#exporting).

1. Open het nummer dat je wilt gebruiken in Audacity.
2. Voeg een nieuw mono spoor toe vanaf `Tracks menu > Add New > Mono Track`.
3. Plaats de cursor aan het begin van het nieuwe spoor (Klik op het spoor en druk op de Home toets) en klik vervolgens op `Generate menu > Rhythm Track...`.
4. Voer de dichtstbijzijnde hele BPM in dat je eerder hebt gevonden in het `Tempo (bpm)` veld en voer de duur van het nummer in in het optionele `Ritm track duration` veld (de duur wordt weergegeven rechts bovenin de tijdlijn).
5. Kopieer de andere aanbevolen instellingen die hieronder staan: ![Audacity Rhythm Track Menu](~@images/mapping/click-track-1.png)

Als alles correct is ingevuld, krijg je zoiets als dit: ![Audacity hoofdmenu dat het nummerspoor en het ritmespoor laat zien](~@images/mapping/song_rhythm.png)

Dit klik spoor is volledig gesynchroniseerd met de beats in de level editor en het spel, maar het nummer is nog niet gesynchroniseerd. Ga hieronder verder voor hoe je dat moet doen.

#### Synchroniseer het nummer met de beat

1. Selecteed de Time Shift Tool (![Time Shift Tool](~@images/mapping/timeshift.png)).
2. Klik met de linkermuisknop op het nummer en sleep vervolgens de audio zodat de eerste geplande blok(ken) in jouw nummer binnen de juiste seconden eindigen, (zie de tijdlijn boven het spoor) om een "Hot Start" of te lange intro te voorkomen (zie [plan jouw eerste blokken](#plan-your-first-note) als je dat nog niet hebt gedaan).
3. Laat los om de audio in de nieuwe positie te plaatsen.
4. Speel de audio af in deze positie. Het nummer zal gedesynchroniseerd zijn, dus vind de dichtstbijzijnde beat in het klik spoor en zorg er voor dat jouw nummer overeenkomt met de beat (klik spoor) door het vooruit of achteruit te bewegen in kleine tijdsintervallen. Zoom in voor betere nauwkeurigheid. Herhaal totdat het perfect klinkt.
5. Als je denkt dat je de beats van het nummer hebt gevonden die overeenkomen met het klik spoor, review dan het hele nummer om ervoor te zorgen dat de BPM die hebt nog klopt en dat het nummer een vaste BPM heeft gedurende het hele nummer. Als dat niet het geval is, heb je misschien de verkeerde BPM gekregen. Probeer in dat geval de BPM handmatig uit te tikken (opnieuw), zie [Handmatige BPM berekening](#Handmatige-BPM-berekening).

:::warning WAARSCHUWING Als de BPM correct is voor het eerste deel van het liedje, maar plotseling van nummer verandert of wegdrijft dan heb je waarschijnlijk een nummer met Variabele BPM, Zie [Geavanceerd bewerken van audio: Variabele BPM](./advanced-audio.md#variable-bpm) voor meer informatie over dit onderwerp. :::

Hieronder word laten zien hoe het eruit ziet als de eerste geplande blok(ken) na twee seconden zijn geplaatst en dat de beats van het nummer gesynchroniseerd zijn met de BPM/het klik spoor.

![Audacity nummer wat past met het ritmespoor](~@images/mapping/synced_rhythm.png)

Als de golfvorm/audio clip een pauze heeft in het begin van de tijdlijn (0,0 seconden) moet je stilte toevoegen aan de audio, want anders exporteert Audacity vanaf het begin van de audioclip en verlies je elke synchronisatie die je hebt gedaan. Doe het volgende om stilte toe te voegen:

1. Schakel over naar de Selection Tool (![Selection Tool](~@images/mapping/selection.png)).
2. Selecteer de lege ruimte tussen de audioclip en het begin van het spoor (de gele verticale lijnen markeren de start en het eind wanneer je een selectie maakt).  
   ![Stilte toevoegen met Audacity](~@images/mapping/add_silence.png)
3. Klik op `Generate menu –> Silence…`. ![Generate Silence...](~@images/mapping/audacity-generate_silence.png)
4. De juiste hoeveelheid stilte zou al automagisch ingevoerd moeten worden, dus druk gewoon op OK.
5. Klaar. Je kan nu verder gaan naar [exporteren](#exporteren) of [optionele audiobewerking](#optionele-audiobewerking).

Na het genereren van de stilte kan je op de donkere lijn klikken in het nummerspoor om de cut weg te halen.

## Optionele Audiobewerking
Op dit moment is je audio ingesteld en klaar om [geëxporteerd](#exporteren) te worden. Aanvullende audio-bewerking, al dan niet nodig, kan de ervaring van de speler verbeteren door:

* Zorg ervoor dat de audio niet te zacht of te hard is;
* Zorg ervoor dat de start van de audio vloeiend is; en
* Zorg ervoor dat de speler niet te lang hoeft te wachten voordat de outro eindigt.

### Controleren van het volume
Om ervoor te zorgen dat je liedje niet te zacht is, of zelfs te luid is kunnen we het meten met RMS (Root Mean Squared) in Audacity. Om een goed evenwicht te hebben tussen blok-hak geluiden en je nummer, moet de RMS-waarde **luider zijn dan -11db** (in de verzen en/of chorussen) of **zachter zijn dan -8.5db** (op de luidste onderdelen).

Om de RMS waarde in jouw nummer te controleren, doe je het volgende:

1. Open Contrast Analyzer in `Analyze menu -> Contrast…`.
2. Met het Contrast Analysis menu nog open, selecteer een deel van de chorus (ongeveer 15-20 seconden) in jouw nummer.
3. Klik op een van de `Measure selection` knoppen. (We hoeven er maar één te gebruiken).
4. In het `Volume output` veld vind je nu een waarde. Vergelijk deze waarde met de aanbevolen waarden hierboven.
5. Als deze waarde kleiner is (meer negatief) dan de aanbevolen waarden, zie dan [Volumewijziging: Jouw nummer luider maken](#jouw-nummer-luider-maken).
6. Als deze waarde groter is (minder negatief) dan de aanbevolen waarden, zie dan [Volumewijziging: Jouw nummer zachter maken](#jouw-nummer-zachter-maken). ![Volume van het nummer analyseren met Audacity](~@images/mapping/contrast.png)

### Volumewijziging
Voordat je verder gaat met de volgende stappen met het bewerken van het nummer, wordt het sterk aanbevolen om je voortgang op te slaan als WAVE bestand als een back-up. Dit is om ervoor te zorgen dat als je terug moet gaan en sommige bewerkingen opnieuw moet doen, je een audiobestand van hoge kwaliteit hebt. (Laad de OGG die je hebt geëxporteerd niet in, het zal veel van de geluidskwaliteit verliezen.) Verwijder het klik spoor als je dit nog niet hebt gedaan, ga daarna naar `File menu -> Export -> Export as WAV`, sla dan het bestand op in een locatie naar keuze.

::: tip NOTE het uitvoeren van elke vorm van audio-verwerking op een nummer zal het geluid onvermijdelijk veranderen, Maar het is een belangrijke stap om je spelers het beste level en de beste ervaring te geven. :::

#### Jouw nummer luider maken
Als de chorus van je nummer een lagere RMS-waarde heeft dan de aanbevolen **-11db** dan moet je compressie of beperking doen om het volume te verhogen. (Opmerking: Amplify/Gain wordt hier niet voor gebruikt, omdat alles boven 0db een onaangename vervorming zal creëren.)

Om te controleren of je Compressor moet toepassen voordat je de Limiter gaat gebruiken, analyseer je de golfvorm visueel. Als er veel scherpe pieken zijn met een redelijk constante grootte tijdens het lied, zoals weergegeven in het onderstaande voorbeeld, dan hoef je geen compressor toe te passen. Alleen een Limiter is voldoende (ga verder naar [Limiter](#limiter)).

![Een liedje bekijken dat te stil is](~@images/mapping/louder.png)

Maar als de golflengte sterk varieert tussen zachte en luide delen, zal er waarschijnlijk eerst compressie nodig zijn.

#### Compressie

1. Selecteer het hele nummer door te dubbelklikken op het nummerspoor.
2. Ga naar `Effects menu -> Compressor`.
3. Om te beginnen, kopieer je de onderstaande instellingen en klik op OK. Zorg ervoor dat `Compress based on Peaks` is gevinkt. ![Compressie begrijpen](~@images/mapping/compression.png)

Hier is een vergelijking van de voor (boven) en na (onder) veranderingen van de Compressor: ![Voor en na compressie](~@images/mapping/bna_compression.png)

Controleer het nummer opnieuw en luister naar onnatuurlijke vervormingen, zoals volumevermindering na luide pieken. Als dit het geval is, maak de aanpassingen ongedaan (`Ctrl-Z`), pas de `Threshold` instelling toe op een luidere (minder negatief) piek en doe het opnieuw. Als je meer wilt weten over de instellingen, bekijk dan de [Geavanceerde audio bewerking: Compressor](./advanced-audio.md#compressor) pagina.

#### Begrenzer
De compressor vermindert veel onnodige pieken en maakt de belangrijkere geluiden luider. Maar, we hebben nog steeds niet de juiste RMS volume bereikt voor het nummer. Om dit te bereiken zullen we meer ruimte verwijderen met behulp van het Limiter effect:

1. Selecteer het hele nummer door te dubbelklikken op het nummerspoor.
2. Ga naar `Effects menu -> Limiter...`.
3. Om te beginnen, kopieer je de onderstaande instellingen:  
   ![Limiter in Audacity](~@images/mapping/limiter.png)
4. Klik op OK om de limiter toe te passen.

Controleer het nummer opnieuw en luister naar onnatuurlijke vervormingen, zoals ernstig verstoorde pieken. Als dit het geval is, maak de aanpassingen ongedaan (`Ctrl-Z`), pas de `Input Gain` instelling aan tot een lager niveau (nog boven de 0db) en doe het opnieuw. Zorg ervoor dat beide `Input Gain` waarden hetzelfde zijn anders word de stereo afbeelding scheef. Als je meer wilt weten over de instellingen van het limiter effect, bekijk dan de [Geavanceerde audio bewerking: Limiter](./advanced-audio.md#limiter) pagina.

Om te weten of je de juiste volume hebt bereikt na het kompressen en limiteren, doe dan de controle met het RMS-volume tool opnieuw:

1. Open Contrast Analyzer in `Analyze menu -> Contrast…`.
2. Met het Contrast Analysis menu nog open, selecteer een deel van de chorus (ongeveer 15-20 seconden) in jouw nummer.
3. Klik op een van de Measure selection knoppen. (We hoeven er maar één te gebruiken).
4. In het `Volume output` veld vind je nu een waarde. Deze waarde moet liggen tussen -8.5db en -9.5db voor optimaal niveau. Zo niet, verwijder dan het limiter proces en verhoog de `Input Gain` met stappen van +/-0.5db en probeer het opnieuw.

Na het na het limiteren zal je zoiets hebben: ![Nummer na beperking](~@images/mapping/bna_limiting.png)

#### Jouw nummer zachter maken
Sommige moderne producenten van elektronische muziek hebben de neiging om hun liedjes luider te maken dan andere. In de zeldzame gevallen dat je zo'n nummer hebt (**RMS-waarde boven -8.5db**) is het **sterk aangeraden** om het volume van het nummer te verlagen om alle Beat Saber liedjes te normaliseren. Dit helpt bij het horen van de blok-hak geluiden en geeft de spelers een veel aangenamere ervaring tijdens het wisselen tussen de liedjes.

Voordat je het volume verlaagt wil je weten met hoeveel je het ongeveer moet verlagen. Doe dit door te checken met de RMS volume tool:

1. Open Contrast Analyzer in `Analyze menu -> Contrast…`.
2. Met het Contrast Analysis menu nog open, selecteer een deel van de chorus (ongeveer 15-20 seconden) in jouw nummer.
3. Klik op een van de Measure selection knoppen. (We hoeven er maar één te gebruiken).
4. In het Volume output veld vind je nu een waarde. Bereken het verschil tussen jouw waarde en -8.5db en onthoud deze waarde.
5. Sluit het Contrast Analyse menu.

Laten we nu het Amplify effect gebruiken om het volume te verlagen:

1. Selecteer het hele nummer door te dubbelklikken op het nummerspoor.
2. Ga naar `Effects menu -> Amplify...`.
3. Voer het eerder berekende verschil waarde in (moet negatief zijn) in het `Amplification` veld. Het `Nieuw Peak Amplification` veld zal herhalen wat het eerste invoerveld zegt, Dit is normaal voor een liedje dat al op 0db piekt. ![Amplification menu](~@images/mapping/amplify.png)
4. Klik op OK om een negatief Amplify effect toe te passen.
5. Klaar.

Om te weten of je de juiste volume hebt bereikt, doe dan de controle met het RMS-volume tool opnieuw:

1. Open Contrast Analyzer in `Analyze menu -> Contrast…`.
2. Met het Contrast Analysis menu nog open, selecteer een deel van de chorus (ongeveer 15-20 seconden) in jouw nummer.
3. Klik op een van de `Measure selection` knoppen. (We hoeven er maar één te gebruiken).
4. In het `Volume output` veld vind je nu een waarde. Deze waarde moet liggen tussen -8.5db en -9.5db voor optimaal niveau. Zo niet, verwijder dan het Amplify proces en verander de Input waarde met stappen van +/-0.5db en probeer het opnieuw.

Na het negatieve Amplify effect zal je liedje er ongeveer zo uitzien: ![Amplification effect](~@images/mapping/bna_amplify.png)

### Outro bijknippen
In Beat Saber gaat het level door voor zolang het audiobestand duurt. Bijv. dit betekend dat als er vijf seconden stilte is aan het eind van het nummer, het level doorgaat totdat deze voorbij is en de speler naar het score menu gaat. Daarom is het belangrijk om de de tijd vanaf het laatste blok tot het eind van het nummer goed in de gaten te houden.

Ga naar het einde van je nummer en speel het laatste deel en de outro. Vanaf het punt waar je van plan bent het laatste blok(ken) wilt hebben, tel tot 3 of 4 seconden en zet het op pauze. De plek waar je afspeelcursor zich nu bevindt is waar je je nummer over het algemeen moet knippen. (Uiteraard zullen alle nummers verschillen, dus doe wat het meest logisch is voor jouw nummer.)

Om het einde op dit punt eraf te halen doe je het volgende:

1. Vanuit de gepauzeerde playback positie sleep je een selectie van hier tot het eind van het spoor (verticale gele lijn) en klik dan op de `Delete` knop om dit deel te verwijderen.
2. Maak een nieuwe selectie van het eind van het nummerspoor (verticale gele lijn) en ongeveer 2 tot 3 seconden terug.
3. Ga naar `Effects menu -> Studio Fade Out`.
4. Klaar.

Het nummer zal nu vervagen net voor het einde van het level en de speler zal veel sneller gepresenteerd worden met de score resultaten.

### Intro bijknippen
Deze stap kan handig zijn als je een mooiere fade-in voor je nummer moet maken.

Als jouw spoor pijlen heeft die naar links wijzen aan het begin ervan betekend het dat je de audio vooruit buiten de tijdslijn hebt geschoven. Als je dit gedaan hebt om de intro, hoewel niet nodig, korter te maken. Is het handig om de audioclip bij te snijden en een fade-in toe te voegen. Om het korter te maken en een (optionele) fade-in toe te voegen in het nummer moet je het volgende doen:

1. Sleep een selectie van 0.0 seconden naar het einde van het audiospoor (verticale gele lijnen).
2. Klik op Trim audio outside selection (![Trim audio to selection](~@images/mapping/trim.png)). De pijlen zouden nu moeten verdwijnen.
3. (Optioneel) Maak een selectie van het begin nummer (verticale gele lijn) tot ongeveer 0.5-1 seconden (afhankelijk van de intro).
4. (Optioneel) Ga naar `Effect menu -> Fade In`.
5. Klaar.

Vóór (links) en ná het inkorten en het toepassen van een fade-in (rechts):

![Intro van het nummer bijknippen](~@images/mapping/trim_fade.png)

## Exporteren
We hebben nu onze gebruiksklare audio die je in de editor en het spel zult gebruiken en horen. Het wordt aangeraden om nog een WAVE bestandsback-up te maken voor het geval je opnieuw naar OGG moet exporteren met een andere kwaliteitsinstelling. (`File menu -> Export as WAV`).

Om een compatibel geluidsbestand te genereren moeten we het volgende doen:

1. Verwijder het Klik Spoor (als je dat nog niet hebt gedaan).
2. Klik op `File menu -> Export -> Export as OGG`.  
   ![Exporteren als Ogg locatie](~@images/mapping/audacity-export.png)
3. Noem jouw bestand `song.ogg`.
4. Kies een passende OGG-kwaliteit ([meer info hier](./advanced-audio.md#choosing-appropriate-ogg-export-quality)):  
   ![Exporteer kwaliteit schuifbalk](~@images/mapping/export-quality.png)
   * Hoge kwaliteit audiobestand (WAVE / FLAC / MP3 / AAC): gebruik 6-9 (tenzij er problemen zijn met de bestandsgrootte).
   * Lage kwaliteit audiobestand (YouTube of vergelijkbaar): gebruik 3-5.
5. Klik op Save.

Het audiobestand is nu klaar voor gebruik in elke level editor. Voer dezelfde BPM, die je eerder hebt gevonden, in in je gekozen level editor en zorg ervoor dat je 0ms offset gebruikt voor alle niveaus (omdat het nummer al is gesynchroniseerd met de beat).

::: warning OPMERKING Het audiobestand mag niet groter zijn dan ~12MB door BeatSavers 14,3MB zipbestand limiet. De vermelde 15 MB klopt niet. Als dit het geval is exporteer dan naar een lagere kwaliteit totdat de bestandsgrootte van het bestand voldoet aan het limiet. ZIP-bestanden van meer dan 8 MB kunnen niet rechtstreeks worden gedeeld op Discord (zonder Nitro of Server Boost Level 2) om deze te testen. :::

## Bijdragen
Inhoud op deze pagina wordt afgeleid van de handleidingen door [Kolezan](./mapping-credits.md#kolezan) & [Nik](./mapping-credits.md#nik-n3tman).
