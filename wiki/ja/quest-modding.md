---
sidebar: auto
---

# Quest Modding

## はじめに

* このガイドはQuest1とQuest2のためのものです。
* 今までModによってBANされたことはありません。

::: danger 注意
しっかりと理解してからModを利用しましょう

* 初期設定（バニラ）には存在しない問題が発生する可能性があります。 99.9％のバグ、クラッシュや遅延はModによるものです。
* Modはゲームのアップデートによって動かなくなる可能性がありますが、普通のことです。このようなことが起きた場合は忍耐強く、敬意をもって待ちましょう。Mod作成者はボランティアです。
* Beat Gamesは、意図的にMODを破壊しようとはしていません。 コードベースで動作することを想定しているので、Modを壊すこともありますが、Modを排除しようとはしません。

Modに関連する問題でゲーム開発者を非難しないでください。 ただのクレーマーになってはいけません。
:::

:::warning Youtubeのビデオチュートリアルを見たのですが、うまくいかず困っています。 どうすればいいですか？
BSMGでは、改造のためにビデオチュートリアルを使用しないことを**強く**お勧めします。 多くの場合、それらの情報は古いものであったり、不完全であったり、誤った情報であったりすることがあります。

代わりに、ここで書かれたガイドに従うか、 [BSMG Discord](https://discord.gg/beatsabermods) のヘルプを探してください。（いくつかの日本語サイトも古い情報を含んでいるので注意してください）
:::

## インストール
現在、カスタム曲やMODをインストールする唯一の推奨方法は、[パソコンでSideQuestから](#sidequestでbmbfをインストールする)BMBFをロードすることです。

PCを使えない場合は、 [Android端末でModを導入する](./support/modding-with-android.md) を参照してください。 iPhoneやiPadなどのChromebookやiOSデバイスはサポートされていません。

:::warning 警告
BMBFをインストールすると公式のマルチプレイモードや公式のリーダーボードへのスコアの送信、リプレイの記録ができなくなります。 もしModが導入された状態でマルチプレイを行いたい場合は`Beat Together`が必要になります。これはPCとQuestのクロスプレイを可能にします。また、両方とものカスタムソングで遊ぶことができます。 ディスコードの[Beat Saber Modding Group](discord.gg/beatsabermods)の`#quest-mods`チャンネルもしくは[Questboard](https://questmodding.com)のサイトで入手できます。

ランク付けされた曲からパフォーマンスポイント(PP)を得るためには、 [ScoreSaber](https://new.scoresaber.com/quest) modが必要です。 [このリンク](https://new.scoresaber.com/quest) では、 ScoreSaberページに移動して設定する方法が書いてあります。 Scoresaberは公式のリーダーボードを置き換えるものではなく、カスタム曲のリーダーボードだけが追加されます。

**注意** [ScoreSaber Discord](https://discord.gg/WpuDMwU)のサーバーでModが現在のゲームバージョンで使えるかチェックしてください。
:::

### SideQuestでBMBFをインストールする
SideQuestをまだ設定していない場合は、 [SideQuest](https://sidequestvr.com/#/setup-howto) をダウンロードしてセットアップしてください。

BMBFを取得するには3つの方法があります。

* [PC上のSideQuestストア](#sidequest-storeからダウンロード)
* [BMBFのウェブサイト](#bmbfのウェブサイトからダウンロード)
* PCをお持ちでない場合は、 [AndroidのSideQuestストア](./support/modding-with-android.md) を使用できます。
  * iPhoneやiPadなどのChromebookやiOSデバイスはサポートされていません。

:::tip
以前にModが導入されたBeat Saberやスコアがあれば、 [あらかじめデータをバックアップしてください!](#sidequest-を使用してセーブデータをバックアップ)
:::

#### SideQuest Storeからダウンロード

1. QuestをPCに接続して、[SideQuestからBMBF](https://sidequestvr.com/app/747)へアクセスします。
2. `Install To Headset` ボタンをクリックします。 (SideQuestを開くというポップが表示されたら開くを押してください。)
3. BMBFがヘッドセットにインストールされるのを待ちます。

インストールが完了したら、ガイドの [BMBFのセットアップ](#bmbfのセットアップ) セクションに進んでください。

#### BMBFのウェブサイトからダウンロード
初めに[BMBF APK](https://bmbf.dev/stable)をパソコンにダウンロードします。

SideQuestを開き、QuestをPCに接続します。

Modがインストールされていたら`UNINSTALL APP`ボタンからアンインストールしてください。 Mod導入後、同じメニューから復元できます。

`Install APK from folder`ボタンを選択して最新のBMBF apkをみつけダウンロードしてください。もしくはSideQuestにドラッグしてください。 どちらの方法でもBMBFをQuestにインストールできます。

![APKのインストール](~@images/beginners-guide/apkfromfolder.png)

ガイドの [BMBF セットアップ](#bmbfのセットアップ) セクションに進んでください。

#### BMBFのセットアップ

BMBFのインストールが完了したら、BMBFがサポートしている最新のBeatSaberがインストールされ、Modが入っていない事を確認してください。 BSMG Discordの `#modding-announcements` チャンネルや、[QuestBoard](https://www.questmodding.com/) で、対応バージョンやModについてのニュースを確認してください。

:::warning 注意
Modを入れる前に、Beat Saberを一度起動し、任意の曲を一回プレイしてください。すぐに失敗しても大丈夫です。

現状、マルチユーザー機能を利用している場合、Modは動作しません。 Modを導入する前に一時的にサブアカウントをすべて削除する必要があります。 希望のModをインストールし終えたらあとで元に戻すことができます。
:::

Beat Saberを一度実行した後、以下の写真のように、unknown sources(提供元不明) からBMBFを開きます。 ![不明なソース](~@images/beginners-guide/quest_home-menu.jpg)

開いたら、BMBFの各手順に沿ってModを導入してください。 完了後[QuestBoard](https://www.questmodding.com/)と[BeastSaber](https://www.bsaber.com)がBMBFにアプリとしてロードされます。 そこから利用可能な任意のカスタム曲をダウンロードすることができます。 また、BeatSaverボタンをクリックして曲をダウンロードすることもできます。

インストールする手順の中で `Restore App` がポップアップ表示されることがありますが、そのときは `Close` をクリックしてください。 この警告は海賊版ゲームに向けられたものなので、Modを導入しているだけの場合は、無視してもほとんど影響はありません。

![RestoreApp](~@images/beginners-guide/restoreapp.png)

引き続き[コアmod](#コアmod)のインストールステップに進んでください。

## 保存データの管理

### SideQuest を使用してセーブデータをバックアップ

SideQuestを開き、QuestをPCに接続します。

SideQuest ファイルエクスプローラを使用して、 `sdcard/Android/data/com.beatgames.beatsaber/files` に移動します。

![SideQuestファイル](~@images/beginners-guide/sqfiles.png)

`AvatarData.dat`と`PlayerData.dat` と `settings.cfg` を PC 上のフォルダに保存します。 これらにはあなたのスコアやそのほかのセッティングが含まれているのでなくさないでください。

### SideQuest を使用してセーブデータを復元

データを復元するにはSideQuestを開き、PCに接続します。  
SideQuestのファイルから[サイドクエストを利用したバックアップ](#sidequest-を使用してセーブデータをバックアップ)で保存した3つのファイル`AvatarData.dat`、`PlayerData.dat`と`settings.cfg`を`sdcard/Android/data/com.beatgames.beatsaber/files`に入れます

## Modをインストール

### コアMod
追加のMODをインストールする前に、BMBFウェブインターフェースの右上を見てください 。`Beat Saberと同期`と書かれた赤いボタンが表示されます。 これをクリックして同期を完了させます。 BMBFの `mods` タブに移動します。 7つのコアModがあることを確認してください:

* Custom Types
* Codegen
* SongLoader
* Playlist Manager
* QuestUI
* SongDownloader
* PinkCore

:::danger 注意
これらのコアModが無いと他のModは動作しません！

これらのMODのいずれかがリストにない場合は、BMBFの `Tools` タブ内の再インストールボタンを押してください。 それでもModが表示されない、もしくは表示されるがゲーム内で動作しない場合はトラブルシューティングの[コアModが動かない場合](#コアmod-が動きません)を参照してください。
:::

### Quest 内での操作
:::warning 注意
すべてのModがQuestBoardで使えるわけではありません!  
もしお探しのModがここで見当たらない場合は [PCを使った方法](#pcを使った方法) を代わりにお試しください。
:::

クエストでBMBFを開き、`Browser` タブに移動します。 QuestBoard は自動的に開きます。  
そうでない場合は、`Choose Website` をクリックし、`QuestBoard` ボタンをクリックします。

![globequestboard](~@images/beginners-guide/globequestboard.png)

以下の [QuestBoard](https://www.questmodding.com/) ウェブサイトにアクセスしてください 次に、 `Get Mods` タブを選択します。

![questboardhome](~@images/beginners-guide/questboardhome.png)

ポインタをドラッグして下にスクロールします。 そのリストから任意のModを選択し、その隣のダウンロードボタンを押してダウンロードすることができます。 一部のダウンロードは、ウェブサイトまたはGitHubページにリダイレクトされる場合があります。 その場合は、画面上の指示に従うか、リリースリストで最新の `.qmod` をそれぞれ選択します。

![questboardmods](~@images/beginners-guide/questboardmods.png)

### PCを使った方法
[BSMG Discord](https://discord.com/invite/beatsabermods)の`#quest-mods`チャンネルで他のModを探してインストールすることができます。

:::warning 注意
クエストとPCが同じネットワークに接続されていること、httpsではなくhttpであることを確認してください。
:::

QuestでBMBFを開き、 `Tools` タブに移動します そこにウェブアドレスとバージョン番号が表示されます

![ip](~@images/beginners-guide/ip.png)

お使いの PC でブラウザを開き、検索バーにアドレスを入力します。

以下の画面にアクセスできるはずです。

これがうまくいかない場合は、 [こちら](#bmbf-web-インターフェイスが読み込まれていません) をクリックしてトラブルシューティングの手順にしたがってください。

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Quest互換のModをアップロードボックスにドラッグして、同期してください。 もともと古いバージョン用に作られたModの場合は、自動的に有効にはなりません。 古いModを有効にするには、 `Mods` タブに移動し、そこから有効にします。

## 曲のインストール
::: tip
譜面の探し方 「すべての曲から」「レート順」「ダウンロード数」「プレイ数」によってソートできます。ここにあるほとんどの曲は「よいマップの作り方ガイド」ができる前に作られたものです。 2019年後半から今の間にリリースされた曲をダウンロードして、最高の カスタムマップを体験してみてください。
:::

### ゲーム内でダウンロードする方法
SongDownloader (コア mod) を使ってゲーム内で曲をダウンロードできるようになりました。 ゲーム内で曲をダウンロードするにはいくつかのステップがあります。

1. Beat Saberを開く
2. メインメニューの左側にある「Mods」パネルを見る
3. SongDownloader タブを開く
4. 曲を検索してダウンロードします。

ゲーム内で曲をダウンロードするときは、ゲームを再起動する必要はありません。 SongLoader を使用して自動的に曲をロードします。 ![songDownloader](~@images/beginners-guide/songdownloader.png)

### BMBFからダウンロードする方法
ブラウザーウィンドウを使用してQuest内にカスタムマップを取得するには、2つのソースがあります。

* キュレーションされたマップとプレイリストをお探しなら、 [BeastSaber](https://bsaber.com/) をご覧ください。
* BeastSaberのUIが気に入らない場合は、 [BeatSaver](https://beatsaver.com/)を試すこともできます。

どちらにもOneClick™ ボタンがあり、Questにその曲を簡単にインストールできます。 ブラウザウィンドウの右上にある地球儀アイコンを使用して、これらのウェブサイトを切り替えることができます。

`Syncsaber`を使うことで様々な種類の曲を簡単にダウンロードできます。QuestのBMBFから`Syncsaber`というタブをクリックしてください。 ここではボタンをクリックして曲をダウンロードすることができます。様々な設定から選ぶことができます。 例えば[Beatsaver's](https://beatsaver.com/)でのトップ20をダウンロードしたい場合は"hot"を選んでください。もしくは50の最も難しい曲を選ぶこともできます。

また別の方法として[Beastsaber](https://bsaber.com/)の`Bookmark`という機能が使えます。 アカウントを作成した後、曲についている小さいブックマークをクリックすると、もし後でQuestからすべての曲を削除した場合でも、OneClick™でブックマークされている曲を再ダウンロードすることができます。

### PCを使った方法
Quest内でマップをインストールできない場合は、modのインストールと同様にコンピュータを使用してマップをインストールできます。

1. お使いのコンピューターで [BeastSaber](https://bsaber.com/) または [BeatSaver](https://beatsaver.com/) にアクセスしてください。
2. zipファイルをダウンロード
3. [PC を使用して Mod をインストールする](#pcを使った方法) の手順に従って、ファイルのアップロード画面を開きます。
4. マップのzipファイルをドラッグアンドドロップするとインストールされます！

これがうまくいかない場合は、 [こちら](#bmbf-web-インターフェイスが読み込まれていません) をクリックしてトラブルシューティングの手順に従ってください 。

:::tip
プレイリストも同様にダウンロードできます。 様々なプレイリストが[Beastsaber](https://bsaber.com/category/playlists/)やディスコードのチャンネルで見つけることができます。 また、 [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager)や[Playlist Editor Pro](https://beatsaberquest.com/playlisteditor-pro/)を使って自分自身だけのプレイリストを作ることもできます。

作成したマップをテストしたい場合は、 [Questでテスト](./mapping/#testing-on-a-quest) の譜面作成セクション内の「テスト用」セクションを参照してください。
:::

## モデルのインストール
[Qosmetics Community](https://discord.gg/qosmetics) に参加して、メニューのタイトル、セイバー、ノーツ、壁の見た目を変えましょう！

## 役に立つリンク

* [Qosmetics Community](https://discord.gg/qosmetics) - Quest用にセイバー、ノーツ、壁が保存されているサーバー。
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Quest用に独自のカスタムセイバー、ノーツ、壁を作成するためのガイド。
* [Questboard website](https://questmodding.com) - Beat Saber関連のニュースや最新の modsリリースの情報など！
* [Questboard discord server](https://discord.gg/P7sUKVnP) - BeatSaberのクエストに関係する情報があります。またModがリリースされたときに通知を受けることもできます。
* [オーディオ同期ズレの修正](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - カスタムマップのゲーム内ランキング
* [ScoreSaber](https://scoresaber.com) - カスタムマップのリーダーボードを閲覧できるウェブサイト。

## トラブルシューティング
:::warning Youtubeのビデオチュートリアルを見たのですが、うまくいかず困っています。 どうすればいいですか？
BSMGは他のチュートリアルを使用しないことを**強く**お勧めします。 多くの場合、それらの情報は古いものであったり、不完全であったり、誤った情報であったりすることがあります。

代わりに、ここで書かれたガイドに従うか、 [BSMG Discord](https://discord.gg/beatsabermods) のヘルプを探してください。
:::

### beatmods.comまたはmodelsaber.comから手に入れたModが動きません。
[BeatMods](https://beatmods.com/) や [ModelSaber](https://modelsaber.com/) のMODが動作しないのはそれらがPC用であるからです。

Questに互換性のあるModは [Questboard](https://www.questmodding.com/) かBeat Saber Moddingのディスコードチャンネル`#quest-mods`から、セイバー、ブロック、壁は[Qosmetics Community](https://discord.gg/qosmetics)から入手してください。 ModまたはモデルのZIPを取得したら、 [BMBF Webインターフェイス](#pcを使った方法) を使用してインストールします。

### BMBFのサイドローディングに失敗しました
BMBFをサイドローディングするとエラーが表示されます `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!`

クエストでBMBFバージョンをアンインストールする必要があります。 SideQuestの `My Apps` メニューから行うことができます。

### コアMod が動きません

コアMod に問題がある場合は、古いModを使用していないかを確認してください。 古いバージョンで作成されたModはすべて古いModとして認識されます。 一度それらを削除し、下記手順を試行してください。

1. `Tools`に移動します。
2. `Download Mods` をクリックします。
3. `Sync to Beat Saberをクリック`

すでにModがインストールされている場合は一度アンインストールして、再度インストールし直してください。

---

### BMBF Web インターフェイスが読み込まれていません
BMBF Web インターフェイスが読み込まれていない場合 同じネットワークにあるコンピューターのブラウザにツールタブからIPアドレスを入力していることを確認してください。 下記の順番で確認を行ってください。

1. IPアドレスが `127.0.0.1`ではない場合、ヘッドセットやルーターを再起動してください。
2. ヘッドセット内でBMBFを起動している
3. リンクの先頭に `http://` があり、 `https://` ではない
4. リンクの最後に `:50000` がある
5. PCとクエストは同じWi-Fiネットワーク上にある
6. IPアドレスが常に同じである

これらのいずれも確認して動かない場合は、Questを再起動し、リストを再度確認してください。

---

### BMBFが数分間、設定を読み込みません
これは対応していないゲームバージョンでBMBFを使用したことが原因と考えられます。 例えばバージョン `1.13.0`用のBMBFをバージョン`1.12.2`のBeatSaberがインストールされたヘッドセットで起動するような場合です。  
もしリリースページで言われているゲームバージョンとBMBFの対応するバージョンが一致する場合は再起動してください。 それでも動作しない場合は、 [BMBF Web インターフェイス](#pcを使った方法) を使用し、ツール タブの `Quick Fix` をクリックします。

### Beat Saberが起動時にブラックアウトします。
Questでライブラリを開きます。 Beat Saberの隣にある3つの点をクリックし、 `Permissions`をクリックします。 表示されるメニューで、ストレージのアクセス許可を有効にして、ゲームを再起動してみてください。

---

### セイバーとModが有効になりません！
これは、BMBFアプリが古いことが原因である可能性が高いため、最新の [BMBFリリース](https://bmbf.dev/stable)を入手してください。 適切なBeat SaberのBMBFバージョンがない場合は、BMBFが更新されるまでしばらくお待ちください。

* カスタムマップがロードされない場合は、#quest-mods からmapping extensionsをインストールしてみてください. Noodle ExtensionsというModを要求されることがありますがこれはまだQuestには実装されていません。
* あなたのBMBFが最新バージョンで、ゲーム内でModが有効になっていない場合 BMBF ToolsタブのUninstall BSボタンでBeat Saberをアンインストールし、再インストールしてリモートします。
* 非常に非常に非常にまれなケースですが、BMBF には Mod を適切な場所にコピーする権限が与えられていないことがあります。 SideQuest にチェックインして、BMBFにファイルのアクセス許可があることを確認してください。

---

### Beat Saber がクラッシュした
Modをひとつひとつ無効にしてチェックしてください。それでも問題が解決しない場合はDiscordのサポートチャンネルにお問い合わせください。

### BMBFを開くと白い画面が表示されます
unknown sources(提供元不明)からBMBFを開くときに白い画面が表示されることがありますが、数秒間待ってください。 動作しない場合は、Questを再起動してもう一度BMBFを開いてください。

### 起動すると読み込み画面から動きません！
起動したときに読み込み画面から動かない場合は以下のことを確認してください。

1. Modを入れる前にゲームを一度起動し、曲を最低一曲はプレイした
2. 海賊版のゲームを使用していない
3. 最新バージョンのBMBFを使用している
