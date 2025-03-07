---
prev: false
next: false
---

# Modding sur PC

## Préface

:::danger AVIS DE NON-RESPONSABILITÉ
En choisissant d'utiliser des mods, vous comprenez et acceptez que :

- Vous pouvez rencontrer des problèmes qui n'existent pas dans le jeu de base. 99.9% des bugs, plantages et ralentissements sont dus aux mods.
- Les mods sont susceptibles de ne plus fonctionner à cause des mises à jour et c'est normal - soyez patient et respectueux lorsque cela se produit, parce que les moddeurs sont bénévoles et ont une vie.
- Beat Games ne cherche pas volontairement à casser les mods. Ils souhaitent améliorer la base du jeu et parfois cela casse les mods, mais ce n'est pas dans leur objectif de tuer les mods.

N'attaquez pas les développeurs pour des problèmes relatifs aux mods, et inversement - les moddeurs et les développeurs sont deux groupes distincts. Ne sois pas idiot, d'accord ?
:::

:::warning FAITES ATTENTION EN INSTALLANT DES MODS
Beat Saber ne vous demandera **JAMAIS** de l'exécuter en tant qu'administrateur.

Si vous avez installé un mod et vous voyez la fenêtre de contrôle de compte d'utilisateur, **N'ACCEPTEZ PAS** et signalez ce mod. Ce que vous avez installé est un mod malveillant !

Si vous n'êtes pas sûr qu'un mod que vous avez installé est malveillant ou non, **_veuillez demander à quelqu'un dans notre Discord_** (en anglais).
:::

Beat Saber supporte nativement les chansons personnalisées, donc si c'est tout ce que vous recherchez vous n'avez pas besoin de mods ! C'est tout de même une bonne idée d'installer `SongCore`, puisque le mod développe cette fonctionnalité de base du jeu pour améliorer les temps de chargement et permettre à d'autres mods de fonctionner, tels que le téléchargeur en jeu, les classements personnalisés, les playlists, etc.

::: warning ATTENTION
Ce guide est pour le modding sur un PC Windows.  
Si vous êtes sur Quest, voyez plutôt la [guide de modding Quest](/fr/quest-modding.md) Si vous êtes sur Linux, dirigez vous vers la [guide pour Linux](/fr/modding/linux.md) ou [Beataroni](https://github.com/geefr/beatsaber-linux-goodies/#readme).
:::

Si à tout moment vous rencontrez des problèmes, dirigez-vous vers la [page d'aide](../support/) pour essayer d'identifier ce qui ne va pas avant de demander dans le serveur Discord. Avec un peu de chance, la réponse que vous cherchez est déjà sur cette page !

:::warning J'ai suivi un tutoriel vidéo sur YouTube, mais je suis coincé/ça n'a pas marché. Pourquoi ?
Au BSMG, nous recommandons **fortement** d'éviter les tutoriels vidéos pour modder votre jeu. Nous remarquons bien souvent que ces tutoriels sont obsolètes, ou contiennent des informations incomplètes, erronées ou complètement fausses.

Vous devriez à la place suivre les guides écrits ici sur le wiki ou demander de l'aide dans le [serveur Discord du BSMG](https://discord.gg/beatsabermods).
:::

## Installateurs

### Mod Assistant

> **CECI EST L'INSTALLATEUR DE MOD ACTUELLEMENT RECOMMANDÉ.**

\_\_**Lancez le jeu au moins une fois\*\*** avant d'essayer de modder votre jeu ! Cela s'applique aussi après chaque réinstallation du jeu.

Un installateur de mod Beat Saber simple, similaire à l'ancien Mod Manager, mais avec des fonctionnalités additionnelles telles que la suppression de mods et la vérification de version ! Téléchargez-le sur [le GitHub d'BSMG](https://github.com/bsmg/ModAssistant/releases/latest).

![Mod Assistant](/.assets/images/beginners-guide/modassistant.png)

### BSManager

\***\*Assurez-vous de posséder le jeu sur Steam ou Oculus (PCVR)\*\*** avant d'essayer de télécharger Beat Saber !

Un outil tout-en-un qui vous permet de gérer facilement les versions, les cartes, les mods et bien plus encore de Beat Saber. Obtenez-le sur [GitHub de Zagrios](https://github.com/Zagrios/bs-manager/releases/latest)

![BSManager](/.assets/images/beginners-guide/bsmanager.png)


## Comment avoir plus de chansons

::: tip ASTUCE
La plupart des maps dans les catégories "Top All", "Rating", "Downloads" et "Plays" ont été créées bien avant la mise en place des bonnes pratiques de mapping. Essayez de télécharger des chansons publiées entre fin 2019 et maintenant pour obtenir la meilleure expérience possible.
:::

:::warning ATTENTION
C'est une bonne idée de sauvegarder occasionnellement votre dossier `CustomLevels` comme il y a une faible chance qu'une mise à jour du jeu de réinitialise.

Ce dossier est localisé dans les fichiers du jeu : `Beat Saber/Beat Saber_Data/CustomLevels`
:::

### Téléchargeur en jeu

Le mod `BeatSaver Downloader` vous permet de télécharger des maps directement depuis le jeu en utilisant le bouton `MORE SONGS` dans le menu `Mods`. Ce mod télécharge les maps directement depuis [BeatSaver](https://beatsaver.com).

### BeatSaver

[BeatSaver](https://beatsaver.com) est le dépôt principal des chansons personnalisées créées par la communauté. Bien d'autres outils et sites rendent le téléchargement des chansons personnalisées plus riche, mais c'est d'ici qu'elles sont récupérées. Pour installer les chansons personnalisées depuis le site, décompressez-les dans un dossier et placez-le dans `Beat Saber/Beat Saber_Data/CustomLevels`. Vous pouvez également utiliser le mod BeatSaver Downloader mentionné ci-dessus, la fonctionnalité d'installation OneClick™ de Mod Assistant ou de BSManager, ou dans l'onglet "maps" de BSManager.

### Beast Saber

[Beast Saber](https://www.bsaber.com) (bsaber.com) est un site web qui a pour but de mettre en lumière les maps fantastiques à jouer pour les trouver facilement. Pour ce faire, les milliers de chansons présentes sur BeatSaver sont catégorisées, afin que vous puissiez filtrer par genre de musique et d'autres étiquettes appropriées. Le site dispose également d'une fonctionnalité communautaire permettant aux joueurs de laisser leurs critiques et impressions sur les chansons. Une des catégories les plus utilisées est la catégorie "_Curator Recommended_" où une équipe joue la plupart des chansons sorties chaque jour et recommande celles qui sortent du lot, permettant [de les télécharger automatiquement en jeu](https://bsaber.com/beatsync/).

### Applications de gestion des chansons

Il n'y a pas d'application de gestion des chansons à l'heure actuelle.

### Playlists

Vous devez installer le mod [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest).

Vous pourrez ensuite :

- Utiliser l'outil `Installer une playlist` dans l'onglet Options de Mod Assistant.
- Placer le fichier de playlist dans `Beat Saber/Playlists` et sélectionnez la en jeu, puis appuyez sur le bouton _Download_.

Vous devriez maintenant voir la playlist à côté de l'album des niveaux personnalisés (Custom Levels) en jeu. Le mod prend également en charge la gestion des playlists depuis le jeu.

## Dossier d'installation

_Où est donc installé Beat Saber ?_

### Emplacement par défaut

|        |                                                                              |
| ------ | ---------------------------------------------------------------------------- |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Autre emplacement

**Si vous avez déplacé votre dossier d'installation sur un disque différent, son emplacement pourrait bien être l'un des suivants.** Remplacez la lettre de lecteur `F` par celle correspondant à celle du disque sur lequel vous avez installé votre jeu.
| | |
| ------ | --------------------------------------------------------------------- |
| Steam | `F:\SteamLibrary\steamapps\common\Beat Saber\` |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Installation manuelle

Il est recommandé d'utiliser un installateur de mods pour installer les mods. Lisez la section [ci-dessus](#installateurs). Si vous avez patché le jeu et avez juste besoin d'installer les mods qui ne sont pas disponibles dans l'installateur, passez à l'étape 4.

:::warning FAITES ATTENTION EN INSTALLANT DES MODS
Modder votre jeu avec des mods non vérifiés tels que ceux venant du salon `#pc-mods` comporte des risques, tel que la possibilité qu'un mod se trouve être un logiciel malveillant.

Beat Saber ne vous demandera **JAMAIS** de l'exécuter en tant qu'administrateur.

Si vous avez installé un mod et vous voyez la fenêtre de contrôle de compte d'utilisateur, **N'ACCEPTEZ PAS** et signalez ce mod. Si vous n'êtes pas sûr qu'un mod que vous avez installé est malveillant ou non, **_veuillez demander à quelqu'un dans notre Discord_** (en anglais).
:::

**Lancez le jeu au moins une fois** avant d'essayer de modder votre jeu ! Cela s'applique aussi après chaque réinstallation du jeu.

### Installer BSIPA

1. Téléchargez [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Rendez vous dans [le dossier d'installation](#dossier-d-installation) et extrayez-y le contenu de BSIPA. ![Répertoire propre](/.assets/images/beginners-guide/directory-clean.png 'Répertoire propre') ![Répertoire avec IPA](/.assets/images/beginners-guide/directory-ipa.png 'Répertoire avec IPA')
3. Double-cliquez sur `IPA.exe` pour patcher le jeu. Chaque mod présent dans le dossier `Plugins` sera désormais chargé au lancement du jeu. En cas d'erreur, assurez-vous d'avoir bien suivi l'étape 2. ![Répertoire patché](/.assets/images/beginners-guide/directory-patched.png 'Répertoire patché')

### Installer les mods

4. Téléchargez le(s) mod(s) que vous souhaitez installer, que ce soit depuis GitHub, le salon `#pc-mods` du [Discord BSMG](https://discord.com/invite/beatsabermods), [BeatMods](https://beatmods.com/#/mods) ou d'autres sources. **Assurez-vous de télécharger toutes les dépendances requises pour chaque mod.** ![Répertoire Plugins](/.assets/images/beginners-guide/directory-plugins.png 'Répertoire Plugins')
5. Certains mods ont des instructions d'installation précises, certains non. Généralement, il suffit de glisser-déposer le contenu du zip dans le dossier d'installation du jeu, et les fichiers doivent aller dans les dossiers correspondants.

## Comment désinstaller les mods

Supprimez le fichier DLL du dossier `Plugins`, ou bien cliquez sur le bouton `Uninstall` dans Mod Assistant ou BSManager.

## Où se rendre d'ici

- [Prises et Astuces](./grips-and-tricks.md)
- [Créer ses propres niveaux](/fr/mapping/)
- [Sabres personnalisés](/fr/models/custom-sabers.md)
- [Avatars personnalisés](/fr/models/custom-avatars.md)
- [Plateformes personnalisées](/fr/models/custom-platforms.md)
- [Jouer des chansons personnalisées en multijoueur](https://discord.com/invite/gezGrFG4tz)
- [Créer ses propres mods](/fr/modding/)

## Des questions ?

Visitez les salons d'assistance sur le [Discord BSMG](https://discord.gg/beatsabermods) !
