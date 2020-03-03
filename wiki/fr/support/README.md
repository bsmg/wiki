---
sidebar: auto
---
# Support
## Table des matières
0. [Importantes notes](#0-mises-a-jour)
1. [Problèmes d'installateur](#1-pas-de-mods)
2. [Problèmes en jeu](#2-problemes-en-jeu-apres-modding)
3. [Questions fréquentes](#3-questions-frequentes)
4. [Dépannage divers](#4-depannage-divers)
5. [J'ai encore des problèmes](#5-j-ai-encore-des-problemes)

## 0. Mises à jour
Après une mise à jour, le canal Discord BSMG `#server-annoucements` devrait avoir les dernières instructions à jour sur le statut des mods. Ce qui suit permet 
After an update, the BSMG discord `#server-announcements` channel should have the most up to date instructions on the status of mods. The following are more detailed instructions of the most common procedure.

#### La mise à jour a cassé mes mods
**Lancez le jeu une fois** après la nouvelle mise à jour. Puis, réinstallez les mods en utilisant un installateur mentionné dans le [guide du Débutant](/fr/beginners-guide), de préférence Mod Assistant.

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
- [Vérifiez vos fichiers du jeu](#verifier-les-fichiers-du-jeu-sur-steam) (Steam seulement, référez-vous à la solution 4 si vous utilisez Oculus)
- Mettez à jour BSIPA à la dernière version
- Allez dans votre dossier d'installation de Beat Saber
- Lancez `IPA.exe`

**Solution 3.**
- Allez dans votre dossier Beat Saber
- Faites un backup du dossier `UserData` (optional)
- Supprimer le dossier `UserData`

::: warning
Cela va réinitialiser vos paramètres d'extensions !
:::

**Solution 4.**
- Réalisez une [réinstallation complète](#installation-propre)

#### 1.3 Mod Assistant ne semble pas installer d'extension
Les installateurs téléchargent les mods dans `Beat Saber/IPA/Pending`, BSIPA déplace ces fichiers à la racine du dossier quand vous lancez le jeu. Si votre dossier `Plugins` est toujours vide après, lancez `IPA.exe` une nouvelle fois pour vous assurer que rien ne l'empêche de s'exécuter, par exemple un antivirus, des permissions d'administrateur, etc.

## 2. Problèmes en jeu après modding
### Le jeu ne se lance pas

#### 2.1 Erreur GetThreadContext Failed
Si une fenêtre s'affiche disant `GetThreadContext Failed` et / ou vous entendez un son d'erreur de Windows, il se peut que vous ayez un logiciel sur votre PC qui casse les mods Beat Saber. De nombreux logiciel d'anti-cheat tiers comme ESEA et FaceIt rendent BSIPA inopérant pour appliquer les mods à Beat Saber, même lorsqu'ils ne sont pas lancés. Certains logiciels d'antivirus semblent agir de manière similaire.

Pour résoudre ce problème :
1. Désinstallez le logiciel d'anti-cheat.
2. Redémarrez votre PC.
3. Vérifiez s'il reste des pièces du logiciel dans vos dossiers dans `AppData`.
4. Lancez le jeu.
Si le problème persiste, vous pouvez tenter ce qui suit :
`Note supplémentaire : Le problème peut persister pour cause de manque de permissions ou d'exceptions, tout programme qui peut bloquer BSIPA, ou les programmes marqués comme suspects peuvent mener à ce problème.`
Steam : [Vérifiez les fichiers du jeu](#verifier-les-fichiers-du-jeu-sur-steam)
Oculus : Réalisez une [réinstallation complète](#installation-propre)

Ceci devrait réparer le problème.

#### 2.2 Gel du jeu au démarrage
Si le jeu est gelé sur l'écran *Health and Safety*, ou vous voyez un avatar en T-pose sans contrôle sur le jeu, [vérifiez vos fichiers](#verifier-les-fichiers-du-jeu-sur-steam) si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus. Référez vous à la [réinstallation complète](#installation-propre).
Cela semble survenir quand Beat Saber est mis à jour et que des mods ont été installés précédemment, mais pas aux utilisateurs avec une installation propre du jeu.

### Problèmes de FPS
#### 2.3 Le jeu ralentit beaucoup après avoir installé les mods
Si le jeu est si ralenti (*lag*) que vous pouvez à peine cliquer sur le bouton `Continue` sur l'écran *Health and Safety*, vérifiez vos fichiers si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus.
Faites de même s'il ne démarre pas du tout et vous affiche des messages d'erreur quand vous essayez de lancer le jeu.

Si le problème n'a pas été résolu, essayez la section 2.4.

#### 2.4 Améliorer la fréquence d'images (FPS)
Si la section 2.3 n'a pas amélioré la fréquence d'images, alors votre PC peut simplement avoir du mal à tenir la charge des mods. Voici quelques propositions que vous pouvez tenter pour améliorer votre fréquence d'affichage, sans ordre particulier :

**NVIDIA GEFORCE EXPERIENCE OPTIMISE DÉSORMAIS BEAT SABER, IL PARAMÈTRE LE RENDU À L'ÉCHELLE (SCALE RENDERING) DU JEU AU-DELÀ DE 1.0 (PAR DÉFAUT), GÉNÉRALEMENT À 1.4 OU 1.8. ÇA A ÉTÉ LA RAISON PRINCIPALE DES LAGS CES DERNIERS TEMPS.**

* Utilisez un avatar personnalisé moins complexe.
* Le sabre personnalisé **Plasma Katanas** a des tas d'évènements personnalisés et est connu pour créer du lag si vous l'avez loupé.
* CameraPlus peut être très gourmand, en particulier si vous avez de nombreuses caméras et un champ de vision (FOV) augmenté.
* Désactivez le rendu à l'échelle (Render Scale), l'anti-aliasing, le miroir (Mirror), le brouillard (Fog) dans les paramètres du jeu de base.
* Pour les joueurs sur Oculus Rift : essayez de n'utiliser que 2 capteurs plutôt que 3 ou plus.
* Réduisez votre nombre de mods et de musiques. 
* Réalisez une [réinstallation complète](#installation-propre) des fichiers du jeu.
* Une fréquence d'images basse peut aussi être causée par quelque chose qui ne va pas dans le dossier des données d'application, pour y remédier référez vous à [comment supprimer le dossier Beatsaber dans votre AppData](#supprimer-les-sauvegardes-dans-appdata).
* Les compteurs de CounterPlus comme ScoreCounter et SwingSpeed peuvent être gourmands en ressources. [Rendez-vous sur cette page du wiki sur la performance de Counters+](https://github.com/Caeden117/CountersPlus/wiki/Performance-and-Optimization) (en anglais).
* Le mod HTTPStatus peut causer des pics de ralentissement (*lag spikes*). Testez le jeu sans ce mod pour voir si les pics de ralentissement disparaissent.

La réalité virtuelle est très consommatrice des ressources du processeur (CPU), surtout si vous y ajoutez des mods. Si vous vous battez pour lancerle jeu avec les mods que vous voulez, essayez de mettre à niveau votre matériel.
Notez que Beat Saber n'utilise que très peu les ressources de la carte graphique (GPU), puisqu'il s'agit visuellement d'un jeu plutôt simple.

## 3. Questions fréquentes
#### 3.1 Menu vide, pas de bouton
Si la fenêtre principale de votre est vide, vore fichier de sauvegarde est probablement corrompu.
Pour pallier ce problème, référez-vous à [comment supprimer le dossier Beatsaber dans votre AppData](#supprimer-les-sauvegardes-dans-appdata).

::: warning
Cela va supprimer vos scores locaux et vos statistiques.
:::

#### 3.2 Comment utiliser `x` mod ?
Si vous utilisez Mod Assistant, cliquez sur le mod puis sur le bouton "Mod Info". https://beatmods.com a également un bouton "More Info" pour chaque mod.

#### 3.3 Problèmes de vibration
Le mod Gameplay Modifiers Plus ajoute le moyen d'activer / désactiver les vibrations des contrôleurs. Si vous l'avez désactivé puis que vous avez supprimé le od, vous devrez modifier le fichier de configuration manuellement. Ouvrez `%appdata%/../locallow/hyperbolic magnetism/beat saber` et placez le paramètre `controllerRumbleEnabled` à `true`.

Si ce n'est pas la cause de vos problèmes de vibration et si ce qui suit est bon concernant les tremblements :
* les tremblements sont faibles
* il n'y a pas de vibration quand vous tapez un ensemble de blocs
* il y a un léger délai quand vous faites rencontrer les sabres
* vous utilisez les contrôleurs Oculus Touch

Dans ce cas il y a de bonnes chances que Beat Saber surcharge le contrôleur USB de votre carte mère. Oculus dévore la capacité des contrôleurs USB et la plupart des cartes mères sont fournies avec un contrôleur bon marché. Beat Saber pousse le bouchon plus loin que les autres jeux, ce qui explique pourquoi c'est OK avec d'autres jeux et dans les menus. Même s'il n'y a pas de solution miracle, essayez les propositions suivantes :
* Changez les câbles USB du casque et des capteurs sur différents ports
* Débranchez les appareils USB non nécessaires
* Achetez un hub USB PCI-E
* Utilisez `-vrmode oculus` si vous utilisez SteamVR pour éviter son utilisation et utiliser le SDK Oculus directement à la place

### Avatars personnalisés
#### 3.4 Les avatars personnalisés ne s'affichent pas en jeu
Appuyez sur le bouton **Home** de votre clavier avec la fenêtre du jeu en premier-plan pour activer la visibilité dans le casque.

#### 3.5 Mes avatars sont cassés
Assurez-vous que l'extension Custom Avatar est correctement installée et mise à jour, et idem pour les dépendances.
Vous avez peut-être corrompu / cassé un avatar, avoir un avatar inutilisable peut rendre les autres inutilisables de la même manière que les musiques et les sabres. Référez-vous à [comment trouver les contenus cassés](#4-2-finding-broken-content) si vous pensez avoir des avatars corrompus ou si vous avez vérifié que vos mods et dépendances sont mises à jour mais les avatars ne fonctionnent toujours pas.

### Musiques personnalisées

#### 3.6 Mes musiques ne s'affichent pas
Assurez-vous que vos musiques sont dans votre dossier `CustomLevels`, positionné dans `Beat Saber/ Beat Saber_Data/`. C'est ici que le jeu lit nativment les musiques personnalisées.

**Ne placez pas** les musiques dans l'ancien dossier `Beat Saber/CustomSongs`. Cet emplacement est déprécié car le format des les musiques personnalisées a changé. Si vous avez des maps dans l'ancien format (fichiers `.json` et `.ogg` au lieu de `.dat` et `.egg`), convertissez-les d'abord en utilisant [Songe Converter](https://github.com/lolPants/songe-converter).

#### 3.6 Bouton Play rouge
Cliquez sur le point d'interrogation (?) rouge dans le coin en haut à droite. Cela devrait vous afficher quels mods sont nécessaires pour jouer la musique, et qui manquent.
Essayez de réinstaller l'extension une nouvelle fois, si ça ne fonctionne pas [réinstallez le jeu](#installation-propre).

#### 3.7 Les caractéristiques de la map chargent indéfiniment
Si cela n'apparaît que sur des maps en particuliers, les fichiers de la musique sont sûrement cassés. Si cela arrive pour toutes vos maps, supprimez votre dossier `Plugins` et réinstallez les extensions.

### Camera Plus
#### 3.8 Camera Plus ne fonctionne pas
Assurez-vous que le paramètre pour "*Smooth Camera*" est désactivé dans les paramètres de votre jeu de base. Si cela ne fonctionne pas, vérifiez que vous avez le mod correctement installé, essayez de le réinstaller ainsi que toutes ses dépendances.

#### 3.9 Ma vue sur le PC ne prend qu'une petite portion de l'écran
Votre affichage CameraPlus ne remplit pas votre écran. Tirez les coins de la fenêtre pour l'agrandir, ou bien faites un clic droit sur la fenêtre et cliquer sur "*Fit to Canvas*".

### Beatsaver Downloader
#### 3.10 Le bouton *More Songs* de Beatsaver Downloader
**Le bouton *More Songs* est positionné dans le bouton Mods dans le menu principal**. Si le bouton *More Songs* est grisé, vérifiez que toutes vos musiques sont chargées préalablement, comme présenté dans la barre au-dessus du menu principal.
Si votre bouton Mods n'y est pas, assurez-vous que vos extensions et dépendances fonctionnent et sont correctement installées, référez-vous à la section 1.1.

#### 3.11 Rien n'apparaît dans le menu *More Songs*
Les potentielles causes d'échec de BeatSaver Downloader sont :
1. Assurez-vous que toutes vos musiques ont chargé préalabement, autrement le bouton *More Songs* sera grisé.
2. Votre antivirus ou pare-feu bloque l'accès à BeatSaver.

## 4. Dépannage divers
### Comprendre les logs
Si vous êtes sur Steam vous pouvez vous rendre dans :
>Beat Saber > Propriétés... > Définir les options de lancement... > Écrivez `--verbose` dans le champ de texte qui apparaît.

Si vous êtes sur Oculus, faites un clic droit sur Beat Saber.exe et créez un raccourci. Éditez la Cible du raccourci en ajoutant "--verbose" à la fin de celle-ci.
Par exemple `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

Après avoir ajouter la verbosité à votre jeu, cela devrait afficher toute erreur liée à vos avatars, sabres et musiques.
* Cela peut ne pas s'afficher 100 % du temps pour les avatars et les sabres, et vous aurez peut-être à supprimer tous vos avatars / sabres et les essayer un à un pour voir lequel casse votre jeu.

Ces messages sont également écrits dans `Beat Saber/Logs`.

Une liste des erreurs les plus fréquentes peut être trouvée [ici](https://bsmg.wiki/support/exceptions) (en anglais).

### Vérifier les fichiers du jeu sur Steam
Pour vérifier les fichiers de votre jeu sur Steam, suivez ces étapes :
1. Assurez-vous que SteamVR est fermé, il ne vous laissera pas vérifier vos fichiers autrement.
2. Allez dans votre bibliothèque Steam et trouvez Beat Saber.
3. Faites un clic droit sur Beat Saber et cliquez sur Propriétés...
4. Allez dans l'onglet "Fichiers locaux" de la fenêtre des propriétés
5. Sélectionnez la dernière option "Vérifier l'intégrité des fichiers du jeu..."
6. Laissez le finir la vérification et télécharger les fichiers manquants et ça devrait être bon.

<YouTube url='https://www.youtube.com/watch?v=EBFfT4-ZiIc' />

### Installation propre
1. (Facultatif) Faites un backup du contenu personnalisé téléchargé en créant une copie des dossiers suivants :
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Supprimez la TOTALITÉ du dossier Beat Saber.** À la différence de la désinstallation du jeu, cette méthode supprime tout le contenu et pas uniquement les fichiers du jeu.
>Steam: 	`\steamapps\common\Beat Saber\`
>Oculus: 	`\hyperbolic-magnetism-beat-saber\`

3. Réinstallez le jeu via Steam ou l'Oculus Store.
4. **Avant de le modder, lancez le jeu une fois** 
5. Lancez Mod Assistant, installez vos mods et lancez le jeu.

(Facultatif) Si vous souhaitez approfondir la réinstallation, référez-vous à la [section suivante](#supprimer-les-sauvegardes-dans-appdata).

### Supprimer les sauvegardes dans AppData
Cela va supprimer vos scores et données locales, mais pas vos statistiques de classement personnalisé de ScoreSaber. Vous pouvez trouver le dossier à l'emplacement suivant :
>`%appdata%/../locallow/hyperbolic magnetism/beat saber`

Dans votre explorateur de fichiers, copiez et collez le chemin ci-dessus dans la barre de navigation en haut et supprimez le dossier.

Vous pouvez aussi vous rendre dans ce dossier en affichant les éléments masqués et en naviguant vers :
>Utilisateurs > "VOTRE UTILISATEUR" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Supprimer le dossier des données locales supprimera aussi vos scores locaux et statistiques de jeu.
:::

#### Mesures désespérées

::: warning
Désactiver votre antivirus comporte des risques de sécurité, soyez sûr de ce que vous faites et n'oubliez pas de le réactiver dès que vous en avez terminé.
:::

* Assurez-vous que l'utilisateur courant **est un administrateur**
* Désactivez votre antivirus (le temps d'un test), testez votre jeu, réactivez le
* Assurez-vous que vous avez la permission de créer des dossiers et éditer des fichiers sur votre disque / votre PC (nous avons eu des problèmes récemment causés par des mises à jour Windows)
* Assurez-vous que vos pilotes sont à jour.
* Vérifiez que le problème n'est pas lié à votre casque, ou votre système d'exploitation, ou votre matériel / vos logiciels
* Vérifiez votre connexion Internet, et que rien ne bloque ce qui est lié au Modding de Beat Saber, à Steam, etc.

## 5. J'ai encore des problèmes
Si cette page ne couvre les bases, n'hésitez pas à poser une question sur le Discord ! Pour augmenter vos chances d'avoir votre réponse, n'oubliez pas :
* Utilisez les bons canaux de discussion, plus particulièrement l'un des 2 canaux `#support` pour le dépannage des mods. Utilisez `#model-discussion` pour les questions sur **comment créer ses propres avatars, plateformes, notes ou sabres**, et `#mapping-discussion` pour les questions sur **la création de maps.**
* Soyez poli et respectueux
* Décrivez votre problème en détail. "*It didn't work*" est aussi pertinent que dire à votre docteur que vous ne vous sentez pas bien. Qu'est-ce qui ne fonctionne pas, et qu'avez-vous essayé ? Y a-t-il des messages qui apparaissent sur l'écran ? Votre écran est-il devenu tout violet ?

::: tip NOTE
Les personnes avec le rôle `Support` sont des bénévoles qui peuvent choisir de vous aider sur leur temps libre. Ce rôle est une reconnaissance de la connaissance et les efforts qu'ils ont fournis jusque là, mais ça ne veut pas nécessairement dire qu'ils sont disponibles pour aider juste parce qu'ils sont en ligne.
:::

Merci !

> Merci à Saber-Chan pour son dur labeur sur cette page.
