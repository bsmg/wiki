---
sidebar: auto
---

# PC Modding

## Vorwort

::: danger BITTE BEACHTE
Wenn du Mods verwendest, verstehst du das:

* Du möglicherweise Probleme bekommst, die im normalen Spiel nicht existieren. 99,9% aller Fehler, Abstürzen und Verzögerungen passieren aufgrund von Mods.
* Mods werden durch Updates oft unbrauchbar und das ist normal - Bitte sei geduldig und respektvoll wenn dies passiert. Modder sind Freiwillige mit einem richtigen Leben.
* Beat Games versucht nicht mit Absicht Mods kaputt zu machen. Sie versuchen an der Code-Grundlage zu arbeiten welches manchmal Mods unbrauchbar macht. Dies geschieht aber nicht mit Absicht.

Bitte greife die Entwickler im Bezug mit Problemen bei Mods nicht an. Modder und Entwickler sind zwei verschiedene Gruppen. Sei einfach kein Trottel, ok? 
:::

Beat Saber unterstützt von Grund auf Custom Songs. Wenn du also nur danach suchst, brauchst du nicht mehr Mods! Es ist aber eine kluge Idee, `SongCore` zu installieren. Diese Mod erweitert die Basisspiel-Funktion, um die Ladezeiten zu verbessern und Funktionen für andere Mods wie den In-Game Downloader, Ranglisten, Playlisten, usw. bereitzustellen.

::: warning WARNUNG
Dieser Guide ist für PC Modding in Windows.  
Wenn du eine Quest hast, schau bitte auf der [Quest Modding Seite](/de/quest-modding.md).  
Wenn du auf Linux bist schaue bitte auf die [Linux Seite](/de/modding/linux.md) oder [Qbeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) 
:::

Wenn du an irgendeinem Punkt Probleme haben solltest, gehe einfach zur [Support Seite](./support) und schaue nach ob du herausfinden kannst was falsch lief, bevor du im Discord Server nachfragst. Es besteht die Möglichkeit, das die Antwort auf deine Frage dort bereits existiert!

::: warning Ich habe mir ein Tutorial von Elite Eric angeschaut aber komme nicht weiter. Wie kommts?
BSMG rät **stark** davon ab, jegliche Beat Saber Tutorials von Elite Eric zu verweden. Nach Überprüfung seiner Videos haben wir festgestellt, dass sie viele unvollständige, fehlerhafte oder geradezu falsche Informationen enthalten. Versuche, auf ihn zuzugehen, um diese Fehler zu korrigieren wurden leider mit schweigen und neuen (immer noch falschen) Tutorials erfüllt.

Stattdessen solltest du den schriftlichen Anleitungen hier im Wiki folgen oder Hilfe im [BSMG Discord](https://discord.gg/beatsabermods) suchen.
:::

## Installationsprogramme

### Mod Assistant
> **DIES IST AKTUELL DER EMPFOHLENE MOD INSTALLER.**

__**Starte das Spiel mindestens einmal**** bevor du versuchst Mods zu installieren! Dies trifft auch zu wenn du dein Spiel neu installierst.

Ein einfacher Beat Saber Mod Installer, ähnlich dem Mod Manager aber mit zusätzlichen Funktionen wie Deinstallation von Mods und Versionskontrolle! Hol es auf [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![Mod Assistant](~@images/beginners-guide/modassistant.png)

## Wie bekomme ich mehr Songs
::: tip TIPP
Die meisten Maps in den Sortierfiltern "Top All", "Rating", "Downloads" oder "Plays" wurden erstellt, bevor gute Mapping-Praktiken etabliert wurden. Versuche Songs herunterzuladen, die zwischen Ende 2019 und jetzt veröffentlicht wurden, um die beste benutzerdefinierten Levels zu erleben.
:::

### InGame Downloader
Das `BeatSaver Downloader` Plugin erlaubt dir Songs im Spiel herunterzuladen, indem du den `MORE SONGS` Knopf im `MODS` Fenster im Menü anklickst. Dies zieht die Maps direkt von [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) ist die Haupt-Datenbank für Custom Songs, die von der Community erstellt worden ist. Viele andere Tools und Webseiten verbessern die Erfahrung beim Herunterladen von Custom Songs. BeatSaver ist aber die Seite, auf der sie zur Verfügung gestellt werden. Um gedownloadete Songs von der Seite zu installieren, entpacke und platziere diese in `Beat Saber/Beat Saber_Data/CustomLevels`. Du kannst auch das eingebaute Downloader-Plugin, BeatList oder das OneClick™ Install-Feature von Mod Assistant verwenden.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) ist eine Seite die versucht, euch die Suche nach guten Maps zum Spielen zu erleichtern. Dies geschieht durch Kategorisierung der Tausenden von Songs auf BeatSaver und lässt diese nach dem Genre eines Songs und vielen anderen Attribut-Tags sortieren. Es besitzt auch ein soziales Feature, in der Spieler Songs bewerten und kommentieren können. Eines der meistgenutzten Funktionen ist die "Curator Recommended"-Funktion, bei der ein Team die meisten täglich veröffentlichten Songs durchspielen und die herausstechendsten empfiehlt, so dass sie diese [automatisch im Spiel herunterladen können](https://bsaber.com/beatsync/).

### Song Management Apps

Zurzeit gibt es keine funktionierenden Apps zur Songverwaltung.

### Playlists
Du musst den [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) Mod installieren.

Dazu kannst du entweder:

* Das `Install Playlist` Tool in den Optionen des Mod Assistant verwenden.
* Platziere die Playlist-Datei in `Beat Saber/Playlists` und wähle diese im Spiel aus. Klicke dann auf Download.

Du solltest die Playlist jetzt neben den Custom Levels im Spiel sehen. Der Mod unterstützt auch die Verwaltung von Playlists im Spiel.

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

## Manuelle Installation
Ein Mod-Installer ist die empfohlene Methode, um Mods zu installieren. Siehe den Abschnitt [oben](#installationsprogramme). Solltest du das Spiel gepatched haben und Plugins installiert werden müssen, die nicht im Mod Installer sind, springe zu Schritt 4.

**Starte das Spiel mindestens einmal,** bevor du versuchst Mods zu installieren! Dies trifft auch zu, wenn du dein Spiel neu installierst.

### BSIPA installieren

1. Lade [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases) herunter.
2. Begib dich zu deinem [Installationsordner.](#installationspfad) und entpacke den Inhalt des Archivs in diesen Ordner. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. Doppelklicke auf IPA.exe um das Spiel zu patchen. Alle Mods im Ordner `Plugins` werden ab sofort geladen, wenn das Spiel gestartet wird. Sollte es Fehler geben, hast du etwas in Schritt 2 nicht richtig gemacht. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Mods installieren

4. Lade die Mod(s) herunter die du installieren möchtest. Sei es von GitHub, dem [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` Kanal, [BeatMods](https://beatmods.com/#/mods) oder anderen Quellen. **Stell sicher, dass du alle Dependncies herunterlädst, die vom Mod benötigt werden.** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. Einige Mods haben Installationsanweisungen, andere nicht. In der Regel kann man einfach die ZIP-Datei im Beat Saber Installationsordner ziehen und entpacken. Die Dateien werden dann in die entsprechenden Ordner entpackt.

## Wie man Mods deinstalliert
Entferne entweder die dll vom `Plugins` Ordner oder klicke auf den `Deinstallieren` Knopf im Mod Assistant.

## Hilfe von der Community

* [Griffe und Tricks](./grips-and-tricks.md)
* [Erstelle Beatmaps](/de/mapping/)
* [Custom Sabers](/de/models/custom-sabers.md)
* [Custom Avatars](/de/models/custom-avatars.md)
* [Custom Platforms](/de/models/custom-platforms.md)
* [Multiplayer einrichten](https://bs.assistant.moe/Multiplayer/)
* [Mods erstellen](/de/modding/)

## Hast Du Fragen?
Besuche die Support-Kanäle im [BSMG Discord](https://discord.gg/beatsabermods)!
