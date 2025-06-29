---
prev: false
next: false
description: Learn how to mod Beat Saber on PC!
---

<!-- markdownlint-disable-file MD033 -->
<!-- markdownlint-disable MD041 -->
<LocalizedOutdateHint />

# PC模组

## 前言

::: danger 免责声明
在使用模组之前，你应当先理解:

- 安装模组后，可能会遇到原版游戏中不会出现的问题。游戏中的 bug 、崩溃或卡顿有 99.9% 都是因安装模组而引起的。
- 模组可能会因更新而失效，这是正常现象。当这种情况发生时，请保持耐心。因为模组作者都是为爱发电的志愿者，而并非全职开发者。
- 游戏厂商 Beat Games 并非故意让模组失效。他们致力于优化游戏代码，在此过程中可能会让模组无法正常工作，他们的目的不是封杀模组。

不要因为模组有问题而去攻击游戏厂商与模组作者。请保持理性和最基本的礼貌。
:::

:::warning 在安装模组时确认安全
节奏光剑**从来不会**要求你使用管理员权限启动。

如果你下载并安装的模组触发了用户账户控制（UAC），**不要**允许，请向我们报告这件事情。你正在安装的是有病毒的模组。

如果你不确定你正在安装的东西是否真的有毒，**请询问discord社群中的人**。
:::

节奏光剑原版支持自定义曲目，无需其它模组！
但建议安装`SongCore`模组，它能够加快载入时间，提供一些用于支持其它模组（如游戏内下载器，自定义排行榜，歌单等）的功能。

::: warning 警告
此指南仅适用于 Windows 系统上的 PC 模组。
如果你是Quest设备上的游戏，请参考[Quest模组页面](/quest-modding.md)。  
如果你用的是Linux系统，请参考[Linux页面](./linux-modding.md)。
:::

如果你现在遇到了问题，请先去[支持页](../support/)寻求解决方案，然后再到Discord服务器进行提问。 或许你的问题已经有答案了！

:::warning 我在B站看了一个视频教程，但现在卡住了/不生效，我该怎么办？
BSMG 社区**强烈建议**不要使用任何视频教程来安装模组。很多视频教程可能已经过时，或者包含不完整、有错误或误导他人的信息。

我们建议你使用并遵循本 Wiki 上的指南，或前往 [BSMG Discord ( 英文社区 )](https://discord.gg/beatsabermods)寻求帮助。
:::

:::tip 注意
最新版本的节奏光剑可能无法添加模组，此时你需要先降级至能够添加模组的最近游戏版本。

参考本页[降级](#降级)章节以获取更多信息。
:::

## 安装器

### BSManager

> **这是目前最推荐的模组安装及降级工具。**

\***\*确保你已经在Steam或Oculus(PCVR)上拥有了游戏\*\***，然后再进行降级。

这是一个全能工具，可用于管理节奏光剑的版本、谱面、模组以及更多东西。从[Zagrios的GitHub](https://github.com/Zagrios/bs-manager/releases/latest)获取它。

![BSManager](/.assets/images/beginners-guide/bsmanager.png)

### BeatSaberModManager

\***\*至少运行一次游戏\*\*** 然后再用它添加模组！在重新安装游戏后也要这样做。

另一个节奏光剑的模组安装器，很大程度受到Mod Assistant启发。
其致力于有更好的界面，且同时支持Windows、Linux操作系统，并保留与Mod Assistant一样丰富的功能。在[affederaffe的GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)获取它。

![BeatSaberModManager](/.assets/images/beginners-guide/beatsabermodmanager.png)

### ModAssistant

一个简单的节奏光剑模组安装、管理工具，此外还有移除模组、检查版本等附加功能！在[BSMG的GitHub](https://github.com/bsmg/ModAssistant/releases/latest)获取它。

![Mod Assistant](/.assets/images/beginners-guide/modassistant.png)

## How to get more songs

::: tip
Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before
good mapping practices were established. Try downloading songs released between late 2019 and now to get the best
custom levels experience.
:::

::: warning
It is a good idea to backup your `CustomLevels` folder periodically as there is a small chance it will be reset if the
game updates!

This folder is located in your game install: `Beat Saber/Beat Saber_Data/CustomLevels`
:::

### In-game Downloader

The `BeatSaverDownloader` or `BetterSongSearch` mod allows you to download maps in-game using the `MORE SONGS` menu
button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com).

:::tip NOTE
If you're using BetterSongSearch, the menu button might be called `BETTERSONGSEARCH` instead of `MORE SONGS`.
:::

### BeatSaver

[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community.
Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored.
To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`.
You can also use the in-game downloader mod, the OneClick™ Install feature of BSManager, or in the "maps"
tab of BSManager.

To enable and use BSManager's OneClick™ Install see the picture below:
![BSManager](/.assets/images/beginners-guide/bsmanager-oneclick.png)

### Beast Saber

[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier.
The most used feature is the "Recently Curated Maps" feed where a team of curators plays through most songs released
each day and recommends the ones that meet a minimum quality standard and have that subjective "fun factor" for them.
BeastSaber also features the most recent maps from verified mappers, a collection of Maps of the Week, and
featured/curated map packs/playlists.

### Song Management Apps

BSManager has a Maps tab which allows you to manage your songs on a specific version. Simply select your version and
click the Maps tab. From there you can delete songs, preview their audio or mapping, and get their Twitch BSR
code for requesting songs on livestreams.

### Playlists

You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

- Install playlists through the Maps tab in BSManager.
  ::: tip NOTE
  This feature is only on the alpha version of BSManager!
  :::
- Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Install Folder

_Where is Beat Saber installed?_

### Default Location

|           |                                                                              |
| --------- | ---------------------------------------------------------------------------- |
| Steam     | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus    | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |
| BSManager | `C:\Users\[USERNAME]\BSManager\BSInstances\`                                 |

### Other Locations

**If you have moved your install folder to a different drive, it might be in the location below.**
Replace the drive letter `F` with the drive your game is installed on.

|           |                                                                |
| --------- | -------------------------------------------------------------- |
| Steam     | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus    | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |
| BSManager | `F:\BSManager\BSInstances\`                                    |

## Manual Installation

A mod installer is the recommended way to install mods. See the section [above](#安装器).
If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

::: warning STAY SAFE WHEN INSTALLING MODS
Modding your game with unverified mods such as mods found in the `#pc-mods` channel comes with risks, including the
possibility for malicious software that acts like a regular mod.

Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the
User Account Control prompt, **DO NOT** click accept, and please report this. If you're unsure if something you installed
is malware or not, **_please ask someone in our discord_**.
:::

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Install BSIPA

1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases). Make sure that the version you download
   is compatible with your game version.
2. Navigate to your [install folder.](#install-folder) and extract the contents of BSIPA into it.
   ![Directory Clean](/.assets/images/beginners-guide/directory-clean.png 'Directory Clean')
   ![Directory Ipa](/.assets/images/beginners-guide/directory-ipa.png 'Directory Ipa')
3. Double click IPA.exe to patch the game. Any mods in the `Plugins` folder will now be loaded when starting the game.
   If there are errors, you probably didn't follow step 2 correctly.
   ![Directory Patched](/.assets/images/beginners-guide/directory-patched.png 'Directory Patched')

### Install Mods

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods)
   `#pc-mods` channel, [BeatMods](https://beatmods.com/#/mods) or other sources.
   **Make sure to download any dependencies required by the mod.**
   ![Directory Plugins](/.assets/images/beginners-guide/directory-plugins.png 'Directory Plugins')
5. Some mods have installation instructions, some don't. Generally you can just drag and drop the zip contents into your
   beat saber install folder, and the files should go into the corresponding folders.

## 降级

Check `#modding-announcements` in [BSMG](https://www.discord.gg/beatsabermods) to see if the latest version is moddable.
If it is not, you can follow these tutorials to downgrade to a moddable version.

### Game Managers

Click on these links corresponding to where you own the game to see the tutorials.

- For Steam you can use:
  - [BSManager](https://github.com/Zagrios/bs-manager#readme)
- For Oculus Store you can use either:
  - [BSManager](https://github.com/Zagrios/bs-manager#readme)
  - [OculusDowngrader](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)

### Legacy Branch

If you want to downgrade to `1.37.1`, `1.34.2`, or `1.29.1` you can use the legacy branch method.

#### Steam Users

1. Open your mod installer and uninstall the mod BSIPA

- If you have 1.30+ mods installed, uninstall all of your mods instead.

2. Right click Beat Saber in the game library
3. Select Properties
4. Select Betas in the window
5. Select either the `legacy1.37.1_unity_v2021.3.16f1`, `1.34.2_legacy` or the `legacy1.29.1_unity_ver2019.4.28f1` branch
6. Exit the window
7. Let the download complete then run the game once
8. Follow the regular modding process

![Steam Branch Setting](/.assets/images/beginners-guide/BetaOptions_SteamBranch.jpg 'Steam Branch Setting')

#### Oculus Store Users

1. Open your mod installer and uninstall the mod BSIPA

- If you have 1.30+ mods installed, uninstall all of your mods instead.

2. Go to the Beat Saber store page
3. Scroll down to `Versions + Release Notes`
4. Click on the word `(LIVE)` next to the current version number
5. Select either the `legacy1.37.1_unity_v2021.3.16f1`, `1.34.2_legacy` or the `legacy1.29.1_unity_ver2019.4.28f1` branch
6. Let the download complete and run the game once
7. Follow the regular modding process

![Oculus Branch Setting](/.assets/images/beginners-guide/BetaOptions_OculusBranch.jpg 'Oculus Branch Setting')

## How to uninstall mods

Either remove the `.dll` file from the `Plugins` folder, or click the trash icon button in BSManager
(after selecting your version, go to the 'Mods' tab).

:::tip NOTE
If you manually installed a mod, you will have to remove that mod by removing the `.dll` file from
the `Plugins` folder.
:::

## Where to go from here

- [Grips and Tricks](./grips-and-tricks.md)
- [Making Beatmaps](/mapping/)
- [Custom Sabers](/models/custom-sabers.md)
- [Custom Avatars](/models/custom-avatars.md)
- [Custom Platforms](/models/custom-platforms.md)
- [CustomWalls](/models/custom-walls.md)
- [Play Customs in Multiplayer](https://discord.com/invite/gezGrFG4tz)
- [Making Mods](/modding/)

## Have questions?

Visit the support channels in the [BSMG Discord](https://discord.gg/beatsabermods)!

::: tip NOTE
Those with the `Support` and/or `Mapping Support` roles are volunteers that might choose to help out in their free time.
The support roles are in recognition of the knowledge and effort they have put forth, but it doesn't
necessarily mean that they'll be around to help just because they're online.
:::
