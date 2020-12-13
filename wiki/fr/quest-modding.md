---
sidebar: auto
---

# Modding sur Quest

## Preface

- This guide is for both Quest 1 and Quest 2.
- Nobody has yet been banned for modding.

::: danger DISCLAIMER By choosing to use mods, you understand that:
- You may experience problems that don't exist in the vanilla game. 99.9% of bugs, crashes, and lag are due to mods.
- Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders are volunteers with real lives.
- Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods, but they are not out to kill mods.

Do not attack the devs for issues related to mods, and vice versa - modders and devs are two separate groups. Just don't be a jerk ok. :::

## Installation

Actuellement le seul moyen recommandé pour installer les custom songs et les mods est BMBF chargé à travers SideQuest.
* [BMBF apk](https://bmbf.dev/stable) :::warning Installing BMBF and modding your game will disable Official Multiplayer, viewing, and uploading scores on base game leaderboards. This is because Oculus does not authenticate modded games.

See [ScoreSaber](https://new.scoresaber.com/quest) for information on setting up ScoreSaber, the community leaderboard system on your Quest.  
Note: ScoreSaber does not replace the base game leaderboards, it only adds leaderboards for custom songs. :::

### Installer BMBF avec SideQuest

Si vous ne l'avez pas encore fait, téléchargez et installez [SideQuest](https://sidequestvr.com/#/setup-howto) (en anglais).

Ouvrez SideQuest et connectez votre Quest à votre PC. Si vous avez déjà moddé Beat Saber ou si vous avez des scores que vous voulez sauvegarder, allez dans `My Apps` situé dans la barre supérieure de la fenêtre et trouvez Beat Saber.

Click the cog next to it then press the `BACKUP GAME DATA` button, if you have a modded game you also need to uninstall it by pressing the `UNINSTALL APP` button.

![SideQuestUninstall](~@images/beginners-guide/squninstall.png)

Vous pourrez restauré votre sauvegarde depuis le même menu, après le modding.

Installez le dernier APK de BMBF via le bouton `Install APK from folder` indiqué ci-dessous.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

Une fois qu'ils sont installés avec succès, assurez-vous que la dernière version de Beat Saber est installée et non moddée. :::warning AVERTISSEMENT Lancez Beat Saber une fois et fermez-le avant de le modder ! :::

Après avoir lancé Beat Saber une fois, ouvrez BMBF depuis l'onglet `Oculus TV channels` ou `Unknown Sources` dans votre bibliothèque.![UnknownSources](~@images/beginners-guide/quest_home-menu.jpg)

Suivez chaque étape en suivant les indications, puis vous devriez être en mesure de voir [bsaber.com](https://www.bsaber.com). C'est ici que vous pouvez télécharger n'importe quelle custom song disponible.

Cliquez sur la roue juste à côté et appuyez sur le bouton `BACKUP GAME DATA`, si vous avez un jeu moddé vous devez aussi le désinstaller en utilisant le bouton `UNINSTALL APP`.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

## Restaurer les données sauvegardées

### Restaurer depuis SideQuest

Retournez dans le même menu dans lequel vous avez fait la sauvegarde de vos données et cliquez sur le bouton `OPEN BACKUPS`. D'ici, trouvez le dossier de sauvegarde le plus récent, ouvrez-le et supprimez le dossier Mods (pour éviter que des mods potentiellement incompatibles ou obsolètes fassent dysfonctionner votre jeu).

Ensuite, retournez dans le menu et appuyez sur la flèche circulaire située à côté de votre dernière sauvegarde. Ceci afin de restaurer vos scores. Le bouton est mis en évidence sur [cette image](#installer-bmbf-avec-sidequest).

## Installer les mods

:::warning AVERTISSEMENT Assurez-vous que votre Quest et votre PC sont sur le même réseau ! :::

Ouvrez BMBF dans votre Quest et rendez-vous dans l'onglet `Tools`, ici vous devriez voir une addresse web et un numéro de version similaires à ce qui est affiché ci-dessous.

![IP](~@images/beginners-guide/ip.png)

Sur votre PC, ouvrez votre navigateur et entrez l'adresse dans la barre de recherche.

You should be greeted with this screen below.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Maintenant, glissez simplement n'importe quel mod compatible avec le Quest dans la boîte d'upload et synchronisez. Si le mod est fait pour une autre version à la base, il ne s'activera pas automatiquement. Pour activer un ancien mod, rendez-vous dans l'onglet `Mods` et activez-le d'ici.

Si vous voulez utiliser la même méthode de téléchargement de custom songs comme vous pouvez le faire avec BMBF dans le Quest, remplacez simplement `upload` dans l'URL par `browser`.

## Installer des maps

### Dans votre Quest
There are 2 sources to getting custom maps inside your Quest using the browser window.
* If you are looking for curated maps and playlists visit [BeastSaber](https://bsaber.com/)
* Si vous n'aimez pas l'interface de BeastSaber vous pouvez aussi essayer [BeatSaver](https://beatsaver.com/)

Les deux ont un bouton en un clic (1click button) qui installe facilement la custom song dans votre Quest. Vous pouvez alterner entre les sites en utilisant l'icône du globe en haut à droite de la fenêtre de votre navigateur.

### Avec votre PC
Si vous ne pouvez pas installer des custom songs dans votre Quest, vous pouvez installer les maps en utilisant votre ordinateur de la même manière qu'en installant les mods.
1. Visitez [BeastSaber](https://bsaber.com/) ou [BeatSaver](https://beatsaver.com/) sur votre ordinateur
2. Téléchargez le zip
3. Suivez les étapes pour [Installer les mods](#installer-les-mods) jusqu'à l'écran d'upload des fichiers.
4. Glissez et déposez le zip de la map et elle devrait s'installer !

:::tip ASTUCE Si vous voules tester une map que vous avez créée, allez voir la section [Testez sur Oculus Quest](/fr/mapping/#tester-sur-oculus-quest) dans la partie sur le Mapping pour les étapes d'assemblage pour le test ! :::

## Liens utiles et guides alternatifs

* [[Guide d'installation de BMBF sur Oculus Quest](https://bsaber.com/oculus-quest-custom-songs/) (en anglais) ](https://bsaber.com/oculus-quest-custom-songs/)
* [[Guide général par Sc2ad pour apprendre les bases du modding statique](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md) (en anglais)](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md)
* [[Collection de tous les guides actuels pour les mods statiques tels que les sabres et les notes, fait par RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki) (en anglais)](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki)
* [QuestSaber Community](https://discord.gg/NXnPYEh) - Un serveur dédié à la création et l'utilisation de sabres pour Quest
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Guides to create your own custom sabers, bloqs, and walls for Quest.
* [[Corriger le problème de synchronisation audio](https://bsaber.com/quest-out-of-sync/) (en anglais)](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - In-game leaderboards for custom songs

## Dépannage
:::warning I watched this video by Elite Eric, but I got stuck/it didn't work. What gives? We at BSMG **strongly** suggest against using any tutorials by Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods). :::
### Ajouter des mods depuis bsaber.com ne fonctionne pas
The reason adding mods and sabers from [BeastSaber](https://bsaber.com/) doesn't work is because those mods and sabers are intended for PC Only. To add mods and sabers for the quest use the BMBF Web Interface [How To Access BMBF Web Interface](https://bsmg.wiki/quest-modding.html#installing-mods)

Récupérez les sabres et mods compatibles Quest dans `#quest-mods` ou `#quest-assets` sur le Discord Beat Saber Modding Group, ou bien vous pouvez trouver des sabres pour Quest sur le [GitHub de RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers), ou sur sur le serveur [QuestSaber Community](https://discord.gg/NXnPYEh). Une fois que vous avez votre `.zip`, utilisez [l'interface web BMBF](#installer-les-mods) pour l'installer.
___
### Le chargement de BMBF ne fonctionne pas
Quand au chargement de BMBF avec SideQuest vous obtenez l'erreur `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!"`

Vous devez désinstallez la version de BMBF de votre Quest. Vous pouvez le faire dans le menu `My Apps` de SideQuest.
___
### L'interface web BMBF ne charge pas
Si votre interface web BMBF ne charge pas, assurez-vous de bien saisir l'IP de l'onget Tools dans votre navigateur, qui est sur le même réseau. Make sure that: 1) Your IP is not `127.0.0.1`, if that shows up try rebooting your headset and/or router. 2) BMBF is open in the headset 3) There is `http://` at the beginning of the link, not `https://` 4) You have `:50000` at the end of your link 5) Your PC and Quest are on the same wifi network 6) Your IP is still the same as it can change from time to time

If none of these work, restart your Quest and go through the list again.
___
### BMBF ne charge pas la configuration après quelques minutes
C'est généralement dû à l'utilisation d'une version obsolète de Beat Saber utilisée avec BMBF. Si vous n'utilisez pas une version obsolète essayez de redémarrer votre casque et, si cela continue, cliquez sur Quick Fix dans l'interface web BMBF.
___
### Beat Saber is black when I launch it
Open the library on your Quest. Click the three dots next to Beat Saber and then click `Permissions`. In the menu that pops up, enable storage permissions and try launching the game again.
___
### Mes sabres et mods ne s'active pas / ne fonctionne pas !
C'est généralement dû à un client BMBF obsolète, récupérez la [dernière version de BMBF](https://bmbf.dev/stable). Si la version de BMBF pour votre Beat Saber n'y est pas, merci de patienter le temps que les Unicorns mettent à jour BMBF.
* Si votre mod est normalement compatible avec votre version de BMBF, assurez-vous qu'il n'y a pas de dossier séparant le contenu du fichier `.zip`.
* Si votre niveau ne charge pas, essayez d'installer Mapping Extensions depuis `#quest-mods`
* Si votre BMBF est à la dernière version et les mods ne s'activent pas en jeu, désinstallez Beat Saber avec le bouton Uninstall BS dans l'onglet Tools de BMBF, puis réinstallez-le et moddez-le encore.
___
### Mon Beat Saber affiche 3 points quand je le lance !
Si votre Beat Saber affiche 3 points quand il est lancé, assurez-vous que : 1) Vous avez lancé et joué une chanson avant de modder le jeu 2) Vous n'utilisez pas une version piratée du jeu 3) Vous utilisez la dernière version de BMBF


