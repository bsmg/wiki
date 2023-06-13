---
sidebar: auto
---

# PC用MOD

## はじめに

::: danger 注意
しっかりと理解してからModを利用しましょう

* 初期設定（バニラ）には存在しない問題が発生する可能性があります。 99.9％のバグ、クラッシュや遅延はMODによるものです。
* Modはゲームのアップデートによって動かなくなる可能性があります。このようなことが起きた場合は忍耐強く、敬意をもって待ちましょう。Mod作成者はボランティアです。
* Beat Gamesは、意図的にMODを破壊しようとはしていません。 コードベースで動作することを想定しているので、Modを壊すこともありますが、Modを排除しようとはしません。

Modに関連する問題でゲーム開発者を非難しないでください。 ただのクレーマーになってはいけません。
:::

:::warning 安全にModを利用するために ビートセイバーは**絶対に** 管理者権限を要求することはありません。

もしModをダウンロードやインストールする際にユーザーの管理権限に関するポップが表示された場合**決して**「了承する」をクリックしないでください。そして報告してください。 あなたがインストールしようとしたものは悪意のあるModです。

唯一承認して良いケースは、ModAssistantでOneClick™インストール機能の有効/無効を切り替える時のみです。 OneClick™インストールのリンクをPC上で処理出来るように、ModAssistantをPCに登録する際、管理者権限が必要となります。

もしインストールしたModが悪意のあるものかどうかわからない場合は、***私たちのディスコードで誰かに聞いてみてください***
:::

Beat Saberはカスタム曲をサポートしているので、カスタム曲をプレイするだけならば必要なModは多くはないです！ `SongCore` をインストールするのが賢明なアイデアです。 このModはベースゲームの機能を拡張し、ロード時間を改善し、ゲーム内ダウンローダーやリーダーボード、プレイリストのような他のMODと連携します。

::: warning 警告
このガイドはWindows PC用のガイドです。  
Oculus Questをお使いの方は[Quest用Mod](./quest-modding.md)を参照してください。  
もしLinuxをお使いの場合は[Linux用Modガイド](./modding/linux.md) もしくは [Beataroni](https://github.com/geefr/beatsaber-linux-goodies/#readme)を参照してください。
:::

問題に遭遇した場合 [サポート ページ](./support) に行き、Discordサーバーで質問する前に何が間違っているのかを確認することができます。 解決法はそのページにある可能性があります！

:::warning Youtubeのビデオチュートリアルを見たのですが、うまくいかず困っています。 どうすればいいですか？
BSMGはビデオでのチュートリアルを利用しないことを**強く**お勧めします。 多くの場合、それらは 時代遅れであるか、不完全で誤っているか、正しくない情報が含まれていることがあります。

代わりに、ここで書かれたガイドに従うか、 [BSMG Discord](https://discord.gg/beatsabermods) のヘルプを参照してください。
:::

## インストーラー

### Mod Assistant
> **これは現在推奨されるMODインストーラーです。**

ゲームにModを導入する前に、__**少なくとも一度は**** ゲームを実行してください！ これはゲームの再インストール時にも同じことが言えます。

Mod managerに似たシンプルなBeat Saber Modインストーラですが、Modの除去やバージョンチェックなどの追加機能があります! [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest) からダウンロードできます。

![Mod Assistant](~@images/beginners-guide/modassistant.png)

## どうすればカスタム曲を追加できますか？
::: tip
譜面の探し方「すべての曲から」「レート順」「ダウンロード数」「プレイ数」によってソートできます。ここにあるほとんどの曲は「よいマップの作り方ガイド」ができる前に作られたものです。 2019年後半から今の間にリリースされた曲をダウンロードして、最高のカスタムマップを体験してみてください。
:::

::: warning 警告
定期的に `CustomLevels` フォルダのバックアップをしておくことをお勧めします。アップデートによってリセットされたときに役に立つ可能性があります。

このフォルダはゲームインストールにあります: `Beat Saber/Beat Saber_Data/CustomLevel`
:::

### ゲーム内ダウンローダー
`BeatSaver Downloader` プラグインを使用すると、 `MODS` メニュー画面の `SONG` メニューボタンを使用してゲーム内でマップをダウンロードできます。 [BeatSaver](https://beatsaver.com)からも直接マップをインストールできます。

### BeatSaver
[BeatSaver](https://beatsaver.com) はコミュニティによって作られたカスタム曲のまとめです。 他の多くのツールやサイトは、カスタム曲をダウンロードする方法をより詳細に説明していますが、このWikiは、ツール作成者自ら運営しています。 サイトからダウンロードした曲をインストールするには、フォルダを解凍し、 `Beat Saber/Beat Saber_Data/CustomLevels` に配置します。 ゲーム内ダウンローダプラグイン、BeatList、Mod AssistantのOneClick™インストール機能を使用することもできます。

ModAssistant のOneClick™インストール機能を有効にするには、下記画像を参照してください。: ![Mod Assistant](~@images/beginners-guide/modassistant-oneclick.png)

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) は、プレイできる素晴らしいマップを見つけるのに役立つサイトです。 これは、Beatsaver上の何千もの曲を分類することによって行われ、曲のジャンルや他の多くの属性タグでソートすることができます。 また、プレイヤーが曲をレビューしたり、コメントしたりできるソーシャル機能も備えています。 最も使用されている機能の一つは、リリースされたほとんどの曲をチームがプレイし、素晴らしいものを推奨する「キュレーター推奨」機能です。 [ゲーム内で自動的にこれらの](https://bsaber.com/beatsync/)をダウンロードさせます。

### 楽曲管理アプリ

現時点で楽曲を管理するアプリは利用できません。

### プレイリスト
[PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) modをインストールする必要があります。

次に、どちらかを選択できます。

* ModAssistantのOptionsタブで `プレイリストインストール` ツールを使用します。
* プレイリストファイルを `Beat Saber/Playlists` に配置し、BeatListで選択し、すべてダウンロードします。

ゲーム内のカスタムレベルの横にプレイリストが表示されます。 Modはまた、ゲーム内のプレイリストの管理をサポートしています。

## インストール フォルダ:
_Beat Saberはどこにインストールされていますか？_

### デフォルトの保存場所
|        |                                                                                     |
| ------ | ----------------------------------------------------------------------------------- |
| Steam  | `C:\Program Files (x86)\Steam\steamaps\common\Beat Saber\'                   |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\' |

### その他の場所
**インストールフォルダを別のドライブに移動した場合は、以下の場所にある可能性があります。** ゲームがインストールされているドライブのドライブ文字を `F` と置き換えてください。
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## 手動でのインストール
ModインストーラはModをインストールするための推奨方法です。 この[セクション](#インストーラー) を参照してください。 ゲームにパッチが適用されていて、インストーラーで利用できないプラグインをインストールする必要がある場合は、ステップ 4 に進んでください。

::: warning 安全にModをインストールするために `#pc-mods`などで入手できる検証されていないModをインストールすることはリスクを伴います。
普通のModを装った悪意のあるModも存在します。

ビートセイバーは**決して**管理者権限を要求しません。

もしModをダウンロードやインストールする際にユーザーの管理権限に関するポップが表示された場合**決して**「了承する」をクリックしないでください。そして報告してください。 もしインストールしたModが悪意のあるものかどうかわからない場合は、***私たちのディスコードで誰かに聞いてみてください***
:::

ゲームにModを導入する前に、**少なくとも一度**は ゲームを実行してください！ これはゲームの再インストール時にも同じことが言えます。

### BSIPAのインストール

1. [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases) をダウンロード。
2. [インストール-フォルダ](#インストール-フォルダ) を設定し、BSIPAの中身を解凍します。 ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. IPA.exeをダブルクリックしてゲームにパッチを適用します。 ゲーム開始時に `プラグイン` フォルダ内のMODがロードされるようになります。 エラーがある場合は、おそらくステップ2を正しく実行できていません。 ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### Modをインストール

4. GitHub、[BSMG Discord](https://discord.com/invite/beatsabermods)の `#pc-mods` チャンネル、 [BeatMods](https://beatmods.com/#/mods)もしくはそのほかのソースから望みのModをダウンロードしてください。 **Modに必要な環境を確認してからダウンロードしてください。** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. 特別なインストール方法があるものもあれば、そうでないものもあります。 一般的に、zipコンテンツをビートセイバーのインストールフォルダにドラッグ&ドロップするだけで、ファイルは対応するフォルダに移動します。

## ダウングレード

[BSMG](https://www.discord.gg/beatsabermods)の`#modding-announcements`チャンネルで最新バージョンがModに対応しているかを確認してください。 そうでない場合は、次の手順に従ってMod対応可能なバージョンに落とすことができます。

ゲームを購入した方法によって手順が異なります。

* [Oculus ストア](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)
* Steam版にはダウングレードする方法がいくつかあります。
  * [BSManager](https://github.com/Zagrios/bs-manager#readme)
  * [LegacyInstaller](https://github.com/Goobwabber/LegacyInstaller#readme)

## Modをアンインストールする方法
`Plugins` フォルダから dll を削除するか、Mod Assistantの `Uninstall` ボタンをクリックします。

## より多くのことが知りたい方へ

* [持ち方とコツ](./grips-and-tricks.md)
* [マッピング](/ja/mapping/)
* [カスタムセイバー](/ja/models/custom-sabers.md)
* [カスタムアバター](/ja/models/custom-avatars.md)
* [カスタムプラットフォーム](/ja/models/custom-platforms.md)
* [カスタムでのマルチプレイ](https://discord.com/invite/gezGrFG4tz)
* [Modを作る](/ja/modding/)

## 質問がありますか？
[BSMG Discord](https://discord.gg/beatsabermods) のサポートチャンネルをご覧ください！
