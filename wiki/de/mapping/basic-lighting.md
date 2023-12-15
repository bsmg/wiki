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

::: tip HINWEIS Das Beispiel verwendet [Map Color Overrides](#map-color-overrides). Du musst kein AaltopahWi oder Skeelie sein, um tolle Beleuchtung zu machen! :::

## Lightable Objects

The following types of lanes exist in the Static Event System:

<!-- markdownlint-disable MD013 -->

| Object  | Description                                                                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lights  | Controls the light intensity of lights, lasers, etc. Events on these lanes have a color and a type associated. These events light up the environment, and other events would create minimal impact without lights. |
| Value   | Events on these lanes hold an integer value from 0 to 9. The classical example of this is Laser Speed, though this lane type can be used for other things, for example the pillars in Lady Gaga environment.       |
| Trigger | An event on this lane triggers a change in an object. Examples include Ring Spin and Ring Zoom.                                                                                                                    |
| Boost   | Changes lighting colors between two pairs of colors. Aus verwendet er das erste Paar von Farben. An verwendet er das zweite (Boost-)Farbpaar. There is no fade option for this effect.                             |

<!-- markdownlint-enable MD013 -->

Objects in the Group Lighting System (GLS) may have the following properties controllable:

<!-- markdownlint-disable MD013 -->

| Object      | Description                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Lights      | Controls the intensity of lights, lasers, etc., like in the Static Event System.                                                    |
| Rotation    | Unlike the randomized trigger in environments before Weave, the Group Lighting System allows for more granular control of rotation. |
| Translation | Debuting in The Weeknd environment, controls the position of an object in the environment.                                          |

<!-- markdownlint-enable MD013 -->

In environments before Weave, the set of objects controllable are generally consistent, though may be in different positions or may be missing altogether. The controllable objects are as follows:

<!-- markdownlint-disable MD013 -->

| Object          | Description                                                                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Center Lights   | Generally lights along the side of the track, underneath the track, and sometimes a chevron at the back of the track. Manchmal auch "Bottom/Back/Side"- oder "BBS"-Leuchten genannt.                                                                                                               |
| Side/Top Lasers | Sets of rotating lasers to the sides of the track or above/below the track, depending on which environment you've selected. Die Rotation wird mit der Funktion Lasergeschwindigkeit eingestellt.                                                                                                   |
| Back Lasers     | Static lasers, often in an "X" pattern at the back of the track, behind the chevron.                                                                                                                                                                                                               |
| Ring Lights     | Lights attached to the inside of the large outer rings that spin in almost all environments.                                                                                                                                                                                                       |
| Ring Spins      | Used to create movement in the rings. In environments with both an inner and an outer ring, rings spins rotate both rings together.                                                                                                                                                                |
| Ring Zooms      | Used to zoom and unzoom the inner ring in environments that have it. Hat keinen Einfluss auf den Außenring.                                                                                                                                                                                        |
| Laser Speed     | Changes the speed of the side laser rotation from stationary (0) to very fast (20). <br>Set independently for the right and left side lasers. Back-Top Laser bewegen sich nicht. Laser speed increases linearly so **2** is twice as fast as **1** and **5** is five times as fast as **1**. |
| Boost Event     | Changes lighting colors between two pairs of colors. Off uses the first pair of colors. On uses the second (boost) pair of colors. Für dieses Ereignis gibt es keine Überblend- oder Blitzoption.                                                                                                  |

<!-- markdownlint-enable MD013 -->

In environments that use the v3 Group Lighting System (Weave and later), the set of objects controllable are unique to each environment.

## Lighting Events

Lighting has went through several revisions. Originally, only the Static Event System is available. v3 introduces the Group Lighting System, usable with specific environments.

### Static Event System

There are two major revisions of the Static Event System.

Lighting v1 is the version of lighting that has general support from community editors. It supports the following light events:

| Event | Description                                                                                               |
| ----- | --------------------------------------------------------------------------------------------------------- |
| On    | Turns a light on that will stay on until you place a different event type.                                |
| Off   | Turns a light off that will stay off until you place a different event type.                              |
| Flash | Briefly flashes brighter than a standard "on" event then stays on until you place a different event type. |
| Fade  | Briefly flashes brighter than a standard "on" event then fades to off after a couple of seconds.          |

A light event have one of three available colors associated. Prior to v3.1, only two colors are available. v3.1 introduced a third color; it is currently white for all built-in environments.

Lighting v2 fully overhauls the lighting system. The official editor is generally used to create v2 lights; support by community editors are currently under development. While v2 can be used with all classic environments, similar to v1, the four-event system has been replaced with only two types of events:

<!-- markdownlint-disable MD013 -->

| Event  | Description                                                                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Static | Sets a light to a specified level. The light will stay at the level, until the next event.                                                                     |
| Fade   | Fades a light to a specified level. The fade starts at the event immediately before, or at the start of the song if there is none, and ends on the fade event. |

<!-- markdownlint-enable MD013 -->

The level of a light ranges from 0 to 120. 0 means no light, 100 is the level of a v1 On event, and 120 is the maximum.

### Group Lighting System (v3)

v3 environments, in addition to Static Event System objects, introduces a new class of objects, hereby known as Group Lighting System (GLS) objects, that offers more granular control.

A GLS object can have one or more of lights, rotation and translation being available for control. In addition, a GLS object can have multiple segments, and each segment can be controlled individually.

Events in v3 must reside in groups. Each group can contain one or more lanes, each lane controlling one or more segments, on which events are placed.

The Official Editor features two views: the top view in which all groups for all objects are visible, and the group view showing individual events in a single group. The group view is entered by clicking a group, and can be exited by pressing <kbd>Esc</kbd>.

A group defaults to controlling all lights at once. If you want to control individual lights, you can simply hold <kbd>Shift</kbd> and click the `+` button near the top right menu.

Light events in v3 are mostly identical to those of v2, with a few changes and additions. Firstly, the intensity of a light is no longer limited to 120 maximum, and can go above it. Another is the addition of strobing, allowing placement of a flickering light with a single event.

v3 introduces rotation events, allowing control of an object's rotation angle. Rotation events cannot be grouped together with light events. When a rotation event is placed, the object will rotate starting at the rotation event immediately before (the start of the song if none), and completes at the time of the event, similar to a fade event. A rotation event has the following parameters:

<!-- markdownlint-disable MD013 -->

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rotation Angle | Specifies the angle the object will finish at                                                                                                                                                                                                                                                                                                                        |
| Loop Count     | Specifies the spin direction to be clockwise, counterclockwise, or decided automatically                                                                                                                                                                                                                                                                             |
| Easing         | Specifies the rate of change over time. Visit [easings.net](https://easings.net/) for a visualization of the Quad options. <br>`None` - rotates instantly<br>`Linear` - rotates at a constant speed<br>`InQuad` - starts slow and ends fast<br>`OutQuad` - starts fast and ends slow<br>`InOutQuad` - both accelerates and decelerates |
| Extension      | Useable with light and rotation events it keeps the intensity of a light or the angle of a rotation fixed until this event.                                                                                                                                                                                                                                          |

<!-- markdownlint-enable MD013 -->

## Bewährte Praktiken & Techniken

> "The only bad lights are **NO** lights.... or lightmap."  
> ~ Skeelie

Beleuchtung ist eine Kunst, was bedeutet, dass sie viel subjektiver ist als Mapping. Es gibt relativ wenige Best Practices für den Einstieg und eine einfache manuelle Beleuchtung ist fast unmöglich, schlecht zu machen.

**TranquillizeMe** hat ein Beleuchtungs-Tutorial erstellt, [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc), in dem nützliche Beleuchtungstechniken und allgemeine Tipps zur Beleuchtung beschrieben werden.

::: warning NOTE Lighting previews are not realistic in the editors currently available to the public so it's important to preview your lights in-game often. Unter [Previewing Your Lights](#vorschau-der-lichter) findest du einige Tools, die dir dabei helfen können. :::

### Tastenbelegung

Each map editor handles lighting differently so you'll want to get to know the key bindings and how placements work in your editor of choice. Die Tastenkombinationen für die Beleuchtung variieren je nach Editor. Konsultiere den User Guide oder die Readme Datei des Editors oder lies diese hilfreiche Liste [Editorübergreifende Tastaturbelegungen](./editor-keybinds.md).

### Licht-Ereignisse zuweisen

Mapper, die ihre erste Map beleuchten, sollten damit beginnen, bestimmten [Beleuchtungstypen](##beleuchtungtypen) Instrumenten zuzuordnen, und dann mit zunehmender Erfahrung von dort aus weitergehen. Diese Methode führt normalerweise nicht zu den aufregendsten Shows, aber es ist schwer, es zu vermasseln. Das könnte so aussehen:

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

::: warning HINWEIS Von der Community erstellte benutzerdefinierte Umgebungsmodelle (Plattformen) existieren, erfordern jedoch die Mod "Custom Platforms", die derzeit nicht über den Mod Assistant verfügbar ist. Eine Beta-Version kann im `#pc-mods` Kanal des BSMG-Discord verfügbar sein. :::

### Umgebungs-Vorschau

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 -->

#### Pre-Group Lighting System

<table>
<thead>
  <tr>
    <th>Video und Screenshot (Anklicken zum Öffnen in voller Größe)</th>
    <th>Umgebung</th>
  </tr>
</thead>
<tbody>
<tr><td style="text-align: center;">

![Image of Default environment](/.assets/images/mapping/default_env.jpg)

</td><td>

**The First (Default) Environment**<br />
**Info.dat Name:** `DefaultEnvironment` <br />
**Default Colors:** Red & Blue

**Lights:** Back lasers, ring lights, left & right lasers, center lights<br />
**Triggers:** Ring spin, ring zoom<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers

**Video Preview:** [YouTube](https://youtu.be/ab7kjMsIBHA)

</td></tr>
<tr><td style="text-align: center;">

![Image of Triangle environment](/.assets/images/mapping/triangle_env.jpg)

</td><td>

**Triangle Environment**<br />
**Info.dat Name:** `TriangleEnvironment`<br />
**Default Colors:** Red & Blue

**Lights:** Back lasers, ring lights, left & right lasers, center lights<br />
**Triggers:** Ring spin, ring zoom<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers

**Video Preview:** [YouTube](https://youtu.be/FhAg4Awl0k0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Nice environment](/.assets/images/mapping/nice_env.jpg)

</td><td>

**Nice Environment**<br />
**Info.dat Name:** `NiceEnvironment`<br />
**Default Colors:** Red & Blue

**Lights:** Back lasers, ring lights, bottom & top lasers, center lights<br />
**Triggers:** Ring spin, ring zoom<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers

**Video Preview:** [YouTube](https://youtu.be/LrLFf6fspiw)

</td></tr>
<tr><td style="text-align: center;">

![Image of Big Mirror environment](/.assets/images/mapping/big-mirror_env.jpg)

</td><td>

**Big Mirror Environment**<br />
**Info.dat Name:** `BigMirrorEnvironment`<br />
**Default Colors:** Red & Blue

**Lights:** Back lasers, ring lights, left & right lasers, center lights<br />
**Triggers:** Ring spin<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:

**Video Preview:** [YouTube](https://youtu.be/lmWeJL8Qxh4)

</td></tr>
<tr><td style="text-align: center;">

![Image of K/DA environment](/.assets/images/mapping/kda_env.jpg)

</td><td>

**K/DA Environment**<br />
**Info.dat Name:** `KDAEnvironment`<br />
**Default Colors:** Orange & Purple

**Lights:** Bottom & top lights, left & right lasers, center lights<br />
**Triggers:** :x:<br />
**Value controls:** Laser speed<br />
**Spectrum:** :x:<br />
**Note:** Right Lasers control the lights in the center of the arrows.

**Video Preview:** [YouTube](https://youtu.be/knXgpnW5NWQ)

</td></tr>
<tr><td style="text-align: center;">

![Image of Monstercat environment](/.assets/images/mapping/monstercat_env.jpg)

</td><td>

**Monstercat Environment**<br />
**Info.dat Name:** `MonstercatEnvironment`<br />
**Default Colors:** Red & Blue

**Lights:** Back lasers, top lights, left & right lasers, center lights<br />
**Triggers:** Ring spin<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers.

**Video Preview:** [YouTube](https://youtu.be/Er3OCUmSK-0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Crab Rave environment](/.assets/images/mapping/crab-rave_env.jpg)

</td><td>

**Crab Rave Environment**<br />
**Info.dat Name:** `CrabRaveEnvironment`<br />
**Default Colors:** Green & Blue

**Lights:** Back lasers, top lights, left & right lasers, center lights<br />
**Triggers:** Ring spin<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark: <br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers.

**Video Preview:** [YouTube](https://youtu.be/xTXHCTBYkck)

</td></tr>
<tr><td style="text-align: center;">

![Image of Imagine Dragons environment](/.assets/images/mapping/dragons_env.jpg)

</td><td>

**Imagine Dragons Environment**<br />
**Info.dat Name:** `DragonsEnvironment`<br />
**Default Colors:** Red & Blue

**Lights:** Side lights, ring lights, left & right lasers, center lights<br />
**Triggers:** Ring spin, ring zoom<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** Side lights (back top lights) always illuminate the opposite color of
what you set it.

**Video Preview:** [YouTube](https://youtu.be/tSzvvbDK71s)

</td></tr>
<tr><td style="text-align: center;">

![Image of Origins environment](/.assets/images/mapping/origins_env.jpg)

</td><td>

**Origins Environment**<br />
**Info.dat Name:** `OriginsEnvironment`<br />
**Default Colors:** Yellow & Pink notes, Blue & Light Blue lights

**Lights:** Bottom lights, ring lights, left & right lasers, center lights<br />
**Triggers:** Ring spin<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:

**Video Preview:** [YouTube](https://youtu.be/Ysvm5N9V1wU)

</td></tr>
<tr><td style="text-align: center;">

![Image of Panic! at the Disco environment](/.assets/images/mapping/panic_env.jpg)

</td><td>

**Panic! at the Disco Environment**<br />
**Info.dat Name:** `PanicEnvironment`<br />
**Default Colors:** Red & Blue

**Lights:** Bottom lights, ring lights, left & right lasers, center lights<br />
**Triggers:** Ring spin, ring zoom<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** Ring Lights are much brighter in this environment than in others.

**Video Preview:** [YouTube](https://youtu.be/2UJ8-edr4xU)

</td></tr>
<tr><td style="text-align: center;">

![Image of Rocket League environment](/.assets/images/mapping/rocket_env.jpg)

</td><td>

**Rocket League Environment**<br />
**Info.dat Name:** `RocketEnvironment`<br />
**Default Colors:** Orange & Blue

**Lights:** Back lights, bottom lights, left & right lasers, center lights<br />
**Triggers:** :x:<br />
**Value controls:** Laser speed<br />
**Spectrum:** :x:

**Video Preview:** [YouTube](https://youtu.be/glgMeDJopIM)

</td></tr>
<tr><td style="text-align: center;">

![Image of Green Day environment](/.assets/images/mapping/green-day_env.jpg)

</td><td>

**Green Day Environment**<br />
**Info.dat Name:** `GreenDayEnvironment`<br />
**Default Colors:** Green & Cyan

**Lights:** Bottom lights, ring lights, left & right lasers, center lights<br />
**Triggers:** Ring spin, ring zoom<br />
**Value controls:** Laser speed<br />
**Spectrum:** :x:<br />
**Video Preview:** [YouTube](https://youtu.be/QLw4Rg-mHKE)

</td></tr>
<tr><td style="text-align: center;">

![Image of Green Day Grenade environment](/.assets/images/mapping/gd-grenade_env.jpg)

</td><td>

**Green Day Grenade Environment**<br />
**Info.dat Name:** `GreenDayGrenadeEnvironment`<br />
**Default Colors:** Green & Cyan

**Lights:** Bottom lights, ambiance, left & right lasers, center lights<br />
**Triggers:** :x:<br />
**Value controls:** Laser speed<br />
**Spectrum:** :x:<br />
**Video Preview:** [YouTube](https://youtu.be/DIzLR65HyN0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Timbaland environment](/.assets/images/mapping/timbaland_env.jpg)

</td><td>

**Timbaland Environment**<br />
**Info.dat Name:** `TimbalandEnvironment`<br />
**Default Colors:** Grey & Blue notes, Blue & Blue lights (same colors)

**Lights:** Side lasers, intra-ring lasers, left & right ring lasers,
center lights<br />
**Triggers:** Ring spin, ring zoom<br />
**Value controls:** Side laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** "Timbaland" text on the sides never turns off.

**Video Preview:** [YouTube](https://youtu.be/ZMNrCbSxBVM)

</td></tr>
<tr><td style="text-align: center;">

![Image of FitBeat environment](/.assets/images/mapping/fitbeat_env.jpg)

</td><td>

**FitBeat Environment**<br />
**Info.dat Name:** `FitBeatEnvironment`<br />
**Default Colors:** Yellow & Pink notes, Orange & Blue lights

**Lights:** Ring lasers, outer lasers, left & right lasers, chevron<br />
**Triggers:** Spin, ring zoom<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark: <br />
**Note:** Ring lasers (back top) will illuminate the opposite color of what
you set it.

**Video Preview:** [YouTube](https://youtu.be/PNucTPiPBn8)

</td></tr>
<tr><td style="text-align: center;">

![Image of Linkin Park environment](/.assets/images/mapping/linkin-park_env.jpg)

</td><td>

**Linkin Park Environment**<br />
**Info.dat Name:** `LinkinParkEnvironment`<br />
**Default Colors:** Red & Blue-Grey notes, Beige & White lights, Orange & Blue boost lights

**Lights:** Floor lights, ceiling lights, left & right lasers, center lights<br />
**Triggers:** Laser mode<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark: (on side wall)

**Video Preview:** [YouTube](https://youtu.be/nl8_sHYnP7k) <br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/BhMQ8KS2rZk)

</td></tr>
<tr><td style="text-align: center;">

![Image of BTS environment](/.assets/images/mapping/bts_env.jpg)

</td><td>

**BTS Environment**<br />
**Info.dat Name:** `BTSEnvironment`<br />
**Default Colors:** Pink & Purple notes, Pink & Purple lights, Light Pink & Light Blue boost lights

**Lights:** Logo, center lasers, left and right lasers, runway<br />
**Triggers:** Tower spin, pillar control<br />
**Value controls:** Laser speed<br />
**Spectrum:** :x:

**Video Preview:** [YouTube](https://youtu.be/HrGK2puKBhI) <br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/HYnVROsLBBs)

</td></tr>
<tr><td style="text-align: center;">

![Image of Kaleidoscope environment](/.assets/images/mapping/kaleidoscope_env.jpg)

</td><td>

**Kaleidoscope Environment**<br />
**Info.dat Name:** `KaleidoscopeEnvironment`<br />
**Default Colors:** Red & Black notes, Red & White lights, Red & Magenta boost lights

**Lights:** Back lights, center lights, left & right lights, front lights<br />
**Triggers:** Spin, zoom<br />
**Value controls:** :x:<br />
**Spectrum:** :x:

**Video Preview:** [YouTube](https://youtu.be/6zgH3QcN_T8) <br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/eZBd7-yb284)

</td></tr>
<tr><td style="text-align: center;">

![Image of Interscope environment](/.assets/images/mapping/interscope_env.jpg)

</td><td>

**Interscope Environment**<br />
**Info.dat Name:** `InterscopeEnvironment`<br />
**Default Colors:** Yellow & Pink notes, Purple & White lights, Cool Red & Cool White boost lights

**Lights:** Gates, left & right lasers<br />
**Triggers:** Laser mode, car hydraulics<br />
**Value controls:** Cars, laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Notes**: Left & right lasers and car hydraulics are extra events 6, 7, 16
and 17, respectively. Car control takes the place of ring spin.

**Video Preview:** [YouTube](https://youtu.be/pnaNPD5ljqI)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/GmJpF2VA-6E)

</td></tr>
<tr><td style="text-align: center;">

![Image of Skrillex environment](/.assets/images/mapping/skrillex_env.jpg)

</td><td>

**Skrillex Environment**<br />
**Info.dat Name:** `SkrillexEnvironment`<br />
**Default Colors:** Red & Black notes, Pink & Turquoise lights, Neon Red & Neon Green boost lights

**Lights:** Back lights, ceiling + primary ring lights, left & right lights,
floor + secondary ring lights, left & right lasers<br />
**Triggers:** Primary ring spin, secondary ring spin + laser mode<br />
**Value controls:** Laser speed<br />
**Spectrum:** :x:<br />
**Notes**: Extra events 6 and 7 control the lasers.

**Video Preview:** [YouTube](https://youtu.be/Uk0JugoZ3w4)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/-SD5F3b7Q3g)

</td></tr>
<tr><td style="text-align: center;">

![Image of Billie Eilish environment](/.assets/images/mapping/billie_env.jpg)

</td><td>

**Billie Eilish Environment**<br />
**Info.dat Name:** `BillieEnvironment`<br />
**Default Colors:** Yellow & Light Grey notes, Orange & Cream lights, Red & White Blue boost lights

**Lights:** Water channel lights, left & right rays, sun/moon,
left & right lasers<br />
**Triggers:** Rain, ray mode<br />
**Value controls:** Ray + laser speed<br />
**Spectrum:** :x:<br />
**Note:** Events 6 and 7 control extra water channel lights. Events 10 and 11
control left & right lasers.

**Video Preview:** [YouTube](https://youtu.be/R53QcGlo80Q)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/Kgm6Xn7xcNQ)

</td></tr>
<tr><td style="text-align: center;">

![Image of Spooky environment](/.assets/images/mapping/spooky_env.jpg)

</td><td>

**Spooky Environment**<br />
**Info.dat Name:** `HalloweenEnvironment`<br />
**Default Colors:** Orange & Black notes, Red & Light Blue lights, Green & Light Purple boost lights

**Lights:** Back lasers, moon, left & right lasers, walkway lights<br />
**Triggers:** :x:<br />
**Value controls:** Laser speed<br />
**Spectrum:** :x:

**Video Preview:** [YouTube](https://youtu.be/TbX3Z3mU2y8)<br />

</td></tr>
<tr><td style="text-align: center;">

![Image of Gaga environment](/.assets/images/mapping/gaga_env.jpg)

</td><td>

**Lady Gaga Environment**<br />
**Info.dat Name:** `GagaEnvironment`<br />
**Default Colors:** Pink & Green notes, Yellow & Magenta lights, Orange & Blue boost lights

**Lights:** Upper & lower auroras, tower lights, center lights<br />
**Triggers:** :x:<br />
**Value controls:** Tower coil height<br />
**Spectrum:** :x:<br />
**Notes**: Events 6, 7, 10, and 11 control additional tower lights. 16, 17,
18, and 19 control additional coil heights.

**Video Preview:** [YouTube](https://youtu.be/FRNLFW4P3RQ)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/2DJmcQjjCl0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Glass Desert environment](/.assets/images/mapping/glass-desert_env.jpg)

</td><td>

**Glass Desert Environment**<br />
**Info.dat Name:** `GlassDesertEnvironment`<br />
**Default Colors:** Yellow & Pink notes, Blue & Light Blue lights

**Lights:** Ceiling lights, back lasers, left & right lasers, chevron<br />
**Triggers:** :x:<br />
**Value controls:** Laser speed<br />
**Spectrum:** :white_check_mark:<br />
**Note:** This is the first and currently only 360&deg; environment. 360&deg;
environments can only be used with 360&deg; and 90&deg; levels.

**Video Preview:** [YouTube](https://youtu.be/K3rqWNG5pn8)

</td></tr>
</tbody>
</table>

#### Group Lighting System

<table>
<thead>
  <tr>
    <th>Video and Screenshot (click to open full size)</th>
    <th>Environment</th>
  </tr>
</thead>
<tbody>
<tr><td style="text-align: center;">

![Image of Weave environment](/.assets/images/mapping/weave_env.jpg)

</td><td>

**Weave Environment**<br />
**Info.dat Name:** `WeaveEnvironment`<br />
**Default Colors:** Red & Blue notes, Red & Blue lights, Magenta & White boost lights

**Lights:** Platform lights<br />
**Triggers:** :x:<br />
**Value controls:** :x:<br />
**GLS objects:** Back & side spotlights (light & rotation)<br />
**Spectrum:** :x:

</td></tr>
<tr><td style="text-align: center;">

![Image of Pyro environment](/.assets/images/mapping/pyro_env.jpg)

</td><td>

**Fall Out Boy Environment**<br />
**Info.dat Name:** `PyroEnvironment`<br />
**Default Colors:** Red & Yellow notes, Red & Yellow lights, Red & White boost lights

**Lights:** Video, logo, left & right projector, runway lights, ambient lights<br />
**Triggers:** :x:<br />
**Value controls:** Video clip selection<br />
**GLS objects:** Stage (light), stage-top spotlights (light & rotation),
hall-top spotlights (light & rotation), truss-mount lights (light),
side panels (light), back spotlights (light & rotation), stage-side spotlights
(light & rotation), fire (light)<br />
**Spectrum:** :x:<br />

**Note:** Fire is always colored orange. Even-numbered segments fire burst
flames (when the first segment is numbered 1), while odd-numbered segments
fires continuously burning flames. Off events turn the flames off, while on
events of any value turn flames on and fire burst flames; the color and type
(static or fade) is ignored.

Rotation can be applied to the stage, the truss lights, the side panels and
the fire in the official editor, but does not work.

</td></tr>
<tr><td style="text-align: center;">

![Image of EDM environment](/.assets/images/mapping/edm_env.jpg)

</td><td>

**EDM Environment**<br />
**Info.dat Name:** `EDMEnvironment`<br />
**Default Colors:** White & Teal notes, Green & Blue lights, Red & Magenta boost lights

**Lights:** Bottom & top lane lights, floor lights<br />
**Triggers:** :x:<br />
**Value controls:** :x:<br />
**GLS objects:** Front ring (light & rotation), top ring (light & rotation),
back rings (light & rotation), cone lasers (light & rotation), side lasers
(light & rotation)<br />
**Spectrum:** :white_check_mark:<br />
**Note:** Extra rotation-only GLS objects exist for the rings and cone lasers,
which control the rotation of them as a whole.

</td></tr>
<tr><td style="text-align: center;">

![Image of The Second environment](/.assets/images/mapping/the-second_env.jpg)

</td><td>

**The Second Environment**<br />
**Info.dat Name:** `TheSecondEnvironment`<br />
**Default Colors:** Red & Blue notes, Red & Blue lights, Magenta & Green boost lights

**Lights:** Logo, runway fences, buildings, left & right flags<br />
**Triggers:** :x:<br />
**Value controls:** Ring zoom<br />
**GLS objects:** Top & bottom lasers (light & rotation), outer rings (light &
rotation), inner rings (light & rotation), runway lights (light), spotlights
(light & rotation)<br />
**Spectrum:** :white_check_mark:<br />
**Note:** The logo resembled a birthday cake in 1.23; it is replaced with a
chevron since 1.24. The banners are only visible in 1.23, with the number
4 written on it standing for the 4th anniversary.

</td></tr>
<tr><td style="text-align: center;">

![Image of Lizzo environment](/.assets/images/mapping/lizzo_env.jpg)

</td><td>

**Lizzo Environment**<br />
**Info.dat Name:** `LizzoEnvironment`<br />
**Default Colors:** Yellow & Purple notes, Yellow & Purple lights, Pink & Blue boost lights

**Lights:** Top square, rainbow rings, runway, ambient lights, signs<br />
**Triggers:** Balloon particles<br />
**Value controls:** :x:<br />
**GLS objects:** Floor (light), top lasers (light & rotation), side
lasers (light & rotation), rainbow (light), rainbow lasers (light
& rotation), rainbow rings (rotation), ring lasers (light), stands
(light), stand lasers (light & rotation), clouds (light) <br />
**Spectrum:** :x:<br />
**Note:** Rainbow lights have a color associated with each arc. The
color of a rainbow light can only be white or that of its associated
color.

</td></tr>
<tr><td style="text-align: center;">

![Image of The Weeknd environment](/.assets/images/mapping/the-weeknd_env.jpg)

</td><td>

**The Weeknd Environment**<br />
**Info.dat Name:** `TheWeekndEnvironment`<br />
**Default Colors:** Red & Dark Blue notes, Red & Blue lights, Yellow & Sky Blue boost lights

**Lights:** Runway, ambient lights<br />
**Triggers:** :x:<br />
**Value controls:** :x:<br />
**GLS objects:** Building windows (light), center ring (light, rotation
& translation), center ring lasers (light & rotation), lane markings
(light), arrows (light & translation), side lasers (light, rotation &
translation), poles (light & translation), side rings (light, rotation
& translation), building height (translation), roof (light), far
buildings (light), side buildings (translation)<br />
**Spectrum:** :x:<br />
**Note:** Side rings have two sets of translations, one for a set of
rings as a whole and one for individual rings in a set.

</td></tr>
<tr><td style="text-align: center;">

![Image of Rock Mixtape environment](/.assets/images/mapping/rock-mixtape_env.jpg)

</td><td>

**Rock Mixtape Environment**<br />
**Info.dat Name:** `RockMixtapeEnvironment`<br />
**Default Colors:** Yellow & White notes, Red & Yellow lights, Magenta & Cyan boost lights

**Lights:** Aurora, ambient lights, back bloom<br />
**Triggers:** :x:<br />
**Value controls:** :x:<br />
**GLS objects:** Mountains (light), Rock God arms (light, rotation,
translation), Rock God face (light, translation), runway strings
(light), runway frets (light), runway dots (light), spectrogram
(light), tunnel (light & translation), spikes (light, rotation &
translation), side lasers (light, rotation & translation), back
lasers (light, rotation & translation), screens (light, rotation
& translation)<br />
**Spectrum:** :white_check_mark:<br />
**Note:** Side lasers have two objects for light and rotation but
only one for translation. Screens have two sets of rotation and
translation.

</td></tr>
<tr><td style="text-align: center;">

![Image of Dragons 2 environment](/.assets/images/mapping/dragons2_env.jpg)

</td><td>

**Imagine Dragons Environment 2**<br />
**Info.dat Name:** `Dragons2Environment`<br />
**Default Colors:** Yellow & Green notes, Green & Blue lights, Red & Yellow boost lights

**Lights:** Floor lasers, chevron, ambient lights<br />
**Triggers:** :x:<br />
**Value controls:** :x:<br />
**GLS objects:** Inner ring (light, rotation & translation), outer ring
(light, rotation & translation), lasers (light & rotation), spotlights
(light & rotation), runway lights (light), particles (light), floor
tiles (translation)<br />
**Spectrum:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

![Image of Panic 2 environment](/.assets/images/mapping/panic2_env.jpg)

</td><td>

**Panic! at the Disco Environment 2**<br />
**Info.dat Name:** `Panic2Environment`<br />
**Default Colors:** Pink & Dark Green notes, Pink & Cyan lights, Orange & Purple boost lights

**Lights:** Ambient lights<br />
**Triggers:** :x:<br />
**Value controls:** :x:<br />
**GLS objects:** Side & center cones (light, rotation & translation),
inner ring (light, rotation & translation), lasers (light, rotation &
translation), side runway lights (light & translation), inner runway
lights (light), spectrogram (light), back windows (light)<br />
**Spectrum:** :white_check_mark:<br />
**Note:** Two sets of rotation and translation exist for cones and
the inner ring.

</td></tr>
<tr><td style="text-align: center;">

![Image of Queen environment](/.assets/images/mapping/queen_env.jpg)

</td><td>

**Queen Environment**<br />
**Info.dat Name:** `QueenEnvironment`<br />
**Default Colors:** Gray & Purple notes, Gold & Cyan lights, Red & Purple
boost lights

**Lights:** Ambient lights<br />
**Triggers:** :x:<br />
**Value controls:** Silhouette<br />
**GLS objects:** Tunnel lights (light, rotation & translation),
silhouette (light & translation), back lasers (light & rotation),
top lasers (light & rotation), runway lights (light & translation),
vinyl discs (light, rotation & translation)<br />
**Spectrum:** :x:<br />
**Note:** Extra objects control rotation & translation of the back lasers as
a whole, rotation of top lasers as a whole and rotation of individual vinyl
rings.

</td></tr>
</tbody>
</table>

<!-- markdownlint-restore -->

### Einstellen deiner Umgebung

Neue Standardumgebungen werden relativ häufig verfügbar, was bedeutet, dass Map-Editoren nicht immer die vollständige Liste zur Verfügung haben. Wenn die Umgebung, die du verwenden willst, nicht in den Einstellungen deiner bevorzugten Editors enthalten ist, musst du deine `Info.dat` Datei bearbeiten, um den Umgebungsnamen hinzuzufügen.

1. Entscheide , welche Umgebung du verwenden willst, und kopiere dann den Namen der `Info.dat` aus dem obigen Abschnitt [Umgebungsvorschauen](#umgebungs-vorschau).
2. Öffne deine `Info.dat`-Datei in einem Texteditor deiner Wahl.
3. Scrolle nach unten bis zum `"_environmentName":`Abschnitt.
4. Füge den Namen ein, den du in Schritt 1 kopiert hast.

> **HINWEIS:** Du kannst in diesem Feld keine eigene Plattform verwenden. Dies wird in [Erweiterte Beleuchtung](./advanced-lighting.md###benutzerdefinierte-umgebung) behandelt.

## Map Farbe überschreiben

Du kannst dein eigenes Farbschema für die Map im Game erzwingen, solange der Benutzer die SongCore-Mod installiert und die Option `Enable Custom Song Colors` in den Mod-Einstellungen aktiviert hat.

Seit Beat Saber Version 1.4 können Benutzer die Rot/Grün/Blau (RGB)-Farben von Noten, Lichtern und Wänden für ihr Spiel einstellen. Sie werden jedoch durch die in der `Info.dat` definierten Farben überschrieben, wenn der Benutzer die Option `Benutzerdefinierte Songfarben aktivieren` aktiviert hat.

::: tip Bei der Auswahl von Farbüberlagerungen für die Noten. Es wird **HÖCHSTENS** empfohlen, rötliche/warme/aggressive Farben auf der linken Seite und bläuliche/kalte/weiche Farben auf der rechten Seite zu verwenden, um die Spieler nicht zu verwirren. :::

Unter [Umgebungs-Standardfarben](./lighting-defaults.md) findest du eine Liste der in den Umgebungen verwendeten Standardfarben.

[ChroMapper](./#chromapper), [MMA2](./#mediocre-map-assistant-2), and [Beatmapper](./#beatmapper-app), natively support color overrides. Weitere Informationen findest du in den jeweiligen Handbüchern.

### Manuelles Hinzufügen von Farb-Überschreibungen

1. Entscheide, welche RGB-Farben die Notizen und/oder Lichter und/oder Wände haben sollen. Verwende ein Farbschema-Dienstprogramm wie [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF), um komplementäre Farben zu finden.
   - Deine Rot-, Grün- und Blauwerte müssen von der normalen Skala 0-255 in die Skala 0-1 umgewandelt werden. Verwende eine Website wie [EasyRGB](https://www.easyrgb.com/en/convert.php), um die Werte umzurechnen.
2. Öffnen die `Info.dat` Datei im Texteditor deiner Wahl
3. Blättere nach unten zum `"_customData": {` Abschnitt der Schwierigkeit, die du einfärben möchtest.
   - Die Verwendung der globalen `"_customData": {` außerhalb des `"_difficultyBeatmapSets": ` Arrays funktioniert möglicherweise nicht wie erwartet.
4. Paste whichever code blocks below correspond to the colors you want to force within the `_customData` curly brackets (`{` and `}`) then replace the `"r":`, `"g":`, and `"b":` values with whatever you chose in Step 1.
   - Die Werte `"r":` und `"g":` **müssen** mit Kommas versehen werden.

In den Zeilen 29-60 und 69-100 dieses [Pastebin-Clips](https://pastebin.com/x9zEiHxR) findest du ein Beispiel für diese Codeblöcke in Aktion in einer `.DAT` Datei.

## Vorschau der Lichter

Diese Werkzeuge hilft PC Beat Saber Spielern, eine genauere Vorschau ihrer Beleuchtung zu erhalten. Die meisten Editoren zeigen keine naturgetreuen Lichteffekte.

### In-Game mit FPFC

First Person Flying Controller (FPFC) ist ein Startparameter, der sowohl von Steam- als auch von Oculus-Benutzern verwendet werden kann. FPFC öffnet eine Instanz von Beat Saber auf deinem Desktop und erlaubt dir, es mit deiner Tastatur und Maus zu steuern.

While a map is playing, pressing:

- `P` **P**auses the map
- `M` Returns to **m**enu if paused
- `R` **R**estarts the map if paused
- `C` Unpauses and **c**ontinues playing

You will need the SiraUtil mod in order move the camera while a map is playing. Without it, the camera is fixed in the floor at an undesirable angle. Install SiraUtil from Mod Assistant and run Beat Saber to create a config json file. SiraUtil also adds additional useful features such as camera FOV, sensitivity, and rebindable pause and exit controls. Edit the `SiraUtil.json` file in your `UserData` folder to tweak settings.

**For Steam Users:**

Open the game properties and add `fpfc` to the Steam launch options in the General tab. ![Fpfc launch options](/.assets/images/mapping/fpfc.png)

**For Oculus Users:**

1. Klicke mit der rechten Maustaste auf Beat Saber.exe und erstelle eine Verknüpfung.
2. Bearbeite das Ziel, um "fpfc" am Ende hinzuzufügen. Zum Beispiel: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

After installing the mods and adding the launch parameter you can then now move around and pause in a map. The default toggle key to switch between headset and mouse/keyboard control is <kbd>G</kbd>.

:::warning NOTE

- If you go back into vr and the game doesn't load in the headset either:

  - Press the <kbd>G</kbd> key until the headset displays the game  
    **==OR==**
  - Quit the game, remove the launch option, and relaunch the game.

- If the mod doesn't seem to be working, make sure the in-game Smooth Camera setting is disabled.

- For difficulties other than Expert+, the game defaults to a `No Flicker` option for lighting which reduces the amount of strobes and ring spin events shown. Check to make sure this `Player Option` setting is set what you intend to view!

:::

### Online mit BS Viewer

[BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit** is an online tool that is a convenient way to checkout how your map might look in game without the game. Just upload your map zip to the website and preview! Unfortunately **IOS and Safari are currently not supported.**

## Credits

Content in this section was authored by [LittleAsi](./mapping-credits.md#littleasi), [Kolezan](./mapping-credits.md#kolezan) and [McEndu](./mapping-credits.md#mcendu) or derived from guides by [Puds](./mapping-credits.md#puds) and [MandyNasty](./mapping-credits.md#mandynasty). With visual media contributions from [Aeroluna](./mapping-credits.md#aeroluna) and [Bullet](./mapping-credits.md#bullet).
