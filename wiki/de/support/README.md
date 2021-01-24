---
sidebar: auto
---

# Support
## Inhalt
0. [Wichtige Hinweise](#0-important-notes)
1. [Installation Probleme](#1-installer-issues)
2. [In-Game Probleme](#2-game-issues-post-modding)
3. [Übliche Fragen](#3-common-questions)
4. [Problembehandlung](#4-troubleshooting)
5. [Wenn alles andere fehlschlägt](#5-if-all-else-fails)
6. [Immernoch Probleme](#6-still-having-issues)

## 0. Updates
Nach einem Update sollte der Kanal `#server-announcements` auf dem BSMG Discord die neusten Anleitungen für den Status von Updates haben. Die folgenden Anweisungen sind die häufigsten Verfahren.

#### Das Update hat meine Mods kaputt gemacht
**Starte das Spiel einmal** auf dem neuen Update. Installiere deine Mods dann wieder mit einem Installer, wie er im [Anfänger Guide](/de/beginners-guide) verlinkt ist, vorzugsweise dem Mod Assistant.

## 1. Keine Mods?

#### 1.1 Keine Mods bei einer Neuinstallation des Spiels
Als erstes, stelle sicher das die folgenden Dinge korrekt sind:
* **Du hast das Spiel bereits einmal gestartet, bevor du Mods installiert hast**. BSIPA entfernt alle mods beim ersten Start eines neuen Updates, um zu verhindern, dass alte Mods in einer neuen Version laden. Installiere die Mods neu falls das der Fall ist.
* Steam/Oculus starten Beat Saber von der **gleichen Installation** in welcher die Mods sind. *z.B. Mods sind auf der D: Festplatte, aber Steam startet von der C: Festplatte.* Setze den korrekten Installationsort in deinem Installationsprogramm.
* Falls du deine Mods manuell installiert hast, stelle sicher das du alle Dateien vom Download in die korrekten Ordner gepackt hast.

#### 1.2 Ich hatte Mods auf einer älteren Version installiert, aber nichts läd nach dem Update

Falls die Details in Sektion 1.1 korrekt sind, versuche die folgenden Lösungen, in absteigender Reihenfolge.

**Lösung 1.**
- Update BSIPA auf die neueste Version (in ModAssistant oder manuell)
- Geh in deinen Beat Saber Ordner
- Führe `IPA.exe` aus

**Lösung 2.**
-  [Überprüfe deine Spieldateien](#verify-game-files-for-steam) (nur auf Steam verfügbar, Oculus-Nutzer sollten auf Lösung Nummer 4 zurückgreifen)
- Update BSIPA auf die neueste Version
- Geh in deinen Beat Saber Ordner
- Führe `IPA.exe` aus

**Lösung 3.**
- Geh in deinen Beat Saber Ordner
- Mach ein Backup des `UserData` Ordners (optional)
- Lösche `UserData`

::: warning Das wird alle deine Plugineinstellungen zurücksetzen! :::

**Lösung 4.**
- [Führe eine Neuinstallation durch](#clean-installation)

#### 1.2 ModAssistant scheint keine Plugins zu installieren
Der Installer läd Mods nach `Beat Saber/IPA/Pending`, BSIPA schiebt die Dateien in das Root-Verzeichnis wenn das Spiel gestartet wird. Falls der Plugin Ordner danach immernoch leer ist, führe `IPA.exe` noch einmal aus und stelle sicher das nichts das Ausführen stoppt, z.B. `Antivirenprogramme, Adminrechte, etc.`

## 2. Spielfehler nach dem Modden
### Das Spiel startet nicht

#### 2.1 GetThreadContext Failed
Falls ein Fenster aufkommt, welcher sagt `GetThreadContext Failed` oder ein Windows Fehler-Sound spielt, hast du möglicherweise Software auf deinem PC welche das funktionieren Beat Saber Mods verhindert. Viele Drittanbieter Anti-Cheat Software wie ESEA oder FaceIT stoppen BSIPA beim anwenden von Mods für Beat Saber, sogar wenn sie nicht laufen. Manche Antivirussoftware weisen ebenfalls ein ähnliches Verhalten auf.

Um das Problem zu lösen:
1. Deinstalliere alle Anti-Cheat Software.
2. Starte deinen Computer neu.
3. Überprüfe ob irgendwelche Überreste des Programms noch im `%AppData%` vorhanden sind.
4. Starte das Spiel. Falls das Problem weiterhin besteht versuche das folgende: `Weitere Bemerkung: Das Problem kann weiterhin bestehen bleiben aufgrund von fehlenden Berechtigungen oder Ausnahmen, jedes Programm, welches Bsipa blocken kann, oder welches als verdächtig markiert ist, kann das Problem hervorrufen.` Steam: [Überprüfe die Spieldateien auf Fehler](#verify-game-files-for-steam) Oculus: [Führe eine Neuinstallation durch](#clean-installation)

Das sollte das Problem lösen.

#### 2.2 Beim Start eingefroren
Wenn dein Spiel auf dem Bildschirm für Gesundheit und Sicherheit eingefroren ist oder Du eine Avatar T-Pose ohne Kontrolle im Spiel siehst, [überprüfe deine Dateien](#verify-game-files-for-steam) wenn du das Spiel auf Steam hast oder und deinstalliere und installiere das Spiel auf Oculus Home. Beziehen Sie sich auf [Installation bereinigen](#clean-installation). Dies scheint beim Aktualisieren von Beat Saber und beim Installieren von Mods vor der Installation zu geschehen, nicht aber bei Benutzern mit einer sauberen Installation des Spiels.

### FPS Probleme
#### 2.3 Das Spiel stottert unerträglich nach dem installieren von Mods
Falls das Spiel so schlecht läuft, dass man kaum den `Continue` Knopf im Health & Safety Menü klicken kann, dann: Steam: Überprüfe die Spieldateien, Oculus: Führe eine Neuinstallation durch. Mach das gleiche falls das Spiel überhaupt nicht startet und keine Fehlermeldung erscheint.

Wenn das Problem nicht gelöst wurde, überprüfen Sie Abschnitt [2.4 Framerate verbessern](#framerate-issues)

#### 2.4 Framerate verbessern
Falls [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) deine FPS nicht verbessert hat, dann kann dein PC möglicherweise einfach nicht mit dem Stress, den Mods verursachen zurecht kommen. Hier sind ein paar Dinge, die du tun kannst um deine FPS zu verbessern, in keiner wirklichen Reihenfolge:

* Überprüfe ob NVIDIA GEFORCE EXPERIENCE die Rendering-Skalierung über den Standardwert von 1 gesetzt hat. Möglicherweise hat es auf eine höhere Zahl von 1,4 oder 1,8 gesetzt, was die GPU-Last erheblich erhöht.
* Verwende einen weniger komplexen Avatar.
* The custom saber **Plasma Katanas** have tons of custom events and are known to introduce lag if you miss.
* CameraPlus can be very taxing, especially if you have multiple cameras and increase the FOV.
* Turn down Render Scale, Anti-Aliasing, mirror, fog, etc in the base game settings.
* For Oculus CV1 or Rift players: consider using 2 sensors instead of 3+.
* Reduce your total mod and song count.
* Perform a [Clean Installation](#clean-installation) of the game files.
* Low framerate can also be caused by something going wrong within your application data folder, to fix this refer to [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)
* Disable CountersPlus counters like score counter and swing speed as they can be expensive.
* HTTPStatus mod can cause lag spikes. Test without this mod to see if the lag spikes go away.

VR is very CPU intensive, especially if you add mods. If you're struggling to run the game with the mods you want, consider upgrading your hardware. Note that Beat Saber doesn't utilize the GPU very much as visually it's a fairly simple game.

## 3. FAQ's
#### 3.1 Leeres Menü, keine UI
Wenn dein Menü leer ist, ist mit hoher Wahrscheinlichkeit deine Speicherdatei defekt. Um dies zu beheben, [lösche deine kompletten Beat Saber Dateien](#deleting-your-save-in-appdata).

:::warning Dies löscht deine lokalen Scores im Leaderboard und Statistiken. :::

#### 3.2 Wie verwende ich diesen Mod?
- Wenn Du den Mod Assistant nutzt, klick einfach auf "Mod Info" - http://beatmods.com hat ebenfalls eine solche Schaltfläche.

#### 3.3 Rumble Issues
Gameplay Modifiers Plus adds a toggle to enable/disable controller rumble. If you disabled it then removed the mod, you'll need to modify the save data file that it writes to manually. Open `%appdata%/../locallow/hyperbolic magnetism/beat saber` and set `constrollersRumbleEnabled` to `true`.

If this isn't the cause of your rumble issues and the following are true regarding your haptics:
* haptics are miniscule
* there is no vibration when hitting multiple blocks
* there is a slight delay when touching sabers together
* you are using Oculus touch controllers

Then there is a good chance that Beat Saber is overloading your motherboard's USB controller. Oculus devours your USB controller bandwidth and most motherboards come with a very cheap controller. Beat Saber pushes it harder than any other game, which is why other games and menus might be fine. There is no clear-cut solution, so try the following:
* Shuffle the sensor and HMD USB cables around in different ports
* Unplug unnecessary USB devices
* Buy a PCI-E USB hub
* Use `-vrmode oculus` if you're using SteamVR to bypass it and use the Oculus SDK instead

### Custom Avatars
#### 3.4 Custom Avatars (Not) Showing Ingame
Click the **Home** button on your keyboard with the game in focus to toggle visibility in the headset.

#### 3.5 My Avatars Are Broken
Make sure your custom avatars plugin is installed properly and updated, also make sure your dependencies are too. You might have a corrupted/broken avatar, having one avatar break can break all of your avatars likewise with songs and sabers.

### Custom Songs

#### 3.6 My Songs Are Missing
Make sure your songs are in your `CustomLevels` folder, located at `Beat Saber/Beat Saber_Data/`. This is where the game natively reads custom songs from.

**Do not** place songs in the old `Beat Saber/CustomSongs` folder. This location is deprecated as the format for custom songs has changed. If you have maps in the old format (`.json` and `.ogg` files instead of `.dat` and `.egg`), leave them in the old `Beat Saber/CustomSongs` folder. They will then be automatically converted by the SongCore mod.

Alternatively, you can manually convert them using [Song Converter](https://github.com/lolPants/songe-converter)

#### 3.7 Grayed Out Play Button
Click the shiny blue question mark (?) button in the top right corner. This should tell you what mods are required to play the song, which you are missing and should install. If it is still not working, try re-installing the required plugin. Otherwise try a [Clean Install](#clean-installation).

#### 3.8 Map details are infinitely loading
If this only happens on particular maps, those song files are probably broken. If it happens to all of your maps, delete your `Plugins` folder and reinstall fresh ones.

### Camera Plus
#### 3.9 Camera Plus Isn't Working/Past Health Screen
Make sure the in-game setting for "Smooth Camera" is turned off in your in-game settings. If that does not work, try reinstalling it and associated dependencies.

#### 3.10 My desktop view only takes up a small section of the screen
Your CameraPlus display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader
#### 3.11 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your plugins and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.12 Nothing Showing Up In The More Songs Menu
The probable causes for beatsaver downloader not working are:
1. Make sure all of your songs have loaded in before, or else the More Songs button will be greyed out.
2. Your anti-virus or firewall blocking access to BeatSaver.
3. You have hit Beatsaver's rate limit and will have to wait before trying again.

## 4. Miscellaneous Troubleshooting
### Understanding Logs
If you're on Steam you can go to
> Beat Saber > Properties > Set Launch Options > Add `--verbose` to the text field that appears

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs
* This may not show 100% of the time for avatars and sabers, and you may have to remove all your avatars/sabers and try them one by one to see which one breaks the game.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Verify Game Files For Steam
To verify integrity of game files follow these steps:
1. Make sure steamvr is closed as it wont let you verify your games otherwise.
2. Go to your steam library and find Beat Saber
3. Right click Beat Saber and click on Properties
4. Go to the "Local Files" tab in properties
5. Select the "Verify Integrity Of Game Files" option.
6. Let it finish verifying and downloading any missing files and you should be good to go.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI the steps are still the same.

### Clean Installation
1. (Optional) Back up your downloaded custom content by making a copy of the following folders:
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Delete the ENTIRE Beat Saber Folder.** This is different from uninstalling the game on steam, as those methods will not remove files that did not come with the game.
> Steam:     ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Reinstall the game via the Steam or Oculus store
4. **Before modding, launch the game once**
5. Run Mod Assistant, install your mods, and boot up the game.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Deleting Your Save in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Users > "USER" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning Deleting the Appdata folder will also delete your local scores and statistics. :::

#### Desperate Measures
::: warning Disabling your anti-virus involves security risks, be sure to know what you're doing (i.e don't download or open suspicious files while it's turned off) and don't forget to re-enable it as soon as you finished these steps. :::
* Make sure your current user **is an administrator**
* Turn your anti-virus **Off** (for the meantime at least)
* Ensure that you have permission to create folders and edit files within the disk drive/your pc, (from what I heard a windows update recently caused problems for people)
* Ensure that your drivers are up to date
* Check that the problem doesn't lie within your headset, or operating system, or your hardware/software
* Check your internet connection, and that nothing is blocking anything related to beatsaber modding and steam etc.

## 5. Still having issues
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:
* Use the correct channels please, `#pc-help` for pc mod support and `#quest-help` for quest mod support. Use  `#pc-3d-modeling` and `#quest-3d-modeling` for questions about **making your own avatars, platforms, notes, or sabers**, and `#mapping-discussion` for questions about **making maps.**
* Be polite and respectful
* Describe your problem in detail. "It didn't work" is about as descriptive as telling your doctor you don't feel well. What's not working, and what did you try? Are there any messages that come up on screen? Did your entire screen turn bright purple?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Thank you!

> Thank you to Saber-Chan for their hard work on this page.
