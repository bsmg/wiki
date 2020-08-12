---
sidebar: auto
prev: ./intermediate-mapping.md
next: false
description: Take a deep dive into the format for a Beat Saber map. 
---
# Map Format

Sometimes, available tools and map editors do not provide some functionality that you need, and you need to take matters into your own hands. Other times, you'd like to create your own just for various other reasons. One problem, though. What exactly goes into a map file? This is important to understand when developing new tools and editors.

This page will help you understand the internal workings of a full Beat Saber map, and provide information about what each property and value represents.

## !Notice! This is a Stub Page
:::warning
This is a stub page, content is a work in progress! Ask in `#mapping-discussion` if you want more info!
:::

# Info.dat
`Info.dat` is the main file for a Beat Saber map. It describes basic metadata about your map, as well as point to other files to use for difficulties, cover art, and audio.

It is extremely important that you get this correct, otherwise the level will fail to load in Beat Saber.

## Base Object

Here is the basic format for an `Info.dat` file. Notice how difficulty beatmap sets are ommitted; they'll be explained later down this page.

```json
{
    "_version": "2.0.0",
    "_songName": "Example Song",
    "_songSubName": "Remixed by Some Other Artist",
    "_songAuthorName": "Original Song Artist",
    "_levelAuthorName": "You",
    "_beatsPerMinute": 120,
    "_shuffle": 0,
    "_shufflePeriod": 0.5,
    "_previewStartTime": 31.5,
    "_previewDuration": 7,
    "_songFilename": "song.ogg",
    "_coverImageFilename": "cover.jpg",
    "_environmentName": "BigMirrorEnvironment",
    "_allDirectionsEnvironmentName" : "GlassDesertEnvironment",
    "_songTimeOffset": 0,
    "_customData": {
        // Any custom data will go here. If empty, this should be removed entirely.
    },
    "_difficultyBeatmapSets": [
        // Difficulty beatmap sets (and difficulty beatmaps) are explained later down the page. Check the sidebar!
    ]
}
```

### _version
This field describes the version of the map format we are using. Currently, Beat Saber's map format is on version `2.0.0`.

### _songName
This field describes the name of your song.

### _songSubName
This field describes any additional titles that could go into your song. These can include the following:

- Additional artists (Such as featured artists)
- Any variation in production (Song remix, VIP, etc.)

This can be safely left blank.

### _songAuthorName
This field describes the main artist, group, band, brand, etc. for the song. This can be safely left blank, but is unrecommened.

### _levelAuthorName
This field describes the person who created the map. That's you! Or, whoever makes a map using your tool or level editor. This can be safely left blank, but is unrecommended.

### _beatsPerMinute
This describes the Beats Per Minute (BPM) of your song.

### _shuffle
:::warning
Information about this field can be incorrect. If corrections need to be made, please use the [feedback form](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform) or create an issue on the [BSMG Wiki repository](https://github.com/bsmg/wiki).
:::

This and `_shufflePeriod` are uncommon in the community. If your song has "swing" in it, where some beats in a measure are offset from the rest, you can correct potential timing issues in your map by utilizing `_shuffle` and `_shufflePeriod`.

`_shuffle` indicates how far objects will move when they are determined to be on a swing beat. A positive value means they will be shifted forward in time, and a negative value means they will be shifted back in time.

The total amount they will be offset by will be described when covering `_shufflePeriod`, since they both work together to produce that value.

### _shufflePeriod
`_shufflePeriod` is used to determine *when* a swing beat will occur. More specifically, it is the time (in beats) where a swing beat will occur.

But unfortunately, it's more complicated than this. Beat Saber alternates between a swing beat and a non swing beat using this value. For example, let's assume you have a `_shufflePeriod` of `0.25`. This tells Beat Saber that, every `0.25` beats, it will alternate between a swing beat and a non swing beat, and will apply an offset if it lands on a swing beat.

The offset value that will be applied to objects is approximately equal to `_shuffle * _shufflePeriod` beats.

To hopefully help better understand this, here is a table of beats, whether or not they are on a swing beat, and the *actual* beat objects at those times will spawn in at. For this example, we will set `_shuffle` to `0.2`, and `_shufflePeriod` to `0.25`.

|    Beats from Map     |  Is Swing Beat? |    Actual Beat     |
|-----------------------|:---------------:|------------------|
|0|No|0|
|0.25|Yes|0.3|
|0.5|No|0.5|
|0.75|Yes|0.8|
|1|No|1|
|1.25|Yes|1.3|
|1.5|No|1.5|
|1.75|Yes|1.8|

### _previewStartTime
This controls the start time (in seconds) for the in-game preview of your map.

### _previewDuration
This controls the duration (in seconds) of the in-game preview of your map.

### _songFilename
This is the local location to your map's audio file. The standard practice is to have every map file in the same directory, so in most cases, this is just the name and extension for your audio file (For example, `song.ogg`).

### _coverImageFilename
This is the local location to your map's cover image. Both `.jpg` and `.png` are supported image types. Similar to the song filename, this is most often just the name and extension for the cover image (For example, `cover.jpg`).

### _environmentName
This defines the environment that the map uses. To get a complete list of valid environments, see the `Info.dat Name`s of each environment in the [Environment Previews section](./basic-lighting.html#environment-previews).

### _allDirectionsEnvironmentName
This defines the environment that the map uses when playing in the `360Degree` or `90Degree` characteristics. To get a complete list of valid 360 environments, see the `Info.dat Name`s of each environment in the [Environment Previews section](./basic-lighting.html#environment-previews).

### _songTimeOffset
This is Beat Saber's method for tackling off-sync audio. This offsets the audio in game, based off the value of `_songTimeOffset` in milliseconds.

There is an unfortunate caveat to this: hit sounds are also affected by the same offset. We recommend the mapper sync up their audio file *before* mapping, as described in the [Basic Audio Setup guide](./basic-audio.html), to circumvent any need for `_songTimeOffset` and related alternatives.

### _customData
This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.

### _difficultyBeatmapSets
This is an array of all Difficulty Beatmap Sets defined in the map.

## Difficulty Beatmap Sets
Difficulty Beatmap Sets are groups of difficulties, all under one characteristic.

```json
{
    // ...Rest of Info.dat
    "_songTimeOffset": 0,
    "_difficultyBeatmapSets": [
        {
            "_beatmapCharacteristicName": "Standard",
            "_difficultyBeatmaps": [
                // Difficulty beatmap are explained later down the page. Check the sidebar!
            ]
        }
    ]
}
```

### _beatmapCharacteristicName
This is the name of the characteristic attached to this beatmap set.

Here is a list of commonly used characteristics. While they have no "rules" attached to them in Beat Saber, they still have an intended purpose, and should be followed by both the map editor and the mapper creating maps.

Certain characteristics, which are marked in the list below, do not belong to the base game; rather, they are added by external mods such as SongCore. These modded characteristics will only work if the user has installed mods that add them, and will *not* appear on unmodded copies of Beat Saber.

|Characteristic Name|Included in Base Game|Intended Purpose|
|-------------------|:-------------------:|:--------------:|
|`Standard`|✔️|Vanilla maps following standard mapping guidelines.|
|`NoArrows`|✔️|Restrict notes to Dot (any direction) notes.|
|`OneSaber`|✔️|Restrict notes to Right (Blue) notes, and disables the Left (Red) saber.
|`360Degree`|✔️|Enables rotation events, with no restriction on total rotation.|
|`90Degree`|✔️|Enables rotation events, but restricts total rotation to 45 degrees to the left and right.|
|`Lightshow`|❌|Place for maps that only contains lighting events.|
|`Lawless`|❌|Modded maps and modcharts can safely go here. No rules should apply.|

### _difficultyBeatmaps
This is an array of Difficulty Beatmaps defined within this beatmap set.

## Difficulty Beatmaps
Difficulty Beatmaps are each "Difficulty" in a map. They describe information that changes from difficulty to difficulty, such as Note Jump Speed, and the location of the difficulty file.

```json
{
    // ...Rest of Info.dat
    "_songTimeOffset": 0,
    "_difficultyBeatmapSets": [
        {
            "_beatmapCharacteristicName": "Standard",
            "_difficultyBeatmaps": [
                {
                    "_difficulty": "ExpertPlus",
                    "_difficultyRank": 9,
                    "_beatmapFilename": "StandardExpertPlus.dat",
                    "_noteJumpMovementSpeed": 18,
                    "_noteJumpStartBeatOffset": 0,
                    "_customData": {
                        // Any custom data will go here. If empty, this should be removed entirely.
                    }
                }
            ]
        }
    ]
}
```

### _difficulty
This is the internal difficulty, read by Beat Saber.

Contrary to what you might think, this is *not* just a normal string, but rather an Enum. Here is a list of all valid difficulties:
- `Easy`
- `Normal`
- `Hard`
- `Expert`
- `ExpertPlus`

### _difficultyRank
This is the sorting order in the song select screen in Beat Saber.

While, yes, this is an ordinary integer, the widely-used Beat Saver schema makes this another Enum, based off of the aforementioned `_difficulty` value:

|`_difficulty` Value|BeatSaver's Expected `_difficultyRank`|
|-------------------|:-------------------:|
|`Easy`|1|
|`Normal`|3|
|`Hard`|5|
|`Expert`|7|
|`ExpertPlus`|9|

### _beatmapFilename
This is the local location to the difficulty file, which contains the difficulty's notes, obstacles, and lighting events.

Similar to the `_songFilename` and `_coverImageFilename` from earlier, in most cases this is just the name and extension to the map file.

When creating *new* difficulties, it is recommended that the name be a the Characteristic name for this difficulty's parent Beatmap Set, followed by the `_difficulty` value. For example, this particular difficulty should have it's difficulty file be named `StandardExpertPlus.dat`.

### _noteJumpMovementSpeed
Note Jump Movement Speed (Shortened to "Note Jump Speed", or just "NJS") is the velocity of notes approaching the player, in Meters per Second. Recommended NJS values for each difficulty is dependent on the mapper, so pinning down any "recommended values" for them is difficult. This can be a floating point number for precise velocity.

This is used, along with the defined BPM of the song, to calculate 2 very important values, called Jump Duration and Jump Distance.
- Jump Duration is the amount of beats where objects can be active.
- Jump Distance is the total amount of distance that objects need to travel within that Jump Duration.

The Player rests in the exact middle of both of these values, so most mappers find it more convenient to have Half Jump Distance and Half Jump Duration.
- Half Jump Distance is the total amount of distance that objects need to travel to hit the Player. Some mappers refer to this as the "Spawn Point".
- Half Jump Duration is the amount of beats that is needed to reach the player. It is also the amount of beats, forward in time, where objects spawn.

### _noteJumpStartBeatOffset
This value acts as a direct offset to the Half Jump Duration, explained in `_noteJumpMovementSpeed`, which in turn affects the Jump Distance. This can be a floating point number to achieve a precise Jump Duration.

### _customData
This is an optional field that contains data unrelated to the official Beat Saber level format. If no custom data exists, this object should be removed entirely.

The exact specifics of what goes in `_customData` is entirely dependent on community-created content that needs them. As such, we cannot list all `_customData` fields here. You will have to do your own searching throughout the Beat Saber community to find map editors, tools, or mods that use this `_customData` object.