---
sidebar: auto
---

# PC 모딩

## Preface

::: danger 위험 고지 사항 모드를 사용함으로써 다음을 이해할 수 있다.

* 기본모드에서 존재하지 않는 문제들을 경험할 수 있습니다. 버그,충돌,지연의 원인은 99.9% 모드입니다.
* Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders are volunteers with real lives.
* Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods, but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. 그냥 멍청하게 굴지마세요. :::

비트세이버는 기본적으로 커스텀송을 지원하므로 원하는 곡만 있으면 더 이상 모드가 필요하지 않습니다. It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning 주의 본 가이드는 Windows용 PC 모딩에 대해 다룹니다.  
만약 Quest를 가지고 있다면, [Quest 모드](/quest-modding.md) 페이지를 확인해 주세요.  
만약 Linux를 사용하고 있다면, [Linux 모딩 가이드](/modding/linux.md) 또는 [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) 페이지를 확인해 주세요. :::

If you run into problems at any point, please head to the [support page](./support) and see if you can identify what went wrong before asking in the Discord server. 필요한 답은 그 페이지에 있습니다

::: warning I watched this video by Elite Eric, but I got stuck/it didn't work. 왜 BSMG 에서는 Elite Eric 의 튜토리얼 사용에 대해 강력하게 반대합니다. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

대신에, 이곳의 가이드 또는 [BSMG Discord](https://discord.gg/beatsabermods)에서 도움을 받으세요. :::

## Installers

### 모드 어시스턴트 ( Mod Assistant )
> **현재 권장되는 모드 설치 프로그램입니다.**

__**모드를 설치하기전에 **** 한 번 이상 게임을 실행해주세요! 이것은 게임을 다시 설치하는 것에도 적용됩니다.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and version checking! 어시스턴트 GitHub 링크 [>>클릭<<](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## How to get more songs
::: tip Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before good mapping practices were established. Try downloading songs released between late 2019 and now to get the best custom levels experience. :::

### 인게임 다운로더 ( In-Game Downloader )
The `BeatSaver Downloader` Plugin allows you to download maps in-game using the `MORE SONGS` menu button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`. You can also use the in-game downloader plugin, BeatList, or Mod Assistant's OneClick™ Install feature.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on beatsaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### 노래 관리 앱

* [BeatList](https://github.com/Alaanor/beatlist)는 Alaanor 가 플레이리스트와 비트맵을 관리하는 앱입니다.

### 플레이리스트 ( Playlists )
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Install Folder
_Where is Beat Saber installed?_

### 기본 위치
|      |                                                                                      |
| ---- | ------------------------------------------------------------------------------------ |
| 스팀   | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| 오큘러스 | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### 그 외 위치
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## 수동 설치
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install Plugins that are not available in the installer, skip to step 4.

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### BSIPA 설치방법

1. 다운로드 [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigate to your [install folder.](#install-folder) and extract the contents of BSIPA into it. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. IPA.exe를 두번 클릭하여 게임을 패치하십시오. `Plugins` 폴더의 모든 모드는 게임을 시작할 때 로드됩니다. 오류가있을경우 2단계를 올바르게 수행하지 않았을 수 있다. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### 모드 설치

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources. **모드에 요구하는 모든 요소들이 다운로드가 되어있다는걸 확인하십시오** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. 설치 지침서가 있는 모드가 있고, 없는 모드도 있다. Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.

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
