---
sidebar: auto
---

# PC Modding

## Preface

::: danger DISCLAIMER Når du vælger at benytte mods, forstår du at:

* Du kan opleve problemer, der ikke findes i vanilla-spillet. 99,9% af bugs, crashes og lag skyldes mods.
* Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders are volunteers with real lives.
* Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods, but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. Bare lad være med at være en idiot. :::

Beat Saber understøtter allerede brugerskabte sange, så hvis det er alt du leder efter, behøver du ikke flere mods! It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

:::warning ADVARSEL Denne guide er til PC-modding på Windows.  
Hvis du har en Quest, se siden [Quest Modding](/da/quest-modding.md).  
Hvis du er på Linux, så tjek [Linux-siden](/da/modding/linux.md) eller [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

If you run into problems at any point, please head to the [support page](./support) and see if you can identify what went wrong before asking in the Discord server. Der er gode muligheder for, at svaret er på den side!

::: warning I watched this video by Elite Eric, but I got stuck/it didn't work. Hvad skyldes det? Vi i BSMG anbefaler **kraftigt** imod at bruge nogen vejledninger af Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

I stedet bør du følge de skriftlige vejledninger her på wikisiden eller søge hjælp i [BSMG Discord](https://discord.gg/beatsabermods). :::

## Installers

### Mod Assistant
> **DETTE ER NUVÆRENDE DET ANBEFALEDE INSTALLATIONSPROGRAM TIL MODS.**

__**Kør spillet mindst én gang**** før du forsøger at modde spillet! Dette gælder også for geninstallering af dit spil.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and version checking! Få det på [Assistents GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistent](~@images/beginners-guide/modassistant.png)

## How to get more songs
::: tip Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before good mapping practices were established. Try downloading songs released between late 2019 and now to get the best custom levels experience. :::

### Downloader inde i spillet
The `BeatSaver Downloader` Plugin allows you to download maps in-game using the `MORE SONGS` menu button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`. You can also use the in-game downloader plugin, BeatList, or Mod Assistant's OneClick™ Install feature.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on beatsaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Apps til sanghåndtering

* [BeatList](https://github.com/Alaanor/beatlist) er en app til at administrere playlister og beatmaps, af Alaanor.

### Playlister
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Install Folder
_Where is Beat Saber installed?_

### Standardplacering
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Andre Placeringer
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Manuel installering
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install Plugins that are not available in the installer, skip to step 4.

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Installer BSIPA

1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Gå til din [installationsmappe.](#install-folder) og udpak indholdet af BSIPA-zipfilen ind i den mappe. ![Direktions Fjernelse](~@images/beginners-guide/directory-clean.png "Direktions Fjernelse") ![Direktions Ipa](~@images/beginners-guide/directory-ipa.png "Direktions Ipa")
3. Dobbeltklik på IPA.exe for at modde spillet. Alle mods i mappen `Plugins` vil nu blive indlæst, når spillet startes. Hvis der er fejl, har du sandsynligvis ikke fulgt trin 2 korrekt. ![Direktions Modded](~@images/beginners-guide/directory-patched.png "Direktions Modded")

### Installer Mods

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources. **Sørg for at downloade eventuelle afhængigheder, som bruges af mod'en.** ![Direktions Plugins](~@images/beginners-guide/directory-plugins.png "Direktions Plugins")
5. Nogle mods har installationsvejledninger, og nogle har ikke. Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.

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
