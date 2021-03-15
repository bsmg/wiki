# Často kladené otázky

## Právě jsem si pořídil hru, kde mám začít?
Podívejte se na náš [průvodce pro začátečníky](/beginners-guide.md)!

## Jak získám více písniček / levelů?
> [BeatSaver](https://beatsaver.com) je hlavní stránka pro stahování a nahrávání levelů vytvořených komunitou. Existuje mnoho dalších nástrojů a stránek na stahování levelů, ale zde můžete najít všechny na jednom místě.

Pokud stahujete mapy (levely) manuálně z BeatSaveru, rozbalte je do složky a složku vložte do `Beat Saber/Beat Saber_Data/CustomLevels`. Z této složky si hra bere všechny komunitní mapy.

### BeastSaber
[Beast Saber](https://www.bsaber.com) je recenzentská stránka, která si klade za cíl hodnotit všechny levely z BeatSaveru. Můžete zde také stahovat playlisty, sledovat mappery, hledat komunitní levely pomocí více pokročilých filtrů, atd...

### Nástroje pro správu levelů
Následující programy vám nejen pomohou stahovat komunitní levely na počítači, ale mají i některé další zajímavé funkce.

* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) program na stahování map. Vytvořen uživatelem Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) je program na správu playlistů a map. Vytvořen uživatelem Alaanor.

## Jak nainstaluji playlisty?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Použít `Install Playlist` nástroj v záložce nastavení v Mod Assistantu.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## Jak vytvořím svůj vlastní level?
See [mapping](/mapping/)!

## Jak nainstaluji pluginy, které nejsou v Mod Assistantu?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Funguje multiplayer na více platformách dohromady?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Jak funguje systém hodnocení v Beat Saberu? Jak funguje světové umístění?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
