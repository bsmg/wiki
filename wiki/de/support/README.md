---
sidebar: auto
---

# Support

## Inhalt

0. [Updates](#_0-updates)
1. [Keine Mods?](#_1-no-mods)
2. [Spielfehler nach dem Modden](#_2-game-issues-post-modding)
3. [Häufig gestellte Fragen](#_3-common-questions)
4. [Diverse Fehlerbehebungsmethoden](#_4-miscellaneous-troubleshooting)
5. [Noch immer Fehler](#_5-still-having-issues)

## 0. Updates
After an update, the BSMG discord [#modding-announcements](https://discord.com/channels/441805394323439646/612468002243477505) channel should have the most up to date information on the status of mods. Die folgenden Anweisungen sind die häufigsten Verfahren.

### Das Update hat meine Mods zerstört
**Starte das Spiel einmal** auf dem neuen Update. Dann installiere die Mods noch einmal mit einem Installer, welcher im [Anfänger Leitfaden](/de/beginners-guide) verlinkt ist, wie z.B. Mod Assistant.

## 1. Keine Mods?

### Diverse Fragen

#### 1.1 Es erscheinen keine Mods bei einer neuen Installation des Spiels
Als erstes stelle sicher das die folgenden Dinge korrekt sind:

* **Du hast das Spiel bereits einmal gestartet, bevor du Mods installiert hast**. BSIPA entfernt alle Mods beim ersten starten eines neuen Updates um zu verhindern, dass alte, nicht funktionierende Mods auf der neuen Version laden. Installiere die Mods einfach nochmal falls das der Fall sein sollte.
* Steam/Oculus starten Beat Saber aus der **gleichen Installation** in der die Mods sind. *z.B Mods sind auf der D: Festplatte aber Steam startet das Spiel von der C: Festplatte.* Setzte den korrekten Installationsort im Installer deiner Wahl.
* Falls du deine Mods manuell installiert hast, stelle sicher, das du alle Dateien vom Download in die korrekten Ordner gepackt hast.

#### 1.2 Ich hatte Mods von einer älteren Version installiert, aber nach einem Update lädt nichts mehr
Falls die Details in Sektion 1.1 korrekt sind, versuche die folgenden Lösungen, in absteigender Reihenfolge.

##### Lösung 1

* Update BSIPA auf die neueste Version (im Mod Assistant oder manuell)
* Geh in deinen Beat Saber Ordner
* Führe `IPA.exe` aus

##### Lösung 2 (Nur Steam)

* [Verifiziere deine Spieldateien](#verify-game-files-for-steam)
* Update BSIPA zu der neuesten Version
* Geh in deinen Beat Saber Ordner
* Starte `IPA.exe`

##### Lösung 3

* Geh in deinen Beat Saber Ordner
* Mach ein Backup des `UserData` Ordners (optional)
* Lösche UserData

::: warning
Das wird alle Mod-Einstellungen zurücksetzen!
:::

##### Lösung 4

* [Führe eine Neuinstallation durch](#Saubere-Installation)

#### 1.2 Mod Assistant scheint keine Plugins zu installieren
Der Installer lädt Mods nach `Beat Saber/IPA/Pending`, BSIPA schiebt die Dateien in das Root-Verzeichnis wenn das Spiel gestartet wird. Falls der Plugin Ordner danach immer noch leer ist, führe `IPA.exe` noch einmal aus und stelle sicher, das nichts das Ausführen stoppt, z.B. `Antivirenprogramme, Adminrechte, etc.`

## 2. Spielfehler nach dem Modden

### Das Spiel startet nicht

#### 2.1 GetThreadContext Failed Fehlermeldung
Falls ein Fenster erscheint, welches sagt `GetThreadContext Failed` und oder du hörst einen Windows Fehler Sound, könntest du Software auf deinem PC haben, welches das funktionieren von Beat Saber Mods verhindert. Viele Drittanbieter Anti-Cheat Software wie ESEA oder FaceIT stoppen BSIPA beim anwenden von Mods für Beat Saber sogar, wenn sie nicht laufen. Manche Anti-Viren Software weisen ebenfalls ein ähnliches Verhalten auf.

Um das Problem zu lösen:

1. Deinstalliere alle Anti-Cheat Softwares.
2. Starte deinen Computer neu.
3. Überprüfe ob irgendwelche Überreste des Programms noch in `%AppData%` vorhanden sind.
4. Starte das Spiel. Falls das Problem weiterhin besteht versuche das folgende: `Weitere Bemerkung: Das Problem kann weiterhin bestehen bleiben aufgrund von fehlenden Berechtigungen oder Ausnahmen, jedes Programm, welches Bsipa blocken kann, oder welches als verdächtig markiert ist, kann das Problem hervorrufen.` Steam: [Überprüfe die Spieldateien auf Fehler](#Steam-Dateien-auf-Fehler-überprüfen) Oculus: [Führe eine Neuinstallation durch](#Saubere-Installation)

Das sollte das Problem lösen.

#### 2.2 Beim Start eingefroren
Falls das Spiel im Health and Safety Bereich am Anfang des Spiels einfriert und du keine Kontrolle des Spiels hast, [Überprüfe die Spieldateien auf Fehler](#Steam-Dateien-auf-Fehler-überprüfen) falls du das Spiel auf Steam haben solltest, oder Installiere das Spiel auf Oculus Home noch einmal. Siehe [Neuinstallation](#Saubere-Installation)

Das scheint beim updaten von Beat Saber zu passieren, während man bereits Mods installiert hatte. Aber nicht zu Nutzern mit einer sauberen Installation des Spiels.

### FPS Probleme

#### 2.3 Das Spiel stottert unerträglich nach dem installieren von Mods
Falls das Spiel schlecht läuft, dass man kaum den `Continue` Knopf im Health & Safety Menü klicken kann, dann: Steam: Überprüfe die Spieldateien Oculus: Führe eine Neuinstallation durch Mache das gleiche, falls das Spiel überhaupt nicht startet und keine Fehlermeldung erscheint.

Wenn damit das Problem nicht gelöst wurde, schaue dir den den Abschnitt [2.4 Framerate verbessern](#_2-4-improving-framerate) an.

#### 2.4 Framerate verbessern
Falls [2.3](#2-3-Das-Spiel-stottert-unerträglich-nach-der-Installation-von-Mods) deine FPS nicht verbessert hat, dann kann dein PC möglicherweise einfach nicht mit dem Stress, den Mods verursachen zurecht kommen. Hier sind ein paar Dinge, die du tun kannst um deine FPS zu verbessern, in keiner wirklichen Reihenfolge:

* Überprüfe ob NVIDIA GEFORCE EXPERIENCE die Rendering-Skalierung über den Standardwert von 1 gesetzt hat. Möglicherweise hat es dies auf eine höhere Zahl wie 1,4 oder 1,8 gesetzt, was die GPU-Last erheblich erhöht.
* Verwende einen weniger komplexen Avatar.
* Die Custom Saber **Plasma Katanas** hat unglaublich viele Effekte und ist bekannt dafür Lags zu verursachen, wenn du Noten verfehlst.
* Camera2 kann sehr anfordernd sein. Vor allem wenn du mehrere Kameras aktiviert hast und das FOV erhöhst.
* Stelle die Renderskallierung, Anti-Aliasing, Mirror, Fog etc. in den Grundeinstellungen aus.
* Für Oculus Rift (CV1) Spieler: Versuche 2 anstatt 3 oder mehr Sensoren zu nutzen.
* Reduziere deine Gesamtanzahl an Mods und Songs.
* Führe eine [saubere Neuinstallation](#Saubere-Installation) der Spieldateien durch.
* Eine niedrige Framerate kann auch durch Fehler in deinem Anwendungsdatenordner verursacht werden. Um das zu beheben, überlege dir, [deinen BeatSaber Ordner im AppData Verzeichnis zu löschen](#Löschen-des-Speichers-in-appdata)
* Deaktiviere manche CountersPlus-Features, wie zum Beispiel "Score Counter" und "Swing Speed", da sie ziemlich anfordernd werden können.
* Die HTTPStatus-Mod kann Lagspikes verursachen. Teste dies ohne die Mod, um zu sehen, ob sich deine Lagspikes reduzieren oder verschwinden.

VR ist sehr CPU intensiv, erst recht, wenn man Mods hinzufügt. Wenn du Schwierigkeiten hast, das Spiel mit den Mods auszuführen die du möchtest, überlege deine Hardware zu ersetzen. Anmerkung: Beat Saber ist nicht sehr GPU intensiv, da das Spiel grafisch sehr simpel ist.

## 3. FAQ's

### Sonstiges

#### 3.1 Leeres Menü, keine Schaltflächen
Wenn dein Menü leer ist, ist mit hoher Wahrscheinlichkeit deine Speicherdatei defekt. Um dies zu beheben, [lösche deine kompletten Beat Saber Dateien](#deleting-your-save-in-appdata)

::: warning
Dies löscht deine lokalen Scores im Leaderboard und Statistiken.
:::

#### 3.2 Wie verwende ich `x` Mod?
- Wenn Du Mod Assistant nutzt, klick einfach auf "Mod Info". [BeatMods](http://beatmods.com) hat ebenfalls eine solche Schaltfläche.

#### 3.3 Vibrationsfehler
Gameplay Modifiers Plus hat eine Option für das Ein/Ausschalten der Controllervibrationen. Wenn du es deaktiviert hast, dann hat es den Mod entfernt. Du musst die Speicherdatei in die es schreibt, manuell ändern. Öffne`%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` und setze `controllersRumbleEnabled` zu `true`.

Wenn dies nicht die Ursache für deine Vibrationsprobleme ist und Folgendes für deine Haptik gilt:

* Haptiken sind minimal
* beim treffen mehrerer Blöcke ist keine Vibration
* beim überschneiden von beiden Sabern gibt es eine kleine verzögerung
* du benutzt Oculus Touch Controllers

Dann gibt es eine gute Chance, dass Beat Saber den USB-Controller deines Mainboards überlädt. Oculus verschlingt deine USB-Controller Bandbreite und die meisten Mainboards verfügen über einen sehr günstigen Controller. Beat Saber beansprucht den Controller mehr als jedes andere Spiel. Das ist der Grund, wieso andere Spiele und Menüs OK laufen. Es gibt keine einfache Lösung dafür, also versuche folgendes:

* Benutze verschiedene Ports für die Sensoren und Headset Kabel
* Unnötige USB-Geräte trennen
* Kaufe einen PCIe USB Hub
* Verwende `-vrmode oculus` wenn du SteamVR verwendest um Steam zu umgehen und stattdessen das Oculus SDK zu verwenden

### Custom Avatare

#### 3.4 Custom Avatare erscheinen nicht im Spiel
Klicke auf die **Home** Taste auf deiner Tastatur mit dem Spiel im Fokus um die Sichtbarkeit im Headset umzuschalten.

#### 3.5 Meine Avatare funktionieren nicht
Stelle sicher, das die neueste Version der Custom Avatars Mod korrekt installiert ist. Stelle auch sicher, das die Dinge von denen es abhängig ist auch auf dem neuesten Stand sind. Du könntest einen kaputten Avatar haben. Nur ein kaputter Avatar kann dazu führen, dass alle Avatare nicht mehr funktionieren. Das gleiche gilt für Songs und Saber.

### Custom Songs

#### 3.6 Meine Songs fehlen
Stelle sicher das sich deine Songs im `Custom Levels` Ordner im `Beat Saber\Beat Saber_Data\CustomLevels` Pfad befinden. Hier liest das Spiel nativ Custom Songs aus.

Platziere die Songs **nicht** im alten `Beat Saber/CustomSongs` Ordner. Dieser Standort ist veraltet, da sich das Format für Custom Songs geändert hat. Falls du Maps im alten Format haben solltest (`.json` und `.ogg` anstatt `.dat` und `.egg`) lass sie einfach im alten `Beat Saber/CustomSongs` Ordner. Du musst sie erneut von BeatSaver herunterladen.

Alternativ kannst du sie auch manuell konvertieren, indem du [Song Converter](https://github.com/lolPants/songe-converter) benutzt. Jedoch wirst du bei der Methode keine Hilfe bekommen und du musst das Programm selbst compilen.

#### 3.7 Ausgegrauter Play Button
Klicke auf den glänzenden (?) Knopf oben rechts im Menü. This should tell you what mods are required to play the song, which you are missing and should install. Wenn es immer noch nicht funktioniert, versuche die benötigte Mod neu zu installieren. Sonst probiere eine [Neuinstallation](#Saubere-Installation).

#### 3.8 Map Details werden unendlich geladen
Falls das nur bei ein paar bestimmten Maps auftritt, kann es sein, das manche Mods fehlen oder das die Songdatei kaputt ist. Falls es bei all deinen Maps passiert, lösche deinen `Plugins` Ordner und installiere deine Mods noch einmal.

### Camera2

#### 3.9 My desktop view only takes up a small section of the screen
Your Camera2 display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader

#### 3.10 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your mods and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.11 Nothing Showing Up In The More Songs Menu
The probable causes for BeatSaver Downloader not working are:

1. Stelle sicher, das alle deine Songs bereits geladen sind, ansonsten ist die More Songs Fläche ausgegraut.
2. Dein Antivirus oder die Firewall blockiert deinen Zugriff auf BeatSaver.
3. Du hast das Datenlimit von BeatSaver erreicht und musst warten, bevor du es erneut versuchen kannst.

### Mehrspieler Fehlercodes
Here is a list of known error codes, what they mean, and what you can do to fix them.

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->
| Code&nbsp; | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CFR-1      | Unknown Error Occurred. Try restarting the game.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CFR-2      | The multiplayer connection was canceled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFR-3      | Server is not reachable. There may be an issue with your internet connection or with Beat Saber's relay servers. Double check you are not offline and your firewall allows Beat Saber to connect to the internet. <details><summary>**Background Information**</summary>Beat Saber Multiplayer is peer-to-peer where you connect directly with each player in the lobby. When this is not possible Beat Saber starts a "relay" server to send the data. This error means both of these methods failed.</details> &nbsp; This can also be caused by using emojis or special characters in your username. |
| CFR-4      | The server already exists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-5      | Server does not exist. The lobby you were connecting to might have closed as you were joining.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-6      | The server is full. Choose a different lobby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CFR-7      | You are on a version of the game that is not supported by the servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-8      | Lobby password is incorrect. Double check you are entering the right password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-9      | The matchmaking servers Beat Games run, which keeps track of open public and private lobbies, is offline. Try again later.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-10     | Your session key from Steam or Oculus is not valid. If you are playing on Quest and have modded your game, check out this [FAQ answer](/faq/README.md#does-multiplayer-have-crossplay) to work around this. Otherwise you are on a pirated copy of the game which is not supported.                                                                                                                                                                                                                                                                                                 |
| CFR-11     | Your internet connection is offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
<!-- markdownlint-enable MD013 -->

## 4. Diverse Problembehebung

### Logs verstehen
If you're on Steam you can go to
> Beat Saber > Eigenschaften > Allgemein > Füge `--verbose` in das Feld der Startoptionen ein

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* Manchmal kann es die Fehler für Avatare und Saber nicht anzeigen. Dann müsstest du alle deine Avatare/Saber entfernen und sie einzeln durchprüfen, um zu wissen, was das Spiel kaputt macht.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Steam Dateien auf Fehler überprüfen
To verify integrity of game files follow these steps:

1. Stelle sicher, das SteamVR geschlossen ist, da es dich sonst nicht die Spieldateien überprüfen lässt.
2. Geh in deine Bibliothek und finde Beat Saber
3. Rechtsklicke auf Beat Saber und gehe auf Eigenschaften
4. Gehe zu "Lokale Dateien"
5. Klicke auf "Dateien auf Fehler überprüfen".
6. Lass die Überprüfung durchlaufen und warte bis die Verifizierung und mögliche Downloads fertig sind. Danach sollte alles wieder laufen.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Saubere Installation

1. (Optional) Mache ein Backup von deinem Custom Contet indem du eine Kopie der folgenden Ordner machst:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Lösche den GESAMTEN Beat Saber Ordner.** Das ist anders als das Deinstallieren über Steam, da bei dieser Methode keine Dateien entfernt werden, die nicht mit der originalen Installation gekommen sind.

> Steam: ``\steamapps\common\Beat Saber\`
  Oculus: ``\hyperbolic-magnetism-beat-saber\`

3. Installiere das Spiel noch einmal über Steam oder den Oculus Store
4. **Bevor du Moddest, starte das Spiel einmal**
5. Starte Mod Assistant, installiere deine Mods und starte das Spiel.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Das Löschen deines Spielstandes in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Users > "BENUTZER" > AppData > LocalLow > Hyperbolic Magnetism > beat saber

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Deleting this folder in Appdata will also delete your local scores and statistics.
:::

#### Desperate Measures
::: warning
Disabling your anti-virus involves security risks, be sure to know what you're doing
(i.e don't download or open suspicious files while it's turned off)
and don't forget to re-enable it as soon as you finished these steps.
:::

* Stelle sicher, das dein Benutzer **Administrator Rechte hat**
* **Deaktiviere** dein Antivirus (Zwischenzeitlich)
* Stelle sicher, das du das Recht hast, Ordner zu erstellen und Dateien zu verändern. (Soweit ich gehört habe, hat ein Windows-Update vor kurzem Probleme für Leute verursacht)
* Stelle sicher, dass deine Treiber aktualisiert sind
* Stelle sicher, das das Problem nicht an deinem Headset, deinem Betriebssystem oder generell an deiner Hardware oder Software liegt
* Überprüfe deine Internetverbindung und stelle sicher, das nichts geblockt wird, was mit Beat Saber Modding, Steam etc. zu tun hat.

## 5. Immer noch Probleme
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:

* Bitte benutze die richtigen Kanäle, `#pc-help` für Mod Support am PC und `#quest-help` für quest Mod Support. Benutze `#pc-3d-modeling` und `#quest-3d-modeling` für Fragen über **das erstellen von eigenen Avataren, Plattformen, Noten oder Sabern** und `#mapping-discussions` für Fragen über **das erstellen von Maps**
* Sei höflich und respektvoll
* Beschreibe das Problem im Detail. "Es funktioniert nicht" ist ungefähr so als würdest du deinem Arzt sagen dir geht es nicht gut. Was funktioniert nicht und was hast du bist jetzt versucht? Gibt es Nachrichten, die auf dem Bildschirm erscheinen? Ist dein gesamter Bildschirm hellviolett geworden?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Credit to Saber-Chan for their hard work on this page.
