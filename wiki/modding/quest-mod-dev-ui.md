---
sidebar: auto
description: Learn how to create a UI for your Quest Mod!
---

# Quest User Interface

:::warning
This is a stub page, content is a work in progress! Ask in `#quest-mod-dev` if you want more info!
:::

UI is used by many mods to show configuration options. In this section, we'll show you how to use `questui` to create a
settings screen for your mod.

## Prerequisites

* Install `questui` by running `qpm dependency add questui` in your project directory.
* You also need to install `custom-types` even if you don't use it in your mod: `qpm dependency add custom-types`

Make sure to restore after adding the dependencies.

## Creating a `DidActivate` method

`DidActivate` is a method you can register with `questui` that allows you to make a simple mod settings page.

Take a look at this example:

* You should only create your components on first activation to prevent duplication.
* You can utilize containers (such as Scrollable, HorizontalLayout and VerticalLayout) to manipulate the locations of components.

```cpp
#include "questui/shared/BeatSaberUI.hpp"

void DidActivate(HMUI::ViewController* self, bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling) {
    // Create our UI elements only when shown for the first time.
    if(firstActivation) {
        // Create a container that has a scroll bar
        UnityEngine::GameObject* container = QuestUI::BeatSaberUI::CreateScrollableSettingsContainer(self->get_transform());
       
        // Create a text that says "Hello World!" and set the parent to the container.
        QuestUI::BeatSaberUI::CreateText(container->get_transform(), "Hello World!");
    }
}
```

There are too many UI components and methods to document in this guide. However, the file `BeatSaberUI.hpp` has
comments that document almost all the methods.

## Registering `DidActivate`

`questui` contains a few locations you can register to:

* Main Menu Mod Tabs
![Main Menu Mod Tabs](~@images/modding/quest-menu-mod-tab.png)
* Mod Settings
![Mod Settings](~@images/modding/quest-mod-settings.jpg)
* Gameplay Setup
![Gameplay Setup](~@images/modding/quest-gameplay-settings.jpg)

For `questui` to use your `DidActivate` method, you will need to register it using the `QuestUI::Register` class in your `load()` method.

```cpp
#include "questui/shared/QuestUI.hpp"

// other code

extern "C" void load() {
    // make sure this is after il2cpp_functions::Init()
    QuestUI::Init();
    QuestUI::Register::RegisterModSettingsViewController(modInfo, DidActivate);
    
    // other code
}
```

The gameplay setup location requires a slightly different function signature than the other two, with the arguments
being just `UnityEngine::GameObject* self, bool firstActivation`.

All the register functions can be found in the `QuestUI.hpp` file.
