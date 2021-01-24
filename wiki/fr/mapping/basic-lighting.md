---
sidebar: auto
prev: ./basic-mapping.md
next: ./intermediate-lighting.md
description: Apprenez à éclairer manuellement vos maps !
---

# Les bases du lighting
_Un résumé rapide sur les bases du lighting_

* [Lexique](./glossary.md)
---
Every map needs to have lighting of some sort. Une fois que vous connaissez les outils dont vous disposez, l'éclairage simpliste peut être très facile. [Ce lien](https://streamable.com/s/x7zj0/vrugyj) est un exemple vidéo d'un éclairage manuel simple. (Note: Cette exemple utilise [Overrides des couleurs de map](#map-color-overrides)). Vous n'avez pas besoins d'être un AaltopahWi ou un Skeelie pour faire du bon lighting !

## Types de lumières
The available lighting types are consistent across each of the built-in game environments, though they may be in slightly different positions or not present in some cases.
* **Lumières principales :** Généralement les lumières sur les côtés de la piste, sous la piste ou parfois un chevron à l'arrière de la piste. Parfois appelé "Bottom/Back/Side" (Bas/Arrière/Côté) ou lumières "BBS".
* **Lasers des côtés/haut :** Mets la rotation des laser des côtés ou au-dessus/dessous de la piste, en fonction de l’environnent choisi. La rotation est définie en utilisant la fonction Laser Speed (Vitesse des lasers).
* **Lumières arrières :** Lasers statiques, souvent en forme de "X" au fond de la piste, derrière le chevron.
* **Ring Lights:** Lights attached to the inside of the large outer rings that spin in almost all environments.
* **Ring Spins:** Used to create movement in the rings. In environments with both an inner and an outer ring, rings spins rotate both rings together.
* **Ring Zooms:** Used to zoom and unzoom the inner ring in environments that have it. Does not affect the outer ring.
* **Laser Speed:** Changes the speed of the side laser rotation from stationary (0) to very fast (20). Set independently for the right and left side lasers. Back top lasers do not move. Laser speed increases linearly so **2** is twice as fast as **1** and **5** is five times as fast as **1**.
* **Boost Event:** Changes lighting colors between two pairs of colors. Off uses the first pair of colors. On uses the second (boost) pair of colors. There is no fade or flash option for this event.

## Lighting Events
Each lighting type can make use of four different lighting events.
* **On:** Turns a light on that will stay on until you place a different event type.
* **Off:** Turning a light off can have as much impact as turning it on, or more.
* **Flash:** Briefly flashes brighter than a standard “on” event then stays on until you place a different event type.
* **Fade:** Briefly flashes brighter than a standard “on” event then fades off after a couple of seconds.

::: warning NOTE  
It's impossible to control the duration of a fade out or use a fade in with standard lighting. Custom fade durations require Chroma, which will be discussed in Advanced Lighting (coming soon). :::

## Best Practices & Techniques
> "The only bad lights are **NO** lights.... or lightmap."  
> ~ Skeelie


Lighting truly is an art which means that it's much more subjective than mapping. There are relatively few best practices to get started and simple manual lighting is almost impossible to do poorly.

**TranquillizeMe** has created a lighting tutorial, [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc), detailing useful lighting techniques and general tips for lighting.

::: warning NOTE  
Lighting previews are not realistic in the editors currently available to the public so it’s important to preview your lights in-game often. See [Previewing Your Lights](#previewing-your-lights) for some tools that can help. :::

### Key Bindings
Each map editor handles lighting differently so you’ll want to get to know the key bindings and how placements work in your editor of choice. Lighting keybinds vary by editor. Consult your editor's user guide or readme or refer to this helpful list [Cross-Editor Keybindings](./editor-keybinds.md).

### Assigning Lighting Events
Mappers lighting their first map should start by assigning specific [lighting types](#lighting-types) to specific instruments, then branch out from there as they get more experienced. This method won't usually produce the most exciting shows, but it's hard to mess up. This might look like:
- **Track Lights:** Bass or Kick Drum
- **Lasers:** Melody
- **Ring Lights:** Synth A or Cymbals
- **Ring Zoom:** Synth B

Once this type of basic structure is in place and you're more comfortable with how everything works, you can think about where you might want to change things up for emphasis. Establishing a strict pattern is necessary to create impact when you do make a change; if you emphasize everything, you emphasize nothing (this goes for block placement, too!).

**An example from Lighting Mentor, LittleAsi**

> I usually light the melody with all three lasers (vocal and instrumental on different colors, or primary instrumental and accents on a different color), drums on the ring lights, and either bass or something harmonic like synths on the Bottom/Back/Side (BBS) (a bit much sometimes since they increased BBS intensity). If the drums are too involved to pack onto the ring lights alone, or there's nothing else appropriate for the BBS, I'll move the kick drum to BBS. If the drums are really dominant, I may put the back-top laser on snare duty to dedicate the ring lights to cymbals. The numerous avenues for changing laser behavior and appearance do make them the best candidate for tracking the melody, though. I have used speed 0 lasers for closed hi-hat with various speeds for open hi-hat and cymbal crashes, though, so it definitely doesn't have to be any specific way (just internally consistent).

### Laser Speed Resets
Applying the same laser speed twice in a row will cause it to reset to a random position. For example, setting speed 1 on every snare hit will cause the laser positions to randomize in time with the snare without ever actually changing their rotation speed.

If you don't reset the laser speed it will continue to spin consistently at that speed until changed.

### Off Event Placement
The sounds within a song rarely have a precise end point so there's not always a "correct" time to place the `Off` event). Be aware of when you're choosing to turn lights associated with specific sounds or instruments off, and apply those decisions consistently throughout the song.

Be cautious about putting off events exactly in the middle of two lights as it can sometimes create an unintended strobing effect.

## Default Environments
There are various built-in environments in Beat Saber which are part of the base game and can be used easily with a few clicks.

::: warning NOTE Custom environment models (platforms) created by the community exist but require the Custom Platforms mod which is not currently available through Mod Assistant. A beta version may be available in the `#pc-mods` channel of the BSMG Discord. :::

The basic structure of each environment is mostly the same. In the [Mediocre Map Assistant 2](./mediocre-map-assistant.md) editor the lighting track looks like this:
<p align="center">
![Screenshot of the MMA2 lighting track from the top down](~@images/mapping/mma2-lighting-track.jpg)
</p>

### Environment Previews
**Note:** The images below were created using a program called ReShade which increases contrast in post-processing to better highlight lights. Environments appear less dark in-game.

|                  Video and Screenshot (click to open full size)                  | Environment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:--------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       ![Image of Default environment](~@images/mapping/default_env16.jpg)        | **The First (Default) Environment**<br />**Info.dat Name:** `DefaultEnvironment` <br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (square)<br />**Inner Ring:** :white_check_mark: (square)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers <br /><br />**Video Preview:** [Streamable](https://streamable.com/800xuq), [YouTube](https://youtu.be/FOmVUpD4zHU)                                                                                                                                        |
|       ![Image of Origins environment](~@images/mapping/origins_env16.jpg)        | **Origins Environment**<br />**Info.dat Name:** `OriginsEnvironment`<br />**Default Colors:** Yellow & Pink notes, Blue & Light Blue lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark:<br />**Track Ring:** :white_check_mark:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br /> **Video Preview:** [Streamable](https://streamable.com/itxr1l), [YouTube](https://youtu.be/i5MBTgNs0Ek)                                                                                                                                                                                                                                             |
|      ![Image of Triangle environment](~@images/mapping/triangle_env16.jpg)       | **Triangle Environment**<br />**Info.dat Name:** `TriangleEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (compact square) <br />**Inner Ring:** :white_check_mark: (triangle)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers <br /><br />**Video Preview:** [Streamable](https://streamable.com/tbvqoq), [YouTube](https://youtu.be/ErRIYIGQKOQ)                                                                                                                                        |
|          ![Image of Nice environment](~@images/mapping/nice_env16.jpg)           | **Nice Environment**<br />**Info.dat Name:** `NiceEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (top & bottom)<br />**Track Ring:** :white_check_mark: (circle)<br />**Inner Ring:** :white_check_mark: (shape)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers <br /><br />**Video Preview:** [Streamable](https://streamable.com/jrxxeg), [YouTube](https://youtu.be/-kAv1420TXU)                                                                                                                                                            |
|    ![Image of Big Mirror environment](~@images/mapping/big-mirror_env16.jpg)     | **Big Mirror Environment**<br />**Info.dat Name:** `BigMirrorEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (square)<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br />**Video Preview:**  [Streamable](https://streamable.com/cdxujt), [YouTube](https://youtu.be/S3AQu8y5p2g)                                                                                                                                                                                                                                                   |
|   ![Image of Imagine Dragons environment](~@images/mapping/dragons_env16.jpg)    | **Imagine Dragons Environment**<br />**Info.dat Name:** `DragonsEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (square)<br />**Inner Ring:** :white_check_mark: (helix)<br />**Equalizer:** :white_check_mark:<br />**Note:** Back Top Laser position is the two rails on the far edges of the screen. It will always illuminate the opposite color of what you set it. <br /><br />**Video Preview:** [Streamable](https://streamable.com/y5u7zv), [YouTube](https://youtu.be/HTtwhBxrlrw)                                                         |
|           ![Image of K/DA environment](~@images/mapping/kda_env16.jpg)           | **K/DA Environment**<br />**Info.dat Name:** `KDAEnvironment`<br />**Default Colors:** Orange & Purple<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Note:** Ring Light position illuminates the five rails at the top. The lights in the center of the arrows never turn off. <br /><br />**Video Preview:** [Streamable](https://streamable.com/iuwenc), [YouTube](https://youtu.be/LigJdd2hpLI)                                                                                                                                                               |
|    ![Image of Monstercat environment](~@images/mapping/monstercat_env16.jpg)     | **Monstercat Environment**<br />**Info.dat Name:** `MonstercatEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (square)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers. Ring Light position illuminates the five rails at the top. <br /><br />**Video Preview:** [Streamable](https://streamable.com/g436ij), [YouTube](https://youtu.be/9qjDCkJw-ts)                                                                                         |
|     ![Image of Crab Rave environment](~@images/mapping/crab-rave_env16.jpg)      | **Crab Rave Environment**<br />**Info.dat Name:** `CrabRaveEnvironment`<br />**Default Colors:** Green & Blue<br />**Center Lighting:** :white_check_mark: (& Monstercat Logo)<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x:<br />**Inner Ring:** :white_check_mark: (square)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers. Ring Light position illuminates the five rails at the top. <br /><br />**Video Preview:** [Streamable](https://streamable.com/qov023), [YouTube](https://youtu.be/6ygTsCX8Ey4)                                                                                          |
|  ![Image of Panic at the Disco! environment](~@images/mapping/panic_env16.jpg)   | **Panic at the Disco! Environment**<br />**Info.dat Name:** `PanicEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark: (& windows)<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (helix)<br />**Inner Ring:** :white_check_mark: (helix)<br />**Equalizer:** :white_check_mark:<br />**Note:** Ring Lights are much brighter in this environment than in others. <br /><br />**Video Preview:** [Streamable](https://streamable.com/tysyou), [YouTube](https://youtu.be/LBUW9mDupxE)                                                                                                                    |
|     ![Image of Rocket League environment](~@images/mapping/rocket_env16.jpg)     | **Rocket League Environment**<br />**Info.dat Name:** `RocketEnvironment`<br />**Default Colors:** Orange & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x: <br /><br />**Video Preview:** [Streamable](https://streamable.com/t624jp), [YouTube](https://youtu.be/r8qO6IUg2Ww)                                                                                                                                                                                                                                                                                            |
|     ![Image of Green Day environment](~@images/mapping/green-day_env16.jpg)      | **Green Day Environment**<br />**Info.dat Name:** `GreenDayEnvironment`<br />**Default Colors:** Green & Cyan<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (helix)<br />**Inner Ring:** :x:<br />**Equalizer:** :x:<br />**Note:** "Green Day" text in the center never turns off. <br /><br />**Video Preview:** [Streamable](https://streamable.com/o7x37v), [YouTube](https://youtu.be/LuYAEk9iWFw)                                                                                                                                                                                                 |
| ![Image of Green Day Grenade environment](~@images/mapping/gd-grenade_env16.jpg) | **Green Day Grenade Environment**<br />**Info.dat Name:** `GreenDayGrenadeEnvironment`<br />**Default Colors:** Green & Cyan<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x:<br />**Inner Ring:** :x: <br />**Equalizer:** :x:<br />**Note:** Grenade and "Green Day" text in the center never turns off. <br /><br />**Video Preview:** [Streamable](https://streamable.com/wddtmm), [YouTube](https://youtu.be/DQHdUGx3UE0)                                                                                                                                                                                              |
|      ![Image of Timbaland environment](~@images/mapping/timbaland_env.jpg)       | **Timbaland Environment**<br />**Info.dat Name:** `TimbalandEnvironment`<br />**Default Colors:** Grey & Blue notes, Blue & Blue lights (same colors)<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right rings)<br />**Track Ring:** :white_check_mark: (rectangle)<br />**Inner Ring:** :white_check_mark: (rectangle)<br />**Equalizer:** :white_check_mark:<br />**Note:** "Timbaland" text on the sides never turns off. Laser speed affects the Back Top Lasers on the left and right rings. <br /><br />**Video Preview:** [Streamable](https://streamable.com/w6crs0), [YouTube](https://youtu.be/5cXX04umDsY)                             |
|        ![Image of FitBeat environment](~@images/mapping/fitbeat_env.jpg)         | **FitBeat Environment**<br />**Info.dat Name:** `FitBeatEnvironment`<br />**Default Colors:** Yellow & Pink notes, Brown & Grey lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (outer lasers) <br />**Inner Ring:** :white_check_mark: (helix) <br />**Equalizer:** :white_check_mark: <br />**Note:** Back Top Lasers will illuminate the opposite color of what you set it. <br /><br />**Video Preview:** [Streamable](https://streamable.com/1vqpmw), [YouTube](https://youtu.be/Y5CtZTpCcF4)                                                                                             |
|    ![Image of Linkin Park environment](~@images/mapping/linkin-park_env.jpg)     | **Linkin Park Environment**<br />**Info.dat Name:** `LinkinParkEnvironment`<br />**Default Colors:** Red & Blue-Grey notes, Beige & White lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x: <br />**Inner Ring:** :x: <br />**Equalizer:** :white_check_mark: (on side wall) <br /><br />**Video Preview:** [Streamable](https://streamable.com/7xzwoz), [YouTube](https://youtu.be/I8tzKUI0xZ0)                                                                                                                                                                                                                          |
|          ![Image of BTS Park environment](~@images/mapping/bts_env.jpg)          | **BTS Environment**<br />**Info.dat Name:** `BTSEnvironment`<br />**Default Colors:** Pink & Purple notes, Pink & Purple lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (background pillars) <br />**Inner Ring:** :white_check_mark: (track pillars) <br />**Equalizer:** :x: <br />**Note:** BTS logo in the center never turns off.<br /><br />**Video Preview:** [Streamable](https://streamable.com/vo5x93), [YouTube](https://youtu.be/WOVRxc3lydI)                                                                                                                                       |
|  ![Image of Glass Desert environment](~@images/mapping/glass-desert_env16.jpg)   | **Glass Desert Environment**<br />**Info.dat Name:** `GlassDesertEnvironment`<br />**Default Colors:**  Yellow & Pink notes, Blue & Light Blue lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: <br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark:<br />**Note:** This is the first 360&deg; environment. 360 levels MUST use this and it's not useable for standard levels. Ring Light position controls the horizontal outer rail. Back Top Laser position controls the six rails at the top. <br /><br />**Video Preview:** [Streamable](https://streamable.com/cnie5j), [YouTube](https://youtu.be/Nh6kSjobYB0) |

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

:::tip When choosing color overrides for the notes. It is **HIGHLY** recommended that you keep reddish/warm/aggressive colors on the left and blueish/cold/soft colors on the right to avoid confusing players. :::

See [Environment Default Colours](./lighting-defaults.md) for a list of default colors used in the environments.

[BeatMapper](./#beatmapper-app), [ChroMapper](./#chromapper-coming-soon), and [MMA2](./#mediocre-map-assistant-2) natively support color overrides. Check their respective guides for more information.

### Manually Adding Color Overrides
1. Decide what RGB colors you want notes and/or lights and/or walls to be. Use a color scheme utility like [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) to find complimentary colors.
    * Your red, green, and blue values will need to be converted from the normal 0-255 scale to the 0-1 scale. Use a site like [EasyRGB](https://www.easyrgb.com/en/convert.php) to convert your values.
2. Open your `Info.dat` file in the text editor of your choice
3. Scroll down to the `"_customData": {` section of the difficuty you want to color.
    * Using the global `"_customData": {` outside of the `"_difficultyBeatmapSets": [` array may not work as expected.
4. Paste whichever code blocks below correspond to the colors you want to force within the `_customData` curly brackets (`{` and `}`) then replace the `"r":`, `"g":`, and `"b":` values with whatever you chose in Step 1.
    * The `"r":` and `"g":` values **must** have commas after them.

See lines 29-60 and 69-100 of this [Pastebin clip](https://pastebin.com/x9zEiHxR) for an example of these code blocks in action in a `.DAT` file.

## Previewing Your Lights
These tools will help PC Beat Saber users preview their lighting more accurately. Most editors do not show true-to-life lighting effects.

### In-game with FPFC
First Person Flying Controller (FPFC) is a launch parameter that can be used by either Steam or Oculus users. FPFC will open an instance of Beat Saber on your desktop and allow you to control it with your keyboard and mouse. You will need the SiraUtil mod in order to interact while a map is playing.

It allows you to use WASD to "fly" around in your map, open the pause menu by hitting the <kbd>F2</kbd> key, or exit your level by hitting the <kbd>ESC</kbd> key (otherwise you must play your song to completion).

Install SiraUtil from ModAssistant and run Beat Saber to create a config json file. Edit the `SiraUtil.json` file in your `UserData` folder and change `"Enabled": false` to `"Enabled": true` under FPFCToggle and SongControl then follow the store platform specific steps below.  
![SiraUtil JSON Setting](~@images/mapping/sirautil-FPFC.png)

**For Steam Users:**   
Open the game properties and add `fpfc` to the Steam launch options.   
![Fpfc launch options](~@images/mapping/fpfc.png)

**For Oculus Users:**
1. Right click on Beat Saber.exe and create a shortcut.
2. Edit the Target to add "fpfc" to the end of it. For example: `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

After installing the mods and adding the launch parameter you can then now move around and pause in a map. The toggle key to switch between headset and mouse/keyboard control is <kbd>G</kbd>.

:::warning NOTE
- If you go back into vr and the game doesn't load in the headset either:
  - Press the <kbd>G</kbd> key until the headset displays the game  
    **==OR==**
  - Quit the game, remove the launch option, and relaunch the game.

- If the mod doesn't seem to be working, make sure the in-game Smooth Camera setting is disabled. :::

### Online with BS Viewer
[BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit** is an online tool that is a convenient way to checkout how your map might look in game without the game. Just upload your map zip to the website and preview! Unfortunately **IOS and Safari are currently not supported.**

## Credits
Content in this section was authored by [LittleAsi](./mapping-credits.md#littleasi) and [Kolezan](./mapping-credits.md#kolezan) or derived from guides by [Puds](./mapping-credits.md#puds) and [MandyNasty](./mapping-credits.md#mandynasty). With visual media contributions from [Aeroluna](./mapping-credits.md#aeroluna) and [Bullet](./mapping-credits.md#bullet).
