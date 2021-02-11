---
sidebar: auto
description: Información esencial para ponerse en marcha usando Mediocre Map Assistant 2
tags:
  - Mediocre Map Assistant 2
  - MMA2
  - MM
  - Mapper mediocre
  - wiki
  - editor de nivel de beat saber
  - mapeo
  - hacer niveles
  - '¿cómo se hacen los mapas?'
  - editor de nivel personalizado
  - hacer mapas personalizados
  - editor de tablas personalizadas
---

# Guía de usuario de Mediocre Map Assistant 2
_Información esencial para ponerse en marcha usando Mediocre Map Assistant 2_

* [Glosario de términos](./glossary.md)

::: tip NOTA Esta guía actualmente soporta tanto [Mediocre Map Assistant 2](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest) por Assistant como Mediocre Mapper Mk5 (versión pública final) por Squeaksies. Todo el desarrollo público futuro tendrá lugar en MMA2. :::

## Configuración de Editor
### Instalación de Windows
1. Descargar MMMA2.zip desde [BSMG Git](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest).
2. Descomprime el archivo y coloca la carpeta extraída donde quieras en tu disco duro.
3. Haz doble clic en `mediocremapassistant2.exe` en la carpeta extraída para ejecutar.

::: warning Es **MUY** importante descomprimir el archivo en el paso 2 y solo ejecutar el exe en la nueva carpeta en lugar del que se encuentra dentro del zip porque no hacerlo causará problemas con la creación y edición del mapa! :::

#### Configuración inicial
La primera vez que ejecutes MMA2 necesitarás dirigirlo a la ubicación de dos carpetas: `CustomLevels` y `CustomWIPLevels`. Tienes varias opciones disponibles:

**Si tienes instalado Beat Saber en el ordenador:**
* Dar a MMMA2 la ruta a las dos carpetas apropiadas
   * Ejemplo de Steam: `C:\Archivos de programa (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels`
   * Ejemplo de Oculus: `C:\Archivos de programa\Oculus\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomWIPLevels`

**Si tienes la versión de Quest, O, no tienes instalado Beat Saber en el ordenador:**

1. Descargar `mapping-folders.zip` desde [BSMG Git](https://git.bsmg.dev/bloodcloak/mapping-qstart/releases/latest) que contiene carpetas preformateadas que imitan la instalación de un juego.
2. Extrae el zip a una ubicación de tu elección.
3. Introduce la ruta a la carpeta CustomLevels y CustomWIPLevels cerca de la parte inferior de la barra de configuración.
    * Ruta de ejemplo: `C:\Usuarios\bsmg\Documentos\Beat Saber\Beat Saber_Data\CustomWIPLevels`

* Alternativamente, puedes crear dos carpetas llamadas `CustomLevels` y `CustomWIPLevels` y luego proporcionarle la ruta a ellos.
<p align="center">
![Captura de pantalla de la entrada de ruta del Mapper Mediocre](~@images/mapping/mma2-folder-path.jpg)
</p>

Todos los archivos funcionales de tu mapa irán a una carpeta de nombre de canción dentro de esta carpeta CustomWIPLevels.

### Instalación de Linux
1. Descarga MMMA2.zip desde [BSMG Git](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest).
2. Descomprime el archivo y coloca la carpeta extraída donde quieras en tu disco duro.
3. Abre Steam. En la parte superior de la ventana, ve a `Steam > Configuración > Steam Play`. En la sección `Avanzado`, comprueba `Activar Steam Play para todos los demás títulos` si no lo esta ya. Reinicia Steam si se te pide que lo hagas.
3. En la parte inferior izquierda de la ventana principal de Steam, haz clic en `Añadir un juego`y luego `Añadir un juego que no sea de Steam`. Una ventana se abre, haz clic en `Navegar` en la parte inferior. Selecciona `Todos los archivos` como tipo de archivo. Encuentra dónde está `MediocreMapAssistant2.exe`, y añádelo.
4. Busca `Proton` en la barra de búsqueda de Steam, luego instala la última versión.
5. Haz clic derecho en el acceso directo de `MediocreMapAssistant2.exe` y abre el menú Propiedades. Marca `Forzar el uso de una herramienta específica de compatibilidad de Steam Play`y selecciona la última versión de Proton en el menú desplegable. En este paso, también podrías querer renombrar y añadir un icono al acceso directo ya que Linux no puede leer el logotipo incorporado para MMA2.
6. Ahora puedes usar MMMA2 iniciándolo a través de Steam. También puedes crear un acceso directo haciendo clic derecho en el acceso directo de MMA2 en Steam, luego debajo de la sección `Administrar` haciendo clic en `Añadir acceso directo al escritorio`.

#### Configuración inicial en Linux
La primera vez que ejecutes MMA2 necesitarás dirigirlo a la ubicación de dos carpetas: `CustomLevels` y `CustomWIPLevels`. Tienes varias opciones disponibles:

**Si tienes instalado Beat Saber en el ordenador:**
* Dale a MMMA2 la ruta a las dos carpetas apropiadas, con prefijo `Z:`.
  * Ejemplo: `/home/bsmg/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels` debe ser ingresado como `Z:/home/bsmg/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber/Beat Saber_Data/CustomWIPLevels`.
* Para encontrar donde está instalado Beat Saber, haz clic derecho en Beat Saber en Steam, ve a `Administrar > Explorar Archivos Locales`.
* Las carpetas deben estar ubicadas en el directorio `Beat Saber_Data`.

**Si tienes la versión de Quest, O, no tienes instalado Beat Saber en el ordenador:**
* Crea dos carpetas llamadas `CustomLevels` y `CustomWIPLevels` y luego proporciona la ruta a ellas. Ten en cuenta que las rutas habituales de Linux necesitan ser prefijadas con `Z:`.
   * Ejemplo: `/home/bsmg/MMA2/CustomLevels` y `/home/bsmg/MMA2/CustomWIPLevels` deben ser ingresados como `Z:/home/bsmg/MMA2/CustomLevels` y `Z:/home/bsmg/MMMA2/CustomWIPLevels` 
<p align="center">
![Captura de pantalla de la entrada de ruta de Mediocre Mapper para Linux](~@images/mapping/mma2-linux-path.png)
</p>

Todos los archivos funcionales de tu mapa irán a una carpeta de nombre de canción dentro de esta carpeta CustomWIPLevels.

### Comprobar la ruta del archivo WIP
La ruta indicada desde la configuración puede no ser llevada desde la pantalla principal. Asegúrate de que los campos tienen las rutas de tu configuración y no están en blanco. Si está vacío, añade la(s) ruta(s) desde [Configuración inicial](#first-time-setup) y presiona <kbd>Ingresar</kbd> para confirmar!  
<p align="center">
![Comprobar rutas no en blanco](~@images/mapping/mma2-checkWipSongPath.png)
</p>

### Ajustes del editor
Una vez que hayas configurado tus rutas, estas opciones básicas están disponibles en la página de selección de canciones cuando abras el programa por primera vez.
<p align="center">
![Pantalla de selección de canciones en Mediocre Map Assistant 2](~@images/mapping/mma2-song-setup.jpg)
</p>

#### Selección de Mapa
El panel de selección de mapa tiene cuatro pestañas, cada una con canciones listadas alfabéticamente.

* **Canciones WIP:** Esta pestaña contiene todas las carpetas del mapa guardadas en la carpeta `CustomWIPLevels`. Los mapas nuevos se crean aquí y son accesibles en el juego bajo "Custom WIP Levels."
* **Canciones personalizadas:** Esta pestaña contiene todas las canciones personalizadas descargadas guardadas en tu carpeta `CustomLevels`. Los mapas son accesibles en el juego bajo "Custom Levels."
* **Multi-Mapper:** Esta pestaña contiene cualquier mapa en el que se trabaje colaborativamente a través del *servidor Mediocre Mapper*
* **Cargador temporal:** Esta pestaña te permite ver una vista previa temporal de archivos zip en línea (p.ej. de #testplays, BeatSaver, o BeastSaber) sin descargar ni extraerlos.

Hay varias funciones disponibles para ti en esta pantalla:

* El botón <kbd>Actualizar lista de canciones</kbd> actualiza las canciones listadas.
* El botón <kbd>Editar</kbd> junto a un mapa lo abre en MMA2.
* El botón <kbd>Eliminar</kbd> junto a un mapa lo borra permanentemente. **Nota:** Una vez eliminado, los mapas desaparecerán para siempre y serán irrecuperables.
* La <kbd>estrella</kbd> al lado de un mapa lo marca como favorito, volcándolo al principio de la lista.

::: danger Los mapas eliminados por el botón de borrar en MMA2 no se envían a la papelera de reciclaje y se **eliminan de forma permanente.**  
Esto incluye la carpeta de autoguardados. Por favor, asegúrate y/o mantén copias de seguridad de tu trabajo en un lugar separado. :::

#### Creación de mapas
Debajo del panel de selección de mapa puedes crear una nueva carpeta vacía de canciones en `CustomWIPLevels` ingresando el nombre deseado de tu carpeta (típicamente Nombre de Canción o Artista - Nombre de Canción) y luego haciendo clic en <kbd>Crear Nivel</kbd>.

#### Configuración
El panel de configuración incluye ajustes globales para auto guardar, empaquetar zip, rutas de carpetas y más.

* **Configuración de guardado automático:** El autoguardado está activado por defecto en un intervalo de 300 segundos (5 minutos). Normalmente esto es bueno para la mayoría de los usuarios a menos que estés haciendo un mapa ligero. Auto guardar mientras se reproduce la canción en el editor también está activado por defecto.
* **Mapeo & Configuración de iluminación:**
   - No hay ninguna iluminación apagada por defecto, lo que significa que cualquier evento de iluminación colocado en la pista de iluminación se reproducirá. Marca para evitar que las luces se reproduzcan durante el mapeo.
   - Tienes la opción de proporcionar a MMA2 una carpeta alternativa para guardar tus canciones empaquetadas. Por defecto, la canción empaquetada se encontrará en la misma carpeta donde vive el mapa no comprimido.
* **Configuración Beta:** Si tiene instalado el mod de Mapeo de Extensiones tendrás casillas de verificación adicionales habilitadas para características de mapeo "extendidas", como colocación de precisión, rotación de precisión, y seis carriles. Se anima a los nuevos mapeadores a omitir esto hasta que se sientan más cómodos con lo básico.
* **Configuración antigua:** Si tiene instalado el mod de Chroma, puede marcar esta casilla para habilitar la barra de herramientas de iluminación de Chroma pero no ha sido compatible durante algún tiempo.
* **Otras configuraciones:** Haz clic en el botón <kbd>Limpiar ajustes</kbd> para revertir a la configuración predeterminada. También puedes introducir nuevas rutas para cualquiera de tus carpetas de canciones. Si por alguna razón nada funciona puedes hacer clic en el botón <kbd>Todo inexplicablemente roto?</kbd> para borrar tu archivo de configuración.

::: warning Confirma que las rutas de ambas carpetas están completas en la pantalla de selección de Canciones y añade la(s) ruta(s) desde [Configuración inicial](#first-time-setup) si están en blanco. Hay un error conocido que elimina la ruta de la carpeta CustomWIPLevels en el primer uso. :::

## Configuración de la canción
Una vez que hayas terminado la configuración del editor inicial, estarás listo para crear tu primer mapa.

### Creación de canciones
Tienes dos opciones para crear tu carpeta de canciones:
1. Introduce el nombre de la carpeta deseado en el panel 'Crear nuevo nivel' y haz clic en <kbd>Crear nivel</kbd>. Tu nueva carpeta aparecerá automáticamente en tu lista de mapas.  
   ![Using "Create A New Level" to make a song folder](~@images/mapping/mma2-create-new-level.jpg)
2. Ve a la carpeta `CustomWIPLevels` y crea una carpeta con el nombre de la carpeta deseada. Necesitarás hacer clic en <kbd>Actualizar lista de canciones</kbd> para ver tu carpeta.

Haz clic en <kbd>Editar</kbd> para ingresar la información de tu canción y metadatos.

### Ajustes de información de la canción
La página `Información de la canción` es la primera pantalla que veras cada vez que edites un mapa.
<p align="center">
![Pantalla de configuración de canciones de Mediocre Map Assistant 2](~@images/mapping/mma2-song-info.jpg)
</p>

#### Whole Map Settings
On the left side of the `Song Info` page is information that applies to your whole map. See [Beat Saber Metadata Criteria](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit) for standards on presenting complex song names and multiple artists.

::: warning Special characters such as those found in, Japanese (日本語/にほんご), Kaomoji (٩(◕‿◕｡)۶), Chinese (汉语/漢語), Arabic (اَلْعَرَبِيَّةُ‎), and accented characters (Ä/é/õ/Æ/ø/ß/Œ/Ð/ƒ) are not fully supported by BeatSaver. Using these characters in song metadata or in bookmarks will cause problems. :::

* **Song Name:** The primary name of the song
* **Song SubName:** Any following tags like (Short Ver.), (SDVX Mix), etc.
* **Song Artist:** The person or group who authored the song
* **Mapper:** This is YOU! It's recommended you list your name the same as your BeatSaver user name
* **BPM:** The tempo of the song. It's *critical* to get this right before you start. See [Basic Audio Setup](./basic-audio.md) for guidance
* **Audio File Name:** The name of the song file (including the extension) you have placed in `CustomWIPLevels > [Song Folder]`. Recommended to just name it *song.ogg* to avoid the pitfalls of special characters
* **Preview Start Time:** Position in the song file, in seconds, of the start of the in-game menu song preview. Defaults to 12s
* **Preview Duration:** Duration, in seconds, of the in-game menu song preview. Defaults to 10s
* **Cover Image Name:** The name of the image file (including the extension) you have placed in `CustomWIPLevels > [Song Folder]`. Must be perfectly square and at least 256 px
* **Environment Name:** A dropdown menu of the default environments or platforms available. See [Basic Lighting Practices](./basic-lighting.md#environment-previews) for an overview of these environments
* **Custom Platform:** The copy/pasted name of a custom platform from [ModelSaber](https://modelsaber.com/Platforms/). This feature is glitchy and it's recommended that you JSON edit any custom platform information

The <kbd>Open Song Folder</kbd> button will open your song folder in Windows Explorer. This will help you confirm that you have your files in the right spot. The <kbd>Package Song to Zip</kbd> button will remove your autosaves folder and zip the files for BeatSaver. The <kbd>Save Song Info</kbd> button commits all of your metadata to the Info.dat file

#### Difficulty Settings
On the right side of the `Song Info` page is the area where you create individual difficulties and edit data that only applies to a single diffculty level. To create your first difficulty:

1. Click the **<kbd>Add Difficulty</kbd>** button.
2. In the **Difficulty** dropdown select which difficulty you want to make (easy, normal, hard, expert, or expertplus).
3. In the **Characteristic** dropdown you can select Standard, No Arrows, or Single Saber.
4. **Difficulty Label** is optional and allows you to give your difficulties custom names in-game. If left blank, the difficulty set in the dropdown will be displayed instead. *This feature may not reliably work on all VR models*.
5. The **Start Offset (ms)** field is where you entered an offset value, in milliseconds, if needed based on the way you [setup your audio file](./basic-audio.md).
6. The **Note Jump Speed** field is where you change the speed at which the notes move down the track. Click into the field for a pop-up of helpful information. See [Basic Mapping Practices](./basic-mapping.md#gauging-difficulty-down-mapping) for guidance on setting an appropriate NJS for your difficulty.
7. The **Spawn Distance Modifier** field allows you to adjust how far down the track your blocks appear. Changing this value will adjust the "jump distance" guidance pop-up.

::: tip You **must** click <kbd>Apply Modifications</kbd> if you make a change to difficulty settings, otherwise it will not be saved. In MMA2 this appears to automatically happen when you enter a song file for editing. :::

Click <kbd>Edit Level</kbd> when you're ready to start mapping!

#### Color Override Settings
You can set the environment color overrides for the selected difficulty using the squares on the right side of the `Song Info` page. Hovering over a square will list what override the square is for. Clicking on the square will bring up the color picker. Right clicking on the square will remove the overridden color (returning back to the default color).

* `colorLeft` and `colorRight`: Color of the left and right hand blocks
* `obstacleColor`: Color of the walls
* `envColorLeft` and `envColorRight`: First pair of lighting colors
* `envColorLeftBoost` and `envColorRightBoost`: Second pair of lighting colors

#### Other Settings
* **Contributors Tab:** This left side tab is an optional spot to give credit to mappers, lighters, playtesters or other contributors to your map. Enter the contributor role, their name, and the file name of a square "profile image" which you place in your song folder
* **Extra Fields:** This right side tab allows you to include in-game viewable warnings (i.e, Seizure Alert), information, suggestions (i.e. Use Chroma), and requirements (i.e., Mapping Extensions)
* **Autosaves:** This right side tab allows you to easily restore an autosaved version of your map if you've crashed or need to revert work

### Mapping Settings
Mapping settings can be accessed by clicking the hamburger menu in the top right while editing the map. It can also be toggled using the <kbd>ESC</kbd> key. These settings persist throughout your mapping session but will be reset the next time you open the editor. The `Mapping Settings` pane also includes a comprehensive list of keybindings.
<p align="center">
![Mapping Setting screen in Mediocre Map Assistant 2](~@images/mapping/mma2-mapping-settings.jpg)
</p>

* **<kbd>Move WaveForm to Other Side</kbd>**: This button will shift the wave form from the left of the mapping track to the left of the lighting track. Useful during the lighting process.
* **Playback Speed:** Will slow down the map and song in the editor. Decimal values representing pecentage (i.e., 1.0 = 100% speed). This feature is helpful when timing particularly gnarly sections of a map.
* **Editor Scale:** Adjusts the spacing of the beat markers on the map to help with visibility. Increase the number to spread notes or lighting events out more for easier placement.
* **Note Sound:** Allows you to select from several in-editor hit sounds to help with timing. Select `None` to turn off hit sounds in the editor. *This does not impact hit sounds in-game*
* **Music Volume:** Adjusts the volume of the song in the editor only. 100% by default.
* **Hit Volume:** Adjusts the volume of the hit sounds in the editor only. 100% by default
* **Metronome Volume:** Adjusts the volume of an in-editor metronome. 0% (off) by default
* **Enable WaveForm:** Toggles the wave form visualizer on and off. The wave form is incredibly helpful for timing but it very resource intensive on your CPU
* **Move Every Object (in beats):** Allows you enter a decimal value in beats, positive or negative, to shift ALL objects that number of beats up or down the track. Helps you fix hot starts if you didn't correctly set up your audio file
* **<kbd>Apply Move:</kbd>** This button will commit the note movement specified above
* **<kbd>Make/Delete Bookmark</kbd>**: This button will add a bookmark at the current cursor placement if one doesn't exist (add a name and hit enter to save) or will delete an existing bookmark
* **<kbd>Set Preview Start at Cursor</kbd>**: This button allows you to quickly reset the beginning of your in-game music preview at the cursor location

## Editor Controls
There are usually multiple ways to accomplish the same action, however, the keyboard shortcuts at the link below are the most efficient.

* [Editor Keybinds](./editor-keybinds.md)

## Error Checker
The **Error Checker** functionality is one of the top quality of life features found in MMA2. Access the error checker by clicking <kbd>SHIFT+TAB</kbd> to check for vision blocks, double directionals, stacked notes, and view map stats.
### Finding & Interpreting Errors
This section walks you through basic usage of the error checker's primary functions: **Check for Double Directionals, Check for Vision Blocks**, and **Check for Stacked Notes**
#### Navigating the Error Checker
Here is the main panel for the Error Checker:
<p align="center">
![Error Checker main panel](~@images/mapping/mma2-ec-panel.png)
</p>

1. **Minimum Time:** The minimum amount of time in beats that will be checked. Leave it alone.
2. **Maximum Time:** The maximum amount of time in beats that will be checked. You’ll need to adjust this based on both the BPM and NJS (Note Jump Speed) of your song/level. ***1.5 beats is the minimum recommended for new mappers.***
3. **Double-Directional Checker:** Highlights any instances of a block of the same color pointing in the same direction within the number of beats specified in *Maximum Time*.
4. **Vision Block Checker:** Highlights any instances of blocks or walls obscuring or hiding a block within the number of beats specified in *Maximum Time*.
5. **Stacked Block Checker:** Highlights any instances where multiple blocks are stacked on top of each other.
6. **Clear Errors:** Clears highlighting from all error blocks. They’re still errors, just not marked.
7. **Previous/Next:** Jumps you backwards or forwards through your map to each highlighted error.
8. **Stat Panel:** A wondrous box of delicious statistical information that can help you ensure that your map is leveled appropriately and follows row placement best practices.
9. **Lightmap Integration:** Not part of error checking, and not covered in this guide, but this is how you can add fast (but terrible) lights.

#### Highlighted Errors
Once you click <kbd>Check for {error of your choice}</kbd> pay attention to the bottom center of your screen. Red text will pop up that tells you how many errors were found within the specified number of beats:
<p align="center">
![122 errors found... don't do this. This is bad.](~@images/mapping/mma2-errors_found.png)
</p>

* Only one error can be highlighted at a time.
* Clicking one error button immediately after the other will wipe out the error highlights and replace them with the next type.
* Use the previous and next buttons to jump from error to error to resolve them.

**For Double-Directionals:** The highlighted block is the second instance of a same color-same direction, so look back in time to see the first block in the sequence. You can change either the first instance or the second instance to correct the error. Once you’ve made your change you can click “Check for Double Directionals” again to see if the issue is resolved. You can change the max time value to suit the speed of your song. 2.0 beats is a good baseline for new mappers but the faster the song the more beats you may need for a reasonable reset (if that is your intention).

|                            Example                             | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:--------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Double directional example](~@images/mapping/dd_example.png) | In this example, max time is set to 0.75 beats.<br />There is a set of down notes 1/2 beat apart and then a set of diagonal notes 1/2 beat after that. The first set of blocks isn't flagged but the next two are because they are double directionals within 3/4 (0.75) of a beat after the first set.<br />You have two options:<br />* Change one of the blocks<br />* Force the player to “reset” (return their arms/hands to a neutral position) if there’s enough time. |

::: tip Keep clicking the “Check for Double Directionals” button… sometimes fixing one error can create a new error out of your line of sight. Check early and often! :::

**For Vision Blocks:** The highlighted block is being obscured by the blocks immediately in front of it within the specified distance. This guide won’t get into details on vision blocks but mappers should be very selective when placing any blocks in the center two positions as those are at eye-height for the player in-game and are not-so-affectionately referred to as “facenotes.” Blocks in other positions can be vision blocks as well but the two center positions are the most likely culprits. Depending on your BPM, 1-2 beats is fine.

|                         Example                          | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:--------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Vision block example](~@images/mapping/vb_example.png) | In this example, I have my max beats set to 2 beats<br />At beat 150 there are facenotes blocking everything behind them. At beats 151 and 151.5 there are highlighted red and blue blocks indicating that the previous blocks are a problem.<br />You have two options:<br />* Move/delete the top two blocks (removing the vision block)<br />* Move the back two blocks further out in time so the player has a chance to react to them |

### Stats Panel
When you’re ready, click the Stat Panel button to open an incredibly helpful information window. You can get information by hovering over each title.

::: tip
* Use <kbd>CTRL</kbd>+scroll to select a section you want to check the stats for, hit <kbd>SHIFT</kbd>+<kbd>TAB</kbd> and click the <kbd>Stats Panel</kbd> button to see values for that section only.
* Hover over the **NPS** value to see the difficulty ranges for OST1 tracks. See this [updated list of OST tracks](https://docs.google.com/spreadsheets/d/13wyoviJAplYOrsMocOA7YNXJxVRHd74G7z4U2jhCZa4/edit?usp=sharing) for the latest (and greatly increased) NPS ranges. :::

|                             Example                              | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Stats panel screenshot](~@images/mapping/mma2-stats-panel.png) | **Notes:** The total number of notes in your map.<br />**Notes per Second:** The number of notes in your map divided by the number of seconds in your map. This number isn’t accurate until you’ve finished mapping, unless you've only selected a small section.<br />**Bombs, Walls, and Lighting:** The number of each event you have in your map.<br />**R/B Ratio:** If you have exactly the same number of red and blue blocks this will be 1.00. Greater than 1 you have more reds. Less than 1 you have more blues.<br />**Vision Block:** The percentage of your map’s blocks that are vision blocks at 0.75 beats. Use the vision block checker to highlight these blocks.<br />**Vision Block (A):** The percentage of your map’s blocks that are vision blocks at 1.25 beats. Useful for faster songs. Use the vision block checker with a max time of 1.25 to highlight these blocks.<br />**Top/Middle/Bottom Notes:** The percentage of your blocks that are placed in each row. |

## Troubleshooting
#### **Create Level button does nothing even if a song name is entered**
* [Check both folder paths](#check-the-wip-file-path) are complete on the Song Selection screen and add the path(s) from [First Time Setup](#first-time-setup) if blank. There is a known bug that deletes the CustomWIPLevels folder path on first use.
* Make sure the Song Name field below the button is not blank/has text.
* Make sure you are launching the editor from the extracted folder, not the zip (MMA2.zip) you downloaded.
___
#### **My song is stuck loading in the editor forever or returns to the edit song screen after briefly loading**
* This error is usually caused by a missing, corrupted, or invalid audio file. Re-read [Basic Audio Setup](./basic-audio.md) to ensure you've exported everything correctly and make sure that your file is in the correct folder. Usage of convert to OGG websites is the common cause of this issue.
* The audio file is not in the correct location. Make sure it is in the folder that MMA2 created for your song!
   * The folder you should put the `.ogg` song file is located to the path you put during [First Time Setup](#first-time-setup) and should contain at least an `Info.dat` file.
* Make sure you are launching the editor from the extracted folder, not the zip (MMA2.zip) you downloaded.
___
#### **I can't figure out how to place dot notes**
* Press `F`
   * You can review the keybindings by pressing <kbd>ESC</kbd> for the in-editor list or consult the cross-reference list of [Editor Keybinds](./editor-keybinds.md).
___
#### **Map doesn't load in game**
* This error is caused by incorrect information in the `Info.dat`.
   * A difficulty's `"_beatmapFilename"` in the `Info.dat` might be using a different file name than what is present in the folder.
   * A deleted difficulty is still being referenced in your `Info.dat` file.
      * Check to make sure you do not have unintended difficulties in the `"_difficultyBeatmaps"` cluster of each present characteristc.
___
#### **One Saber maps don't load in game**
* Update to the latest MMA2 on the [BSMG Git](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest) then open the map [song info settings](#song-info-settings) and press `Save song info`.
___
#### **No Arrows maps don't load in game**
* Update to the latest MMA2 on the [BSMG Git](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest) then open the map [song info settings](#song-info-settings) and press `Save song info`.
___
#### **90/360 maps don't use the Glass Desert Environment**
* Open the map's Info.dat in a text editor and add `"_allDirectionsEnvironmentName": "GlassDesertEnvironment",` after `"_environmentName": "DefaultEnvironment",` or similar if you set a different environment for other difficulties.

:::tip If you are not comfortable editing the Info.dat, you can zip up your map and use [Schema Fixer](https://skystudioapps.com/mapping-tools/#schema-fixer) by **+1 Rabbit** to make the one time adjustment! :::
___
#### **Your audio file name is wrong. Enter only the name NOT the path.**
![Audio File Name Wrong](~@images/mapping/mma2-wrongPath.png)
* You might have unintentionally named your audio file `song.ogg.ogg`. Turn on file extensions in file explorer to make sure it is named `song.ogg`. The option is located here:  
  ![Turn on File Extensions](~@images/mapping/turnOnFileExtend.png)

* [Check both folder paths](#check-the-wip-file-path) are complete on the Song Selection screen and add the path(s) from [First Time Setup](#first-time-setup) if blank. There is a known bug that deletes the CustomWIPLevels folder path on first use.
* Your audio file name contains extra periods `.`
   * For example `Sick Beats feat. CMB (Nightcore Ver.).ogg` will cause this issue due to the `.` after "feat" and "Ver".
      * To prevent this in the future, it is easier to name your audio files `song.ogg`.
      * You can also rename the audio file removing the extra `.` for example, `Sick Beats feat CMB (Nightcore Ver).ogg`
* Your audio file may be invalid. This is commonly caused by websites that promise to "convert to OGG" but do not do it properly. Review [Basic Audio Setup](./basic-audio.md) to ensure you've exported everything correctly and that your file is in the correct folder.
___
#### **When I open the editor, all I see is a grid and block and can't interact with it**
![Broken Editor](~@images/mapping/mma2BrokenApp.png)
* Navigate to your `\AppData\Local` and delete the `MediocreMapAssistant2` folder. Then run `mediocremapassistant2.exe` and follow [First Time Setup](#first-time-setup) again.
   * You can copy and paste this path into the file explorer address bar to quickly get to the folder: `C:\Users\%username%\AppData\Local\MediocreMapAssistant2`
___
#### **When I open the editor, it crashes with a Error: The following component(s) are required to run this program: DirectX Runtime**
![FatalError](~@images/mapping/mma2-no_directx.jpg)
* If your error matches what is shown in the picture. Close out of the dialog and install this [DirectX driver](https://www.microsoft.com/download/details.aspx?id=35).
   * If you get this error while installing the driver.  
     ![directX Install Error](~@images/mapping/mma2-directXError.png) 1) Download and run the [.NET Framework Repair Tool](https://docs.microsoft.com/dotnet/framework/install/repair). 2) Restart your computer and rerun the DirectX driver installer.
___
#### **When I open the editor, it crashes with a LowLevelFatalError: [Line XX] Failed to load module**
![FatalError](~@images/mapping/mma2-physXerror.png)
* If your error matches what is shown in the picture. Close out of the dialog and install this [DirectX driver](https://www.microsoft.com/download/details.aspx?id=35).
   * If you get this error while installing the driver.  
     ![directX Install Error](~@images/mapping/mma2-directXError.png) 1) Download and run the [.NET Framework Repair Tool](https://docs.microsoft.com/dotnet/framework/install/repair). 2) Restart your computer and rerun the DirectX driver installer.


## Credits
Content in this section was authored by [Helen Carnate](./mapping-credits.md#helen-carnate), [Bloodcloak](./mapping-credits.md#bloodcloak), and [Gabmiral](./mapping-credits.md#gabmiral).
