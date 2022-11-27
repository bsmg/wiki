---
sidebar: auto
description: Learn how to create your own Quest mods!
---

# Quest Mod Development Intro
_Learn how to get started writing your own Quest Mods._

## Getting Started
::: warning
This guide is for making mods for the **Quest Standalone** version of Beat Saber!

If you use Oculus Link or similar, you want to visit the [PC Mod Development Guide](./pc-mod-dev-intro.md) as that uses
the PC version of the game.
:::

This guide assumes you have a basic to intermediate understanding of the following:

* [C++](https://www.w3schools.com/CPP/default.asp)
* [CMake](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
* [ADB](https://developer.android.com/studio/command-line/adb)
* [Powershell](https://docs.microsoft.com/en-us/learn/modules/introduction-to-powershell/)

You may have difficulty understanding what is covered here if you do not have this foundation.

While this guide is for development on Windows, it is not dependent on an IDE. Instead you should configure your preferred
IDE accordingly by referring to the documentation. For example, you would need to install C++ tools for VSCode or configure
CMake for CLion.

## Setup your Environment
The following pieces of software are needed to follow this guide.

* [QPM Rust](#qpm-rust) - Dependency Management
* [Ninja](#ninja) - Build Tool
* [Templatr](#templatr) - Templating Tool
* [Android NDK](#android-ndk) - Native Development Kit for Android Devices

### QPM Rust

[Download the latest QPM Rust binary for your system](https://github.com/QuestPackageManager/QPM.CLI) from the
Actions tab and add it to your PATH variable.

Windows users may use the installer instead.

### Ninja

#### QPM-Rust v2
`qpm-rust download ninja`, which will download `ninja` and place it within the same folder `qpm-rust` resides in.

#### Old method

[Download the latest Ninja binary for your system](https://github.com/ninja-build/ninja/releases) from the Releases tab
and add it to your PATH variable.

### Templatr

#### QPM-Rust v2
QPM-Rust v2 now bundles `templatr` within itself, and can be invoked through `qpm-rust templatr`.

#### Standalone

You can download the [latest release here.](https://github.com/QuestPackageManager/templatr/actions)

Click the most recent build, than scroll down and download the artifact for your OS.

Extract the zip and add the executable to your PATH variable.

Linux/MacOS users will need to run `chmod +x templatr` before using `templatr`.

To check if `templatr` was installed, run the help command in Powershell.

```powershell
templatr --help
```

### CMake
CMake is generally easy to install on any OS it supports. Windows has installers and Linux through package repositories. However, QPM-Rust also allows for installing CMake and adding it to path automatically.

`qpm-rust download cmake` (May possibly not work on Linux or Mac) 

### Android NDK

#### QPM-Rust v2
QPM-Rust v2 supports downloading and listing available NDK archives for your current OS. See `qpm-rust ndk` for more details.

Example:
`qpm-rust ndk download 25.1.8937393`

#### Manual

[Download the Android NDK](https://developer.android.com/ndk), unzip it and add it to your PATH variable.

## Create a Project

Once you have setup your environment you can now generate a mod template. The template this guide uses is one by
[Lauriethefish](https://github.com/Lauriethefish/quest-mod-template). To start run the following command in Powershell.

```powershell
[qpm-rust] templatr use Lauriethefish/quest-mod-template
```

Templatr will then ask a series of questions to create a mod project.

![Templatr Example](~@images/modding/quest-mod-template-example.png)

### Add and Update Dependencies
Once the project has been generated, you should now update the following two dependencies, [beatsaber-hook](https://github.com/sc2ad/beatsaber-hook)
and [codegen](https://github.com/sc2ad/BeatSaber-Quest-Codegen), to the version best suited for the game version you are
developing for.

`beatsaber-hook` is a library that allows for modding il2cpp games. `codegen` is a library that allows modders to
interface with the game's code.

To update these, open a Powershell terminal in the project directory then run the following commands, adjusting the
version numbers accordingly:

```powershell
qpm-rust dependency add beatsaber-hook -v ^3.8.1
qpm-rust dependency add codegen -v ^0.22.0
```

### Restore Dependencies
Before you can open the project in an IDE, you must restore all of the dependencies. Consider this step similar to
fully initializing the project.

In a Powershell terminal in the project directory run:

```powershell
qpm-rust restore
```

### Migrate from qpm to qpm-rust (No longer required)
If you had an install of qpm before following this guide and want to migrate to qpm-rust, you will need to fix the cache
paths for old dependencies (such as codegen before Beat Saber version 1.17.0) by running the following command in the
project directory.

```powershell
qpm-rust cache legacy-fix
```

:::warning NOTE
This is a one way conversion. Old qpm will no longer work for this project!
:::

## Project Contents

Your project should contain the following structure:

```properties
// Files in .gitignore have been excluded
extern/
└── ... dependencies should be here
include/
└── main.hpp
shared
src/
└── main.cpp
.gitignore
build.ps1
buildQMOD.ps1
restart-game.ps1
start-logging.ps1
ndk-stack.ps1
copy.ps1
CMakeLists.txt
mod.json
qpm.json
README.md
```

### Code Breakdown

#### src/main.cpp

`main.cpp` contains the `setup()` and `load()` methods. These methods can exist anywhere as long as they are accessible by
the modloader. Take a look inside of `main.cpp` for more information. Laurie has thankfully commented most of the code,
which will greatly help you.

#### shared

The shared folder can be exposed by QPM to other mods and published to the QPM dependency registry. Useful if you want
to make an API to let other mods control your mod in certain ways (for example Qosmetics has a model loading API)

#### extern

The extern folder should be ignored (and or in some cases excluded), it contains dependencies, similarly to
`node_modules (nodejs)` or `packages (.net core)`

### Script Breakdown

It is recommended to run these scripts using Powershell Core (v7) - however, it is not required.

#### build.ps1

Usage: `build.ps1`

Builds your mod. Does not produce a `.qmod` file. See inside `build.ps1` for information on what arguments can be inputted.

#### buildQMOD.ps1

Usage: `buildQMOD.ps1 {file name}`

Builds your mod, then generates a `.qmod` file that can be parsed by BMBF and or QuestPatcher.

#### copy.ps1

Usage: `copy.ps1`

Builds your mod, then copies it to your quest and launches Beat Saber if your quest is plugged in.

#### start-logging.ps1

Usage: `start-logging.ps1 -Self`

Usage of `-Self` is recommended, it allows you to read logs from only your mod. Starts logging using adb logcat for Beat
Saber output.

## Hooking

Hooking is core to modding. `beatsaber-hook` provides a simple way of hooking onto methods and other miscellaneous stuff
like constructors.

> In computer programming, the term hooking covers a range of techniques used to alter or augment the behavior of an
>operating system, of applications, or of other software components by intercepting function calls or messages or events
>passed between software components. Code that handles such intercepted function calls, events or messages is called a hook.
> [Wikipedia](https://en.wikipedia.org/wiki/Hooking#:~:text=In%20computer%20programming%2C%20the%20term,events%20passed%20between%20software%20components.&text=Hooking%20can%20also%20be%20used%20by%20malicious%20code.)

To view a list of classes, methods and fields you can hook onto,
checkout [Phaze's hook viewer here.](https://modtools.phazed.xyz/browser)

In this example, we will hook onto the initialization of the main menu and change the text on the solo button to
something funny.

The main menu runs the event `DidActivate` when it is fully initialized. This is useful for us because we can hook onto
this event and extend it further.

Firstly, create your hook using the `MAKE_HOOK_MATCH` macro:

```cpp
// Think of these as C#, using MainMenuViewController, using UnityEngine.UI.Button, using HMUI.CurvedTextMeshPro ect.
// Classes without a namespace are assigned to the GlobalNamespace
#include "GlobalNamespace/MainMenuViewController.hpp"
#include "UnityEngine/UI/Button.hpp"
#include "UnityEngine/GameObject.hpp"
#include "HMUI/CurvedTextMeshPro.hpp"

// Create a hook struct, named MainMenuUIHook.
// Target "void MainMenuViewController::DidActivate" and takes the following arguments:
// bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling

// General format: MAKE_HOOK_MATCH(HookName, method, method return type, method class pointer, arguments...) { 
//  HookName(arguments...);
//  // your code here 
//}

MAKE_HOOK_MATCH(MainMenuUIHook, &GlobalNamespace::MainMenuViewController::DidActivate, void, GlobalNamespace::MainMenuViewController
*self, bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling) {
    // Run the original method before our code.
    // Note, you can run the original method after our code if you want to change arguments.
    MainMenuUIHook(self, firstActivation, addedToHierarchy, screenSystemEnabling); 
    
    
    // Get the _soloButton text using the dyn_ method and simple unity jazz. dyn_ safely get fields and shouldn't change
    // much during updates.
    
    UnityEngine::UI::Button *soloMenuButton = self->dyn__soloButton();
    UnityEngine::GameObject *gameObject = soloMenuButton->get_gameObject();
    HMUI::CurvedTextMeshPro *soloMenuText = gameObject->GetComponentInChildren<HMUI::CurvedTextMeshPro *>();
    
    // Set the text to "Skill Issue"
    soloMenuText->SetText("Skill Issue");
}
```

Now, you have to install your hook. Usually, hooks are installed on `load()` in `main.cpp`:

```cpp
extern "C" void load() {
    il2cpp_functions::Init();

    getLogger().info("Installing hooks...");
    
    INSTALL_HOOK(getLogger(), MainMenuUIHook);
    
    getLogger().info("Installed all hooks!");
}
```

You can now test to see if this was successful!

## Testing your Mod

### Without BMBF

You can test your mod without BMBF quickly using the [copy.ps1](#copy-ps1) command. This is recommended whilst developing.
You should always test using a QMOD and BMBF if you're about to release your mod.

What the [copy.ps1](#copy-ps1) command does, is copying the `libmodname.so` to the correct place, and launch your game
for you. You can also specify while launching to log or not with the `-Log` argument and logging to only itself with the
`-Log -Self` arguments. The following example is the recommended setup for [copy.ps1](#copy-ps1).

```powershell
copy.ps1 -Log -Self > _latest.log
```

### With BMBF

Testing your mod with BMBF is useful to check if BMBF presents, or handles your mod.json correctly (copying files, etc.)

You will need to [generate a QMOD file, using the `buildQMOD.ps1` command.](#buildqmod-ps1)

You can then upload the generated QMOD file to BMBF, BMBF should install your mod - it should appear on the mods list.

You can start logging using the [`start-logging.ps1 -Self > latest.log` command.](#start-logging-ps1)

## Utilizing `mod.json`

`mod.json` contains basic information on your mod. It can also allow you to define other features such as:

* Cover Image (the preview image shown on the BMBF Mods tab)
* File Copies (extract files from the QMOD to a location on the quest device.)
* Downloading dependency QMODs if missing.

### Cover Image

A cover image is used by certain mods and BMBF to show a preview of your mod.

To add a cover image, simply create `cover.png` at any point in your project  and add the following to your mod.json:

```json
"coverImage": "cover.png"
// or
"coverImage": "path/to/cover.png"
```

:::tip Cover Image Recommendations

* 1024x512 (BMBF will resize the image to be this size)
* File format either png, jpg or gif.
* Under 2mb to prevent load lag (larger `cover.png`, longer it'll take to show on BMBF)
:::

#### Example Cover Images
Click on the arrow beside the mod name to see the image.
<details><summary>
Noodle Extensions
</summary>

![Noodle Extensions](~@images/modding/quest-ne-cover.jpg)
</details>
<details><summary>
Slice Details Quest
</summary>

![Slice Details Quest](~@images/modding/quest-slice-details.jpg)
</details>

### File Copies

File copies is an array that specifies what files should be copied where - you can include files by adding them to the
files list in [buildqmod.ps1](#buildqmod-ps1).

#### Example

This example will add `secret-data.json` to the QMOD and copy it to `/sdcard/ModData/com.beatgames.beatsaber/Mods/Secret/secret-data.json`

Edit the [buildqmod.ps1](#buildqmod-ps1) script to include `secret-data.json`.

```powershell
# This is line 41 of buildqmod.ps1
$filelist = @($mod, "secret-data.json")
```

Next, add the following to your `mod.json`

```json
"fileCopies": [
    {
        "name": "secret-data.json",
        "destination": "/sdcard/ModData/com.beatgames.beatsaber/Mods/Secret/secret-data.json"
    }
]
```

This will extract `secret-data.json` from your QMOD file on installation and place it at the path defined at `destination`

### Dependencies

You can specify mod dependencies and how to download them using the `dependencies` field in `mod.json` like so:

```json
"dependencies": [
    {
        "version": ">=0.4.6",
        "id": "tracks",
        "downloadIfMissing": "https://github.com/StackDoubleFlow/Tracks/releases/download/v0.4.6/tracks.qmod"
    },
    {
        "version": ">=0.14.2",
        "id": "custom-json-data",
        "downloadIfMissing": "https://github.com/StackDoubleFlow/CustomJSONData/releases/download/v0.14.2/custom-json-data.qmod"
    }
]
```

This example will download `custom-json-data` and `tracks` if the mods are missing. Useful if you want to split your mod
up into modules and make the final QMOD file smaller.

A disadvantage of this is that without internet, your mod will fail to install if the dependencies are missing and cannot
be downloaded by BMBF.

## Mod Configuration
Most mods require a configuration to allow users to change the functionality of the mod.

Visit the [Quest Mod Configuration](./quest-mod-dev-config.md) page to learn the basics of using `config-utils` to create
a configuration for your mod.

## Custom Types
Custom Types is a library that allows you to create C# types using macros. These types can extend classes such
as `MonoBehaviour` and much more. Custom Types also allows you to create [coroutines.](https://docs.unity3d.com/Manual/Coroutines.html)

Custom Types are complex and requires knowledge of basic C#. Visit the [Quest Custom Types](./quest-mod-dev-custom-types.md)
page to learn more about integrating this into your mod.

## User Interface
A user interface (UI) is used by many mods to show configuration options. Visit the [Quest User Interface](./quest-mod-dev-ui.md)
page to see how to use `questui` to create a settings screen for your mod.

## Credits
Initial guide content was integrated from the [Beat Saber Quest Modding Guide](https://github.com/cal117/bsqmg) by cal117
with contributions from [Raine](https://github.com/raineio) and [Pangwen](https://github.com/PangwenE).
Integration and editing was done by [Bloodcloak](/about/staff.md#bloodcloak).
