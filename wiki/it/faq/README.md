# Domande Frequenti

## Ho appena ottenuto il gioco, come inizio?
Check out our [beginner's guide](/beginners-guide.md)!

## Come ottengo altre canzoni?
> [BeatSaver](https://beatsaver.com) è la repository principale di canzoni personalizzate fatte dalla community. Molti altri strumenti e siti migliorano l'esperienza di scaricare canzoni personalizzate, ma questo posto è dove sono ospitate.

Se scarichi manualmente le mappa da BeatSaver, estraile in una cartella e posiziona i file in `Beat Saber/Beat Saber_Data/CustomLevels`. Questa è la directory da cui il gioco legge nativamente le mappe personalizzate.

### BeastSaber
[Beast Saber](https://www.bsaber.com) è un sito di recensioni che mira a trattare tutte le canzoni di BeatSaver. Puoi anche seguire playlist, seguire mappatori, trovare canzoni usando i metodi di ordinamento avanzati e altro.

### Strumenti di Gestione della Canzone
I seguenti sono i programmi da usare sul desktop per aiutarvi a scaricare canzoni personalizzate, con anche altre funzionalità.

* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) un downloader di mappe di Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) è un'app per gestire le playlist e le beatmap, di Alaanor.

## Come installo le playlist?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Usare lo strumento `Installa Playlist` nella scheda Opzioni dell'Assistente Mod.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## Come creo i miei livelli personalizzati?
See [mapping](/mapping/)!

## Come carico i plugin che non sono nell'Assistente Mod?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Il multiplayer ha il gioco incrociato?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Come funziona il sistema di punteggi in Beat Saber? Come funziona la classifica globale?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
