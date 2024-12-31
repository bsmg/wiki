---
prev: Runtime Unity Editor
next: Harmony Patching
---

# Decompiling

When modding Beat Saber and patching the game to change certain behaviour, it's important to be able to read
the game's code itself. There are some tools to help with this.

## Tools

Rider and Visual Studio do have built-in decompilers to let you see under the hood of types.

![Rider Decompiling](/.assets/images/modding/pc-mod-rider-decompiling.jpg 'Rider Decompiling')

This will only have limited usage and won't help you browse the types the game has to offer, or see how different
parts of the game's code interact.

### ILSpy

[ILSpy](https://github.com/icsharpcode/ILSpy) is a lightweight decompiler for C# dlls which will allow you to freely
browse the different types, variables, and methods that are contained within the game's own dlls. Grab the installer
from the [releases](https://github.com/icsharpcode/ILSpy/releases) and install ILSpy.

Once you have ILSpy opened, find the `Manage Assembly Lists` icon in the top bar and create a new list. You can name it
after the Beat Saber version you are working on. Once created, double click it to open the list.

![ILSpy List Screenshot](/.assets/images/modding/pc-mod-ilspy-list.jpg 'ILSpy List Screenshot')

To add binaries, click the `Open` icon in the top bar and navigate to your game folder. You are looking for
`/Beat Saber_Data/Managed`, select everything in this folder and open them into ILSpy. This will also include the
.NET framework and Unity assemblies, so that when you are looking at types from Beat Saber, all of the references will
be resolved.

### dnSpy

[dnSpy](https://github.com/dnSpyEx/dnSpy) is a much more in-depth tool for developing .NET programs; it has a
debugger, assembly editor, and more. It also has a decompiler built in to it for browsing decompiled C#, just like
ILSpy.

You can get dnSpy from the [releases](https://github.com/dnSpyEx/dnSpy/releases) on GitHub. Extract the zip archive and
run the .exe to get started. Similarly to ILSpy, you create a new list by going to `File`, then `Open List...`, and
adding a new list. You can name it after the Beat Saber version you are working on. Once created, double click it to
open the list.

Click the `Open` icon in the top bar or press `Ctrl+O` and navigate to `Beat Saber/Beat Saber_Data/Managed`,
select everything in this folder and open them into your list. To start searching, click the `Search Assemblies` in the
top bar.

## Browsing the Code

Beat Saber is a complex game with a lot of different assemblies, but it is pretty well organized and you can expect to
find what you are looking for where it should be. Something that may help is to find an object in game using RUE,
and by checking the MonoBehaviours attached to them, you can search for them in ILSpy.

![ILSpy Search Screenshot](/.assets/images/modding/pc-mod-ilspy-search.jpg 'ILSpy Search Screenshot')

If you double click a type in the search window, or in the assembly list, you will see the decompiler's interpretation
of that type and the corresponding C# code.

![ILSpy Code Screenshot](/.assets/images/modding/pc-mod-ilspy-code.jpg 'ILSpy Code Screenshot')

An important trick to know is analyzing members of a type. By pressing `Ctrl+R` or right-clicking and `Analyze` on,
for example, a public method, you will see the usages of that member. In the example below, the method
`FlyingScoreEffect.InitAndPresent` is called by `FlyingScoreSpawner.SpawnFlyingScore`.

![ILSpy Analyze Screenshot](/.assets/images/modding/pc-mod-ilspy-analyze.jpg 'ILSpy Analyze Screenshot')

This tool will be very important when writing [Harmony patches](./harmony-patching.md), which will be covered in the next
section of this wiki. You will want to be able to know how different parts of the code interact so that you can work out
where you should implement custom behaviour in your mod.
