---
sidebar: auto
prev: ./sabers-guide.md
next: ./platforms-guide.md
description: Assistants gids voor het toevoegen van full body avatars in Beat Saber!
---

# De Custom Avatars gids
_Assistants gids voor het toevoegen van full body avatars in Beat Saber_

## Introductie
Ok jongens en meisjes, jouw favoriete Assistant gaat jullie leren hoe je je favoriete anime modellen maakt en ze in 3D Osu! stopt!

Ik ga ervan uit dat je een basiskennis van blender en unity hebt en in het verleden avatars voor VRChat hebt gemaakt. Als dat niet het geval is, zijn er [genoeg gidsen te vinden](http://bfy.tw/IQ0F). Deze handleiding begint op het punt wanneer je klaar bent om een fbx-bestand te exporteren om te gebruiken in unity. Hier is [een video](#videos) van mij die een avatar maakt als je iets wilt volgen terwijl je dit doet. Het word uitgelegd door Megalon omdat een bizar ongeluk mij het vermogen om te spreken en video's te editen heeft weggenomen. CC's coming soon™.

## Shape Keys: Turning Bad Touch into Good Touch
Je wilt dus niet dat je waifu de sabers vasthoud doormiddel van pure plot armor en plakkerige handen, maar ze heeft geen fist shape key. Om er een toe te voegen gaan we blender weer gebruiken, nu weet ik dat ik heb gezegd dat we al klaar waren om te exporteren, maar ik ben 12 en heb dan ook de aandacht van

We zullen de CATS blender plugin gebruiken, als je het niet hebt geïnstalleerd, download het [hier](https://github.com/michaeldegroot/cats-blender-plugin/releases).

Onder het CATS menu.

![CATS menu](~@images/models/avatars/startpose.png)

Klik op Start Pose Mode.

![Start pose 2](~@images/models/avatars/startpose2.png)

Met pose mode ingeschakeld, kan je de bones op de gewenste positie plaatsen. Klik met de rechtermuisknop om de bones te selecteren, en gebruik `SHIFT` om er meerdere tegelijkertijd te selecteren.

![Poseren](~@images/models/avatars/pose.gif)

Als het er uit ziet zoals je wilt, klik dan op `Pose To Shape Key`. Dit maakt een shape key om een vuist te sluiten.

![Pose to shape key](~@images/models/avatars/posetoshapekey.png)

Druk op `w` en klik op Clear User Transforms (All) om het af te ronden, dit zal de stand van de hand resetten.

![Clear transforms](~@images/models/avatars/cleartransforms.png)

Klik daarna op Stop Pose Mode.

![Stop pose mode](~@images/models/avatars/stoppose.png)

## Naar Unity en daar voorbij
Open het [Avatar Unity Project](https://bs.assistant.moe/Avatars/resources/UnityProject.zip).

::: danger BELANGRIJK Gebruik Unity versie [2018.1.6f1](https://download.unity3d.com/download_unity/57cc34175ccf/Windows64EditorInstaller/UnitySetup64-2018.1.6f1.exe). En zorg ervoor dat je [deze instructies](#unity-2018) volgt. :::

Importeer het fbx-bestand met jouw waifu, en maak een leeg GameObject met haar naam, maar sleep haar er nog niet in.

![Assets](~@images/models/avatars/assets.png)

![Hiërarchie](~@images/models/avatars/hierarchy.png)

De volgende stap is op het Avatar asset klikken, en de rig in te stellen als humanoid, en het vervolgens te configureren. Als je al eerder met VRChat avatars hebt gewerkt dan zou dit bekend moeten klinken, Dus zal ik de configuratie overslaan, die in feite bestaat uit het bij elkaar passen van de ledematen, en het forceren van een T-pose. Nadat je dat hebt gedaan kan je je avatar naar het GameObject slepen dat je eerder al hebt gemaakt.

![Humanoid](~@images/models/avatars/humanoid.png)

Maak 4 Lege GameObjecten in de root object, en noem ze `Head`, `Body`, `LeftHand` en `RightHand`.

Je moet `Head` neerzetten daar waar je je camera wilt hebben, vergelijkbaar met de witte punt van VRChat.

Voor zowel `LeftHand` als `RightHand` wil je ze op je Avatar neerzetten alsof het je controllers waren. De positieve Y-as wijst omhoog van de controller, dus je wilt dat dat naar je polsen wijst.

![Head object](~@images/models/avatars/headobject.png)

![Left hand](~@images/models/avatars/LeftHand.png)

![Gameobjects](~@images/models/avatars/gameobjects.png)

::: danger BELANGRIJK Zorg ervoor dat je de GameObjects hebt waar je ze wilt hebben, na de volgende stap zijn hun positie definitief. :::

We zijn klaar om te beginnen met de pret! Navigeer door de hiërarchie van de Armature totdat je het Head bereikt, selecteer het en klik er met de rechtermuisknop op en klik dan op Create Empty, sleep het vervolgens in het `Head` dat we hebben gemaakt en noem het `HeadTarget`. Dat proces zal ervoor zorgen dat het op de juiste plaats is.

![Head](~@images/models/avatars/head.png)

Doe hetzelfde met je polsen en plaats ze in `LeftHand` en `RightHand`, en noem ze respectievelijk `LeftHandTarget` en `RightHandTarget`. Het zou er zo moeten uitzien.

![Targets](~@images/models/avatars/targets.png)

::: danger BELANGRIJK Als je `head`, `LeftHand` of `RightHand` moet verplaatsen NADAT je de targets al hebt geplaatst, moet je de targets verwijderen en ze opnieuw toevoegen nadat je ze hebt verplaatst. :::

Selecteer je Avatar, degene die blauw is op mijn vorige afbeelding, en voeg enkele componenten eraan toe: als eerst heb je `VR IK` en `IK Manager` nodig, je kan ook `IK Manager Advanced` gebruiken als je de IK instellingen wilt wijzigen. Voeg de 3 targets die je zojuist hebt gemaakt toe aan de `IK Manager` van jouw keuze.

![Targets 2](~@images/models/avatars/targets2.png)

![Targets 3](~@images/models/avatars/targets3.png)

Je zou nu een volledig functionele avatar moeten hebben voor Beat Saber, maar druk nog niet op die export knop, we moeten het nog de laatste paar dingetjes geven. Zodra je klaar bent met testen van de Avatar in de Play mode en IK werkt, moet je al je materials instellen om een van de meegeleverde Beat Saber shaders te gebruiken. Als je jouw materials hebt ge-atlased, fantastisch, je kan het lastige werk van ze allemaal te re-texturen overslaan. Omdat die shaders, om een of andere reden, niet dezelfde texture parameter gebruiken als de meeste andere shaders.

![Materials](~@images/models/avatars/materials.png)

Je hebt misschien gemerkt dat je avatar zijn benen kruist alsof het moet plassen wanneer het bukt. Je hebt misschien gespeeld met de IK opties en opgemerkt dat het veranderen van de `Swivel Offset` op de benen dit in fixed in unity, maar dat de wijzigingen niet in het spel verschijnen. Je kan dit oplossen door `IK Manager Advanced` te gebruiken. Door de swivel-offsets toe te voegen aan het `IK Manager Advanced` component zullen deze instellingen in het spel werken. Als je er nog niet eerder mee hebt gespeeld, dit veranderd de hoek waarmee de knieën buigen. Een positieve waarde beweegt de knieën naar rechts, en een negatieve waarde beweegt ze naar links, vanuit het zicht van de avatar.

![Leg fix](~@images/models/avatars/legsfix.png)

Je kan nu cosmetische dingen doen op je avatar, voeg dynamic bones toe als je dat wilt, maar **gebruik de bijgesloten scripts**. Je kan ook de vingers van je waifu buigen zodat ze ook daadwerkelijk de sabers vasthoudt, ik heb daar Shape Keys voor gebruikt. Avatars zijn nu ook zichtbaar in first person. Je kan het aan/uit zetten met behulp van de `Home` toets op jouw toetsenbord. If you want to be able to see your avatar in first person, but don't want to see the inside of your head, you can use the `First Person Exclusion` component to exclude your head's mesh, note that it will have to be a separate mesh for this to work. Als je je avatar twee keer ziet, alsof je scheel kijkt, moet je een instelling aan passen. Ga naar `Edit` -> `Project Settings` -> `Player`. On the window that appears click on `XR Settings`, Make sure that `Virtual Reality Supported` is turned on, and that `Stereo Rendering Method` is set to `Single Pass`.

![Player](~@images/models/avatars/player.png)

![Single pass](~@images/models/avatars/singlepass.png)

## Laatste stuk
Select the parent to your avatar, the upmost item in the hierarchy, and add 2 components to it, `Avatar Descriptor` and `Event Manager`. Fill out the Avatar Descriptor, and you can leave Event Manager empty, if you knew how to use it you would probably not be reading this.

![Avatar](~@images/models/avatars/avatar.png)

To add a `Cover Image` you'll need to add an image and set it as a `Sprite (2D and UI)`, you can then drag it into the `Avatar Descriptor`.

![Cover](~@images/models/avatars/cover.png)

![Cover sprite](~@images/models/avatars/cover-sprite.png)

The last thing to do is export the avatar. Go to `Window` -> `Avatar Exporter`, and you should see something like this. Just click on the Export button, and save it to the CustomAvatars folder, and you're golden.

![Exporter](~@images/models/avatars/exporter.png)

::: danger IMPORTANT If you're re-exporting an avatar make sure to delete the previous file, it will not overwrite it. :::

::: tip NOTE Once you've got your avatar exported, [upload them to ModelSaber](https://modelsaber.com) if you want to share it with the world. :::

Ga nu maar de weeb uithangen op de Nico-Nico Nii remix als je waifu ofzo. Assistant out.

## Animaties: Het Leeft
For the purpose of this guide an animation will be considered any behavior that is not directly caused by the IK scripts or the movements of the HMD and controllers. The most basic form of animations involve what you're probably familiar with, `Animation` files, an `Animator Component`, its corresponding `Animation Controller`, and `Events`. First we need to place an `Animator` component, and we have to be very particular about how we do this. Just playing it on the avatar object will cause it to conflict with the IK scripts, so we have two options: We can set the animation layer in the `Animation Controller` to `Additive Blending`, which will allow us to place the `Animator Component` on the avatar object.

![Layers](~@images/models/avatars/layers.png)

The second way, and my prefered method, is to leave the layer as `Override Blending` and place the `Animator Component` on an object that isn't affected directly by the IK script, nor is a parent to any such object. This is an example of where you can safetly place the `Animator Component`, and where you can't.

![Animations](~@images/models/avatars/Animations.png)

Once you have your `Animator Component` and its respective `Animation Controller` you'll need to add `Animation` files to it, and make sure to create `Trigger Parameters`, set transitions between states, and set the `Trigger Parameters` to set off those transitions. For animations of set duration you can create a single `Trigger Parameters` to start the animation, and leave the transition back empty, but for animations that you want to hold for an arbritrary amount of time you'll want to create a `Trigger Parameters` to start the animation, another to end it, and set the animtion to looping.

![Triggers](~@images/models/avatars/triggers.png)

Now that you have an animation layer with transitions and triggers, you'll need to set up events to fire them. First you'll want to create an `Event Manager` component on the root object. This provides some events that you can use, and also allows other event scripts to work. The vanilla CustomAvatar.dll also comes with the `Combo Reached Event` and `Every Nth Combo Filter`.

![Event Manager](~@images/models/avatars/eventmanager.png)

![Event Manager](~@images/models/avatars/comboevents.png)

Once you've selected which event you want to use for your animation, you need to select the Object that contains the `Animator Component`, then select `Animator -> SetTrigger (string)` as the function, and type the name of your `Trigger Parameter` in the text field.

![Empty event](~@images/models/avatars/emptyevent.png)

![Object event](~@images/models/avatars/objectevent.png)

![Function event](~@images/models/avatars/functionevent.png)

![Full event](~@images/models/avatars/fullevent.png)

Once the event is setup, when it fires it will activate the trigger, which will activate the transition on your `Animation Controller`. If you want to setup controller events similar to VRChat gestures, you'll want to set a trigger to activate your transition on a press event, and another for the deactivation transition on a release event.

### Events
We've seen how to use events to make animations happen, but there's *a lot* more that you can do with them. First lets look at what an event looks like. There's 4 parts to an event that you have to worry about. First, what triggers the event. It can be any of the things in the `Event Manager` component, or the combo components, or even from a third party plugin, like `CustomKeyEvents`. Second, you need to drag a game object into the field that says `None (Object)`, whatever object you pick will be the one affected by the trigger. Third, you have to select which function from that game object you want to use. Click on the field that says `No Function` and pick the function you want the event to use. Here you will see all the public methods with at most 1 argument that are available to the object or its components. Finally, under the function you just picked you will be able to set the argument to that function, if any.

We saw how to do this with the animator component on the previous section, but you can use this for many other things besides triggering events. You can make it play audio clips using the `PlayOneShot` function from an `Audio Source` component. You can start particle systems, or make them emit a certain number of particles. You can turn objects on and off. You can edit materials. There's endless posibilities, so go drag some objects in and see what you can get out of them.

### CustomKeyEvents
This plugin allows you to set event triggers to controller actions. You will need `CustomKeyEvents.dll (Unity Asset)` in your Unity project in order to add those to your avatar. The user will also need `CustomKeyEvents.dll` in their `Plugins` folder for them to work in game.

## Full Body Tracking: Ra Ra Rasputin~
If you want to create an avatar with `Full Body Tracking` support you'll have to add 3 more Objects, one for each of the `Vive Trackers` in your feet and hip. Place those Objects in the same level you placed the ones for the hands, and name them `LeftLeg`, `RightLeg`, and `Pelvis`.

![Full body objects](~@images/models/avatars/fullbodyobjects.png)

These Objects work exactly the same way as the hand objects, you want to position them on the Avatar like they're positioned physically on your body. Make sure to pay attention to the orientation of the tracker.

![Tracker object](~@images/models/avatars/trackerobject.png)

![Tracker axis](~@images/models/avatars/trackeraxis.png)

Now that they're in the correct place, you'll want to create the targets by navigating the Armature to the feet and pelvis bones, the ones the IK calls `Left Foot`, `Right Foot`, and `Pelvis`. Right click on those bones and select `Create Empty`. an Object called `GameObject` will appear as a child to the bones, you want to rename them into `LeftLegTarget`, `RightLegTarget`, and `PelvisTarget` and drag them into `LeftLeg`, `RightLeg`, and `Pelvis` respectively. Once complete your hierarchy should look something like this:

![Full body hierarchy](~@images/models/avatars/fullbodyhierarchy.png)

Now that all your Objects and Targets are ready, you'll have to add them to the `IK Manager Advanced` script. You also want to set the values of both leg's and pelvis' `Position Weight` and `Rotation Weight` closer to `1`, but feel free to experiment with the values.

![Full body IK Manager](~@images/models/avatars/fullbodyIKmanager.png)

## Unity 2018

So, you're probably wonder why now I'm telling you to use Unity 2018.1.6f1, when previously we said you shouldn't use any 2018 version. Well, the game has changed, figuratively, and literally. Beat Saber now uses Unity 2018 instead of Unity 2017, and as such the avatars need to be created with Unity 2018 to work correctly. You will need to set the `Scripting Runtime Version` to `.NET 4.x Equivalent` if it isn't already. For that you need to go to `Edit -> Project Settings -> Player` and in the window that appears open the `Other Settings` tab, and scroll down to the `Configuration` section.

![Script runtime](~@images/models/avatars/scriptruntime.png)

You're going to need to use the new version of `CustomAvatar.dll` in your Unity project. Delete the old one if you have it—this project contains the correct one—and replace it with this one. Preferably in the assets folder while Unity isn't running. You might have to re-add your components. If the asset doesn't have the arrow that lets you see all the scripts, right click it and select `Reimport`.

![New asset](~@images/models/avatars/newasset.png)

## FAQ: TL;DR:RTFM

### PureDarks avatar plugin?
PureDark's plugin has been integrated into the main plugin. A few things have changed. `Make Children Visible` is no longer needed, first person view is enabled by default, and is toggleable with the `Home` key on your keyboard. To add exclusions to the first person view, you can use the `First Person Exclusion` component. `Avatar VRIK Fix` is now called `IK Manager Advanced`, and since it's all in one plugin it's no longer needed to provide cross compatiblity, so only one of either `IK Manager` or `IK Manager Advanced` is needed. The controller events components were removed, and will appear on their own plugin.

### I can't find the IK scripts or the Avatar exporter.
Make sure you're using Unity 2018.1.6f1, not 5.6.3p1, not 2017, and you've followed these directions. If your CustomAvatar.dll asset doesn't have the arrow that you click to show the scripts, try deleting and re-importing the CustomAvatar.dll Asset to Unity.

### I can export avatars but they're invisible in game. ↵
You can toggle first person view by pressing `Home`. If they're invisible in your desktop window, make sure that you used the correct Beat Saber shaders, and Unity 2018.1.6f1.

### Only my avatars are T-Posed.
Well I'm very sorry, but this means that you did something wrong while creating your avatar. There's no way to know just what you did wrong, because so many things have the same effect. The only advice we can give you is make sure that you followed the guides exactly, and maybe watch a video to follow along.

## Video 's
Here is a video of me making an avatar, narrated by Megalon. [5:57]

<YouTube url='https://www.youtube.com/watch?v=iBEfl_v71Nw' />

::: warning DISCLAIMER I know nothing about making avatars or using either Unity or Blender, I just threw shit at the wall blindly for 3 days and this is what stuck. But until someone who actually knows what they're doing makes a guide, this is all there is. :::

## ♥ Speciale Dank

**ikeiwa**, for creating this fantastic plugin.

**xyonico**, for rewriting this fantastic plugin.

**PureDark**, for making the fantastic plugin that fixes many issues.

**Emma**, for making the first guide that led me to figuring this out, and helping with this one.

**Megalon**, for providing the ASMR for the video.

**Ella**, for making fun of me until I got gud, helping with the website design, parts of this guide, and putting up with all my dumb questions.
