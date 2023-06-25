---
prev: false
next: false
---

# Android で Quest に Mod を導入する

:::warning 警告
BMBF をインストールすると公式のマルチプレイモードや公式のリーダーボードへのスコアの送信、リプレイの記録ができなくなります。 もし Mod が導入された状態でマルチプレイを行いたい場合は`Beat Together`が必要になります。これは PC と Quest のクロスプレイを可能にします。また、両方とものカスタムソングで遊ぶことができます。 ディスコードの[Beat Saber Modding Group](https://discord.gg/beatsabermods)の`#quest-mods`チャンネルもしくは[Questboard](https://questmodding.com)のサイトで入手できます。

ランク付けされた曲からパフォーマンスポイント(PP)を得るためには、 [ScoreSaber](https://scoresaber.com/quest) mod が必要です。 [このリンク](https://scoresaber.com/quest) では、 ScoreSaber のホームページに移動して設定する方法が書いてあります。 Scoresaber は公式のリーダーボードを置き換えるものではなく、カスタム曲のリーダーボードだけが追加されます。

**注意** [ScoreSaber Discord](https://discord.gg/WpuDMwU)のサーバーで Mod が現在のゲームバージョンで使えるかチェックしてください。
:::

::: tip
BMBF をインストールする推奨方法は、[SideQuest を PC](/ja/quest-modding.md#sidequestでbmbfをインストールする)でインストールすることです。 この方法は PC を利用できない場合のみ利用してください。
:::

- [準備するもの](#準備するもの)
- [Quest で開発者モードを有効にする。](#questで開発者モードを有効にする)
- [携帯電話のセットアップ](#携帯電話のセットアップ)
- [Android 端末で BMBF をインストールする](#端末にbmbfをインストールする)
- [Beat Saber のセットアップ](#beat-saberのセットアップ)

## 準備するもの

- Android 携帯または Android タブレット
  - iPhone や iPad は **サポート外**です。
- Oculus Quest Store で**支払いが完了**した Beat Saber
- Quest を携帯につなげるケーブル（もし携帯がタイプ C の充電方式であれば充電器で接続できます）

## Quest で開発者モードを有効にする

2 つの方法があり、最初の方法はクレジットカードが必要です。 クレジットカードを持っていない場合は、 [クレジットカードがない場合](#i-have-no-credit-card)の手順に従ってください。

### クレジットカードを有効にする

[Oculus ダッシュボード](https://dashboard.oculus.com/) にアクセスし、Facebook アカウントでサインインします。

ログイン後、新しい組織を作成することができます。

![DevModeDashboard](/.assets/images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](/.assets/images/beginners-guide/DevModeCreateOrg.png)

作成後、スマートフォンの Oculus アプリで開発者モードを有効にできます。

#### Oculus で開発者モードを有効にする

![EnableDevMode](/.assets/images/beginners-guide/EnableDevMode.png)

次に[携帯電話の設定](#setup-your-phone)を参照してください。

### クレジットカードがない場合

[原文（reddit より）](https://www.reddit.com/r/sidequest/comments/jaxy4u/cant_verify_oculus_developer_account/?utm_source=amp&utm_medium=&utm_content=post_body)

２つ目のアカウント（Oculus 開発者アカウント）が必要になります。そこにあなたの Facebook のアカウントに作成した組織を追加します。 少し手間がかかります。

:::tip
すでに組織を持っている友達がいて、その友達があなたをそしきに追加したら、２つ目のアカウントを作成する必要はありません もし可能なら[組織にアカウントを追加する](#add-yourself-to-the-organization)に従って 、代わりにあなたの Facebook アカウントを使ってください。
:::

#### 新しく開発者アカウントを作成する

1. Oculus 開発者向けの [登録ページ](https://developer.oculus.com/sign-up/) に移動し、 `統合されていないOculus開発者アカウントを作成`をクリックします。
2. 必要な情報をすべて入力してください。
3. メールからアカウントを有効にし、作成したアカウントで再度ログインします。
4. [ページの確認](https://developer.oculus.com/manage/verify/) に移動し、2 段階認証を設定します。

![2fa](/.assets/images/beginners-guide/2fa.png)

#### 新しい組織を作成する

その後[Oculus ダッシュボード](https://dashboard.oculus.com/)から*任意の*名前で組織を作成してください。

![DevModeDashboard](/.assets/images/beginners-guide/DevModeDashboard.png)

![DevModeCreateOrg](/.assets/images/beginners-guide/DevModeCreateOrg.png)

#### 組織にアカウントを追加する

組織を作成したら自分の Facebook アカウントを組織にドロップダウンしてください。 そこに管理者の役割を追加し、あなたの Facebook アカウント名を入力します。 その後追加をクリックするとユーザーが追加されます。

![DevModeCreateOrg](/.assets/images/beginners-guide/addmember.png)

#### Oculus で開発者モードを有効にする

これで、スマートフォンの Oculus アプリで開発者モードを有効にできるようになります。

![EnableDevMode](/.assets/images/beginners-guide/EnableDevMode.png)

次に[携帯電話のセットアップ](#携帯電話のセットアップ)を参照してください。

## 携帯電話のセットアップ

1. [SideQuest app](https://play.google.com/store/apps/details?id=side.quest.mobile)を Google ストアからダウンロードします。
2. 開発者モードを有効にする。
   1. Android の設定をひらく
   2. 「デバイス情報」を開きます。
   3. ソフトウェア情報をタップします。
   4. ビルド番号をタップして開発者モードを有効にします 7 回タップします
3. USB デバッグを有効にする
   1. 設定に戻ります
   2. 開発者オプションをタップ
   3. USB のデバッグを有効にします

### 端末に BMBF をインストールする

:::warning 注意
Mod を入れる前に、ビートセイバーを一度起動して一つの曲をプレイしてください。そのあとすぐにゲームを終了しても大丈夫です。
:::

携帯電話で Sidequest を開き、USB コードで Quest と接続します。 Quest と携帯で USB のデバッグのポップアップが表示されます 両方のデバイスで許可を選択してください。

SideQuest が Quest を認識したら、画面の下に緑色の点が付いた SideQuest のロゴが表示されます。

その後、SideQuest の上部にある検索アイコンをクリックして、 `BMBF`を検索して BMBF をインストールします。 ユニコーンをシンボルとするアプリが表示されます。 それをタップして `ヘッドセットにインストール`をクリックします。

その後、Quest に BMBF がインストールされ、Beat Saber に mod を導入する準備ができます。

## Beat Saber のセットアップ

BMBF を正常にインストールし終えたら、クエストのライブラリ内に提供元不明としてアプリを見つけることができます。

![UnknownMenu](/.assets/images/beginners-guide/quest_home-menu.jpg)

それを起動するとファイルへのアクセス許可を促すポップが表示されます 画面上の指示に従ってください。 その後 [BeastSaber](https://bsaber.com) を見てください

インストールプロセス中に Restore App ポップアップが表示されることがありますが、そのときは Close をクリックしてください。 この警告は海賊版を防止するために表示されるものなので、正規版を購入している場合は無視をしてもかまいません。

これで、Mod のインストールの[主要な Mod](/ja/quest-modding.md#コアmod)の手順を PC と同じ方法で実行できます。
