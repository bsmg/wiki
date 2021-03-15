---
sidebar: auto
prev: ./basic-mapping.md
next: ./intermediate-lighting.md
description: '¡Aprende cómo empezar a iluminar tu mapa manualmente!'
---

# Iluminación básica
_Make Beat Saber a brighter place by manually lighting your maps._

* [Glosario de términos](./glossary.md)

---

Cada mapa necesita tener una iluminación de algún tipo. Once you know the tools at your disposal, simplistic manual lighting can be very easy. [This link](https://streamable.com/s/x7zj0/vrugyj) is a video example of very simple manual lighting

::: tip NOTE The example uses [Map Color Overrides](#map-color-overrides). You don't need to be an AaltopahWi or a Skeelie to make great lighting! :::

## Tipos de iluminación
The available lighting types are consistent across each of the built-in game environments, though they may be in slightly different positions or not present in some cases.

* **Center Lights:** Generally lights along the side of the track, underneath the track, and sometimes a chevron at the back of the track. Sometimes called "Bottom/Back/Side" or "BBS" lights.
* **Side/Top Lasers:** Sets of rotating lasers to the sides of the track or above/below the track, depending on which environment you’ve selected. Rotation is set using the Laser Speed function.
* **Back Lasers:** Static lasers, often in an "X" pattern at the back of the track, behind the chevron.
* **Luces de anillo:** Luces unidas al interior de los anillos exteriores grandes que giran en casi todos los entornos.
* **Ring Spins:** Used to create movement in the rings. In environments with both an inner and an outer ring, rings spins rotate both rings together.
* **Ring Zooms:** Used to zoom and unzoom the inner ring in environments that have it. Does not affect the outer ring.
* **Laser Speed:** Changes the speed of the side laser rotation from stationary (0) to very fast (20). Set independently for the right and left side lasers. Back top lasers do not move. Laser speed increases linearly so **2** is twice as fast as **1** and **5** is five times as fast as **1**.
* **Boost Event:** Changes lighting colors between two pairs of colors. Off uses the first pair of colors. On uses the second (boost) pair of colors. There is no fade or flash option for this event.

## Eventos de iluminación
Each lighting type can make use of four different lighting events.

* **Encendido:** Enciende una luz que permanecerá encendida hasta que coloques un tipo de evento diferente.
* **Apagado:** Apagar una luz puede tener tanto impacto como activarla, o más.
* **Flash:** Briefly flashes brighter than a standard "on" event then stays on until you place a different event type.
* **Fade:** Briefly flashes brighter than a standard "on" event then fades off after a couple of seconds.

::: warning NOTE  
It's impossible to control the duration of a fade out or use a fade in with standard lighting. Custom fade durations require Chroma, which will be discussed in Advanced Lighting (coming soon). :::

## Mejores prácticas & técnicas
> "Las únicas luces malas es que **NO** haya luces o mapas de luces."  
> ~ Skeelie

Lighting truly is an art which means that it's much more subjective than mapping. There are relatively few best practices to get started and simple manual lighting is almost impossible to do poorly.

**TranquillizeMe** has created a lighting tutorial, [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc), detailing useful lighting techniques and general tips for lighting.

::: warning NOTE  
Lighting previews are not realistic in the editors currently available to the public so it’s important to preview your lights in-game often. See [Previewing Your Lights](#previewing-your-lights) for some tools that can help. :::

### Atajos de teclado
Each map editor handles lighting differently so you’ll want to get to know the key bindings and how placements work in your editor of choice. Lighting keybinds vary by editor. Consult your editor's user guide or readme or refer to this helpful list [Cross-Editor Keybindings](./editor-keybinds.md).

### Asignando eventos de iluminación
Mappers lighting their first map should start by assigning specific [lighting types](#lighting-types) to specific instruments, then branch out from there as they get more experienced. This method won't usually produce the most exciting shows, but it's hard to mess up. This might look like:

* **Luz de pista:** Base o bombo
* **Láseres:** Melodia
* **Luces de anillo:** Sintetizador A o platillos
* **Zoom de anillo:** Sintetizador B

Once this type of basic structure is in place and you're more comfortable with how everything works, you can think about where you might want to change things up for emphasis. Establishing a strict pattern is necessary to create impact when you do make a change; if you emphasize everything, you emphasize nothing (this goes for block placement, too!).

#### An example from Lighting Mentor, LittleAsi
> I usually light the melody with all three lasers (vocal and instrumental on different colors, or primary instrumental and accents on a different color), drums on the ring lights, and either bass or something harmonic like synths on the Bottom/Back/Side (BBS) (a bit much sometimes since they increased BBS intensity). If the drums are too involved to pack onto the ring lights alone, or there's nothing else appropriate for the BBS, I'll move the kick drum to BBS. If the drums are really dominant, I may put the back-top laser on snare duty to dedicate the ring lights to cymbals. The numerous avenues for changing laser behavior and appearance do make them the best candidate for tracking the melody, though. I have used speed 0 lasers for closed hi-hat with various speeds for open hi-hat and cymbal crashes, though, so it definitely doesn't have to be any specific way (just internally consistent).

### Resetear velocidad del láser
Aplicar la misma velocidad láser dos veces seguidas hará que se restablezca a una posición aleatoria. For example, setting speed 1 on every snare hit will cause the laser positions to randomize in time with the snare without ever actually changing their rotation speed.

Si no reinicia la velocidad del láser, continuará girando consistentemente a esa velocidad hasta que se cambie.

### Colocación de eventos de apagado
The sounds within a song rarely have a precise end point so there's not always a "correct" time to place the `Off` event. Be aware of when you're choosing to turn lights associated with specific sounds or instruments off, and apply those decisions consistently throughout the song.

Be cautious about putting off events exactly in the middle of two lights as it can sometimes create an unintended strobing effect.

## Entornos por defecto
Hay varios entornos integrados en Beat Saber que son parte del juego base y se pueden utilizar fácilmente con unos pocos clics.

::: warning NOTE Custom environment models (platforms) created by the community exist but require the Custom Platforms mod which is not currently available through Mod Assistant. Una versión beta puede estar disponible en el canal `#pc-mods` del Discord BSMG. :::

La estructura básica de cada entorno es principalmente la misma. In the [Mediocre Map Assistant 2](./mediocre-map-assistant.md) editor the lighting track looks like this:

::: align center ![Screenshot of the MMA2 lighting track from the top down](~@images/mapping/mma2-lighting-track.jpg) :::

### Previsualizaciones de entorno
|          Video y captura de pantalla (clic para abrir tamaño completo)          | Ambiente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     ![Imagen del entorno predeterminado](~@images/mapping/default_env.jpg)      | **The First (Default) Environment**<br />**Info.dat Name:** `DefaultEnvironment` <br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (square)<br />**Inner Ring:** :white_check_mark: (square)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers <br /><br />**Video Preview:** [Streamable](https://streamable.com/iqo91i), [YouTube](https://youtu.be/wPejfEKf7zo)                                                                                                                                                                                                                        |
|         ![Imagen del entorno Origins](~@images/mapping/origins_env.jpg)         | **Origins Environment**<br />**Info.dat Name:** `OriginsEnvironment`<br />**Default Colors:** Yellow & Pink notes, Blue & Light Blue lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark:<br />**Track Ring:** :white_check_mark:<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br /> **Video Preview:** [Streamable](https://streamable.com/okmjdo), [YouTube](https://youtu.be/SCKHRwOTuG8)                                                                                                                                                                                                                                                                                                                             |
|       ![Imagen del entorno triángulo](~@images/mapping/triangle_env.jpg)        | **Triangle Environment**<br />**Info.dat Name:** `TriangleEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (compact square) <br />**Inner Ring:** :white_check_mark: (triangle)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers <br /><br />**Video Preview:** [Streamable](https://streamable.com/ejjr22), [YouTube](https://youtu.be/BDntVrG3QpM)                                                                                                                                                                                                                        |
|            ![Imagen del buen entorno](~@images/mapping/nice_env.jpg)            | **Nice Environment**<br />**Info.dat Name:** `NiceEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (top & bottom)<br />**Track Ring:** :white_check_mark: (circle)<br />**Inner Ring:** :white_check_mark: (shape)<br />**Equalizer:** :white_check_mark:<br />**Note:** As of 1.6 Back Top Lasers are below the Track Lasers <br /><br />**Video Preview:** [Streamable](https://streamable.com/plqtv0), [YouTube](https://youtu.be/-0sOBcO4oUs)                                                                                                                                                                                                                                            |
|    ![Imagen del entorno de Big Mirror](~@images/mapping/big-mirror_env.jpg)     | **Big Mirror Environment**<br />**Info.dat Name:** `BigMirrorEnvironment`<br />**Default Colors:** Red & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (square)<br />**Inner Ring:** :x:<br />**Equalizer:** :white_check_mark: <br /><br />**Video Preview:**  [Streamable](https://streamable.com/cbw6cj), [YouTube](https://youtu.be/dqMo03TLLtk)                                                                                                                                                                                                                                                                                                                                   |
|   ![Imagen del entorno de Imagine Dragons](~@images/mapping/dragons_env.jpg)    | **Entorno Imagine Dragons**<br />**Nombre del Info.dat:** `DragonsEnvironment`<br />**Colores predeterminados:** Rojo & Azul<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de seguimiento:** :white_check_mark: (cuadrado)<br />**Anillo interior:** :white_check_mark: (helix)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** La posición del láser trasero superior esta en los dos rieles en los extremos de la pantalla. Siempre iluminará el color opuesto de lo que lo establezca. <br /><br />**Video Preview:** [Streamable](https://streamable.com/a0rw2o), [YouTube](https://youtu.be/L-9gTWGY_FQ)                                                                             |
|            ![Imagen del entorno K/DA](~@images/mapping/kda_env.jpg)             | **Entorno K/DA**<br />**Nombre del Info.dat:** `KDAEnvironment`<br />**Colores predeterminados:** Naranja & Morado<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :x:<br />**Ecualizador:** :x:<br />**Nota:** La posición de la luz de anillo ilumina los cinco railes en la parte superior. Las luces en el centro de las flechas nunca se apagan. <br /><br />**Video Preview:** [Streamable](https://streamable.com/dibv17), [YouTube](https://youtu.be/ZWfZQfx5MqY)                                                                                                                                                                                       |
|      ![Imagen del entorno Monstercat](~@images/mapping/monstercat_env.jpg)      | **Entorno Monstercat**<br />**Nombre del Info.dat:** `MonstercatEnvironment`<br />**Colores predetermindos:** Rojo & Azul<br />**Iluminación central:** :white_check_mark: (& Logo de Monstercat)<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :white_check_mark: (cuadrado)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** En la 1.6 Los láseres traseros superiores están por debajo de los láser de pista. La posición de la luz del anillo ilumina los cinco raíles en la parte superior. <br /><br />**Video Preview:** [Streamable](https://streamable.com/9g84m6), [YouTube](https://youtu.be/QSYw41_1EmM)                                                                                |
|     ![Imagen del entorno de Crab Rave](~@images/mapping/crab-rave_env.jpg)      | **Entorno de Crab Rave**<br />**Nombre del Info.dat:** `CrabRaveEnvironment`<br />**Colores predeterminados:** Verde & azul<br />**Iluminación central:** :white_check_mark: (& Logo de Monstercat )<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :white_check_mark: (cuadrado)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** En la 1.6 Los láseres traseros superiores están por debajo de los láser de pista. La posición de la luz de anillo ilumina los cinco raíles en la parte superior. <br /><br />**Video Preview:** [Streamable](https://streamable.com/5d46nv), [YouTube](https://youtu.be/AAPtI8SAE6s)                                                                              |
|    ![Imagen de Panic at the Disco! entorno](~@images/mapping/panic_env.jpg)     | Entorno **Panic at the Disco!**<br />**Nombre del Info.dat:** `PanicEnvironment`<br />**Colores predeterminados:** Rojo & Azul<br />**Iluminación central:** :white_check_mark: (& ventanas)<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (hélice)<br />**Anillo interior:** :white_check_mark: (hélice)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** Las luces de anillo son mucho más brillantes en este entorno que en otros. <br /><br />**Video Preview:** [Streamable](https://streamable.com/8lvbda), [YouTube](https://youtu.be/hOhOFgvxSrU)                                                                                                                                                    |
|     ![Imagen del entorno de Rocket League](~@images/mapping/rocket_env.jpg)     | **Rocket League Environment**<br />**Info.dat Name:** `RocketEnvironment`<br />**Default Colors:** Orange & Blue<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x:<br />**Inner Ring:** :x:<br />**Equalizer:** :x: <br /><br />**Video Preview:** [Streamable](https://streamable.com/qfgemd), [YouTube](https://youtu.be/9lX5nOhIv8o)                                                                                                                                                                                                                                                                                                                                                                            |
|     ![Imagen del entorno de Green Day](~@images/mapping/green-day_env.jpg)      | **Entorno de Green Day**<br />**Nombre del Info.dat:** `GreenDayEnvironment`<br />**Colores predeterminados:** Verde & Cian<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (helix)<br />**Anillo interior:** :x:<br />**Ecualizador:** :x:<br />**Nota:** El texto de "Green Day" en el centro nunca se apaga. <br /><br />**Video Preview:** [Streamable](https://streamable.com/npgn2p), [YouTube](https://youtu.be/jkaeINyLMo0)                                                                                                                                                                                                                                      |
| ![Imagen del entorno granada de Green Day](~@images/mapping/gd-grenade_env.jpg) | **Entorno granada de Green Day**<br />**Nombre del Info.dat:** `GreenDayGrenadeEnvironment`<br />**Colores predeterminados:** Verde& Cian<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda& derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :x: <br />**Ecualizador:** :x:<br />**Nota:** Los textos de Granada y "Green Day" en el centro nunca se apagan. <br /><br />**Video Preview:** [Streamable](https://streamable.com/ew43z1), [YouTube](https://youtu.be/ocnD-WdrrOw)                                                                                                                                                                                                                                    |
|     ![Imagen del entorno de Timbaland](~@images/mapping/timbaland_env.jpg)      | **Entorno de Timbaland**<br />**Nombre del Info.dat:** `TimbalandEnvironment`<br />**Colores predeterminados:** Gris & notas azules, Azul & luces azules (mismos colores)<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (anillos izquierdo & derecho)<br />**Anillo de pista:** :white_check_mark: (rectángulo)<br />**Anillo interior:** :white_check_mark: (rectángulo)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** El texto "Timbaland" en los lados nunca se apaga. La velocidad del láser afecta a los láseres traseros superiores en los anillos izquierdo y derecho. <br /><br />**Video Preview:** [Streamable](https://streamable.com/2fjejm), [YouTube](https://youtu.be/vLYybHUh5Nw)                           |
|       ![Imagen del entorno de FitBeat](~@images/mapping/fitbeat_env.jpg)        | **FitBeat Environment**<br />**Info.dat Name:** `FitBeatEnvironment`<br />**Default Colors:** Yellow & Pink notes, Orange & Blue lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (outer lasers) <br />**Inner Ring:** :white_check_mark: (helix) <br />**Equalizer:** :white_check_mark: <br />**Note:** Back Top Lasers will illuminate the opposite color of what you set it. <br /><br />**Video Preview:** [Streamable](https://streamable.com/75sxr3), [YouTube](https://youtu.be/FA0ZjR1_3LA)                                                                                                                                                                            |
|     ![Imagen del entorno Linkin Park](~@images/mapping/linkin-park_env.jpg)     | **Linkin Park Environment**<br />**Info.dat Name:** `LinkinParkEnvironment`<br />**Default Colors:** Red & Blue-Grey notes, Beige & White lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :x: <br />**Inner Ring:** :x: <br />**Equalizer:** :white_check_mark: (on side wall) <br /><br />**Video Preview:** [Streamable](https://streamable.com/kn47ci), [YouTube](https://youtu.be/BhAIQ6FQunw)                                                                                                                                                                                                                                                                                                          |
|       ![Imagen del entorno del parque BTS](~@images/mapping/bts_env.jpg)        | **BTS Environment**<br />**Info.dat Name:** `BTSEnvironment`<br />**Default Colors:** Pink & Purple notes, Pink & Purple lights<br />**Center Lighting:** :white_check_mark:<br />**Lasers:** :white_check_mark: (left & right)<br />**Track Ring:** :white_check_mark: (background pillars) <br />**Inner Ring:** :white_check_mark: (track pillars) <br />**Equalizer:** :x: <br />**Note:** BTS logo in the center never turns off.<br /><br />**Video Preview:** [Streamable](https://streamable.com/458qt5), [YouTube](https://youtu.be/jkTUvCfH0yE)                                                                                                                                                                                                                       |
|  ![Imagen del entorno de Glass Desert](~@images/mapping/glass-desert_env.jpg)   | **Entorno Glass Desert**<br />**Nombre del Info.dat:** `GlassDesertEnvironment`<br />**Colores predeterminados:**  Amarillo& Notas rosas, Azul& Luces azul claro<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: <br />**Anillo de pista:** :x:<br />**Anillo interior:** :x:<br />**Ecualizador:** :white_check_mark:<br />**Nota:** Este es el primer entorno 360&deg;. Los niveles 360 deben utilizar esto y no es utilizable para los niveles estándar. La posición de la luz de anillo controla el raíl horizontal exterior. La posición del láser superior trasera controla los seis raíles en la parte superior. <br /><br />**Video Preview:** [Streamable](https://streamable.com/8hlr6x), [YouTube](https://youtu.be/WGSxgVvazNM) |

### Configurando tu entorno
New default environments become available reasonably often which means that map editors don't always have the complete list available. If the environment you want to use is not an option in your favorite editor's settings you will have to edit your `Info.dat` file to add the environment name.

1. Decide which environment you want to use then copy the `Info.dat name` from the [Environment Previews](#environment-previews) section above.
2. Open your `Info.dat` file in the text editor of your choice.
3. Desplázate hacia abajo hasta la sección `"_environmentName":`.
4. Pega el nombre que has copiado en el paso 1.

> **NOTA:** No puedes usar una plataforma personalizada en este campo. Esto será cubierto en [Iluminación Avanzada](./advanced-lighting.md#custom-environments).

## Reemplazo del color del mapa
You can force your own map color scheme in-game as long as the user has the SongCore mod installed and has enabled the `Enable Custom Song Colors` option in the mod settings.

Since Beat Saber version 1.4, users can set the Red/Green/Blue (RGB) colors of notes, lights, and walls for their game. However, they will be overridden with the colors defined in the `Info.dat` if the user has the `Enable Custom Song Colors` option enabled.

::: tip When choosing color overrides for the notes. It is **HIGHLY** recommended that you keep reddish/warm/aggressive colors on the left and blueish/cold/soft colors on the right to avoid confusing players. :::

See [Environment Default Colours](./lighting-defaults.md) for a list of default colors used in the environments.

[Beatmapper](./#beatmapper-app), [ChroMapper](./#chromapper-coming-soon), and [MMA2](./#mediocre-map-assistant-2) natively support color overrides. Check their respective guides for more information.

### Añadir manualmente sobrescrituras de color

1. Decide what RGB colors you want notes and/or lights and/or walls to be. Use a color scheme utility like [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) to find complimentary colors.
   * Your red, green, and blue values will need to be converted from the normal 0-255 scale to the 0-1 scale. Use a site like [EasyRGB](https://www.easyrgb.com/en/convert.php) to convert your values.
2. Open your `Info.dat` file in the text editor of your choice
3. Scroll down to the `"_customData": {` section of the difficuty you want to color.
    * Using the global `"_customData": {` outside of the `"_difficultyBeatmapSets": [` array may not work as expected.
4. Paste whichever code blocks below correspond to the colors you want to force within the `_customData` curly brackets (`{` and `}`) then replace the `"r":`, `"g":`, and `"b":` values with whatever you chose in Step 1.
   * The `"r":` and `"g":` values **must** have commas after them.

See lines 29-60 and 69-100 of this [Pastebin clip](https://pastebin.com/x9zEiHxR) for an example of these code blocks in action in a `.DAT` file.

## Vista previa de tus luces
These tools will help PC Beat Saber users preview their lighting more accurately. Most editors do not show true-to-life lighting effects.

### Dentro del juego con FPFC
First Person Flying Controller (FPFC) is a launch parameter that can be used by either Steam or Oculus users. FPFC will open an instance of Beat Saber on your desktop and allow you to control it with your keyboard and mouse. You will need the SiraUtil mod in order to interact while a map is playing.

It allows you to use WASD to "fly" around in your map, open the pause menu by hitting the <kbd>F2</kbd> key, or exit your level by hitting the <kbd>ESC</kbd> key (otherwise you must play your song to completion).

Install SiraUtil from ModAssistant and run Beat Saber to create a config json file. Edit the `SiraUtil.json` file in your `UserData` folder and change `"Enabled": false` to `"Enabled": true` under FPFCToggle and SongControl then follow the store platform specific steps below.

![SiraUtil JSON Setting](~@images/mapping/sirautil-FPFC.png)

**For Steam Users:** Open the game properties and add `fpfc` to the Steam launch options. ![Fpfc launch options](~@images/mapping/fpfc.png)

**For Oculus Users:**

1. Haz clic derecho en Beat Saber.exe y crea un acceso directo.
2. Edita el objetivo para añadir "fpfc" al final del mismo. Por ejemplo: `C:\Archivos de programa\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

After installing the mods and adding the launch parameter you can then now move around and pause in a map. The toggle key to switch between headset and mouse/keyboard control is <kbd>G</kbd>.

:::warning NOTE

* If you go back into vr and the game doesn't load in the headset either:
  * Press the <kbd>G</kbd> key until the headset displays the game  
    **==OR==**
  * Quit the game, remove the launch option, and relaunch the game.

* If the mod doesn't seem to be working, make sure the in-game Smooth Camera setting is disabled. :::

### En línea con BS Viewer
[BS Viewer](https://skystudioapps.com/bs-viewer/) by **+1 Rabbit** is an online tool that is a convenient way to checkout how your map might look in game without the game. Just upload your map zip to the website and preview! Unfortunately **IOS and Safari are currently not supported.**

## Créditos
Content in this section was authored by [LittleAsi](./mapping-credits.md#littleasi) and [Kolezan](./mapping-credits.md#kolezan) or derived from guides by [Puds](./mapping-credits.md#puds) and [MandyNasty](./mapping-credits.md#mandynasty). With visual media contributions from [Aeroluna](./mapping-credits.md#aeroluna) and [Bullet](./mapping-credits.md#bullet).
