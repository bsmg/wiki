---
sidebar: auto
---
# Modding sur Quest

## Installation

Actuellement le seul moyen recommandé pour installer les custom songs et les mods est BMBF chargé à travers SideQuest.
* [BMBF apk](https://bmbf.dev/stable)

### Installer BMBF avec SideQuest

Si vous ne l'avez pas encore fait, téléchargez et installez [SideQuest](https://sidequestvr.com/#/setup-howto) (en anglais).

Ouvrez SideQuest et connectez votre Quest à votre PC. Si vous avez déjà moddé Beat Saber ou si vous avez des scores que vous voulez sauvegarder, allez dans `My Apps` situé dans la barre supérieure de la fenêtre et trouvez Beat Saber.

Cliquez sur la roue juste à côté et appuyez sur le bouton `BACKUP GAME DATA`, si vous avez un jeu moddé vous devez aussi le désinstaller en utilisant le bouton `UNINSTALL APP`.

![SideQuestUninstall](./images/beginners-guide/squninstall.png)

Vous pourrez restauré votre sauvegarde depuis le même menu, après le modding.

Installez le dernier APK de BMBF via le bouton `Install APK from folder` indiqué ci-dessous.

![InstallAPK](./images/beginners-guide/apkfromfolder.png)

Une fois qu'ils sont installés avec succès, assurez-vous que la dernière version de Beat Saber est installée et non moddée.
:::warning
Lancez Beat Saber une fois et fermez-le avant de le modder !
:::

Après avoir lancé Beat Saber une fois, ouvrez BMBF depuis l'onglet `Oculus TV channels` ou `Unknown Sources` dans votre bibliothèque. Suivez chaque étape en suivant les indications, puis vous devriez être en mesure de voir [bsaber.com](https://www.bsaber.com). C'est ici que vous pouvez télécharger n'importe quelle custom song disponible.

## Restaurer les données sauvegardées

### Restaurer depuis SideQuest

Retournez dans le même menu dans lequel vous avez fait la sauvegarde de vos données et cliquez sur le bouton `OPEN BACKUPS`.
D'ici, trouvez le dossier de sauvegarde le plus récent, ouvrez-le et supprimez le dossier Mods (pour éviter que des mods potentiellement incompatibles ou obsolètes fassent dysfonctionner votre jeu).

Ensuite, retournez dans le menu et appuyez sur la flèche circulaire située à côté de votre dernière sauvegarde. Ceci afin de restaurer vos scores.
Le bouton est mis en évidence sur [cette image](#installer-bmbf-avec-sidequest).

## Installer les mods depuis votre PC

:::warning
Assurez-vous que votre Quest et votre PC sont sur le même réseau !
:::

Ouvrez BMBF dans votre Quest et rendez-vous dans l'onglet `Tools`, ici vous devriez voir une addresse web et un numéro de version similaires à ce qui est affiché ci-dessous.

![ip](./images/beginners-guide/ip.png)

Sur votre PC, ouvrez votre navigateur et entrez l'adresse dans la barre de recherche.

Vous devez être accueilli par cet écran.

![bmbfweb](./images/beginners-guide/bmbfweb.png)

Maintenant, glissez simplement n'importe quel mod compatible avec le Quest dans la boîte d'upload et synchronisez. Si le mod est fait pour une autre version à la base, il ne s'activera pas automatiquement. Pour activer un ancien mod, rendez-vous dans  l'onglet `Mods` et activez-le d'ici.

Si vous voulez utiliser la même méthode de téléchargement de custom songs comme vous pouvez le faire avec BMBF dans le Quest, remplacez simplement `upload` dans l'URL par `browser`.

## Liens utiles et guides alternatifs

* [Guide d'installation de BMBF sur Oculus Quest](https://bsaber.com/oculus-quest-custom-songs/) (en anglais)
* [Guide général par Sc2ad pour apprendre les bases du modding statique](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md) (en anglais)
* [Collection de tous les guides actuels pour les mods statiques tels que les sabres et les notes, fait par RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki) (en anglais)
* [Corriger le problème de synchronisation audio](https://bsaber.com/quest-out-of-sync/) (en anglais)


## Dépannage
### Ajouter des mods depuis bsaber.com ne fonctionne pas
La raison de pourquoi l'ajout de mods et sabres depuis [BeastSaber](https://bsaber.com/) ne fonctionne pas est que ces mods et sabres sont faits par le PC seulement. Pour ajouter des mods et sabres pour le Quest, utilisez l'interface web BMBF. [Comment accéder à l'interface web BMBF](#installer-les-mods-depuis-votre-PC)

Récupérez les sabres et mods compatibles Quest dans `#quest-mods`, `#quest-assets` sur le Discord Beat Saber Modding Group, ou sur le [Github de RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers), et utilisez les `.zip` téléchargés pour les installer dans l'interface web BMBF.
___
### L'interface web BMBF ne charge pas
Si votre interface web BMBF ne charge pas, assurez-vous de bien saisir l'IP de l'onget Tools dans votre navigateur, qui est sur le même réseau.
Vérifiez que :
1) Votre IP n'est pas `127.0.0.1`
2) BMBF n'est pas ouvert dans le casque
3) Il y a bien `http://` au début du lien, pas `https://`
4) Vous avez bien `:50000` à la fin du lien
___
### BMBF ne charge pas la configuration après quelques minutes
C'est généralement dû à l'utilisation d'une version obsolète de Beat Saber utilisée avec BMBF.
Si vous n'utilisez pas une version obsolète essayez de redémarrer votre casque et, si cela continue, cliquez sur Quick Fix dans l'interface web BMBF.
___
### Mes sabres et mods ne s'active pas / ne fonctionne pas !
C'est généralement dû à un client BMBF obsolète, récupérez la [dernière version de BMBF](https://bmbf.dev/stable). Si la version de BMBF pour votre Beat Saber n'y est pas, merci de patienter le temps que les Unicorns mettent à jour BMBF.
* Si votre mod est normalement compatible avec votre version de BMBF, assurez-vous qu'il n'y a pas de dossier séparant le contenu du fichier `.zip`.
* Si votre niveau ne charge pas, essayez d'installer Mapping Extensions depuis `#quest-mods`
* Si votre BMBF est à la dernière version et les mods ne s'activent pas en jeu, désinstallez Beat Saber avec le bouton Uninstall BS dans l'onglet Tools de BMBF, puis réinstallez-le et moddez-le encore.
___
### Mon Beat Saber affiche 3 points quand je le lance !
Si votre Beat Saber affiche 3 points quand il est lancé, assurez-vous que :
1) Vous avez lancé et joué une chanson avant de modder le jeu
2) Vous n'utilisez pas une version piratée du jeu
3) Vous utilisez la dernière version de BMBF


