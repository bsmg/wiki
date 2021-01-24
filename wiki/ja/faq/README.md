# よくある質問
## ゲームを始めたばかりですが、どうやって始めるのですか?
Check out our [beginner's guide](/beginners-guide.md)!

## どうすれば曲が追加出来る？
> [BeatSaver](https://beatsaver.com) はコミュニティによって作られたカスタム曲のまとめです。 Many other tools and sites enhance the experience of downloading custom songs, but this place is where they are hosted.

If you download maps manually from BeatSaver, extract them into a folder and place the files in `Beat Saber/Beat Saber_Data/CustomLevels`. This is the directory that the game natively reads custom maps from.

### BeastSaber
[Beast Saber](https://www.bsaber.com) is a review site that aims to curate all of the songs on BeatSaver. You can also download playlists, follow mappers, find songs using advanced sorting methods and more.

### Song Management Tools
The following are programs to be used on the desktop to help you download custom songs, with some other features as well.
* refer to the [original English version](../../faq/README.md),
* wait for a translation to be done,

## How do I install playlists?
**For PC users:**  
You need to install the `PlaylistLoaderLite` mod. Then you can either
* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists` and select it in BeatList, then hit download all.

You should now see the playlist next to the Custom Levels album's in-game. If there are levels missing from the playlist, you will need to download them manually either using BeatList or directly from Beatsaver or Bsaber.

**For Quest users:**  
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## How do I make my own custom levels?
See [mapping](/mapping/)!

## How do I load plugins that aren't in Mod Assistant?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## Does multiplayer have crossplay?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working!
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## How does the scoring system work in Beat Saber? How does global ranking work?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on!
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
