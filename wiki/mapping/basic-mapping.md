---
sidebar: auto
prev: ./basic-audio.md
next: ./intermediate-mapping.md
description: Learn all the info and best practices you need to make a solid first map!
---
# Basic Mapping
_If you are a new mapper, read this page from top to bottom. Every word. Every picture.
This page will give you all the info and best practices you need to make a solid first map!_

* [Glossary of Terms](./glossary.md)

## Ready to Map?
**Have you...**

1. [x] [Downloaded Audacity](https://www.audacityteam.org/) and chosen a [map editor](./#map-editing-resources)?
2. [x] [Set up your audio file](./basic-audio.md) to confirm your bpm and make sure you’ve got a good intro/outro?
3. [x] [Exported](./basic-audio.md#exporting) your song file as an OGG?

::: tip Are all these things done?
GREAT! You're ready to dive into your favorite editor and start mapping!
If not, click the links on the task list for more information.
:::

## The Essentials
Before you can even think about mapping, you need to understand the basics.

### Map Files
Regardless of what editor you choose to map with, every map needs:

* **Song File:** OGG format, you must have this ready before you can map. Name it `song.ogg`
* **Cover Image:** JPG or PNG, must be perfectly square and 512 pixels per side is recommended.
  You must have this before you can release your map.  Name it `cover.jpg` or `cover.png`
* **Info File:** All of the metadata for your map as a whole. Things in this file apply to ALL difficulties
  (i.e., song name, artist name, mapper name, song file name, cover image name, difficulty note jump speed, etc.).
  This file is automatically created by your editor.
* **Difficulty Files:** One per difficulty in your map. Things in this file apply to just the one difficulty
  (i.e., note placement, light placement, etc.). These files are automatically created by your editor.

Some editors will automatically create an `Autosaves` folder where you can retrieve older copies of your work if needed.
When you’re ready to prepare your song for upload you must have a minimum of four files.

::: warning
Special characters in languages such as, Japanese (日本語/にほんご), Kaomoji (٩(◕‿◕｡)۶), Chinese (汉语/漢語), Arabic
(اَلْعَرَبِيَّةُ‎), and accent characters (Ä/é/ó) are not fully supported by BeatSaver. Using these characters in song
metadata or in bookmarks can cause problems.
:::

### Block Types
<!-- markdownlint-disable MD013 -->
| Directional Blocks | Dot Blocks | Bombs | Walls |
| :----: | :----: | :----: | :----: |
| ![Directional Block](~@images/mapping/arrow-block.png) | ![Dot Block](~@images/mapping/dot-block.png) | ![Bomb](~@images/mapping/bomb.png) | ![Wall](~@images/mapping/wall.png) |
| Must be hit in the<br />direction of the arrow | Can be hit in any direction | Causes damage when struck<br />but safe for players | Damages players but<br />ok to rest sabers |
<!-- markdownlint-enable MD013 -->

**A few notes about walls:**

* Standard walls can be read by any headset and have the highest compatibility.
  New mappers should stick with these until they’re a bit more experienced.
* There are a few types of "hack" walls that do not require the Mapping Extensions mod: fast walls (fly by you fast),
  hyper walls (fly by you SUPER fast), and fake walls (look like normal walls but don’t cause damage).
* While these wall types are supported in some editors, they exploit base game mechanics and are considered unrankable.
* Read up more on base game walls in [Intermediate Mapping](./intermediate-mapping.md) and
  "fancy" mapping/noodle extensions walls in [Extended Mapping](./extended-mapping.md)

**A few notes about bombs:**

* Bomb hitboxes are smaller than block hitboxes, smaller even than the bomb model itself.
* Bombs are hard to see when there are no lighting events active. Make sure your map isn’t dark when bombs are coming up.
  See [Basic Lighting](./basic-lighting.md) for more tips.
* Bombs can still be hit once they have passed the player.

### Block Distribution
This varies based on the target difficulty and audience you are mapping for. For example, some players in the lower
difficulties might be overwhelmed by a balanced distribution across the three rows compared to a more experienced player
that can handle multiple jumps across the rows. Block distribution can also vary between mapping styles at the same
difficulty level.

For more on row usage in different difficulties, see [Gauging Difficulty](#gauging-difficulty-down-mapping).

::: tip
If you’re using [Mediocre Map Assistant 2](./mediocre-map-assistant.md) as your editor you can hit
<kbd>SHIFT</kbd>+<kbd>TAB</kbd> to open the error checker then click the <kbd>Stat Panel</kbd> button
to see this breakdown.
:::

## Timing & Rhythm
Before you start mapping in earnest you need to think about the rhythm of the song you want to map. You’ll place blocks
on one or more of the main instruments in the song: the drum beat, lead instrument, bass, synths, or even vocals.

To place blocks in time with the rhythm you’ll need to change your cursor precision. Most (but not all) songs will use
1/1, 1/2, or 1/4 cursor precision to get on beat. Some songs may use "triplets" or 1/3 cursor precision which can be hard
to tell from 1/4 to an inexperienced ear. You should not need to use less than 1/4 cursor precision for most songs
*including* mapping to vocals.

::: warning  
90% of the time, mapping with high precision (1/8, 1/16, 1/32, or 1/64) will make your song mistimed. If you need high
precision to get your notes to line up then you have an issue with your audio file setup. STOP and review
[Basic Audio Setup](./basic-audio.md) to ensure you’re in sync!
:::  

| 1/1 Cursor Precision | 1/2 Cursor Precision | 1/3 Cursor Precision | 1/4 Cursor Precision |
|:----:|:----:|:----:|:----:|
| ![1/1 Cursor precision screenshot](~@images/mapping/1-1_precision.png) | ![1/2 Cursor precision screenshot](~@images/mapping/1-2_precision.png) | ![1/3 Cursor precision screenshot](~@images/mapping/1-3_precision.jpg) | ![1/4 Cursor precision screenshot](~@images/mapping/1-4_precision.png) |
| 1 block per beat | 2 blocks per beat | 3 blocks per beat | 4 blocks per beat |

When timing out your map you’ll want to double check EARLY that the waveform in your editor is lined up with the major
lines of the editor track. If your waveform isn't lined up, revisit the [Basic Audio Setup](./basic-audio.md) page of
the wiki for tips.

::: danger CAUTION  
If your waveform isn’t lined up it will make it **very** difficult to place blocks in time with the music.
Get this right before you start or risk remapping later!
:::

| Audio Not Lined Up | Audio Properly Synced |
|:----:|:----:|
| ![Editor view with audio not properly synced](~@images/mapping/audio-broken.png)| ![Editor view with audio synced to the editor track](~@images/mapping/audio-synced.png) |
| Needs audio edits, start offset, or has wrong bpm | You’re ready to map! |

### Timing Notes
Consider starting the mapping process with placeholder or "timing" notes. Dropping a "dot note" placeholder can help you
figure out whether or not your map is on time and where you should consider using extra emphasis **before** you invest a
ton of time creating patterns. Listen to make sure the editor hit sounds are in time with the beat.

::: tip  
Not everyone uses timing notes but they can be a helpful way to ensure your maps are timed correctly as a new mapper.
:::

### Overmapping & Undermapping
Deliberately place blocks that match the music. Don't place more blocks than necessary just for the sake of making the
map difficult. Some songs were never meant to be super-dense ExpertPlus maps and that’s ok.

* **Overmapping** is the (bad) practice of placing more blocks than there are sounds. Don’t do it.
* **Undermapping** is the very acceptable practice of skipping some notes/beats (especially at lower difficulties).

### Emphasis & Consistency
We’ll go into more detail on this in [Intermediate Mapping](./intermediate-mapping.md) but, as a new mapper you should
understand at least the basic ideas of emphasis and consistency and how they impact your map.

**Emphasis** is how much "weight" you give each hit.

* Consider the base sound your mapping to to be a single hit (one block), including quiet or chill sections
* When the sound is "bigger" or you have two different instruments hitting on the same beat you can think about using a
  double hit or a stack (two blocks).
* For only the biggest sounds in the song you could use a double tower (four blocks, two for each hand) or other
  heavyweight pattern, but many songs never need this amount of emphasis.

Many new mappers instinctively want to use double hits all the time, but remember that those are heavy emphasis and if
*every sound* is emphasized then *nothing* feels like it has extra weight.

Another way to think about it is that you want the energy and effort of the hit to match the energy and power of the sound.
Nobody screams at the top of their lungs on every vocal, or in every instrument note. You want the powerful notes, the
powerful vocals, to stand out from the rest of the song. Even if most of the song might sound loud or (you think) emphasized,
there's always notes that sound above them. Be it through volume, or through energy. So when mapping, see what is your
baseline energy, map that as singles. Anything above that, then do towers/doubles/windows/jumps, whatever best matches
that energy.

**Consistency** is mapping the same sound with the same weight when it appears.  
Mapping consistently does NOT always mean to copy/paste/mirror, though there are some times when that is appropriate.
If you choose to map a particular big sound as a double, for example, that same sound should always be mapped with a double.

## Pattern Best Practices
This section details the principles one should follow for a playable and enjoyable map.

**Cyrix** has created a summary video, [Patterns to Avoid as a New Mapper](https://www.youtube.com/watch?v=mgGaqZ20Scw),
of the most common issues that are covered in this section.

### Vision Blocks
Vision blocks are any patterns that obscure the player’s vision and make it difficult to sight read a map, if not outright
uncomfortable. The primary cause of vision blocks is use of the middle two positions of the track, but there’s risk of a
block any time the middle row is used.

**Vision blocks can be avoided by:**

* Not using the center two positions of the track or
* Ensuring that blocks following anything in the middle row are either far enough away or in another position to the right
  or left of the block.
* Making sure that your player is pushed to the side with either obstacles or patterns so the center positions no longer
  completely block the player.

<!-- markdownlint-disable MD013 -->
| Ideal Block Placement | Vision Block Placement |
|:----:|:----:|
| ![No Vision Blocks](~@images/mapping/no-vision-blocks.jpg) | ![Face Notes](~@images/mapping/face-notes.jpg) |
| When you’re getting started, stick<br />to the perimeter of the track. | These are called face notes.<br />Avoid them as a new mapper. |
<!-- markdownlint-enable MD013 -->

::: tip  
**Mediocre Map Assistant 2** has a built-in handy-dandy error checker that can find vision blocks.
Learn more in the [MMA2 User Guide](./mediocre-map-assistant.md#error-checker).
:::

### Double Directionals & Resets
Double directionals (or DDs) are what you get when you have two blocks of the same color in the same direction within a
very short span of time. Diagonals, or any change of only 45 degrees between blocks, are considered to be DDs with both
the cardinal directions they combine.

::: align center
![Blue up right diagonal block](~@images/mapping/bnur.png)is a DD with both ![Blue up block](~@images/mapping/bnu.png)
and ![Blue diagonal block](~@images/mapping/bnr.png)
:::

Double directionals cause the player to double their swing speed compared to a "standard" up/down pattern. They have to
swing downwards, then bring their hand back up to swing downwards again, which is a lot of unnecessary motion. Alternate
the direction of every other block for better flow.

Many new mappers use DDs to simulate the feel of drumming. While this *feels* like it makes sense, drums have rebound
when you hit them and imaginary computer blocks... don’t. The game is called Beat Saber, not Beat Drummer!

| Standard Flow | Double Directionals |
|:----:|:----:|
| ![Image of standard up down flow](~@images/mapping/standard-flow.jpg) | ![Image of double directionals](~@images/mapping/double-directionals.jpg) |
| A good mapping practice | Yikes! Don't do this. |

**Resets**
DDs *do* have their uses (typically in more "dancey" maps) if you give the player enough time to reset their hands back
to neutral position. This usually means no DD’s within 2 beats for "normal" bpm songs and longer for high bpm songs.

::: warning  
If you’re using intentional DDs in a dance-style map you’ll need to make your NJS slower and spawn offset longer to give
the player enough time to react.
:::

::: danger
Wrist resets are when you change the forehand/backhand flow of a a pattern mid-stream causing your player to roll their
wrist to reset flow. They can break normal human body mechanics and put players at serious risk of joint damage. Do not
use wrist resets at high precision!
:::

When long periods of time pass between notes, the player will reset their arm position so it’s often preferable to start
the new section with a down block.  In gray areas of time, like 3 seconds without notes, it is up to the mapper to reset
the player or to continue the flow.

Want to learn more about resets? Read [Intermediate Mapping](./intermediate-mapping.md)!

### DO: Mapping with Flow
Outside of easy and normal difficulties, mapping with flow is an absolute must. Human bodies are incredible machines but
there are certain ways that joints are meant to move and using patterns that violate those mechanics is a recipe for
injuring your player.

Parity is the concept that each block direction is played with either a backhand swing or a forehand swing. The black
line in the diagram below illustrates this forehand (below the line)/backhand (above the line) divider for the left
and right sides.

::: align center
![Parity diagram showing the forehand/backhand line for each block color](~@images/mapping/parity_diagram.jpg)
:::

When mapping with flow you are striving to always cross this parity line with the most natural movement possible.
Effectively, your player should always be alternating between forehand and backhand every swing.

This video demonstrates the basics of parity: [YouTube](https://youtu.be/tLQK4gN3bDc)

A thing important to keep in mind, especially if you are new to the game or mapping, is that the concept of parity is
most obvious for wrist players. If you do not play with your palm directly facing the ground, then you might struggle
to understand why some parity breaks are uncomfortable. Remember that while it may feel fine to you, players have
different grips and styles. Proper parity feels good for everyone, not just some playstyles.

::: tip  
When proper flow is achieved the player should be physically capable of getting full points on each block, even if they
don’t have the skill or interest in doing so. See the [Scoring](/grips-and-tricks.md#scoring) section of the wiki for
more info.
:::

| 0° Angle | 45° Angle | 90° Angle | 135° Angle | 180° Angle |
|:----:|:----:|:----:|:----:|:----:|
| ![0 degree angle change between blocks](~@images/mapping/0deg.png) | ![45 degree angle change between blocks](~@images/mapping/45deg.png) | ![90 degree angle change between blocks](~@images/mapping/90deg.png) | ![135 degree angle change between blocks](~@images/mapping/135deg.png) | ![180 degree angle change between blocks](~@images/mapping/180deg.png) |
| No. (DD) | No. (DD) | Maybe. | Yes. | Yes. |

**Basic Flow Concepts:**

* The higher your note precision, the more you want to stick to 180° (up/down) and 135° (up/down/diagonal) patterns.
* 90° transitions that cross the parity line should only be considered with enough time to play smoothy.
* Make sure that you have the right setup (the pattern immediately before) and escape (the pattern immediately after)
  for a comfortable swing at whatever speed you’re mapping.
* Be conscious of your timing, you can get away with more at sub-160 BPM tempos with lower note precision than you can
  in high BPM songs. Map for the style of song you’ve selected.

### DON’T: Forbidden Patterns
These are called forbidden patterns for a reason. There is no reason in the world to use these because they're dangerous
to either the player's hardware, the player's joints, or they go against the scoring system. You may have played maps
that included these but that doesn't make them ok.

#### Handclaps
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of a handclap](~@images/mapping/controller-smash.png) | ![Editor view of a handclap](~@images/mapping/controller-smash-alt.png) | Pointing blocks at each other may cause the player to smash their controllers together when playing for max points. Don’t do it, no exceptions.<br /><br />Note: Different VR sets have different controllers. Vive wands are much bigger than Oculus touch controllers and Index knuckles... don’t put your players’ hardware at risk! *AKA Controller clash, Controller smash* <br /><br /> [Example Video](https://clips.twitch.tv/FantasticTenderTortoiseDancingBanana)|

#### Hammer Hits
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of a hammer hit](~@images/mapping/hammer-hit.png) | ![Editor view of a hammer hit](~@images/mapping/hammer-hit-alt.png) | Any directional block pointing towards a bomb on the same plane is just evil (and undermines the scoring system). Don’t do it. No exceptions. |

#### Disembodied notes
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of disembodied notes](~@images/mapping/disembodied-notes.png) | ![Editor view of disembodied notes](~@images/mapping/disembodied-notes-alt.png) | Do not hide blocks on the other side (or inside) of walls. Most of the time, these are simple mistakes that people don’t find because they don’t adequately playtest their maps (NOTE: Always [playtest](./#playtesting) your maps!) |

#### Rapid Wall Dodge
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of rapid wall dodge](~@images/mapping/rapid-wall-dodge.png) | ![Editor view of rapid wall dodge](~@images/mapping/rapid-wall-dodge-alt.png) | Keep head movement slow and predictable. Do not force the player to very quickly move from one side of their play space to the other. Wall dodges are fine (and fun!) to use but allow *at least* 1.5 beats for the player to switch sides for higher BPM songs. You don’t want to risk them bumping into things or falling over. |

#### Danger Dash
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of danger dash](~@images/mapping/danger-dash.png) | ![Editor view of danger dash](~@images/mapping/danger-dash-alt.png) | Never force the player into the far edge of their playspace with 3-width walls or a 2-width wall in the middle. Walls that encompass the two middle columns gives the player very little room to play, and you don’t know how large their play area is or how far they will dash in response to these walls. |

#### Bomb Spam
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of bomb spam](~@images/mapping/bomb-spam.png) | ![Editor view of bomb spam](~@images/mapping/bomb-spam-alt.png) | Bombs are good for forcing precision, or for punctuating silence, but overuse of bombs should be avoided. Also note that most people hate bombs in general, so they should be used sparingly.<br /><br />**Note:** Precision bombs shouldn't be used more than once per beat. |

#### Cross
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of cross](~@images/mapping/cross.png) | ![Editor view of cross](~@images/mapping/cross-alt.png) | This large, awkward pattern is difficult to read and can lead to smashed controllers, tangled arms, and ugly vision blocks. Players will likely not read it correctly the first time they see it, but even if they do, it’s not a satisfying motion anyway. Consider using a different pattern altogether. |

#### Hidden Blocks
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of hidden blocks](~@images/mapping/stacked-hidden.png) | ![Editor view of hidden blocks](~@images/mapping/stacked-hidden-alt.png) | Blocks should never be stacked on top of one another or in walls. Any combination of blocks are technically stackable in the editor (including bombs and walls). Sometimes these are hard to spot if two identical blocks are stacked. Use the error checker in MMA2 to find these! |

#### Hitbox Abuse
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of some hitbox abuse](~@images/mapping/hitbox-abuse.png) | ![Alternate llustration of some hitbox abuse](~@images/mapping/hitbox-abuse-alt.png) | Leave room for the player to swing at each block. In the patterns depicted here, there is not enough room for the saber to slice each block without hitting the other. These are technically still possible to hit, but only by coming in at an angle, and if you have to come in at an angle, you may as well change the block direction to a diagonal anyway.<br /><br />The illustration below from Split, one of the game developers, shows the size of the block hitbox. The **large** outer box is for good hits and the small inner box is for bad hits.<br />![Illustration of block collider hitboxes](~@images/mapping/hitbox-from-split.jpg) |

#### Wide Precision
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of wide precision](~@images/mapping/wide-precision.png) | ![Editor view of wide precision](~@images/mapping/wide-precision-alt.png) | These bombs are incredibly hard to avoid for players with short arms. When the player swings through these blocks, their arms come inward, and hit the bombs. |

### MAYBE: Highly Situational Patterns
These patterns are OK to use but only in very specific circumstances or with very specific setup.
It’s best to steer clear of these until you’re much more comfortable with mapping.

#### Flicks
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of a flick](~@images/mapping/flick.png) | ![Editor view of a flick](~@images/mapping/flick-alt.png) | "Flicks" of two or more blocks of the same color at 1/4 precision are a difficulty spike, regardless of song tempo. It is the precision here that is important, not the patterns since these examples follow proper flow techniques. Even though flicks are more easily playable in lower tempo songs, they are incredibly difficult to use appropriately and should be avoided. |

#### Triangle
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of a triangle](~@images/mapping/triangle.png) | ![Editor view of a triangle](~@images/mapping/triangle-alt.png) | Triangles are patterns that cause incredibly uncomfortable wrist resets  when used at high precision and speed. The pattern breaks the forehand/backhand mechanic and can injure your player. See the [Mapping with Flow](#do-mapping-with-flow) to revisit this explanation.<br /><br />**Note 1:** Not all triangle shaped patterns are cursed triangles. Make sure you are always crossing the parity line with each swing.<br /><br />**Note 2:** This sort of pattern plays differently at hard difficulties and below when there are a couple of beats between each swing but stay away at Expert and ExpertPlus. |

#### Incorrect Side Hits
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of upside down side hits](~@images/mapping/upside-down-side-hits.png) | ![Editor view of upside down side hits](~@images/mapping/upside-down-side-hits-alt.png) | Generally speaking, when making a double crossover, you should put RED on top when slicing left, and put BLUE on top when slicing right. This is a best practice because you don’t have to move your opposite hand as far. The exception is Expert/ExpertPlus, but  **only** if the flow of patterns leads to these placements naturally. |

#### Rapid Crossovers
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of rapid crossovers](~@images/mapping/rapid-crossover.png) | ![Editor view of rapid crossovers](~@images/mapping/rapid-crossover-alt.png) | Give the player time to prepare, and don’t make them cross sides too fast or too often. This pattern takes time to process and it’s a larger motion in-game than it looks in the editor. Also, never put this pattern in the top row. It's also recommended to offset the hits and put one of the two notes on the bottom row to reduce handclap risk. |

#### Wide Inward Doubles
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of inward doubles](~@images/mapping/wide-inward-doubles.png) | ![Editor view of wide inward doubles](~@images/mapping/wide-inward-doubles-alt.png) | Inward facing double blocks on the edges or downward facing blocks on the top row are very difficult to hit for small/short players, and uncomfortable for the rest. This should generally be avoided. The exception is Expert/ExpertPlus, but  **only** if the flow of patterns leads to these placements naturally. |

#### Excessive Towers
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of excessive towers](~@images/mapping/excessive-towers.png) | ![Editor view of excessive towers](~@images/mapping/excessive-towers-alt.png) | Placing 3 blocks of the same color, vertically or horizontally, may seem fun, but you can achieve the same "hard hitting" effect with just 2. 3 feels excessive in-game. Even when using 2, don’t place anything directly behind them, since visibility will be low.<br /><br />At Expert/+ if you are going to use this for major emphasis, each block needs to be staggered after each other at 1/16 (<200 bpm) or 1/12 (>200 bpm) precision, turning this into what is known as a slider. |

#### Awkward Curves
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of awkward curved swings](~@images/mapping/awkward-curved-swings.png) | ![Editor view of awkward curved swings](~@images/mapping/awkward-curved-swings-alt.png) | Do not place two or more blocks of the same color together that do not face the same way. It is harder to read, feels awkward, and undermines the scoring system. Often, these patterns are used as a way to introduce flair to a map, but it’s really just a crutch for unimaginative mapping. Instead, add flair by introducing original patterns that flow well together. |

#### Detached Walls
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of detached walls](~@images/mapping/detached-walls.png) | ![Editor view of detached walls](~@images/mapping/detached-walls-alt.png) | Combine your adjacent/ touching walls for a cleaner, less visually cluttered experience. Click and drag (left to right) to create walls wider than 1 column. Scroll to create walls shorter/longer than one beat (or whatever your cursor precision is set to) and click again to finish placing your wall. Don’t ever cover the entire grid with walls as depicted in the illustration. <br /><br />**Note:** This rule goes out the window when you get into wall mapping with Mapping Extensions, though this is NOT recommended for new mappers. |

#### Extended Crouch
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of extended crouch](~@images/mapping/extended-crouch.png) | ![Editor view of extended crouch](~@images/mapping/extended-crouch-alt.png) | Consider your target audience when using extended sections of top walls. You can't predict all players' physical ability, so use this in moderation. If you have notes immediately following a crouching section, make the starting direction UP, and consider visibility due to the player’s lower position.<br /><br />**Note:** Avoid placing blocks under a crouch wall, but if you must, always place them on the bottom row sides with horizontal slice directions (or dots). |

#### Corner Crouch
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of corner crouch](~@images/mapping/corner-crouch.png) | ![Editor view of corner crouch](~@images/mapping/corner-crouch-alt.png) | Consider your target audience when forcing the player to crouch in one corner. As stated above, crouching sections should be kept short because you can't predict all players' physical ability. Forcing the player to additionally move left/right while crouching increases the threshold of full-body range of motion. While this tactic may be fun for some, you don't want to ostracize the players that are incapable of this motion. |

#### Sky Streams
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of sky streams](~@images/mapping/sky-streams.png) | ![Editor view of sky streams](~@images/mapping/sky-streams-alt.png) | Avoid repetitive use of blocks in the top row. This causes shoulder strain in addition to top row down notes being annoying to score well on.<br /><br />**Note:** Blocks on the top row in Easy and Normal should be dots and used sparingly. |

#### Visual Clutter
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of visual clutter](~@images/mapping/visual-clutter.png) | ![Editor view of visual clutter](~@images/mapping/visual-clutter-alt.png) | Avoid unnecessary visual clutter. Having a directional block point towards/away from a dot block does not serve any functional purpose, and it’s hard to read at a glance. If you’re telling the player to slice in a particular direction, be consistent and make both blocks directional to increase readability.<br /><br />**Note:** At Expert/+ when making sliders it is common to start with an arrow then use dots afterward. |

#### Easy to Miss Patterns
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of overlapping hitboxes](~@images/mapping/overlapping-hitboxes.png) | ![Editor view of overlapping hitboxes](~@images/mapping/overlapping-hitboxes-alt.png) | Generally, try to avoid patterns with overlapping hitboxes, as this makes the pattern difficult to hit consistently. The hitboxes are larger than the note, and most players rarely hit the actual note when they swing, making it easy to hit the smaller hitbox within notes that detects bad hits on patterns like this. See [Hitbox Abuse](#hitbox-abuse) for more info.  |

#### Arm Tangles
| Illustration | Editor View | Explanation |
|:----:|:----:|:---- |
| ![Illustration of arm tangles](~@images/mapping/arm-tangle.png) | ![Editor view of arm tangles](~@images/mapping/arm-tangle-alt.png) | Crossing hands is usually fine, but crossing hands and going in opposite directions vertically causes the player’s arms to hit each other. Reverse these colors and you’re good to go. This is only one example of an arm tangle. Always be aware of where you're leaving your player's arms and how they are going to escape from that position to hit the next pattern. |

#### Face Punchers
| Editor View | Exaplanation |
|:----:|:---- |
| ![Editor view of a face puncher](~@images/mapping/facepuncher-alt.png) | Face punchers are blocks placed in the opposite top corners pointing outwards. This placement requires the player to perform a large crossover in a direction that potentially causes their controllers to smash into their headset. <br></br> **Never** use a double of face punchers. |

## Gauging Difficulty & Down-Mapping
Many mappers tend to map the difficulty level at which they play but there are plenty of benefits to mapping lower difficulties:

* Full spreads widen your audience leading to more downloads
* They look more professional when cruising for new maps... like official game maps

The actual difficulty level of a song is a combination of note density, pattern complexity, and note speed and spawn point.
When down-mapping it’s important to understand what skills players at different levels have and how to use that information
to develop a sense of progression in your levels.

### Relative Difficulty
Maps should always have a progression of complexity from Easy through Expert+. The actual difficulty range of these levels
in terms of note density has been creeping up since the game first came out.

While it’s best to stick within conventional ranges to start, as long as your levels have a clear progression of difficulty
they don’t need to fit neatly into a box. If you’re only doing one difficulty you should stay within the expected range.
Your map’s difficulty should fit the song - a 200 BPM Camellia song is going to be more challenging than a 120 BPM pop song.

::: align center
![A table of NPS values from official content](~@images/mapping/ost-extras-nps.png)
:::

The above table of average notes per second (NPS) for the OST Extras shows how tracks like "What The Cat!?" are quite
dense at the highest difficulty and the easy is also more dense than other easy levels. In each of these cases there is
still a progression from Easy to ExpertPlus.

### Pattern Complexity
Map difficulty should come from pattern complexity with a great deal of attention given to how well they flow together.
You might have a lower density expert, for example, that includes a lot of technical patterns that require more time to
adequately sightread.

::: tip  
Remember that you are teaching players different patterns and sight reading skills with your maps. Make sure you give
them time to react before you throw something new at them at each level of difficulty.
:::

<!-- markdownlint-disable MD013 -->
| Difficulty | Pattern Notes |
|:----:|:---- |
| Easy | &#8227; All cardinal directions (down, left, right, the occasional up)<br /> &#8227; Knock yourself out with DDs. Players will reset after every hit at this speed.<br />&#8227; Use up/down doubles for big emphasis if the music calls for it before or after a break.<br />&#8227; Blocks placed generally every other beat (depending on tempo)<br />&#8227; Very few obstacles, if any, which are easy to avoid with no simultaneous notes<br />&#8227; Almost all blocks should be in the bottom row. Use the middle row as a flourish for emphasis.Use the top row very sparingly with dot notes only<br />&#8227; Red stays in lanes 1 and 2, Blue stays in lanes 3 and 4 |
| Normal | &#8227; All cardinal directions and the very occasional diagonal with lots of time to react and recover<br />&#8227; Begin to introduce up/down flow, especially anywhere you have notes that are close together, but DDs are still present especially after breaks<br />&#8227; Up/down and left/right doubles used for emphasis as appropriate<br />&#8227; Blocks generally placed every beat to two beats - mix it up a bit<br />&#8227; Keep your obstacles easy to avoid but start to introduce blocks sprinkled in with lots of time to react<br />&#8227; Almost all blocks still on the bottom row but higher use of middle row sides. Keep top notes rare and still as dots<br />&#8227; OK to let your red start drifting into lane 3 and your blues into lane 2 but still not crossing over each other |
| Hard | &#8227; All cardinal directions and limited diagonals with time to react<br />&#8227; Flow is now critical unless you have a break of 5+ beats. Try to cross the parity line with every swing.<br />&#8227; All doubles are fair game including inverted doubles with sabers going opposite directions, ok to start introducing stacks with plenty of reaction time<br />&#8227; Notes mostly every beat with some 1/2 beats and the occasional 1/4 thrown in with the rhythm.<br />&#8227; Keep 1/2 sections short, no more than 6-8 beats without a break. If a burst of 1/4 is used, keep it to 3-4 blocks with a break.<br />&#8227; All obstacles are fair game but make sure you are not creating vision blocks<br />&#8227; Mixing bottom, middle, and top rows with top notes transitioning from dots to directional blocks<br />&#8227; Any color, any lane is fine but give lots of reaction time before any occasional "true" crossover where the players arms have to cross to hit. |
| Expert | &#8227; Anything goes in expert but players are still improving sight reading skills. Keep patterns either fast and basic or slower and more technical... combine the two and you have an ExpertPlus!<br />&#8227; All note types viable here in any proportion<br />&#8227; Flow is critical; DDs will make or break your map<br />All emphasis options on the table including sliders with 1/16 or greater precision<br />&#8227; Mostly 1/2 beats with 1/4 mixed in to fit the rhythm. Make sure there is the occasional break in long streams.<br />&#8227; All obstacles are fair game but make sure you are not creating vision blocks.<br />&#8227; Expert introduces a lot more jumps,  though they still require enough reaction time<br />&#8227; Crossovers should be used wisely and not combined with other weird patterns.|
| ExpertPlus | &#8227; Welcome to the wild wild west! You can throw any good mapping practices at your player here.<br />&#8227; At high tempo and note density, patterns you could use effectively at hard and maybe expert start to become cursed. Players are often using their wrists instead of arm movements so body mechanics change at this level.<br />&#8227; Breaking the parity line with every swing is now crucial. You will get skewered if you don’t<br />&#8227; Stay away from triangles, DDs, and VBs.<br />&#8227; Be careful of sudden speed increases from 1/4 precision gallops and 1/4 single hand hits (flicks).
<!-- markdownlint-enable MD013 -->

### Note Density
Notes per Second is a measure of note density - how many notes does the player have to hit in a certain amount of time.
The values below are from the [OST Analysis Spreadsheet](https://drive.google.com/open?id=13wyoviJAplYOrsMocOA7YNXJxVRHd74G7z4U2jhCZa4)
which shows NPS ranges for all OST, Extras, and DLC content.

| Difficulty | Notes per Second |
|:----:|:---- |
| Easy | 0.8 - 2.2 NPS |
| Normal | 1.1 - 3.2 NPS |
| Hard | 1.7 - 4.2 NPS |
| Expert | 2.4 - 6.5 NPS (yes, you read that right) |
| ExpertPlus | 3.2 - 8.7 NPS (no upper limit here, really) |

### Note Jump Speed
There are several terms related to how the speed of gameplay feels.
These are all interrelated and modified by the song’s tempo:

* **Note Jump Speed (NJS)** is the rate at which blocks move down the track at the player.
  The higher the number the faster the blocks.
* **Jump Distance (JD)** (also known as **Spawn Distance**) is how far down the track the blocks will spawn in distance (meters).
* **Half Jump Duration (HJD)** is how far in advance blocks appear in time (beats).
* **Spawn Distance Offset** (also known as **Spawn Distance Modifier**) is a modifier which increases the jump distance.
  This can make the NJS feel slower since the blocks will spawn further away and the player has more time to react.

Summary video demonstrating the effect of these values in-game: [YouTube](https://youtu.be/S70CDoWjdwk), [Streamable](https://streamable.com/2l7fz9).

Changing the NJS or Offset values will modify the half jump and jump distance. Community editors will show you how these
values change when making adjustments. Fine-tuned NJS and offset are a matter of personal taste but try to hit a half
jump of 2 or 3 beats and a jump distance of 26-30 meters.

::: warning
Jump distance should run on the higher end of this range for expert and lower difficulties. Very dense ExpertPlus maps
often have very short jump distances to minimize clutter.
:::

| Difficulty | Note Jump Speed Range |
|:----:|:---- |
| Easy | 10 NJS |
| Normal | 10 NJS |
| Hard | 12-14 NJS |
| Expert | 14-16 NJS |
| ExpertPlus | 16+ NJS |

When mapping very fast Expert+ maps, make sure you increase the Note Jump Speed, though you shouldn’t need to go higher
than 22. This will make the notes come at the player faster with more space in between them, increasing readability.

::: warning NOTE  
Setting your NJS really high is **not** the right way to increase difficulty. Use higher note density and more complex
patterns (with good flow).
:::

For more information, see the [Note Jump Speed & Jump Distance](./intermediate-mapping.md#note-jump-speed-jump-distance)
section in [Intermediate Mapping](./intermediate-mapping.md).

## Playtesting
Already mentioned in detail on the [Mapping Home Page](./#playtesting) it’s important enough to mention again here:

1. Test your own work early and often, especially when you’re just starting out!
2. If you can’t test your own work have a friend play it. Just remember that a friend may be more likely to say "that’s
  awesome, man!" than to give you honest advice and risk hurting your feelings... even if that’s what you need.
3. Even if you test your own work you can become "map blind" because you know it so well and may not see playability issues
4. Use the `#testplays` channel on BSMG wisely. There are experienced mappers who will play your pre-release map and
  provide constructive feedback. Sometimes there’s a LOT of constructive feedback and that’s ok. Those experienced mappers
  were once newbies with terrible maps themselves. If you’ve read and absorbed the info on this page you will be much
  better off!

**HAPPY MAPPING!** Visit `#mapping-discussion` on the BSMG Discord with questions!

## Credits
Content in this section has been derived from guides by [Awfulnaut](./mapping-credits.md#awfulnaut) and [Hexagonial](./mapping-credits.md#hexagonial).
