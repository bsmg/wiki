---
prev: false
next: false
description: Take a deep dive into the v3 difficulty file format for a Beat Saber map.
---

# Difficulty File (v3)

Each Difficulty Beatmap contains a corresponding file which defines the notes, obstacles, events, and other objects
for that particular difficulty.

This version was introduced in Beat Saber version 1.20.0.

## v3 Base Object

```json
{
  "version": "3.2.0", // There must be no whitespace after :
  "bpmEvents": [],
  "rotationEvents": [],
  "colorNotes": [],
  "bombNotes": [],
  "obstacles": [],
  "sliders": [],
  "burstSliders": [],
  "waypoints": [],
  "basicBeatmapEvents": [],
  "colorBoostBeatmapEvents": [],
  "lightColorEventBoxGroups": [],
  "lightRotationEventBoxGroups": [],
  "lightTranslationEventBoxGroups": [], // Introduced in version 3.2.0
  "basicEventTypesWithKeywords": {},
  "useNormalEventsAsCompatibleEvents": false,
  "customData": {
    // Any custom data will go here.
    // If empty, this should be removed entirely.
  }
}
```

### version

This field describes the version of the map format we are using.

Version `3.0.0` was introduced in Beat Saber version 1.20.0.  
Version `3.1.0` was introduced in Beat Saber version 1.25.0.  
Version `3.2.0` was introduced in Beat Saber version 1.26.0.

### bpmEvents

This is an array of [BPM Event](#bpm-events) objects for the map.

### rotationEvents

This is an array of [Rotation Event](#rotation-events) objects for the map.

### colorNotes

This is an array of [Color Note](#color-notes) objects for the map.

### bombNotes

This is an array of [Bomb Note](#bomb-notes) objects for the map.

### obstacles

This is an array of [Obstacle](#obstacles-1) objects for the map.

### sliders

This is an array of [Slider](#sliders-1) objects for the map.

### burstSliders

This is an array of [Burst Slider](#burst-sliders) objects for the map.

### waypoints

::: tip NOTE
This is a stub section.
:::
This is used to control BTS TinyTAN figures. Some information can be found in this
[document](https://docs.google.com/spreadsheets/d/1spW7LS-RvenLQBVXJl9w_iOwqr9r_ozxYo3JUlXq9Lc).

### basicBeatmapEvents

This is an array of [Basic Event](#basic-beatmap-events) objects for the map.

### colorBoostBeatmapEvents

This is an array of [Boost Event](#color-boost-beatmap-events) objects for the map.

### lightColorEventBoxGroups

This is an array of [Light Color Box Group Event](#light-color-event-box) objects for the map.

### lightRotationEventBoxGroups

This is an array of [Light Rotation Box Group Event](#light-rotation-event-box) objects for the map.

### lightTranslationEventBoxGroups

This is an array of [Light Translation Box Group Event](#light-translation-event-box) objects for the map.

### basicEventTypesWithKeywords

::: tip NOTE
This is a stub section. Documentation is a work in progress.
:::

### useNormalEventsAsCompatibleEvents

This is a boolean which determines if [basicBeatmapEvents](#basic-beatmap-events) and [colorBoostBeatmapEvents](#color-boost-beatmap-events)
apply to v2 environments when using environment override.

### Bpm Events

```json
{
  "b": 10.0,
  "m": 128.0
}
```

#### b

The time, in beats, where this object reaches the player.

#### m

A float representing the new bpm. Any `b` in objects after this point will be adjusted to the new bpm.

### Rotation Events

```json
{
  "b": 10.0, // Beat
  "e": 0, // Event type
  "r": 15.0 // Rotation
}
```

#### b

The time, in beats, where this object reaches the player.

#### e

| `e` | Result                                                                                |
| :-: | ------------------------------------------------------------------------------------- |
| `0` | Early rotation. Rotates future objects, while also rotating objects at the same time. |
| `1` | Late rotation. Rotates future objects, but ignores rotating objects at the same time. |

#### r

A float which represents clockwise rotation (as viewed from above).

### Color Notes

```json
{
  "b": 10.0, // Beat
  "x": 1,
  "y": 0,
  "c": 0, // Color
  "d": 1, // Direction
  "a": 0 // Angle offset
}
```

#### b

The time, in beats, where this object reaches the player.

#### x

An integer number, from 0 to 3, which represents the column where this note is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

#### y

An integer number, from 0 to 2, which represents the layer where this note is located.
The bottommost layer is located at layer 0, and increases to the topmost layer located at index 2.

#### c

An integer which represents the color of the note.
|`c`|Result|
|:---:|-----|
|`0`|Red|
|`1`|Blue|

#### d

This indicates the cut direction for the note.

| `d` | Result         |
| :-: | -------------- |
| `0` | Up             |
| `1` | Down           |
| `2` | Left           |
| `3` | Right          |
| `4` | Up Left        |
| `5` | Up Right       |
| `6` | Down Left      |
| `7` | Down Right     |
| `8` | Any (Dot Note) |

#### a

An integer number which represents the additional counter-clockwise angle offset applied to the note's cut direction in degrees.
This has no effect on angles created due to snapping (e.g. dot stack, slanted windows).

### Bomb Notes

```json
{
  "b": 10.0, // Beat
  "x": 1,
  "y": 0
}
```

#### b

The time, in beats, where this object reaches the player.

#### x

An integer number, from 0 to 3, which represents the column where this note is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

#### y

An integer number, from 0 to 2, which represents the layer where this note is located.
The bottommost layer is located at layer 0, and increases to the topmost layer located at index 2.

### Obstacles

```json
{
  "b": 10.0, // Beat
  "x": 1,
  "y": 0,
  "d": 5.0, // Duration
  "w": 1, // Width
  "h": 3 // Height
}
```

#### b

The time, in beats, where this object reaches the player.

#### x

An integer number, from 0 to 3, which represents the column where this obstacle is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

#### y

An integer number, from 0 to 2, which represents the layer where base of the obstacle is located.
The bottommost layer is located at layer 0, and increases to the topmost layer located at index 2.
|`y`|Result|
|:-------------------:|-------------------|
|`0`|Grounded obstacle|
|`1`|Prone obstacle|
|`2`|Crouch obstacle|

#### d

The time, in beats, that the obstacle extends for (duration).
While `d` can go into negative numbers, be aware that this has some unintended effects.

#### w

An integer which which represents the width of the obstacle.
While `w` can go into negative numbers, be aware that this has some unintended effects.

#### h

An integer numbers from 1 to 5, which represents the height of the obstacle.
While `h` can go into negative numbers, be aware that this has some unintended effects.

### Sliders

These describe arcs. If the head or tail of an arc matches a note's time and position,
then the arc will connect with the note and alter how the note is scored.

```json
{
  "b": 10.0, // Head Beat
  "c": 0, // Color
  "x": 1, // Head x
  "y": 0, // Head y
  "d": 1, // Head direction
  "mu": 1.0, // Head multiplier
  "tb": 15.0, // Tail Beat
  "tx": 2, // Tail x
  "ty": 2, // Tail y
  "tc": 1, // Tail direction
  "tmu": 1.0, // Tail Multiplier
  "m": 1 // Mid-anchor mode
}
```

#### b

The time, in beats, where this head of this object reaches the player.

#### c

An integer which represents the color of the note.
|`c`|Result|
|:---:|-----|
|`0`|Red|
|`1`|Blue|

#### x

An integer number, from 0 to 3, which represents the column where the head of the arc is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

#### y

An integer number, from 0 to 2, which represents the layer where the head of the arc is located.
The bottommost layer is located at layer 0, and increases to the topmost layer located at index 2.

#### d

An integer number which represents the head direction of the arc.

| `d` | Result         |
| :-: | -------------- |
| `0` | Up             |
| `1` | Down           |
| `2` | Left           |
| `3` | Right          |
| `4` | Up Left        |
| `5` | Up Right       |
| `6` | Down Left      |
| `7` | Down Right     |
| `8` | Any (Dot Note) |

#### mu

A float which represents how far the arc goes from the head of the arc.
If head direction is a dot, this does nothing.

#### tb

The time, in beats, where this tail of this object reaches the player.

#### tx

An integer number, from 0 to 3, which represents the column where the tail of the arc is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

#### ty

An integer number, from 0 to 2, which represents the layer where the tail of the arc is located.
The bottommost layer is located at layer 0, and increases to the topmost layer located at index 2.

#### tc

An integer number which represents the tail direction of the arc.

| `tc` | Result         |
| :--: | -------------- |
| `0`  | Up             |
| `1`  | Down           |
| `2`  | Left           |
| `3`  | Right          |
| `4`  | Up Left        |
| `5`  | Up Right       |
| `6`  | Down Left      |
| `7`  | Down Right     |
| `8`  | Any (Dot Note) |

#### tmu

A float which represents how far the arc goes from the tail of the arc.
If tail direction is a dot, this does nothing.

#### m

An integer number which represents how the arc curves from the head to the mid point of the arc under certain conditions:

- Head and tail `x` are equal; and
- Head and tail cut direction are equal **OR** their angle difference is 180

| `m` | Result            |
| :-: | ----------------- |
| `0` | Straight          |
| `1` | Clockwise         |
| `2` | Counter-Clockwise |

### Burst Sliders

These describe chain and links. If the head of a chain matches a note's time and position,
then the chain will connect with the note and alter how the note is scored.

```json
{
  "b": 10.0, // Beat
  "x": 1, // Head x
  "y": 0, // Head y
  "c": 0, // Color
  "d": 1, // Head direction
  "tb": 15.0, // Tail Beat
  "tx": 2, // Tail x
  "ty": 2, // Tail y
  "sc": 3, // Segment count
  "s": 0.5 // Squish factor
}
```

#### b

The time, in beats, where this head of this object reaches the player.

#### c

An integer which represents the color of the note.
|`c`|Result|
|:---:|-----|
|`0`|Red|
|`1`|Blue|

#### x

An integer number, from 0 to 3, which represents the column where the head of the arc is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

#### y

An integer number, from 0 to 2, which represents the layer where the head of the arc is located.
The bottommost layer is located at layer 0, and increases to the topmost layer located at index 2.

#### d

An integer number which represents the head direction of the arc.

| `d` | Result                                |
| :-: | ------------------------------------- |
| `0` | Up                                    |
| `1` | Down                                  |
| `2` | Left                                  |
| `3` | Right                                 |
| `4` | Up Left                               |
| `5` | Up Right                              |
| `6` | Down Left                             |
| `7` | Down Right                            |
| `8` | ~~Any (Dot Note)~~ Functions as down. |

#### tb

The time, in beats, where this tail of this object reaches the player.

#### tx

An integer number, from 0 to 3, which represents the column where the tail of the arc is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

#### ty

An integer number, from 0 to 2, which represents the layer where the tail of the arc is located.
The bottommost layer is located at layer 0, and increases to the topmost layer located at index 2.

#### sc

An integer number, greater than 0, which represents the number of segments in the burst slider.
The head counts as a segment.

#### s

A float which represents squish factor. This is the proportion of how much of the path from `(x,y)` to `(tx, ty)`
is used by the chain. This does not alter the shape of the path.
Values greater than 1 will extend the path beyond the specified end point.

:::danger
Do not set squish factor to 0. This will crash the game.
:::

### Basic BeatMap Events

```json
{
  "b": 10.0, // Equivalent to _time
  "et": 1, // Equivalent to _type
  "i": 1, // Equivalent to _value
  "f": 1.0 // Equivalent to _floatValue
}
```

See [Events](./difficulty-format-v2.md#events-1) in v2 for information of what these equivalent properties represent.

### Color Boost Beatmap Events

```json
{
  "b": 10.0,
  "o": true
}
```

#### b

The time, in beats, where this object reaches the player.

#### o

A boolean which determines whether boost lighting is on or off.

### Light Color Event Box

```json
{
  "b": 2.0, // Beat
  "g": 0, // Group
  "e": [
    // Event box group
    {
      "f": {}, // Filter Object
      "w": 1.0, // Beat distribution
      "d": 1, // Beat distribution type
      "r": 1.0, // Brightness distribution
      "t": 1, // Brightness distribution type
      "b": 1, // Brightness distribution affects first event
      "i": 0, // Brightness distribution easing - Introduced in version 3.2.0
      "e": [
        // Event Data
        {
          "b": 0.0, // Added beat
          "i": 0, // Transition type from previous event state
          "c": 1, // Color
          "s": 1.0, // Brightness
          "f": 0 // Flicker frequency
        }
      ]
    }
  ]
}
```

#### b (outer)

The time, in beats, where this object reaches the player.

#### g

The group of this lighting event.

#### e (outer)

An array containing the different lanes in the group.

#### f

A [Filter Object](#filter-object) containing data describes the lane filter.

#### w, d

Theses values determine how the light take effect over time.
|`d`|Editor Name|Result|
|---|-----------|-----|
|`1`|Wave| After `w` beats, the last step takes effect. |
|`2`|Step| After `w` beats, the next step takes effect. |

#### r, t

These values determines the amount of additional brightness distributed over the group.
|`t`|Editor Name|Result|
|---|-----------|------|
|`1`|Wave| `r` is the difference the last and first step. |
|`2`|Step| `r` is the difference between each step. |

#### b

An integer which determines if the brightness distribution affects the first event in this lane.
|`b`|Affects First Event|
|---|----|
|`0`|No|
|`1`|Yes|

#### i

An integer which determines the easing of the brightness distribution.
| `i`|Easing|
|----|----|
| `0`| Linear |
| `1`| EaseInQuad |
| `2`| EaseOutQuad |
| `3`| EaseInOutQuad |

#### e (inner)

An array of event data objects which have the properties of the specified box group filters.

##### b

A float which determines the time this event takes effect relative to the start of the event box group.

##### i

An integer which determines the transition type of the event
|`i`|Type|Result|
|---|----|------|
|`0`| Instant | The light instantly changes. |
|`1`| Transition | The light transitions from the previous event to this event. |
|`2`| Extend | The light holds the state of the previous light. |

##### c

An integer which determines the color of the light.
|`c`|Result|
|---|------|
|`0`| Red |
|`1`| Blue |
|`2`| White|

##### s

A float which determines the brightness of the light.

##### f

An integer which determines the frequency of the strobe (in beat time).
0 is static light.

### Light Rotation Event Box

```json
{
  "b": 2.0, // Beat
  "g": 0, // Group
  "e": [
    // Event box group
    {
      "f": {}, // Filter Object
      "w": 0.0, // Beat distribution
      "d": 0, // Beat distribution type
      "s": 0.0, // Rotation distribution
      "t": 0, // Rotation distribution type
      "b": 0, // Rotation distribution affects first event
      "i": 0, // Rotation distribution easing - Introduced in version 3.2.0.
      "a": 1, // Axis
      "r": 1, // Reverse rotation
      "l": [
        // Event data
        {
          "b": 0.0, // Add beat time
          "p": 1, // Transition from previous event rotation behaviour
          "e": 1, // Ease type
          "l": 1, // Additional loops
          "r": 340.0, // Rotation value
          "o": 1 // Rotation direction
        }
      ]
    }
  ]
}
```

#### b (outer)

The time, in beats, where this object reaches the player.

#### g

The group of this rotation event.

#### e (outer)

An array containing the different lanes in the group.

#### f

A json object containing data describes the lane filter.

#### w, d

Theses values determine how the rotation takes effect over time.
|`d`|Editor Name|Result|
|---|-----------|-----|
|`1`|Wave| After `w` beats, the last step takes effect. |
|`2`|Step| After `w` beats, the next step takes effect. |

#### s, t

These values determines the amount of additional rotation distributed over the group.
|`t`|Editor Name|Result|
|---|-----------|------|
|`1`|Wave| `s` is the difference the last and first step. |
|`2`|Step| `s` is the difference between each step. |

#### b

A boolean which determines if the rotation distribution affects the first event in this lane.
|`b`|Affects First Event|
|---|----|
|`0`|No|
|`1`|Yes|

#### i

An integer which determines the easing of the rotation distribution.
| `i`|Easing|
|----|----|
| `0`| Linear |
| `1`| EaseInQuad |
| `2`| EaseOutQuad |
| `3`| EaseInOutQuad |

#### a

An integer which determines the axis of rotation.
|`a`|Axis|
|---|----|
|`0`|x|
|`1`|y|
|`2`|z (Introduced in version 3.2.0.)|

#### r

An integer which determines if the axis of rotation is flipped.
|`r`|Flipped|
|---|----|
|`0`|No|
|`1`|Yes|

##### e (inner)

An array of event data objects which have the properties of the specified box group filters.

##### b

A float which determines the time this event takes effect relative to the start of the event box group.

##### p

An integer which determines if the previous rotation is used.
|`i`|Type|Result|
|---|----|------|
|`0`| Transition | The rotation transitions from the previous event to this event. |
|`1`| Extend | The rotation holds the state of the previous rotation. |

##### l

An integer which determines the number of additional 360 degree rotations (loops).

##### e

An integer which determines the easing of the rotation.
| `e`|Easing|
|----|------|
|`-1`| None |
| `0`| Linear |
| `1`| EaseInQuad |
| `2`| EaseOutQuad |
| `3`| EaseInOutQuad |

##### r

A float which determines the amount of rotation.

##### o

An integer which determines the direction of the rotation.
|`o`|Direction|
|----|------|
|`0`| Automatic |
|`1`| Clockwise |
|`2`| Counter-clockwise |

### Light Translation Box Group Event

Introduced in version 3.2.0.

```json
{
  "b": 2.0, // Beat
  "g": 0, // Group
  "e": [
    // Event box group
    {
      "f": {}, // Filter Object
      "w": 1.0, // Beat distribution
      "d": 1, // Beat distribution type
      "s": 0.0, // Translation distribution
      "t": 0, // Translation distribution type
      "b": 0, // Translation distribution affects first event
      "i": 0, // Translation distribution easing - Introduced in version 3.2.0
      "a": 1, // Axis
      "r": 1, // Reverse rotation
      "l": [
        // Event data
        {
          "b": 0.0, // Add beat time
          "p": 1, // Transition from previous event rotation behaviour
          "e": 1, // Ease type
          "t": 1.0 // Translation value
        }
      ]
    }
  ]
}
```

#### b (outer)

The time, in beats, where this object reaches the player.

#### g

The group of this translation event.

#### e (outer)

An array containing the different lanes in the group.

#### f

A json object containing data describing the lane filter.

#### w, d

Theses values determine how the translation takes effect over time.
|`d`|Editor Name|Result|
|---|-----------|-----|
|`1`|Wave| After `w` beats, the last step takes effect. |
|`2`|Step| After `w` beats, the next step takes effect. |

#### s, t

These values determines the amount of additional translation distributed over the group.
|`t`|Editor Name|Result|
|---|-----------|------|
|`1`|Wave| `s` is the difference the last and first step. |
|`2`|Step| `s` is the difference between each step. |

#### b

A boolean which determines if the translation distribution affects the first event in this lane.
|`b`|Affects First Event|
|---|----|
|`0`|No|
|`1`|Yes|

#### i

An integer which determines the easing of the translation distribution.
| `i`|Easing|
|----|----|
| `0`| Linear |
| `1`| EaseInQuad |
| `2`| EaseOutQuad |
| `3`| EaseInOutQuad |

#### a

An integer which determines the axis of translation.
|`a`|Axis|
|---|----|
|`0`|x|
|`1`|y|
|`2`|z (Introduced in version 3.2.0.)|

#### r

An integer which determines if the axis of translation is flipped.
|`r`|Flipped|
|---|----|
|`0`|No|
|`1`|Yes|

#### l (inner)

An array of event data objects which have the properties of the specified box group filters.

##### b

A float which determines the time this event takes effect relative to the start of the event box group.

##### p

An integer which determines if the previous rotation is used.
|`i`|Type|Result|
|---|----|------|
|`0`| Transition | The rotation transitions from the previous event to this event. |
|`1`| Extend | The rotation holds the state of the previous rotation. |

##### e

An integer which determines the easing of the rotation.
| `e`|Easing|
|----|------|
|`-1`| None |
| `0`| Linear |
| `1`| EaseInQuad |
| `2`| EaseOutQuad |
| `3`| EaseInOutQuad |

##### t

A float which determines the amount of translation.

### Filter Object

A shared object for box group events. This specifies how group is filtered.

```json
{
  "c": 1, // Chunks - Introduced in version 3.1.0
  "f": 1, // Filter type
  "p": 1, // Parameter 0
  "t": 0, // Parameter 1
  "r": 0, // Reverse
  "n": 0, // Random behaviour - Introduced in version 3.1.0
  "s": 0, // Random seed - Introduced in version 3.1.0
  "l": 0.0, // Limit percentage - Introduced in version 3.1.0
  "d": 0 // Limit behaviour - Introduced in version 3.1.0
}
```

#### c

An integer which determines how many sections the light/rotation/translation group is split into before filter type.

<!-- markdownlint-disable MD013 -->

#### f, p, t

| `f` | Editor Name     | Result                                                                                                                 |
| --- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `1` | Sections        | `p` determines how many sections in each chunk the light group is split into <br />`t` determines which section to use |
| `2` | Step and Offset | `p` determines which light in each chunk to start from <br />`t` determines how many lights to skip                    |

<!-- markdownlint-enable MD013 -->

#### r

A boolean which determines if the filter is applied in reverse order.

#### n

An integer which determines ordering of lights in each section.

| `n` | Result                |
| --- | --------------------- |
| `0` | Standard order        |
| `1` | Standard order        |
| `2` | Random order          |
| `3` | Random starting index |

#### s

An integer which is the seed for the random behaviour.

#### l

A float which determines the percentage of the group is lit up after filter type is applied.

#### d

An integer which determines how the limit is applied.

| `d` | Result                                                           |
| --- | ---------------------------------------------------------------- |
| `0` | Limit applies to sections                                        |
| `1` | Limit applies to sections and duration                           |
| `2` | Limit applies to sections and brightness distribution            |
| `3` | Limit applies to sections, duration, and brightness distribution |
