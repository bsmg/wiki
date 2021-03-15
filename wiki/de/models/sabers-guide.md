---
sidebar: auto
next: ./avatars-guide.md
description: MissRaynors Anleitung zum Erstellen benutzerdefinierter Saber!
---

# Custom Sabers Guide
_MissRaynors Anleitung zum Erstellen benutzerdefinierter Saber._

## Einführung
Da die Leute immer noch Probleme mit der Erstellung benutzerdefinierter Saber haben denken wir, dass es am besten ist, unsere aktuelle Anleitung zu aktualisieren. Vielen Dank an angeliod0103 für die Erstellung der vorherigen Anleitung. Zusätzliche Beiträge zu dieser Anleitung von Bobbie und Mdot.

## Vorbereitung
DAS MUSST DU HABEN:

* Unity 2018.1.6f1 um eine benutzerdefinierte Saber-Datei (*.saber) zu erstellen. [HIER Downloaden](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe)
* Das Custom Saber Unity Projekt. [HIER Downloaden](https://cdn.discordapp.com/attachments/468249466865057802/703747388556181534/Custom_Sabers-4.3.0-UnityProject.zip)
* Eine 3D-Modelldatei des Sabers Deiner Wahl. Die gängigsten und akzeptablen Dateiformate sind .obj- und .fbx-Dateien. Du kannst Dein Saber von 3D Modell Hosting/Showcase Seiten wie Sketchfab oder Turbosquid herunterladen.

Optional:

* 3D-Modellierungssoftware: Blender ist eine gute kostenlose Option oder 3dsmax, wenn Du eine Lizenz dafür hast (Bildungslizenz ist in Ordnung)
* Bildbearbeitungsprogramm: [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) oder [GIMP](https://www.gimp.org/downloads/) funktionieren, wenn Du Deine eigene Saber-Textur erstellen möchtst
* Das Saber-Modell in diesem Tutorial. [HIER Downloaden](https://bs.assistant.moe/Sabers/resources/Tutorial_Saber.zip)

## Einrichtung
Entpacken das Custom Saber Unity Projekt an Deinem gewünschten Ort.

Wenn Du den Unity Hub verwendest, klicke auf Hinzufügen, wählen den Ordner Custom Saber Unity Project aus und klicken dann auf den Ordner.

![Hinzufügen eines Custom Saber Projekts](~@images/models/sabers/01.png)

Das Projekt "Custom Saber" sollte in der Liste erscheinen. Stelle sicher, dass die Unity-Version für das Projekt korrekt ist.

![Überprüfe, ob die Version korrekt ist](~@images/models/sabers/02.png)

Öffne das Custom Saber Projekt. Es sollte wie folgt auswählen:

![Überprüfe, ob das Projekt richtig angezeigt wird](~@images/models/sabers/03.png)

Überprüfe ob das Projekt funktioniert, indem du überprüfst, ob der `Saber Exporter` im `Fenster` Tab angezeigt wird.

![Prüfe ob das Projekt einen Saber-Exporter hat](~@images/models/sabers/04.png)

![Überprüfe ob der Saber-Exporter korrekt funktioniert](~@images/models/sabers/05.png)

Die aktuelle Szene sollte ein GameObject namens `TemplateSaber`.

![Roter Kreis um das TemplateSaber](~@images/models/sabers/06.png)

Wenn du das Projekt zum ersten Mal öffnest, ist der Einheits-Viewport sehr weit vom Saber entfernt. Um die Vorlage in der Ansicht zu sehen, doppelklicke auf das `TemplateSaber` GameObject.

Click both the `RightSaber` and `LeftSaber` GameObjects and make sure that they have an `Event Manager` component attached.

![Checking that EventManager exists on the RightSaber object](~@images/models/sabers/07.png)

Now try exporting the Template Saber into your `CustomSabers` folder with the Saber Exporter.

![Exporting TemplateSaber](~@images/models/sabers/08.png)

If the Template Saber appears and works properly ingame, setup is complete and you’re ready for the next part.

## Modeling
I won’t go into detail about making a 3d model. If you don't have already have a model and want to learn how to make one, you can find tutorials here:

### Blender
<YouTube url='https://www.youtube.com/watch?v=ICBP-7x7Chc' />

### 3DS Max
<YouTube url='https://www.youtube.com/watch?v=DzBTcDY3_Q4' />

Once the saber is done, you can export it by choosing File-Export, choosing the desired file format, and importing it into unity.

::: tip NOTE OBJ is best used for simple sabers. FBX is best used for complex sabers that have rigging or animations. :::

![Exporting saber as FBX](~@images/models/sabers/09.png)

::: tip NOTE You don't have to export both sabers if they both have the exact same shape. If they're identical, exporting one should be good enough. ::: ::: tip NOTE Merging meshes that share the same color/glowing attributes will help a LOT in the long run. :::

## Unity
To import the model into unity, simply drag and drop it into the Assets window. Afterwards, line the saber up with the TemplateSaber. Video example:

<YouTube url='https://www.youtube.com/watch?v=mphD87zOer4' />

Next, you need to add Beat Saber compatible materials to your sabers.

The custom sabers unity project comes with 4 different beat saber compatible shaders. Here are the main differences between them:

* Lit glow is lit and has shadows. You can change the direction the light comes from and how strong it is
* Metallic makes the material slightly darker and allows you to add a metallic reflection
* Unlit glow is similar to lit glow but it doesn't have any lighting effects.
* Unlit glow cutout dither is the same as unlit glow but allows you to add transparency to your material.

The materials you use will depend on what traits you're looking for.

::: warning WARNING Make sure you *ONLY* use shaders that are compatible with beat saber. If you use a shader that isn't compatible (the Unity Standard shader, for example) your material will simply show up as white in-game. :::

::: tip NOTE For more information on shader compatibility, visit the Advanced Shaders Properties section of this guide. :::

Video example of applying materials:

<YouTube url='https://www.youtube.com/watch?v=zKFCNJoQOWk' />

You can add a texture to a material by dragging an image file in the texture slot.

![Adding texture to saber](~@images/models/sabers/10.png)

::: tip NOTE The `Glow` slider modifies how bright the saber glows. Additionally, when the glow is above 0, that material will be affected by the player's custom colors. :::

Once you've completed all of this, you can export your saber. Open up the `Saber Exporter` in the `Window` tab and then fill in the saber's name and author.

![Exporting the saber and adding name + author](~@images/models/sabers/11.png)

Put your sabers in your `CustomSabers` folder and test them out in game. If they look good ingame, you're all done!

::: tip NOTE **Once you've got your new sabers working**, [upload them to ModelSaber](https://modelsaber.com/Upload/) if you want to share them with the world. :::

## Advanced
This section covers things that aren't included in the main tutorial, such as how to add Events and Trails.

Other scripts are contained in `Assets/CustomSaber.dll`. Click on the little arrow to expand it. ![Expanding CustomSaber.dll](~@images/models/sabers/12.png)

### EventManager
This component lets you set up an action when an event condition is met. This includes when you hit a note, miss a note, when you start a level, etc...

To use it, click on the plus button to create a new event, drag the gameobject performing the action in the slot, and then choose the desired action.

If you want more information on events, read the `Events` section in the Custom Avatars guide **link needed!!!**

![Adding an event](~@images/models/sabers/13.png)

### Every Nth Combo Filter
This component lets you perform an action every N combo. It works the same as the `Event Manager`, but with the only trigger being every time you hit N combo.

### Custom Trails
This component lets you change the default trail for sabers. For a comprehensive tutorial on how to use custom trails, check out [MDot's custom trail guide](https://mdotamaan.github.io/BeatSaber-CustomTrailsGuide/).

### Animation
If you want your sabers to play a certain animation, you need to use an `Animator` component.This will allow you to better manage what animation you're making, in addition to letting you control how the animation transitions/triggers using the Event Manager. [More information on the animator component can be found in the unity docs here](https://docs.unity3d.com/Manual/class-AnimatorController.html).

### Advanced Shader Properties
If you want to modify your shaders to use Custom Colors without having to change the glow, it is possible to modify them support this.

Add this snippet of code to your shader's `Properties` section. If you have another property named `_Color`, make sure to remove it!

```hlsl
_Color ("Color", Color) = (1,1,1,1)
[MaterialToggle] _CustomColors("Custom Colors", Float) = 0
```

Now your materials should have a nice `Custom Colors` checkbox instead of custom color support depending on the currently set glow.

Similarly, if you want to import a non-beatsaber shader to use it on a saber and want it to display correctly ingame, you need to strip the `Alpha` channel out.

Each shader is different, so there's no universal approach to doing this. If you're not sure exactly how to do this, feel free to discuss the process in #pc-3d-modeling in the [Beat Saber Modding Group](https://discord.gg/beatsabermods).
