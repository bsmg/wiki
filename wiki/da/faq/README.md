# Ofte Stillede Spørgsmål

## Jeg har lige fået spillet. Hvordan kommer jeg i gang?
Tjek vores [begynders guide](/beginners-guide.md)!

## Hvordan får jeg flere baner?
> [BeatSaver](https://beatsaver.com) er hovedarkivet for brugerskabte baner fra fællesskabet. Mange andre værktøjer og websteder forbedrer oplevelsen af at downloade brugerskabte baner, men dette er stedet, hvor de er opbevaret.

Hvis du henter baner manuelt fra BeatSaver, så udpak dem i en mappe og placér filerne i `Beat Saber/Beat Saber_Data/CustomLevels`. Dette er den mappe, som spillet indbygget læser brugerskabte baner fra.

### BeastSaber
[Beast Saber](https://www.bsaber.com) er en anmeldelses side, der har til formål at kuratere alle sangene på BeatSaver. Du kan også downloade playlister, følge mappers, finde sange ved hjælp af avancerede sorteringsmetoder og meget mere.

### Sangstyringsværktøjer

Følgende kan bruges til at hjælpe dig med at administere custom sange eller playlister.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) er en desktop app der administerer custom sange og playlister, vedligeholdt af **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) er en browser baseret tjeneste lavet af **zexurge** for at administere playlister.

## Hvordan installerer jeg playlister?

### PC
Du skal installere [PlaylistManager](https://github. com/rithik-b/PlaylistManager/releases/latest) modden.

Så kan du enten:

* Bruge værktøjet `Install Playlist` i fanen Indstillinger i Mod Assistant.
* Placer playlistfilen i `Beat Saber/Playlists`, vælg playlisten inde i spillet, og tryk derefter på "download all songs".

Du burde se playlisten ved siden af Custom Levels albummet inde i spillet. Modden understøtter også håndtering af playlister inde i spillet.

### Quest
Du kan bruge [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) til at administrere playlisterne på din Quest. Bemærk, at en custom bane kun kan vises én gang inde i spillet på grund af en begrænsning med BMBF.

:::advarsel ADVARSEL til Quest brugere
Genindlæsning af dine Custom Sange Mappe nulstiller alt playlist organisering.
:::

## Hvordan laver jeg mine egen baner?
Se [mapping](/mapping/)!

## Hvordan kan jeg få PC mods, der ikke er i Mod Assistant?
Se [denne sektion](/pc-modding.md#manual-installation) i begynderguiden.

## Har multiplayer crossplay?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

BeatTogether modden er den aktuelle løsning for at spille cross-platform mellem de moddede spilversioner. Tilslut deres [Discord server](https://discord.com/invite/gezGrFG4tz) og tjek `#install-instructions` kanalen for mere information.

## Mit spil opdaterede og nu virker ingen af mine mods
Hver gang spillet opdateres, er det muligt *(og meget sandsynligt)* at dine eksisterende mods vil stoppe med at virke og skal opdateres. For at sikre, at din installation ikke går i stykker, når spillet kører på en ny opdatering for første gang alt i `Plugins` mappen flyttes automatisk til en ny mappe kaldet `Old 1.x.x plugins`. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

For at få mods tilbage, skal du blot **køre installationsprogrammet igen.**  
BeatMods repositoriet indeholder kun mods, der er blevet bekræftet til at virke på den seneste version af spillet!

Hvis noget af dette forvirrer dig, så besøg [Beginners Guide](/beginners-guide.md).

## Hvordan fungerer pointsystemet i Beat Saber? Hvordan fungerer global ranking?
Vi har sektioner på [grips and tricks](/grips-and-tricks.md) siden dedikeret til scorings- og ranking systemerne, tjek dem ud!

## Mine menuer er blanke, og jeg har intet at klikke på
Hvis hovedvinduet i dit spil er tom, blev din save fil sandsynligvis beskadiget.

For at ordne det, så naviger til: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Slet eller omdøb Beat Saber-mappen til noget andet. Når du går ind i spillet igen, vil den genskabe save filen og burde indlese hovedmenuen korrekt.
