---
prev: false
next: false
description: A compilation of resources to help you play more difficult songs and achieve a higher score!
---

# Хваты и трюки

_Подборка ресурсов, которые помогут вам лучше разрезать ноты._

## Общее мега-руководство

An incredible writeup to help you get that PP. [Ranking & Scoring Guide](./ranking-guide.md)

## Подсчет очков

See this video by the [Cube Community YT](https://www.youtube.com/channel/UCdG9zS8jVcQIKl7plwWXUkg) about how the scoring system works.

<YouTube url='https://www.youtube.com/watch?v=rVbXCGddspA' />

Additionally, here's an image from the game developers about how the [hitboxes](https://twitter.com/Split82/status/979365834324889600) work

![Bloq Hitbox](/.assets/images/mapping/hitbox-from-split.jpg)

## Рейтинг

_Как работает мировой рейтинг? Что такое очки PP (performance points)? Что за числа в скобочках? Почему мой PP такой маленький?_

There are 2 separate ranking systems: [ScoreSaber](https://scoresaber.com/global) and [BeatLeader](https://www.beatleader.xyz/ranking/1). You can find your global ranking and PP on their respective sites where you can search for your name.

On **PC**, your Beatleader account is tied to your Steam / Oculus account and is your profile name by default.  
On **Quest**, your Beatleader account is made by you in game using the BeatLeader Mod.

> You can merge your Beatleader account with your Steam account to sync scores across devices.  
> If you're using an Oculus account and looking log in on the website, you'll need to [make a BL account](https://beatleader.wiki/en/account#website-1) or connect your steam account

Your ScoreSaber account is tied to your Steam / Oculus username.

### BeatLeader

Ranked songs are assigned 3 difficulties (stars) based on the kinds of difficulty the map presents. These 3 numbers combined with the accuracy you finished the song with determines the exact amount of raw PP gained. The 3 difficulties represented for the purposes of PP rewards are:

- Pass-ibility: How hard a map is to pass. Provides a base flat PP reward
- Acc-ibility: How hard a map is to get a good accuracy. Provides PP based on your accuracy
- Tech-iness: Purly a measurement of pattern difficulty devoid of speed. Provides bonus PP based on your accuracy

The exact 3 difficulty numbers assigned to each map is done with an open source AI algorithm developed by DzRamen and LackWiz

### ScoreSaber

Ranked songs are assigned PP (PP = performance points). The exact amount of PP gained is determined by the accuracy you finish a ranked song with. How much PP a ranked song is worth is determined by a secret algorithm developed by Umbranox.

### Weighted PP

To avoid having skilled players grinding lots of easier songs that are worth less PP, a **curve** is applied to your plays.

This curve is `0.965^(x-1)` where `x` is the position of that score on your song list. e.g. If your top play is a 260 PP play, you will be rewarded 260 weighted PP which is a 100% of the raw PP of that play. If your second top play is 247 raw PP, you will be rewarded 238 weighted PP which is the actual amount of PP you get after the curve applies. Here is a table to illustrate this system:

| Чистое РP | Взвешенное PP                   |
| --------- | ------------------------------- |
| 260pp     | **260pp** (100% от чистого PP)  |
| 247pp     | **238pp** (96.5% от чистого PP) |
| 246pp     | **229pp** (93.1% от чистого PP) |
| 244pp     | **219pp** (89.9% of raw PP)     |

### Improving Your Rank

To get a better rank, there are quite a few tools you can use to find ranked songs that fit your skill level.

First, it's always good to go see your own [ScoreSaber](https://scoresaber.com/global)/ [BeatLeader](https://www.beatleader.xyz/ranking/1) profile to see songs that you haven't played in a while or that you could improve on and to know what your top scores look like.

**ScoreSaber Addons:**

[BaliBilo's ScoreSaber site](https://scoresaber.balibalo.xyz/peepee) and [Beat Savior](https://beat-savior.herokuapp.com/) are external sites that can help you find maps to improve on and keep track of your performance.

You can find more information in the [Ranking & Scoring Guide](./ranking-guide.md).

_This section is adapted from Tek's writeup in the Beat Saber Canadian discord._

::: tip **ScoreSaber** ranked songs are ranked by the team in the [ScoreSaber Discord](https://discord.gg/WpuDMwU). Similarly, **Beatleader** ranked songs are ranked by the team in the [BeatLeader Discord](https://discord.gg/2RG5YVqtG6). You can follow along in these servers to see what changes happen! :::

## Хваты

Cube Community made some videos showing off some of the more popular grips for Oculus Touch controllers (CV1) and Vive Wands.

### HTC Vive Wands

<YouTube url='https://www.youtube.com/watch?v=G7x_wb7RrgU' />

![Vive Grips Guide](/.assets/images/grips-and-tricks/vive-grips-guide.jpg)

### Oculus Rift

<YouTube url='https://www.youtube.com/watch?v=XFt90q69aEA' />

![Oculus Grips Guide](/.assets/images/grips-and-tricks/oculus-grips-guide.jpg)

### Oculus Rift S and Quest

A video has not yet been made for Rift S and Quest controllers, but you can find some examples below! ![Oculus Rift S/Quest Guide](/.assets/images/grips-and-tricks/touch2-grips.jpg)

### Valve Index Controllers

A video has not yet been made for Index controllers, but you can find some examples in their `#tips-and-grips` channel! [CC Discord](https://discord.gg/dwe8mbC)

### Oculus Quest 2

A video has not yet been made for the Quest 2's controllers, but you can find some examples below! ![Oculus Quest 2](/.assets/images/grips-and-tricks/touch3-grips.jpg)

Check out Cube Community's `#tips-and-grips` channel for more suggestions and examples in their [Discord](https://discord.gg/dwe8mbC). Please remember that everyone's playstyle and body is different; someone else's grip might not work exactly like you need it to. Don't be afraid to experiment and find what's right for you!

## Как улучшить отслеживание контроллеров для HTC Vive

Your body may be blocking one lighthouse from seeing one of your controllers. Here are some steps that may help improve tracking.

1. Move into the corner of your playspace.
2. Rotate your body 45 degrees so that your lighthouses can see both controllers.
3. Rotate the room within Beat Saber's settings to compensate, so that you appear facing forward within the game.

![Vive Tracking Help](/.assets/images/grips-and-tricks/vive-tracking-help.gif)

This can apply to Oculus sensors too.

## Отсоединение батарейки на контроллерах Oculus Touch

The force of your swings in Beat Saber can cause the spring in the touch controllers to compress and disconnect the battery for a brief moment. This is what happens when you see your saber lose positional tracking but still rotate in place. To alleviate this, ragesaq recommends adding extra springs inside the battery compartment to decrease the likelihood of battery disconnects happening, explained in this [Reddit post](https://www.reddit.com/r/oculus/comments/a2h7o4/psa_adding_an_additional_spring_to_the_battery/?st=JR9Q7OEZ&sh=a7a3d091)

## Также ознакомьтесь

![Also Consider](/.assets/images/grips-and-tricks/allow-adequate-room-around-you-during-game-play-put-on-27689465.png)
