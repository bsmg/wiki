---
sidebar: auto
---

# 持ち方とコツ
_ブロックを切るようの資料まとめ_

## ランキングを上げるためのチュートリアル
PPを取るためのTeknozFRによる記事 [ランキング & スコアリングガイド](./ranking-guide)

## スコアを上げるには
得点の仕組みについては、 [CubeCommunity YT](https://www.youtube.com/channel/UCdG9zS8jVcQIKl7plwWXUkg) のビデオをご覧ください。

<YouTube url='https://www.youtube.com/watch?v=rVbXCGddspA' />

さらに、 [hitbox](https://twitter.com/Split82/status/979365834324889600) がどのように動作するかの開発者が提供するイメージです。

![ノーツ](~@images/mapping/hitbox-from-split.jpg)

## ランキング
*グローバルランキングの仕組みは? パフォーマンスポイントとは何ですか? 括弧内の数字は何ですか? なぜ私のPPはそんなに小さいのですか?*

グローバルランキングとPPは [ScoreSaber](https://scoresaber.com/global) で確認できます。 あなたのScoresaberアカウントはあなたのSteam / Oculusのユーザー名に関連付けられています。

1. ランク付けされた曲にはPP(PP=パフォーマンスポイント) が割り当てられます。 得られるPPの量は、ランク付けされた曲のプレイの正確さによって決まります。 ランク付けされた曲のPPの値は、Umbranox, our Panda Godによって開発された秘密のアルゴリズムによって決定されます。
2. 熟練したプレイヤーが簡単な曲で多くのPPを取るのを避けるために、各プレイヤーにある曲線を適用しています。 その曲線は0.965^(x-1) で、xはソングリストのスコアの位置です。 例） あなたの最高スコアの曲が260 PPの場合、 260PPを得ることができ、これは100%のPPです。 2番目のスコアの曲が247PPの場合、曲線を適応した237PP（＝247＊0.965）を得ることができます。 以下は私の現在の上位4曲のPPと獲得PPです。獲得したPPは太字で表示ています。

| PP    | 重みのついたPP                |
| ----- | ----------------------- |
| 260pp | **260pp** (元のPPの100%)   |
| 247pp | **238pp** (元のPPの96.5%)  |
| 246pp | **229pp** (元のPPの93.1%)  |
| 244pp | **219pp**  (元のPPの89.9%) |

3. ランクアップするには、新しい曲であなたのトップスコアのPPより多くまたは同じくらいのPPのスコアを取得しましょう。 新たにプレイするより高いPPを持つ曲がなくなったら、最初のページに戻ってよりよいスコアを取りましょう。 ここには、DuoVRによる [すべてのランク付けされた曲のスプレッドシート](https://docs.google.com/spreadsheets/d/1ufWgF2tWS0gD3pIr0_d37EkIcmCrUy1x6hyzPEZDPNc/edit#gid=1775412672) にPPの価値があります。 このリストは24時間ごとに更新されます。

こちらはDuoVRによる別の [サイト](https://duovr.github.io/BigPP/) で、 scoresaberのプロファイルを入力することができ、多くのPPを得るためにプレイするべき曲をお勧めしてくれます。

*このセクションは、Beat Saber Canadian discordのTekの書き込みによります。*

::: tip 曲は [ScoreSaber Discord](https://discord.gg/WpuDMwU) のチームによってランク付けされています。 このサーバーをフォローすると、更新を確認できます。 :::

## 握り方
Cubeコミュニティでは、Oculus Touch controller(CV1) やVive Wandsの人気のあるグリップをいくつか紹介するビデオを制作しました。

### HTC Vive Wands
<YouTube url='https://www.youtube.com/watch?v=G7x_wb7RrgU' />

![Viveグリップガイド](~@images/grips-and-tricks/vive-grips-guide.jpg)

### Oculus Rift
<YouTube url='https://www.youtube.com/watch?v=XFt90q69aEA' />

![Oculus Grips Guide](~@images/grips-and-tricks/oculus-grips-guide.jpg)

### Oculus Rift S と Quest
RiftSとQuestコントローラ用のビデオはまだ作成されていませんが、以下のいくつかの例を示します！ ![Oculus Rift S/Quest Guide](~@images/grips-and-tricks/touch2-grips.jpg)

### Valve Index コントローラー
Indexコントローラ用のビデオはまだ作成されていませんが、いくつかの例は `#tips-and-grips` チャンネルにあります！ [CC Discord](https://discord.gg/dwe8mbC)

### Oculus Quest 2
Quest２コントローラ用のビデオはまだ作成されていませんが、以下のいくつかの例を示します！ ![Oculus Quest 2](~@images/grips-and-tricks/touch3-grips.jpg)

[Cube コミュニティのDiscord](https://discord.gg/dwe8mbC)のチャンネル`#tips-and-grips`でより多くの例が示されています。 誰もがプレイスタイルと体の動かし方が違うことを覚えておいてください。他の誰かの握り方があなた思うように機能しない場合があります。 あなたに合う方法をいろいろ試して探してください！

## Vive コントローラーのトラッキングを改善
あなたの体がコントローラーの1つの信号源を妨げているかもしれません。 ここでは、トラッキングを改善するためのいくつかの手順を示します。

1. プレイスペースの隅に移動します。
2. 両方のコントローラーが感知できるように体を45度回転させます。
3. Beat Saberの設定でルームを回転させて補正し、ゲーム内で画面が前向きに表示されるようにします。

![Vive トラッキング ヘルプ](~@images/grips-and-tricks/vive-tracking-help.gif)

これはOculusセンサーにも適用できます。

## Touchコントローラーのバッテリー切断
Beat Saberのスイングで、Touchコントローラのバネが圧縮して電池との接触が途切れることがあります。 セイバーの位置のトラッキングが外れ、回転のトラッキングが残るような現象が起こります。 ragesaqによると、これを軽減するには 電池を格納する部分に追加のばねを入れることで電池の接触不良が起こりにくくなります。詳しくはここで説明されています。[Reddit post](https://www.reddit.com/r/oculus/comments/a2h7o4/psa_adding_an_additional_spring_to_the_battery/?st=JR9Q7OEZ&sh=a7a3d091)

## 以下のことにも注意しましょう
![以下のことにも注意しましょう](~@images/grips-and-tricks/allow-adequate-room-around-you-during-game-play-put-on-27689465.png)
