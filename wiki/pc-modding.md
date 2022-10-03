---
sidebar: auto
---
# PC Modding

## Preface

::: danger DISCLAIMER
By choosing to use mods, you understand that:

* You may experience problems that don't exist in the vanilla game. 99.9% of bugs, crashes, and lag are due to mods.
* Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders
  are volunteers with real lives.
* Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods,
  but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers
are two separate groups. Just don't be a jerk ok.
:::

:::warning STAY SAFE WHEN INSTALLING MODS
Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the
User Account Control prompt, **DO NOT** click accept, and please report this. What you installed is a malicious mod!

The only approved case is when activating/deactivating OneClick™ Install in Mod Assistant. Administrator access is required
to register the program with your computer to handle OneClick™ Install links.

If you're unsure if something you installed is malware or not, ***please ask someone in our discord***.
:::

Beat Saber natively supports custom songs, so if that's all you're looking for, you don't require more mods!
It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve
loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning
This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](./linux-modding.md) or [Beataroni](https://github.com/geefr/beatsaber-linux-goodies/#readme)
:::

If you run into problems at any point, please head to the [support page](./support/) and see if you can identify what
went wrong before asking in the Discord server. Chances are, your answer is on that page!

::: warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives?
We at BSMG **strongly** suggest against using video tutorials for modding. Often, we find they are outdated or contain
a incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods).
:::

## Installers

### Mod Assistant
> **THIS IS CURRENTLY THE RECOMMENDED MOD INSTALLER.**

__**Run the game at least once**__ before trying to mod the game! This applies to reinstalling your game too.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and
version checking! Get it on [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![Mod Assistant](~@images/beginners-guide/modassistant.png)

### BeatSaberModManager

__**Run the game at least once**__ before trying to mod the game! This applies to reinstalling your game too.

Yet another mod installer for Beat Saber, heavily inspired by ModAssistant.
It strives to look more visually appealing and support both Windows and Linux, while still being as feature-rich as ModAssistant.
Get it on [affederaffe's GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](~@images/beginners-guide/beatsabermodmanager.png)

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
The `BeatSaver Downloader` mod allows you to download maps in-game using the `MORE SONGS` menu button on
the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community.
Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored.
To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`.
 You can also use the in-game downloader mod, or Mod Assistant's OneClick™ Install feature.

To enable and use Mod Assistant's OneClick™ Install see the picture below:
![Mod Assistant](~@images/beginners-guide/modassistant-oneclick.png)

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier.
It does this by categorizing the thousands of songs on BeatSaver and lets you sort by a song's genre and many other
attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used
features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the
ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Song Management Apps

There are no working song management apps available at this time.

### Playlists
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Install Folder
_Where is Beat Saber installed?_

### Default Location
|  |  |
| --- | --- |
| Steam | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\` |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Other Locations
**If you have moved your install folder to a different drive, it might be in the location below.**
Replace the drive letter `F` with the drive your game is installed on.
|  |  |
| --- | --- |
| Steam | `F:\SteamLibrary\steamapps\common\Beat Saber\` |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Manual Installation
A mod installer is the recommended way to install mods. See the section [above](#installers).
If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

::: warning STAY SAFE WHEN INSTALLING MODS
Modding your game with unverified mods such as mods found in the `#pc-mods` channel comes with risks, including the
possibility for malicious software that acts like a regular mod.

Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the
User Account Control prompt, **DO NOT** click accept, and please report this. If you're unsure if something you installed
is malware or not, ***please ask someone in our discord***.
:::

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Install BSIPA

1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigate to your [install folder.](#install-folder) and extract the contents of BSIPA into it.
![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean")
![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Double click IPA.exe to patch the game. Any mods in the `Plugins` folder will now be loaded when starting the game.
  If there are errors, you probably didn't follow step 2 correctly.
![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Install Mods

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods)
 `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources.
 **Make sure to download any dependencies required by the mod.**
![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Some mods have installation instructions, some don't. Generally you can just drag and drop the zip contents into your
  beat saber install folder, and the files should go into the corresponding folders.

## Downgrading

Check `#modding-announcements` in [BSMG](https://www.discord.gg/beatsabermods) to see if the latest version is moddable.
If it is not, you can follow these tutorials to downgrade to a moddable version.

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
