# Foire aux Questions

## Je viens d'acheter le jeu, que dois-je faire ?
Rendez-vous sur le [guide du Débutant](/fr/beginners-guide.md) !

## Comment avoir plus de chansons ?
> [BeatSaver](https://beatsaver.com) est le dépôt principal des chansons personnalisées créées par la communauté. Bien d'autres outils et sites rendent le téléchargement des chansons personnalisées plus riche, mais c'est ici qu'elles sont hébergées.

Si vous téléchargez des maps manuellement depuis BeatSaver, décompressez le fichier zip dans un dossier et placez les fichiers dans `Beat Saber/Beat Saber_Data/CustomLevels`. C'est à cet emplacement que le jeu ira trouver les maps personnalisées.

### BeastSaber
[Beast Saber](https://www.bsaber.com) est un site de critique qui a pour but de rendre plus accessible toutes les chansons présentes sur BeatSaver. Vous pouvez aussi y télécharger des playlists, suivre des mappeurs, trouver des chansons grâce à des méthodes de tri et filtre, etc.

### Outils de gestion de chansons

Ci-dessous, des outils utiles à la gestion de musiques personnalisées ou de playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) est une application de bureau pour gérer les chansons et les playlists personnalisées, maintenue par **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) est un service sur navigateur fait par **zexurge** pour gérer les playlists.

## Comment installer des playlists ?

### PC
Vous devez installer le mod [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest).

Ensuite, vous pouvez soit :

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

Vous devriez maintenant voir la playlist à côté de l'album des niveaux personnalisés (Custom Levels) en jeu. Le mod prend également en charge la gestion des playlists depuis le jeu.

### Quest
**Pour les utilisateurs de Quest :**  
Vous pouvez utiliser [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) pour gérer les playlists sur votre Quest. Notez qu'un niveau personnalisé ne peut apparaître qu'une seule fois en jeu en raison d'une limitation avec BMBF.

:::warning ATTENTION pour les utilisateurs de Quest
Recharger votre dossier des chansons personnalisées réinitialise toute organisation de playlist.
:::

## Comment faire mes propres niveaux personnalisés ?
Rendez-vous dans la [catégorie mapping](/fr/mapping/) !

## Comment charger des extensions / mods qui ne sont pas dans Mod Assistant ?
Voir [cette section](/fr/pc-modding.md#installation-manuelle) dans le Guide de modding PC.

## Est-ce que le multijoueur est multiplateforme ?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

Le mod BeatTogether est la solution actuelle permettant le multiplateforme entre les versions moddées du jeu. Rejoignez leur [serveur Discord](https://discord.com/invite/gezGrFG4tz) (anglophone) et consultez le salon `#install-instructions` pour plus d'informations.

## Mon jeu a été mis à jour et mes mods ne fonctionnent plus !
À chaque fois que le jeu est mis à jour, il est possible *(et très probable)* que vos mods ne fonctionnent plus et doivent être mis à jour. Afin de ne pas casser votre installation du jeu après une mise à jour, le contenu du dossier `Plugins` existant est déplacé dans un nouveau dossier nommé `Old 1.xx.x Plugins` lors du premier lancement. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

Pour récupérer vos mods, **lancez simplement l'installateur de mods.**  
Vous y trouverez les mods qui fonctionnent pour la dernière version du jeu, qui sont inclus dans le dépôt BeatMods !

Si vous restez sceptique face à ça, visitez le [guide du Débutant](/fr/beginners-guide.md).

## Comment fonctionne le système de score dans Beat Saber ? Comment fonctionne le classement général ?
Nous avons des sections dédiées au système de score et classement à la page [Prises et Astuces](/fr/grips-and-tricks.md), allez y faire un tour !

## Mes menus sont vides, je n'ai rien sur quoi cliquer !
Si la fenêtre principale du jeu est vide, votre dossier de sauvegarde est certainement corrompu.

Pour corriger le problème, naviguez dans : `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Puis supprimez ou renommez le dossier Beat Saber. Quand vous relancerez le jeu, le dossier de sauvegarde sera recréé, le menu principal devrait alors s'afficher correctement.
