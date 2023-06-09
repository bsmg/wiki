---
sidebar: auto
prev: false
next: ./advanced-audio.md
description: Wie du deine Audiodatei einrichtest und für das Mapping vorbereitest.
---

# Audiosetup-Grundlagen

_Wie du deine Audiodatei einrichtest und für das Mapping vorbereitest._

- [Glossar der Begriffe](./glossary.md)

Auf dieser Seite finden sowohl neue als auch erfahrene Mapper allgemeine Empfehlungen zum Einrichten einer neuen Songdatei, bevor sie mit dem Mappen beginnen. In der folgenden Schnellstartanleitung findest du Schritte, die **kritisch** sind, bevor du mit dem Mapping beginnst, und solche, die jederzeit durchgeführt werden können, wenn sie benötigt werden.

## Audio-Setup Schnellstart

::: warning WARNUNG

- Die Schritte 1-3 **MÜSSEN** abgeschlossen sein, bevor du mit dem Mapping beginnst, sonst ist deine Audio nicht mehr synchron und kann einen [_Hot Start_](./glossary.md#h) haben.
- Die Verwendung von Online-Websites zur Konvertierung von Audio in `.ogg` kann dazu führen, dass deine Audiodatei als ungültig behandelt wird und nicht vom Spiel geladen werden kann! Das Bearbeiten und Exportieren von [Audacity](https://www.audacityteam.org/) ist der einfachste Weg, um sicherzustellen, dass deine Audiodatei wie erwartet funktioniert.
  :::

1. Lade [Audacity](https://www.audacityteam.org/) herunter und installiere es
   - Installiere optional das [ffmpeg für Windows](https://manual.audacityteam.org/man/installing_ffmpeg_for_windows.html) Addon, um zusätzliche Dateitypen wie `.aac` oder `.m4a` aus iTunes zu öffnen.
2. Finde die BPM und den Offset deines Songs, um [deinen Song zu synchronisieren](#audio-qualitat)
3. [Exportiere deinen Song](#exportieren) als Datei im `.ogg`-Format

**Jederzeit vor dem Hochladen:**  
4. [Prüfe deine Song-Lautstärke](#songlautstarke-prufen) und stelle sie je nach Bedarf [Lauter](#mach-deinen-song-lauter) oder [Leiser](#mache-deinen-song-softer) ein.  
5. Überprüfe die Länge deines Song-Outros und [kürze es bei Bedarf](#trimmen-des-outros).

## Songauswahl für neue Mapper

Die folgenden Angaben sind Empfehlungen, **nicht** Anforderungen, und sollen dir den Einstieg ins Mapping erleichtern. Wenn du 17 Minuten von "In A Gadda Da Vida" mappen willst, dann nur zu, aber sei dir bewusst, dass du vor einer **viel** zu großen Herausforderungen stehen wirst.

- Wähle einen Song, der einen klaren Beat zum Zuordnen hat. Einige Genres funktionieren besser als andere.
- Wähle einen Song mit einem gleichmäßigen Tempo (z. B. Songs mit elektronischen Drums). Songs, die Tempo-/BPM-Änderungen im Laufe der Zeit aufweisen, können sehr kompliziert zu mappen sein.
- Wähle einen kürzeren Song (Weniger als 3 Minuten ist besser). Das mappen eines 10 Minuten Songs zu Beginn kann zu Frustration und/oder Burn-out führen.
- Wähle schließlich einen Song aus, den du dir gerne immer und immer und immer wieder anhörst. Vermeide es jedoch, deinen Lieblingssong als erste Map zu mappen. Hebe dir es für später auf, wenn du mehr Erfahrung hast.

## Audio-Qualität

Bevor du mit dem Mapping beginnst, stelle sicher, dass du eine qualitativ hochwertige Quelldatei für deinen Song hast. Viele Maps haben schreckliche Audiodateien, oft von YouTube Rips oder Dateien mit niedriger Bitrate. Beat Saber ist schließlich ein Spiel für Musik, also ist eine gute Audioqualität für ein gutes Spielerlebnis unerlässlich.

Befolge diese allgemeinen Richtlinien, wenn du an deinen Maps arbeitest:

- Verwende die hochwertigste Quelle, die du finden kannst, wie **FLAC- oder WAV(E)** Dateien (verlustfreies Format).
- An zweiter Stelle stehen **MP3- oder AAC** Dateien mit hoher Bitrate (+200kbps) (verlustbehaftete Formate).
- Verwende einen YouTube Rip **nur als letzten Ausweg**. Die Bitrate ist niedrig und die Lautstärke stimmt nur selten. In diesem Fall kann eine Audiobearbeitung erforderlich sein (siehe [Optionale Audio Bearbeitung](#optionale-audio-bearbeitung)).

> Seiten, auf denen du die Tracks/Album kaufen können, wie z. B. [Bandcamp](https://bandcamp.com/) eines Künstlers, haben in der Regel die hochwertigste verfügbare Quelle. Wenn der Künstler kein Bandcamp zur Verfügung gestellt hat, sind Google Play Music, Amazon Music und iTunes Alternativen für qualitativ hochwertige MP3-Dateien.

Indem du eine qualitativ hochwertige Audiodatei kaufst und verwendest, unterstützt du nicht nur den Künstler, sondern ersparst dir auch eine Menge Kopfschmerzen beim Mapping. Sehe dir den Qualitätsunterschied für denselben Song mit demselben Beat an.

| OGG Qualität |                   YouTube Rip                   |                  MP3                  |                  WAV                  |                  FLAC                   |
| :----------: | :---------------------------------------------: | :-----------------------------------: | :-----------------------------------: | :-------------------------------------: |
|      1       |  ![YouTube Rip 1](~@images/mapping/ytrip1.jpg)  |  ![MP3 1](~@images/mapping/mp31.jpg)  |  ![WAV 1](~@images/mapping/wav1.jpg)  |  ![FLAC 1](~@images/mapping/flac1.jpg)  |
|      5       |  ![YouTube Rip 5](~@images/mapping/ytrip5.jpg)  |  ![MP3 5](~@images/mapping/mp35.jpg)  |  ![WAV 5](~@images/mapping/wav5.jpg)  |  ![FLAC 5](~@images/mapping/flac5.jpg)  |
|      10      | ![YouTube Rip 10](~@images/mapping/ytrip10.jpg) | ![MP3 10](~@images/mapping/mp310.jpg) | ![WAV 10](~@images/mapping/wav10.jpg) | ![FLAC 10](~@images/mapping/flac10.jpg) |

Kannst du den Unterschied erkennen? Du kannst die Audioqualität nicht hochskalieren; Nur wenn du mit einer qualitativ hochwertigen Audiodatei beginnst, erhältst du saubere, scharfe Linien.

Auf der Seite [Erweiterte Audiobearbeitung](./advanced-audio.md) findest du weitere ausführliche Techniken und Werkzeuge zum Analysieren der Audioqualität von Dateien.

## Audio synchronisieren

Um die Zuordnung zu erleichtern und sicherzustellen, dass der Song perfekt mit dem Takt des Spiels synchronisiert ist, musst du deine Audiodatei richtig einrichten. In diesem Abschnitt wird davon ausgegangen, dass du [Audacity](https://www.audacityteam.org/) verwendest.

### Planen deine ersten Noten

Analysiere das Intro des Songs. Je nachdem, an welcher Stelle im Song du den ersten Block platzieren willst, musst du sowohl einen _Hot Start_ (zu wenig Zeit vor dem ersten Block) als auch ein zu langes Intro vermeiden. Dein Song wird in eine von drei Kategorien passen:

1. **Songs ohne Intro:** Es ist wichtig, dem Spieler **mindestens zwei Sekunden** Vorbereitungszeit zu lassen, bevor
2. **Songs mit einem kurzen Intro:** Wenn dein Song ein kurzes Intro hat, das **weniger als acht Sekunden** ist, ist es OK, wenn die Musik sofort zu spielen beginnt.
3. **Songs mit einem langen Intro:** Wenn der Song ein sehr langes und ereignisloses/einblendendes Intro von **mehr als zehn Sekunden hat,** wird dringend empfohlen, das Intro so zu kürzen, dass die erste(n) Note(n) innerhalb von acht Sekunden ab Kartenbeginn platziert werden.

In allen oben genannten Fällen musst du den Song auf eine geeignete Zeit verschieben, die deinen Bedürfnissen entspricht:

1. **Kein Intro:** Bewege den Song in der Zeit zurück (nach rechts in der Audiospur) und platziere die erste(n) gemappte(n) Note(n) nach zwei Sekunden. Dann synchronisiere den Song mit dem Beat. Fülle später die Lücke mit Stille.
2. **Kurzes Intro:** Synchronisiere den Song auf den Beat und fülle dann die Lücke mit Stille, je nachdem, welcher Fall zutrifft.
3. **Langes Intro:** Verschiebe den Song zeitlich nach vorne (nach links in der Audiospur), platzieren die erste(n) Note(n) innerhalb von 8 Sekunden und schneide dann den Ton vor 0 Sekunden ab.

Es gibt zwei Möglichkeiten, Audio zu synchronisieren:

- Die empfohlene Methode zum Synchronisieren von Songs ist die [Verwendung von Arrow Vortex](#synchronisieren-mit-arrow-vortex).
- Die alternative Methode zum Synchronisieren von Songs ist die manuelle [Verwendung einer Klickspur](#synchronisieren-mit-einem-klick-track).

### Synchronisieren mit Arrow Vortex

[Arrow Vortex](https://arrowvortex.ddrnl.com/) ist ein kostenloses Tool, um die BPM eines Songs automatisch zu analysieren. Es findet auch den Offset, der benötigt wird, um die Audio in Audacity oder deinem Map-Editor an den Beat anzupassen.

**Das verwenden von Arrow Vortex zum Ermitteln von BPM und Offset:**  
Die unten aufgeführten Schritte sind die gleichen wie in Rygers [Arrow Vortex BPM Analysis Video Tutorial](https://youtu.be/Z49UKFefu5c) (das auch die BPM-Bestätigung enthält).

1. Lade dir Arrow Vortex (AV) herunter, entpacke die Datei und öffne `ArrowVortex.exe`
   - Discord [Zip Download](https://cdn.discordapp.com/attachments/443569023951568906/662417326771273728/ArrowVortex.zip) (Empfohlene Methode)
   - Arrow Vortex Website [RAR Download](https://arrowvortex.ddrnl.com/)
   - Du benötigst zusätzliche Software wie [7zip](https://www.7-zip.org/), um `.rar` Dateien wie diese zu entpacken.
2. Exportiere deinen Song als `.ogg` mit [Audacity](https://www.audacityteam.org/)
   - Die Verwendung anderer Formate (z.B. `.mp3` oder `.m4a`) fügt dem Audio eine Verzögerung hinzu, die jedes Mal variiert und nicht berücksichtigt wird, wenn du Änderungen zur Verwendung im Editor exportierst.

#### Fehlerbehebung Arrow Vortex

##### Die Codeausführung kann nicht fortgesetzt werden, da MSVCP120.dll nicht gefunden wurde

- Installiere [vcredist_x86.exe](https://support.microsoft.com/en-us/help/4032938/update-for-visual-c-2013-redistributable-package) in deiner bevorzugten Sprache und versuche es erneut.

:::danger WARNUNG
**Dies ist ein kritischer Schritt!**  
Wenn du keine `.ogg`-Datei verwendest oder die Exportfunktion in AV nutzt, **wird** dein Song um eine unbestimmte Zeit desynchronisiert.
:::

3. Ziehen die Songdatei in das AV-Fenster
4. Gehe zum `Ansicht` Menü und klicken auf `Zeitbasiert (C-mod)`, um die Wellenform zu sehen
   - Verwende <kbd>CTRL</kbd> + Mausscroll zum Zoomen
5. Gehen zum `Tempo` Menü und klicke auf `Sync einstellen...` oder drücke einfach <kbd>SHIFT</kbd>+<kbd>S</kbd>, um das Einstellfenster zu öffnen.
6. Klicke auf die <kbd>Find BPM</kbd> Schaltfläche
   - Wenn du Glück hast, liefert AV mit 100 %iger Sicherheit einen einzelnen BPM-Wert.  
     ![AV-Anpassungsfenster](~@images/mapping/adjustments.png)
   - Wenn du mehrere Optionen erhältst, solltest du dir die Optionen anhören, um zu sehen, ob sie mit dem Song übereinstimmen. In den meisten Fällen wird es die erste Option sein, aber folge den Schritten 7 und 8, um sicherzugehen.  
     ![Mehrere BPM Werte](~@images/mapping/alternateAdjustments.png)
7. Klicke auf die <kbd>BPM anwenden</kbd> Schaltfläche
8. Drücke <kbd>F3</kbd>, um Beat Ticks einzuschalten, und drücke <kbd>Leertaste</kbd>, um sich den Song anzuhören, um zu bestätigen, dass Anfang, Mitte und Ende deines Tracks aneinandergereiht sind.
   - Wenn nur ein einziges Ergebnis angegeben wurde und die Häkchen nicht übereinstimmen, deutet dies darauf hin, dass der Song eine variable BPM hat.
   - Wenn die Erkennung mehrere Optionen angegeben hat und die Häkchen nicht übereinstimmen, wähle die nächste Option, klicken auf die <kbd>BPM anwenden</kbd> Schaltfläche und höre erneut zu. Wenn keine der Optionen für den Song funktioniert, deutet dies darauf hin, dass er eine variable BPM hat.

:::warning HINWEIS
zu variablen BPM Es wird empfohlen, dass neuere Mapper einen anderen Song wählen, da das Mappen von variablen BPM schwieriger ist. Nicht sicher, ob dein Song variabel ist? Schaue bei BSMG's `#mapping-discussion` vorbei und frage!

Wenn du über die nötige Erfahrung verfügst, siehe [Erweiterte Audiobearbeitung: Variable BPM](./advanced-audio.md#variable-bpm) wie du dies berücksichtigen kannst.
:::

10. Gib dem Spieler etwa zwei Sekunden Zeit, sich vorzubereiten, indem auf die Schaltfläche `Ersten Beat bewegen` klickst ![Arrow Vortex move beat button](~@images/mapping/av_movebeat.png) so oft wie nötig, um deine Startzeit in die Nähe von 2.000 Sekunden zu bringen oder den Ton, auf den du die erste Note setzen willst, auf den ersten Takt auszurichten.  
    ![Ausgerichtet am ersten Balken](~@images/mapping/av_aligned.png) ![Abwechselnd ausgerichtet am ersten Takt](~@images/mapping/av_altAligned2.png)
    - Nach dem Ausrichten solltest du den Song noch einmal überprüfen, um sicherzustellen, dass die Beats noch übereinstimmen.
11. Da du nun die BPM und den Offset hast, musst du die richtige Menge an Stille zur Songspur hinzufügen oder entfernen.

---

**Wenn du einen positiven Offset hast**, musst du diesen Betrag zum Intro hinzufügen.

1. Öffne den Song in Audacity, falls es noch nicht geschehen ist, und wechsele dann zum Auswahlwerkzeug (![Selection Tool](~@images/mapping/selection.png)).
2. Platziere den Cursor an den Anfang der Songspur (Klicke auf die Songspur und drücke die <kbd>Home</kbd> Taste).
3. Klicke auf `Generieren - > Stille...` ![Erzeuge Stille...](~@images/mapping/audacity-generate_silence.png)
4. Gib den Sync `Musik-Offset` Wert ein, den du von Arrow Vortex (oder einem ähnlichen Werkzeug) erhalten hast, und klicke dann auf OK. ![Stille mit Audacity hinzufügen](~@images/mapping/av_audacity.png)
5. Fertig. Du klannst nun zu [Exportieren](#exportieren) oder zu [Optionale Audio Bearbeitung](#optionale-audio-bearbeitung) wechseln.

Nach dem Erzeugen der Stille kannst du auf die dunkle Linie in der Songspur klicken, um den Schnitt zu beseitigen.

---

**Wenn du einen negativen Offset hast**, musst du diesen Betrag aus dem Intro entfernen.

1. Öffne den Song in Audacity, falls noch nicht geschehen, und wechsele dann zum Auswahlwerkzeug (![Selection Tool](~@images/mapping/selection.png)).
2. Füge einen neuen Mono Track hinzu ![Neuen Mono Track hinzufügen](~@images/mapping/audacity-add_new-mono-track.png)
3. Wählen Sie die neue Spur aus und tippen Sie auf die <kbd>Home</kbd> Taste.
4. Klicke auf `Generieren - > Stille...` ![Erzeuge Stille...](~@images/mapping/audacity-generate_silence.png)
5. Geben den Betrag des negativen Offsets, den du in Arrow Vortex(oder einem ähnlichen Werkzeug) gefunden hast, in das Feld Dauer ein und klicke dann auf OK. ![Stille mit Audacity hinzufügen](~@images/mapping/av_audacity-negative.png)
   - Du solltest etwas ähnliches wie das hier sehen  
     ![Daraus resultierende Stille](~@images/mapping/audacity-neg-generated_silence.png)
6. Wähle vom Ende der erzeugten Stille (gelbe vertikale Linie) bis zum Anfang der Songspur, wobei du den Inhalt beider Spuren auswählst.<br/>![Wähle bis zu erzeugten Stille](~@images/mapping/audacity-neg-select_silence.png)
7. Drücke auf den <kbd>Löschen</kbd> Button.
8. Klicke auf das X auf dem neuesten Track um diesen zu löschen.  
   ![Track löschen](~@images/mapping/audacity-delete_track.png)
9. Fertig. Du kannst nun zu [Exportieren](#exportieren) oder zu [Optionale Audio Bearbeitung](#optionale-audio-bearbeitung) wechseln.

> Wenn du nicht die exakte Menge entfernen möchtest, kannst du mehr als nötig entfernen, die geänderte `.ogg` exportieren und [mit deinem Tool neu synchronisieren](#tool-assisted-bpm-calculation), um einen positiven Offset zu erhalten.

### Synchronisieren mit einem Klick-Track

#### Manuelle BPM Berechnung

Wenn die obige Methode fehlschlägt, musst du die BPM manuell finden. Das ist aber einfacher als du denkst.

1. Verwende einen Online-BPM Tapping Rechner (wie das [Tap for BPM Tool](https://www.all8.com/tools/bpm.htm), öffne die Seite in deinem Webbrowser).
2. Spiele den Titel in deinem bevorzugten Musik Player ab.
3. Wenn die Webseite im Fokus ist, tippe etwa 30 Sekunden lang auf eine beliebige Taste im Takt (jede Viertelnote) und das Tool zeigt die BPM des Songs an.
4. Notiere dir den nächstliegenden ganzen Wert.

#### Klickspur hinzufügen

Damit wird bestätigt, dass die BPM, die du online oder manuell gefunden hast, mit der vorhandenen Audiodatei übereinstimmt. Diese Hinzufügung ist temporär; Du solltest die Klickspur vor dem [Exportieren deiner Audiodaten](#exportieren) entfernen.

1. Öffne den Song, den du in Audacity abbilden möchtest.
2. Füge eine neue Mono Spur über `Spur Menü> Neue Mono Spur > hinzufügen` hinzu
3. Setze den Cursor an den Anfang der neuen Spur (Klicke auf die Spur und drücke die Home-Taste) und klicke dann auf `Menü generieren > Rhythmus-Spur...`
4. Gebe die nächstgelegene ganzen BPM in das Feld `Tempo (bpm)` ein und gebe die Dauer des Songs in das optionale Feld `Dauer der Rhythmus-Spur` ein (die Dauer wird oben rechts in der Zeitleiste angezeigt).
5. Kopiere die anderen empfohlenen Einstellungen unten: ![Audacity Rhythm Track Menu](~@images/mapping/click-track-1.png)

Wenn alles korrekt eingegeben wurde, erhältst etwa folgendes Ergebnis: ![Audacity Hauptbildschirm mit Song-Spur und Rhythmus Spur](~@images/mapping/song_rhythm.png)

Diese Klickspur ist vollständig mit den Beats im Karteneditor und im Spiel synchronisiert, aber der Song ist derzeit nicht synchronisiert. Weiter unten erfährst du, wie du das tun kannst.

#### Synchronisiere den Song mit dem Beat

1. Wähle das Zeitverschiebungswerkzeug (![Time Shift Tool](~@images/mapping/timeshift.png)).
2. Klicke mit der linken Maustaste auf die Songspur und halte sie gedrückt. Ziehen dann die Audio so, dass die erste(n) geplante(n) gemappte(n) Note(n) in deinem Song innerhalb der entsprechenden Sekunden (siehe Zeitleiste über der Spur) endet, um einen "Hot Start" oder ein zu langes Intro zu vermeiden (siehe <a href='#plane-deine-erste-note'>Plane deine erste Note</a>, falls du das noch nicht getan hast).
3. Lasse los, um den Ton an der neuen Position zu platzieren.
4. Gib den Ton in dieser Position wieder. Der Song wird nicht synchron sein. Suche also den nächstgelegenen Beat in der Klickspur und richte den Song auf den Beat (Klickspur) aus, indem du ihn in kleinen Schritten zeitlich nach hinten oder vorne verschiebst. Zoome in für bessere Genauigkeit. Wiederhole das, bis es richtig klingt.
5. Wenn du denkst, dass du die passenden Beats für die Klickspur gefunden hast, überprüfe den gesamten Song, um sicherzustellen, dass die BPM, die du hast, die richtigen sind und dass der Song während des gesamten Songs in den gleichen festen BPM ist. Wenn nicht, hast du möglicherweise die falschen BPM erhalten. Versuche in diesem Fall, die BPM (erneut) manuell zu ermitteln, siehe "Manuelle BPM-Berechnung".

::: warning WARNUNG
Wenn die BPM für den ersten Teil des Songs korrekt sind, sich aber plötzlich ändern oder abdriften, has tdu höchstwahrscheinlich einen Song mit variablen BPM, siehe [Erweiterte Audiobearbeitung: Variable BPM](./advanced-audio.md#variable-bpm) für weitere Informationen zu diesem Thema.
:::

Unten siehst du, wie es aussieht, wenn die erste(n) geplante(n) gemappte(n) Note(n) (Cursorposition) nach 2 Sekunden platziert werden und die Beats des Songs mit der BPM/Klickspur synchronisiert sind.

![Audacity Song mit Rhythmus Track aufgereiht](~@images/mapping/synced_rhythm.png)

Wenn die Wellenform/der Audioclip eine Lücke zum Start der Timeline (0,0 Sekunden) hat, musst du Stille zur Audio hinzufügen, sonst exportiert Audacity vom Start des Audioclips und du verlierst jegliche Synchronisierung, die du vorgenommen hast. Gehe wie folgt vor, um Stille hinzuzufügen:

1. Wechsele zum Auswahlwerkzeug (![Selection Tool](~@images/mapping/selection.png)).
2. Wähle den leeren Bereich zwischen dem Audioclip und dem Anfang der Spur aus (gelbe vertikale Linien zeigen den Anfangs- und Endrand an, wenn du eine Auswahl triffst).  
   ![Stille mit Audacity hinzufügen](~@images/mapping/add_silence.png)
3. Klicke auf `Menü Generieren - > Stille...` ![Erzeuge Stille...](~@images/mapping/audacity-generate_silence.png)
4. Die richtige Menge an Stille sollte bereits automatisch eingegeben werden, also drücke einfach auf OK.
5. Fertig. Du kannst nun zu [Exportieren](#exportieren) oder zu [Optionale Audio Bearbeitung](#optionale-audio-bearbeitung) wechseln.

Nach dem Erzeugen der Stille kannst du auf die dunkle Linie in der Songspur klicken, um den Schnitt zu beseitigen.

## Optionale Audio Bearbeitung

An diesem Punkt ist deine Audio eingerichtet und bereit zum [Exportieren](#exportieren). Eine zusätzliche Audiobearbeitung ist zwar nicht notwendig, kann aber die Erfahrung des Players verbessern:

- Stelle sicher, dass der Ton nicht zu leise oder zu laut ist;
- Stelle sicher, dass der Start des Tons reibungslos verläuft; und
- Stelle sicher, dass der Spieler nicht zu lange auf das Ende des Outros warten muss.

### Songlautstärke prüfen

Um sicherzustellen, dass dein Lied nicht zu leise oder gar zu laut ist, können wir es mit RMS (Root Mean Squared) in Audacity messen. Um eine gute Balance zwischen Notenschnitten und deinem Song zu haben, sollte der RMS-Wert **lauter als -11db** (in den Strophen und/oder Refrains) oder **leiser als -8,5db** (an den lautesten Stellen) sein.

Um den RMS-Wert in deinem Song zu prüfen, gehe wie folgt vor:

1. Öffne den Contrast Analyzer im `Menü Analysieren -> Contrast...`
2. Wähle bei noch geöffnetem Fenster "Kontrastanalyse" einen Teil des Chorus-Abschnitts (etwa 15-20 Sekunden) deines Songs aus
3. Klicke auf eine der `Messauswahl` Buttons. (Wir müssen nur einen verwenden.)
4. Im Feld `Volumenausgabe` findest du nun einen Wert. Vergleiche diesen Wert mit den oben empfohlenen Werten.
5. Wenn dieser Wert kleiner (negativer) als die empfohlenen Werte ist, siehe [Lautstärkeänderung: Mache deinen Song lauter](#mach-deinen-song-lauter).
6. Wenn dieser Wert größer (weniger negativ) als die empfohlenen Werte ist, siehe [Lautstärkeänderung: Mache deinen Song softer](#mache-deinen-song-softer).  
   ![Analysieren der Lautstärke mit Audacity](~@images/mapping/contrast.png)

### Volumen Modifikation

Bevor du mit den nächsten Schritten der Songbearbeitung fortfährst, wird dringend empfohlen, den aktuellen Fortschritt als WAVE-Datei als Backup zu speichern. So stellst du sicher, dass du eine qualitativ hochwertige Quelle verwenden kannst, wenn du zurückgehst und einige der Bearbeitungen wiederholen musst. (Lade nicht das OGG, das du vorher exportiert hast, da es viel von der Qualität der Quelle verloren hat). Entferne die Klickspur, falls noch nicht geschehen, gehe dann ins Menü `Datei -> Exportieren -> Als WAV exportieren`, und speichere die Datei

::: tip HINWEIS
Jede Art von Audiobearbeitung eines Songs verändert unweigerlich seinen Klang, ist aber ein wichtiger Schritt, um jedem Spieler das beste Map- und Song-Erlebnis zu bieten.
:::

#### Mach deinen Song Lauter

Wenn der Chorus des Songs einen niedrigeren RMS-Wert als den empfohlenen **-11db** hat, musst du die Lautstärke durch Kompression und/oder Limiting erhöhen. (Hinweis: Amplify/Gain wird hierfür nicht verwendet, da alles über 0db zu einer unangenehmen Verzerrung erzeugt.)

Um zu prüfen, ob du den Kompressor vor dem Limiter anwenden musst, analysiere die Wellenform visuell. Wenn es viele scharfe Spitzen mit einem ziemlich konstanten Körper im gesamten Song gibt, wie im Beispiel unten gezeigt, dann brauchst du keinen Kompressor anzuwenden. Nur ein Limiter reicht aus (überspringe bis zu [Limiter](#limiter)).

![Anschauen eines zu leisen Liedes](~@images/mapping/louder.png)

Wenn die Wellenform jedoch stark zwischen leisen und lauten Teilen variiert, wird wahrscheinlich zuerst eine Kompression benötigt.

#### Kompression

1. Wähle den gesamten Song aus, indem Sie auf die Song-Spur doppelklicken.
2. Gehe zu `Effektmenü -> Kompressor`
3. Kopiere als Ausgangspunkt die unten stehenden Einstellungen und klicke dann auf OK. Stelle sicher, dass `Komprimieren auf Basis von Peaks` aktiviert ist.  
   ![Komprimierung verstehen](~@images/mapping/compression.png)

Hier ist ein Vergleich vor(oben) und nach(unten) dem Kompressor:![Vor und nach der Komprimierung](~@images/mapping/bna_compression.png)

Hören Sie sich den Song noch einmal an und achten Sie auf unnatürliche Verzerrungen, wie z. B. Lautstärkeaussetzern nach lauten Peaks. Wenn ja, mache es wieder rückgängig (`Strg-Z`), ändere die Einstellung `Schwellenwert` auf einen lauteren Wert (weniger negativ) und wende es erneut an. Wenn du mehr über die Einstellungen erfahren möchtest, siehe hier die [Erweiterte Audiobearbeitung: Kompressor](./advanced-audio.md#kompressor) Seite.

#### Limiter

Der Kompressor reduziert viele der unnötigen Spitzen und macht die wichtigeren Töne lauter. Allerdings haben wir immer noch nicht die richtige RMS-Lautstärke für den Song erreicht. Um dies zu erreichen, werden wir einen größeren Teil des Headrooms mit dem Limiter Effekt entfernen:

1. Wähle den gesamten Song aus, indem du auf die Song-Spur doppelklickst.
2. Gehe zu `Effektmenü -> Limiter...`
3. Kopiere als Ausgangspunkt die folgenden Einstellungen:  
   ![Limiter in Audacity](~@images/mapping/limiter.png)
4. Klicke auf OK, um den Limiter anzuwenden.

Prüfe den Song erneut und achte auf unnatürliche Verzerrungen, wie z. B. gequetschte/stark verzerrte Spitzen. Wenn dies der Fall ist, mache den Vorgang rückgängig (`Strg-Z`), stelle die `Eingangsverstärkung` auf einen niedrigeren Wert ein (immer noch über 0db) und wende ihn erneut an. Stelle sicher, dass beide `Eingangsverstärkung` Werte gleich sind, da sonst das Stereobild verzerrt wird. Wenn du mehr über die Einstellungen des Limiter-Effekts wissen möchtest, kannst du gerne die Seite [Erweiterte Audiobearbeitung: Limiter](./advanced-audio.md#limiter) Seite lesen.

Um zu wissen, ob du nach dem Komprimieren und Begrenzen die richtige Lautstärke erreicht hast, prüfe es erneut mit dem RMS-Lautstärkewerkzeug:

1. Öffne den Contrast Analyzer im `Menü Analysieren-> Contrast...`
2. Wähle bei noch geöffnetem Fenster "Kontrastanalyse" einen Teil des Chorus-Abschnitts (etwa 15-20 Sekunden) deines Songs aus.
3. Klicke auf eine der Schaltflächen zur Auswahl von Messungen. (Wir müssen nur einen verwenden.)
4. Im Feld `Volumenausgabe` findest du nun einen Wert. Dieser Wert sollte für einen optimalen Pegel zwischen -8,5db und -9,5db liegen. Wenn nicht, mache den Limiter Vorgang rückgängig und erhöhe die `Eingangsverstärkung` um +/-0,5db und versuche es erneut.

Nach der Begrenzung hast du etwa sowas: ![Song nach Limiting](~@images/mapping/bna_limiting.png)

#### Mache deinen Song softer

Einige moderne elektronische Musikproduzenten haben die Tendenz, ihre Songs sehr laut zu machen, nur um einen Track lauter als andere zu haben. In den seltenen Fällen, in denen du diese Art von Songs hast(**RMS-Wert über -8,5db**), wird **stark empfohlen**, die Lautstärke des Songs zu verringern, um alle Beat Saber Songs zu normalisieren. Dies hilft dabei, die Notenscheibenklänge besser zu hören und den Spielern ein viel angenehmeres Erlebnis beim Umschalten zwischen den Songs.

Bevor du die Lautstärke verringerst, möchtest du ungefähr wissen, um wie viel du die Lautstärke verringern musst. Überprüfe dies mit dem RMS-Volumenwerkzeug:

1. Öffne den Contrast Analyzer im `Menü Analysieren -> Contrast...`
2. Wähle bei noch geöffnetem Fenster "Kontrastanalyse" einen Teil des Chorus-Abschnitts (etwa 15-20 Sekunden) deines Songs aus.
3. Klicke auf eine der Schaltflächen zur Auswahl von Messungen. (Wir müssen nur einen verwenden.)
4. Im Ausgabefeld Volume findest du nun den Wert. Berechnen die Differenz zwischen deinem Wert und -8,5db und merke dir diesen Wert.
5. Schließe das Kontrastanalyse Fenster.

Jetzt lass uns den Verstärkungseffekt nutzen, um die Lautstärke zu verringern:

1. Wähle den gesamten Song aus, indem du auf die Song-Spur doppelklickst.
2. Gehe zu `Effektmenü -> Verstärker...`
3. Gib den Differenzwert, den du zuvor berechnet hast (er sollte negativ sein), in das Feld `Amplifikation` ein. `Neue Spitzenwertverstärkung` Feld wiederholt, was das erste Eingabefeld sagt, dies ist normal für einen Song, der bereits bei 0db spitzt. ![Verstärkung's Menü](~@images/mapping/amplify.png)
4. Klicke auf OK, um einen negativen Verstärkungseffekt anzuwenden.
5. Fertig.

Um zu wissen, ob du die richtige Lautstärke erreicht hast, prüfe den Song erneut mit dem RMS-Lautstärkewerkzeug:

1. Öffne den Contrast Analyzer im `Menü Analysieren -> Contrast...`
2. Wähle bei noch geöffnetem Fenster Kontrastanalyse einen Teil des Chorus-Abschnitts (etwa 15-20 Sekunden) deines Songs aus.
3. Klicke auf eine der `Messauswahl` Buttons. (Wir müssen nur einen verwenden.)
4. Im Feld `Volumenausgabe` findest du nun einen Wert. Dieser Wert sollte für einen optimalen Pegel zwischen -8,5db und -9,5db liegen. Wenn nicht, machen Sie den Verstärkungsvorgang rückgängig, erhöhe den Eingangswert um +/- 0,5db und versuche es erneut.

Nach dem negativen Wert Amplify-Effekt sieht dein Song etwa so aus: ![Verstärkungs Effekt](~@images/mapping/bna_amplify.png)

### Trimmen des Outros

In Beat Saber wird die Map so lange fortgesetzt, wie die Audiodatei dauert. z.B. Das bedeutet, dass die Map nach dem Ende des Liedes noch fünf Sekunden lang still ist, bevor sie beendet wird und der Spieler zum Score-View gelangt. Deshalb ist es wichtig, die Zeit von der letzten Note bis zum Ende des Audiotracks zu beachten.

Gehen Sie zum Ende deines Songs und spiele den letzten Teil und das Outro. Zähle von dem Punkt, an dem du die letzte Note haben willst, bis 3 oder 4 Sekunden und halte die Wiedergabe an. An der Stelle, an der sich dein Playback Cursor jetzt befindet, solltest du in der Regel den Song abbrechen. (Natürlich sind alle Songs unterschiedlich. Mach also das, was für den Song am sinnvollsten ist).

Um das Ende an dieser Stelle zu trimmen, gehe wie folgt vor:

1. Ziehe von der angehaltenen Wiedergabeposition eine Auswahl von hier bis zum Ende der Spur (gelbe vertikale Linie) und drücken die `Löschen` Taste, um diesen Teil zu entfernen.
2. Treffe eine neue Auswahl ab dem Ende der Song-Spur (gelbe vertikale Linie) und etwa 2 bis 3 Sekunden rückwärts.
3. Gehe in das `Effekte Menü -> Studioausblendung`.
4. Fertig.

Das Lied wird nun kurz vor dem Ende der Karte ausgeblendet und dem Spieler werden die Ergebnisse der Wertung viel schneller angezeigt.

### Trimmen des Intro's

Dieser Schritt kann nützlich sein, wenn du einen anmutigeres Fade-In für deinen Song erstellen möchtest.

Wenn deine Spur am Anfang Pfeile hat, die nach links zeigen, bedeutet das, dass du das Audiomaterial zeitlich nach vorne außerhalb der Zeitachse verschoben hast. Wenn du das gemacht hast, um das Intro zu verkürzen, ist es zwar nicht notwendig, aber vorteilhaft, den Soundclip zu schneiden und eine Einblendung hinzuzufügen. Um den Song zu trimmen und eine Einblendung hinzuzufügen (optional), gehe wie folgt vor:

1. Ziehe eine Auswahl von 0,0 Sekunden bis zum Ende der Audiospur (gelbe vertikale Linien).
2. Klicke auf die Audio (![Trim audio to selection](~@images/mapping/trim.png)). Die Pfeile sollten jetzt verschwinden.
3. (Optional) Treffe eine Auswahl vom Track Start (vertikale gelbe Linie) bis etwa 0,5-1 Sekunden (je nach Intro).
4. (Optional) Gehe zu `Effektmenü -> Einblenden`.
5. Fertig.

Vorher(links) und nach dem Schnitt und der Einblendung(rechts):

![Trimmen des Intro's](~@images/mapping/trim_fade.png)

## Exportieren

Wir haben jetzt eine fertige Audio Datei, die du im Editor und im Spiel verwenden und hören kannst. Es wird empfohlen, eine weitere Sicherungskopie der WAVE-Datei zu erstellen, für den Fall, dass du erneut mit einer anderen Qualitätseinstellung nach OGG exportieren musst. (`Datei Menü -> Als WAV exportieren`).

Um eine kompatible Ton Datei zu erzeugen, die du verwenden kannst, musst du wie folgt vorgehen:

1. Lösche die Klickspur (falls du das noch nicht bereits getan hast).
2. Klicke auf's Menü `Datei -> Exportieren -> Als OGG exportieren.`  
   ![Als OGG Standort exportieren](~@images/mapping/audacity-export.png)
3. Nenne die Datei `song.ogg`.
4. Wähle eine geeignete OGG-Qualität ([mehr Infos hier](./advanced-audio.md#auswahl-der-geeigneten-ogg-exportqualitat)):  
   ![Export Qualitäts-Slider](~@images/mapping/export-quality.png)
   - Hochwertige Quellen (WAVE / FLAC / MP3 / AAC) verwenden 6-9 (es sei denn, es gibt ein Problem mit der Dateigröße)
   - Quelle niedriger Qualität (YouTube o. ä.): verwenden 3-5
5. Klicke Speichern.

Die Song-/Audiodatei ist nun bereit, in einem beliebigen Map-Editor verwendet zu werden. Gib die gleichen BPM, die du zuvor erhalten hast, in den Map-Editor deiner Wahl ein und stelle sicher, dass du für alle Schwierigkeiten einen Offset von 0ms verwendest (da der Song bereits auf den Beat synchronisiert ist).

::: warning HINWEIS
Die Audiodatei sollte nicht größer als ~12 MB sein, da BeatSaver die ZIP-Datei auf 14,3 MB begrenzt. Die aufgelisteten 15 MB sind derzeit nicht korrekt. Sollte dies der Fall sein, exportiere mit einer niedrigeren Qualität, bis die Datei die Dateigrößengrenze erreicht. ZIP-Dateien über 8 MB können nicht direkt auf Discord (ohne Nitro oder Server Boost Level 2) für Playtests freigegeben werden.
:::

## Credits

Der Inhalt dieser Seite stammt aus Anleitungen von [Kolezan](./mapping-credits.md#kolezan) & [Nik](./mapping-credits.md#nik-n3tman).
