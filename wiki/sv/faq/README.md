# Vanliga Frågor

## Jag fick precis Beat Saber, hur kommer jag igång?
Kolla in vår [nybörjarguide](/beginners-guide.md)!

## Hur får jag fler låtar?
> [BeatSaver](https://beatsaver.com) är huvudarkivet för låtar gjorda av gemenskapen. Många andra verktyg och webbplatser förbättrar upplevelsen av att ladda ner anpassade låtar, men på denna plats är dem lagrade.

Om du laddar ner banor manuellt från BeatSaver, extrahera dem till en mapp och placera filerna i `Beat Saber/Beat Saber_Data/CustomLevels`. Detta är den directory som spelet läser nedladdade banor ifrån.

### BeastSaber
[Beast Saber](https://www.bsaber.com) är en recensionssida som syftar till att kurera alla låtar på BeatSaver. Du kan också ladda ner spellistor, följa mappare, hitta låtar med hjälp av avancerade sorteringsmetoder och mycket mer.

### Verktyg för låthantering
Följande är program som kan användas för att hjälpa dig att ladda ner banor, med några andra medföljande funktioner.

* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view), ett nedladdningsprogram av Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) är en app som hanterar spellistor och beatmaps, av Alaanor.

## Hur installerar jag spellistor?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Använda verktyget `Install Playlist` som finns i ModAssistants Options-flik.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## Hur skapar jag mina egna banor?
See [mapping](/mapping/)!

## Hur laddar jag in plugins som inte finns i ModAssistant?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Har multiplayer crossplay?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Hur fungerar poängsystemet i Beat Saber? Hur fungerar den globala rankningen?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
