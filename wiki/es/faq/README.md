# Preguntas frecuentes (FAQ)

## Acabo de conseguir el juego, ¿Cómo empiezo?
¡Echa un vistazo a nuestra [guía de principiantes](/beginners-guide.md)!

## ¿Cómo puedo obtener más canciones?
> [BeatSaver](https://beatsaver.com) es el repositorio principal de canciones personalizadas hechas por la comunidad. Muchas otras herramientas y sitios mejoran la experiencia de descargar canciones personalizadas, pero este es el sitio donde están alojadas.

Si descargas mapas manualmente desde BeatSaver, extraelos en una carpeta y coloca los archivos en `Beat Saber/Beat Saber_Data/CustomLevels`. Esta es la carpeta desde el cual el juego lee de forma nativa los mapas personalizados.

### BeastSaber
[Beast Saber](https://www.bsaber.com) es un sitio de reseñas que tiene como objetivo curar todas las canciones en BeatSaver. También puedes descargar listas de reproducción, seguir mappers, encontrar canciones usando métodos avanzados de ordenación, y mucho más.

### Herramientas de administración de canciones

The following can be used to help you manage custom songs or playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists, maintained by **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## ¿Cómo puedo instalar listas de reproducción?

### PC
Necesitas instalar el mod [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest).

Después las opciones son:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

Deberías ver la lista de reproducción junto al álbum de niveles personalizados dentro del juego. El mod también soporta la gestión de listas de reproducción dentro del juego.

### Quest
Puedes usar [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) para administrar las listas de tus Quest. Ten en cuenta que un nivel personalizado sólo puede aparecer sólo una vez dentro del juego debido a una limitación con BMBF.

:::warning ADVERTENCIA para usuarios de Quest
Volver a cargar tu carpeta Custom Songs restablece toda la organización de la lista de reproducción.
:::

## ¿Cómo creo mis propios niveles personalizados?
¡Echa un vistazo a [Mapping](/mapping/)!

## ¿Cómo cargo mods de PC que no estén en Mod Assistant?
Mira [esta sección](/pc-modding.md#manual-installation) en la guía de principiantes.

## ¿El multijugador tiene crossplay?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

El mod BeatTogether es la solución actual para el juego multiplataforma entre las versiones del juego modificadas. Únete a su [servidor de Discord](https://discord.com/invite/gezGrFG4tz) y revisa el canal `#install-instructions` para más información.

## ¡Mi juego se actualizó y ahora ninguno de mis mods está funcionando!
Cada vez que el juego se actualiza es posible *(y muy probablemente)* que tus mods actuales dejen de funcionar y necesiten ser actualizados. Para asegurarte de que tu instalación no se rompe cuando el juego se ejecute en una nueva actualización por primera vez, todo lo que hay en la carpeta `Plugins` es movido automáticamente a una nueva carpeta llamada `Old 1.xx.x Plugins`. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

Para recuperar tus mods simplemente **ejecuta el instalador de nuevo.**  
¡El repositorio de BeatMods sólo incluye mods que han sido confirmados para trabajar en la última versión del juego!

Si estás confundido sobre alguna cosa relacionada con esto, visita [Guía de principiantes](/beginners-guide.md).

## ¿Cómo funciona el sistema de puntuación en Beat Saber? ¿Cómo funciona el ranking global?
Tenemos secciones en la página de [agarres y trucos](/grips-and-tricks.md) dedicadas a los sistemas de puntuación y de ranking, ¡échale un vistazo!

## Mi menú está en blanco y no tengo nada en lo que hacer clic
Si la ventana principal de tu juego está en blanco, es probable que tu archivo de guardado esté dañado.

Para arreglarlo, navega a: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Elimina o renombra la carpeta Beat Saber a otra cosa. Cuando vuelvas a entrar en el juego, volverá a crear el archivo de guardado y debería cargar el menú principal correctamente.
