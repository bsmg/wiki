---
sidebar: auto
---

# Support

## Table des matières

0. [Mises à jour](#0-mises-a-jour)
1. [Pas de mods ?](#1-pas-de-mods)
2. [Problèmes en jeu après modding](#2-problemes-en-jeu-apres-modding)
3. [Questions fréquentes](#3-questions-frequentes)
4. [Dépannage divers](#4-depannage-divers)
5. [J'ai encore des problèmes](#5-j-ai-encore-des-problemes)

## 0. Mises à jour
After an update, the BSMG discord [#modding-announcements](https://discord.com/channels/441805394323439646/612468002243477505) channel should have the most up to date information on the status of mods. Ce qui suit sont des instructions plus détaillées sur la procédure la plus courante.

### La mise à jour a cassé mes mods
**Lancez le jeu une fois** après la nouvelle mise à jour. Puis, réinstallez les mods en utilisant un installateur mentionné dans le [guide du Débutant](/fr/beginners-guide), tel que Mod Assistant.

## 1. Pas de mods ?

### Questions diverses

#### 1.1 Aucun mod n'apparaît sur une nouvelle installation du jeu
Premièrement, assurez-vous que ce qui suit est correct :

* **Vous avez lancé le jeu une première fois avant d'installer les mods**. BSIPA supprime tous les mods quand il est lancé pour la première fois sur une nouvelle installation pour éviter que les anciens mods cassés chargent avec la nouvelle version. Réinstallez encore les mods si c'est le cas.
* Steam / Oculus lance Beat Saber depuis la **même installation** où les mods sont placés. *exemple: les mods sont sur le disque D: mais Steam lance le jeu depuis le disque C:.* Indiquez le bon emplacement d'installation dans votre installateur favori.
* Si vous avez installé des mods à la main, assurez-vous que vous avez inclus tous les fichiers du téléchargement et les avez placés dans les dossiers appropriés, ainsi que leurs dépendances.

#### 1.2 J'avais des mods installés sur une ancienne version, mais rien ne charge après la mise à jour
Si les pré-requis détaillés dans la section 1.1 sont valides, essayez les solutions ci-dessous, en ordre descendant.

##### Solution 1

* Mettez à jour BSIPA à la dernière version (dans Mod Assistant ou manuellement)
* Allez dans votre dossier d'installation de Beat Saber
* Lancez `IPA.exe`

##### Solution 2 (Steam uniquement)

* [Vérifiez les fichiers du jeu](#verifier-les-fichiers-du-jeu-sur-steam)
* Mettez à jour BSIPA à la dernière version
* Allez dans votre dossier d'installation de Beat Saber
* Lancez `IPA.exe`

##### Solution 3

* Allez dans votre dossier Beat Saber
* Faites une sauvegarde du dossier `UserData` (facultatif)
* Supprimez le dossier `UserData`

::: warning ATTENTION
Ceci va réinitialiser les paramètres de vos mods !
:::

##### Solution 4

* Réalisez une [réinstallation propre](#installation-propre)

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
Si le jeu est gelé sur l'écran *Health and Safety*, ou vous voyez un avatar en T-pose sans contrôle sur le jeu, [vérifiez vos fichiers](#verifier-les-fichiers-du-jeu-sur-steam) si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus. Référez-vous à la section sur la [réinstallation propre](#installation-propre).

Il semble que cela se produit lors en mettant à jour Beat Saber avec des mods précédemment installés, mais pas aux utilisateurs avec des installations propres du jeu.

### Problèmes de performance

#### 2.3 Le jeu ralentit beaucoup après avoir installé les mods
Si le jeu est si ralenti (*lag*) que vous pouvez à peine cliquer sur le bouton `Continue` sur l'écran *Health & Safety*, vérifiez vos fichiers si vous avez le jeu sur Steam, ou réinstallez le jeu sur Oculus. Faites de même s'il ne démarre pas du tout et vous affiche des messages d'erreur quand vous essayez de lancer le jeu.

Si le problème n'est pas résolu, consultez la section [2.4 Améliorer la fréquence d'images (FPS)](#_2-4-ameliorer-la-frequence-d-images-fps).

#### 2.4 Améliorer la fréquence d'images (FPS)
Si la [section 2.3](#2-3-le-jeu-ralentit-beaucoup-apres-avoir-installe-les-mods) n'a pas amélioré les performances, alors votre PC peut tout simplement ne pas être assez performant pour tenir le coup avec les mods. Voici quelques propositions que vous pouvez tenter pour améliorer les performances, sans ordre particulier :

* Vérifiez si NVIDIA GeForce Experience a défini l'échelle de rendu pour Beat Saber au delà de la valeur par défaut de 1.0. Il est possible qu'il aie défini une valeur plus élevée telle que 1.4 ou 1.8, qui augmente considérablement la charge GPU.
* Utilisez un avatar personnalisé moins complexe.
* Les sabres personnalisés **Plasma Katanas** ont de nombreux évènements personnalisés et sont connus pour créer du lag en cas de note ratée.
* Camera2/CameraPlus peuvent être très gourmands en ressources, en particulier si vous avez plusieurs caméras ou agrandissez le champ de vision (ou FOV).
* Baissez l'échelle de rendu (Render Scale), l'anticrénelage (Anti-Aliasing), le miroir (Mirror), le brouillard (Smoke) dans les paramètres de base du jeu.
* Pour les joueurs Oculus Rift CV1 : pensez à utiliser 2 capteurs au lieu de 3 ou plus.
* Réduisez votre nombre de mods et de chansons.
* Réalisez une [réinstallation propre](#installation-propre) du jeu.
* De faibles performances peuvent aussi être causées par quelque chose qui ne va pas dans le dossier des données d'application. Pour y remédier, référez vous à [comment supprimer le dossier BeatSaber dans votre AppData](#supprimer-les-sauvegardes-dans-appdata).
* Désactivez des compteurs Counters+ tels que Score Counter et Swing Speed, car ils peuvent être gourmands en ressources.
* HTTPStatus et DataPuller peuvent créer des saccades. Testez le jeu sans ce mod pour voir si les pics de ralentissement disparaissent.

La réalité virtuelle est très gourmande en processeur (CPU), surtout si vous ajoutez des mods. Si vous avez du mal à faire fonctionner le jeu avec les mods que vous voulez utiliser, pensez à améliorer votre matériel. Notez que Beat Saber n'utilise que peu de ressources graphiques (GPU) puisqu'il s'agit d'un jeu aux graphismes particulièrement simples.

## 3. Questions fréquentes

### Divers

#### 3.1 Menu vide, pas de bouton
Si le menu principal de votre jeu est vide, votre fichier de sauvegarde est probablement corrompu. Pour résoudre ce problème, référez-vous à [comment supprimer le dossier Beatsaber dans votre AppData](#supprimer-les-sauvegardes-dans-appdata).

:::warning ATTENTION
Cela va supprimer tous vos scores locaux ainsi que vos statistiques de jeu.
:::

#### 3.2 Comment utiliser le mod `x` ?
Si vous utilisez Mod Assistant, cliquez sur le mod puis sur le bouton "Mod Info". [BeatMods](http://beatmods.com) a également un bouton "More Info" sur chaque mod.

#### 3.3 Problèmes de vibration
Le mod Gameplay Modifiers Plus avait une option permettant d'activer ou désactiver les vibrations des contrôleurs. Si vous l'aviez désactivé puis que vous avez supprimé le mod, vous devez modifier le fichier de sauvegarde manuellement. Ouvrez `%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` et définissez le paramètre `controllersRumbleEnabled` à `true`.

Si ceci n'est pas la cause de vos problèmes de vibration et si ce qui suit est correct concernant les vibrations :

* les tremblements sont faibles
* il n'y a pas de vibration quand vous tapez un ensemble de blocs
* il y a un léger délai quand vous faites rencontrer les sabres
* vous utilisez les contrôleurs Oculus Touch

Dans ce cas, il y a des chances que Beat Saber surcharge le contrôleur USB de votre carte mère. Oculus dévore la bande passante des contrôleurs USB et la plupart des cartes mères sont fournies avec un contrôleur bon marché. Beat Saber le pousse plus loin que les autres jeux, ce qui explique pourquoi il y a pas de problème dans les menus ainsi que d'autres jeux. Il n'y a pas de solution miracle, donc essayez les propositions suivantes :

* Essayez de connecter le casque et les capteurs sur d'autres ports USB
* Débranchez les appareils USB non essentiels
* Achetez un hub USB PCI-E
* Utilisez `-vrmode oculus` si vous utilisez SteamVR pour le contourner et utiliser le SDK Oculus directement

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
Cliquez sur le point d'interrogation (?) bleu dans le coin en haut à droite. This should tell you what mods are required to play the song, which you are missing and should install. Si cela ne fonctionne toujours pas, essayez de réinstaller les mods nécessaires. Sinon, essayez une [réinstallation propre](#installation-propre).

#### 3.8 Les détails de la map chargent indéfiniment
Si cela ne se produit que sur certaines maps, vous n'avez peut-être pas les mods nécessaires, ou cette map peut être corrompue. Si cela se produit sur toutes vos maps, supprimez votre dossier `Plugins` et réinstallez vos mods.

### Camera2

#### 3.9 My desktop view only takes up a small section of the screen
Your Camera2 display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader

#### 3.10 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your mods and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.11 Nothing Showing Up In The More Songs Menu
The probable causes for BeatSaver Downloader not working are:

1. assurez-vous que vos chansons sont chargées, sinon le bouton *More Songs* sera grisé,
2. votre antivirus ou pare-feu bloque l'accès à BeatSaver,
3. vous avez atteint les limites d'utilisation de BeatSaver et devez attendre avant de réessayer.

### Codes d'erreur multijoueur
Here is a list of known error codes, what they mean, and what you can do to fix them.

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->
| Code&nbsp; | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CFR-1      | Unknown Error Occurred. Try restarting the game.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CFR-2      | The multiplayer connection was canceled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFR-3      | Server is not reachable. There may be an issue with your internet connection or with Beat Saber's relay servers. Double check you are not offline and your firewall allows Beat Saber to connect to the internet. <details><summary>**Background Information**</summary>Beat Saber Multiplayer is peer-to-peer where you connect directly with each player in the lobby. When this is not possible Beat Saber starts a "relay" server to send the data. This error means both of these methods failed.</details> &nbsp; This can also be caused by using emojis or special characters in your username. |
| CFR-4      | The server already exists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-5      | Server does not exist. The lobby you were connecting to might have closed as you were joining.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-6      | The server is full. Choose a different lobby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CFR-7      | You are on a version of the game that is not supported by the servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-8      | Lobby password is incorrect. Double check you are entering the right password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-9      | The matchmaking servers Beat Games run, which keeps track of open public and private lobbies, is offline. Try again later.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-10     | Your session key from Steam or Oculus is not valid. If you are playing on Quest and have modded your game, check out this [FAQ answer](/faq/README.md#does-multiplayer-have-crossplay) to work around this. Otherwise you are on a pirated copy of the game which is not supported.                                                                                                                                                                                                                                                                                                 |
| CFR-11     | Your internet connection is offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
<!-- markdownlint-enable MD013 -->

## 4. Dépannage divers

### Comprendre les logs
If you're on Steam you can go to
> Beat Saber > Propriétés... > Général > Écrivez `--verbose` dans la zone de texte sous "Options de lancement"

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* Il y a des chances que cela ne s'affiche pas pour les avatars et les sabres. Dans ce cas, vous aurez besoin de retirer l'intégralité de vos avatars/sabres et de les réinsérer un à un pour déterminer la source du problème.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Vérifier les fichiers du jeu sur Steam
To verify integrity of game files follow these steps:

1. Assurez-vous que SteamVR est fermé, il ne vous laissera pas vérifier vos fichiers autrement.
2. Allez dans votre bibliothèque Steam et trouvez Beat Saber.
3. Faites un clic droit sur Beat Saber et cliquez sur Propriétés...
4. Allez dans l'onglet "Fichiers locaux" de la fenêtre des propriétés
5. Sélectionnez l'option "Vérifier l'intégrité des fichiers du jeu..."
6. Laissez le finir la vérification et télécharger les fichiers manquants et ça devrait être bon.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Installation propre

1. (Facultatif) Faites une sauvegarde du contenu personnalisé téléchargé en créant une copie des dossiers suivants :

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Supprimez la TOTALITÉ du dossier Beat Saber.** À la différence de la désinstallation du jeu, cette méthode supprime tout le contenu et pas uniquement les fichiers du jeu.

> Steam: `\steamapps\common\Beat Saber\` `Oculus: `\hyperbolic-magnetism-beat-saber\`

3. Réinstallez le jeu via Steam ou l'Oculus Store.
4. **Avant de le modder, lancez le jeu une fois**
5. Lancez Mod Assistant, installez vos mods et lancez le jeu.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Supprimer les sauvegardes dans AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Utilisateurs > "VOTRE UTILISATEUR" > AppData > LocalLow > Hyperbolic Magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Deleting this folder in Appdata will also delete your local scores and statistics.
:::

#### Desperate Measures
::: warning
Disabling your anti-virus involves security risks, be sure to know what you're doing
(i.e don't download or open suspicious files while it's turned off)
and don't forget to re-enable it as soon as you finished these steps.
:::

* Assurez-vous que l'utilisateur courant **est un administrateur**
* Désactivez votre antivirus (le temps d'un test), testez votre jeu, réactivez le
* Assurez-vous que vous avez la permission de créer des dossiers et d'éditer des fichiers sur votre disque / votre PC (nous avons eu des problèmes récemment causés par des mises à jour Windows)
* Assurez-vous que vos pilotes sont à jour.
* Vérifiez que le problème n'est pas lié à votre casque, ou votre système d'exploitation, ou votre matériel / vos logiciels
* Vérifiez votre connexion Internet, et que rien ne bloque ce qui est lié au Modding de Beat Saber, à Steam, etc.

## 5. J'ai encore des problèmes
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:

* Utilisez les bons salons de discussion, `#pc-help` pour le support des mods sur PC et `#quest-help` pour le support des mods sur Quest. Posez vos questions sur `#pc-3d-modeling` et `#quest-3d-modeling` pour de l'aide sur la **création d'avatars, plateformes, notes ou sabres**, et `#mapping-discussion` pour les questions concernant la **création de niveaux.**
* Soyez poli et respectueux
* Décrivez votre problème en détail. "*It didn't work*" est aussi pertinent que dire à votre docteur que vous ne vous sentez pas bien. Qu'est-ce qui ne fonctionne pas, et qu'avez-vous essayé ? Y a-t-il des messages qui apparaissent sur l'écran ? Votre écran est-il devenu tout violet ?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Credit to Saber-Chan for their hard work on this page.
