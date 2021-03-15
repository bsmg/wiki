---
sidebar: auto
---

# Mods en PC

## Preface

::: danger Descargo de responsabilidad Al elegir usar mods, entiendes que:

* Puede que experimentes problemas que no existen en el juego base. El 99,9% de los errores, fallos y lag se deben a mods.
* Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens, as modders are volunteers with real lives.
* Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods, but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. Simplemente no seas un cretino ok? :::

Beat Saber soporta nativamente canciones personalizadas, así que si es todo lo que estás buscando, no necesitas más mods! It's a wise idea to install `SongCore` though, as this mod expands upon the base game functionality to improve loading times and provide functionality for other mods like the in-game downloader, custom leaderboards, playlists, etc.

::: warning Esta guía es para modear PC en Windows.  
Si tienes unas Quest, consulta la [página de Modding de Quest](/quest-modding.md).  
Si estás en Linux, mira la página [de Linux](/modding/linux.md) o [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

If you run into problems at any point, please head to the [support page](./support) and see if you can identify what went wrong before asking in the Discord server. ¡Es posible que tu respuesta esté en esa página!

::: warning I watched this video by Elite Eric, but I got stuck/it didn't work. ¿Qué proporciona? En BSMG **sugerimos encarecidamente** no usar ningún tutorial de Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

En su lugar, deberías seguir las guías escritas aquí en la wiki o buscar ayuda en [el discord de BSMG](https://discord.gg/beatsabermods). :::

## Installers

### Asistente de mods
> **ESTE ES ACTUALMENTE EL INSTALADOR RECOMENDADO.**

__**¡Ejecuta el juego al menos una vez**** antes de intentar moddear el juego! Esto también se aplica a la reinstalación de tu juego.

A simple Beat Saber Mod Installer similar to the mod manager, but with additional features such as mod removal and version checking! Consíguelo en [Asistente de GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## How to get more songs
::: tip Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before good mapping practices were established. Try downloading songs released between late 2019 and now to get the best custom levels experience. :::

### Descargador en el juego
The `BeatSaver Downloader` Plugin allows you to download maps in-game using the `MORE SONGS` menu button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`. You can also use the in-game downloader plugin, BeatList, or Mod Assistant's OneClick™ Install feature.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on beatsaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Herramientas de administración de canciones

* [BeatList](https://github.com/Alaanor/beatlist) es una aplicación para administrar las listas de reproducción y los mapas personalizados, hecho por Alaanor.

### Listas De Reproducción
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Install Folder
_Where is Beat Saber installed?_

### Ubicación Predeterminada
|        |                                                                                             |
| ------ | ------------------------------------------------------------------------------------------- |
| Steam  | `C:\Archivos de programa (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Archivos de programa\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Otras Ubicaciones
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Instalación manual
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install Plugins that are not available in the installer, skip to step 4.

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Instala BSIPA

1. Descarga [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Ve a tu [carpeta de instalación.](#install-folder) y extrae el contenido de BSPIA en ella. ![Directorio Limpio](~@images/beginners-guide/directory-clean.png "Directorio Limpio") ![Directorio lpa](~@images/beginners-guide/directory-ipa.png "Directorio Ipa")
3. Haga doble clic en IPA.exe para parchear el juego. Cualquier mod en la carpeta `Plugins` ahora se cargará al iniciar el juego. Si hay errores, probablemente no seguiste el paso 2 correctamente. ![Directorio Parcheado](~@images/beginners-guide/directory-patched.png "Directorio Parcheado")

### Instalar mods

4. Download the mod(s) you wish to install, whether it be from GitHub, the [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods` channel,  [BeatMods](https://beatmods.com/#/mods) or other sources. **Asegúrate de descargar las dependencias requeridas por el mod.** ![Directorio Plugins](~@images/beginners-guide/directory-plugins.png "Directorio Plugins")
5. Algunos mods tienen instrucciones de instalación, algunos no. Generally you can just drag and drop the zip contents into your beat saber install folder, and the files should go into the corresponding folders.

## How to uninstall mods
Either remove the dll from the `Plugins` folder, or click the `Uninstall` button in Mod Assistant.

## Where to go from here

* [Grips and Tricks](./grips-and-tricks.md)
* [Making Beatmaps](/mapping/)
* [Custom Sabers](/models/custom-sabers.md)
* [Custom Avatars](/models/custom-avatars.md)
* [Custom Platforms](/models/custom-platforms.md)
* [Setup Multiplayer](https://bs.assistant.moe/Multiplayer/)
* [Making Mods](/modding/)

## Have questions?
Visit the support channels in the [BSMG Discord](https://discord.gg/beatsabermods)!
