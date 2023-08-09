---
prev: false
next: false
description: Emma amd gamesequence's Guide to making Custom Platforms!
---

# Custom Platforms Guide

_Emma amd gamesequence's Guide to making Custom Platforms._

::: danger
If you're creating models, it's extremely important that you read the [Shader Migration Guide](./shader-migration.md)
to avoid any shader issues
:::

### A note about the updated guide

Big thanks to Emma on making the starting guide. Any further contributions are made by me, gamesequence. 

## Project

Open the current [Custom Platforms Project](https://github.com/affederaffe/CustomPlatforms/releases/latest) with
Unity [2019.3.15f1](https://unity3d.com/get-unity/download/archive)

- You need to go to the tab that says `Unity 2019.x` and scroll down to 2019.3.15. This has to be installed with
  [Unity Hub](https://unity3d.com/get-unity/download).
- Need a guide on how to install? [Check out this Unity guide to Unity Hub.](https://docs.unity3d.com/Manual/LicensesAndActivation.html)

## First Steps

![Custom Platform Script](/.assets/images/models/platforms/CustomPlatformScript.png)

Create an `Empty GameObject` by right clicking in the Hierarchy window and selecting `Create Empty`. Make sure to set its
position in the Inspector to the origin (0,0,0). Search in the inspector for the `Custom Platform` script and apply it to
this GameObject. Everything inside this Object will be exported when the button on the `Custom Platform` script is pressed.
In the script there are also Exporting options. These disable parts of the original platform
(For when you want to replace something partially).

## Scaling (optional)
This is optional but I (gamesequence) have taken the liberty of making a [humanoid cmb model](https://www.mediafire.com/file/ngv6xrh11ppdin7/Cmb_full_body.fbx/file) that scales to a real life 5' 10" human irl. I reccomend using it in your projects to get your platform to the right scale. 
Make sure not to drop him under your platforms gameObject. 

![Untitled56_20230808020447](https://github.com/bsmg/wiki/assets/141610826/150deb7d-1218-4b9e-8f61-a7a45ed77ec7)

## Adding Models

![Objects](/.assets/images/models/platforms/Objects.png)

Drag all models you want in your Platform into your custom platforms GameObject and position them to your liking.
For the materials of the models make sure to use Beat Saber compatible shaders or the ones that you can find in the Project
called `_dark_replace` and `_glow_replace`. These are custom Materials that act like the Beat Saber materials, aka react
to the tube lights and mist. You can also find more beat saber compatible shaders if you check the pins in [#pc-3d-modeling](https://discord.com/channels/441805394323439646/468249466865057802)

### Track Rings

The `Track Rings` script makes track rings like seen in the game. To achieve this, the script takes a prefab (See making
a prefab in this guide). Make a seperate gameObject and attach the `Track Rings` script to it. For this guide, I named my
gameObject to "Track Rings".

![Screenshot 2023-08-08 014133](https://github.com/bsmg/wiki/assets/141610826/aa72fd4c-7aab-4624-b351-66226989c8e1)

![Screenshot 2023-08-08 014251](https://github.com/bsmg/wiki/assets/141610826/0a587a16-a78f-4570-8803-f3fa08e97d8f)

Next, drag the prefab you want to use under your `Track Rings` gameObject. Then drag the prefab that you just put under
your `Track Rings` gameObject to `Track Lane Ring Prefab`.

![Screenshot 2023-08-08 014413](https://github.com/bsmg/wiki/assets/141610826/a3ecc537-6497-49f2-ad43-26a8bc6ba355)

![Screenshot 2023-08-08 014534](https://github.com/bsmg/wiki/assets/141610826/8ce2fb3f-5a02-4e2e-9e57-2e323a7d4fa7)

Your track rings will now appear in the scene and you can adjust how many rings are present as well as other settings 
to effect how they behave. 

Note that your Track rings gameObject is where your track rings appear ingame. Move any childeren of this gameObject out of view.

![Screenshot 2023-08-08 014756](https://github.com/bsmg/wiki/assets/141610826/3703cdc1-1ee5-4418-bed5-d82aaaa78ad9)

![Untitled55_20230809005042](https://github.com/bsmg/wiki/assets/141610826/86aa671e-adf5-412d-ad53-de3b6f0f53d7)

Enabling the rotation effect, makes the rings rotate by the specified event, depending on the variables it's given.
(I haven't played around with these yet so experiment).

Enabling the step effect changes the rings spacing when the specified event is called between 2 variables.

![Track Rings Script](/.assets/images/models/platforms/TrackRingsScript.png)

## Making a prefab

What I did was I duplicated one of the existing prefabs under `Assets/Models/Playground`.

![Screenshot 2023-08-08 013030](https://github.com/bsmg/wiki/assets/141610826/bd684b84-18f4-4666-90b8-8a5084414fee)

Open the prefab and delete everything under the gameObject that says `Ring 1`.

![Screenshot 2023-08-08 013506](https://github.com/bsmg/wiki/assets/141610826/4f81191d-f285-44e1-b451-7c91ab9821af)

Drag and drop your track rings model on `Ring 1`. You can add any material that you choose to your track rings.
Do note that you will need to use an optimized material if you are makeing a prefab for track rings as using an
unoptimized material will make the game lag.

![Screenshot 2023-08-08 013705](https://github.com/bsmg/wiki/assets/141610826/768c6579-ec76-4605-b5d6-942c37111cf2)

![Screenshot 2023-08-08 013800](https://github.com/bsmg/wiki/assets/141610826/327aad39-8af1-4355-8fe4-a5155574caa0)


### Tube Light

![Tube Light](/.assets/images/models/platforms/TubeLightScript.png)

This script enables blinking lights. Putting this on an empty gameObject changes the background and adds a bit of color
to that space, according to the light ID's. When there's also a mesh renderer on it, it'll change the meshes color according
to the light ID's. When using this no color adding is needed, so I changed the size on the script to 0.

### Event Manager

If you want to make things happen in your platform then this is the most useful script to make this work. To demonstrate, I will
show you how to make an event that controls the glow colors as seen ingame. The `Glow models` are what we want to change color.

![Screenshot 2023-08-08 021241](https://github.com/bsmg/wiki/assets/141610826/fb56d757-e05d-44a0-8c21-f07de7e89204)

The event manager has different functions you can control based on different kinds of events. Such as when a level starts or the environments
glow changes from red to blue. Add the event manager to your custom platform gameObject.

![Untitled57_20230809010345](https://github.com/bsmg/wiki/assets/141610826/52fce7ef-7124-43e4-8c1c-73d85f438242)

![Screenshot 2023-08-08 022104](https://github.com/bsmg/wiki/assets/141610826/cef616d6-197f-44b8-b05c-ac15adc05036)

For controlling the glow, we are only going to need these two.

![Screenshot 2023-08-08 022209](https://github.com/bsmg/wiki/assets/141610826/90fbd6f7-0b1d-4529-b5bf-b7e8e0df916b)

Duplicate the gameObject that you want to manipulate the glow with. For me it is going to be `Glow models`. 

![Screenshot 2023-08-08 022355](https://github.com/bsmg/wiki/assets/141610826/d00f3f58-0bf4-4e0d-923c-a03fde4dec0c)

In the event manager under where it says `On Blue Light On()` hit the `+` icon twice. 

![Screenshot 2023-08-08 022607](https://github.com/bsmg/wiki/assets/141610826/21d5c58b-5547-45ed-8b9f-a171bc16d980)

I recommend that you rename your gameObjects that you want to manipulate to differentiate between the two. For example 
I am going to name mine `Blue glow models` and `Red glow models`. 

![Untitled58_20230808022926](https://github.com/bsmg/wiki/assets/141610826/67b8633a-c21a-488f-97ea-a03bdc365d08)

Go ahead and drag both of your glow model gameObjects into each of the two functions you added when you hit the `+` icon.

![Screenshot 2023-08-08 023339](https://github.com/bsmg/wiki/assets/141610826/cbc0e021-dac7-4615-9bf6-c27335933da2)

Click on `No Function` and navigate to `GameObject` and then select `SetActive(bool)`. After that go ahead and click
the check mark. The check mark turns the object on and off. When it is checked, it means that its turning the object on
while being unchecked it turns the object off. Do the same with your other gameObject and then do the exact same thing
you did on `On Red Light On` until you get something that looks like this.

![Screenshot 2023-08-08 024354](https://github.com/bsmg/wiki/assets/141610826/952faee8-a599-4e1b-bb9b-977720f2a6af)

Now you will have changing lights in your platform! There are many options so go ahead and play around with them a bit.
(I might make a more in depth guide on the event manager eventually.)

### Spectrogram

![Spectrogram](/.assets/images/models/platforms/Spectrogram.png)

The spectrogram script works like the track rings script and also requires a prefab or gameObject. This will get stretched
and shrunk according to the sound of the game and the variables provided. (Haven't played with this either).

## Exporting

![Saving](/.assets/images/models/platforms/Save.png)

Export the platform trough the script that you previously added to the gameObject to the location of your choosing.
Preferably the game's directory `Beat Saber/CustomPlatforms`.

::: tip NOTE
**Once you've got your new platform working**, [upload them to ModelSaber](https://modelsaber.com)
if you want to share them with the world.
:::

![Cat](/.assets/images/models/platforms/Cat.png)

## Baked Lighting

[Kylon's Baked Lighting Platforms Guide](./baked-lighting-platforms-guide.md)
Use this to add Unity's Baked Lighting to your platform.

Note that unity's baked lighting may not always provide the best results if working with more complex models.
You can also bake lights in blender (I find this to not only be much easier but also produces much better
results). I will demonstrate. Make sure you have light sources. These can be point lights, area lights or suns. 
In the shading tab, select the object that you want to bake the lights on. 

![Screenshot 2023-08-08 034049](https://github.com/bsmg/wiki/assets/141610826/20040e8d-1158-4cf3-8a1c-3b189642624b)

Add an image texture node and then click `New`. Change the resolution to how you see fit and then click ok.

![Screenshot 2023-08-08 034442](https://github.com/bsmg/wiki/assets/141610826/24885636-c5de-4d63-8a0b-97bacfbc1232)

Make sure to set the rendering engine to Cycles. Make sure you select both the object and the image texture you are
baking. Then click the `bake` button under the baking tab. Note that this will take some time depending on the resolution
of the image.

![Untitled59_20230808035009](https://github.com/bsmg/wiki/assets/141610826/33fe0be5-5c5d-48ad-89ad-68e18c592d99)

If done correctly you will get a nice result such as this one: 

![Screenshot 2023-08-08 040507](https://github.com/bsmg/wiki/assets/141610826/0e9cee44-8192-4a23-9b07-ec0e310110c5)

Youre done!