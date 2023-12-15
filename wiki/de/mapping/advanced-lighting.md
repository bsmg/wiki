---
prev: false
next: false
description: Erfahre, wie du deine Beleuchtung auf 11 erhöhen kannst.
---

# Fortgeschrittenes Lighting

_Du bist in die Welt der Beleuchtung eingetaucht und willst nun die nächste Stufe erklimmen._

::: warning This is a stub page, content is a work in progress! Frage in `#mapping-discussion`, wenn du  mehr Infos brauchst! :::

## Advanced Static Event System Techniques

### Double Duty Laser

Du kannst zwei Laser "Spuren" überlagern, indem du mehrere Farben in verschiedenen Mustern verwendest, um das Aussehen der doppelten Anzahl von von verfügbaren Lasertypen zu erhalten. Wenn die Musik es unterstützt, kannst du die beiden Muster durch andere Kontraste unterscheiden, z. B. indem du eine Farbe stroboskopierst, während die andere Farbe unverändert bleibt, indem du sie auf andere Weise kontrastierst, z. B. indem du das eine Muster stroboskopisch darstellst, während das andere einfarbig bleibt, oder indem du eine Farbe auf Geschwindigkeit 0 hältst, während sich die andere bewegt.

Beginne damit, das auffälligste, konsistenteste oder komplexeste Muster abzubilden (je nachdem, welches Muster deiner Meinung nach am genauesten abgebildet werden muss). Das zweite Muster wird dann sorgfältig ausgearbeitet, so dass beide nie denselben spezifischen Laser zur gleichen Zeit verwenden müssen. Im schlimmsten Fall, wenn du die beiden Muster kurz überlappen musst, kannst du einfach die Farben des überlappenden Laser für einen Takt stroboskopierst; beachte jedoch, dass eine anhaltende Überlappung den Effekt unterbrechen würde.

- Beispiele bei ~1:52 und ~2:50:  
  [Streamable](https://streamable.com/0qsto) | [BeatSaver](https://beatsaver.com/beatmap/7be2)

### Höhere Wirkung voll Ein/Aus Momenten

Zeitliche Staffelung der Ein/Aus-Ereignisse für die verschiedenen Lichttypen beim Einschalten aller Lichter für einen großen Hit, um ein stärkeres Gefühl zu erzeugen und ein Gefühl der Bewegung zu vermitteln.

Anstatt alle Lichter gleichzeitig blinken zu lassen oder auszublenden, blinke sie in einer sehr schnellen Vorne-Hinten- oder Hinten-Vorne-Sequenz auf, in 1/16-Intervallen oder so; Diese können in Überblendungen enden, mit gleichzeitigen Ausblendungen oder ähnlich getakteten Ausblendungen im gleichen Intervall oder oft halb/doppelt so.

Die Position der Vorder- und Rückseite variiert je nach Umgebung und kann etwas unklar sein, da die Ringe und die Mittelbeleuchtung (BBS) oft die gesamte Länge abdecken, aber in den Umgebungen Big Mirror, Default und Triangle:

- Center Lights (BBS) scheint am weitesten hinten zu sein,
- Dann hinten oben,
- Dann Seiten Laser,
- Zum Schluss erscheinen die Ringe, die dem Spieler am nächsten sind.

Beispiele:

- Mehrere deutlich getimte Beispiele ab ~0:18:  
  [Streamable](https://streamable.com/zx1sf) | [BeatSaver](https://beatsaver.com/beatmap/5bb2)
- Ein härteres Beispiel bei ~1:33:  
  [Streamable](https://streamable.com/7tk24) | [BeatSaver](https://beatsaver.com/beatmap/44f4)

### Trommeln

In vielen Umgebungen ähneln die Laserblitze der Geschwindigkeit 0, wenn sie für kurze Zeiträume unterbrochen von Pausen versetzt werden. Wenn du ein solches Muster für längere Zeit beibehältst, werden die Laser vage an rollende Trommelstöcke erinnern, was in anderen Kontexten nützlich ist, aber weniger für Trommeln.

Mische Back-Top oder andere kompatible Lichttypen ein, um die Geschwindigkeit der Rolle zu kontrollieren und zu steuern, auf welcher "Hand" jede Rolle endet, wie es der Musik angemessen erscheint.

- Beispiele bei ~2:23:  
  [Streamable](https://streamable.com/0qsto) | [BeatSaver](https://beatsaver.com/beatmap/7be2)

### "Singende" Innenringe

Wenn du den Innenring-Zoom mit unterschiedlichen Frequenzen (~1/4-~1/16 je nach Tonhöhe und Tempo) stroboskopierst, kannst du einen Effekt erzeugen, bei dem die inneren Ringe die Gesangsmelodie zu "singen" scheinen.

Von den Umgebungen des Basisspiels funktioniert dies am besten im DefaultEnvironment, da die inneren Ringe des TriangleEnvironment eine weniger geeignete Form für diesen Zweck haben haben und die inneren Ringe der Umgebung "Nizza" zu schwer zu beleuchten sind, um den Effekt wahrnehmbar zu machen.

Eine ausreichende innere Ringbeleuchtung in DefaultEnvironment zu erhalten ist nicht schwierig, aber du solltest idealerweise die Ring Lichter, Center Lights (BBS) oder beides für die Dauer des Effekts eingeschaltet lassen, da eine dynamischere Beleuchtung dazu neigt, diesen zu verdecken. Vermeide auch die Verwendung von Ringdrehungen während der gesamten Dauer, da der Effekt nahezu unmerklich wird, während die inneren Ringe in Bewegung sind.

- Beispiele bei ~0:30, ~1:39, and ~2:20:  
  [Streamable](https://youtu.be/YqM_eXIh2Sg) | [BeatSaver](https://beatsaver.com/beatmap/7be1)

### Wind-Up, Wind-down

Das allmählich abnehmende/steigende Intervall für die Laserdrehungen eignet sich hervorragend für Auf-/Abwickelgeräusche.

Beginne zum Beispiel bei 1/16, 1/17, 1/18... 1/32, oder sogar bis zu 1/64, wenn das Tempo es zulässt (Vorsicht vor seltsamen Artefakten bei typischen Geschwindigkeiten). Je nachdem worauf die Musik hinausläuft, kannst du sie dort mit einem rotierenden Laser beenden(Es sieht so aus, als ob der Schwung aus der Drehung auf die Rotation übertragen wird), usw. Wenn du zu einem Bass-Treffer aufziehst und anschließend eine kürzere Drehung in die entgegengesetzte Richtung und mit niedrigeren Geschwindigkeiten durchführst, sieht es so aus, als ob der sich drehende Leuchtturm auf eine Art Wand trifft, den größten Teil seines Schwungs verliert und zurückprallt.

Die genauen Start- und Endintervalle (beim Intervallwechsel zwischen den Ereignissen) sollten je nach Art und Dauer des zugehörigen Klangs angepasst werden. Denke daran, dass du die Intervalle auf Dezimalwerte einstellen kannst, um eine Änderung von 0,5 (z. B.) bei jedem Ereignis zu erreichen.

- Wind-Down Beispiel bei ~1:03, Wind-Up mit Bounce Back bei ~2:18:  
  [Streamable](https://streamable.com/zx1sf) | [BeatSaver](https://beatsaver.com/beatmap/5bb2)

## Credits

Der Inhalt dieser Seite wurde verfasst von [LittleAsi](./mapping-credits.md#littleasi), [Puds](./mapping-credits.md#puds), [Skeelie](./mapping-credits.md#skeelie), und [Bullet](./mapping-credits.md#bullet).
