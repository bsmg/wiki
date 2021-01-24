# Häufig gestellte Fragen
## Ich habe das Spiel gerade bekommen, wie kann ich loslegen?
Schau dir unseren [Anfänger Rategeber](/beginners-guide.md) an!

## Wie kann ich mehr Songs installieren?
> [BeatSaver](https://beatsaver.com) ist die Haupt-Datenbank für Custom Songs, die von der Community erstellt worden ist. Viele andere Tools und Webseiten verbessern die Erfahrung beim Herunterladen von Custom Songs. BeatSaver ist aber die Seite, auf der sie zur Verfügung gestellt werden.

Solltest du Maps manuell von BeatSaver downloaden, entpacke diese in einen eigenen Order und platziere diesen in `Beat Saber/Beat Saber_Data/CustomLevels`. Dies ist das Verzeichnis, wo das Spiel nativ alle Custom Maps liest.

### BeastSaber
[Beast Saber](https://www.bsaber.com) ist eine Rezensions-Seite, die sich zum Ziel gesetzt hat, alle Songs auf BeatSaver zu organisieren und zu bewerten. Du kannst Playlists downloaden, Mappern folgen und Lieder mit erweiterten Sortiermethoden finden.

### Song Management Tools
Die folgenden Programme können auf dem Desktop verwendet werden, um dir dabei zu helfen, Custom Songs herunterzuladen, sowie einige andere Funktionen.
* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) ist ein Map Downloading-Tool von Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) ist eine App zum Verwalten von Playlists und BeatMaps, von Alaanor.

## Wie installiere ich Playlists?
**Für PC User:**  
Hierzu musst du den Mod `PlaylistLoaderLite` installieren. Dazu kannst du entweder
* Das `Playlist installieren` Tool in den Optionen des Mod Assistant verwenden.
* Verschiebe die Playlist-Datei in `Beat Saber/Playlists` und wähle diese in BeatList aus. Dann klicke hier auf "Download all".

Du solltest die Playlist jetzt neben den Custom Levels im Spiel sehen. Falls Songs in der Playlist fehlen, musst du diese entweder manuell über BeatList, BeatSaver oder Bsaber herunterladen.

**Für Quest User:**  
Du kannst den [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) verwenden, um die Playlists deiner Quest zu verwalten. Beachte, dass ein Custom Song aufgrund Einschränkungen in BMBF nur einmal im Spiel vorhanden sein kann.

:::warning WARNUNG Für Quest User Das Neuladen des Ordners für Custom Songs setzt alle Einstellungen für Playlists zurück. :::

## Wie erstelle ich eigene Custom Level?
Siehe [Mapping](/mapping/)!

## Wie lade ich Plugins, die nicht in Mod Assistant zu finden sind?
Siehe [Diesen Abschnitt](/pc-modding.md#manual-installation) in unserer Anleitung für Anfänger.

## Hat der offizielle Multiplayer eine Crossplay Funktion?
Ofiziell beschränkt sich der offizielle Multiplayer auf das Spielen mit anderem Spielen in der Shop-Version (Oculus/Steam), wo du das Spiel gekauft hast. Zusätzlich deaktiviert das Modden des Spiels des Spiels auf der Quest den offiziellen Multiplayer.

Der BeatTogether Mod ist die aktuellste Lösung für Crossplay-Gaming zwischen den verschiedenen Plattformen. Trete dem [Discord-Server](https://discord.com/invite/gezGrFG4tz) bei und sehe dir den `#install-instructions`-Channel für weitere Informationen an.

## Mein Spiel wurde aktualisiert und jetzt funktionieren meine Mods nicht mehr!
Jedes mal, wenn das Spiel aktualisiert wird, ist es möglich *(Und sehr wahrscheinlich)* dass deine aktuellen Mods nicht mehr funktionieren und aktualisieren werden müssen. Die Entwickler haben dies gemerkt, deswegen wird beim ersten Spielstart nach einem Update alles im `Plugins`-Ordner in einen neuen Ordner namens `Old 1.xx.x Plugins` bewegt. **Lasse diese Plugins in diesem Ordner!**

Um Mods zurückzubekommen, **Starte den Installer erneut.**  
Die BeatMods Datenbank enthält nur verifizierte Mods, die auch mit der aktuellen Version funktionieren!

Solltest du durch irgendetwas verwirrt sein, besuche unsere [Anleitung für Anfänger](/beginners-guide.md).

## Wie funktioniert das Punktesystem in Beat Saber? Wie funktioniert die gloable Rangliste?
Wir haben einen Abschnitt auf unserer[Griffe und Tricks](/grips-and-tricks.md) Seite, speziell über das Punkte- und Rangsystem. Schau gern dort vorbei!

## Mein Menü ist leer und Ich kann nirgendwo klicken!
Wenn dein Menü leer ist, ist wahrscheinlich deine Speicherdatei defekt.

Um das zu reparieren gehe zu: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Lösche den Order oder ändere den Namen in etwas anderes. Wenn du das Spiel danach wieder öffnest wird eine neue Speicherdatei erstellt und das Menü sollte wieder korrekt geladen werden.
