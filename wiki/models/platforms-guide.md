---
sidebar: auto
prev: ./avatars-guide.md
next: ./notes-guide.md
description: Emma's Guide to making Custom Platforms!
---
# Custom Platforms Guide
_Emma's Guide to making Custom Platforms._

## Project
Open the current [Custom Platforms Project](https://github.com/affederaffe/CustomPlatforms/releases/) with
[Unity 2019.4.18f1](https://download.unity3d.com/download_unity/3310a4d4f880/Windows64EditorInstaller/UnitySetup64-2019.4.18f1.exe).

## First Steps
![Custom Platform Script](~@images/models/platforms/CustomPlatformScript.png)

Create an `Empty GameObject` by right clicking in the Hierarchy window and selecting `Create Empty`. Make sure to set its
position in the Inspector to the origin (0,0,0). Search in the inspector for the `Custom Platform` script and apply it to
this GameObject. Everything inside this Object will be exported when the button on the `Custom Platform` script is pressed.
In the script there are also Exporting options. These disable parts of the original platform
(For when you want to replace something partially).

## Adding Models
![Objects](~@images/models/platforms/Objects.png)

Drag all models you want in your platform into the GameObject created in the second step and position them to your liking.
For the materials of the models make sure to use Beat Saber compatible shaders or the ones that you can find in the Project
called `_dark_replace` and `_glow_replace`. These are custom Materials that act like the Beat Saber materials, aka react
to the tube lights and mist.

### Track Rings
The `Track Rings` script makes track rings like seen in the game. To achieve this, the script takes a prefab.
To create one, drag and drop a GameObject from your `Hierarchy` into the `Assets/Models/` folder. After this the GameObject can safely be deleted.
Now once again drag and drop your newly created prefab onto the `Track Rings` script.

Enabling the rotation effect, makes the rings rotate by the specified event, depending on the variables it's given. (I haven't played around with these yet so experiment).

Enabling the step effect changes the rings spacing when the specified event is called between 2 variables.

![Track Rings Script](~@images/models/platforms/TrackRingsScript.png)

### Tube Light
![Tube Light](~@images/models/platforms/TubeLightScript.png)

This script enables blinking lights.
Either put this on an empty GameObject and adjust the width, length and center parameters or on one with a mesh renderer attached. 
The colors will change according to the specified light ID.

### Song Events
![Song Event Handler](~@images/models/platforms/SongEventHandler.png)

The `Event Manager` is the most useful script. With it you can trigger an action on any beat saber event (even unused).
For adding an event press the + button underneath On Trigger (). Drag in the object you want to manipulate into the box that just got created.
Press the dropdown menu to the right and choose what that object should do, by first selecting what component, then what action.
There are more predefined events like the `Combo Reached Event`, `Text Event Filter` (useful for custom counters) or `Every Nth ComboFilter`.

### Spectogram
![Spectogram](~@images/models/platforms/Spectogram.png)

The `Spectrogram` script works like the track rings script and also requires a prefab.
This will get stretched and shrunk according to the sound of the game and the variables provided

### Rotation Effetcs
![Rotation Effetcs](~@images/models/platforms/RotationEffects.png)
Both the `RotationEventEffect` and the `PairRotationEventEffec`t rotate your GameObjects based on the assigned song event.
Those scripts are useful to create rotating laser (pairs) like in default environments.

### Color Material
This script lets you grab the current light, saber or obstacle color and pass it to a shader property.
Use this if you want to create custom shaders.

::: tip NOTE
You don't need to restart your game anymore in order for changes to take effect.
When you remove, create or change a file in your CustomPlatforms directory,
these actions are reflected in-game and the corrosponding platform is deleted, loaded or updated.
:::

## Exporting

![Saving](~@images/models/platforms/Save.png)

Export the platform trough the script that you previously added to the gameObject to the location of your choosing.
Preferably the game's directory `Beat Saber/CustomPlatforms`.

::: tip NOTE
**Once you've got your new platform working**, [upload them to ModelSaber](https://modelsaber.com)
if you want to share them with the world.
:::

![Cat](~@images/models/platforms/Cat.png)
