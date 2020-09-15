---
title: Modding Extras
---
# Extras
_The basics weren't good enough? Here's some more tools that you can use!_

Here is some extra content and information that will help you on your way to creating a plugin. Inspecting the source code, accessing private settings, and using external libraries are all things Beat Saber plugins do, so why leave you off with *just* the basics?

Here are programs and libraries that allow you to go more advanced with your plugins and will help you greatly if you decide to explore new territory in Beat Saber modding. Remember, the [Beat Saber Modding Group](https://discord.gg/beatsabermods) is always here for your programming help!

::: danger
This is heavily unfinished! If you wish to cover a library, or an aspect of modding, please DM me on Discord `Caeden117#0117` and let me know what to add.
:::

## Advanced Building
If you find yourself tired of having to copy your finished builds from deep inside your project folder to the Plugins folder of your Beat Saber install, this will help you minimize the hassle needed by only just needing to Build your project, and open Beat Saber to test.

### Symlinks
A `symlink` is something that tells Windows that one file is actually linking to another directory. This is useful if you want a folder on your Desktop that goes straight to your Beat Saber directory when you open it, or in our case, have a symlink from our plugin in our Plugins folder to the latest builds in our build directory.

::: warning
If any directory has spaces (Example: `cd C:\Users\Test\Hello World`), encase the path in quotations: `cd "C:\Users\Test\Hello World"`
:::

1. Open Command Prompt as Administrator.
2. Make sure you do not have your plugin inside your Plugins folder.
3. Have Command Prompt point to your Beat Saber Plugins folder (`cd <Beat Saber Directory>/Plugins`)
4. Execute the following command: `mklink <Plugin Name>.dll, <Path to your build file>`

Here's an example of the `mklink` command:  
```
mklink ExampleMod.dll, "C:\Users\You\Documents\Visual Studio 2017\Projects\ExampleMod\ExampleMod\bin\Debug\ExampleMod.dll"
```

If all is done correctly, the next time you build your plugin and launch Beat Saber, the plugins should update automatically.

### Post-Build Events
Another way to go about this is taking advantage of C#'s post-build events. This not only allows you to copy files to a directory when build is complete, but you can also do a lot more. [Here is some documentation on pre/post build events](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-specify-build-events-csharp?view=vs-2017)

1. Under `Project`, click `<Project Name> Properties...`
2. Click `Build Events`
3. Copy and paste the following code into the Post-build event command line:  
`copy /Y "$(TargetPath)" "<Path to Beat Saber Plugins folder (Including the file name and extension)>"`
4. Save and exit.

Here's an example of the post-build command:  
`copy /Y "$(TargetPath)" "D:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Plugins\ExampleMod.dll"`

`$(TargetPath)` specifies the location of the file you are building, no matter where it's being built from.

If all is done correctly, the next time you build your plugin, a copy will be automatically sent to your Plugins folder (Automatically overwriting any previous version), and Beat Saber is ready to play.

## dnSpy
dnSpy is a .NET debugger and assembly editor that allows you to import compiled `.dll` files and view them decompiled into C#.

In the case of modding, we can use dnSpy to view the source code of Beat Saber and find methods and variables that would be handy to have for some plugins.  
Read more about it [here](https://github.com/0xd4d/dnSpy).

* Download the [latest release of dnSpy.zip](https://github.com/0xd4d/dnSpy/releases/latest).
* Then extract the zip, and run `dnSpy.exe`.

If all has been done correctly, things should look something like this, without the large list of files on the left side.

![Dnspy Start](~@images/modding/dnspy-start.png "Starting Page")

Then go to `File >> Open`, then locate and open the compiled Beat Saber code located in `\<Beat Saber Directory>\Beat Saber_Data\Managed\Assembly-CSharp.dll`

![Dnspy Start](~@images/modding/dnspy-assembly.png "Code Location")

You can also use dnSpy to view and even edit the code of plugins, even those that have not yet published to GitHub. Be wary, though! Snooping around in other's code without permission is a bad idea.

![dnSpy Example](~@images/modding/dnspy-example.png "dnSpy Example")

## Harmony
Harmony is a library for patching compiled .NET and Mono methods during runtime.
This allows editing of core Beat Saber functions and allows plugins to achieve things way beyond what basic Illusion Plugin Architecture can achieve.

Read more about it [here.](https://github.com/pardeike/Harmony)

Harmony is already included with BSIPA, so you just need to add it as a reference ([Click here if you forget how to add a reference to your project](/modding/example-mod.md#references-and-text-mesh-pro)). It is located in `Beat Saber/Libs`.

Because of this, it is highly frowned upon to include Harmony as a dependency when finalizing your mod. In fact, [it is a revokable offense in the BeatMods Approval Guidelines](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing), see Guideline `3.1.b`.

### Basic Tutorial
Coming soon™, I'm gonna try to not have this be Mod Tutorial long, but should let you get a basic idea of how to use Harmony.

## Reflection Util
ReflectionUtil is a simple file that allows grabbing and setting private variables inside of files.
This is used in conjuction with [dnSpy](/modding/extras#dnspy) to search for and retrieve variables in code. Looking to modify private variables? Consider using [Harmony](/modding/extras#harmony) instead.

Reflection Util is available in many mods, so [here is one from Beat Saber Utils](https://github.com/Kylemc1413/Beat-Saber-Utils/blob/master/Beat%20Saber%20Utils/Utilities/ReflectionUtil.cs)

### From Beat Saber Utils
If you haven't already, [add Beat Saber Utils as a reference to your project.](./intro.md#fixing-references)  
From there, add `using BS_Utils.Utilities;` to the top of your file and access it using `ReflectionUtil`.

### Creating Your Own
* Create a new file called `ReflectionUtil.cs`
* Copy and paste the above code to the newly created file, making sure to replace `namespace BS_Utils.Utilities` with the name of your project.

### Basic Use
Here is a basic use case of `ReflectionUtil`, by grabbing the two sabers from the `PlayerController` class.

![ReflectionUtil Example](~@images/modding/reflectionutilexample.png "ReflectionUtil Example")
