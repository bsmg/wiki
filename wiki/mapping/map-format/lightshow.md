---
prev: false
next: false
---

# Lightshow

Similar to the beatmap file,
the lightshow file defines collections and associated metadata for all _non-interactable_ beatmap items,
such as environment objects and lighting effects.

::: info
In v3 and earlier,
any collections for non-interactable beatmap objects are located in the corresponding [Beatmap](./beatmap.md) file.
You can refer to the sample files included there
to know where the corresponding collections are located.
:::

:::: details Sample Data
::: code-group
<<< @/.assets/snippets/lightshow/4.0.0.dat{json} [4.0.0]
:::
::::

## Summary

::: tabs

== 4.0.0
Introduced in **1.34.5**

- All non-interactable beatmap objects were relocated to this file.

:::

## Basic Events

::: code-group

```jsonc [2.0.0]
{
  "_events": [
    {
      "_time": 10, // Beat
      "_type": 1, // Type
      "_value": 3, // Value
    },
  ],
}
```

```jsonc [2.5.0]
{
  "_events": [
    {
      "_time": 10, // Beat
      "_type": 1, // Type
      "_value": 3, // Value
      "_floatValue": 1.0, // [!code ++] // Float Value
    },
  ],
}
```

```jsonc [3.0.0]
{
  "basicBeatmapEvents": [
    {
      "b": 10, // Beat
      "et": 1, // Type
      "i": 3, // Value
      "f": 1.0, // Float Value
    },
  ],
}
```

```jsonc [4.0.0]
{
  "basicEvents": [
    {
      "b": 10, // Beat
      "i": 0, // Metadata Index
    },
  ],
  "basicEventsData": [
    {
      "t": 1, // Type
      "i": 3, // Value
      "f": 1.0, // Float Value
    },
  ],
}
```

:::

### Beat {#basic-events-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when this event should produce its effect.

### Type {#basic-events-type}

An integer value which represents what group of environment objects are affected.

Contrary to popular belief,
the values for these events are predefined to ensure compatibility across legacy environments.
The following table lists those values which are compatible and their corresponding effects:

| Value |            Result            |
| :---: | :--------------------------: |
|  `0`  |            Light             |
|  `1`  |            Light             |
|  `2`  |            Light             |
|  `3`  |            Light             |
|  `4`  |            Light             |
|  `5`  |     Color Boost (Legacy)     |
|  `6`  |            Light             |
|  `7`  |            Light             |
|  `8`  |       Value / Trigger        |
|  `9`  |       Value / Trigger        |
| `10`  | Light / BPM Change (Legacy)  |
| `11`  |            Light             |
| `12`  |            Value             |
| `13`  |            Value             |
| `14`  | Early Lane Rotation (Legacy) |
| `15`  | Late Lane Rotation (Legacy)  |
| `16`  |            Value             |
| `17`  |            Value             |
| `18`  |            Value             |
| `19`  |            Value             |
| `40`  |           Special            |
| `41`  |           Special            |
| `42`  |           Special            |
| `43`  |           Special            |
| `100` |     BPM Change (Legacy)      |

::: tip
For more information on how these events are assigned on a per-environment level, you can check out the
[Environment Previews](../basic-lighting.md#environment-previews) section.
:::

::: info
Types `5`, `14`, `15`, and `100` are deprecated in v3 or later,
in favor of more flexible data structures for the respective behaviors.
:::

::: warning
Certain event types have been historically reworked by Beat Games to adopt new behaviors,
which may cause older maps or mods that previously utilized these event types for custom behaviors to break in specific contexts:

- Type `14` and `15` were originally used by the **Custom Platforms** mod as custom lighting lanes.
  This may result in older maps that use these events
  to spawn indicator lines for notes similar to 360/90 modes or produce unintended lane rotations.
- Type `10` was originally used as BPM Change events prior to the 1.18.0 update,
  where it was later reassigned as a Light event.
  This may result in newer maps that use type `10` events
  to produce unintended BPM changes on older versions of the game.
  :::

### Value {#basic-events-value}

An integer value which produces a specific effect based on its type.

::: tip
For more information on the acceptable values for each environment's unique effects, check out the
[Environment Previews](../basic-lighting.md#environment-previews) section.
:::

#### Light Events {#light-events-value}

The following table can be used to determine its effect:

<!-- markdownlint-disable MD013 -->

| Value |         Result         | Behavior                                                                                    |
| :---: | :--------------------: | :------------------------------------------------------------------------------------------ |
|  `0`  |          Off           | Turns the light group off.                                                                  |
|  `1`  |   Static (Secondary)   | Changes the lights to the secondary color, and turns the lights on.                         |
|  `2`  |   Flash (Secondary)    | Changes the lights to the secondary color, and flashes brightly before returning to normal. |
|  `3`  |    Fade (Secondary)    | Changes the lights to the secondary color, and flashes brightly before fading to black.     |
|  `4`  | Transition (Secondary) | Changes the lights to the secondary color by fading from the current state.                 |
|  `5`  |    Static (Primary)    | Changes the lights to the primary color, and turns the lights on.                           |
|  `6`  |    Flash (Primary)     | Changes the lights to the primary color, and flashes brightly before returning to normal.   |
|  `7`  |     Fade (Primary)     | Changes the lights to the primary color, and flashes brightly before fading to black.       |
|  `8`  |  Transition (Primary)  | Changes the lights to the primary color by fading from the current state.                   |
|  `9`  |     Static (White)     | Changes the lights to white, and turns the lights on.                                       |
| `10`  |     Flash (White)      | Changes the lights to white, and flashes brightly before returning to normal.               |
| `11`  |      Fade (White)      | Changes the lights to white, and flashes brightly before fading to black.                   |
| `12`  |   Transition (White)   | Changes the lights to white by fading from the current state.                               |

#### Value Events {#value-events-value}

The event will read the provided value to control the parameters of the effect.

#### Trigger Events {#trigger-events-value}

The value goes unused, as any value will trigger the event.

#### Special Events {#special-events-value}

The value is used to control the keyword-specific effects.
See [Special Event Keywords](#special-event-keywords) for more details.

#### Color Boost Events (Legacy) {#color-boost-events-legacy-value}

The value is used to toggle the color boost effect.
See [Color Boost Events](#color-boost-events) for more details.

| Value |       Result        |
| :---: | :-----------------: |
|  `0`  | Disable Color Boost |
|  `1`  | Enable Color Boost  |

::: info
These events are deprecated in v3 or later, in favor of more robust implementations and data structures in future schemas.
:::

#### Rotation Events (Legacy) {#rotation-events-legacy-value}

The value is used to control the magnitude and direction of the lane rotation.
See [Spawn Rotations](./beatmap#spawn-rotations) for more details.

| Value |            Result            |
| :---: | :--------------------------: |
|  `0`  | 60 Degrees Counter-Clockwise |
|  `1`  | 45 Degrees Counter-Clockwise |
|  `2`  | 30 Degrees Counter-Clockwise |
|  `3`  | 15 Degrees Counter-Clockwise |
|  `4`  |     15 Degrees Clockwise     |
|  `5`  |     30 Degrees Clockwise     |
|  `6`  |     45 Degrees Clockwise     |
|  `7`  |     60 Degrees Clockwise     |

::: info
These events are deprecated in v3 or later,
in favor of an updated syntax that allows for more freedom for the available increments of lane changes.
:::

### Float Value {#basic-events-float-value}

As described, allows you to more precisely tune a parameter for the effect.

#### Light Events {#light-events-float-value}

The float value is used to control the brightness of the light.
A value of 0 will turn the light off.

#### BPM Events (Legacy) {#bpm-events-legacy-float-value}

The value is used to alter the BPM at the indicated beat. See [BPM Events](./beatmap.md#bpm-events) for more details.

<!-- markdownlint-enable MD013 -->

## Color Boost Events

Allows you to swap the environment colors to a secondary pair.

::: code-group

```jsonc [2.0.0]
{
  "_events": [
    {
      "_time": 10, // Beat
      "_type": 5,
      "_value": 1, // Boost
    },
  ],
}
```

```jsonc [3.0.0]
{
  "colorBoostBeatmapEvents": [
    {
      "b": 10, // Beat
      "o": true, // Boost
    },
  ],
}
```

```jsonc [4.0.0]
{
  "colorBoostEvents": [
    {
      "b": 10, // Beat
      "i": 0, // Metadata Index
    },
  ],
  "colorBoostEventsData": [
    {
      "b": 1, // Boost
    },
  ],
}
```

:::

### Beat {#color-boost-events-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song, when this event should produce its effect.

### Boost {#color-boost-events-boost}

Determines whether the color boost effect is enabled.

## Waypoints

Used to control the TinyTAN figures that are exclusive to the BTS environment.

::: tip
For more detailed information on how to control the TinyTAN figures, check out the following [document](https://docs.google.com/spreadsheets/d/1spW7LS-RvenLQBVXJl9w_iOwqr9r_ozxYo3JUlXq9Lc).
:::

::: code-group

```jsonc [2.2.0]
{
  "_waypoints": [
    {
      "_time": 10.0, // Beat
      "_lineIndex": 1, // Line Index
      "_lineLayer": 0, // Line Layer
      "_offsetDirection": 1, // Offset Direction
    },
  ],
}
```

```jsonc [3.0.0]
{
  "waypoints": [
    {
      "b": 10.0, // Beat
      "x": 1, // Line Index
      "y": 0, // Line Layer
      "d": 1, // Offset Direction
    },
  ],
}
```

```jsonc [4.0.0]
{
  "waypoints": [
    {
      "b": 10.0, // Beat
      "i": 0, // Metadata Index
    },
  ],
  "waypointsData": [
    {
      "x": 1, // Line Index
      "y": 0, // Line Layer
      "d": 1, // Offset Direction
    },
  ],
}
```

:::

### Beat {#waypoints-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song,
which helps determine when movements should start/end.

### Line Index {#waypoints-line-index}

The horizontal row where the figure should be positioned on the grid.
The indices run from 0 to 3, with 0 being the left-most lane.

### Line Layer {#waypoints-line-layer}

The vertical column where the figure should be positioned on the grid.
The indices run from 0 to 2, with 0 being the bottom-most lane.

### Offset Direction {#waypoints-offset-direction}

The direction that the figure is expected to move towards at the start of its movement path.

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

## Special Event Keywords

A configurable set of overrides to basic event lanes that unlock special behavior unique to specific environments.

Each special event lane requires a secret keyword for proper functionality.
By providing a valid keyword,
any [Basic Events](#special-event-keywords) assigned to these special event lanes
can produce their corresponding effects.

::: code-group

```jsonc [2.4.0]
{
  "_specialEventsKeywordFilters": {
    "_keywords": [
      {
        "_keyword": "SECRET", // Keyword
        "_specialEvents": [40, 41, 42, 43], // Event Types
      },
    ],
  },
}
```

```jsonc [3.0.0]
{
  "basicEventTypesWithKeywords": {
    "d": [
      {
        "k": "SECRET", // Keyword
        "e": [40, 41, 42, 43], // Event Types
      },
    ],
  },
}
```

```jsonc [4.0.0]
{
  "basicEventTypesWithKeywords": {
    "d": [
      {
        "k": "SECRET", // Keyword
        "e": [40, 41, 42, 43], // Event Types
      },
    ],
  },
}
```

:::

### Keyword {#special-event-keywords-keyword}

Used to activate the special event lanes for the selected environment when valid.

::: info
We will not be listing any of the valid keywords here,
as some special effects incorporate literal branding elements or other copyrighted assets
that are not intended to be used outside of an official capacity.
:::

### Event Types {#special-event-keywords-event-types}

Determines which special event lanes should be enabled when the provided keyword is valid.

For compatibility purposes, event types `40`, `41`, `42`, and `43` are exclusively reserved for special event lanes.

## Event Box Groups

Controls how certain lighting effects are distributed across a group of associated environment objects.

- In v3, all Event Box Groups have their own dedicated collections, despite sharing similar structures.
- In v4, all Event Box Groups are co-located in the same collection,
  where an additional field is used to determine its type
  and any metadata is referenced using the new template-like syntax.

::: code-group

```jsonc [3.0.0]
{
  "...EventBoxGroups": [
    {
      "b": 2.0, // Beat
      "g": 0, // Group
      "e": [...] // Event Boxes
    }
  ]
}
```

```jsonc [4.0.0]
{
  "eventBoxGroups": [
    {
      "b": 2.0, // Beat
      "g": 0, // Group
      "t": 0, // Type
      "e": [{
        "f": 0, // Index Filter Metadata Index
        "e": 0, // Event Box Metadata Index
        "l": [
          {
            "b": 0.0, // Beat Offset
            "i": 0, // Event Metadata Index
          }
        ],
      }]
    }
  ],
  "indexFilters": [...],
  "...EventBoxes": [...],
  "...Events": [...]
}
```

:::

### Beat {#event-box-groups-beat}

A specific point in time, as determined by the [BPM](info.md#bpm) of the song,
when all event boxes in the group should start their effects.

### Group {#event-box-groups-group}

An integer value which represents what group of environment objects are affected.

### Type {#event-box-groups-type}

The type of event box that the data is associated with.
Used in schemas where all event boxes are co-located in the same collection.

| Value |      Result       |
| :---: | :---------------: |
|  `0`  |       None        |
|  `1`  |    Light Color    |
|  `2`  |  Light Rotation   |
|  `3`  | Light Translation |
|  `4`  |     Float FX      |

## Index Filters

Allows you to filter specific environment objects within an event box and control how its effects are distributed.

::: code-group

```jsonc [3.0.0]
{
  "...EventBoxGroups": [
    {
      "e": [
        {
          "f": {
            "f": 1, // Type
            "p": 1, // Parameter 0
            "t": 0, // Parameter 1
            "r": 0, // Reverse
          },
        },
      ],
    },
  ],
}
```

```jsonc [3.1.0]
{
  "...EventBoxGroups": [
    {
      "e": [
        {
          "f": {
            "c": 1, // [!code ++] // Chunks
            "f": 1, // Type
            "p": 1, // Parameter 0
            "t": 0, // Parameter 1
            "r": 0, // Reverse
            "n": 0, // [!code ++] // Randomization Behavior
            "s": 0, // [!code ++] // Randomization Seed
            "l": 0.0, // [!code ++] // Limit Percentage
            "d": 0, // [!code ++] // Limit Behaviour
          },
        },
      ],
    },
  ],
}
```

```jsonc [4.0.0]
{
  "indexFilters": [
    {
      "c": 1, // Chunks
      "f": 1, // Type
      "p": 1, // Parameter 0
      "t": 0, // Parameter 1
      "r": 0, // Reverse
      "n": 0, // Randomization Behaviour
      "s": 0, // Randomization Seed
      "l": 0.0, // Limit Percentage
      "d": 0, // Limit Behaviour
    },
  ],
}
```

:::

### Chunks {#index-filters-chunks}

An integer value which divides all available objects within a group into a defined number of sections,
where each section behaves as if it were a singular object.

### Type {#index-filters-type}

An integer value which determines how the environment objects will be filtered within the group.

The functionality of the two "parameter" fields will change depending on the type.

| Value |     Result      |
| :---: | :-------------: |
|  `0`  |    Division     |
|  `1`  | Step and Offset |

#### Division {#index-filters-type-1}

If "type" is `0`, all environment objects will be equally distributed into the defined number of sections,
and only those objects within the indicated section will be processed.

- `p` determines the number of sections to divide the objects within the group into.
- `t` determines the section that will be affected

#### Step and Offset {#index-filters-type-2}

If "type" is `1`, the filter will iterate over all available environment objects in the group
and skip over a defined number of elements at a time, as determined by its "step" value.

- `p` determines the starting light that will be affected.
- `t` determines the step value,
  or the number of objects that will be skipped when iterating over the available objects in the group.

### Reverse {#index-filters-reverse}

A binary integer value (0 or 1) which determines whether the distribution of effects should be reversed.

### Randomization Behavior {#index-filters-random-behavior}

A bitmask which determines how randomization should be applied to filtered objects.

| Value |     Result      |
| :---: | :-------------: |
|  `0`  |    No Random    |
|  `1`  |   Keep Order    |
|  `2`  | Random Elements |

### Randomization Seed {#index-filters-random-seed}

An integer value which determines the seed used with random ordering behaviour.

### Limit Percentage {#index-filters-limit-percentage}

A normalized value (0.0 to 1.0) which determines the percentage of filtered objects that should be affected.

### Limit Behavior {#index-filters-limit-behavior}

A bitmask which determines whether the limit should affect the distributions within its event boxes.

| Value |    Result    |
| :---: | :----------: |
|  `0`  |     None     |
|  `1`  |   Duration   |
|  `2`  | Distribution |

## Light Color Event Boxes

Allows you to control the lighting properties of filtered environment objects, including color and brightness values.

::: code-group

```jsonc [3.0.0]
{
  "lightColorEventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "e": [
        {
          "f": {...}, // Index Filter
          "w": 1.0, // Beat Distribution: Value
          "d": 1, // Beat Distribution: Type
          "r": 1.0, // Brightness Distribution: Value
          "t": 1, // Brightness Distribution: Type
          "b": 1, // Brightness Distribution: Affects First
          // Light Color Events
          "e": [
            {
              "b": 0.0, // Beat Offset
              "i": 0, // Transition Type
              "c": 1, // Color
              "s": 1.0, // Brightness
              "f": 0, // Strobe Frequency
            }
          ]
        }
      ]
    }
  ]
}
```

```jsonc [3.2.0]
{
  "lightColorEventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "e": [
        {
          "f": {...}, // Index Filter
          "w": 1.0, // Beat Distribution: Value
          "d": 1, // Beat Distribution: Type
          "r": 1.0, // Brightness Distribution: Value
          "t": 1, // Brightness Distribution: Type
          "b": 1, // Brightness Distribution: Affects First
          "i": 0, // [!code ++] // Brightness Distribution: Easing
          // Light Color Events
          "e": [
            {
              "b": 0.0, // Beat Offset
              "i": 0, // Transition Type
              "c": 1, // Color
              "s": 1.0, // Brightness
              "f": 0, // Strobe Frequency
            }
          ]
        }
      ]
    }
  ]
}
```

```jsonc [3.3.0]
{
  "lightColorEventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "e": [
        {
          "f": {...}, // Index Filter
          "w": 1.0, // Beat Distribution: Value
          "d": 1, // Beat Distribution: Type
          "r": 1.0, // Brightness Distribution: Value
          "t": 1, // Brightness Distribution: Type
          "b": 1, // Brightness Distribution: Affects First
          "i": 0, // Brightness Distribution: Easing
          // Light Color Events
          "e": [
            {
              "b": 0.0, // Beat Offset
              "i": 0, // Transition Type
              "c": 1, // Color
              "s": 1.0, // Brightness
              "f": 0, // Strobe Frequency
              "sb": 0, // [!code ++] // Strobe Brightness
              "sf": 0, // [!code ++] // Strobe Fade
            }
          ]
        }
      ]
    }
  ]
}
```

```jsonc [4.0.0]
{
  "eventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "t": 1,
      "e": [
        {
          "f": 0, // Index Filter Metadata Index
          "e": 0, // Event Box Metadata Index
          "l": [
            {
              "b": 0.0, // Beat Offset
              "i": 0, // Event Metadata Index
            }
          ],
        }
      ]
    }
  ],
  "indexFilters": [
    {...},
  ],
  "lightColorEventBoxes": [
    {
      "w": 1.0, // Beat Distribution: Value
      "d": 1, // Beat Distribution: Type
      "s": 1.0, // Brightness Distribution: Value
      "t": 1, // Brightness Distribution: Type
      "b": 1, // Brightness Distribution: Affects First
      "e": 0, // Brightness Distribution: Easing
    }
  ],
  "lightColorEvents": [
    {
      "p": 0, // Transition Type
      "e": -1, // [!code ++] // Easing
      "c": 1, // Color
      "b": 1.0, // Brightness
      "f": 0, // Strobe Frequency
      "sb": 0, // Strobe Brightness
      "sf": 0, // Strobe Fade
    }
  ],
}
```

:::

### Beat Distribution {#light-color-event-boxes-beat-distribution}

Determines how the effects will be processed over time, in relation to the starting beat.

| Value | Behavior | Result                                       |
| :---: | :------: | :------------------------------------------- |
|  `1`  |   Wave   | After `w` beats, the last step takes effect. |
|  `2`  |   Step   | After `w` beats, the next step takes effect. |

### Brightness Distribution {#light-color-event-boxes-effect-distribution}

Determines how the brightness of all filtered objects should be adjusted when iterating through the sequence.

| Value | Behavior | Result                                          |
| :---: | :------: | :---------------------------------------------- |
|  `1`  |   Wave   | The difference between the last and first step. |
|  `2`  |   Step   | The difference between each step.               |

#### Affects First {#light-color-event-boxes-effect-distribution-affects-first}

A binary integer value (0 or 1) which determines whether the distribution should affect the first event in the sequence.

#### Easing {#light-color-event-boxes-effect-distribution-easing}

An integer value which determines the interpolation of the distribution,
or the behavior for how to traverse the sequence.

<!--@include: @/.assets/parts/easings.md-->

### Light Color Events

An event which allows you to control the color and brightness of filtered objects.

#### Beat Offset {#light-color-events-beat}

A specific point in time, relative to the starting beat of the group,
when this event should produce its effect.

#### Transition Type {#light-color-events-type}

An integer value which determines the behavior of the effect, relative to the previous effect.

| Value |   Result   | Behavior                                                     |
| :---: | :--------: | :----------------------------------------------------------- |
|  `0`  |  Instant   | The state instantly changes.                                 |
|  `1`  | Transition | The state transitions from the previous event to this event. |
|  `2`  |   Extend   | The state of the previous event is preserved.                |

In v4, the syntax is altered to be more consistent with other event boxes, and mappings are as follows:

| Value |   Result   | Behavior                                                     |
| :---: | :--------: | :----------------------------------------------------------- |
|  `0`  | Transition | The state transitions from the previous event to this event. |
|  `1`  |   Extend   | The state of the previous event is preserved.                |

::: tip

If you're converting between v3 and v4 schemas,
you can use the following table to determine how the v3 "transition type" field will correspond to its v4 counterparts:

| v3 Transition Type | v4 Transition Type |  v4 Easing   |
| :----------------: | :----------------: | :----------: |
|   `0` (Instant)    |      IGNORED       | `-1` (None)  |
|  `1` (Transition)  |      IGNORED       | `0` (Linear) |
|    `2` (Extend)    |    `1` (Extend)    |   IGNORED    |

:::

#### Easing {#light-color-events-easing}

An integer value which determines the interpolation of the transition between states.

<!--@include: @/.assets/parts/easings.md-->

#### Color {#light-color-events-color}

An integer value which controls the color of the filtered objects.

| Value |     Result      |
| :---: | :-------------: |
|  `0`  |  Primary Color  |
|  `1`  | Secondary Color |
|  `2`  |      White      |

#### Brightness {#light-color-events-brightness}

A float value which controls the brightness of the filtered objects.

#### Strobe Frequency {#light-color-events-strobe-frequency}

An integer value which determines the frequency of a strobe applied to the interpolation of the effect.
A value of `0` will produce no strobe behavior.

#### Strobe Brightness {#light-color-events-strobe-brightness}

An integer value which determines the brightness of the "off" state for the aforementioned strobe.
If this value is equal to the "brightness" value, no strobe will be produced.

#### Strobe Fade {#light-color-events-strobe-fade}

A binary integer value (0 or 1) which determines whether the strobe effect should fade between its two states.

## Light Rotation Event Boxes

Allows you to control the rotational properties of filtered environment objects.

::: code-group

```jsonc [3.0.0]
{
  "lightRotationEventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "e": [
        {
          "f": {...}, // Index Filter
          "w": 1.0, // Beat Distribution: Value
          "d": 1, // Beat Distribution: Type
          "s": 1.0, // Rotation Distribution: Value
          "t": 1, // Rotation Distribution: Type
          "b": 1, // Rotation Distribution: Affects First
          "a": 0, // Axis
          "r": 1, // Invert Axis
          // Light Rotation Events
          "l": [
            {
              "b": 0.0, // Beat Offset
              "p": 0, // Transition Type
              "e": 1, // Easing
              "r": 340.0, // Magnitude
              "o": 1, // Direction
              "l": 1, // Loop Count
            }
          ]
        }
      ]
    }
  ]
}
```

```jsonc [3.2.0]
{
  "lightRotationEventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "e": [
        {
          "f": {...}, // Index Filter
          "w": 1.0, // Beat Distribution: Value
          "d": 1, // Beat Distribution: Type
          "s": 1.0, // Rotation Distribution: Value
          "t": 1, // Rotation Distribution: Type
          "b": 1, // Rotation Distribution: Affects First
          "i": 0, // [!code ++] // Rotation Distribution: Easing
          "a": 0, // Axis
          "r": 1, // Invert Axis
          // Light Rotation Events
          "l": [
            {
              "b": 0.0, // Beat Offset
              "p": 0, // Transition Type
              "e": 1, // Easing
              "r": 340.0, // Magnitude
              "o": 1, // Direction
              "l": 1, // Loop Count
            }
          ]
        }
      ]
    }
  ]
}
```

```jsonc [4.0.0]
{
  "eventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "t": 2,
      "e": [
        {
          "f": 0, // Index Filter Metadata Index
          "e": 0, // Event Box Metadata Index
          "l": [
            {
              "b": 0.0, // Beat Offset
              "i": 0, // Event Metadata Index
            }
          ],
        }
      ]
    }
  ],
  "indexFilters": [
    {...}
  ],
  "lightRotationEventBoxes": [
    {
      "w": 1.0, // Beat Distribution: Value
      "d": 1, // Beat Distribution: Type
      "s": 1.0, // Rotation Distribution: Value
      "t": 1, // Rotation Distribution: Type
      "b": 1, // Rotation Distribution: Affects First
      "e": 0, // Rotation Distribution: Easing
      "a": 0, // Axis
      "f": 1, // Invert Axis
    }
  ],
  "lightRotationEvents": [
    {
      "p": 0, // Transition Type
      "e": 1, // Easing
      "r": 340.0, // Magnitude
      "d": 1, // Direction
      "l": 1, // Loop Count
    }
  ],
}
```

:::

### Beat Distribution {#light-rotation-event-boxes-beat-distribution}

Determines how the effects will be processed over time, in relation to the starting beat.

| Value | Result | Behavior                                     |
| :---: | :----: | :------------------------------------------- |
|  `1`  |  Wave  | After `w` beats, the last step takes effect. |
|  `2`  |  Step  | After `w` beats, the next step takes effect. |

### Rotation Distribution {#light-rotation-event-boxes-effect-distribution}

Determines how the rotation of all filtered objects should be adjusted when iterating through the sequence.

| Value | Result | Behavior                                        |
| :---: | :----: | :---------------------------------------------- |
|  `1`  |  Wave  | The difference between the last and first step. |
|  `2`  |  Step  | The difference between each step.               |

#### Affects First {#light-rotation-event-boxes-effect-distribution-affects-first}

A binary integer value (0 or 1) which determines whether the distribution should affect the first event in the sequence.

#### Easing {#light-rotation-event-boxes-effect-distribution-easing}

An integer value which determines the interpolation of the distribution,
or the behavior for how to traverse the sequence.

<!--@include: @/.assets/parts/easings.md-->

### Axis {#light-rotation-event-boxes-axis}

An integer value which controls the axis of rotation.

| Value | Result |
| :---: | :----: |
|  `0`  |   X    |
|  `1`  |   Y    |
|  `2`  |   Z    |

#### Invert Axis {#light-rotation-event-boxes-mirror}

An integer value which determines whether the rotation should be mirrored.

### Light Rotation Events

An event which allows you to control the relative rotation of an object.

#### Beat Offset {#light-rotation-events-beat}

A specific point in time, relative to the starting beat of the group,
when this event should produce its effect.

#### Transition Type {#light-rotation-events-type}

An integer value which determines the behavior of the effect, relative to the previous effect.

| Value |   Result   | Behavior                                                     |
| :---: | :--------: | :----------------------------------------------------------- |
|  `0`  | Transition | The state transitions from the previous event to this event. |
|  `1`  |   Extend   | The state of the previous event is preserved.                |

#### Easing {#light-rotation-events-easing}

An integer value which determines the interpolation of the transition between states.

<!--@include: @/.assets/parts/easings.md-->

#### Magnitude {#light-rotation-events-magnitude}

A float value which controls the magnitude of rotation for the filtered objects.

#### Direction {#light-rotation-events-direction}

An integer value which determines the direction of rotation.

| Value |      Result       |
| :---: | :---------------: |
|  `0`  |     Automatic     |
|  `1`  |     Clockwise     |
|  `2`  | Counter-Clockwise |

#### Loop Count {#light-rotation-events-loop-count}

An integer value which controls the number of additional 360 degree rotations added to the magnitude of rotation.

## Light Translation Event Boxes

Allows you to control the translational properties of filtered environment objects.

::: code-group

```jsonc [3.2.0]
{
  "lightTranslationEventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "e": [
        {
          "f": {...}, // Index Filter
          "w": 1.0, // Beat Distribution: Value
          "d": 1, // Beat Distribution: Type
          "s": 1.0, // Gap Distribution: Value
          "t": 1, // Gap Distribution: Type
          "b": 1, // Gap Distribution: Affects First
          "i": 0, // Gap Distribution: Easing
          "a": 0, // Axis
          "r": 1, // Invert Axis
         // Light Translation Events
          "l": [
            {
              "b": 0.0, // Beat Offset
              "p": 0, // Transition Type
              "e": 1, // Easing
              "t": 100.0, // Magnitude
            }
          ]
        }
      ]
    }
  ]
}
```

```jsonc [4.0.0]
{
  "eventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "t": 3,
      "e": [
        {
          "f": 0, // Index Filter Metadata Index
          "e": 0, // Event Box Metadata Index
          "l": [
            {
              "b": 0.0, // Beat Offset
              "i": 0, // Event Metadata Indices
            }
          ],
        }
      ]
    }
  ],
  "indexFilters": [
    {...}
  ],
  "lightTranslationEventBoxes": [
    {
      "w": 1.0, // Beat Distribution: Value
      "d": 1, // Beat Distribution: Type
      "s": 1.0, // Gap Distribution: Value
      "t": 1, // Gap Distribution: Type
      "b": 1, // Gap Distribution: Affects First
      "e": 0, // Gap Distribution: Easing
      "a": 0, // Axis
      "f": 1, // Invert Axis
    }
  ],
  "lightTranslationEvents": [
    {
      "p": 0, // Transition Type
      "e": 1, // Easing
      "t": 100.0, // Magnitude
    }
  ],
}
```

:::

### Beat Distribution {#light-translation-event-boxes-beat-distribution}

Determines how the effects will be processed over time, in relation to the starting beat.

| Value | Result | Behavior                                     |
| :---: | :----: | :------------------------------------------- |
|  `1`  |  Wave  | After `w` beats, the last step takes effect. |
|  `2`  |  Step  | After `w` beats, the next step takes effect. |

### Gap Distribution {#light-translation-event-boxes-effect-distribution}

Determines how the translation of all filtered objects should be adjusted when iterating through the sequence.

| Value | Result | Behavior                                        |
| :---: | :----: | :---------------------------------------------- |
|  `1`  |  Wave  | The difference between the last and first step. |
|  `2`  |  Step  | The difference between each step.               |

#### Affects First {#light-translation-event-boxes-effect-distribution-affects-first}

A binary integer value (0 or 1) which determines whether the distribution should affect the first event in the sequence.

#### Easing {#light-translation-event-boxes-effect-distribution-easing}

An integer value which determines the interpolation of the distribution,
or the behavior for how to traverse the sequence.

<!--@include: @/.assets/parts/easings.md-->

### Axis {#light-translation-event-boxes-axis}

An integer value which controls the axis of translation.

| Value | Result |
| :---: | :----: |
|  `0`  |   X    |
|  `1`  |   Y    |
|  `2`  |   Z    |

#### Invert Axis {#light-translation-event-boxes-mirror}

An integer value which determines whether the translation should be mirrored.

### Light Translation Events

An event which allows you to control the relative position of an object.

#### Beat Offset {#light-translation-events-beat}

A specific point in time, relative to the starting beat of the group,
when this event should produce its effect.

#### Transition Type

An integer value which determines the behavior of the effect, relative to the previous effect.

| Value |   Result   | Behavior                                                     |
| :---: | :--------: | :----------------------------------------------------------- |
|  `0`  | Transition | The state transitions from the previous event to this event. |
|  `1`  |   Extend   | The state of the previous event is preserved.                |

#### Easing

An integer value which determines the interpolation of the transition between states.

<!--@include: @/.assets/parts/easings.md-->

#### Magnitude

A float value which controls the magnitude of translation for the filtered objects.

## FX Event Boxes

Allows you to control the predefined animations of filtered environment objects.

Unlike other event boxes in v3, the base events are referenced using a template-like syntax,
where all base events used by any event boxes are collectively defined in the corresponding "collection" array.
This allows the event box to pull its corresponding base event data from the collection via the "indices" defined.

For example, setting `l` to `[0, 1]` will pull the data from the first two base events defined in the collection,
where those base events will become children of the event box.

::: info
While v3 technically supports defining a collection of "integer" FX events,
their implementation went unused, and support was subsequently removed in v4.
:::

::: code-group

```jsonc [3.3.0]
{
  "vfxEventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "e": [
        {
          "f": {...}, // Index Filter
          "w": 1.0, // Beat Distribution: Value
          "d": 1, // Beat Distribution: Type
          "s": 1.0, // FX Distribution: Value
          "t": 1, // FX Distribution: Type
          "b": 1, // FX Distribution: Affects First
          "i": 0, // FX Distribution: Easing
          "l": [0], // Float FX Event Metadata Indices
        }
      ]
    },
  ],
  "_fxEventsCollection": {
    // Float FX Event Collection
    "_fl": [
      {
        "b": 0.0, // Beat Offset
        "p": 0, // Transition Type
        "i": 1, // Easing
        "v": 100.0, // Value
      }
    ],
    // Integer FX Event Collection
    "_il": []
  }
}
```

```jsonc [4.0.0]
{
  "eventBoxGroups": [
    {
      "b": 2.0,
      "g": 0,
      "t": 4,
      "e": [
        {
          "f": 0, // Index Filter Metadata Index
          "e": 0, // Event Box Metadata Index
          "l": [
            {
              "b": 0.0, // Beat Offset
              "i": 0, // Float FX Event Metadata Index
            }
          ],
        }
      ]
    }
  ],
  "indexFilters": [
    {...}
  ],
  "fxEventBoxes": [
    {
      "w": 1.0, // Beat Distribution: Value
      "d": 1, // Beat Distribution: Type
      "s": 1.0, // FX Distribution: Value
      "t": 1, // FX Distribution: Type
      "b": 1, // FX Distribution: Affects First
      "e": 0, // FX Distribution: Easing
    }
  ],
  "floatFxEvents": [
    {
      "p": 0, // Transition Type
      "e": 1, // Easing
      "v": 100.0, // Value
    }
  ],
}
```

:::

### Beat Distribution {#fx-event-boxes-beat-distribution}

Determines how the effects will be processed over time, in relation to the starting beat.

| Value | Result | Behavior                                     |
| :---: | :----: | :------------------------------------------- |
|  `1`  |  Wave  | After `w` beats, the last step takes effect. |
|  `2`  |  Step  | After `w` beats, the next step takes effect. |

### FX Distribution {#fx-event-boxes-effect-distribution}

Determines how the animation of all filtered objects should be adjusted when iterating through the sequence.

| Value | Result | Behavior                                        |
| :---: | :----: | :---------------------------------------------- |
|  `1`  |  Wave  | The difference between the last and first step. |
|  `2`  |  Step  | The difference between each step.               |

#### Affects First {#fx-event-boxes-effect-distribution-affects-first}

A binary integer value (0 or 1) which determines whether the distribution should affect the first event in the sequence.

#### Easing {#fx-event-boxes-effect-distribution-easing}

An integer value which determines the interpolation of the distribution,
or the behavior for how to traverse the sequence.

<!--@include: @/.assets/parts/easings.md-->

### Float FX Events

An event which allows you to control the animation state of an object.

#### Beat Offset {#float-fx-events-beat}

A specific point in time, relative to the starting beat of the group,
when this event should produce its effect.

#### Transition Type {#float-fx-events-type}

An integer value which determines the behavior of the effect, relative to the previous effect.

| Value |   Result   | Behavior                                                     |
| :---: | :--------: | :----------------------------------------------------------- |
|  `0`  | Transition | The state transitions from the previous event to this event. |
|  `1`  |   Extend   | The state of the previous event is preserved.                |

#### Easing {#float-fx-events-easing}

An integer value which determines the interpolation of the transition between keyframes.

<!--@include: @/.assets/parts/easings.md-->

#### Value {#float-fx-events-value}

A float value which controls the animation keyframe of filtered objects.

## Use Normal Events as Compatible Events

When `false`, all lighting events will be disabled
when overriding the environment to a different one than what was assigned in the [Info](./info.md) metadata.

Any environments that feature event box groups will have this setting disabled by default in the Official Editor,
while use of "legacy" environments will leave this setting enabled.

::: tip
Unlike the [basic lighting system](#basic-events), the [group lighting system](#event-box-groups) does not guarantee
that group assignments will be cross-compatible with other environments,
which may cause certain lightshows to produce unintended effects and unwanted behaviors as a result.

The motivation for this setting is to provide the mapper with an explicit means of indication
that their lightshow _will_ be cross-compatible with other environments,
as well as encourage the player to view the lightshow with the intended environment for the ideal experience.
:::

::: code-group

```jsonc [3.0.0]
{
  "useNormalEventsAsCompatibleEvents": true,
}
```

```jsonc [4.0.0]
{
  "useNormalEventsAsCompatibleEvents": true,
}
```

:::
