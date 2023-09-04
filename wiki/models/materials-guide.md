---
prev: false
next: false
---

# gamesequence's guide to materials

## Intro

::: tip NOTE
This guide was made under the assumption that you have basic knowledge of materials in unity.
:::

Materials are what make our models look nice in-game. Material effects are ahieved by using
shaders. There will be examples shown that are designed to either teach you how to achieve
certain effects or give you inspiration on what effects you want to give your models. The
shaders used for each effect will be listed.

## Unlit Glow

The Unlit Glow shader is one of the shaders already included in your projects usually. This
is a very easy to use shader to achieve simple effects in-game.

Breakdown of the Unlit Glow Shader:

- Color: Changes the color of the object.
- Texture: You can add any texture to your object.
- Glow: Controls the amount of glow your object has.

![UnlitGlowProperties.png](/.assets/images/models/materials/UnlitGlowProperties.png)

## [Uber Shader](https://discord.com/channels/441805394323439646/468249466865057802/737713961364881418) - Ikeiwa

This is useful for making terrian or realism effects. All this can be done with the Uber Shader.

![UberShaderProperties.png](/.assets/images/models/materials/UberShaderProperties.png)

The uber shader is just like the standard shader in unity. You can use normal maps, height
maps, etc. The only difference is that the lighting is local to the shader and not the
environment.

![UberShaderExample.png](/.assets/images/models/materials/UberShaderExample.png)

Here is a breakdown of the Uber Shader (Not everything is listed to keep things simple):

- Rendering mode: Can change between Opague, Cutout, and Transparent.
- Light Color: Can change the color of the light cast on the material.
- Light Direction: can change the direction of the light.
- Ambiant Light: Can add some additional light effects.
- Main Maps: This is where you put your image texture along with all the respective maps.
    - Emission: This adds a light effect to your object.
- Secondary Maps: You can add extra maps to add on to your effects.

<YouTube url='https://www.youtube.com/watch?v=bVaVaPi8Ke8' />

### [Materialize](https://boundingboxsoftware.com/materialize/getkey.php)

A good tool for creating normal maps, height maps, occlusion, etc. is materialize. It
takes any image and can make these maps directly from the image automatically!

::: tip NOTE
The materials previewed in materialize will not look exactly like they do when previewed in unity.
:::

This video will explain how materialize works:

<YouTube url='https://www.youtube.com/watch?v=zKYr3Ca-xqg&t=1s' />

A tip for adujusting the map settings; By default the settings will look like this:

![HeightMapExample.png](/.assets/images/models/materials/HeightMapExample.png)

You can add contrast to the images by adjusting the gain and the final contrast in the
settings.

![HeightMapExampleHard.png](/.assets/images/models/materials/HeightMapExampleHard.png)

A harder image will result in much more influence while a softer image would result in less.

![HardSoftExample.png](/.assets/images/models/materials/HardSoftExample.png)

You can change the settings of the other maps too by adjusting any sliders that have "contrast" in the name.

## [Melodi Unlit](https://discord.com/channels/755895757252591656/1112997773130879006/1112997773130879006) - AlexxSeven

Melodi is a good shader that can achieve many effects. Not to mention is has audiolink and
custom colors.

![MelodiUnlitExample.png](/.assets/images/models/materials/MelodiUnlitExample.png)

Here is a breakdown of some parts of the shader (Not all are listed to keep things simple):

- Shader options
    - Shader lit mode: Can change between Unlit and physical (if you have the premium
    version).
    - Cull Mode: Can change the culling to front, back, or off.

<YouTube url='https://www.youtube.com/watch?v=a2qCEbmmKP4' />

   - Alpha mode: Can change between opague, cutout, transparent and more.
   - Cutoff(If cutout is selected): This slider is for adjusting how much of the image is
    being cut out when using a transparent image texture.

::: tip NOTE
This is a current bug with version 1.1.16 of Melodi. Here is a quick fix:

<YouTube url='https://www.youtube.com/watch?v=iQfuHDWiS0o' />
:::

- Diffuse Texture
    - This is where you put your image texture.
- Diffuse Texture Settings
    - Texture Mode: Can switch between Matcap, Surface and Screen Space (if you have
    the premium version).
    - Shift Texture Angle: This changes the angle that the texture shifts when animating it.
    - Animation Speed: Changes the textures animation speed.
    - Shift Animation Direction: Changes the direction that the texture is animated.
    Checking the `Invert Direction` checkbox will reverse the direction of the animation.
- Diffuse Distortion Parameters
    - Normal Map: Adding a normal map adds distortion to your object. This can be used
    for making water or adding any other distortion effects.
    - Normal Scale: This will change how much distortion you are giving your object.

![DiffuseDistortionExample.gif](/.assets/images/models/materials/DiffuseDistortionExample.gif)

- Beat Saber Settings
    - Color Type: Can change between using a solid color or a gradiant.
    - Custom Colors: Uses the players set of colors they choose in-game.
- Fresnel Parameters
    - Fresnel Power and Scale: Can change how the fresnel looks.
    - Fresnel Mask Settings: Can add textures to your fresnel for additional effects.
    - Color Options: This changes the color of your fresnel.

<YouTube url='https://www.youtube.com/watch?v=3axnNpdRb8w' />

### Audio Link Setup

::: tip NOTE
When testing in-game the results will not look exactly like they did while testing in the project. Be
sure to test it in-game to get proper results.
:::

It is recommended to download the [minimal unity package](https://github.com/llealloo/vrc-udon-audio-link/releases) for easy setup. Import the
package in unity. Once imported you will want to go into your projects packages and
locate the `AudioLinkAvatar` prefab in `Packages/AudioLink/Runtime` and drag it into your
scene.

![AudioLinkAvatarDrag.png](/.assets/images/models/materials/AudioLinkAvatarDrag.png)

You have 2 options for using audio. One of them is using an audio clip by selecting
the `AudioLinkInput` gameObject. Then drag your audio clip into `AudioCLip`.

![AudioClipDrag.png](/.assets/images/models/materials/AudioClipDrag.png)

The other option is using a Youtube link to play an audio clip. Select the
`AudioLinkYtdlpPlayer` gameObject and paste a Youtube link in the `YtdlpPlayer` script.

![YoutubeLinkExample.png](/.assets/images/models/materials/YoutubeLinkExample.png)

When you click play in unity, your audio should start playing.

- Audio Link Settings

    - Diffuse Texture Animation: This will make the texture rotate based on the audio band
    settings.
    - Color Flashing: This will make your material flash based on the audio band settings
    and the color assigned to it.
    - Glow Pump: This is an additive effect that will scale on top of initial glow value (This
    feature is only seen in-game). Parts of the effect can be changed with the audio band
    settings.

    ![GlowPumpExample.gif](/.assets/images/models/materials/GlowPumpExample.gif)

    - Object Scale: This will change the objects scale based on the audio band settings.

    ::: tip NOTE
    VERY IMPORTANT!!!! This option uses vertex based animation. It scales it based on how
    the normals are set up. To keep this simple, these two examples show a smooth shaded
    object (left) and a flat shaded object (right). They both behave very differently!!!!

    ![ObjectNormalsExample.gif](/.assets/images/models/materials/ObjectNormalsExample.gif)

    :::

    - Object Rotation: This will change the objects rotation based on the audio band
    settings.

    <YouTube url='https://www.youtube.com/watch?v=hYcM8pP0lak' />
    
    Song used in the video: Code Red - [longestsoloever](https://www.youtube.com/@longestsoloever)

The Melodi shader is useful for all kinds of things. Get creative!

![MelodiExample.gif](/.assets/images/models/materials/MelodiExample.gif)

![AudioLinkExamples.gif](/.assets/images/models/materials/AudioLinkExamples.gif)

## [Fire Trail Shader](https://github.com/Ikeiwa/BeatSaber-shaders/blob/master/sh_trail_custom.shader) - Ikeiwa

This is one of the most well known shader for making animated trails for sabers. It is super
simple to use.

![FireTrailShaderProperties.png](/.assets/images/models/materials/FireTrailShaderProperties.png)

Breakdown of the Fire Trail Shader:

- Alpha Texture: This is where you would put your trail shape image.
- Displace Texture: This adds the "flame" effect to your trails, making them animated.
- Fade Mask: This where you would put the texture of your trail.
- Displacement Intensity: This changes how much of the trail shape is cut off.
- Displacement Speed: Changes the speed of the animated trail.
- Displacement Offset: Offsets the displacement of the trail.
- Glow: Changes how bright the glow is on the trail.

<YouTube url='https://www.youtube.com/watch?v=1vFDpYoEXXo' />

::: tip NOTE
When making an animated trail, make sure that your trail image's wrap mode is set to clamp
otherwise your trail will have unwanted edges.

![ClampExample.gif](/.assets/images/models/materials/ClampExample.gif)
:::

Here is the template trail:

![TemplateTrail.png](/.assets/images/models/materials/TemplateTrail.png)

To preview a trail simply just drag your trail material onto a plane.

## [Glass Refraction](https://alexxseven.com/discord) (Premium Only) - AlexxSeven

This shader is great for adding glass effects to your models. You can also add distortion
to your glass to give it some extra effect. This also has custom color support.

![GlassRefractionParameters.png](/.assets/images/models/materials/GlassRefractionParameters.png)

Here is a breakdown of the Glass Refraction shader (Not all are listed to keep things
simple):

- Color: Changes the base color of the glass.
- Custom Colors: Allows the player to adjust the base color of the glass based on their
presets in-game.
- Custom Colors Override: Enabling this option will override custom colors in favor of the
color source chosen. These are:
    - Object Vertex Color: Changes the color of the glass to the objects base color.
    - Saber Left: Changes the color of the glass to the same color as the Left Saber.
    - Saber Right: Changes the color of the glass to the same color as the Right Saber.
- Distortion Parameters: You can add effects to the glass that distort the objects behind it
using a normal map.

![DistortionParametersExample.gif](/.assets/images/models/materials/DistortionParametersExample.gif)

- Refraction Parameters: Adds additional glass effects.

![RefractionParametersExample.gif](/.assets/images/models/materials/RefractionParametersExample.gif)

- Fresnel Parameters: Adds Fresnel to your glass.
    - Fresnel Power and Scale: Can change how the fresnel looks.
    - Fresnel Mask : Can add textures to your fresnel for additional effects.
    - Color: This changes the color of your fresnel.
    - Fresnel Distortion: Can distort your fresnel for addtional effects.

<YouTube url='https://www.youtube.com/watch?v=LuBPlU53m8c' />

### Render Queue

Render queue is a way of specifying which objects to render first by using tags assigned to
the shader. For most shaders by default, the render queue will be set to 2000.

::: tip NOTE
This is most likely going to be utilized for things like glass refraction or transparency for objects.
:::

![RenderQueueExample.png](/.assets/images/models/materials/RenderQueueExample.png)

There are different rendering types, each with its own set value.

![RenderTypesExample.png](/.assets/images/models/materials/RenderTypesExample.png)

- From Shader: 2000
- Geometry: 2000
- AlphaTest: 2450
- Transparent: 3000

To keep this simple, the glass refraction shader made by AlexxSeven will be used as an
example. All 3 of the shaders have a queue set to 2000.

![RenderFail.png](/.assets/images/models/materials/RenderFail.png)

As you can see here, the other objects cannot be seen through the glass refraction shader.
This is because they are on the same layer. By changing the sand's render queue to 1999,
we get this result:

![RenderSuccess.png](/.assets/images/models/materials/RenderSuccess.png)

The sand can now be seen through the glass because the sand's render queue is set to a
lower number than the glass refraction. Think of the queue as layers. For this next
example, each material is set to the following:

- Dirt: 1999
- Sand: 2001
- Glass: 2000

![QueueExample.png](/.assets/images/models/materials/QueueExample.png)

The dirt is on a lower number than the sand is. This causes the dirt to be rendered over
the sand. If you want your objects to be seen through the glass refraction shader, make
sure your objects render queue is set to a value lower than the glass refraction's!

::: tip NOTE
The default ui in-game has a render queue set to 3000. 
:::