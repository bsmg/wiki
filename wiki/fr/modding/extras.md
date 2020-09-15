---
title: Compléments au modding
---
# Extras
_Les bases n'étaient pas suffisantes ? Voici des outils supplémentaires que vous pourriez utilisez !_

Vous trouverez ici du contenu supplémentaire et des informations qui vous aideront à créer un plugin. Inspecter le code source, accéder à des paramètres privés et utiliser des bibliothèques externes sont des choses que font les plugins de BeatSaber. Alors pourquoi seulement vous en tenir aux bases ?

Vous trouverez ici des programmes et des bibliothèques qui vous permettront d'aller plus loin avec vos plugins et qui vous aideront grandement si vous décidez de tester de nouvelles choses dans le monde du modding sur BeatSaber. Rappelez-vous, le [Discord Beat Saber Modding Group](https://discordapp.com/invite/beatsabermods) est toujours là pour répondre à vos questions de programmation !

::: danger ATTENTION
Cette page du wiki est incomplète ! Si vous souhaitez traiter une bibliothèque ou un aspect du modding, n'hésitez pas à m'envoyer un message privé sur Discord `Caeden117#0117` et dites-moi quoi ajouter (en anglais).
:::

## Construction avancée
Si vous en avez marre de devoir copier vos projets finis depuis des dossiers perdus dans votre dossier de projet pour les mettre dans votre dossier Plugins, cette catégorie vous aidera à réduire les efforts que vous aurez à faire en ayant juste besoin de construire vos projets et d'ouvrir Beat Saber pour les tester.

### Symlinks
Un `symlink`, ou lien symbolique, est quelque chose qui va indiquer à Windows qu'un fichier est lié à un autre dossier. C'est utile si vous voulez un dossier sur votre bureau qui vous mène directement dans votre dossier Beat Saber quand vous l'ouvrez, ou dans votre cas, un symlink depuis votre plugin dans votre dossier Plugins jusqu'à la dernière version dans votre dossier de projet.

::: warning ATTENTION
Si un dossier contient des espaces (Exemple : `cd C:\Users\Test\Hello World`), encadrer le chemin entre des guillemets: `cd "C:\Users\Test\Hello World"`
:::

1. Ouvrez l'invite de commande en tant qu'Administrateur.
2. Assurez-vous qu'il n'y a pas de plugin dans votre dossier Plugins.
3. Ciblez votre invite de commande sur votre dossier Plugins de Beat Saber (`cd <Beat Saber Directory>/Plugins`)
4. Exécutez la commande suivante: `mklink <Plugin Name>.dll, <Chemin vers votre fichier de build>`

Ci-dessous, un exemple de la commande `mklink` :
```
mklink ExampleMod.dll, "C:\Users\You\Documents\Visual Studio 2017\Projects\ExampleMod\ExampleMod\bin\Debug\ExampleMod.dll"
```

Si tout a été fait correctement, la prochaine fois que vous construirez votre plugin et que vous lancerez Beat Saber, les plugins devraient se mettre à jour automatiquement.

### Évènements post-build
Une autre façon de faire ça et de tirer profit des évènements C# post-build. Cela ne vous permez pas seulement de copier des fichiers dans un emplacement quand vous avez fini, mais aussi de faire beaucoup d'autres choses. [Voici des documents sur les évènements pre/post build](https://docs.microsoft.com/fr-fr/visualstudio/ide/how-to-specify-build-events-csharp?view=vs-2017)

1. Sous `Project`, cliquez sur `<Project Name> Properties...`
2. Cliquez sur `Build Events`
3. Copiez Collez le code suivant dans la ligne de commande de l'évènement post-build :
`copy /Y "$(TargetPath)" "<Chemin vers votre dossier Plugins de Beat Saber (incluant le nom du fichier et son extension)>"`
4. Sauvegardez et quittez.

Voici un exemple de la commande post-build :
`copy /Y "$(TargetPath)" "D:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Plugins\ExampleMod.dll"`

`$(TargetPath)` indique l'emplacement du fichier que vous êtes en train de construire, quelque soit ce que vous utilisez pour le construire.

Si tout a été fait correment, la prochaine fois que vous construirez un plugin, une copie sera automatiquement envoyée dans votre dossier Plugins (il remplacera automatiquement la version précédente), et Beat Saber sera en état de marche.

## dnSpy
dnSpy est un débogueur .NET et un éditeur d'assemblage qui vous permet d'importer des fichiers `.dll` compilés et de les voir décompilés dans C#.

Dans le cas du modding, on peut utiliser dnSpy pour voir le code source de Beat Saber afin de trouver de trouver des méthodes ou des variables qui pourraient être utiles dans des plugins.
Apprenez-en plus [ici](https://github.com/0xd4d/dnSpy).

* Téléchargez la [dernière version de dnSpy.zip](https://github.com/0xd4d/dnSpy/releases/latest).
* Décompressez-le zip et lancez `dnSpy.exe`.

Si tout a été fait correctement, cela devrait ressembler à ça, sans la grande liste de fichiers sur la gauche.

![Dnspy Start](~@images/modding/dnspy-start.png "Starting Page")

Allez dans `File >> Open`, puis trouvez et ouvrez le code compilé de Beat Saber qui se trouve dans `\<Beat Saber Directory>\Beat Saber_Data\Managed\Assembly-CSharp.dll`

![Dnspy Start](~@images/modding/dnspy-assembly.png "Code Location")

Vous pouvez aussi utiliser dnSpy pour voir et même éditer le code des plugins, même ceux qui n'ont pas encore été publiés sur GitHub. Cependant soyez prévenu ! Fouiner dans le code des autres sans permission est une très mauvaise idée.

![dnSpy Example](~@images/modding/dnspy-example.png "dnSpy Example")

## Harmony
Harmony est une bibliothèque pour patcher des .NET compilés et des méthodes mono pendant l'exécution.
Cela vous permet de modifier les fonctions de base de Beat Saber et permet aux plugins de faire des choses bien au-delà de ce que Basic Illusion Plugin Architecture peut faire.

Apprenez-en plus [ici](https://github.com/pardeike/Harmony).

Harmony est compris avec BSIPA, donc vous avez juste besoin de l'ajouter en tant que référence ([Cliquez ici si vous avez oublié comment ajouter une référence à votre projet](/fr/modding/example-mod.md#references-et-text-mesh-pro). Il se trouve dans `Beat Saber/Libs`.

À cause de ça, il est très mal vu d'ajouter Harmony en tant que dépendance quand vous finissez un mod. En fait, [c'est une infraction révocable dans les lignes de conduite approuvées de BeatMods](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit), référez vous à la ligne `3.1.b`.

### Tutoriel simple
Arrive bientôt, je vais essayer de faire un tutoriel pas trop long mais qui vous permettra de comprendre les bases pour utiliser Harmony.

## Reflection Util
ReflectionUtil est un simple fichier qui permet de prendre et de modifier des variables privées à l'intérieur de fichiers.
Il est utilisé avec [dnSpy](/fr/modding/extras.md#dnspy) pour chercher et récupérer des variables dans le code. Vous voulez modifier des variables privées ? Utilisez plutôt [Harmony](/fr/modding/extras.md#harmony).

Reflection Util est disponible dans beaucoup de mods, [en voici un qui vient de Beat Saber Utils](https://github.com/Kylemc1413/Beat-Saber-Utils/blob/master/Beat%20Saber%20Utils/Utilities/ReflectionUtil.cs)

### Depuis Beat Saber Utils
Si vous ne l'avez pas déjà fait, [ajoutez Beat Saber Utils en référence à votre projet.](/fr/intro.md#reparer-les-references)
D'ici, ajoutez `using BS_Utils.Utilities;` au dessus de vos fichier et accédez-y en utilisant `ReflectionUtil`.

### Créer le sien
* Créez un nouveau fichier s'appelant `ReflectionUtil.cs`
* Copiez Collez le code ci-dessus dans le nouveau fichier, assurez-vous de remplacer `namespace BS_Utils.Utilities` avec le nom de votre projet.

### Utilisation simple
Voici une utilisation simple de `ReflectionUtil`, en prenant les deux sabres depuis la classe `PlayerController`.

![ReflectionUtil Example](~@images/modding/reflectionutilexample.png "ReflectionUtil Example")
