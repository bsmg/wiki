---
sidebar: auto
---

# PC用MOD

## はじめに

::: danger Sorry, this page has not been translated yet, you can either:

* 初期設定（バニラ）には存在しない問題が発生する可能性があります。 99.9％のバグ、クラッシュや遅延はMODによるものです。
* Modはゲームのアップによって動かなくなる可能性がありますが、普通のことです。このようなことが起きた場合は忍耐強く、敬意をもって待ちましょう。Mod作成者はボランティアです。
* Beat Gamesは、意図的にMODを破壊しようとはしていません。 コードベースで動作することを想定しているので、Modを壊すこともありますが、Modを排除しようとはしません。

Modに関連する問題でゲーム開発者を非難しないでください。 ただのクレーマーになってはいけません。 :::

Beat Saberはカスタム曲をネイティブにサポートしているので、カスタム曲をお探しの場合は、多くのModは必要ありません! `SongCore` をインストールするのが賢明なアイデアです。 このModはベースゲームの機能を拡張し、ロード時間を改善し、ゲーム内ダウンローダーやリーダーボード、プレイリストのような他のMODと連携します。

refer to the [original English version](../pc-modding.md),

問題に遭遇した場合 [サポート ページ](./support) に行き、Discordサーバーで何が間違っているのかを確認してください。 解決法はそのページにある可能性があります！

:::warning Elite Ericのビデオを見ましたが、動かなくなりました。 いったい何が起こったのでしょうか。 BSMGはElite Ericによるチュートリアルを使用しないことを**強く**お勧めします。 彼の内容の多くを見直すと、それらは不完全、誤りがあったり、または間違った情報を多く含んでいます。 Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

or contribute to translation effort [here](https://github.com/bsmg/wiki). :::

## インストーラー

### Mod Assistant
> **これは現在推奨されるMODインストーラーです。**

ゲームにModを導入する前に、__**少なくとも一度は**** ゲームを実行してください！ これはゲームの再インストール時にも同じことが言えます。

Mod managerに似たシンプルなBeat Saber Modインストーラですが、Modの除去やバージョンチェックなどの追加機能があります! [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest) で取得

![ModAssistant](~@images/beginners-guide/modassistant.png)

## どうすれば曲が追加出来る？
::: tip よい譜面作成方法が作られる前に、「すべての曲から」「レイト」「ダウンロード数」「プレイ数」によってソートできます。 2019年後半から今の間にリリースされた曲をダウンロードして、最高の 創作譜面を体験してみてください。 :::

### ゲーム内ダウンローダー
`BeatSaver Downloader` プラグインを使用すると、 `MODS` メニュー画面の `SONG` メニューボタンを使用してゲーム内でマップをダウンロードできます。 [BeatSaver](https://beatsaver.com)からも直接マップをインストールできます。

### BeatSaver
[BeatSaver](https://beatsaver.com) はコミュニティによって作られたカスタム曲のまとめです。 他の多くのツールやサイトは、カスタム曲をダウンロードする方法をより詳細に説明します, しかし、この場所は、ツール作成者自らが運営しています。. サイトからダウンロードした曲をインストールするには、フォルダを解凍し、 `Beat Saber/Beat Saber_Data/CustomLevels` に配置します。 ゲーム内ダウンローダプラグイン、BeatList、Mod AssistantのOneClick™インストール機能を使用することもできます。

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) は、プレイできる素晴らしいマップを見つけるのに役立つサイトです。 これは、beatsaver上の何千もの曲を分類することによって行われ、曲のジャンルや他の多くの属性タグでソートすることができます。 また、プレイヤーが曲をレビューしたり、コメントしたりできるソーシャル機能も備えています。 最も使用されている機能の一つは、リリースされたほとんどの曲をチームが再生し、素晴らしいものを推奨する「キュレーター推奨」機能です。 [ゲーム内で自動的にこれらの](https://bsaber.com/beatsync/)をダウンロードさせます。

### Song Management Apps

* [BeatList](https://github.com/Alaanor/beatlist) は、Alaanorが作成したプレイリストとビートマップを管理するアプリです。

### プレイリスト
[PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) modをインストールする必要があります。

次に、どちらかを選択できます。

* ModAssistantのOptionsタブで `プレイリストインストール` ツールを使用します。
* プレイリストファイルを `Beat Saber/Playlists` に配置し、BeatListで選択し、すべてダウンロードします。

ゲーム内のカスタムレベルの横にプレイリストが表示されます。 MODはまた、ゲーム内のプレイリストの管理をサポートしています。

## インストール フォルダ:
_Beat Saberはどこにインストールされていますか？_

### デフォルトの保存場所
|        |                                                                                     |
| ------ | ----------------------------------------------------------------------------------- |
| Steam  | `C:\Program Files (x86)\Steam\steamaps\common\Beat Saber\'                   |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\' |

### その他の場所
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## 手動でのインストール
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install Plugins that are not available in the installer, skip to step 4.

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### BSIPAのインストール

1. [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases) をダウンロード。
2. [installフォルダ](#install-folder) を設定し、BSIPAの中身を解凍します。 ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. IPA.exeをダブルクリックしてゲームにパッチを適用します。 ゲーム開始時に `プラグイン` フォルダ内のMODがロードされるようになります。 エラーがある場合は、おそらくステップ2を正しく実行できていません。 ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Modをインストール

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources. **Modに必要な環境を確認してからダウンロードしてください。** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. 特別なインストール方法があるものもあれば、そうでないものもあります。 Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.

## How to uninstall mods
Either remove the dll from the `Plugins` folder, or click the `Uninstall` button in Mod Assistant.

## Where to go from here

* [Grips and Tricks](./grips-and-tricks.md)
* [Making Beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Setup Multiplayer](https://bs.assistant.moe/Multiplayer/)
* [Making Mods](/modding/)

## Have questions?
Visit the support channels in the [BSMG Discord](https://discord.gg/beatsabermods)!
