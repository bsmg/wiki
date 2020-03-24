---
sidebar: auto
---
# Modding sur PC
# Préface

::: danger DISCLAIMER
En choisissant d'utiliser les mods, vous comprenez et acceptez les faits suivants :
- Vous pouvez rencontrer des problèmes qui n'existent pas dans le jeu de base. 99.9% des bugs, crashes et lags sont dus aux mods.
- Les mods sont soumis à rupture (arrêt de fonctionnement) par les mises à jour, et c'est normal. Soyez patient et respectueux quand cela arrive : les moddeurs sont des bénévoles et ont une vie.
- Beat Games ne tente pas de rompre volontairement les mods. Ils souhaitent améliorer la base du jeu et parfois cela casse les mods, mais ce n'est pas dans leur objectif de tuer les mods.

N'attaques pas les développeurs pour des problèmes relatifs aux mods, et inversement. Les moddeurs et les développeurs sont deux groupes séparés. *Just don't be a jerk ok*.
:::

Beat Saber supporte nativement les musiques personnalisées, donc si tout ce que vous recherchez vous n'avez pas besoin de mods! C'est tout de même une bonne idée d'installer `SongCore`, puisque le mod développe cette foctionnalité de base du jeu pour améliorer les temps de chargement et permettre à d'autres mods de fonctionner, tels que le téléchargeur en jeu, les tableaux de score personnalisés, les playlists, etc.

::: warning
Ce guide est pour le modding sur un PC Windows.
Si vous êtes sur Quest, voyez plutôt la [page sur le modding sur Quest](/fr/quest-modding.md).
Si vous êtes sur Linux, dirigez vous vers la [page pour Linux](/fr/modding/linux.md) ou [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md).
:::

Si vous rencontrez des problèmes à un point donné, veuillez vous rendre sur la [page de support](./support.md#1-4-no-mods-in-game) et voyez si vous pouvez identifier ce qui a pu mal se dérouler avant de demander sur le serveur Discord. Dans la majorité des cas, la réponse que vous cherchez est sur cette page !

## Installateurs
### Mod Assistant
> **C'EST L'INSTALLATEUR DE MOD ACTUELLEMENT RECOMMANDÉ.**

__**Lancez le jeu au moins une fois**__ avant d'essayer de modder votre jeu ! Cela s'applique après chaque réinstallation du jeu également, et après chaque mise à jour.

Un installateur de mod Beat Saber simple, similaire à l'ancien Mod Manager, mais avec des fonctionnalités additionnelles telles que la suppression de mods et la vérification de version ! Téléchargez-le sur [le Github d'Assistant](https://github.com/Assistant/ModAssistant/releases/latest).

![ModAssistant](./images/beginners-guide/modassistant.png)

## Comment avoir plus de musiques
### Téléchargeur en jeu
L'extension `BeatSaver Downloader` vous permet de télécharger des maps en jeu en utilisant le bouton `MORE SONGS` dans le menu `MODS`. Cela télécharge les maps directement depuis [BeatSaver](https://beatsaver.com).

### BeatSaver
[BeatSaver](https://beatsaver.com) est le dépôt central qui détient presque toutes les musiques personnalisées pour Beat Saber.
Pour installer les musiques personnalisées depuis le site, décompressez-les dans un dossier et placez-les dans `Beat Saber/Beat Saber_Data/CustomLevels`. Vous pouvez également utiliser l'extension `BeatSaver Downloader` mentionnée ci-dessus.

Il y a des ressources supplémentaires pour vous aider à trouver les musiques dans la [FAQ](./faq.md#more-songs).

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) est un site web qui a pour but de mettre en lumière les maps fantastiques à jouer pour les trouver facilement. Pour ce faire, les milliers de musiques présentes sur BeatSaver sont catégorisées, afin que vous puissiez filtrer par genre de musique et autres étiquettes appropriées. Le site dispose également d'une fonctionnalité communautaire où les joueurs peuvent laisser leurs critiques et impressions sur les musiques. L'une des fonctionnalités les plus utilisées est le "*Curator Recommended*" où une équipe joue la plupart des musiques sorties chaque jour et recommande celles qui sortent du lot, permettant [de les télécharger automatiquement en jeu](https://bsaber.com/beatsync/).

### Application de gestion des musiques
* [BeatDrop](https://bsaber.com/beatdrop/) n'est pas qu'un installateur de mods, l'outil permet aussi de télécharger des musiques et de créer des playlists.
* [BeatList](https://github.com/Alaanor/beatlist) est une application à pour gérer des playlists et maps, par Alaanor.

## Comment désinstaller des mods
**Actuellement, le seul moyen de désinstaller un mod est de supprimer le `.dll` associé dans le dossier `Plugins`.**
| Plateforme | Chemin des extensions / mods |
| --- | --- |
| Steam | `\steamapps\common\Beat Saber\Plugins` |
| Oculus | `\hyperbolic-magnetism-beat-saber\Plugins` | 

## Installation manuelle
N'ayez recours à cette solution que si vous savez précisément ce que vous faites ! Un installateur de mods est le moyen recommandé pour installer des mods. Lisez la section [ci-dessus](#installers).

**Lancez le jeu au moins une fois** avant d'essayer de modder votre jeu ! Cela s'applique après chaque réinstallation du jeu également, et après chaque mise à jour.

1. Télécharger [BSIPA](https://github.com/beat-saber-modding-group/BeatSaber-IPA-Reloaded/releases).
2. Se rendre dans [le dossier d'installation](/fr/faq/install-folder.md) et y extraire le contenu de BSIPA.
![Répertoire propre](./images/beginners-guide/directory-clean.png "Répertoire propre")
![Répertoire avec IPA](./images/beginners-guide/directory-ipa.png "Répertoire avec IPA")
3. Double-cliquer sur `IPA.exe` pour patcher le jeu. Chaque mod présent dans le dossier `Plugins` sera désormais chargé au lancement du jeu. En cas d'erreur, s'assurer d'avoir bien suivi l'étape 2.
![Répertoire patché](./images/beginners-guide/directory-patched.png "Répertoire patché")
4. Télécharger les mods souhaités, soit depuis Github, soit depuis le canal Discord `#finished-mods`, soit d'autres sources other sources. **S'assurer de télécharger toutes dépendances requises par les mods.**
![Répertoire Plugins](./images/beginners-guide/directory-plugins.png "Répertoire Plugins")
5. Certains mods ont des instructions d'installation précises, certains non. Généralement, il suffit de glisser-déposer le contenu du zip dans le dossier d'installation du jeu, et les fichiers doivent aller dans les dossiers correspondant.

## Où se rendre d'ici
* [Grips et Astuces](./grips-and-tricks.md)
* [Créer ses propres beatmaps](/fr/mapping/)
* [Sabres personnalisés](/fr/models/custom-sabers.md)
* [Avatars personnalisés](/fr/models/custom-avatars.md)
* [Plateformes personnalisées](/fr/models/custom-platforms.md)
* [Mise en place du Multijoueur](https://bs.assistant.moe/Multiplayer/)
* [Créer ses propres mods](/fr/modding/)

## Des questions ?
Visiter la [FAQ](/fr/faq/) ou poser-les dans le canal `#support` du [Discord BSMG](https://discord.gg/beatsabermods) !
