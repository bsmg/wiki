---
sidebar: auto
---

# Модификация PC версии

## Preface

::: danger DISCLAIMER Если вы хотите использовать моды, вы должны понимать, что:

* Вы можете столкнуться с проблемами, которых нет в версии игры без модификаций. В 99.9% случаев, баги, ошибки и плохая производительность игры связаны с модификациями.
* Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders are volunteers with real lives.
* Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods, but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. Просто ведите себя достойно, ок. :::

Базовая верси Beat Saber поддерживает загрузку песен от сообщества. Если вам нужны только песни и ничего больше, то вам не можно не устанавливать моды вообще! It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: Предупреждение Это руководство для PC-моддинга в Windows.  
Если вы используете Oculus Quest, посетит страницу [Моддинг Oculus Quest](/quest-modding.md).  
Если используете Linux, посетите страницу [Linux](/modding/linux.md) или [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

If you run into problems at any point, please head to the [support page](./support) and see if you can identify what went wrong before asking in the Discord server. Скорее всего, ответ на ваш вопрос будет на этой странице!

::: warning I watched this video by Elite Eric, but I got stuck/it didn't work. Как же так вышло? Мы в BSMG **решительно** предлагаем избегать любые обучающие видео от Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

Вместо этого вам следует пользоваться написанным руководствам на вики или запросить помощь в [BSMG Discord](https://discord.gg/beatsabermods). :::

## Installers

### Mod Assistant
> **ЭТО РЕКОМЕНДОВАННЫЙ УСТАНОВЩИК МОДОВ.**

__**Запустите игру хотя бы разок**** перед попыткой установки модов! Это также относится и к переустановке вашей игры.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and version checking! Скачайте его здесь: [GitHub автора (Assistant)](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## How to get more songs
::: tip Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before good mapping practices were established. Try downloading songs released between late 2019 and now to get the best custom levels experience. :::

### Внутриигровой загрузчик
The `BeatSaver Downloader` Plugin allows you to download maps in-game using the `MORE SONGS` menu button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`. You can also use the in-game downloader plugin, BeatList, or Mod Assistant's OneClick™ Install feature.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on beatsaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Внешние программы для загрузки и организации карт

* [BeatList](https://github.com/Alaanor/beatlist) является приложением для организации базы песен и плейлистов от Alaanor.

### Плейлисты
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Install Folder
_Where is Beat Saber installed?_

### Расположение по умолчанию
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Другие возможные места расположения
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Ручная установка
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install Plugins that are not available in the installer, skip to step 4.

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Установка BSIPA

1. Скачайте [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigate to your [install folder.](#install-folder) and extract the contents of BSIPA into it. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Дважды нажмите на IPA.exe для модификации игры. Все моды из папки `Plugins` теперь будут загружены при запуске игры. Если вы видите какие-то ошибки, то вы, вероятно, не выполнили шаг 2 правильно. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Установка модов

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources. **Убедитесь, что вы скачали все зависимости, которые требуются моду.** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Некоторые моды содержат инструкции по установке, некоторые нет,. Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.

## How to uninstall mods
Either remove the dll from the `Plugins` folder, or click the `Uninstall` button in Mod Assistant.

## Where to go from here

* [Grips and Tricks](./grips-and-tricks.md)
* [Making Beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Setup Multiplayer](https://bs.assistant.moe/Multiplayer/)
* [Making Mods](/modding/)

## Have questions?
Visit the support channels in the [BSMG Discord](https://discord.gg/beatsabermods)!
