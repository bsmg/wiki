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

In this page you will find a summary of most topics that mappers usually think about. Some of those topics also have an advanced page.

## What makes a good Beat Saber map?

There are so many aspects that matter to this question, but generally speaking, we can classify all or most of these into two main categories:

- [**Gameplay**](#gameplay) - Does the map play well? Is it comfortable, fun, and has an appropriate difficulty? Topics about the way the map feels to play, more or less independently of the music.
- [**Representation**](#representation) - Does the map represent the song's rhythm, mood, and feel? Topics about the relation between the music and the map.

A good map will do well in both of these aspects, and will make them work together.

Arguably, there is a third, much more subjective, aspect, that relates to the two above and that differentiates competent maps from great maps:

- [**Identity**](#identity) - Is the map memorable? Does it leave an impression on the player? Does it offer something that other maps do not?

:::details Read more...
GalaxyMaster has published [his perspective](https://docs.google.com/document/d/1E-BG62Y1BEsb0Vs6Lv7wErIY-zefeLkrfsTOwSc_EMY/edit?usp=sharing) on this question.
:::

### Target audience: Accounting for playstyle and taste 

It is hard to quantify what *good*, *comfortable*, *fun*, *appropriate*, and *memorable* mean. All of these are highly subjective and will vary wildly between players.
There is no map that everybody will love or that nobody will dislike. Fast, slow, move a lot, optimize scoring, difficult, easy, complicated patterns, simple. Many different tastes
and many different ways to play. Mapping is level design. Design is both an art and a science. There is no "best" answer, but there are many "wrong" answers.

Keep in mind your *target audience*: the players that you want to make the map for. While keeping the target audience large can be good,
mappers will often constrain their audience to make the map better for those in it by prioritizing their core ideas.

Most concepts in this page are relevant to most playstyles and tastes, but what is good and bad in each case and how much priority you give to them will vary.

::: tip TIP
There is no map that everybody will love. Identify and focus on your target audience.
:::

::: details Examples
The following are all good but very different maps, because they target very different audiences:
- https://allpoland.github.io/ArcViewer/?id=1a0b6 - Dance map - More casual audience who wants to dance to the music.
- https://allpoland.github.io/ArcViewer/?id=1a2cd - Speed map - Higher skill audience who likes physical intensity and challenge.
- https://allpoland.github.io/ArcViewer/?id=2d4e6 - Momentum tech map - Audience that likes complex patterns and large and unusual motions with good flow.
:::

### Mapping is a balancing act

Usually, there are trade-offs that you need to decide on in your map. Better representation might require less comfortable gameplay,
or making your ideas playable might make them too easy. In order to make vision work you may have to use suboptimal positioning, 
or you may have less consistent emphasis to achieve better body motion.

You should attempt to find solutions that offer the best of all worlds, but accept that you will not always find them.

::: tip TIP
Aim for the best you can in all aspects, but accept imperfection when you must.
:::

:::details Example
Consider https://allpoland.github.io/ArcViewer/?id=2c25a&t=0 on beats 0-40 and focus on the percussion (kicks).

There are kicks on beats 8, 11, 16, 19, 24, 27, 32, 35 and finally 40. All of them are mapped as doubles with scissor parity, **except** 40, which is mapped as a stack.

This is because this last one comes after a slightly fast section, and mapping 40 as a double as well would have created a *gallop* pattern which would have been a bit uncomfortable to play.
Moreover, the mapper was interested in a particular parity on the right hand for the representation and gameplay of the following patterns.

Thus, the mapper decided to be a little loose on representation, mapping it as a stack instead of a double on this occasion.
:::

On the flip side, sometimes there are improvements that you can do at almost no cost in other aspects, even if it is not part of your original vision.
Whenever you are faced with a small choice between your vision and an objective improvement, it is almost universally better to go with the latter.

::: tip TIP
Rather than asking yourself "do I really need to change it?", try asking "do I really need to keep it?".
:::

## Gameplay

When we talk about *gameplay*, we talk about how the map plays. Gameplay can largely be understood independently of the music it represents, although in
practice, good representation will also make a map more natural to play.

There are dozens of dimensions that can describe how a map plays, even at the most abstract level. We normally include at least the following:

- Is the map [*physically comfortable*](#flow)? Maps can be uncomfortable on purpose, but it should be a conscious and calculated choice, not a consequence of sloppy mapping.
- How [*fast*](#speed) does the player need to move?
- Is the map [*readable*](#readability)? Are players able to understand the movements they are expected to do when playing the map?
- How [*difficult*](#difficulty) is the map?
- Is it possible/easy to [*score well*](#scoring) on the map? Many maps don't worry much about scoring, but for some target audiences, this might matter.

Awareness of how the choices you make when mapping affect these dimensions can be critical to making maps that play exactly the way you want them to play.
Unlike topics relating to Representation, topics relating to Gameplay are usually more objective and can be described and predicted in more technical ways,
even though there is still plenty of subjectivity involved.

### Flow

*Flow* may easily be the hardest to define, but still widely used, term in Beat Saber mapping jargon. A minimal definition would describe it as the way in which the movements
produced by the map's notes, bombs, and walls transition into each other over time.

Normally, we say that a map "flows well" to mean that it is comfortable and natural to play, that the movements are intuitive and physically pleasant.

However, there is no written rule that a map must "flow well" to be a better map. Sometimes, more or less uncomfortable flow can be used as a tool for emphasis and representation,
or simply as a means to increase the difficulty of the map.

Pretty much every aspect of a map affects flow, so providing a list or summary here would not make it justice. Instead, in the more [technical sections](#technical-aspects-of-a-map) below we consistently refer to flow.

:::tip TIP
To understand flow, think about the relation between subsequent notes, not about individual patterns.
:::

:::details Read more...
Kansas made [an incomplete list](https://docs.google.com/document/d/16hydw1Vob9uDK3VTpwXn9ov0o-kp_xgm9jpPduOwOJ4/edit?usp=sharing) of some of the terminology often used when discussing flow.
:::

### Speed

When talking about map *speed*, we usually refer to the speed at which the player must swing the notes.

However, there are other aspects to speed, such as the speed of [full body movement](#full-body-motion) or
the *sensation of speed* that the specific patterns produce.

Speed is one of the most easily quantifiable measures of a map. Both in terms of difficulty, in terms of its relation to the rhythm choice and in terms
of how intense it feels to play it. Therefore, a mapper should always be aware of the speed of their map.

However, speed is not fully determined by rhythm choice, as it also depends on the choice of how the sounds are mapped to the two hands and/or to full body movement.

Playstyle changes with map speed. For slower songs, it is easier to perform large [arm swings](#arm-and-hand-position), [curved swings](#rotations), [hand repositioning](#arm-and-hand-positioning),
and contort the [whole body](#full-body-motion) to hit more unusual patterns. At high speeds, there is very little time to process and adapt to what approaches, mentally and physically.
Thus, fast maps and patterns tend to be considerably more *linear*.

The section on [swing speed](#swing-speed) contains more technical concepts that are usually used to discuss a map's speed.

:::tip TIP
A good mapper is always aware of how fast their map is.
:::

:::details Example
In https://allpoland.github.io/ArcViewer/?id=34dc5&t=126, the mapper uses a standard pattern (one-handed jumps) to increase the sensation of speed at the end of the drop, without overmapping.
The song does not, technically, go faster in this section than before, but it feels more intense due to the repetitive sound to release any remaining tension from the drop. Using jumps as a
representation choice allows the mapper to convey that in the mapping.
:::

### Readability

A Beat Saber map is a message with a limited vocabulary between the mapper, trying to communicate a motion, to the player, trying to perform it.
*Readability* refers to how well a map communicates its intended motions to the players.

Since readability is about communication, it depends on the receiver (the player) almost as much as it does on the sender (the mapper, via the map).
Moreover, it relies on the mapper and the player speaking a common language. To make matters worse, players have limited time and processing ability to read
what the map is trying to convey while playing, specially when *sight reading* the map (playing it for the first time).

Thus, it is not enough that a map *can* be played well, it must also do a good job of communicating its intended motions to the player. Most players will play
a map once ever, or once every few weeks or months. Expecting players to know the types of movements that the map requires without communicating
them adequately leads to disappointment. By the same token, target audience is particularly relevant when considering readability, as it will condition
the particular dialects of Beat Saber maps that players understand.

A perfect example of perfectly playable but difficult to read, and usually problematic, patterns are implicit [parity](#parity) resets, and particularly triangles.
![Triangle](/.assets/images/mapping/triangle-alt.png)

The pattern is notably ambiguous as it requires a reset motion at some point but it is unclear to the player at which point would it be best to do so.

Note that, like flow, a map can be hard to read on purpose. This is a risky choice but it may work to provide identity, help representation or simply provide
a more memorable experience.

:::tip TIP
The best way to evaluate a map's readability is to get fresh testplays from players that have not seen the map before.
:::

###### Mapper blindness

A condition that most mappers, specially novice mappers, will experience, is called *mapper blindness*, where a mapper
will often struggle to identify readability issues in their map because they already know what the intended motion is when they testplay it.
While mapper blindness can be reduced with good understanding of best mapping practices, nothing replaces having other players and mappers testplay your map
and analyzing their reactions to the patterns the first time they see them.

:::warning WARNING
Just because a map *can* be played well it does not make it readable. Maps need to communicate their motions properly.
:::

###### Suggested / intended motions

For some sequences of patterns, extra motion is suggested to make the pattern play comfortably.
An example is a scoop:  
![Scoop](/.assets/images/mapping/scoop.png)  
In order to hit the up note following the side note, the [arm](#arm-and-hand-position) must take a longer scooping path to be in position.

*Suggested or intended motion* is risky because players will read and react to patterns differently. One
player may hit a scoop as intended, but another player may recoil and flinch given the pattern and have a negative
experience. This problem can never be entirely avoided when using suggested motion, but clever use of [bombs](#bombs),
[walls](#full-body-motion), [momentum](#momentum-and-tension), and managing the player's [expectations](#map-context) can help to communicate the intended motion.

The scoop pattern above might play well in a map that goes into the pattern in a way that encourages big movement or a map that trains the player to
expect these kinds of movements, but be completely unexpected in a different map.

###### Clutter

An important challenge to readability is *clutter*, caused by an overload of information on the player. Clutter is more likely to happen when a map is faster, as it will have more notes approaching the player
at a given moment. Good [positioning](#spacing) to space out the notes over the player's view and clearly emphasize the most important ones, adequately managing [vision blocks](#vision),
and optimizing [jump settings](#jump-settings) are the main ways to reduce clutter, though sometimes it can be very difficult to avoid.

### Difficulty

*Difficulty* is ultimately a combination of other aspects, but it can be useful to identify it independently.

Readability, flow, and speed are arguably the main factors conditioning a map's difficulty. Difficulty should normally be a consequence of other aspects of the map, but be accounted for.
We say that a map has *artificial difficulty* if it introduces elements that make it more difficult without enhancing any other aspect of the map (i.e. it does not play better or represent
the music better). You should normally avoid artificial difficulty. Instead, consider whether your map can represent more, or whether you can up the intensity of the gameplay.

:::danger DON'T
Avoid artificial difficulty. If your map feels too simple you can up the intensity and/or increase representation.
:::

Difficulty is very important to consider with respect to your target audience. If your audience finds the map too hard they will not be able to play it. While a map can be too easy, this
normally is a side effect of reduced representation or simplified gameplay.

Similarly, adding multiple difficulties to your map can be a great way to expand your target audience without watering down your map.
*Downmapping* is the process of taking your initial difficulty, and then breaking it down to be appropriate for other
skill levels. Most mappers start with Expert+ and downmap from there. Check out the [Downmapping](./downmapping.md) page for a deep dive into this process.

:::tip TIP
Make sure that the difficulty of your map is adequate for your target audience.
:::

:::details Read more...
GalaxyMaster has published [his perspective](https://docs.google.com/document/d/1TQvEE4iH1PCTiN5o4nXZdOTcwYNzExQAuoCQucruEPw/edit?usp=sharing) on map difficulty, mostly from a competitive/ranking perspective.
:::

### Scoring

Due to the particular mechanics of Beat Saber and the predominant and natural playstyles of players, certain patterns and maps
are easier to achieve a higher score on than others. Scoring concerns typically become more relevant when players are close to 
achieving a full combo of the map or close to it.

At these levels, scorability of a map (often called *accability*) relates to how easy / possible it is to get high *accuracy* on the notes.
That is, how easy / possible it is to hit the notes in the center.

Generally speaking, most maps do not need to worry about how accable they are, unless it is relevant to your target audience.
These maps are sometimes called *Accuracy* maps.

The easiest ways to increase accability include making swings more linear and ensuring the cut direction of notes goes from the centre outwards.

## Representation

*Representation* refers to the correspondence between the map and the song. Representation happens at multiple levels:

- How do the individual notes represent individual sounds.
- How do the transitions between notes represent the progression of the music.
- How does the general structure of the map relate to the structure of the song.

There is no singular recipe to do good representation, but there are a few core concepts that most mappers consider.

:::details Read more...
GalaxyMaster has published [his perspective](https://docs.google.com/document/d/19YrYY4dl_dKfk--7bMpWNqKW2bZx93kvzegP6h7XN8M/edit?usp=sharing) on Representation, covering most topics included in this section.
:::

### Rhythm choice

*Rhythm choice* is the choice of which sounds and instruments to represent in the map (or a part of it).

This is one of the most important decisions to make. It should be well justified and will condition most other aspects of the map.
Here are some principles to consider when deciding rhythm choice:

- What are the most prominent or central sounds that you hear in the song?
- Rhythm choice does not need to be the same for the whole map, but it should not change abruptly.
- Does your rhythm choice allow you to produce a map of the adequate intensity for the feel of the song?

As a result, rhythm choice usually corresponds to either a single instrument (vocals are another instrument) or a few of them working together, though other options are also valid, for example:

- Focus on some instruments, and fall back to the others when they are silent.
- Focus on some instruments, and occasionally map some important sounds of the others.

Rhythm choice can also be used to *enhance* the experience of the music. It may be used to highlight elements of the music that would normally go unnoticed but which are relevant.

::: danger DON'T
Don't try to map every sound. This usually creates unplayable maps. Focus on what's most important, and consider using bombs, walls and lights to fill in the gaps.
:::

:::details Example
Map https://allpoland.github.io/ArcViewer/?id=276bb&t=30 maps both the synth and the percussion in full for most of the song, whereas map
https://allpoland.github.io/ArcViewer/?id=33c3b&t=28 (of the same song) focuses more exclusively on the synth and simplifies some rhythms.

Both are legitimate rhythm choices.
:::

:::details Read more...
A [short description](https://docs.google.com/document/d/1qdRGk8QR48hx0ng05Z45tv-6KvMFPYxiAY8l441j3Mk/edit#heading=h.69zb7i85ewgw) of rhythm choice, by GalaxyMaster.
:::

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

:::details Example
Map https://allpoland.github.io/ArcViewer/?id=34f56 uses a wide variety of tools for emphasis, including faster patterns, heavier rotations, larger swings, bombs in various forms, arcs,
cross-over patterns, dancier patterns, inlines, and palm-up and palm-out swings; to represent the variety of mood throughout the song and the relative intensity of the notes within each section and the
sections between them.
:::

### Consistency

*Consistency* is using the same or similar map elements to represent the same or similar song elements.

Consistency contrasts with *variation*, which is also a desirable quality to a certain degree.
Mapping every instance of the same sound exactly the same is not enough variation, 
but mapping each instance of the same sound as completely different things is not enough consistency.
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

:::details Example
In https://allpoland.github.io/ArcViewer/?id=338fe&t=49 similar but different patterns are used in sequence providing great variety while preserving familiarity and consistency.

- On beat 172, lean scissor doubles are used for 4 iterations.
- On beat 204, scissor dobles with horizontal displacement are used for 4 iterations.
- On beat 332, lean same parity doubles are used for 4 iterations.
- On beat 364, palm-in same parity alternating side doubles are used for the remaining iterations.
:::

### Structure

Music has a high-level *structure*. A song is normally divided in *sections*, which have different intensities and fulfill different roles within it.

Even without a music theory background, you can normally identify the different parts of a song, how they are made of smaller parts and how they relate to each other.
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

## Identity

*Identity* refers to a map being memorable, leaving a mark in the player, encouraging players to replay it and differentiating itself from other maps.

This can be achieved through good representation and gameplay. However, it may be argued that there are additional, subtle details that help
a map generate identity. Highly specific and well executed representation choices, encouraging unusual playstyles, perfectly executing a very specific gameplay idea,
memorable visuals, etc.

Sometimes, it is precisely the ways in which maps cleverly break standard rules of mapping that produces the most memorable maps. In order to do this, good understanding
of these rules and how they can be broken without producing unplayable maps is necessary.

There is not much science to describe identity, as it is on the far artistic side of mapping, but it should be noted that it will often matter.
The most popular and renowned maps will often be those that have great identity on top of competent representation and gameplay.

:::details Examples
- https://allpoland.github.io/ArcViewer/?id=2853e&mode=Lawless&difficulty=ExpertPlus is extremely memorable because it introduces actual physical jump patterns
in a fitness map in a song called "Jump Around" while still being playable and fun.
- https://allpoland.github.io/ArcViewer/?id=2dd7f focuses entirely on palm-out patterns that require a lot of physicality to play, while still providing an interesting map; giving it very clear identity.
- https://allpoland.github.io/ArcViewer/?id=32901 takes a very slow song with growing intensity and heavy emotional mood and maps it as patterns that go from simple to very complex and requiring very large motions
as the music's intensity grows. This accentuates this aspect of the song and gives the map identity.
:::


## Technical aspects of a map

In the following sections, we describe more specific details about the aspects of maps that contribute to producing good [representation](#representation) and [gameplay](#gameplay).
For some of these, you will find links to more advanced guides.

### Note timing

Note timing is the selection of the specific times of notes to swing by the player. We refer here exclusively to blocks cut with the sabers, explicitly excluding
walls and bombs.

There is only one (mostly) absolute rule in note timing:

:::danger DON'T
Don't place notes when there are no identifiable sounds. This is called overmapping and is almost universally problematic.
:::

While it would be reasonable to think that "Always map sounds to the exact time when they happen" is a good rule, there are several important exceptions to this rule.
Instead, it is more important to set up your audio adequately and identify the rhythms of the song, and make good choices about which sounds to map with what timings.

:::tip TIP
The best way to achieve good timing is to do a proper [audio setup](./basic-audio.md).
:::

A good audio setup may involve introducing all the necessary [BPM changes](./advanced-timing.md) to keep the map aligned to the tempo of the song.

The vast majority of songs (even those with variable tempo) use simple timings that require only 1/2, 1/3, or 1/4 precision (with occasional 1/6 or 1/8), if the audio setup is adequate.
While there exist songs that do use more complex timings, this is very rare. In almost every case where a mapper thinks this is the case, they either didn't align the sound properly,
or they are overthinking / not listening to the song properly.

###### Vocals and live recordings

In fact, even when the sounds in the song do happen outwith simple precisions, you will often still want to map the notes to the simple precisions, or *intended rhythm*. This is often the
case with live recorded songs with imperfect timing and, specially, when timing **vocals**. Vocals are normally difficult to time and may include some smaller variations. It usually makes
the map worse to try to accurately map these smaller variations. Instead, stick to the intended, simple rhythm.

:::tip TIP
When mapping vocals and/or live recordings, stick to the intended rhythm rather than precise timings.
:::

<!-- prettier-ignore -->
| ![Intended rhythm](/.assets/images/mapping/intended_rhythm.png) |
| :-: |
| Map to the intended rhythm over precise variations in timing |

###### Identifying timings

There are three main methods for determining the specific timing of a note.

- **Listen** to when the sound happens. This should always be the authoritative and primary method. Slowing down the audio may help in some cases, but may also distort the sound too much.
- Understand the **rhythm and intervals** between notes in the song, and use that to deduce the timings. This can be great to sanity check or to produce accurate timings quickly when the rhythm is simple.
<!-- prettier-ignore -->
| ![Intervals in the rhythm](/.assets/images/mapping/intervals.png) |
| :-: |
| This syncopated sequence of intervals (3/4 - 3/4 - 1/2 - 2 beats) is common in Dubstep and repeats consistently throughout the song. Understanding that helps with note timing. |
- Use the **spectrogram** to validate or help you identify specific timings. This method should be used with care, as the spectrogram will often not represent some sounds accurately (like deep bass and vocals) 
and present a lot of spurious sounds. The spectrogram should never be the only method you use to time your notes.

:::tip TIP
Time to what you **hear** above everything else.
:::

The [Advanced Timing](./advanced-timing.md) page contains some additional topics like variable BPM and Swing in songs.

:::details Read more...
GalaxyMaster has [some tips](https://docs.google.com/document/d/1qdRGk8QR48hx0ng05Z45tv-6KvMFPYxiAY8l441j3Mk/edit#heading=h.uwcmzkca2fv) for determining timings.
:::

### Handedness and hit type

The *handedness* of a pattern refers to which hand or hands swing on that pattern. Thus, there are three possible values for handedness:

- Left hand.
- Right hand.
- Double.

There are many ways in which handedness is particularly relevant:

- Handedness is a simple tool for representation. While sometimes problematic, mapping different instruments to each hand can produce decent mapping.
More flexible approaches will instead focus on how handedness varies between subsequent swings and how that relates to the variations in the music as a means of representation.
- Double swings are one of the main ways to increase [emphasis](#emphasis).
- The relative handedness of subsequent patterns determines the [swing speed](#swing-speed).
A section where all notes have the same handedness will feel considerably faster than one where they are alternating hands (a stream).

In close relation with handedness, we can consider a pattern's *hit type*. Larger swings require a faster swing with more distance and swing angle to perform.
The following is a list of standard hit types that mappers consider:

:::tip NOTE
The expression "hit type" is not standard at the time of writing. There is no standard term to refer to this concept, though all or most mappers know the names of all
the typical hit types and their precise meaning. We just do not have a word for the abstract concept.
:::

<!-- prettier-ignore -->
| Name | Example | Typical uses |
| :-: | :-: | :-: |
| Single | ![Single](/.assets/images/mapping/single.png) | Base pattern, for normal or small sounds. |
| Slider | ![Sliders](/.assets/images/mapping/sliders.png) | Sounds with longer duration, reverberation or echo. "Slashy" sounds. |
| Chain | ![Chain](/.assets/images/mapping/chain.png) | Similar use to sliders. |
| Stack | ![Stack](/.assets/images/mapping/stacks.jpg) | Sounds with moderate emphasis. Percussion. |
| Window | ![Window](/.assets/images/mapping/window.jpg) | Intense sounds. Good for avoiding vision blocks. |
| Tower | ![Tower](/.assets/images/mapping/tower.jpg) | Very intense sounds. Maximum emphasis. |

While not set in stone, typically mappers/players understand there is an ordering of intensity between these:

Single < 2-slider/chain < Stack < 3-slider/chain < Window < Tower

In addition to these, dots instead of arrows are often used to slightly decrease the conceptual intensity of a pattern, even if it has very little gameplay difference.
There are also patterns that do not explicitly fall into any of these hit types. There is nothing wrong with using them if you feel they help you represent the song better.

Hit type is one of the most basic ways to provide [emphasis](#emphasis). It is generally good practice to be consistent with which instruments/types of sounds you represent with which hit type.

Hit type is also relevant for gameplay, difficulty, and sensation of speed. With larger swings...

- The saber needs to move a larger distance. This may be achieved through arm displacement or larger swing angle.
- The rotation angle of the pattern is enforced more strictly.

<!-- prettier-ignore -->
| ![Angle enforcement](/.assets/images/mapping/angle_enforcement.png) |
| :-: |
| Larger swings enforce angles more strictly if all notes are hit, specially when playing for accuracy. |

- The timing of the swing is stricter, as the player will need to cut through more notes in the same timing window.

As a result, larger swings are more physically intense, which is, alongside visuals, the main reason why hit type is used for emphasis.
On top of the blurred out emphasis; from a gameplay perspective, abusing large swings will make the map unnecessarily tiring to play and introduce artificial difficulty.

### Parity

The most important aspect about *parity* is covered in the [basic mapping page](./basic-mapping.md#double-directionals-resets), which is: keep it.

:::tip TIP
Adapting your vision to keep parity consistently is almost universally better than breaking parity for the sake of representation or vision.
:::

However, keeping parity does not mean that you cannot play around it. By changing the [handedness](#handedness-and-hit-type) of patterns before or after a certain pattern, you can
make a certain pattern have the exact parity that you want. This is a powerful tool, both for representation and gameplay purposes. As described [at the beginning of this page](#mapping-is-a-balancing-act),
this usually has other downsides and constraints that will make it tricky. But the payoff is often worth it.

Forehand and backhand hits are not interchangeable. They are inherently asymmetric.

Comfortable angles and positions are different for forehand and backhand hits. Backhand hits tend to be friendlier to outer lanes and forehand hits friendlier to inner lanes.
Palm-out backhand hits are a lot more difficult and physically intense to play than palm-out forehand hits, whereas palm-up backhand hits can be more satisfying than palm-up
forehand hits. This relates to *swing curvature*, described in the section on [momentum](#momentum-and-tension).

Perhaps more importantly, forehand hits are more comfortable to emphasize more and typically carry the initiative in terms of rotations and postures. That is, it is normally easier
for the player to follow the movements you are trying to communicate if you use forehand hits to establish the critical swings for those motions.

:::tip TIP
It is easier to establish rotations and postures on forehand swings than on backhand hits.
:::

As an example, initiating a [lean](#full-body-motion) is much more natural on a forehand swing than a backhand swing. Conversely,
finishing a lean is more natural on a backhand swing than a forehand swing.

<!-- prettier-ignore -->
| ![Lean on forehand](/.assets/images/mapping/lean_forehand.png) | ![Lean on backhand](/.assets/images/mapping/lean_backhand.png) |
| :-: | :-: |
| Starting a lean on a forehand is quite natural | Starting a lean on a backhand may feel forceful and challenging |

Unlike keeping parity, these are not rules that you must follow. Instead, they are notions that you can use to set up
the patterns to achieve the exact feeling you are looking for.

### Rotations

*Rotations* are variations in the angle of the cutting plane of the saber between subsequent hits for the same hand.

Rotation angle naturally discounts parity. That is, subsequent hits with opposite parity on the same hand will have no rotation when the arrows between them are 180 degrees,
and will have an 180 degree rotation when the arrows are the same direction. Rotations also have a *direction* (clockwise or counter-clockwise).

<!-- prettier-ignore -->
| ![No rotation](/.assets/images/mapping/no_rotation.png) | No (0 degrees) rotation (forehand to backhand) |
| :-: | :-: |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw.png) | 45 degrees clockwise (forehand to backhand) |
| ![45 degrees CCW](/.assets/images/mapping/45_degree_ccw.png) | 45 degrees counter-clockwise (forehand to backhand) |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw_2.png) | 45 degrees clockwise (forehand to backhand), different starting angle |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw_3.png) | 45 degrees clockwise (forehand to backhand), different positioning. Positioning does not change the rotation measure, but it changes how the pattern plays. |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw_4.png) | 45 degrees clockwise (backhand to forehand) |
| ![135 degrees CW](/.assets/images/mapping/135_degree_cw.png) | 135 degrees clockwise (forehand to backhand) |
| ![180 degrees CW](/.assets/images/mapping/180_degree_cw.png) | 180 degrees clockwise (forehand to backhand) |
| ![270 degrees CW](/.assets/images/mapping/270_degree_cw.png) | 270 degrees clockwise (forehand to backhand). If this was backhand to forehand, then it would be a mere 90 degree rotation. Parity matters as it drastically changes how it is played. |

Rotations are one of the most important aspects that affect [flow](#flow), for better and for worse. They are also closely related to [leaning](#full-body-motion).
They can be an element of representation and provide some emphasis as well, though smaller rotations have very little emphasis.

:::tip TIP
A map with good flow will keep rotations reasonable and consistent throughout, in both angle and direction, with harsher rotations happening for more emphasized swings and giving enough time to execute them.
:::

The angle (degrees) of a rotation is not the only measure of its playability. Apart from the particular [positioning](#spacing) of the notes and the relative speed of the swing,
the starting angle / posture and the **direction** matter dramatically. There is a particular relation between which hand is rotating, parity, and direction of the rotation, that affects its intensity and feel.
Sometimes we call this *swing curvature*, which we say can be *positive* or *negative*. While both positive and negative curvature can and should be used, it is easier to implement big rotations on positive curvature without setup.

Swing curvature is discussed in more detail in the page on [momentum mapping](./momentum-mapping.md).

:::tip TIP
Large rotations without setup are easier on positive curvature.
:::

<!-- prettier-ignore -->
| **Right hand** | Forehand | Backhand |
| :-: | :-: | :-: |
| Clockwise | ![Right forehand CW](/.assets/images/mapping/right_forehand_cw.png) <font color="CC8800">**Moderately harsh**</font><br>Negative curvature | ![Right backhand CW](/.assets/images/mapping/right_backhand_cw.png) <font color="00AA00">**Smooth**</font><br>Positive curvature |
| Counter-clockwise | ![Right forehand CCW](/.assets/images/mapping/right_forehand_ccw.png) <font color="00AA00">**Smooth**</font><br>Positive curvature | ![Right backhand CCW](/.assets/images/mapping/right_backhand_ccw.png) <font color="AA0000">**Harsh**</font><br>Negative curvature |

<!-- prettier-ignore -->
| **Left hand** | Forehand | Backhand |
| :-: | :-: | :-: |
| Clockwise | ![Left forehand CW](/.assets/images/mapping/left_forehand_cw.png) <font color="00AA00">**Smooth**</font><br>Positive curvature | ![Left backhand CW](/.assets/images/mapping/left_backhand_cw.png) <font color="AA0000">**Harsh**</font><br>Negative curvature |
| Counter-clockwise | ![Left forehand CCW](/.assets/images/mapping/left_forehand_ccw.png) <font color="CC8800">**Moderately harsh**</font><br>Negative curvature | ![Left backhand CCW](/.assets/images/mapping/left_backhand_ccw.png) <font color="00AA00">**Smooth**</font><br>Positive curvature |

:::details Example
Take a look at https://allpoland.github.io/ArcViewer/?id=327f6&t=30. In this section it is easy to see that the larger rotations are always done on positive curvature. For example:

- 90 degree transition on left hand on beats 108-109.
- 135 degree transition on right hand on beats 110-112.
- 135 degree transition on right hand on beats 116-118.

By contrast, all rotations on negative curvature are at most 45 degrees in this section. While larger rotations on negative curvature are very possible, this choice allows this section to play
really smoothly with fast, snappy swings, despite having large rotations.
:::

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

## Credits

Content in this section was authored by [Checkthepan](./mapping-credits.md#checkthepan), [CyanSnow](./mapping-credits.md#cyansnow),
[Uninstaller](./mapping-credits.md#uninstaller), [Skyler Wallace](./mapping-credits.md#skyler-wallace),
[Kolezan](./mapping-credits.md#kolezan), [Pyrowarfare](./mapping-credits.md#pyrowarfare), [DarkGrisen](./mapping-credits.md#darkgrisen),
[Vaser888](./mapping-credits.md#Vaser888) and Undeceiver.
