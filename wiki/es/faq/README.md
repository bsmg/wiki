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
**Para usuarios de PC:**  
Necesitas instalar el mod `PlaylistLoaderLite`. Entonces después puedes
* Utilice la herramienta `Instalar lista de reproducción` en la pestaña Opciones del asistente de mods.
* Coloca el archivo de la lista de reproducción en `Beat Saber/Playlists` y selecciónalo en el juego y luego pulsa descargar.

Ahora deberías ver la lista de reproducción junto al álbum de niveles personalizados dentro del juego. Si faltan niveles en la lista de reproducción, tendrás que descargarlos manualmente usando BeatList o directamente desde Beatsaver o Bsaber.

**Para los usuarios de Quest:**  
Puedes usar [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) para administrar las listas de reproducción de tu Quest. Ten en cuenta que un nivel personalizado sólo puede aparecer una vez dentro del juego debido a una limitación con BMBF.

:::warning ADVERTENCIA para usuarios de Quest Recargar su Carpeta de Canción personalizada restablece toda la organización de la lista de reproducción. :::

## ¿Cómo creo mis propios niveles personalizados?
¡Echa un vistazo a [mapping](/mapping/)!

## ¿Cómo puedo cargar plugins que no están en Mod Assistant?
Ve [esta sección](/pc-modding.md#manual-installation) en la guía de principiantes.

## ¿El multijugador tiene crossplay?
Oficialmente, multijugador se limita a jugar con otras personas en la versión de la tienda (Oculus/Steam) que hayas comprado. Además, modificar el juego en Quest desactiva el multijugador oficial.

El mod BeatTogether es la solución actual para el juego multiplataforma entre las versiones del juego. Únete a su [servidor de Discord](https://discord.com/invite/gezGrFG4tz) y revisa el canal `#install-instructions` para más información.

## ¡Mi juego se actualizo y ahora ninguno de mis mods está funcionando!
Cada vez que el juego se actualiza es posible *(y muy probablemente)* que tus mods actuales dejen de funcionar y necesiten ser actualizados. Los desarrolladores se dieron cuenta de esto, así que cuando el juego se actualiza y lo ejecutas por primera vez, todo en la carpeta `Plugins` se mueve a la carpeta `Plugins Antiguos`. **¡Deja esos plugins ahí!**

Para recuperar tus mods simplemente **ejecuta el instalador de nuevo.**  
¡El repositorio de BeatMods sólo incluye mods que han sido confirmados para trabajar en la última versión del juego!

Si estás confundido por cualquiera de esto, visita [Guía de principiantes](/beginners-guide.md).

## ¿Cómo funciona el sistema de puntuación en Beat Saber? ¿Cómo funciona el ranking global?
Tenemos secciones en la página de [agarres y trucos](/grips-and-tricks.md) dedicadas a los sistemas de puntuación y de ranking, ¡échale un vistazo!

## Mis menú está en blanco y no tengo nada en el que hacer click!
Si la ventana principal de tu juego está en blanco, es probable que tu archivo de guardado esté dañado.

Para arreglarlo, navega a: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Elimina o renombra la carpeta Beat Saber a otra cosa. Cuando vuelvas a entrar en el juego, volverá a crear el archivo de guardado y debería cargar el menú principal correctamente.
