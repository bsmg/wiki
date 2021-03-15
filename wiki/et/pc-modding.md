---
sidebar: auto
---

# PC moddimine

## Preface

::: danger HOIATUS Otsustades mode kasutada, mõistate et:

* Võite kogeda tõrkeid, mis modifitseerimata mängus ei ilmne. 99.9% programmivigadest, -sulgumistest ja läägist on põhjustatud modide poolt.
* Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders are volunteers with real lives.
* Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods, but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. Lihtsalt ärge olge jobud, okei? :::

Beat Saber toetab lisalaule iseenesest, nii et kui see on kõik, mida sa soovid saavutada, pole sul rohkem mode vaja! It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning Need juhised on PC moddimise jaoks Windows operatsioonisüsteemil.  
Kui kasutate Questi, võite vajada hoopis [Questi moddimise lehte](/et/quest-modding.md).  
Kui kasutate Linuxit, minge [Linuxi lehele](/et/modding/linux.md) või [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) lehele. :::

If you run into problems at any point, please head to the [support page](./support) and see if you can identify what went wrong before asking in the Discord server. Tõenäoliselt on sellel lehel vastus te küsimusele!

::: warning I watched this video by Elite Eric, but I got stuck/it didn't work. Mis värk on? Meie BSMGs soovitame **tungivalt** vältida Elite Eric'u juhiste kasutamist. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

Selle asemel peaksite järgima käesolevas vikis kirjalikke juhendeid või otsima abi [BSMG Discordis](https://discord.gg/beatsabermods). :::

## Installers

### Mod Assistant
> **SEE ON PRAEGUNE SOOVITATAV MOD INSTALLER.**

__**Käivitage mäng vähemalt üks kord**** enne, kui proovite mängu moddida! See kehtib ka pärast mängu taasinstallimist.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and version checking! Laadige see alla [Assistant'i GitHubist](https://github.com/Assistant/ModAssistant/releases/latest).

![ModAssistant](~@images/beginners-guide/modassistant.png)

## How to get more songs
::: tip Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before good mapping practices were established. Try downloading songs released between late 2019 and now to get the best custom levels experience. :::

### Mängusisene allalaadija
The `BeatSaver Downloader` Plugin allows you to download maps in-game using the `MORE SONGS` menu button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`. You can also use the in-game downloader plugin, BeatList, or Mod Assistant's OneClick™ Install feature.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on beatsaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Laulude haldamise tarkvara

* [BeatList](https://github.com/Alaanor/beatlist) on Alaanor'i tehtud programm playlistide ja beatmappide haldamiseks.

### Playlistid
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Install Folder
_Where is Beat Saber installed?_

### Vaikimisi asukoht
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Muud asukohad
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Käsitsi installimine
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install Plugins that are not available in the installer, skip to step 4.

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Installige BSIPA

1. Laadige alla [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Minge oma [installkausta](#install-folder) ja extractige BSIPA sisu sinna. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Tehke IPA.exe peal topeltklõps, et mängu patchida. Nüüd laeb mäng käivitumisel kõik modid `Plugins` kaustas. Kui tekivad errorid, siis tõenäoliselt te ei järginud sammu 2 õigesti. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Installige modid

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources. **Kindlasti laadige alla ka kõik modi(de) poolt nõutavad modid/pluginad (dependencies).** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Mõndade modidega kaasnevad juhised installimiseks, mõndadega aga mitte. Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.

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
