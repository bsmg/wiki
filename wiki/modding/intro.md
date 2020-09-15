# Modding Intro
_Learn how to setup the plugin template_

::: danger EDITORS NOTE
Include new templates  
[https://github.com/Zingabopp/BeatSaberTemplates](https://github.com/Zingabopp/BeatSaberTemplates)
:::

## Getting Started
Beat Saber is made in Unity 2018.4 using C# with .NET framework 4.6.

Download the latest version of [Visual Studio Community.](https://visualstudio.microsoft.com/)  
There are multiple templates that you can choose to install.

### BSIPA
DaNike includes a [modding template](https://github.com/nike4613/BeatSaber-IPA-Reloaded/releases/latest) if you intend to make your plugin using BSIPA. Simply grab the template `.zip` from the latest release!

### IPA
If you wish to use the older IPA, the [BS Plugin Template](https://github.com/Kylemc1413/BS-Plugin-Template/releases/download/0.0.1/BS.Plugin.Template.zip) by Kyle1413 includes more options to guide you, as well as a basic use case of CustomUI. We will be using this for the Mod Tutorial, however intend to upgrade to BSIPA in the near future.

However, if you wish to go more barebones, here is the older [Beat Saber Plugin Template](/uploads/modding/beat-saber-plugin-template.zip "Beat Saber Plugin Template") by RQ.

## Template setup
Install Instructions:
1. Open C:\Users\You\Documents\Visual Studio 2019\Templates\ProjectTemplates\Visual C#.
2. Drop in `BeatSaberIPAProjectTemplate.zip`.  You do not need to extract the contents here, dropping the zipped file will work.

After you have place the zip file in the correct directory, open Visual Studio 2019 and create a new project.
You should see the Beat Saber Plugin Template in the Visual C# section.
Create a new project using the template.

![Modding Plugin Template](~@images/modding/modding-plugin-template.png "Modding Plugin Template")

If you intend on making a mod to be published to BeatMods, you will have to rename the assembly to your mod. Using the default assembly name won't cut it!

### Renaming the Assembly
1. In the Solution Explorer panel, double click on Properties.  
![Modding Plugin Prop Selected](~@images/modding/modding-plugin-prop-selected.png "Modding Plugin Prop Selected")

2. Change the text in the textbox Assembly name.  
![Modding Plugin Properties](~@images/modding/modding-plugin-properties.png "Modding Plugin Properties")

While you're at it, make sure your Target Framework (Shown above) is above `4.6`, if you're using BSIPA. You can just set it to the highest in that dropdown, such as `4.7.1`.

## Changing Copy Directory
If you are using Kyle1413's Modding Template, it comes with a built in post-build event that attempts to copy your built file to:  
`C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Plugins`

If your Beat Saber install is located here, no worries. If not, we need to change this.

1. Under `Project`, click on `<Project Name> Properties...` at the very bottom of the dropdown.
2. In the menu that pops up, click `Build Events`
3. Replace the last directory in the Post-build event command line *(The directory should look like the one above)* with the directory to your Plugins folder.
4. Save and exit that menu.

If the template you're using does not have a build event, add `copy /Y "$(TargetDir)$(TargetName).dll" "C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Plugins\$(TargetName).dll"` to the Post-build event. Match your Beat Saber install folder if you have a different one.

## Inspecting the Code
In the solution explorer, double click on `Plugin.cs` to open it up.
You should see something like this. It'll look different depending on the template, but should look similar.

![Plugin C# Example](~@images/modding/plugin-cs-example.png "Plugin C# Example")

::: tip
Note the red squiggly underlines. This is means Visual Studio can't find our references.
:::

## Fixing References
To do this, right click on `References` in the Solution Explorer, and select `Add Reference...`

![Add Reference](~@images/modding/add-a-ref.png "Add Reference")

This will open the Reference Manager window, and you can browse to find the DLL files that are missing.
Most of these files will be located within `\<Beat Saber directory>\Beat Saber_Data\Managed`

(For IPA, use `IllusionInjector` and `IllusionPlugin`. For BSIPA, `IPA.Loader` is all that you need)

![Finding References](~@images/modding/dnspy-assembly.png "Finding References")

![References Windows](~@images/modding/plugin-addreferences.png "References Windows")

Some Libraries are located in the Plugins folder as well. Check there for any libraries you forgot to add.

The most popular libraries located in the Plugins folder include:
* CustomUI
* BSML

**Can't find your Beat Saber directory?** See [install folder](/faq/install-folder.md).

## Compiling
Once you have fixed all project references, on the top menu bar press `Build -> Build Solution` or <kbd>CTRL + SHIFT + B</kbd>

Your compiled DLL should appear in the `\Bin\Debug` folder of your project, or copied over to your Plugins folder, depending on what template you use.
You can then copy this DLL into the `Plugins` folder within your Beat Saber directory.
