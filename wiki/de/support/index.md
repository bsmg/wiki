---
sidebar: auto
---

# Support

## Inhalt

0. [Updates](#_0-updates)
1. [Keine Mods?](#_1-keine-mods)
2. [Spielfehler nach dem Modden](#_2-spielfehler-nach-dem-modden)
3. [Häufig gestellte Fragen](#_3-faq-s)
4. [Diverse Fehlerbehebungsmethoden](#_4-diverse-problembehebung)
5. [Noch immer Fehler](#_5-immer-noch-probleme)

## 0. Updates

Nach einem Update ist der `#server-announcements` Kanal im BSMG Discord die Quelle der aktuellsten Informationen über den Status von Mods. Die folgenden Anweisungen sind die häufigsten Verfahren.

### Das Update hat meine Mods zerstört

**Starte das Spiel einmal** auf dem neuen Update. Dann installiere die Mods noch einmal mit einem Installer, welcher im [Anfänger Leitfaden](/de/beginners-guide) verlinkt ist, wie z.B. Mod Assistant.

## 1. Keine Mods?

### Diverse Fragen

#### 1.1 Es erscheinen keine Mods bei einer neuen Installation des Spiels

Als erstes stelle sicher das die folgenden Dinge korrekt sind:

- **Du hast das Spiel bereits einmal gestartet, bevor du Mods installiert hast**. BSIPA entfernt alle Mods beim ersten starten eines neuen Updates um zu verhindern, dass alte, nicht funktionierende Mods auf der neuen Version laden. Installiere die Mods einfach nochmal falls das der Fall sein sollte.
- Steam/Oculus starten Beat Saber aus der **gleichen Installation** in der die Mods sind. _z.B Mods sind auf der D: Festplatte aber Steam startet das Spiel von der C: Festplatte._ Setzte den korrekten Installationsort im Installer deiner Wahl.
- Falls du deine Mods manuell installiert hast, stelle sicher, das du alle Dateien vom Download in die korrekten Ordner gepackt hast.

#### 1.2 Ich hatte Mods von einer älteren Version installiert, aber nach einem Update lädt nichts mehr

Falls die Details in Sektion 1.1 korrekt sind, versuche die folgenden Lösungen, in absteigender Reihenfolge.

##### Lösung 1

- Update BSIPA auf die neueste Version (im Mod Assistant oder manuell)
- Geh in deinen Beat Saber Ordner
- Führe `IPA.exe` aus

##### Lösung 2 (Nur Steam)

- [Verifiziere deine Spieldateien](#steam-dateien-auf-fehler-uberprufen)
- Update BSIPA zu der neuesten Version
- Geh in deinen Beat Saber Ordner
- Starte `IPA.exe`

##### Lösung 3

- Geh in deinen Beat Saber Ordner
- Mach ein Backup des `UserData` Ordners (optional)
- Lösche UserData

::: warning WARNUNG
Das wird alle Mod-Einstellungen zurücksetzen!
:::

##### Lösung 4

- [Führe eine Neuinstallation durch](#saubere-installation)

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
4. Starte das Spiel. Falls das Problem weiterhin besteht versuche das folgende: `Weitere Bemerkung: Das Problem kann weiterhin bestehen bleiben aufgrund von fehlenden Berechtigungen oder Ausnahmen, jedes Programm, welches Bsipa blocken kann, oder welches als verdächtig markiert ist, kann das Problem hervorrufen.` Steam: [Überprüfe die Spieldateien auf Fehler](#steam-dateien-auf-fehler-uberprufen) Oculus: [Führe eine Neuinstallation durch](#saubere-installation)

Das sollte das Problem lösen.

#### 2.2 Beim Start eingefroren

Falls das Spiel im Health and Safety Bereich am Anfang des Spiels einfriert und du keine Kontrolle des Spiels hast, [Überprüfe die Spieldateien auf Fehler](#steam-dateien-auf-fehler-uberprufen) falls du das Spiel auf Steam haben solltest, oder Installiere das Spiel auf Oculus Home noch einmal. Siehe [Neuinstallation](#saubere-installation)

Das scheint beim updaten von Beat Saber zu passieren, während man bereits Mods installiert hatte. Aber nicht zu Nutzern mit einer sauberen Installation des Spiels.

### FPS Probleme

#### 2.3 Das Spiel stottert unerträglich nach dem installieren von Mods

Falls das Spiel schlecht läuft, dass man kaum den `Continue` Knopf im Health & Safety Menü klicken kann, dann: Steam: Überprüfe die Spieldateien Oculus: Führe eine Neuinstallation durch Mache das gleiche, falls das Spiel überhaupt nicht startet und keine Fehlermeldung erscheint.

Wenn das Problem nicht gelöst wurde, überprüfe den Abschnitt [2.4 Framerate verbessern](#_2-4-framerate-verbessern)

#### 2.4 Framerate verbessern

Falls [2.3](#_2-3-das-spiel-stottert-unertraglich-nach-dem-installieren-von-mods) deine FPS nicht verbessert hat, dann kann dein PC möglicherweise einfach nicht mit dem Stress, den Mods verursachen zurecht kommen. Hier sind ein paar Dinge, die du tun kannst um deine FPS zu verbessern, in keiner wirklichen Reihenfolge:

- Überprüfe ob NVIDIA GEFORCE EXPERIENCE die Rendering-Skalierung über den Standardwert von 1 gesetzt hat. Möglicherweise hat es dies auf eine höhere Zahl wie 1,4 oder 1,8 gesetzt, was die GPU-Last erheblich erhöht.
- Verwende einen weniger komplexen Avatar.
- Die Custom Saber **Plasma Katanas** hat unglaublich viele Effekte und ist bekannt dafür Lags zu verursachen, wenn du Noten verfehlst.
- CameraPlus kann sehr anfordernd sein. Vor allem wenn du mehrere Kameras aktiviert hast und das FOV erhöhst.
- Stelle die Renderskallierung, Anti-Aliasing, Mirror, Fog etc. in den Grundeinstellungen aus.
- Für Oculus Rift (CV1) Spieler: Versuche 2 anstatt 3 oder mehr Sensoren zu nutzen.
- Reduziere deine Gesamtanzahl an Mods und Songs.
- Führe eine [saubere Neuinstallation](#saubere-installation) der Spieldateien durch.
- Eine niedrige Framerate kann auch durch Fehler in deinem Anwendungsdatenordner verursacht werden. Um das zu beheben, überlege dir, [deinen BeatSaber Ordner im AppData Verzeichnis zu löschen](#das-loschen-deines-spielstandes-in-appdata).
- Deaktiviere manche CountersPlus-Features, wie zum Beispiel "Score Counter" und "Swing Speed", da sie ziemlich anfordernd werden können.
- Die HTTPStatus-Mod kann Lagspikes verursachen. Teste dies ohne die Mod, um zu sehen, ob sich deine Lagspikes reduzieren oder verschwinden.

VR ist sehr CPU intensiv, erst recht, wenn man Mods hinzufügt. Wenn du Schwierigkeiten hast, das Spiel mit den Mods auszuführen die du möchtest, überlege deine Hardware zu ersetzen. Anmerkung: Beat Saber ist nicht sehr GPU intensiv, da das Spiel grafisch sehr simpel ist.

## 3. FAQ's

### Sonstiges

#### 3.1 Leeres Menü, keine Schaltflächen

Wenn dein Menü leer ist, ist mit hoher Wahrscheinlichkeit deine Speicherdatei defekt. Um dies zu beheben, [lösche deine kompletten Beat Saber Dateien](#das-loschen-deines-spielstandes-in-appdata)

::: warning WARNUNG
Dies löscht deine lokalen Scores im Leaderboard und Statistiken.
:::

#### 3.2 Wie verwende ich `x` Mod?

- Wenn Du Mod Assistant nutzt, klick einfach auf "Mod Info". [BeatMods](http://beatmods.com) hat ebenfalls eine solche Schaltfläche.

#### 3.3 Vibrationsfehler

Gameplay Modifiers Plus hat eine Option für das Ein/Ausschalten der Controllervibrationen. Wenn du es deaktiviert hast, dann hat es den Mod entfernt. Du musst die Speicherdatei in die es schreibt, manuell ändern. Öffne`%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` und setze `controllersRumbleEnabled` zu `true`.

Wenn dies nicht die Ursache für deine Vibrationsprobleme ist und Folgendes für deine Haptik gilt:

- Haptiken sind minimal
- beim treffen mehrerer Blöcke ist keine Vibration
- beim überschneiden von beiden Sabern gibt es eine kleine verzögerung
- du benutzt Oculus Touch Controllers

Dann gibt es eine gute Chance, dass Beat Saber den USB-Controller deines Mainboards überlädt. Oculus verschlingt deine USB-Controller Bandbreite und die meisten Mainboards verfügen über einen sehr günstigen Controller. Beat Saber beansprucht den Controller mehr als jedes andere Spiel. Das ist der Grund, wieso andere Spiele und Menüs OK laufen. Es gibt keine einfache Lösung dafür, also versuche folgendes:

- Benutze verschiedene Ports für die Sensoren und Headset Kabel
- Unnötige USB-Geräte trennen
- Kaufe einen PCIe USB Hub
- Verwende `-vrmode oculus` wenn du SteamVR verwendest um Steam zu umgehen und stattdessen das Oculus SDK zu verwenden

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

Klicke auf den glänzenden (?) Knopf oben rechts im Menü. Dieser sollte dir sagen welche Mods benötigt sind um den Song zu spielen, welche fehlen und installiert werden sollten. Wenn es immer noch nicht funktioniert, versuche die benötigte Mod neu zu installieren. Sonst probiere eine [Neuinstallation](#saubere-installation).

#### 3.8 Map Details werden unendlich geladen

Falls das nur bei ein paar bestimmten Maps auftritt, kann es sein, das manche Mods fehlen oder das die Songdatei kaputt ist. Falls es bei all deinen Maps passiert, lösche deinen `Plugins` Ordner und installiere deine Mods noch einmal.

### CameraPlus

#### 3.9 CameraPlus funktioniert nicht/nicht nach der Health & Safety Warnung

Stelle sicher, dass die Einstellung "Smooth Camera" in den Spieleinstellungen ausgeschalten ist. Wenn das nicht funktioniert, versuche die Mod und zugehörige Abhängigkeiten neu zu installieren.

#### 3.10 Meine Desktop-Ansicht belegt nur einen kleinen Teil des Bildschirms

Dein CameraPlus Display füllt nicht die gesamte Leinwand. Entweder ziehst du die Ecke so, dass es auf die Leinwand passt. Oder du klickst auf die "Fit to Canvas" Option im Rechtsklickmenü.

### BeatSaver Downloader

#### 3.11 BeatSaber Downloader More Songs Button

**Die More Songs Taste ist im Hauptmenü auf der linken Seite unter dem Wort "Mods".** Falls der Knopf ausgegraut ist, stelle sicher, das alle deine Mods zuerst einmal geladen sind. Das sieht man am Regenbogenfarbenen Ladebalken im Hauptmenü. Falls das Mod Menü nicht da ist, stelle sicher, das deine Plugins und Abhängigkeiten korrekt installiert sind und funktionieren. Verweise dich auf die [Keine Mods?](#_1-keine-mods) Sektion.

#### 3.12 Im Menü "More Songs" wird nichts angezeigt

Die wahrscheinlichsten Ursachen für das nicht funktionieren vom BeatSaver Downloader sind:

1. Stelle sicher, das alle deine Songs bereits geladen sind, ansonsten ist die More Songs Fläche ausgegraut.
2. Dein Antivirus oder die Firewall blockiert deinen Zugriff auf BeatSaver.
3. Du hast das Datenlimit von BeatSaver erreicht und musst warten, bevor du es erneut versuchen kannst.

### Mehrspieler Fehlercodes

Hier ist eine Liste der bekannten Fehlercodes, was sie bedeuten und was du tun kannst, um diese zu beheben.

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->

| Code&nbsp; | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CFR-1      | Unbekannter Fehler ist aufgetreten. Versuche das Spiel neu zu starten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| CFR-2      | Die Mehrspieler Verbindung wurde unterbrochen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CFR-3      | Server ist nicht erreichbar. Möglicherweise gibt es ein Problem mit deiner Internetverbindung oder mit den Relay Servern von Beat Saber. Überprüfen, ob du nicht offline bist und deine Firewall ermöglicht Beat Saber die Internetverbindung blockiert. <details><summary>**Hintergrundinformationen**</summary>Beat Saber Multiplayer ist ein Peer-to-Peer-Spiel, bei dem du dich direkt mit jedem Spieler in der Lobby verbindest. Wenn dies nicht möglich ist, startet Beat Saber einen "Relay"-Server, um die Daten zu senden. Dieser Fehler bedeutet, dass beide Methoden fehlgeschlagen sind.</details> |
| CFR-4      | Der Server ist bereits vorhanden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-5      | Der Server existiert nicht. Die Lobby mit der du dich verbindest, könnte geschlossen sein, als du beigetreten bist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFR-6      | Der Server ist voll. Wähle eine andere Lobby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CFR-7      | Du bist auf einer Version des Spiels, die von den Servern nicht unterstützt wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-8      | Dein Passwort ist falsch. Überprüfe, ob du das richtige Passwort eingegeben hast.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-9      | Die von Beat Games betriebenen Matchmaking-Server, die den Überblick über offene öffentliche und private Lobbys behalten, sind offline. Versuche es später noch einmal.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| CFR-10     | Dein Sitzungsschlüssel von Steam oder Oculus ist nicht gültig. Wenn du auf Quest spielst und dein Spiel modifiziert hast, dies dir diese [FAQ-Antwort](/de/faq/#hat-der-offizielle-multiplayer-eine-crossplay-funktion), um dieses Problem zu umgehen. Ansonsten bist du auf einer Raubkopie des Spiels, die nicht unterstützt wird.                                                                                                                                                                                                                                                                           |
| CFR-11     | Die Internetverbindung scheint offline zu sein.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

<!-- markdownlint-enable MD013 -->

## 4. Diverse Problembehebung

### Logs verstehen

Falls du auf Steam bist kannst du zu

> Beat Saber > Eigenschaften > Startoptionen einstellen > Füge `--verbose` in das erscheinende Textfeld ein

Falls du auf Oculus bist, musst du auf Beat Saber.exe Rechtsklicken und eine Verknüpfung erstellen. Bearbeite das Ziel, um "--verbose" zum Ende hinzuzufügen. , z.B. `C:\Programme\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

Nachdem du "--verbose" zu deinem Spiel hinzugefügt hast, sollte es alle Fehler zu den Themen Avatare, Saber und Songs anzeigen

- Manchmal kann es die Fehler für Avatare und Saber nicht anzeigen. Dann müsstest du alle deine Avatare/Saber entfernen und sie einzeln durchprüfen, um zu wissen, was das Spiel kaputt macht.

Diese Nachrichten werden auch nach `Beat Saber/Logs` geschrieben.

Eine Liste mit gewöhnlichen Ausnahmern kann [hier](./exceptions.md) gefunden werden.

### Steam Dateien auf Fehler überprüfen

Um die Spieldateien auf Fehler zu überprüfen musst du diese Schritte befolgen:

1. Stelle sicher, das SteamVR geschlossen ist, da es dich sonst nicht die Spieldateien überprüfen lässt.
2. Geh in deine Bibliothek und finde Beat Saber
3. Rechtsklicke auf Beat Saber und gehe auf Eigenschaften
4. Gehe zu "Lokale Dateien"
5. Klicke auf "Dateien auf Fehler überprüfen".
6. Lass die Überprüfung durchlaufen und warte bis die Verifizierung und mögliche Downloads fertig sind. Danach sollte alles wieder laufen.

Hier ist eine [Video Anleitung](https://www.youtube.com/watch?v=EBFfT4-ZiIc), obwohl diese noch auf einer alten Steam Version ist. Die Schritte bleiben jedoch gleich.

### Saubere Installation

1. (Optional) Mache ein Backup von deinem Custom Contet indem du eine Kopie der folgenden Ordner machst:

- `Beat Saber\Beat Saber_Data\CustomLevels`
- `Beat Saber\CustomSabers`
- `Beat Saber\CustomPlatforms`
- `Beat Saber\CustomNotes`
- `Beat Saber\CustomAvatars`

2. **Lösche den GESAMTEN Beat Saber Ordner.** Das ist anders als das Deinstallieren über Steam, da bei dieser Methode keine Dateien entfernt werden, die nicht mit der originalen Installation gekommen sind.

> Steam: `` \steamapps\common\Beat Saber\`
  Oculus:  ``\hyperbolic-magnetism-beat-saber\`

3. Installiere das Spiel noch einmal über Steam oder den Oculus Store
4. **Bevor du Moddest, starte das Spiel einmal**
5. Starte Mod Assistant, installiere deine Mods und starte das Spiel.

(Optional) Falls du noch einen Schritt weiter gehen willst, verweise auf: [Das Löschen des Beat Saber Ordners im Appdata Ordner](#das-loschen-deines-spielstandes-in-appdata)

### Das Löschen deines Spielstandes in AppData

Dies wird deine Ergebnisse und Lokalen Daten löschen. Jedoch nicht deine custom Leaderboard/Scoresaber Statistiken. Du kannst den Ordner hier finden

> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Füge die obere Zeile in die Adresszeile in deinem Dateiexplorer und lösche die Ergebnisse.

Du kannst diesen Ordner auch finden, indem zu versteckte Dateien anzeigst hierhin gehst

> Users > "USER" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning WARNUNG
Das Löschen des Appdata Ordners wird deine lokalen Ergebnisse und Statistiken löschen.
:::

#### Verzweifelte Maßnahmen

::: warning WARNUNG
Das Deaktivieren deines Antivirus umfasst Sicherheitsrisiken. Sei dir sicher das du weißt was du machst. (Bedeutet: Lade und öffne keine verdächtigen Dateien) und vergesse nicht dein Antivirus wieder zu aktivieren sobald du diese Schritte vollendet hast.
:::

- Stelle sicher, das dein Benutzer **Administrator Rechte hat**
- **Deaktiviere** dein Antivirus (Zwischenzeitlich)
- Stelle sicher, das du das Recht hast, Ordner zu erstellen und Dateien zu verändern. (Soweit ich gehört habe, hat ein Windows-Update vor kurzem Probleme für Leute verursacht)
- Stelle sicher, dass deine Treiber aktualisiert sind
- Stelle sicher, das das Problem nicht an deinem Headset, deinem Betriebssystem oder generell an deiner Hardware oder Software liegt
- Überprüfe deine Internetverbindung und stelle sicher, das nichts geblockt wird, was mit Beat Saber Modding, Steam etc. zu tun hat.

## 5. Immer noch Probleme

Falls die Seite nicht dein Problem beantwortet, dann zögere nicht und stelle eine Frage im Discord! Um die Chance zu erhöhen das deine Frage beantwortet wird, ziehe folgendes in Betracht:

- Bitte benutze die richtigen Kanäle, `#pc-help` für Mod Support am PC und `#quest-help` für quest Mod Support. Benutze `#pc-3d-modeling` und `#quest-3d-modeling` für Fragen über **das erstellen von eigenen Avataren, Plattformen, Noten oder Sabern** und `#mapping-discussions` für Fragen über **das erstellen von Maps**
- Sei höflich und respektvoll
- Beschreibe das Problem im Detail. "Es funktioniert nicht" ist ungefähr so als würdest du deinem Arzt sagen dir geht es nicht gut. Was funktioniert nicht und was hast du bist jetzt versucht? Gibt es Nachrichten, die auf dem Bildschirm erscheinen? Ist dein gesamter Bildschirm hellviolett geworden?

::: tip HINWEIS
Die, die mit der `Support` Rolle sind Freiwillige, die in ihrer Freizeit mithelfen möchten. Die Support-Rolle ist eine Anerkennung für das Wissen und die Mühe, die sie investiert haben, aber es bedeutet nicht unbedingt, dass sie da sind, um zu helfen, nur weil sie online sind.
:::

Vielen Dank an Saber-Chan für die Harte Arbeit an dieser Seite.
