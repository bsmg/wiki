---
sidebar: auto
---

# Soporte

## Índice

0. [Actualizaciones](#_0-updates)
1. [¿No hay mods?](#_1-no-mods)
2. [Problemas de juego después de la modificación](#_2-game-issues-post-modding)
3. [Preguntas comunes](#_3-common-questions)
4. [Solución de problemas varios](#_4-miscellaneous-troubleshooting)
5. [¿Aún tienes problemas?](#_5-still-having-issues)

## 0. Actualizaciones
After an update, the BSMG discord [#modding-announcements](https://discord.com/channels/441805394323439646/612468002243477505) channel should have the most up to date information on the status of mods. A continuación se ofrecen instrucciones más detalladas del procedimiento más habitual.

### Una actualización ha roto mis mods
**Ejecuta el juego una vez** en la nueva actualización. A continuación, vuelve a instalar tus mods utilizando un instalador listado en la [guía de principiantes](/beginners-guide), como Mod Assistant.

## 1. ¿No hay mods?

### Preguntas diversas

#### 1.1 No aparecen mods en una copia nueva del juego
En primer lugar, asegúrate de que lo siguiente es correcto:

* **Has ejecutado el juego una vez antes de instalar los mods**. BSIPA elimina todos los mods en la primera ejecución de una nueva actualización para evitar que se carguen los mods antiguos que no funcionen en una nueva versión. Vuelve a instalar los mods si este es el caso.
* Steam/Oculus está lanzando Beat Saber desde la **misma instalación** en la que están los mods. *por ejemplo, los mods están en la unidad D pero steam se lanza desde la unidad C.* Establece la ubicación de instalación correcta en tu instalador elegido.
* Si has instalado mods manualmente, asegúrate de que has incluido todos los archivos de la descarga y los has colocado en las carpetas correctas así como sus dependencias.

#### 1.2 Tenía mods instalados en una versión anterior, pero no se carga nada después de una actualización
Si los detalles del apartado 1.1 son correctos, prueba las soluciones siguientes, en orden descendente.

##### Solución 1

* Actualiza BSIPA a la última versión (en Mod Assistant o manualmente)
* Ve a tu carpeta de Beat Saber
* Ejecuta `IPA.exe`

##### Solución 2 (Sólo Steam)

* [Verifica tus archivos del juego](#verify-game-files-for-steam)
* Actualiza BSIPA a la última versión
* Ve a tu carpeta de Beat Saber
* Ejecuta `IPA.exe`

##### Solución 3

* Ve a tu carpeta de Beat Saber
* Haz una copia de seguridad de la carpeta `UserData` (opcional)
* Borra UserData

::: warning
¡Esto restablecerá todos los ajustes del mod!
:::

##### Solución 4

* Realiza una [instalación limpia](#clean-installation)

#### 1.2 Mod Assistant no parece instalar ningún mod
Los instaladores descargan los mods en `Beat Saber/IPA/Pending`, BSIPA mueve estos archivos a la carpeta raíz cuando se lanza el juego. Si la carpeta Plugins del juego sigue vacía después de esto, ejecuta de nuevo `IPA.exe` y asegúrate de que nada impide su ejecución, por ejemplo que se ejecute, `algún antivirus, permisos de administrador, etc.`

## 2. Problemas del juego después de la modificación

### El juego no arranca

#### 2.1 Error GetThreadContext falló
Si aparece una ventana que dice `GetThreadContext Failed` y/o escuchas un sonido de error de Windows, es posible que tengas un software en tu PC que rompe los mods de Beat Saber. Muchos programas antitrampas de terceros como ESEA y FaceIt impiden que BSIPA aplique mods a Beat Saber, incluso cuando no se ejecutan. Algunos programas antivirus también muestran un comportamiento similar.

Para resolver este problema:

1. Desinstala el sofware antitrampas.
2. Reinicia tu PC.
3. Comprueba si todavía existen restos del software en las carpetas dentro de `AppData`.
4. Ejecuta el juego. Si los problemas persisten entonces prueba lo siguiente: `Nota adicional: El problema puede seguir persistiendo por falta de permisos o excepciones, cualquier programa que pueda
bloquear BSIPA, o programas marcados como sospechosos pueden hacer que este problema persista`. Steam: [Verifica los archivos de juego de Steam](#verify-game-files-for-steam) Oculus: Realiza una [Instalación limpia](#clean-installation)

Esto debería solucionar el problema.

#### 2.2 Congelado al iniciar
Si el juego se congela en la pantalla de Salud y Seguridad, o ves un avatar en forma de T sin poder controlar el juego, [verifica tus archivos](#verify-game-files-for-steam) si tienes el juego en Steam, o reinstala el juego en Oculus Home. Consulta [Instalación limpia](#clean-installation)

Esto parece ocurrir cuando se actualiza Beat Saber y se tienen mods instalados previamente, pero no a los usuarios con instalaciones limpias del juego.

### Problemas en la tasa de fotogramas

#### 2.3 El juego se para de forma insufrible después de instalar mods
Si el juego se retrasa tanto que apenas puedes pulsar el botón `Continuar` en la pantalla de Salud & Seguridad, entonces verifica los archivos si tienes el juego en Steam, o reinstala el juego en Oculus Home. Haz lo mismo si no se inicia en absoluto y no muestra ningún mensaje de error al intentar iniciar el juego.

Si eso no ha solucionado el problema, entonces revisa la sección [2.4 Mejorar la tasa de fotogramas](#_2-4-improving-framerate)

#### 2.4 Mejorar la tasa de fotogramas
Si [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) no ha mejorado tus FPS, entonces tu PC podría simplemente estar combatiendo el estrés causado por los mods. Aquí hay algunas cosas que puedes hacer para mejorar la tasa de fotogramas, sin ningún orden en particular:

* Comprueba si NVIDIA GEFORCE EXPERIENCE ha configurado la escala de renderizado para Beat Saber más allá del valor predeterminado de 1,0. Es posible que lo haya ajustado a un número superior a 1,4 o 1,8, lo que aumenta considerablemente la carga de la GPU.
* Usa una avatar personalizado menos complejo.
* Los sables personalizados **Plasma Katanas** tienen toneladas de eventos personalizados y son conocidos por introducir lag si fallas.
* Camera2 y CameraPlus pueden ser muy exigentes, especialmente si tienes varias cámaras o aumentas el ángulo de visión.
* Desactiva la Escala de renderización, el Anti-Aliasing, el modo espejo, la niebla, etc. en los ajustes del juego base.
* Para los jugadores de Oculus Rift (CV1): considera el uso de 2 sensores en lugar de 3+.
* Reduce tu número total de mods y canciones.
* Realiza una [instalación limpia](#clean-installation) de los archivos del juego.
* La baja tasa de fotogramas también puede ser causada por algo que va mal dentro de su carpeta de datos de la aplicación, consulta [Borrar la carpeta de Beatsaber dentro de AppData](#deleting-your-save-in-appdata)
* Desactiva contadores de Counters+ como el contador de puntuación y la velocidad de balanceo, ya que pueden consumir bastante.
* HTTPStatus y DataPuller pueden causar picos de lag. Prueba sin este mod para ver si los picos de lag desaparecen.

La realidad virtual requiere de un uso intensivo de la CPU, especialmente si se añaden mods. Si tienes problemas para ejecutar el juego con los mods que deseas, considera actualizar tu hardware. Ten en cuenta que Beat Saber no utiliza mucho la GPU ya que visualmente es un juego bastante sencillo.

## 3. Preguntas habituales

### Varias

#### 3.1 Menú en blanco, sin botones
Si tu ventana principal del juego está en blanco, es probable que tu archivo de guardado se haya corrompido. Para solucionar esto, consulta [Borrar la carpeta de Beatsaber dentro de AppData](#deleting-your-save-in-appdata)

::: warning
Esto borrará tus resultados locales y las estadísticas.
:::

#### 3.2 ¿Cómo se utiliza el mod `x`?
Si utilizas Mod Assistant, haz clic en el mod y pulsa el botón "Información del mod". [BeatMods](http://beatmods.com) tiene un botón de "Más información" en cada mod también.

#### 3.3 Problemas con la vibración
Gameplay Modifiers Plus tenía un interruptor para activar/desactivar la vibración del mando. Si lo has desactivado y luego has eliminado el mod, tendrás que modificar manualmente el archivo de datos de guardado en el que se escribe. Abre `%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` y establece `controllersRumbleEnabled` a `true`.

Si esta no es la causa de tus problemas de vibración y lo siguiente es cierto con respecto a tus controles táctiles:

* los controladores táctiles son minúsculos
* no hay vibración al golpear varios bloques
* hay un ligero retraso al tocar los sables entre sí
* estás usando los controladores táctiles de Oculus

Entonces es muy probable que Beat Saber esté sobrecargando el controlador USB de tu placa base. Oculus devora el ancho de banda de tu controlador USB y la mayoría de las placas base vienen con un controlador muy barato. Beat Saber lo fuerza más que cualquier otro juego, esto es por lo que otros juegos y menús pueden estar bien. No hay una solución clara, así que prueba lo siguiente:

* Intercambia los cables USB del HMD y del sensor en diferentes puertos
* Desconecta dispositivos USB innecesarios
* Compra un concentrador USB de tipo PCI-Express
* Utiliza `-vrmode oculus` si utilizas SteamVR para saltártelo y utilizar el SDK de Oculus en su lugar

### Avatares personalizados

#### 3.4 Avatares personalizados que no se muestran en el juego
Haz clic en el botón **Inicio** del teclado con el juego enfocado para alternar la visibilidad en el auricular.

#### 3.5 Mis avatares no funcionan
Asegúrate de que tu mod de avatares personalizados está instalado correctamente y actualizado, también asegúrate de que sus dependencias están también. Puede que tengas un avatar corrupto/roto, tener un avatar roto puede romper todos tus avatares al igual que las canciones y los sables.

### Canciones personalizadas

#### 3.6 Faltan mis canciones
Asegúrate de que tus canciones están en tu carpeta `CustomLevels`, ubicada en `Beat Saber/Beat Saber_Data/`. De aquí es de donde el juego lee de forma nativa las canciones personalizadas.

**No** coloques las canciones en la antigua carpeta `Beat Saber/CustomSongs`. Esta ubicación está obsoleta ya que el formato de las canciones ha cambiado. Si tienes mapas en el formato antiguo (archivos `.json` y `.ogg` en lugar de `.dat` y `.egg`), déjalos en la antigua carpeta `Beat Saber/CustomSongs`. Tendrás que volver a descargarlos desde BeatSaver.

También puede convertirlos manualmente utilizando [Song Converter](https://github.com/lolPants/songe-converter), sin embargo, no obtendrás ninguna ayuda con este método y tendrás que compilar el programa tu mismo.

#### 3.7 Botón Play en gris
Haz clic en el botón azul brillante con el signo de interrogación (?) en la esquina superior derecha. This should tell you what mods are required to play the song, which you are missing and should install. Si sigue sin funcionar, prueba a reinstalar el mod necesario. De lo contrario, intenta una [Instalación-limpia](#clean-installation).

#### 3.8 Los detalles del mapa se quedan cargando infinitamente
Si esto sólo ocurre en determinados mapas, es posible que te falten mods necesarios o que esos archivos de canciones estén rotos. Si le pasa a todos tus mapas, borra tu carpeta `Plugins` y vuelve a instalar unos nuevos.

### Camera2

#### 3.9 My desktop view only takes up a small section of the screen
Your Camera2 display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader

#### 3.10 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your mods and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.11 Nothing Showing Up In The More Songs Menu
The probable causes for BeatSaver Downloader not working are:

1. Asegúrate de que todas tus canciones se han cargado antes, o de lo contrario el botón de More Songs aparecerá en gris.
2. Tu antivirus o cortafuegos está bloqueando el acceso a BeatSaver.
3. Has alcanzado el límite de intentos de Beatsaver y tendrás que esperar antes de volver a intentarlo.

### Códigos de error multijugador
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

## 4. Solución de problemas varios

### Comprender los registros
If you're on Steam you can go to
> Beat Saber > Properties > General > Add `--verbose` al campo de opciones de inicio

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* Esto puede no mostrarse el 100% de las veces para los avatares y sables, y puede que tengas que quitar todos tus avatares/sables y probar uno por uno para ver cual rompe el juego.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Verifica los archivos del juego en Steam
To verify integrity of game files follow these steps:

1. Asegúrate de que SteamVR está cerrado ya que de lo contrario no te dejará verificar tus juegos.
2. Ve a tu librería de Steam y encuentra Beat Saber
3. Haz clic derecho en Beat Saber y haz clic en Propiedades
4. Ve a la pestaña "Archivos locales" en las propiedades
5. Selecciona la opción "Verificar la integridad de los archivos del juego".
6. Deja que termine de verificar y descargar los archivos que faltan y ya debería estar listo.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Instalación limpia

1. (Opcional) Haz una copia de seguridad de los contenidos personalizados descargados haciendo una copia de las siguientes carpetas:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Borra TODA la carpeta de Beat Saber.** Esto es diferente a desinstalar el juego en Steam, ya que hacer esto no eliminará los archivos que no venían con el juego.

> Steam: ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Reinstala el juego a través de Steam o la tienda Oculus
4. **Antes de realizar las modificaciones, lanza el juego una vez**
5. Ejecuta Mod Assistant, instala tus mods, e inicia el juego.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Borrar tus datos guardados en AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Users > "USER" > AppData > LocalLow > Hyperbolic Magnetism > beat saber

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

* Asegúrate de que tu usuario actual **es un administrador**
* **Apaga** tu antivirus (durante el proceso al menos)
* Asegúrate de que tienes permiso para crear carpetas y editar archivos dentro de la unidad de disco/tu PC, (por lo que he oído una actualización de windows recientemente causó problemas a la gente)
* Asegúrate de que tus controladores están actualizados
* Comprueba que el problema no se encuentra en los auriculares, ni en el sistema operativo, ni en el hardware/software
* Comprueba tu conexión a internet, y que no haya nada que bloquee lo relacionado con el modding de BeatSaber y Steam, etc.

## 5. ¿Aún tienes problemas?
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:

* Utiliza los canales correctos por favor, `#pc-help` para soporte de mods en PC y `#quest-help` para soporte de mods en Quest. Utiliza `#pc-3d-modeling` y `#quest-3d-modeling` para preguntas sobre **hacer tus propios avatares, plataformas, notas o sables**, y `#mapping-discussion` para preguntas sobre **hacer mapas.**
* Sé educado y respetuoso
* Describe tu problema en detalle. "No funcionó" es tan descriptivo como decirle a tu médico que no te sientes bien. ¿Qué es lo que no funciona y qué has probado? ¿Hay algún mensaje que aparezca en la pantalla? ¿Toda tu pantalla se ha vuelto de color púrpura brillante?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Credit to Saber-Chan for their hard work on this page.
