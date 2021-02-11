---
sidebar: auto
---

# PC用MOD
# はじめに

::: danger Sorry, this page has not been translated yet, you can either:
- 初期設定（バニラ）には存在しない問題が発生する可能性があります。 99.9％のバグ、クラッシュや遅延はMODによるものです。
- wait for a translation to be done,
- Beat Gamesは、意図的にMODを破壊しようとはしていません。 コードベースで動作することを想定しているので、Modを壊すこともありますが、Modを排除しようとはしません。

Modに関連する問題でゲーム開発者を非難しないでください。 ただのクレーマーになってはいけません。 :::

Beat Saberはカスタム曲をネイティブにサポートしているので、カスタム曲をお探しの場合は、多くのModは必要ありません! `SongCore` をインストールするのが賢明なアイデアです。 このModはベースゲームの機能を拡張し、ロード時間を改善し、ゲーム内ダウンローダーやリーダーボード、プレイリストのような他のMODと連携します。

refer to the [original English version](../pc-modding.md),

問題に遭遇した場合 [サポート ページ](./support) に行き、Discordサーバーで何が間違っているのかを確認してください。 解決法はそのページにある可能性があります！

:::warning Elite Ericのビデオを見ましたが、動かなくなりました。 いったい何が起こったのでしょうか。 BSMGはElite Ericによるチュートリアルを使用しないことを**強く**お勧めします。 彼の内容の多くを見直すと、それらは不完全、誤りがあったり、または間違った情報を多く含んでいます。 たとえこれらのエラーを修正しようとしても、残念ながら返信はなく、新しい(しかし間違った)チュートリアルしかありません。

or contribute to translation effort [here](https://github.com/bsmg/wiki). :::

## インストーラー
### Mod Assistant
> **これは現在推奨されるMODインストーラーです。**

ゲームにModを導入する前に、__**少なくとも一度は**** ゲームを実行してください！ これはゲームの再インストール時にも同じことが言えます。

Mod managerに似たシンプルなBeat Saber Modインストーラですが、Modの除去やバージョンチェックなどの追加機能があります! [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest) で取得

![ModAssistant](~@images/beginners-guide/modassistant.png)

## どうすれば曲が追加出来る？
### ゲーム内ダウンローダー
`BeatSaver Downloader` プラグインを使用すると、 `MODS` メニュー画面の `SONG` メニューボタンを使用してゲーム内でマップをダウンロードできます。 [BeatSaver](https://beatsaver.com)からも直接マップをインストールできます。

### BeatSaver
[BeatSaver](https://beatsaver.com) はコミュニティによって作られたカスタム曲のまとめです。 他の多くのツールやサイトは、カスタム曲をダウンロードする方法をより詳細に説明します, しかし、この場所は、ツール作成者自らが運営しています。. サイトからダウンロードした曲をインストールするには、フォルダを解凍し、 `Beat Saber/Beat Saber_Data/CustomLevels` に配置します。  ゲーム内ダウンローダプラグイン、BeatList、Mod AssistantのOneClick™インストール機能を使用することもできます。

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) は、プレイできる素晴らしいマップを見つけるのに役立つサイトです。 これは、beatsaver上の何千もの曲を分類することによって行われ、曲のジャンルや他の多くの属性タグでソートすることができます。 また、プレイヤーが曲をレビューしたり、コメントしたりできるソーシャル機能も備えています。 最も使用されている機能の一つは、リリースされたほとんどの曲をチームが再生し、素晴らしいものを推奨する「キュレーター推奨」機能です。 [ゲーム内で自動的にこれらの](https://bsaber.com/beatsync/)をダウンロードさせます。

### Song Management Apps
* [BeatList](https://github.com/Alaanor/beatlist) は、Alaanorが作成したプレイリストとビートマップを管理するアプリです。

### プレイリスト
プレイリストファイルを `Beat Saber/Playlists`に配置し、 [BeatList](https://github.com/Alaanor/beatlist) または [Mod Assistant](https://github.com/Assistant/ModAssistant) を使用して譜面をダウンロードします。 (注意:古いMODはゲーム内でプレイリストのコンテンツをダウンロードできますが、現在はダウンロードできません。

## インストール フォルダ:
_Beat Saberはどこにインストールされていますか？_

### デフォルトの保存場所
|        |                                                                                     |
| ------ | ----------------------------------------------------------------------------------- |
| Steam  | `C:\Program Files (x86)\Steam\steamaps\common\Beat Saber\'                   |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\' |

### その他の場所
**インストールフォルダを別のドライブに移動した場合は、以下の場所にある可能性があります。 ** ゲームがインストールされているドライブにドライブ文字 `F` を置き換えます。
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Modをアンインストールする方法
`Plugins` フォルダから dll を削除するか、Mod Assistantの `Uninstall` ボタンをクリックします。

## 手動でのインストール
ModインストーラはMODをインストールするための推奨方法です。 この[セクション](#installers) を参照してください。 ゲームにパッチが適用されていて、インストーラーで利用できないプラグインをインストールする必要がある場合は、ステップ 4 に進んでください。

ゲームにModを導入する前に、**少なくとも一度**は ゲームを実行してください！ これはゲームの再インストール時にも同じことが言えます。
### BSIPAのインストール
1. [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases) をダウンロード。
2. [installフォルダ](#install-folder) を設定し、BSIPAの中身を解凍します。 ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. IPA.exeをダブルクリックしてゲームにパッチを適用します。 ゲーム開始時に `プラグイン` フォルダ内のMODがロードされるようになります。 エラーがある場合は、おそらくステップ2を正しく実行できていません。 ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Modをインストール
4. GitHub、#pc-modsチャネル、または他のソースからインストールしたいModダウンロードしてください。 **Modに必要な環境を確認してからダウンロードしてください。** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. 特別なインストール方法があるものもあれば、そうでないものもあります。 一般的に、zipコンテンツをビートセイバーのインストールフォルダにドラッグ&ドロップするだけで、ファイルは対応するフォルダに移動します。


## さらにカスタムするには
* [持ち方とコツ](./grips-and-tricks.md)
* [譜面作成](/mapping/)
* [カスタムセイバー](/models/custom-sabers.md)
* [カスタムアバター](/models/custom-avatars.md)
* [カスタムプラットフォーム](/models/custom-platforms.md)
* [マルチプレイのセットアップ](https://bs.assistant.moe/Multiplayer/)
* [Modを作る](/modding/)

## 質問がありますか？
[BSMG Discord](https://discord.gg/beatsabermods) のサポートチャンネルをご覧ください！
