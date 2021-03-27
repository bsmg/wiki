---
sidebar: auto
prev: ./basic-audio.md
next: false
description: Tauche tiefer in die Audio-Bearbeitung ein.
---

# Fortgeschrittene Audiobearbeitung
_Tauche tiefer in die Audio Bearbeitung ein._

* [Glossar der Begriffe](./glossary.md)

Auf dieser Seite findest du zusätzliche Anleitungen und Ressourcen zum besseren Verständnis von Audio oder fortgeschrittene Techniken der Audiobearbeitung.

## Audio Qualität überprüfen
Generell sollte man immer **WAV(E)- oder FLAC (verlustfrei unkomprimiert oder komprimiert)** Dateien als Quelle für deine Songs verwenden. Das liegt daran, dass **verlustbehaftete Formate wie MP3, AAC oder OGG bei der Konvertierung in ihre Formate immer Informationen verlieren** und nicht durch "Rückkonvertierung" wiederhergestellt werden. Aus diesem Grund sollte man exportierte OGG-Datei niemals dazu verwenden, neue Bearbeitungen am Audiomaterial vorzunehmen. Verwende daher wenn möglich, immer eine verlustfreie Quelldatei. Einige FLAC Quellen können jedoch aus verlustbehafteten Formaten "hochkonvertiert" werden. Es empfiehlt sich daher, Audiodatei(en) vor der Verwendung mit einem Spektralanalysetool zu überprüfen. Für weitere Informationen über Audioformate [wird dieser Artikel empfohlen](https://opentrackers.org/whatinterviewprep.com/prepare-for-the-interview/audio-formats/index.html).

::: tip Speicher deine eigenen verlustfreien WAV(E)-Dateien bei jedem Bearbeitungsschritt, so dass du immer eine verlustfreie Quelle hast, mit der du die Bearbeitung fortsetzen kannst ohne alles von vorn beginnen zu müssen. So hast du immer eine verlustfreie Quelle, mit der du die Bearbeitung fortsetzen kannst, ohne alles von Anfang an neu machen zu müssen. :::

Die beste Möglichkeit die Qualität der Quelle und den Qualitätsverlust zu überprüfen, ist die Verwendung von [Spek](http://spek.cc/), ein kostenloses akustisches Spektrum-Analyse-Tool:

![Spektrum Beispiel](https://i.imgur.com/fdOZR2K.png "Spektrum Beispiel")

Dieses Werkzeug zeigt die Zeit des Liedes von links nach rechts, die Frequenzen von unten nach oben und die Lautstärke der Frequenzen in Farbe (Legende rechts). Dieser Screenshot zeigt denselben Song, wobei der obere Graph eine WAVE Datei ist und das untere Diagramm ein OGG Dateiexport derselben WAVE Datei ist.

Wie man niedrige Qualität erkennt:

* Der größte Unterschied zwischen den beiden Diagrammen ist die Frequenzabschneidung am oberen Rand des Diagramms des verlustbehafteten Formats. Dies ist eine übliche Technik für verlustbehaftete Formate um Daten zu sparen, da diese hohen Frequenzen nicht so wichtig für die gesamte Klangwiedergabe sind. Dies liegt auch daran, dass der menschliche Hörbereich, der sich bei der Geburt von 20hz bis 20khz erstreckt, durch [Lärminduzierten Hörverlust](https://en.wikipedia.org/wiki/Noise-induced_hearing_loss) und/oder [Alter,](https://en.wikipedia.org/wiki/Presbycusis) was bei manchen Menschen dazu führt, dass sie im Laufe der Zeit das Gehör für Frequenzen über 15khz verlieren. Er spart also Daten, indem er diese Frequenzen nicht verwendet. Frequenzen, was ein unwissender Zuhörer ohnehin nicht bemerken würde.
* Noch wichtiger ist, dass man bei genauerer Betrachtung der Frequenzen im hörbaren Spektrum (20hz bis 20khz) sehen kann, dass die obere Grafik viel glatter mit guten Verläufen aussieht und der dunkelblaue Bereichen (schwache Töne) im Vergleich zur unteren Grafik zerklüfteter ist und nicht viel von den feineren Verläufen enthält. Die meisten schwachen blauen Bereiche sind hier stattdessen schwarz.

Auf diese beiden Merkmale kann man bei der Analyse der Quell-Tondateien achten. Für weitere Informationen zur Spektrumanalyse [wird dieser Artikel empfohlen](https://opentrackers.org/whatinterviewprep.com/prepare-for-the-interview/spectral-analysis/index.html).

Um dieses Tool zu verwenden, öffne einfach Spek.exe und ziehe die Audiodatei aus dem Datei Explorer in das Spek-Fenster. Man kann die Größe des Fensters ändern, um mehr Details in der Grafik zu sehen.

### Auswahl der geeigneten OGG-Exportqualität
Man sollte darauf abzielen, den größten Teil der Quell-Audiodaten zu erhalten und trotzdem die kleinste Dateigröße zu haben. Halte die Größe der OGG-Datei unter 14MB (für BeatSaver) oder 7MB (für Discord ohne Nitro).

Um zu wissen, welcher Pegel für dein Song ideal ist, kannst du deine Spur mit verschiedenen Qualitäten exportieren und [die Spektren vergleichen](#checking-audio-quality). Als allgemeine Empfehlung solltest du jedoch diese Einstellungen befolgen:

* Quelle hoher Qualität (WAVE, FLAC oder MP3/AAC@+200kbps): Wähle eine OGG-Qualitätsstufe zwischen 9 und 6.
* Quelle niedriger Qualität (MP3 / AAC / OGG): Wähle eine OGG-Qualitätsstufe zwischen 5 und 3.

Du kannst die Audioqualität nicht erhöhen, indem du einen verlustbehafteten Track mit einer höheren Bitrate speicherst. (z. B. Speichern eines von YouTube stammenden Tracks mit Stufe 10). Du wirst nur die Dateigröße vergrößern. Wie im vorherigen Kapitel erläutert, gehen beim Transkodieren in ein verlustbehaftetes Format Informationen verloren und können daher nicht wiederhergestellt werden. Die Transkodierung eines verlustfreien Formats in ein anderes verlustfreies Format ist jedoch in Ordnung, z. B. FLAC nach WAV(E).

## Audioverarbeitung erklären
Für die Arbeit mit Audio und die Bearbeitung der Schallwellen stehen verschiedene Werkzeuge zur Verfügung, um das zu erreichen, was wir wollen oder brauchen. Zwei dieser Werkzeuge sind *Kompressor* und *Limiter*, die wir für die Lautstärkebearbeitung in [Lautstärkebearbeitung verwendet haben: Deinen Song lauter machen](./basic-audio.md#making-your-song-louder).

Im Folgenden werden diese Werkzeuge näher erläutert:

### Kompressor
Im Wesentlichen reduziert ein Kompressor die Dynamik oberhalb eines bestimmten Schwellenwerts, wodurch das Audiosignal letztlich weniger dynamisch und die Lautstärke reduziert. Wenn du das Signal auch nach einem Kompressor anhebst (Make Up Gain/Normalize), kannst du den Klang noch lauter wahrnehmen.

Der mit Audacity mitgelieferte Kompressor Effekt ist eigentlich nicht das beste Werkzeug für das Mastering von Musik, da er eher für sprachorientiertes Audio orientiert ist. Es ist jedoch sehr einfach zu verwenden, weshalb es in [Lautstärkemodifikation: Komprimierung](./basic-audio.md#compression) und grundlegende Einstellungen bereitgestellt wird, die für die meisten Fälle funktionieren. Wenn du dies jedoch liest, hast du entweder eine unangenehme Verzerrung im Klang bemerkt (Ton bricht nach lauten Spitzen) oder du bist neugierig auf die Einstellungen, die du in einem Kompressor vornehmen kannst, also lass uns einen Blick auf diese Einstellungen werfen, mit dem fortgeschrittenen [SC4-Plug-in](https://ttmanual.audacityteam.org/o/man/sc4.html) für Audacity (Du musst eventuell das [LADSPA-Bundle](http://www.audacityteam.org/download/plug-ins/#ladspa) installieren, um Zugriff auf dieses Tool zu erhalten).

![SC4](https://i.imgur.com/koad1gL.png)

<!-- markdownlint-disable MD013 -->
| Effekt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **RMS/Peak**                                                                                                                                           | Einzigartig für dieses Plugin ist der Aggressivitätsregler, den du dir vorstellen kannst. Für unseren Zweck wollen wir ihn auf Peak setzen, **1.0**.                                                                                                                                                                                                                                                                                      |
| **Anzugszeit (ms)**                                                                                                                                    | Wie schnell der Kompressor nach Überschreiten des Schwellenwerts mit der Kompression der Dynamik beginnt, in Millisekunden. Um den Kompressor so transparent wie möglich zu machen, wird die Einstellung auf **1,5 ms** empfohlen.                                                                                                                                                                                                        |
| **Freigabezeit (ms)**                                                                                                                                  | Wie schnell der Kompressor beginnt, den Lautstärkepegel nach Unterschreiten des Schwellenwerts wieder auf den normalen Wert zu bringen, in Millisekunden. Um den Kompressor so transparent wie möglich zu machen, wird die Einstellung auf **2,0 ms** empfohlen. Diese Einstellung ist ein Grund dafür, dass der mit Audacity mitgelieferte Compressor-Effekt nicht optimal ist, da er nur Release-Zeiten von maximal 1. Sekunde zulässt. |
| **Schwellwertpegel (dB)**                                                                                                                              | Der Pegel, bei dem der Kompressor zu arbeiten beginnt. Dies ist der Wert, den du einstellen musst, wenn du weniger oder mehr Kompression benötigst.                                                                                                                                                                                                                                                                                       |
| **Verhältnis (1:n)**                                                                                                                                   | Das Verstärkungsreduktionsverhältnis, das verwendet wird, wenn der Signalpegel den Schwellenwert überschreitet. Ein guter Startpunkt ist **1:3**. Drehe dies auf, um eine noch aggressivere Reduzierung zu erhalten.                                                                                                                                                                                                                      |
| **Knieradius (dB)**                                                                                                                                    | Der Abstand von der Schwelle, an der die Kniekurve beginnt. Die Einstellung auf **1 dB** oder weniger sollte ausreichend sein.                                                                                                                                                                                                                                                                                                            |
| **Nachverstärkung (dB)**                                                                                                                               | Der Betrag der Verstärkung, der zum verarbeiteten Ergebnis hinzugefügt wird. Im Vergleich zum Kompressor-Effekt, der mit Audacity ausgeliefert wird, gibt es in diesem Plugin keine *Make-up Gain auf 0dB nach der Komprimierungs*-Einstellung. Du kannst dies jedoch einfach auf 0dB setzen und dann einen *Normalize*-Effekt auf 0dB auf den gesamten Song anwenden und es wird genau die gleiche Verarbeitung durchgeführt.            |
| **Aktivieren**                                                                                                                                         | Eine praktische Funktion bei diesem Plugin ist das `Aktivieren`-Kästchen. Damit kannst du das Audio bei geöffnetem Effektfenster abspielen und die Einstellungen in Echtzeit anpassen. Aktiviere und deaktiviere das Kontrollkästchen `Aktivieren`, um während der Wiedergabe des Songs jederzeit zwischen bearbeitetem und unbearbeitetem Ton umzuschalten. Auf diese Weise kannst du deine Änderungen sofort hörbar vergleichen.        |
<!-- markdownlint-enable MD013 -->

Ein Beispiel dafür, wie sich die Komprimierung auf den Ton auswirkt. Der hervorgehobene Teil wurde mit einem Verhältnis von 1:3 mit einem Schwellenwert bei -30db (rote Linie) komprimiert.

![Kompression](https://i.imgur.com/6VMXy3j.png)

::: tip Um die Dynamik des Liedes in dB visuell besser beurteilen zu können, kannst du den Schwellenwert auf Folgendes einstellen:

1. Klicke mit der linken Maustaste auf die Spurbezeichnung und wähle `Wellenform (dB)`. Dadurch wird eine logarithmische Wellenform mit dB in der Skala anstelle einer linearen Skala angezeigt.
2. Um die Skala zu erhöhen, klicke mit der rechten Maustaste auf die Skala links von der Reißzwecke und klicke auf `Halbe Welle`.
3. Um die Spurhöhe zu maximieren, gehe auf `Ansicht -> Spurgröße -> An Höhe anpassen` oder drücke einfach `Strg + Umschalt + F`. Dadurch wird mehr von der Skala angezeigt.

![Track](https://i.imgur.com/2zWoX9q.png) :::

Ausführlichere Informationen über Kompressoren [findest du hier](https://www.practical-music-production.com/audio-compressor/).

### Limiter
Ein Limiter ist im wesentlichen ein Kompressor-Effekt mit einem unendlichen Verstärkungsreduktionsverhältnis, der jedes Signal, das über den den Schwellenwert beendet. Das bedeutet, dass ein Limiter nützlich ist, um die Spitzen einer Wellenform abzuschneiden und das Audiomaterial noch lauter wahrnehmbar zu machen.

Werfen wir einen Blick auf den [Limiter](https://manual.audacityteam.org/man/limiter.html)-Effekt von Audacity:

![Limiter](https://i.imgur.com/6fAwHCv.png)

<!-- markdownlint-disable MD013 -->
| Effekt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Beschreibung                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Typ**                                                                                                                                                | Wie der Effekt den Begrenzungseffekt anwenden soll. Für unseren Zweck brauchen wir **Hard Limit**.                                                                                                                                                                                                     |
| **Eingangsverstärkung (dB) Mono/Links/Rechts Kanal**                                                                                                   | Dies ist der Wert, um den du die Audiolautstärke erhöhen möchtest. Im Wesentlichen dasselbe wie der Effekt "Verstärken". Nimm für links und rechts den gleichen Wert, sonst wird das Stereobild verzerrt. Dies ist der Wert, den du einstellst, wenn du einen lauteren oder leiseren Effekt benötigst. |
| **Grenze zu (dB)**                                                                                                                                     | Bei welcher Lautstärke der Effekt das Signal begrenzt. Dieser Wert kann auf 0 dB eingestellt werden und verhindert somit das Clipping von Verzerrungen. Aber um verlustbehafteten Formaten etwas Spielraum bei der Codierung zu geben, ist der beste Wert **-0,1 dB**.                                 |
| **Halten (ms)**                                                                                                                                        | Wie lange der Limiter-Effekt nach dem Einschalten anhalten soll. Um den Limiter so transparent wie möglich zu machen, ist die Einstellung auf **1ms** für unseren Zweck am besten geeignet.                                                                                                            |
| **Make-up Verstärkung anwenden**                                                                                                                       | Normalisiert die Spitzenwerte auf einen Wert nahe 0 dB. Wir haben aber bereits die richtige Lautstärke mit `Limit auf (dB)` eingestellt, so dass diese Einstellung unnötig ist. Für unseren Zweck setze dies auf **Nein**.                                                                             |
<!-- markdownlint-enable MD013 -->

Ausführlichere Informationen über Limiter [findest du hier](https://www.practical-music-production.com/audio-limiter/).

## Song-Bearbeitung mit Überblendungen
Wenn du eine kürzere Version eines Songs bearbeitest und ein einfacher harter direkter Schnitt zwischen zwei ähnlichen Abschnitten eines Songs nicht nicht ausreicht, um deine Ohren zu überzeugen (in der Regel sind die Abschnitte nicht perfekt identisch, vor allem bei nicht-elektronischer Musik), dann hilft eine Überblendung zwischen den Abschnitten. Jede Art von Umstrukturierungsbearbeitung ist einfacher in einer DAW Software, die Beatgrid Bearbeitung benutzt. Es ist aber möglich, dasselbe auch in der freien Software von Audacity zu tun, was wir hier zeigen werden.

Für diejenigen, die es nicht wissen: Eine Überblendung ist, wenn eine Audiospur ausgeblendet wird, während eine andere gleichzeitig eingeblendet wird. Für das beste Ergebnis findest du identische oder nahezu identische Abschnitte an jedem Ende des Bereichs, den du schneiden möchtest. Instrumentale Regionen in elektronischer Musik sind besser geeignet als Regionen mit Vocals. **Die Verwendung eines möglichst kleinen Segments, insbesondere eines kleinen Abschnitts zwischen zwei Peaks/Beats, ist besser, um einen Hörer zu überzeugen.**

Es gibt auch ein Video von diesem Prozess [hier](https://www.youtube.com/watch?v=oSua4ITfPy8).

**Um zwei Abschnitte eines Songs zu überblenden, gehe wie folgt vor:**

1. Öffnen den Song in Audacity.
2. Dupliziere die Songspur (`Menü auswählen -> Alles + Menü Bearbeiten -> Duplizieren`, oder drücke einfach `Strg+A` und dann `Strg+D`)
3. Fülle das unerwünschte Ende der ersten Spur und den unerwünschten Anfang der zweiten Spur grob mit Stille (Auswählen, dann `Menü generieren -> Stille...`).

![Songabschnitt schneiden](https://i.imgur.com/IRiNCz0.png "Songabschnitt schneiden")

4. Richte die Spuren mit dem Zeitverschiebungswerkzeug aus (![Time Shift Tool](~@images/mapping/timeshift.png "Timeshift tool")) um die zweite Spur an eine Stelle zu verschieben, die ungefähr an der gleichen Stelle liegt, damit die ähnlichen Abschnitte nahe beieinander liegen. Zoome dann hinein und stelle erneut ein und wiederhole den Vorgang, bis die Wellenform beim Zoomen in Punkte übergehen. Richten die Punkte auf der unteren Spur mit den ähnlichen Spitzen und Tiefen mit der oberen Spur aus, wenn möglich.

::: tip Verwende eine Klickspur um sicherzustellen, dass die Spuren im Takt zueinander sind.  
Siehe [Audio-Vorbereitung: Hinzufügen von Click-Track](./basic-audio.md#Klickspur-hinzufuegen). :::

![Vergrößerte Synchronisation](https://i.imgur.com/9jyrzzv.png "Vergrößerte Synchronisation")

5. Der letzte Abschnitt der oberen Spur sollte nun identisch oder ähnlich wie der erste Abschnitt der unteren Spur sein, aber aus verschiedenen Zeiten im Song. Höre den überlappenden Bereich ab, um eine Übereinstimmung zu bestätigen und vergewisser dich, dass es kein Echo/Versatz von falsch ausgerichteten Spuren gibt.

::: tip Um Übersteuerung/Clipping von zwei -0db spitzen Spuren zu vermeiden, kannst du die Fader für beide Spuren auf -6db stellen ![Fader](https://i.imgur.com/kvsHvMT.png) und später wieder auf +0db stellen, nachdem die Überblendung erfolgt ist. Doppelklicke auf den Fader, um die Nummer einzugeben. :::

7. Wähle den überlappenden Bereich über beide Spuren aus.
8. Gehen zu `Effektmenü -> Überblendspuren`. Setze die Fade-Richtung auf `Alternierend Aus / Ein`. Klicke dann auf OK, um die Überblendung anzuwenden.

![Überblendung](https://i.imgur.com/amqrj1I.png "Überblendung")

9. Hören dir die überschneidenden Abschnitte noch einmal an. Wenn alles gut gelaufen ist, solltest du nun einen perfekt überblendeten Übergang zwischen den beiden Spuren haben.
10. Kombinieren die Spuren, indem du alles auswählst (`Menü auswählen -> Alle` oder `Strg+A`) dann in das Menü `Spuren -> Mischen` gehen und dann `Mischen und Rendern`.
11. Fertig. Du könntest nun mit der weiterer [Audiobearbeitung](./basic-audio.md#optional-audio-editing) fortfahren oder mit [Exportieren](./basic-audio.md#exportieren) abschließen.

## Variable BPM
Wenn der Song, den du versuchst zuzuordnen, ein Tempo hat, das nicht mit einem festen BPM-Wert übereinstimmt (z. B. auch bei BPM-Werten mit Dezimalstellen), wie z. B. (ältere) akustische Pop-, Rock- oder Metal-Songs, wurden sie höchstwahrscheinlich nicht mit einem Metronom aufgenommen und lassen sich daher nicht ohne weiteres in Audacity oder dem Map-Editor auf eine feste BPM zu synchronisieren. Dies erfordert viel Zeit und Geduld, also stelle sicher, dass es den Aufwand wert ist. Denn einige Lösungen beinhalten rohe Gewalt, indem die BPM (Tempospur) in Intervallen, manchmal jeden Beat, manuell angepasst wird, um den Song anzupassen.

Der Vorteil einer synchronisierten BPM/Tempo-Spur ist eine einfachere und konsistente Notenplatzierung und -Bearbeitung sowie eine einfachere und konsistente Bearbeitung der Beleuchtung, insbesondere bei mehr als einer Schwierigkeit in einer Map.

Es gibt mehrere Methoden, um variable BPM zu behandeln:

* Verzerre den Sound mit Hilfe einer DAW Software zu einem festen BPM-Wert. Siehe [Verziehen mit Reaper](#verziehen-mit-reaper) für Informationen.
* Nimm die BPM-Änderungen in MMA2 manuell vor.
  * [Video-Tutorial von BennyDaBeast hier](https://www.youtube.com/watch?v=6AwR4SeaiHU)  
    **Hinweis:** Benny verwendet in diesem Tutorial einen älteren Editor, Mediocire Mapper. Einige UI-Elemente haben sich zwar im neuesten Editor, [MMA2](./#mediocre-map-assistant-2) verändert, aber der Rest des Inhalts ist großartig!
* Nutzen die DAW-Software und finden alle Änderungen im Tempo mit einem Tempo Track Editor. Verwenden Jumps anstelle von Rampen, da so MMA2 das Tempo ändert. Wenn du alle Tempo Änderungen gefunden hast, gebe diese in MMA2 ein. (Denke daran, dass DAW Software normalerweise Takte und Zählzeiten anzeigt, MMA2 aber nur Zählzeiten)

### Verformung mit Reaper
[Reaper](https://www.reaper.fm/) ist eine DAW (Digital Audio Workstation), die eine permanente kostenlose Testversion hat und eine großartige Alternative ist zu teurer professioneller Software wie [Ableton Live](https://www.ableton.com/en/live/). Wenn du Ableton hast und damit vertraut bist mit Ableton arbeiten, solltest du es anstelle von Reaper verwenden.

Hier werden wir seine Warp Funktion verwenden, um das Audio subtil an ein einheitliches Tempo anzupassen. Reduziert die Anzahl der BPM Änderungen, die du im Editor einstellen musst.

#### Erste Schritte

1. Lade [Reaper](https://www.reaper.fm/) herunter, falls du dies noch nicht getan hast.
2. Neues Projekt erstellen.
3. Richten deine Projekteinstellungen ein.
   * Datei > Projekteinstellungen
   * Lege die anfänglichen BPM des Songs fest und stelle beide Timebase-Dropdowns auf `Time` anstelle von `Beats`.

![Reaper Projekt Einstellungsfenster](~@images/mapping/reaperProjectSettings.png)

:::danger Dies ist ein kritischer Schritt! **Du kannst deine Audio ruinieren, wenn du die anfänglichen BPM- und Timebase-Einstellungen nicht korrekt vornimmst!** :::

4. Schalte "Am Raster ausrichten" aus. Es ist das grüne Magnetsymbol in der oberen linken Ecke.
5. Fügen deine Audio zum Projekt hinzu. Fügen > Mediendatei ein und finde deinen Song.
6. Ziehe die gesamte Audiospur entsprechend, um einen Heißstart oder ein zu langes Intro zu vermeiden.
   * Siehe [Basic Audio: Plane deine erste Note](./basic-audio.md##plane-deine-erste-note) für weitere Informationen.

![Ausrichten von Audio Start in Reaper](~@images/mapping/reaperFirstBeat.png)

#### Beats aufstellen
Nun der wichtige Teil. Wir werden das Audiomaterial so verzerren, dass es genau auf den BPM landet, die wir in den Projekteinstellungen festgelegt haben.

Dieser Vorgang wird auch in [diesem Video](https://www.youtube.com/watch?v=nrd37K3sCF8) von TechButterfly demonstriert

Du solltest Spitzen an den Stellen bemerken, an denen sich die Hauptschlagzeugbeats befinden. Bei einem Song mit konstanten BPM landen diese Spitzen genau auf den Beat Markern. Bei deinem Song werden die Spitzen irgendwann von diesen Beat Markern wegdriften.

Wenn dies der Fall ist, musst du folgendes tun:

1. Klicke auf den Peak.
2. Verwende <kbd>Umschalt + W</kbd>, um eine Dehnungsmarkierung hinzuzufügen.
3. Ziehe den Dehnungsmarker auf die Beat-Linie.

| Schritt 1                                                                    | Schritt 2                                                              | Schritt 3                                                                       |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![Peak ist nicht auf Beat Marker](~@images/mapping/reaperWarpAudioStep1.png) | ![Streckmarker hinzugefügt](~@images/mapping/reaperWarpAudioStep2.png) | ![Marker bewegt sich auf Beat Linie](~@images/mapping/reaperWarpAudioStep3.png) |

Das Warpen deines Songs ist einfach eine Sache der Wiederholung dieses Vorgangs für den gesamten Song. Du solltest damit beginnen, dies etwa alle 4 Schläge oder so zu tun. Meistens ist dies gut genug, um den ganzen Song aufzustellen, aber achte auf die Beats zwischen den Stretch Markierungen. Wenn sie zu driften beginnen, verwende einen weiteren Stretchmarker, um sie zu fixieren.

:::warning HINWEIS Übermäßige Warps könnten Artefakte einführen oder den Song so stark verändern, dass er für den Hörer/Spieler wahrnehmbar ist. :::

#### Dinge im Hinterkopf behalten
Beim Warpen eines Songs kann es viele versteckte "Gochas" geben. Hier sind einige Dinge, die dir begegnen könnten, und mögliche Lösungen.

* Wenn du die Beats warpst und bemerkst, dass das Driften immer größer wird, möchtest du vielleicht das Tempo ändern, damit du das Audiomaterial nicht so stark verzerrst. Dies kann durch eine BPM-Änderung im Song verursacht werden oder dadurch, dass sich einige Bands nicht um das Tempo kümmern.
  1. Klicke auf die Stelle, an der die Tempoänderung beginnen soll.
  2. Drücke <kbd>Umschalttaste + C</kbd>, um eine Tempoänderung hinzuzufügen.
  3. Bearbeite die Position des Wechsels so, dass sie genau auf dem Beginn des Beats liegt.
  4. Ändere das Tempo.
  5. Verwende Trial und Fehler, um die Drift des nächsten Audiostücks zu minimieren.
  6. **Du musst die gleiche BPM-Änderung im Karteneditor hinzufügen!**

![Tempo mitten im Song ändern](~@images/mapping/reaperChangeTempo.png)

* Einige Peaks können vage sein, besonders, wenn mehrere Geräusche gleichzeitig auftreten. Es gibt mehrere Möglichkeiten, einen Peak zu testen, um herauszufinden, wo der Trommelschlag liegt.
  * Wenn du den Cursor über den Peak hin- und herziehst, solltest du ein Klopfen hören, wenn du den Peak triffst.
  * Wenn du kurz vor dem Peak klickst und dann die Leertaste drückst, um den Ton abzuspielen, solltest du sofort den Schlagzeuger hören.  
    ![Vage Spitze](~@images/mapping/reaperVaguePeak.png)

* Achte darauf, wie sich der Song anfühlen soll. Nicht jeder große Trommelschlag ist auf einem Beat Marker. Zum Beispiel haben einige Songs große Crash Beckenschläge einen halben oder viertel Takt vor dem Hauptschlag. Du kannst versuchen, Musiktabellen oder andere Ressourcen zu finden um das beabsichtigte Timing eines Songs herauszufinden. Sei dir nur bewusst, dass Online-Tabellen nicht garantiert korrekt sind. Einige Registerkarten auf songsterr sind komplett erfunden!

#### Audio rendern/exportieren
Wenn du mit der Bearbeitung deiner Audios fertig bist, möchtest du es als `.ogg` Datei rendern, die Beat Saber verwenden kann.

1. Datei > Rendern
2. Deaktiviere das Kontrollkästchen "Ende", es sei denn, du möchtest Stille am Ende des Songs hinzufügen
3. Lege den Zielpfad und den Dateinamen fest (ohne die Erweiterung `.ogg`, da diese automatisch hinzugefügt wird)
4. Wähle OGG Vorbis als Ausgabeformat
5. Konfiguriere die Qualität entsprechend. Reaper verwendet eine Skala von 0 bis 1 anstelle von 0 bis 10. Es gelten jedoch die unter [Basic Audio: Exportieren](./basic-audio.md#exportieren) weiterhin.
   * Hochwertige Quellen (WAVE / FLAC / MP3 / AAC) verwenden 0,6-0,9 (es sei denn, es gibt ein Problem mit der Dateigröße)
   * Quelle niedriger Qualität (YouTube o. ä.): verwende 0,3-0,5
6. Klicke auf die Schaltfläche 1 Datei rendern. Nach einiger Zeit hast du eine OGG-Datei mit schön aufgereihten Beats!

![Audio-Render/Export Einstellungen](~@images/mapping/reaperRenderAudio.png)

## Credits
Der Inhalt dieses Abschnitts stammt aus Anleitungen von [Nik](./mapping-credits.html#nik-n3tman), [LittleAsi](./mapping-credits.html#littleasi), und [Ris](./mapping-credits.html#ris), der **Heisenberg_IRL**s Methode des Warpings in Ableton adaptierte. Zusätzliche Bearbeitungen durch [Kolezan](./mapping-credits.html#kolezan).
