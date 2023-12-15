---
sidebar: auto
---

# PC Modding

## Forord

::: danger DISCLAIMER Når du vælger at benytte mods, forstår du at:

* Du kan opleve problemer, der ikke findes i vanilla-spillet. 99,9% af bugs, crashes og lag skyldes mods.
* Mods er underlagt af at blive ødelagt af opdateringer, og det er normalt - vær tålmodig og respektfuld når dette sker, eftersom modders er frivillige med et liv ved siden af.
* Beat Games forsøger ikke med vilje at ødelægge mods. De ønsker kun at arbejde med programmeringen og nogle gange vil dette ødelægge mods, men det er ikke med vilje.

Angrib ikke udviklerne for problemer relateret til mods eller omvendt - modders og udviklere er to separate grupper. Bare lad være med at være en idiot. :::

:::warning FORBLIV SIKKER NÅR DU INSTALLERER MODS Beat Saber vil **ALDRIG** bede dig om at køre den som administrator.

Hvis du har downloadet og installeret en mod og hvis du får User Account Control prompten, så **LAD VÆR** med at clicke accepter, og vær sød at rapportere det. Det du har installeret er en fjendtlig mod!

Den eneste godkendte sag er, når du aktiverer/deaktiverer OneClick™ Installer i Mod Assistant. Administrator adgang er påkrævet for at registrere programmet med din computer OneClick™ Installerings links.

Hvis du er usikker på om noget, du har installeret, er malware eller ej, ***så spørg venligst nogen i vores discord***. :::

Beat Saber understøtter allerede brugerskabte sange, så hvis det er alt du leder efter, behøver du ikke flere mods! Det er en god idé at installere `SongCore` alligevel, da denne mod udvider spillets grundfunktion til at forbedre indlæsningstiden og levere funktionalitet til andre mods såsom download af sange inde i spillet, ranglister til brugerskabte baner, playlister osv.

::: warning This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](./linux-modding.md) :::

If you run into problems at any point, please head to the [support page](./support/) and see if you can identify what went wrong before asking in the Discord server. Der er gode muligheder for, at svaret er på den side!

::: warning ADVARSEL Jeg fulgte en tutorial på YouTube, men jeg sidder fast/det virkede ikke. Hvad skyldes det? Vi her i BSMG anbefaler **kraftigt** imod at bruge nogen tutorials fra YouTube. Ofte finder vi, at de er forældede eller indeholder en ufuldstændig, fejlagtig eller direkte ukorrekt information.

I stedet bør du følge de skriftlige vejledninger her på wikisiden eller søge hjælp i [BSMG Discord](https://discord.gg/beatsabermods). :::

## Installatører

### Mod Assistant
> **DETTE ER NUVÆRENDE DET ANBEFALEDE INSTALLATIONSPROGRAM TIL MODS.**

__**Kør spillet mindst én gang**** før du forsøger at modde spillet! Dette gælder også for geninstallering af dit spil.

Det er et simpelt Beat Saber Mod Installationsprogram som ligner mod manager, men med yderligere funktioner såsom mod-fjernelse og kontrol af din version! Få den fra [Assistentens GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![Mod Assistant](~@images/beginners-guide/modassistant.png)

### BeatSaberModManager

__**Run the game at least once**** before trying to mod the game! This applies to reinstalling your game too.

Yet another mod installer for Beat Saber, heavily inspired by ModAssistant. It strives to look more visually appealing and support both Windows and Linux, while still being as feature-rich as ModAssistant. Get it on [affederaffe's GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](~@images/beginners-guide/beatsabermodmanager.png)

## Sådan får du flere sange
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

* Brug værktøjet `Install Playlist` i fanen Indstillinger i Mod Assistant.
* Placer playlistfilen i `Beat Saber/Playlists`, vælg playlisten inde i spillet, og tryk derefter på "download all songs".

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Installationsmappe
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

## Manuel installering
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

::: warning STAY SAFE WHEN INSTALLING MODS Modding your game with unverified mods such as mods found in the `#pc-mods` channel comes with risks, including the possibility for malicious software that acts like a regular mod.

Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the User Account Control prompt, **DO NOT** click accept, and please report this. If you're unsure if something you installed is malware or not, ***please ask someone in our discord***. :::

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Install BSIPA

1. Download [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Gå til din [installationsmappe.](#install-folder) og udpak indholdet af BSIPA-zipfilen ind i den mappe. ![Direktions Fjernelse](~@images/beginners-guide/directory-clean.png "Direktions Fjernelse") ![Direktions Ipa](~@images/beginners-guide/directory-ipa.png "Direktions Ipa")
3. Dobbeltklik på IPA.exe for at modde spillet. Alle mods i mappen `Plugins` vil nu blive indlæst, når spillet startes. Hvis der er fejl, har du sandsynligvis ikke fulgt trin 2 korrekt. ![Direktions Modded](~@images/beginners-guide/directory-patched.png "Direktions Modded")

### Install Mods

4. Download den mod eller de mods du ønsker at installere, uanset om det er fra GitHub, [BSMG Discorden](https://discord.com/invite/beatsabermods) i `#pc-mods` kanalen, [BeatMods](https://beatmods.com/#/mods) eller andre kilder. **Sørg for at downloade eventuelle afhængigheder, som bruges af mod'en.** ![Direktions Plugins](~@images/beginners-guide/directory-plugins.png "Direktions Plugins")
5. Nogle mods har installationsvejledninger, og nogle har ikke. Generelt kan du bare trække og slippe zip-indholdet ind i din Beat Saber installationsmappe, og filerne bør selv komme ind i de korrekte mapper.

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
