---
sidebar: auto
---

# Modding sur PC

## Préface

:::danger AVIS DE NON-RESPONSABILITÉ En choisissant d'utiliser des mods, vous comprenez et acceptez que :

* Vous pouvez rencontrer des problèmes qui n'existent pas dans le jeu de base. 99.9% des bugs, plantages et ralentissements sont dus aux mods.
* Les mods sont susceptibles de ne plus fonctionner à cause des mises à jour et c'est normal - soyez patient et respectueux lorsque cela se produit, parce que les moddeurs sont bénévoles et ont une vie.
* Beat Games ne cherche pas volontairement à casser les mods. Ils souhaitent améliorer la base du jeu et parfois cela casse les mods, mais ce n'est pas dans leur objectif de tuer les mods.

N'attaquez pas les développeurs pour des problèmes relatifs aux mods, et inversement - les moddeurs et les développeurs sont deux groupes distincts. Ne sois pas idiot, d'accord ? :::

:::warning FAITES ATTENTION EN INSTALLANT DES MODS Beat Saber ne vous demandera **JAMAIS** de l'exécuter en tant qu'administrateur.

Si vous avez installé un mod et vous voyez la fenêtre de contrôle de compte d'utilisateur, **N'ACCEPTEZ PAS** et signalez ce mod. Ce que vous avez installé est un mod malveillant !

L'unique situation autorisée est l'activation ou la désactivation de la fonction OneClick™ de Mod Assistant. Les permissions administrateur sont requises pour enregistrer les liens OneClick™ avec Mod Assistant.

Si vous n'êtes pas sûr que ce que vous avez installé est un malware ou non, ***veuillez demander dans notre serveur Discord*** (en anglais). :::

Beat Saber supporte les chansons personnalisées de façon native, donc vous n'avez pas besoin de mods si c'est tout ce que vous cherchez ! Cela dit, il est judicieux d'installer `SongCore` puisque ce mod étend les fonctionnalités de base afin de raccourcir les temps de chargement et de fournir une base pour d'autres mods tels que le téléchargeur en jeu, les classements personnalisés, les playlists, etc.

::: warning ATTENTION Ce guide concerne uniquement l'installation de mods sous Windows.  
Si vous avez un Quest, visitez le [guide de modding pour Quest](/fr/quest-modding.md).  
Si vous êtes sous Linux, nous avons également un [guide pour Linux](./linux-modding.md). :::

Si vous rencontrez des problèmes, faites un tour sur [la page d'aide](./support/) pour voir si vous pouvez trouver ce qui a dérapé avant de demander dans le serveur Discord. Avec un peu de chance, la réponse que vous cherchez est déjà sur cette page !

::: warning J'ai suivi un tutoriel vidéo sur Youtube, mais ça coince/ne marche pas. Pourquoi ? Ici, nous recommandons **fortement** d'éviter les tutoriels vidéos pour modder le jeu. Nous remarquons souvent que ces vidéos sont obsolètes ou fournissent des informations incomplètes, erronées voire complètement fausses.

Vous devriez à la place suive les guides écrits ici sur le wiki, ou demander de l'aide dans le [Discord BSMG](https://discord.gg/beatsabermods) (anglophone). :::

## Installateurs

### Mod Assistant
> **CECI EST L'INSTALLATEUR DE MOD ACTUELLEMENT RECOMMANDÉ.**

__**Lancez le jeu au moins une fois**** avant d'essayer de modder votre jeu ! Ceci est valable aussi après une réinstallation.

Un installateur de mod Beat Saber simple, similaire à l'ancien Mod Manager, mais avec des fonctionnalités additionnelles telles que la suppression de mods et la vérification de version. Téléchargez-le sur [le GitHub d'Assistant](https://github.com/Assistant/ModAssistant/releases/latest).

![Mod Assistant](~@images/beginners-guide/modassistant.png)

### BeatSaberModManager

__**Lancez le jeu au moins une fois**** avant d'essayer de modder votre jeu ! Ceci s'applique également à chaque réinstallation du jeu.

Un autre installateur de mod pour Beat Saber, fortement inspiré par ModAssistant. Il cherche à être plus attractif visuellement et à supporter Windows et Linux, tout en étant aussi riche en fonctionnalités que ModAssistant. Téléchargez-le sur [le GitHub d'affederaffe](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](~@images/beginners-guide/beatsabermodmanager.png)

## Comment avoir plus de chansons
::: tip
La plupart des maps dans les catégories "Top All", "Rating", "Downloads" et "Plays" ont été créées bien avant la mise en place des bonnes pratiques de mapping. Téléchargez en priorité des musiques sorties après 2019 pour une meilleure expérience.
:::

::: warning Il est sage de sauvegarder occasionnellement votre dossier `CustomLevels`, car il y a une faible chance qu'une mise à jour du jeu le réinitialise !

Ce dossier est situé dans les fichiers du jeu : `Beat Saber/Beat Saber_Data/CustomLevels` :::

### En jeu
Le mod `BeatSaver Downloader` vous permet de télécharger des maps directement depuis le jeu en utilisant le bouton `MORE SONGS` dans le menu `Mods`. Ce mod télécharge les maps directement depuis [BeatSaver](https://beatsaver.com).

### BeatSaver
[BeatSaver](https://beatsaver.com) est le dépôt principal des chansons personnalisées créées par la communauté. Plusieurs autres sites améliorent l'expérience de téléchargement de chansons personnalisées, mais elles sont toutes stockées sur ce site . Pour installer les chansons personnalisées téléchargées depuis le site, décompressez-les dans un dossier et placez-les dans `Beat Saber/Beat Saber_Data/CustomLevels`. Vous pouvez également utiliser le mod BeatSaver downloader mentionné ci-dessus, ou la fonctionnalité OneClick™ de Mod Assistant.

Pour activer la fonctionnalité OneClick™ de Mod Assistant, voir la photo ci-dessous : ![Mod Assistant](~@images/beginners-guide/modassistant-oneclick.png)

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) est un site web qui a pour but de mettre en lumière les maps de qualité pour les trouver plus facilement. Pour ce faire, les milliers de chansons présentes sur BeatSaver sont catégorisées, afin que vous puissiez filtrer par genre de musique et d'autres mots-clés appropriés. Le site dispose également d'une fonctionnalité communautaire permettant aux joueurs de laisser leurs critiques et impressions sur les maps. Une des fonctionnalités les plus utilisées est la catégorie "*Curator Recommended*" où une équipe joue la plupart des chansons sorties chaque jour et recommande celles qui sortent du lot, permettant [de les télécharger automatiquement en jeu](https://bsaber.com/beatsync/).

### Applications de gestion des chansons

Il n'y a aucune application de gestion des chansons disponible pour le moment.

### Playlists
Vous devez installer le mod [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest).

Vous pourrez ensuite :

* Utiliser l'outil `Installer une playlist` dans l'onglet Options de Mod Assistant.
* Placer le fichier de playlist dans `Beat Saber/Playlists` et sélectionnez la en jeu, puis appuyez sur le bouton *Download*.

Vous devriez maintenant voir la playlist à côté de l'album des niveaux personnalisés (Custom Levels) en jeu. Le mod prend également en charge la gestion des playlists depuis le jeu.

## Dossier d'installation
_Où est installé Beat Saber ?_

### Emplacements par défaut
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Autres emplacements
**Si vous avez déplacé votre dossier d'installation sur un disque différent, son emplacement pourrait bien être l'un des suivants.** Remplacez la lettre de lecteur `F` par celle correspondant à celle du disque sur lequel vous avez installé votre jeu.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Installation manuelle
Un installateur de mods est le moyen recommandé pour installer des mods. Lisez la section [ci-dessus](#installateurs). Si vous avez patché le jeu et avez juste besoin d'installer les mods qui ne sont pas disponibles dans l'installateur, passez à l'étape 4.

:::warning FAITES ATTENTION EN INSTALLANT DES MODS Modder votre jeu avec des mods non vérifiés tels que ceux venant du salon `#pc-mods` comporte des risques, tel que la possibilité qu'un mod se trouve en réalité être un logiciel malveillant.

Beat Saber ne vous demandera **JAMAIS** de l'exécuter en tant qu'administrateur.

Si vous avez installé un mod et vous voyez la fenêtre de validation par l'utilisateur, **N'ACCEPTEZ PAS** et signalez ce mod. Si vous n'êtes pas sûr qu'un mod que vous avez installé est malveillant ou non, ***veuillez demander à quelqu'un dans notre Discord*** (en anglais). :::

**Lancez le jeu au moins une fois** avant d'essayer de modder votre jeu ! Ceci s'applique également à chaque réinstallation du jeu.

### Installer BSIPA

1. Téléchargez [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Rendez vous dans [le dossier d'installation](#dossier-d-installation) et extrayez-y le contenu de BSIPA. ![Répertoire propre](~@images/beginners-guide/directory-clean.png "Répertoire propre") ![Répertoire avec IPA](~@images/beginners-guide/directory-ipa.png "Répertoire avec IPA")
3. Double-cliquez sur `IPA.exe` pour patcher le jeu. Chaque mod présent dans le dossier `Plugins` sera désormais chargé au lancement du jeu. En cas d'erreur, assurez-vous d'avoir bien suivi l'étape 2. ![Répertoire patché](~@images/beginners-guide/directory-patched.png "Répertoire patché")

### Installer les mods

4. Téléchargez le(s) mod(s) que vous souhaitez installer, que ce soit depuis GitHub, le salon `#pc-mods` du [Discord BSMG](https://discord.com/invite/beatsabermods), [BeatMods](https://beatmods.com/#/mods) ou d'autres sources. **Assurez-vous de télécharger toutes les dépendances requises pour chaque mod.** ![Répertoire Plugins](~@images/beginners-guide/directory-plugins.png "Répertoire Plugins")
5. Certains mods ont des instructions d'installation précises, certains non. Généralement, il suffit de glisser-déposer le contenu du zip dans le dossier d'installation du jeu, et les fichiers doivent aller dans les dossiers correspondants.

## Rétrograder (Downgrading)

Vérifiez le salon `#modding-announcements` dans le serveur discord[BSMG](https://www.discord.gg/beatsabermods) pour voir si la dernière version est moddable. Si ce n'est pas le cas, vous pouvez suivre ces tutoriels pour rétrograder vers une version moddable.

Cliquez sur ces liens correspondant à l'endroit où vous avez acheté le jeu pour voir les tutoriels.

* [L'Oculus Store](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)
* Pour Steam, vous avez quelques options pour rétrograder. Ces deux éléments sont basés sur [BSLG](https://discord.gg/MrwMx5e).
  * [BSLegacyLauncher](https://www.youtube.com/watch?v=qjNU5aENHRU)
  * [LegacyInstaller](https://github.com/Goobwabber/LegacyInstaller#readme)

## Comment désinstaller les mods
Supprimez le fichier DLL du dossier `Plugins`, ou bien cliquez sur le bouton `Uninstall` dans Mod Assistant.

## Où aller à partir de maintenant

* [Prises et Astuces](./grips-and-tricks.md)
* [Créer ses propres beatmaps](/mapping/)
* [Sabres personnalisés](/models/custom-sabers.md)
* [Avatars personnalisés](/models/custom-avatars.md)
* [Plateformes personnalisées](/models/custom-platforms.md)
* [Jouer des chansons personnalisées en multijoueur](https://discord.com/invite/gezGrFG4tz)
* [Créer des mods](/modding/)

## Des questions ?
Visitez les salons d'assistance sur le [Discord BSMG](https://discord.gg/beatsabermods) !
