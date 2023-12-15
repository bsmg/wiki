---
prev: false
next: false
description: マップをライティングする方法を学びましょう
---

# 基本的な照明効果

_ライトを置いてマップを明るくしましょう_

- [用語](./glossary.md)

---

すべてのマップには、ある種の照明が必要です。 一度その自由でシンプルな使い方を知れば、ライティングをつけるのはとても簡単です。 [このリンク](https://streamable.com/s/x7zj0/vrugyj) は非常にシンプルなライティングのビデオ例です

::: tip 注意 [Map Color Overrides](#map-color-overrides) を使用します。 素晴らしいライティングを作るために、AaltopahWiiやSkeelieになる必要はありません! :::

## Lightable Objects

The following types of lanes exist in the Static Event System:

<!-- markdownlint-disable MD013 -->

| Object  | Description                                                                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lights  | Controls the light intensity of lights, lasers, etc. Events on these lanes have a color and a type associated. These events light up the environment, and other events would create minimal impact without lights. |
| Value   | Events on these lanes hold an integer value from 0 to 9. The classical example of this is Laser Speed, though this lane type can be used for other things, for example the pillars in Lady Gaga environment.       |
| Trigger | An event on this lane triggers a change in an object. Examples include Ring Spin and Ring Zoom.                                                                                                                    |
| Boost   | Changes lighting colors between two pairs of colors. Offは最初のペアの色を使用します。 オンは2番目の(ブースト)ペアの色を使用します。 There is no fade option for this effect.                                                                          |

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

| Object          | Description                                                                                                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Center Lights   | Generally lights along the side of the track, underneath the track, and sometimes a chevron at the back of the track. これは"Bottom/Back/Side"や"BBS" ライトと呼ばれます。                                                                                                                      |
| Side/Top Lasers | Sets of rotating lasers to the sides of the track or above/below the track, depending on which environment you've selected. レーザーの回るスピードは制御できます。                                                                                                                                   |
| Back Lasers     | Static lasers, often in an "X" pattern at the back of the track, behind the chevron.                                                                                                                                                                                              |
| Ring Lights     | Lights attached to the inside of the large outer rings that spin in almost all environments.                                                                                                                                                                                      |
| Ring Spins      | Used to create movement in the rings. In environments with both an inner and an outer ring, rings spins rotate both rings together.                                                                                                                                               |
| Ring Zooms      | Used to zoom and unzoom the inner ring in environments that have it. 外側のリングには影響しません。                                                                                                                                                                                              |
| Laser Speed     | Changes the speed of the side laser rotation from stationary (0) to very fast (20). <br>Set independently for the right and left side lasers. バックトップレーザーは動きません。 Laser speed increases linearly so **2** is twice as fast as **1** and **5** is five times as fast as **1**. |
| Boost Event     | Changes lighting colors between two pairs of colors. Off uses the first pair of colors. On uses the second (boost) pair of colors. このイベントにはフェードまたはフラッシュオプションはありません。                                                                                                               |

<!-- markdownlint-enable MD013 -->

In environments that use the v3 Group Lighting System (Weave and later), the set of objects controllable are unique to each environment.

## ライティングイベント

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

## 取組み方とテクニック

> "悪いライティングとはライティングが**ない**こと.... あるいは軽い譜面."  
> ~ Skeelie

ライティングはマッピングよりはるかに主観的という意味でアートです。 初めに練習する方法がほとんどなく、シンプルなライティングというのもほとんど不可能です。

**TranquillizeMe**は[Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc)でライティングのテクニックや一般的なコツを紹介するチュートリアルビデオを作成しています。

::: warning NOTE Lighting previews are not realistic in the editors currently available to the public so it's important to preview your lights in-game often. 詳しくは[ライティングのプレビュー](#previewing-your-lights)をご覧ください。 :::

### キーの割り当て

Each map editor handles lighting differently so you'll want to get to know the key bindings and how placements work in your editor of choice. Lighting keybinds vary by editor. Consult your editor's user guide or readme or refer to this helpful list [Cross-Editor Keybindings](./editor-keybinds.md).

### ライティングの割り当て

Mappers lighting their first map should start by assigning specific [lighting types](#lighting-types) to specific instruments, then branch out from there as they get more experienced. This method won't usually produce the most exciting shows, but it's hard to mess up. This might look like:

- **Track Lights:** Bass or Kick Drum
- **Lasers:** Melody
- **Ring Lights:** Synth A or Cymbals
- **Ring Zoom:** Synth B

Once this type of basic structure is in place and you're more comfortable with how everything works, you can think about where you might want to change things up for emphasis. Establishing a strict pattern is necessary to create impact when you do make a change; if you emphasize everything, you emphasize nothing (this goes for block placement, too!).

#### LittleAsi のライティング方法

> 私はメロディを3つのレーザーに割りあてます。（ボーカルと楽器や主要な音をそれぞれ別の色にします）ドラムやベースをリングにします。ほかにもシンセサイザーのような音をボトムやバック、サイドに割りあてます。 If the drums are too involved to pack onto the ring lights alone, or there's nothing else appropriate for the BBS, I'll move the kick drum to BBS. If the drums are really dominant, I may put the back-top laser on snare duty to dedicate the ring lights to cymbals. The numerous avenues for changing laser behavior and appearance do make them the best candidate for tracking the melody, though. I have used speed 0 lasers for closed hi-hat with various speeds for open hi-hat and cymbal crashes, though, so it definitely doesn't have to be any specific way (just internally consistent).

### Laser Speed Resets

Applying the same laser speed twice in a row will cause it to reset to a random position. For example, setting speed 1 on every snare hit will cause the laser positions to randomize in time with the snare without ever actually changing their rotation speed.

If you don't reset the laser speed it will continue to spin consistently at that speed until changed.

### Off Event Placement

The sounds within a song rarely have a precise end point so there's not always a "correct" time to place the `Off` event. Be aware of when you're choosing to turn lights associated with specific sounds or instruments off, and apply those decisions consistently throughout the song.

Be cautious about putting off events exactly in the middle of two lights as it can sometimes create an unintended strobing effect.

## デフォルトエンバイロメント

There are various built-in environments in Beat Saber which are part of the base game and can be used easily with a few clicks.

::: warning NOTE Custom environment models (platforms) created by the community exist but require the Custom Platforms mod which is not currently available through Mod Assistant. A beta version may be available in the `#pc-mods` channel of the BSMG Discord. :::

### Environment Previews

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 -->

#### Pre-Group Lighting System

<table>
<thead>
  <tr>
    <th>Video and Screenshot (click to open full size)</th>
    <th>Environment</th>
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

### Setting Your Environment

New default environments become available reasonably often which means that map editors don't always have the complete list available. If the environment you want to use is not an option in your favorite editor's settings you will have to edit your `Info.dat` file to add the environment name.

1. Decide which environment you want to use then copy the `Info.dat name` from the [Environment Previews](#environment-previews) section above.
2. Open your `Info.dat` file in the text editor of your choice.
3. Scroll down to the `"_environmentName":` section.
4. Paste in the name you copied in Step 1.

> **NOTE:** You cannot use a custom platform in this field. This will be covered in [Advanced Lighting](./advanced-lighting.md#custom-environments).

## Map Color Overrides

You can force your own map color scheme in-game as long as the user has the SongCore mod installed and has enabled the `Enable Custom Song Colors` option in the mod settings.

Since Beat Saber version 1.4, users can set the Red/Green/Blue (RGB) colors of notes, lights, and walls for their game. However, they will be overridden with the colors defined in the `Info.dat` if the user has the `Enable Custom Song Colors` option enabled.

::: tip When choosing color overrides for the notes. It is **HIGHLY** recommended that you keep reddish/warm/aggressive colors on the left and blueish/cold/soft colors on the right to avoid confusing players. :::

See [Environment Default Colours](./lighting-defaults.md) for a list of default colors used in the environments.

[ChroMapper](./#chromapper), [MMA2](./#mediocre-map-assistant-2), and [Beatmapper](./#beatmapper-app), natively support color overrides. Check their respective guides for more information.

### Manually Adding Color Overrides

1. Decide what RGB colors you want notes and/or lights and/or walls to be. Use a color scheme utility like [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) to find complimentary colors.
   - Your red, green, and blue values will need to be converted from the normal 0-255 scale to the 0-1 scale. Use a site like [EasyRGB](https://www.easyrgb.com/en/convert.php) to convert your values.
2. Open your `Info.dat` file in the text editor of your choice
3. Scroll down to the `"_customData": {` section of the difficuty you want to color.
   - Using the global `"_customData": {` outside of the `"_difficultyBeatmapSets": [` array may not work as expected.
4. Paste whichever code blocks below correspond to the colors you want to force within the `_customData` curly brackets (`{` and `}`) then replace the `"r":`, `"g":`, and `"b":` values with whatever you chose in Step 1.
   - The `"r":` and `"g":` values **must** have commas after them.

See lines 29-60 and 69-100 of this [Pastebin clip](https://pastebin.com/x9zEiHxR) for an example of these code blocks in action in a `.DAT` file.

## ライティングのプレビュー

これらのツールはPC版Beat Saberでプレビューを行うのに便利です。 ほとんどのエディターは、ゲーム内のライティングを再現しません。

### FPFC

First Person Flying Controller (FPFC) はSteamとOculusで使うことができるパラメータです。 FPFCは デスクトップ上でBeat Saberのインスタンスを開き、キーボードとマウスで操作することができます。

マップの再生中にできる操作

- `P` ポーズ、一時停止
- `M` 一時停止時にメニューに戻る
- `R`一時停止時にリスタートする
- `C`一時停止の解除、再生

You will need the SiraUtil mod in order move the camera while a map is playing. Without it, the camera is fixed in the floor at an undesirable angle. Install SiraUtil from Mod Assistant and run Beat Saber to create a config json file. SiraUtil also adds additional useful features such as camera FOV, sensitivity, and rebindable pause and exit controls. Edit the `SiraUtil.json` file in your `UserData` folder to tweak settings.

**For Steam Users:**

Open the game properties and add `fpfc` to the Steam launch options in the General tab. ![Fpfc launch options](/.assets/images/mapping/fpfc.png)

**For Oculus Users:**

1. Right click on Beat Saber.exe and create a shortcut.
2. Edit the Target to add "fpfc" to the end of it. For example: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

After installing the mods and adding the launch parameter you can then now move around and pause in a map. The default toggle key to switch between headset and mouse/keyboard control is <kbd>G</kbd>.

:::warning NOTE

- If you go back into vr and the game doesn't load in the headset either:

  - Press the <kbd>G</kbd> key until the headset displays the game  
    **==OR==**
  - Quit the game, remove the launch option, and relaunch the game.

- If the mod doesn't seem to be working, make sure the in-game Smooth Camera setting is disabled.

- For difficulties other than Expert+, the game defaults to a `No Flicker` option for lighting which reduces the amount of strobes and ring spin events shown. Check to make sure this `Player Option` setting is set what you intend to view!

:::

### Online with BS Viewer

[BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit** is an online tool that is a convenient way to checkout how your map might look in game without the game. Just upload your map zip to the website and preview! Unfortunately **IOS and Safari are currently not supported.**

## Credits

Content in this section was authored by [LittleAsi](./mapping-credits.md#littleasi), [Kolezan](./mapping-credits.md#kolezan) and [McEndu](./mapping-credits.md#mcendu) or derived from guides by [Puds](./mapping-credits.md#puds) and [MandyNasty](./mapping-credits.md#mandynasty). With visual media contributions from [Aeroluna](./mapping-credits.md#aeroluna) and [Bullet](./mapping-credits.md#bullet).
