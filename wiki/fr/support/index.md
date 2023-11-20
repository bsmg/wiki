---
prev: false
next: false
---

# Support

## Table des matières

0. [Mises à jour](#_0-mises-a-jour)
1. [Pas de mods ?](#_1-pas-de-mods)
2. [Problèmes en jeu après modding](#_2-problemes-en-jeu-apres-modding)
3. [Questions fréquentes](#_3-questions-frequentes)
4. [Dépannage divers](#_4-depannage-divers)
5. [J'ai encore des problèmes](#_5-j-ai-encore-des-problemes)

## 0. Mises à jour

Après une mise à jour, le salon `#modding-announcements` du Discord BSMG devrait avoir les instructions les plus récentes sur le statut des mods. Ce qui suit sont des instructions plus détaillées sur la procédure la plus courante.

### La mise à jour a cassé mes mods

**Lancez le jeu une fois** après la nouvelle mise à jour. Puis, réinstallez les mods en utilisant un installateur mentionné dans le [guide du Débutant](/fr/beginners-guide), tel que Mod Assistant.

## 1. Pas de mods ?

### Questions diverses

#### 1.1 Aucun mod n'apparaît sur une nouvelle installation du jeu

Premièrement, assurez-vous que ce qui suit est correct :

- **Vous avez lancé le jeu une première fois avant d'installer les mods**. BSIPA supprime tous les mods quand il est lancé pour la première fois sur une nouvelle installation pour éviter que les anciens mods cassés chargent avec la nouvelle version. Réinstallez encore les mods si c'est le cas.
- Steam / Oculus lance Beat Saber depuis la **même installation** où les mods sont placés. _exemple: les mods sont sur le disque D: mais Steam lance le jeu depuis le disque C:._ Indiquez le bon emplacement d'installation dans votre installateur favori.
- Si vous avez installé des mods à la main, assurez-vous que vous avez inclus tous les fichiers du téléchargement et les avez placés dans les dossiers appropriés, ainsi que leurs dépendances.

#### 1.2 J'avais des mods installés sur une ancienne version, mais rien ne charge après la mise à jour

Si les pré-requis détaillés dans la section 1.1 sont valides, essayez les solutions ci-dessous, en ordre descendant.

##### Solution 1

- Mettez à jour BSIPA à la dernière version (dans Mod Assistant ou manuellement)
- Allez dans votre dossier d'installation de Beat Saber
- Lancez `IPA.exe`

##### Solution 2 (Steam uniquement)

- [Vérifiez les fichiers du jeu](#verifier-les-fichiers-du-jeu-sur-steam)
- Mettez à jour BSIPA à la dernière version
- Allez dans votre dossier d'installation de Beat Saber
- Lancez `IPA.exe`

##### Solution 3

- Allez dans votre dossier Beat Saber
- Faites une sauvegarde du dossier `UserData` (facultatif)
- Supprimez le dossier `UserData`

::: warning ATTENTION
Ceci va réinitialiser les paramètres de vos mods !
:::

##### Solution 4

- Réalisez une [réinstallation propre](#installation-propre)

#### 1.2 Mod Assistant ne semble pas installer les mods

Les installateurs téléchargent les mods dans `Beat Saber/IPA/Pending`, BSIPA déplace ces fichiers à la racine du dossier quand vous lancez le jeu. Si votre dossier `Plugins` est toujours vide, lancez `IPA.exe` une nouvelle fois pour vous assurer que rien ne l'empêche de s'exécuter, par exemple un antivirus, des permissions d'administrateur, etc.

## 2. Problèmes en jeu après modding

### Le jeu ne se lance pas

#### 2.1 Erreur GetThreadContext Failed

Si une fenêtre s'affiche disant `GetThreadContext Failed` et / ou vous entendez un son d'erreur de Windows, il se peut que vous ayez un logiciel sur votre PC qui casse les mods Beat Saber. De nombreux logiciel d'anti-triche tiers comme ESEA et FaceIt rendent BSIPA inopérant pour appliquer les mods à Beat Saber, même lorsqu'ils ne sont pas lancés. Certains logiciels d'antivirus semblent agir de manière similaire.

Pour résoudre ce problème :

1. Désinstallez le logiciel d'anti-cheat.
2. Redémarrez votre PC.
3. Vérifiez s'il reste des morceaux du logiciel dans vos dossiers dans `AppData`.
4. Lancez le jeu. Si le problème persiste, vous pouvez tenter ce qui suit : `Note supplémentaire : Le problème peut persister pour cause de manque de permissions ou d'exceptions, tout programme qui peut bloquer BSIPA, ou les programmes marqués comme suspects peuvent mener à ce problème.` Steam : [Vérifiez les fichiers du jeu](#verifier-les-fichiers-du-jeu-sur-steam) Oculus : Réalisez une [réinstallation propre](#installation-propre)

Ceci devrait réparer le problème.

#### 2.2 Gel du jeu au démarrage

Si le jeu est gelé sur l'écran _Health and Safety_, ou vous voyez un avatar en T-pose sans contrôle sur le jeu, [vérifiez vos fichiers](#verifier-les-fichiers-du-jeu-sur-steam) si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus. Référez-vous à la section sur la [réinstallation propre](#installation-propre).

Il semble que cela se produit lors en mettant à jour Beat Saber avec des mods précédemment installés, mais pas aux utilisateurs avec des installations propres du jeu.

### Problèmes de performance

#### 2.3 Le jeu ralentit beaucoup après avoir installé les mods

Si le jeu est si ralenti (_lag_) que vous pouvez à peine cliquer sur le bouton `Continue` sur l'écran _Health & Safety_, vérifiez vos fichiers si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus. Faites de même s'il ne démarre pas du tout et vous affiche des messages d'erreur quand vous essayez de lancer le jeu.

Si le problème n'est pas résolu, consultez la section [2.4 Améliorer la fréquence d'images (FPS)](#_2-4-ameliorer-la-frequence-d-images-fps).

#### 2.4 Améliorer la fréquence d'images (FPS)

Si la [section 2.3](#_2-3-le-jeu-ralentit-beaucoup-apres-avoir-installe-les-mods) n'a pas amélioré les performances, alors votre PC peut tout simplement ne pas être assez performant pour tenir le coup avec les mods. Voici quelques propositions que vous pouvez tenter pour améliorer les performances, sans ordre particulier :

- Vérifiez si NVIDIA GeForce Experience a défini l'échelle de rendu pour Beat Saber au delà de la valeur par défaut de 1.0. Il est possible qu'il aie défini une valeur plus élevée telle que 1.4 ou 1.8, qui augmente considérablement la charge GPU.
- Utilisez un avatar personnalisé moins complexe.
- Les sabres personnalisés **Plasma Katanas** ont de nombreux évènements personnalisés et sont connus pour créer du lag en cas de note ratée.
- Camera2/CameraPlus peuvent être très gourmands en ressources, en particulier si vous avez plusieurs caméras ou agrandissez le champ de vision (ou FOV).
- Baissez l'échelle de rendu (Render Scale), l'anticrénelage (Anti-Aliasing), le miroir (Mirror), le brouillard (Smoke) dans les paramètres de base du jeu.
- Pour les joueurs Oculus Rift CV1 : pensez à utiliser 2 capteurs au lieu de 3 ou plus.
- Réduisez votre nombre de mods et de chansons.
- Réalisez une [réinstallation propre](#installation-propre) du jeu.
- De faibles performances peuvent aussi être causées par quelque chose qui ne va pas dans le dossier des données d'application. Pour y remédier, référez vous à [comment supprimer le dossier BeatSaber dans votre AppData](#supprimer-les-sauvegardes-dans-appdata).
- Désactivez des compteurs Counters+ tels que Score Counter et Swing Speed, car ils peuvent être gourmands en ressources.
- HTTPStatus et DataPuller peuvent créer des saccades. Testez le jeu sans ce mod pour voir si les pics de ralentissement disparaissent.

La réalité virtuelle est très gourmande en processeur (CPU), surtout si vous ajoutez des mods. Si vous avez du mal à faire fonctionner le jeu avec les mods que vous voulez utiliser, pensez à améliorer votre matériel. Notez que Beat Saber n'utilise que peu de ressources graphiques (GPU) puisqu'il s'agit d'un jeu aux graphismes particulièrement simples.

## 3. Questions fréquentes

### Divers

#### 3.1 Menu vide, pas de bouton

Si le menu principal de votre jeu est vide, votre fichier de sauvegarde est probablement corrompu. Pour résoudre ce problème, référez-vous à [comment supprimer le dossier Beatsaber dans votre AppData](#supprimer-les-sauvegardes-dans-appdata).

:::warning ATTENTION
Cela va supprimer tous vos scores locaux ainsi que vos statistiques de jeu.
:::

#### 3.2 Comment utiliser le mod `x` ?

Si vous utilisez Mod Assistant ou BSManager, cliquez sur le mod puis sur le bouton "Mod Info"/"Plus d'info". [BeatMods](http://beatmods.com) a également un bouton "More Info" sur chaque mod.

#### 3.3 Problèmes de vibration

Le mod Gameplay Modifiers Plus avait une option permettant d'activer ou désactiver les vibrations des contrôleurs. Si vous l'aviez désactivé puis que vous avez supprimé le mod, vous devez modifier le fichier de sauvegarde manuellement. Ouvrez `%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` et définissez le paramètre `controllersRumbleEnabled` à `true`.

Si ceci n'est pas la cause de vos problèmes de vibration et si ce qui suit est correct concernant les vibrations :

- les tremblements sont faibles
- il n'y a pas de vibration quand vous tapez un ensemble de blocs
- il y a un léger délai quand vous faites rencontrer les sabres
- vous utilisez les contrôleurs Oculus Touch

Dans ce cas, il y a des chances que Beat Saber surcharge le contrôleur USB de votre carte mère. Oculus dévore la bande passante des contrôleurs USB et la plupart des cartes mères sont fournies avec un contrôleur bon marché. Beat Saber le pousse plus loin que les autres jeux, ce qui explique pourquoi il y a pas de problème dans les menus ainsi que d'autres jeux. Il n'y a pas de solution miracle, donc essayez les propositions suivantes :

- Essayez de connecter le casque et les capteurs sur d'autres ports USB
- Débranchez les appareils USB non essentiels
- Achetez un hub USB PCI-E
- Utilisez `-vrmode oculus` si vous utilisez SteamVR pour le contourner et utiliser le SDK Oculus directement

### Avatars personnalisés

#### 3.4 Les avatars personnalisés ne s'affichent pas en jeu

Appuyez sur le bouton **Origine** de votre clavier avec la fenêtre du jeu en premier-plan pour activer la visibilité dans le casque.

#### 3.5 Mes avatars sont cassés

Assurez-vous que le mod Custom Avatars est correctement installé est à jour, idem pour ses dépendances. Vous avez peut-être corrompu / cassé un avatar, avoir un avatar inutilisable peut rendre les autres inutilisables de la même manière que les chansons et les sabres.

### Musiques personnalisées

#### 3.6 Mes chansons ne s'affichent pas

Assurez-vous que vos chansons sont dans votre dossier `CustomLevels`, situé dans `Beat Saber/Beat Saber_Data/`. C'est ici que le jeu lit nativement les chansons personnalisées.

**Ne placez pas** les chansons dans l'ancien dossier `Beat Saber/CustomSongs`. Cet emplacement est déprécié car le format des les chansons personnalisées a changé. Si vous avez des chansons dans l'ancien format (fichiers `.json` et `.ogg` au lieu de `.dat` et `.egg`), laissez-les dans l'ancien dossier `Beat Saber/CustomSongs`. Vous devrez les retélécharger depuis BeatSaver.

Alternativement, vous pouvez manuellement les convertir en utilisant [Song Converter](https://github.com/lolPants/songe-converter), mais vous n'obtiendrez aucune aide en suivant cette méthode, et vous devrez compiler le programme vous-même.

#### 3.7 Bouton Play/Jouer grisé

Cliquez sur le point d'interrogation (?) bleu dans le coin en haut à droite. Cela devrait vous indiquer quels mods sont nécessaires pour jouer la chanson, ceux que vous n'avez pas et que vous devrez installer. Si cela ne fonctionne toujours pas, essayez de réinstaller les mods nécessaires. Sinon, essayez une [réinstallation propre](#installation-propre).

#### 3.8 Les détails de la map chargent indéfiniment

Si cela ne se produit que sur certaines maps, vous n'avez peut-être pas les mods nécessaires, ou cette map peut être corrompue. Si cela se produit sur toutes vos maps, supprimez votre dossier `Plugins` et réinstallez vos mods.

### CameraPlus

#### 3.9 Camera Plus ne fonctionne pas / après l'écran Santé

Assurez-vous que l'option "Smooth Camera" (Caméra lisse) du jeu de base est désactivée. Si cela ne fonctionne pas, essayez de réinstaller CameraPlus et ses dépendances.

#### 3.10 Ma vue sur le PC ne prend qu'une petite portion de l'écran

Votre affichage CameraPlus ne remplit pas votre écran. Tirez les coins de l'affichage pour l'agrandir, ou cliquez droit sur celui-ci et sélectionnez "Fit To Canvas" (Agrandir à l'écran).

### BeatSaver Downloader

#### 3.11 Le bouton More Songs de BeatSaver Downloader

**Le bouton More Songs est placé dans le menu principal à gauche sous le texte Mods.** Si ce bouton est grisé, vérifiez que toutes vos chansons sont chargées à l'aide de la barre de progression arc-en-ciel visible sur le menu principal. Si votre menu Mods n'est pas là, assurez-vous que vos extensions et dépendances fonctionnent et sont correctement installées, référez-vous à la section [Pas de mods ?](#_1-pas-de-mods).

#### 3.12 Rien n'apparaît dans le menu More Songs

BeatSaver Downloader peut ne pas fonctionner pour plusieurs raisons :

1. assurez-vous que vos chansons sont chargées, sinon le bouton _More Songs_ sera grisé,
2. votre antivirus ou pare-feu bloque l'accès à BeatSaver,
3. vous avez atteint les limites d'utilisation de BeatSaver et devez attendre avant de réessayer.

### Codes d'erreur multijoueur

Voici la liste des codes d'erreurs connus, ce qu'ils représentent, et ce que vous pouvez faire :

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->

| Code&nbsp; | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CFR-1      | Une erreur inconnue s'est produite. Essayez de redémarrer le jeu.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| CFR-2      | La connexion au multijoueur a été annulée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CFR-3      | Le serveur est inatteignable. Il peut y avoir un problème avec votre connexion internet ou avec les serveurs relais de Beat Saber. Vérifiez que vous n'êtes pas hors ligne et que votre pare-feu permet à Beat Saber de se connecter à internet. <details><summary>**Informations supplémentaires**</summary>Le mode multijoueur de Beat Saber fonctionne en pair à pair : vous vous connectez directement à chaque joueur dans le salon multijoueur. Lorsque cela n'est pas possible, Beat Saber ouvre un serveur "relais" auquel envoyer les données. Cette erreur signifie que ces deux méthodes ont échoué.</details> &nbsp; Cette erreur peut également survenir si vous utilisez des emojis ou autres caractères spéciaux dans votre nom d'utilisateur. |
| CFR-4      | Le serveur existe déjà.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CFR-5      | Le serveur n'existe pas. Il est possible que le salon multijoueur auquel vous essayiez de vous connecter a été fermé pendant que vous vous connectiez.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| CFR-6      | Le serveur est plein. Choisissez un salon multijoueur différent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-7      | Vous êtes sur une version du jeu qui n'est pas compatible avec les serveurs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CFR-8      | Le mot de passe du salon multijoueur est incorrect. Vérifiez que vous entrez le bon mot de passe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| CFR-9      | Les serveurs de matchmaking de Beat Games, qui permettent de gérer les salons multijoueur publics et privés, sont hors ligne. Réessayez plus tard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFR-10     | Votre clé de session Steam ou Oculus est invalide. Si vous jouez sur Quest et avez moddé votre jeu, allez voir [ici](/fr/faq/#est-ce-que-le-multijoueur-est-multiplateforme) pour contourner le problème. Sinon, vous êtes sur une version piratée du jeu, qui n'est pas prise en charge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| CFR-11     | Vous ne semblez pas être connecté à internet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

<!-- markdownlint-enable MD013 -->

## 4. Dépannage divers

### Comprendre les logs

Si vous êtes sur Steam vous pouvez vous rendre dans :

> Beat Saber > Propriétés... > Général > Écrivez `--verbose` dans la zone de texte sous "Options de lancement"

Si vous êtes sur Oculus, faites un clic droit sur Beat Saber.exe et créez un raccourci. Modifiez la Cible pour ajouter `--verbose` à la fin, par exemple : `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

Après avoir ajouté cette option, une fenêtre de console devrait idéalement afficher les erreurs liées à vos avatars, sabres et chansons.

- Il y a des chances que cela ne s'affiche pas pour les avatars et les sabres. Dans ce cas, vous aurez besoin de retirer l'intégralité de vos avatars/sabres et de les réinsérer un à un pour déterminer la source du problème.

Ces messages sont également écrits dans `Beat Saber/Logs`.

Une liste des erreurs les plus fréquentes peut être trouvée [ici](./exceptions.md) (en anglais).

### Vérifier les fichiers du jeu sur Steam

Pour vérifier l'intégrité des fichiers du jeu, suivez ces étapes :

1. Assurez-vous que SteamVR est fermé, il ne vous laissera pas vérifier vos fichiers autrement.
2. Allez dans votre bibliothèque Steam et trouvez Beat Saber.
3. Faites un clic droit sur Beat Saber et cliquez sur Propriétés...
4. Allez dans l'onglet "Fichiers locaux" de la fenêtre des propriétés
5. Sélectionnez l'option "Vérifier l'intégrité des fichiers du jeu..."
6. Laissez le finir la vérification et télécharger les fichiers manquants et ça devrait être bon.

Voici [un court guide vidéo (texte en anglais)](https://www.youtube.com/watch?v=EBFfT4-ZiIc) - bien que ça soit l'ancienne interface de Steam, les étapes restent identiques.

### Installation propre

1. (Facultatif) Faites une sauvegarde du contenu personnalisé téléchargé en créant une copie des dossiers suivants :

- `Beat Saber\Beat Saber_Data\CustomLevels`
- `Beat Saber\CustomSabers`
- `Beat Saber\CustomPlatforms`
- `Beat Saber\CustomNotes`
- `Beat Saber\CustomAvatars`

2. **Supprimez la TOTALITÉ du dossier Beat Saber.** À la différence de la désinstallation du jeu, cette méthode supprime tout le contenu et pas uniquement les fichiers du jeu.

> Steam: `` \steamapps\common\Beat Saber\`
  Oculus: ``\hyperbolic-magnetism-beat-saber\`

3. Réinstallez le jeu via Steam ou l'Oculus Store.
4. **Avant de le modder, lancez le jeu une fois**
5. Lancez Mod Assistant ou BSManager, installez vos mods et lancez le jeu.

(Facultatif) Si vous voulez aller plus loin dans la démarche, référez-vous à : [Supprimer le dossier BeatSaber dans AppData](#supprimer-les-sauvegardes-dans-appdata)

### Supprimer les sauvegardes dans AppData

Cela va supprimer vos scores et données locales, mais pas vos statistiques ni vos classements sur ScoreSaber. Vous pouvez trouver le dossier à l'emplacement suivant :

> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Dans votre explorateur de fichiers, copiez et collez le chemin ci-dessus dans la barre de navigation en haut et supprimez le dossier.

Vous pouvez aussi vous rendre dans ce dossier en affichant les éléments masqués et en naviguant vers :

> Utilisateurs > "VOTRE UTILISATEUR" > AppData > LocalLow > Hyperbolic Magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning ATTENTION
Supprimer le dossier de AppData supprimera aussi vos scores locaux et statistiques de jeu.
:::

#### Mesures désespérées

::: warning ATTENTION
Désactiver votre antivirus comporte des risques de sécurité, soyez sûr de ce que vous faites (c'est-à-dire ne téléchargez pas et n'ouvrez pas de fichier suspect tant qu'il est désactivé) et n'oubliez pas de le réactiver dès que vous en avez terminé.
:::

- Assurez-vous que l'utilisateur courant **est un administrateur**
- Désactivez votre antivirus (le temps d'un test), testez votre jeu, réactivez le
- Assurez-vous que vous avez la permission de créer des dossiers et d'éditer des fichiers sur votre disque / votre PC (nous avons eu des problèmes récemment causés par des mises à jour Windows)
- Assurez-vous que vos pilotes sont à jour.
- Vérifiez que le problème n'est pas lié à votre casque, ou votre système d'exploitation, ou votre matériel / vos logiciels
- Vérifiez votre connexion Internet, et que rien ne bloque ce qui est lié au Modding de Beat Saber, à Steam, etc.

## 5. J'ai encore des problèmes

Si cette page ne couvre les bases, n'hésitez pas à poser une question sur le Discord ! Pour augmenter vos chances d'avoir votre réponse, n'oubliez pas ceci :

- Utilisez les bons salons de discussion, `#pc-help` pour le support des mods sur PC et `#quest-help` pour le support des mods sur Quest. Posez vos questions sur `#pc-3d-modeling` et `#quest-3d-modeling` pour de l'aide sur la **création d'avatars, plateformes, notes ou sabres**, et `#mapping-discussion` pour les questions concernant la **création de niveaux.**
- Soyez poli et respectueux
- Décrivez votre problème en détail. "_It didn't work_" est aussi pertinent que dire à votre docteur que vous ne vous sentez pas bien. Qu'est-ce qui ne fonctionne pas, et qu'avez-vous essayé ? Y a-t-il des messages qui apparaissent sur l'écran ? Votre écran est-il devenu tout violet ?

::: tip NOTE
Les personnes avec le rôle `Support` sont des bénévoles qui peuvent choisir de vous aider sur leur temps libre. Ce rôle est une reconnaissance de la connaissance et des efforts qu'ils ont fournis jusque là, mais ça ne veut pas nécessairement dire qu'ils sont disponibles pour aider juste parce qu'ils sont en ligne.
:::

Merci à Saber-Chan pour son dur labeur sur cette page.
