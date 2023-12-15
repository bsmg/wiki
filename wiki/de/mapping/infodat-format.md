---
prev: false
next: false
description: Take a deep dive into the Info.dat file format for a Beat Saber map.
---

# `Info.dat`

`Info.dat` is the main file for a Beat Saber map. It describes basic metadata about your map, as well as point to other
files to use for difficulties, cover art, and audio.

:::warning
It is extremely important that you get this correct, otherwise the map will fail to load in Beat Saber.
:::

## Info.dat Base Object

Here is the basic format for an `Info.dat` file. Notice how difficulty beatmap sets are omitted;
they'll be explained later down this page.

```json
{
  "_version": "2.1.0",
  "_songName": "Example Song",
  "_songSubName": "",
  "_songAuthorName": "Song Artist",
  "_levelAuthorName": "You",
  "_beatsPerMinute": 120,
  "_shuffle": 0.0,
  "_shufflePeriod": 0.5,
  "_previewStartTime": 31.5,
  "_previewDuration": 7.0,
  "_songFilename": "song.ogg",
  "_coverImageFilename": "cover.jpg",
  "_environmentName": "BigMirrorEnvironment",
  "_allDirectionsEnvironmentName": "GlassDesertEnvironment",
  "_songTimeOffset": 0.0,
  "_environmentNames": [], // Introduced in version 2.1.0
  "_colorSchemes": [], // Introduced in version 2.1.0
  "_customData": {
    // Any custom data will go here.
    // If empty, this should be removed entirely.
  },
  "_difficultyBeatmapSets": [
    // Difficulty beatmap sets (and difficulty beatmaps) are explained later down the page.
    // Check the sidebar!
  ]
}
```

### \_version

This field describes the version of the map format we are using. Currently, Beat Saber's map info format is on version `2.1.0`.

Version `2.1.0` was introduced in Beat Saber version 1.31.0.

### \_songName

This field describes the name of your song.

### \_songSubName

This field describes any additional titles that could go into your song. These can include the following:

- Additional artists (Such as featured artists)
- Any variation in production (Song remix, VIP, etc.)

### \_songAuthorName

This field describes the main artist, group, band, brand, etc. for the song.

### \_levelAuthorName

This field describes the person who created the map. That's you! Or, whoever makes a map using your tool or level editor.

### \_beatsPerMinute

This describes the Beats Per Minute (BPM) of your song. This is a floating point number, so decimal BPMs are supported.

### \_shuffle

This and [`_shufflePeriod`](#shuffleperiod) are uncommon in the community. If your song has "swing" in it, where some beats
in a measure are intentionally offset from the rest, you can correct potential timing issues in your map by utilizing
`_shuffle` and [`_shufflePeriod`](#shuffleperiod).

`_shuffle` indicates how far objects will move when they are determined to be on a swing beat. A positive value means
they will be shifted forward in time, and a negative value means they will be shifted back in time.

The total amount they will be offset by is described in [`_shufflePeriod`](#shuffleperiod),
since they both work together to produce that value.

### \_shufflePeriod

`_shufflePeriod` is used to determine _when_ a swing beat will occur. More specifically, it is the time (in beats)
where a swing beat will occur.

But unfortunately, it's more complicated than this. Beat Saber alternates between a swing beat and a non swing beat using
this value. For example, let's assume you have a `_shufflePeriod` of `0.25`. This tells Beat Saber that, every `0.25`
beats, it will alternate between a swing beat and a non swing beat, and will apply an offset if it lands on a swing beat.

The offset value that will be applied to objects on a swing beat is approximately equal to `_shuffle * _shufflePeriod` beats.

To hopefully help better understand this, here is a table of beats, whether or not they are on a swing beat, and the
_actual_ beat objects at those times will spawn in at. For this example, we will assume that [`_shuffle`](#shuffle)
is `0.2`, and `_shufflePeriod` is `0.25`.

| Beat from Map File | Is Swing Beat? | Resulting Beat |
| ------------------ | -------------- | -------------- |
| 0                  | No             | 0              |
| 0.25               | Yes            | 0.3            |
| 0.5                | No             | 0.5            |
| 0.75               | Yes            | 0.8            |
| 1                  | No             | 1              |
| 1.25               | Yes            | 1.3            |
| 1.5                | No             | 1.5            |
| 1.75               | Yes            | 1.8            |

### \_previewStartTime

This controls the start time (in seconds) for the in-game preview of your map.
This is a floating point number, so decimals are supported.

### \_previewDuration

This controls the duration (in seconds) of the in-game preview of your map.
This is a floating point number, so decimals are supported.

### \_songFilename

This is the local location to your map's audio file. The standard practice is to have every map file in the same directory,
so in most cases, this is just the name and extension for your audio file (For example, `song.ogg`).

### \_coverImageFilename

This is the local location to your map's cover image. Both `.jpg` and `.png` are supported image types. Similar to
[`_songFilename`](#songfilename), this is most often just the name and extension for the cover image (For example, `cover.jpg`).

### \_environmentName

This defines the internal ID for the environment that the map uses. To get a complete list of valid environments, see the
`Info.dat` names of each environment in the [Environment Previews section](./basic-lighting.md#environment-previews).

### \_allDirectionsEnvironmentName

This defines the internal ID for the environment that the map uses when playing in 360 Degree or 90 Degree levels. This
is a required field, even if the level does not include any 360 or 90 Degree difficulties. To get a complete list of valid
360 environments, see the `Info.dat` names of each environment in the [Environment Previews section](./basic-lighting.md#environment-previews).

### \_songTimeOffset

This is Beat Saber's method for tackling off-sync audio. This offsets the audio in game,
based off the value of `_songTimeOffset` in seconds.

:::warning
Hit sounds are also affected by the same offset. We recommend the mapper sync up their audio file _before_ mapping, as
described in the [Basic Audio Setup guide](./basic-audio.md), to circumvent any need for `_songTimeOffset` and related alternatives.
:::

### \_environmentNames

This defines a list of internal ID for the environments that the map uses. To get a complete list of valid environments,
see the `Info.dat` names of each environment in the [Environment Previews section](./basic-lighting.md#environment-previews).

### \_colorSchemes

This defines a list of [Color Schemes](#color-schemes) that the map uses.

### \_customData

This is an optional field that contains data unrelated to the official Beat Saber level format.
If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them.
As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber
community to find map editors, tools, or mods that use this `_customData` object.

### \_difficultyBeatmapSets

This is an array of all [Difficulty Beatmap Sets](#difficulty-beatmap-sets) defined in the map.

### Color Schemes

```json
{
  "useOverride": true,
  "colorScheme": {
    "colorSchemeId": "Hello world!",
    "saberAColor": {
      "r": 1.0,
      "g": 0.0,
      "b": 0.0,
      "a": 1.0
    },
    "saberBColor": {
      "r": 0.0,
      "g": 1.0,
      "b": 0.0,
      "a": 1.0
    },
    "obstaclesColor": {
      "r": 0.0,
      "g": 0.0,
      "b": 0.0,
      "a": 1.0
    },
    "environmentColor0": {
      "r": 0.0,
      "g": 0.0,
      "b": 0.0,
      "a": 1.0
    },
    "environmentColor1": {
      "r": 0.0,
      "g": 0.0,
      "b": 0.0,
      "a": 1.0
    },
    "environmentColor0Boost": {
      "r": 0.0,
      "g": 0.0,
      "b": 0.0,
      "a": 1.0
    },
    "environmentColor1Boost": {
      "r": 0.0,
      "g": 0.0,
      "b": 0.0,
      "a": 1.0
    }
  }
}
```

### useOverride

A boolean which determines if the color scheme is used. If this is false, [colorScheme](#colorscheme) values are ignored
and will use the environment's color scheme.

### colorScheme

An object which contains information on the color scheme the difficulty beatmap can use. `colorSchemeId` has no in-game
effect and is only used for label UI in the official editor. Colors are described by the value of the red, green, blue,
and alpha components.

| Name                     | Effect                               |
| :----------------------- | ------------------------------------ |
| `saberAColor`            | The color of the left saber.         |
| `saberBColor`            | The color of the right saber.        |
| `obstaclesColor`         | The color of the obstacles.          |
| `environmentColor0`      | The color of the "Red" event.        |
| `environmentColor1`      | The color of the "Blue" event.       |
| `environmentColor0Boost` | The boost color of the "Red" event.  |
| `environmentColor1Boost` | The boost color of the "Blue" event. |

### Difficulty Beatmap Sets

Difficulty Beatmap Sets are groups of difficulties, all under one characteristic.
These represent your Standard, No Arrow, One Saber, and other characteristics.

```json
{
  // ... Rest of Info.dat ...
  "_songTimeOffset": 0.0,
  "_difficultyBeatmapSets": [
    {
      "_beatmapCharacteristicName": "Standard",
      "_difficultyBeatmaps": [
        // Difficulty beatmap are explained later down the page.
        // Check the sidebar!
      ]
    }
  ]
}
```

### \_beatmapCharacteristicName

This is the name of the characteristic attached to this beatmap set.

Listed below is all commonly used characteristics. While they have little to no "rules" attached to them in Beat Saber,
they still have an intended purpose, and should be followed by both the map editor and the mapper creating maps.

Certain characteristics, which are marked in the list below, do not belong to the base game; rather, they are added by
external mods such as SongCore. These modded characteristics will only work if the user has installed mods that add them,
and will _not_ appear on unmodded copies of Beat Saber and could cause the map to not load.

<!-- prettier-ignore -->

| Characteristic Name | Included in Base Game | Intended Purpose                                                                           |
| :-----------------: | :-------------------: | ------------------------------------------------------------------------------------------ |
|      `Standard`     |           ✔️          | Vanilla maps following standard mapping guidelines.                                        |
|      `NoArrows`     |           ✔️          | Restrict notes to Dot (any direction) notes.                                               |
|      `OneSaber`     |           ✔️          | Restrict notes to Right (Blue) notes, and disables the Left (Red) saber.                   |
|     `360Degree`     |           ✔️          | Enables rotation events, with no restriction on total rotation.                            |
|      `90Degree`     |           ✔️          | Enables rotation events, but restricts total rotation to 45 degrees to the left and right. |
|       `Legacy`      |           ✔️          | Old versions of standard maps. Introduced in Beat Saber version 1.31.0.                    |
|     `Lightshow`     |           ❌           | Place for maps that only contains lighting events.                                         |
|      `Lawless`      |           ❌           | Modded maps and modcharts can safely go here. No rules should apply.                       |

### \_difficultyBeatmaps

This is an array of [Difficulty Beatmaps](#difficulty-beatmaps) defined within this beatmap set.

### Difficulty Beatmaps

Difficulty Beatmaps are each "Difficulty" of a map. They contain information that changes from difficulty to difficulty,
such as [Note Jump Speed](#notejumpmovementspeed), and the location of the difficulty file.

```json
{
  // ... Rest of Info.dat ...
  "_songTimeOffset": 0.0,
  "_difficultyBeatmapSets": [
    {
      "_beatmapCharacteristicName": "Standard",
      "_difficultyBeatmaps": [
        {
          "_difficulty": "ExpertPlus",
          "_difficultyRank": 9,
          "_beatmapFilename": "StandardExpertPlus.dat",
          "_noteJumpMovementSpeed": 18.0,
          "_noteJumpStartBeatOffset": 0.0,
          "_beatmapColorSchemeIdx": 0, // Introduced in version 2.1.0
          "_environmentNameIdx": 0, // Introduced in version 2.1.0
          "_customData": {
            // Any custom data will go here.
            // If empty, this should be removed entirely.
          }
        }
      ]
    }
  ]
}
```

### \_difficulty

This is the internal difficulty, read by Beat Saber.

Contrary to what you might think, this is _not_ just a normal string, but rather an Enum. Here is a list of all valid difficulties:

- `Easy`
- `Normal`
- `Hard`
- `Expert`
- `ExpertPlus`

### \_difficultyRank

This is the sorting order in the song select screen in Beat Saber.

While, yes, this is an ordinary integer, the widely-used [BeatSaver Schema](#beatsaver-schema) makes this another Enum,
based off of the aforementioned [`_difficulty`](#difficulty) value:

| `_difficulty` | BeatSaver's Expected `_difficultyRank` |
| ------------- | :------------------------------------: |
| `Easy`        |                    1                   |
| `Normal`      |                    3                   |
| `Hard`        |                    5                   |
| `Expert`      |                    7                   |
| `ExpertPlus`  |                    9                   |

### \_beatmapFilename

This is the local location to the difficulty file, which contains the difficulty's notes, obstacles, and lighting events.

Similar to the [`_songFilename`](#songfilename) and [`_coverImageFilename`](#coverimagefilename) from earlier, in most
cases this is just the name and extension (always `.dat`) to the map file.

When creating _new_ difficulties, it is recommended that the name be the Characteristic name for this difficulty's parent
[Beatmap Set](#difficulty-beatmap-sets), followed by the [`_difficulty`](#difficulty) value. For example, this particular
difficulty should have it's difficulty file be named `StandardExpertPlus.dat`.

### \_noteJumpMovementSpeed

Note Jump Movement Speed (Shortened to "Note Jump Speed", or just "NJS") is the velocity of objects approaching the player,
in meters per second. Info on recommended NJS values can be found on the
[Intermediate Mapping Page](./intermediate-mapping.md#note-jump-speed-spawn-distance).
This can be a floating point number for precise velocity.

This is used, along with the defined BPM of the song, to calculate 2 very important values,
called Jump Duration and Jump Distance.

- Jump Duration is the amount of beats where objects can be active.
- Jump Distance is the total amount of distance that objects need to travel within that Jump Duration.

The Player rests in the exact middle of both of these values, so most mappers find
it more convenient to have Half Jump Distance and Half Jump Duration.

- Half Jump Distance is the distance from the Player that objects spawn. Some mappers refer to this as the "Spawn Point".
- Half Jump Duration is the amount of beats that is needed to reach the Player. It is also the amount of beats,
  forward in time, where objects spawn.

### \_noteJumpStartBeatOffset

This value acts as a direct offset to the Half Jump Duration, explained in [`_noteJumpMovementSpeed`](#notejumpmovementspeed),
which in turn affects the Jump Distance. This can be a floating point number to achieve a precise Jump Duration.

### \_beatmapColorSchemeIdx

The value determines by index which color scheme in the [`_colorSchemes`](#color-schemes) list to use. If a color scheme
cannot be found, this will fallback to the color scheme of the selected environment.

### \_environmentNameIdx

This value determines by index which environment in the [`_environmentNames`](#_environmentnames) list to use. If an
environment name cannot be found, this will fallback to the environment listed in [`_environmentName`](#_environmentname).

### \_customData

This is an optional field that contains data unrelated to the official Beat Saber level format.
If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them.
As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber
community to find map editors, tools, or mods that use this `_customData` object.
