---
sidebar: auto
prev: ./basic-lighting.md
next: ./advanced-lighting.md
description: Learn about taking your lighting to the next level!
---
# Intermediate Lighting
_You've learned the basics and now you want more!_

* [Glossary of Terms](/mapping/glossary.md)

> "The first thing when getting into lighting is that you need to learn that you should learn your own style. Don’t think you need to copy others to become decent. Explore a bit."
~ Puds, Lighting Mentor

You've got your lighting feet wet in [Basic Lighting](/mapping/basic-lighting.md) and have decided that it's not so scary after all... great! Welcome! This page will help you expand on your "vanilla" lighting technique library but as Puds says, now it's time to start exploring and experimenting. Have fun with it!

## Off Event Timing
It's common for new lighters to overlook the importance of the timing of Off events throughout a lightshow. Well timed Off events can have as much impact as any On or Flash, and consistently timed Off events will produce a show that feels much more organic, and less rigid or computer driven. Since most sounds have a much clearer beginning than an end, especially vocals, there's rarely a universally correct timing for Off events.

::: tip NOTE
Once established, it's essential to apply decisions about Off block placement consistently throughout the entire show.
:::

**Tips for optimizing Off timing:**  
* Avoid placing Off events exactly halfway between regularly repeating On events, since this can easily produce an unintended strobe effect.
* Try using different baseline Off timings for different instruments (especially different drum types) as a subtle way to make them more distinct from each other.
* Try shortening anything not on the main beat very slightly (Off ~1/16 earlier than similar sounds on the main beat, for example) as a subtle way to honor the emphasis.

## Fast Ring Practices
::: warning  
Fast ring spins are resource intensive and will lag both your editor and your players' in-game experience if overused.
:::

Strobing Ring Spin events at 1/64 interval or more will produce extremely fast but inconsistent ring spins. The timing/interval are tempo dependant,

**How to Light Fast Spins:**
1. Use your editor's strobe tool at at least 1/64 precision.
2. Find the starting point of your spin:
   1. If your environment has rings that extend behind the player, start the spin ~1/2 beat before the desired effect.
   2. If your environment has rings that start in front of the player, start the spin at the point you want the desired effect.
3. Set the strobe duration for the period of time you want the effect.

**Tips for Fast Spins:**
* On slower songs (below 100 BPM) you may need to exceed 1/64 strobed ring spins to achieve the desired effect.
* Like most ring spinning, you will be at the mercy of randomization, and can't expect to get the same exact results each time
* A single Ring Spin event will usually (but not always) interrupt an ongoing fast spin, which is often actually desirable. Ending a fast spin can be applied with as much impact as beginning one.
* You'll get the most predictable results by leaving periods of no activity (~2 full beats) before and after the fast spin pattern.

## Strobing Practices
::: danger  
Strobing lights can trigger epileptic seizures. Be mindful of your player and include a warning in both your map description and the "Warning" extra field when you use flashy lights.
:::

**Strobing** is the practice of rapidly changing lighting events at an even precision. Most editors have utilities that will help you place strobes at a set precision automatically. The strobing effect is dependent on song tempo - a 1/8 strobe will look different at 120 bpm than it does at 200 bpm.

* You don't need to place strobes manually! See the controls for your favorite editor on how to use its strobing tool.
* Various VR headsets have different frame rates which means that fast strobes will display differently in different headsets. Stay under 1/16 for best performance
* Fast strobes at high bpm will give an inconsistent flickering effect, which may or may not be what you're going for

When strobing lighting events (vs. spin events) there are two main variants you can use, each with their own effect.

### Flash/On Strobing
You can produce a pulsating glow effect by strobing Flash and On events in sequence rather than the On/Off or Flash/Off sequences used in standard strobes. 

Flash events start ~37.1% brighter than On events and then quickly fades to the intensity of On. An On event placed at any point during the Flash animation will disrupt the ongoing transition, immediately set the intensity to On. Therefore, you can produce very different results by strobing these two events at different intervals, ranging from a pulsating glow at ~1/4 interval to something of a vibrating "hum" at ~1/16 (tempo dependant).

* Example of 1/4 interval at ~0:17: Don't Give Up On Me - Jason Ross ft. Dia Frampton mapped by Baxter and lighted by LittleAsi  
[Streamable](https://streamable.com/d1jm6) | [BeatSaver](https://beatsaver.com/beatmap/7c00)

### On/Off and Flash/Off Strobing
::: tip NOTE
This is a stub section. If you'd like to contribute, submit suggestions via [this form](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform).
:::
**On/Off** and **Flash/Off** strobes are considered "true" strobes, alternating bright light and darkness in rapid succession. Strobing should be used cautiously as overuse can make it very difficult to concentrate on your map or even harm players with neurological conditions.

As discussed in the [Flash/On](/mapping/intermediate-lighting.html#flash-on-strobing) section, "on" lights are at 100% brightness while "Flash" lights begin ~37.1% brighter than On events and then quickly fades to the intensity of On. Flash/Offs produce a more intense strobe than On/Offs.

* Example: Bass Music - Umziky (Cytus II ver.) mapped and lighted by Skeelie (also uses Chroma RGB)  
[YouTube](https://www.youtube.com/watch?v=Set0lOZ5Yog) | [BeatSaver](https://beatsaver.com/beatmap/7bc4)

## Laser Practices
Synchronizing side lasers is good for emphasis at times, but keeping them synchronized throughout is denying yourself a major dimension of activity, variety, and differentiation. The symmetrical nature of the two side lasers allows for the expression of ideas that other light combinations don't.

### Laser Spins
Speed 0 lasers (and rotating lasers, to a lesser degree) can be used either as a pair or in conjunction with one or more other light types (typically back-top or center, depending on environment) to produce a variety of spin effects. Using Big Mirror Environment for an example, the most typical laser spin can be produced by repeatedly turning the left laser, back-top light, then right laser on then off in sequence (or right, back-top, left for a spin in the opposite direction). 

As a baseline guide, turn each on in sequence at 1/16 interval, and turn each off as the next light is enabled. Adjust the interval as appropriate for the song and tempo, and experiment with the timing of the Off events (or events other than On/Off entirely) for a variety of related effects. This show includes many distinct examples of laser spin effects throughout, but a basic example can be found at ~0:38:

* Example: ShutEmDown - Celldweller mapped by Funrankable and lighted by LittleAsi  
[Streamable](https://streamable.com/zx1sf) | [BeatSaver](https://beatsaver.com/beatmap/5bb2)

### Laser Rotation Speed
* Vary laser rotation speed consistently based on some meaningful parameter, such as the pitch or length of the notes. 
* Try to avoid picking speeds randomly, setting them inconsistently, or using such high speeds that the variations you do include become imperceptible. 
* Slow speeds tend to match better with higher pitch and longer notes, with fast speeds especially for short notes. 
* Aside from their application in laser spins and similar multi-light effects, speed 0 lasers tend to work best for transitory or staccato notes.

## Contrast
High impact/high energy moments are the result of high contrast, not any specific pattern, technique, or level of saturation.  For example, sticking to one dominant color then switching has more impact than mixing colors throughout; or strobing lights constantly produces a flat energy level, whereas suddenly switching to a strobe effect will seem highly energetic if you otherwise stick mainly to normal lighting. Basically, it's not high volume that creates impact, it's the change in volume that counts. You can create contrast in any number of ways, so be encouraged to experiment. 

**Contrast Practices:**
* Pick a dominant color, keeping most lights that color and using the secondary for emphasis (accents, maybe snare hits, etc.)
  * Switch which color is dominant and which is secondary for emphasis at big moments and for contrast between different parts of the song (e.g. verse vs. chorus).
* Have all the lights totally black-out momentarily before a key moment.
* Employ major stylistic changes between different sections of the music; for example, map each light type to a different instrument in a dubstep song throughout the verse and build-up, then once the drop hits, switch to using fewer lights at a time to highlight key sounds.

This show features many major stylistic changes throughout, but see the section starting ~1:46 into the one ~1:54 for one example, and even more obvious at ~2:23.
* Example: Into the Fire ft. Miss Lina - Getsix (Lightshow Only) lighted by LittleAsi  
[Streamable](https://streamable.com/0qsto) | [BeatSaver](https://beatsaver.com/beatmap/7be2)

This one demonstrates a change from 1:1 instrument:light mapping to a focused emphasis-only style at the drop ~1:17; also note the use of total blackouts after the drop for increased impact despite the fact that the song never actually goes silent during that period.
* Example: Virtual Friends - DROELOE mapped by Skyler Wallace and lighted by LittleAsi  
[Streamable](https://streamable.com/6f429) | [BeatSaver](https://beatsaver.com/beatmap/7cd5)

## Environment Removal
When lighting for an environment, you may have wanted to remove unwanted parts of the environment. With the use of the Chroma mod, you can do just that! By specifying the `_environmentRemoval` field under the `_customData` of each difficulty in the `Info.dat`, you can remove specific parts of the environment. Note that Chroma must be listed as a suggestion or requirement in order for environment removal to work.

Example removing the Monstercat logo from the environment:
```json
"_customData" : {
  "_suggestions": [
    "Chroma"
  ],
  "_environmentRemoval" : [
    "MonstercatLogoL", "MonstercatLogoR"
  ]
}
```

Some common elements that are removed from environments:

|**Object Name**|**Description**|
|---------------|---------------|
|`Spectrograms`|The audio visualisers|
|`MonstercatLogoL`<br>`MonstercatLogoR`|The logo of the Monstercat environment|
|`RocketCar`<br>`RocketCar (1)`|The cars in the Rocket League environment|
|`Logo`|The Green Day and center Linkin Park logo|
|`TimbalandLogo`<br> `TimbalandLogo (1)`<br> `TimbalandLogo (2)`<br> `TimbalandLogo (3)`|The logo of the Timbaland environment|
|`LinkinParkTextLogoL`<br> `LinkinParkTextLogoR`|The Linkin Park logo on the walls|
|`LinkinParkSoldier`|The soldier art on the floor of the Linkin Park environment|

*A full list of props that can be removed from environments is being worked on.*

:::warning 
Removing the platform that the player stands on can limit the group of people that can play your map. This is because it can be rather terrifying if they are afraid of heights or cause motion sickness from the lack of a solid reference point. 
:::

## Credits
Content on this page was contributed by [LittleAsi](/mapping/mapping-credits.md#littleasi), [Puds](/mapping/mapping-credits.md#puds), and [Bullet](/mapping/mapping-credits.md#bullet).


