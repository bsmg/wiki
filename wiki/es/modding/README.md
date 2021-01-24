# Haciendo Mods
## Inyectando Mods
Beat Saber _**no**_ tiene soporte para mods incorporado.

En su lugar, la mayoría de las mods dentro del instalador de mod dependen de [BSIPA (Beat Saber Illusion Plugin Archucture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) para inyectar plugins en el juego, así como proporcionar algunas herramientas útiles para nosotros modders.

Para aquellos de ustedes que prefieren [BepInEx](https://github.com/BepInEx/BepInEx) sobre cualquiera de estas opciones, Bepis ha creado un cargador para plugins BSIPA, disponible [aquí](https://github.com/BepInEx/BepInEx.BSIPA.Loader). En cuanto al desarrollo de plugins de Beat Saber con la API del plugin BepInEx, existe una guía genérica en su [sitio de documentación](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), pero aparte de eso tendrás que ir por tu cuenta.

## Configuración del proyecto
Si está interesado en crear un mod de Beat Saber, pero no tiene una plantilla o plantilla Visual Studio configurada, [sigue la guía de introducción para configurar todo tu proyecto](./intro.md).

### ¿Listo para comenzar?
Echa un vistazo a los [enlaces de abajo](#other-links) para ver la documentación relativa a Unity y herramientas relacionadas. Si tienes alguna pregunta, el mejor lugar para preguntar es en el canal `#pc-mod-dev` en el [BSMG Discord](https://discord.gg/beatsabermods)

## Argumentos de lanzamiento
Argumentos útiles de lanzamiento que facilitarán el modeado / depuración.

| Argumento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descripción                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                                                                   | Activa la ventana de registro de salida para IPA. Esto mostrará la consola de depuración que utilizan los mods.                                                                                                           |
| `fpfc`                                                                                        | "Controlador de vuelo de primera persona"<br /><br />Esto te permite usar WASD y el ratón para navegar alrededor del menú del juego. ¡Esto facilita mucho las pruebas, porque no tienes que ponerte tu visor! |
| `-vrmode oculus`                                                                              | Si estás corriendo Beat Saber a través de Steam, esto te permite jugar el juego en un visor Oculus.                                                                                                                       |

## Otros enlaces
* [BeatMods](https://beatmods.com)
* [Directrices de aprobación de BeatMods](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [API de Scripting de Unity](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [IPA de Beat Saber](https://github.com/nike4613/BeatSaber-IPA-Reloaded)
