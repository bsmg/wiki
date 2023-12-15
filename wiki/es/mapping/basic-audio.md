---
prev: false
next: false
description: Cómo configurar el archivo de audio y prepararlo para el mapeo.
---

# Configuración básica de audio

_Configura tu archivo de audio y tenlo listo para mapear._

- [Glosario de términos](./glossary.md)

Esta página proporciona a mapeadores nuevos y experimentados recomendaciones generales para configurar un nuevo archivo de canciones antes de empezar a mapear. Revisa la guía de inicio rápido de abajo para ver los pasos que son **críticos** antes de comenzar a mapear vs. aquellos que se pueden hacer en cualquier momento, si son necesarios.

## Inicio rápido de configuración de audio

::: warning

- Steps 1-3 **MUST** be completed before you start mapping or your audio will be out of sync and may have a [_hot start_](./glossary.md#h).
- Usar sitios web en línea para convertir audio a `.ogg` puede resultar en que tu archivo de audio sea tratado como inválido y no será cargado por el juego! Procesar y exportar desde [Audacity](https://www.audacityteam.org/) es la forma más fácil de asegurar que el archivo de audio funcione como se esperaba. :::

1. Descargar e Instalar [Audacity](https://www.audacityteam.org/)
   - Opcionalmente instala el complemento [ffmpeg para windows](https://manual.audacityteam.org/man/installing_ffmpeg_for_windows.html) para abrir tipos de archivo adicionales como `.aac` o `.m4a` de iTunes.
2. Encuentra el BPM y el offset de tu canción para [sincronizar tu canción](#syncing-audio)
3. [Exportar tu canción](#exporting) como un archivo de formato `.ogg`

**En cualquier momento antes de subir:**
4. [Comprueba el volumen de tu canción](#check-song-volume) para hacerla [más fuerte](#making-your-song-louder) o [más suave](#making-your-song-softer) según sea necesario
5. Comprueba la longitud del final de tu canción y [recortalo](#trimming-the-outro) si es necesario

## Selección de canciones para nuevos mapeadores

A continuación se muestran recomendaciones, **no** requisitos, que te ayudarán a iniciarte en el mapeo. If you want to map 17 minutes of "In A Gadda Da Vida" for your first map then have at it but know that you'll face a **lot** of additional challenges.

- Elige una canción que tenga un pulso claro al que mapear. Algunos géneros funcionan mejor que otros.
- Elige una canción con un tempo consistente (por ejemplo canciones con tambores electrónicos). Los que tienen cambios de tempo/BPM con el tiempo pueden ser muy complicados de mapear.
- Elige una canción mas bien corta (si son menos de 3 minutos mejor). Mapear una épica de 10 minutos para empezar puede llevar a la frustración y/o a la quemadura.
- Finally, choose a song that you don't mind listening to over and over and over and over again. But avoid mapping your favorite song as your first few maps, save that for when you're more experienced.

## Calidad de audio

Antes de comenzar el mapeo, asegúrese de tener un archivo fuente de alta calidad para su canción. Muchos mapas tienen terribles archivos de audio, a menudo desde YouTube o archivos de baja tasa de bits. Este es un juego para la música después de todo, por lo que tener un buen audio es esencial para una buena experiencia de jugador.

Sigue estas pautas generales mientras trabajas en tus mapas:

- Utiliza la fuente de la más alta calidad que puedes encontrar como archivos **FLAC o WAV(E)** (formato sin pérdida).
- Un segundo cercano son archivos de alta tasa de bits (+200kbps) **MP3 o AAC** (formatos con pérdida).
- Usa YouTube **solo** como último recurso. El bitrate es bajo y el volumen rara vez es correcto. En este caso podría ser necesaria alguna edición de audio (ver [Edición opcional de audio](#optional-audio-editing)).

> Sites where you can buy the tracks/album, such as an artist's [Bandcamp](https://bandcamp.com/), usually will have the highest quality source available. Si el artista no tiene un Bandcamp disponible, Google Play Music, Amazon Music e iTunes son alternativas para archivos MP3 de alta calidad.

Al comprar y utilizar un archivo de audio de alta calidad, no sólo está apoyando a su artista, pero te ahorras un montón de dolor de cabeza durante el mapeo. Mira la diferencia de calidad para la misma canción, al mismo ritmo.

<!-- prettier-ignore -->
| Calidad OGG |                     YouTube                     |                     MP3                      |                     WAV                      |                      FLAC                      |
|:-----------:|:-----------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------------------------------------------:|
|      1      | ![YouTube](/.assets/images/mapping/ytrip1.jpg)  |  ![MP3 1](/.assets/images/mapping/mp31.jpg)  |  ![WAV 1](/.assets/images/mapping/wav1.jpg)  |  ![FLAC 1](/.assets/images/mapping/flac1.jpg)  |
|      5      | ![YouTube](/.assets/images/mapping/ytrip5.jpg)  |  ![MP3 5](/.assets/images/mapping/mp35.jpg)  |  ![WAV 5](/.assets/images/mapping/wav5.jpg)  |  ![FLAC 5](/.assets/images/mapping/flac5.jpg)  |
|     10      | ![YouTube](/.assets/images/mapping/ytrip10.jpg) | ![MP3 10](/.assets/images/mapping/mp310.jpg) | ![WAV 10](/.assets/images/mapping/wav10.jpg) | ![FLAC 10](/.assets/images/mapping/flac10.jpg) |

¿Puedes ver la diferencia? You cannot scale up audio quality; only starting with a high quality audio file can give you clean, precise lines.

Consulte la página [Edición avanzada de audio](./advanced-audio.md) para obtener técnicas y herramientas más profundas para analizar la calidad de audio de los archivos.

## Sincronizando el audio

Para facilitar el mapeo y asegurarse de que la canción está perfectamente sincronizada con el ritmo del juego, es necesario configurar correctamente el archivo de audio. Esta sección asumirá que estás utilizando [Audacity](https://www.audacityteam.org/).

### Planifica tu primera nota

Analiza la introducción de la canción. Depending on where in the song you want to place your first block, you'll need to avoid both a _hot start_ (not enough time before the first block) and a too-long intro. Tu canción encajará en una de estas tres categorías:

1. **Canciones sin intro:** Es crítico dejar **como mínimo dos segundos** de tiempo de preparación para el jugador antes de la(s) primeras nota(s) jugable(s) en tu mapa, de lo contrario, esto se conoce como "Comienzo caliente"
2. **Canciones con una breve introducción:** Si tu canción tiene una introducción corta de **menos de ocho segundos** está bien que la música se empiece a reproducir inmediatamente.
3. **Canciones con una introducción larga:** Si la canción tiene una introducción muy larga e inédita/desvanecida/desvanecida durante **más de diez segundos** es muy recomendable acortar la introducción para que la primera nota (s) se coloque en un plazo de ocho segundos desde el inicio del mapa.

En todos los casos anteriores tendrás que mover la canción a el momento apropiado basado en tus necesidades:

1. **Sin intro:** Mueva la canción de vuelta en el tiempo (a la derecha en la pista de audio), colocando la primera nota(s) mapeada después de dos segundos. Luego sincroniza la canción con el ritmo. Más tarde llena el hueco con silencio.
2. **Breve introducción:** Sincronice la canción al ritmo y luego llene el espacio con silencio dependiendo del caso que se aplique.
3. **Introducción larga:** Mueve la canción hacia adelante en el tiempo (a la izquierda en la pista de audio), colocando la primera nota(s) dentro de 8 segundos, luego recorta el audio antes de 0 segundos.

Hay dos formas de sincronizar tu audio:

- El método recomendado para sincronizar canciones es [usando Arrow Vortex](#sync-using-arrow-vortex).
- El método alternativo para sincronizar canciones es hacerlo manualmente [usando un Click Track](#sync-using-a-click-track).

### Sincronizar usando Arrow Vortex

[Arrow Vortex](https://arrowvortex.ddrnl.com/) is a free tool to analyze a song's BPM automatically. También encontrará el offset necesario para alinear el audio al ritmo en Audacity o en tu editor de mapas.

**Using Arrow Vortex to find BPM and offset:**  
The steps listed below are the same as those used in Ryger's [Arrow Vortex BPM Analysis Video Tutorial](https://youtu.be/Z49UKFefu5c) (which also includes BPM confirmation).

1. Descargar Arrow Vortex (AV), extraer el archivo y abrir `ArrowVortex.exe`
   - [Descarga Zip](https://cdn.discordapp.com/attachments/443569023951568906/662417326771273728/ArrowVortex.zip) en discord (Método recomendado)
   - Sitio web de Arrow Vortex [Descarga rar](https://arrowvortex.ddrnl.com/)
   - Necesitará software adicional como [7zip](https://www.7-zip.org/) para extraer archivos `.rar` como este.
   - If Arrow Vortex does not open see [troubleshooting](#troubleshooting-arrow-vortex).
2. Exporta tu canción a `.ogg` usando [Audacity](https://www.audacityteam.org/)
   - Using other formats (ie. `.mp3` or `.m4a`) adds a delay to the audio that varies every time and is not accounted for when you export your changes for use in editor.

:::danger **¡Este es un paso crítico!**  
No usar un archivo `.ogg` o usando la función de exportación en AV **desincronizará** la canción por una cantidad inconsistente de tiempo. :::

3. Arrastra el archivo de canción en la ventana AV
4. Ve al menú `Ver` y haz clic en `Tiempo basado (C-mod)` para ver la forma de onda
   - Usa <kbd>CTRL</kbd> + rueda del ratón para acercar
5. Ve al menú `Tempo` y haz clic en `Ajustar la sincronización...` o simplemente presione <kbd>SHIFT</kbd>+<kbd>S</kbd> para abrir la ventana de ajuste.
6. Haga clic en el botón <kbd>Buscar BPM</kbd>
   - Si tienes suerte, AV devolverá un solo valor BPM con 100% de confianza.  
     ![Ventana de ajuste AV](/.assets/images/mapping/adjustments.png)
   - If you get multiple options you will want to listen to the options to see if they match with the song. Most of the time it will be the first option but follow steps 7 and 8 to make sure.  
     ![Multiple BPM Values](/.assets/images/mapping/alternateAdjustments.png)
7. Haga clic en el botón <kbd>Aplicar BPM</kbd>
8. Pulsa <kbd>F3</kbd> para encender ticks y pulsa <kbd>Barra espaciadora</kbd> para escuchar la canción para confirmar que el comienzo, el medio, y el final de tu pista están alineados.
   - If only a single result was given and the ticks do not match, this suggests that the song has a variable BPM.
   - If the detection gave multiple options and the ticks do not match, select the next option, click the <kbd>Apply BPM</kbd> button and listen again. If none of the options work for the song, this suggests that it has a variable BPM.

:::warning NOTA sobre el BPM Variable Se recomienda que los mapeadores más nuevos elijan una canción diferente debido a la mayor dificultad asociada al mapeo de BPM variable. ¿No estás seguro de si tu canción es variable? ¡Pásate por `#mapping-discussion` en BSMG y pregunta!

Si tienes la experiencia, consulta [Edición avanzada de audio: BPM Variable](./advanced-audio.md#variable-bpm) sobre cómo considerar esto. :::

10. Give the player about two seconds to get ready by clicking the `Move first beat` button ![Arrow Vortex move beat button](/.assets/images/mapping/av_movebeat.png) {.inline} however many times needed to get your start time close to 2.000 seconds or the sound you want to place your first note on aligned with the first bar.  
    ![Alternativa alineada con la primera barra](/.assets/images/mapping/av_aligned.png) ![Alternativa alineada con la primera barra](/.assets/images/mapping/av_altAligned2.png)
    - After aligning, you should check the song again to verify that the beats still match.
11. Now that you have the BPM and offset, you will need to add or remove the right amount of silence to the song track.

---

**Si tienes un offset positivo**, necesitarás añadir esa cantidad a la intro.

1. Open the song in Audacity if you haven't already done so, then switch to the Selection Tool (![Selection Tool](/.assets/images/mapping/selection.png) {.inline}).
2. Coloca el cursor en el inicio de la canción (haz clic en la canción y presiona la tecla <kbd>Inicio</kbd>).
3. Haz clic en `Generar – > Silencio…` ![Generar silencio...](/.assets/images/mapping/audacity-generate_silence.png)
4. Ingresa el valor `de offset de música` que obtuviste de Arrow Vortex (o herramientas similares) y luego haz clic en Aceptar. ![Añadiendo silencio con Audacity](/.assets/images/mapping/av_audacity.png)
5. Hecho. Ahora puede saltar a [exportar](#exporting) o ir a [edición opcional de audio](#optional-audio-editing).

Después de generar el silencio puedes hacer clic en la línea oscura de la canción para deshacerte del corte.

---

**Si tienes un offset negativo**, necesitarás eliminar esa cantidad de la intro.

1. Open the song in Audacity if you haven't already done so, then switch to the Selection Tool (![Selection Tool](/.assets/images/mapping/selection.png) {.inline}).
2. Agregar una nueva pista mono ![Agregar una nueva pista mono](/.assets/images/mapping/audacity-add_new-mono-track.png)
3. Selecciona la nueva pista y pulsa la tecla <kbd>Inicio</kbd>.
4. Haz clic en `Generar – > Silencio…` ![Generar silencio...](/.assets/images/mapping/audacity-generate_silence.png)
5. Ingrese la cantidad de desplazamiento negativo encontrada en Arrow Vortex (o herramienta similar) en el campo Duración y haga clic en Aceptar. ![Añadiendo silencio con Audacity](/.assets/images/mapping/av_audacity-negative.png)
   - You should see something similar to this  
     ![Resulting Silence](/.assets/images/mapping/audacity-neg-generated_silence.png)
6. Select from the end of the generated silence (yellow vertical line) to the start of the song track selecting the contents of both tracks.<br/>![Select up to generated silence](/.assets/images/mapping/audacity-neg-select_silence.png)
7. Pulsa la tecla <kbd>Eliminar</kbd>.
8. Haga clic en la X de la pista más reciente para borrarlo.  
   ![Eliminar la pista](/.assets/images/mapping/audacity-delete_track.png)
9. Hecho. Ahora puede saltar a [exportar](#exporting) o ir a [edición opcional de audio](#optional-audio-editing).

> Si no te sientes cómodo eliminando la cantidad exacta, puedes eliminar más de lo necesario, exportar el `.ogg` modificado y [re-sincronizar usando tu herramienta](#sync-using-arrow-vortex) con el nuevo archivo para obtener un desplazamiento positivo.

#### Solución de problemas Arrow Vortex

##### La ejecución del código no puede continuar porque no se encontró MSVCP120.dll

- Install [vcredist_x86.exe](https://support.microsoft.com/en-us/help/4032938/update-for-visual-c-2013-redistributable-package) in your preferred language and try again.
  - If it still does not work, make sure you are downloading the `x86` version near the bottom of the page. Not the `x64` version.

### Sincronizar usando una pista de clic

#### Cálculo manual de BPM

Si el método anterior falla, tendrá que encontrar manualmente el BPM pero esto es más fácil de lo que podría pensar.

1. Utiliza una calculadora de toques BPM en línea (como la [Herramienta de toques para BPM](https://www.all8.com/tools/bpm.htm), abre la página en tu navegador web).
2. Reproduce la canción en tu reproductor de música favorito.
3. Con la página web en foco, pulsa cualquier tecla al ritmo (cada cuarto de nota) durante unos 30 segundos y la herramienta mostrará el BPM de la canción.
4. Tome nota del valor entero más cercano.

#### Añadir una pista de clics

Esto es para confirmar que el BPM que ha encontrado en línea o manualmente coincide con el archivo de audio que tiene. Esta adición es temporal; debería eliminar la pista de clic antes de [exportar su audio](#exporting).

1. Abre la canción que quieras mapear en Audacity.
2. Añadir una nueva pista mono desde el menú `Pistas > Agregar Nuevo > Mono Track`
3. Coloca el cursor en el inicio de la nueva pista (haz clic en la pista y presiona la tecla Inicio) y luego haz clic en `Generar menú > Pista de ritmo…`
4. Introduzca el BPM entero más cercano que obtuviste al campo `Tempo (bpm)` e introduzca la duración de la canción en el campo opcional `Duración de la pista rítmica` (la duración se muestra en la parte superior derecha de la línea de tiempo).
5. Copia las otras opciones recomendadas a continuación: ![Menú de Rastreo de Ritmo de Audacity](/.assets/images/mapping/click-track-1.png)

Si todo fue correctamente ingresado tendrás algo como esto: ![Pantalla principal mostrando pista de canción y pista de ritmo de Audacity](/.assets/images/mapping/song_rhythm.png)

Esta pista de clics está completamente sincronizada con los ritmos del editor de mapas y del juego, pero la canción no está sincronizada actualmente. Continua a continuación para ver cómo hacerlo.

#### Sincroniza la Canción al Beat

1. Select the Time Shift Tool (![Time Shift Tool](/.assets/images/mapping/timeshift.png) {.inline}).
2. Left click on the song track and hold, then drag the audio so that the first planned mapped note(s) in your song ends up within the appropriate seconds (see timeline above the track) to avoid a "Hot Start" or too long intro (See [Plan Your First Notes](#plan-your-first-note) if you haven't already).
3. Suelta para colocar el audio en la nueva posición.
4. Reproducir el audio en esta posición. La canción estará desincronizada, así que encuentra el beat más cercano en la pista de clic y alinea tu canción al beat (haz clic en seguir) moviéndola hacia atrás o hacia adelante en el tiempo mediante pequeños incrementos. Acercarse para una mejor precisión. Repita hasta que suene bien.
5. When you think you've found the beats of the song to match the Click Track review the whole song to ensure that the BPM you have is the correct one and that the song is in the same fixed BPM throughout the whole song. Si no es así, puede que hayas obtenido un BPM equivocado, en cuyo caso intenta sacar el BPM manualmente (otra vez), ver "Calculo manual de BPM".

::: warning Si el BPM es correcto para la primera parte de la canción pero de repente cambia o se desvía entonces es muy probable que tengas una canción con BPM Variable, vea [Edición avanzada de audio: BPM Variable](./advanced-audio.md#variable-bpm) para más información sobre este tema. :::

A continuación muestra cómo se ve cuando se colocan las primeras notas mapeadas planificadas (posición del cursor) después de 2 segundos y el ritmo de la canción se sincroniza con el BPM/Pista de clics.

![Canción de Audacity alineado con la pista de ritmo](/.assets/images/mapping/synced_rhythm.png)

Si la forma de onda/clip de audio tiene un hueco en el inicio de la línea de tiempo (0.0 segundos) necesitará añadir silencio al audio, o de lo contrario Audacity exportará desde el inicio del clip de audio y perderá cualquier sincronización que haya hecho. Haz lo siguiente para añadir silencio:

1. Switch to the Selection Tool (![Selection Tool](/.assets/images/mapping/selection.png) {.inline}).
2. Seleccione el espacio vacío entre el clip de audio y el inicio de la pista (las líneas verticales amarillas indicarán los bordes de inicio y final cuando haga una selección).  
   ![Añadiendo silencio con Audacity](/.assets/images/mapping/add_silence.png)
3. Haga clic en `Generar menú – > Silencio…` ![Generar silencio...](/.assets/images/mapping/audacity-generate_silence.png)
4. La cantidad correcta de silencio ya debería ser introducida automágicamente, así que simplemente pulsa OK.
5. Hecho. Ahora puede saltar a [exportar](#exporting) o ir a [edición opcional de audio](#optional-audio-editing).

Después de generar el silencio puedes hacer clic en la línea oscura de la canción para deshacerte del corte.

## Edición de audio opcional

En este punto, tu audio está configurado y listo para [exportar](#exporting). Edición de audio adicional, aunque no es necesario, puedes mejorar la experiencia del jugador mediante:

- Asegurar que el audio no sea demasiado suave o demasiado alto;
- Asegurar que el inicio del audio sea suave; y
- Asegurar que el jugador no tenga que esperar demasiado tiempo para que la outro termine.

### Revisar volumen de canción

To ensure that your song isn't too soft, or even too loud for that matter, we can measure it using RMS (Root Mean Squared) in Audacity. Para tener un buen equilibrio entre los sonidos de rebanada de notas y su canción, el valor del RMS debe ser **más alto que -11db** (en los versos y/o coros) o **más suave que -8.5db** (en las partes más altas).

Para comprobar el valor RMS de tu canción haz lo siguiente:

1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción
3. Haga clic en cualquiera de los botones de `selección de medición`. (Solo necesitamos usar uno.)
4. En el campo `Salida de volumen` ahora encontrarás un valor. Compara este valor con los valores recomendados arriba.
5. Si este valor es más pequeño (más negativo) que los valores recomendados, mira [Modificación de volumen: haciendo tu canción más fuerte](#making-your-song-louder).
6. Si este valor es mayor que (menos negativo) que los valores recomendados, mira [Modificación de volúmenes: haciendo tu canción más suave](#making-your-song-softer). ![Analizando volumen de canción con Audacity](/.assets/images/mapping/contrast.png)

### Modificación del volumen

Antes de continuar con los siguientes pasos con la edición de canciones, es muy recomendable guardar tu progreso actual como un archivo WAVE como copia de seguridad. Esto es para asegurar que si necesitas volver atrás y rehacer parte de la edición tendrás una fuente de alta calidad para usar. (Don't load the OGG you exported as it will have lost a lot of the source quality.) Remove the Click Track if you haven't already done so, then go to `File menu -> Export -> Export as WAV`, then save the file to a location of your choice.

::: tip NOTA
Hacer cualquier tipo de procesamiento de audio en una canción inevitablemente cambiará su sonido, sin embargo, es un paso importante para dar a tus jugadores la mejor experiencia de mapas y canciones.
:::

#### Haciendo tu canción más fuerte

If your song's chorus has a lower RMS value than the recommended **-11db** then you will need to do Compression and/or Limiting to bring the volume up. (Nota: Amplificar/Ganancia no se utiliza para esto, ya que cualquier cosa sobre 0db creará una distorsión desagradable.)

Para comprobar si necesitas aplicar el compresor antes de que Limiter analice visualmente la forma de la onda. Si hay muchos picos afilados con un cuerpo bastante constante a lo largo de la canción, como se muestra en el ejemplo de abajo, entonces no necesitará aplicar el compresor. Sólo hará falta un Limitador (saltar a [Limiter](#limiter)).

![Viendo una canción que es demasiado tranquila](/.assets/images/mapping/louder.png)

Sin embargo, si la forma de onda varía mucho entre partes suaves y fuertes, es probable que primero se necesite una compresión.

#### Compresión

1. Selecciona toda la canción haciendo doble clic en la pista de canciones.
2. Ir al menú `Efectos -> Compresor`
3. Como punto de partida, copia los ajustes a continuación y haz clic en Aceptar. Asegúrate de que `Comprimir basado en Picos` esté seleccionado. ![Entendiendo la compresión](/.assets/images/mapping/compression.png)

Here's a before (top) and after (bottom) Compressor comparison: ![Antes y después de la compresión](/.assets/images/mapping/bna_compression.png)

Revisa de nuevo la canción y escucha cualquier distorsión antinatural, como cortes de volumen después de picos fuertes. Si es así, deshacer (`Ctrl-Z`), ajustar el umbral `` a uno más alto (menos negativo) y aplicar de nuevo. Si desea saber más sobre los ajustes, compruebe la página [Edición de audio avanzada: Compresor](./advanced-audio.md#compressor).

#### Limitador

El compresor reduce muchos de los picos innecesarios y hace que los sonidos más importantes sean más fuertes. However, we still haven't reached the right RMS volume for the song. Para lograrlo, eliminaremos más de la cabeza usando el efecto Limitador:

1. Selecciona toda la canción haciendo doble clic en la pista de canciones.
2. Ir al menú `Efectos -> Limitador…`
3. Como punto de partida, copia la siguiente configuración:  
   ![Limitador en Audacity](/.assets/images/mapping/limiter.png)
4. Haz clic en Aceptar para aplicar el Limitador.

Revisa de nuevo la canción y escucha cualquier distorsión antinatural, como picos triturados/gravemente distorsionados. Si es así, deshacer (`Ctrl-Z`), ajustar la configuración de `Ganancia de entrada` a un valor más bajo (todavía por encima de 0db) y aplicar de nuevo. Asegúrate de que ambos valores de `Ganancia de entrada`son los mismos o de lo contrario la imagen estéreo será sesgada. Si deseas saber más sobre los ajustes del efecto Limitador, comprueba la página [Edición de audio avanzada: Limitador](./advanced-audio.md#limiter).

To know if you've reached the right volume after compressing and limiting check again with the RMS volume tool:

1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción.
3. Haga clic en cualquiera de los botones de selección de medición. (Solo necesitamos usar uno.)
4. En el campo `Salida de volumen` ahora encontrarás un valor. Este valor debe estar entre -8.5db y -9.5db para un nivel óptimo. Si no, deshaga el proceso del limitador e incremente la `Ganancia de entrada` por +/-0.5db e inténtelo de nuevo.

Después de limitar tendrás algo como esto: ![Canción después del limitador](/.assets/images/mapping/bna_limiting.png)

#### Haciendo tu canción más suave

Algunos productores de música electrónica moderna tienden a hacer que sus canciones sean muy fuertes solo para que sean mas fuertes que otras. En los casos raros tienes este tipo de canción (**valor de RMS por encima de -8.5db**) es **fuertemente recomendado** bajar el volumen de la canción para hacer normalizadas todas las canciones Beat Saber. Esto ayuda a escuchar mejor los cortes de las notas y a dar a los jugadores una experiencia mucho más agradable cambiando entre canciones.

Antes de bajar el volumen necesitas saber aproximadamente cuánto necesitas reducir el volumen. Haz esto comprobando con la herramienta de volumen RMS:

1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción.
3. Haz clic en cualquiera de los botones de selección de medición. (Solo necesitamos usar uno.)
4. En el campo Salida de volumen ahora encontrarás un valor. Calcule la diferencia entre su valor y -8.5db y recuerde este valor.
5. Cerrar la ventana de Análisis de Contraste.

Now let's use the Amplify effect to lower the volume:

1. Selecciona toda la canción haciendo doble clic en la pista de canciones.
2. Ir al menú `Efectos -> Amplificar…`
3. Introduce el valor de la diferencia que calculaste anteriormente (debe ser negativo) en el campo `Amplificación`. `El campo Nuevo pico de amplificación` repetirá lo que dice el primer campo de entrada esto es normal para una canción que ya está pico en 0db. ![Menú de Amplificación](/.assets/images/mapping/amplify.png)
4. Haz clic en Aceptar para aplicar un efecto de Amplificación negativo.
5. Hecho.

To know if you've reached the right volume check again with the RMS volume tool:

1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción.
3. Haz clic en cualquiera de los botones de `selección de medición`. (Solo necesitamos usar uno.)
4. En el campo `Salida de volumen` ahora encontrarás un valor. Este valor debe estar entre -8.5db y -9.5db para un nivel óptimo. Si no, deshaz el proceso Amplificar e incrementa el valor de entrada por +/- 0.5db e inténtalo de nuevo.

Después del efecto Amplificar de valor negativo tu canción se verá algo así: ![Efecto de Amplificación](/.assets/images/mapping/bna_amplify.png)

### Recortando la outro

En Beat Saber el mapa continuará mientras dure el archivo de audio. P.ej. esto significa que tener silencio durante cinco segundos después de que la canción haya terminado, el mapa seguirá reproduciéndose durante cinco segundos antes de terminar y llevar al jugador a la vista de puntuación. This is why it's important to mind the time from the last note to when the audio track ends.

Ve al final de tu canción y reproduce la última parte y outro. Desde el punto en el que tienes la intención de tener las últimas notas contabiliza 3 o 4 segundos y pausa la reproducción. Donde ahora se encuentra tu cursor de reproducción es donde generalmente deberías recortar tu canción. (Naturalmente todas las canciones difieren, así que haz lo que tiene más sentido para tu canción.)

Para recortar el final en este punto, haz lo siguiente:

1. Desde la posición de reproducción pausada arrastra una selección desde aquí hasta el final de la pista (línea vertical amarilla) y presiona la tecla `Eliminar` para eliminar esta parte.
2. Haz una nueva selección desde el final de la canción (línea vertical amarilla) y hacia atrás de 2 a 3 segundos.
3. Ve al menú `Efectos -> Studio Fade Out`.
4. Hecho.

La canción ahora se desvanecerá justo antes de llegar al final del mapa y el reproductor se presentará con los resultados de puntuación mucho más rápido.

### Recortando la introducción

Este paso puede ser útil si necesitas hacer un fundido más elegante para tu canción, si es necesario.

If your track has arrows pointing to the left at the start it means you've time shifted the audio forward in time outside the timeline. If you've done this to shorten the intro, although not necessary, it is beneficial to trim the sound clip and add a fade in. Para recortar y añadir un fundido a la canción (opcional) hacer lo siguiente:

1. Arrastre una selección de 0,0 segundos al final de la pista de audio (líneas verticales amarillas).
2. Click Trim audio outside selection (![Trim audio to selection](/.assets/images/mapping/trim.png) {.inline}). Las flechas ahora deben desaparecer.
3. (Opcional) Hacer una selección desde el inicio de la pista (línea amarilla vertical) hasta aproximadamente 0,5-1 segundos (dependiendo de la introducción).
4. (Opcional) Ve al `Menú de efectos -> Fundido`.
5. Hecho.

Antes (izquierda) y después de recortar y aplicar el fundido (derecha):

![Recortando la introducción](/.assets/images/mapping/trim_fade.png)

## Exportar

Ahora tenemos nuestro audio terminado que usarás y escucharás en el editor y en el juego. Se recomienda hacer otra copia de seguridad de archivos WAVE sólo en caso de que necesites exportar a OGG otra vez con un ajuste de calidad diferente. (`Menú de archivo -> Exportar como WAV`).

Para generar un archivo de sonido compatible a utilizar necesitamos hacer lo siguiente:

1. Delete the Click Track (if you haven't already done so).
2. Haz clic en el menú `Archivo -> Exportar -> Exportar como OGG.`  
   ![Exportar como ubicación Ogg](/.assets/images/mapping/audacity-export.png)
3. Nombra tu archivo `canción.ogg`.
4. Choose an appropriate OGG quality ([more info here](./advanced-audio.md#choosing-appropriate-ogg-export-quality)).
   - High quality source (WAVE / FLAC / MP3 / AAC) use 6-9 (unless there is a file size issue.)
   - Low quality source (YouTube or such): use 3-5
5. Click Save.  
   ![Export Quality Slider](/.assets/images/mapping/export-quality.png)

El archivo de canción/audio está listo para ser utilizado en cualquier editor de mapas. Ingresa el mismo BPM que obtuviste antes en tu editor de mapas de elección y asegúrate de usar 0ms de offset para todas las dificultades (ya que la canción ya está sincronizada con el ritmo).

::: warning NOTE
Audio file should not be larger than ~14 MB due to the BeatSaver 15 MB ZIP file limit. If this is the case export at a
lower quality until the file meets the file size limit. ZIP files over 8 MB cannot be shared directly on Discord
(without Nitro or Server Boost Level 2) for playtesting.
:::

## Créditos

El contenido de esta página se deriva de guías de [Kolezan](./mapping-credits.md#kolezan) & [Nik](./mapping-credits.md#nik-n3tman).
