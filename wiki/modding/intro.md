# Modding Intro
_Learn how to get started writing your own PC Mods_

::: warning
This guide is for making mods for the **PC** version of Beat Saber!

Make sure your game is modded before trying to make a mod.  
See instructions for [modding Beat Saber on PC.](/pc-modding.md)
:::

## Getting Started
Beat Saber is made in Unity 2019.3 using C# with .NET framework 4.6  
You will need to download the latest version of [Visual Studio Community](https://visualstudio.microsoft.com/).

## Setup Modding Tools
We will be using the BeatSaberModdingTools extension in this tutorial, as it comes with modding templates and useful features.  
BeatSaberModdingTools is maintained by Zingabopp. If you find the tools to be useful, consider throwing some support their way.

You can download it on their [GitHub](https://github.com/Zingabopp/BeatSaberTemplates/releases/latest).  
You will need to download `BeatSaberModdingTools.vsix`. (Expand the Assets dropdown if you cannot find it)

Once downloaded, open the `.vsix` and it will install itself as a Visual Studio Plugin.  
If you have any issues, consult the project's [README](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use).

## Template setup
First, create a new project using the template.  
We are going to use the `BSIPA4 Plugin (Core)` template, and we'll be calling our mod `BSPlugin1`. You should change the name to whatever you want to call your mod.

![Modding Template Select](~@images/modding/modding-template-select.png "Modding Template Select")  
![Modding Template Name](~@images/modding/modding-template-name.png "Modding Template Name")

You will then need to set your Beat Saber Directory in Visual Studio. Follow the instructions [on the template readme](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use), or see the screenshot below.

![Setup Beat Saber Directory](~@images/modding/setup-bs-directory.png "Setup Beat Saber Directory")

At this point, **try and build the project**, and it should automatically find the references for you and the build should succeed.  

If your build does not succeed, check that you don't have any missing references.

::: tip
BeatSaberModdingTools will automatically handle references. If your references could not be found, [double-check the instructions](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use).

If you need to manually add references, right click on `References` in the Project folder, then `Beat Saber Reference Manager...`.
Select your references, then click "Apply".
:::

## Inspecting the Code
You should have 5 files open automatically with the template.

| Filename | About |
| - | - |
| `manifest.json` | Information about your mod for BSIPA. |
| `Plugin.cs` | The main file that is loaded for your mod. |
| `AssemblyInfo.cs` | File information about your mod. This is mostly managed by Modding Tools. |
| `PluginConfig.cs` | A template for enabling config for your mod. This is commented out by default. |
| `BSPlugin1Controller.cs` | A generic MonoBehaviour for your mod. |

### Edit the Mod's Manifest
Fill out the `manifest.json` file with your information.  
The `name` and `id` keys are used to identify your mod. The ID should match the ID used when uploading your mod to BeatMods.  

::: warning
Do **not** remove the dependency on BSIPA. As of BSIPA v4.1 this is required for your mod to load.
:::

## Compiling
Build your plugin with `Build -> Build Solution` or <kbd>CTRL + SHIFT + B</kbd>  
Your compiled DLL should automatically be copied to the `Plugins` folder in your Beat Saber directory! This will be done for both debug and release builds.

::: tip NOTE
When you are ready to release your mod, select the `Release` option to make a Release build of your mod.

Building in Release mode will generate a packaged `.zip` file ready to upload to BeatMods.
:::
