---
sidebar: auto
prev: ./platforms-guide.md
description: Bobbies gids voor het maken van Custom Blokken!
---

# De Custom Blokken gids
_Bobbies gids voor het maken van Custom Blokken_

## Introductie
Deze handleiding vereist basiskennis over 3d modelleren en de Unity Engine. Er zijn een paar dingen nodig:

* De Unity Editor - specifieker, [Unity version 2018.1.6f1](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe).
* Het [custom notes Unity project](https://github.com/legoandmars/CustomNotesUnityProject/archive/master.zip).
* Als je nog geen mesh hebt wat je wilt gebruiken, heb je een 3d modelleringsprogramma nodig. Persoonlijk stel ik [Blender](https://www.blender.org/) voor.
* Afhankelijk van wat je precies maakt, is een fotobewerkingssoftware zoals [Photoshop](https://www.adobe.com/products/photoshop.html) of [GIMP](https://www.gimp.org/downloads/) mogelijk nodig.

## Unity Project
::: danger WAARSCHUWING Zorg ervoor dat je Unity versie 2018.1.6f1 gebruikt! ::: Open de custom notes project met Unity.

![Unity Project](~@images/models/notes/unity_window.png)

In het hiërarchieën venster aan de linker kant zijn er enkele voorbeelden te vinden.

![Object Hierarchy](~@images/models/notes/02.png)

Als je op een van deze voorbeeld blokken klikt, zie je dat er een `NoteDescriptor` aan gekoppeld is.

![NoteDescriptor](~@images/models/notes/03.png)

Laten we kort ingaan op wat elk van deze instellingen nou eigenlijk doen.
### Note Name & Author Name
Deze is redelijk makkelijk. Wat de naam van het blok en de naam van de auteur ook zijn, deze worden in het Custom Notes selectie UI weergegeven, zoals weergegeven in de afbeelding hieronder.

![Ingame example of note name and author name](~@images/models/notes/04.png)
### Icoon
Deze instelling neemt een afbeelding die zal worden gebruikt als icoon. Het icoon wordt weergegeven in de CustomNotes selectie UI, zoals gezien in de bovenstaande afbeelding.
### Disable Base Note Arrows
Als deze is ingeschakeld, zal deze instelling de standaard pijlen die aanwezig zijn op de blokken onzichtbaar maken. Opmerking: je moet de `NoteDotLeft` en `NoteDotRight` gameobjecten in jouw blok hebben als je deze optie wilt inschakelen.
### Uses Note Color
Als deze optie is ingeschakeld, gebruikt het de huidige kleuren van de speler om je blokken in de goeie kleur te tinten. Dit stelt je blokken in staat om `CustomColors` te ondersteunen. Als je dit goed wilt gebruiken, zorg er dan voor dat je de sectie leest die gericht is aan het maken van jouw blokken met custom kleuren.
### Note Color Strength
Deze optie wordt alleen gebruikt als `Uses Note Color` is ingeschakeld. Note Color Strength definieert hoe sterk de tint word die op je blokken toegepast is, en is standaard 1. Hoe lager je dit nummer maakt, hoe subtieler de tint zal zijn.

## Het maken van een blok
Je zou al een 3D-model moeten hebben wat je gaat gebruiken voor je blok. Voor deze tutorial ga ik een eenvoudig triangle mesh gebruiken wat ik gemaakt heb in blender. Importeer je model in het project.

![Importing into the unity project](~@images/models/notes/05.png)

Nadat je je model hebt geïmporteerd, maak je een nieuw leeg `GameObject` in de hiërarchie weergave en noem het hoe je wilt dat je blok gaat heten. Ik zal die van mij `TriangleNote` noemen.

![Creating a new gameobject](~@images/models/notes/07.png)

In het `GameObject` van jouw blok klik je op `Add Component` en voeg je een `NoteDescriptor` toe. Maak je voor nu geen zorgen over het wijzigen van de opties in de `NoteDescriptor`, dat doen we later.

![Adding a NoteDescriptor](~@images/models/notes/08.png)

Nu kunnen we beginnen met toevoegen van children aan het belangrijkste GameObject van ons blok. `NoteLeft` en `NoteRight` zijn de twee vereiste blokken, maar je kan ook een `NoteDotRight`, `NoteDotLeft` of `NoteBomb` toevoegen aan je hoofd GameObject. Voor het doel van deze gids ga ik alleen maar een `NoteLeft` en `NoteRight` maken.

Maak een nieuw leeg GameObject in jouw hoofd GameObject en noem het `NoteLeft`.

![Creating an empty GameObject inside of TriangleNote](~@images/models/notes/09.png)

![Showing the hierarchy of TriangleNote and NoteLeft](~@images/models/notes/10.png)

`NoteLeft` zal dienen als een soort "container" voor alle GameObjecten die meshes bevatten in ons blok. We kunnen onze meshes vrij positioneren en draaien als we ze in een aparte GameObject plaatsen in `NoteLeft`, wat we niet zouden kunnen doen als we gewoon mesh onderdelen direct zouden toevoegen aan het `NoteLeft` GameObject.

Sleep jouw geïmporteerde mesh op `NoteLeft` in het hiërarchieën scherm.

![Dragging mesh onto NoteLeft](~@images/models/notes/note_drag.png)

![Dragging mesh onto NoteLeft](~@images/models/notes/56.png)

Je zou nu een child GameObject van `NoteLeft` moeten hebben waar je mesh in zit. Afhankelijk van het modelleringsprogramma wat je hebt gebruikt, moet je sommige niet-mesh objecten verwijderen. Als je objecten in jouw mesh ziet die `Camera` of `Lamp` heten, **ZORG DAN DAT JE DEZE VERWIJDERT!** Als je de "breaking the prefab instance" waarschuwing ziet, druk dan op "Continue".

![Showing hierarchy and pointing out Camera](~@images/models/notes/64.png)

![Saying continue on warning](~@images/models/notes/59.png)

Klik op het object wat je net hebt toegevoegd en zorg ervoor dat het een positie heeft van `(0,0,0)`

![Checking position](~@images/models/notes/61.png)

Zodra je het mesh hebt geselecteerd, moet je het naar de grootte van een blok in het spel maken. Selecteer `NoteLeft` en plaats het in de buurt van het `TemplateNotesize`. Het `TemplateNoteSize` zou het witte vierkant moeten zijn in jouw project. ::: warning WAARSCHUWING Zorg ervoor dat je `NoteLeft` selecteert wanneer je jouw blok verplaatst. Als je per ongeluk de children van `NoteLeft` verplaatst, kloppen de meshes niet meer! De meshes in `NoteLeft` zouden bijna ALTIJD op positie `(0,0,0)` moeten zijn, tenzij je ze doelbewust aanpast. :::

![Showing the mesh next to TemplateNoteSize](~@images/models/notes/62.png)

Zodra je de `NoteLeft` hebt verplaatst om dichterbij de `TemplateNotesize` te zijn, selecteer je de scale tool links bovenin van het scherm.

![Selecting scale tool](~@images/models/notes/63.png)

Met het GameObject in `NoteLeft` geselecteerd, klik en sleep het grijze vierkant totdat het blok ongeveer dezelfde grootte heeft als het `TemplateNoteSize`.

![Showing how to use scale tool](~@images/models/notes/60.png)

::: warning WAARSCHUWING Zorg ervoor dat je de schaal van de objecten IN `NoteLeft` aanpast. `NoteLeft` zal altijd een geforceerde schaal hebben van 1, dus als je de schaal op iets anders zet dan `(1,1,1)` zal je model er anders uitzien in het spel! :::

![Showing the correctly scaled mesh next to TemplateNoteSize](~@images/models/notes/66.png)

Zoals je kunt zien, is de schaal die werkte voor mijn mesh ongeveer `(0,65,0,65)`. Deze waarde zal anders kunnen zijn afhankelijk van het mesh dat je gebruikt. Als je het mesh niet precies even groot kan krijgen als `TemplateNotesize`, maak je dan niet te veel zorgen want het hoeft niet precies te zijn. Houd er rekening mee dat het over het algemeen beter is als een blok beetje te groot is dan dat het een beetje te klein is. ::: warning WAARSCHUWING Zorg ervoor dat je blokken in de juiste richting staan. Kijk naar de richting van alle andere blokken in het scherm, en zorg dat je meshes dezelfde kant op staan. **ONTHOUD**: Het `NoteLeft` GameObject moet altijd een rotatie hebben van `(0,0,0)`. Als je je blok moet roteren, draai dan niet `NoteLeft`, maar draai in plaats daarvan de meshes die er in zitten! :::

## Materialen toevoegen
Now that the mesh is properly scaled we can go ahead and add a material to it. In the project window, right click on `Materials` and then do `Create->Material`. Since this is going to be the material for the mesh of my `LeftNote`, I'll name it `LeftMaterial`.

![Creating a new material](~@images/models/notes/17.png)

Now that we have LeftMaterial, we have to choose which shader to use for it. If you use any of the default Unity shaders they won't show up ingame properly, so we have to use one of the `BeatSaber` shaders.

![Setting the shader for the new material](~@images/models/notes/18.png)

For my LeftMaterial, I'm going to use `Unlit Glow`. However, you may want to use a different shader depending on your mesh. Here are the main differences between the shaders:

* Lit glow is lit and has shadows. You can change the direction the light comes from and how strong it is
* Metallic makes the material slightly darker and allows you to add a metallic reflection
* Unlit glow is similar to lit glow but it doesn't have any lighting effects.
* Unlit glow cutout dither is the same as unlit glow but allows you to add transparency to your material.

All four of these shaders also allow you to use textures, although Metallic uses the texture for the reflection instead of applying it directly.

Once you've selected your shader, go ahead and pick a color for your left material. Since this is the left block, i'm going to pick a reddish color.

![Picking the color of the material](~@images/models/notes/19.png)

Now that the color is set, go back to your mesh and set it as the material.

![Selecting the material on the mesh](~@images/models/notes/20.png)

![Selecting the material on the mesh](~@images/models/notes/21.png)

Your note should now have a material that shows up properly ingame. Now we need to create a right note and do the same thing again. Right click on `NoteLeft` and `Duplicate` it. Rename this duplicate `NoteRight`.

![Duplicating the left note](~@images/models/notes/67.png)

![Showing the hierarchy of the note, with NoteLeft and NoteRight](~@images/models/notes/68.png)

Now, follow the steps above again to create a second material. Make sure to use the same shader if you want the notes to look consistent between colors. For my second material, I'm going to name it RightMaterial and give it a blue color.

![Picking the color of RightMaterial](~@images/models/notes/25.png)

Now that you have the second material, apply it to the mesh of the `NoteRight`.

![Clicking on the mesh of the right note](~@images/models/notes/69.png)

![Selecting the right note material on the right note mesh](~@images/models/notes/27.png)

![Selecting the right note material on the right note mesh](~@images/models/notes/28.png)

You now have two notes, both of which are properly textured and will show up ingame.

## Exporting your notes

Now that our meshes and materials are properly set up, we can go back to the `NoteDescriptor` and change the settings. Go to your note's main GameObject and look at the `NoteDescriptor` in the properties panel.

![Showing the NoteDescriptor](~@images/models/notes/29.png)

Set the `Note Name` to what you want your note to be called ingame. I'll set mine to "Triangle Notes". Additionally, set the `Author Name` to the name you want to be credited by. I'll be setting mine to "Bobbie".

![Showing the NoteDescriptor](~@images/models/notes/30.png)

::: warning WARNING Although it's not technically required, it is highly recommended you add an icon to your notes so that they are easier to identify in the UI. :::

Import the image you're going to use for your icon by clicking `Import New Asset`. I'll be using a triangle icon I made.

![Importing a new asset](~@images/models/notes/31.png)

If your image has transparency, make sure to check `Alpha Is Transparency` and click apply.

![Checking alpha is transparency](~@images/models/notes/32.png)

![Clicking apply](~@images/models/notes/33.png)

Now go back to the `NoteDescriptor` and select the image you just imported.

![Selecting texture](~@images/models/notes/34.png)

![Selecting texture](~@images/models/notes/35.png)

Now we have three options left - `Disable Base Note Arrows`, `Uses Note Color`, and `Note Color Strength`. Because my model does not have any custom arrows, I'm going to leave `Disable Base Note Arrows` unchecked so we can keep the default arrows. I'm going to leave `Uses Note Color` unchecked for now too, which means that we don't need to change `Note Color Strength` either.

::: warning WARNING If you're going to enable `Uses Note Color` - and I highly recommend you do - make sure to read the section on how to support custom colors correctly! :::

![Showing NoteDescriptor](~@images/models/notes/36.png)

Now that our `NoteDescriptor` options are completely set, we can export our note using the `Note Exporter`. To get to the `Note Exporter`, look for the tab on the left of your screen, near the `Hierarchy` tab.

![Clicking note exporter](~@images/models/notes/70.png)

![Showing note in note exporter](~@images/models/notes/38.png)

Your note should be at the top of the `Note Exporter`. Once you're sure that all of your `NoteDescriptor` settings are correct, click the export button below your note in the `Note Exporter`. Make sure to export it into your `Beat Saber/CustomNotes` folder so you can test it ingame.

::: warning WARNING If you're going to export a note again, make sure to delete the old version. The Note Exporter won't export a note if there's already a note with an identical name in the same folder. :::

![Cllicking export note](~@images/models/notes/39.png)

![Exporting note](~@images/models/notes/40.png)

::: tip TIP If you own beat saber on steam and want to see how your notes look ingame without putting on your headset, the `fpfc` launch argument is extremely helpful and allows you to control the ingame camera using your mouse :::

Now that your notes are exported, you can start beat saber and see how they look ingame. In beat saber, click `Mods` and then `CustomNotes`. If you did everything correctly, you should see your notes in the list.

![Showing note preview ingame](~@images/models/notes/41.png)

Select your notes and try playing a song.

![Showing note ingame](~@images/models/notes/42.png)

If everything looks good ingame, you should be finished! Make sure to try playing with your notes with your headset on at least once before releasing them.

## Custom Colors
This section is assuming you already have a custom note fully set up and simply want to add support for custom colors, which is highly recommended because it will almost always enhance the user experience.

CustomColor support works by tinting the notes the current player-set color. If your material has a texture, lighter colors will be tinted more, whilst darker colors will be tinted less.

Go ahead and create a new material in the `Materials` folder. With CustomColor support, generally you're going to be using the same material for both the left and right note, so I'm going to name my material `NoteMaterial`.

![Creating a new material](~@images/models/notes/43.png)

Now select the shader you want to use for your note. If you're not sure which shader you want to use, refer back to the `Adding Materials` section of this guide. For my note, I'm going to use `Unlit Glow`.

![Selecting shader](~@images/models/notes/44.png)

Now apply this material to both your NoteLeft mesh and your NoteRight mesh. Make sure to apply it to BOTH!

![Clicking TriangleMesh](~@images/models/notes/71.png)

![Selecting Material](~@images/models/notes/46.png)

![Selecting Material](~@images/models/notes/47.png)

Now that you're done applying the material to all of your note's meshes, go back to the `NoteMaterial` in the inspector. To double check that your notes look good when using CustomColors, try messing around with the `Color` property - this is what property will be changed when the notes are tinted.

![Changing color of material](~@images/models/notes/48.png)

![Changing color of material](~@images/models/notes/49.png)

![Changing color of material](~@images/models/notes/50.png)

Once you've confirmed that the notes change color when you change the material's `Color` property, go to your note's main GameObject and go to the `NoteDescriptor`. Enable `Uses Note Color` and feel free to mess around with `Note Color Strength`. When Note Color Strength is at 1, it will tint the color with 100% strength. The lower you go from one, the more subtle it will be. For the purposes of this tutorial, I will be leaving `Note Color Strength` at one.

![Enabling uses note color](~@images/models/notes/51.png)

Your note should now be compatible with Custom Colors! Go ahead and re-export it. If you need a refresher, read the section on Exporting up above.

### Disable Custom Colors on certain GameObjects

In some cases, you may want CustomColors to not affect a certain mesh. For example, if you have a part of your model that needs to say the same color, such as an arrow needing to be white. There is a simple solution to this problem.

In this example, I have two meshes inside of my `LeftNote` object. I want the `TriangleMesh` to be affected by custom colors, but not `SmallerTriangleMesh`.

![Double mesh example](~@images/models/notes/52.png)

![Double mesh hierarchy](~@images/models/notes/53.png)

All you have to do is go into the GameObjects that you do not want to be affected by custom colors and add a `Disable Note Color On GameObject` component. Any GameObject with this component will retain how it looks and not be affected by custom colors.

::: warning WARNING Remember to apply these changes to all of the notes in your CustomNote! :::

![Adding a disable note color on gameobject component](~@images/models/notes/54.png)

