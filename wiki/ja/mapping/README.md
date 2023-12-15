---
sidebar: "false"
tags:
  - bsmg
  - beat saber
  - wiki
  - 譜面作成
  - 譜面作成
  - ビートセイバーの譜面の作り方
  - カスタムレベル
  - カスタムマップを作成
  - カスタム チャート
description: |
  譜面にアニメーションが多すぎますか？ 十分なアニメマップがありませんか？
  あなた自身がその問題を解決するための方法を学びましょう
---

# マッピング

譜面にアニメーションが多すぎますか？ 十分なアニメーションのある譜面がありませんか？ここで譜面を作る方法を学び自分でその問題を解決しましょう！

::: tip INFO  
もしよりよい譜面作成のリソースを提供するためのフィードバックがありましたら [フォーム](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform)に記入をお願いします

`#mapping-discussions` の [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) にアクセスして参加することもできます！ :::

* [譜面作成の用語](./glossary.md)

## クイックスタート
> wikiはあなたの構築ブロックであり、コミュニティはあなたのインスピレーションであり、あなたは創造性です。

偉大な譜面作者には一日でなれるものではありません。 だれもあなたに追いつけなくなるようになるには努力が必要です。 私ができる最大限のことはあなたにこのwikiを提供し、あなたが譜面作成を成功させるためのすべての疑問を明確に解決します。

1. 譜面作成に必要なツールをダウンロードします。[オーディオエディタ](https://www.audacityteam.org/)や[マップエディタ](#map-editing-resources)です。
2. [オーディオファイル](#audio-editing-resources)を設定し、BPMを設定して確認し、OGG形式でエクスポートします。
3. [マッピングエディター](#map-editing-resources) で曲を設定します (ステップはエディターによって異なります)。
4. 譜面を作りましょう！ 始める前に [基本的なマッピングの実践](./basic-mapping.md) を確認してください。 早めに、そして譜面作成途中などに[テストプレイ](#playtesting)してください。
5. 照明を作りましょう！ [基本的な照明](#lighting-practices) を参照してください。 シンプルな照明は意外と簡単です!
6. [テストプレイ](#playtesting)しましょう！ [BSMG Discord](https://discord.gg/beatsabermods) を介したサードパーティのプレイテストは、建設的なフィードバックを得たり、自分では得られない気付きを得られたりします。
7. 譜面が作成され、照明効果も設定され、テストプレイされたら、 [](#publishing-songs) あなたの曲を BeatSaver で世界にリリースする準備は万端です。

### ビデオチュートリアル
テキストガイドはあなたの好みではありませんか これらのビデオをチェックしてみてください。  
:::tip Remember: テキストガイドはより簡単に迅速に変えることが可能なので、いつでも最新の情報が記載されています。 :::

#### おすすめ

* [Helen Carnateのマッピングチュートリアル](https://www.youtube.com/watch?v=6O3sXmh-kAA) - マッピングを開始するための17分のガイド!
* [Fruheadの初心者向けマッピングガイド](https://www.youtube.com/playlist?list=PL5F3WJ0s0nscdpqiWlOpM_4tJcF-CnWbm) - 初めての譜面作成に関する包括的なレクチャーシリーズ。
* [ChroMapper Editor Guide](https://youtube.com/playlist?list=PLS0PknCDCujE3Tf1pkbkA_uUijkV6v52y) - ChroMapper Editor の主な機能の使用方法に関するビデオ。
* [初心者として回避すべきCyrixのパターン](https://www.youtube.com/watch?v=mgGaqZ20Scw) - [Basic Mapping](./basic-mapping.md) で議論されている最も一般的な問題をカバーします。
* [TransquillizeMe's Beat Saber Lighting Techniques チュートリアル](https://www.youtube.com/watch?v=EDbPRN_u3jc) - さまざまな照明効果と一般的な照明のヒントをカバーします。

:::warning このページのチュートリアルは BSMG によって調査されています。 他のビデオチュートリアルは、最新の情報でなかったり、正確でない可能性があります。それらのビデオを見る場合はご自身でそのリスクを理解する必要があります。

あなたのチュートリアルをこのリストに入れたい場合は、 [こちらからお問い合わせください](https://bsmg.dev/contact) :::

#### レガシービデオ
::: warning チュートリアルでは古いエディタ(Mediocre Mapper and EditSaber) を使用しています。 UIといくつかのプロセスは、最新の推奨エディタ [MMA2](./mediocre-map-assistant.md) で変更されましたが、コンテンツは素晴らしいです! :::

* [BennyDaBeastのマッピングチュートリアル](https://bsaber.com/benny-custom-mapping/)
* [Freek のマッピングとエディターチュートリアル](https://www.youtube.com/playlist?list=PLYeZR6d3zDPgDgWogOwMteL-5SQWAE14b)

## オーディオ編集
譜面を作成する前に、譜面作成エディターで読み込むことができる音源を準備する必要があります。 このセクションでは音源の準備や編集を行うことができるフリーソフト[Audacity](https://www.audacityteam.org/)のセットアップを解説します。

### [**基本的なオーディオ設定**](./basic-audio.md)
音源なしで譜面を作成することは不可能です。 簡単に譜面作成を行うための音源準備の方法を学びましょう

### [**高度なオーディオ設定**](./advanced-audio.md)
音源のショートバージョンを作成したり、BPMの変更するなど詳細な音響の調整方法について説明します。

## 譜面作成用資料

### コミュニティのエディタ
::: warning
標準のエディタはたくさん機能がありVRを必要としません。しかしバグが起きる可能性があり、注意が必要です。
::: これらのエディタのキーボードショートカットの一覧は[こちらから](./editor-keybinds.md)利用できます。

#### ChroMapper
**オープンベータ公開！** 主に照明効果に特化されており、Chroma、Noodle Extensionsや360/90譜面がサポートされた3Dマッピングツールです。Beat Saber内のアセットが用意されているのでより詳細なプレビューを見ることができます。 FAR では、コミュニティで利用可能なエディターで最も機能が豊富です。

[ChroMapper Discord](https://discord.gg/wFjZt4z) に参加することをお勧めします。プラグイン、スクリプト、アプリケーション へのアクセスをお勧めします(マッピングサポートは BSMG で利用できます)。

* [ChroMapperランチャーのダウンロード](https://cm.topc.at/dl)
* [ChroMapper 初回セットアップガイド](https://chromapper.atlassian.net/wiki/spaces/UG/pages/917506/First-time+setup)
* [ChroMapper Wiki](https://chromapper.atlassian.net/wiki/spaces/UG/overview)

#### Mediocre Map Assistant 2
MMA2 は、ChroMapper のベータ版が完成するまでマッピングコミュニティの大半が使用していました。

* [Mediocre Map Assistant 2のダウンロード](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest)
* [Mediocre Map Assistant 2のガイド](./mediocre-map-assistant.md)

#### Beatmapper.app
ブラウザ上で起動する３Dマップエディターは誰でもマッピングができます。 拡張機能がない標準的な機能ですが、いくつか新しい機能が追加されています。

* [Beatmapper ウェブサイト](https://beatmapper.app/)
* [Beatmapper ユーザーマニュアル](https://beatmapper.app/docs/manual/getting-started)

::: tip 自分のエディタやコンバーターを作ることに興味がありますか? [マップフォーマットページ](./map-format.md) と [SongCore Readme](https://github.com/Kylemc1413/SongCore/blob/master/README.md) が役に立ちます！ :::

### 公式版エディター
公式のエディタはBeat Games によって開発されており、Steam VRとOculus PC版であらかじめインストールされています。

* [公式ドキュメント](https://beatsaber.com/documentation.html)

#### 公式エディターからコミュニティエディターへの移行
:::warning NOTE
以下の手順は、Beat Saber バージョン 1.8.0 以前の古い2Dエディタ用です。
:::

[ コミュニティエディタ](#community-editors) を使用して[クイックスタート](#mapping-quick-start)ガイドに従って再度セットアップすることをお勧めします。公式のエディタから移行させることができます。

1. [コミュニティエディタ](#community-editors)をインストールします。
2. `CustomLevels`にあなたの譜面を入れます。
    * Steamの場合 ファイルの場所: `C:\Program Files (x86)\Steam\steamaps\common\Beat Saber\Beat Saber_Data_CustomLevels`
    * Oculusの場合 ファイルの場所: `C:\Program Files\Oculus\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomLevels`
3. エディタが探せる場所にファイルを移動します。 普通`Beat Saber_Data`の`CustomWIPLevels`ファイルのことを指します。
    * Steamの場合 ファイルの場所: `C:\Program Files (x86)\Steam\steamaps\common\Beat Saber\CustomWIPLevels`
    * Oculusの場合 ファイルの場所: `C:\Program Files\Oculus\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomWIPLevels`
4. オーディオファイルを `.wav` から `.ogg` 形式に変換します。
    1. [Audacity](https://www.audacityteam.org/) をダウンロードしてインストールする
    2. Audacity で `.wav` ファイルを開く
    2. `File メニュー -> Export -> Export as OGG`
    3. ファイルに`song.ogg` と名前を付け、 <kbd>Save</kbd> をクリックします。
    4. 譜面フォルダに `song.ogg` ファイルを入れます。
        * フォルダに `.wav`ファイルは不要です。
5. コミュニティエディターでマップを開き、曲ファイル名を `song.ogg` に変更し、保存ボタンをクリックします。

譜面をつくる準備ができました！

### データ損失防止とクラウドストレージ
ゲームをアップデートするとカスタム曲がすべてなくなることがあります。これを防ぐために [Symbolic Links](https://ja.wikipedia.org/wiki/ソフトリンク)を使うという方法があります。これは譜面情報をコンピュータの別の場所にも保存します。例えば、クラウドと同期されたファイルであったり、ゲーム内に直接保管します。 アップデートやアンインストールによりマップが削除された場合でも、作成されたリンクは削除されません。 再帰的な削除によって譜面を削除します

クラウドストレージフォルダを使用することで、複数のコンピュータ間で操作する場合やストレージディスクが破損したときなどに便利です。

以下の手順はWindows 10および11の場合のものです。

1. 現在のレベルフォルダを新しい場所に移動します。 (`Ctrl + c` の代わりに `Ctrl + x`)
   * これがクラウド上のファイルである場合は、オフラインで利用できるようにフォルダを設定してください!
2. コマンドプロンプトを開く
3. 場合によってはパラメータを調整するコマンドを実行します。  
     
   `mklink /j "Path to Beat Saber Install folder" "Path to New Location"`
    * コマンド例:  
      `mklink /j "C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels" "C:\Users\cmb\CloudStorage\CustomLevels"`

ネットワークドライブ上にある場合は、 `/j` を `/D` に置き換えます。 この方法を実行するにはコマンドプロンプトを開く必要があることに注意してください。

### 追加のマッピングツール

* [BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit**  
  ゲームを起動しなくても譜面がどのように見えるのかを確かめる便利なソフトです。
* [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit**  
  譜面作成における便利なツールが含まれています。
  * **Schema Fixer:** Mediocre Mapper Mk4.1 と Mk5 で作成したマップを簡単に修正して、BeatSaver にアップロードします。
  * **Tempo Changer:** マップ全体の BPM を変更し、それに応じて配置をシフトします。
  * **Offset Remover:** 浮動小数点誤差を軽減するために、エディタのオフセットを削除し、ノーツ/ボム、壁/イベントを標準的な位置にスナップします。
  * **Note Soter:** スタックを修正するために、マップファイル内の乱雑になっているノーツ/障害/イベントをソートします。
  * **Copy Timing:**特定のノーツを他の難易度にコピーします。 すべての難易度にわたってある音に対してタイミングを少しだけずらしたい時などに便利です。
  * **Copy Lighting:** 1つの難易度からほかの難易度すべてにカスタムイベントとすべてのライティングをコピーします。
  * **Map Diff:** 譜面のバージョンの比較。 テストプレイやランキングチームでどこに変更が加えられたかを見るときに便利です。
* [Parity Checker](https://galaxymaster2.github.io/bs-parity/) by **GalaxyMaster**  
  譜面でパリティの問題を見つけることができるエラーチェッカーツール。
* [Map Check](https://kivalevan.github.io/BeatSaber-MapCheck/) by **Kival Evan**  
  MMA2に組み込まれているものよりも汎用性の高いエラーチェッカーツール。
* [noodleLister](https://github.com/bloodcloak/noodleLister#readme) by **Bloodcloak**  
  BeatSaberの譜面を譜面のキーコマンドが入ったテキストファイルから簡単にプレリストへ変換できます。

#### レガシーツール
これらのツールはサポートされてはいませんが、現行のバージョンと互換性があり特定のケースで役に立つことがあります。

* [BeatMerge](https://github.com/ZelonGames/BeatMerge#readme) by **DarkGrisen**  
  Ever thought that it is a lot of annoying work to make big maps with other people or to perfectly cut the audio files so you can merge them manually later? This tool allows you to merge two or more maps into one single super long map.
* [Cinder](https://github.com/zhaey/cinder#readme) by **zhaey**  
  Python program that converts stepmania `.sm` files to Beat Saber `.dat` files for timing notes.
* [BeatMapper Tools](https://beatmappertools.com/) by **Darkuni**  
  A utility for users of Mediocre Mapper and Mediocre Map Assistant 2 to easily convert, test, and package their maps.
* [osu! Editor Timing Tutorial](https://www.youtube.com/watch?v=nIX0koHzW8c&t) by **Fayhe**  
  Video guide on using the timing feature of osu!'s editor to find map bpm.

### 便利なMod
ここには譜面作成をすこし楽にするツールがあります。

* [SiraUtil](./basic-lighting.md#in-game-with-fpfc) by **auros**  
  第一人称視点フライングコントローラー（FPFC）のパラメータを設定して、キーボードやマウスを使ってゲームのプレイ中に視点操作ができます。 Mod へのリンクや設定方法については、 [基本的な照明効果](./basic-lighting.md#in-game-with-fpfc) のセクションを参照してください。
* [PracticePlugin](https://github.com/denpadokei/PracticePlugin) by **denpadokei**  
  曲の再生位置、速度の調整や曲のループを作成します。  [Mod Assistant](https://github.com/Assistant/ModAssistant#readme)から最新版をダウンロードできます。
* [ReLoader](https://github.com/Kylemc1413/ReLoader) by **Kyle1413**  
  メニューから再読み込みをせずに練習モードでマップをリロードできます。 ウォールマッピングの際に便利です。

## マッピングの練習
> "ルールを破るには、まずそれを熟知しなければならない。"  
> \- Uninstaller

マッピングの聖書はありませんが、このwikiのセクションには、コミュニティから寄せられたマッピングのあらゆる段階で有益な情報が得られます。 ある程度スキルを身に着けるまではここでのルールを守り、クリエイティブに、試行錯誤を行い、挑戦していきましょう。

### [**基本的なマッピング**](./basic-mapping.md)
これから譜面を作成しようとする人はみなこれを読む必要があります。**例外はありません！**

### [**中級者向けの譜面作成ガイド**](./intermediate-mapping.md)
多くのマッピングトピックを詳細に見る

### [**ダウンマッピング**](./downmapping.md)
より低い難易度を作るための包括的なガイド。

### [**上級者向け譜面作成**](./extended-mapping.md)
Mapping Extensions、追加要素や 360&deg;/90&deg; などの譜面作成方法

### Mapperのロール
To apply for the **Mapper** role on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) you must have released three solid/playable maps (collaborations are acceptable) and complete the [Mapper Role Submission Form](https://forms.gle/mj66J3UopTykFJjXA). Your application and maps may take a decent amount of time to be reviewed and approved.

### キュレーション
Mappersは [BeastSaber Discord](https://bsaber.com/getting-started/curation/#donts) の#curation-requestチャンネル に [客観的な問題](https://discord.gg/VJZHUbt)なしで高品質のマップを提出することができます。 キュレーションされたマップは、サイトで優先的に表示され、キュレーター推奨フィードにいれられます。

### Modding & ランキング
ある[Ranking Criteria](https://scoresaber.com/criteria)の条件を満たし、”Moding”と呼ばれる検証と改善が行われた譜面はランク付けされる可能性があります。ランク付けされた譜面はリーダーボードに対応するパフォーマンスポイント(PP)がプレイヤーに与えられます。 More information and an in-depth FAQ is available on the [ScoreSaber Discord](https://discord.gg/WpuDMwU)

* Prior to requesting ranking, mappers should thoroughly review the ranking criteria and [metadata standards](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit) and have their map modded by a knowledgeable source.

:::tip より詳しい情報 ランクについては[Ranking Criteria](https://scoresaber.com/criteria) を確認してください。 :::

* マップが改善、修正されるとランキングチームからの評価へと段階が進みます。
* ランキングチームがマップをランク付けされるにふさわしいと判断した場合、マップに投票が行われます。

### マッピングに不安を感じる
If you're finding it difficult to muster up the courage to upload your map, or are finding it emotionally taxing coping with a lack of downloads or a lot of dislikes, you're not alone. Many mappers have experienced these feelings. You can read more about it on the [Coping with Mapping Anxiety](./mapping-anxiety.md) page.

## 照明効果
ライティングをするまでマップは完成していません。 ライティングはとても簡単な方法から追加のModを使うことでより細やかに設定することができます。

### [**基本的なライティング**](./basic-lighting.md)
ライティングの様々な効果を学べます

### [**中級者向けライティング**](./intermediate-lighting.md)
Take your lighting skills a bit further into strobing, ring spins, and contrast practices

### [**高度なライティング**](./advanced-lighting.md)
Advanced and nuanced techniques, lighting for custom platforms, and Chroma RGB **(This page is still a work in progress!)**

### オートライティング
ライティングをつける準備ができていませんか？ ここにあなたの代わりにライティングを作成してくれるプログラムを紹介します。 覚えておいてほしいのは、手動でライティングをつけることはそれほど難しくはありません。曲の雰囲気をよりよく表現するにはこれらのプログラム使うより自分で行ったほうが良いことがあります。

* [Lolighter](https://github.com/Loloppe/Lolighter#readme) by **Loloppe#6435** - スタンドアローンで動作する照明効果自動生成プログラム。 マップを修正するための機能も備えています。
* [LiteMapper](https://litemapper.net/) by **ItsOrius** - A website that automatically generates lights based on pacing, emphasis, and note placement. For more information on the algorithm check out the [Readme](https://github.com/ItsOrius/LiteMapper#readme).
* **Lightmap** - It is integrated into Mediocre Map Assistant 2 and can be accessed in the error checker menu.

## テストプレイ
テストプレイはマッピングの**重要**なプロセスです。 テストプレイにより主要なプレイ感の調整やマップの感触を知ることができます。 [サードパーティーや外部](#community-third-party-testing)でのテストプレイはより建設的な意見がもらえたり自分でプレイしたときにはわからない部分を検証してくれる便利な方法です。

::: danger 注意 テストプレイを行うためにBeatSaverにマップをアップロードする**必要はありません** :::

* マップがバージョン1.0のフォーマットを使用している場合(.jsonと.oggファイル形式) **エディタを更新**しマップを変換しなければいけません。 [コミュニティのエディタ](.#community-editors)を参照してください。
* ver2.0のフォーマット（.dat や`.ogg`/`.egg`）である場合はもう準備は完了しています。

### PCでテスト
コミュニティエディタで作成されたマップをPCでテストプレイを行うには次の手順に従ってください。

1. WIPソングフォルダが `Beat Saber_Data_CustomWIPLevels` にない場合は、そこにマップのコピーを置きます。
2. ゲーム内のプレイリスト一覧からCustomWIPLevelsに行きます。 練習モードでプレイしてください。（プレイボタンの横のボタンを押してください）

**Made changes to your map while the game is open?**  
Click on the game window. Then while you are on the Main Menu or Song Select Menu press <kbd>Ctrl + r</kbd> on your keyboard. Your changes will be loaded without needing to restart the game!

:::tip 注意点

* CustomWipLevelsカテゴリの表示や  <kbd>Ctrl + r</kbd> ショートカットを使用するには、**SongCore**Modがインストールされている必要があります。
* `CustomLevels` と`CustomWIPLevels` に重複したマップファイルがあると、問題が発生することがあります。
* Webサイトでオーディオを`.ogg`に変換すると、オーディオファイルが不正なものとして扱われ、ゲームに読み込まれなくなることがあります。 Audacityを使用し、[基本的なオーディオ設定](./basic-audio.md) の手順に従うことが、ゲーム内でマップを確実に読み込む最も簡単な方法です。 :::

### Questでテストプレイ
コミュニティエディタで作られたマップをOculus Questで遊ぶには以下の手順に従ってください。 [SideQuest](https://sidequestvr.com) と [BMBF](https://bmbf.dev/stable) がインストールされている必要があります。

1. PC上でWIPソングフォルダを探します。
2. PCとQuestを接続します。
3. PCでSideQuestを開き、右上のフォルダアイコンをクリックします。 ![SideQuest Files](~@images/beginners-guide/sqfiles.png)
4. `sdcard/ModData/com.beatgames.beatsaber/Mods/SongLoader/CustomWIPLevel` に移動します。 このフォルダが存在しない場合は、 自分で作成できます。
5. PCからSideQuestでそのフォルダにテストプレイしたい曲をアップロードします。
    * **注意:** zipファイルではなく、解凍したフォルダが必要です。
6. ゲーム内のCustomWIPLevelsのプレイリストにマップが表示されます。 通常のPlayボタンではなく、 練習モードのプレイしかできないことに注意してください！

ウェブサイトで`.ogg`ファイルを作成すると、エディタで不正なファイルとして扱われ、ロードされない可能性があります。 Audacityを使用し、[基本的なオーディオ設定](./basic-audio.md) の手順に従うことが、ゲーム内でマップを確実に読み込む最も簡単な方法です。 :::

### コミュニティ/サードパーティーテスト
The `#testplays` channel in the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) makes it easy to have your work checked by knowledgeable mappers. テストプレイヤーはあなたの譜面をよりよくするための建設的な意見を提供します。ビデオや文章でDMもしくは`#mapping-discussion`から返信を行います。

:::warning 注意

* 1分未満のマップは、あまり多くのテストプレイやフィードバックをもらえないかもしれません。 `#mapping-discussions` 代わりにテストプレイしてくれる人を探すのが良いかもしれません。
* チャレンジ譜面や超高難易度譜面はフィードバックを受けるのに時間がかかることがあります。高いスキルを持ったプレイヤーはあまり多くありません。
* マッピングスキルを上達させるためにまじめな投稿を心がけてください。 ネタ譜面やいたずら譜面は、テストプレイヤーの時間を無駄にするので投稿は控えてください。
* [追加のマッピングツール](#additional-mapping-tools)やエディタに組み込まれているパリティチェッカーで譜面を一度確認してください。 :::

1. 譜面を圧縮して.zip ファイルを作成します。
    * [Chromapper](#chromapper)を使っている場合は、Song info画面の`Create Zip`から`.zip`ファイルを作成できます。  
      ![Create Zip button](~@images/mapping/cm-create-zip.jpg)
    * [MMA2](./mediocre-map-assistant.md)を使用している場合は`Package Song to Zip` ボタンを押すと、`.zip`ファイルが作成されます。  
      ![Package Song to Zip button](~@images/mapping/mma2-package-zip.jpg)
    * [Beatmapper.app](#beatmapper-app)を使用している場合は [ダウンロード方法](https://beatmapper.app/docs/manual/publishing#downloading-your-map) に従ってください。
    * [このガイド](https://streamable.com/u20ci)のように手動でzipファイルを作成することもできます。
2. Upload your map to `#testplays` using the following format:

* **Map:** マップの名前とアーティスト
* **Length:** 曲の長さ
* **BPM:**曲のBPM
* **Difficulty:** 難易度の種類
* **NPS:**1秒ごとのノーツ数
* **Feedback:** フィードバックでほしい情報（特定の難易度を見てほしい、特定の個所について意見が欲しいなど）
* **Status:** マップがどの段階にあるか （第一版でライティングがありません。1：45まで完成しています。など）

3. テストプレイヤーは1-7日の間にあなたのマップをみて絵文字でリアクションを取ります。`#testplays`チャンネルでピン止めされている絵文字リストを 参照してください。

:::warning 注意: 投稿またはフィードバックを受け取った後に変更を加えた場合は 🛑 `:octagonal_sign:` のリアクションをつけてください。これは、このバージョンのテストを中止することを示します :::

次のテンプレートをコピー&ペーストしてDiscord内でご利用ください。

```txt
**Map:**
**Length:**
**BPM:**
**Difficulty:**
**NPS:**
**Feedback:**
**Status:**
```

### テストプレイする方法
新しい譜面がサーバーにアップロードされる前にテストプレイを手伝いたいと思ったことはありますか？ マッピングコミュニティを形成するのを手伝いたいですか？ テストプレイヤーになってみてはいかがですか？ 始めるには [テストプレイガイド](./how-to-testplay.md)をご覧ください！

## マップを公開する
Once your song has been mapped, lighted, and playtested and it’s a finished product you’re ready to release it to the world!

### BeatSaver
[BeatSaver](https://beatsaver.com/) はすべてのカスタムマップが公開されています。

#### マップを公開する方法

::: danger 注意

* **完成していない**マップをBeatSaverにアップロードしないでください。
  * BeatSaverにアップロードするということは、「商品棚に置く」ことと同じ意味を持ちます。**最終版のみ**投稿してください。
  * マップのテストプレイ手順については、 [テストプレイ](#playtesting) のセクションを参照してください。 :::

1. [ユーザー名/パスワードを使用して BeatSaver で](https://beatsaver.com/register) アカウントを作成するか、Discord経由でログインしてください。
2. 右上の <kbd>+</kbd> アイコンをクリックし、 <kbd>`Upload Map`</kbd>をクリックします。
3. 譜面の名前とその説明を書きます。 譜面の名前と概要欄が検索の対象なので、曲名、アーティストや関連する単語を入れると譜面が見つけやすくなります。
    * (Chroma)や(Onesaber)、(Mapping Extensions)など特殊な仕様がある場合はタグを使用して強調することができます。
    * Putting a link to a playthrough video in the map description can help you get more downloads as it is easier to share your map to others and lets people know what to expect.
4. Add your `.zip` file and identify whether your map was human-made or AI-assisted.
    * 自動作成された譜面を人が作成したものとしてアップロードした場合、譜面は削除されます。
5. マップは最初に未公開のタブにアップロードされます。 公開するためには、パブリッシュする必要があります。

::: tip NOTE
Map files can now be updated on BeatSaver!
If you need to upload a new version of your map you must first recall the map to your unpublished tab before you can
upload a new version. This will retain your map key and statistics but will reset all leaderboards.
:::

### BeatSaver トラブルシューティング
マップをアップロードするときによくあるエラーの解決方法です。もしここで解決しなければ `#mapping-discussion` で質問してください。

:::danger 注意

* アップロードする前にマップを [テストプレイ](#playtesting) してください。
  * WIP マップは削除されます!
* DeepsaberやBeat Sageなどの自動生成ソフトウェアによって作成された譜面をゲームにインストールするためにサーバーにアップロードする必要はありません。 PCをお使いの場合は、 `CustomLevels` フォルダにファイルを解凍して入れてください。 Questをお使いの場合は、Questの [テストプレイ](#testing-on-a-quest) に従ってマップをインストールしてください。 :::

---

#### Map already uploaded（マップはすでにアップロードされています）

* そのマップはすでにアップロードされています。 マップに少しの変更を加えることでアップロードできるようになります。例）ライトブロックを取り除いて、置きなおす

---

#### ``_difficultyBeatmapSets[]._difficultyBeatmaps[].`Difficulty.dat`._version``: Must not be null

* 現在のフォーマットに準拠していないデータファイルがあります。古いエディタを使用している可能性があります。 [コミュニティのエディタ](#community-editors)を参照してください。

---

#### ``_difficultyBeatmapSets[]._difficultyBeatmaps[]`Difficulty.dat`._notes[]_time``: Must be between 0 and x

* 再生可能な範囲を超えたところにノーツが配置されています。（通常コピペのエラーです） それらを削除して、再アップロードしてください。

---

#### サーバー内部エラー
これはデフォルトのエラーメッセージです。原因は次のとおりです。

* ファイルサイズが制限の15MBに近いもしくはオーバーしている。 音源の質を少し落としてください。
* サポートされていない文字がファイルに存在します。 Japanese (日本語/にほんご), Kaomoji (٩(◕‿◕｡)۶), 中国語 (汉语/漢語), アラビア語 (اَلْعَرَبِيَّةُ‎), アクセント記号 (Ä/é/ó) などの特殊な文字がメタデータとブックマークに使われていないか確認してください。
  * [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit** 問題の特定に役立つツールです。
* セッション期限切れ ページを更新する場合は、ログアウトする必要があります。 ログインして再度アップロードしてください。

---

#### Could not verify user []

* このエラーはrecaptchaが原因です。 ページを再度読み込みしてください。

---

#### Beatmap zip contains an illegal file! 旧バージョン

* 通常、gif などのサポートされていないファイルが zip にあることが原因です。

---

#### Beatmap does not contain an Info.dat file! 旧バージョン

* Usually caused by having the files in a subfolder. You need to zip the files instead of the folder. [How to Video](https://streamable.com/u20ci) Or use the handy export button in your editor instead. **NOTE: MMA2's export button does not include contributor images in the zip.**

---

#### One or more beatmap difficulty files cannot be found! 旧バージョン

* You might have forgotten to include all of your difficulty files are in the zip.
* A difficulty's `"_beatmapFilename"` in the `Info.dat` might be using a different file name than what is present in the folder.
* A deleted difficulty is still being referenced in your `Info.dat` file. Check to make sure you do not have unintended difficulties in the `"_difficultyBeatmaps"` cluster of each present characteristic.

---

#### Error in `MapDifficulty.dat`. Root should NOT have additional property: `_time`. 旧バージョン

`_time` はこのタイプのメッセージの一般的なエラーです。 ただし、別のプロパティの場合にも同じ解決策が適用されます。

* ファイルはフォーマットに準拠していません。 詳しくは、 [フォーマットの変更](#beatsaver-data-schema-change-october-27-2019) を参照してください。

---

#### Beatmap could not be parsed! 旧バージョン

* これは極端な負荷がサーバーにかかっている可能性があります。 後でもう一度試すか、 `#mapping-discussions` で確認してください。

---

#### Field `._customData._contributors[]._iconPath` contains an invalid filename. 旧バージョン

* Utilizing the contributors field requires all aspects to be included. Make sure all 3 aspects (Role, Name, iconPath) are filled and there is a unique square image for each iconPath entry in your zip.

---

### BeastSaber
[BeastSaber](http://www.bsaber.com) は、譜面のレビューやキュレート、コメントを行っているサイトです。 BeatSaverにアップロードされたすべての曲は、10-15分以内にBeastSaberに反映されます。 さらに、BeatSaverから削除されたマップ はBeastSaberから削除されるまでに最大1日かかる場合があります。

## [クレジット](./mapping-credits.md)
*30*を超えるマッピングガイドがこのwikiに統合されています。このガイドはBSMGコミュニティによって管理されています。 本当に、ほんとうに **本当に** この道を切り開き、情報を提供してくださったことに感謝します。 協力してくださった方々は [こちらから](./mapping-credits.md)ご覧ください！
