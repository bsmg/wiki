---
prev: false
next: false
description: Take a deep dive into the format for a Beat Saber map.
---

<!-- markdownlint-disable MD036 -->

# Map Format

The following guides will aim to document the full internal workings of a Beat Saber map,
with detailed information regarding the various schemas that are supported in the most recent version of the game.

This may be useful for those looking to develop specialized software or tooling for processing map files,
such as beatmap editors or scripting frameworks.

## Schemas

A _schema_, by definition, is a declarative format for defining how your beatmap data should be structured.
You can think of it like a "blueprint"
that defines the rules for how your objects and their corresponding properties should be modeled.

When uploading your map to BeatSaver,
these schemas are enforced for all related files to determine whether or not it is appropriate for upload.

### v2

The "v2" schema was introduced in the **1.0.0** update.
It is the oldest supported schema for the game,
which makes it compatible with most available tooling and editors.

### v3

The "v3" schema was introduced in the **1.20.0** update,
and significantly alters the naming conventions of various fields for the purposes of faster processing.

For all collections, objects use abbreviated fields to define subsequent properties:

<!-- markdownlint-disable MD033 -->

<table style="display: table; width: 100%;">
<thead>
<tr>
<th style="text-align: center; width: 50%;"> v2 </th>
<th style="text-align: center; "> v3 </th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: text-top;">

```json
{
  "_items": [
    {
      "_time": 10.0 // Beat
    }
  ]
}
```

</td>
<td style="vertical-align: text-top;">

```json
{
  "items": [
    {
      "b": 10.0 // Beat
    }
  ]
}
```

</td>
</tr>
</tbody>
</table>

<!-- markdownlint-enable MD033 -->

### v4

The "v4" schema was introduced in the **1.34.5** update,
and completely reworks the serialization of all beatmap items.

Any specialized metadata for an object is now stored in a dedicated "metadata" array for each corresponding object type.
Within the defined object,
a new "index" field is available to retrieve the object's metadata at the specified index of its corresponding metadata array.

In the following example, by setting `i` to `0`,
the corresponding metadata from the first item in the `itemsData` array will be applied to the object in the `items` array,
producing the same result as the v3 object.

<!-- markdownlint-disable MD033 -->

<table style="display: table; width: 100%;">
<thead>
<tr>
<th style="text-align: center; width: 50%;"> v3 </th>
<th style="text-align: center; "> v4 </th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: text-top;">

```json
{
  "items": [
    {
      "b": 10.0, // Beat
      "x": "foo" // Metadata Property
    }
  ]
}
```

</td>
<td style="vertical-align: text-top;">

```json
{
  "items": [
    {
      "b": 10.0, // Beat
      "i": 0 // Metadata Index
    }
  ],
  "itemsData": [
    {
      "x": "foo" // Metadata Property
    }
  ]
}
```

</td>
</tr>
</tbody>
</table>

<!-- markdownlint-enable MD033 -->

The idea here is that objects that use similar metadata can now store their metadata _once_,
and the same metadata can be used across multiple objects.
This allows multiple beatmap elements to share common metadata without bloating the overall filesize,
especially for copy/pasted objects or more heavily nested data structures.

## Serialization

The base game will apply specific serialization behaviors to your map files and contents.

### Format

All metadata files are serialized as [JSON](https://www.json.org/) by default,
and any file extension may be used when attempting to serialize related metadata files within your map.
**The [Info](#info) file is the only exception to this rule,
of which the file must specifically be named `Info.dat` for the game to properly parse your custom level**.

### Defaulted Properties

Starting from the **1.31.0** update, the base game has support **defaulted properties** when parsing beatmap entities.
This means that any fields that are omitted in your metadata will be autopopulated with fallback values,
to allow the user to safely omit unused or unchanged properties of any particular object.

This behavior means that the following objects will be equivalent when serialized by the base game:

<!-- markdownlint-disable MD033 -->

<table style="display: table; width: 100%;">
<thead>
<tr>
<th style="text-align: center; width: 50%;"> Input </th>
<th style="text-align: center; "> Output </th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: text-top;">

```json
{
  "items": [
    {
      "b": 10.0
    }
  ]
}
```

</td>
<td style="vertical-align: text-top;">

```json
{
  "items": [
    {
      "b": 10.0,
      "x": 0,
      "y": 0
    }
  ]
}
```

</td>
</tr>
</tbody>
</table>

<!-- markdownlint-enable MD033 -->

The v4 format also extends this functionality to **collections** under this schema.
Any undefined array values will automatically fallback to an empty array,
meaning you can safely omit collections that are not explicitly used in your beatmap.

```jsonc
// This is a valid beatmap/lightshow file in v4.
{ "version": "4.0.0" }
```

::: warning
For certain statistics, such as NPS or note/bomb/obstacle counts, to be displayed properly on the song selection screen,
**all three top-level collections (`colorNotes`, `bombNotes`, and `obstacles`) must be explicitly defined**.

Metadata fields can be safely omitted,
but the base game requires all three top-level fields to display these stats correctly.
:::

::: warning
For Quest users who have CustomJSONData installed,
there is currently a known bug where maps using defaulted values will load incorrectly with unintended behaviors.

A known fix for these values will be released in the near future,
but until then mappers should be wary of how to better control or prevent this behavior.

- The Official Editor (**1.31.0+**) will **always** save your maps with defaulted properties.
  Any versions of the editor should still parse your beatmap as intended on un-modded versions.
- ChroMapper has an explicit setting that allows you to toggle defaulted properties upon saving the map,
  and this behavior is disabled by default.
- BeatLeader will add an explicit tag to leaderboards for maps that use defaulted values.

Any maps using defaulted values should still be compatible on un-modded instances of the game,
allegedly as far back as 1.20.0, but proceed with caution!
:::

### Checksums

In official levels, a checksum is associated with all corresponding map files
for verifying internal relationships and leaderboard integrity for OST and DLC maps.

While remants of these checksums can be found within current or previous iterations of the v4 schema,
these fields are either ignored or explicitly set to an empty string
when parsing the data for custom levels on un-modded instances.

As such, we will not be listing information on checksums here,
as any custom levels can safely ignore these fields and maintain compatibility with the base game.

## Map Files

The base game reads the following files in order to process the contents of a map:

### [Info](./map-format/info.md)

The `Info.dat` file is the main entry point for your map. It describes basic metadata about your song,
as well as point to other files to use for difficulties, cover art, audio, and other references.

### [Audio](./map-format/audio.md)

The audio file stores all information regarding how your audio file should be processed.

This file was introduced alognside the beta release of the Official Editor in the **1.22.2** update,
and is typically referenced as `BPMInfo.dat` by most editors.

### [Beatmap](./map-format/beatmap.md)

The beatmap file defines collections and associated metadata for all _interactable_ beatmap items,
such as notes and obstacles.

### [Lightshow](./map-format/lightshow.md)

Similar to the beatmap file,
the lightshow file defines collections and associated metadata for all _non-interactable_ beatmap items,
such as environment objects and lighting effects.

This file was introduced alongside the v4 format in the **1.34.5** update.

## Custom Data

You may find maps that contain `customData` fields within various structures in the map files.
This functionality is provided by [**CustomJSONData**](https://github.com/Aeroluna/CustomJSONData),
which allows external mods or plugins to extend the basic functionality of a beatmap
by parsing any arbitrary metadata listed in these fields.

<!-- markdownlint-disable MD033 -->

<table style="display: table; width: 100%;">
<thead>
<tr>
<th style="text-align: center; width: 50%;"> v2 </th>
<th style="text-align: center; width: 50%;"> v3 </th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: text-top;">

```json
{
  ...
  "_customData": {
    "foo": "bar"
  }
}
```

</td>
<td style="vertical-align: text-top;">

```json
{
  ...
  "customData": {
    "foo": "bar"
  }
}
```

</td>
</tr>
</tbody>
</table>

<!-- markdownlint-enable MD033 -->

While these fields allow you to extend the basic capabilities of a map,
**this functionality is not compatible with un-modded versions of the game**,
and may lead to unintended behaviors or issues depending on how different mods and environments may parse this data.

The functionality provided by these fields will also vary,
as different mods and plugins will tend to utilize these fields in a variety of ways.

As such, we will not be providing any documentation surrounding these capabilities ourselves,
and highly recommend you read through the existing documentation on the various mods and tools
that support or utilize custom data behaviors:

- [SongCore](https://github.com/Kylemc1413/SongCore)
- [PinkCore](https://github.com/ModdingPink/PinkCore)
- [Heck (Chroma, Noodle Extensions)](https://github.com/Aeroluna/Heck/wiki)
- [Cinema](https://github.com/Kevga/BeatSaberCinema/blob/master/README.md#info-for-mappers)

## Credits

Content in these sections was authored by [officialMECH](./mapping-credits.md#officialmech),
with additional documentation courtesy of the following resources and contributors:

- [Official Editor Documentation](https://beatsaber.com/documentation.html)
- [Kival Evan](./mapping-credits.md#kival-evan)
- [Caeden117](./mapping-credits.md#caeden117)
- [Bullet](./mapping-credits.md#bullet)
- [McEndu](./mapping-credits.md#mcendu)
