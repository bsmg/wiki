# Vanliga Frågor

## Jag fick precis Beat Saber, hur kommer jag igång?
Kolla in vår [nybörjarguide](/beginners-guide.md)!

## Hur får jag fler låtar?
> [BeatSaver](https://beatsaver.com) är huvudarkivet för låtar gjorda av gemenskapen. Många andra verktyg och webbplatser förbättrar upplevelsen av att ladda ner anpassade låtar, men på denna plats är dem lagrade.

Om du laddar ner banor manuellt från BeatSaver, extrahera dem till en mapp och placera filerna i `Beat Saber/Beat Saber_Data/CustomLevels`. Detta är den directory som spelet läser nedladdade banor ifrån.

### BeastSaber
[Beast Saber](https://www.bsaber.com) är en recensionssida som syftar till att kurera alla låtar på BeatSaver. Du kan också ladda ner spellistor, följa mappare, hitta låtar med hjälp av avancerade sorteringsmetoder och mycket mer.

### Verktyg för låthantering

The following can be used to help you manage custom songs or playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists, maintained by **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## Hur installerar jag spellistor?

### PC
Du behöver installera moddet [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest).

Sen kan du antingen:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

Du bör nu se spellistan bredvid Custom Levels albumet i spelet. Moddet stöder också hantering av spellistor i spelet.

### Quest
Du kan använda [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) för att hantera spellistorna på din Quest. Notera att en nedladdad bana endast kan visas en gång i spelet på grund av en begränsning hos BMBF.

::::warning VARNING för Quest-användare
Omladdning av mappen Custom Songs återställer alla spellistors organisering.
:::

## Hur skapar jag mina egna banor?
Se [mappning](/mapping/)!

## How do I load PC mods that aren't in Mod Assistant?
Se [denna sektion](/pc-modding.md#manual-installation) i nybörjarguiden.

## Har multiplayer crossplay?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

Moddet BeatTogether är den nuvarande lösningen för cross-platform mellan de olika moddade spelversionerna. Gå med i deras [Discord-server](https://discord.com/invite/gezGrFG4tz) och se kanalen `#install-instructions` för mer information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. To make sure your install will not break when the game runs on a new update for the first time, everything in the `Plugins` folder is automatically moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Hur fungerar poängsystemet i Beat Saber? Hur fungerar den globala rankningen?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
