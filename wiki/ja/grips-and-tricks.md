---
sidebar: auto
---

# 持ち方とコツ

_ブロックを切るときの便利なまとめ_

## ランキングを上げるためのチュートリアル

PP を取るための TeknozFR による記事 [ランキング & スコアリングガイド](./ranking-guide.md)

## スコアを上げるには

得点の仕組みについては、 [CubeCommunity YT](https://www.youtube.com/channel/UCdG9zS8jVcQIKl7plwWXUkg) のビデオをご覧ください。

<YouTube url='https://www.youtube.com/watch?v=rVbXCGddspA' />

さらに、 [hitbox](https://twitter.com/Split82/status/979365834324889600) がどのように動作するかの開発者が提供するイメージです。

![ノーツ](/.assets/images/mapping/hitbox-from-split.jpg)

## ランキング

_グローバルランキングの仕組みは? パフォーマンスポイントとは何ですか? 括弧内の数字は何ですか? なぜ私の PP はそんなに小さいのですか?_

グローバルランキングと PP は [ScoreSaber](https://scoresaber.com/global) で確認できます。 あなたの Scoresaber アカウントはあなたの Steam / Oculus のユーザー名に関連付けられています。

1. ランク付けされた曲には PP(PP=パフォーマンスポイント) が割り当てられます。 得られる PP の量は、ランク付けされた曲のプレイの正確さによって決まります。 ランク付けされた曲の PP の値は、Umbranox, our Panda God によって開発された秘密のアルゴリズムによって決定されます。
2. 熟練したプレイヤーが簡単な曲で多くの PP を取るのを避けるために、各プレイヤーにある曲線を適用しています。 その曲線は 0.965^(x-1) で、x はソングリストのスコアの位置です。 例） あなたの最高スコアの曲が 260 PP の場合、 260PP を得ることができ、これは 100%の PP です。 2 番目のスコアの曲が 247PP の場合、曲線を適応した 237PP（＝ 247＊0.965）を得ることができます。 このシステムを説明する表は次のとおりです。

| PP    | 重みのついた PP              |
| ----- | ---------------------------- |
| 260pp | **260pp** (元の PP の 100%)  |
| 247pp | **238pp** (元の PP の 96.5%) |
| 246pp | **229pp** (元の PP の 93.1%) |
| 244pp | **219pp** (元の PP の 89.9%) |

3. ランクを上げるためにあなたのスキルレベルに合ったランク付けされた曲を見つけるために使用できるツールはかなりあります。 最初に 自分の [ScoreSaber](https://scoresaber.com/global) プロフィールを見に行って、しばらくプレイしていない曲のプレイを改善するか、自分のトップスコアがどんなものかを知ることです。 [ScoreSaberEnhanced](https://github.com/Splamy/ScoreSaberEnhanced#readme) または [ScoreSaber Country Leaderboard](https://github.com/motzel/ScoreSaberCountryLeaderboard#readme) ブラウザ拡張機能は、プロフィールの機能を拡張できます。 [Balibilo の ScoreSaber サイト](https://scoresaber.balibalo.xyz/peepee) と [Beat Saveria](https://beat-savior.herokuapp.com/) は、地図を見つけて、あなたのパフォーマンスを 追跡するのに役立つ外部サイトです。

[ランキング & 得点ガイド](./ranking-guide.md) に詳細情報があります。

_このセクションは、Beat Saber Canadian discord の Tek の書き込みによります。_

::: tip
曲は [ScoreSaber Discord](https://discord.gg/WpuDMwU) のチームによってランク付けされています。 このサーバーをフォローすると、更新を確認できます。
:::

## 握り方

Cube コミュニティでは、Oculus Touch controller(CV1) や Vive Wands の人気のあるグリップをいくつか紹介するビデオを制作しました。

### HTC Vive Wands

<YouTube url='https://www.youtube.com/watch?v=G7x_wb7RrgU' />

![Viveグリップガイド](/.assets/images/grips-and-tricks/vive-grips-guide.jpg)

### Oculus Rift

<YouTube url='https://www.youtube.com/watch?v=XFt90q69aEA' />

![Oculus Grips Guide](/.assets/images/grips-and-tricks/oculus-grips-guide.jpg)

### Oculus Rift S と Quest

RiftS と Quest コントローラ用のビデオはまだ作成されていませんが、以下のいくつかの例を示します！ ![Oculus Rift S/Quest Guide](/.assets/images/grips-and-tricks/touch2-grips.jpg)

### Valve Index コントローラー

Index コントローラ用のビデオはまだ作成されていませんが、いくつかの例は `#tips-and-grips` チャンネルにあります！ [CC Discord](https://discord.gg/dwe8mbC)

### Oculus Quest 2

Quest ２コントローラ用のビデオはまだ作成されていませんが、以下のいくつかの例を示します！ ![Oculus Quest 2](/.assets/images/grips-and-tricks/touch3-grips.jpg)

[Cube コミュニティの Discord](https://discord.gg/dwe8mbC)のチャンネル`#tips-and-grips`でより多くの例が示されています。 誰もがプレイスタイルと体の動かし方が違うことを覚えておいてください。他の誰かの握り方があなた思うように機能しない場合があります。 あなたに合う方法をいろいろ試して探してください！

## Vive コントローラーのトラッキングを改善

あなたの体がコントローラーの 1 つの信号源を妨げているかもしれません。 ここでは、トラッキングを改善するためのいくつかの手順を示します。

1. プレイスペースの隅に移動します。
2. 両方のコントローラーが感知できるように体を 45 度回転させます。
3. Beat Saber の設定でルームを回転させて補正し、ゲーム内で画面が前向きに表示されるようにします。

![Vive トラッキング ヘルプ](/.assets/images/grips-and-tricks/vive-tracking-help.gif)

これは Oculus センサーにも適用できます。

## Touch コントローラーのバッテリー切断

Beat Saber のスイングで、Touch コントローラのバネが圧縮して電池との接触が途切れることがあります。 セイバーの位置のトラッキングが外れ、回転のトラッキングが残るような現象が起こります。 ragesaq によると、これを軽減するには 電池を格納する部分に追加のばねを入れることで電池の接触不良が起こりにくくなります。詳しくはここで説明されています。[Reddit post](https://www.reddit.com/r/oculus/comments/a2h7o4/psa_adding_an_additional_spring_to_the_battery/?st=JR9Q7OEZ&sh=a7a3d091)

## 以下のことにも注意しましょう

![以下のことにも注意しましょう](/.assets/images/grips-and-tricks/allow-adequate-room-around-you-during-game-play-put-on-27689465.png)
