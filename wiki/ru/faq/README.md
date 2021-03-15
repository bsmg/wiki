# Часто задаваемые вопросы (FAQ)

## Я только что приобрел игру, что мне делать дальше?
Check out our [beginner's guide](/beginners-guide.md)!

## Как получить больше песен?
> [BeatSaver](https://beatsaver.com) - это хранилище пользовательских песен, созданных сообществом. Существуют и другие сайты, который позволяют загружать песни или предоставляют другие интерфейсы для этого, но именно этот является первоначальным источником песен для всех остальных сайтов.

Если вы хотите загрузить карты вручную из BeatSaver, создайте новую папку, распакуйте в нее архив с песней и перенесите эту папку в `Beat Saber/Beat Saber_Data/CustomLevels`. Из этой папки игра изначально читает пользовательские карты.

### BeastSaber
[Beast Saber](https://www.bsaber.com) это сайт с рецензиями, цель которого - более удобная организация всех песен с BeatSaver. Также вы можете скачать плейлисты, подписываться на определенных создателей карт, находить карты с помощью расширенных методов сортировки и многое другое.

### Внешние программы для загрузки и организации карт
Ниже приведены программы, которые могут использоваться на компьютере для загрузки пользовательских песен, а также могут иметь какие-то другие дополнительные функции.

* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) загрузчик карт от Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) является приложением для организации базы песен и плейлистов от Alaanor.

## Как установить плейлисты?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Используйте функцию `Install Playlist` во вкладке Options в Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## Как создать свою собственную карту?
See [mapping](/mapping/)!

## Как установить моды, которых нет в списке модов ModAssistant?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Имеет ли мультиплеер возможность играть вместе пользвателям разных платформ?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Как работает система начисления очков в Beat Saber? Как работает мировой рейтинг?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
