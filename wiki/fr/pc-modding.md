---
sidebar: auto
---

# Modding sur PC
# Préface

:::danger AVIS DE NON-RESPONSABILITÉ En choisissant d'utiliser des mods, vous comprenez et acceptez les faits suivants :
- Vous pouvez rencontrer des problèmes qui n'existent pas dans le jeu de base. 99.9% des bugs, crashes et lags sont dus aux mods.
- Les mods sont soumis à rupture (arrêt de fonctionnement) par les mises à jour, et c'est normal. Soyez patient et respectueux quand cela arrive : les moddeurs sont des bénévoles et ont une vie.
- Beat Games ne tente pas de rompre volontairement les mods. Ils souhaitent améliorer la base du jeu et parfois cela casse les mods, mais ce n'est pas dans leur objectif de tuer les mods.

N'attaquez pas les développeurs pour des problèmes relatifs aux mods, et inversement - les moddeurs et les développeurs sont deux groupes distincts. Ne sois pas idiot ok. :::

Beat Saber supporte nativement les chansons personnalisées, donc si tout ce que vous recherchez vous n'avez pas besoin de mods! C'est tout de même une bonne idée d'installer `SongCore`, puisque le mod développe cette foctionnalité de base du jeu pour améliorer les temps de chargement et permettre à d'autres mods de fonctionner, tels que le téléchargeur en jeu, les tableaux de score personnalisés, les playlists, etc.

::: warning Ce guide est pour le modding sur un PC Windows. Si vous êtes sur Quest, voyez plutôt la [page sur le modding sur Quest](/fr/quest-modding.md). Si vous êtes sur Linux, dirigez vous vers la [page pour Linux](/fr/modding/linux.md) ou [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md).

Si vous rencontrez des problèmes à un point donné, veuillez vous rendre sur la [page de support](./support) et voyez si vous pouvez identifier ce qui a pu mal se dérouler avant de demander sur le serveur Discord. Dans la majorité des cas, la réponse que vous cherchez est sur cette page !

:::warning J'ai regardé cette vidéo par Elite Eric, mais je suis coincé / ça n'a pas fonctionné. Comment ça se fait ? Nous, chez BSMG, recommandons **fortement** d'éviter les tutoriels d'Elite Eric. Après avoir examiné une bonne partie de son contenu, il y a une grande quantité d'informations incomplètes, erronées ou complètement fausses. Nos tentatives de le contacter pour corriger ces erreurs n'ont malheureusement pas reçu de réponse et d'autres tutoriels (incorrects également) sont apparus.

À la place, vous devriez suivre les guides écrits ici sur le wiki ou chercher de l'aide dans le [Discord BSMG](https://discord.gg/beatsabermods) (anglophone). :::

## Installateurs
### Mod Assistant
> **C'EST L'INSTALLATEUR DE MOD ACTUELLEMENT RECOMMANDÉ.**

__**Lancez le jeu au moins une fois**** avant d'essayer de modder votre jeu ! Cela s'applique après chaque réinstallation du jeu également, et après chaque mise à jour.

Un installateur de mod Beat Saber simple, similaire à l'ancien Mod Manager, mais avec des fonctionnalités additionnelles telles que la suppression de mods et la vérification de version ! Téléchargez-le sur [le GitHub d'Assistant](https://github.com/Assistant/ModAssistant/releases/latest).

![ModAssistant](~@images/beginners-guide/modassistant.png)

## Comment avoir plus de chansons
### Téléchargeur en jeu
L'extension `BeatSaver Downloader` vous permet de télécharger des maps en jeu en utilisant le bouton `MORE SONGS` dans le menu `MODS`. Cela télécharge les maps directement depuis [BeatSaver](https://beatsaver.com).

### BeatSaver
[BeatSaver](https://beatsaver.com) est le dépôt principal des custom songs réalisées par la communauté. Beaucoup d'autres outils et sites améliorent le téléchargement des custom songs, mais ce site est la source de confiance. Pour installer les chansons personnalisées depuis le site, décompressez-les dans un dossier et placez-le dans `Beat Saber/Beat Saber_Data/CustomLevels`.  Vous pouvez également utiliser le mod BeatSaver Downloader mentionné ci-dessus, BeatList ou la fonctionnalité OneClick de ModAssistant.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) est un site web qui a pour but de mettre en lumière les maps fantastiques à jouer pour les trouver facilement. Pour ce faire, les milliers de chansons présentes sur BeatSaver sont catégorisées, afin que vous puissiez filtrer par genre de musique et autres étiquettes appropriées. Le site dispose également d'une fonctionnalité communautaire où les joueurs peuvent laisser leurs critiques et impressions sur les chansons. L'une des fonctionnalités les plus utilisées est le "*Curator Recommended*" où une équipe joue la plupart des chansons sorties chaque jour et recommande celles qui sortent du lot, permettant [de les télécharger automatiquement en jeu](https://bsaber.com/beatsync/).

### Application de gestion des chansons
* [BeatList](https://github.com/Alaanor/beatlist) est une application à pour gérer des playlists et maps, par Alaanor.

### Playlists
Placez le fichier de playlist dans `Beat Saber/Playlists`, puis utilisez [BeatList](https://github.com/Alaanor/beatlist) ou [Mod Assistant](https://github.com/Assistant/ModAssistant) pour télécharger les maps. (note : d'anciens mods permettaient de télécharger le contenu des playlists en jeu, mais ce n'est actuellement plus possible).

## Dossier d'installation
_Où est installé Beat Saber ?_

### Emplacement par défaut
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Autre emplacement
**Si vous avez déplacé votre dossier d'installation sur un autre disque dur, ça pourrait être l'emplacement suivant.** Remplacez la lettre du disque `F` avec celle du disque sur lequel est installé votre jeu.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Comment désinstaller les mods
Supprimez le dll depuis le dossier `Plugins`, ou bien cliquez sur le bouton `Uninstall` dans Mod Assistant.

## Installation manuelle
Un installateur de mods est le moyen recommandé pour installer des mods. Lisez la section [ci-dessus](#installateurs). Si vous avez patché le jeu et avez juste besoin d'installer les extensions qui ne sont pas disponibles dans l'installateur, passez à l'étape 4.

**Lancez le jeu au moins une fois** avant d'essayer de modder votre jeu ! Cela s'applique après chaque réinstallation du jeu également, et après chaque mise à jour.
### Installer BSIPA
1. Télécharger [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Se rendre dans [le dossier d'installation](#dossier-d-installation) et y extraire le contenu de BSIPA. ![Répertoire propre](~@images/beginners-guide/directory-clean.png "Répertoire propre") ![Répertoire avec IPA](~@images/beginners-guide/directory-ipa.png "Répertoire avec IPA")
3. Double-cliquer sur `IPA.exe` pour patcher le jeu. Chaque mod présent dans le dossier `Plugins` sera désormais chargé au lancement du jeu. En cas d'erreur, s'assurer d'avoir bien suivi l'étape 2. ![Répertoire patché](~@images/beginners-guide/directory-patched.png "Répertoire patché")

### Installer les mods
4. Télécharger les mods souhaités, soit depuis GitHub, soit depuis le canal Discord `#pc-mods`, soit d'autres sources. **S'assurer de télécharger toutes dépendances requises par les mods.** ![Répertoire Plugins](~@images/beginners-guide/directory-plugins.png "Répertoire Plugins")
5. Certains mods ont des instructions d'installation précises, certains non. Généralement, il suffit de glisser-déposer le contenu du zip dans le dossier d'installation du jeu, et les fichiers doivent aller dans les dossiers correspondant.


## Où se rendre d'ici
* [Prises et Astuces](./grips-and-tricks.md)
* [Créer ses propres beatmaps](/mapping/)
* [Sabres personnalisés](/models/custom-sabers.md)
* [Avatars personnalisés](/models/custom-avatars.md)
* [Plateformes personnalisées](/models/custom-platforms.md)
* [Mise en place du Multijoueur](https://bs.assistant.moe/Multiplayer/)
* [Créer ses propres mods](/modding/)

## Des questions ?
Visitez les canaux d'assistance sur le [Discord BSMG](https://discord.gg/beatsabermods) !
