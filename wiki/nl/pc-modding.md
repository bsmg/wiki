---
sidebar: auto
---

# PC Modding

## Voorwoord

::: danger DISCLAIMER Door mods te gebruiken, begrijp je dat:

* Je ervaart mogelijk problemen die niet voorkomen in de onaangepaste versie van het spel. 99,9% van de bugs, crashes en lag zijn te wijten aan mods.
* Mods worden vrijwel altijd onbruikbaar bij game updates en dat is normaal - wees geduldig en blijf respectvol wanneer dit gebeurt, want de modders zijn vrijwilligers met andere dingen in hun leven naast het maken van mods.
* Beat Games probeert niet met opzet ervoor te zorgen dat mods niet meer werken. Ze willen enkel aan hun eigen code werken en soms maakt dit mods onbruikbaar, maar dit betekent dus niet dat ze expres mods in de weg zitten.

Val de ontwikkelaars niet aan voor problemen gerelateerd aan het gebruik van mods, en vice versa - de modders en spel ontwikkelaars zijn twee aparte groepen. Wees gewoon geen eikel. :::

:::warning WEES VOORZICHTIG TIJDENS HET INSTALLEREN VAN MODS Beat Saber zal je **nooit** vragen om het als administrator te starten.

Als je een mod hebt gedownload en geïnstalleerd en je krijgt het gebruikersaccountbeheer pop-up, **klik dan NIET** op "Ja", en rapporteer dit alsjeblieft. Wat je hebt geïnstalleerd is een kwaadaardige mod!

Als je niet zeker weet of iets wat je hebt geïnstalleerd malware is of niet, ***vraag het dan aan iemand in onze Discord***. :::

Beat Saber heeft ingebouwde ondersteunding voor zelfgemaakte nummers, dus als dat alles is wat je nodig hebt, dan heb je geen extra mods nodig! Het is echter een goed idee om `SongCore` te installeren, omdat deze mod de basis functionaliteit van het spel uitbreid door het verbeteren van de laadtijden van custom nummers en extra functionaliteiten aan te bieden die andere mods, zoals de in-game downloder voor nummers, custom leaderboards, afspeellijsten, enz, kunnen gebruiken.

::: warning Waarschuwing Deze gids is geschreven voor PC modden op Windows.  
Als je een Quest hebt, ga dan naar de [Quest modding pagina](/nl/quest-modding.md).   
Als je Linux gebruikt, ga dan naar de [Linux pagina](/nl/modding/linux.md) of [Beataroni](https://github.com/geefr/beatsaber-linux-goodies/#readme) :::

Als je tegen problemen aanloopt, ga dan naar de [ondersteuningspagina](./support) en probeer de oorzaak van het probleem te identificeren voordat je het vraagt in de Discord server. De kans is groot dat het antwoord dat je zoekt al op die pagina staat!

::: warning Ik heb een video tutorial bekeken op YouTube, maar ik liep vast / het werkte niet. Waarom? Wij van de BSMG raden het **sterk** af om video tutorials te gebruiken voor het modden. Vaak vinden we dat de inhoud is verouderd, of dat ze incompleet zijn, of dat ze foute of gewoon incorrecte informatie bevatten.

In plaats daarvan is het beter de geschreven gidsen te volgen die hier op de wiki beschikbaar zijn, of om hulp te vragen in de [BSMG Discord](https://discord.gg/beatsabermods). :::

## Installatieprogramma's

### Mod Assistant
> **DIT IS OP HET MOMENT DE AANBEVOLEN MOD INSTALLER.**

__**Start het spel minstens 1 keer op**** voordat je probeert het spel te modden! Dit geldt ook als je je spel opnieuw installeert.

Een simpel Beat Saber mod installatie programma vergelijkbaar met mod manager, maar met extra functies zoals het verwijderen van mods en het controleren van versies! Download het op [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![Mod Assistant](~@images/beginners-guide/modassistant.png)

## Hoe kom ik aan meer nummers
::: tip Hint De meeste levels in de "Top All", "Rating", "Downloads" of "Plays" sorteerfilters werden gemaakt voordat er best practices voor het maken van levels werden vastgelegd. Probeer levels te downloaden die tussen eind 2019 en nu gemaakt zijn voor de beste custom levels ervaring. :::

::: warning Waarschuwing Het is een goed idee om periodiek een back-up te maken van jouw `CustomLevels` map, omdat er een kleine kans is dat het wordt gereset als het spel update!

Deze map bevindt zich in jouw installatie map: `Beat Saber/Beat Saber_Data/CustomLevels` :::

### In-game Downloader
Met de `BeatSaver Downloader` mod kan je nummers downloaden terwijl je in het spel door de `MORE SONGS` menu knop op het `MODS` scherm te gebruiken. Dit download nummers rechtstreeks van [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is de hoofd database van custom levels die zijn gemaakt door de community. Veel andere programma's en websites verbeteren de downloadervaring van custom levels, maar deze website is de plek waar ze worden opgeslagen. Om nummers te installeren die van deze site zijn gedownload, pak je deze nummers uit in een nieuwe map en plaats je deze map in `Beat Saber/Beat Saber_Data/CustomLevels`. Je kan ook gebruikmaken van de in-game downloader mod, of de Mod Assistant OneClick™ Install functie.

### BeastSaber
[BeastSaber](https://www.bsaber.com) (bsaber.com) is een website die probeert het vinden van fantastische nummers om te spelen veel makkelijker te maken. Het doet dit door de duizenden nummers van BeatSaver te categoriseren en je deze laat sorteren op basis van het genre en vele andere tags. Ook heeft het een sociale functie waarbij spelers nummers kunnen bekijken en hierop commentaar kunnen geven. Een van de meest gebruikte functies is de "Curator Recommended" functie waarvoor een team de meeste nummers, die elke dag uitkomen, spelen en de nummers die hierbij het meest opvallen aanbevelen om deze later [automatisch in het spel te kunnen downloaden](https://bsaber.com/beatsync/).

### Apps voor het beheren van je nummers

Er zijn op dit moment geen werkende apps voor het beheren van je nummers beschikbaar.

### Afspeellijsten
Hiervoor moet je de [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod installeren.

Dan kan je ofwel:

* De `Install playlists` knop gebruiken in het Opties tabblad van Mod Assistant.
* De afspeellijst in `Beat Saber/Playlists` plaatsen, de titel van de afspeellijst selecteren in het spel en tot slot op de "Download all songs" knop klikken.

Je zou in het spel de afspeellijst naast het Custom Levels album moeten kunnen zien staan. De mod ondersteunt ook het beheren van afspeellijsten in het spel.

## Installatiemap
_Waar is Beat Saber geïnstalleerd?_

### Standaardlocatie
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Andere locaties
**Als je de installatiemap hebt verplaatst naar een andere schijf, dan kan het op de onderstaande locatie staan.** Vervang de schijfletter `F` door de letter van de schijf waarop je spel is geïnstalleerd.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Handmatige installatie
Een mod installatie programma is de aanbevolen manier om mods te installeren. Zie de sectie [hierboven](#installatieprogrammas). Als je het spel al mods hebt geïnstalleerd en alleen mods wil installeren die niet in het installatie programma beschikbaar zijn, ga dan direct door naar stap 4.

::: warning WEES VOORZICHTIG TIJDENS HET INSTALLEREN VAN MODS Het modden van je spel met niet goedgekeurde mods, zoals de mods die gevonden worden in het `#pc-mods` kanaal, komt met risico's. Waaronder de mogelijkheid op kwaadaardige software dat zich gedraagt als een normale mod.

Beat Saber zal jou **NOOIT** vragen om het als administrator uit te voeren.

Als je een mod hebt gedownload en geïnstalleerd en je krijgt het Gebruikersaccountbeheer prompt te zien, **klik dan NIET** op accepteren, en rapporteer dit alsjeblieft. Als je niet zeker weet of iets wat je hebt geïnstalleerd malware is of niet, ***vraag het dan aan iemand in onze discord***. :::

**Start het spel minstens 1 keer op** voordat je probeert het spel te modden! Dit geldt ook voor het opnieuw installeren van je spel.

### BSIPA installeren

1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigeer naar jouw [installatiemap.](#installatiemap) En pak de inhoud van de BSIPA zip hierin uit. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Dubbel-klik op IPA.exe om het spel te modden. Alle mods in de `Plugins` map worden nu geladen bij het starten van het spel. Als er foutmeldingen zijn, dan heb je waarschijnlijk stap 2 niet correct gevolgd. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Mods Installeren

4. Download de mod(s) die je wilt installeren, of ze nu komen van GitHub, het [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` kanaal,  [BeatMods](https://beatmods.com/#/mods) of andere bronnen. **Zorg ervoor dat je ook alle afhankelijkheden download die vereist zijn door de mod(s).** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Sommige mods hebben installatie-instructies, sommigen niet. Over het algemeen kan je de inhoud van de zip naar je Beat Saber installatiemap slepen en neerzetten, de bestanden in de zip zouden naar de bijbehorende mappen moeten gaan.

## Het de-installeren van mods
Verwijder het .dll bestand in de `Plugins` map, of klik op de `Uninstall` knop in Mod Assistant.

## Andere interessante pagina's

* [Grepen en Trucs](./grips-and-tricks.md)
* [Nummers maken](/nl/mapping/)
* [Custom Sabers](/nl/models/custom-sabers.md)
* [Custom Avatars](/nl/models/custom-avatars.md)
* [Custom Platforms](/nl/models/custom-platforms.md)
* [Custom levels in multiplayer spelen](https://discord.com/invite/gezGrFG4tz)
* [Het maken van mods](/nl/modding/)

## Heb je vragen?
Bezoek de hulp kanalen in de [BSMG Discord](https://discord.gg/beatsabermods)!
