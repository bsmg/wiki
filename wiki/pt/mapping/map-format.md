---
prev: false
next: false
description: Dê um mergulho profundo no formato para mapas de Beat Saber.
---

<!-- markdownlint-disable MD036 -->

# Formato de Mapa

There's some cases where, available tools and map editors do not provide some functionality that you want. You might also feel inspired to create a tool or map editor for the fun of it.

One problem, though. What _exactly_ goes into a map file? This is important to understand when developing new tools, scripts, and editors.

This page will help you understand the internal workings of a full Beat Saber map, and provide information about what each property and value represents.

## Schemas

A _schema_ is essentially the set of rules to a specific kind of file. They have a list of rules that you _may_ break, and rules that you _cannot_ break.

Beat Saber contains its own schema; it defines what the format for a Beat Saber level should be, and is what we are going to break down.

### BeatSaver Schema

However, members of the community have gone together and made their own schema, which re-enforces rules set by Beat Saber's own schema, but also standardizes and sets _new_ rules to follow.

This community-made schema is used by BeatSaver, which [you can find here](https://github.com/luludotdev/beatmap-schemas). When uploading your map to BeatSaver, it checks against these schema files to determine whether or not it is appropriate for upload. A major change in this schema is the inclusion of `_customData` objects scattered throughout map files, which is covered in this breakdown.

You can read through the BeatSaver Schema to get a deeper understanding of what goes into a Beat Saber map, as well as ensure that your own program outputs proper maps that are ready to be uploaded to BeatSaver.

## [Info.dat](./infodat-format.md)

`Info.dat` is the main file for a Beat Saber map. It describes basic metadata about your map, as well as point to other files to use for difficulties, cover art, and audio.

## [Difficulty File (v3)](./difficulty-format-v3.md)

Each Difficulty Beatmap contains a corresponding file which defines the notes, obstacles, events, and other objects for that particular difficulty.

This version was introduced in Beat Saber version 1.20.0.

## [Difficulty File (v2)](./difficulty-format-v2.md)

Each Difficulty Beatmap contains a corresponding file which defines the notes, obstacles, events, and other objects for that particular difficulty.

## Credits

The content on this page was authored by [Caeden117](./mapping-credits.md#caeden117) and [Bullet](./mapping-credits.md#bullet) with help from [Kival Evan](./mapping-credits.md#kival-evan), GalaxyMaster and [McEndu](./mapping-credits.md#mcendu).
