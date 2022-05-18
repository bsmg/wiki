---
sidebar: auto
description: Learn how to create C# macros for your Quest Mod!
---

# Quest Custom Types

Custom Types is a library that allows you to create C# types using macros. These types can extend classes such
as `MonoBehaviour` and much more. Custom Types also allows you to create [coroutines.](https://docs.unity3d.com/Manual/Coroutines.html)

Custom Types are complex and requires knowledge of basic C#.

## Prerequisites

* Install `custom-types` by running `qpm-rust dependency add custom-types` in your project directory.

Make sure to restore after adding the dependencies.

## Basics

To create a custom type, create a header file for your type. In this example, we'll make a Custom Type called `Counter`
that extends `MonoBehavior`.

In your header file, include Custom Types - types are declared using macros, similarly to hooking.

```cpp
#pragma once

#include "custom-types/shared/macros.hpp"
```

Since our `Counter` Custom Type will be extending `MonoBehaviour`, we will include this too.

```cpp
#include "UnityEngine/MonoBehaviour.hpp"
```

### Declaring the Type

Now we have included the necessary macros - we can now declare our `Counter` type.

```cpp
// General format is (Namespace, ClassName, any classes to extend from, contents)
DECLARE_CLASS_CODEGEN(MyNamespace, Counter, UnityEngine::MonoBehaviour,
    public:
        // DECLARE_INSTANCE_METHOD can override any inherited methods and create il2cpp methods.
        DECLARE_INSTANCE_METHOD(void, Update);
        
        // DECLARE_INSTANCE_FIELD can create fields.
        DECLARE_INSTANCE_FIELD(int, counts);
        
        DECLARE_CTOR(ctor);
        DECLARE_SIMPLE_DTOR();
)
```

In C#, this would translate to the following:

```csharp
namespace MyNamespace 
{
    public class Counter : MonoBehaviour 
    {
        public int counts;
        
        public void Update() 
        {
            
        }
    }
}
```

### Defining the Type

Create a new source file - name it accordingly - and include your Custom Type header.

To define the type, use the `DEFINE_TYPE(Namespace, Class)` macro.

For our `Counter` type, this will look like so:

```cpp
#include "Counter.hpp"

DEFINE_TYPE(MyNamespace, Counter);
```

We can now implement methods defined in the declaration.

* `OnUpdate` - OnUpdate Method, override from `MonoBehaviour` - Declared by `DECLARE_INSTANCE_METHOD(void, Update);`
* `ctor` - Constructor - Declared by `DECLARE_CTOR(ctor);`

Our `Counter.cpp` file now looks like this:

```cpp
#include "Counter.hpp"

DEFINE_TYPE(MyNamespace, Counter);

void MyNamespace::Counter::ctor() {
  // This invokes the Il2CPP constructor - it initializes any fields
  // such as the "counts" integer field we declared using "DECLARE_INSTANCE_FIELD(int, counts);" 
  INVOKE_CTOR();
}

void MyNamespace::Counter::OnUpdate() {
    // Update method.
    counter = counter + 5;
    // Add 5 to the counter field.
}
```

### Registering the Type

You can register all the Custom Types you have created using the `custom_types::Register::AutoRegister()` method.

This method should be put in your `load()` like so:

```cpp
extern "C" void load() {
    // ... stuff like hooks above this
    custom_types::Register::AutoRegister();
}
```

### Using the Type

Types can be used as normal - for our `Counter` type, we can add it to a GameObject as it is a MonoBehaviour derivative.

```cpp
#include "UnityEngine/GameObject.hpp"
#include "Counter.hpp"

UnityEngine::GameObject* gameObject = UnityEngine::GameObject::New_ctor("CounterObject");
gameObject->AddComponent<MyNamespace::Counter *>();
```

## Coroutines
In Unity, a coroutine is a method that can pause execution and return control to Unity but then continue where it left
off on the following frame. [Unity Documentation](https://docs.unity3d.com/Manual/Coroutines.html)

### Creating a Coroutine

Using Custom Types, coroutines are pretty much the same as their C# counterparts. Take a look at this example:

```cpp
#include "System/Collections/IEnumerator.hpp"
#include "custom-types/shared/coroutine.hpp"
#include "UnityEngine/WaitForSeconds.hpp"

custom_types::Helpers::Coroutine counterCoroutine() {

    int secondsPassed = 0;

    // Loop 30 times.
    for (int i = 0; i < 30; i++) {
      // Timer
      secondsPassed++;
      
      // Wait one second.
      co_yield reinterpret_cast<System::Collections::IEnumerator*>(UnityEngine::WaitForSeconds::New_ctor(1));
    }
    
    // Return
    co_return;
}
```

| C#             | C++         |
|----------------|-------------|
| `yield return` | `co_yield`  |
| `yield`        | `co_yield`  |
| None           | `co_return` |

`co_return` is used to return a `Coroutine`, C# automatically handles this during compilation, but c++ does not.

You can also use `co_return` to exit a coroutine early, just like `return`.

Using normal `return` in a coroutine will not work.

### Using the Coroutine

You can use `SharedCoroutineStarter` to spawn a Coroutine without the need of a `MonoBehaviour` Custom Type like so:

```cpp
#include "GlobalNamespace/SharedCoroutineStarter.hpp"
#include "custom-types/shared/coroutine.hpp"

auto coroutine = custom_types::Helpers::CoroutineHelper::New(counterCoroutine());

SharedCoroutineStarter::get_instance()->StartCoroutine(coroutine);
```
