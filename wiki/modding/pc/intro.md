---
prev: false
next: false
description: Learn how to create your own PC mods!
---

# PC Mod Development Intro

_Learn how to get started writing your own PC Mods._

## Getting Started

::: warning
This guide is for making mods for the **PC** version of Beat Saber!

If you want to develop mods for the **Quest Standalone** version of the game, visit
the [Quest Mod Development Guide](../quest/intro.md)

Make sure your game is modded before trying to make a mod.  
See instructions for [modding Beat Saber on PC.](../../pc-modding.md)

This guide assumes you have a basic to intermediate understanding of C# and Unity.  
You may have difficulty understanding what is covered here if you do not have this foundation.
:::

Beat Saber is made in Unity 2022.3 using C# with .NET framework 4.7.2. To make writing and building mods as simple as
possible you will need to download an IDE that supports Unity.

This guide
will be focused on [JetBrains Rider](https://www.jetbrains.com/rider/), however you can also
use [Microsoft Visual Studio Community](https://visualstudio.microsoft.com/). Both of these are good options, however,
the guide for Rider users is more up-to-date.

We will now cover setting up Rider for modding. For Visual Studio users, refer to the
[Visual Studio Setup](./vs-setup.md) page.

## Modding Tools Setup

We will be using the BeatSaberModdingTools (BSMT) extension in this tutorial, as it comes with modding templates and
useful features, like saving your Beat Saber directory.

The Rider extension can be downloaded from [GitHub](https://github.com/Fernthedev/BSMT-Rider/releases/latest). Download
the BSMT Rider zip.

Once you have installed Rider, open it, and after signing in, you will be greeted by the welcome window. In the bottom
left, click `Configure`, click `Settings`, then look for `Plugins`.

Next to `Marketplace` and `Installed` there will be a settings icon, click this, and click
`Install Plugin from Disk...`. From here, find the BSMT Rider zip you downloaded and select it, this will install the
plugin in Rider.

![Install Disk Plugin](../../.assets/images/modding/pc-mod-rider-plugin.png 'Install Disk Plugin')

## Template setup

BSMT comes with some working plugin templates to get you started as quickly as possible.

Create a new solution and, if you installed BSMT correctly, you should be able to select a plugin template from the
`Custom Templates` list.

![Rider Modding Template Select](../../.assets/images/modding/pc-mod-template-rider.png 'Modding Template Select')

Choose a name for your mod and the location you want to save it. Do not save the solution in your Beat Saber
installation folder.

Once you're done, click `Create` and the mod template will open. Next, you will receive a popup asking you to set your
Beat Saber Directory.

![Rider Beat Saber Directory](../../.assets/images/modding/pc-mod-directory-rider.png 'Rider Beat Saber Directory')

Select your Beat Saber game's installation, you can also use a BSManager instance here too. If you select
`Store this beat saber folder in config`, BSMT will remember this directory whenever you reopen a project.

At this point, **try and build the project**, and it should automatically find the
references for you and the build should succeed if you set a valid Beat Saber installation directory. You can do this
with the build hotkey or the button on the top bar.

![Rider Build](../../.assets/images/modding/pc-mod-build-rider.png 'Rider Build')

If you need to manually add Beat Saber assembly or other mod references, right click on `Dependencies` in the Project
folder, then `Add Beat Saber assembly references`. This will let you search for Beat Saber assemblies, and it will add
them to the `.csproj` for you.

![Rider References](../../.assets/images/modding/pc-mod-references-rider.png 'Rider References')

## Inspecting the Code

Open the explorer on the right side of Rider and you should see all the project files.

| Filename                 | About                                                                           |
| ------------------------ | ------------------------------------------------------------------------------- |
| `PluginName.csproj`      | This is the C# project that contains build information.                         |
| `PluginName.csproj.user` | This is where the Beat Saber directory is saved. BSMT will manage this for you. |
| `Plugin.cs`              | The main file that is loaded for your mod. This is the entry point for BSIPA.   |
| `Directory.Build.props`  | Contains metadata for your plugin like the version, links, dependencies etc.    |

## Edit your mod's manifest

### Defining Metadata

Open `Directory.Build.props` and fill in your mod's information in the Plugin Metadata `PropertyGroup`:

- The `PluginId` and `PluginName` keys are used to identify your mod. Mods that will be uploaded to BeatMods typically
  should have these be exactly the same and have no spaces.
- The `Authors` is where you use your name.
- The `Version` is the version of your mod. This follows [Semantic Versioning](https://semver.org).
- The `GameVersion` is the version of the game you are making the mod for. BSIPA will not load mods with a game version
  higher than the version of the game it's on to reduce chances of breaking. It's recommended to make mods for the latest
  version of the game with mod support.
- In the `Description` provide a short sentence or two about what your mod is/does.

There are also some optional properties you can add:

- The `ProjectSource` is a URL to the source code of your mod. Most mods have their source code open on GitHub, for
  instance.
- The `ProjectHome` can be a URL to a website where your mod is downloaded from or hosted.
- You can also specify a `Donate` URL, which if you want to, you can set up a way for people to support your modding
  work.
- The `Icon` path is currently not utilized by anything for now.

### Defining Dependencies

Underneath the plugin metadata is an `ItemGroup` that declares which other mods are required for your mod to work.

::: warning
Do not remove the dependency on BSIPA. This is required by BSIPA itself.
:::

- The template in this case only needs BSIPA to work Add additional `DependsOn` members for each dependency.
  - Some example mod libraries that are commonly used could be BeatSaberMarkupLanguage, which is used to generate custom
    menus in Beat Saber, or SiraUtil, which is used to interface with the game's Zenject system to easily access certain
    game objects and build robust large plugins.

### Additional Properties

- If your mod breaks in the presence of another mod due to conflicting behavior, you should add it as a `ConflictsWith`
  member, which will make your plugin not load if the specified conflicting mod is installed.
- If your mod interacts with other mods but does not need them in order to function, consider adding `LoadBefore` to
  ensure you don't try to interact with them before they are loaded by BSIPA.
- Similarly, you can add `LoadAfter` members to make your mod load after the specified mod.
- If you want to move `Plugin.cs` to somewhere else in the project, use `PluginHint` to specify where it is so that
  BSIPA can find it.

Once you've set all of this, BSMT will automatically generate an embedded `manifest.json` in your mod during build,
which is required by BSIPA and can be used to pull information about the mod.

## Compiling

After running the build, your compiled DLL should automatically be copied to the `Plugins` folder in your Beat Saber
directory, which will be done for both debug and release builds.

::: tip NOTE
When you are ready to release your mod, select the `Release` option to make a Release build of your mod.

Building in Release mode will generate a packaged `.zip` file ready to upload to BeatMods.
:::

## Testing your mod in-game

To test if your mod is loaded in-game, you will need to launch Beat Saber with the BSIPA Console enabled. To do this,
add `--verbose` as a launch argument, or if you're running from BSManager, simply enable debug mode from the launch
screen, and then run the game.

For more information on launch arguments, see [here](/wiki/modding/index.md#launch-args).

When you launch the game, you should see BSIPA load your mod in the console window.

![Testing console screenshot](../../.assets/images/modding/testing-console.png 'Testing console screenshot')

## Next Steps

There is a continuation of this guide being made, which will go into more detail about how to utilize parts of the game
as well as libraries created by the community, decompile and read the game's code, and creating a simple but functional
mod from scratch, so come back later to check it out!

For now, here are some useful resources in continuing your modding career.

- If you need help with developing mods, you can ask in `#pc-mod-dev` on
  the [BSMG Discord](https://discord.gg/beatsabermods).
- If you want to decompile code, check out [dnSpy](https://github.com/dnSpy/dnSpy/releases)
- See the BSIPA Documentation for more information about
  the [configuration system](https://nike4613.github.io/BeatSaber-IPA-Reloaded/articles/start-dev.html#configuring-your-plugin).
- If you need to patch the game's code for your mod, you should
  use [Harmony](https://github.com/pardeike/Harmony#readme).
  The `0Harmony.dll` is already installed for modded games.
- For experienced developers, you may be interested in learning about Zenject, the Dependency Injection system used
  heavily
  by Beat Saber. [SiraUtil](https://github.com/Auros/SiraUtil#readme) is a library that allows you to easily hook
  into this system.
