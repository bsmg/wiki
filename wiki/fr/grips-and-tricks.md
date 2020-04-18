---
sidebar: auto
---
# Grips et Astuces
_Une compilation de ressurces pour vous aider à taper les bloq_

## Méga-tutoriel pour monter dans le classement
Un incroyable rapport de TeknozFR pour vous aider à booster vos PP.
[https://bsaber.com/indepth-guide/](https://bsaber.com/indepth-guide/) (document en anglais)

## Système de points
Regardez cette vidéo, par la chaîne [Cube Community YT](https://www.youtube.com/channel/UCdG9zS8jVcQIKl7plwWXUkg), expliquant comment le système de points fonctionne (vidéo en anglais).

<YouTube url='https://www.youtube.com/watch?v=rVbXCGddspA' />

Par ailleurs, voici une image des développeurs précisant le système de [hitboxes](https://twitter.com/Split82/status/979365834324889600) (tweet en anglais).

![Bloq Hitbox](./mapping/images/hitbox-from-split.jpg)

## Classement
*Comment le classement général fonctionne ? Que sont les Performance Points ? Que sont ces nombres dans mes tableaux ? Pourquoi mon PP est si petit ?*

Vous pouvez voir votre rang général et vos PP sur [ScoreSaber](https://scoresaber.com/global) - ici vous pouvez chercher votre nom de joueur. Votre nom de joueur sur ScoreSaber est lié à votre nom d'utilisateur sur Steam / Oculus.

1. Des PP (PP = *Performance Points* ou points de performance) sont assignés pour chaque musique classée. Le nombre exact de PP obtenus est déterminé par la précision avec laquelle vous terminez un musique classée. La valeur d'une musique classée en PP est déterminée par un algorithme secret développé par Umbranox, notre Dieu Panda.
2. Pour éviter que les joueurs les plus aguerris amassent des sommes de points immenses sur les chansons les plus faciles qui valent peu de PP, une courbe est appliquée à vos sessions. Cette courbe est 0.965^(x-1) où x est la position du score dans votre liste de musiques.
Par exemple, si votre meilleur score est à 260 PP, vous gagnez 260 PP ajustés, ce qui équivaut à 100 % de vos PP bruts sur ce score. Si votre deuxième meilleur score est à 247 PP, vous gagnez 238 PP ajustés, ce qui équivaut à l'application de la courbe sur vos PP bruts. Voici une liste de mes 4 meilleurs scores où les PP bruts sont en italique et les PP ajustés sont en gras :

| *PP bruts* -> **PP ajustés** |
| --- | --- |
| *260pp* -> **260pp** (100% of raw PP) |
| *247pp* -> **238pp** (96.5% of raw PP) |
| *246pp* -> **229pp** (93.1% of raw PP) |
| *244pp* -> **219pp**  (89.9% of raw PP) |

3. Pour monter dans le classement, positionnez vos scores sur des nouvelles musiques qui valent plus ou la même quantité de PP que vos meilleurs scores. Quand vous n'avez plus de nouvelles musiques à haut PP à jouer, battez vos scores sur des musiques de vos premières pages. Voici une [feuille de calcul de DuoVR](https://docs.google.com/spreadsheets/d/1ufWgF2tWS0gD3pIr0_d37EkIcmCrUy1x6hyzPEZDPNc/edit#gid=1775412672) de toutes les musiques classées et leur valeur en PP. La liste est mise à jour toute les 24 heures. 

[Un autre site de DuoVR](https://duovr.github.io/BigPP/) vous permet d'insérer votre profil ScoreSaber, afin de vous indiquer quelles musiques vous devriez jouer pour augmenter vos PP.

*Cette section est adaptée du rapport de Tek du Discord Beat Saber canadien.*

::: tip
Les musiques sont classées/déclassées par une équipe de classement dans le [discord ScoreSaber](https://discord.gg/WpuDMwU) (serveur Discord anglophone).
Vous pouvez suivre dans ce serveur les modifications apportées !
:::

## Grips
Cube Community a réalisé une vidéo de démonstration de certains grips populaires pour les Oculus Touch (Oculus Rift CV1) et les Vive Wands (vidéos en anglais).

### HTC Vive Wands
<YouTube url='https://www.youtube.com/watch?v=G7x_wb7RrgU' />

![Vive Grips Guide](./images/grips-and-tricks/vive-grips-guide.png "Vive Grips Guide")

### Oculus Rift
<YouTube url='https://www.youtube.com/watch?v=XFt90q69aEA' />

![Oculus Grips Guide](./images/grips-and-tricks/oculus-grips-guide.png "Oculus Grips Guide")

### Oculus Rift S et Quest
Il n'existe pas encore de vidéo pour les contrôleurs du Rift S et du Quest, mais vous pouvez trouver des exemples supplémentaires à l'image ci-dessous dans leur canal `#tips-and-grips` ! [CC Discord](https://discord.gg/dwe8mbC) (serveur Discord anglophone)
![Oculus Rift S/Quest Guide](./images/grips-and-tricks/newOculusGrips.png "Oculus Rift S/Quest Guide")

### Contrôleurs du Valve Index
Il n'existe pas encore de vidéo pour les Index Controllers, mais vous trouverez des exemples dans leur canal textuel `#tips-and-grips` !
[Discord Cube Community](https://discord.gg/dwe8mbC) (serveur Discord anglophone)

## Améliorer le suivi des Vive Controllers
Votre corps peut obstruer la vision d'une *lighthouse* (lighthouse = l'un des deux capteurs fournis avec le HTC Vive) sur un de vos contrôleurs.
Voici quelques étapes qui peuvent aider à améliorer le suivi des contrôleurs.

1. Déplacez-vous dans un coin de votre espace de jeu.
2. Tournez votre corps de 45 degrés de sorte à ce que vos lighthouses puissent voir vos deux contrôleurs.
3. Faire pivoter la pièce virtuelle dans les paramètres de Beat Saber pour compenser, de sorte à ce que vous fassiez face au menu dans le jeu.

![Vive Tracking Help](./images/grips-and-tricks/vive-tracking-help.gif "Vive Tracking Help")

Cette astuce peut s'appliquer avec les capteurs de l'Oculus Rift (CV1) également.

## Déconnexion de la pile Oculus Touch
La force de vos gestes dans Beat Saber peut provoquer la compression du ressort des contrôleurs Oculus Touch et la déconnexion très brève de la pile. C'est ce qu'il se passe quand vous voyez un sabre perdre le suivi de sa position, mais pivote toujours sur place. Pour réduire la probabilité d'apparition du phénomène, ragesaq recommande d'ajouter des ressorts supplémentaires dans le compartiment de la pile pour diminuer le champ de déconnexion possible de la pile, expliqué dans ce [post Reddit](https://www.reddit.com/r/oculus/comments/a2h7o4/psa_adding_an_additional_spring_to_the_battery/?st=JR9Q7OEZ&sh=a7a3d091) (en anglais).

## Pour aller plus loin
![Also Consider](./images/grips-and-tricks/allow-adequate-room-around-you-during-game-play-put-on-27689465.png)
