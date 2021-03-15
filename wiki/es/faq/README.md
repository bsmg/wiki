# Preguntas frecuentes (FAQ)

## Acabo de conseguir el juego, ¿Cómo empiezo?
¡Echa un vistazo a nuestra [guía de principiantes](/beginners-guide.md)!

## ¿Cómo puedo obtener más canciones?
> [BeatSaver](https://beatsaver.com) es el repositorio principal de canciones personalizadas hechas por la comunidad. Muchas otras herramientas y sitios mejoran la experiencia de descargar canciones personalizadas, pero este sitio es la fuente de la verdad.

Si descargas mapas manualmente desde BeatSaver, extraelos en una carpeta y coloca los archivos en `Beat Saber/Beat Saber_Data/CustomLevels`. Este es el directorio del cual el juego lee nativamente los mapas personalizados.

### BeastSaber
[Beast Saber](https://www.bsaber.com) es un sitio de reseñas que tiene como objetivo curar todas las canciones en BeatSaver. También puedes descargar listas de reproducción, seguir mappers, encontrar canciones usando métodos avanzados de ordenación, y mucho más.

### Herramientas de administración de canciones
Los siguientes son programas que se usarán en el escritorio para ayudarte a descargar canciones personalizadas, con algunas otras características también.

* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view) un descargador de mapas, hecho por Sturdyfool0.
* [BeatList](https://github.com/Alaanor/beatlist) es una aplicación para administrar las listas de reproducción y los mapas personalizados, hecho por Alaanor.

## ¿Cómo puedo instalar listas de reproducción?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Utilice la herramienta `Instalar lista de reproducción` en la pestaña Opciones del asistente de mods.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## ¿Cómo creo mis propios niveles personalizados?
See [mapping](/mapping/)!

## ¿Cómo puedo cargar plugins que no están en Mod Assistant?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## ¿El multijugador tiene crossplay?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## ¿Cómo funciona el sistema de puntuación en Beat Saber? ¿Cómo funciona el ranking global?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
