---
prev: false
next: false
description: A more in-depth look at many mapping topics to take your maps to the next level!
---

# Intermediate Mapping

The [Basic Mapping](./basic-mapping.md) page is useful for learning what not to do as a new mapper. Once you have a bit of
experience, it's time to take your understanding of mapping principles to the next level. Ultimately, the best way to learn
to map is to simply keep at it.

**Try. Adjust. Listen. Repeat.**

In this page you will find a summary of most topics that mappers usually think about.
Some of these topics also have an advanced page.

This page is long. Don't try to read it all in one sitting.
Skim through it at your own pace, or consult specific topics directly.

## What makes a good Beat Saber map?

There are many aspects that matter to this question, but generally speaking,
we can classify all or most of these into two main categories:

- [**Gameplay**](#gameplay) - Does the map play well? Is it comfortable, fun, and of an appropriate difficulty?
  Topics about the way the map feels to play, more or less independent of the music.
- [**Representation**](#representation) - Does the map represent the song's rhythm, mood, and feel?
  Topics about the relation between the music and the map.

A good map will do well in both of these aspects, and will make them work together.

Arguably, there is a third, much more subjective aspect that relates to the two above, and
separates _good_ maps from _great_ maps:

- [**Identity**](#identity) - Is the map memorable? Does it leave an impression on the player?
  Does it offer something that other maps do not?

:::details Read more...
GalaxyMaster has published [his perspective](https://docs.google.com/document/d/1E-BG62Y1BEsb0Vs6Lv7wErIY-zefeLkrfsTOwSc_EMY/edit?usp=sharing)
on this question.
:::

### Target audience: Accounting for playstyle and taste

It's hard to quantify what _good_, _comfortable_, _fun_, _appropriate_, and _memorable_ mean. All of these are
highly subjective and will vary wildly between players. There is no map that everybody will love or that nobody will dislike.
There are many different tastes and many ways to play: fast or slow, move a lot or optimize scoring, difficult or easy,
complicated or simple patterns. Mapping is level design - both an art and a science.
There is no "best" answer, but there are many "wrong" answers.

Keep in mind your _target audience_: the players who you want to make the map for.
While keeping the target audience large can be good, mappers will often constrain their audience to make the map better
for those within it and prioritize their core ideas.

Most concepts in this page are relevant to most playstyles and tastes, but which ones are good or bad
and how much priority you give them will vary.

::: tip TIP
There is no map that everybody will love. Identify and focus on your target audience.
:::

::: details Examples
The following are all good but very different maps, because they target very different audiences:

- <https://allpoland.github.io/ArcViewer/?id=1a0b6> - Dance map -
  More casual audience who wants to dance to the music.
- <https://allpoland.github.io/ArcViewer/?id=1a2cd> - Speed map -
  Higher skill audience who likes physical intensity and challenge.
- <https://allpoland.github.io/ArcViewer/?id=2d4e6> - Momentum tech map -
  Audience that likes complex patterns and large and unusual motions with good flow.
  :::

### Mapping is a balancing act

Usually, there are trade-offs that you need to decide on in your map.
Better representation might require less comfortable gameplay, or making your ideas playable might make them too easy.
In order to make vision work you may have to use suboptimal positioning,
or you may have less consistent emphasis to achieve better body motion.

You should attempt to find solutions that offer the best of all worlds, but accept that you won't always find them.

::: tip TIP
Aim for the best you can in all aspects, but accept imperfection when you must.
:::

:::details Example
Consider <https://allpoland.github.io/ArcViewer/?id=2c25a&t=0> on beats 0-40 and focus on the percussion (kicks).

There are kicks on beats 8, 11, 16, 19, 24, 27, 32, 35 and finally 40.
All of them are mapped as doubles with scissor parity, **except** 40, which is mapped as a stack.

This is because this last one comes after a slightly fast section, and mapping 40 as a double as well would have
created a _gallop_ pattern which would have been a bit uncomfortable to play, and the mapper was interested
in a particular parity on the right hand for the representation and gameplay of the following patterns.

Thus, the mapper decided to be a little loose on representation,
mapping it as a stack instead of a double on this occasion.
:::

On the flip side, sometimes there are improvements that you can do at almost no cost to other aspects,
even if it's not part of your original vision. Whenever you're faced with a small choice between your vision
and an objective improvement, it's almost always better to go with the latter.

::: tip TIP
Rather than asking yourself "do I really need to change it?", try asking "do I really need to keep it?".
:::

## Gameplay

When we talk about _gameplay_, we talk about how the map plays,
and can be mostly understood independently from the music it represents. However, in
practice, strong representation can also make a map feel better to play.

There are dozens of aspects that can describe how a map plays, even at the simplest level.
We normally include at least the following:

- Is the map [_physically comfortable_](#flow)? Maps can be uncomfortable on purpose,
  but it should be a conscious and calculated choice, not a consequence of sloppy mapping.
- How [_fast_](#speed) does the player need to move?
- Is the map [_readable_](#readability)?
  Are players able to understand the movements they are expected to do without memorizing the map?
- How [_difficult_](#difficulty) is the map?
- Is it possible/easy to [_score well_](#scoring) on the map? Many maps don't worry much about scoring,
  but for some target audiences, this might matter.

Awareness of how your mapping choices affect these aspects can be critical to making your map play exactly the way you want.
Unlike Representation, topics relating to Gameplay are usually more objective and can be
described in more technical ways,
even though there is still subjectivity involved.

### Flow

_Flow_ is one of the hardest to define - but still widely used - terms in Beat Saber mapping jargon.
A general definition is the way in which the movements
implied by the map's notes, bombs, and walls transition into and between each other over time.

Usually, we say that a map "flows well" when it's comfortable and natural to play,
and the movements are intuitive and physically pleasant.

However, there's no written rule that a map must "flow well" to be a better map. Sometimes,
less comfortable flow can be used as a tool for emphasis and representation,
or simply as a means to increase the difficulty of the map.

Nearly every aspect of a map affects flow, so providing a list or summary here would not make it justice.
Instead, in the more [technical sections](#technical-aspects-of-a-map) below we consistently refer to flow.

:::tip TIP
To understand flow, think about the relation between sequences of notes, not about individual hits.
:::

:::details Read more...
Kansas made [an incomplete list](https://docs.google.com/document/d/16hydw1Vob9uDK3VTpwXn9ov0o-kp_xgm9jpPduOwOJ4/edit?usp=sharing)
of some of the terminology often used when discussing flow.
:::

### Speed

When talking about map _speed_, we usually refer to the speed that the player must [swing](#swing-speed) to hit the notes.

Speed is one of the most easily quantifiable measures of a map in terms of difficulty,
its relation to the rhythm choice, and in terms of how intense it feels to play it.
It's not fully determined by rhythm choice, though; it also depends on
how the sounds are mapped between the two hands.

There are other aspects to speed as well, such as the speed of [full body movement](#full-body-motion) or
the _sensation of speed_ that certain patterns produce.

The feeling of speed can also be affected by a map's [jump settings](#jump-settings).

Playstyle changes with map speed. For slower songs, it's easier to perform large [arm swings](#hand-repositioning),
[curved swings](#rotations), [hand repositioning](#hand-repositioning), and contort the [whole body](#full-body-motion)
to hit more unusual patterns. At high speeds, there is less time to process and adapt to the next hit,
mentally and physically. Thus, fast maps and patterns tend to be made more _linear_.

The section on [swing speed](#swing-speed) contains more technical concepts that are usually used to discuss a map's speed.

:::tip TIP
A good mapper is always aware of how fast their map is.
:::

:::details Example
In <https://allpoland.github.io/ArcViewer/?id=34dc5&t=124>, the mapper uses a standard pattern (one-handed jumps)
to increase the sensation of speed at the end of the drop, without overmapping. The song does not, technically,
go faster in this section than before, but it feels more intense due to the repetitive sound to release
any remaining tension from the drop. Using jumps as a representation choice allows the mapper to convey that in the mapping.
:::

### Readability

A Beat Saber map is a message with limited vocabulary between the mapper - trying to
communicate a motion - and the player - trying to perform it. _Readability_ refers to how well a map communicates
its intended movement to players.

Since readability is about communication, it depends on the player almost as much as the mapper, and it relies
on them speaking a common language.

To make matters worse, players have limited time and ability to read and process the map while playing,
especially when _sight reading_ (playing the map for the first time).

Thus, it's not enough that a map _can_ be played well, it also needs to do a good job of showing
the intended movement to the player. Most players will play a map once ever,
or once every few weeks or months, so expecting them to know the types of movements that the map
requires without making them adequately readable leads to disappointment.

By the same token, target audience is particularly relevant when considering readability, as it will determine
the particular dialects of Beat Saber maps that players understand.

An example of perfectly playable, but difficult to read, and usually problematic,
patterns are implicit [parity](#parity) resets, particularly triangles.
![Triangle](/.assets/images/mapping/triangle-alt.png)

This pattern is ambiguous as it requires a reset motion at some point, but it's unclear to the player
when would it be best to do so.

Note that, like flow, a map can be hard to read on purpose. This is a risky choice but it may work to provide identity,
help representation or provide a more memorable experience.

:::tip TIP
The best way to evaluate a map's readability is to get fresh testplays from players who have not seen the map before.
:::

#### Mapper blindness

A condition experienced by most mappers, especially novices, is called _mapper blindness_: where a mapper
will struggle to identify readability issues in their map because they already know
the intended motion when they testplay it.

While mapper blindness can be reduced with good understanding
of best mapping practices, nothing replaces having other players and mappers testplay your map
and analyzing their reactions to patterns the first time they see them.

:::warning WARNING
Just because a map _can_ be played well it does not make it readable. Maps need to communicate their motions properly.
:::

#### Suggested / implied motions

In some cases, extra motion is suggested to make the pattern play comfortably.
An example is a scoop:  
![Scoop](/.assets/images/mapping/scoop.png)  
In order to hit the up note following the side note, the [arm](#hand-repositioning) must take
a longer scooping path to get into position.

_Suggested or implied motion_ is risky because players will read and react to patterns differently. One
player may hit a scoop as intended, but another may recoil or flinch and have a negative
experience. This problem can never be entirely avoided when using suggested motion, but clever use of [bombs](#bombs),
[walls](#full-body-motion), and [momentum](#momentum-and-tension), and managing the player's [expectations](#map-context)
can all help with communication.

The scoop pattern above might play well in a map that regularly encourages big movements and trains the player to expect
this kind of motion, but could be completely unexpected in a different map.

#### Clutter

An important challenge to readability is _clutter_, caused by an overload of information on the player.
Clutter is more likely to happen when a map is faster, as it will have more notes approaching the player
at any given moment.

Good [positioning](#spacing) to space out the notes over the player's view, clearly emphasizing
the most important hits, adequately managing [vision blocks](#vision), and optimizing [jump settings](#jump-settings)
are the main ways to reduce clutter, although it can sometimes be very difficult to avoid.

### Difficulty

_Difficulty_ is ultimately a combination of other aspects, but it can be useful to identify independently.

Readability, flow, and speed are the main factors conditioning a map's difficulty.
Difficulty should normally be a consequence of other aspects of the map, and be accounted for.

We say that a map has _artificial difficulty_ if it includes elements that make it more difficult
without enhancing any other aspect of the map (i.e. it does not play better or represent the music better).
You should normally avoid artificial difficulty. Instead, consider whether your map can represent more of
the song, or whether you can up the intensity of the gameplay.

:::danger Bad Practice
Don't artificially increase difficulty. If your map feels too simple you can up the intensity of movements and/or represent
more parts of the music, but ensure these changes add value.
:::

Difficulty is very important to consider with respect to your target audience. If your audience finds the map
too hard they will not be able to play it. Although some players might find a map to be too easy, this is
normally a side effect of under-representation or overly simplified gameplay, and not because of raw difficulty.

Adding multiple difficulties to your mapset can be a great way to expand your target audience
without watering down your main vision.
_Downmapping_ is the process of taking your top difficulty, and then breaking it down to be appropriate for lower skill levels.
Most mappers start with Expert+ and downmap from there. Check out the
[Downmapping](./downmapping.md) page for a deep dive into this process.

:::tip TIP
Make sure that the difficulty of your map is adequate for your target audience.
:::

:::details Read more...
GalaxyMaster has published [his perspective](https://docs.google.com/document/d/1TQvEE4iH1PCTiN5o4nXZdOTcwYNzExQAuoCQucruEPw/edit?usp=sharing)
on map difficulty, mostly from a competitive/ranking perspective.
:::

### Scoring

Due to the mechanics of Beat Saber and the predominant playstyles of players,
certain patterns and maps are easier to achieve a higher score on than others.
Scoring concerns typically become more relevant when the target audience regularly
achieves a full combo on the map, or is close to it.

At these levels, scorability of a map (often called _accability_) relates to how easy / possible
it is to get high _accuracy_ on the notes. That is, how easy / possible it is to hit the notes in the center.

Generally, most maps don't need to worry about how accable they are, unless it's relevant to your target audience.
Maps that focus on improving accability are called _Accuracy_ maps.

The easiest ways to increase accability include making swings more linear and ensuring the cut direction
of notes goes from the centre outwards.

## Representation

_Representation_ refers to the relationship between the map and the song. Representation happens at multiple levels:

- How do the individual notes represent individual sounds?
- How do the transitions between notes represent the progression of the music?
- How does the overall structure of the map relate to the structure of the song?

There is no one recipe to good representation, but there are a few core concepts that most mappers consider.

:::details Read more...
GalaxyMaster has published [his perspective](https://docs.google.com/document/d/19YrYY4dl_dKfk--7bMpWNqKW2bZx93kvzegP6h7XN8M/edit?usp=sharing)
on Representation, covering most topics included in this section.
:::

### Rhythm choice

_Rhythm choice_ is deciding which sounds and instruments to represent.

This is one of the most important decisions to make. It should be well justified and will condition
most other aspects of the map.
Here are some principles to consider when deciding rhythm choice:

- What are the most prominent or central sounds that you hear in the song?
- Rhythm choice doesn't need to be the same for the whole map, but it shouldn't change abruptly.
- Does your rhythm choice allow you to produce a map of adequate intensity for the feel of the song?

As a result, rhythm choice usually corresponds to either a single instrument (vocals are an instrument)
or a few of them working together, though other options are also valid, for example:

- Focus on some instruments, and fall back to the others when they are silent.
- Focus on some instruments, and occasionally map some important sounds from the others.

Rhythm choice can also be used to _enhance_ the experience of the music. It may be used to highlight
elements of the music that would normally go unnoticed but which are relevant.

::: danger Bad Practice
Don't try to map every sound. This usually creates unplayable maps. Focus on what's most important,
and consider using bombs, walls and lights to fill in the gaps.
:::

:::details Example
Map <https://allpoland.github.io/ArcViewer/?id=276bb&t=30> maps both the synth and the percussion in full
for most of the song, whereas map <https://allpoland.github.io/ArcViewer/?id=33c3b&t=28> (of the same song)
focuses more exclusively on the synth and simplifies some rhythms.

Both are legitimate rhythm choices.
:::

:::details Read more...
A [short description](https://docs.google.com/document/d/1qdRGk8QR48hx0ng05Z45tv-6KvMFPYxiAY8l441j3Mk/edit#heading=h.69zb7i85ewgw)
of rhythm choice, by GalaxyMaster.
:::

### Emphasis

_Emphasis_ is matching the relative intensity of different sounds and/or song sections with the mapping that represents them.

While big towers, windows, doubles, fast jumps, and fast streams are fun, consider whether the patterns
reflect the intensity of the music.

- Within a section, the most prominent sounds should be emphasized more, and the less prominent less emphasized.
  Emphasis can be done in a variety of ways, such as:
  - Adding [larger hits](#handedness-and-hit-type) (doubles, stacks, windows...) for oomph.
  - [Spacing](#spacing) notes further apart to induce bigger swings.
  - Producing larger [rotations](#rotations) between note angles.
  - Mapping faster rhythms to induce [faster swinging](#swing-speed).
  - Not mapping less significant sounds so the more important sounds stand out more.
  - Using walls to induce [body motion](#full-body-motion).
  - Using [bombs](#bombs) to generate tension or secondary movements.
- The intensity of the mapping in each section, relative to other sections, should be somewhat in line with the intensity
  of the music.
- Deviation from the intensity of the music is fine, so long as sections are not excessively more or less intense relative
  to the rest of the map.

::: tip TIP
Emphasis is relative. If everything is emphasized, nothing is emphasized.
:::

:::details Example
Map <https://allpoland.github.io/ArcViewer/?id=34f56> uses a wide variety of tools for emphasis, including faster patterns,
heavier rotations, larger swings, bombs in various forms, arcs, cross-over hits, dancier patterns, inlines,
and palm-up and palm-out swings; to represent the variety of mood throughout the song and the
relative intensity of the notes within each section and the sections between them.
:::

### Consistency

_Consistency_ is using the same or similar map elements to represent the same or similar song elements.

Consistency contrasts with _variation_, which is also desirable to a certain degree.
Mapping every instance of the same sound exactly the same is not enough variation,
but mapping each instance of the same sound as completely different things is not enough consistency.

Consistency is about similarity and familiarity, not exact repetition. Variation is about nuanced
representation and keeping things fresh, not arbitrary changes.

Consistency comes into play in two places: within a section and when comparing separate sections of a song.

- Within a section, rhythm choice should generally stay consistent as it allows players to establish
  that rhythm and follow it.
- Within a section, consistency in patterns is desirable as well, but some variety within the bounds of
  the established patterns and rhythms is appreciated.
- Similar sections of the song usually benefit from having similar mapping.
- Contrasting sections of the song benefit from contrasting mapping.
- Representing small variations in the music through small variations in the mapping
  while preserving consistency is ideal.

::: tip TIP
Use familiar patterns for familiar sounds and sections, but do not obsess over exact correspondence.
:::

:::details Example
In <https://allpoland.github.io/ArcViewer/?id=338fe&t=49> similar but different patterns are used in sequence
providing great variety while preserving familiarity and consistency.

- On beat 172, lean scissor doubles are used for 4 iterations.
- On beat 204, scissor doubles with horizontal displacement are used for 4 iterations.
- On beat 332, lean same parity doubles are used for 4 iterations.
- On beat 364, palm-in same parity alternating side doubles are used for the remaining iterations.
  :::

### Structure

Music has a high-level _structure_. A song is normally divided in _sections_, which have different intensities
and fulfill different roles within it.

Even without a music theory background, with practice you can identify the different parts of a song,
how they are made of smaller parts and how they relate to each other. This is a great tool for representation,
as it gives you an outline for examining the music and planning your map.

These are some of the typical sections present in songs:

- The _introduction_ introduces the listener/player to the vibe and basic rules of the song/map.
- The _verses_ usually work at an intermediate intensity, applying the ideas of the song/map.
- In some genres, some verses (sometimes called _build-up_) work to increase the intensity of the music/map
  in preparation for the main part of the song/map.
- The _chorus_ (in some genres replaced by a _drop_) is the "heart" of the song/map and usually has the most intensity.
- The _bridge_ is normally an intermediate intensity section that changes the tone of the song/map and resets our expectations.
  Sometimes introducing new elements of the
  song/map not present before.
- Some songs/maps will have an _outro_ that allow us to slowly disengage from it.

:::tip TIP
When you begin a map, spend some time understanding what sections the song has and how they relate to each other.
This will help you make better use of consistency and variation.
:::

## Identity

_Identity_ refers to a map being memorable, leaving a mark in the player, encouraging players to replay it
and differentiating itself from other maps.

This can be achieved through good representation and gameplay. However, there are additional,
subtle details that may help a map generate identity. Highly specific and well executed representation choices,
encouraging unusual playstyles, perfectly executing a very specific gameplay idea, memorable visuals, etc.

Sometimes, it's precisely the ways in which maps cleverly break standard rules of mapping that they become memorable.
Good understanding of these rules and how they can be broken without making the map unplayable is key to pulling this off.

There is not much science to describe identity, as it's on the far artistic side of mapping,
but it should be noted that it does often matter. The most popular and renowned maps tend to be those
that have great identity on top of competent representation and gameplay.

:::details Examples

- <https://allpoland.github.io/ArcViewer/?id=2853e&mode=Lawless&difficulty=ExpertPlus> is extremely memorable
  because it introduces actual physical jump patterns in a fitness map in a song called "Jump Around" while
  still being playable and fun.
- <https://allpoland.github.io/ArcViewer/?id=2dd7f> focuses entirely on palm-out hits that require a lot
  of physicality to play,
  while still providing an interesting map; giving it very clear identity.
- <https://allpoland.github.io/ArcViewer/?id=32901> takes a very slow song with growing intensity and heavy
  emotional mood and maps it as patterns that go from simple to very complex and requiring very large motions
  as the music's intensity grows. This accentuates this aspect of the song and gives the map identity.
  :::

## Technical aspects of a map

In the following sections, we describe more specific details about the aspects of maps that contribute
to producing good [representation](#representation) and [gameplay](#gameplay).
For some of these, you will find links to more advanced guides.

### Note timing

Note timing is the specific timing for notes swung at by the player. Here, we refer exclusively
to blocks cut with the sabers - excluding walls and bombs.

There is only one (mostly) absolute rule in note timing:

:::danger Bad Practice
Don't place notes when there are no identifiable sounds. This is called overmapping and is almost universally problematic.
:::

While it would be reasonable to think that "Always map sounds to the exact time when they happen" is a good rule,
there are several important exceptions to this. Instead, it's much more important to identify the rhythms in the song
and make good choices about which rhythms to map.

The majority of songs (even those with variable tempo) use simple timings that require only 1/2, 1/3,
or 1/4 editor precision (or occasionally 1/6 or 1/8). While there exist songs that
do use more complex timings, this is rare. In many cases where a mapper thinks higher precision is required,
they either didn't align the audio properly, or they are overthinking the rhythms of the song.

So long as you've done proper audio setup (which may involve adding all the necessary
[BPM changes](./advanced-mapping.md#advanced-timing)
to keep the map aligned with the changing tempo of the song), mapping to the most clearly identifiable rhythms with
simple precision will usually provide a good result.

:::tip TIP
In order to achieve good timing, you must do proper [audio setup](./basic-audio.md).
:::

#### Vocals and live recordings

Even when the sounds in the song don't align to simple precisions, you will often still want to snap
the notes to a simpler precision, or the _intended rhythm_. This is often the case with live recorded songs
with imperfect timing, and especially when timing **vocals**.

Vocals are normally difficult to time
because they are generally a low attack (slow to begin) sound, and vary slightly from the beat because of human error.
Trying to accurately map these smaller timing variations usually makes the map feel worse to play.
Instead, stick to the intended rhythm implied by the music.

:::tip TIP
When mapping vocals and/or live recordings, stick to the intended rhythm and simple precisions, rather than precise timings.
:::

<!-- prettier-ignore -->
| ![Intended rhythm](/.assets/images/mapping/intended_rhythm.png) |
| :-: |
| Map to the intended rhythm over precise variations in timing |

#### Identifying timings

There are three main methods for determining the specific timing of a note.

- **Listen** to when the sound happens. This should always be the authoritative and primary method.
  Slowing down the audio may help in some cases, but may also distort the sound too much.
- Understand the **rhythm and intervals** between notes in the song, and use that to deduce the timings.
  This can be great to sanity check or to produce accurate timings quickly when the rhythm is simple.

  <!-- markdownlint-disable MD013 -->

  <!-- prettier-ignore -->
  |                                                        ![Intervals in the rhythm](/.assets/images/mapping/intervals.png) |
  | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
  | This syncopated sequence of intervals (3/4 - 3/4 - 1/2 - 2 beats) is common in Dubstep and repeats consistently throughout the song. Understanding that helps with note timing. |

  <!-- markdownlint-enable MD013 -->

- Use the **spectrogram** to validate or help you identify specific timings. This method should be used with care,
  as the spectrogram will often not represent some sounds accurately (like deep bass and vocals)
  and over-represent a lot of background sounds. The spectrogram should never be the only method you use to time your notes.

:::tip TIP
Time to what you **hear** above everything else.
:::

The [Advanced Timing](./advanced-mapping.md#advanced-timing) page contains some additional topics like
variable BPM and Swing in songs.

:::details Read more...
GalaxyMaster has [some tips](https://docs.google.com/document/d/1qdRGk8QR48hx0ng05Z45tv-6KvMFPYxiAY8l441j3Mk/edit#heading=h.uwcmzkca2fv)
for determining timings.
:::

### Handedness and hit type

The _handedness_ of a hit refers to which hand (or hands) swing on that hit.
Thus, there are three possible values for handedness:

- Left hand.
- Right hand.
- Double.

There are many ways in which handedness is particularly relevant:

- Handedness is a simple tool for representation. While not ideal, mapping different instruments
  to either hand is a simple way to produce decent mapping. More flexible approaches will instead focus on how
  handedness changes
  between swings, and how that relates to the variations in the music as a means of representation.
- Double swings are a great way to increase [emphasis](#emphasis).
- Changes in handedness between hits can influence the [swing speed](#swing-speed).
  A section where all hits have the same handedness will feel considerably faster than one
  where they are alternating hands (a stream).

In close relation with handedness, we can consider _hit type_. Larger swings require a faster swing
with more distance and precise swing angle to perform.
The following is a list of standard hit types that mappers consider:

<!-- prettier-ignore -->
| Name | Example | Typical uses |
| :-: | :-: | :-: |
| Single | ![Single](/.assets/images/mapping/single.png) | Base hit, for normal or small sounds. |
| Slider | ![Sliders](/.assets/images/mapping/sliders.png) | Sounds with longer duration, reverberation or echo. "Burst" sounds. |
| Chain | ![Chain](/.assets/images/mapping/chain_cm.png) | Similar use to sliders. |
| Stack | ![Stack](/.assets/images/mapping/stack.png) | Sounds with moderate emphasis. Percussion. |
| Window | ![Window](/.assets/images/mapping/window.png) | Intense sounds. Good for avoiding vision blocks. |
| Tower | ![Tower](/.assets/images/mapping/tower.png) | Very intense sounds. Maximum emphasis. |

:::tip NOTE
The expression "hit type" is not standard at the time of writing.
Though most or all mappers know the names of
the typical hit types and their precise meaning, there is no agreed upon word for the abstract concept.
:::

While not set in stone, typically mappers/players understand there is an ordering of intensity between these:

Single < 2 note slider/chain < Stack < 3 note slider/chain < Window < Tower

In addition to these, dots instead of arrows are often used to slightly decrease the feeling of intensity in a hit,
even if it has very little gameplay difference.
There are also hits that do not explicitly fall into any of these hit types. There is nothing wrong with using them
if you feel they help you represent the song better.

Hit type is one of the most basic ways to provide [emphasis](#emphasis). It is generally good practice
to be consistent with which instruments/types of sounds you represent with which hit type.

Hit type is also relevant for difficulty and sensation of speed. With larger swings:

- The saber needs to move a larger distance, forcing faster swings.
- The angle of the swing is enforced more strictly.

<!-- prettier-ignore -->
| ![Angle enforcement](/.assets/images/mapping/angle_enforcement.png) |
| :-: |
| Larger swings enforce angles more strictly if all notes are hit, especially when playing for accuracy. |

- The timing of the swing is stricter, as the player will need to cut more notes in the same amount of time.

As a result, larger swings are more physically intense, which is a big reason
why hit type is used for emphasis. From a gameplay perspective, however, abusing large swings
can make the map unnecessarily tiring to play and introduce artificial difficulty.

### Parity

The most important aspect about _parity_ is covered in the [basic mapping page](./basic-mapping.md#double-directionals-resets).
In short, keep it.

:::tip TIP
Adapting your creative vision to keep parity consistently is almost always better than breaking parity
for the sake of representation or identity.
:::

Keeping parity affects the choice of patterns, but it does not strictly limit it. Up swings can be forehand
and down swings can be backhand - these are sometimes called _palm-up_ swings because the palm is pointing upwards.
This video demonstrates some more advanced concepts of parity: [YouTube](https://youtu.be/NF8ESZRXI1c)

You can and should also play around parity when mapping. By changing the [handedness](#handedness-and-hit-type)
of patterns (i.e. swapping doubles for stacks and vice versa), you can make a certain hit have the exact parity
that you want.
This is a powerful tool, both for representation and gameplay purposes.

As described [at the beginning of this page](#mapping-is-a-balancing-act), controlling parity this way usually has
other downsides and constraints
that will make it tricky, but the payoff can be worth it.

Forehand and backhand hits are not interchangeable, they are inherently asymmetric.

Comfortable angles and positions are different for forehand and backhand hits. Backhand hits tend to be
more comfortable in the outer lanes and forehand hits more comfortable in the inner lanes.

Palm-out backhand hits are a lot more difficult to play than palm-out forehand hits, whereas palm-up backhand hits
can be easier than palm-up
forehand hits. This relates to _swing curvature_, described in the section on [momentum](#momentum-and-tension).

Perhaps more importantly, forehand hits are more comfortable to put emphasis on and typically carry more initiative
in rotations and positioning. That is, it's normally easier for the player to follow the movements of the map if you
use forehand hits to communicate the key swings for those motions.

:::tip TIP
It's easier to establish rotations and postures on forehand swings than on backhand swings.
:::

As an example, entering a [lean](#full-body-motion) is much more natural on a forehand swing than on a backhand swing, whereas
exiting a lean is more natural on a backhand swing than a forehand swing.

<!-- prettier-ignore -->
| ![Lean on forehand](/.assets/images/mapping/lean_forehand.png) | ![Lean on backhand](/.assets/images/mapping/lean_backhand.png) |
| :-: | :-: |
| Starting a lean on a forehand is quite natural | Starting a lean on a backhand may feel forceful and challenging |

Unlike keeping parity, these aren't rules that you must follow. Instead, they're notions that you can use to set up
your patterns and achieve the exact feeling you're looking for.

### Rotations

_Rotations_ are changes in the angle of the note direction between subsequent hits for the same hand.

Rotation angle naturally assumes parity - that is, subsequent hits with opposite parity on the same hand will have
no rotation when the arrows are 180 degrees apart, and have a 180 degree rotation when the arrows
are the same direction. Rotations also have a _direction_ (clockwise or counter-clockwise).

<!-- prettier-ignore -->
| Rotation examples | |
| :-: | :-: |
| ![No rotation](/.assets/images/mapping/no_rotation.png) | No (0 degree) rotation (forehand to backhand) |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw.png) | 45 degrees clockwise (forehand to backhand) |
| ![45 degrees CCW](/.assets/images/mapping/45_degree_ccw.png) | 45 degrees counter-clockwise (forehand to backhand) |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw_2.png) | 45 degrees clockwise (forehand to backhand), different starting angle |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw_3.png) | 45 degrees clockwise (forehand to backhand), different positioning. Positioning does not change the rotation measure, but it changes how the pattern plays. |
| ![45 degrees CW](/.assets/images/mapping/45_degree_cw_4.png) | 45 degrees clockwise (backhand to forehand) |
| ![135 degrees CW](/.assets/images/mapping/135_degree_cw.png) | 135 degrees clockwise (forehand to backhand) |
| ![180 degrees CW](/.assets/images/mapping/180_degree_cw.png) | 180 degrees clockwise (forehand to backhand) |
| ![270 degrees CW](/.assets/images/mapping/270_degree_cw.png) | 270 degrees clockwise (forehand to backhand). If this were backhand to forehand, it would only be a 90 degree rotation. Parity matters as it drastically changes how it is played. |

Rotations are one of the most important aspects that affect [flow](#flow),
and are closely related to [leaning](#full-body-motion). Large rotations can also be a form of representation
and provide some emphasis.

:::tip TIP
A map with good flow will keep rotations reasonable and consistent throughout, in both angle and direction,
with harsher rotations happening for more emphasized swings and giving enough time to execute them.
:::

The angle (degrees) of a rotation is not the only measure of its playability. On top of the particular [positioning](#spacing)
of the notes and the speed of the swing, the starting angle and the **direction** matter dramatically.

There is a particular relation between which hand is rotating, parity, and direction of the rotation
that affects its intensity and feel. This is called _swing curvature_, which can be _positive_ or _negative_.
While both positive and negative curvature can and should be used, it is easier to implement big rotations without setup
on positive curvature.

Swing curvature is discussed in more detail in the page on [momentum mapping](./advanced-mapping.md#momentum-mapping).

:::tip TIP
Large rotations without setup are easier on positive curvature.
:::

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| **Right hand** | Backhand to forehand | Forehand to backhand |
| :-: | :-: | :-: |
| Clockwise | ![Right forehand CW](/.assets/images/mapping/right_forehand_cw.png) **Moderately harsh**. Negative curvature. | ![Right backhand CW](/.assets/images/mapping/right_backhand_cw.png) **Smooth**. Positive curvature. |
| Counter-clockwise | ![Right forehand CCW](/.assets/images/mapping/right_forehand_ccw.png) **Smooth**. Positive curvature. | ![Right backhand CCW](/.assets/images/mapping/right_backhand_ccw.png) **Harsh**. Negative curvature. |

<!-- prettier-ignore -->
| **Left hand** | Backhand to forehand | Forehand to backhand |
| :-: | :-: | :-: |
| Clockwise | ![Left forehand CW](/.assets/images/mapping/left_forehand_cw.png) **Smooth**. Positive curvature. | ![Left backhand CW](/.assets/images/mapping/left_backhand_cw.png) **Harsh**. Negative curvature. |
| Counter-clockwise | ![Left forehand CCW](/.assets/images/mapping/left_forehand_ccw.png) **Moderately harsh**. Negative curvature. | ![Left backhand CCW](/.assets/images/mapping/left_backhand_ccw.png) **Smooth**. Positive curvature. |

<!-- markdownlint-enable MD013 -->

:::details Example
Take a look at <https://allpoland.github.io/ArcViewer/?id=327f6&t=30>. In this section,
the larger rotations are always done on positive curvature. For example:

- 90 degree transition on left hand on beats 108-109.
- 135 degree transition on right hand on beats 110-112.
- 135 degree transition on right hand on beats 116-118.

By contrast, all rotations on negative curvature are at most 45 degrees in this section. While larger rotations
on negative curvature are very possible, this choice allows this section to play really smoothly with fast,
snappy swings, despite having large rotations.
:::

:::details Read more...
This [incomplete glossary](https://docs.google.com/document/d/16hydw1Vob9uDK3VTpwXn9ov0o-kp_xgm9jpPduOwOJ4/edit?usp=sharing)
by Kansas contains definitions for some of the concepts explained here.
:::

### Swing speed

_Swing speed_ describes the amount of time between swings on the same hand. It does _not_ relate to the actual speed
that the saber moves.

Saber speed varies between players,
and is much more related to [spacing](#spacing) and [hit types](#handedness-and-hit-type).

Swing speed is the easiest and most relevant way to measure a map's [speed](#speed).
It will normally have a close relation with the BPM of the song, but depends on other factors.

Swing speed is usually measured using _effective BPM_ (eBPM), which is based on the swing speed
of a stream (at 1/4 precision) at a given BPM. Effective BPM is measured for each hand separately, between
each two swings on that hand. A hand will have eBPM equal to the song's BPM when it does one forehand and one backhand
swing per beat.

We say that the effective BPM of a section is the maximum effective BPM
between both hands (so if one hand is fast, the map is fast, even if the other is slow).

Here are some examples of patterns and their effective BPM:

<!-- prettier-ignore -->
| Pattern | Example | Example (top view) | eBPM multiplier | eBPM at 120 BPM | Notes|
| :-: | :-: | :-: | :-: | :-: | :-: |
| Stream (1/4 precision) | ![Stream](/.assets/images/mapping/stream.png) | ![Stream](/.assets/images/mapping/stream_top.png) | 1 x BPM | 120 | Basis for eBPM |
| One-hand jumps (1/4 precision) | ![Jumps](/.assets/images/mapping/onehandjumps.png) | ![Jumps](/.assets/images/mapping/onehandjumps_top.png) | 2 x BPM | 240 | The hand is doing double work. |
| 1/3 jumps | ![Triplet jumps](/.assets/images/mapping/tripletjumps.png) | ![Triplet jumps](/.assets/images/mapping/tripletjumps_top.png) | 1.5 x BPM | 180 | Similar to regular jumps but slightly slower. |
| Flick | ![Flick](/.assets/images/mapping/flick-alt.png) | ![Flick](/.assets/images/mapping/flick-alt_top.png) | 2 x BPM | 240 | While this spreads the effort across both hands, the speed of each flick is the same as jumps. |
| Gallop | ![Gallop](/.assets/images/mapping/gallop.png) | ![Gallop](/.assets/images/mapping/gallop_top.png) | 2 x BPM | 240 | A gallop is still a flick on one of the hands. It also makes one hand feel double the speed of the other, which is normally undesirable. |
| Half speed stream (1/2 precision) | ![Half speed stream](/.assets/images/mapping/halfspeedstream.png) | ![Half speed stream](/.assets/images/mapping/halfspeedstream_top.png) | 0.5 x BPM | 60 | Half the notes, half the speed. |
| 1/2 single hand | ![Single hand slow](/.assets/images/mapping/halfonehand.png) | ![Single hand slow](/.assets/images/mapping/halfonehand_top.png) | 1 x BPM | 120 | In terms of speed, it's like a stream where we removed one hand. |
| Burst stream (1/8 precision) | ![Burst](/.assets/images/mapping/burst.png) | ![Burst](/.assets/images/mapping/burst_top.png) | 2 x BPM | 240 | Bursts can be nice to represent very short intense sections of the map with fast sounds, but they are often a difficulty spike. |
| Bomb resets (1 beat) | ![Bomb resets](/.assets/images/mapping/beatbombreset.png) | ![Bomb resets](/.assets/images/mapping/beatbombreset_top.png) | 1 x BPM | 120 | Bomb resets have a movement associated with them, which we count as a swing for measuring eBPM. |

In most maps, patterns where eBPM = song's BPM should be the basis of speed for the map, with higher
eBPM patterns reserved for more intense sections.

For example, if a whole section has 4 sounds per beat consistently,
mapping it all to one hand might be overemphasizing it; consider a stream or similar pattern, maybe adding jumps or flicks
to emphasize specific notes.

If, instead, a section only has sounds every half beat but still feels
like standard intensity, consider mapping [doubles](#handedness-and-hit-type) to avoid it feeling undermapped.
A half speed stream will feel very slow.

:::tip TIP
Use patterns with eBPM = BPM as a basis for speed, and go over or below that for emphasis.
:::

While swing speed is mostly dictated by the speed of the song, there are some general ranges for what swing speeds
players will consider fast / slow.
The following is an approximation:

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| eBPM range | Feeling of speed |
| :-: | :-: |
| 0 - 60 | Extremely slow. Ambient. Easy to get high accuracy score. |
| 60 - 100 | Slow. Floaty. Slow dancing. |
| 100 - 150 | Medium-slow speed. A majority of songs lie in this range. Dancey. The body moves most naturally at this speed. |
| 150 - 200 | Moderately fast and intense. Most Expert+ players can handle this, but can be tiring over prolonged periods. |
| 200 - 300 | Midspeed. Speed becomes challenging, but many players are comfortable within this range. Complex patterns are increasingly difficult to play. |
| 300 - 400 | Speed mapping. Speed is one of the main challenges. Many players cannot play this fast. Very difficult to play complex patterns. |
| 400+ | Extreme speed. Even the best players will struggle and quickly tire in this range. |

<!-- markdownlint-enable MD013 -->

### Spacing

_Spacing_ describes the relative distance of notes, especially those of the same hand.

At basic mapping levels, it's easy to let [vision](#vision) and [parity](#parity) entirely determine the positioning
of notes in the grid, since they present major constraints. Because of this, spacing is one of the most overlooked
fundamental concepts in mapping, and one of the hardest to learn for newer mappers.

In this section we focus mostly on the general distance between subsequent swings. In
[Hand repositioning](#hand-repositioning), we discuss how note positioning affects the way the player moves
their arms and hands in more detail. These concepts are also fundamental for
[momentum mapping](./advanced-mapping.md#momentum-mapping).

Spacing is relevant for gameplay reasons in various ways. Most importantly, larger spacing requires faster
and more intense swings, even with the same [swing speed](#swing-speed). Even with pure wrist swings
(which are not possible or desirable most of the time), larger spacing requires more precise timing.

Very small spacing (like inline notes) can also be challenging to read, time, and score high on.
Normally, one lane/row (horizontally, vertically, or diagonally) is the least intense _swing distance_.
Two lanes/rows (e.g. bottom row to top row) is standard but more intense.
Three or more lanes/rows is reserved for the most extreme swings.

:::tip TIP
Be aware of how large the swings in your map are, and how they are influenced by spacing.
:::

<!-- prettier-ignore -->
| Swing distance | Example | Gameplay properties |
| :-: | :-: | :-: |
| 0 (Inline) | ![Inline spacing](/.assets/images/mapping/0-spacing.png) | Low physical effort. Harder to read, time, and score. |
| 1 | ![1-spacing](/.assets/images/mapping/1-spacing.png) | Low physical effort. Easy to read and score. Low emphasis. |
| 2 ("Jumps") | ![2-spacing](/.assets/images/mapping/2-spacing.png) | Moderate physical effort. Medium emphasis. |
| 3+ | ![3-spacing](/.assets/images/mapping/3-spacing.png) | Very large swings, usually requires arm movement. Big emphasis. |

Spacing also affects [readability](#readability) in multiple ways. When notes are too cramped, it's more difficult
to tell them apart and read their relative timing and direction. When notes are on all sides of the playspace with
little order,
it divides the focus of the player and slows down reading.

When used correctly, spacing can be the best way
to make important variations in your patterns more obvious. For example, increasing the spacing during an unexpected
pause in rhythm can make the pause more readable.

:::tip TIP
Use spacing to help the player follow your mapping, and as a tool for emphasis.
:::

Spacing can also be a great way to introduce representation and emphasis, in more and less obvious ways,
by simply adding variation with a purpose.

:::details Read more...
GalaxyMaster has published [some thoughts](https://docs.google.com/document/d/1qdRGk8QR48hx0ng05Z45tv-6KvMFPYxiAY8l441j3Mk/edit#heading=h.avqur9mqldw6)
on spacing.
:::

### Hand repositioning

For most Beat Saber players in most maps, _wrist movement_ is the most important aspect of note swinging,
but it is aided to a degree by _arm movement_.

However, even when swinging purely from the wrist, arm movement still plays a major role in _repositioning_ the hand,
which is the base position where swings happen.

While the hands will not be brought all the way to the notes,
nor move the full distance between subsequent notes, the arm will need to work to reposition
the hand both to bring it in line for the swing. This is needed to make swings more comfortable, and allow swinging
at the right angles.

:::tip TIP
Even with pure wrist swings, hand repositioning still requires arm movement.
:::

While repositioning is relevant for most patterns, some require more repositioning than others.
Since it requires arm movement, repositioning is harder to do faster, and involves more momentum (arms are heavy).

A perfect example of repositioning is _arm circles_. In their simplest form, arm circles are large horizontal repositioning
of the hand while swinging vertically.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Arm circles |
| :-: |
| ![Arm circles](/.assets/images/mapping/circle.png) |
| The hand repositions horizontally (left and right) using arm movement, while the wrist swings up and down. |

<!-- markdownlint-enable MD013 -->

Another pattern where hand positioning plays a large role are _inverts_. An _inverted note_ is one where
the arrow points inwards from outside the grid, while a swing between two subsequent notes pointing at each other
is called an _invert_ or _inversion_.

Because of how Beat Saber [scoring](#scoring) works, a player will aim for large pre-swing and post-swing angles.
This is harder with inverts, because the player will need to reposition their hand
in order to get enough pre-swing angle for the inverted note.
This repositioning makes inverts more physically demanding and harder to time and score well on.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Non-invert | Invert |
| :-: | :-: |
| ![Non-inverted swing](/.assets/images/mapping/non-inverted-swing.png) | ![Inverted swing](/.assets/images/mapping/inverted-swing.png) |
| The hand stays mostly static while the wrist swings. | The hand moves down significantly to guarantee enough pre-swing angle on the second note. |

<!-- markdownlint-enable MD013 -->

Hand positioning is very relevant in _crossover_ patterns as well, especially in Dance or Tech maps that encourage
lots of arm movement. Apart from the risk of hands colliding in a _handclap_ when using arm to swing, crossover
patterns may produce _arm tangles_, where one arm is on top of the other
and the notes require the player to move the arms through each other.

There are two ways to handle arm tangles.

- The **safest** way to prevent arm tangles is to keep track of relative arm position (which arm is on top)
  in crossover patterns, and always _resolve_ the hand on top first, by making it swing first after the crossover pattern,
  putting it away from the tangle.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Safely resolved arm tangle | Problematic arm tangle |
| :-: | :-: |
| ![Safe arm tangle](/.assets/images/mapping/tangle_resolve.png) | ![Problematic arm tangle](/.assets/images/mapping/tangle_problem.png) |
| The right hand crosses on top, so it is resolved before the left hand moves. | The left hand will try to move through the right hand, which will create problems. |

<!-- markdownlint-enable MD013 -->

:::tip TIP
The safest way to avoid arm tangles is to always resolve the top hand first.
:::

- The **most flexible** way to prevent arm tangles is to only use crossover patterns that do not require the arms
  to actually cross. This can be done through safer patterns (less wide, less centred) or by encouraging
  exclusive wrist swinging with [map context](#map-context). This is more risky as the experience
  will vary between different players, but it can work well if there is enough certainty that
  the target audience will not actually cross their arms. This is less likely to work on slower, dancier maps.

Hand repositioning can be used to communicate [sway](#full-body-motion)
or simply to add variety in representation to the map.

:::details Example
In <https://allpoland.github.io/ArcViewer/?id=3628f&t=59>, the map frequently utilizes 3-wide patterns that
move right and left, heavily encouraging hand repositioning for both hands and providing additional variety
and representation to the map, while also keeping the swing distance limited, which helps cope with the speed of the map.
:::

:::details Read more...
This [incomplete glossary](https://docs.google.com/document/d/16hydw1Vob9uDK3VTpwXn9ov0o-kp_xgm9jpPduOwOJ4/edit?usp=sharing)
by Kansas contains definitions for some of the concepts explained here.
:::

### Full body motion

Apart from wrists and arms, many Beat Saber maps include moving the torso through _swaying_, _leaning_, _crouching_,
and similar movements. This is more typical of _fitness_ and _dance_ maps.

For the purposes of this section, we are assuming that the players' feet don't ever leave the ground or move around.
Maps requiring feet play are very uncommon and outside the consideration of this page.

Most full body motions require more regularity and predictability than arm and wrist motions.

#### Leaning

_Leaning_ is probably the least physically involved full body motion. It involves rotating the upper body
so as to change the horizontal line between the hands.

For anatomical reasons, leaning is most necessary and comfortable when there are _palm-out_ hits involved.
These are hits where the palm is facing outwards towards the right for the right hand or the left for the left hand.

:::tip TIP
Leans are mostly defined by palm-out swings.
:::

<!-- prettier-ignore -->
| Leaning | |
| :-: | :-: |
| ![No lean](/.assets/images/mapping/no-lean.png) | (Starting forehand right and backhand left). All hits are palm-in. Even with large rotations, leaning is not generally required. |
| ![Left lean](/.assets/images/mapping/left-lean.png) | (Starting forehands). The palm-out hits on the right hand incentivize/force a lean to the left (counter-clockwise). |
| ![Right lean](/.assets/images/mapping/right-lean.png) | (Starting forehands). The palm-out hits on the left hand incentivize/force a lean to the right (clockwise). |

While leans do closely relate to _dodge walls_, their relation isn't straightforward. We discuss the relation
between leaning, swaying, and dodge walls in the section about [dodge walls](#dodge-walls).

For various reasons, discussed in the sections on [parity](#parity) and [rotations](#rotations), it's generally
more comfortable to start / increase lean on forehand swings. While backhand palm-out swings are playable and acceptable,
they are more natural after the lean has already been established through forehand swings.

Similarly, it's generally more natural to come out of leans (sometimes called _unleaning_) on backhand swings.

:::tip TIP
It's normally most natural to start leans on forehand swings, and come out of them on backhand swings.
:::

When both hands are going palm-out at the same time, we say that we have a _conflicting lean_. While this can be
a completely legitimate pattern, the mapper should be aware of the physical intensity and emphasis that it carries by
creating a lot of tension on the player's shoulders.

As described before, leaning benefits from regularity and predictability. In this case, this relates
to what we sometimes call _lean parity_, which has two principles:

- Holding a lean for a long time tends to be uncomfortable. We call these _sustained leans_.
- After finishing a lean, the player will naturally want to lean _in the opposite direction_.
  Chaining multiple same-direction leans is physically unnatural.

The reasons behind this are explained in more detail on the section on [momentum and tension](#momentum-and-tension).

:::danger Bad Practice
Avoid excessive sustained leans. Keep in mind they are physically demanding and use them only
for specific reasons.
:::

:::details Example
<https://allpoland.github.io/ArcViewer/?id=2c25a> has impeccable lean management. As an exercise,
slowly go through the map and note all palm-out hits, their parity, and how they contribute to leaning in each direction;
as well as the lean parity (how long leans are sustained, and the variation between both
lean directions).
:::

#### Swaying

_Swaying_ refers to side to side body motion, performed by shifting the weight between both legs without rotating the body.

There is not such a clear cut way of communicating or encouraging sway as lean, but it is usually done
through three interconnected tools:

- Vertical swings on the sides, or more generally, swings where the arrows are not pointing away from the centre
  of the play area, encouraging body repositioning.
- Dodge walls. Differentiating or combining lean and sway is complicated and we discuss it in [a later section](#dodge-walls).
- Regularity. While leaning can have more irregular timing as long as lean parity is preserved,
  swaying benefits greatly from regular side to side timing.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Sway |
| :-: | 
| ![Sway](/.assets/images/mapping/sway.png) |
| The vertical notes on the sides (not centre-focused), the dodge walls, and the regularity of the movement, work together to encourage sway. |

<!-- markdownlint-enable MD013 -->

Sway can be achieved without dodge walls or without notes, but regularity of the movement is much more important.

:::tip TIP
If you want to encourage sway, keep your side to side motion **regular**.
:::

The frequency of sway is also physically limited. Normally, players will struggle to move from one side to
the other in less than ~500ms (half a second). Faster sway will feel unnatural and bothering.

:::details Example
<https://allpoland.github.io/ArcViewer/?id=3071e&t=0> establishes a very regular sway motion from the beginning of the map.
From 0:15 onwards, it introduces dodge walls to accentuate it. The motion becomes more complex from 0:30 onwards
by adding lean on top of the pre-existing sway.
:::

#### Dodge walls

_Dodge walls_ are walls that cover one of the two middle lanes, and force the player's head to move to the opposite side.

At a basic level, dodge walls enforce very little head motion on their own, and are normally used as an
additional element to communicate intended motion or enhance the full body motion in the map.

The relation between dodge walls, [leaning](#leaning) and [swaying](#swaying) can be a bit paradoxical, though,
to the point where ambiguity can lead to players feeling like they are being led into a wall.
This is summarized by the following simplified patterns:

<!-- prettier-ignore -->
| Dodge walls | |
| :-: | :-: | 
| ![Simple sway](/.assets/images/mapping/simple-sway-wall.png) | **Simple sway** motion. The pattern and the wall encourage the player to shift the weight to the right. |
| ![Simple lean](/.assets/images/mapping/simple-lean-wall.png) | **Simple lean** motion. The pattern encourages leaning clockwise, which works well with the dodge wall putting the player's head out of harm's way through the rotation. |
| ![Hard dodge](/.assets/images/mapping/hard-dodge-wall.png) | **Hard dodge** motion. This pattern requires much more violent motion, with the player needing to unnaturally put the head out of the way while hitting the notes. This will be problematic if it fights an established lean or sway pattern. |
| ![Sway lean](/.assets/images/mapping/sway-lean-wall.png) | **Sway lean** motion / anti-lean wall. This pattern can be played well, but it requires a simultaneous counter-clockwise *lean* motion and a heavy *sway* motion to the right to avoid hitting the wall. If the sway motion is not established, this will unfairly push the player's head into the wall. |

:::danger Bad Practice
Make sure that your established body motion will not push players into a dodge wall.
:::

In terms of representation, dodge walls should normally be associated with a sound, and it is common to also have
notes associated to the same sound.

Regardless of this choice, since the motion associated to a dodge wall happens
_before_ the wall, the wall should be placed _after_ the sound, so that the motion coincides with the sound.
Typically, 1/4 or 1/2 beats later is suggested.

:::tip TIP
Dodge walls should always appear _after_ the sound they are associated with.
:::

Also note that dodge walls have relevant effects on [vision](#vision).

#### Crouching

_Crouching_ or _squatting_ is achieved by adequately named _crouch_, _squat_ or _duck_ walls. It involves the player
significantly lowering their head. This is a very physically demanding motion that has a range
of secondary effects, and is almost exclusively reserved for fitness maps.

While the wall itself is the fundamental trigger of a crouch, there are a series of aspects that can
make it easier or more comfortable to play.

_Having enough time_ to perform the crouch motion is the most important one. This involves:

- Seeing the wall in time. For this, adjusting the [jump settings](#jump-settings) of maps with crouch walls can be important.
- Avoiding motions that counter the crouching motion shortly before the wall. (For example, top row backhand swings)
- Like dodge walls, crouch walls should appear _after_ the motion they are related to. In fact, crouch walls
  will typically be placed at least 1/2 beat after their associated sound to allow enough time to perform the motion.
- The frequency of crouch walls should be quite low. Apart from being physically demanding, seeing a crouch wall,
  crouching, letting it end, and standing back up, takes time.
  Typically, there should be at least ~3 seconds between crouch walls, with anything below 2 seconds
  being extremely challenging to play.

While there are no hard rules on this,
typically swings that point downwards will help encourage a crouch, especially if they're forehand swings.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Crouch wall setup |
| :-: |
| ![Good crouch wall](/.assets/images/mapping/good-crouch.png) |
| A standard crouch wall setup. The down swing helps the crouch, and the wall is 1/2 beat after the associated sound/motion. |

<!-- markdownlint-enable MD013 -->

Sometimes, side walls can be used to slowly build the crouch, alerting players ahead of time that something is going to happen.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Crouch signposting |
| :-: |
| ![Crouch signposting](/.assets/images/mapping/crouch-signposting.png) |
| Crouches can be signposted by having walls that slowly build into the crouch, bringing more visual attention from the player into it. |

<!-- markdownlint-enable MD013 -->

Finally, establishing the expectation of a crouch by using it for regularly timed sounds, and/or using well established
patterns of movement that lead into crouches, can turn crouch walls from a jump scare to a core element of the enjoyment
of a map. We discuss this a little further in the section on [context](#map-context).

:::danger Bad Practice
Do not randomly throw in crouch walls in your map. This will alienate players. Make sure they are contextualized,
built into, and that the motion is helped. If crouch walls are not a core element of your map,
consider whether you really need them.
:::

Some other aspects of the map are changed during crouches. Firstly, _extended crouches_
(crouches that last several seconds) can be okay but are fundamentally more noticeable to play
and should be reserved for heavy fitness maps, and even in those cases their use should be limited.

[Vision](#vision) is significantly changed while crouching, with the position of the player moving
about one whole lane down. Therefore, the criteria of what counts as a vision block is modified before,
during and after a crouch wall.

:::tip TIP
Crouching changes how vision blocks work due to the head moving.
:::

Similarly, the arms have less space to move and tend to be more on the sides while crouching.
Reach is reduced in all directions, but especially vertically upwards.
For example, it's not normally recommended to have top row swings right after a crouch wall ends.

:::tip TIP
Avoid using the top row right after a crouch wall ends.
:::

:::details Read more...
Irahi, a well known fitness mapper, wrote
[a document](https://onedrive.live.com/view.aspx?resid=2358CE686FD33B6A!22239&ithint=file%2cdocx&authkey=!ABmIq6BqrKxyYVY)
with some useful tips on mapping fitness.
:::

### Bombs

_Bombs_ can be a really cool way to represent additional sounds, generate a feeling of tension, or produce secondary movements.
However, they come with a lot of pitfalls and caveats. Good bomb usage requires very careful thought and being
considerate with the player.

Unlike notes, bombs have very little information regarding what exact movement should be performed.
Bombs should be placed with flow in mind just as much as notes are.

We divide bomb usage into three categories:

- Bombs not meant to interfere with the movement of the player. _Cosmetic bombs_.
- Bombs meant to prevent the player from doing a certain movement. _Bomb holds_.
- Bombs meant to make the player do a certain movement. (Typically, _bomb resets_).

These may sometimes be used in tandem, but for each particular bomb, the goal should clearly be one of these three,
and should do it adequately.

In the majority of cases you also want the bombs to serve a representation purpose,
which normally includes representing some particular sound.

:::tip TIP
Ambiguous bombs are inherently problematic. You should always have a clear idea of whether the bombs are meant to be
purely cosmetic, prevent a movement, or produce a movement; and the bombs should communicate this very clearly.
:::

_Cosmetic bombs_ are the easiest to understand. They should be completely out of the way of the sabers. For example,
if one hand just did a forehand swing,
you may want to avoid having cosmetic bombs in the whole of the bottom row.

:::warning
Sabers move involuntarily inbetween swings. In particular, they naturally will move towards a _neutral position_
(down after a forehand, up after a backhand).
Cosmetic bombs should account for this small movement and avoid being in the way.
:::

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Problematic cosmetic bombs |
| :-: |
| ![Problematic cosmetic bombs](/.assets/images/mapping/cosmetic-bomb-bad.png) |
| It might seem that the bombs are out of the left hand's way after this swing, but the saber will naturally move back to the left slowly, very likely hitting the bombs and making many players reset. The parity afterwards is ambiguous. |

<!-- markdownlint-enable MD013 -->

:::details Example
The bomb field at <https://allpoland.github.io/ArcViewer/?id=2f77b&t=172> is quite aggressive, but it is entirely
out of the sabers' paths and therefore it is almost impossible for the players to hit it.
Don't do this at lower difficulties, though, as bombs towards the face will terrify lower skill players.
:::

For all types of bombs, but especially cosmetic bombs, it's very risky to have bombs at all whenever
either of the sabers is swinging. These bombs will effectively play as precision bombs, enforcing a much stricter motion
which, in many cases, will play badly.

Saber swings take up a lot more space than it seems, and bombs are easy
to hit by accident. When doing bomb spirals over a long period of time, consider pausing them (i.e. having no bombs)
around the notes that require swinging.

:::warning
Any bombs present at the same time as a saber is swinging will be inherently risky. To be safe,
leave approximately 1/4 beats before and after any note free of bombs.
:::

_Bomb holds_ are sets of bombs meant to communicate to the player that they should _not_ do a certain movement.
Bomb holds work best when:

- They start very soon after the previous swing. This allows the player to read them as part of the pattern
  and prevents them from moving in the time between the swing and the bombs.
- They keep the area where the sabers are positioned after the swing clearly safe from bombs.
- They have a lot of bombs, clearly indicating that the sabers cannot be moved back.

:::details Example
In <https://allpoland.github.io/ArcViewer/?id=34847&t=75> very large fields of precision placed bombs with
Noodle Extensions are used to communicate that the posture should be held after the swings.
:::

The most common type of bombs, which are meant to indicate an active movement are _bomb resets_. In many ways, the rules
for making bomb resets work are the opposite of bomb holds:

- They should give some time after the previous swing for the player to read and perform the reset motion.
- They clearly cover the area where the sabers are right after the swing.
- They only cover the area where the sabers were, leaving the rest of the play area safe, giving flexibility on the specific
  positioning of the sabers after the reset.

As the name indicates, bomb resets will reset parity. Due to how bomb spawning works (starting on the bottom row),
and due to the comfort of different movements, bomb resets will mostly only work when they are placed after
_a forehand swing_ (_bottom resets_). While _top resets_ can work, they are considerably more risky and
will alienate a lot of players.

<!-- prettier-ignore -->
| Bomb resets | |
| :-: | :-: |
| ![Bottom reset](/.assets/images/mapping/bottom-reset.png) | Bottom resets are easier to read (due to bomb spawning) and play (due to parity being asymmetric). |
| ![Top reset](/.assets/images/mapping/top-reset.png) | While top resets can work, they are considerably more difficult to read and play, and they will alienate many players. You should not use them lightly. |

:::warning
Top resets are a lot harder to read and play, and a lot of players dislike them.
:::

Like with walls, the motion associated with bomb resets happens _before_ the bombs, and therefore, bombs should be placed
_after_ the sound associated with them to make the motion happen at the same time as the sound.

If there is no
specific sound associated with the reset, the bombs should be closer to the notes _after_ than to the notes _before_.

:::danger Bad Practice
Do not place bomb resets at the middle point between the swings. They should always be closer to the latter swing.
2/3 is typically used.
:::

Sometimes, bomb fields that last a longer time and move through the play area are used to communicate
multiple things as time goes by. This can be flavourful and keep the player's attention
on the bombs throughout, communicating the motions more clearly. We often call these _bomb spirals_.

When a bomb spiral is used to slowly make the player move their sabers, you have to account for the fact that players
will avoid the bombs using a minimal amount of movement. Therefore, spirals should conceptually be _behind_ the sabers'
current position and slowly, clearly moving towards them, effectively **pushing** the sabers.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Bomb spiral |
| :-: |
| ![Bomb spiral path](/.assets/images/mapping/bomb-spiral-path.png) |
| The bomb spiral will effectively "chase" the sabers and "push" them, with the sabers being slightly ahead of the spiral. |

<!-- markdownlint-enable MD013 -->

:::tip TIP
Think of a bomb spiral as "chasing" the sabers, always slightly behind them, "pushing" them.
:::

:::warning
The parity after a bomb spiral can easily be ambiguous, since the movement they induce does not have strict parity.
Try to make sure you communicate exactly what parity the player should have when a bomb spiral ends.
:::

:::details Example
The following map uses bombs throughout on the sections with the most complex flow. These are mostly bomb holds
to prevent the player from resetting to a neutral posture, with slight hints of bomb spirals that help communicate
what the next motion should be. They are also very flavourful, representing the growling sound.

You can see this in multiple sections of the map, used in different ways but with the same purpose:

- <https://allpoland.github.io/ArcViewer/?id=2d4e6&t=94>
- <https://allpoland.github.io/ArcViewer/?id=2d4e6&t=227>
- <https://allpoland.github.io/ArcViewer/?id=2d4e6&t=271>
  :::

### Cosmetic Walls

Cosmetic walls are one option for adding a visual element to the map close to the player. They narrow down the field to a
smaller region, making notes feel closer together and faster approaching. They can also be used to represent sounds not
mapped by notes, or even to flesh out quiet or slow drifting sections.

When making v3 maps, or using Mapping or Noodle Extensions, a huge space of possibilities is opened up
by allowing walls to be of almost any height, width, and location. However, this requires a significantly larger amount
of effort and is not playable without the respective mod / game version.
See [Extended Mapping](./extended-mapping.md#wall-mapping) for more info.

:::details Examples
These are some maps that use vanilla v3 walls for cosmetic purposes:

- <https://allpoland.github.io/ArcViewer/?id=31fbd&t=155>
- <https://allpoland.github.io/ArcViewer/?id=2be44&t=206>
  :::

### Arcs

_Arcs_' main function is representation - used for long dragging sounds or sequences of sounds that feel linked.

They can also serve some minor gameplay functionality. Arcs can help readability by guiding
the hands inbetween notes, however, they shouldn't be used as a crutch to try to map otherwise unreadable swings.
This is dependent on the player and works best for slow transitions lasting several seconds.

Arcs also affect [scoring](#scoring),
by giving full score for the post-swing of the head note and the pre-swing of the tail note. However, this is a very
minor effect.

:::danger Bad Practice
While arcs can help readability, you should not rely on them to be the only thing communicating an otherwise unreadable motion.
:::

Arcs do come with some downside, though. If abused, they can severely increase [clutter](#clutter), and for some players,
they can even cause [vision blocks](#vision). Therefore, they should be reserved for select swings or parts of the song.

Arcs can also be tweaked by using the right positions and angles for head and tail notes to make the path more suitable,
and their head and tail _multipliers_ should be adjusted to make the curve size more adequate.

:::danger Bad Practice
Do not abuse arc usage. They will affect vision and create clutter, on top of blurring out representation.
Reserve them for select swings or parts.
:::

:::tip TIP
Adjust head and tail multipliers for arcs to find the best aesthetics and readability.
:::

Note that most environments will also introduce _clamping_, where large arcs get flattened to avoid intersecting
with environment objects. This can be very aesthetically unpleasant for some people.

The following environments do not have clamping, so you can trust the arcs will look smooth.
(For other environments, check ingame):

- Skrillex
- Weave

### Momentum and tension

_Momentum_ can refer to multiple concepts, most of which relate in one way or another to the physical
momentum of the body. If you have physical intuitions about momentum, these will be useful for understanding this section.

Keep in mind, however, that there is more at play than pure physics when a player is playing a Beat Saber map.

Several concepts are relevant for [momentum mapping](./advanced-mapping.md#momentum-mapping),
but in this section we'll focus on one of the most intergal ones: _Rotational momentum_.

At its most basic, rotational momentum is the idea that after a hand [rotates](#rotations) in one direction,
it will build momentum, making it more comfortable to _continue rotating in the same direction_.
The larger a rotation is, the more momentum it generates.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Rotational momentum | |
| :-: | :-: | 
| ![Playing with momentum](/.assets/images/mapping/momentum-yes.png) | This sequence *follows* momentum. The counter-clockwise rotation between the first two notes makes it more natural to continue with another counter-clockwise rotation. |
| ![Playing against momentum](/.assets/images/mapping/momentum-no.png) | This sequence *breaks* momentum. After the first counter-clockwise rotation, trying to do a heavy rotation in the opposite direction feels unnatural. Additionally, since this is done on negative curvature, it will make this sequence particularly awkward for most players. |

<!-- markdownlint-enable MD013 -->

:::tip TIP
After a rotation, following momentum by continuing to rotate in the same direction creates better flow.
:::

Another aspect that significantly affects rotational momentum is relative [positioning](#hand-repositioning) of notes.
This is mostly seen through the effect of _arm circles_. While this effect is more relative and depends on other factors,
as a general rule, a circling motion in one direction will help generate rotational momentum in the same direction.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Momentum and arm circles |
| :-: |
| ![Momentum in arm circles](/.assets/images/mapping/momentum-circle.png) |
| The counter-clockwise arm circle will generate some rotational momentum that makes the rotation on the third swing more natural. |

<!-- markdownlint-enable MD013 -->

:::tip TIP
Use arm circles in the same direction as rotation to help generate rotational momentum.
:::

In a more general sense, more inverted and horizontally displaced patterns generate more rotational momentum
than linear patterns.

<!-- prettier-ignore -->
| Exploiting positioning to build momentum | |
| :-: | :-: | 
| ![Mediocre momentum](/.assets/images/mapping/momentum-meh.png) | While this sequence follows momentum, it does not build a lot of it due to the linearity of the second swing. |
| ![Good momentum](/.assets/images/mapping/momentum-nice.png) | Making the second swing an inversion and horizontally displaced makes a circling motion that helps the rotation on the last swing. |

Of course, if we just followed momentum forever, we would endlessly rotate in the same direction and never go back.
Don't do this.

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Endless momentum |
| :-: |
| ![Endless momentum](/.assets/images/mapping/momentum-lol.png) |
| Technically, this pattern follows momentum, but it's obviously unplayable without resetting for essentially everybody. |

<!-- markdownlint-enable MD013 -->

The issue here is: the more we rotate, the more difficult it is to continue rotating. This is because of _tension_.

While momentum depends mostly only on the angle transition and relative position of the notes, tension relates to the
_absolute rotation_ of each swing. The further the swing angle is from a _neutral angle_
(typically up/down or slightly palm-in), the more tension there is to rotate back towards a neutral position.

Tension will build up as we continue rotating, and fight against momentum until we reach a limit, or _apex_,
and begin rotating in the opposite direction (which we call a _momentum reversal_).

At this point,
all the built-up tension will work against the rotation, generating rotational momentum back in the opposite direction.
The apex angle depends on how much momentum was built up, but is an aspect that mappers should be conscious
of and can relate to the emphasis and consistency of a map.

:::tip TIP
Use the apex of rotations to control intensity, emphasis and consistency.
:::

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| Momentum apex |
| :-: |
| ![Momentum apex](/.assets/images/mapping/apex.png) |
| In this very intense sequence, the apex hits (which are all forehand hits here) are on quite extreme angles. Momentum has transformed into tension that is then released on the opposite direction. |

<!-- markdownlint-enable MD013 -->

Readers familiar with physics might see a familiar pattern here. This is very similar to periodic systems
where energy oscillates between two different forms of energy (typically, potential and kinetic energy). For example,
a _pendulum_ or a _spring_. Potential energy gets transformed into kinetic energy, accelerating the system,
which then is used to accumulate potential energy on the other side, until an apex is reached, and a reversal happens.

![Pendulum](https://upload.wikimedia.org/wikipedia/commons/5/57/PendulumMecanicalEnergy.gif)

The physics interpretation should be taken with a grain of salt, though. There are two main caveats to consider:

- Momentum is not only related to how the map plays. It can also be a great way to communicate intended motion,
  significantly helping readability. This effect can have the same or even more impact on playability
  (especially in slower maps). [Momentum mapping](./advanced-mapping.md#momentum-mapping) relies on this
  "sublanguage" of mapping to make extreme hits a lot more predictable due to the rules of momentum.
- There are many other factors in a Beat Saber map. Breaking momentum will theoretically reduce readability and cause
  awkward patterns, but this doesn't make them unplayable. A momentum break might be imperceivable, worth it for other reasons,
  or actually purposeful. It's good to be aware of how momentum and tension work, but like most other rules in mapping,
  you can break them in clever ways to enhance your representation, gameplay, and map identity.

:::tip TIP
Momentum and tension relate as much to readability as they do to physical gameplay.
:::

:::warning
A good map can still break momentum. But it will do so purposefully and intelligently.
:::

You can find a systematic approach to momentum, tension, and many other topics on the page on
[momentum mapping](./advanced-mapping.md#momentum-mapping).

:::details Example
Many mappers will follow momentum almost exclusively in their maps. GalaxyMaster is a prominent example,
and you can see the principles at work in maps like
<https://allpoland.github.io/ArcViewer/?id=362c5&t=31> .
:::

:::details Read more...

- GalaxyMaster has published
  [a summary](https://docs.google.com/document/d/1qdRGk8QR48hx0ng05Z45tv-6KvMFPYxiAY8l441j3Mk/edit#heading=h.oqckjf2globh)
  of what he considers the main principles of momentum mapping.
- Kansas' [incomplete glossary](https://docs.google.com/document/d/16hydw1Vob9uDK3VTpwXn9ov0o-kp_xgm9jpPduOwOJ4/edit?usp=sharing)
  is heavily focused on momentum and related concepts.
  :::

### Pattern setup

_Pattern setup_ refers to any immediate preparation before a pattern that helps readability and playability.
It's an abstract concept that relates to all the things we've talked about so far, but it's worth considering
the concept by itself.

Pattern setup can be achieved by things like:

- Cleverly using [handedness](#handedness-and-hit-type) before a pattern to make it clear what handedness
  the pattern will be, mainly by keeping variations consistent and predictable.
- Using [handedness](#handedness-and-hit-type) to enforce a certain [parity](#parity) for a pattern.
- Carefully tailoring sequences of [rotations](#rotations) to get a certain angle for a pattern.
- Playing with [spacing](#spacing) to achieve a certain position.
- Establishing a clear pattern of where [the hands should be](#hand-repositioning) that the player can
  understand.
- Using [rotations](#rotations) and [positioning](#hand-repositioning) to aid [full body motion](#full-body-motion).
- Using [bombs](#bombs) to better communicate motions and make them more natural.
- Etc.

One key idea to consider when thinking about pattern setup is that you can work **both forwards and backwards in time**.
You can place patterns in the map in order, based on what setup the previous patterns produced; you can also create a
specific pattern idea, and retroactively modify earlier patterns to ensure proper setup.

:::tip TIP
Pattern setup is often about adjusting earlier patterns to create the desired situation for a later pattern.
:::

### Jump settings

_Jump settings_ are settings affecting the whole map which change how fast the objects move towards the player
and how far away they spawn.

While there are many jump parameters, most of them depend on each other. There are only 3 degrees of freedom in a map's
jump settings: **BPM**, **Note Jump Speed (NJS)** and **Reaction Time (RT)**.

_BPM_ is the tempo of the song. This should be set as part of your [audio setup](./basic-audio.md) and
completely determined by the song itself, so while it varies between songs, it is not something you can adjust.

_Note Jump Speed (NJS)_ controls the speed at which objects approach the player. It is measured in meters per second.
It should be the first parameter you adjust after you do the audio setup, and if you readjust it later, you should
also readjust other jump parameters.

NJS affects playability in two different and contradicting ways, but one of said effects is normally much more
noticeable than the other:

- Higher NJS reduces the timing window to hit notes, making timing stricter. This can have cascading effects on gameplay,
  incentivizing more stiff play, making [hand repositioning](#hand-repositioning) harder and ultimately increasing
  the amount of misses the player will make. This effect might be hard for players to clearly identify while playing,
  but will dramatically change the feel of the map even with small adjustments to NJS, quickly making it unplayable.

- When a map is very dense and/or complex, creating lots of [clutter](#clutter), slightly higher NJS settings can
  help readability by increasing the visual spacing between notes. This effect is small and will not compensate
  for heavily cluttered maps, which should be fixed in other, more relevant, ways; but it can be a useful tool when the map
  is inherently heavily populated and some extra help is required. Faster maps will also inherently impose
  more strict timing on the swings, so a small increase in NJS will not have as dramatic an effect on timing
  as it would on slower maps.

Thus, the recommended approach to deciding NJS is to keep it _as low as possible, as long as the map is not too cluttered_.

:::tip TIP
Keep NJS as low as possible, and increase it only in small amounts when there is no better way to reduce clutter.
16 is a good starting point for Expert+.
:::

There is, however, such a thing as too low NJS, depending on the map's speed, which will make timing harder
to read and incentivize early swinging.
We normally start from a baseline and adjust from there. Here are some recommended NJS ranges:

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| NJS range | When to use | Example |
| :-: | :-: | :-: |
| 0-8 | **Do not use**. Excessively low. Timing becomes difficult and notes will easily clump together. | |
| 8-12 | **Very low NJS**. Adequate for Easy or Normal difficulty maps with very low note density. | <https://allpoland.github.io/ArcViewer/?id=27e38&mode=Standard&difficulty=Easy> |
| 12-14 | **Low NJS**. Adequate for Normal or Hard difficulty maps, or Expert maps with low note density. | <https://allpoland.github.io/ArcViewer/?id=2eda5&mode=Standard&difficulty=Hard> |
| 14-16 | **Mid-low NJS**. Most Hard and Expert maps will have NJS in this range. Some Expert+ maps with low note density and a floaty feel can also have this NJS. | <https://allpoland.github.io/ArcViewer/?id=2ddb0&mode=Standard&difficulty=Expert> |
| 16 | **Standard Expert+ NJS**. This is normally the baseline NJS most people start from for Expert+ maps. An Expert+ map of standard note density should probably have this NJS. | <https://allpoland.github.io/ArcViewer/?id=35136> |
| 16-18 | **Mid-high NJS**. A lot of Expert+ maps will be in this range. The effect on timing is not very noticeable and it may help readability slightly. | <https://allpoland.github.io/ArcViewer/?id=322e6> |
| 18-20 | **High NJS**. The effect on timing begins to be noticeable, but most people can play it. Use for moderately cluttered maps. | <https://allpoland.github.io/ArcViewer/?id=2cc29> |
| 20-22 | **Very high NJS**. The effect on timing is very noticeable, changing the tension and stiffness of the player; as well as significantly increasing the difficulty of the map. However, for very fast and very complex maps, this NJS might be warranted. | <https://allpoland.github.io/ArcViewer/?id=3628f> |
| 22-25 | **Extremely high NJS**. Arguably, no map should need to go this high, but for particularly extreme challenge or speed maps, some people might feel that this range is warranted. Timing is extremely tight and most players will have issues with it. | <https://allpoland.github.io/ArcViewer/?id=2d64a> |
| 25+ | **Do not use**. There is essentially no good reason to use NJS above 25 for any map. NJS becomes one of the main difficulties in the map. |

<!-- markdownlint-enable MD013 -->

The third and last degree of freedom is _reaction time_, which is directly linked to _half jump duration_, _spawn offset_
and _jump distance_. Feel free to skip the following explanation, as it is not very relevant for most mappers.

:::details
Technically, a map has its base half jump duration calculated through an algorithm, based on the BPM and NJS.
Then, the spawn offset gets added to it, to produce the final half jump duration, measured in beats, which is
the number of beats ahead of their song time that objects spawns. The jump distance is then a consequence of the final
half jump duration and NJS, and is measured in meters, being double the distance from the player to the notes when they spawn.
The _reaction time_ is the amount of time, in milliseconds, ahead of an object's song time that it spawns.
Basically, the amount of time a player has to see and process an object before it reaches them.

For example, for a map with 120 BPM and an NJS of 16, the base half jump duration will be calculated to be 2 beats.
If the map has an offset of -0.5, that makes the final half jump duration 1.5 beats. At 120 BPM, that is 750 ms
of reaction time (1.5 beats at 120 BPM takes 750 ms). At 16 NJS, that is 24 jump distance
(at 16 meters per second, in 750 ms an object moves 12 meters, and the double of 12 is 24).
:::

In practice, the recommended approach is to choose your preferred reaction time, and adjust the spawn offset
to reach the desired reaction time. Some editors, like Chromapper, allow you to directly modify reaction time,
and will automatically adjust spawn offset in accordance.

:::tip TIP
Generally it's simplest to focus on **reaction time**, and ignore jump distance, half jump duration and spawn offset;
letting them be automatically calculated.
:::

However, some mappers and players prefer that the half jump duration is aligned with the tempo
of the music, typically on quarters of a beat. This will make the notes spawn in synchronization
with the music. Many players do not care and/or do not notice this effect at all, while others do.
Aiming for a precise reaction time or aligning the half jump duration with the music are both acceptable approaches.

Reaction time preferences vary quite a bit between players. A shorter reaction time will make a map feel faster,
will often help players time their swings more accurately, and reduce the amount of clutter. However, it will also
make a map feel more tense and players might struggle to process the objects and move in time. Many players use mods
to adjust the reaction time of maps they play to their own taste. The reaction time of your map should be a reasonable
reaction time for players that do not adjust it, based on the map's speed, the amount of clutter,
and the physicality of the movements:

- Faster maps encourage shorter reaction times, for the sensation of speed and to reduce clutter.
- More dense maps encourage shorter reaction times, to reduce clutter.
- Maps with larger and more physical movements encourage larger reaction times, to be able to process the
  required motion and perform it.

Here are some general reaction time ballparks:

<!-- markdownlint-disable MD013 -->

<!-- prettier-ignore -->
| RT range | When to use |
| :-: | :-: |
| 0-350 ms | **Do not use**. Very few players can comfortably play at this range, and those who do will use mods to adjust it. |
| 350-425 ms | **Very short RT**. It is rarely justified to set this as the default reaction time of a map, since players who require it will use mods. However, for extremely fast and very cluttered maps, it can make sense. |
| 425-500 ms | **Short RT**. This is below what most players will use, but it might be reasonable for very fast maps. |
| 500-600 ms | **Standard Expert+ RT**. Most Expert+ maps will be in this range, with 500 ms being more adequate for fast maps and 600 ms for slow maps with large movements. |
| 600-750 ms | **Long RT**. This can be used for Expert+ maps if they involve particularly large or hard to process movements, but many players might struggle with early swinging or being confused with the amount of clutter. |
| 750-1200 ms | **Very long RT**. Reserved for very floaty maps, or lower difficulties with lower note density and lower NJS. Easy and Normal difficulties will normally be in this range. |
| 1200+ ms | **Extremely long RT**. While there is nothing inherently wrong with extremely long reaction time, a lot of players will dislike it, and at this range, it will hardly make any positive difference. To be used mostly for aesthetic purposes, if at all. |

<!-- markdownlint-enable MD013 -->

:::tip TIP
First, setup the map audio, including BPM. Then, choose an NJS setting. Finally, adjust the reaction time.
If you modify the NJS, readjust the reaction time.
:::

### Vision

_Vision blocks_ happen when the objects block each other on the player's vision, preventing the player from properly
seeing and reading the map.
The [basic page on vision blocks](./basic-mapping.md#vision-blocks) contains the most important notions on
avoiding vision blocks. Vision blocks constitute one of the most critical challenges to [readability](#readability),
and they can be one of the most alienating aspects of a map for players.

Vision can also constitute one of the biggest [constraints](#mapping-is-a-balancing-act) to mapping.
Therefore, it can be very tempting to have worse vision for the sake of better [spacing](#spacing),
[hand position](#hand-repositioning) or [momentum](#momentum-and-tension). However, this is discouraged.
If something truly is a vision problem, fixing that should be a priority.
Ideally, you want to find solutions that keep acceptable vision while having better properties in the other dimensions.

:::danger Bad Practice
Don't sacrifice vision for the sake of pattern setup. This alienates players and is harder to notice the effect of
due to mapper blindness. Find solutions that are within acceptable vision ranges.
:::

But what truly constitutes a vision issue? This question is really difficult to answer accurately.
Here are some general principles, though all of them have exceptions:

- Vision blocks are almost always produced by face notes (notes in the middle two lanes) blocking notes
  in the same half of the play area.
- Inline notes can also produce vision blocks (notes in the same grid position with short time distance between them).
- Vision blocks depend on NJS.
- When the note behind is very close in time to the one in front, it might be possible to see it on the side
  as it approaches, avoiding a vision block.
- When there is enough time between the notes, the player might be able to see the note behind in time to process it
  after swinging through the previous one.
- Vision blocks are subjective. Different players will have different experiences.
- Vision blocks become a smaller issue with replays of the map.
- Vision blocks can be much less problematic with better [pattern setup](#pattern-setup), specially when using good
  [momentum](#momentum-and-tension) and [context](#map-context).

The best approach to vision blocks is **practical**. Try, evaluate, adjust. There are two main aspects to this:

- Check the vision on any potentially problematic patterns while mapping. This can be done by checking ingame,
  or by using [ArcViewer](https://allpoland.github.io/ArcViewer/), a map preview tool that is geometrically accurate
  to the game's positions, sizes and spawning animations, making it a great tool to judge vision.
- Get external testplays from other players or mappers. Preferably, sight reads where they are not familiar with the map,
  to be able to evaluate the raw effect of vision blocks.

:::tip TIP
The best approach to vision blocks is **practical**. Check ingame, use vision accurate previews and external testplays
to determine the effect of potentially problematic vision blocks.
:::

### Map context

Where [pattern setup](#pattern-setup) refers to the immediate preparation of the player before a pattern, _map context_
refers to a more abstract notion of setting expectations within the map by establishing regular conceptual approaches
and patterns that the player understands and interiorizes.

Map context can mainly affect the [readability](#readability) of patterns, with the very same pattern turning
from unreadable to obvious if it appears in different maps after different contextualizations. Context can also even affect
other aspects of playability. For example, by having the player expect larger [rotations](#rotations),
more [full body motion](#full-body-motion), being consistent about how much [hand repositioning](#hand-repositioning)
the patterns require to avoid handclaps and arm tangles, or establishing whether [momentum](#momentum-and-tension)
is respected and should be expected or not.

It would be difficult to provide a full list of all aspects where map context is relevant, but we can point out
some typical aspects where map context can greatly help make certain patterns playable,
by establishing implicit rules that are followed throughout the map:

- When making hard to follow [parity](#parity) (for example, by using palm-up swings, resets, or both),
  be consistent about it.
- Establish the expected [intensity of rotations](#rotations) early on, and keep it consistent,
  with respect to the intensity of the music.
- Use [spacing](#spacing) consistently to signpost specific patterns and make them stand out more,
  making them easier to read.
- Keep a regular and clearly understandable policy for when the [hands should be repositioned](#hand-repositioning)
  horizontally that makes the map more comfortable to play.
- Establish your [full body motion](#full-body-motion) patterns clearly from the beginning of the map.
- When using [bombs](#bombs), be consistent about how you present bombs that are cosmetic,
  bombs that should hold postures, and bombs that should produce resets. That way, players will learn the pattern
  and read bombs much more easily.
- Be consistent in the intensity of [apex rotations](#momentum-and-tension), with respect to the intensity of the music,
  so that players will find it easier to predict when to continue rotating and when to reverse momentum.

Map context is particularly critical in "gimmick" maps, or maps that aim to break some conventional rule about mapping,
so that the way in which the rule is broken is clear to the player.

:::tip TIP
If you want to use risky, unconventional, or extreme patterns, it is very advisable to introduce them early on
in the map in clear ways.
:::

:::details Example
<https://allpoland.github.io/ArcViewer/?id=35b26> uses very unconventional flow, with lots of palm-out hits,
some of which are also inverted. However, it establishes a clear pattern of swaying and leaning in a sort of
conflicting way very early and keeps it going through the whole map, with consistency on how the swings transition
and both their parity and angles. This allows the player to engage with this style of movement
early on and have a much better time playing the map.
:::

:::details Read more...
GalaxyMaster has published [some thoughts](https://docs.google.com/document/d/1qdRGk8QR48hx0ng05Z45tv-6KvMFPYxiAY8l441j3Mk/edit#heading=h.xgmqt8pm7xku)
on pattern setup versus map context.
:::

### 90/360 mode

Unfortunately, the current writer of this page (Undeceiver) does not have enough experience in these modes
to feel comfortable giving advice on them.

[This guide](https://docs.google.com/document/d/1U2nhsYyzTPW2zl4sXIHi2gKnTdB9Gcdlf-Fag40Ap9g/edit?usp=sharing)
written by EmotionalFlight should be useful for people looking to learn to map 90/360 maps.

## Credits

Content in this section was authored by [Checkthepan](./mapping-credits.md#checkthepan), [CyanSnow](./mapping-credits.md#cyansnow),
[Uninstaller](./mapping-credits.md#uninstaller), [Skyler Wallace](./mapping-credits.md#skyler-wallace),
[Kolezan](./mapping-credits.md#kolezan), [Pyrowarfare](./mapping-credits.md#pyrowarfare), [DarkGrisen](./mapping-credits.md#darkgrisen),
[Vaser888](./mapping-credits.md#Vaser888) and Undeceiver.
