---
prev: Decompiling
next: Creating UI
---

# Harmony Patching

A common method of altering the behavior of the game is through the Harmony API, and every modder should know how
to use it.

## Summary

Harmony patching is a way of hooking the games methods and pointing them to different implementations.
By writing harmony patches, you are essentially adding code to methods, changing parts of them, or entirely rewriting
them.

Harmony patches are quite powerful and are used in a great amount of different mods. There is a lot of detail about
patching and you should read the [documentation](https://harmony.pardeike.net/articles/patching.html) if you ever need
to do something specific.

## Harmony Setup

There are different methods of setting up your patches as stated
[here](https://harmony.pardeike.net/articles/basics.html#patching-using-annotations)
in the documentation. We are simply going to patch all methods marked with the `HarmonyPatch` attributes using
`PatchAll()`:

```c#
internal class Plugin
{
    private Harmony harmony;
    private Assembly executingAssembly = Assembly.GetExecutingAssembly();

    [Init]
    public Plugin(PluginMetadata pluginMetadata)
    {
        harmony = new Harmony(pluginMetadata.Id);
    }

    [OnStart]
    public void OnApplicationStart() => harmony.PatchAll(executingAssembly);

    [OnExit]
    public void OnApplicationQuit() => harmony.UnpatchSelf();
}
```

Now, any classes and methods with the `HarmonyPatch` attribute will be registered as a patch. Once again, if you want
more control, there are different methods to do this as stated in the
[documentation](https://harmony.pardeike.net/articles/basics.html#manual-patching).

## Examples

To make understanding harmony patches easier, we will provide some simple examples of the different things you can do.

### Postfix

The simplest method of patching involves adding code at the end of a method - a postfix.

- This is very commonly seen and can be used as events to execute code when the game does certain events
- It can be used to reliably get references to objects without having to use expensive methods like
  [`Resources.FindObjectsOfTypeAll`](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Resources.FindObjectsOfTypeAll.html).
- They can also change the return result of methods as mentioned in the
  [documentation](https://harmony.pardeike.net/articles/patching-postfix.html).

The following patch patches the `Init()` method in any `NoteController`. The patch gets a reference to the instance of
the object by injecting the `__instance` variable in the patch params.

Since `NoteController` is a type that has many inheritors, we can get what type of note controller it is. If you run
this in a map that also has bombs and chains, you will see their types get listed in the logs too.

```c#
[HarmonyPatch(typeof(NoteController), "Init")]
public class ExamplePatch
{
    public static void Postfix(NoteController __instance)
    {
        Plugin.Log.Info($"A {__instance.GetType().Name} has been initialized.");
    }
}
```

### Prefix

Another common patch, this is very similar to a postfix except it runs before the original method.

- This allows you to decide dynamically decide whether the original implementation should run or not
- Like with a postfix, you can also decide the result yourself
- You can create a state variable that can be passed to a postfix of the same method

The following example patches the `RefreshScore()` method in the `FlyingScoreEffect`, which is the MonoBehaviour
attached to the text that displays your score when you cut a note. We get a reference to the instance, and also
the original method params: `score` and `maxPossibleCutScore`.

The patch is pretty self explanatory, but when you score the max possible score for a note - which is 115 for
a normal note - the text will be replaced with `Hello World!`, and the original method will be ignored. If the score
does not reach the max possible score, then the original method will be called instead.

```c#
[HarmonyPatch(typeof(FlyingScoreEffect), "RefreshScore")]
public class ExamplePatch
{
    public static bool Prefix(FlyingScoreEffect __instance, int score, int maxPossibleCutScore)
    {
        if (score >= maxPossibleCutScore)
        {
            __instance._text.text = "Hello World!";
            __instance._colorAMultiplier = 1f;

            // Cancel the original method
            return false;
        }

        // Run the original implementation
        return true;
    }
}
```

### Transpiler

The last commonly used patch we will mention is the transpiler. These are used to modify the
[CIL](https://en.wikipedia.org/wiki/Common_Intermediate_Language) code of the game directly. With these, you can
make changes in the middle of methods.

This type of patch is much more complicated, and we won't provide an example here (for now), but we can recommend
checking out transpilers from other mods. As always, if you want to learn more about transpilers, check the
[documentation](https://harmony.pardeike.net/articles/patching-transpiler.html).

## Accessing Private Code

When making mods you often will need to alter `private` fields, or call `private` methods. Thankfully, in C# there are
some methods that allow us to do this.

### Publicizing Assemblies

The easiest and recommended way to access `private` members is by utilizing the `BepInEx.AssemblyPublicizer.MSBuild`
NuGet package. To add this to your project, do one of the following:

- Navigate to your project dependencies in the assembly explorer, right click it, and select `Manage NuGet Packages`.
  Then, search for "BepInEx.AssemblyPublicizer.MSBuild", right click it, and select install;
- or navigate to the top bar and look for `Tools | NuGet | Manage NuGet Packages for Solution` and search for it there.

Alternatively, you can add it manually in the `.csproj` project file manually by adding a `PackageReference`:

```xml
<PackageReference Include="BepInEx.AssemblyPublicizer.MSBuild" Version="0.4.2">
    <PrivateAssets>all</PrivateAssets>
    <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
</PackageReference>
```

Once installed, all you have to do is add the `Publicize` property to an assembly reference like this:

```xml
<Reference Include="Main" Publicize="true">
    <HintPath>$(BeatSaberDir)\Beat Saber_Data\Managed\Main.dll</HintPath>
    <Private>false</Private>
</Reference>
```

Now, anything that was `private` or `protected` will be seen as `public` by the compiler, allowing you to bypass this
restriction.

The only restriction you will run in to now is with `readonly` fields and auto-computed properties (see below).
If you want to set the value of these, you will have to use [reflection](#reflection).

```c#
public readonly float _field;
public float Property { get; }

```

::: danger IMPORTANT
**Do not use the assembly publicizer to publicize other mods**. This can cause some problems with the mod loader. Instead,
use [reflection](#reflection) or make a request to the mod's maintainer to add a change if you need it.
:::

### Reflection

Reflection is a special feature of C# that lets you read code at runtime by making types into objects which you can access
members from. There is a lot you can do with reflection, and something that it is commonly used for is checking if certain
parts of another mod's code are running without actually having to reference that mod's assembly.

If you want to read more about reflection you can check
[Microsoft's docs](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/reflection-and-attributes/).

IPA provides some utilities to use reflection to get and set values of members, and invoke methods, even if they are private.

```c#
using IPA.Utilities;
```

Now we can use the `ReflectionUtil` class, which provides a couple extension methods to pretty easily access private members
of an object.

```c#
public class SomeClass
{
    private float someValue = 0.25f;

    public float SomeValue => someValue;
}
```

Let's say we had a reference to an object of type `SomeClass`, we can access and set the private field by using `SetField`,
this works even when the field is `readonly`.

```c#
var someClass = new SomeClass();
someClass.SetField("someValue", 0.5f);
```

Other useful methods include `GetField`, `SetProperty`, `GetProperty`, `CopyComponent`, and `InvokeMethod`.

::: tip NOTE
If you are just reading the values of members, accessing methods, or setting the values of **non-readonly** fields and properties,
you should use the [Assembly Publicizer](#publicizing-assemblies), because it is easier to read, is faster, and creates less
garbage.
:::
