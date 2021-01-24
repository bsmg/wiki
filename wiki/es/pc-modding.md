---
sidebar: auto
---

# Mods en PC
# Prólogo

::: danger Descargo de responsabilidad Al elegir usar mods, entiendes que:
- Puede que experimentes problemas que no existen en el juego base. El 99,9% de los errores, fallos y lag se deben a mods.
- Los Mods están sujetos a romperse por actualizaciones y eso es normal - sed pacientes y respetuosos cuando esto suceda, ya que los modders son voluntarios con vidas reales.
- Beat Games no trata de romper los mods a proposito. Quieren trabajar en la base de código y a veces esto rompe los mods, pero no están decididos a matar los mods.

No atacar a los desarrolladores por problemas relacionados con mods, y viceversa - los modders y los desarrolladores son dos grupos separados. Simplemente no seas un cretino ok? :::

Beat Saber soporta nativamente canciones personalizadas, así que si es todo lo que estás buscando, no necesitas más mods! Sin embargo, es una buena idea instalar `SongCore`, ya que este mod se expande sobre la funcionalidad base del juego para mejorar los tiempos de carga y proporcionar funcionalidad para otros mods como las descargas desde el juego, marcadores personalizados, listas de reproducción, etc.

::: warning Esta guía es para modear PC en Windows.  
Si tienes unas Quest, consulta la [página de Modding de Quest](/quest-modding.md).  
Si estás en Linux, mira la página [de Linux](/modding/linux.md) o [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) :::

Si encuentras problemas en cualquier momento, por favor dirígete a la [página de soporte](./support) y mira si puedes identificar lo que salió mal antes de preguntar en el servidor de Discord. ¡Es posible que tu respuesta esté en esa página!

:::warning He visto este video de Elite Eric, pero me he quedado atascado/no funcionó. ¿Qué proporciona? En BSMG **sugerimos encarecidamente** no usar ningún tutorial de Elite Eric. Después de revisar gran parte de su contenido, contienen una gran cantidad de información incompleta, errónea o directamente incorrecta. Desgraciadamente, los intentos de contactar con el para corregir estos errores se han encontrado con silencio y nuevos (también incorrectos) tutoriales.

En su lugar, deberías seguir las guías escritas aquí en la wiki o buscar ayuda en [el discord de BSMG](https://discord.gg/beatsabermods). :::

## Instaladores
### Asistente de mods
> **ESTE ES ACTUALMENTE EL INSTALADOR RECOMENDADO.**

__**¡Ejecuta el juego al menos una vez**** antes de intentar moddear el juego! Esto también se aplica a la reinstalación de tu juego.

Un simple instalador de Mods de Beat Saber similar al gestor de mods, pero con características adicionales como eliminación de mod y verificación de versiones! Consíguelo en [Asistente de GitHub](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## Cómo obtener más canciones
### Descargador en el juego
El plugin `BeatSaver Downloader` te permite descargar mapas en el juego usando el botón `MÁS CANCIONES` en la pantalla del menú `MODS`. Esto coge mapas directamente de [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) es el repositorio principal de canciones personalizadas hechas por la comunidad. Muchas otras herramientas y sitios mejoran la experiencia de descargar canciones personalizadas, pero este sitio es la fuente de fiabilidad. Para instalar las canciones descargadas desde el sitio, descomprimirlas en una carpeta y colocarlas en `Beat Saber/Beat Saber_Data/CustomLevels`.  También puedes usar el plugin de descarga dentro del juego, BeatList o la función de instalación de OneClick del asistente de Mods.

### Beast Saber
[Bestia Saber](https://www.bsaber.com) (bsaber.com) es un sitio que intenta ayudar a encontrar mapas fantásticos para jugar más fácilmente. Hace esto clasificando los miles de canciones en beatsaver y te permite ordenar por el género de las canción es y muchas otras etiquetas de atributos. También tiene una característica social completa donde los jugadores pueden revisar canciones y comentarlas. Una de las características más utilizadas es la función "Recomendado por el conservador" en la que un equipo juega la mayoría de las canciones lanzadas cada día y recomienda las que destacan, permitiéndote [descargar automáticamente estas en el juego](https://bsaber.com/beatsync/).

### Herramientas de administración de canciones
* [BeatList](https://github.com/Alaanor/beatlist) es una aplicación para administrar las listas de reproducción y los mapas personalizados, hecho por Alaanor.

### Listas De Reproducción
Coloca el archivo de la lista de reproducción en `Beat Saber/Playlists`, luego usa [BeatList](https://github.com/Alaanor/beatlist) o [Mod Assistant](https://github.com/Assistant/ModAssistant) para descargar los mapas. (Nota: los mods antiguos permitían descargar el contenido de las listas de reproducción en el juego, pero esto no es posible actualmente.)

## Carpeta de instalación
_¿Dónde está instalado Beat Saber?_

### Ubicación Predeterminada
|        |                                                                                             |
| ------ | ------------------------------------------------------------------------------------------- |
| Steam  | `C:\Archivos de programa (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Archivos de programa\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Otras Ubicaciones
**Si has movido la carpeta de instalación a una unidad diferente, podría estar en la siguiente ubicación.** Reemplaza la letra de unidad `F` por la unidad en la que está instalado el juego.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Cómo desinstalar mods
Elimine el dll de la carpeta `Plugins` o haga clic en el botón `Desinstalar` en Mod Assistant.

## Instalación manual
Un instalador de mod es la forma recomendada de instalar mods. Vea la sección de [arriba](#installers). Si has parcheado el juego y sólo necesitas instalar Plugins que no están disponibles en el instalador, salta al paso 4.

****¡Ejecuta el juego al menos una vez antes de intentar moddear el juego! Esto también se aplica a la reinstalación de tu juego.
### Instala BSIPA
1. Descarga [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Ve a tu [carpeta de instalación.](#install-folder) y extrae el contenido de BSPIA en ella. ![Directorio Limpio](~@images/beginners-guide/directory-clean.png "Directorio Limpio") ![Directorio lpa](~@images/beginners-guide/directory-ipa.png "Directorio Ipa")
3. Haga doble clic en IPA.exe para parchear el juego. Cualquier mod en la carpeta `Plugins` ahora se cargará al iniciar el juego. Si hay errores, probablemente no seguiste el paso 2 correctamente. ![Directorio Parcheado](~@images/beginners-guide/directory-patched.png "Directorio Parcheado")

### Instalar mods
4. Descargue el/los mod(s) que desee instalar, ya sea desde GitHub, el canal #pc-mods u otras fuentes. **Asegúrate de descargar las dependencias requeridas por el mod.** ![Directorio Plugins](~@images/beginners-guide/directory-plugins.png "Directorio Plugins")
5. Algunos mods tienen instrucciones de instalación, algunos no. Por lo general, puede simplemente arrastrar y soltar el contenido zip en tu carpeta de instalación de beat saber y los archivos deberían ir a sus carpetas correspondientes.


## A dónde ir a partir de aquí
* [Agarres y trucos](./grips-and-tricks.md)
* [Haciendo Beatmaps](/mapping/)
* [Sables personalizados](/models/custom-sabers.md)
* [Avatares personalizados](/models/custom-avatars.md)
* [Plataformas personalizadas](/models/custom-platforms.md)
* [Configurar Multijugador](https://bs.assistant.moe/Multiplayer/)
* [Haciendo Mods](/modding/)

## ¿Tienes alguna pregunta?
¡Visita los canales de soporte en [BSMG Discord](https://discord.gg/beatsabermods)!
