---
sidebar: auto
---

# PC 모딩

## 서문

::: danger 위험 주의사항 모드를 사용함에 있어서, 다음을 숙지하셔야 합니다:

* 정상적인 버전에서는 존재하지 않는 문제들을 경험할 수 있습니다. 99.9%의 버그, 크래시, 렉은 모드 때문에 일어납니다.
* 모드는 게임의 업데이트마다 작동을 안합니다. 그리고 그건 정상적입니다. 이 일이 일어난다면, 인내를 가지고 기다려주세요, 모더들도 각자의 삶이 봉사자입니다.
* Beat Games는 고의적으로 모드를 망가트리려 하지 않습니다. 개발자들은 코드베이스를 수정하기를 원하고 때때로 이것은 모드를 망가트리지만 모드를 고의로 망가트리려는 것은 아닙니다.

모드와 관련된 문제에 대해 게임의 개발자를 탓하지 마십시오. 그 반대의 경우도 마찬가지입니다. 모드 제작자와 게임 개발자는 서로 다른 단체입니다. 그냥 멍청하게 굴지마세요. :::

:::warning 모드를 다운로드할 때 주의하세요 비트 세이버는 **절대** 관리자 권한으로 실행을 하는 걸 물어보지 않을 겁니다.

모드를 다운로드하고 설치를 하셨는데 유저 계정 컨트롤 창이 뜬다면 **절대** 승인하지 마시고, 이 일을 저희에게 알려주세요. 당신이 다운로드 받은 모드는 악의적인 모드입니다!

The only approved case is when activating/deactivating OneClick™ Install in Mod Assistant. Administrator access is required to register the program with your computer to handle OneClick™ Install links.

If you're unsure if something you installed is malware or not, ***please ask someone in our discord***. :::

Beat Saber natively supports custom songs, so if that's all you're looking for, you don't require more mods! It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](./linux-modding.md) :::

If you run into problems at any point, please head to the [support page](./support/) and see if you can identify what went wrong before asking in the Discord server. Chances are, your answer is on that page!

::: warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives? We at BSMG **strongly** suggest against using video tutorials for modding. Often, we find they are outdated or contain a incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods). :::

## 설치 프로그램

### 모드 어시스턴트 ( Mod Assistant )
> **현재 권장되는 모드 설치 프로그램입니다.**

__**Run the game at least once**** before trying to mod the game! This applies to reinstalling your game too.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and version checking! Get it on [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![Mod Assistant](~@images/beginners-guide/modassistant.png)

### BeatSaberModManager

__**Run the game at least once**** before trying to mod the game! This applies to reinstalling your game too.

Yet another mod installer for Beat Saber, heavily inspired by ModAssistant. It strives to look more visually appealing and support both Windows and Linux, while still being as feature-rich as ModAssistant. Get it on [affederaffe's GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](~@images/beginners-guide/beatsabermodmanager.png)

## 노래들을 다운받는 방법
::: tip
Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before
good mapping practices were established. Try downloading songs released between late 2019 and now to get the best
custom levels experience.
:::

::: warning It is a good idea to backup your `CustomLevels` folder periodically as there is a small chance it will be reset if the game updates!

This folder is located in your game install: `Beat Saber/Beat Saber_Data/CustomLevels` :::

### In-game Downloader
The `BeatSaver Downloader` mod allows you to download maps in-game using the `MORE SONGS` menu button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`. You can also use the in-game downloader mod, or Mod Assistant's OneClick™ Install feature.

To enable and use Mod Assistant's OneClick™ Install see the picture below: ![Mod Assistant](~@images/beginners-guide/modassistant-oneclick.png)

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on BeatSaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Song Management Apps

There are no working song management apps available at this time.

### Playlists
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## 폴더 위치
_Where is Beat Saber installed?_

### Default Location
|      |                                                                                      |
| ---- | ------------------------------------------------------------------------------------ |
| 스팀   | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| 오큘러스 | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Other Locations
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## 수동 설치
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

::: warning STAY SAFE WHEN INSTALLING MODS Modding your game with unverified mods such as mods found in the `#pc-mods` channel comes with risks, including the possibility for malicious software that acts like a regular mod.

Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the User Account Control prompt, **DO NOT** click accept, and please report this. If you're unsure if something you installed is malware or not, ***please ask someone in our discord***. :::

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Install BSIPA

1. 다운로드 [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigate to your [install folder.](#install-folder) and extract the contents of BSIPA into it. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. IPA.exe를 두번 클릭하여 게임을 패치하십시오. `Plugins` 폴더의 모든 모드는 게임을 시작할 때 로드됩니다. 오류가있을경우 2단계를 올바르게 수행하지 않았을 수 있다. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Install Mods

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources. **모드에 요구하는 모든 요소들이 다운로드가 되어있다는걸 확인하십시오** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. 설치 지침서가 있는 모드가 있고, 없는 모드도 있다. Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.

## Downgrading

Check `#modding-announcements` in [BSMG](https://www.discord.gg/beatsabermods) to see if the latest version is moddable. If it is not, you can follow these tutorials to downgrade to a moddable version.

Click on these links corresponding to where you own the game to see the tutorials.

* [Oculus Store](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)
* For Steam you have a few options to be able to downgrade. These two are supported by [BSLG](https://discord.gg/MrwMx5e).
  * [BSLegacyLauncher](https://www.youtube.com/watch?v=qjNU5aENHRU)
  * [LegacyInstaller](https://github.com/Goobwabber/LegacyInstaller#readme)

## How to uninstall mods
Either remove the dll from the `Plugins` folder, or click the `Uninstall` button in Mod Assistant.

## Where to go from here

* [Grips and Tricks](./grips-and-tricks.md)
* [Making Beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Play Customs in Multiplayer](https://discord.com/invite/gezGrFG4tz)
* [Making Mods](/modding/)

## Have questions?
Visit the support channels in the [BSMG Discord](https://discord.gg/beatsabermods)!
