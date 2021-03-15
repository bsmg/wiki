# よくある質問

## ゲームを始めたばかりですが、なにから始めるのですか?
[初心者ガイド](/beginners-guide.md)

## どうすれば曲が追加出来る？
> [BeatSaver](https://beatsaver.com) はコミュニティによって作られたカスタム曲のまとめです。 他の多くのツールやサイトは、カスタム曲をダウンロードする方法をより詳細に説明します, しかし、この場所は、ツール作成者自らが運営しています。.

BeatSaverから手動でマップをダウンロードする場合は、それらを解凍し、 `Beat Saber/Beat Saber_Data/CustomLevels`にファイルを置きます。 これは、ゲームがネイティブにカスタム曲を読み込むディレクトリです。

### BeastSaber
[Beast Saber](https://www.bsaber.com) は、BeatSaver上のすべての曲を評価することを目的としたレビューサイトです。 プレイリストをダウンロードしたり、マップ製作者をフォローしたり、様々なソートを使用して曲を見つけたりすることもできます。

### カスタム曲管理ツール
以下は、カスタム曲をダウンロードしたり、そのほかの役に立つ機能も備えたデスクトップ上で使用するプログラムです。

* refer to the [original English version](../../faq/README.md),
* wait for a translation to be done,

## プレイリストをインストールするにはどうすればいいですか?

### PC
[PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) modをインストールする必要があります。

次に、どちらかを選択できます。

* ModAssistantのOptionsタブで `プレイリストインストール` ツールを使用します。
* プレイリストファイルを `Beat Saber/Playlists` に配置し、BeatListで選択し、すべてダウンロードします。

ゲーム内のカスタムレベルの横にプレイリストが表示されます。 The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## カスタム曲を作成するにはどうすればいいですか?
See [mapping](/mapping/)!

## Mod Assistantにないプラグインをどのようにロードしますか？
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## マルチプレイヤーにはクロスプレイがあるか？
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## Beat Saberで得点のシステムはどのようなものですか? グローバルランキングの仕組みは?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
