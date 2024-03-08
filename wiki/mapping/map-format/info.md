---
---

# Info

The `Info.dat` file is the main entry point for your Beat Saber map. It describes basic metadata about your song,
as well as point to other files such as beatmaps, lightshows, cover art, audio data, and other references.

:::: details Sample Data
::: code-group
<<< @/.assets/snippets/info/2.0.0.dat{json} [2.0.0]
<<< @/.assets/snippets/info/2.1.0.dat{json} [2.1.0]
<<< @/.assets/snippets/info/4.0.0.dat{json} [4.0.0]
:::
::::

## Summary

::: tabs

== 2.0.0
Introduced in **1.0.0**

- A field is available to credit the [level designer](#beatmap-authors) for the map.
- The [audio path](#audio-filenames) is assigned at the top level, and applies for all difficulties.
- All beatmaps are organized into "[sets](#beatmap-sets)",
  which allow for parent-level assignment of characteristic metadata.

== 2.1.0
Introduced in **1.31.0**

- Added support for per-beatmap [environments](#environments) and [color schemes](#color-schemes)
  via a new template-like syntax.

== 4.0.0
Introduced in **1.34.5**

- The [song duration](#song-duration) is explicitly defined in the metadata
  to proper display the duration on the selection list in-game.
- A reference to the [Audio](./audio.md) metadata file is required for serialization of BPM changes and LUFS data.
- The file used for the in-game preview is defined separately from the primary audio file.
- Support for [Song Time Offset](#song-time-offset) and [Shuffle](#shuffle) was removed.
- All beatmaps are once again co-located in a flat collection.
- [Mappers and lighters](#beatmap-authors) are individually credited on a per-beatmap basis.

:::

## Song Metadata

### Song Title

The title of your song.

::: code-group

```jsonc [2.0.0]
{
  "_songName": "Example",
}
```

```jsonc [4.0.0]
{
  "song": {
    "title": "Example",
  },
}
```

:::

### Song Subtitle

The subtitle of your song, which may indicate any additional collaborators or alternative arrangements.

::: code-group

```jsonc [2.0.0]
{
  "_songSubName": "Example",
}
```

```jsonc [4.0.0]
{
  "song": {
    "subTitle": "Example",
  },
}
```

:::

### Song Author

The artist(s) of your song.

::: code-group

```jsonc [2.0.0]
{
  "_songAuthorName": "Example",
}
```

```jsonc [4.0.0]
{
  "song": {
    "author": "Example",
  },
}
```

:::

## Related Files

::: info
All filename references are assumed to be located in the same relative directory as the info file.
:::

### Audio Filename(s)

The audio file(s) associated with your map.

While `wav` files are technically supported in the Official Editor,
`ogg` files are generally recommended for uploading to BeatSaver.

::: tip
For v4, two separate files are explicitly defined:

- The "primary" file, which is used when playing your song and processing BPM and LUFS data.
- The "preview" file, which is used for the in-game preview when selecting your song.

While the base game parses two separate audio files for all OST and DLC levels,
these two files will more often point to the same file in the context of custom levels.
:::

::: code-group

```jsonc [2.0.0]
{
  "_songFilename": "song.ogg",
}
```

```jsonc [4.0.0]
{
  "audio": {
    "songFilename": "song.ogg",
  },
  "songPreviewFilename": "song.ogg",
}
```

:::

### Cover Image Filename

A cover image that displays alongside the song metadata in the selection menu.

All cover images should be in `png`, `jpeg`, or `jpg` format.
When uploading to BeatSaver,
it is advised to set your cover image to a square aspect ratio and a width/height no smaller than `256px`.

::: code-group

```jsonc [2.0.0]
{
  "_coverImageFilename": "cover.png",
}
```

```jsonc [4.0.0]
{
  "coverImageFilename": "cover.png",
}
```

:::

## Audio Metadata

### BPM

A value which dictates how the grid will align with your audio file.

::: code-group

```jsonc [2.0.0]
{
  "_beatsPerMinute": 120.0,
}
```

```jsonc [4.0.0]
{
  "audio": {
    "bpm": 120.0,
  },
}
```

:::

### Integrated LUFS {#lufs-data-integrated}

A value which controls the overall loudness of the audio file.

::: code-group

```jsonc [4.0.0]
{
  "audio": {
    "lufs": 0.0,
  },
}
```

:::

### Song Duration

A value (in seconds) which caches the length of the audio file.

This is used to properly display the duration of the song on the selection screen on un-modded instances.

::: info
For v3 and earlier,
modded instances will display the duration of the song on the selection menu,
despite not being explicitly defined anywhere in the metadata.
This behavior is _exclusively_ provided by SongCore/PinkCore, and will not work properly on un-modded instances.
:::

::: code-group

```jsonc [4.0.0]
{
  "audio": {
    "songDuration": 202.0,
  },
}
```

:::

### Song Time Offset

A value (in seconds) that delays when the audio starts in relation to the beatmap.

::: warning
These fields are deprecated due to unstable behavior in recent versions of the game, and are unsupported starting from v4.
:::

::: code-group

```jsonc [2.0.0]
{
  "_songTimeOffset": 0.0,
}
```

:::

### Shuffle

Allows you to define "swing" timings across all beatmaps while preserving the natural timings in-editor.

::: warning
These fields are deprecated due to unstable behavior in recent versions of the game, and are unsupported starting from v4.
:::

::: code-group

```jsonc [2.0.0]
{
  "_shuffle": 0.0,
  "_shufflePeriod": 0.0,
}
```

:::

### Song Preview

Allows you to define a shortened version of your audio track, which will play when selecting your map in-game.

::: code-group

```jsonc [2.0.0]
{
  "_previewStartTime": 10.0,
  "_previewDuration": 12.0,
}
```

```jsonc [4.0.0]
{
  "audio": {
    "previewStartTime": 10.0,
    "previewDuration": 12.0,
  },
}
```

:::

### Environments

The surrounding world that a player is within when playing a map,
which can be defined on a global level _or_ per-beatmap basis.

- In v4 and later, all environments should be defined using a template-like syntax,
  where each beatmap will pull its corresponding environment from the "collection" array at the specified "index".
- For v2, if the template-like syntax is used, it will take priority over the top-level environment definition.

::: code-group

```jsonc [2.0.0]
{
  "_environmentName": "DefaultEnvironment",
  "_allDirectionsEnvironmentName": "GlassDesertEnvironment",
}
```

```jsonc [2.1.0]
{
  "_environmentName": "DefaultEnvironment",
  "_allDirectionsEnvironmentName": "GlassDesertEnvironment",
  "_environmentNames": ["DefaultEnvironment", "GlassDesertEnvironment"], // Collection
  "_difficultyBeatmapSets": [
    {
      "difficultyBeatmaps": [
        {
          "environmentNameIdx": 0, // Index
        },
      ],
    },
  ],
}
```

```jsonc [4.0.0]
{
  "environmentNames": ["DefaultEnvironment", "GlassDesertEnvironment"], // Collection
  "difficultyBeatmaps": [
    {
      "environmentNameIdx": 0, // Index
    },
  ],
}
```

:::

### Color Schemes

The color palette used across in-game objects,
which can be defined on a per-beatmap level using the same template-like index as defined for the environments.

All color properties are normalized to a range of `0-1`.

::: warning
Any colors in a scheme that are not defined will appear as a "null" color in-game, and may cause unintended effects.
:::

::: danger
For v4, **you must define at least one valid color scheme for your map to load properly**,
regardless of whether the map explicitly sets a color scheme override.
:::

::: code-group

```jsonc [2.1.0]
{
  "_colorSchemes": [
    {
      "useOverride": true,
      "colorScheme": {
        "colorSchemeId": "Weave",
        "saberAColor": {
          "r": 0.7843137,
          "g": 0.07843138,
          "b": 0.07843138,
          "a": 1,
        },
        "saberBColor": {
          "r": 0.1568627,
          "g": 0.5568627,
          "b": 0.8235294,
          "a": 1,
        },
        "environmentColor0": {
          "r": 0.85,
          "g": 0.08499997,
          "b": 0.08499997,
          "a": 1,
        },
        "environmentColor1": {
          "r": 0.1882353,
          "g": 0.675294,
          "b": 1,
          "a": 1,
        },
        "obstaclesColor": {
          "r": 1,
          "g": 0.1882353,
          "b": 0.1882353,
          "a": 1,
        },
        "environmentColor0Boost": {
          "r": 0.8218409,
          "g": 0.08627451,
          "b": 0.8509804,
          "a": 1,
        },
        "environmentColor1Boost": {
          "r": 0.5320754,
          "g": 0.5320754,
          "b": 0.5320754,
          "a": 1,
        },
      },
    },
  ],
  "_difficultyBeatmapSets": [
    {
      "_difficultyBeatmaps": [
        {
          "_beatmapColorSchemeIdx": 0,
        },
      ],
    },
  ],
}
```

```jsonc [4.0.0]
{
  "colorSchemes": [
    {
      "useOverride": true,
      "colorScheme": {
        "colorSchemeName": "Weave",
        "saberAColor": {
          "r": 0.7843137,
          "g": 0.07843138,
          "b": 0.07843138,
          "a": 1,
        },
        "saberBColor": {
          "r": 0.1568627,
          "g": 0.5568627,
          "b": 0.8235294,
          "a": 1,
        },
        "environmentColor0": {
          "r": 0.85,
          "g": 0.08499997,
          "b": 0.08499997,
          "a": 1,
        },
        "environmentColor1": {
          "r": 0.1882353,
          "g": 0.675294,
          "b": 1,
          "a": 1,
        },
        "obstaclesColor": {
          "r": 1,
          "g": 0.1882353,
          "b": 0.1882353,
          "a": 1,
        },
        "environmentColor0Boost": {
          "r": 0.8218409,
          "g": 0.08627451,
          "b": 0.8509804,
          "a": 1,
        },
        "environmentColor1Boost": {
          "r": 0.5320754,
          "g": 0.5320754,
          "b": 0.5320754,
          "a": 1,
        },
      },
    },
  ],
  "difficultyBeatmaps": [
    {
      "beatmapColorSchemeIdx": 0,
    },
  ],
}
```

:::

::: tip
For `2.0.0` format, additional support for per-beatmap color schemes and "white" color overrides are provided by the
[SongCore](https://github.com/Kylemc1413/SongCore) and
[PinkCore](https://github.com/ModdingPink/PinkCore) mods respectively.
You can refer to their documentation for more details.
:::

## Beatmap Metadata

A "beatmap" refers to the individual levels associated with a map,
organized by their [characteristic](#characteristic) and [difficulty](#difficulty).

### Beatmap Sets

For v2, all beatmaps are grouped into "sets",
which dictate corresponding behaviors to apply at a higher level to all beatmaps located within that set.

Support for beatmap sets was subsequently removed in v4,
due to set-specific behaviors being exclusively controlled by the defined characteristic
and no additional fields being introduced for beatmap sets throughout the lifetime of the schema.

::: code-group

```jsonc [2.0.0]
{
  "_difficultyBeatmapSets": [
    {
      "_difficultyBeatmaps": [...],
    },
  ],
}
```

```jsonc [4.0.0]
{
  "difficultyBeatmaps": [...],
}
```

:::

### Beatmap Filename

The level file associated with your map.
Must point to a valid JSON file.

::: info
Starting from v4, all corresponding beatmap data will be divided into two separate files:

- A [Beatmap](./beatmap.md) file, for interactable objects (such as notes and obstacles).
- A [Lightshow](./lightshow.md) file, for non-interactable objects (such as lighting and environment effects).

:::

::: info
If a v2 or v3 beatmap file is defined, the lightshow file will subsequently be ignored,
since v2 and v3 beatmap files already contain the relevant lighting objects for the beatmap.
:::

::: code-group

```jsonc [2.0.0]
{
  "_difficultyBeatmapSets": [
    {
      "_difficultyBeatmaps": [
        {
          "_beatmapFilename": "Easy.dat",
        },
      ],
    },
  ],
}
```

```jsonc [4.0.0]
{
  "difficultyBeatmaps": [
    {
      "beatmapDataFilename": "Easy.dat",
      "lightshowDataFilename": "Lightshow.dat",
    },
  ],
}
```

:::

### Characteristic

A value which groups beatmaps into unique categories and applies specialized behaviors to those affected beatmaps.

The list of acceptable values and their corresponding behaviors are listed below:

<!-- markdownlint-disable MD013 -->

|    Name     |            Behavior            |
| :---------: | :----------------------------: |
| `Standard`  |      No special behavior.      |
| `NoArrows`  |      No special behavior.      |
| `OneSaber`  | Disables the Left (Red) saber. |
| `360Degree` |    Uses rotation behaviors.    |
| `90Degree`  |    Uses rotation behaviors.    |
|  `Legacy`   |      No special behavior.      |

<!-- markdownlint-enable MD013 -->

::: danger
Some mods may add additional characteristics that are not supported within the base game,
such as SongCore's `Lightshow` and `Lawless` characteristics.

When loading maps with these characteristics on un-modded versions of the game,
affected maps will not be compatible with the Official Editor,
and affected beatmaps may be filtered out of the available difficulties for the player to select in-game
or fail to load correctly on un-modded instances.
:::

::: code-group

```jsonc [2.0.0]
{
  "_difficultyBeatmapSets": [
    {
      "_beatmapCharacteristicName": "Standard",
    },
  ],
}
```

```jsonc [4.0.0]
{
  "difficultyBeatmaps": [
    {
      "characteristic": "Standard",
    },
  ],
}
```

:::

### Difficulty

A cosmetic label to indicate the overall difficulty of the beatmap, relative to its characteristic.

If a "rank" is needed, the rank will determine how the difficulties are sorted on the selection menu.
These ranks are usually invisible to the player and hardcoded or autopopulated by most editors or future schemas.

The list of acceptable values and their corresponding ranks are listed below:

<!-- markdownlint-disable MD013 -->

|   Name    | Rank |
| :-------: | :--: |
|  `Easy`   |  1   |
| `Normal`  |  3   |
|  `Hard`   |  5   |
| `Expert`  |  7   |
| `Expert+` |  9   |

<!-- markdownlint-enable MD013 -->

::: code-group

```jsonc [2.0.0]
{
  "_difficultyBeatmapSets": [
    {
      "_difficultyBeatmaps": [
        {
          "_difficulty": "Easy",
          "_difficultyRank": 1,
        },
      ],
    },
  ],
}
```

```jsonc [4.0.0]
{
  "difficultyBeatmaps": [
    {
      "difficulty": "Easy",
    },
  ],
}
```

:::

### Beatmap Authors

The designer(s) of the beatmap, including any contributing mappers and lighters.

Starting from v4, this field is no longer defined on a global level,
and you can explicitly credit the individual mappers and lighters for your map on a per-beatmap basis.

::: code-group

```jsonc [2.0.0]
{
  "_levelAuthorName": "Freeek",
}
```

```jsonc [4.0.0]
{
  "difficultyBeatmaps": [
    {
      "beatmapAuthors": {
        "mappers": ["Freeek"],
        "lighters": ["Freeek"],
      },
    },
  ],
}
```

:::

### Note Jump Metadata

A series of parameters that determine how interactable objects in the beatmap will move towards the player.

For more detailed explanations of how these values affect gameplay, you can refer to the
[Basic](../basic-mapping.md#note-jump-speed) and [Intermediate](../intermediate-mapping.md#note-jump-speed--jump-distance)
mapping pages.

::: code-group

```jsonc [2.0.0]
{
  "_difficultyBeatmapSets": [
    {
      "_difficultyBeatmaps": [
        {
          "_noteJumpMovementSpeed": 18.0,
          "_noteJumpStartBeatOffset": 0.5,
        },
      ],
    },
  ],
}
```

```jsonc [4.0.0]
{
  "difficultyBeatmaps": [
    {
      "noteJumpMovementSpeed": 18.0,
      "noteJumpStartBeatOffset": 0.5,
    },
  ],
}
```

:::
