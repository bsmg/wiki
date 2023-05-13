---
sidebar: auto
prev: ./basic-mapping.md
next: ./intermediate-lighting.md
description: Learn how to get started manually lighting your map!
---
# Basic Lighting
_Make Beat Saber a brighter place by manually lighting your maps._

* [Glossary of Terms](./glossary.md)

---

Every map needs to have lighting of some sort. Once you know the tools at your disposal, simplistic manual lighting can
be very easy. [This link](https://streamable.com/s/x7zj0/vrugyj) is a video example of very simple manual lighting

::: tip NOTE
The example uses [Map Color Overrides](#map-color-overrides).
You don't need to be an AaltopahWi or a Skeelie to make great lighting!
:::

## Lightable Objects
The following types of lanes exist in the Static Event System:

* **Lights:** Controls the light intensity of lights, lasers, etc.
  Events on these lanes have a color and a type associated. These
  events light up the environment, and other events would create
  minimal impact without lights.
* **Value:** Events on these lanes hold an integer value from 0 to 9.
  The classical example of this is Laser Speed, though this lane type
  can be used for other things, for example the pillars in Lady Gaga
  environment.
* **Trigger:** An event on this lane triggers a change in an object.
  Examples include Ring Spin and Ring Zoom.
* **Boost:** Changes lighting colors between two pairs of colors. Off
  uses the first pair of colors. On uses the second (boost) pair of
  colors. There is no fade option for this effect.

Objects in the Group Lighting System may have the following properties
controllable:

* **Lights:** Controls the intensity of lights, lasers, etc., similar
  to how it works in the Static Event System.
* **Rotation:** Unlike lanes that trigger rotation in environments
  before Weave, more granular control of rotation is offered by the
  Group Lighting System.
* **Translation:** Debuting in The Weeknd environment, controls the
  position of an object.

In environments before Weave, the set of objects controllable are generally
consistent, though may be in different positions or may be missing altogether.
The controllable objects are as follows:

* **Center Lights:** Generally lights along the side of the track, underneath the track, and sometimes a chevron at the
  back of the track. Sometimes called "Bottom/Back/Side" or "BBS" lights.
* **Side/Top Lasers:** Sets of rotating lasers to the sides of the track or above/below the track, depending on which
  environment you’ve selected. Rotation is set using the Laser Speed function.
* **Back Lasers:** Static lasers, often in an "X" pattern at the back of the track, behind the chevron.
* **Ring Lights:** Lights attached to the inside of the large outer rings that spin in almost all environments.
* **Ring Spins:** Used to create movement in the rings. In environments with both an inner and an outer ring,
  rings spins rotate both rings together.
* **Ring Zooms:** Used to zoom and unzoom the inner ring in environments that have it. Does not affect the outer ring.
* **Laser Speed:** Changes the speed of the side laser rotation from stationary (0) to very fast (20).
  Set independently for the right and left side lasers. Back top lasers do not move. Laser speed increases linearly so
  **2** is twice as fast as **1** and **5** is five times as fast as **1**.
* **Boost Event:** Changes lighting colors between two pairs of colors. Off uses the first pair of colors.
  On uses the second (boost) pair of colors. There is no fade or flash option for this event.

In environments that use the v3 Group Lighting System (Weave and later),
the set of objects controllable are unique to each environment.

## Lighting Events
Lighting has went through several revisions. Originally, only the Static
Event System is available. v3 introduces the Group Lighting System, usable
with specific environments.

### Static Event System (Pre-v3)
There are two major revisions of the Static Event System.

Lighting v1 is the version of lighting that has general support from
community editors. It supports the following light events:

* **On:** Turns a light on that will stay on until you place a different
  event type.
* **Off:** Turns a light off that will stay off until you place a different
  event type.
* **Flash:** Briefly flashes brighter than a standard "on" event then stays
  on until you place a different event type.
* **Fade:** Briefly flashes brighter than a standard "on" event then fades
  off after a couple of seconds.

A light event have one of three available colors associated. Prior to
v3.1, only two colors are available. v3.1 introduced a third color;
it is currently white for all built-in environments.

Lighting v2 fully overhauls the lighting system. The official editor is
generally used to create v2 lights; support by community editors are
currently under development. While v2 can be used with all classic
environments, similar to v1, the four-event system has been replaced with
only two types of events:

* **Static:** Sets a light to a specified level. The light will stay at
  the level, unless another event is placed.
* **Fade:** Fades a light to a specified level. The fade starts at the
  event immediately before, or the start of the song if there is none,
  and ends on the fade event.

The level of a light ranges from 0 to 120. 0 means no light, 100 is the
level of a v1 On event, and 120 is the maximum.

### Group Lighting System (v3)
v3 environments, in addition to Static Event System objects, introduces
a new class of objects, hereby known as v3 objects, that offers more
granular control.

A v3 object can have one or both of its lights or rotation controllable.
In addition, a v3 object can have multiple segments, and each segment can
be controlled individually.

Events in v3 must reside in groups. Each group can contain one or more
lanes, each lane controlling one or more segments, on which events are
placed.

Light events in v3 are mostly identical to those of v2, with a few
changes and additions. Firstly, the intensity of a light is no longer
limited to 120 maximum, and can go above it. Another is the addition of
strobing, allowing placement of a flickering light with a single event.

v3 introduces rotation events, allowing control of an object's rotation
angle. Rotation events cannot be grouped together with light events.
When a rotation event is placed, the object will rotate starting at the
rotation event immediately before (the start of the song if none), and
completes at the time of the event, similar to a fade event. A
rotation event has the following parameters:

* **Rotation Angle**;
* **Loop Count**, specifying how many full turns should the object
  undertake before reaching the final angle;
* **Direction**, which is either clockwise, counterclockwise, or decided
  automatically; and
* **Easing**: If set to *None*, the object rotates instantly. Setting to
  other values lets the object rotate from the angle of the last event
  in different ways. *Linear* lets it rotate at a linear speed, *InQuad*
  starts slow and ends fast, *OutQuad* starts fast and ends slow, and
  *InOutQuad* both accelerates and decelerates.

Finally, a new type of event is added, usable with both light and
rotation events:

* **Extension**: Keep the intensity of a light or the angle of a
  rotation fixed until this event.

## Best Practices & Techniques
> "The only bad lights are **NO** lights.... or lightmap."  
> ~ Skeelie

Lighting truly is an art which means that it's much more subjective than mapping. There are relatively few best practices
to get started and simple manual lighting is almost impossible to do poorly.

**TranquillizeMe** has created a lighting tutorial, [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc),
detailing useful lighting techniques and general tips for lighting.

::: warning NOTE
Lighting previews are not realistic in the editors currently available to the public so it’s important to preview your
lights in-game often. See [Previewing Your Lights](#previewing-your-lights) for some tools that can help.
:::

### Key Bindings
Each map editor handles lighting differently so you’ll want to get to know the key bindings and how placements work in
your editor of choice. Lighting keybinds vary by editor. Consult your editor's user guide or readme or refer to this
helpful list [Cross-Editor Keybindings](./editor-keybinds.md).

### Assigning Lighting Events
Mappers lighting their first map should start by assigning specific [lighting types](#lighting-types) to specific instruments,
then branch out from there as they get more experienced. This method won't usually produce the most exciting shows, but
it's hard to mess up. This might look like:

* **Track Lights:** Bass or Kick Drum
* **Lasers:** Melody
* **Ring Lights:** Synth A or Cymbals
* **Ring Zoom:** Synth B

Once this type of basic structure is in place and you're more comfortable with how everything works, you can think about
where you might want to change things up for emphasis. Establishing a strict pattern is necessary to create impact when
you do make a change; if you emphasize everything, you emphasize nothing (this goes for block placement, too!).

#### An example from Lighting Mentor, LittleAsi
> I usually light the melody with all three lasers (vocal and instrumental on different colors, or primary instrumental
> and accents on a different color), drums on the ring lights, and either bass or something harmonic like synths on the
> Bottom/Back/Side (BBS) (a bit much sometimes since they increased BBS intensity). If the drums are too involved to pack
> onto the ring lights alone, or there's nothing else appropriate for the BBS, I'll move the kick drum to BBS. If the
> drums are really dominant, I may put the back-top laser on snare duty to dedicate the ring lights to cymbals. The
> numerous avenues for changing laser behavior and appearance do make them the best candidate for tracking the melody,
> though. I have used speed 0 lasers for closed hi-hat with various speeds for open hi-hat and cymbal crashes, though,
> so it definitely doesn't have to be any specific way (just internally consistent).

### Laser Speed Resets
Applying the same laser speed twice in a row will cause it to reset to a random position. For example, setting speed 1
on every snare hit will cause the laser positions to randomize in time with the snare without ever actually changing
their rotation speed.

If you don't reset the laser speed it will continue to spin consistently at that speed until changed.

### Off Event Placement
The sounds within a song rarely have a precise end point so there's not always a "correct" time to place the `Off` event.
Be aware of when you're choosing to turn lights associated with specific sounds or instruments off, and apply those
decisions consistently throughout the song.

Be cautious about putting off events exactly in the middle of two lights as it can sometimes create an unintended strobing
effect.

## Default Environments
There are various built-in environments in Beat Saber which are part of the base game and can be used easily with a few clicks.

::: warning NOTE
Custom environment models (platforms) created by the community exist but require the Custom Platforms mod which is not
currently available through Mod Assistant. A beta version may be available in the `#pc-mods` channel of the BSMG Discord.
:::

The basic structure of each environment is mostly the same. In the [Mediocre Map Assistant 2](./mediocre-map-assistant.md)
editor the lighting track looks like this:

::: align center
![Screenshot of the MMA2 lighting track from the top down](~@images/mapping/mma2-lighting-track.jpg)
:::

### Environment Previews
Unless otherwise mentioned, the third default color is white for lights
and boost lights.

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 -->
<table>
<thead>
  <tr>
    <th>Video and Screenshot (click to open full size)</th>
    <th>Environment</th>
  </tr>
</thead>
<tbody>
<tr><td style="text-align: center;">

![Image of Default environment](~@images/mapping/default_env.jpg)

</td><td>

**The First (Default) Environment**<br />
**Info.dat Name:** `DefaultEnvironment` <br />
**Default Colors:** Red & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: (both squares) <br />
**Ring Zoom:** :white_check_mark: (inner square)<br />
**Equalizer:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers

**Video Preview:** [YouTube](https://youtu.be/ab7kjMsIBHA)

</td></tr>
<tr><td style="text-align: center;">

![Image of Origins environment](~@images/mapping/origins_env.jpg)

</td><td>

**Origins Environment**<br />
**Info.dat Name:** `OriginsEnvironment`<br />
**Default Colors:** Yellow & Pink notes, Blue & Light Blue lights

**Lasers:** :white_check_mark:<br />
**Ring Spin:** :white_check_mark:<br />
**Ring Zoom:** :x:<br />
**Equalizer:** :white_check_mark:

**Video Preview:** [YouTube](https://youtu.be/Ysvm5N9V1wU)

</td></tr>
<tr><td style="text-align: center;">

![Image of Triangle environment](~@images/mapping/triangle_env.jpg)

</td><td>

**Triangle Environment**<br />
**Info.dat Name:** `TriangleEnvironment`<br />
**Default Colors:** Red & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: (square and triangle) <br />
**Ring Zoom:** :white_check_mark: (triangle)<br />
**Equalizer:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers

**Video Preview:** [YouTube](https://youtu.be/FhAg4Awl0k0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Nice environment](~@images/mapping/nice_env.jpg)

</td><td>

**Nice Environment**<br />
**Info.dat Name:** `NiceEnvironment`<br />
**Default Colors:** Red & Blue

**Lasers:** :white_check_mark: (top & bottom)<br />
**Ring Spin:** :white_check_mark: (both squares)<br />
**Ring Zoom:** :white_check_mark: (inner square)<br />
**Equalizer:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers

**Video Preview:** [YouTube](https://youtu.be/LrLFf6fspiw)

</td></tr>
<tr><td style="text-align: center;">

![Image of Big Mirror environment](~@images/mapping/big-mirror_env.jpg)

</td><td>

**Big Mirror Environment**<br />
**Info.dat Name:** `BigMirrorEnvironment`<br />
**Default Colors:** Red & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: <br />
**Ring Zoom:** :x:<br />
**Equalizer:** :white_check_mark:

**Video Preview:** [YouTube](https://youtu.be/lmWeJL8Qxh4)

</td></tr>
<tr><td style="text-align: center;">

![Image of Imagine Dragons environment](~@images/mapping/dragons_env.jpg)

</td><td>

**Imagine Dragons Environment**<br />
**Info.dat Name:** `DragonsEnvironment`<br />
**Default Colors:** Red & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: (square and helix)<br />
**Ring Zoom:** :white_check_mark: (helix)<br />
**Equalizer:** :white_check_mark:<br />
**Note:** Back Top Laser position is the two rails on the far edges of the screen. It will always illuminate the
opposite color of what you set it.

**Video Preview:** [YouTube](https://youtu.be/tSzvvbDK71s)

</td></tr>
<tr><td style="text-align: center;">

![Image of K/DA environment](~@images/mapping/kda_env.jpg)

</td><td>

**K/DA Environment**<br />
**Info.dat Name:** `KDAEnvironment`<br />
**Default Colors:** Orange & Purple

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :x:<br />
**Ring Zoom:** :x:<br />
**Equalizer:** :x:<br />
**Note:** Ring Light position illuminates the five rails at the top. The lights in the center of the arrows never turn off.

**Video Preview:** [YouTube](https://youtu.be/knXgpnW5NWQ)

</td></tr>
<tr><td style="text-align: center;">

![Image of Monstercat environment](~@images/mapping/monstercat_env.jpg)

</td><td>

**Monstercat Environment**<br />
**Info.dat Name:** `MonstercatEnvironment`<br />
**Default Colors:** Red & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark:<br />
**Ring Zoom:** :x: <br />
**Equalizer:** :white_check_mark:<br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers. Ring Light position illuminates the five rails at the top.

**Video Preview:** [YouTube](https://youtu.be/Er3OCUmSK-0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Crab Rave environment](~@images/mapping/crab-rave_env.jpg)

</td><td>

**Crab Rave Environment**<br />
**Info.dat Name:** `CrabRaveEnvironment`<br />
**Default Colors:** Green & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark:<br />
**Ring Zoom:** :x: <br />
**Equalizer:** :white_check_mark: <br />
**Note:** As of 1.6 Back Top Lasers are below the Track Lasers. Ring Light position illuminates the five rails at the top.

**Video Preview:** [YouTube](https://youtu.be/xTXHCTBYkck)

</td></tr>
<tr><td style="text-align: center;">

![Image of Panic! at the Disco environment](~@images/mapping/panic_env.jpg)

</td><td>

**Panic! at the Disco Environment**<br />
**Info.dat Name:** `PanicEnvironment`<br />
**Default Colors:** Red & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: <br />
**Ring Zoom:** :white_check_mark: <br />
**Equalizer:** :white_check_mark:<br />
**Note:** Ring Lights are much brighter in this environment than in others.

**Video Preview:** [YouTube](https://youtu.be/2UJ8-edr4xU)

</td></tr>
<tr><td style="text-align: center;">

![Image of Rocket League environment](~@images/mapping/rocket_env.jpg)

</td><td>

**Rocket League Environment**<br />
**Info.dat Name:** `RocketEnvironment`<br />
**Default Colors:** Orange & Blue

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :x:<br />
**Ring Zoom:** :x:<br />
**Equalizer:** :x:

**Video Preview:** [YouTube](https://youtu.be/glgMeDJopIM)

</td></tr>
<tr><td style="text-align: center;">

![Image of Green Day environment](~@images/mapping/green-day_env.jpg)

</td><td>

**Green Day Environment**<br />
**Info.dat Name:** `GreenDayEnvironment`<br />
**Default Colors:** Green & Cyan

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: <br />
**Ring Zoom:** :white_check_mark:<br />
**Equalizer:** :x:<br />
**Video Preview:** [YouTube](https://youtu.be/QLw4Rg-mHKE)

</td></tr>
<tr><td style="text-align: center;">

![Image of Green Day Grenade environment](~@images/mapping/gd-grenade_env.jpg)

</td><td>

**Green Day Grenade Environment**<br />
**Info.dat Name:** `GreenDayGrenadeEnvironment`<br />
**Default Colors:** Green & Cyan

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :x:<br />
**Ring Zoom:** :x: <br />
**Equalizer:** :x:<br />
**Video Preview:** [YouTube](https://youtu.be/DIzLR65HyN0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Timbaland environment](~@images/mapping/timbaland_env.jpg)

</td><td>

**Timbaland Environment**<br />
**Info.dat Name:** `TimbalandEnvironment`<br />
**Default Colors:** Grey & Blue notes, Blue & Blue lights (same colors)

**Lasers:** :white_check_mark: (left & right lights parellel to rings)<br />
**Ring Spin:** :white_check_mark: <br />
**Ring Zoom:** :white_check_mark: <br />
**Equalizer:** :white_check_mark:<br />
**Note:** "Timbaland" text on the sides never turns off. Laser speed affects the Back Top Lasers on the left and right rings.

**Video Preview:** [YouTube](https://youtu.be/ZMNrCbSxBVM)

</td></tr>
<tr><td style="text-align: center;">

![Image of FitBeat environment](~@images/mapping/fitbeat_env.jpg)

</td><td>

**FitBeat Environment**<br />
**Info.dat Name:** `FitBeatEnvironment`<br />
**Default Colors:** Yellow & Pink notes, Orange & Blue lights

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: (outer lasers and helex) <br />
**Ring Zoom:** :white_check_mark: (helix) <br />
**Equalizer:** :white_check_mark: <br />
**Note:** Back Top Lasers will illuminate the opposite color of what you set it.

**Video Preview:** [YouTube](https://youtu.be/PNucTPiPBn8)

</td></tr>
<tr><td style="text-align: center;">

![Image of Linkin Park environment](~@images/mapping/linkin-park_env.jpg)

</td><td>

**Linkin Park Environment**<br />
**Info.dat Name:** `LinkinParkEnvironment`<br />
**Default Colors:** Red & Blue-Grey notes, Beige & White lights, Orange & Blue boost lights

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: (controls laser spread) <br />
**Ring Zoom:** :x: <br />
**Equalizer:** :white_check_mark: (on side wall)

**Video Preview:** [YouTube](https://youtu.be/nl8_sHYnP7k) <br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/BhMQ8KS2rZk)

</td></tr>
<tr><td style="text-align: center;">

![Image of BTS environment](~@images/mapping/bts_env.jpg)

</td><td>

**BTS Environment**<br />
**Info.dat Name:** `BTSEnvironment`<br />
**Default Colors:** Pink & Purple notes, Pink & Purple lights, Light Pink & Light Blue boost lights

**Lasers:** :white_check_mark: (left & right)<br />
**Ring Spin:** :white_check_mark: (background pillars) <br />
**Ring Zoom:** :white_check_mark: (track pillars) <br />
**Equalizer:** :x: <br />
**Note:** BTS logo in the center never turns off.

**Video Preview:** [YouTube](https://youtu.be/HrGK2puKBhI) <br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/HYnVROsLBBs)

</td></tr>
<tr><td style="text-align: center;">

![Image of Kaleidoscope environment](~@images/mapping/kaleidoscope_env.jpg)

</td><td>

**Kaleidoscope Environment**<br />
**Info.dat Name:** `KaleidoscopeEnvironment`<br />
**Default Colors:**  Red & Black notes, Red & White lights, Red & Magenta boost lights

**Lasers:** :white_check_mark: <br />
**Ring Spin:** :white_check_mark:<br />
**Ring Zoom:** :white_check_mark:<br />
**Equalizer:** :x:

**Video Preview:** [YouTube](https://youtu.be/6zgH3QcN_T8) <br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/eZBd7-yb284)

</td></tr>
<tr><td style="text-align: center;">

![Image of Interscope environment](~@images/mapping/interscope_env.jpg)

</td><td>

**Interscope Environment**<br />
**Info.dat Name:** `InterscopeEnvironment`<br />
**Default Colors:**  Yellow & Pink notes, Purple & White lights, Cool Red & Cool White boost lights

**Lasers:** :white_check_mark: <br />
**Ring Spin:** :white_check_mark: (cars) <br />
**Ring Zoom:** :white_check_mark: (cars and extra laser spread) <br />
**Equalizer:** :white_check_mark:<br />
**Extra Events**: 6 and 7 control extra lights. 16 and 17 control car hydraulics.

**Video Preview:** [YouTube](https://youtu.be/pnaNPD5ljqI)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/GmJpF2VA-6E)

</td></tr>
<tr><td style="text-align: center;">

![Image of Skrillex environment](~@images/mapping/skrillex_env.jpg)

</td><td>

**Skrillex Environment**<br />
**Info.dat Name:** `SkrillexEnvironment`<br />
**Default Colors:**  Red & Black notes, Pink & Turquoise lights, Neon Red & Neon Green boost lights

**Lasers:** :white_check_mark: <br />
**Ring Spin:** :white_check_mark: (first ring spin)<br />
**Ring Zoom:** :white_check_mark: (second ring spin) <br />
**Equalizer:** :x:<br />
**Extra Events**: 6 and 7 control extra lights.

**Video Preview:** [YouTube](https://youtu.be/Uk0JugoZ3w4)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/-SD5F3b7Q3g)

</td></tr>
<tr><td style="text-align: center;">

![Image of Billie Eilish environment](~@images/mapping/billie_env.jpg)

</td><td>

**Billie Eilish Environment**<br />
**Info.dat Name:** `BillieEnvironment`<br />
**Default Colors:**  Yellow & Light Grey notes, Orange & Cream lights, Red & White Blue boost lights

**Lasers:** :white_check_mark: (sun rays)<br />
**Ring Spin:** :white_check_mark: (controls rain)<br />
**Ring Zoom:** :white_check_mark: (controls sun rays and side beams) <br />
**Equalizer:** :x:<br />
**Extra Events**: 6, 7, 10, and 11 control extra lights. <br />
**Note:** This is the first environment use events 10 and 11
and these events only function on map version `2.5.0` or later.

**Video Preview:** [YouTube](https://youtu.be/R53QcGlo80Q)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/Kgm6Xn7xcNQ)

</td></tr>
<tr><td style="text-align: center;">

![Image of Spooky environment](~@images/mapping/spooky_env.jpg)

</td><td>

**Spooky Environment**<br />
**Info.dat Name:** `HalloweenEnvironment`<br />
**Default Colors:**  Orange & Black notes, Red & Light Blue lights, Green & Light Purple boost lights

**Lasers:** :white_check_mark:<br />
**Ring Spin:** :x:<br />
**Ring Zoom:**:x: <br />
**Equalizer:** :x:

**Video Preview:** [YouTube](https://youtu.be/TbX3Z3mU2y8)<br />

</td></tr>
<tr><td style="text-align: center;">

![Image of Gaga environment](~@images/mapping/gaga_env.jpg)

</td><td>

**Lady Gaga Environment**<br />
**Info.dat Name:** `GagaEnvironment`<br />
**Default Colors:** Pink & Green notes, Yellow & Magenta lights, Orange & Blue boost lights

**Lasers:** :white_check_mark: (electricity) <br />
**Ring Spin:** :x:<br />
**Ring Zoom:**:x: <br />
**Equalizer:** :x:<br />
**Extra Events**: 6, 7, 10, and 11 control additional lightning. 16, 17, 18, and 19 control additional tower height control.

**Video Preview:** [YouTube](https://youtu.be/FRNLFW4P3RQ)<br />
**Official Showcase & Tutorial**: [YouTube](https://youtu.be/2DJmcQjjCl0)

</td></tr>
<tr><td style="text-align: center;">

![Image of Weave environment](~@images/mapping/weave_env.jpg)

</td><td>

**Weave Environment**<br />
**Info.dat Name:** `WeaveEnvironment`<br />
**Default Colors:** Red & Blue notes, Red & Blue lights, Magenta & White boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**Fall Out Boy Environment**<br />
**Info.dat Name:** `PyroEnvironment`<br />
**Default Colors:** Red & Yellow notes, Red & Yellow lights, Red & White boost lights

**Group Lighting System:** :white_check_mark:<br />
**Note:** Fire is always Orange.

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**EDM Environment**<br />
**Info.dat Name:** `EDMEnvironment`<br />
**Default Colors:** White & Teal notes, Green & Blue lights, Red & Magenta boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**The Second Environment**<br />
**Info.dat Name:** `TheSecondEnvironment`<br />
**Default Colors:** Red & Blue notes, Red & Blue lights, Magenta & Green boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**Lizzo Environment**<br />
**Info.dat Name:** `LizzoEnvironment`<br />
**Default Colors:** Yellow & Purple notes, Yellow & Purple lights, Pink & Blue boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**The Weeknd Environment**<br />
**Info.dat Name:** `TheWeekndEnvironment`<br />
**Default Colors:** Red & Dark Blue notes, Red & Blue lights, Yellow & Sky Blue boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**Rock Mixtape Environment**<br />
**Info.dat Name:** `RockMixtapeEnvironment`<br />
**Default Colors:** Yellow & White notes, Red & Yellow lights, Magenta & Cyan boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**Imagine Dragons Environment 2**<br />
**Info.dat Name:** `Dragons2Environment`<br />
**Default Colors:** Yellow & Green notes, Green & Blue lights, Red & Yellow boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

</td><td>

**Panic! at the Disco Environment 2**<br />
**Info.dat Name:** `Panic2Environment`<br />
**Default Colors:** Pink & Dark Green notes, Pink & Cyan lights, Orange & Purple boost lights

**Group Lighting System:** :white_check_mark:

</td></tr>
<tr><td style="text-align: center;">

![Image of Glass Desert environment](~@images/mapping/glass-desert_env.jpg)

</td><td>

**Glass Desert Environment**<br />
**Info.dat Name:** `GlassDesertEnvironment`<br />
**Default Colors:**  Yellow & Pink notes, Blue & Light Blue lights

**Lasers:** :white_check_mark: <br />
**Ring Spin:** :x:<br />
**Ring Zoom:** :x:<br />
**Equalizer:** :white_check_mark:<br />
**Note:** This is the first 360&deg; environment. 360 levels MUST use this and it's not useable for standard levels.
Ring Light position controls the horizontal outer rail. Back Top Laser position controls the six rails at the top.

**Video Preview:** [YouTube](https://youtu.be/K3rqWNG5pn8)

</td></tr>
</tbody>
</table>
<!-- markdownlint-restore -->

### Setting Your Environment
New default environments become available reasonably often which means that map editors don't always have the complete
list available. If the environment you want to use is not an option in your favorite editor's settings you will have to
edit your `Info.dat` file to add the environment name.

1. Decide which environment you want to use then copy the `Info.dat name` from the
  [Environment Previews](#environment-previews) section above.
2. Open your `Info.dat` file in the text editor of your choice.
3. Scroll down to the `"_environmentName":` section.
4. Paste in the name you copied in Step 1.

> **NOTE:** You cannot use a custom platform in this field. This will be covered in [Advanced Lighting](./advanced-lighting.md#custom-environments).

## Map Color Overrides
You can force your own map color scheme in-game as long as the user has the SongCore mod installed and has enabled the
`Enable Custom Song Colors` option in the mod settings.

Since Beat Saber version 1.4, users can set the Red/Green/Blue (RGB) colors of notes, lights, and walls for their game.
However, they will be overridden with the colors defined in the `Info.dat` if the user has the `Enable Custom Song Colors`
option enabled.

::: tip
When choosing color overrides for the notes. It is **HIGHLY** recommended that you keep reddish/warm/aggressive colors
on the left and blueish/cold/soft colors on the right to avoid confusing players.
:::

See [Environment Default Colours](./lighting-defaults.md) for a list of default colors used in the environments.

[ChroMapper](./#chromapper), [MMA2](./#mediocre-map-assistant-2), and [Beatmapper](./#beatmapper-app), natively
support color overrides. Check their respective guides for more information.

### Manually Adding Color Overrides

1. Decide what RGB colors you want notes and/or lights and/or walls to be. Use a color scheme utility like
  [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) to find complimentary colors.
   * Your red, green, and blue values will need to be converted from the normal 0-255 scale to the 0-1 scale.
    Use a site like [EasyRGB](https://www.easyrgb.com/en/convert.php) to convert your values.
2. Open your `Info.dat` file in the text editor of your choice
3. Scroll down to the `"_customData": {` section of the difficuty you want to color.
    * Using the global `"_customData": {` outside of the `"_difficultyBeatmapSets": [` array may not work as expected.
4. Paste whichever code blocks below correspond to the colors you want to force within the `_customData` curly brackets
  (`{` and `}`) then replace the `"r":`, `"g":`, and `"b":` values with whatever you chose in Step 1.
   * The `"r":` and `"g":` values **must** have commas after them.

See lines 29-60 and 69-100 of this [Pastebin clip](https://pastebin.com/x9zEiHxR) for an example of these code blocks
in action in a `.DAT` file.

## Previewing Your Lights
These tools will help PC Beat Saber users preview their lighting more accurately.
Most editors do not show true-to-life lighting effects.

### In-game with FPFC
First Person Flying Controller (FPFC) is a launch parameter that can be used by either Steam or Oculus users. FPFC will
open an instance of Beat Saber on your desktop and allow you to control it with your keyboard and mouse.

While a map is playing, pressing:

* `P` **P**auses the map
* `M` Returns to **m**enu if paused
* `R` **R**estarts the map if paused
* `C` Unpauses and **c**ontinues playing

You will need the SiraUtil mod in order move the camera while a map is playing. Without it, the camera is fixed in the floor
at an undesirable angle. Install SiraUtil from Mod Assistant and run Beat Saber to create a config json file. SiraUtil also
adds additional useful features such as camera FOV, sensitivity, and rebindable pause and exit controls. Edit the `SiraUtil.json`
file in your `UserData` folder to tweak settings.

**For Steam Users:**

Open the game properties and add `fpfc` to the Steam launch options in the General tab.
![Fpfc launch options](~@images/mapping/fpfc.png)

**For Oculus Users:**

1. Right click on Beat Saber.exe and create a shortcut.
2. Edit the Target to add "fpfc" to the end of it.
For example: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

After installing the mods and adding the launch parameter you can then now move around and pause in a map.
The default toggle key to switch between headset and mouse/keyboard control is <kbd>G</kbd>.

:::warning NOTE

* If you go back into vr and the game doesn't load in the headset either:
  * Press the <kbd>G</kbd> key until the headset displays the game  
**==OR==**
  * Quit the game, remove the launch option, and relaunch the game.

* If the mod doesn't seem to be working, make sure the in-game Smooth Camera setting is disabled.

* For difficulties other than Expert+, the game defaults to a `No Flicker` option for lighting which reduces the amount
of strobes and ring spin events shown. Check to make sure this `Player Option` setting is set what you intend to view!

:::

### Online with BS Viewer
[BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit** is an online tool that is a convenient way to checkout
how your map might look in game without the game. Just upload your map zip to the website and preview! Unfortunately
**IOS and Safari are currently not supported.**

## Credits
Content in this section was authored by [LittleAsi](./mapping-credits.md#littleasi) and [Kolezan](./mapping-credits.md#kolezan)
or derived from guides by [Puds](./mapping-credits.md#puds) and [MandyNasty](./mapping-credits.md#mandynasty). With visual
media contributions from [Aeroluna](./mapping-credits.md#aeroluna) and [Bullet](./mapping-credits.md#bullet).
