---
sidebar: auto
---

# Quest Modding

## はじめに

- refer to the [original English version](../quest-modding.md),
- wait for a translation to be done,

::: danger Sorry, this page has not been translated yet, you can either:
- 初期設定（バニラ）には存在しない問題が発生する可能性があります。 99.9％のバグ、クラッシュや遅延はModによるものです。
- Modはゲームのアップによって動かなくなる可能性がありますが、普通のことです。このようなことが起きた場合は忍耐強く、敬意をもって待ちましょう。Mod作成者はボランティアです。
- Beat Gamesは、意図的にMODを破壊しようとはしていません。 コードベースで動作することを想定しているので、Modを壊すこともありますが、Modを排除しようとはしません。

Modに関連する問題でゲーム開発者を非難しないでください。 ただのクレーマーになってはいけません。 :::

## インストール

現在、カスタム曲やMODをインストールする唯一の推奨方法は、SideQuestでBMBFをロードすることです。
* [BMBF apk](https://bmbf.dev/stable) :::warning BMBFをインストールしModを導入するとゲーム公式のマルチプレイ、リプレイの視聴、公式のリーダーボードへの更新ができなくなります。 これはOculusがmodを利用したゲームを認証していないためです。

or contribute to translation effort [here](https://github.com/bsmg/wiki). :::

### SideQuestでBMBFをインストールする

まだ設定していない場合は、 [SideQuest](https://sidequestvr.com/#/setup-howto) をダウンロードしてセットアップしてください。

SideQuestを開き、QuestをPCに接続します。 すでにBeatSaberに導入されているModやスコアをバックアップしたければ、 ウィンドウの上部バーにある `My Apps` に移動し、Beat Saberを探します。

その横の歯車をクリックし、 `BACKUP GAME DATA` ボタンを押します。 Modが導入されているのであればそれらも`UNINSTALL APP`ボタンからアンインストールする必要があります。

![SideQuestアンインストール](~@images/beginners-guide/squninstall.png)

Mod導入後、同じメニューから復元できます。

下に表示される `Install APK from folder` ボタンから最新のBMBFのAPKをインストールします。

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

正常にインストールされたら、最新バージョンの Beat Saber がインストールされており、Modがないことを確認してください。 :::warning Modを導入する前にBeat Saberを1回実行し、閉じてください。 :::

Beat Saberを一度実行した後、ライブラリ内のOculus TVチャンネルタブまたはUnknown SourcesからBMBFを開きます。 ![UnknownSourced](~@images/beginners-guide/quest_home-menu.jpg)

言われたとおりにそれぞれのステップを実行してください。 それから、 [bsaber.com](https://www.bsaber.com) を見つけてください。 そこで利用可能な任意のカスタム曲をダウンロードすることができます。

インストールプロセス中に `Restore App` ポップアップが表示されることがありますが、そのときは `Close` をクリックしてください。 この警告は、海賊版のゲームに向けられているので、Modを導入しているだけの場合無視をしてもほとんど場合影響はありません。

![RestoreApp](~@images/beginners-guide/restoreapp.png)

## セーブデータの復元

### SideQuestから復元

バックアップに使用したものと同じメニューに戻り、 `OPEN BACKUPS` ボタンをクリックします。 そこから、最新のバックアップフォルダを見つけて開きます。 そしてModフォルダを削除します（これは古いMODや互換性のないMODがバグを引き起こすことを防ぐためです）。

その後、メニューに戻り、最新のバックアップの横にある円形の矢印を押します。 これはあなたのスコアを復元するためです。 ボタンは画像の [ここ](#installing-bmbf-with-sidequest)です

## Modをインストール

### Quest 内での操作
:::warning すべてのModがQuestBoardで使えるわけではありません!  
もしお探しのModがここで見当たらない場合は [PCを使った方法](#using-your-pc) を代わりにお試しください。 :::

QuestでBMBFを開き、 `Browser` タブに移動します。そこには、下図のような地球儀のアイコンが表示されます。 クリックして `QuestBoard` ボタンをクリックします。

![globequestboard](~@images/beginners-guide/globequestboard.png)

以下の QuestBoard ウェブサイトに挨拶をする必要があります。 次に、 `MOWNLOAD MODS` タブを選択します。

![questboardhome](~@images/beginners-guide/questboardhome.png)

スティックを使って下にスクロールします。 そのリストから任意のModを選択し、その隣のダウンロードボタンを押してダウンロードすることができます。 一部のダウンロードは、ウェブサイトまたはGitHubページにリダイレクトされる場合があります。 その場合は、画面上の指示に従うか、リリースリストで最新の `.zip` をそれぞれ選択します。

![questboardmods](~@images/beginners-guide/questboardmods.png)

### PCを使った方法
:::warning クエストとPCが同じネットワーク上にあることを確認してください！ :::

QuestでBMBFを開き、 `Tools` タブに移動します そこにウェブアドレスとバージョン番号が表示されます

![ip](~@images/beginners-guide/ip.png)

お使いの PC でブラウザを開き、検索バーにアドレスを入力します。

以下の画面にアクセスできるはずです。

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Quest互換のMODをアップロードボックスにドラッグしてください。 古いバージョン用のModとして作られていた場合、自動的に有効にはなりません。 古いMODを有効にするには、 `Mods` タブに移動し、そこから有効にします。

QuestのBMBFで行ったように同じ方法で曲をダウンロードしたい場合。 URL内の `upload` を `browser`に置き換えてください。

## 曲のインストール

### Quest 内での操作
ブラウザーウィンドウを使用してQuest内にカスタムマップを取得するには、2つのソースがあります。
* キュレーションされたマップとプレイリストをお探しなら、 [BeastSaber](https://bsaber.com/) をご覧ください。
* BeastSaberのUIが気に入らない場合は、 [BeatSaver](https://beatsaver.com/)を試すこともできます。

どちらにもOneClick™ ボタンがあり、Questにその曲を簡単にインストールできます。 ブラウザウィンドウの右上にある地球儀アイコンを使用して、これらのウェブサイトを切り替えることができます。

### PCを使った方法
Quest内で曲をインストールできない場合は、modのインストールと同様にコンピュータを使用してマップをインストールできます。
1. お使いのコンピューターで [BeastSaber](https://bsaber.com/) または [BeatSaver](https://beatsaver.com/) をご覧ください
2. zipファイルをダウンロード
3. [PC を使用して Mod をインストールする](#using-your-pc) の手順に従って、ファイルのアップロード画面を開きます。
4. マップのzipファイルをドラッグアンドドロップするとインストールされます！

:::tip 作成したマップをテストしたい場合は、 [Questでテスト](/mapping/#testing-on-a-quest) の譜面作成セクション内の「テスト用」セクションを参照してください。 :::

## 便利なリンクやそのほかのガイド

* [Oculus Quest BMBF Installation Guide](https://bsaber.com/oculus-quest-custom-songs/)
* [General Guide by Sc2ad for Learning The Basics of Asset Modding](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md)
* [Collection of All Current Guides for Asset Mods Such As Sabers and Notes Made by RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki)
* [Qosmetics Community](https://discord.gg/qosmetics) - Quest用にセイバー、ブロック、壁が保存されているサーバー。
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - クエスト用に独自のカスタムセイバー、ブロックス、壁を作成するためのガイド。
* [Fixing Out of Sync Audio](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - カスタム曲のゲーム内ランキング

## トラブルシューティング
:::warning Elite Ericのビデオを見ましたが、動かなくなりました。 いったい何が起こったのでしょうか。 BSMGはElite Ericによるチュートリアルを使用しないことを**強く**お勧めします。 彼の内容の多くを見直すと、それらは不完全、誤りがあったり、または間違った情報を多く含んでいます。 たとえこれらのエラーを修正しようとしても、残念ながら返信はなく、新しい(しかし間違った)チュートリアルしかありません。

代わりに、ここで書かれたガイドに従うか、 [BSMG Discord](https://discord.gg/beatsabermods) のヘルプを探してください。 :::
### beatmods.comまたはmodelsaber.comから手に入れたmodsが動きません。
[BeatMods](https://beatmods.com/) または [ModelSaber](https://modelsaber.com/) が動かないのはそれらのModはPC用であるからです。

Questに互換性のあるModは [Questboard](https://www.questmodding.com/) かBeat Saber Moddingのディスコードチャンネル`#quest-mods`から、セイバー、ブロック、壁は[Qosmetics Community](https://discord.gg/qosmetics)から入手してください。 ModまたはモデルのZIPを取得したら、 [BMBF Webインターフェイス](#using-your-pc) を使用してインストールします。
___
### BMBFのサイドローディングに失敗しました
BMBFをサイドローディングするとエラーが表示されます `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!`

クエストでBMBFバージョンをアンインストールする必要があります。 SideQuestの `My Apps` メニューから行うことができます。
___
### BMBF Web インターフェイスが読み込まれていません
BMBF Web インターフェイスが読み込まれていない場合 同じネットワークにあるコンピューターのブラウザにツールタブからIPアドレスを入力していることを確認してください。 以下を確認してください: 1) IPアドレスが `127.0.0.1`ではない場合、ヘッドセットやルーターを再起動してみてください。 2)ヘッドセットでBMBFが開かれている。3) `http://` で始まるリンクである。`https://`ではありません。4)リンクの最後に`:50000`がある。5)PCとQuestが同じwifiに接続されている。6)IPアドレスが同じである。

これらのいずれも確認して動かない場合は、Questを再起動し、リストを再度確認してください。
___
### BMBF は数分間、設定を読み込みません
これはそのゲームバージョンのためのBMBFを使っていない可能性があります。 例えばバージョン `1.13.0`のためのBMBFをバージョン`1.12.2`がインストールされたヘッドセットで起動するようなことです。  
もしリリースページで言われているゲームバージョンとBMBFが一致している場合は再起動してください。 それでも動作しない場合は、 [BMBF Web インターフェイス](#using-your-pc) を使用し、ツール タブの `Quick Fix` をクリックします。
___
### Beat Saberが起動時にブラックアウトします。
Questでライブラリを開きます。 Beat Saberの隣にある3つの点をクリックし、 `Permissions`をクリックします。 表示されるメニューで、ストレージのアクセス許可を有効にして、ゲームを再起動してみてください。
___
### セイバーとモッドが有効になりません！
これは、おそらく時代遅れのBMBFクライアントが最新の [BMBFリリース](https://bmbf.dev/stable)と互換性をもたないためです。 適切なBeat SaberのBMBFバージョンがない場合は、BMBFが更新されるまでしばらくお待ちください。
* あなたのMODがBMBFのバージョンと互換性があるはずの場合。 zipファイルを区切るフォルダがないことを確認してください。
* カスタム曲がロードされない場合は、#quest-mods からmapping extensionsをインストールしてみてください
* あなたのBMBFが最新バージョンで、ゲーム内でMODが有効になっていない場合 BMBF ToolsタブのUninstall BSボタンでBeat Saberをアンインストールし、再インストールしてリモートします。
* 非常に非常に非常にまれなケースですが、BMBF には Mod を適切な場所にコピーする権限が与えられていないことがあります。 SideQuest にチェックインして、BMBFにファイルのアクセス許可があることを確認してください。
___
### 起動すると読み込み画面から動きません！
起動時にBeat Saberが読み込みから動かない場合は、以下を確認してください: 1) ゲームにModを導入する前に起動し、少なくとも1曲はプレイしました。 2) 海賊版のゲームを使用していません。 3) 最新バージョンのBMBFを使用している。


