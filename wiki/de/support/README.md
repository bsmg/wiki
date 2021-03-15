---
sidebar: auto
---

# Support

## Inhalt

0. [Updates](#_0-updates)
1. [Keine Mods?](#_1-no-mods)
2. [Spielfehler nach dem Modden](#_2-game-issues-post-modding)
3. [Übliche Fragen](#_3-common-questions)
4. [Diverse Fehlerbehebungsmethoden](#_4-miscellaneous-troubleshooting)
5. [Noch immer Fehler](#_5-still-having-issues)

## 0. Updates
Nach einem Update ist der `#server-announcements` Kanal im BSMG Discord die Quelle der aktuellsten Informationen über den Status von Mods. Die folgenden Anweisungen sind die häufigsten Verfahren.

### Das Update hat meine Mods zerstört
**Starte das Spiel einmal** auf dem neuen Update. Dann installiere die Mods noch einmal mit einem Installer, welcher im [beginner's guide](/beginners-guide) verlinkt ist, wie z. B Mod Assistant.

## 1. Keine Mods?

### Diverse Fragen

#### 1.1 Keine Mods erscheinen bei einer neuen Installation des Spiels
Als erstes, stelle sicher das die folgenden Dinge korrekt sind:

* **Du hast das Spiel bereits einmal gestartet, bevor du Mods installiert hast**. BSIPA entfernt alle Mods beim ersten starten eines neuen Updates, um zu verhindern, dass alte, nicht funktionierende Mods auf der neuen Version laden. Installiere die Mods einfach nochmal falls das der Fall sein sollte.
* Steam/Oculus starten Beat Saber aus der **gleichen Installation** in der die Mods sind. *z.B Mods sind auf der D: Festplatte aber Steam startet das Spiel von der C: Festplatte.* Setzte den korrekten Installationsort im Installer deiner Wahl.
* Falls du deine Mods manuell installiert hast, stelle sicher das du alle Dateien vom Download in die korrekten Ordner gepackt hast.

#### 1.2 Ich hatte Mods in einer alten Version installiert, aber nichts läd nach einem Update
Falls die Details in Sektion 1.1 korrekt sind, versuche die folgenden Lösungen, in absteigender Reihenfolge.

##### Lösung 1

* Update BSIPA auf die neueste Version (in ModAssistant oder manuell)
* Geh in deinen Beat Saber Ordner
* Führe `IPA.exe` aus

##### Lösung 2

* [Überprüfe deine Spieldateien](#verify-game-files-for-steam) (nur auf Steam verfügbar, Oculus-Nutzer sollten auf Lösung Nummer 4 zurückgreifen)
* Update BSIPA zu der neuesten Version
* Geh in deinen Beat Saber Ordner
* Starte `IPA.exe`

##### Lösung 3

* Geh in deinen Beat Saber Ordner
* Mach ein Backup des `UserData` Ordners (optional)
* Lösche `UserData`

::: Warnung Das wird alle Mod-Einstellungen zurücksetzen! :::

##### Lösung 4

* [Führe eine Neuinstallation durch](#clean-installation)

#### 1.2 Mod Assistant tut so als ob es keine Mods installieren würde
Der Installer läd Mods nach `Beat Saber/IPA/Pending`, BSIPA schiebt die Dateien in das Root-Verzeichnis wenn das Spiel gestartet wird. Falls der Plugin Ordner danach immernoch leer ist, führe `IPA.exe` noch einmal aus und stelle sicher das nichts das Ausführen stoppt, z.B. `Antivirenprogramme, Adminrechte, etc.`

## 2. Spielfehler nach dem Modden

### Das Spiel startet nicht

#### 2.1 GetThreadContext Failed Fehlermeldung
Falls ein Fenster erscheint, welches sagt `GetThreadContext Failed` und oder du hörst einen Windows Fehler Sound könntest du Software auf deinem PC haben, welches das funktionieren von Beat Saber Mods verhindert. Viele Drittanbieter Anti-Cheat Software wie ESEA oder FaceIT stoppen BSIPA beim anwenden von Mods für Beat Saber, sogar wenn sie nicht laufen. Manche Antivirussoftware weisen ebenfalls ein ähnliches Verhalten auf.

Um das Problem zu lösen:

1. Deinstalliere alle Anti-Cheat Software.
2. Starte deinen Computer neu.
3. Überprüfe ob irgendwelche Überreste des Programms noch im `%AppData%` vorhanden sind.
4. Starte das Spiel. Falls das Problem weiterhin besteht versuche das folgende: `Weitere Bemerkung: Das Problem kann weiterhin bestehen bleiben aufgrund von fehlenden Berechtigungen oder Ausnahmen, jedes Programm, welches Bsipa blocken kann, oder welches als verdächtig markiert ist, kann das Problem hervorrufen.` Steam: [Überprüfe die Spieldateien auf Fehler](#verify-game-files-for-steam) Oculus: [Führe eine Neuinstallation durch](#clean-installation)

Das sollte das Problem lösen.

#### 2.2 Beim Start eingefroren
Falls das Spiel im Health and Safety Bereich am Anfang des Spiels einfriert und du keine Kontrolle des Spiels hast, [Überprüfe die Spieldateien auf Fehler](#verify-game-files-for-steam) falls du das Spiel auf Steam haben solltest, oder Installiere das Spiel auf Oculus Home noch einmal. Siehe [Neuinstallation](#clean-installation)

Das scheint beim updaten von Beat Saber zu passieren, während man bereits Mods installiert hatte. Aber nicht zu Nutzern mit einer sauberen Installation des Spiels.

### FPS Probleme

#### 2.3 Das Spiel stottert unerträglich nach dem installieren von Mods
Falls das Spiel so schlecht läuft, dass man kaum den `Continue` Knopf im Health & Safety Menü klicken kann, dann: Steam: Überprüfe die Spieldateien, Oculus: Führe eine Neuinstallation durch. Mach das gleiche falls das Spiel überhaupt nicht startet und keine Fehlermeldung erscheint.

Wenn das Problem nicht gelöst wurde, überprüfen Sie Abschnitt [2.4 Framerate verbessern](#framerate-issues)

#### 2.4 Framerate verbessern
Falls [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) deine FPS nicht verbessert hat, dann kann dein PC möglicherweise einfach nicht mit dem Stress, den Mods verursachen zurecht kommen. Hier sind ein paar Dinge, die du tun kannst um deine FPS zu verbessern, in keiner wirklichen Reihenfolge:

* Überprüfe ob NVIDIA GEFORCE EXPERIENCE die Rendering-Skalierung über den Standardwert von 1 gesetzt hat. Möglicherweise hat es das auf eine höhere Zahl wie 1,4 oder 1,8 gesetzt, was die GPU-Last erheblich erhöht.
* Verwende einen weniger komplexen Avatar.
* Der custom saber **Plasma Katanas** hat unglaublich viele Effekte und ist bekannt dafür, Lag einzuführen, wenn du Noten verfehlst.
* CameraPlus kann sehr anfordernd sein, vor allem wenn Du mehrere Kameras aktiviert hast und das FOV erhöhst.
* Stelle die Renderskallierung, Anti-Aliasing, Mirror, Fog etc. in den Grundeinstellungen aus.
* Für Oculus Rift (CV1) spieler: Versuche 2 anstatt 3 oder mehr Sensoren zu nutzen.
* Reduziere deine Gesamtanzahl an Mods und Songs.
* Führe eine eine [saubere Neuinstallation](#clean-installation) der Spieldateien durch.
* Eine niedrige Framerate kann auch durch Fehler in deinem Anwendungsdatenordner verursacht werden. Um das zu beheben, überlege dir, [deinen BeatSaber-Ordner im AppData-Verzeichnis zu löschen](#deleting-your-save-in-appdata).
* Deaktiviere CountersPlus zähler wie Score counter oder Schwinggeschwindigkeit da diese sehr anfordernd sein können.
* Die HTTPStatus-Mod kann Lagspikes verursachen. Teste dies ohne die Mod, um zu sehen, ob sich deine Lagspikes reduzieren oder verschwinden.

VR ist sehr CPU intensiv, erst recht wenn man Mods hinzufügt. Wenn du Schwierigkeiten hast, das Spiel mit den Mods auszuführen, die du möchtest, Überlege deine Hardware zu ersetzen. Anmerkung: Beat Saber ist nicht sehr GPU intensiv, da das Spiel grafisch sehr simpel ist.

## 3. FAQ's

### Sonstiges

#### 3.1 Leeres Menü, keine Schaltflächen
Wenn dein Menü leer ist, ist mit hoher Wahrscheinlichkeit deine Speicherdatei defekt. Um dies zu beheben, [lösche deine kompletten Beat Saber Dateien](#deleting-your-save-in-appdata)

::: warning Dies löscht deine lokalen Scores im Leaderboard und Statistiken. :::

#### 3.2 Wie verwende ich `X` Mod?
- Wenn Du Mod Assistant nutzt, klick einfach auf "Mod Info". [BeatMods](http://beatmods.com) hat ebenfalls eine solche Schaltfläche.

#### 3.3 Vibrationsfehler
Gameplay Modifiers Plus hat eine Option für das Ein/Ausschalten der Controllervibrationen. Wenn Du es deaktiviert hast, dann hat es den Mod entfernt. Du musst die Speicherdatei in die es schreibt, manuell ändern. Öffne`%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` und setze `controllersRumbleEnabled` zu `true`.

Wenn dies nicht die Ursache für deine Vibrationsprobleme ist und Folgendes für deine Haptik gilt:

* Haptiken sind minimal
* beim treffen mehrerer Blöcke ist keine Vibration
* beim überschneiden von beiden Sabern gibt es eine kleine verzögerung
* du benutzt Oculus Touch Controllers

Dann gibt es eine gute Chance, dass Beat Saber den USB-Controller deines Mainboards überlädt. Oculus verschlingt deine USB-Controller Bandbreite und die meisten Mainboards verfügen über einen sehr günstigen Controller. Beat Saber beansprucht den Controller härter als jedes andere Spiel, das ist der Grund wieso andere Spiele und Menüs OK laufen. Es gibt keine einfache Lösung dafür, also versuche folgendes:

* Benutze verschiedene Ports für die Sensor und Headset Kabel
* Unnötige USB-Geräte trennen
* Kaufe einen PCIe USB Hub
* Verwende `-vrmode oculus` wenn du SteamVR verwendest um Steam zu umgehen und stattdessen das Oculus SDK zu verwenden

### Custom Avatare

#### 3.4 Custom Avatare erscheinen nicht im Spiel
Klicke auf die **Home** Taste auf deiner Tastatur mit dem Spiel im Fokus um die Sichtbarkeit im Headset umzuschalten.

#### 3.5 Meine Avatare funktionieren nicht
Stelle sicher, das die neueste version der custom avatars Mod korrekt installiert ist. Stelle auch sicher das die Dinge von denen es Abhängig ist auch auf dem neuesten Stand sind. Du könntest einen kaputten Avatar haben. Nur ein kaputter Avatar kann dazu führen, dass alle Avatare nicht mehr funktionieren. Das gleiche gilt für Songs und Saber.

### Custom Songs

#### 3.6 Meine Songs fehlen
Stelle sicher das sich deine Songs im `Custom Levels` Ordner im `Beat Saber\Beat Saber_Data\CustomLevels` Pfad befinden. Hier liest das Spiel nativ Custom Songs aus.

Platziere die Songs **nicht** im alten `Beat Saber/CustomSongs` Ordner. Dieser Standort ist veraltet, da sich das Format für Custom Songs geändert hat. Falls du Maps im alten Format haben solltest (`.json` und `.ogg` anstatt `.dat` und `.egg`) lass sie einfach im alten `Beat Saber/CustomSongs` Ordner. Du musst sie erneut von BeatSaver herunterladen.

Alternativ kannst du sie auch manuell konvertieren, indem du [Song Converter](https://github.com/lolPants/songe-converter) benutzt. Jedoch wirst du bei der Methode keine Hilfe bekommen und du musst das Programm selbst Compilen.

#### 3.7 Ausgegrauter Play Button
Klicke auf den glänzenden (?) Knopf oben rechts im Menü. Der sollte dir sagen welche Mods benötigt sind um den Song zu spielen, welche fehlen und installiert werden sollten. Wenn es immer noch nicht funktioniert, versuche die benötigte Mod neu zu installieren. Sonst probiere eine [Neuinstallation](#clean-installation).

#### 3.8 Map details werden unendlich geladen
Falls das nur bei ein paar bestimmten Maps auftritt, kann es sein das manche Mods fehlen oder das die Songdatei kaputt ist. Falls es bei all deinen Maps passiert, lösche deinen `Plugins` Ordner und installiere deine Mods noch einmal.

### CameraPlus

#### 3.9 CameraPlus funktioniert nicht/nicht nach der Health & Safety Warnung
Stelle sicher das die Einstellung "Smooth Camera" in den Spieleinstellungen aus ist. Wenn das nicht funktioniert, versuche die Mod und zugehörige Abhängigkeiten neu zu installieren.

#### 3.10 Meine Desktop-Ansicht belegt nur einen kleinen Teil des Bildschirms
Dein CameraPlus Display füllt nicht die gesamte Leinwand. Entweder ziehst du die Ecke so, dass es auf die Leinwand passt. Oder du klickst auf die "Fit to Canvas" Option im Rechtsklickmenü.

### BeatSaver Downloader

#### 3.11 BeatSaber Downloader More Songs Button
**Die More Songs taste ist im Hauptmenü auf der linken Seite unter dem Wort "Mods".** Falls der Knopf ausgegraut ist, stelle sicher das alle deine Mods zuerst einmal geladen sind. Das sieht man am Regenbogenfarbenen Ladebalken im Hauptmenü. Falls das Mod Menü nicht da ist stelle sicher das deine Plugins und Abhängigkeiten korrekt installiert sind und funktionieren. Verweise dich auf die [Keine Mods?](#_1-no-mods) Sektion.

#### 3.12 Nichts taucht im More Mods Menü auf
Die wahrscheinlichen Ursachen für das nicht funktionieren vom BeatSaver downloader sind:

1. Stelle sicher das alle deine Songs bereits geladen sind, ansonsten ist die More Songs Fläche ausgegraut.
2. Dein Antivirus oder die Firewall blockiert deinen Zugriff auf BeatSaver.
3. Du hast das Datenlimit von BeatSaver erreicht und musst warten, bevor du es erneut versuchen kannst.

## 4. Diverse Problembehebung

### Logs verstehen
Falls du auf Steam bist kannst du zu
> Beat Saber > Properties > Allgemein > Startoptionen gehen und `--verbose` im Textfeld eingeben

Falls du auf Oculus bist, musst du auf Beat Saber.exe Rechtsklicken und eine Verknüpfung erstellen. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

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

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Clean Installation

1. (Optional) Back up your downloaded custom content by making a copy of the following folders:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Delete the ENTIRE Beat Saber Folder.** This is different from uninstalling the game on steam, as those methods will not remove files that did not come with the game.

> Steam: ``\steamapps\common\Beat Saber\`
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

* Use the correct channels please, `#pc-help` for pc mod support and `#quest-help` for quest mod support. Use `#pc-3d-modeling` and `#quest-3d-modeling` for questions about **making your own avatars, platforms, notes, or sabers**, and `#mapping-discussion` for questions about **making maps.**
* Be polite and respectful
* Describe your problem in detail. "It didn't work" is about as descriptive as telling your doctor you don't feel well. What's not working, and what did you try? Are there any messages that come up on screen? Did your entire screen turn bright purple?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Thank you!

> Thank you to Saber-Chan for their hard work on this page.
