---
layout: home
titleTemplate: false
description: 这是Beat Saber Modding Group Wiki. 学习如何为节奏光剑添加模组，创建自制内容，并于社区取得联系！
markdownStyles: false

hero:
  text: |
    欢迎来到
    Beat Saber Modding Group Wiki!
  tagline: 学习如何为节奏光剑添加模组，创建自制内容，并与社区取得联系！
  actions:
    - theme: brand
      text: 新手指引
      link: ./beginners-guide.md
    - theme: alt
      text: 在GitHub上编辑
      link: https://github.com/bsmg/wiki
---

<!-- markdownlint-disable-file MD033 -->
<!-- markdownlint-disable MD041 -->

<script setup lang="ts">
  import Home from '../.vitepress/components/Home.vue'
  import HomeGroup from '../.vitepress/components/HomeGroup.vue'
  import HomeItem from '../.vitepress/components/HomeItem.vue'
  import HomeLinks from '../.vitepress/components/HomeLinks.vue'
  import LocalizedOutdateHint from '../.vitepress/components/LocalizedOutdateHint.vue'
</script>

<Home>
  <HomeGroup title="新手指南">
    <HomeItem name="PC模组（英文）" href="../pc-modding.html" />
    <HomeItem name="Quest模组" href="./quest-modding.html" />
    <HomeItem name="常见问题（英文）" href="../support/" />
    <HomeItem name="握法与技巧" href="../grips-and-tricks.html" />
    <HomeItem name="排名与打分指南（英文）" href="../ranking-guide.html" />
  </HomeGroup>

  <HomeGroup title="内容创作">
    <HomeItem name="模组开发者指南（英文）" href="../modding/" />
    <HomeItem name="制谱资源（英文）" href="../mapping/" />
    <HomeItem name="3D模型指南（英文）" href="../models/" />
  </HomeGroup>

  <HomeGroup title="其它资源">
    <HomeItem name="关于我们（英文）" href="../about/" />
    <HomeItem name="健康和安全提示（英文）" href="../health-and-safety.html" />
    <HomeItem name="常见问题（英文FAQ）" href="../faq/" />
    <HomeItem name="全球社区（英文）" href="../communities/" />
  </HomeGroup>

  <HomeGroup title="中文译注">
本页面翻译自英文社区，可能存在过时信息，届时页面会自动给出提示。

另请务必保持社交礼仪，勿在英文社区因礼仪问题而引起困扰。
</HomeGroup>
</Home>

<HomeLinks>

- [加入Discord服务器！](https://discord.gg/beatsabermods)
- [联系我们](../contact-us.md) - 贡献您的技能，资助我们，对封禁提出申诉，以及举报用户等。
- [BSMG Patreon](https://www.patreon.com/beatsabermods) - 支持BSMG服务！
- [BSMG商店](https://bsmgstore.com/) - 支援我们，同时还能得到超酷的商品！
- [BSMG Map Playlists](https://beatsaver.com/profile/4329735#playlists) - Contest and event maps in a convenient place.

---

- [BeatMods](https://beatmods.com) - 用于模组安装工具（比如Mod Assistant或者BSManager）的PC模组仓库。
- [BeatSaver](https://beatsaver.com/) - 在这里下载自制歌曲
- [BeastSaber](https://bsaber.com/) - Curation, articles, playlists, and more!
- [ModelSaber](https://modelsaber.com/) - 下载用于PC的自制光剑、人物、方块以及平台！

---

- [Qosmetics Discord](https://discord.gg/qosmetics) - 下载用于Quest的自制光剑、墙壁以及方块！
- [QuestBoard Hub](https://discord.gg/d6DyW9v) - Discord，讨论有关Quest BeatSaber的一切内容！
- [BeatLeader](https://www.beatleader.xyz/) - 自制谱面的排行榜、录像、数据统计
- [ScoreSaber](https://scoresaber.com/) - 自制谱面的排行榜
- [Steam商店页面](https://store.steampowered.com/app/620980/Beat_Saber/)
- [Oculus商店页面](https://www.oculus.com/experiences/rift/1304877726278670/)

---

- [贡献页面](https://docs.google.com/document/d/1r6IP6l3uo8rc__GxfLkpaToxheeXotdYaKEj3oWB2js/edit?usp=sharing) -
  一个关于如何向wiki做出贡献的指南。
- [申请翻译wiki！](https://forms.gle/e3BqA3poMjESARe76) - 将wiki翻译到您的语言！

<LocalizedOutdateHint />

</HomeLinks>
