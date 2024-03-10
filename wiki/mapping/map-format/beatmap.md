---
---

# Beatmap

The beatmap file defines collections and associated metadata for all _interactable_ beatmap items,
such as notes and obstacles.

::: info
In v4 and later,
any collections for non-interactable beatmap objects are located in the corresponding [Lightshow](./lightshow.md) file.
You can refer to the sample files included there
to know where the corresponding collections are located.
:::

:::: details Sample Data
::: code-group
<<< @/.assets/snippets/beatmap/2.0.0.dat{json} [2.0.0]
<<< @/.assets/snippets/beatmap/2.2.0.dat{json} [2.2.0]
<<< @/.assets/snippets/beatmap/2.4.0.dat{json} [2.4.0]
<<< @/.assets/snippets/beatmap/2.5.0.dat{json} [2.5.0]
<<< @/.assets/snippets/beatmap/2.6.0.dat{json} [2.6.0]
<<< @/.assets/snippets/beatmap/3.0.0.dat{json} [3.0.0]
<<< @/.assets/snippets/beatmap/3.1.0.dat{json} [3.1.0]
<<< @/.assets/snippets/beatmap/3.2.0.dat{json} [3.2.0]
<<< @/.assets/snippets/beatmap/3.3.0.dat{json} [3.3.0]
<<< @/.assets/snippets/beatmap/4.0.0.dat{json} [4.0.0]
:::
::::

## Summary

::: tabs

== 2.0.0
Introduced in **1.0.0**

- [Note Jump](./info.md#note-jump-metadata) metadata was relocated to the Info file.

== 2.2.0
Introduced in **1.13.0**

- Added support for [Waypoints](./lightshow.md#waypoints).

== 2.4.0
Introduced in **1.13.0**

- Added support for [Special Events](./lightshow.md#special-event-keywords).

== 2.5.0
Introduced in **1.18.0**

- Basic Events support an additional [float value](./lightshow.md#basic-events-float-value) parameter.

== 2.6.0
Introduced in **1.20.0**

- Added support for [Arcs](#arcs).

== 3.0.0
Introduced in **1.20.0**

- All object properties use abbreviated naming conventions for filesize optimization and faster serialization.

== 3.1.0
Introduced in **1.25.0**

- Index Filters have new capabilities
  to "[chunk](./lightshow.md#index-filters-chunks)" and "[limit](./lightshow.md#index-filters-limit-behavior)"
  the distribution of effects within their group.
- All event boxes can [randomly](./lightshow.md#index-filters-random-behavior) distribute their effects within their group.

== 3.2.0
Introduced in **1.26.0**

- Added support for [Light Translation Event Boxes](./lightshow#light-translation-event-boxes)

== 3.3.0
Introduced in **1.34.0**

- Added fields to [Light Color Event Boxes](lightshow#light-color-event-boxes)
  to adjust strobe "off" color and make flashing fade between states

== 4.0.0
Introduced in **1.34.5**

- Beatmap objects now use a template-like structure for serialization.
- All non-interactable beatmap objects were relocated to the [Lightshow](./lightshow.md) file.

:::

## Color Notes

A colored cube with an arrow on it, which can be pointed in 1 of 9 directions.

::: code-group

```jsonc [2.0.0]
{
  "_notes": [
    {
      "_time": 10.0, // Beat
      "_lineIndex": 1, // Line Index
      "_lineLayer": 0, // Line Layer
      "_type": 0, // Color
      "_cutDirection": 1, // Cut Direction
    },
  ],
}
```

```jsonc [3.0.0]
{
  "colorNotes": [
    {
      "b": 10.0, // Beat
      "x": 1, // Line Index
      "y": 0, // Line Layer
      "c": 0, // Color
      "d": 1, // Cut Direction
      "a": 0, // Angle Offset
    },
  ],
}
```

````jsonc [4.0.0]
{
  "colorNotes": [
    {
      "b": 10.0, // Beat
      "r": 0, // Rotation Lane
      "i": 0, // Metadata Index
    }
  ],
  "colorNotesData": [
    {
      "x": 1, // Line Index
      "y": 0, // Line Layer
      "c": 0, // Color
      "d": 1, // Cut Direction
      "a": 0, // Angle Offset
    }
  ]
}
:::

### Beat {#color-notes-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when this object should reach the player.

### Rotation Lane {#color-notes-rotation-lane}

The degree of rotation relative to the player that this object should spawn from.
This is typically reserved for beatmaps using the `360Degree` or `90Degree` characteristic.

### Line Index {#color-notes-line-index}

The horizontal row where the object should reside on the grid.

The indices run from `0` to `3`, with `0` being the left-most lane.

### Line Layer {#color-notes-line-layer}

The vertical column where the object should reside on the grid.

The indices run from `0` to `2`, with `0` being the bottom-most lane.

### Color {#color-notes-type}

Indicates which saber should be able to successfully cut the note.

| Value |   Result    |
| :---: | :---------: |
|  `0`  | Left Saber  |
|  `1`  | Right Saber |

### Cut Direction {#color-notes-cut-direction}

Indicates the direction the player should swing to successfully cut the note.

| Value |   Result   |
| :---: | :--------: |
|  `0`  |     Up     |
|  `1`  |    Down    |
|  `2`  |    Left    |
|  `3`  |   Right    |
|  `4`  |  Up Left   |
|  `5`  |  Up Right  |
|  `6`  | Down Left  |
|  `7`  | Down Right |
|  `8`  |    Any     |

### Angle Offset {#color-notes-angle-offset}

A value (in degrees) which applies a counter-clockwise rotational offset to the note's cut direction.

::: info
This property is ignored for notes affected by snapping (such as stacks and slanted windows).
:::

## Bomb Notes

A spiked sphere that the player needs to avoid with their sabers.

::: tip
In v2 and earlier, any notes with a `_type` set to `3` will be parsed as a bomb note.
:::

::: code-group
```jsonc [2.0.0]
{
  "_notes": [
    {
      "_time": 10.0, // Beat
      "_lineIndex": 1, // Line Index
      "_lineLayer": 0, // Line Layer
      "_type": 3,
      "_cutDirection": 0, // Direction
    }
  ]
}
````

```jsonc [3.0.0]
{
  "bombNotes": [
    {
      "b": 10.0, // Beat
      "x": 1, // Line Index
      "y": 0, // Line Layer
    },
  ],
}
```

````jsonc [4.0.0]
{
  "bombNotes": [
    {
      "b": 10.0, // Beat
      "r": 0, // Rotation Lane
      "i": 0, // Metadata Index
    }
  ],
  "bombNotesData": [
    {
      "x": 1, // Line Index
      "y": 0, // Line Layer
    }
  ]
}
:::

### Beat {#bomb-notes-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when this object should reach the player.

### Rotation Lane {#bomb-notes-rotation-lane}

The degree of rotation relative to the player that this object should spawn from.
This is typically reserved for beatmaps using the `360Degree` or `90Degree` characteristic.

### Line Index {#bomb-notes-line-index}

The horizontal row where the object should reside on the grid.

The indices run from `0` to `3`, with `0` being the left-most lane.

### Line Layer {#bomb-notes-line-layer}

The vertical column where the object should reside on the grid.

The indices run from `0` to `2`, with `0` being the bottom-most lane.

## Obstacles

::: code-group
```jsonc [2.0.0]
{
  "_obstacles": [
    {
      "_type": 0, // Type
      "_time": 10.0, // Beat
      "_duration": 5.0, // Duration
      "_lineIndex": 1, // Line Index
      "_width": 1, // Width
    }
  ]
}
````

```jsonc [2.6.0]
{
  "_obstacles": [
    {
      "_type": 2, // [!code warning] // Type
      "_time": 10.0, // Beat
      "_duration": 5.0, // Duration
      "_lineIndex": 1, // Line Index
      "_lineLayer": 0, // [!code ++] // Line Layer
      "_width": 1, // Width
      "_height": 5, // [!code ++] // Height
    },
  ],
}
```

```jsonc [3.0.0]
{
  "obstacles": [
    {
      "b": 10.0, // Beat
      "d": 5.0, // Duration
      "x": 1, // Line Index
      "y": 0, // Line Layer
      "w": 1, // Width
      "h": 5, // Height
    },
  ],
}
```

````jsonc [4.0.0]
{
  "obstacles": [
    {
      "b": 10.0, // Beat
      "r": 0, // Rotation Lane
      "i": 0, // Metadata Index
    }
  ],
  "obstaclesData": [
    {
      "d": 5.0, // Duration
      "x": 1, // Line Index
      "y": 0, // Line Layer
      "w": 1, // Width
      "h": 5, // Height
    }
  ]
}
:::

### Beat {#obstacles-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when this object should reach the player.

### Rotation Lane {#obstacles-rotation-lane}

The degree of rotation relative to the player that this object should spawn from.
This is typically reserved for beatmaps using the `360Degree` or `90Degree` characteristic.

### Type {#obstacles-type}

Determines the vertical bounds of the walls in legacy schemas.

If this value is set to `2`, the [Line Layer](#line-layer-2) and [Height](#height-2) values **must** be provided
for the walls to function correctly.

| Value |         Result         |
| :---: | :--------------------: |
|  `0`  |  "Full-Height" Walls   |
|  `1`  |     "Crouch" Walls     |
|  `2`  | "Free" Walls (v3-like) |

::: warning
This field is removed in v3 and later, in favor of a more flexible data structure.
To convert legacy walls to the newer syntax, you can use these following conversions:
- For "full-height" walls, set the **Line Layer** to `0` and the **Height** to `5`.
- For "crouch" walls, set the **Line Layer** to `2` and the **Height** to `3`.
:::

### Duration {#obstacles-duration}

A value (in beats) that determines how long the obstacle extends for.

::: warning
Setting this field to a negative value may produce unstable behavior.
:::

### Line Index {#obstacles-line-index}

The horizontal row where the object should reside on the grid.

The indices run from `0` to `3`, with `0` being the left-most lane.

### Line Layer {#obstacles-line-layer}

The vertical column where the object should reside on the grid.

The indices run from `0` to `2`, with `0` being the bottom-most lane.

### Width {#obstacles-width}

An integer value which represents how many columns the obstacle should take up on the grid.

::: warning
Setting this field to a negative value may produce unstable behavior.
:::

### Height {#obstacles-height}

An integer value which represents how many rows the obstacle should take up on the grid.
The range of acceptable values runs from 1 to 5.

::: warning
Setting this field to a negative value may produce unstable behavior.
:::

## Arcs

A beam of light that will automatically magnetize to the saber,
which is used for representation of sustained sounds or telegraphs for specific setups.

If the head or tail of an arc matches a note's time and position,
then the arc will connect with the note and alter how the note is scored.

::: tip
In v4, the metadata for the head and tail notes are pulled from the [Color Notes](#color-notes) collection.
:::

::: code-group
```jsonc [2.6.0]
{
  "_sliders": [
    {
      "_colorType": 1, // Color
      "_headTime": 10.0, // Head Beat
      "_headLineIndex": 1, // Head Line Index
      "_headLineLayer": 0, // Head Line Layer
      "_headCutDirection": 1, // Head Cut Direction
      "_headControlPointLengthMultiplier": 1.0, // Head Control Point Length Multiplier
      "_tailTime": 20.0, // Tail Beat
      "_tailLineIndex": 2, // Tail Line Index
      "_tailLineLayer": 2, // Tail Line Layer
      "_tailCutDirection": 0, // Tail Cut Direction
      "_tailControlPointLengthMultiplier": 1.0, // Tail Control Point Length Multiplier
      "_sliderMidAnchorMode": 0, // Mid-Anchor Mode
    }
  ]
}
````

```jsonc [3.0.0]
{
  "sliders": [
    {
      "c": 0, // Color
      "b": 10.0, // Head Beat
      "x": 1, // Head Line Index
      "y": 0, // Head Line Layer
      "d": 1, // Head Cut Direction
      "mu": 1.0, // Head Control Point Length Multiplier
      "tb": 15.0, // Tail Beat
      "tx": 2, // Tail Line Index
      "ty": 2, // Tail Line Layer
      "tc": 0, // Tail Cut Direction
      "tmu": 1.0, // Tail Control Point Length Multiplier
      "m": 0, // Mid-Anchor Mode
    },
  ],
}
```

```jsonc [4.0.0]
{
  "arcs": [
    {
      "hb": 10.0, // Head Beat
      "tb": 15.0, // Tail Beat
      "hr": 0, // Head Rotation Lane
      "tr": 0, // Tail Rotation Lane
      "hi": 0, // Head Note Metadata Index
      "ti": 1, // Tail Note Metadata Index
      "ai": 0, // Arc Metadata Index
    },
  ],
  "colorNotesData": [
    {
      "x": 1, // Head Line Index
      "y": 0, // Head Line Layer
      "c": 0, // Color
      "d": 1, // Head Cut Direction
      "a": 0,
    },
    {
      "x": 2, // Tail Line Index
      "y": 2, // Tail Line Layer
      "c": 0, // Color
      "d": 0, // Tail Cut Direction
      "a": 0,
    },
  ],
  "arcsData": [
    {
      "m": 1.0, // Head Control Point Length Multiplier
      "tm": 1.0, // Tail Control Point Length Multiplier
      "a": 0, // Mid-Anchor Mode
    },
  ],
}
```

:::

### Beat {#arcs-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when the head/tail should reach the player.

### Rotation Lane {#arcs-rotation-lane}

The degree of rotation relative to the player that the head/tail should spawn from.
This is typically reserved for beatmaps using the `360Degree` or `90Degree` characteristic.

### Line Index {#arcs-line-index}

The horizontal row where the head/tail should reside on the grid.

The indices run from `0` to `3`, with `0` being the left-most lane.

### Line Layer {#arcs-line-layer}

The vertical column where the head/tail should reside on the grid.

The indices run from `0` to `2`, with `0` being the bottom-most lane.

### Color {#arcs-type}

Indicates which saber this arc should attach to.

| Value |   Result    |
| :---: | :---------: |
|  `0`  | Left Saber  |
|  `1`  | Right Saber |

### Cut Direction {#arcs-cut-direction}

Indicates the direction the head/tail should curve from relative to the note it's attached to.

| Value |   Result   |
| :---: | :--------: |
|  `0`  |     Up     |
|  `1`  |    Down    |
|  `2`  |    Left    |
|  `3`  |   Right    |
|  `4`  |  Up Left   |
|  `5`  |  Up Right  |
|  `6`  | Down Left  |
|  `7`  | Down Right |
|  `8`  |  No Curve  |

### Control Point Length Multiplier {#arcs-control-point-length-multiplier}

A value that controls the magnitude of the curve approaching the head/tail respectively.

If the [Cut Direction](#arcs-cut-direction) is set to `8`, this value is ignored.

### Mid-Anchor Mode {#arcs-mid-anchor-mode}

A value that determines how the arc curves from the head/tail to the midpoint of the arc.

The following conditions must be met for this effect to be rendered properly:

- The [Line Index](#arcs-line-index) of the head and tail must be equal.
- The [Cut Direction](#arcs-cut-direction) of the head and tail must be equal
  OR have an angle difference of 180 degrees.

| Value |      Result       |
| :---: | :---------------: |
|  `0`  |     Straight      |
|  `1`  |     Clockwise     |
|  `2`  | Counter-Clockwise |

## Chains

A staggered set of tubes that require the player to slice through them in succession,
which are used to represent burst-like sounds.

If the head of a chain matches a note's time and position,
then the chain will connect with the note and alter how the note is scored.

::: tip
In v4, the metadata for the head note is pulled from the [Color Notes](#color-notes) collection.
:::

::: code-group

```jsonc [3.0.0]
{
  "burstSliders": [
    {
      "c": 0, // Color
      "b": 10.0, // Head Beat
      "x": 1, // Head Line Index
      "y": 0, // Head Line Layer
      "d": 1, // Head Cut Direction
      "tb": 15.0, // Tail Beat
      "tx": 2, // Tail Line Index
      "ty": 2, // Tail Line Layer
      "sc": 3, // Slice Count
      "s": 0.5, // Squish Factor
    },
  ],
}
```

```jsonc [4.0.0]
{
  "chains": [
    {
      "hb": 10.0, // Head Beat
      "tb": 15.0, // Tail Beat
      "hr": 0, // Head Rotation Lane
      "tr": 0, // Tail Rotation Lane
      "i": 0, // Head Note Metadata Index
      "ci": 0, // Chain Metadata Index
    },
  ],
  "colorNotesData": [
    {
      "x": 1, // Head Line Index
      "y": 0, // Head Line Layer
      "c": 0, // Color
      "d": 1, // Head Cut Direction
    },
  ],
  "chainsData": [
    {
      "tx": 2, // Tail Line Index
      "ty": 2, // Tail Line Layer
      "c": 3, // Slice Count
      "s": 0.5, // Squish Factor
    },
  ],
}
```

:::

### Beat {#chains-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when the head/tail should reach the player.

### Rotation Lane {#chains-rotation-lane}

The degree of rotation relative to the player that the head/tail should spawn from.
This is typically reserved for beatmaps using the `360Degree` or `90Degree` characteristic.

### Line Index {#chains-line-index}

The horizontal row where the head should reside on the grid.

The indices run from `0` to `3`, with `0` being the left-most lane.

### Line Layer {#chains-line-layer}

The vertical column where the head should reside on the grid.

The indices run from `0` to `2`, with `0` being the bottom-most lane.

### Color {#chains-type}

Indicates which saber should be able to successfully cut the chain.

| Value |   Result    |
| :---: | :---------: |
|  `0`  | Left Saber  |
|  `1`  | Right Saber |

### Cut Direction {#chains-cut-direction}

Indicates the direction the player should swing to successfully cut the head of the chain.

| Value |   Result   |
| :---: | :--------: |
|  `0`  |     Up     |
|  `1`  |    Down    |
|  `2`  |    Left    |
|  `3`  |   Right    |
|  `4`  |  Up Left   |
|  `5`  |  Up Right  |
|  `6`  | Down Left  |
|  `7`  | Down Right |
|  `8`  |    Down    |

::: warning
A value of `8` will change the visual look of the head note to a dot as expected,
but its cut direction will still point downwards.
:::

### Slice Count {#chains-slice-count}

An integer value which represents the number of segments in the chain. The head counts as a segment.

::: warning
A value of `1` will create a chain with no links,
but will still affect the visual look and scoring potential of the head note.
:::

### Squish Factor {#chains-squish-factor}

An integer value which represents the proportion of
how much of the path from `(x, y)` to `(tx, ty)` is used by the chain.
This does not alter the shape of the path.

Any value greater than `1` will extend the path beyond the specified end point.

::: danger
A value of `0` will crash the game.
:::

## Spawn Rotations

Allows you to rotate the position where interactable objects should spawn.

::: info
While these events are technically available in v4, they are assumed to be deprecated
in favor of a new object-level syntax for assigning lane rotations to individual objects.
:::

::: code-group

```jsonc [2.0.0]
{
  "_events": [
    {
      "_time": 10.0, // Beat
      "_type": 14, // Execution Time
      "_value": 4, // Value
    },
    {
      "_time": 15.0, // Beat
      "_type": 15, // Execution Time
      "_value": 4, // Value
    },
  ],
}
```

```jsonc [3.0.0]
{
  "rotationEvents": [
    {
      "b": 10.0, // Beat
      "e": 0, // Execution Time
      "r": 15.0, // Magnitude
    },
    {
      "b": 15.0, // Beat
      "e": 1, // Execution Time
      "r": 15.0, // Magnitude
    },
  ],
}
```

```jsonc [4.0.0]
{
  "spawnRotations": [
    {
      "b": 10.0, // Beat
      "i": 0, // Metadata Index
    },
    {
      "b": 15.0, // Beat
      "i": 1, // Metadata Index
    },
  ],
  "spawnRotationsData": [
    {
      "t": 0, // Execution Time
      "r": 15.0, // Magnitude
    },
    {
      "t": 1, // Execution Time
      "r": 15.0, // Magnitude
    },
  ],
}
```

:::

### Beat {#spawn-rotations-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when this event should produce its effect.

### Execution Time {#spawn-rotations-execution-time}

Determines when the lane rotation will be applied to interactable objects placed on the same beat as this event.

In v2 or earlier, these effects will be applied to basic event types `14` and `15` respectively.

| Value | Result | Behavior                                                      |
| :---: | :----: | :------------------------------------------------------------ |
|  `0`  | Early  | The objects will change lanes at the same time as this event. |
|  `1`  |  Late  | The objects will remain in its original lane.                 |

### Magnitude {#spawn-rotations-magnitude}

Controls the magnitude and direction of the lane rotation.

A negative value will turn the player counter-clockwise, and a positive value will turn clockwise.

::: info
For v2, the magnitude is determined by an enumerated value,
of which all possible values are listed in the corresponding table for [Basic Events](./lightshow.md#rotation-events-legacy-value).
:::

## BPM Events

Allows you to alter the BPM of the chart at the indicated time.

::: info
These events are deprecated in v4 or later,
in favor of automated BPM calculations as determined by the [Audio](./audio.md) file.
:::

::: code-group

```jsonc [2.5.0]
{
  "_events": [
    {
      "_time": 10, // Beat
      "_type": 100,
      "_value": 0, // UNUSED
      "_floatValue": 128.0, // BPM
    },
  ],
}
```

```jsonc [3.0.0]
{
  "bpmEvents": [
    {
      "b": 10.0, // Beat
      "m": 128.0, // BPM
    },
  ],
}
```

:::

### Beat {#bpm-events-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when this event should produce its effect.

### BPM {#bpm-events-bpm}

Alters the BPM to the defined value at the indicated beat.

## Lightshow

As of v4, all non-interactable beatmap objects have been migrated to the [Lightshow](./lightshow.md) file.
As such, information pertaining to these events have been moved to those pages for better consolidation of scope.
