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
Een *schema* is eigenlijk een set van regels voor een specifiek soort bestand. Ze hebben een lijst met regels die je *kan* breken, en regels die je *niet* kan breken.

Beat Saber bevat zijn eigen schema; het definieert wat het formaat van een Beat Saber level moet zijn en dat is wat we hier gaan uitleggen.

### BeatSaver schema
De leden van de community zijn echter samen gekomen en hebben hun eigen schema gemaakt, wat regels die door Beat Saber's eigen schema zijn vastgesteld forceert, maar ook *nieuwe* regels maakt en stelt om te volgen.

Dit door de community gemaakte schema wordt gebruikt door BeatSaver, die [je hier kunt vinden](https://github.com/lolPants/beatmap-schemas). Bij het uploaden van je level naar BeatSaver, controleert het met deze schemabestanden om te bepalen of het geschikt is om te uploaden. Een belangrijke verandering in dit schema is de opname van `_customData` objecten verspreid over level bestanden, die hier worden uitgelegd.

Je kunt door het BeatSaver Schema lezen om een beter inzicht te krijgen in wat er in een Beat Saber level hoort, en zorg ervoor dat je eigen programma de juiste levels uitvoert die kunnen worden geüpload naar BeatSaver.

## -= Info.dat =-
`Info.dat` is het belangrijkste bestand voor een Beat Saber level. It describes basic metadata about your map, as well as point to other files to use for difficulties, cover art, and audio.

:::warning Het is uiterst belangrijk dat je dit correct doet, anders zal het level niet laden in Beat Saber. :::

## Basisobject

Hier is het basisformaat voor een `Info.dat` bestand. Notice how difficulty beatmap sets are ommitted; they'll be explained later down this page.

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
        // Elke custom data komt hier. Als dit leeg is, moet dit volledig worden verwijderd.
    },
    "_difficultyBeatmapSets": [
        // Difficulty beatmap sets (en difficulty beatmaps) worden later op de pagina uitgelegd. Check de zijbalk!
    ]
}
```

### _version
Dit veld beschrijft de versie van het level-formaat dat we gebruiken. Op dit moment is Beat Sabers levelformaat op versie `2.0.0`.

### _songName
Dit veld beschrijft de naam van jouw nummer.

### _songSubName
Dit veld beschrijft alle extra titels die in jouw nummer zouden kunnen komen. Deze kunnen bestaan uit het volgende:

- Extra artiesten (zoals speciale artiesten)
- Elke variatie in productie (Song remix, VIP, etc.)

### _songAuthorName
Dit veld beschrijft de hoofdartiest, groep, band, merk, enz. voor het lied.

### _levelAuthorName
Dit veld beschrijft de persoon die het level heeft gemaakt. Dat ben jij! Of, degene die een level maakt met jouw programma of level editor.

### _beatsPerMinute
Dit beschrijft de Beats Per Minute (BPM) van jouw nummer. This is a floating point number, so decimal BPMs are supported.

### _shuffle
Dit en [`_shufflePeriod`](#shuffleperiod) zijn ongewoon in de community. Als je liedje "zwaait", waar sommige beats in een maat opzettelijk een offset hebben tegenover de rest, kan je potentiële timing problemen op je level corrigeren door `_shuffle` en [`_shufflePeriod`](#shuffleperiod) te gebruiken.

`_shuffle` geeft aan hoe ver objecten zich bewegen wanneer bepaald wordt dat deze op een swing beat zijn. Een positieve waarde betekent dat ze vooruit in de tijd worden verplaatst en een negatieve waarde betekent dat ze terug in de tijd worden verplaatst.

Het totale hoeveelheid waarmee ze worden verplaatst wordt beschreven in [`_shufflePeriod`](#shuffleperiod), omdat ze allebei samenwerken om die waarde te produceren.

### _shufflePeriod
`_shufflePeriode` wordt gebruikt om te bepalen* wanneer* een swing beat zal plaatsvinden. Specifieker, het is de tijd (in beats) waar een swing beat zal plaatsvinden.

Maar helaas is het ingewikkelder dan dit. Beat Saber wisselt tussen een swing beat en een normale beat met behulp van deze waarde. Laten we bijvoorbeeld aannemen dat je een `_shufflePeriode` hebt van `0.25`. Dit vertelt Beat Saber dat, elke `0.25` beats, het zal afwisselen tussen een swing beat en een normale beat, en zal een offset toepassen als het in een swing beat terechtkomt.

De offset waarde die wordt toegepast op objecten op een swing beat is ongeveer gelijk aan `_shuffle * _shufflePperiod` beats.

To hopefully help better understand this, here is a table of beats, whether or not they are on a swing beat, and the *actual* beat objects at those times will spawn in at. Voor dit voorbeeld, gaan we ervan uit dat

`_shuffle</a> 0.2` is, en `_shufflePeriode 0.25` is.</p> 

| Beat van levelbestand | Is het een Swing Beat? | Resulterende beat |
| --------------------- |:----------------------:| ----------------- |
| 0                     |          Nee           | 0                 |
| 0.25                  |           Ja           | 0,3               |
| 0.5                   |          Nee           | 0.5               |
| 0.75                  |           Ja           | 0.8               |
| 1                     |          Nee           | 1                 |
| 1.25                  |           Ja           | 1.3               |
| 1.5                   |          Nee           | 1.5               |
| 1.75                  |           Ja           | 1.8               |




### _previewStartTime

Dit bepaalt de starttijd (in seconden) voor het in-game voorbeeld van je level. This is a floating point number, so decimals are supported.



### _previewDuration

Dit bepaalt de duur (in seconden) van het in-game voorbeeld van je level. This is a floating point number, so decimals are supported.



### _songFilename

Dit is de lokale locatie naar het audiobestand van je level. The standard practice is to have every map file in the same directory, so in most cases, this is just the name and extension for your audio file (For example, `song.ogg`).



### _coverImageFilename

Dit is de lokale locatie naar de omslagfoto van je level. Zowel de `.jpg` als `.png` bestandstypen zijn ondersteund. Vergelijkbaar met [`_songFilename`](#songfilename), is dit is meestal alleen de naam en extensie voor de omslagfoto (bijvoorbeeld `cover.jpg`).



### _environmentName

Dit definieert de interne ID voor de omgeving die het level gebruikt. Om een volledige lijst met geldige omgevingen te krijgen, zie de `Info.dat` namen van elke omgeving in de [Omgevingsvoorbeelden](./basic-lighting.md#omgevingsvoorbeelden) sectie.



### _allDirectionsEnvironmentName

Dit definieert de interne ID voor de omgeving die het level gebruikt tijdens het spelen in 360 graden of 90 graden levels. Dit is een verplicht veld, ook al bevat het level geen 360 of 90 graden niveaus. Om een volledige lijst met geldige 360 graden omgevingen te krijgen, zie de `Info.dat` namen van elke omgeving in de [Omgevingsvoorbeelden](./basic-lighting.md#omgevingsvoorbeelden) sectie.



### _songTimeOffset

Dit is de manier van Beat Saber om off-sync audio aan te pakken. Dit offset de audio in het spel, gebaseerd op de waarde van `_songTimeOffset` in milliseconden.

:::warning Hit sounds worden ook beïnvloed door dezelfde offset. We raden de level maker aan om hun audio bestand te synchroniseren *voordat* ze beginnen met het maken van hun level, zoals beschreven in de [Standaard audio setup gids](./basic-audio.md), om elke behoefte aan `_songTimeOffset` en verwante alternatieven te omzeilen. :::



### _customData

This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.



### _difficultyBeatmapSets

This is an array of all [Difficulty Beatmap Sets](#difficulty-beatmap-sets) defined in the map.



## Difficulty Beatmap Sets

Difficulty Beatmap Sets are groups of difficulties, all under one characteristic. These represent your Standard, No Arrow, One Saber, and other characteristics.



```json
{
    // ...De rest van de Info.dat
    "_songTimeOffset": 0,
    "_difficultyBeatmapSets": [
        {
            "_beatmapCharacteristicName": "Standard",
            "_difficultyBeatmaps": [
                // Difficulty beatmap worden later op de pagina uitgelegd. Check de zijbalk!
            ]
        }
    ]
}
```




### _beatmapCharacteristicName

This is the name of the characteristic attached to this beatmap set.

Listed below is all commonly used characteristics. While they have little to no "rules" attached to them in Beat Saber, they still have an intended purpose, and should be followed by both the map editor and the mapper creating maps.

Certain characteristics, which are marked in the list below, do not belong to the base game; rather, they are added by external mods such as SongCore. These modded characteristics will only work if the user has installed mods that add them, and will *not* appear on unmodded copies of Beat Saber and could cause the map to not load.

| Naam van het karakteristiek | Inbegrepen in het spel | Waar het voor bedoeld is                                                                                      |
|:---------------------------:|:----------------------:| ------------------------------------------------------------------------------------------------------------- |
|         `Standaard`         |           ✔️           | Vanilla maps following standard mapping guidelines.                                                           |
|         `NoArrows`          |           ✔️           | Beperkt blokken tot Dot (alle richtingen) blokken.                                                            |
|         `OneSaber`          |           ✔️           | Beperkt blokken tot de rechter (blauwe) blokken, en schakelt de linker (rode) blokken uit.                    |
|         `360Degree`         |           ✔️           | Schakelt rotatie evenementen in zonder beperking op de totale rotatie.                                        |
|         `90Degree`          |           ✔️           | Schakelt rotatie evenementen in, maar beperkt deze tot een totale rotatie van 45 graden naar links en rechts. |
|         `Lightshow`         |           ❌            | De plek voor levels die alleen maar verlichtingsevenementen bevatten.                                         |
|          `Lawless`          |           ❌            | Modded levels en modcharts kunnen hier veilig worden geplaatst. Er gelden geen regels hiervoor.               |




### _difficultyBeatmaps

This is an array of [Difficulty Beatmaps](#difficulty-beatmaps) defined within this beatmap set.



## Difficulty Beatmaps

Difficulty Beatmaps are each "Difficulty" of a map. They contain information that changes from difficulty to difficulty, such as [Note Jump Speed](#notejumpmovementspeed), and the location of the difficulty file.



```json
{
    // ...De rest van de Info.dat
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
                        // Elke custom data zal hier komen. Als dit leeg is, moet dit volledig worden verwijderd.
                    }
                }
            ]
        }
    ]
}
```




### _difficulty

This is the internal difficulty, read by Beat Saber.

Contrary to what you might think, this is *not* just a normal string, but rather an Enum. Here is a list of all valid difficulties:

- `Easy`
- `Normal`
- `Hard`
- `Expert`
- `ExpertPlus`



### _difficultyRank

This is the sorting order in the song select screen in Beat Saber.

While, yes, this is an ordinary integer, the widely-used [BeatSaver Schema](#beatsaver-schema) makes this another Enum, based off of the aforementioned [`_difficulty`](#difficulty) value:

| `_difficulty` | BeatSaver's verwachte `_difficultyRank` |
| ------------- |:---------------------------------------:|
| `Easy`        |                    1                    |
| `Normal`      |                    3                    |
| `Hard`        |                    5                    |
| `Expert`      |                    7                    |
| `ExpertPlus`  |                    9                    |




### _beatmapFilename

This is the local location to the difficulty file, which contains the difficulty's notes, obstacles, and lighting events.

Similar to the [`_songFilename`](#songfilename) and [`_coverImageFilename`](#coverimagefilename) from earlier, in most cases this is just the name and extension (always `.dat`) to the map file.

When creating *new* difficulties, it is recommended that the name be a the Characteristic name for this difficulty's parent [Beatmap Set](#difficulty-beatmap-sets), followed by the [`_difficulty`](#difficulty) value. For example, this particular difficulty should have it's difficulty file be named `StandardExpertPlus.dat`.



### _noteJumpMovementSpeed

Note Jump Movement Speed (Shortened to "Note Jump Speed", or just "NJS") is the velocity of objects approaching the player, in meters per second. Info on recommended NJS values can be found on the [Intermediate Mapping Page](./intermediate-mapping.md#note-jump-speed-spawn-distance). This can be a floating point number for precise velocity.

This is used, along with the defined BPM of the song, to calculate 2 very important values, called Jump Duration and Jump Distance.

- Jump Duration is the amount of beats where objects can be active.
- Jump Distance is the total amount of distance that objects need to travel within that Jump Duration.

The Player rests in the exact middle of both of these values, so most mappers find it more convenient to have Half Jump Distance and Half Jump Duration.

- Half Jump Distance is the distance from the Player that objects spawn. Some mappers refer to this as the "Spawn Point".
- Half Jump Duration is the amount of beats that is needed to reach the Player. It is also the amount of beats, forward in time, where objects spawn.



### _noteJumpStartBeatOffset

This value acts as a direct offset to the Half Jump Duration, explained in [`_noteJumpMovementSpeed`](#notejumpmovementspeed), which in turn affects the Jump Distance. This can be a floating point number to achieve a precise Jump Duration.



### _customData

This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.



## -= Difficulty File =-

Each Difficulty Beatmap contains a corresponding file which defines the notes, obstacles, events, and other objects for that particular difficulty.



## Base Object



```json
{
    "_version": "2.0.0",
    "_notes": [],
    "_obstacles": [],
    "_events": [],
    "_customData": {
        // Elke custom data zal hier komen. Als dit leeg is, moet dit volledig worden verwijderd.
    }
}
```




### _version

This field describes the version of the map format we are using. Currently, Beat Saber's map format is on version `2.0.0`.



### _notes

This is an array of [Note](#notes-2) objects for the map.



### _obstacles

This is an array of [Obstacle](#obstacles-2) objects for the map.



### _events

This is an array of [Event](#events-2) objects for the map.



### _customData

This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.



## Notes



```json
{
    "_time": 10,
    "_lineIndex": 1,
    "_lineLayer": 0,
    "_type": 0,
    "_cutDirection": 1,
    "_customData": {
        // Elke custom data zal hier komen. Als dit leeg is, moet dit volledig worden verwijderd.
    }
}
```




### _time

The time, in beats, where this object reaches the player.



### _lineIndex

An integer number, from 0 to 3, which represents the column where this note is located. The far left column is located at index 0, and increases to the far right column located at index 3.



### _lineLayer

An integer number, from 0 to 2, which represents the layer where this note is located. The bottommost layer is located at layer 0, and inceases to the topmost layer located at index 2.



### _type

This indicates the type of note there is. Currently, there are 4 known types, but 1 remains unused:

| `_type` | Resultaat             |
|:-------:| --------------------- |
|   `0`   | Linker (rode) blok    |
|   `1`   | Rechter (Blauwe) blok |
|   `2`   | Ongebruikt            |
|   `3`   | Bom                   |




### _cutDirection

This indicates the cut direction for the note.

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




### _customData

This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.



## Obstacles



```json
{
    "_time": 10,
    "_lineIndex": 1,
    "_type": 0,
    "_duration": 10,
    "_width": 1,
    "_customData": {
        // Elke custom data zal hier komen. Als dit leeg is, moet dit volledig worden verwijderd.
    }
}
```




### _time

The time, in beats, where this object reaches the player.



### _lineIndex

An integer number, from 0 to 3, which represents the column where the left side of the obstacle is located. The far left column is located at index 0, and increases to the far right column located at index 3.



### _type

An integer number which represents the state of the obstacle.

| `_type` | Resultaat             |
|:-------:| --------------------- |
|   `0`   | Volledige hoogte muur |
|   `1`   | Hurk/buk muur         |




### _duration

The time, in beats, that the obstacle extends for. While `_duration` can go into negative numbers, be aware that this has some unintended effects.



### _width

How many columns the obstacle takes up. A `_width` of `4` will mean that this wall will extend the entire playable grid. While `_width` can go into negative numbers, be aware that this has some unintended effects.



### _customData

This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.



## Events



```json
{
    "_time": 10,
    "_type": 1,
    "_value": 3,
    "_customData": {
        // Elke custom data zal hier komen. Als dit leeg is, moet dit volledig worden verwijderd.
    }
}
```




### _time

The time, in beats, where this object reaches the player.



### _type

An integer number which represents what exact kind of event this object represents.

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


:::danger Just because an event type is listed as unused, does *not* mean you are freely available to use it!

Beat Games is known to repurpose previously unused event types for certain features, such as the introduction of 360/90 levels. This has broken some Beat Saber maps that make use of legacy MediocreMapper BPM Changes, as well as maps that used Custom Platforms that took advantage of the unused event types. :::



### _value

Depending on the aforementioned [`_type`](#type) of the event, the `_value` of it can do different things.



#### Controlling Lights

It's default behavior is controlling brightness and color of lights, and follows this table:

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




#### Het bepalen van Boost Colors

| `_value` | Resultaat                                                                       |
|:--------:| ------------------------------------------------------------------------------- |
|   `0`    | Schakelt het evenement uit - schakelt naar het eerste paar (standaard) kleuren. |
|   `1`    | Schakelt het evenement in - schakelt naar het tweede paar kleuren.              |




#### Controlling Rings

When the event is used to control ring spin, or ring zoom, the `_value` of the event does nothing.



#### Official BPM Changes

When the event is used to control the BPM, the `_value` represents the new BPM.

The new BPM does not shift internal [`_time`](#time-2) values for future objects. Instead, it essentially recalculates internal game values (Such as Half Jump Duration and Jump Distance) to match the effect of playing the map at the new BPM.

One caveat to this is that the `_value` must *always* be an integer, and does not support floating point numbers (No decimals).

:::warning As of Beat Saber `1.10.0`, Official BPM Changes are broken, and produce unwanted effects when used in a level.

If you absolutely want to work around this, you must create a new BPM Change event so that:

1. This new event *must* have the same exact [`_time`](#time-2) as the BPM Change event you want to trigger correctly.
2. This new event *must* have the same `_value` as the previous BPM Change, or the [`_beatsPerMinute`](#beatsperminute) defined in [`Info.dat`](#info-dat).
3. This new event *must* occur before the BPM Change you want to trigger correctly, *even if they share the same [`_time`](#time-2) values.* :::



#### Controlling Laser Rotation Speed

When the event is used to control laser speed for a group of lights, the `_value` is used as a multiplier to their base rotational velocity.

If `_value` is `0`, the random rotation offset for each laser will also be reset, causing all rotating lasers to line up perfectly.



#### Controlling 360/90 Rotation

When the event is used to control rotation in a 360/90 degree level, the `_value` is used to add rotation equal to the following table:

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




### _customData

This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.



## Credits

De inhoud van deze pagina is geschreven door [Caeden117](./mapping-credits.md#caeden117).