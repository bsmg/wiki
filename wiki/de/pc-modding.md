---
sidebar: auto
---

# PC Modding

## Vorwort

::: danger BITTE BEACHTE Wenn du Mods verwendest, verstehst du das:

* Du möglicherweise Probleme bekommst, die im normalen Spiel nicht existieren. 99,9% aller Fehler, Abstürzen und Verzögerungen passieren aufgrund von Mods.
* Mods werden durch Updates oft unbrauchbar und das ist normal - Bitte sei geduldig und respektvoll wenn dies passiert. Modder sind Freiwillige mit einem richtigen Leben.
* Beat Games versucht nicht mit Absicht Mods kaputt zu machen. Sie versuchen an der Code-Grundlage zu arbeiten welches manchmal Mods unbrauchbar macht. Dies geschieht aber nicht mit Absicht.

Bitte greife die Entwickler im Bezug mit Problemen bei Mods nicht an. Modder und Entwickler sind zwei verschiedene Gruppen. Sei einfach kein Trottel, ok? :::

:::warning BEI DER INSTALLATION VON MODS SICHER BLEIBEN Beat Saber wird **NIEMALS** fragen als Administrator zu starten.

Wenn du eine  Mod heruntergeladen und installiert hast und die Benutzerkontensteuerung erhältst, **klicke NICHT** auf "Akzeptieren" und melde dies bitte. Was du installiert hast, ist eine bösartige Mod!

Es ist nur in Ordnung, wenn du den OneClick™ Installer im Mod Assistant (de-) aktivierst. Die Adminrechte sind hier erforderlich, damit die Links richtig registriert werden können.

Wenn du dir nicht sicher bist, ob du dir gerade Malware installiert hast, ***frage bitte jemanden in unserem Discord***. :::

Beat Saber unterstützt von Grund auf Custom Songs. Wenn du also nur danach suchst, brauchst du keine Mods! Es ist aber eine kluge Idee, `SongCore` zu installieren. Diese Mod erweitert die Basisspiel-Funktion, um die Ladezeiten zu verbessern und Funktionen für andere Mods wie den In-Game Downloader, Ranglisten, Playlisten, usw.

::: warning This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](./linux-modding.md) :::

Wenn du auf irgendwelche Probleme stoßen solltest, schaue bitte auf der [Support Seite](./support/) nach und prüfe was falsch gelaufen ist, bevor du auf dem Discord Server nachfragst. Es kann gut sein, dass deine Frage dort beantwortet wird!

::: warning Ich habe ein Video Tutorial angeschaut, aber es funktioniert nicht wie beschrieben. Was bedeutet das? Wir von BSMG raten **stark** davon ab, Video-Tutorials für Modding zu verwenden. Meistens ist es so, dass diese veraltet, unvollständig, fehlerhaft oder einfach falsch sind.

Stattdessen solltest du den schriftlichen Anleitungen hier im Wiki folgen oder im [BSMG Discord](https://discord.gg/beatsabermods) nach Hilfe suchen. :::

## Installationsprogramme

### Mod Assistant
> **DIES IST AKTUELL DER EMPFOHLENE MOD INSTALLER.**

__**Starte das Spiel mindestens ein mal**** bevor du versuchst das Spiel zu modden! Dies gilt auch für die Neuinstallation des Spiels.

Ein einfacher Beat Saber Mod Installer, ähnlich dem Mod Manager, aber mit zusätzlichen Funktionen wie Mod-Entfernung und Versionskontrolle! Hol ihn dir auf [Assistant's GitHub Seite.](https://github.com/Assistant/ModAssistant/releases/latest)

![Mod Assistant](~@images/beginners-guide/modassistant.png)

### BeatSaberModManager

__**Run the game at least once**** before trying to mod the game! This applies to reinstalling your game too.

Yet another mod installer for Beat Saber, heavily inspired by ModAssistant. It strives to look more visually appealing and support both Windows and Linux, while still being as feature-rich as ModAssistant. Get it on [affederaffe's GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](~@images/beginners-guide/beatsabermodmanager.png)

## Wie bekomme ich mehr Songs
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

* Das `Install Playlist` Tool in den Optionen des Mod Assistant verwenden.
* Platziere die Playlist-Datei in `Beat Saber/Playlists` und wähle diese im Spiel aus. Klicke dann auf Download.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Installationspfad
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

## Manuelle Installation
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

::: warning STAY SAFE WHEN INSTALLING MODS Modding your game with unverified mods such as mods found in the `#pc-mods` channel comes with risks, including the possibility for malicious software that acts like a regular mod.

Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the User Account Control prompt, **DO NOT** click accept, and please report this. If you're unsure if something you installed is malware or not, ***please ask someone in our discord***. :::

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Install BSIPA

1. Lade [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases) herunter.
2. Begib dich zu deinem [Installationsordner.](#installationspfad) und entpacke den Inhalt des Archivs in diesen Ordner. ![Directory Clean](~@images/beginner-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginner-guide/directory-ipa.png "Directory Ipa")
3. Doppelklicke auf IPA.exe um das Spiel zu patchen. Alle Mods im Ordner `Plugins` werden ab sofort geladen, wenn das Spiel gestartet wird. Sollte es Fehler geben, hast du etwas in Schritt 2 nicht richtig gemacht. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Install Mods

4. Lade die Mod(s) herunter die du installieren möchtest. Sei es von GitHub, dem [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` Kanal, [BeatMods](https://beatmods.com/#/mods) oder anderen Quellen. **Stell sicher, dass du alle Dependncies herunterlädst, die vom Mod benötigt werden.** ![Directory Plugins](~@images/beginner-guide/directory-plugins.png "Directory Plugins")
5. Einige Mods haben Installationsanweisungen, andere nicht. In der Regel kann man einfach die ZIP-Datei im Beat Saber Installationsordner ziehen und entpacken. Die Dateien werden dann in die entsprechenden Ordner entpackt.

## Downgrading

Check `#modding-announcements` in [BSMG](https://www.discord.gg/beatsabermods) to see if the latest version is moddable. If it is not, you can follow these tutorials to downgrade to a moddable version.

Click on these links corresponding to where you own the game to see the tutorials.

* [Oculus Store](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)
* Für Steam haben Sie ein paar Optionen zum Downgraden. Diese beiden werden von [BSLG](https://discord.gg/MrwMx5e) unterstützt.
  * [BSLegacyLauncher](https://www.youtube.com/watch?v=qjNU5aENHRU)
  * [LegacyInstaller](https://github.com/Goobwabber/LegacyInstaller#readme)

## Wie man Mods deinstalliert
Either remove the dll from the `Plugins` folder, or click the `Uninstall` button in Mod Assistant.

## Weitere Informationen

* [Griffe und Tricks](./grips-and-tricks.md)
* [Erstelle Beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Custom Songs im Multiplayer](https://discord.com/invite/gezGrFG4tz)
* [Mods erstellen](/modding/)

## Hast Du Fragen?
Visit the support channels in the [BSMG Discord](https://discord.gg/beatsabermods)!
