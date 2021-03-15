---
sidebar: auto
---

# Modding sur Quest

## Préface

* Ce guide concerne à la fois le Quest 1 et le Quest 2.
* Personne n'a encore été banni pour avoir moddé.

:::danger AVIS DE NON-RESPONSABILITÉ En choisissant d'utiliser des mods, vous comprenez et acceptez que :

* Vous pouvez rencontrer des problèmes qui n'existent pas dans le jeu de base. 99,9 % des bugs, des plantages et des ralentissements sont dus aux mods.
* Les mods sont susceptibles de ne plus fonctionner après une mise à jour et c'est normal - soyez patient et respectueux lorsque cela se produit, parce que les moddeurs sont bénévoles et ont une vie.
* Beat Games ne cherche pas volontairement à casser les mods. Ils souhaitent améliorer la base du jeu et parfois cela casse les mods, mais ce n'est pas dans leur objectif de tuer les mods.

N'attaquez pas les développeurs pour des problèmes relatifs aux mods, et inversement - les moddeurs et les développeurs sont deux groupes distincts. Ne sois pas idiot, d'accord ? :::

## Installation
Actuellement, le seul moyen recommandé pour installer les mods et chansons personnalisées sont via BMBF, installé avec SideQuest sur un PC.

Si vous n'avez pas accès à un ordinateur, vous pouvez utiliser [un téléphone Android](#installer-bmbf-avec-un-telephone-android).

* [APK BMBF](https://bmbf.dev/stable) :::warning ATTENTION Installer BMBF et modifier votre jeu désactive le multijoueur officiel, ainsi que l'affichage et l'envoi de scores dans les classements du jeu de base. If you would like to play modded multiplayer, you need the mod, `Beat Together`, which allows for cross-play between pc and quest and allows for custom songs to be used if all parties own said song. Le mod peut être trouvé dans `#quest-mods` dans le Discord BSMG, ou bien sur [Questboard](https://questmodding.com).

Pour obtenir les classements sur les chansons personnalisées et gagner des points de performance (PP) sur les chansons classées, vous avez besoin du mod [ScoreSaber](https://new.scoresaber.com/quest). [Ce lien](https://new.scoresaber.com/quest) (en anglais) vous enverra sur la page du site ScoreSaber vous permettant de l'installer. ScoreSaber ne remplace pas les classements du jeu de base, il ne fait qu'ajouter les classements pour les chansons personnalisées. **Note :** ScoreSaber n'a PAS encore été mis à jour pour Beat Saber 1.13.2. :::

### Installer BMBF avec SideQuest
Si ce n'est pas déjà fait, téléchargez et installer [SideQuest](https://sidequestvr.com/#/setup-howto) (site en anglais).

Ouvrez SideQuest et connectez votre Quest à votre PC.

:::tip ASTUCE Si vous avez précédemment moddé Beat Saber ou avez des scores à sauvegarder, [sauvegardez vos données d'abord](#sauvegarder-les-donnees-de-sauvegarde-avec-sidequest) ! :::

Si vous avez déjà moddé le jeu, vous devez également le désinstaller en appuyant sur le bouton `UNINSTALL APP`. Vous pourrez restaurer votre sauvegarde depuis le même menu, après l'installation des mods.

Cliquez sur le bouton `Install APK from folder` comme indiqué ci-dessous et sélectionnez le fichier APK BMBF que vous avez téléchargé, ou glissez simplement le fichier APK dans la fenêtre de SideQuest. Ces deux méthodes vont installer BMBF sur votre Quest.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

Une fois installé, vérifiez que vous avez la dernière version de Beat Saber installée et non moddée.

:::warning ATTENTION Avant de modder, lancez Beat Saber une fois, jouez une chanson et perdez immédiatement ! :::

Après avoir lancé Beat Saber une fois, ouvrez BMBF depuis les Sources inconnues comme indiqué ci-dessous.![UnknownSourced](~@images/beginners-guide/quest_home-menu.jpg)

Suivez chaque étape exactement comme indiqué. Vous devriez voir apparaître [bsaber.com](https://www.bsaber.com). C'est ici que vous pouvez télécharger les chansons personnalisées disponibles. Vous pouvez également cliquer sur l'icône de globe dans le coin supérieur droit pour aller sur BeatSaver pour télécharger des chansons.

Si à tout moment pendant l'installation vous voyez la pop-up `Restore App`, cliquez sur `Close`. Cet avertissement vise principalement les versions piratées du jeu, donc si vous ne faites rien d'autre que modder le jeu, vous n'avez pas de souci à vous faire.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

Continuez à l'étape [Mods principaux](#mods-principaux) du processus d'installation.

### Installer BMBF avec un téléphone Android
Ceci n'est **PAS** le moyen recommandé d'installer BMBF et ne devrait être utilisé que si vous n'avez pas accès à un PC.

* [Prérequis](#prerequis)
* [Préparer votre téléphone](#preparer-votre-telephone)
* [Installer BMBF avec votre téléphone](#installer-bmbf-avec-votre-telephone)
* [Préparer Beat Saber](#preparer-beat-saber)

#### Prérequis

* Un téléphone Android ou une tablette Android (les iPhones ou iPads ne sont pas pris en charge)
* Une version **payante** de Beat Saber sur le Store Oculus Quest
* Un câble pour connecter votre Quest à votre téléphone (si votre téléphone dispose d'un port USB C, le chargeur inclus avec votre Quest devrait fonctionner)

#### Préparer votre téléphone

1. Téléchargez l'application [Bugjaeger depuis le Google Play Store](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug&hl=gsw&gl=US)
2. Téléchargez l'APK BMBF le plus récent depuis [bmbf.dev/stable](https://bmbf.dev/stable)
3. Suivez [ce guide écrit](https://github.com/ComputerElite/wiki/wiki/Enable-Developer-Mode-for-OQ) (en anglais) pour activer le mode développeur dans votre Quest.
4. Activez le mode développeur sur votre téléphone
    1. Allez dans vos paramètres Android
    2. Faites défiler vers "À propos du téléphone" et ouvrez-le
    3. Ouvrez "Information sur le logiciel"
    4. Appuyez sur le champ "Numéro de build" jusqu'à ce que le mode développeur soit activé. Cela devrait prendre environ 7 appuis.
5. Activer le débogage USB sur votre téléphone
    1. Retournez dans les paramètres
    2. Appuyez sur "Options pour les développeurs"
    3. Activez le débogage USB

#### Installer BMBF avec votre téléphone
:::warning ATTENTION Avant de modder, lancez Beat Saber une fois, jouez une chanson et perdez immédiatement ! :::

Open bugjaeger on your Phone and connect your Quest. Vous devriez avoir une popup à propos du débogage USB sur votre Quest et votre téléphone. Sélectionnez "Autoriser" sur les deux appareils, et si vous préférez, vous pouvez cocher "Toujours autoriser". Une fois que Bugjaeger détecte votre Quest, installez le fichier APK de BMBF en suivant les instructions ci-dessous :

![installAPKusingPhone.png](~@images/beginners-guide/InstallAPK.png)

Après avoir validé, autorisez l'accès au stockage et sélectionnez le fichier APK téléchargé qui devrait se nommer `com.weloveoculus.BMBF.apk`. Le fichier APK devrait désormais s'installer sur votre Quest.

#### Préparer Beat Saber
Après avoir installé BMBF sur votre Quest, vous devriez pouvoir le trouver dans les Sources inconnues de votre bibliothèque.

![UnknownMenu](~@images/beginners-guide/quest_home-menu.jpg)

Ouvrez-là et autoriez l'accès au stockage si vous y êtes invité. Suivez ensuite attentivement les instructions indiquées à l'écran. Vous devriez voir apparaître [BeastSaber](https://bsaber.com).

Si à tout moment pendant l'installation vous voyez la pop-up "Restaurer l'app", cliquez sur Fermer. Cet avertissement est principalement à l'intention des personnes qui ont piraté le jeu, il n'y a donc pas de quoi s'inquiéter si vous possédez une copie légitime du jeu.

Vous pouvez maintenant continuer à l'étape [Mods principaux](#mods-principaux) du processus d'installation.

## Gérer les données de sauvegarde

### Sauvegarder les données de sauvegarde avec SideQuest

Ouvrez SideQuest et connectez votre Quest à votre PC. Allez dans `My Apps` situé dans la barre supérieure de la fenêtre et trouvez Beat Saber.

Naviguez vers `sdcard/Android/data/com.beatgames.beatsaber/files` avec l'explorateur de fichiers de SideQuest.

Sauvegardez les fichiers `AvatarData.dat`, `PlayerData.dat` et `settings.cfg` dans un dossier sur votre PC. Ne les perdez pas : ils contiennent vos scores et autres paramètres !

### Restaurer les données de sauvegarde avec SideQuest

Pour restaurer vos données, ouvrez SideQuest et connectez votre Quest à votre PC. Allez dans `My Apps` situé dans la barre supérieure de la fenêtre et trouvez Beat Saber. Avec l'explorateur de fichier de SideQuest, prenez les trois fichiers que vous avez sauvegardé en suivant les instructions de [Sauvegarder les données de sauvegarde avec SideQuest](#sauvegarder-les-donnees-de-sauvegarde-avec-sidequest) `AvatarData.dat`, `PlayerData.dat` et `settings.cfg`, et mettez-lez dans le dossier `sdcard/Android/data/com.beatgames.beatsaber/files`.

Ensuite, retournez dans le menu et appuyez sur les flèches circulaires situées à côté de votre dernière sauvegarde. Vos scores et paramètres devraient maintenant être restaurés.

## Installer les mods

### Mods principaux
Avant d'installer des mods supplémentaires, vous devriez voir dans le coin supérieur droit de l'interface BMBF un bouton rouge `Sync to Beat Saber`. Cliquez sur ce bouton et laissez le synchroniser. Allez ensuite dans l'onglet `Mods` dans BMBF. Vérifiez que les 5 mods principaux suivants sont présents :

* Codegen
* Goodbye Bug
* PinkCore
* QuestUI
* Custom Types

:::danger All other mods will not work if these core mods are not listed and enabled.

Si un des mods principaux ne veut pas s'activer, supprimez-le et cliquez sur `Sync to Beat Saber` pour le retélécharger. Vérifiez qu'il a bien été téléchargé et activé. S'il ne fonctionne pas, ou si les mods semblent être activés mais ne fonctionnent pas en jeu, allez voir la section [Les mods principaux ne fonctionnent pas](#les-mods-principaux-ne-fonctionnent-pas) pour résoudre le problème. :::

### Depuis votre Quest
:::warning ATTENTION Pas tous les mods sont disponibles sur QuestBoard !  
Si un mod n'est pas vu ici, vous devriez suivre la [méthode d'installation avec votre PC](#avec-votre-pc) à la place. :::

Ouvrez BMBF dans votre Quest et rendez vous dans l'onglet `Browser`, vous devriez y voir une icône de globe similaire à celle visible ci-dessous. Cliquez dessus, puis cliquez sur le bouton `QuestBoard`.

![globequestboard](~@images/beginners-guide/globequestboard.png)

Vous devriez être accueilli avec le site web [QuestBoard](https://www.questmodding.com/) ci-dessous. Ensuite, sélectionnez l'onglet `DOWNLOAD MODS`.

![questboardhome](~@images/beginners-guide/questboardhome.png)

Défilez avec vos joysticks. Vous pouvez sélectionner n'importe quel mod dans la liste (visible ci-dessous), et le télécharger en cliquant sur le bouton de téléchargement visible en bout de ligne. Certains téléchargements peuvent vous rediriger vers un site internet ou une page Github. Dans ce cas, suivez les instructions à l'écran, ou téléchargez le dernier `.zip` dans la liste des Releases respectivement.

![questboardmods](~@images/beginners-guide/questboardmods.png)

### Depuis votre PC
Vous pouvez trouver et télécharger d'autres mods de quête depuis le [BSMG Discord](https://discord.com/invite/beatsabermods) dans le canal `#quest-mods`.

:::warning Make sure your Quest and PC are on the same network and that you are using http and not https! :::

Ouvrez BMBF dans votre Quest et rendez vous dans l'onglet `Browser`, vous devriez y voir une icône de globe similaire à celle visible ci-dessous.

![ip](~@images/beginners-guide/ip.png)

Sur votre PC, ouvrez votre navigateur et entrez l'adresse dans la barre de recherche.

Vous devriez être accueilli par l'écran ci-dessous.

If this doesn't work [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Maintenant, glissez simplement n'importe quel mod compatible Quest dans la zone d'upload et synchronisez. Si le mod est fait pour une autre version à la base, il ne s'activera pas automatiquement. Pour activer un ancien mod, rendez-vous dans l'onglet `Mods` et activez-le d'ici.

## Installer des maps
::: tip ASTUCE La plupart des maps dans les catégories "Top All", "Rating", "Downloads" et "Plays" ont été créées bien avant la mise en place des bonnes pratiques de mapping. Essayez de téléchargez des chansons publiées entre fin 2019 et maintenant pour obtenir la meilleure expérience possible. :::

### Depuis votre Quest
Il y a 2 sources pour installer des maps personnalisées dans votre Quest en utilisant le navigateur.

* Si vous cherchez des maps et des playlists organisées, visitez [BeastSaber](https://bsaber.com/)
* Si vous n'aimez pas l'interface de BeastSaber vous pouvez aussi essayer [BeatSaver](https://beatsaver.com/)

Ces deux sources ont un bouton OneClick qui permet d'installer aisément la chanson voulue sur votre Quest. Vous pouvez alterner entre ces deux sites en utilisant l'icône de globe en haut à droite de la fenêtre du navigateur.

An easy way to download different kinds of songs is to use `Syncsaber` you can access it by going into BMBF on your quest and clicking the tab called `Syncsaber`. Here you can download songs with a click of a button, you can chose from different "settings". For example you can download the top 20 songs in [Beatsaver's](https://beatsaver.com/) "hot" section or the 50 hardest ranked songs.

Another method is using the `Bookmark` feature on [Beastsaber](https://bsaber.com/). After creating an account you can click a little bookmark icon on a song and if you later delete all your songs from the Quest you can redownload the ones that are bookmarked with OneClick™.

### Depuis votre PC
Si vous ne pouvez pas installer des custom songs dans votre Quest, vous pouvez installer les maps en utilisant votre ordinateur de manière similaire aux mods.

1. Visitez [BeastSaber](https://bsaber.com/) ou [BeatSaver](https://beatsaver.com/) sur votre ordinateur
2. Téléchargez le zip
3. Suivez les instructions d'[installation de mods avec votre PC](#avec-votre-pc) jusqu'à l'écran d'envoi de fichiers.
4. Glissez et déposez le zip de la map et elle devrait s'installer !

If the web interface doesn't load [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

:::tip Vous pouvez également télécharger des playlists de la même manière. You can find various playlists on [Beastsaber](https://bsaber.com/category/playlists/) or various community discords. You can also make your own using [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager) or [Playlist Editor Pro](https://beatsaberquest.com/playlisteditor-pro/).

:::tip CONSEIL Si vous voulez tester la map que vous avez créée, consultez la section [Tester sur Oculus Quest](/fr/mapping/#tester-sur-oculus-quest) dans la partie du wiki consacrée au mapping pour savoir comment l'emballer pour la tester ! :::

## Installer des modèles
Rejoignez la [communauté Qosmetics](https://discord.gg/qosmetics) (en anglais) pour changer l'apparence de votre menu principal, sabres, bloqs ou murs !

## Liens utiles

* [QuestSaber Community](https://discord.gg/qosmetics) (en anglais) - Un serveur dédié à la création et l'utilisation de sabres, bloqs, et murs pour Quest.
* [Guides de création des Qosmetics](https://github.com/RedBrumbler/Qosmetics/wiki) (en anglais) - Des guides sur la création de vos propres sabres custom, bloqs et murs sur Quest
* [Questboard website](https://questmodding.com) - A place to get Beat Saber related news and info along with the latest mods releases!
* [Quesboard discord server](https://discord.gg/P7sUKVnP) - A quest community to hangout and talk about Beat Saber related stuff, you can also get a role to get notified when a new mod gets released!
* [[Corriger le problème de synchronisation audio](https://bsaber.com/quest-out-of-sync/) (en anglais)](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - Classements en jeu pour les chansons personnalisées

## Dépannage
:::warning J'ai regardé cette vidéo d'Elite Eric, mais je me suis retrouvé coincé / ça n'a pas fonctionné. Pourquoi ? Nous, chez BSMG, nous déconseillons **fortement** d'utiliser n'importe quels tutoriels par Elite Eric. Après avoir examiné une bonne partie de son contenu, il y a une grande quantité d'informations incomplètes, erronées ou complètement fausses. Nos tentatives de le contacter pour corriger ces erreurs n'ont malheureusement pas reçu de réponse et d'autres tutoriels (incorrects également) sont apparus.

À la place, vous devriez suivre les guides écrits ici sur le wiki, regarder les tutoriels vérifié par le BSMG au-dessus, ou aller chercher de l'aide sur le [Discord du BSMG](https://discord.gg/beatsabermods). :::

### Ajouter des mods de beatmods.com ou des modèles de modelsaber.com ne fonctionne pas
La raison pour laquelle ajouter des mods de [BeatMods](https://beatmods.com/) ou des modèles de [ModelSaber](https://modelsaber.com/) ne fonctionne pas est parce que ces mods et sabres sont uniquement pour PC.

Vous trouverez des mods compatibles Quest dans `#quest-mods` dans le Discord Beat Saber Modding Group , et les sabres, les bloqs et les murs compatibles Quest dans [Qosmetics Community](https://discord.gg/qosmetics). Une fois que vous avez votre mod ou modèle au format .zip, utilisez [l'interface web de BMBF](#installer-les-mods) pour l'installer.

### L'installation de BMBF ne fonctionne pas
Quand, à l'installation de BMBF avec SideQuest, vous obtenez l'erreur `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!`

Vous devrez désinstaller la version installée de BMBF de votre Quest. Vous pouvez faire ça depuis le menu `My Apps` de SideQuest.

### Les mods principaux ne fonctionnent pas

If you are having problems with core mods, please verify that you are not trying to use any outdated mods. Any mod made for a previous game version is considered outdated. Once you have removed them:

1. Go to `Tools`
2. Click `exit BMBF`
3. Open BMBF again
4. Go to `Tools` again
5. Click `Quick fix`
6. Go to the `Browser` section of the BMBF app.
7. Click the small globe icon in the top right-hand corner
8. Click `QuestBoard`
9. Click `Download Mods`
10. Scroll down and click `Download All Core Mods`
11. Click `Sync to Beat Saber`

---

### L'interface web BMBF ne charge pas
Si votre interface BMBF dans votre navigateur ne charge pas, vérifiez bien que vous avez tapé l'IP se trouvant dans l'onglet Tools dans votre navigateur sur un ordinateur connecté au même réseau. Assurez-vous que :

1. Assurez-vous que : 1) votre IP n'est pas `127.0.0.1`, si c'est le cas essayez de redémarrer votre casque et/ou votre routeur.
2. BMBF est ouvert dans votre casque
3. Le lien commence par `http://` et non pas `https://`
4. Vous avez `:50000` à la fin de votre lien
5. Votre PC et votre Quest sont sur le même réseau Wi-Fi
6. Votre IP n'a pas changé, car elle peut changer de temps en temps

Si rien de tout ça ne fonctionne, redémarrez votre Quest et suivez les étapes à nouveau.

---

### BMBF ne charge pas la configuration après quelques minutes
C'est généralement dû à l'utilisation d'une version de BMBF non conçue pour la version de Beat Saber actuellement installée. Comme utiliser BMBF pour la version `1.13.0` de Beat Saber alors que la version du jeu installé est `1.12.2`.  
Si la version du jeu correspond à ce que la page de téléchargement de BMBF indique, essayez de redémarrer votre casque. Si cela ne fonctionne toujours pas, utilisez [l'interface web BMBF](#installer-les-mods) et cliquez sur `Quick Fix` dans l'onglet Tools.

### Beat Saber est noir quand je le lance
Ouvrez la bibliothèque sur votre Quest. Cliquez sur les trois points à côté de Beat Saber puis cliquez sur `Permissions`. Dans le menu qui apparaît, activez les permissions de stockage et essayez de lancer le jeu à nouveau.

---

### Mes sabres et mods ne s'activent pas/ne fonctionnent pas
C'est généralement dû à un client BMBF obsolète, récupérez la [dernière version de BMBF](https://bmbf.dev/stable) (site en anglais). Si la version de BMBF pour votre Beat Saber n'y est pas, merci de patienter le temps que les Unicorns mettent à jour BMBF.

* Si votre mod est normalement compatible avec votre version de BMBF, assurez-vous qu'il n'y a pas de dossier séparant le contenu du fichier `.zip`.
* Si votre niveau ne charge pas, essayez d'installer Mapping Extensions depuis `#quest-mods`. It may also require the mod Noodle Extensions which isn't on Quest yet.
* Si votre BMBF est à jour et les mods ne s'activent pas une fois dans le jeu, désinstallez Beat Saber avec le bouton uninstall bs dans l'onglet Tools de BMBF puis réinstallez et remoddez.
* Dans de très, très rares cas, BMBF n'a pas les permissions de copier des mods au bon endroit. Allez donc vérifier dans SideQuest pour vous assurer que BMBF a les droits requis pour gérer les fichiers.

---

### Beat Saber plante
If your game is crashing when doing something, disable your mods one by one, running your game each time to see if the issue is fixed before asking for help in a support channel.

### BMBF affiche uniquement un écran blanc
If you only see a white screen when you open BMBF from unknown sources, restart your quest and then it should be fixed

### Beat Saber affiche 3 points au lancement
Si votre jeu affiche les trois points au lancement du jeu, vérifiez que :

1. Vous avez lancé et joué une chanson avant de modifier le jeu
2. Vous n'utilisez pas une version piratée du jeu
3. Assurez-vous d'utiliser la dernière version de BMBF
