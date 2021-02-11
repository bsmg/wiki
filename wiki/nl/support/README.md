---
sidebar: auto
---

# Support
## Inhoudsopgave
0. [Belangrijke opmerkingen.](#0-important-notes)
1. [installatie problemen.](#1-installer-issues)
2. [In-Game problemen.](#2-game-issues-post-modding)
3. [Veelgestelde vragen.](#3-common-questions)
4. [Probleemoplossing](#4-troubleshooting)
5. [Als alle andere dingen niet lukken.](#5-if-all-else-fails)
6. [Er zijn nog steeds problemen.](#6-still-having-issues)

## 0. Updates
Na een update heeft de BSMG discord `#server-announcements` kanaal de meest actuele instructies over de status van mods. Hieronder volgt een meer gedetailleerde instructie voor het meest voorkomende probleem.

#### Een update brak mijn mods
**start spel één keer** na een nieuwe update. Installeer vervolgens je mods opnieuw met behulp van het installatieprogramma, zoals Mod Assistant, dat gelinkt is in de [gids voor beginners](/beginners-guide).

## 1. Geen mods?

#### 1.1 Er verschijnen geen mods op een nieuwe kopie van het spel
Als eerst, zorg ervoor dat de volgende dingen kloppen:
* **Je hebt het spel één keer gestart voordat je mods** installeerde. BSIPA verwijdert alle mods op de eerste keer van een nieuwe update om te voorkomen dat kapotte of oude mods op een nieuwe versie geladen worden. Herinstalleer de mods opnieuw als dit van toepassing is.
* Steam/Oculus start de Beat Saber vanaf **dezelfde installatie** waar de mods in geïnstalleerd zijn. *bijv. mods staan op de D schijf maar Steam start het spel vanaf de C schijf.* Stel de juiste installatie locatie in in de opties van het installatieprogramma.
* Als je mods handmatig hebt geïnstalleerd, zorg er dan voor dat je alle bestanden van de download hebt geïnstalleerd en in de juiste mappen hebt gezet, het zelfde geldt voor hun afhankelijkheden.

#### 1.2 Ik had mods geïnstalleerd op een oudere versie, maar niets laadt na een update

Als de vermelde dingen in sectie 1.1 hierboven juist zijn, probeer dan de onderstaande oplossingen in dalende volgorde.

**Oplossing 1**
- BSIPA bijwerken naar de nieuwste versie (via ModAssistant of handmatig).
- Ga naar uw Beat Saber map.
- Start `IPA.exe`.

**Oplossing 2**
-  [Verifieer uw spel bestanden](#verify-game-files-for-steam) (dit kan alleen maar op Steam, Oculus gebruikers moeten Oplossing 4 doen).
- BSIPA bijwerken naar de nieuwste versie.
- Ga naar uw Beat Saber map.
- Start `IPA.exe`.

**Oplossing 3**
- Ga naar uw Beat Saber map.
- Maak een back-up van de `UserData` map (optioneel).
- Verwijder de `UserData` map.

::: warning waarschuwing Dit zal alle plugin instellingen resetten! :::

**Oplossing 4**
- Voer een [Nieuwe installatie](#clean-installation) uit

#### 1.2 Mod Assistant lijkt geen plugins te installeren
De installatie programmas downloaden mods in `Beat Saber/IPA/Pending`, BSIPA verplaatst deze bestanden naar de hoofd map tijdens het opstarten van het spel. Als uw Plugins map hierna nog steeds leeg is, start dan `IPA.exe` nogmaals en zorg ervoor dat niets ervoor zorgt dat het zijn ding niet kan doen, bijvoorbeeld `Anti-virussen, Admin permissies, etc.`

## 2. Problemen na modding van het spel
### Het spel wilt niet starten

#### 2.1 GetThreadContext Failed Error
Als een venster wordt geopend dat het volgende zegt `GetThreadContext failed` en/of u hoort een foutmelding geluid van Windows, dan kan het zijn dat je software op je PC hebt die Beat Saber mods breekt. Veel anti-cheat software van derden zoals ESEA en FaceIt stoppen of verstoren BSIPA van het toepassen van de mods op Beat Saber, zelfs wanneer deze niet aan staan. Sommige anti-Virus software vertonen hetzelfde gedrag.

Om dit probleem te oplossen:
1. Deïnstalleer de anti-cheat software.
2. Start uw PC opnieuw op.
3. Controleer of er nog restanten van de software in de `AppData` mappen bestaan.
4. Start het spel. Als er problemen blijven bestaan, probeer dan het volgende: `Extra opmerking: Het probleem kan blijven bestaan door het ontbreken van rechten of uitzonderingen. Elk programma dat BSIPA kan blokkeren, of programma's die als verdacht zijn gemarkeerd kunnen ervoor zorgen dat dit probleem blijft bestaan` Steam: [verifieer spel bestanden](#verify-game-files-for-steam) Oculus: voer een [Clean Installation](#clean-installation) uit.

Dit zou het probleem moeten oplossen.

#### 2.2 Bevroren bij Opstarten
Als het spel bevroren is op het Health and Safety scherm, of je ziet een avatar T-posen zonder controle van het spel, [verifieer je bestanden](#verify-game-files-for-steam) als je het spel op Steam hebt of herinstalleer het spel op Oculus. Lees [Nieuwe installatie](#clean-installation). Dit lijkt te gebeuren tijdens het updaten van Beat Saber en het hebben van mods voor de update. maar niet voor gebruikers met schone installaties van het spel.

### Framerate problemen
#### 2.3 Het spel lagged op een ondraaglijke manier na het installeren van mods.
Als het spel zo erg blijft laggen dat je nauwelijks op de `Continue` knop op het Health & Safety scherm kunt klikken, verifieer dan het spel als je het op Steam hebt of herinstalleer het spel als je het op Oculus hebt. Doe hetzelfde als het spel helemaal niet opstart en geen foutmeldingen laat zien bij het starten van het spel.

Als dat het probleem niet oplost, check dan sectie [2.4 framerate verbeteren](#framerate-issues)

#### 2.4 Framerate verbeteren
Als [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) uw fps niet verbetert, dan heeft uw PC misschien moeite om de stress die veroorzaakt word door mods bij te houden. Hier zijn enkele dingen die u kunt doen om de framerate te verbeteren, in geen specifieke volgorde:

* Controleer of NVIDIA GEFORCE EXPERIENCE de renderingsschaal voor Beat Saber voorbij het standaard van 1.0 ingesteld heeft. Het kan een hogen nummer hebben ingesteld bijvoorbeeld 1,4 of 1,8, waardoor de belasting van de GPU aanzienlijk is toegenomen.
* Gebruik een minder complexe custom avatar.
* De custom saber **Plasma Katanas** heeft een heleboel evenementen en deze staan er om bekend lag te kunnen introduceren als u mist.
* CameraPlus kan erg belastend zijn, vooral als je meerdere camera's hebt en het FOV verhoogt is.
* Zet de Render Scale, Anti-Aliasing, mirror, fog, etc. uit in de basis spel instellingen.
* Voor Oculus CV1 of Rift spelers: overweeg om 2 sensoren te gebruiken in plaats van 3 of meer.
* Verminder je totale mod en nummer aantal.
* Voer een [Nieuwe Installatie](#clean-installation) van de spelbestanden uit.
* Lage framerate kan ook worden veroorzaakt als er iets mis is in uw AppData map, om dit op te lossen, verwijs naar [Het verwijderen van uw Beat Saber AppData map](#deleting-your-save-in-appdata).
* Zet CountersPlus opties zoals score counter en swing speed uit want deze kunnen lag veroorzaken.
* De HTTPStatus mod kan lag veroorzaken. Test het spel zonder deze mod om te kijken of het inderdaad hierdoor veroorzaakt word.

VR is zeer CPU intensief, vooral als je mods toevoegt. Als je moeite hebt om het spel te runnen met de mods die je wilt, overweeg dan om je hardware te upgraden. Beat Saber gebruikt de GPU bijna niet omdat het visueel gesproken een redelijk simpel spel is.

## 3. Veelgestelde vragen
#### 3.1 Leeg Menu, Geen knoppen
Als het hoofdmenu van het spel leeg is, dan is jouw installatie waarschijnlijk beschadigd. Om dit op te lossen verwijs dan naar [Het verwijderen van uw Beat Saber AppData map](#deleting-your-save-in-appdata).

:::: warning WAARSCHUWING Hiermee worden je lokale scores en statistieken verwijderd. :::

#### 3.2 Hoe gebruik ik mod `x`?
Als je de Mod Assistant gebruikt, klik je op de mod en druk dan op de "Mod Info" knop. beatmodsheeft ook een "More info" knop op elke mod.

#### 3.3 vibratie problemen
Gameplay Modifiers Plus voegt een schakelaar toe om de vibratie van de controller in/uit te schakelen. Als je het hebt uitschakelt en daarna de mod hebt verwijderd, dan moet je het configuratiebestand waar het in staat wijzigen. Open `%appdata%/../locallow/hyperbolic magnetisme/beat saber` en zet `controllersRumbleEnabled` op `true`.

Als dit niet de oorzaak is van je vibratie problemen en het volgende geldt:
* Vibratie is nauwelijks te merken.
* Er is geen vibratie tijdens het raken van meerdere blokken.
* Er is een kleine vertraging bij aanraking van de sabers.
* Je gebruikt Oculus touch controllers.

Dan is er een goede kans dat Beat Saber de USB-controller van je moederbord overbelast. Oculus gebruikt erg veel bandbreedte van je USB-controller en de meeste moederborden komen met een zeer goedkope controller. Beat Saber gebruikt het veel meer dan elk ander spel, waardoor het in andere spellen niet het probleem is. Er is geen duidelijke oplossing, dus probeer het volgende:
* verplaats de sensors en de HMD USB-kabels rond in verschillende USB-poorten.
* Ontkoppel overbodige USB-apparaten
* Koop een PCI-E USB-hub.
* Gebruik `-vrmode oculus` als je SteamVR gebruikt om die te omzeilen en de Oculus SDK in plaats daar van te gebruiken.

### Custom Avatars
#### 3.4 Custom Avatars (niet) zichtbaar in het spel
Klik op de **Home** knop op je toetsenbord met het spel in focus om de zichtbaarheid in de headset in/uit te schakelen.

#### 3.5 Mijn Avatars zijn kapot.
Zorg ervoor dat jouw Custom Avatars mod correct is geïnstalleerd en de nieuwste versie is, zorg er ook voor dat de afhankelijkheden er ook zijn. Je hebt mogelijk een beschadigde avatar, een beschadigde avatar kan al je andere avatars ook beschadigen. Hetzelfde geld voor levels en sabers.

### Custom Songs

#### 3.6 Mijn levels zijn er niet
Zorg ervoor dat jouw levls zich in jouw `CustomLevels` map bevinden in `Beat Saber/Beat Saber_Data/`. Dit is de map waaruit het spel uit zich zelf de custom levels leest.

**Plaats geen** levels in de oude `Beat Saber/CustomSongs` map. Deze locatie is verouderd omdat het bestandsformaat voor custom levels is gewijzigd. Als je levels in het oude formaat hebt (`.json` en `.ogg` bestanden in plaats van `.dat` en `.egg`), laat ze dan in de oude `Beat Saber/CustomSongs` map. Ze zullen dan automatisch worden omgezet door de SongCore mod naar het nieuwe formaat (bij het opstarten van het spel).

Je kan ze ook zelf omzetten naar het nieuwe formaat met [Song Converter](https://github.com/lolPants/songe-converter)

#### 3.7 Doorzichtbare afspeelknop
Klik op het glimmende blauwe vraagteken (?) knop rechts bovenin. Dit zou je moeten vertellen welke mods je mist, en dus moet installeren, om het level te kunnen spelen. Als het nog steeds niet werkt, probeer dan de aangegeven mod opnieuw te installeren. Probeer anders een [Nieuwe installatie](#Nieuwe-installatie).

#### 3.8 Level details laden oneindig
Als dit alleen op bepaalde levels gebeurt, zijn de muziekbestanden waarschijnlijk kapot. Als het met al je levels gebeurt, verwijder dan de `Plugins` map en installeer de mods opnieuw.

### Camera Plus
#### 3.9 Camera Plus werkt niet na het Health & Safety menu
Zorg ervoor dat de in-game instelling voor "Smooth Camera" is uitgeschakeld in je in-game instellingen. Als dat niet werkt, probeer het en de bijbehorende afhankelijkheden opnieuw te installeren.

#### 3.10 Mijn bureaublad weergave neemt slechts een klein deel van het scherm in beslag
Jouw CameraPlus display is te klein voor je scherm. Sleep de hoek om op het scherm te passen, of klik met de rechtermuisknop op het venster en klik op "Fit to Canvas".

### BeatSaver Downloader.
#### 3.11 BeatSaver Downloaders "More Songs" knop
**De More Songs knop is te vinden aan de linkerkant onder de Mods tekst in het hoofdmenu.** Als de knop voor More Songs doorzichtig is, zorg er dan voor dat al jouw levels zijn geladen. Dit is te zien aan de hand van de regenboogkleurige vooruitgangsbalk in het hoofdmenu. Als uw Mods menu er niet is, zorg er dan voor dat uw plugins en afhankelijkheden werken en correct geïnstalleerd zijn, zie [Geen mods?](#_1-no-mods).

#### 3.12 Niets zichtbaar in het "More Songs" menu
De mogelijke oorzaken waardoor beatsaver downloader niet kan werken, zijn:
1. Zorg ervoor dat al je nummers zijn geladen voordat je er in gaat, want anders wordt de "More Songs" knop doorzichtig.
2. Jouw anti-virus of firewall blokkeert de toegang tot BeatSaver.
3. Je hebt het limiet van BeatSaver bereikt en moet wachten voordat je het opnieuw probeert.

## 4. Diverse probleemoplossingen
### Het begrijpen van Logs
Als je het spel op Steam hebt kan je naar:
> Beat Saber > Properties > Set Launch Options > voeg `--verbose` toe aan het text veld wat tevoorschijn komt.

Als je het spel op Oculus hebt dan moet je met je rechtermuisknop op Beat Saber.exe klikken en een snelkoppeling maken. Bewerk het doel en voeg "--verbose" toe aan het einde ervan. bijv. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

Na het toevoegen van "--verbose" zal het spel hopelijk eventuele fouten met betrekking tot jouw avatars, sabers en levels weergeven.
* Dit is alleen niet altijd te zijn voor avatars en sabers, en moet je misschien alle avatars/sabers verwijderen en ze één voor één toevoegen om te kijken welke jouw spel breekt.

Deze berichten worden ook geschreven naar `Beat Saber/Logs`.

Een lijst met veel voorkomende foutmeldingen kan je [hier](./exceptions.md) vinden.

### Het verifiëren van het spel op Steam
Om de integriteit van de spelbestanden te verifiëren volg je deze stappen:
1. Zorg ervoor dat steamvr gesloten is omdat je anders geen spellen kan verifiëren.
2. Ga naar je Steam bibliotheek en vind Beat Saber.
3. Klik met de rechtermuisknop op Beat Saber en klik op eigenschappen.
4. Ga naar de tab "Lokale bestanden" in eigenschappen.
5. Selecteer de optie "Verifieer Integriteit van Spelbestanden".
6. Wacht tot het controleren en downloaden van ontbrekende bestanden is voltooid, als dit gedaan is ben je klaar om verder te gaan.

Hier is een [video gids](https://www.youtube.com/watch?v=EBFfT4-ZiIc), hoewel deze gemaakt is in de oude Steam UI zijn de stappen nog steeds hetzelfde.

### Nieuwe installatie
1. (Optioneel) Maak een back-up van uw gedownloade Custom bestanden door een kopie van de volgende mappen te maken:
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Verwijder de volledige Beat Saber map.** Dit is anders dan het de-installeren van je spel op Steam, want dit verwijderd geen bestanden die niet van het spel zelf komen (zoals mods).
> Steam:     `\steamapps\common\Beat Saber`   
> Oculus:    `\hyperbolic-magnetism-beat-saber`

3. Installeer het spel opnieuw via de Steam of Oculus winkel.
4. **Voordat je gaat modden moet het spel minimaal een keer gestart (en weer afgesloten) zijn.**
5. Start Mod Assitant, installeer jouw mods en start het spel.

(Optioneel) Als je nog een stap verder wilt, verwijs dan naar: [Het verwijderen van jouw bestanden in AppData](#deleting-your-save-in-appdata)

### Het verwijderen van jouw bestanden in AppData
Dit zal je scores en lokale data verwijderen, maar niet je Custom levels scorebord / ScoreSaber statistieken. je kan de map vinden in:
> `<code>%appdata%/../locallow/hyperbolic magnetism/beat saber`</code>

Kopieer alles van de bovenstaande balk en plak het in de adresbalk in van jouw bestandsverkenner en verwijder het.

Je kunt ook naar deze map komen door verborgen items te tonen en te navigeren naar:
> ` Users &#062; "USER" &#062; AppData &#062; Local Low &#062; Hyperbolic-magnetism `

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning WAARSCHUWING Als je de Appdata map verwijdert, worden ook jouw lokale scores en statistieken verwijderd. :::

#### Wanhopige maatregelen
:::warning WAARSCHUWING Het uitschakelen van jouw anti-virus brengt veiligheidsrisico's met zich mee, weet dus zeker wat je doet (zoals: download of open geen verdachte bestanden terwijl het is uitgeschakeld) en vergeet het niet opnieuw aan te zetten zodra je klaar bent met deze stappen. :::
* Zorg ervoor dat jouw huidige gebruiker een**beheerder** is.
* Zet jouw anti-virus **uit** (voor nu).
* Zorg ervoor dat je toestemming hebt om mappen aan te maken en bestanden te bewerken binnen jouw schijf / pc, (van wat ik heb gehoord is dat een windows update onlangs problemen heeft veroorzaakt voor mensen).
* Zorg ervoor dat jouw drivers up-to-date zijn.
* Controleer of het probleem zich niet bevindt binnen jouw headset, besturingssysteem of jouw hardware / software.
* Controleer je internetverbinding, en kijk or niets iets word geblokkeerd dat gerelateerd is aan Beat Saber modding en Steam, etc.

## 5. Nog steeds problemen
Als deze pagina de basis niet dekt, voel je vrij om een vraag te stellen in de discord! Om de kans te vergroten dat je vragen beantwoordt worden, lees dan het volgende:
* Gebruik alsjeblieft de juiste kanalen, `#pc-help` voor pc mod support en `#quest-help` voor quest mod support. Ga naar `#pc-3d-modeling` en `#quest-3d-modeling` voor vragen over </strong>het maken van je eigen avatars, platforms, blokken of sabers</strong>, en `#mapping-discussion` voor vragen over </1>het maken van je eigen nummers
* Wees beleefd en respectvol.
* Beschrijf je probleem gedetailleerd. "Het werkte niet" is ongeveer zo beschrijvend als je arts vertellen dat je je niet goed voelt. Wat werkt niet, en wat heb je geprobeerd? Zijn er berichten die op het scherm verschijnen? Is je hele scherm knal roze geworden?

::: tip OPMERKING De mensen met de `Support` rol zijn vrijwilligers die ervoor kunnen kiezen om in hun vrije tijd te helpen. De support rol is een erkenning van de kennis en inspanningen die zij hebben verricht, maar het betekent niet automatisch dat ze zullen komen om te helpen alleen maar omdat ze online zijn. :::

Dankjewel!

> Dank aan Saber-Chan voor hun harde werk op deze pagina.
