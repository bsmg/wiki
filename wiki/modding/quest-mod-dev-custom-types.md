---
sidebar: auto
description: Learn how to create C# macros for your Quest Mod!
---

# Quest Custom Types

`custom-types` is a library that allows you to create (fake) C# types using macros. These types can extend classes such
as `MonoBehaviour` and much more. `custom-types` also allows you to create [coroutines](https://docs.unity3d.com/Manual/Coroutines.html)
and [delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/).

Custom Types are complex and requires knowledge of basic C#.

## Prerequisites

- Install `custom-types` by running `qpm dependency add custom-types` in your project directory.

Make sure to restore after adding the dependency.

## Basics

To create a custom type, create a header file for your type. In this example, we'll make a type called `Counter`
that extends `MonoBehavior`.

In your header file, include the macros file.

```cpp
#pragma once

#include "custom-types/shared/macros.hpp"
```

Since our `Counter` Custom Type will be extending `MonoBehaviour`, we need to include this too.

```cpp
#include "UnityEngine/MonoBehaviour.hpp"
```

### Declaring the Type

With those includes, we can now declare our `Counter` type. Types are declared using macros, similarly to hooking.

```cpp
// parameters are (namespace, class name, parent class, contents)
DECLARE_CLASS_CODEGEN(MyNamespace, Counter, UnityEngine::MonoBehaviour,
    // DECLARE_INSTANCE_METHOD creates methods
    DECLARE_INSTANCE_METHOD(void, Update);

    // DECLARE_INSTANCE_FIELD creates fields
    DECLARE_INSTANCE_FIELD(int, counts);
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

Note that only basic types, such as `int`, `bool`, etc, and C# types can be used as instance
fields and method parameters declared with these macros. If you need something like a `std::vector`
or a c++ struct in your type, you can declare it after all the C# fields the same way you would
in a regular c++ struct or class.

### Defining the Type

Create a new source file - name it accordingly - and include your Custom Type header.

To define the type, use the `DEFINE_TYPE(Namespace, Class)` macro.

For our `Counter` type, this will look like so:

```cpp
#include "Counter.hpp"

DEFINE_TYPE(MyNamespace, Counter);
```

We can now define the methods that we have declared:

- `Update` - Unity's update method, declared by `DECLARE_INSTANCE_METHOD(void, Update);`

Our `Counter.cpp` file now looks like this:

```cpp
#include "Counter.hpp"

DEFINE_TYPE(MyNamespace, Counter);

// Unity update method - runs every frame this component is enabled
void MyNamespace::Counter::Update() {
    // Add 5 to the counter field
    counter = counter + 5;
}
```

## Overriding methods

We can also define methods that override those on parent types or interfaces, but we are limited to only overriding
methods explicitly defined as `virtual` or `abstract` in the C# code. For non interfaces, it's not always clear whether
this is the case for any given method if you don't have access to a decompiler and the PC game files, but an example of
a virtual method that is commonly overriden is `HMUI::ViewController::DidActivate`:

```cpp
// don't forget to include the types you use!
#include "HMUI/ViewController.hpp"

DECLARE_CLASS_CODEGEN(MyNamespace, CustomMenu, HMUI::ViewController,
    // to override a method, we need the MethodInfo* of the original
    // there are two common ways to get it, but unfortunately both of them make for relatively long lines
    DECLARE_OVERRIDE_METHOD(void, DidActivate,
        il2cpp_utils::il2cpp_type_check::MetadataGetter<&HMUI::ViewController::DidActivate>::get(),
        bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling);
    // OR
    DECLARE_OVERRIDE_METHOD(void, DidActivate,
        il2cpp_utils::FindMethodUnsafe("HMUI", "ViewController", "DidActivate", 3),
        bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling);
    // note that both of these seem to be calling methods at the global level, outside of any functions or hooks,
    // that you normally cannot call until at least after load() --
    // but actually, since these are macros, the code is actually moved inside of internal functions
    // that get called at the correct times for registration
)
```

### Using Interfaces

Sometimes you will want to have your custom type inherit from interfaces. Putting them as the parent type will not work,
and instead there is a different macro for it:

```cpp
#include "HMUI/TableView_IDataSource.hpp"

// if there is no required parent class, Il2CppObject can be used to equal a plain object with no parent
// also, to inherit from multiple interfaces, they need to be wrapped with std::vector<Il2CppClass*>({ ... })
// to prevent the macro from expanding them incorrectly
DECLARE_CLASS_CODEGEN_INTERFACES(MyNamespace, TableData, Il2CppObject, { classof(HMUI::ISaberMovementData*) },
    // rest of the custom type as normal
)
```

## Constructors

Some simple custom types do not necessarily need constructors, but there are a lot of cases where one does
need to be defined. You can create a fully custom one with the `DECLARE_CTOR` macro:

```cpp
DECLARE_CLASS_CODEGEN(MyNamespace, Counter, UnityEngine::MonoBehaviour,
    // other members

    // can have arguments the same as any other method
    // but the return type is always void so it is omitted from the macro
    DECLARE_CTOR(ctor);
)
```

And then define it just like any other method. However, in that definition, you should make sure to invoke the
constructor of the base class with `INVOKE_BASE_CTOR`:

```cpp
void MyNamespace::Counter::ctor() {
    INVOKE_BASE_CTOR(classof(UnityEngine::MonoBehaviour*), ...constructor arguments);
    // initialize other things
}
```

In the case of `MonoBehaviour`, this isn't necessary as it doesn't do anything in its constructor. If you inherit
other types, though, not invoking their constructors can cause hard to track down bugs.

Another case where the constructor would be used is if you use `DECLARE_INSTANCE_FIELD_DEFAULT` or have c++ style fields
in your class that need special initialization, such as `std::vector` or something with a default value, ex:

```cpp
DECLARE_CLASS_CODEGEN(MyNamespace, Counter, UnityEngine::MonoBehaviour,
    // C# members
    public:
    int counts = 5;
)
```

In this case you define the constructor method the same way and include `INVOKE_CTOR()` in the method definition:

```cpp
void MyNamespace::Counter::ctor() {
    // sets counts to 5
    INVOKE_CTOR();
    // initialize other things
}
```

If you want these macros but have nothing else to do in the constructor, you can skip the method definition and
just use `DECLARE_DEFAULT_CTOR`:

```cpp
DECLARE_CLASS_CODEGEN(MyNamespace, Counter, UnityEngine::MonoBehaviour,
    // C# members

    // invokes the MonoBehaviour constructor and sets counts to 5
    DECLARE_DEFAULT_CTOR();

    public:
    int counts = 5;
)
```

Destructors can be defined custom similarly to contructors with `DECLARE_DTOR`, and/or `DECLARE_SIMPLE_DTOR` to run
the destructor for any c++ fields that need to have special behavior when being destroyed. You don't need to worry
about running the base class destructor, though.

::: warning
To create a new object, _do not_ run `ctor` yourself or create it in c++ with `new` or any similar operator,
but instead use `il2cpp_utils::New<MyNamespace::Counter*>(...constructor arguments);`, or any C# method that would
create an object, such as `AddComponent`.
:::

### Registering

You can register all the custom types you have created using the `custom_types::Register::AutoRegister()` method.

This method should be put in your `load()` like so:

```cpp
#include "custom-types/shared/register.hpp"

// other code

extern "C" void load() {
    // make sure this is after il2cpp_functions::Init()
    custom_types::Register::AutoRegister();

    // other code
}
```

To ensure correct behavior, make sure you install hooks _after_ you register your Custom Types!

### Using the Type

Custom Types can be used as if they were conventional C# types like you would find in the base game - for our `Counter` type,
we can add it as a component to a `GameObject` as it inherits `MonoBehaviour`.

```cpp
#include "UnityEngine/GameObject.hpp"
#include "Counter.hpp"

// in a hook somewhere
UnityEngine::GameObject* gameObject = UnityEngine::GameObject::New_ctor("CounterObject");
gameObject->AddComponent<MyNamespace::Counter*>();
```

## Coroutines

In Unity, a coroutine is a method that can pause execution and return control to Unity but then continue where it left
off on the following frame. [Unity Documentation](https://docs.unity3d.com/Manual/Coroutines.html)

### Creating a Coroutine

Using Custom Types, coroutines are pretty much the same as their C# counterparts. Take a look at this example:

```cpp
#include "custom-types/shared/coroutine.hpp"
#include "UnityEngine/WaitForSeconds.hpp"
#include "System/Collections/IEnumerator.hpp"

custom_types::Helpers::Coroutine counterCoroutine() {

    int secondsPassed = 0;

    // loop 30 times
    for (int i = 0; i < 30; i++) {
        secondsPassed++;

        // wait one second
        // arguments passed to co_yield must be cast to this type
        // you can also use co_yield nullptr; to wait a single frame
        co_yield reinterpret_cast<System::Collections::IEnumerator*>(UnityEngine::WaitForSeconds::New_ctor(1));
    }
    co_return;
}
```

| C#             | C++         |
| -------------- | ----------- |
| `yield return` | `co_yield`  |
| `yield`        | `co_yield`  |
| `yield break`  | `co_return` |

`co_return` is used to end a coroutine. C# automatically handles this during compilation, but c++ does
not, so make sure you have one at the end of all your coroutines.

You can also use `co_return` to exit a coroutine early, just like `return` would in a typical function.

Using normal `return` in a coroutine will not work.

### Using the Coroutine

You can start a coroutine on any `MonoBehaviour` using the `StartCoroutine` method just like in C#, however
to create an actual coroutine from a function you need an extra call:

```cpp
#include "UnityEngine/GameObject.hpp"
#include "custom-types/shared/coroutine.hpp"

// in a hook somewhere
auto gameObject = UnityEngine::GameObject::New_ctor("MyCoroutineRunner");
// this is the example custom type we made earlier, but anything inheriting from a MonoBehaviour will work
auto myMonoBehaviour = gameObject->AddComponent<MyNamespace::Counter*>();
// create the object that we can pass to StartCoroutine from our function
auto coroutine = custom_types::Helpers::CoroutineHelper::New(counterCoroutine());
myMonoBehaviour->StartCoroutine(coroutine);
```

You can use `SharedCoroutineStarter` to start a coroutine without the need of an instance like so:

```cpp
#include "GlobalNamespace/SharedCoroutineStarter.hpp"
#include "custom-types/shared/coroutine.hpp"

// in a hook somewhere
auto coroutine = custom_types::Helpers::CoroutineHelper::New(counterCoroutine());
GlobalNamespace::SharedCoroutineStarter::get_instance()->StartCoroutine(coroutine);
```

## Other

Some extra information and recommended dos and don'ts can be found [here](https://github.com/sc2ad/Il2CppQuestTypePatching/wiki/FAQ).
