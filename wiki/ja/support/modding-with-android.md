---
sidebar: auto
---

# AndroidでQuestにModを導入する

:::warning 警告
BMBFをインストールすると公式のマルチプレイモードや公式のリーダーボードへのスコアの送信、リプレイの記録ができなくなります。 もしModが導入された状態でマルチプレイを行いたい場合は`Beat Together`が必要になります。これはPCとQuestのクロスプレイを可能にします。また、両方とものカスタムソングで遊ぶことができます。 ディスコードの[Beat Saber Modding Group](discord.gg/beatsabermods)の`#quest-mods`チャンネルもしくは[Questboard](https://questmodding.com)のサイトで入手できます。

ランク付けされた曲からパフォーマンスポイント(PP)を得るためには、 [ScoreSaber](https://new.scoresaber.com/quest) modが必要です。 [このリンク](https://new.scoresaber.com/quest) では、 ScoreSaberのホームページに移動して設定する方法が書いてあります。 Scoresaberは公式のリーダーボードを置き換えるものではなく、カスタム曲のリーダーボードだけが追加されます。

**注意** [ScoreSaber Discord](https://discord.gg/WpuDMwU)のサーバーでModが現在のゲームバージョンで使えるかチェックしてください。
:::

::: tip
BMBFをインストールする推奨方法は、[SideQuest を PC](/quest-modding.md#installing-bmbf-with-sidequest)でインストールすることです。 この方法はPCを利用できない場合のみ利用してください。
:::

* [準備するもの](#requirements)
* [Questで開発者モードを有効にする。](#how-to-enable-developer-mode-on-the-oculus-quest)
* [携帯電話のセットアップ](#setup-your-phone)
* [Android端末でBMBFをインストールする](#installing-bmbf-with-your-phone)
* [Beat Saberのセットアップ](#setup-beat-saber)

## 準備するもの

* Android携帯またはAndroidタブレット
  * iPhoneやiPadは **サポート外**です。
* Oculus Quest Storeで**支払いが完了**したBeat Saber
* Questを携帯につなげるケーブル（もし携帯がタイプCの充電方式であれば充電器で接続できます）

## Questで開発者モードを有効にする
2つの方法があり、最初の方法はクレジットカードが必要です。 クレジットカードを持っていない場合は、 [クレジットカードがない場合](#i-have-no-credit-card)の手順に従ってください。

### クレジットカードを有効にする
[Oculusダッシュボード](https://dashboard.oculus.com/) にアクセスし、Facebookアカウントでサインインします。

ログイン後、新しい組織を作成することができます。

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

作成後、スマートフォンのOculusアプリで開発者モードを有効にできます。

#### Oculusで開発者モードを有効にする

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

次に[携帯電話の設定](#setup-your-phone)を参照してください。

### クレジットカードがない場合
[原文（redditより）](https://www.reddit.com/r/sidequest/comments/jaxy4u/cant_verify_oculus_developer_account/?utm_source=amp&utm_medium=&utm_content=post_body)

２つ目のアカウント（Oculus開発者アカウント）が必要になります。そこにあなたのFacebookのアカウントに作成した組織を追加します。 少し手間がかかります。

:::tip
すでに組織を持っている友達がいて、その友達があなたをそしきに追加したら、２つ目のアカウントを作成する必要はありません もし可能なら[組織にアカウントを追加する](#add-yourself-to-the-organization)に従って 、代わりにあなたのFacebookアカウントを使ってください。
:::

#### 新しく開発者アカウントを作成する

1. Oculus開発者向けの [登録ページ](https://developer.oculus.com/sign-up/) に移動し、 `統合されていないOculus開発者アカウントを作成`をクリックします。
2. 必要な情報をすべて入力してください。
3. メールからアカウントを有効にし、作成したアカウントで再度ログインします。
4. [ページの確認](https://developer.oculus.com/manage/verify/) に移動し、2段階認証を設定します。

![2fa](~@images/beginners-guide/2fa.png)

#### 新しい組織を作成する
その後[Oculusダッシュボード](https://dashboard.oculus.com/)から*任意の*名前で組織を作成してください。

![DevModeDashboard](~@images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](~@images/beginners-guide/DevModeCreateOrg.png)

#### 組織にアカウントを追加する
組織を作成したら自分のFacebookアカウントを組織にドロップダウンしてください。 そこに管理者の役割を追加し、あなたのFacebookアカウント名を入力します。 その後追加をクリックするとユーザーが追加されます。

![DevModeCreateOrg](~@images/beginners-guide/addmember.png)

#### Oculusで開発者モードを有効にする
これで、スマートフォンのOculusアプリで開発者モードを有効にできるようになります。

![EnableDevMode](~@images/beginners-guide/EnableDevMode.png)

次に[携帯電話のセットアップ](#setup-your-phone)を参照してください。

## 携帯電話のセットアップ

1. [Bugjaeger app](https://play.google.com/store/apps/details?id=side.quest.mobile)をGoogleストアからダウンロードします。
2. 開発者モードを有効にする。
    1. Androidの設定をひらく
    2. 「デバイス情報」を開きます。
    3. ソフトウェア情報をタップします。
    4. ビルド番号をタップして開発者モードを有効にします 7回タップします
3. USBデバッグを有効にする
    1. 設定に戻ります
    2. 開発者オプションをタップ
    3. USBのデバッグを有効にします

### 端末にBMBFをインストールする
:::warning 注意
Modを入れる前に、ビートセイバーを一度起動して一つの曲をプレイしてください。そのあとすぐにゲームを終了しても大丈夫です。
:::

携帯電話でSidequestを開き、USBコードでQuestと接続します。 Questと携帯でUSBのデバッグのポップアップが表示されます 両方のデバイスで許可を選択してください。

SideQuestがQuestを認識したら、画面の下に緑色の点が付いたSideQuestのロゴが表示されます。

その後、SideQuestの上部にある検索アイコンをクリックして、 `BMBF`を検索してBMBFをインストールします。 ユニコーンをシンボルとするアプリが表示されます。 それをタップして `ヘッドセットにインストール`をクリックします。

その後、QuestにBMBFがインストールされ、Beat Saberにmodを導入する準備ができます。

## Beat Saberのセットアップ
BMBFを正常にインストールし終えたら、クエストのライブラリ内に提供元不明としてアプリを見つけることができます。

![UnknownMenu](~@images/beginners-guide/quest_home-menu.jpg)

それを起動するとファイルへのアクセス許可を促すポップが表示されます 画面上の指示に従ってください。 その後 [BeastSaber](https://bsaber.com) を見てください

インストールプロセス中に Restore App ポップアップが表示されることがありますが、そのときは Close をクリックしてください。 この警告は海賊版を防止するために表示されるものなので、正規版を購入している場合は無視をしてもかまいません。

これで、Modのインストールの[主要なMod](/quest-modding.md#core-mods)の手順を PCと同じ方法で実行できます。
