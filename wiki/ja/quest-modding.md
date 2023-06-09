---
sidebar: auto
---

# Quest Modding

## はじめに

- このガイドは Quest1 と Quest2 のためのものです。
- 今まで Mod によって BAN されたことはありません。

::: danger 注意
しっかりと理解してから Mod を利用しましょう

- 初期設定（バニラ）には存在しない問題が発生する可能性があります。 99.9％のバグ、クラッシュや遅延は Mod によるものです。
- Mod はゲームのアップデートによって動かなくなる可能性がありますが、普通のことです。このようなことが起きた場合は忍耐強く、敬意をもって待ちましょう。Mod 作成者はボランティアです。
- Beat Games は、意図的に MOD を破壊しようとはしていません。 コードベースで動作することを想定しているので、Mod を壊すこともありますが、Mod を排除しようとはしません。

Mod に関連する問題でゲーム開発者を非難しないでください。 ただのクレーマーになってはいけません。
:::

:::warning Youtube のビデオチュートリアルを見たのですが、うまくいかず困っています。 どうすればいいですか？
BSMG では、改造のためにビデオチュートリアルを使用しないことを**強く**お勧めします。 多くの場合、それらの情報は古いものであったり、不完全であったり、誤った情報であったりすることがあります。

代わりに、ここで書かれたガイドに従うか、 [BSMG Discord](https://discord.gg/beatsabermods) のヘルプを探してください。（いくつかの日本語サイトも古い情報を含んでいるので注意してください）
:::

## インストール

現在、カスタム曲や MOD をインストールする唯一の推奨方法は、[パソコンで SideQuest から](#sidequestでbmbfをインストールする)BMBF をロードすることです。

PC を使えない場合は、 [Android 端末で Mod を導入する](./support/modding-with-android.md) を参照してください。 iPhone や iPad などの Chromebook や iOS デバイスはサポートされていません。

:::warning 警告
BMBF をインストールすると公式のマルチプレイモードや公式のリーダーボードへのスコアの送信、リプレイの記録ができなくなります。 もし Mod が導入された状態でマルチプレイを行いたい場合は`Beat Together`が必要になります。これは PC と Quest のクロスプレイを可能にします。また、両方とものカスタムソングで遊ぶことができます。 ディスコードの[Beat Saber Modding Group](https://discord.gg/beatsabermods)の`#quest-mods`チャンネルもしくは[Questboard](https://questmodding.com)のサイトで入手できます。

ランク付けされた曲からパフォーマンスポイント(PP)を得るためには、 [ScoreSaber](https://scoresaber.com/quest) mod が必要です。 [このリンク](https://scoresaber.com/quest) では、 ScoreSaber ページに移動して設定する方法が書いてあります。 Scoresaber は公式のリーダーボードを置き換えるものではなく、カスタム曲のリーダーボードだけが追加されます。

**注意** [ScoreSaber Discord](https://discord.gg/WpuDMwU)のサーバーで Mod が現在のゲームバージョンで使えるかチェックしてください。
:::

### SideQuest で BMBF をインストールする

SideQuest をまだ設定していない場合は、 [SideQuest](https://sidequestvr.com/#/setup-howto) をダウンロードしてセットアップしてください。

BMBF を取得するには 3 つの方法があります。

- [PC 上の SideQuest ストア](#sidequest-storeからダウンロード)
- [BMBF のウェブサイト](#bmbfのウェブサイトからダウンロード)
- PC をお持ちでない場合は、 [Android の SideQuest ストア](./support/modding-with-android.md) を使用できます。
  - iPhone や iPad などの Chromebook や iOS デバイスはサポートされていません。

:::tip
以前に Mod が導入された Beat Saber やスコアがあれば、 [あらかじめデータをバックアップしてください!](#sidequest-を使用してセーブデータをバックアップ)
:::

#### SideQuest Store からダウンロード

1. Quest を PC に接続して、[SideQuest から BMBF](https://sidequestvr.com/app/747)へアクセスします。
2. `Install To Headset` ボタンをクリックします。 (SideQuest を開くというポップが表示されたら開くを押してください。)
3. BMBF がヘッドセットにインストールされるのを待ちます。

インストールが完了したら、ガイドの [BMBF のセットアップ](#bmbfのセットアップ) セクションに進んでください。

#### BMBF のウェブサイトからダウンロード

初めに[BMBF APK](https://bmbf.dev/stable)をパソコンにダウンロードします。

SideQuest を開き、Quest を PC に接続します。

Mod がインストールされていたら`UNINSTALL APP`ボタンからアンインストールしてください。 Mod 導入後、同じメニューから復元できます。

`Install APK from folder`ボタンを選択して最新の BMBF apk をみつけダウンロードしてください。もしくは SideQuest にドラッグしてください。 どちらの方法でも BMBF を Quest にインストールできます。

![APKのインストール](/.assets/images/beginners-guide/apkfromfolder.png)

ガイドの [BMBF セットアップ](#bmbfのセットアップ) セクションに進んでください。

#### BMBF のセットアップ

BMBF のインストールが完了したら、BMBF がサポートしている最新の BeatSaber がインストールされ、Mod が入っていない事を確認してください。 BSMG Discord の `#modding-announcements` チャンネルや、[QuestBoard](https://www.questmodding.com/) で、対応バージョンや Mod についてのニュースを確認してください。

:::warning 注意
Mod を入れる前に、Beat Saber を一度起動し、任意の曲を一回プレイしてください。すぐに失敗しても大丈夫です。

現状、マルチユーザー機能を利用している場合、Mod は動作しません。 Mod を導入する前に一時的にサブアカウントをすべて削除する必要があります。 希望の Mod をインストールし終えたらあとで元に戻すことができます。
:::

Beat Saber を一度実行した後、以下の写真のように、unknown sources(提供元不明) から BMBF を開きます。 ![不明なソース](/.assets/images/beginners-guide/quest_home-menu.jpg)

開いたら、BMBF の各手順に沿って Mod を導入してください。 完了後[QuestBoard](https://www.questmodding.com/)と[BeastSaber](https://www.bsaber.com)が BMBF にアプリとしてロードされます。 そこから利用可能な任意のカスタム曲をダウンロードすることができます。 また、BeatSaver ボタンをクリックして曲をダウンロードすることもできます。

インストールする手順の中で `Restore App` がポップアップ表示されることがありますが、そのときは `Close` をクリックしてください。 この警告は海賊版ゲームに向けられたものなので、Mod を導入しているだけの場合は、無視してもほとんど影響はありません。

![RestoreApp](/.assets/images/beginners-guide/restoreapp.png)

引き続き[コア mod](#コアmod)のインストールステップに進んでください。

## 保存データの管理

### SideQuest を使用してセーブデータをバックアップ

SideQuest を開き、Quest を PC に接続します。

SideQuest ファイルエクスプローラを使用して、 `sdcard/Android/data/com.beatgames.beatsaber/files` に移動します。

![SideQuestファイル](/.assets/images/beginners-guide/sqfiles.png)

`AvatarData.dat`と`PlayerData.dat` と `settings.cfg` を PC 上のフォルダに保存します。 これらにはあなたのスコアやそのほかのセッティングが含まれているのでなくさないでください。

### SideQuest を使用してセーブデータを復元

データを復元するには SideQuest を開き、PC に接続します。  
SideQuest のファイルから[サイドクエストを利用したバックアップ](#sidequest-を使用してセーブデータをバックアップ)で保存した 3 つのファイル`AvatarData.dat`、`PlayerData.dat`と`settings.cfg`を`sdcard/Android/data/com.beatgames.beatsaber/files`に入れます

## Mod をインストール

### コア Mod

追加の MOD をインストールする前に、BMBF ウェブインターフェースの右上を見てください 。`Beat Saberと同期`と書かれた赤いボタンが表示されます。 これをクリックして同期を完了させます。 BMBF の `mods` タブに移動します。 7 つのコア Mod があることを確認してください:

- Custom Types
- Codegen
- SongLoader
- Playlist Manager
- QuestUI
- SongDownloader
- PinkCore

:::danger 注意
これらのコア Mod が無いと他の Mod は動作しません！

これらの MOD のいずれかがリストにない場合は、BMBF の `Tools` タブ内の再インストールボタンを押してください。 それでも Mod が表示されない、もしくは表示されるがゲーム内で動作しない場合はトラブルシューティングの[コア Mod が動かない場合](#コアmod-が動きません)を参照してください。
:::

### Quest 内での操作

:::warning 注意
すべての Mod が QuestBoard で使えるわけではありません!  
もしお探しの Mod がここで見当たらない場合は [PC を使った方法](#pcを使った方法) を代わりにお試しください。
:::

クエストで BMBF を開き、`Browser` タブに移動します。 QuestBoard は自動的に開きます。  
そうでない場合は、`Choose Website` をクリックし、`QuestBoard` ボタンをクリックします。

![globequestboard](/.assets/images/beginners-guide/globequestboard.png)

以下の [QuestBoard](https://www.questmodding.com/) ウェブサイトにアクセスしてください 次に、 `Get Mods` タブを選択します。

![questboardhome](/.assets/images/beginners-guide/questboardhome.png)

ポインタをドラッグして下にスクロールします。 そのリストから任意の Mod を選択し、その隣のダウンロードボタンを押してダウンロードすることができます。 一部のダウンロードは、ウェブサイトまたは GitHub ページにリダイレクトされる場合があります。 その場合は、画面上の指示に従うか、リリースリストで最新の `.qmod` をそれぞれ選択します。

![questboardmods](/.assets/images/beginners-guide/questboardmods.png)

### PC を使った方法

[BSMG Discord](https://discord.com/invite/beatsabermods)の`#quest-mods`チャンネルで他の Mod を探してインストールすることができます。

:::warning 注意
クエストと PC が同じネットワークに接続されていること、https ではなく http であることを確認してください。
:::

Quest で BMBF を開き、 `Tools` タブに移動します そこにウェブアドレスとバージョン番号が表示されます

![ip](/.assets/images/beginners-guide/ip.png)

お使いの PC でブラウザを開き、検索バーにアドレスを入力します。

以下の画面にアクセスできるはずです。

これがうまくいかない場合は、 [こちら](#bmbf-web-インターフェイスが読み込まれていません) をクリックしてトラブルシューティングの手順にしたがってください。

![bmbfweb](/.assets/images/beginners-guide/bmbfweb.png)

Quest 互換の Mod をアップロードボックスにドラッグして、同期してください。 もともと古いバージョン用に作られた Mod の場合は、自動的に有効にはなりません。 古い Mod を有効にするには、 `Mods` タブに移動し、そこから有効にします。

## 曲のインストール

::: tip
譜面の探し方 「すべての曲から」「レート順」「ダウンロード数」「プレイ数」によってソートできます。ここにあるほとんどの曲は「よいマップの作り方ガイド」ができる前に作られたものです。 2019 年後半から今の間にリリースされた曲をダウンロードして、最高の カスタムマップを体験してみてください。
:::

### ゲーム内でダウンロードする方法

SongDownloader (コア mod) を使ってゲーム内で曲をダウンロードできるようになりました。 ゲーム内で曲をダウンロードするにはいくつかのステップがあります。

1. Beat Saber を開く
2. メインメニューの左側にある「Mods」パネルを見る
3. SongDownloader タブを開く
4. 曲を検索してダウンロードします。

ゲーム内で曲をダウンロードするときは、ゲームを再起動する必要はありません。 SongLoader を使用して自動的に曲をロードします。 ![songDownloader](/.assets/images/beginners-guide/songdownloader.png)

### BMBF からダウンロードする方法

ブラウザーウィンドウを使用して Quest 内にカスタムマップを取得するには、2 つのソースがあります。

- キュレーションされたマップとプレイリストをお探しなら、 [BeastSaber](https://bsaber.com/) をご覧ください。
- BeastSaber の UI が気に入らない場合は、 [BeatSaver](https://beatsaver.com/)を試すこともできます。

どちらにも OneClick™ ボタンがあり、Quest にその曲を簡単にインストールできます。 ブラウザウィンドウの右上にある地球儀アイコンを使用して、これらのウェブサイトを切り替えることができます。

`Syncsaber`を使うことで様々な種類の曲を簡単にダウンロードできます。Quest の BMBF から`Syncsaber`というタブをクリックしてください。 ここではボタンをクリックして曲をダウンロードすることができます。様々な設定から選ぶことができます。 例えば[Beatsaver's](https://beatsaver.com/)でのトップ 20 をダウンロードしたい場合は"hot"を選んでください。もしくは 50 の最も難しい曲を選ぶこともできます。

また別の方法として[Beastsaber](https://bsaber.com/)の`Bookmark`という機能が使えます。 アカウントを作成した後、曲についている小さいブックマークをクリックすると、もし後で Quest からすべての曲を削除した場合でも、OneClick™ でブックマークされている曲を再ダウンロードすることができます。

### PC を使った方法

Quest 内でマップをインストールできない場合は、mod のインストールと同様にコンピュータを使用してマップをインストールできます。

1. お使いのコンピューターで [BeastSaber](https://bsaber.com/) または [BeatSaver](https://beatsaver.com/) にアクセスしてください。
2. zip ファイルをダウンロード
3. [PC を使用して Mod をインストールする](#pcを使った方法) の手順に従って、ファイルのアップロード画面を開きます。
4. マップの zip ファイルをドラッグアンドドロップするとインストールされます！

これがうまくいかない場合は、 [こちら](#bmbf-web-インターフェイスが読み込まれていません) をクリックしてトラブルシューティングの手順に従ってください 。

:::tip
プレイリストも同様にダウンロードできます。 様々なプレイリストが[Beastsaber](https://bsaber.com/category/playlists/)やディスコードのチャンネルで見つけることができます。 また、 [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager)や[Playlist Editor Pro](https://beatsaberquest.com/playlisteditor-pro/)を使って自分自身だけのプレイリストを作ることもできます。

作成したマップをテストしたい場合は、 [Quest でテスト](./mapping/#testing-on-a-quest) の譜面作成セクション内の「テスト用」セクションを参照してください。
:::

## モデルのインストール

[Qosmetics Community](https://discord.gg/qosmetics) に参加して、メニューのタイトル、セイバー、ノーツ、壁の見た目を変えましょう！

## 役に立つリンク

- [Qosmetics Community](https://discord.gg/qosmetics) - Quest 用にセイバー、ノーツ、壁が保存されているサーバー。
- [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Quest 用に独自のカスタムセイバー、ノーツ、壁を作成するためのガイド。
- [Questboard website](https://questmodding.com) - Beat Saber 関連のニュースや最新の mods リリースの情報など！
- [Questboard discord server](https://discord.gg/P7sUKVnP) - BeatSaber のクエストに関係する情報があります。また Mod がリリースされたときに通知を受けることもできます。
- [オーディオ同期ズレの修正](https://bsaber.com/quest-out-of-sync/)
- [ScoreSaber](https://scoresaber.com/quest) - カスタムマップのゲーム内ランキング
- [ScoreSaber](https://scoresaber.com) - カスタムマップのリーダーボードを閲覧できるウェブサイト。

## トラブルシューティング

:::warning Youtube のビデオチュートリアルを見たのですが、うまくいかず困っています。 どうすればいいですか？
BSMG は他のチュートリアルを使用しないことを**強く**お勧めします。 多くの場合、それらの情報は古いものであったり、不完全であったり、誤った情報であったりすることがあります。

代わりに、ここで書かれたガイドに従うか、 [BSMG Discord](https://discord.gg/beatsabermods) のヘルプを探してください。
:::

### beatmods.com または modelsaber.com から手に入れた Mod が動きません。

[BeatMods](https://beatmods.com/) や [ModelSaber](https://modelsaber.com/) の MOD が動作しないのはそれらが PC 用であるからです。

Quest に互換性のある Mod は [Questboard](https://www.questmodding.com/) か Beat Saber Modding のディスコードチャンネル`#quest-mods`から、セイバー、ブロック、壁は[Qosmetics Community](https://discord.gg/qosmetics)から入手してください。 Mod またはモデルの ZIP を取得したら、 [BMBF Web インターフェイス](#pcを使った方法) を使用してインストールします。

### BMBF のサイドローディングに失敗しました

BMBF をサイドローディングするとエラーが表示されます `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!`

クエストで BMBF バージョンをアンインストールする必要があります。 SideQuest の `My Apps` メニューから行うことができます。

### コア Mod が動きません

コア Mod に問題がある場合は、古い Mod を使用していないかを確認してください。 古いバージョンで作成された Mod はすべて古い Mod として認識されます。 一度それらを削除し、下記手順を試行してください。

1. `Tools`に移動します。
2. `Download Mods` をクリックします。
3. `Sync to Beat Saberをクリック`

すでに Mod がインストールされている場合は一度アンインストールして、再度インストールし直してください。

---

### BMBF Web インターフェイスが読み込まれていません

BMBF Web インターフェイスが読み込まれていない場合 同じネットワークにあるコンピューターのブラウザにツールタブから IP アドレスを入力していることを確認してください。 下記の順番で確認を行ってください。

1. IP アドレスが `127.0.0.1`ではない場合、ヘッドセットやルーターを再起動してください。
2. ヘッドセット内で BMBF を起動している
3. リンクの先頭に `http://` があり、 `https://` ではない
4. リンクの最後に `:50000` がある
5. PC とクエストは同じ Wi-Fi ネットワーク上にある
6. IP アドレスが常に同じである

これらのいずれも確認して動かない場合は、Quest を再起動し、リストを再度確認してください。

---

### BMBF が数分間、設定を読み込みません

これは対応していないゲームバージョンで BMBF を使用したことが原因と考えられます。 例えばバージョン `1.13.0`用の BMBF をバージョン`1.12.2`の BeatSaber がインストールされたヘッドセットで起動するような場合です。  
もしリリースページで言われているゲームバージョンと BMBF の対応するバージョンが一致する場合は再起動してください。 それでも動作しない場合は、 [BMBF Web インターフェイス](#pcを使った方法) を使用し、ツール タブの `Quick Fix` をクリックします。

### Beat Saber が起動時にブラックアウトします。

Quest でライブラリを開きます。 Beat Saber の隣にある 3 つの点をクリックし、 `Permissions`をクリックします。 表示されるメニューで、ストレージのアクセス許可を有効にして、ゲームを再起動してみてください。

---

### セイバーと Mod が有効になりません！

これは、BMBF アプリが古いことが原因である可能性が高いため、最新の [BMBF リリース](https://bmbf.dev/stable)を入手してください。 適切な Beat Saber の BMBF バージョンがない場合は、BMBF が更新されるまでしばらくお待ちください。

- カスタムマップがロードされない場合は、#quest-mods から mapping extensions をインストールしてみてください. Noodle Extensions という Mod を要求されることがありますがこれはまだ Quest には実装されていません。
- あなたの BMBF が最新バージョンで、ゲーム内で Mod が有効になっていない場合 BMBF Tools タブの Uninstall BS ボタンで Beat Saber をアンインストールし、再インストールしてリモートします。
- 非常に非常に非常にまれなケースですが、BMBF には Mod を適切な場所にコピーする権限が与えられていないことがあります。 SideQuest にチェックインして、BMBF にファイルのアクセス許可があることを確認してください。

---

### Beat Saber がクラッシュした

Mod をひとつひとつ無効にしてチェックしてください。それでも問題が解決しない場合は Discord のサポートチャンネルにお問い合わせください。

### BMBF を開くと白い画面が表示されます

unknown sources(提供元不明)から BMBF を開くときに白い画面が表示されることがありますが、数秒間待ってください。 動作しない場合は、Quest を再起動してもう一度 BMBF を開いてください。

### 起動すると読み込み画面から動きません！

起動したときに読み込み画面から動かない場合は以下のことを確認してください。

1. Mod を入れる前にゲームを一度起動し、曲を最低一曲はプレイした
2. 海賊版のゲームを使用していない
3. 最新バージョンの BMBF を使用している
