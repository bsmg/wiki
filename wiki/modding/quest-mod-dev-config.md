---
sidebar: auto
description: Learn how to create create mod configs for your Quest Mod!
---

# Quest Mod Configuration

Most mods require a configuration to allow users to change the functionality of the mod.

This section will guide you through the basics of using `config-utils` to create configuration for your mod.

## Prerequisites

* Install `config-utils` by running `qpm-rust dependency add config-utils` in your project directory.

Make sure to restore after adding the dependencies.

## Declaring Your Configuration

First, you will need to define what your configuration will be. Create a `ModConfig.hpp` header file, this will contain
the definition.

In `ModConfig.hpp`, you should put the following:

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
    
    // Dividing by 255 in color constructor because UnityEngine::Color represents RGB as values in the range of 0 to 1,
    Alpha is simply 0 to 1 as usual.
    CONFIG_VALUE(VariableColor, UnityEngine::Color, "Color Example", UnityEngine::Color(10 / 255, 155 / 255, 90 / 255 , 0));
    CONFIG_VALUE(VariableVector2, UnityEngine::Vector2, "Vector2 Example", UnityEngine::Vector2(1, 2));
    CONFIG_VALUE(VariableVector3, UnityEngine::Vector3, "Vector3 Example", UnityEngine::Vector3(1, 2, 3));
    CONFIG_VALUE(VariableVector4, UnityEngine::Vector4, "Vector4 Example", UnityEngine::Vector4(1, 2, 3, 4));
)
```

## Defining Your Configuration

All we have to do is include our `ModConfig.hpp`

```cpp
#include "ModConfig.hpp"

```
Now you can call it by doing `getModConfig().{#config_value}` and replace `{#config_value}` with a value you declared in you `ModConfig.hpp`
## Loading your Config
```cpp
extern "C" void load() {
    // Load the config - make sure this is after il2cpp_functions::Init();
    getModConfig().Init(modInfo);
    
    // ... rest of code.
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

The configuration file is usually stored at `~/ModData/com.beatgames.beatsaber/Config/` on the Quest.
Your mod name will be used to create the configuration file, eg: `Qosmetics.json`
