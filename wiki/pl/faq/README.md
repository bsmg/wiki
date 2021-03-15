# Często Zadawane Pytania

## Właśnie dostałem grę, jak zacząć?
Zobacz nasz [poradnik dla początkujących](/beginners-guide.md)!

## Jak uzyskać więcej piosenek?
> [BeatSaver](https://beatsaver.com) jest głównym repozytorium customowych piosenek stworzonych przez społeczność. Wiele innych narzędzi i stron oferuje ulepszone doświadczenie w pobieraniu customowych utworów, ale hostowane one są w tym miejscu.

Jeśli pobierasz mapy ręcznie z BeatSaver, rozpakuj je do folderu i umieść pliki w folderze `Beat Saber_Data/CustomLevels`. To jest katalog, z którego gra natywnie odczytuje customowe mapy.

### BeastSaber
[Beast Saber](https://www.bsaber.com) jest stroną z recenzjami, która pełni rolę kuratora wszystkich piosenek na BeatSaver. Możesz również pobierać playlisty, obserwować mapperów, szukać piosenek używając zaawansowanych metod sortowania i więcej.

### Narzędzia do zarządzania utworami
Poniżej znajdują się programy do użycia na komputerze, aby pomóc Ci m.in. w pobraniu customowych map.

* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) do pobierania map stworzony przez Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) do zarządzania playlistą i beatmapami stworzony przez Alaanor.

## Jak zainstalować playlisty?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Korzystać z narzędzia `Install Playlist` w zakładce Opcje w Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## Jak mogę stworzyć własne poziomy?
See [mapping](/mapping/)!

## Jak załadować wtyczki, których nie ma w Mod Assistant?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Czy tryb wielosobowy obsługuje grę międzyplatformową?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Jak działa system punktacji w Beat Saber? Jak działa globalny ranking?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
