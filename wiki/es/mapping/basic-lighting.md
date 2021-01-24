---
sidebar: auto
prev: ./basic-mapping.md
next: ./intermediate-lighting.md
description: '¡Aprende cómo empezar a iluminar tu mapa manualmente!'
---

# Iluminación básica
_Haz de Beat Saber un lugar más brillante iluminando manualmente tus mapas_

* [Glosario de términos](./glossary.md)
---
Cada mapa necesita tener una iluminación de algún tipo. Una vez que conozcas las herramientas a tu disposición, la iluminación manual simplista puede ser muy fácil. [Este enlace](https://streamable.com/s/x7zj0/vrugyj) es un ejemplo de vídeo de iluminación manual muy simple (Nota: El ejemplo utiliza [Map Color Overrides](#map-color-overrides)). ¡No necesitas ser un AaltopahWi o un Skeelie para hacer una gran iluminación!

## Tipos de iluminación
Los tipos de iluminación disponibles son consistentes en cada uno de los entornos de juego incorporados, aunque pueden estar en posiciones ligeramente diferentes o no presentes en algunos casos.
* **Luces centrales:** Generalmente luces a lo largo del lado de la pista, debajo de la pista, y a veces un cheurón en la parte trasera de la pista. A veces llamadas luces "De fondo/traseras/laterales" o "BBS".
* **Láseres laterales/superiores:** Conjunto de láseres giratorios a los lados de la pista o encima/debajo de la pista, dependiendo del entorno que hayas seleccionado. La rotación se ajusta usando la función Velocidad Láser.
* **Láseres traseros:** Láseres estáticos, a menudo en un patrón "X" en la parte posterior de la pista, detrás del cheurón.
* **Luces de anillo:** Luces unidas al interior de los anillos exteriores grandes que giran en casi todos los entornos.
* **Giros de anillos:** Utilizado para crear movimiento en los anillos. En ambientes tanto con un anillo interior como exterior, los giros de anillo rotan los anillos juntos.
* **Zooms de timbre:** Utilizado para acercar y deshacer el zoom del anillo interno en entornos que lo tienen. No afecta al anillo exterior.
* **Velocidad del láser:** Cambia la velocidad de la rotación láser lateral de estático (0) a muy rápida (20). Establecido de forma independiente para los láseres derecho e izquierdo. Los láseres traseros superiores no se mueven. La velocidad del láser aumenta linealmente, por lo que **2** es el doble de rápido que **1** y **5** es cinco veces más rápido que **1**.
* **Evento de impulso:** Cambia los colores de iluminación entre dos pares de colores. Apagado utiliza el primer par de colores. Encendido usa el segundo par (impulsado) de colores. No hay ninguna opción de desvanecimiento o flash para este evento.

## Eventos de iluminación
Cada tipo de iluminación puede hacer uso de cuatro eventos de iluminación diferentes.
* **Encendido:** Enciende una luz que permanecerá encendida hasta que coloques un tipo de evento diferente.
* **Apagado:** Apagar una luz puede tener tanto impacto como activarla, o más.
* **Flash:** Parpadea brevemente más brillante que un evento estándar "encendido" y permanece encendida hasta que coloques un tipo de evento diferente.
* **Difuminado:** Brevemente flashea más brillante que un evento estándar "encendido" y después se desvanece después de un par de segundos.

::: warning NOTA  
Es imposible controlar la duración de un desvanecimiento o usar un fundido con iluminación estándar. Las duraciones de desvanecimiento personalizadas requieren Chroma, que se discutirá en la Iluminación Avanzada (próximamente). :::

## Mejores prácticas & técnicas
> "Las únicas luces malas es que **NO** haya luces o mapas de luces."  
> ~ Skeelie


La iluminación es un autentico arte que significa que es mucho más subjetivo que el mapeo. Hay relativamente pocas buenas prácticas para iniciarse y la iluminación manual simple es casi imposible de hacer mal.

**TranquillizeMe** ha creado un tutorial de iluminación [Beat Saber Lighting Techniques Tutorial](https://www.youtube.com/watch?v=EDbPRN_u3jc), detallando técnicas de iluminación útiles y consejos generales para la iluminación.

::: warning NOTA  
Las vistas previas de iluminación no son realistas en los editores disponibles actualmente para el público, por lo que es importante previsualizar las luces en el juego a menudo. Ver [Previsualizando tus luces](#previewing-your-lights) para ver algunas herramientas que pueden ayudar. :::

### Atajos de teclado
Cada editor de mapas maneja la iluminación de forma diferente así que querrás conocer los enlaces de teclas y cómo funcionan las colocaciones en tu editor de elección. Los atajos de iluminación varían según el editor. Consulta la guía de usuario de tu editor o el readme o consulte esta lista útil [Cross-Editor Keybindings](./editor-keybinds.md).

### Asignando eventos de iluminación
Los mapeadores que iluminan su primer mapa deben comenzar asignando [tipos de iluminación](#lighting-types) específicos a instrumentos específicos, a partir de ahí a medida que consigan más experiencia irse diversificando. Este método no suele producir los espectáculos más emocionantes, pero es difícil liarla. Esto podría verse así:
- **Luz de pista:** Base o bombo
- **Láseres:** Melodia
- **Luces de anillo:** Sintetizador A o platillos
- **Zoom de anillo:** Sintetizador B

Una vez que este tipo de estructura básica está en su lugar y te sientes más cómodo con cómo funciona todo, puedes pensar en dónde puedes cambiar las cosas para hacer énfasis. Establecer un patrón estricto es necesario para crear impacto cuando realices un cambio; si enfatizas todo, no enfatizas nada (esto se refiere a la colocación de bloques, también).

**Un ejemplo del mentor de iluminación, LittleAsi**

> Normalmente ilumino la melodía con los tres láseres (vocal e instrumental sobre diferentes colores, o instrumental primario y acentos sobre un color diferente), tambores en las luces de anillo, y ya sea la base o algo armónico como sintetizadores en el fondo/detras/lado (BBS) (un poco demasiado a veces ya que aumentaron la intensidad de BBS). Si los tambores están demasiado involucrados para empacar solo en las luces de anillo o no hay nada más apropiado para el BBS, muevo el bombo a BBS. Si los tambores son realmente dominantes, puedo poner el láser trasero superior a trabajar sobre el tambor para dedicar las luces de anillo a los platillos. Las numerosas posibilidades para cambiar el comportamiento y la apariencia de los láseres los convierten en el mejor candidato para el seguimiento de la melodía de hecho. He utilizado láseres de velocidad 0 para el charles cerrado con varias velocidades para el charles abierto y los golpes de platillo de hecho, por lo que definitivamente no tiene que ser de ninguna manera específica (sólo internamente consistente).

### Resetear velocidad del láser
Aplicar la misma velocidad láser dos veces seguidas hará que se restablezca a una posición aleatoria. Por ejemplo, fijar velocidad 1 en cada golpe de tambor hará que las posiciones del láser se aleatoricen en el tiempo con el tambor sin cambiar nunca su velocidad de rotación.

Si no reinicia la velocidad del láser, continuará girando consistentemente a esa velocidad hasta que se cambie.

### Colocación de eventos de apagado
Los sonidos dentro de una canción rara vez tienen un punto final preciso, por lo que no siempre hay un momento "correcto" para colocar el evento de `Apagado`). Ten en cuenta cuando elijas apagar las luces asociadas con sonidos o instrumentos específicos, y aplica esas decisiones consistentemente a lo largo de la canción.

Se cauteloso al colocar eventos de apagado exactamente en medio de dos luces, ya que a veces puede crear un efecto de trazo no intencionado.

## Entornos por defecto
Hay varios entornos integrados en Beat Saber que son parte del juego base y se pueden utilizar fácilmente con unos pocos clics.

::: warning NOTA Los modelos de entorno personalizados (plataformas) creados por la comunidad existen pero requieren el mod de Plataformas Personalizadas que no está disponible actualmente a través del asistente de mods. Una versión beta puede estar disponible en el canal `#pc-mods` del Discord BSMG. :::

La estructura básica de cada entorno es principalmente la misma. En el editor [Mediocre Map Assistant 2](./mediocre-map-assistant.md) la pista de iluminación se ve así:
<p align="center">
![Captura de pantalla de la pista de iluminación MMA2 desde arriba hacia abajo](~@images/mapping/mma2-lighting-track.jpg)
</p>

### Previsualizaciones de entorno
**Nota:** Las imágenes a continuación fueron creadas usando un programa llamado ReShade que aumenta el contraste en el post-procesado para mejorar las luces de realzado. Los entornos parecen menos oscuros en el juego.

|           Video y captura de pantalla (clic para abrir tamaño completo)           | Ambiente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:---------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     ![Imagen del entorno predeterminado](~@images/mapping/default_env16.jpg)      | **Entorno Triangular**<br />**Nombre del Info.dat:** `TriangleEnvironment`<br />**Color predeterminado:** Rojo & Azul<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (cuadrado compacto) <br />**Anillo interior:** :white_check_mark: (triángulo)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** En la 1.6 Los láseres traseros superiores están por debajo de los láser de pista<br /><br />**Video de vista previa:** [Streamable](https://streamable.com/tbvqoq), [YouTube](https://youtu.be/ErRIYIGQKOQ)Nombre del Info.dat                                                                                                                                   |
|         ![Imagen del entorno Origins](~@images/mapping/origins_env16.jpg)         | **Entorno de origenes**<br />**Nombre del Info.dat:** `OriginsEnvironment`<br />**Colores predeterminados:** Amarillo & Notas rosas, Azul & Luces azul claro<br />**Iluminación central:** :white_check_mark:<br />**Laseres:** :white_check_mark:<br />**Anillo de pista:** :white_check_mark:<br />**Anillo interior:** :x:<br />**Ecualizador:** :white_check_mark: <br /><br /> **Video de vista previa:** [Streamable](https://streamable.com/itxr1l), [YouTube](https://youtu.be/i5MBTgNs0Ek)                                                                                                                                                                                                                                                                                           |
|       ![Imagen del entorno triángulo](~@images/mapping/triangle_env16.jpg)        | **Entorno Triangular**<br />**Nombre del Info.dat:** `TriangleEnvironment`<br />**Color predeterminado:** Rojo & Azul<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (cuadrado compacto) <br />**Anillo interior:** :white_check_mark: (triángulo)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** En la 1.6 Los láseres traseros superiores están por debajo de los láser de pista<br /><br />**Video de vista previa:** [Streamable](https://streamable.com/tbvqoq), [YouTube](https://youtu.be/ErRIYIGQKOQ)Nombre del Info.dat                                                                                                                                   |
|            ![Imagen del buen entorno](~@images/mapping/nice_env16.jpg)            | **Buen Entorno**<br />**Nombre del Info.dat:** `NiceEnvironment`<br />**Colores predeterminados:** Rojo & azul<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (arriba & abajo)<br />**Anillo de pista:** :white_check_mark: (círculo)<br />**Anillo interior:** :white_check_mark: (forma)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** En la 1.6 Los láseres traseros superiores están por debajo de los láser de pista <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/jrxxeg), [YouTube](https://youtu.be/-kAv1420TXU)                                                                                                                                                                                |
|    ![Imagen del entorno de Big Mirror](~@images/mapping/big-mirror_env16.jpg)     | **Entorno Big Mirror**<br />**Nombre del Info.dat:** `BigMirrorEnvironment`<br />**Colores predeterminado:** Rojo & azul<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (cuadrado)<br />**Anillo interior:** :x:<br />**Ecualizador:** :white_check_mark: <br /><br />**Video de vista previa:**  [Streamable](https://streamable.com/cdxujt), [YouTube](https://youtu.be/S3AQu8y5p2g)                                                                                                                                                                                                                                                                                              |
|   ![Imagen del entorno de Imagine Dragons](~@images/mapping/dragons_env16.jpg)    | **Entorno Imagine Dragons**<br />**Nombre del Info.dat:** `DragonsEnvironment`<br />**Colores predeterminados:** Rojo & Azul<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de seguimiento:** :white_check_mark: (cuadrado)<br />**Anillo interior:** :white_check_mark: (helix)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** La posición del láser trasero superior esta en los dos rieles en los extremos de la pantalla. Siempre iluminará el color opuesto de lo que lo establezca. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/y5u7zv), [YouTube](https://youtu.be/HTtwhBxrlrw)                                                                             |
|            ![Imagen del entorno K/DA](~@images/mapping/kda_env16.jpg)             | **Entorno K/DA**<br />**Nombre del Info.dat:** `KDAEnvironment`<br />**Colores predeterminados:** Naranja & Morado<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :x:<br />**Ecualizador:** :x:<br />**Nota:** La posición de la luz de anillo ilumina los cinco railes en la parte superior. Las luces en el centro de las flechas nunca se apagan. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/iuwenc), [YouTube](https://youtu.be/LigJdd2hpLI)                                                                                                                                                                                       |
|      ![Imagen del entorno Monstercat](~@images/mapping/monstercat_env16.jpg)      | **Entorno Monstercat**<br />**Nombre del Info.dat:** `MonstercatEnvironment`<br />**Colores predetermindos:** Rojo & Azul<br />**Iluminación central:** :white_check_mark: (& Logo de Monstercat)<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :white_check_mark: (cuadrado)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** En la 1.6 Los láseres traseros superiores están por debajo de los láser de pista. La posición de la luz del anillo ilumina los cinco raíles en la parte superior. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/g436ij), [YouTube](https://youtu.be/9qjDCkJw-ts)                                                                                |
|     ![Imagen del entorno de Crab Rave](~@images/mapping/crab-rave_env16.jpg)      | **Entorno de Crab Rave**<br />**Nombre del Info.dat:** `CrabRaveEnvironment`<br />**Colores predeterminados:** Verde & azul<br />**Iluminación central:** :white_check_mark: (& Logo de Monstercat )<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :white_check_mark: (cuadrado)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** En la 1.6 Los láseres traseros superiores están por debajo de los láser de pista. La posición de la luz de anillo ilumina los cinco raíles en la parte superior. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/qov023), [YouTube](https://youtu.be/6ygTsCX8Ey4)                                                                              |
|    ![Imagen de Panic at the Disco! entorno](~@images/mapping/panic_env16.jpg)     | Entorno **Panic at the Disco!**<br />**Nombre del Info.dat:** `PanicEnvironment`<br />**Colores predeterminados:** Rojo & Azul<br />**Iluminación central:** :white_check_mark: (& ventanas)<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (hélice)<br />**Anillo interior:** :white_check_mark: (hélice)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** Las luces de anillo son mucho más brillantes en este entorno que en otros. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/tysyou), [YouTube](https://youtu.be/LBUW9mDupxE)                                                                                                                                                    |
|     ![Imagen del entorno de Rocket League](~@images/mapping/rocket_env16.jpg)     | **Entorno de Rocket League**<br />**Nombre del Info.dat:** `RocketEnvironment`<br />**Colores predeterminados:** Naranja & azul<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :x:<br /><br />**Ecualizador:** :x: <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/t624jp), [YouTube](https://youtu.be/r8qO6IUg2Ww)                                                                                                                                                                                                                                                                                                                         |
|     ![Imagen del entorno de Green Day](~@images/mapping/green-day_env16.jpg)      | **Entorno de Green Day**<br />**Nombre del Info.dat:** `GreenDayEnvironment`<br />**Colores predeterminados:** Verde & Cian<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (helix)<br />**Anillo interior:** :x:<br />**Ecualizador:** :x:<br />**Nota:** El texto de "Green Day" en el centro nunca se apaga. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/o7x37v), [YouTube](https://youtu.be/LuYAEk9iWFw)                                                                                                                                                                                                                                      |
| ![Imagen del entorno granada de Green Day](~@images/mapping/gd-grenade_env16.jpg) | **Entorno granada de Green Day**<br />**Nombre del Info.dat:** `GreenDayGrenadeEnvironment`<br />**Colores predeterminados:** Verde& Cian<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda& derecha)<br />**Anillo de pista:** :x:<br />**Anillo interior:** :x: <br />**Ecualizador:** :x:<br />**Nota:** Los textos de Granada y "Green Day" en el centro nunca se apagan. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/wddtmm), [YouTube](https://youtu.be/DQHdUGx3UE0)                                                                                                                                                                                                                                    |
|      ![Imagen del entorno de Timbaland](~@images/mapping/timbaland_env.jpg)       | **Entorno de Timbaland**<br />**Nombre del Info.dat:** `TimbalandEnvironment`<br />**Colores predeterminados:** Gris & notas azules, Azul & luces azules (mismos colores)<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (anillos izquierdo & derecho)<br />**Anillo de pista:** :white_check_mark: (rectángulo)<br />**Anillo interior:** :white_check_mark: (rectángulo)<br />**Ecualizador:** :white_check_mark:<br />**Nota:** El texto "Timbaland" en los lados nunca se apaga. La velocidad del láser afecta a los láseres traseros superiores en los anillos izquierdo y derecho. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/w6crs0), [YouTube](https://youtu.be/5cXX04umDsY)                           |
|        ![Imagen del entorno de FitBeat](~@images/mapping/fitbeat_env.jpg)         | **Entorno FitBeat**<br />**Nombre del Info.dat:** `FitBeatEnvironment`<br />**Colores predeterminados:** Amarillo & Notas rosas, Marrón & Luces grises<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (láser exterior) <br />**Anillo interior:** :white_check_mark: (hélice) <br />**Ecualizador:** :white_check_mark: <br />**Nota:** Los láseres traseros superiores se iluminarán del color opuesto al que lo configuraste. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/1vqpmw), [YouTube](https://youtu.be/Y5CtZTpCcF4)                                                                                                                 |
|      ![Imagen del entorno Linkin Park](~@images/mapping/linkin-park_env.jpg)      | **Entorno Linkin Park **<br />**Nombre del Info.dat:** `LinkinParkEnvironment`<br />**Colores predeterminados:** Rojo& Notas Azules-Grises, Beise & luces blancas<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :x: <br />**Anillo interior:** :x: <br />**Ecualizador:** :white_check_mark: (en el muro lateral) <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/7xzwoz), [YouTube](https://youtu.be/I8tzKUI0xZ0)                                                                                                                                                                                                                                                           |
|        ![Imagen del entorno del parque BTS](~@images/mapping/bts_env.jpg)         | **Entorno BTS**<br />**Nombre del Info.dat:** `BTSEnvironment`<br />**Colores predeterminados:** Rosa & notas moradas, Rosa & luces moradas<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: (izquierda & derecha)<br />**Anillo de pista:** :white_check_mark: (pilares del fondo) <br />**Anillo interior:** :white_check_mark: (pilar de la pista) <br />**Ecualizador:** :x: <br />**Nota:** El logo de BTS en el centro nunca se apaga.<br /><br />**Video de vista previa:** [Streamable](https://streamable.com/vo5x93), [YouTube](https://youtu.be/WOVRxc3lydI)                                                                                                                                                                            |
|  ![Imagen del entorno de Glass Desert](~@images/mapping/glass-desert_env16.jpg)   | **Entorno Glass Desert**<br />**Nombre del Info.dat:** `GlassDesertEnvironment`<br />**Colores predeterminados:**  Amarillo& Notas rosas, Azul& Luces azul claro<br />**Iluminación central:** :white_check_mark:<br />**Láseres:** :white_check_mark: <br />**Anillo de pista:** :x:<br />**Anillo interior:** :x:<br />**Ecualizador:** :white_check_mark:<br />**Nota:** Este es el primer entorno 360&deg;. Los niveles 360 deben utilizar esto y no es utilizable para los niveles estándar. La posición de la luz de anillo controla el raíl horizontal exterior. La posición del láser superior trasera controla los seis raíles en la parte superior. <br /><br />**Video de vista previa:** [Streamable](https://streamable.com/cnie5j), [YouTube](https://youtu.be/Nh6kSjobYB0) |

### Configurando tu entorno
Los nuevos entornos por defecto están disponibles razonablemente a menudo, lo que significa que los editores de mapas no siempre tienen la lista completa disponible. Si el entorno que deseas utilizar no es una opción en la configuración de tu editor favorito, tendrá que editar tu archivo`Info.dat` para añadir el nombre del entorno.

1. Decide qué entorno deseas utilizar y copia el `Nombre del Info.dat` de la sección anterior [Vista previa del entorno](#environment-previews).
2. Abre tu archivo `Info.dat` en el editor de texto de tu elección.
3. Desplázate hacia abajo hasta la sección `"_environmentName":`.
4. Pega el nombre que has copiado en el paso 1.

> **NOTA:** No puedes usar una plataforma personalizada en este campo. Esto será cubierto en [Iluminación Avanzada](./advanced-lighting.md#custom-environments).

## Reemplazo del color del mapa
Puedes forzar tu propio esquema de colores de mapa en el juego siempre y cuando el usuario tengas el mod de SongCore instalado y hayas activado la opción `Habilitar Colores de Canción Personalizados` en los ajustes de mods.

Desde la versión 1.4 de Beat Saber, los usuarios pueden establecer los colores Rojo/Verde/Azul (RGB) de notas, luces y paredes para su juego. Sin embargo, serán reemplazados con los colores definidos en el `Info.dat` si el usuario tiene activada la opción `Habilitar Colores de Canción Personalizados`.

:::tip Al elegir el color se sobrescribe para las notas. Es **ALTAMENTE** recomendable que mantengas colores rojos/cálidos/agresivos a la izquierda y colores azules/fríos/blandos a la derecha para evitar la confusión de los jugadores. :::

Ver [colores predeterminados del entorno](./lighting-defaults.md) para ver una lista de colores predeterminados utilizados en los entornos.

[BeatMapper](./#beatmapper-app), [ChroMapper](./#chromapper-coming-soon)y [MMMA2](./#mediocre-map-assistant-2) soportan nativamente la sobrescritura de colores. Revisa sus respectivas guías para más información.

### Añadir manualmente sobrescrituras de color
1. Decida los colores RGB que deseas que sean las notas y/o luces y/o paredes. Usa una utilidad de esquema de colores como [Paletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) para encontrar colores complementarios.
    * Los valores rojo, verde y azul tendrán que ser convertidos de la escala normal 0-255 a la escala 0-1. Utilice un sitio como [EasyRGB](https://www.easyrgb.com/en/convert.php) para convertir sus valores.
2. Abre tu archivo `Info.dat` en el editor de texto de tu elección
3. Desplázate hacia abajo hasta la sección`"_customData": {`de la dificudad que desea colorear.
    * Si usas el `"_customData": { ` fuera del `"_difficultyBeatmapSets": [` es posible que el array no funcione como se esperaba.
4. Pega los bloques de código que estan debajo correspondientes a los colores que quieras forzar dentro de los corchetes de `_customData` (`{` y `}`) después reemplaza los valores `"r":`, `"g":`, y `"b":` con lo que elegiste en el paso 1.
    * Los valores `"r":` y `"g":` **deben** tener comas después de ellos.

Vea las líneas 29-60 y 69-100 de este [clip Pastebin](https://pastebin.com/x9zEiHxR) para un ejemplo de estos bloques de código en acción en un archivo `.DAT`.

## Vista previa de tus luces
Estas herramientas ayudarán a los usuarios de PC de Beat Saber a previsualizar su iluminación con mayor precisión. La mayoría de los editores no muestran efectos de iluminación fieles-a-la-vida.

### Dentro del juego con FPFC
First Person Flying Controller (FPFC) es un parámetro de lanzamiento que puede ser utilizado por usuarios de Steam o oculus. FPFC abrirá una instancia de Beat Saber en tu escritorio y te permitirá controlarlo con el teclado y ratón. Necesitarás el mod SiraUtil para interactuar mientras se reproduce un mapa.

Te permite usar WASD para "volar" en tu mapa, abre el menú de pausa pulsando la tecla <kbd>F2</kbd>, o sal de tu nivel pulsando la tecla <kbd>ESC</kbd> (de lo contrario debes reproducir tu canción para completarla).

Instala SiraUtil desde ModAssistant y ejecuta Beat Saber para crear un archivo json de configuración. Edita el archivo `SiraUtil.json` en tu carpeta `DatosDeUsuario` y cambia ` "Activado": false ` a`"Activado": true` bajo el toggle FPFC y SongControl despues sigue los pasos especificos de la tienda de plataforma debajo.  
![Configuración de SiraUtil JSON](~@images/mapping/sirautil-FPFC.png)

**Para usuarios de Steam:**   
Abre las propiedades del juego y añade `fpfc` a las opciones de lanzamiento de Steam.   
![Opciones de lanzamiento de Fpfc](~@images/mapping/fpfc.png)

**Para usuarios de Oculus:**
1. Haz clic derecho en Beat Saber.exe y crea un acceso directo.
2. Edita el objetivo para añadir "fpfc" al final del mismo. Por ejemplo: `C:\Archivos de programa\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" fpfc`

Después de instalar los mods y añadir el parámetro de lanzamiento, ahora puedes moverte y pausar en un mapa. La tecla para cambiar entre el visor y el control del ratón/teclado es <kbd>G</kbd>.

:::warning NOTA
- Si vuelves a vr y el juego no se carga en el visor:
  - Pulsa la tecla <kbd>G</kbd> hasta que el visor muestre el juego  
    **==O==**
  - Sal del juego, quita la opción de lanzamiento y vuelve a abrir el juego.

- Si el mod no parece estar funcionando, asegúrate de que el ajuste de la cámara suavizada del juego esta deshabilitado. :::

### En línea con BS Viewer
[BS Viewer](https://skystudioapps.com/bs-viewer/) por **+1 Rabbit** es una herramienta en línea que es una manera conveniente de comprobar cómo podría verse tu mapa en el juego sin el juego. Simplemente sube tu mapa zip al sitio web y previsualiza! Desafortunadamente **IOS y Safari no están soportados actualmente.**

## Créditos
El contenido de esta sección fue escrito por [LittleAsi](./mapping-credits.md#littleasi) y [Kolezan](./mapping-credits.md#kolezan) o derivado de guías por [Puds](./mapping-credits.md#puds) y [MandyNasty](./mapping-credits.md#mandynasty). Con las contribuciones de medios visuales de [Aeroluna](./mapping-credits.md#aeroluna) y [Bullet](./mapping-credits.md#bullet).
