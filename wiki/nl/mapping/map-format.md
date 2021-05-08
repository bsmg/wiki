---
sidebar: auto
prev: ./intermediate-mapping.md
next: false
description: Neem een diepe duik in het formaat van een Beat Saber level.
---

# Level formaat
Er zijn enkele gevallen waar de beschikbare programma's en level editors niet elke functionaliteit bieden die je wilt. Je voelt je misschien ook geïnspireerd om een programma of level editor te maken gewoon voor de lol.

Klein probleempje dus. Wat *precies* gaat er in een level bestand? Dit is belangrijk om te begrijpen bij het ontwikkelen van nieuwe programma's, scripts en editors.

Deze pagina helpt je om de interne werking van een volledig Beat Saber level te begrijpen en informatie te verkrijgen over wat elk eigenschap en waarde betekend.

## Schemas
Een *schema* is eigenlijk een set van regels voor een specifiek soort bestand. Ze hebben een lijst met regels die je *mag* breken, en regels die je *niet* mag breken.

Beat Saber bevat zijn eigen schema; het definieert wat het formaat van een Beat Saber level moet zijn en dat is wat we hier gaan uitleggen.

### BeatSaver schema
De leden van de community zijn echter samen gekomen en hebben hun eigen schema gemaakt, wat regels die door Beat Saber's eigen schema zijn vastgesteld forceert, maar ook *nieuwe* regels maakt en stelt om te volgen.

Dit door de community gemaakte schema wordt gebruikt door BeatSaver, die [je hier kunt vinden](https://github.com/lolPants/beatmap-schemas). Bij het uploaden van je level naar BeatSaver, controleert het met deze schemabestanden om te bepalen of het geschikt is om te uploaden. Een belangrijke verandering in dit schema is de opname van `_customData` objecten verspreid over level bestanden, die hier worden uitgelegd.

Je kunt door het BeatSaver Schema lezen om een beter inzicht te krijgen in wat er in een Beat Saber level hoort, en zorg ervoor dat je eigen programma de juiste levels uitvoert die kunnen worden geüpload naar BeatSaver.

## `Info.dat`
`Info.dat` is het belangrijkste bestand voor een Beat Saber level. Het beschrijft de basis metadata van jouw level, het verwijst ook naar de bestanden die gebruikt worden voor de niveaus, omslagfoto en audio.

:::warning Het is uiterst belangrijk dat je dit correct doet, anders zal het level niet laden in Beat Saber. :::

### Base Object
Hier is het basisformaat voor een `Info.dat` bestand. Merk op dat de difficulty beatmap sets weg zijn gelaten, deze worden later op de pagina uitgelegd.

```json
{
    "_version": "2.0.0",
    "_songName": "Voorbeeld Nummer",
    "_songSubName": "",
    "_songAuthorName": "Nummer Atiest",
    "_levelAuthorName": "Jij",
    "_beatsPerMinute": 120,
    "_shuffle": 0,
    "_shufflePeriod": 0.5,
    "_previewStartTime": 31.5,
    "_previewDuration": 7,
    "_songFilename": "song.ogg",
    "_coverImageFilename": "cover.jpg",
    "_environmentName": "BigMirrorEnvironment",
    "_allDirectionsEnvironmentName" : "GlassDesertEnvironment",
    "_songTimeOffset": 0,
    "_customData": {
        // Elke custom data komt hier.
    // Als dit leeg is, moet dit volledig worden verwijderd.
  },
    "_difficultyBeatmapSets": [
        // Difficulty beatmap sets (en difficulty beatmaps) worden later op de pagina uitgelegd.
    // Check de zijbalk!
  ]
}
```

#### _version
Dit veld beschrijft de versie van het level-formaat dat we gebruiken. Op dit moment is Beat Sabers levelformaat op versie `2.0.0`.

#### _songName
Dit veld beschrijft de naam van jouw nummer.

#### _songSubName
Dit veld beschrijft alle extra titels die in jouw nummer zouden kunnen komen. Deze kunnen bestaan uit het volgende:

* Extra artiesten (zoals speciale artiesten)
* Elke variatie in productie (Song remix, VIP, etc.)

#### _songAuthorName
Dit veld beschrijft de hoofdartiest, groep, band, merk, enz. voor het lied.

#### _levelAuthorName
Dit veld beschrijft de persoon die het level heeft gemaakt. Dat ben jij! Of, degene die een level maakt met jouw programma of level editor.

#### _beatsPerMinute
Dit beschrijft de Beats Per Minute (BPM) van jouw nummer. Dit is een floating point nummer, dus BPM waarden met decimalen worden ondersteund.

#### _shuffle
Dit en [`_shufflePeriod`](#shuffleperiod) zijn ongewoon in de community. Als je liedje "zwaait", waar sommige beats in een maat opzettelijk een offset hebben tegenover de rest, kan je potentiële timing problemen op je level corrigeren door `_shuffle` en [`_shufflePeriod`](#shuffleperiod) te gebruiken.

`_shuffle` geeft aan hoe ver objecten zich bewegen wanneer bepaald wordt dat deze op een swing beat zijn. Een positieve waarde betekent dat ze vooruit in de tijd worden verplaatst en een negatieve waarde betekent dat ze terug in de tijd worden verplaatst.

Het totale hoeveelheid waarmee ze worden verplaatst wordt beschreven in [`_shufflePeriod`](#shuffleperiod), omdat ze allebei samenwerken om die waarde te produceren.

#### _shufflePeriod
`_shufflePeriode` wordt gebruikt om te bepalen* wanneer* een swing beat zal plaatsvinden. Specifieker, het is de tijd (in beats) waar een swing beat zal plaatsvinden.

Maar helaas is het ingewikkelder dan dit. Beat Saber wisselt tussen een swing beat en een normale beat met behulp van deze waarde. Laten we bijvoorbeeld aannemen dat je een `_shufflePeriode` hebt van `0.25`. Dit vertelt Beat Saber dat, elke `0.25` beats, het zal afwisselen tussen een swing beat en een normale beat, en zal een offset toepassen als het in een swing beat terechtkomt.

De offset waarde die wordt toegepast op objecten op een swing beat is ongeveer gelijk aan `_shuffle * _shufflePperiod` beats.

Om dit hopelijk beter te begrijpen is hier een tabel van beats, of ze nu een swing beat zijn of niet. en de *werkelijke* beat objecten die op die tijdstippen zullen spawnen. Voor dit voorbeeld, gaan we ervan uit dat
`_shuffle</a> 0.2` is, en dat `_shufflePeriode 0.25` is.</p> 

| Beat van levelbestand | Is het een Swing Beat? | Resulterende beat |
| --------------------- | ---------------------- | ----------------- |
| 0                     | Nee                    | 0                 |
| 0.25                  | Ja                     | 0,3               |
| 0.5                   | Nee                    | 0.5               |
| 0.75                  | Ja                     | 0.8               |
| 1                     | Nee                    | 1                 |
| 1.25                  | Ja                     | 1.3               |
| 1.5                   | Nee                    | 1.5               |
| 1.75                  | Ja                     | 1.8               |




#### _previewStartTime

Dit bepaalt de starttijd (in seconden) voor het in-game voorbeeld van je level. Dit is een floating point nummer, dus waarden met decimalen worden ondersteund.



#### _previewDuration

Dit bepaalt de duur (in seconden) van het in-game voorbeeld van je level. Dit is een floating point nummer, dus waarden met decimalen worden ondersteund.



#### _songFilename

Dit is de lokale locatie naar het audiobestand van je level. In de meeste gevallen zijn de levelbestanden in dezelfde map dus dan is dit alleen de naam en de extensie voor jouw audiobestand (bijvoorbeeld `song.ogg`).



#### _coverImageFilename

Dit is de lokale locatie naar de omslagfoto van je level. Zowel de `.jpg` als `.png` bestandstypen zijn ondersteund. Vergelijkbaar met [`_songFilename`](#songfilename), is dit is meestal alleen de naam en extensie voor de omslagfoto (bijvoorbeeld `cover.jpg`).



#### _environmentName

Dit definieert de interne ID voor de omgeving die het level gebruikt. Om een volledige lijst met geldige omgevingen te krijgen, zie de `Info.dat` namen van elke omgeving in de [Omgevingsvoorbeelden](./basic-lighting.md#omgevingsvoorbeelden) sectie.



#### _allDirectionsEnvironmentName

Dit definieert de interne ID voor de omgeving die het level gebruikt tijdens het spelen in 360 graden of 90 graden levels. Dit is een verplicht veld, ook al bevat het level geen 360 of 90 graden niveaus. Om een volledige lijst met geldige 360 graden omgevingen te krijgen, zie de `Info.dat` namen van elke omgeving in de [Omgevingsvoorbeelden](./basic-lighting.md#omgevingsvoorbeelden) sectie.



#### _songTimeOffset

Dit is de manier van Beat Saber om off-sync audio aan te pakken. Dit offset de audio in het spel, gebaseerd op de waarde van `_songTimeOffset` in milliseconden.

:::warning Hit sounds worden ook beïnvloed door dezelfde offset. We raden de level maker aan om hun audio bestand te synchroniseren *voordat* ze beginnen met het maken van hun level, zoals beschreven in de [Standaard audio setup gids](./basic-audio.md), om elke behoefte aan `_songTimeOffset` en verwante alternatieven te omzeilen. :::



#### _customData

Dit is een optioneel veld dat gegevens bevat die niet gerelateerd zijn aan het officiële Beat Saber level formaat. Als er geen custom data is, dan moet dit object volledig verwijderd worden.

De exacte specificaties over wat er in `_customData` gaat, ligt er helemaal aan de content dat gemaakt is door de community die het nodig heeft. Daarom kunnen we hier niet alle `_customData` velden vermelden. Je moet je eigen onderzoek doen in de Beat Saber community om level editors, programma's of mods te vinden die dit `_customData` object gebruiken.



#### _difficultyBeatmapSets

Dit is een lijst van alle [Difficulty Beatmap Sets](#difficulty-beatmap-sets) gedefinieerd in het level.



### Difficulty Beatmap Sets

Difficulty Beatmap Sets zijn groepen van niveaus, die allemaal onder één kenmerk vallen. Deze vertegenwoordigen jouw Standard, No Arrow, One Saber, en andere kenmerken.



```json
{
  // ... De rest van de Info.dat ...
  "_songTimeOffset": 0,
    "_difficultyBeatmapSets": [
        {
            "_beatmapCharacteristicName": "Standard",
            "_difficultyBeatmaps": [
                // Difficulty beatmap worden later op de pagina uitgelegd.
        // Check de zijbalk!
      ]
    }
  ]
}
```




#### _beatmapCharacteristicName

Dit is de naam van het kenmerk dat aan deze level set is gekoppeld.

Hieronder staan alle veelgebruikte kenmerken. Hoewel ze geen tot weinig "regels" aan zich vast hebben in Beat Saber, hebben ze nog steeds een doel, en zouden ze gevold moeten worden door beide de level editor en de level maker die het level maakt.

Bepaalde kenmerken, die in de onderstaande lijst zijn gemarkeerd, komen niet van het basis spel; maar ze worden toegevoegd door externe mods zoals SongCore. Deze modded kenmerken werken alleen als de gebruiker mods heeft geïnstalleerd die ze toevoegen. en zullen *niet* verschijnen op unmodded kopieën van Beat Saber en kan ervoor zorgen dat het level niet geladen wordt.

| Naam van het karakteristiek | Inbegrepen in het spel | Waar het voor bedoeld is                                                                                      |
|:---------------------------:|:----------------------:| ------------------------------------------------------------------------------------------------------------- |
|         `Standaard`         |           ✔️           | Standaard levels die de standaard gidsen volgen.                                                              |
|         `NoArrows`          |           ✔️           | Beperkt blokken tot Dot (alle richtingen) blokken.                                                            |
|         `OneSaber`          |           ✔️           | Beperkt blokken tot de rechter (blauwe) blokken, en schakelt de linker (rode) blokken uit.                    |
|         `360Degree`         |           ✔️           | Schakelt rotatie evenementen in zonder beperking op de totale rotatie.                                        |
|         `90Degree`          |           ✔️           | Schakelt rotatie evenementen in, maar beperkt deze tot een totale rotatie van 45 graden naar links en rechts. |
|         `Lightshow`         |           ❌            | De plek voor levels die alleen maar verlichtingsevenementen bevatten.                                         |
|          `Lawless`          |           ❌            | Modded levels en modcharts kunnen hier veilig worden geplaatst. Er gelden geen regels hiervoor.               |




#### _difficultyBeatmaps

Dit is een lijst van [Difficulty Beatmaps](#difficulty-beatmaps) gedefinieerd in dit level set.



### Difficulty Beatmaps

Difficulty Beatmaps zijn elk "niveau" van een level. Ze bevatten informatie dat anders is per niveau, zoals [Note Jump Speed](#notejumpmovementspeed), en de locatie van het niveaubestand.



```json
{
  // ... De rest van de Info.dat ...
  "_songTimeOffset": 0,
    "_difficultyBeatmapSets": [
        {
            "_beatmapCharacteristicName": "Standard",
            "_difficultyBeatmaps": [
                {
                    "_difficulty": "ExpertPlus",
                    "_difficultyRank": 9,
                    "_beatmapFilename": "StandardExpertPlus.dat",
                    "_noteJumpMovementSpeed": 18,
                    "_noteJumpStartBeatOffset": 0,
                    "_customData": {
                        // Elke custom data zal hier komen.
            // Als dit leeg is, moet dit volledig worden verwijderd.
          }
        }
      ]
    }
  ]
}
```




#### _difficulty

Dat is het interne niveau, wat geleest word door Beat Saber.

In tegenstelling tot wat je zou kunnen denken, is dit *niet* maar een normale tekenreeks, maar eerder een opsomming. Hier is een lijst van alle geldige niveaus:

* `Easy`
* `Normal`
* `Hard`
* `Expert`
* `ExpertPlus`



#### _difficultyRank

Dit is de sorteervolgorde in het nummerselectie scherm in Beat Saber.

Hoewel dit een gewoon geheel getal is, maakt het veel gebruikte [BeatSaver Schema](#beatsaver-schema) dit nóg een opsomming, gebaseerd op de bovenstaande [`_difficulty`](#difficulty) waarde:

| `_difficulty` | BeatSaver's verwachte `_difficultyRank` |
| ------------- |:---------------------------------------:|
| `Easy`        |                    1                    |
| `Normal`      |                    3                    |
| `Hard`        |                    5                    |
| `Expert`      |                    7                    |
| `ExpertPlus`  |                    9                    |




#### _beatmapFilename

Dit is de locatie van het niveaubestand, wat de blokken, obstakels en verlichtingsevenementen bevat.

Vergelijkbaar met de [`_songFilename`](#songfilename) en [`_coverImageFilename`](#coverimagefilename) van eerder, in veel gevallen is dit alleen maar de naam en extensie (altijd `.dat`) naar het level bestand.

Bij het maken van *nieuwe* niveaus, wordt het aanbevolen dat de naam een van de kenmerken is voor het niveaus parent [Beatmap Set](#difficulty-beatmap-sets), gevolgd door de [`_difficulty`](#difficulty) waarde. Bijvoorbeeld, dit specifieke niveau moet er voor zorgen dat het niveaubestand `StandardExpertPlus.dat` heet.



#### _noteJumpMovementSpeed

Note Jump Movement Speed (afgekort tot "Note Jump Speed", of gewoon "NJS") is de snelheid waarmee objecten de speler naderen, in meters per seconde. Informatie over aanbevolen NJS waarden kan worden gevonden in de [Intermediare mapping pagina](./intermediate-mapping.md#note-jump-speed-spawn-distance). Dit kan een floating point nummer zijn voor preciezere snelheden.

Dit word gebruikt samen met de ingestelde BPM van het nummer om 2 belangrijke waardes te berekenen, genaamd Jump Duration en Jump Distance.

* Jump Duration is de hoeveelheid beats waar objecten actief kunnen zijn.
* Jump Distance is de totale hoeveelheid afstand dat objecten nodig hebben om binnen die Jump Duration te reizen.

De speler staat precies in het midden van deze twee waarden, dus de meeste mappers vinden het handiger om Half Jump Distance en Half Jump Duration te hebben.

* Half Jump Distance is de afstand vanaf de speler waar de objecten spawnen. Sommige mappers noemen dit het "Spawn Point".
* Half Jump Duration is de hoeveelheid beats die nodig zijn voordat het bij de speler is. Het is ook de hoeveelheid beats, vooruit in de tijd, waar objecten spawnen.



#### _noteJumpStartBeatOffset

Deze waarde geld als een directe offset voor de Half Jump Duration, uitgelegd in [`_noteJumpMovementSpeed`](#notejumpmovementspeed), wat op zijn buurt de Jump Distance beinvloed. Dit kan een floating point nummer zijn om een preciezere Jump Duration te krijgen.



#### _customData

Dit is een optioneel veld dat gegevens bevat die niet gerelateerd zijn aan het officiële Beat Saber level formaat. Als er geen custom data is, dan moet dit object volledig verwijderd worden.

De exacte specificaties over wat er in `_customData` gaat, ligt er helemaal aan de content dat gemaakt is door de community die het nodig heeft. Daarom kunnen we hier niet alle `_customData` velden vermelden. Je moet je eigen onderzoek doen in de Beat Saber community om level editors, programma's of mods te vinden die dit `_customData` object gebruiken.



## Niveau bestand

Elk niveau beatmap bevat een overeenkomend bestand dat de blokken, obstakels, evenementen en andere objecten voor dat specifieke niveau bevat.



### Basisobject



```json
{
    "_version": "2.0.0",
    "_notes": [],
    "_obstacles": [],
    "_events": [],
    "_customData": {
        // Elke custom data zal hier komen.
    // Als dit leeg is, moet dit volledig worden verwijderd.
  }
}
```




#### _version

Dit veld beschrijft de versie van het level-formaat dat we gebruiken. Op dit moment is Beat Sabers levelformaat op versie `2.0.0`.



#### _notes

Dit is een lijst van [blok](#notes-2) objecten voor het level.



#### _obstacles

Dit is een lijst van [obstakel](#obstacles-2) objecten voor het level.



#### _events

Dit is een lijst van [evenement](#events-2) objecten voor het level.



#### _customData

Dit is een optioneel veld dat gegevens bevat die niet gerelateerd zijn aan het officiële Beat Saber level formaat. Als er geen custom data is, dan moet dit object volledig verwijderd worden.

De exacte specificaties over wat er in `_customData` gaat, ligt er helemaal aan de content dat gemaakt is door de community die het nodig heeft. Daarom kunnen we hier niet alle `_customData` velden vermelden. Je moet je eigen onderzoek doen in de Beat Saber community om level editors, programma's of mods te vinden die dit `_customData` object gebruiken.



### Blokken



```json
{
    "_time": 10,
    "_lineIndex": 1,
    "_lineLayer": 0,
    "_type": 0,
    "_cutDirection": 1,
    "_customData": {
        // Elke custom data zal hier komen.
    // Als dit leeg is, moet dit volledig worden verwijderd.
  }
}
```




#### _time

De tijd, in beats, waarin dit object de speler bereikt.



#### _lineIndex

Een geheel getal, van 0 tot 3, dat de kolom weergeeft waar dit blok zich bevindt. De meest linker kolom bevindt zich op index 0 en gaat omhoog naar de meest rechter op index 3.



#### _lineLayer

Een geheel getal, van 0 tot 2, dat de laag weergeeft waar dit blok zich bevindt. De meest onderste laag bevindt zich op index 0 en gaat omhoog naar de bovenste op index 3.



#### _type

Dit geeft aan wat voor type blok er is. Op dit moment zijn er 4 bekende types, maar 1 blijft ongebruikt:

| `_type` | Resultaat             |
|:-------:| --------------------- |
|   `0`   | Linker (rode) blok    |
|   `1`   | Rechter (Blauwe) blok |
|   `2`   | Ongebruikt            |
|   `3`   | Bom                   |




#### _cutDirection

Dit geeft de richting aan waarin het blok geraakt moet worden.

| `_cutDirection` | Resultaat       |
|:---------------:| --------------- |
|       `0`       | Omhoog          |
|       `1`       | Omlaag          |
|       `2`       | Links           |
|       `3`       | Rechts          |
|       `4`       | Links boven     |
|       `5`       | Rechts boven    |
|       `6`       | Links onderin   |
|       `7`       | Rechts onderin  |
|       `8`       | Elke (Dot blok) |




#### _customData

Dit is een optioneel veld dat gegevens bevat die niet gerelateerd zijn aan het officiële Beat Saber level formaat. Als er geen custom data is, dan moet dit object volledig verwijderd worden.

De exacte specificaties over wat er in `_customData` gaat, ligt er helemaal aan de content dat gemaakt is door de community die het nodig heeft. Daarom kunnen we hier niet alle `_customData` velden vermelden. Je moet je eigen onderzoek doen in de Beat Saber community om level editors, programma's of mods te vinden die dit `_customData` object gebruiken.



### Obstakels



```json
{
    "_time": 10,
    "_lineIndex": 1,
    "_type": 0,
    "_duration": 10,
    "_width": 1,
    "_customData": {
        // Elke custom data zal hier komen.
    // Als dit leeg is, moet dit volledig worden verwijderd.
  }
}
```




#### _time

De tijd, in beats, waarin dit object de speler bereikt.



#### _lineIndex

Een geheel getal, van 0 tot 3, dat de kolom weergeeft waar de linkerkant van dit obstakel zich bevindt. De meest linker kolom bevindt zich op index 0 en gaat omhoog naar de meest rechter op index 3.



#### _type

Een geheel getal wat de staat van het obstakel weergeeft.

| `_type` | Resultaat             |
|:-------:| --------------------- |
|   `0`   | Volledige hoogte muur |
|   `1`   | Hurk/buk muur         |




#### _duration

De tijd, in beats, dat het obstakel actief is. Hoewel `_duration` in negatieve getallen kan gaan, wees ervan bewust dat dit enkele onbedoelde effecten heeft.



#### _width

Hoeveel kolommen het obstakel opneemt. Een `_width` van `4` betekent dat deze muur zich over het volledige speelbare raster verlengt. Hoewel `_width` in negatieve getallen kan gaan, wees ervan bewust dat dit enkele onbedoelde effecten heeft.



#### _customData

Dit is een optioneel veld dat gegevens bevat die niet gerelateerd zijn aan het officiële Beat Saber level formaat. Als er geen custom data is, dan moet dit object volledig verwijderd worden.

De exacte specificaties over wat er in `_customData` gaat, ligt er helemaal aan de content dat gemaakt is door de community die het nodig heeft. Daarom kunnen we hier niet alle `_customData` velden vermelden. Je moet je eigen onderzoek doen in de Beat Saber community om level editors, programma's of mods te vinden die dit `_customData` object gebruiken.



### Evenementen



```json
{
    "_time": 10,
    "_type": 1,
    "_value": 3,
    "_customData": {
        // Elke custom data zal hier komen.
    // Als dit leeg is, moet dit volledig worden verwijderd.
  }
}
```




#### _time

De tijd, in beats, waarin dit object de speler bereikt.



#### _type

Een geheel getal dat aangeeft welk soort evenement dit object vertegenwoordigt.

| `_type` | Resultaat                                                                                                                      |
|:-------:| ------------------------------------------------------------------------------------------------------------------------------ |
|   `0`   | Bepaalt de lichten in de `Back Lasers` groep.                                                                                  |
|   `1`   | Bepaalt de lichten in de `Ring Lights` groep.                                                                                  |
|   `2`   | Bepaalt de lichten in de `Left Rotating Lasers` groep.                                                                         |
|   `3`   | Bepaalt de lichten in de `Right Rotating Lasers` groep.                                                                        |
|   `4`   | Bepaalt de lichten in de `Center Lights` groep.                                                                                |
|   `5`   | (Eerder niet gebruikt) Bepaalt de boost lichtkleuren (secundaire kleuren).                                                     |
|   `6`   | Ongebruikt.                                                                                                                    |
|   `7`   | Ongebruikt.                                                                                                                    |
|   `8`   | Maakt een draai aan een ring in de omgeving. Wordt niet beïnvloed door [`_value`](#value).                                     |
|   `9`   | Bepaalt de zoom voor toepasselijke ringen. Wordt niet beïnvloed door [`_value`](#value).                                       |
|  `10`   | (Eerder niet gebruikt) Officiële BPM wijzigingen.                                                                              |
|  `11`   | Ongebruikt.                                                                                                                    |
|  `12`   | Bepaalt de rotatiesnelheid voor toepasselijke lichten in `Left Rotating Lasers`.                                               |
|  `13`   | Bepaalt de rotatiesnelheid voor toepasselijke lichten in `Right Rotating Lasers`.                                              |
|  `14`   | (Eerder niet gebruikt) 360/90 Early rotation. Draait toekomstige objecten, terwijl het tegelijkertijd ook objecten draait.     |
|  `15`   | (Eerder niet gebruikt) 360/90 Late rotation. Draait toekomstige objecten, terwijl het tegelijkertijd ook objecten niet draait. |


:::danger Gewoon omdat er een evenement type is dat staat aangegeven als ongebruikt, betekent *niet* dat je vrij bent om deze te gebruiken!

Beat Games staat er bekend voor het maken van eerder ongebruikte evenementen types voor bepaalde functies, zoals de introductie van 360&deg;/ 90&deg; levels. Dit heeft sommige Beat Saber levels gebroken dat gebruik maakte van oude MediocreMapper BPM wijzigingen, evenals levels die Custom Platforms gebruikten die gebruikt maakten van de ongebruikte evenement types. :::



#### _value

Afhankelijk van de eerder genoemde [`_type`](#type) van het evenement, kan de `_value` ervan verschillende dingen doen.



##### Verlichting besturen

Het standaardgedrag is het regelen van de helderheid en kleur van de lichten, en volgt deze tabel:

| `_value` | Resultaat                                                                             |
|:--------:| ------------------------------------------------------------------------------------- |
|   `0`    | Zet de lichtgroep uit.                                                                |
|   `1`    | Verandert het licht naar blauw en zet het licht aan.                                  |
|   `2`    | Verandert de lichten naar blauw, en knippert fel voordat het terugkeert naar normaal. |
|   `3`    | Verandert de lichten naar blauw, en knippert fel voordat het terugkeert naar zwart.   |
|   `4`    | Ongebruikt.                                                                           |
|   `5`    | Verandert het licht naar rood en zet het licht aan.                                   |
|   `6`    | Verandert de lichten naar rood, en knippert fel voordat het terugkeert naar normaal.  |
|   `7`    | Verandert de lichten naar rood, en knippert fel voordat het terugkeert naar zwart.    |




##### Het besturen van Boost Colors

| `_value` | Resultaat                                                                       |
|:--------:| ------------------------------------------------------------------------------- |
|   `0`    | Schakelt het evenement uit - schakelt naar het eerste paar (standaard) kleuren. |
|   `1`    | Schakelt het evenement in - schakelt naar het tweede paar kleuren.              |




##### Rings besturen

Wanneer het evenement wordt gebruikt om de ring spin of ring zoom te besturen, doet de `_value` van het evenement niets.



##### Officiële BPM wijzigingen

Wanneer het evenement wordt gebruikt om de BPM te besturen, representeert `_value` de nieuwe BPM.

De nieuwe BPM verplaatst de interne [`_time`](#time-2) waardes voor toekomstige objecten niet. In plaats daarvan berekent het de interne game waarden (zoals Half Jump Duration en Jump Distance) opnieuw om het effect van het spelen van het level op de nieuwe BPM te verbeteren.

Een nadeel hiervan is dat `_value` *altijd* een heel getal moet zijn, en het ondersteund geen floating point nummers (geen decimalen).

:::warning Sinds Beat Saber `1.10.0` zijn officiële BPM wijzigingen kapot en hebben ongewenste effecten wanneer deze gebruikt worden in een level.

Als je hier absoluut omheen wilt werken, moet je een new BPM change evenement maken, zodat:

1. Dit nieuwe evenement *moet* exact dezelfde [_time</code>](#time-2) waarde hebben als de BPM change evenement dat je correct wilt laten starten.
2. Dit nieuwe evenement *moet* exact dezelfde `_value` als de vorige BPM change hebben, of de [`_beatsPerMinute`](#beatsperminute) gedefinieerd in [`Info.dat`](#info-dat).

3. Dit nieuwe evenement *moet* gebeuren voor de BPM change dat je correct wilt laten starten, *ookal hebben ze dezelde [`_time`](#time-2) waarden.* :::



##### Laser Rotation Speed besturen

Wanneer het evenement dat gebruikt word om laser speed te besturen op een groep lichten, word de `_value` gebruikt als vermenigvuldigingsfactor van hun basis snelheid.

Als `_value` `0` is, wordt de willekeurige rotatie offset voor elke laser ook gereset, wat er voor zorgt alle roterende lasers perfect in elkaar zitten.



##### 360/90 rotatie besturen

Wanneer het evenement dat gebruikt word rotatie in een 360/90 graden level te besturen, word de `_value` gebruikt om rotatie toe te voegen wat gelijk staat aan de volgende tabel:

| `_value` | Resultaat          |
|:--------:| ------------------ |
|   `0`    | 60 graden linksom  |
|   `1`    | 45 graden linksom  |
|   `2`    | 30 graden linksom  |
|   `3`    | 15 graden linksom  |
|   `4`    | 15 graden rechtsom |
|   `5`    | 30 graden rechtsom |
|   `6`    | 45 graden rechtsom |
|   `7`    | 60 graden rechtsom |




#### _customData

Dit is een optioneel veld dat gegevens bevat die niet gerelateerd zijn aan het officiële Beat Saber level formaat. Als er geen custom data is, dan moet dit object volledig verwijderd worden.

De exacte specificaties over wat er in `_customData` gaat, ligt er helemaal aan de content dat gemaakt is door de community die het nodig heeft. Daarom kunnen we hier niet alle `_customData` velden vermelden. Je moet je eigen onderzoek doen in de Beat Saber community om level editors, programma's of mods te vinden die dit `_customData` object gebruiken.



## Bijdragen

De inhoud van deze pagina is geschreven door [Caeden117](./mapping-credits.md#caeden117).
