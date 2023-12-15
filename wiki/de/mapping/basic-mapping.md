---
prev: false
next: false
description: Diese Seite wird dir alle Informationen und Ratschläge geben, um deine Maps ansprechend zu gestalten!
---

# Mapping-Grundlagen

_Wenn du noch wenig Erfahrung im Mapping hast, lese die gesamte Seite. Bis aufs letzte Wort. Bis aufs letzte Bild. Diese Seite wird dir alle Informationen und Ratschläge geben, um deine Maps ansprechend zu gestalten!_

- [Glossar](./glossary.md)

## Bereit zum Mappen?

**Hast du...**

1. [x] [Audacity](https://www.audacityteam.org/) und einen der [Map-Editor](./#hilfsmittel-für-mapping) heruntergeladen?
2. [x] [Set up your audio file](./basic-audio.md) to confirm your bpm and make sure you've got a good intro/outro?
3. [x] Deine Songdatei als OGG <a href="./basic-audio.md#exportieren>exportiert</a>?

::: tip Wenn alles vorbereitet ist: SEHR GUT! Jetzt kannst du in den Editor gehen und mappen! Falls nicht, folge den Links für weitere Informationen. :::

## Das Grundlegende

Bevor du ans Mappen gehst, solltest du die Grundlagen verstehen.

### Map-Dateien

Unabhängig vom Editor benötigt jede Map folgendes:

- **Songdatei:** OGG-Format, diese muss vorbereitet sein. Nenne die Datei `song.ogg`
- **Titelbild:** JPG- oder PNG-Format, muss ein Quadrat sein. 512 Pixel pro Seite sind empfohlen. Du benötigst es, um eine Map zu veröffentlichen. Nenne die Datei `cover.jpg` bzw. `cover.png`
- **Info-Datei:** Enthält alle Metadaten der Map. Einträge in dieser Datei beziehen sich auf alle Schwierigkeiten (z.B. Name des Liedes / Künstlers / Mappers, Name der Songdatei / des Titelbildes, Geschwindigkeit der Noten, etc.). Diese Datei wird von dem Editor automatisch erstellt.
- **Schwierigkeits-Dateien:** Eine pro Schwierigkeit deiner Map. Einträge in diesen Dateien beziehen sich auf jeweils eine Schwierigkeit (z.B. Noten, Licht-Events, etc.). Diese Dateien werden von dem Editor automatisch erstellt.

Einige Editoren erstellen zusätzlich den Ordner `Autosaves`. In diesem befinden sich ältere Versionen deiner Schwierigkeits-Dateien. When you're ready to prepare your song for upload you must have a minimum of four files.

::: warning
While Beat Saber has support for multiple languages (English, French, German, Spanish, Japanese, and Korean), special characters
in other languages such as Arabic(اَلْعَرَبِيَّةُ‎), Chinese (汉语/漢語), and Kaomoji (٩(◕‿◕｡)۶), are not fully supported.
Using these characters in song metadata or in bookmarks can cause problems.
:::

### Arten von Blöcken

<!-- markdownlint-disable MD013 -->

|                        Richtungsblöcke                         |                     Punkt-Blöcke                      |                                                   Bomben                                                    |                                                 Wände                                                 |
|:--------------------------------------------------------------:|:-----------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
|    ![Pfeil-Block](/.assets/images/mapping/arrow-block.png)     | ![Punkt-Block](/.assets/images/mapping/dot-block.png) |                                 ![Bombe](/.assets/images/mapping/bomb.png)                                  |                               ![Wand](/.assets/images/mapping/wall.png)                               |
| Müssen in die Richtung des<br />Pfeils geschlagen werden |      Können aus jeder Richtung geschlagen werden      | Ziehen Leben ab, wenn sie mit dem Saber geschlagen werden,<br /> reagieren aber nicht auf den Spieler | Ziehen Leben ab, wenn sich der Spieler darin befindet,<br /> reagieren aber nicht auf die Saber |

<!-- markdownlint-enable MD013 -->

**Anmerkungen zu Wänden:**

- Normale Wände können von jedem sind mit jedem VR-Headset kompatibel. New mappers should stick with these until they're a bit more experienced.
- There are a few types of "hack" walls that do not require mods: fast walls (fly by you fast), hyper walls (fly by you SUPER fast), and fake walls (look like normal walls but don't cause damage).
  - While these wall types are supported in community editors, they exploit base game mechanics and is not intended behaviour.
- Read up more on base game walls in [Intermediate Mapping](./intermediate-mapping.md) and "fancy" mapping/noodle extensions walls in [Extended Mapping](./extended-mapping.md)

**Anmerkungen zu Bomben:**

- Die Hitbox der Bomben ist kleiner als die eines Blocks, und sogar kleiner als das Model selbst.
- Bomben sind schwer zu erkennen, wenn keine Licht-Effekte benutzt werden. Make sure your map isn't dark when bombs are coming up. Weitere Informationen unter [Lighting-Grundlagen](./basic-lighting.md).
- Bomben können auch getroffen werden, nachdem sie an dem Spieler vorbei geflogen sind.

### Block-Verteilung

Die Verteilung der Blöcke hängt von der Schwierigkeit und der Zielgruppe ab, die du erreichen willst. Anfänger können von einer gleichmäßigen Verteilung aller Reihen überfordert werden, während erfahrene Spieler damit keine Probleme haben. Die Verteilung hängt bei gleicher Schwierigkeit auch von dem Mapping-Stil ab.

Weitere Informationen zu Nutzung der Reihen in [Schwierigkeit Einschätzen](#schwierigkeitsgrad-einschätzen-down-mapping).

::: tip If you're using [Mediocre Map Assistant 2](./mediocre-map-assistant.md) as your editor you can hit <kbd>SHIFT</kbd>+<kbd>TAB</kbd> to open the error checker then click the <kbd>Stat Panel</kbd> button to see this breakdown. :::

## Timing & Rhythmus

Bevor du ernsthaft mit dem Mappen anfängst, musst du dir Gedanken über den Rhythmus des Liedes machen, das du mappst. You'll place blocks on one or more of the main instruments in the song: the drum beat, lead instrument, bass, synths, or even vocals.

To place blocks in time with the rhythm you'll need to change your cursor precision. Die meisten (aber nicht alle) Lieder werden 1/1, 1/2 oder 1/4 Cursor-Präzision benötigen, um den Beat zu treffen. Einige Lieder können 1/3 Cursor-Präzision durch Triolen benötigen, die für das unerfahrene Ohr schwer von 1/4 zu unterscheiden sind. You should not need to use less than 1/4 cursor precision for most songs _including_ mapping to vocals.

::: warning  
90% of the time, mapping with high precision (1/16, 1/32, or 1/64) will make your song mistimed. Wenn du eine sehr hohe Präzision benötigst, damit deine Noten richtig getimed sind, hast du deine Audiodatei nicht richtig vorbereitet. STOP and review [Basic Audio Setup](./basic-audio.md) to ensure you're in sync! :::

<!-- prettier-ignore -->
|                               1/1 Cursor-Präzision                                |                               1/2 Cursor-Präzision                                |                               1/3 Cursor-Präzision                                |                               1/4 Cursor-Präzision                                |
|:---------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
| ![Screenshot von 1/1 Cursor-Präzision](/.assets/images/mapping/1-1_precision.png) | ![Screenshot von 1/2 Cursor-Präzision](/.assets/images/mapping/1-2_precision.png) | ![Screenshot von 1/3 Cursor-Präzision](/.assets/images/mapping/1-3_precision.png) | ![Screenshot von 1/4 Cursor-Präzision](/.assets/images/mapping/1-4_precision.png) |
|                              1 Block pro Taktschlag                               |                              2 Blöcke pro Taktschlag                              |                              3 Blöcke pro Taktschlag                              |                              4 Blöcke pro Taktschlag                              |

When timing out your map you'll want to double check EARLY that the waveform in your editor is lined up with the major lines of the editor track. Wenn deine Waveform nicht richtig ausgerichtet ist, schaue dir die Wiki-Seite zu [Audiosetup-Grundlagen](./basic-audio.md) erneut an.

::: danger CAUTION  
If your waveform isn't lined up it will make it **very** difficult to place blocks in time with the music. Stelle es vor dem Mappen richtig ein, ansonsten musst deine Map später überarbeiten! :::

<!-- prettier-ignore -->
|                               Audio nicht richtig ausgerichtet                                |                                     Audio korrekt synchronisiert                                      |
|:---------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
| ![Editor-Ansicht mit falsch synchronisiertem Audio](/.assets/images/mapping/audio-broken.png) | ![Editor-Ansicht mit zur Editorspur synchronisiertem Audio](/.assets/images/mapping/audio-synced.png) |
|          Benötigt Audiobearbeitung, Start Offset, oder du verwendest die falsche BPM          |                                         You're ready to map!                                          |

### Timing-Noten

Überlege dir, den Mapping-Prozess mit Platzhalter- oder "Timing"-Noten zu starten. Mit "Punkt-Blöcken" als Platzhalter kannst du leicht sehen, ob deine Map richtig getimed ist und ob du zusäzliche Betonung benutzten willst, **bevor** du eine Menge Zeit mit den Patterns verbringst. Achte darauf, dass die Schlaggeräusche des Editors im Takt des Beats sind.

::: tip  
Nicht jeder verwendet Timing Notizen, aber sie können eine hilfreiche Methode sein, um sicherzustellen, dass deine Maps als neuer Mapper richtig getimt sind. :::

### Overmapping & Undermapping

Platziere bewusst Blöcke, die zur Musik passen. Platziere nicht mehr Blöcke als nötig, nur um die Karte schwierig zu gestalten. Some songs were never meant to be super-dense ExpertPlus maps and that's ok.

- **Overmapping** ist die (schlechte) Praxis, mehr Blöcke zu platzieren als Töne vorhanden sind. Don't do it.
- **Undermapping** ist die sehr akzeptable Praxis des Überspringens einiger Noten/Schläge (besonders bei niedrigeren Schwierigkeiten).

### Betonung & Konsistenz

We'll go into more detail on this in [Intermediate Mapping](./intermediate-mapping.md) but, as a new mapper you should understand at least the basic ideas of emphasis and consistency and how they impact your map.

**Emphasis** ist, wie viel "Gewicht" du jedem Treffer gibst.

- Betrachte den Basis-Sound deines Mappings als einen einzelnen Hit (einen Block), einschließlich leiser oder chilligere Abschnitte
- Wenn der Sound "größer" ist oder zwei verschiedene Instrumente auf denselben Beat schlagen, kannst du über einen Doppelschlag oder einen Stack (zwei Blöcke) nachdenken.
- For only the biggest sounds in the song you could use a double tower (six blocks, three for each hand) or other heavyweight pattern, but many songs never need this amount of emphasis.

Many new mappers instinctively want to use double hits all the time, but remember that those are heavy emphasis and if _every sound_ is emphasized then _nothing_ feels like it has extra weight.

Man kann es auch so sehen, dass die Energie und Anstrengung des Schlags der Energie und Kraft des Klangs entsprechen soll. Niemand schreit bei jedem Gesang oder bei jeder Instrumenten-Note aus voller Kehle. Du willst, dass die kraftvollen Noten, der kraftvollen Gesang aus dem Rest des Songs herausstechen. Auch wenn der größte Teil des Liedes laut oder (Deiner Meinung nach) betont klingt, gibt es immer Noten, die darüber liegen. Sei es durch Lautstärke oder durch Energie. Wenn du also mappst schaue, was deine Basisenergie ist, und mappe diese als Einzelperson. Bei allem, was darüber hinausgeht, kannst du Towers/Doubles/Windows/Jumps machen, was immer am besten zu dieser Energie passt.

**Konsistenz** bedeutet, den gleichen Klang mit dem gleichen Gewicht abzubilden, wenn er erscheint.  
Konsistent abzubilden bedeutet NICHT immer, zu kopieren/einzufügen/zu spiegeln, auch wenn dies in manchen Fällen angebracht ist. If you choose to map a particular big sound as a double, for example, that same sound should usually be mapped with a double.

## Bewährte Praktiken für Pattern

Dieser Abschnitt beschreibt die Grundsätze, die man für eine spielbare und angenehme Map befolgen sollte.

**Cyrix** hat ein zusammenfassendes Video, [Patterns to Avoid as a New Mapper](https://www.youtube.com/watch?v=mgGaqZ20Scw), zu den häufigsten Problemen, die in diesem Abschnitt behandelt werden, erstellt.

### Vision Blocks

Vision blocks are any patterns that obscure the player's vision and make it difficult to sight read a map, if not outright uncomfortable. The primary cause of vision blocks is use of the middle two positions of the track.

**Vision Blocks können vermieden werden durch:**

- Not using the center two positions of the track; or
- Ensuring that blocks following anything in the centre are either far enough away or in another position on the opposite half of the grid; or
- Zu vergewissern, dass der Spieler entweder durch Hindernisse oder Muster zur Seite gedrängt wird, damit die mittleren Positionen den Spieler nicht mehr vollständig blockieren.

<!-- markdownlint-disable MD013 -->

|                           Ideale Blockplatzierung                            |                              Vision Block Platzierung                               |
|:----------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|
|     ![Keine Vision Blocks](/.assets/images/mapping/no-vision-blocks.jpg)     |                ![Face Notes](/.assets/images/mapping/face-notes.jpg)                |
| When you're getting started, stick<br />to the perimeter of the track. | Diese werden als "Face Notes" bezeichnet.<br />Vermeide sie als neuer Mapper. |

<!-- markdownlint-enable MD013 -->

::: tip  
**Mediocre Map Assistant 2** verfügt über einen eingebauten, praktischen Fehlerprüfer, der Vision Blocks finden kann. Weitere Informationen findest du im [MMA2 User Guide](./mediocre-map-assistant.md#error-checker).

**ChroMapper** has plugins that can be used to find vision blocks. :::

### Double Directionals & Resets

Double directionals (or DDs) are what you get when you have two blocks of the same color in the same direction within a very short span of time. Diagonals, or any change of only 45 degrees between blocks, are considered to be DDs with both the cardinal directions they combine.

::: center ![Blue up right diagonal block](/.assets/images/mapping/bnur.png) {.inline} is a DD with both ![Blue up block](/.assets/images/mapping/bnu.png) {.inline} and ![Blue diagonal block](/.assets/images/mapping/bnr.png) {.inline} :::

Double directionals cause the player to double their swing speed compared to a "standard" up/down pattern. They have to swing downwards, then bring their hand back up to swing downwards again, which is a lot of unnecessary motion. Alternate the direction of every other block for better flow.

Many new mappers use DDs to simulate the feel of drumming. While this _feels_ like it makes sense, drums have rebound when you hit them and imaginary computer blocks... don't. The game is called Beat Saber, not Beat Drummer!

<!-- prettier-ignore -->
|                                Standard Flow                                 |                               Double Directionals                                |
|:----------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|
| ![Image of standard up down flow](/.assets/images/mapping/standard-flow.jpg) | ![Image of double directionals](/.assets/images/mapping/double-directionals.jpg) |
|                           Eine gute Mapping-Praxis                           |                              Yikes! Tu dies nicht.                               |

#### Resets

DDs _do_ have their uses if you give the player enough time to reset their hands back to neutral position and, more importantly, clearly communicate to them that they should reset.

Resets are a motion that requires time to be performed and the player to know that they should do it, despite the lack of notes to cut. There are two main standard ways to make resets work:

- **Bomb resets** (Preferred) Place a line of bombs that will make the player move their hands away from them, typically on the bottom row.

- **Low NJS and high JD** (Only for slower dancey maps) If your map is slow and floaty, you can make a reset work by giving the player time to see the following notes and react to them by resetting.

::: warning  
In bomb resets, the reset motion will happen _before_ the bombs. Thus, you should place the bombs closer to the notes that come after than to the notes that come before. Normally at 3/4 or 2/3 of the distance.

It is recommended that bomb resets are used sparingly and preferably with some sound associated to them. :::

<!-- prettier-ignore -->
|                         3/4 bomb reset                          |                            1/2 bomb reset                            |
|:---------------------------------------------------------------:|:--------------------------------------------------------------------:|
| ![Image of 3/4 bomb reset](/.assets/images/mapping/34reset.png) | ![Image of double directionals](/.assets/images/mapping/12reset.png) |
|                Enough time to reset comfortably                 |                Too close! Jerky uncomfortable motion                 |

::: warning Implicit resets will work with lower NJS, higher JD, and adequate patterns; but this will have downsides for faster paced and higher difficulty maps (see [Note Jump Speed](./basic-mapping.md#note-jump-speed)) and should therefore be avoided in those cases. :::

Want to learn more about resets? Read [Intermediate Mapping](./intermediate-mapping.md)!

### DO: Mapping mit Flow

Outside of easy and normal difficulties, mapping with flow is an absolute must. Human bodies are incredible machines but there are certain ways that joints are meant to move and using patterns that violate those mechanics is a recipe for injuring your player.

Parity is the concept that each block direction is played with either a backhand swing or a forehand swing. Alternating between foreswing and backhand swings with each block gives a smooth motion between each hit:

- A **forehand** swing is the motion where the block is hit with the **palm** of the hand
- A **backhand** swing is the motion where the block is hit with the **back** of the hand

The diagram below illustrates how straining it is playing a note as either swing (mirrored for red). Without proper lead in for harsher swings, the player is likely to reset:

<!-- prettier-ignore -->
|                         Forehand Swings                         |                         Backhand Swings                         |
|:---------------------------------------------------------------:|:---------------------------------------------------------------:|
| ![Forehand Strain](/.assets/images/mapping/forehand_strain.png) | ![Backhand Strain](/.assets/images/mapping/backhand_strain.png) |

This video illustrates the concept of parity: [YouTube](https://youtu.be/e0YlLwBz7Vk)

A thing important to keep in mind, especially if you are new to the game or mapping, is that the concept of parity is most obvious for wrist players. If you do not play with your palm directly facing the ground, then you might struggle to understand why some parity breaks are uncomfortable. Remember that while it may feel fine to you, players have different grips and styles. Proper parity feels good for everyone, not just some playstyles.

::: tip  
When proper flow is achieved the player should be physically capable of getting full points on each block, even if they don't have the skill or interest in doing so. See the [Scoring](/grips-and-tricks.md#scoring) section of the wiki for more info. :::

<!-- prettier-ignore -->
|                                 0° Angle                                  |                                  45° Angle                                  |                                  90° Angle                                  |                                  135° Angle                                   |                                  180° Angle                                   |
|:-------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:-----------------------------------------------------------------------------:|:-----------------------------------------------------------------------------:|
| ![0 degree angle change between blocks](/.assets/images/mapping/0deg.png) | ![45 degree angle change between blocks](/.assets/images/mapping/45deg.png) | ![90 degree angle change between blocks](/.assets/images/mapping/90deg.png) | ![135 degree angle change between blocks](/.assets/images/mapping/135deg.png) | ![180 degree angle change between blocks](/.assets/images/mapping/180deg.png) |
|                                 No. (DD)                                  |                                  No. (DD)                                   |                                   Maybe.                                    |                                     Yes.                                      |                                     Yes.                                      |

**Basic Flow Concepts:**

- The higher your note precision, the more you want to stick to 180° (up/down) and 135° (up/down/diagonal) patterns.
- Larger angle changes should only be considered with enough time to play smoothy.
- Make sure that you have the right setup (the pattern immediately before) and escape (the pattern immediately after) for a comfortable swing at whatever speed you're mapping.
- Be conscious of your timing, you can get away with more in slower BPM songs with the same note precision than you can in high BPM songs. Map for the style of song you've selected.

### DON'T: Forbidden Patterns

These are called forbidden patterns for a reason. There is no reason in the world to use these because they're dangerous to either the player's hardware, the player's joints, or they go against the scoring system. You may have played maps that included these but that doesn't make them ok.

#### Handclaps

<!-- prettier-ignore -->
|                                  Abbildung                                  |                                 Editor-Ansicht                                 | Erklärung                                                                                                                                                                                                                                                                                                                                                                                                                               |
|:---------------------------------------------------------------------------:|:------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of a handclap](/.assets/images/mapping/controller-smash.png) | ![Editor view of a handclap](/.assets/images/mapping/controller-smash-alt.png) | Do not place blocks that point to each other in close proximity. This motion tells the player to smash their controllers together when playing for max points. Don't do it, no exceptions.<br /><br />Note: Different VR sets have different controllers. Vive wands are much bigger than Oculus touch controllers and Index knuckles... don't put your players' hardware at risk! _AKA Controller clash, Controller smash_ |

#### Cross

<!-- prettier-ignore -->
|                          Abbildung                          |                         Editor-Ansicht                         | Erklärung                                                                                                                                                                                                            |
|:-----------------------------------------------------------:|:--------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of cross](/.assets/images/mapping/cross.png) | ![Editor view of cross](/.assets/images/mapping/cross-alt.png) | The pattern is a handclap which can lead to smashed controllers. It can also cause tangled arms and ugly vision blocks. Inexperienced players will likely not read it correctly. Use a different pattern altogether. |

#### Hammer Hits

<!-- prettier-ignore -->
|                                Abbildung                                |                               Editor-Ansicht                               | Erklärung                                                                                                                                                         |
|:-----------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of a hammer hit](/.assets/images/mapping/hammer-hit.png) | ![Editor view of a hammer hit](/.assets/images/mapping/hammer-hit-alt.png) | Do not place a directional block that points towards a bomb on the same plane. This undermines the scoring system (and is just evil). Don't do it. No exceptions. |

#### Disembodied notes

<!-- prettier-ignore -->
|                                      Abbildung                                      |                                     Editor-Ansicht                                     | Erklärung                                                                                                                                                                                                                                          |
|:-----------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of disembodied notes](/.assets/images/mapping/disembodied-notes.png) | ![Editor view of disembodied notes](/.assets/images/mapping/disembodied-notes-alt.png) | Do not hide blocks on the other side of walls. Walls obscure vision and it can be very difficult to see blocks on the other side. The player also loses haptic feedback of hitting a block correctly as the saber must also move through the wall. |

#### Rapid Wall Dodge

<!-- prettier-ignore -->
|                                     Abbildung                                     |                                    Editor-Ansicht                                    | Erklärung                                                                                                                                                                                                                                                                                                                            |
|:---------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Illustration of rapid wall dodge](/.assets/images/mapping/rapid-wall-dodge.png) | ![Editor view of rapid wall dodge](/.assets/images/mapping/rapid-wall-dodge-alt.png) | Do not force the player to very quickly move from one side of their play space to the other. Keep head movement smooth and predictable. Wall dodges are fine (and fun!) to use but allow ample time for the player to switch sides especially for higher BPM songs. You don't want to risk them bumping into things or falling over. |

#### Danger Dash

<!-- prettier-ignore -->
|                                Abbildung                                |                               Editor-Ansicht                               | Erklärung                                                                                                                                                                                                                                                                                                    |
|:-----------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Illustration of danger dash](/.assets/images/mapping/danger-dash.png) | ![Editor view of danger dash](/.assets/images/mapping/danger-dash-alt.png) | Never force the player into the far edge of their playspace with 3-width walls or a 2-width wall in the middle. Walls that encompass the two middle columns gives the player very little room to play, and you don't know how large their play area is or how far they will dash in response to these walls. |

#### Bomb Spam

<!-- prettier-ignore -->
|                              Abbildung                              |                             Editor-Ansicht                             | Erklärung                                                                                                                                                                                     |
|:-------------------------------------------------------------------:|:----------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of bomb spam](/.assets/images/mapping/bomb-spam.png) | ![Editor view of bomb spam](/.assets/images/mapping/bomb-spam-alt.png) | Bombs are good for forcing precision, or for punctuating silence, but overuse of bombs should be avoided. Also note that some people hate bombs in general, so they should be used sparingly. |

#### Bomb Wall

<!-- prettier-ignore -->
|                              Abbildung                               |                             Editor-Ansicht                              | Erklärung                                                                                                                                                                                                                 |
|:--------------------------------------------------------------------:|:-----------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of bomb wall](/.assets/images/mapping/bomb-donut.png) | ![Editor view of bomb wall](/.assets/images/mapping/bomb-donut-alt.png) | Do not fill the entire playspace with bombs. In addition, bombs that force the player to point their sabers straight ahead are heavily discouraged. This creates a poor and ambiguous setup to hit any blocks afterwards. |

#### Hidden Blocks

<!-- prettier-ignore -->
|                                  Abbildung                                   |                                 Editor-Ansicht                                  | Erklärung                                                                                                                                                                                                                                                                                                                      |
|:----------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Illustration of hidden blocks](/.assets/images/mapping/stacked-hidden.png) | ![Editor view of hidden blocks](/.assets/images/mapping/stacked-hidden-alt.png) | Blocks should never be stacked on top of one another or in walls. These hinder visibility of blocks. Any combination of blocks are technically stackable in the editor (including bombs and walls). These are hard to spot if two identical blocks are stacked. Use the error checker in MMA2 or a plugin in CM to find these! |

#### Hitbox Abuse

<!-- prettier-ignore -->
|                                   Abbildung                                    |                                       Editor-Ansicht                                        | Erklärung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Illustration of some hitbox abuse](/.assets/images/mapping/hitbox-abuse.png) | ![Alternate llustration of some hitbox abuse](/.assets/images/mapping/hitbox-abuse-alt.png) | Ensure there is room for the player to swing at each block. In the patterns depicted here, there is not enough room for the saber to slice each block without hitting the other. These are technically still possible to hit, but only by coming in at an angle, and if you have to come in at an angle, you may as well change the block direction to a diagonal anyway.<br /><br />The illustration below from Split, one of the game developers, shows the size of the block hitbox. The **large** outer box is for good hits and the small inner box is for bad hits.<br />![Illustration of block collider hitboxes](/.assets/images/mapping/hitbox-from-split.jpg) |

#### Wide Precision

<!-- prettier-ignore -->
|                                 Illustration                                  |                                   Editor View                                    | Explanation                                                                                                                                                   |
|:-----------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of wide precision](/.assets/images/mapping/wide-precision.png) | ![Editor view of wide precision](/.assets/images/mapping/wide-precision-alt.png) | These bombs are incredibly hard to avoid for players with short arms. When the player swings through these blocks, their arms come inward, and hit the bombs. |

### MAYBE: Sehr Situationsbedingte Patterns

These patterns are OK to use but only in very specific circumstances or with very specific setup. It's best to steer clear of these until you're much more comfortable with mapping.

#### Triangle

<!-- prettier-ignore -->
|                              Abbildung                              |                             Editor-Ansicht                             | Erklärung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------------------------------------------------------:|:----------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Illustration of a triangle](/.assets/images/mapping/triangle.png) | ![Editor view of a triangle](/.assets/images/mapping/triangle-alt.png) | Triangles are patterns that cause incredibly uncomfortable resets due to excession rotation in one direction. The pattern breaks the forehand/backhand mechanic. See the [Mapping with Flow](#do-mapping-with-flow) to revisit this explanation.<br /><br />**Note 1:** Not all triangle shaped patterns are cursed triangles. <br /><br />**Note 2:** This sort of pattern plays differently at Hard difficulties and below when there are a couple of beats between each swing but stay away at Expert and ExpertPlus. |

#### Flicks

<!-- prettier-ignore -->
|                         Illustration                          |                           Editor View                            | Explanation                                                                                                                                                                                                                                                               |
|:-------------------------------------------------------------:|:----------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of a flick](/.assets/images/mapping/flick.png) | ![Editor view of a flick](/.assets/images/mapping/flick-alt.png) | "Flicks" of two or more blocks of the same color at high precision (like 1/4 or faster) require very fast movement on one hand. Keep in mind whether the player can hit these blocks at faster speeds to ensure that this pattern is not an unwarranted difficulty spike. |

#### Incorrect Side Hits

<!-- prettier-ignore -->
|                                          Abbildung                                          |                                         Editor-Ansicht                                         | Erklärung                                                                                                                                                                                                                                                                                                                                                                                       |
|:-------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of upside down side hits](/.assets/images/mapping/upside-down-side-hits.png) | ![Editor view of upside down side hits](/.assets/images/mapping/upside-down-side-hits-alt.png) | Generally speaking, when making a double crossover, you should put RED on top when slicing left, and put BLUE on top when slicing right. This is because the saber that swings into the opposite lane naturally swings at a slight downward angle rather than perfect horizontal. The exception is Expert/ExpertPlus, but **only** if the flow of patterns leads to these placements naturally. |

#### Rapid Crossovers

<!-- prettier-ignore -->
|                                    Abbildung                                     |                                   Editor-Ansicht                                    | Erklärung                                                                                                                                                                                                                                                                                     |
|:--------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of rapid crossovers](/.assets/images/mapping/rapid-crossover.png) | ![Editor view of rapid crossovers](/.assets/images/mapping/rapid-crossover-alt.png) | Give the player time to prepare, and don't make them cross sides too fast or too often. This pattern takes time to process and it's a larger motion in-game than it looks in the editor. It's also recommended to offset the hits and place each note different rows to reduce handclap risk. |

#### Wide Inward Doubles

<!-- prettier-ignore -->
|                                     Abbildung                                      |                                       Editor-Ansicht                                       | Erklärung                                                                                                                                                                                                                                                                                                            |
|:----------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of inward doubles](/.assets/images/mapping/wide-inward-doubles.png) | ![Editor view of wide inward doubles](/.assets/images/mapping/wide-inward-doubles-alt.png) | Inward facing double blocks on the edges or downward facing blocks on the top row are very difficult to hit for small/short players, and uncomfortable for the rest. This should generally be avoided. The exception is Expert/ExpertPlus, but **only** if the flow of patterns leads to these placements naturally. |

#### Excessive Towers

<!-- prettier-ignore -->
|                                     Abbildung                                     |                                    Editor-Ansicht                                    | Erklärung                                                                                                                                                                                                                                          |
|:---------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of excessive towers](/.assets/images/mapping/excessive-towers.png) | ![Editor view of excessive towers](/.assets/images/mapping/excessive-towers-alt.png) | Be mindful when using many towers in succession. Placing 3-4 blocks of the same color, vertically or horizontally, require larger _and_ faster swings. Overusing towers can lead to [overemphasis](#overmapping--undermapping) and player fatigue. |

#### Awkward Curves

<!-- prettier-ignore -->
|                                          Abbildung                                          |                                         Editor-Ansicht                                         | Erklärung                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of awkward curved swings](/.assets/images/mapping/awkward-curved-swings.png) | ![Editor view of awkward curved swings](/.assets/images/mapping/awkward-curved-swings-alt.png) | Do not place two or more blocks of the same color together that do not properly lead into each other. Hitting these blocks properly requires the player to abuse the angle lenciency by ignoring the direction and playing if as they were the same direction. Because of this, you should these blocks in same direction. |

#### Detached Walls

<!-- prettier-ignore -->
|                                   Abbildung                                   |                                  Editor-Ansicht                                  | Erklärung                                                                                                                                                            |
|:-----------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of detached walls](/.assets/images/mapping/detached-walls.png) | ![Editor view of detached walls](/.assets/images/mapping/detached-walls-alt.png) | Combine your adjacent/touching walls for a cleaner, less visually cluttered experience. Don't ever cover the entire grid with walls as depicted in the illustration. |

#### Extended Crouch

<!-- prettier-ignore -->
|                                    Abbildung                                    |                                   Editor-Ansicht                                   | Erklärung                                                                                                                                                                                                                                                                                                                                                             |
|:-------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of extended crouch](/.assets/images/mapping/extended-crouch.png) | ![Editor view of extended crouch](/.assets/images/mapping/extended-crouch-alt.png) | Consider your target audience when using extended sections of crouch walls. You can't predict all players' physical ability, so use this in moderation. If you have notes during or immediately following a crouching section, consider visibility due to the player's lower position. When the player is crouched, centre blocks in bottom row become vision blocks. |

#### Corner Crouch

<!-- prettier-ignore -->
|                                  Abbildung                                  |                                 Editor-Ansicht                                 | Erklärung                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:---------------------------------------------------------------------------:|:------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of corner crouch](/.assets/images/mapping/corner-crouch.png) | ![Editor view of corner crouch](/.assets/images/mapping/corner-crouch-alt.png) | Consider your target audience when forcing the player to crouch in one corner. As stated above, crouching sections should be kept short because you can't predict all players' physical ability. Forcing the player to additionally move left/right while crouching increases the threshold of full-body range of motion. While this tactic may be fun for some, be mindful that some players are incapable of this motion. |

#### Sky Streams

<!-- prettier-ignore -->
|                              Illustration                               |                                Editor View                                 | Explanation                                                                                                                                                                                                                                               |
|:-----------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of sky streams](/.assets/images/mapping/sky-streams.png) | ![Editor view of sky streams](/.assets/images/mapping/sky-streams-alt.png) | Avoid repetitive use of blocks in the top row. This causes shoulder strain in addition to top row down notes requiring large swings to score well on.<br /><br />**Note:** Blocks on the top row in Easy and Normal should be used sparingly. |

#### Visual Clutter

<!-- prettier-ignore -->
|                                 Illustration                                  |                                   Editor View                                    | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:-----------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of visual clutter](/.assets/images/mapping/visual-clutter.png) | ![Editor view of visual clutter](/.assets/images/mapping/visual-clutter-alt.png) | Avoid unnecessary visual clutter. Having a directional block point towards/away from a dot block does not serve any functional purpose, and it's hard to read at a glance. If you're telling the player to slice in a particular direction, be consistent and make both blocks directional to increase readability.<br /><br />**Note:** When making sliders, the established community convention is to start with an arrow then use dots afterward. |

#### Easy to Miss Patterns

<!-- prettier-ignore -->
|                                       Illustration                                        |                                         Editor View                                          | Explanation                                                                                                                                                                                                                                                                                                                                                                  |
|:-----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Illustration of overlapping hitboxes](/.assets/images/mapping/overlapping-hitboxes.png) | ![Editor view of overlapping hitboxes](/.assets/images/mapping/overlapping-hitboxes-alt.png) | Generally, try to avoid patterns with overlapping hitboxes, as this makes the pattern difficult to hit consistently. The hitboxes are larger than the note, and most players rarely hit the actual note when they swing, making it easy to hit the smaller hitbox within notes that detects bad hits on patterns like this. See [Hitbox Abuse](#hitbox-abuse) for more info. |

#### Arm Tangles

<!-- prettier-ignore -->
|                              Illustration                              |                                Editor View                                | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:----------------------------------------------------------------------:|:-------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Illustration of arm tangles](/.assets/images/mapping/arm-tangle.png) | ![Editor view of arm tangles](/.assets/images/mapping/arm-tangle-alt.png) | Crossing hands is usually fine, but crossing hands and going in opposite directions vertically involves more risk. These patterns require very careful setup to avoid players clapping their controllers or arms. Reverse these colors and you're good to go. This is only one example of an arm tangle. Always be aware of where you're leaving your player's arms and how they are going to escape from that position to hit the next pattern. |

#### Face Punchers

<!-- prettier-ignore -->
|                                 Illustration                                  |                                                                                                                                                         Editor View                                                                                                                                                         | Explanation |
|:-----------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------- |
| ![Editor view of a face puncher](/.assets/images/mapping/facepuncher-alt.png) | Face punchers are blocks placed in the opposite top corners pointing outwards. Without proper setup, this placement requires the player to perform a large crossover in a direction that potentially causes their controllers to smash into their headset. A double of face punchers is an especially uncomfortable motion. |             |

## Schwierigkeitsgrad Einschätzen & Down-Mapping

Many mappers tend to map the difficulty level at which they typically play, but there are plenty of benefits to mapping lower difficulties:

- Full spreads can be played and enjoyed by a wider audience.
- They look professional when cruising for new maps, just like the base game maps.
- Players who are good at the game can use your lower difficulties for training, such as accuracy players.

The difficulty of a map is comprised of a combination of _density_ (rhythm choice), _complexity_ (pattern choice). There should be a smooth progression as you work your way down from Expert+ to Easy. When building lower difficulties, it's important to understand what skills players at different levels have and try to preserve the map's identity as you work your way down the spread.

For more information on mapping lower difficulties than what is on this page, check out [Downmapping](./downmapping.md).

### Pattern Complexity

Maps should always have a progression of complexity from Easy through Expert+. The difficulty of a map is typically rooted in its complexity, with a great deal of attention given to what a player would typically expect at a respective difficulty level.

:::tip Remember
You are teaching players different patterns and sight-reading skills with your maps. Make sure you give them time to
react before you throw something new at them at each level of difficulty.
:::

<!-- markdownlint-disable MD013 -->

| Difficulty | Pattern Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:----------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  Expert+   | &#8227; Welcome to the wild west! You can throw any good mapping practices at your player here.<br />&#8227; Parity is expected at this level, especially for high BPM songs. Lower BPM songs may be more lenient but parity breaks are discouraged.<br />&#8227; Always be mindful of common errors, such as resets and vision blocks.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   Expert   | &#8227; All note directions are viable here in any proportion.<br />&#8227; All note positions viable here in any proportion. For patterns of wider spacing, give them enough reaction time and be mindful of the player's stamina.<br />&#8227; Any color, any lane is fine. Crossovers are fair game however keep sections of extended crossovers short.<br />&#8227; Flow is critical. Parity will make or break your map.<br />&#8227; All emphasis options are on the table, including stacks and sliders.<br />&#8227; All obstacles are fair game, but be wary about creating vision blocks.                                                                                                                                                                       |
|    Hard    | &#8227; All cardinal directions are viable. Diagonals are less common.<br />&#8227; All note positions viable here in any proportion. Top row notes are fine though less common. Make sure the spacing is not tiring for the player.<br />&#8227; Any color, any lane is fine. Crossovers are simple and give the player enough time to react and recover afterwards.<br />&#8227; Flow is critical unless you have an extended break. Try to maintain parity with every swing.<br />&#8227; Most emphasis options are available, including inverted doubles with sabers going opposite directions. Stacks and sliders are fine, but keep them two notes long and don't overuse them.<br />&#8227; All obstacles are fair game, but be wary about creating vision blocks. |
|   Normal   | &#8227; All cardinal directions are viable. Diagonals are uncommon for this level.<br />&#8227; Notes should lie mostly in the bottom row. Use the middle row as a flourish for emphasis. Use the top row sparingly with dot notes only.<br />&#8227; Keep red notes primarily on the left side and blue on the right. Avoid crossovers entirely.<br />&#8227; Players will tend to reset after every hit, but you can introduce flow when the notes are close together.<br />&#8227; Inverted doubles are manageable, but don't overuse them. Stacks and sliders should be scarce.<br />&#8227; If obstacles are used, keep them simple. You can sprinkle in notes simultaneously, but give plenty of time to react and recover.                                         |
|    Easy    | &#8227; All cardinal directions are viable. Diagonals are very uncommon for this level.<br />&#8227; Notes should mostly lie in the bottom row. Use the middle row as a flourish for emphasis. Use the top row very sparingly with dot notes only.<br />&#8227; Keep red notes primarily on the left side and blue on the right. Avoid crossovers entirely.<br />&#8227; Knock yourself out with parity breaks. Players will reset after every hit.<br />&#8227; Avoid inverted doubles. Sliders and stacks are not recommended.<br />&#8227; If obstacles are used, keep them simple. Any simultaneous notes must be simple and clearly readable.                                                                                                                        |

<!-- markdownlint-enable MD013 -->

### Note Density

**NPS** is a measure of note density, or the number of notes measured within a certain interval of time. The NPS ranges for each difficulty will fluctuate depending on the map, but it is common to reduce the note density of each difficulty by **20%** or more as you work your way down the spread.

The table below provides a range of NPS values calculated from all base game maps, so you can use these values as a recommended baseline for where your values may lie. For more information on the typical NPS ranges across each of the base game maps, check out the [Beat Saber Map Analysis](https://officialmech.github.io/bs-analysis/ost/data) tracker.

| Difficulty  | NPS Ranges  |
|:-----------:|:-----------:|
|  **Easy**   | 0.82 - 2.20 |
| **Normal**  | 1.05 - 3.22 |
|  **Hard**   | 1.73 - 4.53 |
| **Expert**  | 2.42 - 6.49 |
| **Expert+** | 3.21 - 8.83 |

In general, the rhythm choices across the spread should fit the song. A 200 BPM speed map is going to have a higher note density than a 120 BPM dance map.

### Note Jump Speed

There are several terms related to the speed and readability of the map. These terms are all interrelated and are typically influenced by the song's tempo:

- **Note Jump Speed** (NJS) is the rate at which blocks move down the track at the player. A higher value will make the notes move faster, while a lower value will make the notes move slower.
- **Jump Distance** (JD, also known as **Spawn Distance**) is a measure of the physical distance (in meters) that a note will travel to reach the player.
- **Half Jump Duration** (HJD) is a measure of time (in beats) from when a note spawns to when it reaches the player.
- **Start Beat Offset** (also known as **Spawn Distance Modifier**) is a modifier that directly affects the Half Jump Duration which in turns affects Jump Distance. A positive value will make the notes spawn further away from the player, while a negative value will bring the notes closer.

The following video demonstrates the effect of these values in-game:  
[YouTube](https://youtu.be/S70CDoWjdwk) | [Streamable](https://streamable.com/2l7fz9).

The NJS of your map will affect both the spacing between notes and the timing windows provided for the player. A larger value will make your map more readable at the cost of being more timing-dependent for the player. Aim for the _lowest possible_ value that would ensure a balance between the readability and playability of your map.

Changing the NJS or Offset values will modify the HJD and JD of your map. Community editors will show you how these values change as you make adjustments. Fine-tuned NJS and Offset are a matter of personal taste, so you may need to rely on trial and error to find values that work for you. For lower difficulties, always be wary about putting too many notes on-screen at once based on the values you choose.

The table below provides a range of NJS and JD values from typical community spreads, so you can use these values as a recommended baseline for where your values may lie.

| Difficulty  | NJS Ranges | JD Ranges |
|:-----------:|:----------:|:---------:|
|  **Easy**   |   10-12    |   25-30   |
| **Normal**  |   10-12    |   25-30   |
|  **Hard**   |   10-15    |   23-30   |
| **Expert**  |   12-18    |   23-27   |
| **Expert+** |   15-23    |   21-27   |

## Playtesting

Already mentioned in detail on the [Mapping Home Page](./#playtesting) it's important enough to mention again here:

1. Test your own work early and often, especially when you're just starting out!
2. If you can't test your own work have a friend play it. Just remember that a friend may be more likely to say "that's awesome, man!" than to give you honest advice and risk hurting your feelings... even if that's what you need.
3. Even if you test your own work you can become "map blind" because you know it so well and may not see playability issues
4. Use the `#testplays` channel on BSMG wisely. There are experienced mappers who will play your pre-release map and provide constructive feedback. Sometimes there's a LOT of constructive feedback and that's ok. Those experienced mappers were once newbies with terrible maps themselves. If you've read and absorbed the info on this page you will be much better off!

**HAPPY MAPPING!** Visit `#mapping-discussion` on the BSMG Discord with questions!

## Credits

Content in this section has been derived from guides by [Awfulnaut](./mapping-credits.md#awfulnaut) and [Hexagonial](./mapping-credits.md#hexagonial).
