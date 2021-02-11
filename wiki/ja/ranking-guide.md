---
sidebar: auto
---

# ランキング & スコアのガイド

::: danger Sorry, this page has not been translated yet, you can either:

*Note for translators: this page was generated automatically, please remove this content before starting translation*

:::warning Disclaimer このガイドはもともと2019年2月7日に作成されたものです。 何回か更新されていますが、一部の情報が不正確または不足している可能性があります。 このガイドで間違っていたり不足している情報に気付いた場合 [BSMG Wiki GitHub](https://github.com/bsmg/wiki#readme) でリクエストを送信するか、Discord (TeknozFR#6900) にメッセージを送信してください。 :::

## 正確性とスコア

### スコア倍率

外側を円で囲われているスコア倍率は以下のように機能します。 名前の通り、スコアに影響します。 曲が始まるとスコア倍率は**1x**からスタートします。外側のリングが完成すると次の倍率が表示されます。 あるノーツを切ったことで次の倍率に移行したとき、そのノーツのスコアは前の倍率ではなく新しい倍率で計算されます。 スコア倍率は**1x, 2x, 4x, 8x**があります。 ノーツを切り逃したり、間違った方向で切ったり、異なるセイバーで切ったとき、ボムを切ったとき、壁に当たり、コンボが途切れるとスコア倍率は半分になります。

![Score Multiplier](~@images/ranking-guide/score_multiplier.png "Score Multiplier")

### スコア

Beat Saberのスコアシステムは、コンボを維持し、ミスをしなければよいというほど簡単ではありません。 ブロックごとにスコアが異なります。 ブロックをカットして得られる最大スコアは **115** です(スコア倍率を考慮しないとき)。 ブロックをカットしようとするとき、正しいスイングアングルを維持する必要があります。そして最高のスコアを達成するために中央をカットしなければなりません カットのスコアは次のように計算されます:

| 構成要素       | 点数     |
| ---------- | ------ |
| 準備角度100°   | 70ポイント |
| 振り抜き角度60°  | 30ポイント |
| ちょうど半分にカット | 15ポイント |


これは、可能な限り最高のスコアを得るために適切な角度でスイングを行うことがいかに重要であるかを示しています。 ミスは **0 0 ポイント** としてカウントされ、コンボが途切れるので、ミスよりもBADカットの方が良いことを覚えておいてください。

### Hitboxes（ヒットボックス）

Beat Saberのよくある誤解は、ほとんどの人がノーツはヒットボックスそのものだと考えているということです。 かつてのゲームではそうでしたが、ヒットボックスはそれぞれのゲームのバージョンで異なっていますが、多くのイメージは間違っています。 現在のヒットボックスを示す画像があります。 ご覧のとおりヒットボックスはかなり大きく、側面と前面に伸びています。 この画像から、角度を最大化し、可能な限り最高のカットを取得するために、セイバーの先端でヒットすることをお勧めします。

![Hitboxes](~@images/ranking-guide/hitbox.png "Hitboxes")

### 達成度

プレイヤー設定で **Advanced HUDHUD** オプションを有効にすると、左側に達成度が表示されます。 達成度はパーセンテージとランクで表示されます。 達成度はパーセンテージであるため、最高の「可能な」精度は **100%** または **SSS** です。 そのような達成度は現実的に不可能ですが（フルコンボとブロックごとに115点を得る必要になるため） 達成度はまだレベルのパフォーマンスを測定するのに最適な方法です。うまくプレイし、ノーツのミスの少なさを測る指標になります。 ヒットごとのスコア、スコア倍率、ミスの量などの情報を使用して達成度が計算されます。 ランクと達成度は以下のように対応します:

| ランク | 達成度       |
| --- | --------- |
| SS  | 90-99.99% |
| S   | 80-89.99% |
| A   | 65-79.99% |
| B   | 50-64.99% |
| C   | 35-49.99% |
| D   | 20-34.99% |
| E   | < 19.99%  |

## ランク付けのながれ

### Ranked と Unranked

(私がそうであったように)多くの人々は、開始時にランク付けされた譜面とランク付けされていない譜面の違いを知らずに数十時間を過ごすでしょう。 ランキングを上げようと決意しない限りは、新規プレイヤーはどの難易度がランキング付けされているかを知る理由はあまりありません。

**Ranked**：ランク付けされた譜面は難易度に応じて星（★）がつき、それに応じたPP（パフォーマンスポイント）が得られます。 そのPPは、マップをクリアするとプレーヤーに付与されます。 より高い達成度を得たプレーヤーに対してPPが多く支払われます。 ランク付けされたマップは *主に* 基準を尊重し、「良いマップ」とみなされます。 これらは [global leaderboard](https://scoresaber.com/global)のランキングを上げる唯一の方法です。

**Unranked :** [BeatSaver](https://beatsaver.com/) で公開されているランク付けされていないすべてのマップを指します。 マッピングエディタを使って誰でもマップを作ることができ、ランク付けの基準をパスする必要はありません。。 また、譜面作成者が難易度を選ぶことができるので、その見かけの難易度と実際の難易度がいつも一致しているとは限りません。

### 基準とランキングプロセス

ランキングチームは共同評価プロセスを通じてマップをランク付けします。 それらのマップは、さまざまな要因に基づいてランク付けされた難易度を決定するアルゴリズムがPPを割り当てます。 パフォーマンスポイントを表すPPは、レベルでのスコアに基づいてランク付けされたマップをクリアすると得られます。 ランキングプロセス、基準、および追加のFAQの詳細については、 [ScoreSaber Discordサーバー](https://discord.com/invite/WpuDMwU) を参照してください。

## ランキングシステムの説明 (PPシステム)

PPシステムは、おそらくゲーム内のランキングになると、最も誤解されやすいものです。 個人的に私はそれを誤解している人を多く見かけます。そのたびに一から十まで説明してカナダのビートセイバーディスコードサーバのリンクをそれ以上説明しなくてもよいように渡しています。ここにあなたが知るべきすべてのことを書きます。

### PPを取得するにはどうすればよいですか?　グローバルランキングはどのよう仕組みですか?

グローバルランキングとPPは [ScoreSaber](https://scoresaber.com/global) で確認できます。searchにあなたのユーザー名を入力してみて下さい ScoreSaberのプロフィールは、ゲームをプレイするSteam/Oculusのプロフィールに関連付けられています。

先ほど述べたように、ランク付けされたマップをプレイすることでPP(パフォーマンスポイント)を獲得することができます。 PPアルゴリズムが実行され、譜面のPPの量が決まります。 アルゴリズムは(システムが意味をなくさないために)PPを稼ぐためだけに曲をつくることを防ぐために秘密に保たれています。 The exact amount of PP gained by a player is determined by their accuracy on that map and the curve it represents compared to the max amount of PP that map is worth. 詳細は [ScoreSaber Discord サーバー](https://discord.com/invite/WpuDMwU) で確認できます。

### How does the PP system work and what is weighted PP?

To prevent skilled players from grinding hundreds of easier maps worth less PP to rank up, a curve is applied to your plays. This curve is **0.965^(x-1)** where **x** is the position of that score on your ranked map list which can be found on your profile.

You might have noticed that in your list, there are 2 numbers which end with PP. One of these numbers is **blue** and represents the raw amount of PP you get from that play, before the curve is applied. The second number is **(grey)** and shows the actual weighted amount of PP you are getting from that play after the curve is applied.

![Raw and Weighted PP](~@images/ranking-guide/raw&weighted_pp.png "Raw & Weighted PP")

As said before, the amount of weighted PP you will receive is determined by the curve and the placement of that song in your list. As an example, if your top play is a **260 raw PP** play, you will be rewarded **260 weighted PP** which is a **100%** of the raw PP of that play. If your second top play is **247 raw PP**, you will be rewarded **238 weighted PP** which is the actual amount of PP you get after the curve is applied on it. Here is an example of how the curve works:

| 元のPP  | 重みのついたPP                     |
| ----- | ---------------------------- |
| 260pp | **260pp** (元のPPの100%)        |
| 247pp | **238pp** (96.5% of raw PP)  |
| 246pp | **229pp** (93.1% of raw PP)  |
| 244pp | **219pp**  (89.9% of raw PP) |

### Why is my total PP not increasing as much as the weighted PP I got on my new score?

A common question people seem to have when they get a new score worth, for example, **100 weighted PP** is why they are not getting **+100 pp** on their total amount of performance points. As explained earlier, since the effect of the curve on your plays increases the further you go down your list, when you make a new play, it takes the place of an older play which makes all the plays that are under go down 1 place in the list. Even if you are getting **+100 pp** from this new play, all your lower plays are weighed down even more then before so you lose a certain amount of PP on them. This is why when getting a new play or making a better play on a map, you will never (one exception) get the same amount of PP on your total amount of performance points.

The only exception to this is if you get a better accuracy on your current top play. Since your top play is not affected by the curve, meaning that none of your songs will change places in your list, there will be no lost of PP on your other plays. An example would be if your top play is on Avalanche with **250 pp** and you manage to get a better accuracy and that play is now worth **260 pp**, you will then get **+10 pp** on your total amount of PP.

### How can I improve and get more PP?

To improve and get a better rank in the global ranking, there are quite a few tools you can use to find ranked songs that fit your skill level. First, it’s always good to go see your own [ScoreSaber](https://scoresaber.com/global) profile to see songs that you haven’t played in a while or that you could improve on and to know what your top scores look like. The [ScoreSaberEnhanced](https://github.com/Splamy/ScoreSaberEnhanced) browser extension can extend the functionality of your profile. [BaliBilo's ScoreSaber site](https://scoresaber.balibalo.xyz/peepee) and [Beat Savior](https://www.beatsavior.io/) are external sites that can help you find maps to improve on and keep track of your performance.

For more precise tips and tricks, go refer to the [Useful Tips & Links](#useful-tips-links) chapter.

## Modifiers

### Modifiers & Ranked songs

Since the **v12.0p1** update, a lot of modifiers got added and some already existing ones have a different effect. When it comes to ranked maps, all the **Negative Modifiers** apply on the score. This means **Negative Modifiers** can be used on any ranked map but they will obviously penalize your score and reward less PP. As for the **Positive Modifiers**, they only take effect on two ranked maps as of now ; [Overkill mapped by Nuketime](http://scoresaber.com/leaderboard/87194) and [Overkill mapped by Kry](http://scoresaber.com/leaderboard/86492). They are used to test the effects of **Positive Modifiers** on ranked maps and to find a way to integrate them on all the other ranked maps. You can obviously play any other map (including ranked ones) and the modifiers will all work but they will only increase your score and PP on the two versions of Overkill. The modifiers used on any score on the leaderboards can be seen to the right of the score. With this said, here is a list of all the modifiers in the game, their effects on score and how they affect gameplay :

**No Fail (-0.50)**

Removes the health bar which makes it impossible to fail. Contrary to older versions of the game, No Fail will now submit scores on the leaderboard unless used on the Practice Mode.

| オプション           | 説明                                                                         |
| --------------- | -------------------------------------------------------------------------- |
| 障害物なし (-0.05)   | すべての障害物（壁）をマップから削除します。                                                     |
| 爆弾なし (-0.10)    | すべてのボムをマップから削除します。                                                         |
| スローダウン（-0.30）   | 曲を元の速度の85%に減速します。                                                          |
| ノーミス(0.00)      | １回でもミスするとゲーム失敗になります                                                        |
| バッテリー (0.00)    | ヘルスバーの補充を停止します。 これは、ミスやBADの判定の上限の回数を制限します。                                 |
| ノーアロー（+0.07）    | 矢印が近づくにつれてノーツから消えます。 あなたはいつものように正しい方向にカットする必要があるので、どの方向に切るべきが覚えておく必要があります。 |
| スピードアップ(+0.08)  | 曲を元の速度の120%に加速します。                                                         |
| ゴーストノーツ (+0.11) | ノーツが見えなくなり、矢印は当たる直前に消えます。ノーアローと同様です。                                       |

## 握り方

### Why should I use a grip?

An alternative grip can be an adjustment of the default saber angles, an alternative method of holding the controller, or a combination of both. There's no single grip that works for everyone, and using an alternative grip won't magically make you better at the game. It is not necessarily better than the default way the controller is meant to be held, or the default angles that Beat Saber uses. However, alternative grips can have many benefits, from being more comfortable for long periods of play to helping you optimize your swings. They can redistribute the weight of a poorly balanced Vive wand, or increase the range of wrist motion with a Touch controller. Below are some popular grips used in the competitive community. Don't be afraid to adjust or experiment to find what's right for you!

### Grips

Refer to the Grips section of [Grips And Tricks](./grips-and-tricks.md) for some examples of commonly used grips used in the community.

## Useful Tips & Links

### Tips & tricks

After all this time playing Beat Saber, I’ve hit many walls. Hitting a wall can be really annoying since it can take time to figure out what to do to keep improving. Here is a small list of tips to improve as a player.

**Challenge yourself.**

While it sounds obvious, many players never try to improve and play harder maps and simply play the same maps over and over again. Extend your song list and push yourself to learn the things you are the worst at.

**Play more.**

You don't get better at playing an instrument without a lot of experience. The same goes for Beat Saber - simply playing more will improve pattern recognition, condition your body, and build muscle memory.

**Evaluate your own gameplay.**

Recording yourself is great to see where you could improve, whichever it’s only your gameplay or it is with a webcam. Analyzing yourself play can be really useful to see your common mistakes. You can also watch your own replays by clicking the arrow next to your score in the leaderboard.

**Watch better players play and ask them tips**

If you have an opportunity, try to watch better players and use some of their techniques to improve. Copying everything about a pro player won’t make you one but can surely help you improve. Watch their replays and compare their movements to your own. Also if you ever have the opportunity, always ask for tips (just don’t be annoying or disrespectful).

**Don’t overthink it**

If you can’t finish a map or can’t achieve a higher score, don’t overthink it. I made the mistake of getting angry over this way too many times and it will create a mental wall. Simply play another song and come back to it another day.

**Practice hard patterns**

If you are struggling with a section of a map, slow it down with the Slower Song modifier or decrease the speed in practice mode.

**BSRA** Check out Cube Community's [Beat Saber Replay Analysis playlist](https://www.youtube.com/watch?v=rxf68rH4S20&list=PLwx5EB8PdMNdElyEBfO7VktSWSNZukfqP). This series help viewers understand how top Beat Saber plays are made and how they can improve.

**Have fun**

At the end of the day, this is a game. The important part is that you have fun and enjoy playing it. If you hate playing this “one ranked map that sucks but is worth so much PP”, then simply don’t play it. Don’t try to force yourself to play songs you dislike and play however you want. It’s when you have fun that you’ll see the time fly by and you’ll improve the most. If you don’t care about rank, it’s all good, just have fun 🙂

### Links

* refer to the [original English version](../ranking-guide.md),
* wait for a translation to be done,
* [BaliBilo's ScoreSaber Site](https://scoresaber.balibalo.xyz/peepee) : get play suggestions based on your scores to improve your global rank
* [Beat Savior](https://www.beatsavior.io/): track your ranked stats and performance