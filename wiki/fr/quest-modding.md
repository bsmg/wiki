---
sidebar: auto
---

# Modding sur Quest

## Préface

- Ce guide concerne à la fois le Quest 1 et le Quest 2.
- Personne n'a été banni pour avoir moddé.

::: danger DISCLAIMER En choisissant d'utiliser les mods, vous comprenez que :
- Vous pouvez rencontrer des problèmes qui n'existent pas dans le jeu de base. 99,9 % des bugs, des plantages et des retards sont dus aux mods.
- Les mods sont susceptibles d'être cassés par des mises à jour et c'est normal - soyez patient et respectueux lorsque cela se produit, comme les moddeurs sont des bénévoles et ont une vie.
- Les Beat Games n'essayent pas de casser intentionnellement les mods. Ils souhaitent améliorer la base du jeu et parfois cela casse les mods, mais ce n'est pas dans leur objectif de tuer les mods.

N'attaquez pas les développeurs pour des problèmes relatifs aux mods, et inversement - les moddeurs et les développeurs sont deux groupes distincts. Ne sois pas idiot ok. :::

## Installation

Actuellement le seul moyen recommandé pour installer les custom songs et les mods est BMBF chargé à travers SideQuest.
* [APK BMBF](https://bmbf.dev/stable) :::warning Installer BMBF et modifier votre jeu désactive le multijoueur officiel, la visualisation et le chargement des scores dans les tableaux des scores du jeu de base. C'est parce qu'Oculus n'authentifie pas les jeux modifiés.

Reportez-vous à [ScoreSaber](https://new.scoresaber.com/quest) pour plus d'informations sur l'installation de ScoreSaber, le système de classement communautaire sur votre Quest.  
Note : ScoreSaber ne remplace pas les tableaux des scores du jeu de base, il n'ajoute que les tableaux des scores pour les chansons personnalisées. :::

### Installer BMBF avec SideQuest

Si vous ne l'avez pas encore fait, téléchargez et installez [SideQuest](https://sidequestvr.com/#/setup-howto) (en anglais).

Ouvrez SideQuest et connectez votre Quest à votre PC. Si vous avez déjà moddé Beat Saber ou si vous avez des scores que vous voulez sauvegarder, allez dans `My Apps` situé dans la barre supérieure de la fenêtre et trouvez Beat Saber.

Cliquez sur l'engrenage qui se trouve à côté et appuyez sur le bouton `BACKUP GAME DATA`. Si vous avez déjà moddé le jeu, vous devez également le désinstaller en appuyant sur sur le bouton `UNINSTALL APP`.

![SideQuestUninstall](~@images/beginners-guide/squninstall.png)

Vous pourrez restaurer votre sauvegarde depuis le même menu, après le modding.

Installez le dernier APK de BMBF via le bouton `Install APK from folder` indiqué ci-dessous.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

Une fois qu'ils sont installés avec succès, assurez-vous que la dernière version de Beat Saber est installée et non moddée. :::warning AVERTISSEMENT Lancez Beat Saber une fois et fermez-le avant de le modder ! :::

Après avoir lancé Beat Saber une fois, ouvrez BMBF depuis l'onglet `Oculus TV channels` ou `Unknown Sources` dans votre bibliothèque.![UnknownSources](~@images/beginners-guide/quest_home-menu.jpg)

Suivez chaque étape exactement comme indiqué. Vous devriez voir apparaître [bsaber.com](https://www.bsaber.com). C'est ici que vous pouvez télécharger les chansons personnalisées disponibles.

Si à tout moment pendant l'installation vous voyez la pop-up `Restaurer l'app`, cliquez sur `Fermer`. Cet avertissement vise principalement les versions piratées du jeu, donc si vous moddez uniquement le jeu il n'y aura probablement aucune conséquence à l'ignorer.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

## Restaurer les données sauvegardées

### Restaurer depuis SideQuest

Retournez dans le même menu dans lequel vous avez fait la sauvegarde de vos données et cliquez sur le bouton `OPEN BACKUPS`. D'ici, trouvez le dossier de sauvegarde le plus récent, ouvrez-le et supprimez le dossier Mods (pour éviter que des mods potentiellement incompatibles ou obsolètes fassent dysfonctionner votre jeu).

Ensuite, retournez dans le menu et appuyez sur la flèche circulaire située à côté de votre dernière sauvegarde. Ceci afin de restaurer vos scores. Le bouton est mis en évidence sur [cette image](#installer-bmbf-avec-sidequest).

## Installer les mods

### Dans votre Quest
:::warning ATTENTION Tous les mods ne sont pas disponibles dans QuestBoard !  
Si un mod n'est pas vu ici, vous devriez suivre la [méthode d'installation avec votre PC](#avec-votre-pc) à la place. :::

Ouvrez BMBF dans votre Quest et rendez vous dans l'onglet `Browser`, vous devriez y voir une icône de globe similaire à celle visible ci-dessous. Cliquez dessus, puis cliquez sur le bouton `QuestBoard`.

![globequestboard](~@images/beginners-guide/globequestboard.png)

Vous devriez voir s'afficher le site QuestBoard. Ensuite, sélectionnez l'onglet `DOWNLOAD MODS`.

![questboardhome](~@images/beginners-guide/questboardhome.png)

Défilez avec vos joysticks. Vous pouvez sélectionner n'importe quel mod dans la liste (visible ci-dessous), et le télécharger en cliquant sur le bouton de téléchargement visible en bout de ligne. Certains téléchargements peuvent vous rediriger vers un site internet ou une page Github. Dans ce cas, suivez les instructions à l'écran, ou téléchargez le dernier `.zip` dans la liste des Releases respectivement.

![questboardmods](~@images/beginners-guide/questboardmods.png)

### Avec votre PC
:::warning AVERTISSEMENT Assurez-vous que votre Quest et votre PC sont sur le même réseau ! :::

Ouvrez BMBF dans votre Quest et rendez-vous dans l'onglet `Tools`, ici vous devriez voir une addresse web et un numéro de version similaires à ce qui est affiché ci-dessous.

![ip](~@images/beginners-guide/ip.png)

Sur votre PC, ouvrez votre navigateur et entrez l'adresse dans la barre de recherche.

Vous devriez être accueilli par l'écran ci-dessous.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Maintenant, glissez simplement n'importe quel mod compatible Quest dans la zone d'envoi de fichiers et synchronisez. Si le mod est fait pour une autre version à la base, il ne s'activera pas automatiquement. Pour activer un ancien mod, rendez-vous dans l'onglet `Mods` et activez-le d'ici.

Si vous voulez utiliser la même méthode de téléchargement de chansons comme vous pouvez le faire avec BMBF dans le Quest, remplacez simplement `upload` dans l'URL par `browser`.

## Installer des maps

### Dans votre Quest
Il y a 2 sources pour installer des maps personnalisées dans votre Quest en utilisant le navigateur.
* Si vous cherchez des maps et des playlists organisées, visitez [BeastSaber](https://bsaber.com/)
* Si vous n'aimez pas l'interface de BeastSaber vous pouvez aussi essayer [BeatSaver](https://beatsaver.com/)

Ces deux sources ont un bouton OneClick qui permet d'installer aisément la chanson voulue sur votre Quest. Vous pouvez alterner entre ces deux sites en utilisant l'icône de globe en haut à droite de la fenêtre du navigateur.

### Avec votre PC
Si vous ne pouvez pas installer des custom songs dans votre Quest, vous pouvez installer les maps en utilisant votre ordinateur de manière similaire aux mods.
1. Visitez [BeastSaber](https://bsaber.com/) ou [BeatSaver](https://beatsaver.com/) sur votre ordinateur
2. Téléchargez le zip
3. Suivez les instructions d'[installation de mods avec votre PC](#avec-votre-pc) jusqu'à l'écran d'envoi de fichiers.
4. Glissez et déposez le zip de la map et elle devrait s'installer !

:::tip CONSEIL Si vous voulez tester la map que vous avez créée, consultez la section [Tester sur Oculus Quest](/fr/mapping/#tester-sur-oculus-quest) dans la partie du wiki consacrée au mapping pour savoir comment l'emballer pour la tester ! :::

## Liens utiles et guides alternatifs

* [[Guide d'installation de BMBF sur Oculus Quest](https://bsaber.com/oculus-quest-custom-songs/) (en anglais) ](https://bsaber.com/oculus-quest-custom-songs/)
* [[Guide général par Sc2ad pour apprendre les bases du modding statique](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md) (en anglais)](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md)
* [[Collection de tous les guides actuels pour les mods statiques tels que les sabres et les notes, fait par RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki) (en anglais)](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki)
* [QuestSaber Community](https://discord.gg/NXnPYEh) (en anglais) - Un serveur dédié à la création et l'utilisation de sabres, bloqs, et murs pour Quest.
* [Guides de création des Qosmetics](https://github.com/RedBrumbler/Qosmetics/wiki) (en anglais) - Des guides sur la création de vos propres sabres custom, bloqs et murs sur Quest
* [[Corriger le problème de synchronisation audio](https://bsaber.com/quest-out-of-sync/) (en anglais)](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - Tableaux des scores en jeu pour les chansons personnalisées

## Dépannage
:::warning ATTENTION J'ai regardé cette vidéo par Elite Eric, mais je me suis retrouvé coincé/ça n'a pas fonctionné. Où est le problème ? Nous, chez BSMG, recommandons **fortement** d'éviter les tutoriels d'Elite Eric. Après avoir passé en revue une bonne partie de son contenu, ils contiennent une grande quantité d'information incomplètes, erronées, voire complètement fausses. Nos tentatives de le contacter pour corriger ses erreurs n'ont malheureusement pas reçu de réponse, et de nouveaux tutoriels (incorrects également) sont sortis.

À la place, vous devriez suivre les guides écrits ici sur le wiki ou chercher de l'aide dans le [Discord BSMG](https://discord.gg/beatsabermods) (anglophone). :::
### Ajouter des mods de beatmods.com ou des modèles de modelsaber.com ne fonctionne pas
La raison pour laquelle ajouter des mods de [BeatMods](https://beatmods.com/) ou des modèles de [ModelSaber](https://modelsaber.com/) ne fonctionne pas est parce que ces mods et sabres sont uniquement pour PC.

Récupérez des mods compatibles Quest sur [QuestBoard](https://www.questmodding.com/) ou dans `#quest-mods` dans le serveur Discord Beat Saber Modding Group, et des sabres, bloqs et murs dans le [serveur Discord Qosmetics Community](https://discord.gg/qosmetics). Une fois que vous avez votre mod ou modèle au format .zip, utilisez [l'interface web de BMBF](#installer-les-mods) pour l'installer.
___
### L'installation de BMBF ne fonctionne pas
Quand, à l'installation de BMBF avec SideQuest, vous obtenez l'erreur `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!`

You will need to uninstall the BMBF version on your Quest. You can do this from SideQuest's `My Apps` menu.
___
### BMBF web interface not loading
If your BMBF Web Interface is not loading, be sure that you're typing the IP from the tools tab into your browser on your computer that's on the same network. Make sure that: 1) Your IP is not `127.0.0.1`, if that shows up try rebooting your headset and/or router. 2) BMBF is open in the headset 3) There is `http://` at the beginning of the link, not `https://` 4) You have `:50000` at the end of your link 5) Your PC and Quest are on the same wifi network 6) Your IP is still the same as it can change from time to time

If none of these work, restart your Quest and go through the list again.
___
### BMBF not loading configuration after a few minutes
This is likely due to using BMBF on a game version it was not built for. Such as using BMBF for Beat Saber version `1.13.0` when the version of the game installed on the headset is `1.12.2`.  
If the game version matches what the BMBF release page says its built for, try restarting your headset. If it still does not work use the [BMBF Web Interface](#using-your-pc) and click `Quick Fix` in the Tools tab.
___
### Beat Saber is black when I launch it
Open the library on your Quest. Click the three dots next to Beat Saber and then click `Permissions`. In the menu that pops up, enable storage permissions and try launching the game again.
___
### My Sabers and Mods wont enable/work!
This is most likely due to having an outdated BMBF Client, grab the latest [BMBF Release](https://bmbf.dev/stable). If the BMBF version for your Beat Saber is not there then please wait a while for the unicorns to update BMBF.
* Si votre mod est normalement compatible avec votre version de BMBF, assurez-vous qu'il n'y a pas de dossier séparant le contenu du fichier `.zip`.
* Si votre niveau ne charge pas, essayez d'installer Mapping Extensions depuis `#quest-mods`
* Si votre BMBF est à jour et les mods ne s'activent pas une fois dans le jeu, désinstallez Beat Saber avec le bouton uninstall bs dans l'onglet Tools de BMBF puis réinstallez et remoddez.
* Dans de très, très rares cas, BMBF n'a pas les permissions de copier des mods au bon endroit. Allez donc vérifier dans SideQuest pour vous assurer que BMBF a les droits requis pour gérer les fichiers.
___
### My Beat Saber gets 3 dots when I launch!
If your Beat Saber is getting 3 dots when launching make sure that: 1) You launched and played one song before modding the game 2) You're not using a pirated version of the game 3) Make sure you're using the latest version of BMBF


