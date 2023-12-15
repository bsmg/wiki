---
sidebar: auto
---

# Support

## Inhoudsopgave

0. [Updates](#_0-updates)
1. [Geen mods?](#_1-geen-mods)
2. [Problemen na modden van het spel](#_2-problemen-na-het-modden-van-het-spel)
3. [Veelgestelde vragen](#_3-veelgestelde-vragen)
4. [Diverse probleemoplossingen](#_4-diverse-probleemoplossingen)
5. [Nog steeds problemen](#_5-nog-steeds-problemen)

## 0. Updates
After an update, the BSMG discord [#modding-announcements](https://discord.com/channels/441805394323439646/612468002243477505) channel should have the most up to date information on the status of mods. Hieronder volgt een meer gedetailleerde instructies voor het meest voorkomende problemen.

### Een update brak mijn mods
**Start spel één keer** na een nieuwe update. Installeer vervolgens je mods opnieuw met behulp van een installatieprogramma, zoals Mod Assistant, dat gelinkt is in de [gids voor beginners](/nl/beginners-guide).

## 1. Geen mods?

### Diverse vragen

#### 1.1 Er verschijnen geen mods op een nieuwe installatie van het spel
Als eerst, zorg ervoor dat de volgende dingen kloppen:

* **Je hebt het spel één keer gestart voordat je mods** installeerde. BSIPA verwijdert alle mods bij de eerste keer dat dat het spel word geladen na een nieuwe update om te voorkomen dat kapotte of oude mods op een nieuwe versie geladen zouden worden. Herinstalleer de mods opnieuw als dit van toepassing is.
* Steam/Oculus start de Beat Saber vanaf **dezelfde installatie** waar de mods in geïnstalleerd zijn. *bijv. mods staan op de D schijf maar Steam start het spel vanaf de C schijf.* Stel de juiste installatie locatie in in in de opties van het installatieprogramma.
* Als je mods handmatig had geïnstalleerd, zorg er dan voor dat je alle bestanden van de download hebt geïnstalleerd en in de juiste mappen hebt gezet, het zelfde geldt voor hun afhankelijkheden.

#### 1.2 Ik had mods geïnstalleerd op een oudere versie, maar niets laadt meer na een update
Als de vermelde details in sectie 1.1 hierboven juist zijn, probeer dan de onderstaande oplossingen in dalende volgorde.

##### Oplossing 1

* Werk BSIPA bij naar de nieuwste versie (via Mod Assistant of handmatig).
* Ga naar je Beat Saber map.
* Start `IPA.exe`.

##### Oplossing 2 (alleen voor Steam)

* [Verifieer je spelbestanden.](#het-verifieren-van-het-spel-op-steam)
* Update BSIPA naar de nieuwste versie.
* Ga naar je Beat Saber map.
* Start `IPA.exe`.

##### Oplossing 3

* Ga naar je Beat Saber map.
* Maak een back-up van de `UserData` map (optioneel).
* Verwijder de `UserData` map.

::: warning Waarschuwing
Dit zal alle instellingen van je mods resetten!
:::

##### Oplossing 4

* Voer een [Schone Installatie](#nieuwe-installatie) uit

#### 1.2 Mod Assistant lijkt geen mods te installeren
De installatieprogrammas downloaden mods naar de map `Beat Saber/IPA/Pending`, BSIPA verplaatst deze bestanden naar de hoofd map tijdens het opstarten van het spel. Als je Plugins map hierna nog steeds leeg is, start dan `IPA.exe` nogmaals en zorg ervoor dat niets ervoor zorgt dat het zijn ding niet kan doen, bijvoorbeeld `Anti-virus programma's, administrator rechten, etc.`

## 2. Problemen na het modden van het spel

### Het spel wilt niet starten

#### 2.1 GetThreadContext Failed Error
Als een venster wordt geopend met de volgende boodschap `GetThreadContext failed` en/of u hoort een foutmelding geluid van Windows, dan kan het zijn dat je software op je PC hebt die Beat Saber mods breekt. Veel anti-cheat software van derden zoals ESEA en FaceIt stoppen of verstoren BSIPA bij het toepassen van de mods op Beat Saber, zelfs wanneer deze niet aan staan. Sommige anti-virus programma's vertonen hetzelfde gedrag.

Om dit probleem te oplossen:

1. Deïnstalleer de anti-cheat software.
2. Start uw PC opnieuw op.
3. Controleer of er nog restanten van de software in de `AppData` mappen bestaan.
4. Start het spel. Als er problemen zich blijven voordoen, probeer dan het volgende: `Extra opmerking: Het probleem kan blijven bestaan door het ontbreken van rechten of fouten. Elk programma dat BSIPA kan blokkeren, of programma's die als verdacht zijn gemarkeerd, kunnen ervoor zorgen dat dit probleem blijft bestaan` Steam: [Verifieer spel bestanden](#het-verifieren-van-het-spel-op-steam) Oculus: Voer een [Schone Installatie](#nieuwe-installatie) uit.

Dit zou het probleem moeten oplossen.

#### 2.2 Bevroren bij Opstarten
Als het spel bevroren is op het Health and Safety scherm, of je ziet een avatar T-posen zonder controle van het spel, [verifieer dan je bestanden](#het-verifieren-van-het-spel-op-steam) als je het spel op Steam hebt of herinstalleer het spel bij Oculus. Volg daarvoor de [Nieuwe Installatie](#nieuwe-installatie) sectie.

Dit lijkt te gebeuren tijdens het updaten van Beat Saber en het gebruiken van mods voor de update. maar niet voor gebruikers met schone installaties van het spel.

### Framerate problemen

#### 2.3 Het spel lagged op een ondraaglijke manier na het installeren van mods
Als het spel zo erg blijft laggen dat je nauwelijks op de `Continue` knop op het Health & Safety scherm kunt klikken, verifieer dan het spel als je het op Steam bezit of herinstalleer het spel als je het op Oculus hebt. Doe hetzelfde als het spel helemaal niet opstart en geen foutmeldingen laat zien bij het starten van het spel.

Als dat het probleem niet oplost, check dan sectie [2.4 framerate verbeteren](#_2-4-improving-framerate).

#### 2.4 Framerate verbeteren
Als [2.3](#2-3-het-spel-lagged-op-een-ondraaglijke-manier-na-het-installeren-van-mods) je fps niet verbetert, dan kan het zijn dat je PC misschien gewoon moeite heeft om de stress, die veroorzaakt word door mods, bij te houden. Hier zijn enkele dingen die je kunt doen om de framerate te verbeteren, zonder specifieke volgorde:

* Controleer of NVIDIA GEFORCE EXPERIENCE de renderingsschaal voor Beat Saber voorbij het standaard van 1.0 ingesteld heeft. Het kan het op een hoger nummer hebben ingesteld (bijvoorbeeld 1,4 of 1,8) waardoor de belasting op de GPU aanzienlijk toeneemd.
* Gebruik een minder complexe custom avatar.
* De custom saber **Plasma Katanas** heeft een heleboel events en deze staan er om bekend lag te kunnen introduceren als u mist.
* Camera2 en CameraPlus kunnen erg belastend zijn, vooral als je meerdere camera's hebt en de FOV hebt verhoogt.
* Zet de renderingsschaal, Anti-Aliasing, reflecties, het misteffect, etc. op een lagere stand in de basis spel instellingen.
* Voor Oculus Rift (CV1) spelers: overweeg om 2 sensoren te gebruiken in plaats van 3 of meer.
* Verminder je totale hoeveelheid mods en liedjes.
* Voer een [Nieuwe Installatie](#nieuwe-installatie) van de spelbestanden uit.
* Lage framerate kan ook worden veroorzaakt als er iets mis is met je AppData map. Om dit op te lossen, lees dan [Het verwijderen van je Beat Saber AppData map](#het-verwijderen-van-je-bestanden-in-appdata).
* Zet Counters+ opties zoals score counter en swing speed uit want deze kunnen lag veroorzaken.
* HTTPStatus en DataPulller kunnen lag veroorzaken. Test het spel zonder deze mod om te kijken of het inderdaad hierdoor werd veroorzaakt.

VR is zeer CPU intensief, vooral als je mods toevoegt. Als je moeite hebt om het spel te draaien met de mods die je wil gebruiken, overweeg dan om je hardware te upgraden. Beat Saber gebruikt de GPU in mindere mate omdat het visueel gesproken een redelijk simpel spel is.

## 3. Veelgestelde vragen

### Overige

#### 3.1 Leeg Menu, Geen knoppen
Als het hoofdmenu van het spel leeg is, dan is jouw save file waarschijnlijk beschadigd. Om dit op te lossen, lees dan [Het verwijderen van jouw Beat Saber AppData map](#het-verwijderen-van-je-bestanden-in-appdata).

:::: warning Waarschuwing
Hierdoor worden je lokale scores en statistieken verwijderd.
:::

#### 3.2 Hoe gebruik ik mod `x`?
Als je de Mod Assistant gebruikt, selecteer dan de mod en druk vervolgens op de "Mod Info" knop. [BeatMods](http://beatmods.com) heeft tevens ook een "More Info" knop voor elke mod.

#### 3.3 Vibratie problemen
Gameplay Modifiers Plus had een schakelaar voor de vibratie van de controllers in/uit te schakelen. Als je het hebt uitschakelt en de mod daarna hebt verwijderd, dan moet je het configuratiebestand waar dat in staat wijzigen. Open `%appdata%\..\LocalLow\Hyperbolic Magnetisme\Beat Saber\settings.cfg` en zet `controllerRumbleEnabled` op `true`.

Als dit niet de oorzaak is van je vibratie problemen en de volgende zaken zijn van toepassing:

* Vibratie is nauwelijks op te merken.
* Er is geen vibratie tijdens het raken van meerdere blokken.
* Er is een kleine vertraging bij het tegen elkaar houden van de sabers.
* Je gebruikt Oculus touch controllers.

Dan is er een goede kans dat Beat Saber de USB-controller van je moederbord overbelast. Oculus gebruikt erg veel bandbreedte van je USB-controller en de meeste moederborden komen met een zeer goedkope controller. Beat Saber gebruikt het veel meer dan eender welk ander spel, waardoor het in andere spellen en menu's niet echt een probleem is. Er is geen duidelijke oplossing voor dit probleem, dus probeer het volgende:

* Verplaats de sensoren en de HMD USB-kabels rond in verschillende USB-poorten.
* Ontkoppel overbodige USB-apparaten
* Koop een PCI-E USB-hub.
* Gebruik `-vrmode oculus` als je SteamVR gebruikt om deze te omzeilen en de Oculus SDK in plaats daar van rechtstreeks te gebruiken.

### Custom Avatars

#### 3.4 Custom Avatars (niet) zichtbaar in het spel
Klik op de **Home** knop van je toetsenbord met het spel in focus om de zichtbaarheid in de headset in/uit te schakelen.

#### 3.5 Mijn Avatars zijn kapot
Zorg ervoor dat jouw Custom Avatars mod correct is geïnstalleerd en up-to-date is, zorg er ook voor dat de afhankelijkheden dat ook zijn. Je hebt mogelijks een corrupte/kapotte avatar, zulke avatar kan tevens ook al je andere avatars ook beschadigen. Hetzelfde is ook van toepassing voor levels en sabers.

### Custom Levels

#### 3.6 Mijn levels zijn onvindbaar
Zorg ervoor dat je levels zich in je`CustomLevels` map bevinden, deze kan je terugvinden in `Beat Saber\Beat Saber_Data`. Dit is de map waaruit het spel uit zich zelf de custom levels leest.

**Plaats geen** nummers in de oude `Beat Saber\CustomSongs` map. Deze locatie is verouderd omdat het bestandsformaat voor custom levels is gewijzigd. Als je nog nummers in het oude formaat hebt (`.json` en `.ogg` bestanden in plaats van `.dat` en `.egg`), laat ze in de oude `Beat Saber/CustomSongs` map staan. Je moet deze opnieuw downloaden van BeatSaver.

Als alternatief kan je ze handmatig omzetten met [Song Converter](https://github.com/lolPants/songe-converter), maar je zal geen hulp ontvangen bij het gebruiken van deze methode en je moet het programma zelf compileren.

#### 3.7 Uitgeschakelde afspeelknop
Klik op het glimmende blauwe vraagteken (?) knop rechts bovenin. This should tell you what mods are required to play the song, which you are missing and should install. Als het nog steeds niet werkt, probeer dan de vereiste mod opnieuw te installeren. Als het daarna nog niet lukt, kan je altijd een [Nieuwe Installatie](#nieuwe-installatie) proberen.

#### 3.8 Level details blijven oneindig laden
Als dit alleen gebeurt bij bepaalde levels, missen ze mogelijks vereiste mods of zijn de bestanden kapot. Als het met al je nummers gebeurt, verwijder dan de `Plugins` map en installeer de mods opnieuw.

### Camera2

#### 3.9 My desktop view only takes up a small section of the screen
Your Camera2 display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader

#### 3.10 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your mods and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.11 Nothing Showing Up In The More Songs Menu
The probable causes for BeatSaver Downloader not working are:

1. Zorg ervoor dat al je nummers zijn geladen, want anders zal de "More Songs" knop doorzichtig zijn.
2. Jouw anti-virus of firewall blokkeert de toegang tot BeatSaver.
3. Je hebt het limiet van BeatSaver bereikt en moet wachten voordat je het opnieuw kan proberen.

### Multiplayer foutcodes
Here is a list of known error codes, what they mean, and what you can do to fix them.

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->
| Code&nbsp; | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CFR-1      | Unknown Error Occurred. Try restarting the game.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CFR-2      | The multiplayer connection was canceled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFR-3      | Server is not reachable. There may be an issue with your internet connection or with Beat Saber's relay servers. Double check you are not offline and your firewall allows Beat Saber to connect to the internet. <details><summary>**Background Information**</summary>Beat Saber Multiplayer is peer-to-peer where you connect directly with each player in the lobby. When this is not possible Beat Saber starts a "relay" server to send the data. This error means both of these methods failed.</details> &nbsp; This can also be caused by using emojis or special characters in your username. |
| CFR-4      | The server already exists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-5      | Server does not exist. The lobby you were connecting to might have closed as you were joining.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-6      | The server is full. Choose a different lobby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CFR-7      | You are on a version of the game that is not supported by the servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-8      | Lobby password is incorrect. Double check you are entering the right password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-9      | The matchmaking servers Beat Games run, which keeps track of open public and private lobbies, is offline. Try again later.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-10     | Your session key from Steam or Oculus is not valid. If you are playing on Quest and have modded your game, check out this [FAQ answer](/faq/README.md#does-multiplayer-have-crossplay) to work around this. Otherwise you are on a pirated copy of the game which is not supported.                                                                                                                                                                                                                                                                                                 |
| CFR-11     | Your internet connection is offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
<!-- markdownlint-enable MD013 -->

## 4. Diverse probleemoplossingen

### Logbestanden begrijpen
If you're on Steam you can go to
> Beat Saber > Eigenschappen > Algemeen > voeg `--verbose` toe in het startopties veld.

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* Het is mogelijk dat dit niet altijd zichtbaar is voor alle avatars en sabers, en het kan zijn dat je alle avatars/sabers moet verwijderen en ze één voor één opnieuw moet toevoegen om te zien welke jouw spel breekt.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Het verifiëren van het spel op Steam
To verify integrity of game files follow these steps:

1. Zorg ervoor dat SteamVR gesloten is omdat je anders geen spellen kan verifiëren.
2. Ga naar je Steam bibliotheek en zoek Beat Saber.
3. Klik met de rechtermuisknop op Beat Saber en klik vervolgens op eigenschappen.
4. Ga naar de tab "Lokale bestanden" in eigenschappen.
5. Selecteer de optie "Integriteit controleren van spelbestanden".
6. Wacht tot het controleren en downloaden van ontbrekende bestanden is voltooid, als dit gedaan is ben je klaar om verder te gaan.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Nieuwe installatie

1. (Optioneel) Maak een back-up van uw gedownloade Custom bestanden door een kopie van de volgende mappen te maken:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Verwijder de VOLLEDIGE Beat Saber map.** Dit is anders dan het de-installeren van je spel op Steam, want dit verwijderd geen bestanden die niet van het spel zelf zijn (zoals mods).

> Steam:     `\steamapps\common\Beat Saber`   
> Oculus:    `\hyperbolic-magnetism-beat-saber`

3. Installeer het spel opnieuw via de Steam of Oculus winkel.
4. **Voordat je gaat modden, moet het spel minimaal een keer gestart (en weer afgesloten) zijn.**
5. Start Mod Assitant, installeer jouw mods en start het spel.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Het verwijderen van je bestanden in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `<code>%appdata%/../locallow/hyperbolic magnetism/beat saber`</code>

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Gebruikers > "Gebruiker" > AppData > LocalLow > Hyperbolic Magnetism > beat saber

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Deleting this folder in Appdata will also delete your local scores and statistics.
:::

#### Desperate Measures
::: warning
Disabling your anti-virus involves security risks, be sure to know what you're doing
(i.e don't download or open suspicious files while it's turned off)
and don't forget to re-enable it as soon as you finished these steps.
:::

* Zorg ervoor dat jouw huidige gebruiker een **administrator** is.
* Zet jouw anti-virus (voorlopig) **uit**.
* Zorg ervoor dat je toestemming hebt om mappen aan te maken en bestanden te bewerken binnen jouw schijf / pc, (van wat ik heb gehoord is dat een windows update onlangs problemen heeft veroorzaakt voor mensen).
* Zorg ervoor dat jouw drivers up-to-date zijn.
* Controleer of het probleem zich niet bevindt bij jouw headset, besturingssysteem of jouw hardware / software.
* Controleer je internetverbinding, en kijk or niets iets word geblokkeerd dat gerelateerd is aan Beat Saber modding en Steam, en dergelijke.

## 5. Nog steeds problemen
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:

* Gebruik alsjeblieft de juiste kanalen, `#pc-help` voor pc mod support en `#quest-help` voor quest mod support. Ga naar `#pc-3d-modeling` en `#quest-3d-modeling` voor vragen over **het maken van je eigen avatars, platformen, blokken of sabers**, en `#mapping-discussion` voor vragen over **het maken van je eigen nummers**.
* Wees beleefd en respectvol.
* Beschrijf je probleem gedetailleerd. "Het werkte niet" is ongeveer zo beschrijvend als je arts vertellen dat je je niet goed voelt. Wat werkt niet, en wat heb je geprobeerd? Zijn er berichten die op het scherm verschijnen? Is je hele scherm knal roze geworden?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Credit to Saber-Chan for their hard work on this page.
