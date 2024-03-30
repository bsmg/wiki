---
prev: false
next: false
description: Learn how to create create mod configs for your Quest Mod!
---

# Quest Mod Configuration

Most mods require a configuration to allow users to change the functionality of the mod.

This section will guide you through the basics of using `config-utils` to create configuration for your mod.

## Prerequisites

- Install `config-utils` by running `qpm dependency add config-utils` in your project directory.

Make sure to restore after adding the dependencies.

## Declaring Your Configuration

First, you will need to define what your configuration will be. Create a `modconfig.hpp` header file, this will contain
the definition.

In `modconfig.hpp`, you should put the following:

```cpp
#pragma once

#include "config-utils/shared/config-utils.hpp"

// Declare the mod config as "ModConfiguration" and declare all its values and functions.
DECLARE_CONFIG(ModConfig,
    // Declare "VariableA"
    CONFIG_VALUE(VariableA, std::string, "Variable Name", "Variable Value");
)
```

Here is an example that uses all the types except `const char*` and `char*`

```cpp
#pragma once

#include "config-utils/shared/config-utils.hpp"
#include "UnityEngine/Color.hpp"
#include "UnityEngine/Vector2.hpp"
#include "UnityEngine/Vector3.hpp"
#include "UnityEngine/Vector4.hpp"

DECLARE_CONFIG(ModConfig,
    CONFIG_VALUE(VariableString, std::string, "String Example", "Var Value");
    CONFIG_VALUE(VariableInteger, int, "Integer Example", 5);
    CONFIG_VALUE(VariableFloat, float, "Float Example", 1.5f);
    CONFIG_VALUE(VariableBoolean, bool, "Bool Example", false);
    CONFIG_VALUE(VariableDouble, double, "Double Example", 0.39221);

    // dividing by 255 in color constructor because UnityEngine::Color represents RGBA as values in the range of 0 to 1
    CONFIG_VALUE(VariableColor, UnityEngine::Color, "Color Example", UnityEngine::Color(10.0/255, 155.0/255, 90.0/255, 0));
    CONFIG_VALUE(VariableVector2, UnityEngine::Vector2, "Vector2 Example", UnityEngine::Vector2(1, 2));
    CONFIG_VALUE(VariableVector3, UnityEngine::Vector3, "Vector3 Example", UnityEngine::Vector3(1, 2, 3));
    CONFIG_VALUE(VariableVector4, UnityEngine::Vector4, "Vector4 Example", UnityEngine::Vector4(1, 2, 3, 4));
)
```

## Loading your Config

Make sure to initialize the config! If you attempt to get values from it before it's loaded, your game will crash.
You can run this in `setup()`, `load()`, `late_load()`, or even anytime later if you really want to, but it only ever needs to be run once.

```cpp
#include "modconfig.hpp"

// other code

extern "C" void late_load() {
    // Initialize and load the config
    getModConfig().Init(modInfo);

    // other code.
}
```

## Using Your Configuration

In the following examples, we will be using the example that uses all the types
from [Declaring Your Configuration](#declaring-your-configuration)

```cpp
// Get VariableString
getModConfig().VariableString.GetValue();

// Set VariableString to "Eris cute"
getModConfig().VariableString.SetValue("Eris cute");

// Get VariableVector2 and store it as vec
UnityEngine::Vector2 vec = getModConfig().VariableVector2.GetValue();

// Add 30 to the x value.
vec = vec + UnityEngine::Vector2(30, 0, 0);

// Save VariableVector2 to the new vector
getModConfig().VariableVector2.SetValue(vec);
```

Setting a config variable will automatically save the configuration file.

The configuration file is usually stored at `~/ModData/com.beatgames.beatsaber/Configs/` on the Quest.
Your mod id will be used to create the configuration file, eg: `qosmetics.json`.
