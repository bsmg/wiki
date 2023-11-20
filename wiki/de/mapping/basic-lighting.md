---
prev: false
next: false
description: Lerne, wie du deine Map manuell zum leuchten bringen kannst!
---

# Lighting-Grundlagen

_Machen Beat Saber zu einem helleren Ort, indem Du Deine Maps manuell beleuchtest._

- [Glossar der Begriffe](./glossary.md)

---

Jede Karte muss eine Art von Beleuchtung haben. Wenn Du die Dir zur Verfügung stehenden Werkzeuge kennst, kann eine einfache manuelle Beleuchtung sehr einfach sein. [Dieser Link](https://streamable.com/s/x7zj0/vrugyj) ist ein Videobeispiel für eine sehr einfache manuelle Beleuchtung

::: tip HINWEIS
Das Beispiel verwendet [Map Farbe überschreiben](#map-farbe-uberschreiben). Du musst kein AaltopahWi oder Skeelie sein, um tolle Beleuchtung zu machen!
:::

## Beleuchtungsarten

Die verfügbaren Beleuchtungstypen sind in jeder der eingebauten Spielumgebungen gleich, Diese können sich jedoch an leicht unterschiedlichen Positionen befinden oder in einigen Fällen nicht vorhanden sein.

- **Zentrumslichter:** Allgemeine Lichter entlang der Seite der Schiene, unterhalb der Schiene und manchmal ein Chevron an der Rückseite der Schiene. Manchmal auch "Bottom/Back/Side"- oder "BBS"-Leuchten genannt.
- **Seiten/Aufsatzlaser:** Sätze von rotierenden Lasern an den Seiten der Strecke oder oberhalb/unterhalb der Strecke, je nachdem, welche Umgebung Du ausgewählt hast. Die Rotation wird mit der Funktion Lasergeschwindigkeit eingestellt.
- **Hintergrundlaser:** Statische Laser, oft in einem "X"-Muster am hinteren Teil der Strecke, hinter dem Chevron.
- **Ringlichter:** Lichter, die an der Innenseite der großen Außenringe angebracht sind, die sich in fast allen Umgebungen drehen.
- **Ringdrehungen:** Wird verwendet, um Bewegung in den Ringen zu erzeugen. In Umgebungen mit einem inneren und einem äußeren Ring, beide Ringe drehen sich gemeinsam.
- **Ring Zooms:** Wird verwendet, um den inneren Ring in Umgebungen, die ihn haben, zu zoomen und zu entzoomen. Hat keinen Einfluss auf den Außenring.
- **Lasergeschwindigkeit:** Ändert die Geschwindigkeit der Rotation des Seitenlasers von stationär (0) bis sehr schnell (20). Unabhängig für den rechten und linken Seitenlaser einstellen. Back-Top Laser bewegen sich nicht. Die Lasergeschwindigkeit steigt linear an, so dass **2** doppelt so schnell ist wie **1** und **5** ist fünfmal so schnell wie **1**.
- **Boost-Ereignis:** Ändert Beleuchtungsfarben zwischen zwei Farbpaaren. Aus verwendet er das erste Paar von Farben. An verwendet er das zweite (Boost-)Farbpaar. Für dieses Ereignis gibt es keine Überblend- oder Blitzoption.

## Lighting Events

Jeder Beleuchtungstyp kann vier verschiedene Beleuchtungsereignisse nutzen.

- **An:** Schaltet ein Licht ein, das eingeschaltet bleibt, bis du einen anderen Ereignistyp platzierst.
- **Aus:** Das Ausschalten eines Lichts kann die gleiche Wirkung haben wie das Einschalten, oder sogar mehr.
- **Blinken:** Blinkt kurz heller als ein Standard-Ereignis "Ein" und bleibt dann an, bis du einen anderen Ereignistyp platzierst.
- **Abblenden:** Blinkt kurz heller als ein Standard "Ein"-Ereignis und wird dann nach ein paar Sekunden ausgeblendet.

::: warning HINWEIS  
Es ist nicht möglich, die Dauer einer Ausblendung zu steuern oder eine Einblendung mit Standardbeleuchtung zu verwenden. Für benutzerdefinierte Überblendzeiten ist Chroma erforderlich, das im Abschnitt "Erweiterte Beleuchtung" (Kommt bald) behandelt wird.
:::

## Bewährte Praktiken & Techniken

> "The only bad lights are **NO** lights.... or lightmap."  
> ~ Skeelie

Beleuchtung ist eine Kunst, was bedeutet, dass sie viel subjektiver ist als Mapping. Es gibt relativ wenige Best Practices für den Einstieg und eine einfache manuelle Beleuchtung ist fast unmöglich, schlecht zu machen.

**TranquillizeMe** hat ein Beleuchtungs-Tutorial erstellt, [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc), in dem nützliche Beleuchtungstechniken und allgemeine Tipps zur Beleuchtung beschrieben werden.

::: warning HINWEIS  
Die Beleuchtungsvorschau ist in den derzeit verfügbaren Editoren nicht realistisch, daher ist es wichtig, dass du deine Lichter oft im Spiel überprüfst. Unter [Vorschau der Lichter](#vorschau-der-lichter) findest du einige Tools, die dir dabei helfen können.
:::

### Tastenbelegung

Jeder Map-Editor handhabt die Beleuchtung anders, daher sollte man sich mit den Tastenbelegungen und der Funktionsweise der Platzierung im Editor der Wahl vertraut machen. Die Tastenkombinationen für die Beleuchtung variieren je nach Editor. Konsultiere den User Guide oder die Readme Datei des Editors oder lies diese hilfreiche Liste [Editorübergreifende Tastaturbelegungen](./editor-keybinds.md).

### Licht-Ereignisse zuweisen

Mapper, die ihre erste Map beleuchten, sollten damit beginnen, bestimmten [Beleuchtungstypen](#beleuchtungsarten) Instrumenten zuzuordnen, und dann mit zunehmender Erfahrung von dort aus weitergehen. Diese Methode führt normalerweise nicht zu den aufregendsten Shows, aber es ist schwer, es zu vermasseln. Das könnte so aussehen:

- **Track Lights:** Bass oder Kick Drum
- **Lasers:** Melodie
- **Ring Lights:** Synth A oder Cymbals
- **Ring Zoom:** Synth B

Sobald diese Art von Grundstruktur vorhanden ist und du mit der Funktionsweise vertraut bist, kannst du darüber nachdenken, an welchen Stellen du etwas ändern möchtest, um Akzente zu setzen. Die Festlegung eines strengen Musters ist notwendig, um eine Wirkung zu erzielen, wenn du eine Änderung vornimmst; wenn du alles betonst, betonst du nichts(das gilt auch für die Blockplatzierung!).

#### Ein Beispiel von Lighting Mentor, LittleAsi

> Normalerweise beleuchte ich die Melodie mit allen drei Lasern (Gesang und Instrumental auf verschiedenen Farben, oder primäres Instrumental und Akzente auf einer anderen Farbe), das Schlagzeug auf den Ringlichtern und entweder den Bass oder etwas Harmonisches wie Synthesizer auf dem Bottom/Back/Side (BBS) (manchmal ein bisschen viel, da die BBS-Intensität erhöht wurde). Wenn das Schlagzeug zu aufwendig ist, um es allein auf die Ringleuchten zu packen, oder es nichts anderes Passendes für die BBS gibt, verschiebe ich die Kick Drum auf die BBS. Wenn die Trommeln wirklich dominant sind, würde ich vielleicht den Back-Top-Laser auf Snare-Betrieb setzen, um die Ringlichter den Becken zu widmen. Die zahlreichen Möglichkeiten, das Verhalten und Aussehen von Lasern zu verändern, machen sie jedoch zum besten Kandidaten für die Melodieverfolgung. Ich habe jedoch Laser der Geschwindigkeit 0 für die geschlossene Hi-Hat und verschiedene Geschwindigkeiten für die offene Hi-Hat und Becken-Crashs verwendet. Es muss also definitiv nicht auf eine bestimmte Art und Weise sein (nur intern konsistent).

### Lasergeschwindigkeit zurücksetzen

Wenn du die gleiche Lasergeschwindigkeit zweimal hintereinander anwendest, wird sie auf eine zufällige Position zurückgesetzt. Wenn du z. B. bei jedem Snare-Treffer die Geschwindigkeit 1 einstellst, werden die Laserpositionen im Takt der Snare zufällig verändert, ohne dass sich ihre Rotationsgeschwindigkeit ändert.

Wenn du die Lasergeschwindigkeit nicht zurücksetzt, dreht er sich so lange konstant mit dieser Geschwindigkeit, bis sie geändert wird.

### Off Event Placement

Die Sounds innerhalb eines Songs haben selten einen genauen Endpunkt, so dass es nicht immer einen "richtigen" Zeitpunkt gibt, um das `Off` Ereignis zu platzieren. Achte darauf, wann du Lichter, die mit bestimmten Sounds oder Instrumenten verbunden sind, ausschaltest, und wende diese Entscheidungen konsequent im gesamten Song an.

Sei vorsichtig, wenn du Ereignisse genau in der Mitte von zwei Leuchten absetzt, da dies manchmal einen unbeabsichtigten Stroboskopeffekt erzeugen kann.

## Standard Umgebungen

In Beat Saber gibt es verschiedene eingebaute Umgebungen, die Teil des Basisspiels sind und mit wenigen Klicks genutzt werden können.

::: warning HINWEIS
Von der Community erstellte benutzerdefinierte Umgebungsmodelle (Plattformen) existieren, erfordern jedoch die Mod "Custom Platforms", die derzeit nicht über den Mod Assistant oder BSManager verfügbar ist. Eine Beta-Version kann im `#pc-mods` Kanal des BSMG-Discord verfügbar sein.
:::

Die Grundstruktur jeder Umgebung ist meist gleich. Im [Mediocre Map Assistant 2](./mediocre-map-assistant.md) Editor sieht die Beleuchtungsspur wie folgt aus:

::: center
![Screenshot of the MMA2 lighting track from the top down](/.assets/images/mapping/mma2-lighting-track.jpg)
:::

### Umgebungs-Vorschau

|            Video und Screenshot (Anklicken zum Öffnen in voller Größe)             | Umgebung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       ![Bild der Standard Umgebung](/.assets/images/mapping/default_env.jpg)       | **Das erste (Default) Environment**<br />**Info.dat Name:** `DefaultEnvironment` <br />**Standardfarben:** Rot & Blau<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (Quadrat)<br />**Inner Ring:** :white_check_mark: (Quadrat)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Ab 1.6 Back Top Laser sind unter den Track Lasern <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/iqo91i), [YouTube](https://youtu.be/wPejfEKf7zo)                                                                                                                                                                        |
|      ![Bild der Ursprungs Umgebung](/.assets/images/mapping/origins_env.jpg)       | **Origins Environment**<br />**Info.dat Name:** `OriginsEnvironment`<br />**Standardfarben:** Gelb & Pinke Noten, Blau & Hellblaue Lichter<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark:<br />**Track Ring:** :white_check_mark:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br /> **Video Vorschau:** [Streamable](https://streamable.com/okmjdo), [YouTube](https://youtu.be/SCKHRwOTuG8)                                                                                                                                                                                                                                                                         |
|      ![Bild der Triangle Umgebung](/.assets/images/mapping/triangle_env.jpg)       | **Triangle Environment**<br />**Info.dat Name:** `TriangleEnvironment`<br />**Standardfarben:** Rot & Blau<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (links & rechts)<br />**Track Ring:** :white_check_mark: (kompaktes Quadrat) <br />**Inner Ring:** :white_check_mark: (triangle)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Ab 1.6 Back Top Laser sind unter den Track Lasern <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/ejjr22), [YouTube](https://youtu.be/BDntVrG3QpM)                                                                                                                                                                       |
|          ![Bild der Nice Umgebung](/.assets/images/mapping/nice_env.jpg)           | **Nice Environment**<br />**Info.dat Name:** `NiceEnvironment`<br />**Standardfarben:** Rot & Blau<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Oben & Unten)<br />**Track Ring:** :white_check_mark: (Kreis)<br />**Inner Ring:** :white_check_mark: (Form)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Ab 1.6 Back Top Laser sind unter den Track Lasern <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/plqtv0), [YouTube](https://youtu.be/-0sOBcO4oUs)                                                                                                                                                                                                  |
|    ![Bild der Big Mirror Umgebung](/.assets/images/mapping/big-mirror_env.jpg)     | **Big Mirror Environment**<br />**Info.dat Name:** `BigMirrorEnvironment`<br />**Standardfarben:** Rot & Blau<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :white_check_mark: (Quadrat)<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/cbw6cj), [YouTube](https://youtu.be/dqMo03TLLtk)                                                                                                                                                                                                                                                                             |
|   ![Bild der Imagine Dragons Umgebung](/.assets/images/mapping/dragons_env.jpg)    | **Imagine Dragons Environment**<br />**Info.dat Name:** `DragonsEnvironment`<br />**Standardfarben:** Rot & Blau<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :white_check_mark: (Quadrat)<br />**Inner Ring:** :white_check_mark: (Spirale)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Die Back Top Laserposition sind die beiden Schienen an den äußersten Rändern des Bildschirms. Es leuchtet immer die entgegengesetzte Farbe dessen, was du eingestellt hast. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/a0rw2o), [YouTube](https://youtu.be/L-9gTWGY_FQ)                                                   |
|           ![Bild der K/DA Umgebung](/.assets/images/mapping/kda_env.jpg)           | **K/DA Environment**<br />**Info.dat Name:** `KDAEnvironment`<br />**Default Colors:** Orange & Lila<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Hinweis:** Die Ringlicht Position beleuchtet die fünf Schienen an der Oberseite. Die Lichter in der Mitte der Pfeile gehen nie aus. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/dibv17), [YouTube](https://youtu.be/ZWfZQfx5MqY)                                                                                                                                                                                   |
|    ![Bild der Monstercat Umgebung](/.assets/images/mapping/monstercat_env.jpg)     | **Monstercat Environment**<br />**Info.dat Name:** `MonstercatEnvironment`<br />**Standardfarben:** Rot & Blau<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (Quadrat)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Ab 1.6 befinden sich die Back-Top-Laser unterhalb der Track-Laser. Die Ringlichter beleuchten die fünf Schienen an der Oberseite. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/9g84m6), [YouTube](https://youtu.be/QSYw41_1EmM)                                                                                                    |
|     ![Bild der Crab Rave Umgebung](/.assets/images/mapping/crab-rave_env.jpg)      | **Crab Rave Environment**<br />**Info.dat Name:** `CrabRaveEnvironment`<br />**Standardfarben:** Grün & Blau<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (Quadrat)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Ab 1.6 befinden sich die Back-Top-Laser unterhalb der Track-Laser. Die Ringlichter beleuchten die fünf Schienen an der Oberseite. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/5d46nv), [YouTube](https://youtu.be/AAPtI8SAE6s)                                                                                                      |
| ![Bild von Panic at the Disco! environment](/.assets/images/mapping/panic_env.jpg) | **Panic at the Disco! Environment**<br />**Info.dat Name:** `PanicEnvironment`<br />**Standardfarben:** Rot & Blau<br />**Center Lighting:** :white_check_mark: (& windows)<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :white_check_mark: (Spirale)<br />**Inner Ring:** :white_check_mark: (Spirale)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Ringlichter sind in dieser Umgebung viel heller als in anderen. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/8lvbda), [YouTube](https://youtu.be/hOhOFgvxSrU)                                                                                                                                                 |
|     ![Bild der Rocket League Umgebung](/.assets/images/mapping/rocket_env.jpg)     | **Rocket League Environment**<br />**Info.dat Name:** `RocketEnvironment`<br />**Standardfarben:** Orange & Blau<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x: <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/qfgemd), [YouTube](https://youtu.be/9lX5nOhIv8o)                                                                                                                                                                                                                                                                                                                  |
|     ![Bild der Green Day Umgebung](/.assets/images/mapping/green-day_env.jpg)      | **Green Day Environment**<br />**Info.dat Name:** `GreenDayEnvironment`<br />**Standardfarben:** Grün & Türkis<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :white_check_mark: (Spirale)<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Hinweis:** "Green Day" Text in der Mitte schaltet sich nie aus. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/npgn2p), [YouTube](https://youtu.be/jkaeINyLMo0)                                                                                                                                                                                                                    |
| ![Bild der Green Day Grenade Umgebung](/.assets/images/mapping/gd-grenade_env.jpg) | **Green Day Grenade Environment**<br />**Info.dat Name:** `GreenDayGrenadeEnvironment`<br />**Default Colors:** Grün & Türkis<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :x:<br />**Inner Ring:** :x: <br />**Equalizer:** :x:<br />**Hinweis:** Grenade und "Green Day" Text in der Mitte schaltet sich nie aus. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/ew43z1), [YouTube](https://youtu.be/ocnD-WdrrOw)                                                                                                                                                                                                                 |
|     ![Bild der Timmaland Umgebung](/.assets/images/mapping/timbaland_env.jpg)      | **Timbaland Environment**<br />**Info.dat Name:** `TimbalandEnvironment`<br />**Standardfarben:** Grau & Blaue Noten, Blau & Blaue Lichter(Selbe Farben)<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts Ringe)<br />**Track Ring:** :white_check_mark: (Rechteck)<br />**Inner Ring:** :white_check_mark: (Rechteck)<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** "Timbaland" Schriftzug an den Seiten schaltet sich nie aus. Die Lasergeschwindigkeit wirkt sich auf die Back-Top Laser am linken und rechten Ring aus. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/2fjejm), [YouTube](https://youtu.be/vLYybHUh5Nw)                        |
|       ![Bild der FitBeat Umgebung](/.assets/images/mapping/fitbeat_env.jpg)        | **FitBeat Environment**<br />**Info.dat Name:** `FitBeatEnvironment`<br />**Standardfarben:** Gelb & Pinke Noten, Orange & Blaue Lichter <br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :white_check_mark: (Außenlaser) <br />**Inner Ring:** :white_check_mark: (Spirale) <br />**Equalizer:** :white_check_mark: <br />**Hinweis:** Back Top Lasers leuchten in der entgegengesetzten Farbe der eingestellten Farbe. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/75sxr3), [YouTube](https://youtu.be/FA0ZjR1_3LA)                                                                                                               |
|   ![Bild der Linkin Park Umgebung](/.assets/images/mapping/linkin-park_env.jpg)    | **Linkin Park Environment**<br />**Info.dat Name:** `LinkinParkEnvironment`<br />**Standardfarben:** Rot & Blau-Graue Noten, Beige & Weiße Lichter<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :x: <br />**Inner Ring:** :x: <br />**Equalizer:** :white_check_mark: (An der Seitenwand) <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/kn47ci), [YouTube](https://youtu.be/BhAIQ6FQunw)                                                                                                                                                                                                                                           |
|         ![Bild der BTS Park Umgebung](/.assets/images/mapping/bts_env.jpg)         | **BTS Environment**<br />**Info.dat Name:** `BTSEnvironment`<br />**Standardfarben:** Pink & Lila Noten, Pink & Lila Lichter<br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: (Links & Rechts)<br />**Track Ring:** :white_check_mark: (Hintergrundpfeiler) <br />**Inner Ring:** :white_check_mark: (Schienenstützen) <br />**Equalizer:** :x: <br />**Hinweis:** Das BTS-Logo in der Mitte schaltet sich nie aus.<br /><br />**Video Vorschau:** [Streamable](https://streamable.com/458qt5), [YouTube](https://youtu.be/jkTUvCfH0yE)                                                                                                                                                            |
|  ![Bild der Glass Desert Umgebung](/.assets/images/mapping/glass-desert_env.jpg)   | **Glass Desert Environment**<br />**Info.dat Name:** `GlassDesertEnvironment`<br />**Standardfarben:** Gelb & Pinke Noten, Blau & Hellblaue Lichter <br />**Center Lighting:** :white_check_mark:<br />**Laser:** :white_check_mark: <br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark:<br />**Hinweis:** Dies ist die erste 360&deg; Umgebung. 360-Levels MÜSSEN dies verwenden und für Standard-Levels ist es nicht verwendbar. Die Ringlichtposition steuern die horizontale Außenschiene. Die Back Top Laserposition steuert die sechs Schienen an der Oberseite. <br /><br />**Video Vorschau:** [Streamable](https://streamable.com/8hlr6x), [YouTube](https://youtu.be/WGSxgVvazNM) |

### Einstellen deiner Umgebung

Neue Standardumgebungen werden relativ häufig verfügbar, was bedeutet, dass Map-Editoren nicht immer die vollständige Liste zur Verfügung haben. Wenn die Umgebung, die du verwenden willst, nicht in den Einstellungen deiner bevorzugten Editors enthalten ist, musst du deine `Info.dat` Datei bearbeiten, um den Umgebungsnamen hinzuzufügen.

1. Entscheide , welche Umgebung du verwenden willst, und kopiere dann den Namen der `Info.dat` aus dem obigen Abschnitt [Umgebungsvorschauen](#umgebungs-vorschau).
2. Öffne deine `Info.dat`-Datei in einem Texteditor deiner Wahl.
3. Scrolle nach unten bis zum `"_environmentName":`Abschnitt.
4. Füge den Namen ein, den du in Schritt 1 kopiert hast.

> **HINWEIS:** Du kannst in diesem Feld keine eigene Plattform verwenden. Dies wird in [Erweiterte Beleuchtung](./advanced-lighting.md#benutzerdefinierte-umgebung) behandelt.

## Map Farbe überschreiben

Du kannst dein eigenes Farbschema für die Map im Game erzwingen, solange der Benutzer die SongCore-Mod installiert und die Option `Enable Custom Song Colors` in den Mod-Einstellungen aktiviert hat.

Seit Beat Saber Version 1.4 können Benutzer die Rot/Grün/Blau (RGB)-Farben von Noten, Lichtern und Wänden für ihr Spiel einstellen. Sie werden jedoch durch die in der `Info.dat` definierten Farben überschrieben, wenn der Benutzer die Option `Benutzerdefinierte Songfarben aktivieren` aktiviert hat.

::: tip TIPP
Bei der Auswahl von Farbüberlagerungen für die Noten. Es wird **HÖCHSTENS** empfohlen, rötliche/warme/aggressive Farben auf der linken Seite und bläuliche/kalte/weiche Farben auf der rechten Seite zu verwenden, um die Spieler nicht zu verwirren.
:::

Unter [Umgebungs-Standardfarben](./lighting-defaults.md) findest du eine Liste der in den Umgebungen verwendeten Standardfarben.

[Beatmapper](./#beatmapper-app), [ChroMapper](./#chromapper-coming-soon), und [MMA2](./#mediocre-map-assistant-2) unterstützen nativ Farb-Überschreibungen. Weitere Informationen findest du in den jeweiligen Handbüchern.

### Manuelles Hinzufügen von Farb-Überschreibungen

1. Entscheide, welche RGB-Farben die Notizen und/oder Lichter und/oder Wände haben sollen. Verwende ein Farbschema-Dienstprogramm wie [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF), um komplementäre Farben zu finden.
   - Deine Rot-, Grün- und Blauwerte müssen von der normalen Skala 0-255 in die Skala 0-1 umgewandelt werden. Verwende eine Website wie [EasyRGB](https://www.easyrgb.com/en/convert.php), um die Werte umzurechnen.
2. Öffnen die `Info.dat` Datei im Texteditor deiner Wahl
3. Blättere nach unten zum `"_customData": {` Abschnitt der Schwierigkeit, die du einfärben möchtest.
   - Die Verwendung der globalen `"_customData": {` außerhalb des `"_difficultyBeatmapSets": ` Arrays funktioniert möglicherweise nicht wie erwartet.
4. Füge die Codeblöcke ein, die den Farben entsprechen, die du innerhalb der geschweiften Klammern `_customData` erzwingen möchtest (`{` und `}`), und ersetze dann die Werte `"r":`, `"g":` und `"b":` durch die in Schritt 1 gewählten Werte.
   - Die Werte `"r":` und `"g":` **müssen** mit Kommas versehen werden.

In den Zeilen 29-60 und 69-100 dieses [Pastebin-Clips](https://pastebin.com/x9zEiHxR) findest du ein Beispiel für diese Codeblöcke in Aktion in einer `.DAT` Datei.

## Vorschau der Lichter

Diese Werkzeuge hilft PC Beat Saber Spielern, eine genauere Vorschau ihrer Beleuchtung zu erhalten. Die meisten Editoren zeigen keine naturgetreuen Lichteffekte.

### In-Game mit FPFC

First Person Flying Controller (FPFC) ist ein Startparameter, der sowohl von Steam- als auch von Oculus-Benutzern verwendet werden kann. FPFC öffnet eine Instanz von Beat Saber auf deinem Desktop und erlaubt dir, es mit deiner Tastatur und Maus zu steuern. Du benötigst die SiraUtil Mod, um während der Wiedergabe einer Karte interagieren zu können.

Damit kannst du mit WASD in der Karte "herumfliegen", mit der Taste <kbd>F2</kbd> das Pausenmenü öffnen oder mit der Taste <kbd>ESC</kbd> das Level verlassen (andernfalls musst du den Song zu Ende spielen).

Installiere SiraUtil von Mod Assistant oder BSManager und führe Beat Saber aus, um eine config json-Datei zu erstellen. Bearbeite die Datei `SiraUtil.json` in deinem Ordner `UserData` und ändere `"Enabled": false` in `"Enabled": true` unter FPFCToggle und SongControl und folde dann den unten aufgeführten speicherplattenspezifischen Schritten.

![SiraUtil JSON Setting](/.assets/images/mapping/sirautil-FPFC.png)

**Für Steam-Benutzer:** Öffne die Spieleigenschaften und fügen `fpfc` zu den Steam Startoptionen hinzu. ![FPFC Startoptionen](/.assets/images/mapping/fpfc.png)

**Für Oculus Besitzer:**

1. Klicke mit der rechten Maustaste auf Beat Saber.exe und erstelle eine Verknüpfung.
2. Bearbeite das Ziel, um "fpfc" am Ende hinzuzufügen. Zum Beispiel: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

Nach der Installation der Mods und dem Hinzufügen des Startparameters kannst du dich nun in einer Karte bewegen und pausieren. Die Umschalttaste zum Umschalten zwischen Headset- und Maus-/Tastatursteuerung ist <kbd>G</kbd>.

:::warning HINWEIS

- Wenn du zurück in VR gehst und das Spiel auch im Headset nicht geladen wird:

  - Drücke die Taste <kbd>G</kbd>, bis das Headset das Spiel anzeigt  
    **==ODER==**
  - Beende das Spiel, entferne die Startoption, und starte das Spiel neu.

- Wenn der Mod nicht zu funktionieren scheint, stelle sicher, dass die Einstellung "Smooth Camera" im Spiel deaktiviert ist.
  :::

### Online mit BS Viewer

Der [BS Viewer](https://skystudioapps.com/bs-viewer/) von **+1 Rabbit** ist ein Online-Tool, mit dem du bequem überprüfen kannst, wie deine Karte im Spiel aussehen könnte, ohne das Spiel zu starten. Lade einfach deine Karten ZIP auf die Website hoch und sieh dir die Vorschau an! Leider werden **IOS und Safari derzeit nicht unterstützt.**

## Credits

Die Inhalte in diesem Abschnitt wurden von [LittleAsi](./mapping-credits.md#littleasi) und [Kolezan](./mapping-credits.md#kolezan) oder von Anleitungen von [Puds](./mapping-credits.md#puds) und [MandyNasty](./mapping-credits.md#mandynasty) abgeleitet. Mit visuellen Medienbeiträgen von [Aeroluna](./mapping-credits.md#aeroluna) und [Bullet](./mapping-credits.md#bullet).
