---
sidebar: auto
---

# Support
## Table des matières
0. [Notes importantes](#0-important-notes)
1. [Problèmes d'installateur](#1-installer-issues)
2. [Problèmes en jeu](#2-game-issues-post-modding)
3. [Questions fréquentes](#3-common-questions)
4. [Dépannage divers](#4-troubleshooting)
5. [J'ai encore des problèmes](#5-if-all-else-fails)
6. [J'ai encore des problèmes](#6-still-having-issues)

## 0. Mises à jour
Après une mise à jour, le canal `#server-announcements` du Discord BSMG devrait avoir les instructions les plus récentes sur le statut des mods. Ce qui suit sont des instructions plus détaillées sur la procédure la plus courante.

#### La mise à jour a cassé mes mods
**Lancez le jeu une fois** après la nouvelle mise à jour. Puis, réinstallez les mods en utilisant un installateur mentionné dans le [guide du Débutant](/fr/beginners-guide), tel que Mod Assistant.

## 1. Pas de mods ?

#### 1.1 Aucun mod n'apparaît sur une nouvelle installation du jeu
Premièrement, assurez-vous que ce qui suit est correct :
* **Vous avez lancez le jeu une première fois avant d'installer les mods**. BSIPA supprime tous les mods quand il est lancé pour la première fois sur une nouvelle installation pour éviter que les anciens mods cassés chargent avec la nouvelle version. Réinstallez encore les mods si c'est le cas.
* Steam / Oculus lance Beat Saber depuis la **même installation** où les mods sont placés. *i.e les mods sont sur le disque D: mais Steam lance le jeu depuis le disque C:.* Indiquez le bon emplacement d'installation dans votre installateur favori.
* Si vous avez installé des mods à la main, assurez-vous que vous avez inclus tous les fichiers du téléchargement et les avez placés dans les dossiers appropriés, ainsi que leurs dépendances.

#### 1.2 J'avais des mods installés sur une ancienne version, mais rien ne charge après la mise à jour

Si les pré-requis détaillés dans la section 1.1 sont valides, essayez les solutions ci-dessous, en ordre descendant.

**Solution 1**
- Mettez à jour BSIPA à la dernière version (dans ModAssistant ou manuellement)
- Allez dans votre dossier d'installation de Beat Saber
- Lancez `IPA.exe`

**Solution 2.**
-  [Vérifiez vos fichiers du jeu](#verifier-les-fichiers-du-jeu-sur-steam) (Steam seulement, référez-vous à la solution 4 si vous utilisez Oculus)
- Mettez à jour BSIPA à la dernière version
- Allez dans votre dossier d'installation de Beat Saber
- Lancez `IPA.exe`

**Solution 3.**
- Allez dans votre dossier Beat Saber
- Faites un backup du dossier `UserData` (optional)
- Supprimer le dossier `UserData`

::: warning ATTENTION Cela va réinitialiser vos paramètres d'extensions ! :::

**Solution 4.**
- Réalisez une [réinstallation complète](#installation-propre)

#### 1.2 Mod Assistant ne semble pas installer d'extension
Les installateurs téléchargent les mods dans `Beat Saber/IPA/Pending`, BSIPA déplace ces fichiers à la racine du dossier quand vous lancez le jeu. Si votre dossier `Plugins` est toujours vide après, lancez `IPA.exe` une nouvelle fois pour vous assurer que rien ne l'empêche de s'exécuter, par exemple un antivirus, des permissions d'administrateur, etc.

## 2. Problèmes en jeu après modding
### Le jeu ne se lance pas

#### 2.1 Erreur GetThreadContext Failed
Si une fenêtre s'affiche disant `GetThreadContext Failed` et / ou vous entendez un son d'erreur de Windows, il se peut que vous ayez un logiciel sur votre PC qui casse les mods Beat Saber. De nombreux logiciel d'anti-cheat tiers comme ESEA et FaceIt rendent BSIPA inopérant pour appliquer les mods à Beat Saber, même lorsqu'ils ne sont pas lancés. Certains logiciels d'antivirus semblent agir de manière similaire.

Pour résoudre ce problème :
1. Désinstallez le logiciel d'anti-cheat.
2. Redémarrez votre PC.
3. Vérifiez s'il reste des pièces du logiciel dans vos dossiers dans `AppData`.
4. Lancez le jeu. Si le problème persiste, vous pouvez tenter ce qui suit : `Note supplémentaire : Le problème peut persister pour cause de manque de permissions ou d'exceptions, tout programme qui peut bloquer BSIPA, ou les programmes marqués comme suspects peuvent mener à ce problème.` Steam : [Vérifiez les fichiers du jeu](#verifier-les-fichiers-du-jeu-sur-steam) Oculus : Réalisez une [réinstallation complète](#installation-propre)

Ceci devrait réparer le problème.

#### 2.2 Gel du jeu au démarrage
Si le jeu est gelé sur l'écran *Health and Safety*, ou vous voyez un avatar en T-pose sans contrôle sur le jeu, [vérifiez vos fichiers](#verifier-les-fichiers-du-jeu-sur-steam) si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus. Référez vous à la [réinstallation complète](#installation-propre). Cela semble survenir quand Beat Saber est mis à jour et que des mods ont été installés précédemment, mais pas aux utilisateurs avec une installation propre du jeu.

### Problèmes de FPS
#### 2.3 Le jeu ralentit beaucoup après avoir installé les mods
Si le jeu est si ralenti (*lag*) que vous pouvez à peine cliquer sur le bouton `Continue` sur l'écran *Health and Safety*, vérifiez vos fichiers si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus. Faites de même s'il ne démarre pas du tout et vous affiche des messages d'erreur quand vous essayez de lancer le jeu.

Si le problème n'a pas été résolu, essayez la section 2.4.

#### 2.4 Améliorer la fréquence d'images (FPS)
Si la section 2.3 n'a pas amélioré la fréquence d'images, alors votre PC peut simplement avoir du mal à tenir la charge des mods. Voici quelques propositions que vous pouvez tenter pour améliorer votre fréquence d'affichage, sans ordre particulier :

* Vérifiez si NVIDIA GEFORCE EXPERIENCE a défini l'échelle de rendu pour Beat Saber au delà de la valeur par défaut de 1.0. Il est possible qu'il aie défini une valeur plus élevée telle que 1.4 ou 1.8, qui augment considérablement la charge GPU.
* Utilisez un avatar personnalisé moins complexe.
* Les sabres personnalisés **Plasma Katanas** a de nombreux évènements personnalisés et sont connus pour créer du lag en cas de note ratée.
* CameraPlus peut être très gourmand, en particulier si vous avez plusieurs caméras et agrandissez le champ de vision (ou FOV).
* Baissez l'échelle de rendu (Render Scale), l'anticrénelage (Anti-Aliasing), le miroir (Mirror), le brouillard (Smoke) dans les paramètres de base du jeu.
* Pour les joueurs Oculus Rift CV1 : pensez à utiliser 2 capteurs au lieu de 3 ou plus.
* Réduisez votre nombre de mods et de chansons.
* Réalisez une [réinstallation propre](#installation-propre).
* Low framerate can also be caused by something going wrong within your application data folder, to fix this refer to [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)
* Désactivez des compteurs CountersPlus tels que Score Counter et Swing Speed, car ils peuvent être gourmands en ressources.
* Le mod HTTPStatus peut causer des pics de ralentissement (*lag spikes*). Testez le jeu sans ce mod pour voir si les pics de ralentissement disparaissent.

La réalité virtuelle est très gourmande en processeur (CPU), surtout si vous ajoutez des mods. Si vous avez du mal à faire fonctionner le jeu avec les mods que vous voulez utiliser, pensez à améliorer votre matériel. Notez que Beat Saber n'utilise que peu de ressources graphiques (GPU) puisqu'il s'agit d'un jeu simple visuellement.

## 3. Questions fréquentes
#### 3.1 Menu vide, pas de bouton
Si le menu principal de votre jeu est vide, votre fichier de sauvegarde est probablement corrompu. To fix this refer to [Delete Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

:: warning Cela va supprimer tous vos scores locaux ainsi que vos statistiques de jeu. :::

#### 3.2 Comment utiliser `x` mod ?
Si vous utilisez Mod Assistant, cliquez sur le mod puis sur le bouton "Mod Info". https://beatmods.com a également un bouton "More Info" pour chaque mod.

#### 3.3 Problèmes de vibration
Le mod Gameplay Modifiers Plus ajoute le moyen d'activer/désactiver les vibrations des manettes. If you disabled it then removed the mod, you'll need to modify the save data file that it writes to manually. Open `%appdata%/../locallow/hyperbolic magnetism/beat saber` and set `constrollersRumbleEnabled` to `true`.

Si ceci n'est pas la cause de vos problèmes de vibration et si ce qui suit est correct concernant les vibrations :
* les tremblements sont faibles
* il n'y a pas de vibration quand vous tapez un ensemble de blocs
* il y a un léger délai quand vous faites rencontrer les sabres
* you are using Oculus touch controllers

Dans ce cas, il y a des chances que Beat Saber surcharge le contrôleur USB de votre carte mère. Oculus dévore la bande passante de votre contrôleur USB et la plupart des cartes mères utilisent un contrôleur bon marché. Beat Saber le pousse plus loin que les autres jeux, ce qui explique pourquoi il y a pas de problème dans les menus ainsi que d'autres jeux. Il n'y a pas de solution miracle, donc essayez les propositions suivantes :
* Changez les câbles USB du casque et des capteurs sur différents ports
* Débranchez les appareils USB non essentiels
* Achetez un hub USB PCI-E
* Use `-vrmode oculus` if you're using SteamVR to bypass it and use the Oculus SDK instead

### Avatars personnalisés
#### 3.4 Les avatars personnalisés ne s'affichent pas en jeu
Appuyez sur la touche **Origine** de votre clavier avec la fenêtre du jeu active pour basculer la visibilité de l'avatar dans le casque.

#### 3.5 Mes avatars sont cassés
Assurez-vous que le mod Custom Avatars est correctement installé est à jour, idem pour ses dépendances. Vous avez peut-être un avatar corrompu/cassé, ce qui peut par extensions casser le reste de vos avatars (idem avec les chansons et les sabres).

### Musiques personnalisées

#### 3.6 Mes chansons ne s'affichent pas
Assurez-vous que vos chansons sont dans votre dossier `CustomLevels`, positionné dans `Beat Saber/Beat Saber_Data/`. C'est à cet emplacement que le jeu ira trouver les chansons personnalisées.

**Ne placez pas** les chansons dans l'ancien dossier `Beat Saber/CustomSongs`. Cet emplacement est déprécié car le format des les chansons personnalisées a changé. Si vous avez des maps dans l'ancien format (fichiers `.json` et `.ogg` au lieu de `.dat` et `.egg`), laissez-les dans l'ancien dossier `Beat Saber/CustomSongs`. Elles seront alors automatiquement converties par le mod SongCore au nouveau format.

Vous pouvez également les convertir en utilisant [Songe Converter](https://github.com/lolPants/songe-converter)

#### 3.7 Grayed Out Play Button
Click the shiny blue question mark (?) button in the top right corner. Cela devrait vous indiquer quels mods sont nécessaires pour jouer la chansons, que vous n'avez pas et que vous devrez installer. Si cela ne fonctionne toujours pas, essayez de réinstaller les mods nécessaires. Sinon, essayez une [réinstallation propre](#installation-propre).

#### 3.8 Les détails de la map chargent indéfiniment
Si cela ne se produit que sur certaines chansons en particulier, ses fichiers sont probablement cassés. Si en revanche cela se produit sur toutes vos chansons, supprimez votre dossier `Plugins` et réinstallez vos mods.

### Camera Plus
#### 3.9 Camera Plus ne fonctionne pas / après l'écran Santé
Assure-vous que l'option "Smooth Camera" (Caméra lisse) du jeu de base est désactivée. Si cela ne fonctionne pas, essayez de réinstaller Camera Plus et ses dépendances.

#### 3.10 Ma vue sur le PC ne prend qu'une petite portion de l'écran
Votre affichage CameraPlus ne remplit pas tout votre écran. Tirez les coins de la fenêtre pour l'agrandir, ou cliquez droit sur la fenêtre et sélectionnez "Fit To Canvas" (Agrandir à l'écran).

### BeatSaver Downloader
#### 3.11 Le bouton More Songs de BeatSaver Downloader
**Le bouton More Songs est placé dans le menu principal à gauche sous le texte Mods.** Si ce bouton est grisé, vérifiez que toutes vos chansons sont chargées à l'aide de la barre de progression arc-en-ciel visible sur le menu principal. If your Mods menu isn't there then make sure your plugins and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.12 Rien n'apparaît dans le menu More Songs
Les potentielles causes d'échec de BeatSaver Downloader sont :
1. Assurez-vous que toutes vos chansons ont chargé préalabement, autrement le bouton *More Songs* sera grisé.
2. Votre antivirus ou pare-feu bloque l'accès à BeatSaver.
3. Vous avez atteint le taux limite de BeatSaver et devrez attendre avant de réessayer.

## 4. Dépannage divers
### Comprendre les logs
Si vous êtes sur Steam vous pouvez vous rendre dans :
> Beat Saber > Propriétés... > Définir les options de lancement... > Écrivez `--verbose` dans le champ de texte qui apparaît.

Si vous êtes sur Oculus, faites un clic droit sur Beat Saber.exe et créez un raccourci. Éditez la Cible du raccourci en ajoutant "--verbose" à la fin de celle-ci. Par exemple `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

Après avoir ajouter la verbosité à votre jeu, cela devrait afficher toute erreur liée à vos avatars, sabres et chansons.
* Cela peut ne pas s'afficher 100 % du temps pour les avatars et les sabres, et vous aurez peut-être à supprimer tous vos avatars / sabres et les essayer un à un pour voir lequel casse votre jeu.

Ces messages sont également écrits dans `Beat Saber/Logs`.

Une liste des erreurs les plus fréquentes peut être trouvée [ici](./exceptions.md).

### Vérifier les fichiers du jeu sur Steam
Pour vérifier l'intégrité des fichiers du jeu, suivez ces étapes :
1. Assurez-vous que SteamVR est fermé, il ne vous laissera pas vérifier vos fichiers autrement.
2. Allez dans votre bibliothèque Steam et trouvez Beat Saber.
3. Faites un clic droit sur Beat Saber et cliquez sur Propriétés...
4. Allez dans l'onglet "Fichiers locaux" de la fenêtre des propriétés
5. Select the "Verify Integrity Of Game Files" option.
6. Laissez le finir la vérification et télécharger les fichiers manquants et ça devrait être bon.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI the steps are still the same.

### Installation propre
1. (Facultatif) Faites un backup du contenu personnalisé téléchargé en créant une copie des dossiers suivants :
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Supprimez la TOTALITÉ du dossier Beat Saber.** À la différence de la désinstallation du jeu, cette méthode supprime tout le contenu et pas uniquement les fichiers du jeu.
> Steam:     ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Réinstallez le jeu via Steam ou l'Oculus Store.
4. **Avant de le modder, lancez le jeu une fois**
5. Lancez Mod Assistant, installez vos mods et lancez le jeu.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Supprimer les sauvegardes dans AppData
Cela va supprimer vos scores et données locales, mais pas vos statistiques de classement personnalisé de ScoreSaber. Vous pouvez trouver le dossier à l'emplacement suivant :
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Dans votre explorateur de fichiers, copiez et collez le chemin ci-dessus dans la barre de navigation en haut et supprimez le dossier.

Vous pouvez aussi vous rendre dans ce dossier en affichant les éléments masqués et en naviguant vers :
> Utilisateurs > "VOTRE UTILISATEUR" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning ATTENTION Supprimer le dossier des données locales supprimera aussi vos scores locaux et statistiques de jeu. :::

#### Mesures désespérées
::: warning ATTENTION Désactiver votre antivirus comporte des risques de sécurité, soyez sûr de ce que vous faites (c'est-à-dire ne téléchargez pas et n'ouvrez pas de fichier suspect tant qu'il est désactivé) et n'oubliez pas de le réactiver dès que vous en avez terminé. :::
* Assurez-vous que l'utilisateur courant **est un administrateur**
* Désactivez votre antivirus (le temps d'un test), testez votre jeu, réactivez le
* Assurez-vous que vous avez la permission de créer des dossiers et éditer des fichiers sur votre disque / votre PC (nous avons eu des problèmes récemment causés par des mises à jour Windows)
* Assurez-vous que vos pilotes sont à jour.
* Vérifiez que le problème n'est pas lié à votre casque, ou votre système d'exploitation, ou votre matériel / vos logiciels
* Vérifiez votre connexion Internet, et que rien ne bloque ce qui est lié au Modding de Beat Saber, à Steam, etc.

## 5. J'ai encore des problèmes
Si cette page ne couvre les bases, n'hésitez pas à poser une question sur le Discord ! Pour augmenter vos chances d'avoir votre réponse, n'oubliez pas :
* Utilisez les bons canaux de discussion, `#pc-help` pour le support des mods sur PC et `#quest-help` pour le support des mods sur Quest. Posez vos questions sur `#pc-3d-modeling` et `#quest-3d-modeling` pour de l'aide sur la **création d'avatars, plateformes, notes ou sabres**, et `#mapping-discussion` pour les questions concernant la **création de niveaux.**
* Soyez poli et respectueux
* Décrivez votre problème en détail. "*It didn't work*" est aussi pertinent que dire à votre docteur que vous ne vous sentez pas bien. Qu'est-ce qui ne fonctionne pas, et qu'avez-vous essayé ? Y a-t-il des messages qui apparaissent sur l'écran ? Votre écran est-il devenu tout violet ?

::: tip NOTE Les personnes avec le rôle `Support` sont des bénévoles qui peuvent choisir de vous aider sur leur temps libre. Ce rôle est une reconnaissance du savoir et des efforts qu'ils ont fournis jusque là, mais ça ne veut pas nécessairement dire qu'ils sont disponibles pour aider juste parce qu'ils sont en ligne. :::

Merci !

> Merci à Saber-Chan pour son dur labeur sur cette page.
