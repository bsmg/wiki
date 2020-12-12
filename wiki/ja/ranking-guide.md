---
sidebar: "false"
---

# Ranking & Scoring Guide

::: danger Sorry, this page has not been translated yet, you can either:

*Note for translators: this page was generated automatically, please remove this content before starting translation*

:::warning Disclaimer This guide was originally written on February 7th, 2019. It has been updated multiple times but some information may be inaccurate or missing. If you notice inaccurate/missing information in this guide, you can submit a pull request on the [BSMG Wiki GitHub](https://github.com/bsmg/wiki#-development) or send me a message on Discord (TeknozFR#6900). :::

## Accuracy and Scoring

### Score Multiplier

Your score multiplier can be seen below, being surrounded by a outer ring. As said in the name, the multiplier has an effect on your score. You start the song with a multiplier of **1x** and the outer ring shows the progression to the next multiplier. When you hit the note that brings you up to the next multiplier, that note is affected by the new multiplier and not the old one. The different multipliers are : **1x, 2x, 4x and 8x**. Every time you lose combo which involves missing a note, cutting in the wrong direction or the with the wrong saber, hitting a bomb or going through an obstacle, your multiplier will be cut in half.

![Score Multiplier](~@images/ranking-guide/score_multiplier.png "Score Multiplier")

### Scoring

Scoring well in Beat Saber isn’t as simple as keeping a high combo and not missing notes, it is also determined by your score per block. The maximum score possible to achieve while slicing a block is **115** (without counting the score multiplier). While cutting a block, you must achieve the correct swing angles and you must slice it in the center to achieve the best score for that cut. Here is how score is calculated for a cut :

| Component          | Point Value |
| ------------------ | ----------- |
| 100° Approach      | 70 Points   |
| 60° Follow Through | 30 Points   |
| Cutting in Half    | 15 Points   |


This shows how important it is to do proper swings to get the right angles and the best score possible. Remember, it’s better to get a bad cut than a miss since a miss counts as **0 points** and breaks your combo.

### Hitboxes

A common misconception in Beat Saber would be that most people think that the hitboxes for the notes are the blocks themselves. While that used to be the case, the hitboxes have changed quite a few times through the different versions of the game and a lot of the pictures out there are mistaken. Here is an image showing the current hitbox. As you can see, the hitbox is pretty big and extends a lot on the sides and the front. With this information, it is recommended to hit with the tip of saber to maximize the angle and get the best cut possible.

![Hitboxes](~@images/ranking-guide/hitbox.png "Hitboxes")

### Accuracy

Accuracy is shown on the left after enabling the **Advanced HUD** option in the Player Settings. Accuracy is shown by a percentage and a letter. Because accuracy is a percentage, the best “possible” accuracy is **100%** or named a **SSS**. While such accuracy is practically impossible (since it would require no combo break and 115 cuts on every block), accuracy is still a great way to measure performance on a map and one’s ability to score properly and avoid missing notes. Accuracy is calculated using information such as the scores per hit, the score multiplier and the amount of miss. Here is the connection between the letters and accuracy percentage :

| Letter Grade | Accuracy Percentage |
| ------------ | ------------------- |
| SS           | 90-99.99%           |
| S            | 80-89.99%           |
| A            | 65-79.99%           |
| B            | 50-64.99%           |
| C            | 35-49.99%           |
| D            | 20-34.99%           |
| E            | < 19.99%            |

## The Ranking Process

### Ranked / Unranked

A lot of people (like I did) will spend dozens and dozens of hours without knowing the difference between ranked and unranked maps when they start. While a map being ranked doesn’t make it better for any reason, it’s great for new players to learn what the difference is, especially if they ever decide to try ranking up.

**Ranked :** A ranked map is assigned a certain difficulty level measured in stars (★) and is worth a certain amount of PP (performance points) for that difficulty. An amount of that PP can be earned by a player for completing the map. More PP will be rewarded for a player that got a higher accuracy. Ranked maps *mostly* respect criteria and are considered as “good maps”. They are the only way to climb the [global leaderboard](https://scoresaber.com/global).

**Unranked :** An unranked map is any map that has been published on [BeatSaver](https://beatsaver.com/). It does not need to be actually possible to pass and maps can be made by anybody using the a mapping editor. Also, it is not possible to know the difficulty level of an unranked map except by looking at the difficulty name which is not always an accurate measure of the difficulty since the mapper chooses it.

### Criteria and the Ranking Process

The ranking team ranks maps through a communal evaluation process. Those maps are then assigned PP based on an algorithm that determines the difficulty once they are ranked based on a variety of factors. PP, which stands for performance points, is given for completing ranked maps based on how high you scored in the level. Full details about the ranking process, criteria, and additional FAQs can be found in the [ScoreSaber Discord server](https://discord.com/invite/WpuDMwU).

## The Ranking System Explained (PP System)

The PP system is probably one of the most misunderstood things when it comes to ranking in the game. Personally, I find it that people misunderstand it so often that I ended up writing a message about it and pinned it on the Beat Saber Canadian Discord so I wouldn’t need to explain it anymore, so here is “all” you need to know about it.

### How can I earn PP and how does the global ranking work?

You can find your global ranking on [ScoreSaber](https://scoresaber.com/global) by typing your username in the search bar. Your ScoreSaber profile is tied to your Steam/Oculus profile on which you play the game.

As said earlier, you can earn PP (performance points) by playing ranked maps. The amount of PP a map is worth is determined when the map is ran through the PP algorithm. The algorithm is kept secret to prevent mappers from trying to intentionally make songs to only be worth a lot of PP (to avoid breaking the system basically). The exact amount of PP gained by a player is determined by their accuracy on that map and the curve it represents compared to the max amount of PP that map is worth. You can find more information in the [ScoreSaber Discord server](https://discord.com/invite/WpuDMwU).

### How does the PP system work and what is weighted PP?

To prevent skilled players from grinding hundreds of easier maps worth less PP to rank up, a curve is applied to your plays. This curve is **0.965^(x-1)** where **x** is the position of that score on your ranked map list which can be found on your profile.

You might have noticed that in your list, there are 2 numbers which end with PP. One of these numbers is **blue** and represents the raw amount of PP you get from that play, before the curve is applied. The second number is **(grey)** and shows the actual weighted amount of PP you are getting from that play after the curve is applied.

![Raw and Weighted PP](~@images/ranking-guide/raw&weighted_pp.png "Raw & Weighted PP")

As said before, the amount of weighted PP you will receive is determined by the curve and the placement of that song in your list. As an example, if your top play is a **260 raw PP** play, you will be rewarded **260 weighted PP** which is a **100%** of the raw PP of that play. If your second top play is **247 raw PP**, you will be rewarded **238 weighted PP** which is the actual amount of PP you get after the curve is applied on it. Here is a list of 4 of my old top plays where *raw PP is in italic* while **weighted PP is bold** to demonstrate the curve :

| Raw PP | Weighted PP                  |
| ------ | ---------------------------- |
| 260pp  | **260pp** (100% of raw PP)   |
| 247pp  | **238pp** (96.5% of raw PP)  |
| 246pp  | **229pp** (93.1% of raw PP)  |
| 244pp  | **219pp**  (89.9% of raw PP) |

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

| Modifier                    | Description                                                                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No Obstacles (-0.05)        | Removes all of the obstacles (walls) from the map.                                                                                                             |
| No Bombs (-0.10)            | Removes all of the bombs from the map.                                                                                                                         |
| Slower Song (-0.30)         | Slows down the song to 85% of the original speed.                                                                                                              |
| Insta Fail (0.00)           | Makes you fail on the first miss you make.                                                                                                                     |
| Battery Energy (0.00)       | Stops the health bar from replenishing. This limits the total amount of misses and bad cuts you can have before failing.                                       |
| Disappearing Arrows (+0.07) | Makes the arrows disappear from the note as they approach you. You still need to remember the direction as you need to cut in the correct direction as always. |
| Faster Song (+0.08)         | Speeds up the song to 120% of the original speed.                                                                                                              |
| Ghost Notes (+0.11)         | Notes are invisible and the arrows disappear shortly before you hit them, similarly to Disappearing Arrows.                                                    |

## Grips

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