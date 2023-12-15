# Häufig gestellte Fragen

## Ich habe das Spiel gerade bekommen, wie kann ich loslegen?
Schau dir unseren [Anfänger Rategeber](/de/beginners-guide.md) an!

## Wie kann ich mehr Songs installieren?
> [BeatSaver](https://beatsaver.com) ist die Haupt-Datenbank für Custom Songs, die von der Community erstellt worden ist. Viele andere Tools und Webseiten verbessern die Erfahrung beim Herunterladen von Custom Songs. BeatSaver ist aber die Seite, auf der sie zur Verfügung gestellt werden.

Solltest du Maps manuell von BeatSaver downloaden, entpacke diese in einen eigenen Order und platziere diesen in `Beat Saber/Beat Saber_Data/CustomLevels`. Dies ist das Verzeichnis, wo das Spiel nativ alle Custom Maps liest.

### BeastSaber
[Beast Saber](https://www.bsaber.com) ist eine Rezensions-Seite, die sich zum Ziel gesetzt hat, alle Songs auf BeatSaver zu organisieren und zu bewerten. Du kannst Playlists downloaden, Mappern folgen und Lieder mit erweiterten Sortiermethoden finden.

### Song Verwaltungstools

The following can be used to help you manage custom songs or playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists, maintained by **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## Wie installiere ich Playlists?

### PC
Du musst den [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) Mod installieren.

Dazu kannst du entweder:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

Du solltest die Playlist jetzt neben den Custom Levels im Spiel sehen. Der Mod unterstützt auch die Verwaltung von Playlists im Spiel.

### Quest
Du kannst den [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) verwenden, um die Playlists deiner Quest zu verwalten. Beachte, dass ein Custom Song aufgrund Einschränkungen in BMBF nur einmal im Spiel vorhanden sein kann.

:::warning WARNUNG Für Quest User
Das Neuladen des Ordners für Custom Songs setzt alle Einstellungen für Playlists zurück.
:::

## Wie erstelle ich eigene Custom Level?
Siehe [Mapping](/de/mapping/)!

## Wie lade ich Mods, die nicht in Mod Assistant zu finden sind?
Siehe [Diesen Abschnitt](/de/pc-modding.md#manuelle-installation) in unserer Anleitung für Anfänger.

## Hat der offizielle Multiplayer eine Crossplay Funktion?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

Der BeatTogether Mod ist die aktuellste Lösung für Crossplay-Gaming zwischen den verschiedenen Plattformen. Trete dem [Discord Server](https://discord.com/invite/gezGrFG4tz) bei und sehe dir den `#install-instructions`-Channel für weitere Informationen an.

## Mein Spiel wurde aktualisiert und meine Mods funktionieren nicht mehr
Jedes mal, wenn das Spiel aktualisiert wird, ist es möglich *(Und sehr wahrscheinlich)* dass deine aktuellen Mods nicht mehr funktionieren und aktualisiert werden müssen. Um sicherzustellen, dass deine Installation nicht kaputt geht, wenn das Spiel mit einem neuen Update zum ersten Mal läuft, wird alles im Ordner `Plugins` automatisch in einen neuen Ordner namens `Old 1.xx.x Plugins` verschoben. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

Um Mods zurückzubekommen, **führe den Installer erneut aus.**  
Das BeatMods Repository enthält nur bestätigte Mods, die auch mit der aktuellen Version funktionieren!

Solltest du durch irgendetwas verwirrt sein, besuche unsere [Anleitung für Anfänger](/de/beginners-guide.md).

## Wie funktioniert das Punktesystem in Beat Saber? Wie funktioniert die gloable Rangliste?
Wir haben einen Abschnitt auf unserer [Griffe und Tricks](/de/grips-and-tricks.md) Seite, speziell über das Punkte- und Rangsystem. Schau gern dort vorbei!

## Mein Menü ist leer und Ich kann nirgendwo klicken
Wenn dein Menü leer ist, ist wahrscheinlich deine Speicherdatei defekt.

Um das zu reparieren gehe zu: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Lösche den Ordner oder ändere den Namen in etwas anderes. Wenn du das Spiel danach wieder öffnest, wird eine neue Speicherdatei erstellt und das Menü sollte wieder korrekt geladen werden.
