---
sidebar: auto
prev: false
next: ./advanced-audio.md
description: Cómo configurar el archivo de audio y prepararlo para el mapeo.
---

# Configuración básica de audio
_Configura tu archivo de audio y tenlo listo para mapear_

* [Glosario de términos](./glossary.md)

Esta página proporciona a mapeadores nuevos y experimentados recomendaciones generales para configurar un nuevo archivo de canciones antes de empezar a mapear. Revisa la guía de inicio rápido de abajo para ver los pasos que son **críticos** antes de comenzar a mapear vs. aquellos que se pueden hacer en cualquier momento, si son necesarios.

## Inicio rápido de configuración de audio
::: warning
* Pasos 1-3 **DEBEN** completarse antes de empezar a mapear o tu audio estará fuera de sincronización y puede tener un [*inicio caliente*](./glossary.md#h).

* Usar sitios web en línea para convertir audio a `.ogg` puede resultar en que tu archivo de audio sea tratado como inválido y no será cargado por el juego! Procesar y exportar desde [Audacity](https://www.audacityteam.org/) es la forma más fácil de asegurar que el archivo de audio funcione como se esperaba. :::

1. Descargar e Instalar [Audacity](https://www.audacityteam.org/)
    * Opcionalmente instala el complemento [ffmpeg para windows](https://manual.audacityteam.org/man/installing_ffmpeg_for_windows.html) para abrir tipos de archivo adicionales como `.aac` o `.m4a` de iTunes.
2. Encuentra el BPM y el offset de tu canción para [sincronizar tu canción](#syncing-audio)
3. [Exportar tu canción](#exporting) como un archivo de formato `.ogg`

**En cualquier momento antes de subir:**
4. [Comprueba el volumen de tu canción](#check-song-volume) para hacerla [más fuerte](#making-your-song-louder) o [más suave](#making-your-song-softer) según sea necesario
5. Comprueba la longitud del final de tu canción y [recortalo](#trimming-the-outro) si es necesario

## Selección de canciones para nuevos mapeadores
A continuación se muestran recomendaciones, **no** requisitos, que te ayudarán a iniciarte en el mapeo. Si quieres mapear 17 minutos de "In A Gadda Da Vida" para tu primer mapa entonces puedes hacerlo pero debes saber que enfrentarás **un montón** de desafíos adicionales.

* Elige una canción que tenga un pulso claro al que mapear. Algunos géneros funcionan mejor que otros.
* Elige una canción con un tempo consistente (por ejemplo canciones con tambores electrónicos). Los que tienen cambios de tempo/BPM con el tiempo pueden ser muy complicados de mapear.
* Elige una canción mas bien corta (si son menos de 3 minutos mejor). Mapear una épica de 10 minutos para empezar puede llevar a la frustración y/o a la quemadura.
* Por último, elige una canción que no te importa escuchar una y otra y otra y otra vez. Pero evita mapear tu canción favorita como tus primeros mapas, guárdala para cuando tengas más experiencia.

## Calidad de audio
Antes de comenzar el mapeo, asegúrese de tener un archivo fuente de alta calidad para su canción. Muchos mapas tienen terribles archivos de audio, a menudo desde YouTube o archivos de baja tasa de bits. Este es un juego para la música después de todo, por lo que tener un buen audio es esencial para una buena experiencia de jugador.

Sigue estas pautas generales mientras trabajas en tus mapas:
* Utiliza la fuente de la más alta calidad que puedes encontrar como archivos **FLAC o WAV(E)** (formato sin pérdida).
* Un segundo cercano son archivos de alta tasa de bits (+200kbps) **MP3 o AAC** (formatos con pérdida).
* Usa YouTube **solo** como último recurso. El bitrate es bajo y el volumen rara vez es correcto. En este caso podría ser necesaria alguna edición de audio (ver [Edición opcional de audio](#optional-audio-editing)).

> Sitios donde puedes comprar las pistas/álbum, como el [Bandcamp](https://bandcamp.com/)de un artista, normalmente tendrán la fuente de calidad más alta disponible. Si el artista no tiene un Bandcamp disponible, Google Play Music, Amazon Music e iTunes son alternativas para archivos MP3 de alta calidad.

Al comprar y utilizar un archivo de audio de alta calidad, no sólo está apoyando a su artista, pero te ahorras un montón de dolor de cabeza durante el mapeo. Mira la diferencia de calidad para la misma canción, al mismo ritmo.

| Calidad OGG |                 YouTube                  |                  MP3                  |                  WAV                  |                  FLAC                   |
|:-----------:|:----------------------------------------:|:-------------------------------------:|:-------------------------------------:|:---------------------------------------:|
|      1      | ![YouTube](~@images/mapping/ytrip1.jpg)  |  ![MP3 1](~@images/mapping/mp31.jpg)  |  ![WAV 1](~@images/mapping/wav1.jpg)  |  ![Flac 1](~@images/mapping/flac1.jpg)  |
|      5      | ![YouTube](~@images/mapping/ytrip5.jpg)  |  ![MP3 5](~@images/mapping/mp35.jpg)  |  ![WAV 5](~@images/mapping/wav5.jpg)  |  ![Flac 5](~@images/mapping/flac5.jpg)  |
|     10      | ![YouTube](~@images/mapping/ytrip10.jpg) | ![MP3 10](~@images/mapping/mp310.jpg) | ![WAV 10](~@images/mapping/wav10.jpg) | ![Flac 10](~@images/mapping/flac10.jpg) |

¿Puedes ver la diferencia? No se puede escalar la calidad del audio, solo a partir de un archivo de audio de alta calidad puede darte líneas limpias y precisas.

Consulte la página [Edición avanzada de audio](./advanced-audio.md) para obtener técnicas y herramientas más profundas para analizar la calidad de audio de los archivos.


## Sincronizando el audio

Para facilitar el mapeo y asegurarse de que la canción está perfectamente sincronizada con el ritmo del juego, es necesario configurar correctamente el archivo de audio. Esta sección asumirá que estás utilizando [Audacity](https://www.audacityteam.org/).

### Planifica tu primera nota
Analiza la introducción de la canción. Dependiendo del donde en la canción quieres colocar tu primer bloque, necesitarás evitar tanto un *inicio caliente* (no hay suficiente tiempo antes del primer bloque) como una introducción demasiado larga. Tu canción encajará en una de estas tres categorías:
1. **Canciones sin intro:** Es crítico dejar **como mínimo dos segundos** de tiempo de preparación para el jugador antes de la(s) primeras nota(s) jugable(s) en tu mapa, de lo contrario, esto se conoce como "Comienzo caliente"
2. **Canciones con una breve introducción:** Si tu canción tiene una introducción corta de **menos de ocho segundos** está bien que la música se empiece a reproducir inmediatamente.
3. **Canciones con una introducción larga:** Si la canción tiene una introducción muy larga e inédita/desvanecida/desvanecida durante **más de diez segundos** es muy recomendable acortar la introducción para que la primera nota (s) se coloque en un plazo de ocho segundos desde el inicio del mapa.

En todos los casos anteriores tendrás que mover la canción a el momento apropiado basado en tus necesidades:
1. **Sin intro:** Mueva la canción de vuelta en el tiempo (a la derecha en la pista de audio), colocando la primera nota(s) mapeada después de dos segundos. Luego sincroniza la canción con el ritmo. Más tarde llena el hueco con silencio.
2. **Breve introducción:** Sincronice la canción al ritmo y luego llene el espacio con silencio dependiendo del caso que se aplique.
3. **Introducción larga:** Mueve la canción hacia adelante en el tiempo (a la izquierda en la pista de audio), colocando la primera nota(s) dentro de 8 segundos, luego recorta el audio antes de 0 segundos.

Hay dos formas de sincronizar tu audio:
* El método recomendado para sincronizar canciones es [usando Arrow Vortex](#sync-using-arrow-vortex).
* El método alternativo para sincronizar canciones es hacerlo manualmente [usando un Click Track](#sync-using-a-click-track).

### Sincronizar usando Arrow Vortex

[Arrow Vortex](https://arrowvortex.ddrnl.com/) es una herramienta gratuita para analizar automáticamente el BPM de una canción. También encontrará el offset necesario para alinear el audio al ritmo en Audacity o en tu editor de mapas.

**Utilizando Arrow Vortex para encontrar el BPM y offset:**  
Los pasos listados a continuación son los mismos que los utilizados en el [Video tutorial de análisis de BPM en Arrow Vortex de Ryger](https://youtu.be/Z49UKFefu5c) (que también incluye confirmación de BPM).
1. Descargar Arrow Vortex (AV), extraer el archivo y abrir `ArrowVortex.exe`
    - [Descarga Zip](https://cdn.discordapp.com/attachments/443569023951568906/662417326771273728/ArrowVortex.zip) en discord (Método recomendado)
    - Sitio web de Arrow Vortex [Descarga rar](https://arrowvortex.ddrnl.com/)
        - Necesitará software adicional como [7zip](https://www.7-zip.org/) para extraer archivos `.rar` como este.
2. Exporta tu canción a `.ogg` usando [Audacity](https://www.audacityteam.org/)
    * Usando otros formatos (por ejemplo, `.mp3` o `.m4a`) añade un retraso al audio que varía cada vez y no se contabiliza cuando exportas los cambios para su uso en el editor.

#### Troubleshooting Arrow Vortex
##### The code execution cannot proceed because MSVCP120.dll was not found.
* Install [vcredist_x86.exe](https://support.microsoft.com/en-us/help/4032938/update-for-visual-c-2013-redistributable-package) in your preferred language and try again.

:::danger **¡Este es un paso crítico!**  
No usar un archivo `.ogg` o usando la función de exportación en AV **desincronizará** la canción por una cantidad inconsistente de tiempo. :::

3. Arrastra el archivo de canción en la ventana AV
4. Ve al menú `Ver` y haz clic en `Tiempo basado (C-mod)` para ver la forma de onda
    * Usa <kbd>CTRL</kbd> + rueda del ratón para acercar
5. Ve al menú `Tempo` y haz clic en `Ajustar la sincronización...` o simplemente presione <kbd>SHIFT</kbd>+<kbd>S</kbd> para abrir la ventana de ajuste.
6. Haga clic en el botón <kbd>Buscar BPM</kbd>
    - Si tienes suerte, AV devolverá un solo valor BPM con 100% de confianza.  
      ![Ventana de ajuste AV](~@images/mapping/adjustments.png)
    - Si obtienes múltiples opciones, querrás escuchar las opciones para ver si coinciden con la canción. La mayoría de las veces será la primera opción, pero siga los pasos 7 y 8 para asegurarse.  
      ![Múltiples Valores BPM](~@images/mapping/alternateAdjustments.png)
7. Haga clic en el botón <kbd>Aplicar BPM</kbd>
8. Pulsa <kbd>F3</kbd> para encender ticks y pulsa <kbd>Barra espaciadora</kbd> para escuchar la canción para confirmar que el comienzo, el medio, y el final de tu pista están alineados.
    - Si sólo se dio un único resultado y los ticks no coinciden, esto sugiere que la canción tiene un BPM variable.
    - Si la detección dio múltiples opciones y los ticks no coinciden, seleccione la siguiente opción, haz clic en el botón <kbd>Aplicar BPM</kbd> y escucha de nuevo. Si ninguna de las opciones funciona para la canción, esto sugiere que tiene un BPM variable.

:::warning NOTA sobre el BPM Variable Se recomienda que los mapeadores más nuevos elijan una canción diferente debido a la mayor dificultad asociada al mapeo de BPM variable. ¿No estás seguro de si tu canción es variable? ¡Pásate por `#mapping-discussion` en BSMG y pregunta!

Si tienes la experiencia, consulta [Edición avanzada de audio: BPM Variable](./advanced-audio.md#variable-bpm) sobre cómo considerar esto. :::

10. Dale al jugador unos dos segundos para prepararse haciendo clic en el botón `Mover primer beat` ![Arrow Vortex move beat button](~@images/mapping/av_movebeat.png) cuantas veces sea necesario para conseguir que tu inicio este cerca de 2,000 segundos o el sonido donde deseas colocar tu primera nota esté alineada con la primera barra.  
    ![Alternativa alineada con la primera barra](~@images/mapping/av_aligned.png) ![Alternativa alineada con la primera barra](~@images/mapping/av_altAligned2.png)
    * After aligning, you should check the song again to verify that the beats still match.
11. Now that you have the BPM and offset, you will need to add or remove the right amount of silence to the song track.
___
**Si tienes un offset positivo**, necesitarás añadir esa cantidad a la intro.
1. Abre la canción en Audacity si aún no lo has hecho, luego cambia a la Herramienta de Selección (![Selection Tool](~@images/mapping/selection.png)).
2. Coloca el cursor en el inicio de la canción (haz clic en la canción y presiona la tecla <kbd>Inicio</kbd>).
3. Haz clic en `Generar – > Silencio…` ![Generar silencio...](~@images/mapping/audacity-generate_silence.png)
4. Ingresa el valor `de offset de música` que obtuviste de Arrow Vortex (o herramientas similares) y luego haz clic en Aceptar. ![Añadiendo silencio con Audacity](~@images/mapping/av_audacity.png)
5. Hecho. Ahora puede saltar a [exportar](#exporting) o ir a [edición opcional de audio](#optional-audio-editing).

Después de generar el silencio puedes hacer clic en la línea oscura de la canción para deshacerte del corte.
___
**Si tienes un offset negativo**, necesitarás eliminar esa cantidad de la intro.
1. Abre la canción en Audacity si aún no lo has hecho, luego cambia a la Herramienta de Selección (![Selection Tool](~@images/mapping/selection.png)).
2. Agregar una nueva pista mono   
   ![Agregar una nueva pista mono](~@images/mapping/audacity-add_new-mono-track.png)
3. Selecciona la nueva pista y pulsa la tecla <kbd>Inicio</kbd>.
4. Haz clic en `Generar – > Silencio…` ![Generar silencio...](~@images/mapping/audacity-generate_silence.png)
5. Ingrese la cantidad de desplazamiento negativo encontrada en Arrow Vortex (o herramienta similar) en el campo Duración y haga clic en Aceptar. ![Añadiendo silencio con Audacity](~@images/mapping/av_audacity-negative.png)
    * You should see something similar to this  
      ![Resulting Silence](~@images/mapping/audacity-neg-generated_silence.png)
6. Seleccione desde el final del silencio generado (línea vertical amarilla) hasta el inicio de la canción seleccionando el contenido de ambas pistas.  
   ![Seleccionar hasta el silencio generado](~@images/mapping/audacity-neg-select_silence.png)
7. Pulsa la tecla <kbd>Eliminar</kbd>.
8. Haga clic en la X de la pista más reciente para borrarlo.  
   ![Eliminar la pista](~@images/mapping/audacity-delete_track.png)
9. Hecho. Ahora puede saltar a [exportar](#exporting) o ir a [edición opcional de audio](#optional-audio-editing).

> Si no te sientes cómodo al eliminar la cantidad exacta, puedes eliminar más de lo necesario, exporta el `.ogg` modificado y [vuelve a sincronizar usando tu herramienta](#tool-assisted-bpm-calculation) con el nuevo archivo para obtener un desplazamiento positivo.

### Sincronizar usando una pista de clic

#### Manual BPM Calculation
Si el método anterior falla, tendrá que encontrar manualmente el BPM pero esto es más fácil de lo que podría pensar.
1. Utiliza una calculadora de toques BPM en línea (como la [Herramienta de toques para BPM](https://www.all8.com/tools/bpm.htm), abre la página en tu navegador web).
2. Reproduce la canción en tu reproductor de música favorito.
3. Con la página web en foco, pulsa cualquier tecla al ritmo (cada cuarto de nota) durante unos 30 segundos y la herramienta mostrará el BPM de la canción.
4. Tome nota del valor entero más cercano.

#### Add a Click Track
Esto es para confirmar que el BPM que ha encontrado en línea o manualmente coincide con el archivo de audio que tiene. Esta adición es temporal; debería eliminar la pista de clic antes de [exportar su audio](#exporting).
1. Abre la canción que quieras mapear en Audacity.
2. Añadir una nueva pista mono desde el menú `Pistas > Agregar Nuevo > Mono Track`
3. Coloca el cursor en el inicio de la nueva pista (haz clic en la pista y presiona la tecla Inicio) y luego haz clic en `Generar menú > Pista de ritmo…`
4. Introduzca el BPM entero más cercano que obtuviste al campo `Tempo (bpm)` e introduzca la duración de la canción en el campo opcional `Duración de la pista rítmica` (la duración se muestra en la parte superior derecha de la línea de tiempo).
5. Copia las otras opciones recomendadas a continuación: ![Menú de Rastreo de Ritmo de Audacity](~@images/mapping/click-track-1.png)

Si todo fue correctamente ingresado tendrás algo como esto: ![Pantalla principal mostrando pista de canción y pista de ritmo de Audacity](~@images/mapping/song_rhythm.png)

Esta pista de clics está completamente sincronizada con los ritmos del editor de mapas y del juego, pero la canción no está sincronizada actualmente. Continua a continuación para ver cómo hacerlo.

#### Sync the Song to the Beat
1. Seleccione la Herramienta de Cambio de Tiempo (![Time Shift Tool](~@images/mapping/timeshift.png)).
2. Clic izquierdo en la canción y espera, luego arrastre el audio para que la primera nota mapeada prevista en su canción termine dentro de los segundos apropiados (ver línea de tiempo por encima de la pista) para evitar un "Inicio caliente" o una introducción demasiado larga (vea [Planifique sus primeras notas](#plan-your-first-note) si no lo ha hecho ya).
3. Suelta para colocar el audio en la nueva posición.
4. Reproducir el audio en esta posición. La canción estará desincronizada, así que encuentra el beat más cercano en la pista de clic y alinea tu canción al beat (haz clic en seguir) moviéndola hacia atrás o hacia adelante en el tiempo mediante pequeños incrementos. Acercarse para una mejor precisión. Repita hasta que suene bien.
5. Cuando crees que has encontrado los beats de la canción para que coincida con la pista de clics revisa toda la canción para asegurar que el BPM que tienes sea el correcto y que la canción esté en el mismo BPM fijo a lo largo de toda la canción. Si no es así, puede que hayas obtenido un BPM equivocado, en cuyo caso intenta sacar el BPM manualmente (otra vez), ver "Calculo manual de BPM". ::: warning Si el BPM es correcto para la primera parte de la canción pero de repente cambia o se desvía entonces es muy probable que tengas una canción con BPM Variable, vea [Edición avanzada de audio: BPM Variable](./advanced-audio.md#variable-bpm) para más información sobre este tema. :::

A continuación muestra cómo se ve cuando se colocan las primeras notas mapeadas planificadas (posición del cursor) después de 2 segundos y el ritmo de la canción se sincroniza con el BPM/Pista de clics. ![Canción de Audacity alineado con la pista de ritmo](~@images/mapping/synced_rhythm.png)

Si la forma de onda/clip de audio tiene un hueco en el inicio de la línea de tiempo (0.0 segundos) necesitará añadir silencio al audio, o de lo contrario Audacity exportará desde el inicio del clip de audio y perderá cualquier sincronización que haya hecho. Haz lo siguiente para añadir silencio:
1. Cambiar a Herramienta de Selección (![Selection Tool](~@images/mapping/selection.png)).
2. Seleccione el espacio vacío entre el clip de audio y el inicio de la pista (las líneas verticales amarillas indicarán los bordes de inicio y final cuando haga una selección).  
   ![Añadiendo silencio con Audacity](~@images/mapping/add_silence.png)
3. Haga clic en `Generar menú – > Silencio…` ![Generar silencio...](~@images/mapping/audacity-generate_silence.png)
4. La cantidad correcta de silencio ya debería ser introducida automágicamente, así que simplemente pulsa OK.
5. Hecho. Ahora puede saltar a [exportar](#exporting) o ir a [edición opcional de audio](#optional-audio-editing).

Después de generar el silencio puedes hacer clic en la línea oscura de la canción para deshacerte del corte.

## Edición de audio opcional
En este punto, tu audio está configurado y listo para [exportar](#exporting). Edición de audio adicional, aunque no es necesario, puedes mejorar la experiencia del jugador mediante:
* Ensuring the audio isn't too soft or too loud;
* Ensuring the start of the audio is smooth; and
* Ensuring the player doesn't have to wait too long for the outro to end.

### Revisar volumen de canción
Para asegurar que tu canción no sea demasiado blanda o incluso demasiado fuerte, para que sea así podemos medirlo usando RMS (Root Mean Squared) en Audacity. Para tener un buen equilibrio entre los sonidos de rebanada de notas y su canción, el valor del RMS debe ser **más alto que -11db** (en los versos y/o coros) o **más suave que -8.5db** (en las partes más altas).

Para comprobar el valor RMS de tu canción haz lo siguiente:
1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción
3. Haga clic en cualquiera de los botones de `selección de medición`. (Solo necesitamos usar uno.)
4. En el campo `Salida de volumen` ahora encontrarás un valor. Compara este valor con los valores recomendados arriba.
5. Si este valor es más pequeño (más negativo) que los valores recomendados, vea [Modificación de volumen: haciendo tu canción más fuerte](#making-your-song-louder).
6. Si este valor es mayor que (menos negativo) que los valores recomendados, vea [Modificación de volúmenes: haciendo tu canción más suave](#making-your-song-softer). ![Analizando volumen de canción con Audacity](~@images/mapping/contrast.png)

### Modificación del volumen
Antes de continuar con los siguientes pasos con la edición de canciones, es muy recomendable guardar tu progreso actual como un archivo WAVE como copia de seguridad. Esto es para asegurar que si necesitas volver atrás y rehacer parte de la edición tendrás una fuente de alta calidad para usar. (No cargue el OGG que exportó ya que habrá perdido gran parte de la calidad de la fuente.) Quite la pista de clic si aún no lo ha hecho, luego vaya al menú de `Archivo -> Exportar -> Exportar como WAV`, luego guarde el archivo en una ubicación de su elección. ::: tip NOTA Hacer cualquier tipo de procesamiento de audio en una canción inevitablemente cambiará su sonido, sin embargo, es un paso importante para dar a tus jugadores la mejor experiencia de mapas y canciones. :::

#### Making Your Song Louder
Si el coro de tu canción tiene un valor de RMS menor que el recomendado **-11db** entonces necesitarás hacer Compresión y/o Limitar para subir el volumen. (Nota: Amplificar/Ganancia no se utiliza para esto, ya que cualquier cosa sobre 0db creará una distorsión desagradable.)

Para comprobar si necesitas aplicar el compresor antes de que Limiter analice visualmente la forma de la onda. Si hay muchos picos afilados con un cuerpo bastante constante a lo largo de la canción, como se muestra en el ejemplo de abajo, entonces no necesitará aplicar el compresor. Sólo hará falta un Limitador (saltar a [Limiter](#limiter)).

![Viendo una canción que es demasiado tranquila](~@images/mapping/louder.png)

Sin embargo, si la forma de onda varía mucho entre partes suaves y fuertes, es probable que primero se necesite una compresión.

#### Compression
1. Selecciona toda la canción haciendo doble clic en la pista de canciones.
2. Ir al menú `Efectos -> Compresor`
3. Como punto de partida, copia los ajustes a continuación y haga clic en Aceptar. Asegúrate de que `Comprimir basado en Picos` esté seleccionado. ![Entendiendo la compresión](~@images/mapping/compression.png)

Aquí hay una comparación anterior (arriba) y posterior (abajo) del compresor: ![Antes y después de la compresión](~@images/mapping/bna_compression.png)

Revisa de nuevo la canción y escucha cualquier distorsión antinatural, como cortes de volumen después de picos fuertes. Si es así, deshacer (`Ctrl-Z`), ajustar el umbral `` a uno más alto (menos negativo) y aplicar de nuevo. Si desea saber más sobre los ajustes, compruebe la página [Edición de audio avanzada: Compresor](./advanced-audio.md#compressor).


#### Limiter
El compresor reduce muchos de los picos innecesarios y hace que los sonidos más importantes sean más fuertes. Sin embargo, todavía no hemos alcanzado el volumen RMS correcto para la canción. Para lograrlo, eliminaremos más de la cabeza usando el efecto Limitador:
1. Selecciona toda la canción haciendo doble clic en la pista de canciones.
2. Ir al menú `Efectos -> Limitador…`
3. Como punto de partida, copie la siguiente configuración:  
   ![Limitador en Audacity](~@images/mapping/limiter.png)
4. Haga clic en Aceptar para aplicar el Limitador.

Revisa de nuevo la canción y escucha cualquier distorsión antinatural, como picos triturados/gravemente distorsionados. Si es así, deshacer (`Ctrl-Z`), ajustar la configuración de `Ganancia de entrada` a un valor más bajo (todavía por encima de 0db) y aplicar de nuevo. Asegúrate de que ambos valores de `Ganancia de entrada`son los mismos o de lo contrario la imagen estéreo será sesgada. Si desea saber más sobre los ajustes del efecto Limitador, compruebe la página [Edición de audio avanzada: Limitador](./advanced-audio.md#limiter).

Para saber si ha alcanzado el volumen correcto después de comprimir y limitar comprueba de nuevo con la herramienta de volumen RMS:
1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción.
3. Haga clic en cualquiera de los botones de selección de medición. (Solo necesitamos usar uno.)
4. En el campo `Salida de volumen` ahora encontrarás un valor. Este valor debe estar entre -8.5db y -9.5db para un nivel óptimo. Si no, deshaga el proceso del limitador e incremente la `Ganancia de entrada` por +/-0.5db e inténtelo de nuevo.

Después de limitar tendrás algo como esto: ![Canción después del limitador](~@images/mapping/bna_limiting.png)


#### Making Your Song Softer
Algunos productores de música electrónica moderna tienden a hacer que sus canciones sean muy fuertes solo para que sean mas fuertes que otras. En los casos raros tienes este tipo de canción (**valor de RMS por encima de -8.5db**) es **fuertemente recomendado** bajar el volumen de la canción para hacer normalizadas todas las canciones Beat Saber. Esto ayuda a escuchar mejor los cortes de las notas y a dar a los jugadores una experiencia mucho más agradable cambiando entre canciones.

Antes de bajar el volumen necesitas saber aproximadamente cuánto necesitas reducir el volumen. Haz esto comprobando con la herramienta de volumen RMS:
1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción.
3. Haga clic en cualquiera de los botones de selección de medición. (Solo necesitamos usar uno.)
4. En el campo Salida de volumen ahora encontrarás un valor. Calcule la diferencia entre su valor y -8.5db y recuerde este valor.
5. Cerrar la ventana de Análisis de Contraste.

Ahora usemos el efecto Amplificar para reducir el volumen:
1. Selecciona toda la canción haciendo doble clic en la pista de canciones.
2. Ir al menú `Efectos -> Amplificar…`
3. Introduzca el valor de la diferencia que calculó anteriormente (debe ser negativo) en el campo `Amplificación`. `El campo Nuevo pico de amplificación` repetirá lo que dice el primer campo de entrada esto es normal para una canción que ya está pico en 0db.   
   ![Menú de Amplificación](~@images/mapping/amplify.png)
4. Haz clic en Aceptar para aplicar un efecto de Amplificación negativo.
5. Hecho.

Para saber si ha alcanzado el volumen correcto, compruebe de nuevo con la herramienta de volumen RMS:
1. Abrir Analizador de Contraste en `Analizar menú -> Contraste…`
2. Con la ventana de Análisis de Contraste todavía abierta, selecciona una parte de la sección del coro (alrededor de 15-20 segundos) de tu canción.
3. Haga clic en cualquiera de los botones de `selección de medición`. (Solo necesitamos usar uno.)
4. En el campo `Salida de volumen` ahora encontrarás un valor. Este valor debe estar entre -8.5db y -9.5db para un nivel óptimo. Si no, deshaz el proceso Amplificar e incrementa el valor de entrada por +/- 0.5db e inténtalo de nuevo.

Después del efecto Amplificar de valor negativo tu canción se verá algo así: ![Efecto de Amplificación](~@images/mapping/bna_amplify.png)

### Recortando la outro
En Beat Saber el mapa continuará mientras dure el archivo de audio. P.ej. esto significa que tener silencio durante cinco segundos después de que la canción haya terminado, el mapa seguirá reproduciéndose durante cinco segundos antes de terminar y llevar al jugador a la vista de puntuación. Por eso es importante recordar la hora desde la última nota hasta cuando termina la pista de audio.

Ve al final de tu canción y reproduce la última parte y outro. Desde el punto en el que tienes la intención de tener las últimas notas contabiliza 3 o 4 segundos y pausa la reproducción. Donde ahora se encuentra tu cursor de reproducción es donde generalmente deberías recortar tu canción. (Naturalmente todas las canciones difieren, así que haz lo que tiene más sentido para tu canción.)

Para recortar el final en este punto, haz lo siguiente:
1. Desde la posición de reproducción pausada arrastra una selección desde aquí hasta el final de la pista (línea vertical amarilla) y presiona la tecla `Eliminar` para eliminar esta parte.
2. Haz una nueva selección desde el final de la canción (línea vertical amarilla) y hacia atrás de 2 a 3 segundos.
3. Vaya al menú `Efectos -> Studio Fade Out`.
4. Hecho.

La canción ahora se desvanecerá justo antes de llegar al final del mapa y el reproductor se presentará con los resultados de puntuación mucho más rápido.

### Recortando la introducción
Este paso puede ser útil si necesitas hacer un fundido más elegante para tu canción, si es necesario.

Si la pista tiene flechas apuntando a la izquierda al principio, significa que el tiempo ha desplazado el audio hacia adelante en el tiempo fuera de la línea de tiempo. Si ha hecho esto para acortar la introducción, aunque no sea necesaria, es beneficioso recortar el clip de sonido y añadir un fundido. Para recortar y añadir un fundido a la canción (opcional) hacer lo siguiente:
1. Arrastre una selección de 0,0 segundos al final de la pista de audio (líneas verticales amarillas).
2. Haga clic en recortar audio fuera de la selección (![Trim audio to selection](~@images/mapping/trim.png)). Las flechas ahora deben desaparecer.
3. (Opcional) Hacer una selección desde el inicio de la pista (línea amarilla vertical) hasta aproximadamente 0,5-1 segundos (dependiendo de la introducción).
4. (Opcional) Ve al `Menú de efectos -> Fundido`.
5. Hecho.

Antes (izquierda) y después de recortar y aplicar el fundido (derecha):

![Recortando la introducción](~@images/mapping/trim_fade.png)

## Exportar
Ahora tenemos nuestro audio terminado que usarás y escucharás en el editor y en el juego. Se recomienda hacer otra copia de seguridad de archivos WAVE sólo en caso de que necesites exportar a OGG otra vez con un ajuste de calidad diferente. (`Menú de archivo -> Exportar como WAV`).

Para generar un archivo de sonido compatible a utilizar necesitamos hacer lo siguiente:
1. Eliminar la pista de clic (si aún no lo ha hecho).
2. Haga clic en el menú `Archivo -> Exportar -> Exportar como OGG.`  
   ![Exportar como ubicación Ogg](~@images/mapping/audacity-export.png)
3. Nombra tu archivo `canción.ogg`.
4. Elige una calidad OGG apropiada ([más información aquí](./advanced-audio.md#choosing-appropriate-ogg-export-quality)):  
   ![Exportar deslizador de calidad](~@images/mapping/export-quality.png)
    * High quality source (WAVE / FLAC / MP3 / AAC) use 6-9 (unless there is a file size issue.)
    * Low quality source (YouTube or such): use 3-5
5. Click Save.

El archivo de canción/audio está listo para ser utilizado en cualquier editor de mapas. Ingresa el mismo BPM que obtuviste antes en tu editor de mapas de elección y asegúrate de usar 0ms de offset para todas las dificultades (ya que la canción ya está sincronizada con el ritmo). ::: warning NOTA El archivo de audio no debe ser mayor de ~12 MB debido al límite de archivos ZIP de 14,3 MB de BeatSaver. Los 15 MB listados no son exactos en este momento. Si este es el caso, exporta a una calidad inferior hasta que el archivo alcance el límite de tamaño del archivo. Los archivos ZIP de más de 8 MB no se pueden compartir directamente en Discord (sin Nitro o Nivel de Aumento del Servidor 2) para las pruebas de juego. :::

## Créditos
El contenido de esta página se deriva de guías de [Kolezan](./mapping-credits.md#kolezan) & [Nik](./mapping-credits.md#nik-n3tman).