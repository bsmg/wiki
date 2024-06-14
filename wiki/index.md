---
layout: home
titleTemplate: false
description: The Beat Saber Modding Group Wiki. Learn how to mod Beat Saber, create custom content, and get involved in the community!

hero:
  text: |
    Welcome to the
    Beat Saber Modding Group Wiki!
  tagline: Learn how to mod Beat Saber, create custom content, and get involved in the community!
  actions:
    - theme: brand
      text: Beginners Guide
      link: ./beginners-guide.md
    - theme: alt
      text: Edit on GitHub
      link: https://github.com/bsmg/wiki
---

<!-- markdownlint-disable-file MD033 -->
<!-- markdownlint-disable MD041 -->

<script setup lang="ts">
  import Home from './.vitepress/components/Home.vue'
  import HomeGroup from './.vitepress/components/HomeGroup.vue'
  import HomeItem from './.vitepress/components/HomeItem.vue'
  import HomeLinks from './.vitepress/components/HomeLinks.vue'
</script>

<Home>
  <HomeGroup title="Getting Started">
    <HomeItem name="PC Modding" href="./pc-modding.html" />
    <HomeItem name="Quest Modding" href="./quest-modding.html" />
    <HomeItem name="Common Problems" href="./support/" />
    <HomeItem name="Grips and Tricks" href="./grips-and-tricks.html" />
    <HomeItem name="Ranking and Scoring Guide" href="./ranking-guide.html" />
  </HomeGroup>

  <HomeGroup title="Creating Content">
    <HomeItem name="Modder's Guide" href="./modding/" />
    <HomeItem name="Mapper Resources" href="./mapping/" />
    <HomeItem name="3D Models Guide" href="./models/" />
  </HomeGroup>

  <HomeGroup title="Other Resources">
    <HomeItem name="About Us" href="./about/" />
    <HomeItem name="Health and Safety" href="./health-and-safety.html" />
    <HomeItem name="Frequently Asked Questions" href="./faq/" />
    <HomeItem name="Communities" href="./communities/" />
  </HomeGroup>
</Home>

<HomeLinks>

- [Join the Discord server!](https://discord.gg/beatsabermods)
- [Contact Us](https://bsmg.dev/contact) - Offer your skills, sponsor us, appeal a server mute/ban, report a user, etc.
- [BSMG Patreon](https://www.patreon.com/beatsabermods) - Support the BSMG Services!
- [BSMG Store](https://bsmgstore.com/) - Help support us and get cool merch!
- [BSMG Map Playlists](https://beatsaver.com/profile/4329735#playlists) - Contest and event maps in a convenient place.

---

- [BeatMods](https://beatmods.com) - Repository of PC mods that are reflected in installers like Mod Assistant or BSManager.
- [BeatSaver](https://beatsaver.com/) - Download custom songs here
- [BeastSaber](https://bsaber.com/) - Curation, articles, playlists, and more!
- [ModelSaber](https://modelsaber.com/) - Download PC custom sabers, avatars, bloqs, and platforms!

---

- [Qosmetics Discord](https://discord.gg/qosmetics) - Download Quest custom sabers, walls, and bloqs!
- [QuestBoard Hub](https://discord.gg/d6DyW9v) - The Discord for all things about Quest BeatSaber!
- [BeatLeader](https://www.beatleader.xyz/) - Custom map leaderboards, replays, and statistics
- [ScoreSaber](https://scoresaber.com/) - Custom map leaderboards
- [Steam Store Page](https://store.steampowered.com/app/620980/Beat_Saber/)
- [Oculus Store Page](https://www.oculus.com/experiences/rift/1304877726278670/)

---

- [Contribution Page](https://docs.google.com/document/d/1r6IP6l3uo8rc__GxfLkpaToxheeXotdYaKEj3oWB2js/edit?usp=sharing) -
  A how-to guide on contributing to the wiki.
- [Apply to Help Translate the Wiki!](https://forms.gle/e3BqA3poMjESARe76) - Localize the wiki to your language!

</HomeLinks>
