# Making Mods
## Injecting Mods
Beat Saber _**does not**_ have built in mod support.

Instead, most mods within the mod installer rely on [BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) to inject plugins into the game, as well as providing some useful tools for us modders.

For those of you who prefer [BepInEx](https://github.com/BepInEx/BepInEx) over either of these options, Bepis has created a loader for BSIPA plugins, available [here](https://github.com/BepInEx/BepInEx.BSIPA.Loader). As for developing Beat Saber plugins with the BepInEx plugin API, a generic guide exists on their [documentation site](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), but other than that you're kinda on your own.

## Project Setup
If you are interested in creating a Beat Saber mod, but do not have a template or Visual Studio template set up, [follow the Intro guide to get your project all set up](./intro.md).

### Ready to go?
Check out the [links below](#other-links) for documentation relating to Unity and related tooling. If you have any questions, the best place to ask is in the `#pc-mod-dev` channel on the [BSMG Discord](https://discord.gg/beatsabermods)

## Launch args
Helpful launch arguments that will make modding / debugging easier.

| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| - | :- |
| `--verbose`  | Enables the output log window for IPA. This will show the debug console that mods use.  |
| `fpfc` | "First Person Flying Controller"<br /><br />This allows you to use WASD and the mouse to navigate around the menu in game. This makes testing much easier, because you don't have to put on your headset! |
| `-vrmode oculus` | If you are running Beat Saber through Steam, this allows you to play the game on an Oculus headset. |

## Other Links
* [BeatMods](https://beatmods.com)
* [BeatMods Approval Guidelines](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [Unity Scripting API](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [Beat Saber IPA](https://github.com/nike4613/BeatSaber-IPA-Reloaded)
