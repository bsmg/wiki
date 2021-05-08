---
sidebar: auto
prev: ./intermediate-lighting.md
next: false
description: Leer hoe je je verlichting op 11 kan zetten.
---

# Geavanceerde verlichting
_Je bent in verlichting gedoken en je wilt het tot het volgende level nemen._

## !Let op! Dit is een incomplete pagina
::warning Dit is een incomplete pagina, er word gewerkt aan de inhoud! Vraag in `#mapping-discussion` als je meer informatie wilt! :::

## Geavanceerde verlichtingstechnieken

### Double Duty Lasers
Je kunt twee laser "sporen" overlappen door meerdere kleuren in verschillende patronen te gebruiken wat het uiterlijk geeft alsof er twee keer zoveel laser typen zijn. Waar de muziek het ondersteunt, kan je helpen de twee patronen te differentiëren door ze op andere manieren tegen te werken zoals één stroben terwijl je de ander aan laat, of één kleur behouden met snelheid 0 terwijl je de andere beweegt.

Start met het mappen van de meest prominente, consistente, of complexe patronen (welk patroon jij dan ook denkt dat het best gemapped moet worden), maak dan voorzichtig het twee patroon zodat de twee nooit dezelfde specifieke laser tegelijkertijd gebruiken. Het slechtste scenario, als je de twee patronen kort moet overlappen, kan je gewoon de kleuren op de overlappende laser laten stroben voor eenn beat; Wees ervan bewust dat het behouden van deze overlap uiteindelijk het effect zal verstoren.

* Voorbeelden op ~1:52 en ~2:50:   
  [Streamable](https://streamable.com/0qsto) | [BeatSaver](https://beatsaver.com/beatmap/7be2)

### Hogere impact op full on/off momenten
Verspreid de timing voor de on/off evenementen over de lichttypes als je ze aan zet om een sterker gevoel te creëren en een gevoel van beweging te geven.

In plaats van alle lichten tegelijkertijd te laten knipperen, knipper ze in een hele snelle front-back of back-front volgorde, met een interval van ongeveer 1/16; deze kunnen eindigen in fades, je kan ze gelijktijdig uit zetten, of ze steeds op de zelfde intervallen uit zetten of soms de helft/het dubbele ervan.

Front-back positie varieert per omgeving, en het kan een beetje dubbelzinnig zijn met de rings en Center Lights (BBS) wat vaak de hele lengte bedekt, maar in Big Mirror, Default, en Triangle environments:

* Center Lights (BBS) lijken het verste weg te zijn,
* Daarna back-top,
* Dan side lasers,
* En als laatst, de ring verschijnt het dichtstbij de speler.

Voorbeelden:

* Meerdere duidelijk getimede voorbeelden op ~0:18:   
  [Streamable](https://streamable.com/zx1sf) | [BeatSaver](https://beatsaver.com/beatmap/5bb2)
* Een duidelijker voorbeeld op ~1:33:   
  [Streamable](https://streamable.com/7tk24) | [BeatSaver](https://beatsaver.com/beatmap/44f4)

### Drumrollen
In veel omgevingen, als je de snelheid 0 laser strobes verspreid voor korte perioden doorgesneden met pauzes, lijken de lasers vaag op rollende drumsticks; wees ervan bewust dat het behoud van een dergelijk patroon voor langere periodes zal leiden tot een meer spin uiterlijk, dat handig is in andere contexten maar minder voor drumrollen.

Mix back-top of andere compatibele lichttypen erbij om de snelheid van de rol te bepalen en te beheren op welke "hand" elke rol eindigt, zoals gepast lijkt voor de muziek.

* Voorbeeld op ~2:23:   
  [Streamable](https://streamable.com/0qsto) | [BeatSaver](https://beatsaver.com/beatmap/7be2)

### "Zingende" Inner Rings

Als je inner ring stroce op verschillende frequenties zoomed (~1/4-~1/16 afhankelijk van toonhoogte en tempo), kan je een effect produceren waarbij de binnenringen de stem lijken te "zingen".

Van de standaard spelomgevingen werkt dit meestal het beste in DefaultEnvironment, omdat de inner rings van TriangleEnvironment een minder geschikte vorm hebben voor het doel. en de inner rings van de NiceEnvironment zijn erg moeilijk om ze goed aan te zetten zodat het effect merkbaar is.

Het is niet moeilijk om voldoende inner ring verlichting in DefaultEnvironment te behouden, maar je zou het liefst de ring lights, Center Lights (BBS), of beide aan houden voor de duur van het effect, aangezien meer dynamische verlichting de neiging heeft om het te maskeren. Vergelijkbaar, vermijd het gebruik van ringspin gedurende de duur, aangezien het effect bijna onzichtbaar wordt terwijl de inner rings in beweging zijn.

* Voorbeelden op ~0:30, ~1:39, en ~2:20:   
  [Streamable](https://youtu.be/YqM_eXIh2Sg) | [BeatSaver](https://beatsaver.com/beatmap/7be1)

### Wind-Up, Wind-Down
Het geleidelijk verminderen/toenemen van het interval voor laser spin is geschikt voor wind up/wind down geluiden.

Begin bijvoorbeeld rond 1/16, 1/17, 1/18... 1/32, of zelfs helemaal naar 1/64 als het tempo het ondersteunt (pas op voor oneven artefacten met gebruikelijke snelheden). Afhankelijk van waar de muziek opwind, kan je het daar beëindigen, vervolg het met een rotating laser (zodat het er op lijk dat het momentum van de spin wordt overgedragen aan de rotation), enz. Als je het opwind tot een bass slag, is het vervolgen met een kortere spin down in de tegenovergestelde richting met een langzamere snelheden, zodat het er op lijkt dat het draaiende licht een soort muur raakt, het meeste momentum verliest en terugvalt.

De exacte begin- en eind intervallen (over de interval verandering tussen evenementen) moeten worden aangepast afhankelijk van de aard en de duur van het bijbehorende geluid, en houd in gedachten dat je de intervallen op decimalen kunt zetten voor een verandering van (bijvoorbeeld) .5 bij elk evenement.

* Wind-Down voorbeeld ~1:03, Wind-Up met terugval ~2:18:   
  [Streamable](https://streamable.com/zx1sf) | [BeatSaver](https://beatsaver.com/beatmap/5bb2)

## Custom Environments
::: tip OPMERKING Dit is een lege sectie. Als je wilt bijdragen, dien dan suggesties in via [dit formulier](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform). :::

## Chroma (RGB Lichten)
Met de Chroma mod kan je meer dan twee kleuren gebruiken voor de lichten! Er zijn twee versies die niet met elkaar compatibel zijn, [Chroma 1.0](#chroma-1-0) en [Chroma 2.0](#chroma-2-0).

## Chroma 1.0
Chroma 1.0 evenementen zijn minder efficiënt en kunnen de editor prestaties beïnvloeden zodra je meer dan 20.000 evenementen hebt. Bovendien wordt het niet aanbevolen voor gebruik in moderne levels, omdat de ondersteuning op elk moment kan worden losgelaten.

Een enkele manier van converteren naar 2.0 is beschikbaar voor gebruik voordat je jouw level vrijgeeft. [ChromaNoodleConverter](https://github.com/CyanSnow/ChromaNoodleConverter/releases/latest)

### Instellen in MMA2

1. Open MMA2.
2. Klik in de instellingen balk aan de rechter kant, onder het Legacy gedeelte, op het ChromaToggle selectievakje.
3. Selecteer het level waar je wilt werken en klik op het tabblad ExtraFields rechts van de niveau selectie.
4. Klik op het tabblad suggestions en typ vervolgens in `Chroma`.

:::warning OPMERKING De tekst die je invoert in de suggesties moet exact zijn of de Chroma verlichtingseffecten zullen niet verschijnen in het spel :::

5. Klik op de Add knop om het aan de suggesties toe te voegen.
6. Klik op Save song infos links onderin.
7. Klik op Edit Level.
8. Druk op `Tab` in de editor om te wisselen naar het verlichtingsmenu en druk vervolgens op `Shift + C` om het RGB paneel te tonen.

::: align center ![Screenshot van het MMA2 Chroma RGB paneel](~@images/mapping/mma2-chroma-rgb-panel.png)

Het RGB Paneel :::

#### Besturing
Selecteer een Chroma evenement door op het kleurenwiel te klikken of de schuifregelaars aan te passen om de gewenste kleur te krijgen.

Sla een Chroma kleur op door met de rechtermuisknop op een vierkant boven het RGB paneel te klikken. Klik op een vierkant om de opgeslagen kleur te selecteren.

Kies een kleur uit een al geplaatst Chroma evenement door op `C` te drukken terwijl je met je cursor boven het evenement staat.

Selecteer een standaard verlichtingsevenement door op een evenement te klikken vanuit het normale verlichtingsmenu.

:::danger Het is **STERK** aanbevolen om jouw level om te zetten in het 2.0 formaat met behulp van de [ChromaNoodleConverter](https://github.com/CyanSnow/ChromaNoodleConverter/releases/latest) voordat je het vrij geeft. Zorg dat je een back-up maakt voordat je dit gebruikt omdat het nieuwe formaat niet werkt in MMA2 en er geen optie is om het teug te zetten. :::

### Hoe Chroma 1.0 evenementen werken
Chroma evenementen doen niks uit zichzelf. Chroma evenementen functioneren als een licht filter voor toekomstige evenementen door de normale verlichtingsevenementen te "verven" naar de gespecificeerde kleur. In het volgende voorbeeld doen de oranje en roze evenementen niks totdat het standaard blauwe fade-evenement plaatsvindt. Dit werkt als een oranje fade en vervolgens als een roze fade.

::: align center ![Screenshot of the MMA2 lighting track with Chroma events](~@images/mapping/mma2-chroma.png) :::

:::warning Plaats geen chroma evenementen in een ander evenement. Het kan problemen veroorzaken bij het kopiëren en plakken, en de slordige afronding van MMA2 kan zelfs het chroma na het eigenlijke evenement plaatsen en het zal de kleur niet veranderen. Vermijd het volledig. ~Halcyon12 :::

### Gradienten
Hoe plaats je een gradient met Chroma evenementen:

1. Onder de gradient knop plaats je de eerste kleur in het linker vak en de uiteindelijke kleur aan de rechterkant.
2. Klik op de gradient knop.
3. Klik op het startpunt en opnieuw op het eindpunt (vergelijkbaar met het plaatsen van een muur).

De gradiënten die een 1/8 precision gebruiken zijn mooi genoeg om er mooi uit te zien in het spel. (Het gebruik van te veel evenementen of een te hoge precision kan de prestaties van het spel beïnvloeden)

Vergeet niet dat je nog steeds de normale verlichtingsevenementen moet plaatsen om de Chroma lichten te laten functioneren!

::: align center ![Screenshot of the MMA2 lighting track with a Chroma gradient](~@images/mapping/mma2-chroma-gradient.png) :::

### Custom fades

Het gebruiken van donkere tinten van de kleuren kan je een custom fade in/out effect nadoen. Kleuren die een lagere waarde gebruiken zullen minder fel zijn (verschijnen donker). Door een gradient te gebruiken dat begint of eindigt met een zwarte kleur kan het gevoel krijgen dat het fade in/out evenement is.

::: align center Vergelijking van tinten rood.

|                             100% Waarde                              |                             75% Waarde                             |                             50% Waarde                             |                             25% Waarde                             |                            0% Waarde                             |
|:--------------------------------------------------------------------:|:------------------------------------------------------------------:|:------------------------------------------------------------------:|:------------------------------------------------------------------:|:----------------------------------------------------------------:|
| ![Afbeelding van RGB 100% rood](~@images/mapping/red-lights-100.jpg) | ![Afbeelding van RGB 75% rood](~@images/mapping/red-lights-75.jpg) | ![Afbeelding van RGB 50% rood](~@images/mapping/red-lights-50.png) | ![Afbeelding van RGB 25% rood](~@images/mapping/red-lights-25.png) | ![Afbeelding van RGB 0% rood](~@images/mapping/red-lights-0.png) |
 :::

## Chroma 2.0
Chroma 2.0 is de nieuwste versie van Chroma met nog meer opties om je verlichting geweldig te maken. Dit bevat de mogelijk om: gradiënten te creëren met honderden evenementen, elke specifieke laser een kleur geven, precieze laser en rotation evenementen gebruiken.

Alle beschikbare functies staan vermeld in de documentatie: [GitHub](https://github.com/Aeroluna/Chroma/wiki/Mapping)

:::danger Chroma 2.0 wordt momenteel alleen ondersteund door ChroMapper.   
Het openen van een level in MMA2 zal alle Chroma 2.0 evenementen uit het niveau verwijderen. :::

### Kleur data
In het nieuwe Chroma formaat is de kleur data ingebouwd in het standaard verlichtingsevenement. Het is niet nodig om een Chroma evenement te plaatsen voor het daadwerkelijke verlichtingsevenement. Het kleur data heeft nu een optionele waarde voor alpha. Deze kunnen worden gebruikt voor nog overtuigendere fades of voor meer subtielere verlichting.

::: align center Vergelijking van dezelfde rood met verschillende alphas.

|                                 1.00 Alpha                                  |                                 0.75 Alpha                                  |                                 0.50 Alpha                                  |                                 0.25 Alpha                                  |                                 0.00 Alpha                                  |
|:---------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|
| ![Afbeelding van rode 1.00 alfa](~@images/mapping/red-lights-alpha-100.jpg) | ![Afbeelding van rode 0.75 alfa](~@images/mapping/red-lights-alpha-075.png) | ![Afbeelding van rode 0.50 alfa](~@images/mapping/red-lights-alpha-050.png) | ![Afbeelding van rode 0.25 alfa](~@images/mapping/red-lights-alpha-025.png) | ![Afbeelding van rode 0.00 alfa](~@images/mapping/red-lights-alpha-000.png) |
 :::

### Chroma 2.0 gradienten
In vergelijking met het oudere formaat, kunnen gradiënten worden gemaakt met een enkel evenement door middel van de `_lightGradient` eigenschap. Voorbeeld vaneen gradient dat langzaam van rood naar blauw gaat over 2 beats:

```json
"_customData": {
  "_lightGradient": {
    "_duration": 2,
    "_startColor": [1,0,0],
    "_endColor": [0,0,1],
    "_easing": "easeLinear"
  }
}
```

### Ring Prop / Light Prop
Chroma 2.0 staat je toe individuele lichten te bedienen als een evenement normaal gesproken meerdere lichten activeert. Dit effect is het meest zichtbaar bij de ring lights.

### CM Node Editor
Veel van de Chroma functies zijn veel gemakkelijker te implementeren en te bewerken met behulp van de Node editor in ChroMapper.

## Technische informatie (JSON bewerking)
Het kan handig zijn om te weten hoe een verlichtingsevenement is gecodeerd in de `.dat` bestanden als je het bestand direct wilt bewerken of een script wilt maken om het bestand te wijzigen.

Het interne formaat voor een verlichtingsevenement is beschreven in de toegewijde [level formaat](./map-format.md#events-2) pagina.

## Bijdragen
De inhoud van deze pagina is geschreven door [LittleAsi](./mapping-credits.md#littleasi), [Puds](./mapping-credits.md#puds), [Skeelie](./mapping-credits.md#skeelie), en [Bullet](./mapping-credits.md#bullet).
