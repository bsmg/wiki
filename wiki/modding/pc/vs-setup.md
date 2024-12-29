---
prev: false
next: false
---

# Modding Tools Setup for Visual Studio

We will be using the BeatSaberModdingTools (BSMT) extension in this tutorial,
as it comes with modding templates and useful features, like saving your Beat Saber directory.

The Visual Studio extension can be downloaded
from [GitHub](https://github.com/Zingabopp/BeatSaberTemplates/releases/latest). You will need to download
`BeatSaberModdingTools.vsix`. (Expand the Assets dropdown if you cannot find it)

Once downloaded, open the `.vsix` and it will install itself as a Visual Studio Plugin.  
If you have any issues, consult the project's [README](https://github.com/Zingabopp/BeatSaberModdingTools#readme)
and [WIKI](https://github.com/Zingabopp/BeatSaberModdingTools/wiki).

## Template setup

BSMT comes with some working plugin templates to get you started as quickly as possible.

First, create a new project and find a template. We are going to use the `BSIPA4 Plugin (Core)` template, and we'll be
calling our mod `BSPlugin1`.
You should change the name to whatever you want to call your mod.

![VS Modding Template Select](../..images/modding/modding-template-select.png 'Modding Template Select')  
![VS Modding Template Name](../../.assets/images/modding/modding-template-name.png 'Modding Template Name')

You will then need to set your Beat Saber Directory in Visual Studio.
Follow the instructions [on the template readme](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use),
or see the screenshot below.

![Setup Beat Saber Directory](../../.assets/images/modding/setup-bs-directory.png 'Setup Beat Saber Directory')

At this point, **try and build the project**, and it should automatically find the
references for you and the build should succeed.

If your build does not succeed, check that you don't have any missing references.

::: tip
BeatSaberModdingTools will automatically handle references. If your references could not be
found, [double-check the instructions](https://github.com/Zingabopp/BeatSaberModdingTools#beat-saber-modding-tools).

If you need to manually add references, right click on `References` in the Project folder, then
`Beat Saber Reference Manager...`.
Select your references, then click "Apply".

You can find more information about the reference
manager [here](https://github.com/Zingabopp/BeatSaberModdingTools/wiki/Adding-References).
:::

## Inspecting the Code

You should have 5 files open automatically with the template.

| Filename                 | About                                                                          |
| ------------------------ | ------------------------------------------------------------------------------ |
| `manifest.json`          | Information about your mod for BSIPA.                                          |
| `Plugin.cs`              | The main file that is loaded for your mod.                                     |
| `AssemblyInfo.cs`        | File information about your mod. This is mostly managed by Modding Tools.      |
| `PluginConfig.cs`        | A template for enabling config for your mod. This is commented out by default. |
| `BSPlugin1Controller.cs` | A generic MonoBehaviour for your mod.                                          |

### Edit your mod's Manifest

Fill out the `manifest.json` file with your information.  
The `name` and `id` keys are used to identify your mod.
The ID should match the ID used when uploading your mod to BeatMods.

::: warning
Do **not** remove the dependency on BSIPA. As of BSIPA v4.1 this is required for your mod to load.
:::

After you're done with the setup, you can return to the main
[PC mod dev intro page](./intro.md#compiling) to find out how to run your mod in game!
