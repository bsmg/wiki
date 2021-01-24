---
sidebar: auto
prev: ./avatars-guide.md
next: ./notes-guide.md
description: Emma's gids voor het maken van custom platformen!
---

# De Custom Platforms gids
_Emma's gids voor het maken van custom platformen_

## Project
Open the current [Custom Platforms Project](https://github.com/affederaffe/CustomPlatformsUnityProject/releases/) with [Unity 2018.1.6f1](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe).

## Eerste stappen
![Custom Platform Script](~@images/models/platforms/CustomPlatformScript.png)

Maak een `Empty GameObject` door met re rechtermuisknop op het Hierarchy venster te klikken en `Create Empty` te selecteren. Zorg ervoor dat de positie in de Inspector wordt ingesteld op de oorsprong (0,0,0). Zoek in de inspecteur naar het `Custom Platform` script en pas het toe op dit Gameobject. Alles binnen dit object zal worden geëxporteerd wanneer de knop op het `Custom Platform` script wordt ingedrukt. In het script zijn er ook opties voor het exporteren. Hiermee schakel je delen van het originele platform uit (Voor wanneer je iets gedeeltelijk wilt vervangen).

## Modellen toevoegen
![Objects](~@images/models/platforms/Objects.png)

Sleep alle modellen die je wilt in je Platform naar het GameObject dat in de tweede stap wordt gemaakt en plaats ze waar je wilt. Voor de materialen van de modellen zorg je ervoor dat je Beat Saber compatibele shaders gebruikt of degene die je kunt vinden in het Project, genaamd `_dark_replace` en `_glow_replace`. Dit zijn custom materialen die werken zoals de Beat Saber materialen, of te wel, react to the tube lights and mist.

### Track Rings
The `Track Rings` script makes track rings like seen in the game. To achieve this, the script takes a prefab. Currently I haven't been able to figure out how to use a prefab in it, so I used a gameObject, that is part of the platform hierarchy, that I later moved off to `y = -1000`. For the ring-preview to show correctly, move this gameObject to (0,0,0) and adjust your settings and before importing move it off to somewhere offscreen.

Enabling the rotation effect, makes the rings rotate by the specified event, depending on the variables it's given. (I haven't played around with these yet so experiment).

Enabling the step effect changes the rings spacing when the specified event is called between 2 variables.

![Track Rings Script](~@images/models/platforms/TrackRingsScript.png)

### Tube Light
![Tube Light](~@images/models/platforms/TubeLightScript.png)

This script enables blinking lights. Putting this on an empty gameObject changes the background and adds a bit of color to that space, according to the light ID's. When there's also a mesh renderer on it, it'll change the meshes color according to the light ID's. When using this no color adding is needed, so I change the size on the script to 0.

### Song Events
![Song Event Handler](~@images/models/platforms/SongEventHandler.png)

The event manager is the most useful script. With it you can trigger an action on any beat saber event (even unused ones). For adding an event press the `+` button underneath `On Trigger ()`. Drag in the object you want to manipulate into the box that just got created. Press the dropdown menu to the right and choose what that object should do, by first selecting what component, then what action. Make sure that you only use 1 event Handler per gameObject, as only 1 will work per gameObject.

### Spectogram
![Spectogram](~@images/models/platforms/Spectogram.png)

The spectrogram script works like the track rings script and also requires a prefab or gameObject. This will get stretched and shrunk according to the sound of the game and the variables provided. (Haven't played with this either).

## Exporting

![Saving](~@images/models/platforms/Save.png)

Export the platform trough the script that you previously added to the gameObject to the location of your choosing. Preferably the game's directory `Beat Saber/CustomPlatforms`. ::: tip NOTE **Once you've got your new sabers working**, [upload them to ModelSaber](https://modelsaber.com) if you want to share them with the world. :::

![Cat](~@images/models/platforms/Cat.png)
