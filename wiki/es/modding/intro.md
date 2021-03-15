# Introducción al modeado
_Learn how to get started writing your own PC Mods._

## Empezando
::: warning Esta guía es para hacer mods para la versión **PC** de Beat Saber!

Asegúrate de que tu juego se haya modificado antes de intentar hacer un mod.  
Mira las instrucciones para [modear Beat Saber en PC.](/pc-modding.md)

Esta guía asume que usted tiene un entendimiento básico a intermedio de C# y Unity.  
Puede que tengas dificultades para entender lo que se cubre aquí si no tienes este fundamento. :::

Beat Saber se hace en Unity 2019.3 usando C# con .NET framework 4.6  
Necesitará descargar la última versión de [Visual Studio Community](https://visualstudio.microsoft.com/).

## Configurar herramientas de modificación
We will be using the BeatSaberModdingTools extension in this tutorial, as it comes with modding templates and useful features.  
BeatSaberModdingTools is maintained by Zingabopp. Si usted encuentra que las herramientas son útiles, considere lanzar algo de apoyo hacia ellos.

Puedes descargarlo en su [GitHub](https://github.com/Zingabopp/BeatSaberTemplates/releases/latest).  
Necesitarás descargar `BeatSaberModdingTools.vsix`. (Ampliar el desplegable de Activos si no puede encontrarlo)

Una vez descargado, abre el `.vsix` y se instalará como un plugin de Visual Studio.  
Si tiene algún problema, consulte el proyecto [README](https://github.com/Zingabopp/BeatSaberModdingTools#readme) y [WIKI](https://github.com/Zingabopp/BeatSaberModdingTools/wiki).

## Configuración de la plantilla
Primero, crea un nuevo proyecto usando la plantilla.  
Vamos a utilizar la plantilla `BSIPA4 Plugin (Core)`, y llamaremos a nuestro mod `BSPlugin1`. Deberías cambiar el nombre a como quieras llamar tu mod.

![Selección de plantilla de modificación](~@images/modding/modding-template-select.png "Selección de plantilla de modificación")  
![Nombre de la plantilla de modificación](~@images/modding/modding-template-name.png "Nombre de la plantilla de modificación")

Luego necesitarás configurar tu Directorio de Beat Saber en Visual Studio. Follow the instructions [on the template readme](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use), or see the screenshot below.

![Configurar directorio de beat Saber](~@images/modding/setup-bs-directory.png "Configurar directorio de beat Saber")

At this point, **try and build the project**, and it should automatically find the references for you and the build should succeed.

Si tu compilación no tiene éxito, comprueba que no faltan referencias.

::: tip BeatSaberModdingTools manejará automáticamente las referencias. Si sus referencias no pudieron ser encontradas, [compruebe las instrucciones](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use) de nuevo.

Si necesita agregar referencias manualmente, haga clic derecho en `Referencias` en la carpeta del proyecto, entonces `Gestor de referencias de beat Saber...`. Seleccione sus referencias y luego haga clic en "Aplicar".

Puede encontrar más información sobre el gestor de referencias [aquí](https://github.com/Zingabopp/BeatSaberModdingTools/wiki/Adding-References). :::

## Inspeccionando el código
Debe tener 5 archivos abiertos automáticamente con la plantilla.

| Nombre del archivo       | Acerca de                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `manifest.json`          | Información sobre su mod para BSIPA.                                                        |
| `Plugin.cs`              | El archivo principal que se carga para tu mod.                                              |
| `AssemblyInfo.cs`        | Información de archivo sobre tu mod. Esto es administrado principalmente por Modding Tools. |
| `PluginConfig.cs`        | Una plantilla para activar la configuración de tu mod. Esto está comentado por defecto.     |
| `BSPlugin1Controller.cs` | Un MonoBehaviour genérico para tu mod.                                                      |

### Edita el manifiesto de tu mod
Rellena el archivo `manifest.json` con tu información.  
Las claves `name` e `id` se utilizan para identificar tu mod. El ID debe coincidir con el ID usado al subir tu mod a BeatMods.

::: warning **No** eliminar la dependencia de BSIPA. A partir de BSIPA v4.1 esto es necesario para que tu mod se cargue. :::

## Compilando
Construye tu plugin con `Build -> Build Solution` o <kbd>CTRL + SHIFT + B</kbd>  
¡Tu DLL compilada debería copiarse automáticamente en la carpeta `Plugins` en tu directorio Beat Saber! Esto se hará tanto para la depuración como para la versión de lanzamiento.

::: tip NOTA Cuando estés listo para sacar tu mod, selecciona la opción `Release` para hacer una versión de lanzamiento de tu mod.

Construir en modo Lanzamiento generará un archivo `.zip` empaquetado listo para subir a BeatMods. :::

## Probando tu mod en el juego
Para probar si tu mod está cargado en el juego, tendrás que iniciar Beat Saber con la consola BSIPA activada. Añade `--verbose` como argumento de lanzamiento y ejecuta el juego.  
Para más información sobre los argumentos de inicio, mira [aquí](./#launch-args).

Cuando inicies el juego, deberías ver BSIPA cargar tu mod en la ventana de la consola.

![Captura de la consola de testeo](~@images/modding/testing-console.png "Captura de la consola de testeo")

## Siguientes pasos
Aquí tienes algunos recursos útiles para continuar con tu carrera de modeador.

* Si necesitas ayuda para desarrollar mods, puedes preguntar en `#pc-mod-dev` en el [Discord de BSMG ](https://discord.gg/beatsabermods).
* Si quieres descompilar código, echa un vistazo a [dnSpy](https://github.com/dnSpy/dnSpy/releases)
* Consulte la documentación de BSIPA para obtener más información sobre el [sistema de configuración](https://bsmg.github.io/BeatSaber-IPA-Reloaded/tags/4.1.3/articles/start-dev.html#configuring-your-plugin).
* If you need to patch the game's code for your mod, you should use [Harmony](https://github.com/pardeike/Harmony#readme). The `0Harmony.dll` is already installed for modded games.
* For experienced developers, you may be interested in learning about Zenject, the Dependency Injection system used heavily by Beat Saber. [SiraUtil](https://github.com/Auros/SiraUtil#readme) is a library that allows you to easily hook into this system.
