---
sidebar: auto
---

# Хваты и трюки
_A compilation of resources to help you to hit bloq._

## Общее мега-руководство
Отличное описание от пользователя TeknozVR, которое поможет вам получить то самое PP. [Ранг и подсчет очков](./ranking-guide)

## Подсчет очков
See this video by the [Cube Community YT](https://www.youtube.com/channel/UCdG9zS8jVcQIKl7plwWXUkg) about how the scoring system works.

<YouTube url='https://www.youtube.com/watch?v=rVbXCGddspA' />

Additionally, here's an image from the game developers about how the [hitboxes](https://twitter.com/Split82/status/979365834324889600) work

![Bloq Hitbox](~@images/mapping/hitbox-from-split.jpg)

## Рейтинг
*Как работает мировой рейтинг? Что такое очки PP (performance points)? Что за числа в скобочках? Почему мой пипи такой маленький?*

Вы можете найти свой глобальный рейтинг и PP на сайте [ScoreSaber](https://scoresaber.com/global) - здесь вы можете найти свое имя. Your ScoreSaber account is tied to your Steam / Oculus username.

1. Ranked songs are assigned PP (PP = performance points). The exact amount of PP gained is determined by the accuracy you finish a ranked song with. How much PP a ranked song is worth is determined by a secret algorithm developed by Umbranox, our Panda God.
2. To avoid having skilled players grinding lots of easier songs that are worth less PP, a curve is applied to your plays. This curve is `0.965^(x-1)` where `x` is the position of that score on your song list. e.g. If your top play is a 260 PP play, you will be rewarded 260 weighted PP which is a 100% of the raw PP of that play. If your second top play is 247 raw PP, you will be rewarded 238 weighted PP which is the actual amount of PP you get after the curve applies. Here is a table to illustrate this system:

| Чистое РТ | Взвешенное PP                    |
| --------- | -------------------------------- |
| 260pp     | **260pp** (100% от чистого PP)   |
| 247pp     | **238pp** (96.5% от чистого PP)  |
| 246pp     | **229pp** (93.1% от чистого PP)  |
| 244pp     | **219pp**  (89.9% от чистого PP) |

3. To get a better rank, there are quite a few tools you can use to find ranked songs that fit your skill level. First, it’s always good to go see your own [ScoreSaber](https://scoresaber.com/global) profile to see songs that you haven’t played in a while or that you could improve on and to know what your top scores look like. The [ScoreSaberEnhanced](https://github.com/Splamy/ScoreSaberEnhanced#readme) or [ScoreSaber Country Leaderboard](https://github.com/motzel/ScoreSaberCountryLeaderboard#readme) browser extension can extend the functionality of your profile. [BaliBilo's ScoreSaber site](https://scoresaber.balibalo.xyz/peepee) and [Beat Savior](https://www.beatsavior.io/) are external sites that can help you find maps to improve on and keep track of your performance.

You can find more information in the [Ranking & Scoring Guide](./ranking-guide.md).

*Этот раздел основан на тексте от пользователя Tek из Beat Saber Canadian Discord.*

::: tip Совет Карты признаются ranked командой ScoreSaber: [ScoreSaber Discord](https://discord.gg/WpuDMwU). На этом сервере можно узнать что происходит с картами и рейтингом! :::

## Хваты
Cube Communitu выпустило некоторые видео, показывающие некоторые из наиболее популярных хватов для контроллеров Oculus Touch (CV1) и Vive Wands.

### Контроллеры HTC Vive Wands
<YouTube url='https://www.youtube.com/watch?v=G7x_wb7RrgU' />

![Vive Grips Guide](~@images/grips-and-tricks/vive-grips-guide.jpg)

### Контроллеры Oculus Rift
<YouTube url='https://www.youtube.com/watch?v=XFt90q69aEA' />

![Oculus Grips Guide](~@images/grips-and-tricks/oculus-grips-guide.jpg)

### Контроллеры Oculus Rift S and Quest
Видео для Oculus Rift S и Oculus Quest пока нет, но вы можете увидеть несколько примеров ниже! ![Oculus Rift S/Quest Guide](~@images/grips-and-tricks/touch2-grips.jpg)

### Контроллеры Valve Index
Видео для контроллеров Index еще нет, но вы можете найти примеры хватов в их канале `#tips-and-grips`! [CubeCommunity Discord](https://discord.gg/dwe8mbC)

### Контроллеры Oculus Quest 2
Видео для контроллеров Oculus Quest 2 еще нет, но вы можете найти примеры хватов на картинке ниже! ![Oculus Quest 2](~@images/grips-and-tricks/touch3-grips.jpg)

Посетите канал `#tips-and-grips` для получения дополнительных рекомендация и примеров на сервере [Discord CubeCommunity](https://discord.gg/dwe8mbC). Please remember that everyone's playstyle and body is different; someone else's grip might not work exactly like you need it to. Не бойтесь экспериментов и найдите подходящий лично вам вариант!

## Как улучшить отслеживание контроллеров для HTC Vive
Ваше тело может мешать одному из сенсоров видеть один из ваших контроллеров. Вот несколько шагов, которые могут помочь улучшить отслеживание.

1. Переместитесь в угол вашего игрового пространства.
2. Повернитесь на 45 градусов так, чтобы ваши сенсоры могли видеть оба контроллера.
3. Поверните комнату в настройках Beat Saber так, чтобы при этом вы смотрели вперед внутри игры.

![Vive Tracking Help](~@images/grips-and-tricks/vive-tracking-help.gif)

This can apply to Oculus sensors too.

## Отсоединение батарейки на контроллерах Oculus Touch
The force of your swings in Beat Saber can cause the spring in the touch controllers to compress and disconnect the battery for a brief moment. Вы можете заменить это, когда меч перестает отслеживать положение в пространстве, но поворот все еще работает как должен. To alleviate this, ragesaq recommends adding extra springs inside the battery compartment to decrease the likelihood of battery disconnects happening, explained in this [Reddit post](https://www.reddit.com/r/oculus/comments/a2h7o4/psa_adding_an_additional_spring_to_the_battery/?st=JR9Q7OEZ&sh=a7a3d091)

## Также ознакомьтесь
![Also Consider](~@images/grips-and-tricks/allow-adequate-room-around-you-during-game-play-put-on-27689465.png)
