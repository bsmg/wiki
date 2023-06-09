---
sidebar: auto
---

# PC 用 MOD

## はじめに

::: danger 注意
しっかりと理解してから Mod を利用しましょう

- 初期設定（バニラ）には存在しない問題が発生する可能性があります。 99.9％のバグ、クラッシュや遅延は MOD によるものです。
- Mod はゲームのアップデートによって動かなくなる可能性があります。このようなことが起きた場合は忍耐強く、敬意をもって待ちましょう。Mod 作成者はボランティアです。
- Beat Games は、意図的に MOD を破壊しようとはしていません。 コードベースで動作することを想定しているので、Mod を壊すこともありますが、Mod を排除しようとはしません。

Mod に関連する問題でゲーム開発者を非難しないでください。 ただのクレーマーになってはいけません。
:::

:::warning 安全に Mod を利用するために ビートセイバーは**絶対に** 管理者権限を要求することはありません。

もし Mod をダウンロードやインストールする際にユーザーの管理権限に関するポップが表示された場合**決して**「了承する」をクリックしないでください。そして報告してください。 あなたがインストールしようとしたものは悪意のある Mod です。

唯一承認して良いケースは、ModAssistant で OneClick™ インストール機能の有効/無効を切り替える時のみです。 OneClick™ インストールのリンクを PC 上で処理出来るように、ModAssistant を PC に登録する際、管理者権限が必要となります。

もしインストールした Mod が悪意のあるものかどうかわからない場合は、**_私たちのディスコードで誰かに聞いてみてください_**
:::

Beat Saber はカスタム曲をサポートしているので、カスタム曲をプレイするだけならば必要な Mod は多くはないです！ `SongCore` をインストールするのが賢明なアイデアです。 この Mod はベースゲームの機能を拡張し、ロード時間を改善し、ゲーム内ダウンローダーやリーダーボード、プレイリストのような他の MOD と連携します。

::: warning 警告
このガイドは Windows PC 用のガイドです。  
Oculus Quest をお使いの方は[Quest 用 Mod](./quest-modding.md)を参照してください。  
もし Linux をお使いの場合は[Linux 用 Mod ガイド](./modding/linux.md) もしくは [Beataroni](https://github.com/geefr/beatsaber-linux-goodies/#readme)を参照してください。
:::

問題に遭遇した場合 [サポート ページ](./support) に行き、Discord サーバーで質問する前に何が間違っているのかを確認することができます。 解決法はそのページにある可能性があります！

:::warning Youtube のビデオチュートリアルを見たのですが、うまくいかず困っています。 どうすればいいですか？
BSMG はビデオでのチュートリアルを利用しないことを**強く**お勧めします。 多くの場合、それらは 時代遅れであるか、不完全で誤っているか、正しくない情報が含まれていることがあります。

代わりに、ここで書かれたガイドに従うか、 [BSMG Discord](https://discord.gg/beatsabermods) のヘルプを参照してください。
:::

## インストーラー

### Mod Assistant

> **これは現在推奨される MOD インストーラーです。**

ゲームに Mod を導入する前に、\_\_**少なくとも一度は\*\*** ゲームを実行してください！ これはゲームの再インストール時にも同じことが言えます。

Mod manager に似たシンプルな Beat Saber Mod インストーラですが、Mod の除去やバージョンチェックなどの追加機能があります! [Assistant's GitHub](https://github.com/Assistant/ModAssistant/releases/latest) からダウンロードできます。

![Mod Assistant](/.assets/images/beginners-guide/modassistant.png)

## どうすればカスタム曲を追加できますか？

::: tip
譜面の探し方「すべての曲から」「レート順」「ダウンロード数」「プレイ数」によってソートできます。ここにあるほとんどの曲は「よいマップの作り方ガイド」ができる前に作られたものです。 2019 年後半から今の間にリリースされた曲をダウンロードして、最高のカスタムマップを体験してみてください。
:::

::: warning 警告
定期的に `CustomLevels` フォルダのバックアップをしておくことをお勧めします。アップデートによってリセットされたときに役に立つ可能性があります。

このフォルダはゲームインストールにあります: `Beat Saber/Beat Saber_Data/CustomLevel`
:::

### ゲーム内ダウンローダー

`BeatSaver Downloader` プラグインを使用すると、 `MODS` メニュー画面の `SONG` メニューボタンを使用してゲーム内でマップをダウンロードできます。 [BeatSaver](https://beatsaver.com)からも直接マップをインストールできます。

### BeatSaver

[BeatSaver](https://beatsaver.com) はコミュニティによって作られたカスタム曲のまとめです。 他の多くのツールやサイトは、カスタム曲をダウンロードする方法をより詳細に説明していますが、この Wiki は、ツール作成者自ら運営しています。 サイトからダウンロードした曲をインストールするには、フォルダを解凍し、 `Beat Saber/Beat Saber_Data/CustomLevels` に配置します。 ゲーム内ダウンローダプラグイン、BeatList、Mod Assistant の OneClick™ インストール機能を使用することもできます。

ModAssistant の OneClick™ インストール機能を有効にするには、下記画像を参照してください。: ![Mod Assistant](/.assets/images/beginners-guide/modassistant-oneclick.png)

### Beast Saber

[Beast Saber](https://www.bsaber.com) (bsaber.com) は、プレイできる素晴らしいマップを見つけるのに役立つサイトです。 これは、Beatsaver 上の何千もの曲を分類することによって行われ、曲のジャンルや他の多くの属性タグでソートすることができます。 また、プレイヤーが曲をレビューしたり、コメントしたりできるソーシャル機能も備えています。 最も使用されている機能の一つは、リリースされたほとんどの曲をチームがプレイし、素晴らしいものを推奨する「キュレーター推奨」機能です。 [ゲーム内で自動的にこれらの](https://bsaber.com/beatsync/)をダウンロードさせます。

### 楽曲管理アプリ

現時点で楽曲を管理するアプリは利用できません。

### プレイリスト

[PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod をインストールする必要があります。

次に、どちらかを選択できます。

- ModAssistant の Options タブで `プレイリストインストール` ツールを使用します。
- プレイリストファイルを `Beat Saber/Playlists` に配置し、BeatList で選択し、すべてダウンロードします。

ゲーム内のカスタムレベルの横にプレイリストが表示されます。 Mod はまた、ゲーム内のプレイリストの管理をサポートしています。

## インストール フォルダ:

_Beat Saber はどこにインストールされていますか？_

### デフォルトの保存場所

|        |                                                                              |
| ------ | ---------------------------------------------------------------------------- |
| Steam  | `C:\Program Files (x86)\Steam\steamaps\common\Beat Saber\'                   |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\' |

### その他の場所

**インストールフォルダを別のドライブに移動した場合は、以下の場所にある可能性があります。** ゲームがインストールされているドライブのドライブ文字を `F` と置き換えてください。
| | |
| ------ | --------------------------------------------------------------------- |
| Steam | `F:\SteamLibrary\steamapps\common\Beat Saber\` |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## 手動でのインストール

Mod インストーラは Mod をインストールするための推奨方法です。 この[セクション](#インストーラー) を参照してください。 ゲームにパッチが適用されていて、インストーラーで利用できないプラグインをインストールする必要がある場合は、ステップ 4 に進んでください。

::: warning 安全に Mod をインストールするために `#pc-mods`などで入手できる検証されていない Mod をインストールすることはリスクを伴います。
普通の Mod を装った悪意のある Mod も存在します。

ビートセイバーは**決して**管理者権限を要求しません。

もし Mod をダウンロードやインストールする際にユーザーの管理権限に関するポップが表示された場合**決して**「了承する」をクリックしないでください。そして報告してください。 もしインストールした Mod が悪意のあるものかどうかわからない場合は、**_私たちのディスコードで誰かに聞いてみてください_**
:::

ゲームに Mod を導入する前に、**少なくとも一度**は ゲームを実行してください！ これはゲームの再インストール時にも同じことが言えます。

### BSIPA のインストール

1. [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases) をダウンロード。
2. [インストール-フォルダ](#インストール-フォルダ) を設定し、BSIPA の中身を解凍します。 ![Directory Clean](/.assets/images/beginners-guide/directory-clean.png 'Directory Clean') ![Directory Ipa](/.assets/images/beginners-guide/directory-ipa.png 'Directory Ipa')
3. IPA.exe をダブルクリックしてゲームにパッチを適用します。 ゲーム開始時に `プラグイン` フォルダ内の MOD がロードされるようになります。 エラーがある場合は、おそらくステップ 2 を正しく実行できていません。 ![Directory Patched](/.assets/images/beginners-guide/directory-patched.png 'Directory Patched')

### Mod をインストール

4. GitHub、[BSMG Discord](https://discord.com/invite/beatsabermods)の `#pc-mods` チャンネル、 [BeatMods](https://beatmods.com/#/mods)もしくはそのほかのソースから望みの Mod をダウンロードしてください。 **Mod に必要な環境を確認してからダウンロードしてください。** ![Directory Plugins](/.assets/images/beginners-guide/directory-plugins.png 'Directory Plugins')
5. 特別なインストール方法があるものもあれば、そうでないものもあります。 一般的に、zip コンテンツをビートセイバーのインストールフォルダにドラッグ&ドロップするだけで、ファイルは対応するフォルダに移動します。

## ダウングレード

[BSMG](https://www.discord.gg/beatsabermods)の`#modding-announcements`チャンネルで最新バージョンが Mod に対応しているかを確認してください。 そうでない場合は、次の手順に従って Mod 対応可能なバージョンに落とすことができます。

ゲームを購入した方法によって手順が異なります。

- [Oculus ストア](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)
- Steam 版にはダウングレードする方法がいくつかあります。
  - [BSManager](https://github.com/Zagrios/bs-manager#readme)
  - [LegacyInstaller](https://github.com/Goobwabber/LegacyInstaller#readme)

## Mod をアンインストールする方法

`Plugins` フォルダから dll を削除するか、Mod Assistant の `Uninstall` ボタンをクリックします。

## より多くのことが知りたい方へ

- [持ち方とコツ](./grips-and-tricks.md)
- [マッピング](/ja/mapping/)
- [カスタムセイバー](/ja/models/custom-sabers.md)
- [カスタムアバター](/ja/models/custom-avatars.md)
- [カスタムプラットフォーム](/ja/models/custom-platforms.md)
- [カスタムでのマルチプレイ](https://discord.com/invite/gezGrFG4tz)
- [Mod を作る](/ja/modding/)

## 質問がありますか？

[BSMG Discord](https://discord.gg/beatsabermods) のサポートチャンネルをご覧ください！
