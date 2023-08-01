---
prev: false
next: false
description: A more in-depth look at many mapping topics to take your maps to the next level!
---

# Intermediate Mapping

The [Basic Mapping](./basic-mapping.md) page is useful for learning what not to do as a new mapper. Once you have a bit of
experience it's time to take your understanding of mapping principles to the next level. Ultimately, the best way to learn
to map is to simply keep at it.

**Try. Adjust. Listen. Repeat.**

In this page you will find an introduction to most topics that mappers usually think about. For some of them, you will find a link to an advanced page.

## What makes a good Beat Saber map?

There are so many aspects that matter to this question, but generally speaking, we can classify all or most of these into two main categories:

- [**Representation**](#representation) - Does the map represent the song's rhythm, mood and feel? Topics about the relation between the music and the map.
- [**Gameplay**](#gameplay) - Does the map play well? Is it comfortable, fun and has an appropriate difficulty? Topics about the way the map feels to play, more or less independently of the music.

A good map will do well in both of these aspects, and will make them work together.

Arguably, there is a third, much more subjective, aspect, that relates to the two above and that differentiates competent maps from great maps:

- [**Identity**](#identity) - Is the map memorable? Does it leave an impression on the player? Does it offer something that other maps do not?

### Accounting for playstyle and taste: Target audience

In the above, we have not qualified what *good*, *comfortable*, *fun*, *appropriate* and *memorable* mean. All of these are highly subjective and will vary a lot between players.
There is no map that everybody will love or that nobody will dislike. Fast, slow, move a lot, optimize scoring, difficult, easy, complicated patterns, simple. Many different tastes
and many different ways to play. Mapping is level design. Design is both an art and a science. There is no "best" answer, but there are many "wrong" answers.

This is why you need to keep in mind your *target audience*. This is the conceptual set of players that you want to make the map for. While it is good to keep the target audience
large, often mappers will constrain their audience to make the map better for those in it by prioritizing their core ideas.

Most concepts in this page are relevant to most playstyles and tastes, but what is good and bad in each case and how much priority you give to them will vary.

::: tip TIP
There is no map that everybody will love. Identify and focus on your target audience.
:::

### Mapping is a balancing act

You can't have the cake and eat it too. Usually there are trade-offs that you need to decide on in your map. Better representation might require less comfortable gameplay,
or making your ideas playable might make them too easy. At a finer level, in order to make vision work you may have to use less than ideal positioning, for example;
or have less consistent emphasis to achieve better body motion.

You should attempt to find solutions that offer the best of all worlds, but accept that you will not always find them.

::: tip TIP
Aim for the best you can in all aspects, but accept imperfection when you must.
:::

## Representation

*Representation* refers to the correspondence between the map and the song. Representation happens at multiple levels:

- How do the individual notes represent individual sounds.
- How do the transitions between notes represent the progression of the music.
- How does the general structure of the map relate to the structure of the song.

There is no singular recipe to do good representation, but there are a few core concepts that most mappers consider.

### Rhythm choice

*Rhythm choice* is the choice of which sounds to represent in the map (or a part of it).

This is one of the most important decisions to make. It should be well justified and will condition most other aspects of the map.
Here are some principles to consider when deciding rhythm choice:

- What are the most prominent or central sounds that you hear in the song?
- Rhythm choice does not need to be the same for the whole map, but it should not change abruptly.
- Does your rhythm choice allow you to produce a map of the adequate intensity for the feel of the song?

As a result, rhythm choice usually corresponds to either a single instrument (including voice) or a few of them working together, though other options are also valid, for example:

- Focus on some instruments, and fall back to the others when they are silent.
- Focus on some instruments, and occasionally map some important sounds of the others.

::: tip TIP
Don't try to map every sound. This usually creates unplayable maps. Focus on what's most important, and consider using bombs, walls and lights to fill in the gaps.
:::

**((Example of a map or maps of the same song with varying rhythm choices that are all good, explain briefly))**

### Emphasis

*Emphasis* is matching the relative intensity of different sounds and/or song sections with the mapping that represents them.

While big towers, windows, doubles, fast jumps, and fast streams are fun, consider whether the patterns being mapped
reflect the intensity level of the music.

- Within a section, the most prominent sounds should be emphasized more, and the less prominent less emphasized.
   Emphasis can be done in a variety of ways, such as:
   - Adding [larger hits](#handedness-and-types-of-patterns) (doubles, stacks, windows...) for oomph.
   - [Spacing](#spacing) notes further apart to induce bigger swings.
   - Producing larger [rotations](#rotations) between note angles.
   - Mapping faster rhythms to induce [faster swinging](#swing-speed).
   - Not mapping less significant sounds or segments so the more important sounds or segments stand out more.
   - Using walls to induce [body motion](#full-body-motion).
   - Using [bombs](#bombs) to generate tension or secondary movements.
- The intensity of the mapping in each section relative to other sections should be somewhat in line with the intensity
   of the music.
- Deviation from the intensity of the music is fine as long as sections are not excessively elevated or lowered relative
   to the intensity of the rest of the song.

::: tip TIP
Emphasis is about relative intensity. If everything is emphasized, nothing is emphasized.
:::

**((Example of a map with good emphasis choices with much variation in it))**

### Consistency

*Consistency* is using the same or similar map elements to represent the same or similar song elements.

Consistency contrasts with *variation*, which is also a desirable quality to a certain degree.
For example, mapping every instance of the same sound exactly the same is not enough variation.
For example, mapping each instance of the same sound as completely different things is not enough consistency.
Consistency is about similarity and familiarity, not about exact correspondence. Variation is about nuanced representation
and keeping things fresh, not about arbitrary changes.

Consistency comes into play in two places, within a section and when comparing separate sections of a song.
   - Within a section, rhythm choice should generally stay consistent as it allows players to establish
      that rhythm and follow it.
   - Within a section, consistency in patterns is desirable as well, but some variety within the bounds of the established patterns and rhythms is appreciated.
   - Similar sections of the song usually benefit from having similar mapping.
   - Contrasting sections of the song will need to have contrasting mapping.
   - Representing small variations in the music over different sections through small variations in the mapping while preserving consistency is ideal.   

::: tip TIP
Use familiar patterns for familiar sounds and sections, but do not obsess over exact correspondence.
:::

**((Example of a map with similar but different sections with good consistency and good variety simultaneously))**

### Structure

Music has a high-level *structure*. A song is normally divided in *sections*, which have different intensities and fulfill different roles within it.

Even if you do not know much about music theory, normally you can identify the different parts of a song, how they are made of smaller parts and how they relate to each other.
This is a great tool for representation, as it gives you a scaffholding under which to understand and examine the music and plan your map.

These are some of the typical sections present in songs:
- The *introduction* introduces the listener/player to the vibe and basic rules of the song/map.
- The *verses* usually work at an intermediate intensity, developing the ideas of the song/map.
- In some genres, some verses (sometimes called *build-up*) work to increase the intensity of the music/map in preparation for the main part of the song/map.
- The *chorus* (in some genres replaced by a *drop*) is the main part of the song/map and usually has more intensity.
- The *bridge* is normally an intermediate intensity section that changes the tone of the song/map and resets our expectations. Sometimes introducing new elements of the
song/map not present before.
- Some songs/maps will have an *outro* that allow us to slowly disengage from it.

:::tip TIP
When you begin a map, spend some time understanding what sections the song has and how they relate to each other. This will inform your mapping.
:::

## Gameplay

When we talk about *gameplay*, we talk about how the map plays. Gameplay can largely be understood independently of the music it represents, although in
practice, good representation will also make a map more natural to play.

There are dozens of dimensions that can describe how a map plays, even at the most abstract level. We normally include at least the following:

- Is the map [*physically comfortable*](#flow)? Maps can be uncomfortable on purpose, but it should be a conscious and calculated choice, not a consequence of sloppy mapping.
- How [*fast*](#speed) does the player need to move?
- Is the map [*readable*](#readability)? This means whether players are able to understand the movements they are meant to do when playing the map.
Maps can be difficult to read on purpose, but yet again, it should be a conscious and calculated choice.
- In general, how [*difficult*](#difficulty) is the map?
- Is it possible/easy to [*score well*](#scoring) on the map? Many maps don't worry much about scoring, but for some target audiences, this might matter.

Awareness of how the choices you make when mapping affect these dimensions can be critical to making maps that play exactly the way you want them to play.
Unlike topics relating to Representation, topics relating to Gameplay are usually more objective and can be described and predicted in more technical ways,
even though there is still plenty of subjectivity involved.

### Flow

*Flow* may easily be the hardest to define, but still widely used, term in Beat Saber mapping jargon. A minimal definition would describe it as the way in which the movements
produced by the map's notes, bombs and walls transition into each other over time.

Normally, we say that a map "flows well" to mean that it is comfortable and natural to play, that the movements are intuitive and physically pleasant.

However, there is no written rule that a map must "flow well" to be a better map. Sometimes, more or less uncomfortable flow can be used as a tool for emphasis and representation,
or simply as a means to increase the difficulty of the map.

Pretty much every aspect of a map affects flow, and so providing a list or summary here would not make it justice. Instead, in the more [technical sections](#technical-aspects-of-a-map) below we consistently refer to flow.

:::tip TIP
To understand flow, think about the relation between subsequent notes, not about individual patterns.
:::

### Speed

When talking about map *speed*, we usually refer to the speed at which the player must swing the notes.

However, at a general level, there are other aspects to speed, such as the speed of [full body movement](#full-body-motion) or
the *sensation of speed* that the specific patterns produce.

Speed is one of the most easily quantifiable ways to measure a map, in terms of difficulty, in terms of its relation to the rhythm choice and in terms
of how intense it feels to play it. Therefore, a mapper should always be aware of the speed of their map. However, speed is not fully determined by
rhythm choice, as it also depends on the choice of how the sounds are mapped to the two hands and/or to full body movement.

Playstyle changes with map speed. For slower songs, it is easier to perform large [arm swings](#arm-and-hand-position), [curved swings](#rotations), [hand repositioning](#arm-and-hand-positioning),
and contort the [whole body](#full-body-motion) to hit more unusual patterns. At high speeds, there is very little time to process and adapt to what approaches, mentally and physically.
Thus, fast maps and patterns tend to be considerably more *linear*.

The section on [swing speed](#swing-speed) contains more technical concepts that are usually used to discuss a map's speed.

### Readability

*Readability* refers to how well a map communicates its intended motions to the players.

Since readability is about communication, it depends on the receiver (the player) almost as much as it does on the sender (the mapper, via the map).
Moreover, it relies on the mapper and the player speaking a common language. A Beat Saber map is a message with a limited vocabulary between the mapper,
trying to communicate a motion, to the player, trying to perform it. To make matters worse, players have limited time and processing ability to read
what the map is trying to convey while playing, specially when *sight reading* the map (playing it for the first time).

Thus, it is not enough that a map *can* be played well, it must also do a good job of communicating its intended motions to the player. Most players will play
a map once ever, or once every few weeks or months. Expecting players to remember or expect the types of movements that the map requires without communicating
them adequately is a recipe for disappointment. By the same token, target audience is particularly relevant when considering readability, as it will condition
the particular dialects of Beat Saber maps that they understand.

A perfect example of perfectly playable but difficult to read, and usually problematic, patterns are implicit [parity](#parity) resets, and particularly triangles.
![Triangle](/.assets/images/mapping/triangle-alt.png)

The pattern is notably ambiguous as it requires a reset motion at some point but it is unclear to the player at which point would it be best to do so.

Note that, like flow, a map can be hard to read on purpose. This is a risky choice but it may work to provide identity, help representation or simply provide
a more memorable experience.

#### Mapper blindness

A condition that most mappers, specially novice mappers, will experience, is called *mapper blindness*, where a mapper
will often struggle to identify readability issues in their map because they already know what the intended motion is when they testplay it.
This will be worse with ambiguous or jump-scary patterns that can be played in multiple different ways or catch the player unprepared, respectively.
While mapper blindness can be reduced with good understanding of best mapping practices, nothing replaces having other players and mappers testplay your map
and analyzing their reactions to the patterns the first time they see them.

:::tip TIP
Just because a map can be played well it does not make it a good map. It must also be readable.
:::

#### Suggested / intended motions

It would be useful to explain what *suggested or intended motion* means. For some sequences of patterns, extra motion is suggested to make the pattern play comfortably.
An example is a scoop:  
![Scoop](/.assets/images/mapping/scoop.png)  
In order to hit the up note following the side note, the [arm](#arm-and-hand-position) must take a longer scooping path to be in position.

Suggested motion is risky because players will read and react to patterns differently. One
player may hit a scoop as intended, but another player may recoil and flinch given the pattern and have a negative
experience. This problem can never be entirely avoided when using suggested motion, but clever use of [bombs](#bombs),
[walls](#full-body-motion), [momentum](#momentum-and-tension) and managing the player's [expectations](#map-context) can help to communicate the intended motion.

The scoop pattern above might play well in a map that goes into the pattern in a way that encourages big movement or a map that trains the player to
expect these kinds of movements, but be completely unexpected in a different map.

#### Clutter

Another important challenge to readability is *clutter*. Clutter is more likely to happen when a map is faster, as it will have more notes approaching the player
at a given moment. Good [positioning](#spacing) to space out the notes over the player's view, adequately managing [vision blocks](#vision) and optimizing [jump settings](#jump-settings) are the main ways to reduce clutter,
though sometimes it can be very difficult to avoid.

### Difficulty

*Difficulty* ultimately is a combination of other aspects, but it can be useful to identify it independently.

Readability, flow and speed are arguably the main factors conditioning a map's difficulty. Difficulty should normally be a consequence of other aspects of the map, but be accounted for.
We say that a map has *artificial difficulty* if it introduces elements that make it more difficult without enhancing any other aspect of the map (i.e. it does not play better or represent
the music better). You should normally avoid artificial difficulty. Instead, consider whether your map can represent more, or whether you can up the intensity of the gameplay.

:::tip TIP
Avoid artificial difficulty. If your map feels too simple you can up the intensity and/or increase representation.
:::

Difficulty is very important to consider with respect to your target audience. If your audience finds the map too hard they will not be able to play it. While a map can be too easy, this
normally is a side effect of reduced representation or simplified gameplay.

Similarly, adding multiple difficulties to your map can be a great way to expand your target audience without watering down your map.
*Downmapping* is the process of taking your initial difficulty, and then breaking it down to be appropriate for other
skill levels. Most mappers start with Expert+ and downmap from there. Check out the [Downmapping](./downmapping.md) page for a deep dive into this process.

### Scoring

The particular mechanics of Beat Saber, as well as the predominant and natural playstyles of players, make it so that certain patterns and maps are
easier to achieve a higher score on than others. In most cases, considerations about the ability to score begin when considerations about the inherent difficulty
of the map become less relevant. In other words, being able to hit the notes to begin with is orders of magnitude more relevant than how easy it is to achieve
a good score on them. Therefore, scoring concerns typically become relevant when players are performing a full combo of the map or close to it.

At these levels, scorability of a map (often called *accability*) relates to how easy / possible it is to get high *accuracy* on the notes.
That is, how easy / possible it is to hit the notes in the center.

Generally speaking, most maps do not need to worry about how accable they are. You should mostly worry about it if it is part of your target audience.
These maps are sometimes called *Accuracy* maps.

**((Add link to advanced section on making Accable maps))**

## Identity

*Identity* refers to a map being memorable, leaving a mark in the player, encouraging players to replay it and differentiating itself from other maps.

To a large degree, this can be achieved through good representation and gameplay. However, it may be argued that there are additional, subtle details that help
a map generate identity. Highly specific and well executed representation choices, encouraging unusual playstyles, perfectly executing a very specific gameplay idea,
memorable visuals, etc.

Sometimes, it is precisely the ways in which maps cleverly break standard rules of mapping that produces the most memorable maps. In order to do this, good understanding
of these rules and how they can be broken without producing unplayable maps

There is not much science to describe identity, as it is on the far artistic side of mapping, but it should be noted that it will often matter.
The most popular and renowned maps will often be those that have great identity on top of competent representation and gameplay.

**((Examples of maps with great identity))**


## Technical aspects of a map

In the following sections, we describe more specific details about the aspects of maps that contribute to producing good representation and gameplay.
For some of these, you will find links to more advanced guides.

### Note timing

asd

**((Probably just link to a couple of advanced sections on variable BPM, Swing and other things))**

### Handedness and types of patterns

asd

### Parity

asd

### Rotations

asd

**((Link to momentum and tension section))**

### Swing speed

asd

### Spacing

asd

**((Link to momentum and tension section))**

### Arm and hand position

asd

### Full body motion

asd

**((Probably add an advanced page for it))**

### Bombs

asd

**((Probably add an advanced page for it))**

### Arcs

asd

### Posture

asd

### Momentum and tension

asd

**((Definitely add an advanced page for it))**

### Pattern setup

asd

### Jump settings

asd

### Vision

asd

### Map context

asd

### 90/360 mode

asd

**((Probably add an advanced page for it))**



**--------------------------**

**--------------------------**

**(( THESE ARE OLD BITS THAT MAY GET REUSED LATER, IGNORE))**

**--------------------------**

**--------------------------**

## -- IGNORE EVERYTHING BELOW THIS --


## Visibility

Players need to see the notes to comfortably prepare and react.
Notes that are hidden until the last second are very jarring to play.

**((Mention ArcViewer here))**

### Vision Blocks

Speed influences visibility heavily, as the note jump speed and jump distance dictate how much time the player has to see
incoming notes. The player will have too little time to react to notes that spawn too close and approach too quickly. Likewise,
vision blocks are more severe as the song gets faster- when the note exists for a shorter time, any time that the block is
obscured is more impactful. At extreme speeds and slower note jump speeds, even bottom row blocks can obscure other bottom
row notes (the same can be said for top row notes, but those are rarely used at a density where this is a problem).

### Note Jump Speed & Jump Distance

Note Jump Speed (NJS), Spawn Offset (or offset), and Jump Distance are additional factors you need to consider for visibility.

For more information check out the [Downmapping: NJS & Offset](./downmapping.md#njs-offset) section.

## Understanding Flow

**((This section is in my opinion the one that needs most extra detail from what it has now))**

In [Basic Mapping](./basic-mapping.md#do-mapping-with-flow) we covered the bare essentials of parity.
Now we'll dig deeper and explore why some hits just feel bad.

This video demonstrates some more advanced concepts of parity: [YouTube](https://youtu.be/NF8ESZRXI1c)

Flow is arguably the most important concept in mapping - how each arm travels to move from one hit to the next. This can
be as simple as alternating between "forehand" and "backhand" notes, or as complicated as thinking about how one arm
interacts with the other at the edges of the playspace. Since the player must see blocks in order to react to them, flow
highly depends on speed and difficulty. Slower songs are far more forgiving and flexible with regards to flow, while a
fast song is highly limited.

::: tip TIP
Still learning and not seeing some of the errors testplayers point out?
Check out [GalaxyMaster's parity checker](https://galaxymaster2.github.io/bs-parity/) to spot any parity breaks!
:::

### Block Directions & Positions

Each swing a player makes leaves their arm in a new position. At hard difficulty and higher, the player will leave their
arms in this new position while waiting for the next motion. The block that follows must consider the position of the arm.

<!-- markdownlint-disable MD013 -->

|                                  **Poor Positioning**                                   |                                   **Poor Angles**                                   |                                  **Good Position & Angle**                                   |
| :-------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|      ![Example of Poor Positioning](/.assets/images/mapping/poor_positioning.jpg)       |          ![Example of Poor Angle](/.assets/images/mapping/poor_angle.jpg)           | ![Example of Good Positioning and Angle](/.assets/images/mapping/good_positioning_angle.jpg) |
| You can see here that the arm is not ready to hit down from the position it is left in. | In order to hit the next block, the arm has to do a lot of extra motion to wind up. |              Taking both into consideration, you are left with a smooth motion.              |

<!-- markdownlint-enable MD013 -->

- Each block has a limited selection of following blocks that feel good to play.
- It takes longer wind up for less optimal hits and more suggested motion to play, be it from another block, bombs, or walls.
- Faster songs have less time to see and comprehend the next block, leaving the mapper with more limited options for patterns.
  Vision blocking notes/walls are risky for this same reason.
- Counter-clockwise wrist motions are preferred with the right hand and clockwise wrist motions are preferred with the
  left hand. Try it yourself and feel the difference!

**((There is a section needed here on what identifies a swing (handedness, type of swing, position, angle))**

#### Soft Resets

**((Honestly, remove. This is outdated mapping practices))**

Soft resets are resets where implied motion strongly suggests resetting the hand. The most common example of this is a
half-double, present in many maps. This is where a down double followed by a single up followed by a down double, where
its implied that both arms should raise on the single up despite only 1 note being there.

While these patterns allow for more freeform dancey motion, they are very difficult to sightread and throw the player
off of their natural rhythm. This is due to the fact that only one of the two hands on a soft reset feels the haptic
feedback of slashing a note. These are best used when the player is familiar with the rhythm and motion, and requires
a large offset to see them approaching.

### Arm Tangles

Arm tangles happen when a pattern requires one arm to swing through another arm's spot. Care must be taken to ensure that
crossovers at risk of tangling are either kept above/below the other arm, or returned to their side before the other arm's
next hit.

Slower maps typically reward dancier and larger arm motions, causing arm tangles to have a stronger negative impact. On
the other hand, faster maps typically are hit with less full-arm motion and can cheat arm tangles by having just the tip
of the saber hit crossovers.

### Crossovers

**((Requires update, potentially merge with arm tangles))**

Crossovers happen when one arm swings to the opposite side of the playspace. This is a challenging motion reserved for
harder difficulties or slower maps. Crossovers open up the playspace for many interesting patterns so long as they are
handled with care.

When swinging far from the natural position of the arms, bad flow is more pronounced. Additionally, the risk of arm
tangles arises when crossovers do not consider the positions of notes to unwind the player during or after the sequence.

## Spacing

Spacing is the distance between notes on the grid. The further apart two notes are on the grid (ignoring time), the larger
the spacing. In general, larger spacing requires larger motions to hit and requires either larger arm motion or very
precise wrist motion. Spacing is larger horizontally than vertically due to the extra rows. Inverted notes (up arrows in
the bottom row and down arrows in the top row) create the largest spacing due to the fact that the player must swing from
outside the grid to hit these blocks.

## Walls

Walls are a versatile tool in maps that are often overlooked. They provide the most direct way to influence full body motion,
as well as an immersive visual element. Overuse/misuse can lead to visual clutter or full vision blocking- so care must
be taken. Treat any wall placed in either of the middle two lanes as a vision block for that lane, as they block the same
(if not more) space. Additionally, walls placed in both middle lanes at the same time are never acceptable - most players
cannot safely move out of the way within their playspace. Even players who are able to dodge these walls will not enjoy
the amount of movement required.

### Moving the Player with Walls

**((There are important aspects missing here))**

Walls are a way to encourage the player to move left, right, down, or a combination of the three while playing.
They are extremely powerful at doing this since players cannot touch them for too long.

#### Dodge Walls

Left and right movement should feel natural and never be forced.

- The note pattern should already encourage the player to move in that direction.
- There should be enough space between walls if using left/right back to back.
  - Often 1 beat between the end of one and the start of next is enough. Though depending on the BPM more space is required.
- Groove Walls are a situational exception to this but, are hard to execute correctly.

#### Crouch Walls

Down movement is trickier as it is easier to do more harm than good.

- Most players dislike crouch walls, be very selective when using them.
  - Crouch walls should be avoided when the jump distance is very short and NJS is high as they
    make even fully telegraphed crouch walls too fast to react to.
- Keep them short, there's rarely a good reason to have them longer than 1-2 beats.
- If you are ending a crouch wall with notes just after, be extremely careful with what direction you start (up/down).
  - Starting down too quickly is uncomfortable and almost always unnecessary.
  - Starting up too late is also awkward.
- It is easy to justify a crouch wall if the lyrics in a song say "down", "under", or any other reference to a downward motion.
- Side notes are more natural to hit while under a crouch wall than up/down notes.
- It is better to have a crouch wall end early than late as it plays better for any player in general.
  Especially those who have physical trouble crouching for too long.
  - If your crouch wall is longer than 1 beat, shorten it by 0.5.
  - If less than 1 beat and greater than 0.5, shorten by 0.25.
  - Otherwise, leave it.

### Aesthetic Walls

These walls are one option for adding a visual element to the map close to the player. They narrow down the field to a
smaller region, making notes feel closer together and faster approaching. They can also be used to represent sounds not
mapped by notes, or even used to flesh out quiet/slow/vocal drifting sections.

Using Mapping or Noodle Extensions opens up a huge space of possibilities by allowing walls to be of almost any height,
width, and location but, requires a significantly larger amount of effort and is not playable without the respective mod.
See [Extended Mapping](./extended-mapping.md#wall-mapping) for more info.

## Bombs

**((Can definitely do with some more specificity))**

The opposite of notes, bombs count as misses when they are hit. This opens up more opportunities for patterns, but have
significant limitations. Notes specify the direction, timing, and hand all in one block. Bombs, on the other hand, have
very little limitation imposed on the player.

Just as notes are placed with flow in mind, bombs should be placed as well! Bombs located where the sabers will be after
swinging will not flow well due to the abrupt motion required to avoid it. Bombs placed at the same time as notes are
particularly limiting as they either will restrict the swing path or offer little value to the map other than decoration.

Note that since bombs do not strictly define any motion, different players will approach bomb patterns with different
motions. Care must be taken to ensure bomb patterns are easy to read and smooth to play, otherwise they will cause frustration.

As a result, bombs are not often used in maps other than for bomb resets. Bomb resets are a way to reset both hands to
the same direction, but if used too quickly will feel abrupt and uncomfortable. This can be remedied by having notes
immediately before the bomb reset guide the player to resetting more smoothly.

## Sliders

Sliders are the use of multiple notes at different times all hit with the same swing.
They fit well for sounds that are sustained for slightly longer than a normal note, but have significant restrictions.

Conventionally, sliders are started with an arrow block and followed with dot blocks spaced at 1/16 or 1/24 from the
original block. Sliders slower than these precisions require the player to alter their swing speed to successfully hit,
which is not desired. Sliders faster than these precisions are essentially stacks/towers.

The using 1/16 vs. 1/24 precision depends on bpm though 1/16 is a safe choice for most speeds. **It is more important for
sliders to be playable than to match with the rhythm.** If a 1/8 sound is mapped with 1/8 sliders, it may be too slow to
play comfortably in one swing.

Note that there are directions that work more comfortably than others. Namely, sliders should travel clockwise for the
left hand, and counterclockwise for the right hand. Sliders are almost always restricted to 3 notes or less, as changing
directions mid-slider is extremely difficult to score well on. Sliders that end in the opposite lane (Such as left (Red)
sliders ending in the rightmost lane) are easy to miss.

Sliders can also cause significant vision blocks when use in bulk even if the center two positions are not used due to
how much visual space the dots fill. Window sliders (3-note sliders that omit the center note) can be used to avoid face
notes and clear up vision, but risk being hard to read.

**((If we preserve it, we should add sections here on chains and arcs))**

## Inverts

**((This should probably go higher up. Also, expand.))**

Inverts are notes that are placed in a location which forces the player to swing considerably more than if they were
located in a more traditional position. They add emphasis to the map and require proper setup to play comfortably.

Be aware that inverts can be quite hard to read especially in rapid succession or at higher speeds.

**Example placements**  
![Invert Example](/.assets/images/mapping/invert-example-placements.png)

## Note Alignment for MMA2

**((Yeet))**

It is not apparent in MMA2 but this is how some notes align in game.

![MMA2 Alignment Example](/.assets/images/mapping/mma2-alignment-examples.jpg)

## Single Saber/Handedness Switches

**((Replace with a section on handedness))**

Alternating the hand leading a pattern can be highly effective at providing variety, interesting motions, or unique
rhythms but have limitations.

Typically the player expects patterns to be in the sequence of:
![Blue Down](/.assets/images/mapping/bnd.png) To > ![Red Down](/.assets/images/mapping/rnd.png) To > ![Blue Up](/.assets/images/mapping/bnu.png)
To > ![Red Up](/.assets/images/mapping/rnu.png)

Deviating from this can allow for unique motions and crossovers without tangling, but risks being challenging to read or
play at higher speeds. For example if done mid-pattern, it requires one hand to flick twice as fast. While this might not
be an issue for slower patterns, faster ones with less visibility or more aggressive motions can be problematic.


## High Speed Mapping

Playstyle slowly changes as the map reaches extreme speeds (around 200+ BPM). For slower songs, it is easier to perform
large arm swings and contort the whole body to hit more unusual patterns. While at high speeds, there is very little time
to process what approaches and the game becomes a combination of instinct, precision, and stamina. Patterns and placement
gets more and more limited, and visibility becomes of the essence.

Hidden blocks will be virtually invisible at extreme speeds due to the short amount of time that blocks remain on screen.
Inlines, 2-column streams, hitbox-abusing patterns, and large spacing one-handed jumps all become exponentially more
problematic as speeds approach extreme speeds. Other, normally innocuous patterns also become challenging including
double spam, complex streams, wide hits, and sliders.

While mapping, it is recommended to slow down playback speed of the song to time notes to the song as accurately as possible.

## Variable BPM Songs

If, while mapping, you notice that your song was properly aligned but suddenly changes or starts to fall off beat,
then it's likely a BPM issue.

If the alignment suddenly and dramatically shifts for large parts of the song, but it seems consistent, it is likely
your map has multiple BPMs. Depending on how often it occurs, this is relatively easy to fix. You can simply cut the
map up into pieces where the grid becomes unaligned, and then run each one through
[Arrow Vortex](./basic-audio.md#sync-using-arrow-vortex) to find the correct BPM for each part. You can then use BPM
blocks to readjust the grid to align to the beat.

However, if the grid is less consistent and drifts around being aligned with no dramatic changes, then it is likely your
song has a drifting BPM. This is common in older songs. This can be more of a hassle to deal with, but it is possible to
address. Please see the [variable BPM guide](./advanced-audio.md#variable-bpm) for more information.


## Swing In a Song and How Shuffle Helps

::: tip NOTE
This is a stub section. If you'd like to contribute, submit suggestions via
[this form](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform).
:::

See this guide by Sykes
[What swing is, and how "shuffle" will make your mapping easier](https://docs.google.com/document/d/1j7w1X-0QtnJDFVKzyyQc_KR7RE9H3C3JFesIXGR0s1c/edit)
on how to use the built in shuffle feature to make mapping songs that have swing easier.

## Credits

Content in this section was authored by [Checkthepan](./mapping-credits.md#checkthepan), [CyanSnow](./mapping-credits.md#cyansnow),
[Uninstaller](./mapping-credits.md#uninstaller), [Skyler Wallace](./mapping-credits.md#skyler-wallace),
[Kolezan](./mapping-credits.md#kolezan), [Pyrowarfare](./mapping-credits.md#pyrowarfare), [DarkGrisen](./mapping-credits.md#darkgrisen),
[Vaser888](./mapping-credits.md#Vaser888) and Undeceiver.
