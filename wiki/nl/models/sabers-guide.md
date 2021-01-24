---
sidebar: auto
next: ./avatars-guide.md
description: MissRaynor's gids voor het maken van eigen zwaarden!
---

# Zwaarden Gids
_MissRaynor's gids voor het maken van eigen zwaarden_

## Introductie
Omdat mensen nog steeds moeite hebben met het maken van hun eigen zwaarden, denken wij dat het het beste is om de huidige handleiding bij te werken. We bedanken angeliod0103 voor het maken van de vorige gids. Aanvullende bijdragen aan deze gids waren van Bobbie en Mdot.

## Voorbereiding
VERPLICHT NODIG:
* Unity 2018.1.6f1 voor het maken van een zwaard bestand (*.saber). [Download HIER](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe)
* Het Zwaarden Unity Project. [Download HIER](https://cdn.discordapp.com/attachments/468249466865057802/703747388556181534/Custom_Sabers-4.3.0-UnityProject.zip)
* Een 3D model van een zwaard naar keuze. De meest gebruikte bestanden zijn .obj en .fbx bestanden. Je kan je zwaard model downloaden van 3D model websites als Sketchfab en turbosquid.

Optioneel:
* 3D modelleer programma: Blender is een goede gratis optie, of 3dsmax als je er een licentie voor hebt (educatieve licentie is prima)
* Afbeelding bewerkings programma: [Photoshop](https://www.adobe.com/products/photoshop.html) of [GIMP](https://www.gimp.org/downloads/) werken prima als je je eigen zwaard texture wil maken
* Het zwaard model dat gebruikt word in deze handleiding. [Download HIER](https://bs.assistant.moe/Sabers/resources/Tutorial_Saber.zip)

## Installatie
Pak het Unity project uit naar jouw gewenste locatie.

Als je Unity hub gebruikt, klik dan op Add, selecteer de map van het project waar het net uitgeppakt is, en klik op selecteer map.

![Zwaard project toevoegen](~@images/models/sabers/01.png)

Het zwaard project zou nu in de lijst moeten verschijnen. Controleer dat de Unity versie correct is voor het project.

![Controleren dat de versie correct is](~@images/models/sabers/02.png)

Open het project, het zou er zo uit moeten zien:

![Controleren dat het project juist word weergegeven](~@images/models/sabers/03.png)

Controleer dat het project functioneert door te controleren dat de `Saber Exporter` zichtbaar is onder het `Window` tabblad bovenaan.

![Controleer dat het project een saber exporter heeft](~@images/models/sabers/04.png)

![Controleer dat de saber exporter correct werkt](~@images/models/sabers/05.png)

De huide scene zou een GameObject moeten bevatten genaamd `TemplateSaber`.

![Rode Cirkel rond TemplateSaber](~@images/models/sabers/06.png)

Als dit de eerste keer is dat je het project opent, dan is de camera in Unity erg ver weg van het zwaard. Om het zwaard te zien in het beeld, dubbelklik op het `TemplateSaber` GameObject.

Klik op de `RightSaber` en `LeftSaber` GameObjecten en controleer dat ze beide een `Event Manager` component hebben.

![Controleer dat de Evenementen Manager op het RightSaber object aanwezig is](~@images/models/sabers/07.png)

Probeer nu de TemplateSaber te exporteren naar je `CustomSabers` map door middel van de Saber Exporter.

![TemplateSaber exporteren](~@images/models/sabers/08.png)

Als het TemplateSaber verschijnt en werkt in het spel, dan is het instellen klaar en ben je klaar voor het volgende deel.

## Modelleren
Ik zal niet in detail treden over het maken van een 3D model. Als je niet al een model hebt, en wilt leren hoe je er een moet maken, zijn hier een aantal handleidingen:

### Blender
<YouTube url='https://www.youtube.com/watch?v=ICBP-7x7Chc' />

### 3DS Max
<YouTube url='https://www.youtube.com/watch?v=DzBTcDY3_Q4' />

Als het zwaard klaar is, kan je het exporteren door te kiezen voor File-Export, de juiste bestandsvorm te kiezen, en het te importeren naar Unity.

::: tip TIP OBJ is het beste voor simpele zwaarden. FBX is het beste voor complexe zwaarden die rigging of animaties hebben. :::

![Exporteer het zwaard als FBX](~@images/models/sabers/09.png)

::: tip TIP Je hoeft niet beide zwaarden te exporteren als ze dezelfde vorm hebben. Als ze identiek zijn, is het exportern van één van de twee goed genoeg. ::: ::: tip TIPP Het samenvoegen van meshes met dezelfde kleur/gloeiende attrivuten zal ERG VEEL helpen op de lange termijn. :::

## Unity
Om het model te importeren, sleep je het model simpelweg naar het Assets venster. Daarna moet het zwaard precies overlappen met de TemplateSaber. Video Voorbeeld:

<YouTube url='https://www.youtube.com/watch?v=mphD87zOer4' />

Vervolgens moet je Beat Saber compatibele materialen aan je zwaarden toevoegen.

Het project word geleverd met 4 verschillende Beat Saber compatibele shaders en materialen. Hier zijn de belangrijkste verschillen:
* Lit glow is belicht en heeft dus schaduwen. Je kan de richting van het licht veranderen, en hoe sterk het is
* Metallic maakt het material iets donkerder en laat je een metalen reflectie toevoegen
* Unlit glow is vergelijkbaar met Lit glow maar is niet belicht en heeft dus geen schaduwen.
* Unlit glow cutout dither is hetzelfde als unlit glow maar laat je transparantie toevoegen aan je material.

De materialen die je zal gebruiken zullen afhangen van de eigenschappen die je zoekt.

::: warning WAARSCHUWING Zorg dat je *ALLEEN* shaders gebruikt die met Beat Saber werken. Als je een shader gebruikt die niet compatibel is (zoals de Unity standaard shader), dan zal je materiaal gewoon als wit in het spel eruit zien. ::: ::: tip TIP Voor meer informatie over shader compatibiliteit, raadpleeg de Geavanceerde shader eigenschappen sectie van deze gids. :::

Video voorbeeld van het toepassen van materialen:

<YouTube url='https://www.youtube.com/watch?v=zKFCNJoQOWk' />

Je kan een afbeelding toevoegen aan een materiaal door de afbeelding in het afbeelding vak te slepen.

![Voeg afbeelding toe aan zwaard](~@images/models/sabers/10.png)

::: tip TIP TIP: De `Glow` schuifregelaar wijzigt hoe helder het zwaard gloeit. Bovendien, als de Glow is ingesteld boven 0, zal dat material de kleur krijgen die de speler heeft ingesteld. :::

Wanneer je dit allemaal gedaan hebt, kan je je zwaard exporteren. Open de `Saber Exporter` in het `Window` tabblad en typ hier de naam van je zwaard en de auteur's naam in.

![Exporteer het zwaard en voeg naam en auteur toe](~@images/models/sabers/11.png)

Plaats je zwaard in de `CustomSabers` map en probeer ze uit in het spel. Als ze er goed uitzien, ben je helemaal klaar!

::: tip TIP **Wanneer je nieuwe zwaarden werken**, [kan je ze naar ModelSaber uploaden](https://modelsaber.com/Upload/) als je ze wil delen met de hele wereld. :::

## Geavanceerd
Deze sectie behandelt dingen die niet in de hoofd gids aan bod komen, zoals hoe je Events en Trails kan toevoegen.

Andere Scripts zijn beschikbaar in `Assets/CustomSaber.dll`. Klik op de kleine pijl om het uit te breiden. ![Uitvouwen van CustomSaber.dll](~@images/models/sabers/12.png)

### Evenementen Manager
Dit component laat je een actie instellen wanneer aan een bepaalde evenement voorwaarde is voldaan. Dit is bijvoorbeeld wanneer je een noot raakt, een noot mist, wanneer je een level start, etc...

Om het te gebruiken, klik je op de plus knop om een nieuw evenement te maken, sleep het GameObject dat het evenement uitvoert in het vak, en kies wat je wilt dat dit GameObject doet.

Als je meer informatie wilt over evenementen, lees dan de `Evenementen` sectie in de Avatars gids **link needed!!!**

![Evenement toevoegen](~@images/models/sabers/13.png)
### Elke Nde Combo Filter
Dit component laat je een actie uitvoeren bij elke N combo. Het werkt hetzelfde als de `Evenementen Manager`, maar zal alleen uitvoeren bij elke keer dat je een combo van N hebt.
### Trails
Dit component laat je de standaard trails aanpassen voor zwaarden. Voor een uitgebruide handleiding over het gebruik van trails, word [MDot's custom trail guide](https://mdotamaan.github.io/BeatSaber-CustomTrailsGuide/) aangeraden.
### Animatie
Als je je zwaarden een bepaalde animatie wilt laten uitvoeren, dan heb je een `Animator` component nodig. Dit staat je toe om de animatie die je maakt beter te beheren, en ook hoe de animatie overgaat in andere animaties, of wanneer deze uitgevoerd word door middel van de Evenementen Manager. [Meer informatie over het animator component is beschikbaar in de unity documentatie hier](https://docs.unity3d.com/Manual/class-AnimatorController.html).
### Geavanceerde Shader Eigenschappen
Als je shaders wilt modificeren om de gebruikers' kleuren te gebruiken zondat de Glow aan te passen, dan is dit mogelijk om dit te ondersteunen.

Voeg dit code fragment toe aan de `Properties` sectie van je shader. Als je al een eigenschap hebt met de naam `_Color`, zorg dat je die weghaalt!
```
_Color ("Kleur", Color) = (1,1,1,1)
[MaterialToggle] _CustomColors("Gebruiker Kleuren Gebruiken", Float) = 0
```

Nu zullen je materialen een `Gebruiker Kleuren Gebruiken` selectievakje moeten hebben in plaats van de kleur selectie die afhangt van de ingestelde Glow.

Op dezelfde manier, als je een niet-Beat Saber shader wilt gebruiken op een zwaard en je wilt dat het correct weergegeven word in het spel, dan moet je het `Alpha` kanaal er uit halen.

Elke shader is verschillend, dus er is geen universele manier om dit aan te pakken. Als je niet zeker weet hoe dit moet, voel je vrij om het te bespreken in het #pc-3d-modeling kanaal in de [Beat Saber Modding Group](https://discord.gg/beatsabermods).