---
sidebar: auto
---

# PC Modding
# Vorwort

::: danger BITTE BEACHTE Wenn du Mods verwendest verstehst du das:
- Du möglicherweise Probleme bekommst die im normalen Spiel nicht existieren. 99,9% aller Fehler, Abstürzen und Verzögerungen passieren aufgrund von mods.
- Mods werden durch Updates oft unbrauchbar und das ist normal - bitte sei geduldig und respektvoll wenn dies passiert, Modder sind Freiwillige mit einem richtigen Leben.
- Beat Games versuchen nicht mit Absicht mods kaputt zu machen. Sie versuchen an der Codegrundlage zu arbeiten und das macht manchmal mods unbrauchbar, aber sie versuchen sie nicht mit Absicht unbrauchbar zu machen.

Bitte greife nicht die Entwickler an im Bezug auf Problemen bei Mods an, genauso umgekehrt - Modder Und Entwickler sind zwei verschiedene Gruppen. Sei einfach kein Trottel, ok? :::

Beat Saber unterstützt von Grund auf Custom Songs. Wenn du also nur danach suchst, brauchst du nicht mehr Mods! Es ist aber eine kluge Idee, `SongCore` zu installieren. Diese Mod erweitert die Basisspiel-Funktion, um die Ladezeiten zu verbessern und Funktionen für andere Mods wie den In-Game Downloader, Ranglisten, Playlisten, usw. bereitzustellen.

::: warning Dieser Guide ist für PC Modding in Windows.  
Wenn du eine Quest hast, schau bitte auf der [Quest Modding Seite](/quest-modding.md).  
Wenn du auf Linux bist schaue bitte auf die [Linux Seite](/modding/linux.md) oder [Qbeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

Wenn du an irgendeinem Punkt Probleme haben solltest, gehe einfach zur [Support Seite](./support) und schau nach, ob du herausfinden kannst was falsch lief, bevor du im Discord Server nachfragst. Es besteht die Möglichkeit, das die Antwort auf deine Frage dort bereits existiert!

:::warning Ich habe ein Video von Elite Eric gesehen, aber ich komme nicht weiter / es funktioniert nicht. Was da hilft? Wir in der BSMG empfehlen **nachdrücklich** keine Tutorials von Elite Eric zu verwenden. Nach der Überprüfung eines großen Teils seiner Videos enthalten sie eine große Menge unvollständiger, fehlerhafter oder geradezu falscher Informationen. Versuche, auf ihn zuzugehen, um diese Fehler zu korrigieren, wurden leider mit Schweigen und neuen (auch falschen) Tutorials erfüllt.

Stattdessen solltest du den schriftlichen Anleitungen hier im Wiki folgen oder Hilfe im [BSMG Discord](https://discord.gg/beatsabermods) suchen. :::

## Installationsprogramme
### Mod Assistant
> **DIES IST AKTUELL DER EMPFOHLENE MOD INSTALLER.**

__**Starte das Spiel mindestens einmal**** bevor du versuchst Mods zu installieren! Dies trifft auch zu wenn du dein Spiel neu installierst.

Ein einfacher Beat Saber Mod Installer ähnlich dem Mod Manager, aber mit zusätzlichen Funktionen wie Deinstallation von Mods und Versionskontrolle! Hol es auf [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## Wie bekomme ich mehr Songs
### Downloader im Spiel
Das `BeatSaver Downloader` Plugin erlaubt dir Songs im Spiel herunterzuladen indem du den `MORE SONGS` Knopf im `MODS` Fenster im Menü anklickst. Dies zieht die Maps direkt von [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) ist die Haupt-Datenbank für Custom Songs, die von der Community erstellt worden ist. Viele andere Tools und Webseiten verbessern die Erfahrung beim Herunterladen von Custom Songs. BeatSaver ist die Hauptseite, auf der diese zur Verfügung gestellt werden. Um gedownloadete Songs von der Seite zu installieren, entpacke und platziere diese in `Beat Saber/Beat Saber_Data/CustomLevels`.  Du kannst auch das eingebaute Downloader-Plugin, BeatList oder das OneClick™ Install-Feature von Mod Assistant verwenden.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) ist eine Seite, die versucht, euch die Suche nach guten Maps zum Spielen zu erleichtern. Dies geschieht durch Kategorisierung der Tausenden von Songs auf BeatSaver und lässt diese nach dem Genre eines Songs und vielen anderen Attribut-Tags sortieren. Es besitzt auch ein soziales Feature, in der Spieler Songs bewerten und kommentieren können. Eines der meistgenutzten Funktionen ist die "Curator Recommended"-Funktion, bei der ein Team die meisten täglich veröffentlichten Songs durchspielen und die herausstechendsten empfiehlt, so dass sie diese [automatisch im Spiel herunterladen können](https://bsaber.com/beatsync/).

### Song Management Apps
* [BeatList](https://github.com/Alaanor/beatlist) ist eine App zur Verwaltung von Playlisten und Beatmaps, von Alaanor.

### Playlists
Legen Sie die Playlist-Datei in `Beat Saber/Playlists` ab und verwende dann [BeatList](https://github.com/Alaanor/beatlist) oder [Mod Assistant](https://github.com/Assistant/ModAssistant) um die Maps herunterzuladen. (Hinweis: Ältere Mods erlaubten das Herunterladen der Inhalte von Playlists im Spiel selbst. Dies ist aber derzeit nicht möglich.)

## Installationspfad
_Wo ist Beat Saber installiert?_

### Standard Installations-Ordner
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Andere Installationspfade
**Solltest du Beat Saber auf ein anderes Laufwerk verschoben haben, könnte es sich an der unten angegebenen Stelle befinden:** Ersetze den Laufwerksbuchstaben `F` mit dem Buchstaben, wo Beat Saber installiert ist.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Wie deinstalliert man Mods
Entferne entweder die dll vom `Plugins` Ordner oder klicke auf den `Deinstallieren` Button im Mod Assistant.

## Manuelle Installation
Ein Mod-Installer ist die empfohlene Methode, um Mods zu installieren. Siehe den Abschnitt [oben](#installers). Solltest du das Spiel gepatched hast und Plugins installiert werden müssen, die nicht im Mod Installer sind, springe zum Schritt 4.

**Starte das Spiel mindestens einmal** bevor du versuchst Mods zu installieren! Dies trifft auch zu wenn du dein Spiel neu installierst.
### BSIPA installieren
1. Lade [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases) herunter.
2. Begib dich zu deinem [Installationsordner.](#install-folder) und entpacke den Inhalt des Archivs in diesen Ordner. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Doppelklick auf IPA.exe um das Spiel zu patchen. Alle Mods im Ordner `Plugins` werden ab sofort geladen, wenn das Spiel gestartet wird. Sollte es Error Messages geben, hast du etwas im Schritt 2 nicht richtig gemacht. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Mods installieren
4. Lade die Mod(s) herunter, die du installieren möchtest, sei es von GitHub, dem #pc-mods Kanal oder von anderen Quellen. **Stell sicher, dass du alle Dependncies herunterlädst, die vom Mod benötigt werden.** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Einige Mods haben Installationsanweisungen, andere nicht. In der Regel kann man einfach die ZIP-Datei im Beat Saber-Installationsordner ziehen und entpacken. Die Dateien werden dann in die entsprechenden Ordner entpackt.


## Hilfe von der Community
* [Griffe und Tricks](./grips-and-tricks.md)
* [Erstelle Beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Multiplayer einrichten](https://bs.assistant.moe/Multiplayer/)
* [Mods erstellen](/modding/)

## Hast du eine Frage?
Besuche die Support-Kanäle im [BSMG Discord](https://discord.gg/beatsabermods)!
