---
sidebar: auto
---

# PC Modding

## Voorwoord

::: danger DISCLAIMER Door mods te gebruiken, begrijp je dat:

* Je ervaart mogelijk problemen die niet voorkomen in de onaangepaste versie van het spel. 99,9% van de bugs, crashes en lag zijn te wijten aan mods.
* Mods worden vrijwel altijd onbruikbaar bij game updates en dat is normaal - wees geduldig en blijf respectvol wanneer dit gebeurt, want de modders zijn vrijwilligers met andere dingen in hun leven naast het maken van mods.
* Beat Games probeert niet met opzet ervoor te zorgen dat mods niet meer werken. Ze willen enkel aan hun eigen code werken en soms maakt dit mods onbruikbaar, maar dit betekent dus niet dat ze expres mods in de weg zitten.

Val de ontwikkelaars niet aan voor problemen gerelateerd aan het gebruik van mods, en vice versa - de modders en spel ontwikkelaars zijn twee aparte groepen. Wees gewoon geen eikel. :::

:::warning WEES VOORZICHTIG TIJDENS HET INSTALLEREN VAN MODS Beat Saber zal je **nooit** vragen om het als administrator te starten.

Als je een mod hebt gedownload en geïnstalleerd en je krijgt het gebruikersaccountbeheer pop-up, **klik dan NIET** op "Ja", en rapporteer dit alsjeblieft. Wat je hebt geïnstalleerd is een kwaadaardige mod!

The only approved case is when activating/deactivating OneClick™ Install in Mod Assistant. Administrator access is required to register the program with your computer to handle OneClick™ Install links.

If you're unsure if something you installed is malware or not, ***please ask someone in our discord***. :::

Beat Saber natively supports custom songs, so if that's all you're looking for, you don't require more mods! It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](./linux-modding.md) :::

If you run into problems at any point, please head to the [support page](./support/) and see if you can identify what went wrong before asking in the Discord server. Chances are, your answer is on that page!

::: warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives? We at BSMG **strongly** suggest against using video tutorials for modding. Often, we find they are outdated or contain a incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods). :::

## Installatieprogramma's

### Mod Assistant
> **DIT IS OP HET MOMENT DE AANBEVOLEN MOD INSTALLER.**

__**Run the game at least once**** before trying to mod the game! This applies to reinstalling your game too.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and version checking! Get it on [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![Mod Assistant](~@images/beginners-guide/modassistant.png)

### BeatSaberModManager

__**Run the game at least once**** before trying to mod the game! This applies to reinstalling your game too.

Yet another mod installer for Beat Saber, heavily inspired by ModAssistant. It strives to look more visually appealing and support both Windows and Linux, while still being as feature-rich as ModAssistant. Get it on [affederaffe's GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](~@images/beginners-guide/beatsabermodmanager.png)

## Hoe kom ik aan meer nummers
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

* De `Install playlists` knop gebruiken in het Opties tabblad van Mod Assistant.
* De afspeellijst in `Beat Saber/Playlists` plaatsen, de titel van de afspeellijst selecteren in het spel en tot slot op de "Download all songs" knop klikken.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Installatiemap
_Where is Beat Saber installed?_

### Default Location
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Other Locations
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Handmatige installatie
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

::: warning STAY SAFE WHEN INSTALLING MODS Modding your game with unverified mods such as mods found in the `#pc-mods` channel comes with risks, including the possibility for malicious software that acts like a regular mod.

Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the User Account Control prompt, **DO NOT** click accept, and please report this. If you're unsure if something you installed is malware or not, ***please ask someone in our discord***. :::

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Install BSIPA

1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigeer naar jouw [installatiemap.](#installatiemap) En pak de inhoud van de BSIPA zip hierin uit. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Dubbel-klik op IPA.exe om het spel te modden. Alle mods in de `Plugins` map worden nu geladen bij het starten van het spel. Als er foutmeldingen zijn, dan heb je waarschijnlijk stap 2 niet correct gevolgd. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Install Mods

4. Download de mod(s) die je wilt installeren, of ze nu komen van GitHub, het [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` kanaal,  [BeatMods](https://beatmods.com/#/mods) of andere bronnen. **Zorg ervoor dat je ook alle afhankelijkheden download die vereist zijn door de mod(s).** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Sommige mods hebben installatie-instructies, sommigen niet. Over het algemeen kan je de inhoud van de zip naar je Beat Saber installatiemap slepen en neerzetten, de bestanden in de zip zouden naar de bijbehorende mappen moeten gaan.

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
