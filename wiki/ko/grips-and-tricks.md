---
sidebar: auto
---

# 그립과 팁
_A compilation of resources to help you to hit bloq._

## 랭킹 올리기 튜토리얼
PP를 얻는 데 도움을 주는 TeknozFR의 믿을 수 없는 글. [랭킹 & 고득점 가이드](./ranking-guide)

## 고득점
See this video by the [Cube Community YT](https://www.youtube.com/channel/UCdG9zS8jVcQIKl7plwWXUkg) about how the scoring system works.

<YouTube url='https://www.youtube.com/watch?v=rVbXCGddspA' />

Additionally, here's an image from the game developers about how the [hitboxes](https://twitter.com/Split82/status/979365834324889600) work

![블럭 히트박스](~@images/mapping/hitbox-from-split.jpg)

## 랭킹
*세계 랭킹은 어떻게 작동하나요? Performance points는 또 뭔가요? 괄호 안의 숫자는 대체 무엇이죠? 왜 저의 PP는 이렇게 적나요?*

[ScoreSaber](https://scoresaber.com/global)에서 닉네임을 검색하면, 여러분의 글로벌 랭킹과 PP를 확인할 수 있습니다. Your ScoreSaber account is tied to your Steam / Oculus username.

1. Ranked songs are assigned PP (PP = performance points). The exact amount of PP gained is determined by the accuracy you finish a ranked song with. How much PP a ranked song is worth is determined by a secret algorithm developed by Umbranox, our Panda God.
2. To avoid having skilled players grinding lots of easier songs that are worth less PP, a curve is applied to your plays. This curve is `0.965^(x-1)` where `x` is the position of that score on your song list. e.g. If your top play is a 260 PP play, you will be rewarded 260 weighted PP which is a 100% of the raw PP of that play. If your second top play is 247 raw PP, you will be rewarded 238 weighted PP which is the actual amount of PP you get after the curve applies. Here is a table to illustrate this system:

| 처리 전 PP | 처리 후 PP                    |
| ------- | -------------------------- |
| 260pp   | **260pp** (처리 전 PP의 100%)  |
| 247pp   | **238pp** (처리 전 PP의 96.5%) |
| 246pp   | **229pp** (처리 전 PP의 93.1%) |
| 244pp   | **219pp** (처리 전 PP의 89.9%) |

3. To get a better rank, there are quite a few tools you can use to find ranked songs that fit your skill level. First, it’s always good to go see your own [ScoreSaber](https://scoresaber.com/global) profile to see songs that you haven’t played in a while or that you could improve on and to know what your top scores look like. The [ScoreSaberEnhanced](https://github.com/Splamy/ScoreSaberEnhanced#readme) or [ScoreSaber Country Leaderboard](https://github.com/motzel/ScoreSaberCountryLeaderboard#readme) browser extension can extend the functionality of your profile. [BaliBilo's ScoreSaber site](https://scoresaber.balibalo.xyz/peepee) and [Beat Savior](https://www.beatsavior.io/) are external sites that can help you find maps to improve on and keep track of your performance.

You can find more information in the [Ranking & Scoring Guide](./ranking-guide.md).

*이 단락은 Beat Saber Canadian discord의 Tek의 글을 각색하여 만들어졌습니다.*

::: tip 팁 곡들은 [ScoreSaber 디스코드](https://discord.gg/WpuDMwU)의 랭크 팀에 의해 랭크됩니다. 이 서버에서 무슨 변화가 일어나는지 확인할 수 있습니다! :::

## 컨트롤러 그립법
Cube Community는 오큘러스 터치 컨트롤러 (CV1) 와 바이브 몽둥이에 대응하는 자주 쓰이는 그립들에 대한 영상을 만들었습니다.

### HTC Vive 컨트롤러
<YouTube url='https://www.youtube.com/watch?v=G7x_wb7RrgU' />

![바이브 그립 가이드](~@images/grips-and-tricks/vive-grips-guide.jpg)

### Oculus Rift (CV1)
<YouTube url='https://www.youtube.com/watch?v=XFt90q69aEA' />

![오큘러스 그립 가이드](~@images/grips-and-tricks/oculus-grips-guide.jpg)

### Oculus Rift S와 Quest
아직 Rift S와 퀘스트 컨트롤러를 위한 영상은 제작되지 않았지만, 아래에서 몇몇 그립의 예시를 찾아 볼 수 있습니다. ![오큘러스 리프트 S/퀘스트 가이드](~@images/grips-and-tricks/touch2-grips.jpg)

### Valve Index 컨트롤러
아직 Index 컨트롤러를 위한 영상은 만들어지지 않았지만, CC 디스코드의 `#tips-and-grips` 채널에서 몇 가지 예를 찾아볼 수 있습니다! [CC 디스코드](https://discord.gg/dwe8mbC)

### Oculus Quest 2
아직 퀘스트 2 컨트롤러를 위한 영상은 제작되지 않았지만, 아래에서 몇몇 그립의 예시를 찾아 볼 수 있습니다! ![오큘러스 퀘스트 2](~@images/grips-and-tricks/touch3-grips.jpg)

[CC 디스코드](https://discord.gg/dwe8mbC)의 `#tips-and-grips` 채널에서 더 많은 정보를 얻을 수 있습니다. Please remember that everyone's playstyle and body is different; someone else's grip might not work exactly like you need it to. 자신에게 맞는 것을 경험하고 찾는 것을 두려워하지 마세요!

## Vive 컨트롤러 트래킹 개선
아마도, 당신의 몸은 한 쪽의 베이스 스테이션을 가리고 있을 것입니다. 아래의 절차를 통해 트래킹을 개선할 수 있습니다.

1. 플레이 공간의 구석으로 이동하세요.
2. 베이스 스테이션이 두 개의 컨트롤러를 전부 감지할 수 있게, 몸을 45도 돌려주세요.
3. 이를 보정하기 위해 비트 세이버 내부의 설정에서 방을 회전하여 게임 내에서 앞을 향하게 해줍니다.

![바이브 트래킹 개선](~@images/grips-and-tricks/vive-tracking-help.gif)

This can apply to Oculus sensors too.

## 터치 컨트롤러 배터리 연결 끊김
The force of your swings in Beat Saber can cause the spring in the touch controllers to compress and disconnect the battery for a brief moment. 이 현상은 세이버가 제자리에서 가만히 돌아가기만 하는 현상의 원인입니다. To alleviate this, ragesaq recommends adding extra springs inside the battery compartment to decrease the likelihood of battery disconnects happening, explained in this [Reddit post](https://www.reddit.com/r/oculus/comments/a2h7o4/psa_adding_an_additional_spring_to_the_battery/?st=JR9Q7OEZ&sh=a7a3d091)

## 또한 고려해야 할 것
![또한 고려해야 할 것](~@images/grips-and-tricks/allow-adequate-room-around-you-during-game-play-put-on-27689465.png)
