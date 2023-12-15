---
prev: false
next: false
description: Take a deep dive into the v2 difficulty file format for a Beat Saber map.
---

# Difficulty File (v2)

Each Difficulty Beatmap contains a corresponding file which defines the notes, obstacles, events,
and other objects for that particular difficulty.

## v2 Base Object

```json
{
  "_version": "2.6.0",
  "_notes": [],
  "_sliders": [], // Introduced in version 2.6.0
  "_obstacles": [],
  "_events": [],
  "_waypoints": [], // Introduced in version 2.2.0
  "_customData": {
    // Any custom data will go here.
    // If empty, this should be removed entirely.
  }
}
```

### \_version

This field describes the version of the map format we are using.

Version `2.6.0` was introduced in Beat Saber version 1.20.0.\
Version `2.5.0` was introduced in Beat Saber version 1.18.0.\
Version `2.2.0` was introduced in Beat Saber version 1.13.1.

### \_notes

This is an array of [Note](#notes-1) objects for the map.

### \_sliders

This is an array of [Slider](#sliders-3) objects for the map.

### \_obstacles

This is an array of [Obstacle](#obstacles-3) objects for the map.

### \_events

This is an array of [Event](#events-1) objects for the map.

### \_waypoints

:::tip NOTE
This is a stub section.
:::

### \_customData

This is an optional field that contains data unrelated to the official Beat Saber level format.
If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them.
As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber
community to find map editors, tools, or mods that use this `_customData` object.

## Notes

```json
{
  "_time": 10.0,
  "_lineIndex": 1,
  "_lineLayer": 0,
  "_type": 0,
  "_cutDirection": 1,
  "_customData": {
    // Any custom data will go here.
    // If empty, this should be removed entirely.
  }
}
```

### \_time

The time, in beats, where this object reaches the player.

### \_lineIndex

An integer number, from 0 to 3, which represents the column where this note is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

### \_lineLayer

An integer number, from 0 to 2, which represents the layer where this note is located.
The bottommost layer is located at layer 0, and inceases to the topmost layer located at index 2.

### \_type

This indicates the type of note there is. Currently, there are 4 known types, but 1 remains unused:

| `_type` | Result            |
| :-----: | ----------------- |
|   `0`   | Left (Red) Note   |
|   `1`   | Right (Blue) Note |
|   `2`   | Unused            |
|   `3`   | Bomb              |

### \_cutDirection

This indicates the cut direction for the note.

| `_cutDirection` | Result         |
| :-------------: | -------------- |
|       `0`       | Up             |
|       `1`       | Down           |
|       `2`       | Left           |
|       `3`       | Right          |
|       `4`       | Up Left        |
|       `5`       | Up Right       |
|       `6`       | Down Left      |
|       `7`       | Down Right     |
|       `8`       | Any (Dot Note) |

### \_customData

This is an optional field that contains data unrelated to the official Beat Saber level format.
If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them.
As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber
community to find map editors, tools, or mods that use this `_customData` object.

## Sliders

These describe arcs. If the head or tail of an arc matches a note's time and position, then the arc will connect with
the note and alter how the note is scored.

```json
{
  "_colorType": 1,
  "_headTime": 10.0,
  "_headLineIndex": 0,
  "_headLineLayer": 0,
  "_headControlPointLengthMultiplier": 1.0,
  "_headCutDirection": 0,
  "_tailTime": 20.0,
  "_tailLineIndex": 1,
  "_tailLineLayer": 1,
  "_tailControlPointLengthMultiplier": 1.0,
  "_tailCutDirection": 1,
  "_sliderMidAnchorMode": 0,
  "_customData": {
    // Any custom data will go here.
    // If empty, this should be removed entirely.
  }
}
```

### colorType

This indicates the color of the arc:

| `_colorType` | Result            |
| :----------: | ----------------- |
|      `0`     | Left (Red) Note   |
|      `1`     | Right (Blue) Note |

### headTime

The time, in beats, where this head of this object reaches the player.

### headLineIndex

An integer number, from 0 to 3, which represents the column where the head of the arc is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

### headLineLayer

An integer number, from 0 to 2, which represents the layer where the head of the arc is located.
The bottommost layer is located at layer 0, and inceases to the topmost layer located at index 2.

### headControlPointLengthMultiplier

A float which represents how far the arc goes from the head of the arc.
If head direction is a dot, this does nothing.

### headCutDirection

An integer number which represents the head direction of the arc.

| `_headCutDirection` | Result         |
| :-----------------: | -------------- |
|         `0`         | Up             |
|         `1`         | Down           |
|         `2`         | Left           |
|         `3`         | Right          |
|         `4`         | Up Left        |
|         `5`         | Up Right       |
|         `6`         | Down Left      |
|         `7`         | Down Right     |
|         `8`         | Any (Dot Note) |

### tailTime

The time, in beats, where this tail of this object reaches the player.

### tailLineIndex

An integer number, from 0 to 3, which represents the column where the tail of the arc is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

### tailLineLayer

An integer number, from 0 to 2, which represents the layer where the tail of the arc is located.
The bottommost layer is located at layer 0, and inceases to the topmost layer located at index 2.

### tailControlPointLengthMultiplier

A float which represents how far the arc goes from the tail of the arc.
If tail direction is a dot, this does nothing.

### tailCutDirection

An integer number which represents the tail direction of the arc.

| `_tailCutDirection` | Result         |
| :-----------------: | -------------- |
|         `0`         | Up             |
|         `1`         | Down           |
|         `2`         | Left           |
|         `3`         | Right          |
|         `4`         | Up Left        |
|         `5`         | Up Right       |
|         `6`         | Down Left      |
|         `7`         | Down Right     |
|         `8`         | Any (Dot Note) |

### sliderMidAnchorMode

An integer number which represents how the arc curves from the head to the mid point of the arc under certain conditions:

- Head and tail `LineIndex` are equal; and
- Head and tail `CutDirection` are equal **OR** their angle difference is 180

| `_sliderMidAnchorMode` | Result            |
| :--------------------: | ----------------- |
|           `0`          | Straight          |
|           `1`          | Clockwise         |
|           `2`          | Counter-Clockwise |

### customData

This is an optional field that contains data unrelated to the official Beat Saber level format.
If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them.
As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber
community to find map editors, tools, or mods that use this `_customData` object.

## Obstacles

```json
{
  "_time": 10.0,
  "_lineIndex": 1,
  "_type": 0,
  "_duration": 10.0,
  "_width": 1,
  "_customData": {
    // Any custom data will go here.
    // If empty, this should be removed entirely.
  }
}
```

### \_time

The time, in beats, where this object reaches the player.

### \_lineIndex

An integer number, from 0 to 3, which represents the column where the left side of the obstacle is located.
The far left column is located at index 0, and increases to the far right column located at index 3.

### \_type

An integer number which represents the state of the obstacle.

| `_type` | Result           |
| :-----: | ---------------- |
|   `0`   | Full height wall |
|   `1`   | Crouch/duck wall |

### \_duration

The time, in beats, that the obstacle extends for. While `_duration` can go into negative numbers,
be aware that this has some unintended effects.

### \_width

How many columns the obstacle takes up. A `_width` of `4` will mean that this wall will extend the entire playable grid.
While `_width` can go into negative numbers, be aware that this has some unintended effects.

### \_customData

This is an optional field that contains data unrelated to the official Beat Saber level format.
If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them.
As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber
community to find map editors, tools, or mods that use this `_customData` object.

## Events

```json
{
  "_time": 10,
  "_type": 1,
  "_value": 3,
  "_floatValue": 1.0, // Introduced in version 2.5.0
  "_customData": {
    // Any custom data will go here.
    // If empty, this should be removed entirely.
  }
}
```

### \_time

The time, in beats, where this object reaches the player.

### \_type

An integer number which represents what exact kind of event this object
represents.

The following are classical names for lanes numbers commonly used in
pre-Group Lighting System (pre-GLS) environments.

| `_type` | Name                          | Type                   |
| :-----: | ----------------------------- | ---------------------- |
|   `0`   | Back Lasers                   | Light                  |
|   `1`   | Ring Lights                   | Light                  |
|   `2`   | Left Lasers                   | Light                  |
|   `3`   | Right Lasers                  | Light                  |
|   `4`   | Center Lights                 | Light                  |
|   `5`   | Boost Colors                  | Boost / Unused (V3)    |
|   `8`   | Ring Spin                     | Trigger / Value        |
|   `9`   | Ring Zoom                     | Trigger / Value        |
|   `10`  | V1 BPM Changes / Extra Lights | V1 BPM / Light         |
|   `12`  | Left Laser Speed              | Value                  |
|   `13`  | Right Laser Speed             | Value                  |
|   `14`  | 360°/90° Early rotation       | Rotation / Unused (V3) |
|   `15`  | 360°/90° Late rotation        | Rotation / Unused (V3) |
|  `100`  | V2 BPM Changes                | BPM / Unused (V3)      |

:::danger
Just because an event type is listed as unused, does _not_ mean you are freely available to use it!

Beat Games is known to repurpose previously unused event types for certain features, such as the introduction of 360&deg;
/ 90&deg; levels. This has broken some Beat Saber maps that make use of legacy MediocreMapper BPM Changes, as well as maps
that used Custom Platforms that took advantage of the unused event types.
:::

### \_value

Depending on the aforementioned [`_type`](#type-2) of the event, the `_value` of it can do different things.

#### Controlling Lights

It's most common behavior is controlling brightness and color of lights, and follows this table:

| `_value` | Type       | Effect                                                                                |
| :------: | :--------- | ------------------------------------------------------------------------------------- |
|    `0`   | Off        | Turns the light group off.                                                            |
|    `1`   | On         | Changes the lights to blue, and turns the lights on.                                  |
|    `2`   | Flash      | Changes the lights to blue, and flashes brightly before returning to normal.          |
|    `3`   | Fade       | Changes the lights to blue, and flashes brightly before fading to black.              |
|    `4`   | Transition | (Previously Unused.)<br/>Changes the lights to blue by fading from the current state. |
|    `5`   | On         | Changes the lights to red, and turns the lights on.                                   |
|    `6`   | Flash      | Changes the lights to red, and flashes brightly before returning to normal.           |
|    `7`   | Fade       | Changes the lights to red, and flashes brightly before fading to black.               |
|    `8`   | Transition | Changes the lights to red by fading from the current state.                           |
|    `9`   | On         | Changes the lights to white, and turns the lights on.                                 |
|   `10`   | Flash      | Changes the lights to white, and flashes brightly before returning to normal.         |
|   `11`   | Fade       | Changes the lights to white, and flashes brightly before fading to black.             |
|   `12`   | Transition | Changes the lights to white by fading from the current state.                         |

`_value` 4 and 8 were introduced in Beat Saber version `1.18.0` (Billie Eilish patch). These transition events will only
transition from off, on, or other transition events. They will do nothing if the previous event is a fade or flash event.

`_value` 9, 10, 11, and 12 were introduced in Beat Saver version `1.22.0` (Electronic Mixtape patch).

#### Controlling Triggers

Triggers, most notably Ring Spin and Ring Zoom, ignore `_value`.

Ring Spin usually causes an object to spin to a random position. Ring Zoom
usually toggles an object between two states.

Events 16 and 17 in Interscope, which control car hydraulics, are triggers.

#### Controlling Laser Rotation Speed

When the event is used to control laser speed for a group of lights, the `_value`
is used as a multiplier to their base rotational velocity.

If `_value` is `0`, the random rotation offset for each laser will also be reset,
causing all rotating lasers to line up perfectly.

#### Controlling Position

When the event is used to control position of an object, the `_value`
is used as a multiplier to their base position increment.

Coil heights (Event 12, 13, 16, 17, 18 and 19) in Gaga and Ring Zoom
(Event 9) in The Second are examples of position controls.

#### Controlling Cars

In Interscope environment, Event 8 (Ring Spin) controls cars. The effect of
`_value` is as follows.

| `value` | Effect                                            |
| :-----: | ------------------------------------------------- |
|   `0`   | Affects all the cars. Does not affect hydraulics. |
|   `1`   | Affects all the cars.                             |
|   `2`   | Affects the left cars.                            |
|   `3`   | Affects the right cars.                           |
|   `4`   | Affects the front-most cars.                      |
|   `5`   | Affects the front-middle cars.                    |
|   `6`   | Affects the back-middle cars.                     |
|   `7`   | Affects the back-most cars.                       |

#### Controlling Boost Colors

| `_value` | Effect                                                            |
| :------: | ----------------------------------------------------------------- |
|    `0`   | Turns the event off - switches to first (default) pair of colors. |
|    `1`   | Turns the event on - switches to second pair of colors.           |

#### Controlling 360/90 Rotation

When the event is used to control rotation in a 360/90 degree level, the `_value`
is used to add rotation equal to the following table:

| `_value` | Effect                      |
| :------: | --------------------------- |
|    `0`   | 60 Degrees Counterclockwise |
|    `1`   | 45 Degrees Counterclockwise |
|    `2`   | 30 Degrees Counterclockwise |
|    `3`   | 15 Degrees Counterclockwise |
|    `4`   | 15 Degrees Clockwise        |
|    `5`   | 30 Degrees Clockwise        |
|    `6`   | 45 Degrees Clockwise        |
|    `7`   | 60 Degrees Clockwise        |

#### V1 Official BPM Changes

When the event is used to control the BPM, the `_value` represents the new BPM.

The new BPM does not shift internal [`_time`](#time-2) values for future objects. Instead, it essentially recalculates
internal game values (Such as Half Jump Duration and Jump Distance) to match the effect of playing the map at the new BPM.

One caveat to this is that the `_value` must _always_ be an integer, and does not support floating point numbers (No decimals).

:::danger NOTE

[Event 100](#official-bpm-changes) for V2 and [BPM Events](#bpm-events)
for V3 should be used instead.
:::

:::warning
As of Beat Saber `1.10.0`, V1 Official BPM Changes are broken, and
produce unwanted effects when used in a level.

If you absolutely want to work around this, you must create a new V1 BPM Change event so that:

1. This new event _must_ have the same exact [`_time`](#time-2) as the
   V1 BPM Change event you want to trigger correctly.
2. This new event _must_ have the same `_value` as the previous BPM Change,
   or the [`_beatsPerMinute`](#beatsperminute) defined in [`Info.dat`](#info-dat).
3. This new event _must_ occur before the BPM Change you want to trigger correctly,
   _even if they share the same [`_time`](#time-2) values._
   :::

Depending on the aforementioned [`_type`](#type-2) of the event, the `_floatValue` of it can do different things.

#### Controlling Lights

When the event is used to control lights, the `_floatValue` determines the brightness of the light.

#### Official BPM Changes

When the event is used to control the BPM, the `_floatValue` represents the new BPM.

This will also alter the Note Jump Speed proportional to the change in BPM prior to Beat Saber version 1.20.0.

### \_customData

This is an optional field that contains data unrelated to the official Beat Saber level format.
If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them.
As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber
community to find map editors, tools, or mods that use this `_customData` object.
