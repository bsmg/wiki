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

* Install `questui` by running `qpm-rust dependency add questui` in your project directory.

Make sure to restore after adding the dependencies.

## Creating a `DidActivate` method

`DidActivate` is a generic method used by `questui` that allows you to render your components.

Take a look at this example:

* You should only create your components on first activation to prevent duplication.
* You can utilize containers (such as Scrollable, HorizontalLayout and VerticalLayout) to manipulate the locations of components.

```cpp
void DidActivate(HMUI::ViewController* self, bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling) {
    // Create our UI elements only when shown for the first time.
    if(firstActivation) {
        // Create a container that has a scroll bar.
        UnityEngine::GameObject* container = QuestUI::BeatSaberUI::CreateScrollableSettingsContainer(self->get_transform());
       
        // Create a text that says "Hello World!" and set the parent to the container.
        QuestUI::BeatSaberUI::CreateText(container->get_transform(), "Hello World!");
    }
}
```

There are too many methods to document in this guide, you should refer to documentation and comments inside of `BeatSaberUI.hpp`

For `questui` to use your `DidActivate` you will need to register it using the `questui::Register` class.

## Registering `DidActivate`

`questui` contains many locations you can register to:

* Main Menu Mod Tabs
![Main Menu Mod Tabs](~@images/modding/quest-menu-mod-tab.png)
