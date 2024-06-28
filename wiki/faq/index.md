---
prev: false
next: false
description: Frequently Asked Questions relating to modding, the community, and the game!
---

# Frequently Asked Questions

## I just got the game, how do I get started?

Check out our [beginner's guide](/beginners-guide.md)!

## What versions of the game can be modded?

The latest moddable Beat Saber version for PC is `1.34.2`. You can also downgrade to `1.29.1` if you prefer.

The latest moddable Beat Saber version for Quest is `1.28.0`.

For more information on modding and/or downgrading visit the respective [modding guide.](/beginners-guide.md)

## How do I get more songs?

> [BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community.
> Many other tools and sites enhance the experience of downloading custom songs, but this place is where they are hosted.

If you download maps manually from BeatSaver, extract them into a folder and place the files in `Beat Saber/Beat Saber_Data/CustomLevels`.
This is the directory that the game natively reads custom maps from.

### BeastSaber

[Beast Saber](https://www.bsaber.com) is the home of the Curation Team, Map of the Week, playlist featuring, and the annual
mapping awards, known as "The Beasties Awards". BeastSaber aims to be a community hub to connect you to the more
specialized areas of the community!

You can download each Map of the Week, playlists, and songs from the BeastSaber site which are mirrored from the
BeatSaver repository.

Features that previously required a BeastSaber account such as bookmarks, reviews,
following mappers & curators have moved to BeatSaver. The BeastSaber Team recommends you create an account on BeatSaver
to use these features and more.

To keep up to date with all things BeastSaber related, join their [Discord server](https://discord.gg/VJZHUbt).

### Song Management Tools

The following can be used to help you manage custom songs or playlists.

- [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists,
  maintained by **ranmd9a**.
- [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## How do I install playlists?

### PC

You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

- Use the `Install Playlist` tool in the Options tab of Mod Assistant.
- Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest

Drag the `.bplist` or `.json` playlist file into the BMBF upload tab. A confirmation message that your playlist has been
installed should appear. You can then sync the playlist into your game by pressing the
`Sync to Beat Saber` button.

Once in game after custom levels has been loaded, a prompt from PlaylistCore to apply the
playlist settings from BMBF should appear. After you accept the prompt, you should see the playlist next to the Custom
Levels album's in game. Managing installed playlists can be done in-game or in the BMBF `Playlists` tab.

:::warning WARNING for Quest Users
Using the in game or manual playlist management methods can cause BMBF and PlaylistCore to be out of sync!

If you added or modified a playlist manually or in-game, you have to select the `Reload Playlists Folder`
button in BMBF's `Tools` tab to sync changes. Otherwise, BMBF will override your settings with an outdated copy the
next time you sync your playlists through BMBF.
:::

## How do I make my own custom levels?

See [mapping](/mapping/)!

## How do I load PC mods that aren't in Mod Assistant or BSManager?

See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Does multiplayer have crossplay?

Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version
for this to work.
Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their
[Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working

Each time the game updates it is possible _(and very likely)_ that your existing mods will stop working and need to be updated.
To make sure your install will not break when the game runs on a new update for the first time, everything
in the `Plugins` folder is automatically moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins/mods
in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## How does the scoring system work in Beat Saber? How does global ranking work?

We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems,
check them out!

## My menus are blank and I have nothing to click on

If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to:
`%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game,
it'll recreate the save file and should load the main menu properly.
