---
prev: false
next: false
description: Learn how to create your own PC mods!
---

# Making PC Mods

Currently, all mods are made using the
[BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/)
to inject plugins into the game. It makes the process of executing code in game much easier, and provides many useful
tools, some of which will be covered in this section of the wiki.

## List of contents

- [Getting a setup ready for creating PC mods](#getting-started)
- [Useful launch arguments](#launch-args)
- [Using Runtime Unity Editor](./rue.md)
- [Inspecting the game code with a decompiler](./decompiling.md)
- [Harmony patching](./harmony-patching.md)
- [Creating user interfaces with BeatSaberMarkupLanguage](./bsml.md)
- [The essentials of Zenject through SiraUtil](./zenject.md)
- [Writing a functioning mod step-by-step](./full-mod-guide.md)
- [Other links](#other-links)

## Getting Started

If you are interested in creating a Beat Saber mod, but do not have a template or Visual Studio template set up,
follow the [setup guide](./setup.md) to get your project all set up.

If you have any questions at any point, the best place to ask is in the `#pc-mod-dev` channel on the
[BSMG Discord](https://discord.gg/beatsabermods), another modder may be able to help you solve your problem.

## Launch args

Listed in the table below are numerous helpful launch arguments that will make modding / debugging easier.

If you are using Steam, you can enter these by right-clicking the game in Steam, then `Properties...`, then `General`.

If you are using BSManager, you can enter these by opening the `Advanced launch` option on the game launch section.
BSManager also already provides FPFC and Debug modes, which correspond to `fpfc` and `--verbose` respectively.

<!-- markdownlint-disable MD013 -->

| Argument&emsp;&emsp;&emsp; | Description                                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--verbose`                | Enables the output log window for IPA. This will show the debug console that mods use. This is a must-have for all modders.                                      |
| `--debug`                  | Enables 'debug' level logs to show up in the log output window. These would otherwise normally only show up in log files.                                        |
| `--trace`                  | Enables 'trace' level logs to show up in the log output window. These are typically reserved for overly-detailed logs.                                           |
| `fpfc`                     | The "First Person Flying Controller" is a base-game feature that allows you to use WASD and mouse to control the camera without VR. This makes for easy testing. |
| `--auto_play`              | A base-game feature since version 1.37.1, it enables a basic auto player. This is useful for testing gameplay without playing yourself.                          |
| `-vrmode oculus`           | Only works on versions 1.29.1 and older. Allows you to play without SteamVR when playing the game from Steam.                                                    |

<!-- markdownlint-enable MD013 -->

## Other Links

Notable links mentioned in the PC modding wiki:

- [BSIPA Documentation](https://nike4613.github.io/BeatSaber-IPA-Reloaded/articles/start-dev.html)
- [JetBrains Rider](https://www.jetbrains.com/rider/)
- [BSMT For JetBrains Rider](https://github.com/Fernthedev/BSMT-Rider/)
- [BSMT For Visual Studio](https://github.com/Zingabopp/BeatSaberTemplates/)
- [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [Unity Scripting API](https://docs.unity3d.com/ScriptReference/index.html)
- [Runtime Unity Editor](https://github.com/ManlyMarco/RuntimeUnityEditor)
- [ILSpy](https://github.com/icsharpcode/ILSpy)
- [dnSpy](https://github.com/dnSpyEx/dnSpy)
- [Harmony](https://github.com/pardeike/Harmony)
- [Harmony Documentation](https://harmony.pardeike.net/articles/patching.html)
- [Zenject](https://github.com/Mathijs-Bakker/Extenject)
- [BSMG Discord](https://discord.gg/beatsabermods)
- [BeatMods](https://beatmods.com)
- [BeatMods Approval Guidelines](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
