---
prev: false
next: false
description: Learn how to mod Beat Saber on PC!
---

# PC Modding

## Preface

::: danger DISCLAIMER
By choosing to use mods, you understand that:

- You may experience problems that don't exist in the vanilla game. 99.9% of bugs, crashes, and lag are due to mods.
- Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders
  are volunteers with real lives.
- Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods,
  but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers
are two separate groups. Just don't be a jerk ok.
:::

:::warning STAY SAFE WHEN INSTALLING MODS
Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the
User Account Control prompt, **DO NOT** click accept, and please report this. What you installed is a malicious mod!

If you're unsure if something you installed is malware or not, **_please ask someone in our discord_**.
:::

Beat Saber natively supports custom songs, so if that's all you're looking for, you don't require more mods!
It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve
loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning
This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](./linux-modding.md)
:::

If you run into problems at any point, please head to the [support page](./support/) and see if you can identify what
went wrong before asking in the Discord server. Chances are, your answer is on that page!

::: warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives?
We at BSMG **strongly** suggest against using video tutorials for modding. Often, we find they are outdated or contain
a incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods).
:::

:::tip NOTE
The latest Beat Saber version may not be moddable, in this case you will have to downgrade to the latest moddable version.

Visit the [Downgrading](#downgrading) section on this page for more information.
:::

## Installers

### BSManager

> **THIS IS CURRENTLY THE RECOMMENDED MOD INSTALLER AND DOWNGRADER.**

\***\*Make sure you own the game on Steam or Oculus (PCVR)\*\*** before trying to download Beat Saber!

An all-in-one tool that lets you easily manage Beat Saber versions, maps, mods, and even more. Get it on [Zagrios' GitHub](https://github.com/Zagrios/bs-manager/releases/latest)

![BSManager](/.assets/images/beginners-guide/bsmanager.png)

### BeatSaberModManager

\***\*Run the game at least once\*\*** before trying to mod the game! This applies to reinstalling your game too.

Yet another mod installer for Beat Saber, heavily inspired by Mod Assistant.
It strives to look more visually appealing and support both Windows and Linux, while still being as feature-rich as Mod Assistant.
Get it on [affederaffe's GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](/.assets/images/beginners-guide/beatsabermodmanager.png)

### ModAssistant

A simple Beat Saber mod installer similar to the mod manager, but with additional features such as mod removal
and version checking! Get it on [BSMG's GitHub](https://github.com/bsmg/ModAssistant/releases/latest)

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

A mod installer is the recommended way to install mods. See the section [above](#installers).
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

## Downgrading

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

If you want to downgrade to `1.40.8`, `1.37.1`, `1.34.2`, or `1.29.1`, you can use the legacy branch method.

#### Steam Users

1. Open your mod installer and uninstall the mod BSIPA

- If you have 1.30+ mods installed, uninstall all of your mods instead.

2. Right click Beat Saber in the game library
3. Select Properties
4. Select Betas in the window
5. Select either the `legacy1.40.8_unity_v2021.3.16f1`, `legacy1.37.1_unity_v2021.3.16f1`, `1.34.2_legacy` or
   the `legacy1.29.1_unity_ver2019.4.28f1` branch
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
5. Select either the `legacy1.40.8_unity_v2021.3.16f1`, `legacy1.37.1_unity_v2021.3.16f1`, `1.34.2_legacy` or
   the `legacy1.29.1_unity_ver2019.4.28f1` branch
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
