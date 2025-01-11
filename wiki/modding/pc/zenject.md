---
prev: Creating UI
next: Step-by-step Mod Tutorial
---

# Zenject Introduction

Zenject is what is called a Dependency Injection (DI) Framework, and Beat Saber's code uses it extensively. You can read
more about DI on [Microsoft's docs](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection) and
on [Wikipedia](https://en.wikipedia.org/wiki/Dependency_injection).

## What Is Dependency Injection

Trying to explain dependency injection usually makes it sound a lot more complex than it is. In short, it's when you delegate
the responsibility certain functionality in your code to "dependencies" and "injecting" them into objects upon their creation.

That is all DI is, but let's look at a simple C# example:

```c#
public interface IService
{
    public int GetNumber();
}

internal class ServiceImplementation : IService
{
    public int GetNumber()
    {
        // Implement this method
    }

    // Some other private behaviour
}
```

Now, we have an interface that provides the result of `GetNumber()`. Let's say we needed this behaviour in another object:

```c#
internal class SomeObject(IService service)
{
    private readonly IService _service = service;
    private readonly List<int> _numbers = [];

    void Update()
    {
        if (_numbers.Count > 5)
        {
            _numbers.Clear();
        }

        int number = _service.GetNumber();
        _numbers.Add(number);
    }
}
```

As we can see, when we create `SomeObject` we have to provide an instance of `IService` because it depends on the service.
The field `_numbers` is not a dependency in this case; it is just data that belongs to `SomeObject`.

This is essentially all you need to know to understand dependency injection, but the
[Zenject README](https://github.com/Mathijs-Bakker/Extenject?tab=readme-ov-file#what-is-dependency-injection)
goes a bit more in-depth about the what and why of DI.

By using dependency injection, you are able to more easily define the behaviour that each feature needs. If you need to
make changes in the future, your code will have enough abstractness that you should not have to go into every part of
the code to make everything work together.

## What Is Zenject

Now that you have some idea of what DI looks like, all Zenject does is makes the process of maintaining DI easy. Zenject
has a lot of different features but it would be pointless to cover them all here, but you can always check the
[GitHub README](https://github.com/Mathijs-Bakker/Extenject) to learn more about all of its features.

Zenject lets create us objects by declaring their "contract binding" in what they call an `Installer`. We can give keys
to dependencies, we can provide specific methods to create objects, we can declare multiple implementations of the same
interface, and more.

## Using Zenject In Mods

In order to easily access the game's implementation of Zenject, we use a library called [SiraUtil](https://github.com/Auros/SiraUtil).
This is used in a wide variety of mods and it allows us to take full advantage of dependency injection without much
extra effort.

Before doing anything, add an assembly reference to `SiraUtil`, `Zenject`, and `Zenject-usage`. Make sure you add
`SiraUtil` as a dependency in your plugin metadata.

### Implementing Zenject

First, add a `Zenjector` param to your plugin class `[Init]` method:

```c#
[Init]
public Plugin(Zenjector zenjector)
{

}
```

The `Zenjector` will allow you to access the game's `Installer`s and let you make your own bindings with them.

Let's now look at the class we will be using to test Zenject:

```C#
internal class Test : IInitializable
{
    private readonly SiraLog log;

    public Test(SiraLog log) => this.log = log;

    public void Initialize() => log.Info("Initializable test");
}
```

We pass a `SiraLog` instance to this object in the constructor. This is a service provided by SiraUtil, and acts
as an instance-based logger.

This class implements [IInitializable](https://github.com/Mathijs-Bakker/Extenject?tab=readme-ov-file#iinitializable),
which is an interface provided by Zenject. The `Initialize()` method gets called after all objects have been created,
and on Unity's [Start](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/MonoBehaviour.Start.html) event.
This is ideally where initialization logic for your object would go.
In this test case, all it does is log a message when created.

Let's make a binding to test this behaviour - we provide an installer and use the callback with the `DiContainer`
to make a binding:

```c#
public Plugin(Zenjector zenjector)
{
    zenjector.Install<StandardGameplayInstaller>(container =>
    {
        container.Bind<IInitializable>().To<Test>().AsSingle();
    });
}
```

What we are doing here is binding `Test` with its `IInitializable` interface on the DiContainer for the
`StandardGameplayInstaller`. The `AsSingle` method ensures only one instance of `Test` can be bound.

If you build this now and play any map in solo, you will see the "Initializable test" message appear in the console
when the scene transition ends.

However, the `SiraLog` that we used doesn't have a base logger to use, so the
source appears as `???`. In order to fix this, we can just provide the `Zenjector` with IPA's logger:

```c#
zenjector.UseLogger(logger);
```

### Cleaning Up

It's recommended to organize your bindings in your own installers. Create an installer, and override the
`InstallBindings()` method:

```c#
internal class TutorialInstaller : Installer
{
    public override void InstallBindings()
    {
        Container.BindInterfacesTo<Test>().AsSingle();
    }
}
```

We have also made use of the [BindInterfacesTo](https://github.com/Mathijs-Bakker/Extenject?tab=readme-ov-file#bindinterfacesto-and-bindinterfacesandselfto)
method here, which is just a shortcut so you don't have to remember what interfaces your type implements. It is good to know
the full expression in case you want to make it clear that you are implementing an interface that will be used as a
dependency throughout your code.

Now, we just specify the installer to the `Zenjector` with either a base installer to install upon, or by using the
`location` enum argument to specify a common location:

```c#
public Plugin(Zenjector zenjector, IPALogger logger)
{
    zenjector.UseLogger(logger);
    zenjector.Install<TutorialInstaller>(Location.StandardPlayer);
}
```

By doing this we have made the `Plugin` class just responsible for defining the contexts in which the plugin operates
in, whilst the installers declare the interface of the code.

## Types Of Injection

So far we've only covered injecting dependencies through a constructor, however, there are multiple ways to achieve this
goal with Zenject.

### Constructors

As covered before, constructor injection is the main form of injection. They force the dependencies to only be resolved
at object creation, the dependencies are immediately apparent, and they guarantee no circular dependencies which
encourages better design.

```c#
internal class SomeObject(IService service)
{
    private readonly IService service = service;
}

internal record SomeOtherObject(IService Service);
```

Unfortunately, MonoBehaviours cannot have constructors, so you are left with method and field injection for those.

### Methods

The `Inject` attribute can be used on methods, and with it we can treat methods just like constructors by supplying the
dependencies in the params for the method.

```c#
internal class SomeBehavior : MonoBehaviour
{
    private IService service = null!;

    [Inject]
    public void Init(IService service) => this.service = service
}
```

As you can see, this example is using a `MonoBehaviour`. Since MonoBehaviours cannot have constructors, this is the
preferred way to do injection on them. It looks a lot like a constructor which makes the intention of this code
slightly more clear. That being said, you can use field injection on MonoBehaviours too.

A problem with this approach is that you can't make the field readonly. This can make the code's intent less clear,
as a field that isn't readonly implies it might be open to changing; you usually aren't going to be changing the
value of dependencies.

### Fields And Properties

Field and property injections occur directly after the constructor finishes. This is achieved by adding `[Inject]` to any
field or property.

```c#
internal class SomeBehavior : MonoBehaviour
{
    [Inject]
    private readonly IService service = null! // assigned by Zenject
}
```

Since Zenject uses [reflection](https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection)
to set these fields, you can make them private and readonly. This is great for demonstrating the intention of the code,
but field injection can look a bit cryptic for others looking at the code.

## Common DiContainer Methods

There are dozens of methods to create a binding as seen in the documentation, so let's highlight a few ways of creating
bindings that you will be mostly using.

<!-- markdownlint-disable MD013 -->

| Name                               | Description                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| `Bind<T>`                          | Registers the type `T` for injection for itself and other types                                     |
| `BindInstance`                     | Registers the type of the provided existing object instance                                         |
| `BindInterfacesTo<T>`              | Registers the interfaces for the type `T` for injection                                             |
| `BindInterfacesAndSelfTo<T>`       | A combination of `Bind<T>` and `BindInterfacesTo<T>`                                                |
| `AsCached`                         | The same instance of the object will be reused                                                      |
| `AsSingle`                         | The same as `AsCached` but ensures only one binding can be made for the result type                 |
| `AsTransient`                      | Instances of the result type will not be reused; a new one will be created each time it's requested |
| `FromNewComponentOnNewGameObject`  | Create an empty `GameObject` and add a new component of the result type on it                       |
| `FromNewComponentAsViewController` | Provided by SiraUtil; creates a new view controller - result type must inherit `ViewController`     |

<!-- markdownlint-enable MD013 -->

## Zenject With UI

Once you have your SiraUtil setup, you can easily declare all menu-related code in a installer in the menu.

```c#
zenjector.Install<MenuInstaller>(Location.Menu);
```

### Binding View Controllers

SiraUtil provides a way to create view controllers easily using `FromNewComponentAsViewController`. You
can also bind a flow coordinator, but since it is a `MonoBehaviour`, you should use `FromNewComponentOnNewGameObject`,
or any compatible construction method.

```c#
internal class MenuInstaller : Installer
{
    public override void InstallBindings()
    {
        Container.Bind<TutorialViewController>().FromNewComponentAsViewController().AsSingle();
        Container.Bind<TutorialFlowCoordinator>().FromNewComponentOnNewGameObject().AsSingle();
        Container.BindInterfacesTo<MenuButtonManager>().AsSingle();
    }
}
```

Now, we would be able to inject our view controllers into the flow coordinator, and we can also inject the
`MainFlowCoordinator` to make use of it for the menu button.

Additionally, as seen before with the `SiraLog`, we can use bindings made by other mods. Another case is the `MenuButtons`
class from BSML:

```c#
internal class MenuButtonManager : IInitializable
{
    private readonly MenuButtons menuButtons;
    private readonly MainFlowCoordinator mainFlowCoordinator;
    private readonly TutorialFlowCoordinator tutorialFlowCoordinator;
    private readonly MenuButton menuButton;

    public MenuButtonManager(MenuButtons menuButtons, MainFlowCoordinator mainFlowCoordinator, TutorialFlowCoordinator tutorialFlowCoordinator)
    {
        this.menuButtons = menuButtons;
        this.mainFlowCoordinator = mainFlowCoordinator;
        this.tutorialFlowCoordinator = tutorialFlowCoordinator;
        menuButton = new("Tutorial Mod", ShowFlowCoordinator);
    }

    public void Initialize()
    {
        menuButtons.RegisterButton(menuButton);
    }

    private void ShowFlowCoordinator()
    {
        mainFlowCoordinator.PresentFlowCoordinator(tutorialFlowCoordinator);
    }
}
```

This seems more complex than it would be without Zenject, however, Zenject will call `Initialize` for
us on the first frame of the menu scene being loaded. Most importantly, this class is only responsible
for doing one thing: managing the menu button.

### Registering Custom Tags

If you have some custom UI tags that you want to use, it's recommended to bind them using Zenject. You
would bind them like this in a menu installer:

```c#
Container.Bind<BSMLTag>().To<MyCustomTag>().AsSingle();
Container.Bind<TypeHandler>().To<MyCustomHandler>().AsSingle();
```

## Affinity Patching

SiraUtil provides a way to make non-static [Harmony patches](./harmony-patching.md) using the "Affinity
API". Being able to make patch methods not static lets you make use of dependency injection for your
patches.

The syntax is mostly the same, however, Affinity is a lot more limited than Harmony. For the attributes, you must specify
a `AffinityPatch` attribute on every patch method, and you need to specify a patch type using either `AffinityPostfix`,
`AffinityPrefix`, or `AffinityTranspiler`. Do note - if you don't provide a patch type attribute then affinity will default
to a postfix.

### How To Affinity

Below is an example of an affinity patch taken from the SiraUtil documentation. It injects the `PauseController` and causes
the game to pause every 10 misses and cancels the miss by using a [prefix](./harmony-patching.md#prefix).

```c#
internal class PauseOnXMisses(PauseController pauseController) : IAffinity
{
    private readonly PauseController pauseController = pauseController;
    private int misses = 0;

    [AffinityPrefix]
    [AffinityPatch(typeof(ScoreController), nameof(ScoreController.HandleNoteWasMissed))]
    private bool HandleNoteWasMissedPrefix(NoteController noteController)
    {
        if (noteController.colorType == ColorType.None && misses++ < 10)
        {
            return true;
        }

        pauseController.Pause();
        misses = 0;
        return false;
    }
}
```

As you can see, you just need to add the `IAffinity` interface to the patch class, then you need to bind it in a gameplay
related installer so that you have access to the `PauseController`.

```c#
Container.BindInterfacesTo<PauseOnXMisses>().AsSingle();
```

### Affinity's Limitations

Affinity is maintained separately from Harmony, so it doesn't have nearly as many features as Harmony does.

The main problem is the timing of the patch. Your patch will only be effective after the object graph is constructed,
so you can't patch `Awake` methods or constructors, for instance.

Secondly, your patches will be unapplied automatically when the DiContainer it was bound to is disposed, but this should
be fine in almost all cases.

## Custom Sabers

SiraUtil provides a unified way to replace the vanilla saber model, such that mods do not fight over which saber model
gets shown.

### Registering A Saber Model

Create a class which inherits from a `SaberModelController`, create the saber model registration, and bind it in a game
installer. You will have to provide a priority too so SiraUtil can decide which registration to use when there are
multiple.

```c#
internal class CustomSaberModelController : SaberModelController { }
```

```c#
var registration = SaberModelRegistration.Create<CustomSaberModelController>(0);
Container.BindInstance(registration).AsSingle();
```

### Additional Interfaces

`IColorable` will provide a property which receives a color when one is set by SiraUtil. This is primarily used by
Chroma to set the color of sabers to the color of Chroma-colored notes.

```c#
internal class CustomSaberModelController : SaberModelController, IColorable
{
    public Color Color { get; set; } // Add behaviour on the setter
}
```

`IPreSaberModelInit` and `IPostSaberModelInit` provide methods which will be called before and after the `Init()`
method of the `SaberModelController` and also provide a reference to the original `Saber` and saber parent `Transform`.

The return type of `PreInit()` is `bool`, and it works just like Harmony prefixes; you should return `true` if you
want the original `Init` to run, otherwise return `false`.

```c#
internal class CustomSaberModelController
    : SaberModelController, IPreSaberModelInit, IPostSaberModelInit
{
    public bool PreInit(Transform parent, Saber saber) => true;
    public void PostInit(Transform parent, Saber saber) { }
}
```

## Object Redecorating

Under construction
