# Často kladené otázky

## Právě jsem si pořídil hru, kde mám začít?
Podívejte se na náš [průvodce pro začátečníky](/beginners-guide.md)!

## Jak získám více písniček / levelů?
> [BeatSaver](https://beatsaver.com) je hlavní stránka pro stahování a nahrávání levelů vytvořených komunitou. Existuje mnoho dalších nástrojů a stránek na stahování levelů, ale zde můžete najít všechny na jednom místě.

Pokud stahujete mapy (levely) manuálně z BeatSaveru, rozbalte je do složky a složku vložte do `Beat Saber/Beat Saber_Data/CustomLevels`. Z této složky si hra bere všechny komunitní mapy.

### BeastSaber
[Beast Saber](https://www.bsaber.com) je recenzentská stránka, která si klade za cíl hodnotit všechny levely z BeatSaveru. Můžete zde také stahovat playlisty, sledovat mappery, hledat komunitní levely pomocí více pokročilých filtrů, atd...

### Nástroje pro správu levelů

The following can be used to help you manage custom songs or playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists, maintained by **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## Jak nainstaluji playlisty?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users
Reloading your Custom Songs Folder resets all playlist organization.
:::

## Jak vytvořím svůj vlastní level?
See [mapping](/mapping/)!

## How do I load PC mods that aren't in Mod Assistant?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Funguje multiplayer na více platformách dohromady?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. To make sure your install will not break when the game runs on a new update for the first time, everything in the `Plugins` folder is automatically moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Jak funguje systém hodnocení v Beat Saberu? Jak funguje světové umístění?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
