---
layout: home
titleTemplate: false
description: Bienvenue sur le wiki du Beat Saber Modding Group!

hero:
  text: |
    Bienvenue sur le wiki
    du Beat Saber Modding Group!
  tagline: Bienvenue sur le wiki du Beat Saber Modding Group!
  actions:
    - theme: brand
      text: Guide du Débutant
      link: ./beginners-guide.md
    - theme: alt
      text: Edit on GitHub
      link: https://github.com/bsmg/wiki
---

<!-- markdownlint-disable-file MD033 -->
<!-- markdownlint-disable MD041 -->

<script setup lang="ts">
  import Home from '../.vitepress/components/Home.vue'
  import HomeGroup from '../.vitepress/components/HomeGroup.vue'
  import HomeItem from '../.vitepress/components/HomeItem.vue'
  import HomeLinks from '../.vitepress/components/HomeLinks.vue'
</script>

<Home>
  <HomeGroup title="Prise en main">
    <HomeItem name="Utiliser les Mods sur PC" href="./pc-modding.html" />
    <HomeItem name="Utiliser les Mods sur Quest" href="./quest-modding.html" />
    <HomeItem name="Problèmes fréquents" href="./support/" />
    <HomeItem name="Grips et Astuces" href="./grips-and-tricks.html" />
    <HomeItem name="Guide du classement et du score" href="./ranking-guide.html" />
  </HomeGroup>

  <HomeGroup title="Créer du contenu">
    <HomeItem name="Guide du Modder" href="./modding/" />
    <HomeItem name="Ressources pour créer des maps" href="./mapping/" />
    <HomeItem name="Guide des Modèles 3D" href="./models/" />
  </HomeGroup>

  <HomeGroup title="Autres ressources">
    <HomeItem name="À propos de nous" href="./about/" />
    <HomeItem name="Santé et Sécurité" href="./health-and-safety.html" />
    <HomeItem name="Foire Aux Questions" href="./faq/" />
    <HomeItem name="Communautés" href="./communities/" />
  </HomeGroup>
</Home>

<HomeLinks>

- [Rejoignez le serveur Discord ! (anglophone)](https://discord.gg/beatsabermods)
- [Nous contacter](https://bsmg.dev/contact) - Offrez vos compétences, sponsorisez-nous, faites appel d'une décision administrative (ban, mise au silence), etc.
- [Patreon BSMG](https://www.patreon.com/beatsabermods) - Soutenez les services BSMG !
- [BSMG Store](https://bsmgstore.com/)
- [BSMG Map Playlists](https://beatsaver.com/profile/4329735#playlists)

---

- [BeatMods](https://beatmods.com) - Dépôt des mods sur PC que l'on retrouve dans les installateurs comme Mod Assistant ou BSManager.
- [BeatSaver](https://beatsaver.com/) - Téléchargez les chansons personnalisées ici
- [BeastSaber](https://bsaber.com/) - Critiques, articles, playlists, et bien plus !
- [ModelSaber](https://modelsaber.com/) - Téléchargez des sabres personnalisés, des avatars, des bloqs et des plateformes !

---

- [Discord Qosmetics](https://discord.gg/qosmetics) - Téléchargez des sabres, murs et bloqs pour Quest !
- [BeatLeader](https://www.beatleader.xyz/) - Classements pour les chansons personnalisées
- [ScoreSaber](https://scoresaber.com/) - Classements pour les chansons personnalisées
- [Page du magasin Steam](https://store.steampowered.com/app/620980/Beat_Saber/)
- [Page du magasin Oculus](https://www.oculus.com/experiences/rift/1304877726278670/)

---

- [Postulez pour aider à traduire le wiki !](https://forms.gle/e3BqA3poMjESARe76) - Traduisez le wiki dans votre langue !

</HomeLinks>
