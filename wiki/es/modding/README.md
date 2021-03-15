# Haciendo Mods

## Inyectando Mods
Beat Saber _**no**_ tiene soporte para mods incorporado.

Instead, most mods within the mod installer rely on [BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/) to inject plugins into the game, as well as providing some useful tools for us modders.

For those of you who prefer [BepInEx](https://github.com/BepInEx/BepInEx) over either of these options, Bepis has created a loader for BSIPA plugins, available [here](https://github.com/BepInEx/BepInEx.BSIPA.Loader). As for developing Beat Saber plugins with the BepInEx plugin API, a generic guide exists on their [documentation site](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html), but other than that you're kinda on your own.

## Configuración del proyecto
If you are interested in creating a Beat Saber mod, but do not have a template or Visual Studio template set up, [follow the Intro guide to get your project all set up](./intro.md).

### ¿Listo para comenzar?
Echa un vistazo a los [enlaces de abajo](#other-links) para ver la documentación relativa a Unity y herramientas relacionadas. If you have any questions, the best place to ask is in the `#pc-mod-dev` channel on the [BSMG Discord](https://discord.gg/beatsabermods)

## Argumentos de lanzamiento
Argumentos útiles de lanzamiento que facilitarán el modeado / depuración.

<!-- markdownlint-disable MD013 -->
| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                                                                  | Enables the output log window for IPA. This will show the debug console that mods use.                                                                                                                                |
| `fpfc`                                                                                       | "First Person Flying Controller"<br /><br />This allows you to use WASD and the mouse to navigate around the menu in game. This makes testing much easier, because you don't have to put on your headset! |
| `-vrmode oculus`                                                                             | If you are running Beat Saber through Steam, this allows you to play the game on an Oculus headset.                                                                                                                   |
<!-- markdownlint-enable MD013 -->

## Otros enlaces

* [BeatMods](https://beatmods.com)
* [Directrices de aprobación de BeatMods](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [API de Scripting de Unity](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [IPA de Beat Saber](https://github.com/nike4613/BeatSaber-IPA-Reloaded)
