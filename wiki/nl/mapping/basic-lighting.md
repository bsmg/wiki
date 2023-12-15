---
prev: false
next: false
description: Leer hoe je handmatig aan de slag gaat met het verlichten van je level!
---

# Basis verlichting

_Maak van Beat Saber een lichtere plek door je levels handmatig te verlichten._

- [Woordenlijst](./glossary.md)

---

Elk level moet een soort verlichting hebben. Als je eenmaal de hulpmiddelen kent die tot je beschikking zijn, kan simpele handmatige verlichting erg gemakkelijk zijn. [Deze link](https://streamable.com/s/x7zj0/vrugyj) is een videovoorbeeld van zeer eenvoudige handmatige verlichting.

::: tip OPMERKING Het voorbeeld gebruikt [Map Color Overrides](#map-color-overrides). Je hoeft geen AaltopahWi of Skeelie te zijn om geweldige verlichting te maken! :::

## Lightable Objects

The following types of lanes exist in the Static Event System:

<!-- markdownlint-disable MD013 -->

| Object  | Description                                                                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lights  | Controls the light intensity of lights, lasers, etc. Events on these lanes have a color and a type associated. These events light up the environment, and other events would create minimal impact without lights. |
| Value   | Events on these lanes hold an integer value from 0 to 9. The classical example of this is Laser Speed, though this lane type can be used for other things, for example the pillars in Lady Gaga environment.       |
| Trigger | An event on this lane triggers a change in an object. Examples include Ring Spin and Ring Zoom.                                                                                                                    |
| Boost   | Changes lighting colors between two pairs of colors. Off gebruikt het eerste paar kleuren. On gebruikt het tweede paar (boost) kleuren. There is no fade option for this effect.                                   |

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

| Object          | Description                                                                                                                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Center Lights   | Generally lights along the side of the track, underneath the track, and sometimes a chevron at the back of the track. Soms "Bottom/Back/Side" of "BBS" lichten genoemd.                                                                                                                       |
| Side/Top Lasers | Sets of rotating lasers to the sides of the track or above/below the track, depending on which environment you've selected. Rotatie is ingesteld met behulp van de Laser Speed functie.                                                                                                       |
| Back Lasers     | Static lasers, often in an "X" pattern at the back of the track, behind the chevron.                                                                                                                                                                                                          |
| Ring Lights     | Lights attached to the inside of the large outer rings that spin in almost all environments.                                                                                                                                                                                                  |
| Ring Spins      | Used to create movement in the rings. In environments with both an inner and an outer ring, rings spins rotate both rings together.                                                                                                                                                           |
| Ring Zooms      | Used to zoom and unzoom the inner ring in environments that have it. Heeft geen invloed op de buitenste ring.                                                                                                                                                                                 |
| Laser Speed     | Changes the speed of the side laser rotation from stationary (0) to very fast (20). <br>Set independently for the right and left side lasers. Back top lasers bewegen niet. Laser speed increases linearly so **2** is twice as fast as **1** and **5** is five times as fast as **1**. |
| Boost Event     | Changes lighting colors between two pairs of colors. Off uses the first pair of colors. On uses the second (boost) pair of colors. Er is geen fade of flash optie voor dit evenement.                                                                                                         |

<!-- markdownlint-enable MD013 -->

In environments that use the v3 Group Lighting System (Weave and later), the set of objects controllable are unique to each environment.

## Verlichtingsevenementen

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

## Beste werkwijzen & technieken

> "De enige verkeerde verlichting is **GEEN** verlichting.... of een lichtmap."  
> ~ Skeelie

Goed verlichten is een kunst, wat betekent dat het veel subjectiever is dan het maken van levels. Er zijn relatief weinig beste werkwijzen om aan de slag te gaan, en eenvoudige handmatige verlichting is bijna onmogelijk om slecht te doen.

**TranquillizeMe** heeft een verlichtingstutorial gecreëerd, [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc), met details van handige verlichtingstechnieken en algemene tips voor verlichting.

::: warning NOTE Lighting previews are not realistic in the editors currently available to the public so it's important to preview your lights in-game often. Zie [Het bekijken van jouw verlichting](#previewing-your-lights) voor sommige programma's die kunnen helpen. :::

### Sneltoetsen

Each map editor handles lighting differently so you'll want to get to know the key bindings and how placements work in your editor of choice. Verlichtingsneltoetsen variëren per editor. Raadpleeg de gebruikershandleiding van jouw editor of lees de README of verwijs naar deze handige lijst [Cross-Editor Sneltoetsen](./editor-keybinds.md).

### Het toewijzen van verlichtingsevenementen

Level makers die hun eerste level verlichten moeten beginnen met het toewijzen van specifieke [verlichtingstypen](#lighting-types) aan specifieke instrumenten, en vanuit daar verder gaan een meer ervaring opdoen. Deze methode produceert meestal niet de meest opwindende shows, maar het is moeilijk om het verkeerd te doen. Het ziet er misschien uit als:

- **Track Lights:** Bass of Kick Drum
- **Lasers:** Melodie
- **Ring Lights:** Synth A of Cymbals
- **Ring Zoom:** Synth B

Zodra dit type basisstructuur op zijn plek is en je comfortabeler bent met hoe alles werkt, kan je bedenken waar je misschien dingen wilt aanpassen om daar nadruk op te leggen. Het instellen van een strikt patroon is noodzakelijk om impact te creëren voor wanneer je een aanpassing maakt; als je alles accentueert, dan accentueer je niks (dit geld ook voor blokplaatsing!).

#### Een voorbeeld van verlichtingsmentor, LittleAsi

> Normaal verlicht ik de melodie met alle drie de lasers (vocaal en instrumentaal op verschillende kleuren, of primaire instrumentaal en accenten op een andere kleur), drums op de ring lichten, en of bas of iets harmonisch zoals synths op de Bottom/back/Side (BBS) (soms een beetje veel omdat ze de BBS-intensiteit hebben verhoogd). Als de drums te betrokken zijn om alleen op de ringlichten te gaan of er is niets anders op zijn plaats voor de BBS, verplaats ik de kick drum naar BBS. Als de drums echt dominant zijn, doe ik soms de back-top laser op de snare om daarna de ringlichten aan de cymbals te wijden. De talrijke mogelijkheden voor het veranderen van lasergedrag en uiterlijk, maken ze echter de beste kandidaat voor het volgen van de melodie. Ik heb 0 snelheid lasers gebruikt voor gesloten hi-hat met verschillende snelheden voor open hi-hat en cymbal crashes, Maar het hoeft zeker geen specifieke manier te zijn (alleen intern samenhangend).

### Laser Speed Resetten

Dezelfde laser speed twee keer op rij instellen zal ervoor zorgen dat deze wordt gereset naar een willekeurige positie. Bijvoorbeeld, de speed instellen op 1 voor elke snare hit zal ervoor zorgen dat de laser posities willekeurig worden gepaald zonder dat ze ooit hun rotatie snelheid veranderen.

Als je de laser speed niet reset, zal het voor altijd blijven draaien met die snelheid totdat het veranderd word.

### Off Event plaatsing

De geluiden binnen een liedje hebben zelden een precies eindpunt, dus er is niet altijd een "juiste" tijd om het `Off` evenement te plaatsen. Wees er van bewust wanneer je ervoor kiest om de lichten die zijn gekoppeld aan specifieke geluiden of instrumenten uit te zetten, en pas dit consistent toe tijdens het lied.

Wees voorzichtig met het plaatsen van off evenementen precies tussen twee lichten in, omdat dit een onbedoeld stroboscoop effect kan veroorzaken.

## Standaard Omgevingen

Er zijn verschillende ingebouwde omgevingen in Beat Saber die deel uitmaken van het basisspel en met een paar klikken eenvoudig kunnen worden gebruikt.

::: warning OPMERKING Aangepaste omgevingsmodellen (platforms) gemaakt door de community bestaan, maar vereisen de Custom Platforms mod die momenteel niet beschikbaar is via Mod Assistant. Er kan een bèta versie beschikbaar zijn in het `#pc-mods` kanaal van de BSMG Discord. :::

### Omgevingsvoorbeelden

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 -->

#### Pre-Group Lighting System

<table>
<thead>
  <tr>
    <th>Video en Schermafbeelding (klik om de volledige grootte te openen)</th>
    <th>Omgeving</th>
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

### Stel je omgeving in

Nieuwe standaard omgevingen worden redelijk vaak beschikbaar gemaakt, wat betekent dat level editors niet altijd de volledige lijst beschikbaar hebben. Als de omgeving die je wilt gebruiken geen optie is in de instellingen van je favoriete editor, moet je je `info.dat` bestand bewerken om de omgevingsnaam toe te voegen.

1. Bepaal welke omgeving je wilt gebruiken en kopieer vervolgens de `Info.dat naam` uit [omgevingsvoorbeelden](#omgevingsvoorbeelden) hierboven.
2. Open jouw `Info.dat` bestand in een tekst bewerker naar keuze.
3. Scroll naar beneden naar de `"_environmentName":` sectie.
4. Plak de naam die je gekopieerd hebt in stap 1.

> **LET OP:** Je kan geen custom platform gebruiken in dit veld. Dit wordt besproken in [Geavanceerde verlichting](./advanced-lighting.md#custom-environments).

## Map color overrides

Je kunt je eigen level-kleurenschema forceren in het spel, zolang de gebruiker de SongCore mod geïnstalleerd heeft en de `Enable Custom Song Colors` optie in de mod instellingen aan heeft.

Sinds Beat Saber versie 1.4 kunnen gebruikers de Rood/Groen/Blauw (RGB) kleuren van blokken, verlichting en muren voor hun spel instellen. Maar, deze worden overgeschreven met de kleuren die gedefinieerd zijn in het `Info.dat` bestand als de gebruiker de `Enable Custom Song Colors` optie aan heeft.

::: tip Bij het kiezen van color overrides voor de blokken. Het is **STERK** aanbevolen dat je rode/warme/agressieve kleuren aan de linkerkant en blauwe/koude/zachte kleuren aan de rechterkant houdt om verwarring van de spelers te voorkomen. :::

Zie [standaard omgevingskleuren](./lighting-defaults.md) voor een lijst van standaard kleuren die in de omgevingen worden gebruikt.

[ChroMapper](./#chromapper), [MMA2](./#mediocre-map-assistant-2), and [Beatmapper](./#beatmapper-app), natively support color overrides. Bekijk hun respectievelijke gidsen voor meer informatie.

### Color overrides handmatig toevoegen

1. Bepaal welke RGB-kleuren jij jouw blokken en/of verlichting en/of muren wilt laten zijn. Gebruik een kleurenschema programma zoals [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) om complementaire kleuren te vinden.
   - Jouw rood, groen en blauw waarden moeten worden veranderd van de normale 0-255 schaal naar de 0-1 schaal. Gebruik een site zoals [EasyRGB](https://www.easyrgb.com/en/convert.php) om jouw waarden te veranderen.
2. Open jouw `Info.dat` bestand in een tekst bewerker naar keuze.
3. Scroll naar beneden naar de `"_customData": {` sectie van het niveau waar je een kleur aan wilt geven.
   - Het gebruik van de globale `"_customData": {` buiten de `"_difficultyBeatmapSets": [` reeks werkt mogelijk niet zoals verwacht.
4. Paste whichever code blocks below correspond to the colors you want to force within the `_customData` curly brackets (`{` and `}`) then replace the `"r":`, `"g":`, and `"b":` values with whatever you chose in Step 1.
   - De `"r":` en `"g":` waarden **moeten** komma's hebben erna.

Zie de lijnen 29-60 en 69-100 van deze [Pastebin clip](https://pastebin.com/x9zEiHxR) voor een voorbeeld van deze codeblokken in actie in een `.DAT` bestand.

## Jouw verlichting bekijken

Deze programma's zullen ervoor zorgen dat PC Beat Saber gebruikers hun verlichting nauwkeuriger kunnen bekijken. De meeste editors laten geen levensechte verlichtingseffecten zien.

### In-game met FPFC

First Person Flying Controller (FPFC) is een startparameter wat gebruikt kan worden door Steam of Oculus gebruikers. FPFC opent Beat Saber op je computer en laat je het besturen met je toetsenbord en muis.

While a map is playing, pressing:

- `P` **P**auses the map
- `M` Returns to **m**enu if paused
- `R` **R**estarts the map if paused
- `C` Unpauses and **c**ontinues playing

You will need the SiraUtil mod in order move the camera while a map is playing. Without it, the camera is fixed in the floor at an undesirable angle. Install SiraUtil from Mod Assistant and run Beat Saber to create a config json file. SiraUtil also adds additional useful features such as camera FOV, sensitivity, and rebindable pause and exit controls. Edit the `SiraUtil.json` file in your `UserData` folder to tweak settings.

**For Steam Users:**

Open the game properties and add `fpfc` to the Steam launch options in the General tab. ![Fpfc launch options](/.assets/images/mapping/fpfc.png)

**For Oculus Users:**

1. Rechtsklik op Beat Saber.exe en maak een snelkoppeling.
2. Bewerk het doel en voeg "fpfc" toe aan het einde ervan. Bijv: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`.

After installing the mods and adding the launch parameter you can then now move around and pause in a map. The default toggle key to switch between headset and mouse/keyboard control is <kbd>G</kbd>.

:::warning NOTE

- If you go back into vr and the game doesn't load in the headset either:

  - Press the <kbd>G</kbd> key until the headset displays the game  
    **==OR==**
  - Quit the game, remove the launch option, and relaunch the game.

- If the mod doesn't seem to be working, make sure the in-game Smooth Camera setting is disabled.

- For difficulties other than Expert+, the game defaults to a `No Flicker` option for lighting which reduces the amount of strobes and ring spin events shown. Check to make sure this `Player Option` setting is set what you intend to view!

:::

### Online met BS Viewer

[BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit** is an online tool that is a convenient way to checkout how your map might look in game without the game. Just upload your map zip to the website and preview! Unfortunately **IOS and Safari are currently not supported.**

## Bijdragen

Content in this section was authored by [LittleAsi](./mapping-credits.md#littleasi), [Kolezan](./mapping-credits.md#kolezan) and [McEndu](./mapping-credits.md#mcendu) or derived from guides by [Puds](./mapping-credits.md#puds) and [MandyNasty](./mapping-credits.md#mandynasty). With visual media contributions from [Aeroluna](./mapping-credits.md#aeroluna) and [Bullet](./mapping-credits.md#bullet).
