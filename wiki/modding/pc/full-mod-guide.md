---
prev: Zenject and SiraUtil
next: Uploading Your Mod
---

# Full Mod Guide

This part of the wiki will be dedicated to showing the full process of making a Beat Saber mod.

## The Mod

The first step of creating a mod is understanding exactly what you want to achieve.

In this tutorial, we will be creating a mod capable of changing the "MISS" effect and replacing it with text. The mod
will have an in-game interface to allow you to change the text through a text input. The mod will be designed in a
decoupled way, which will make it easier to add new features to the mod later if we wish.

We can use [BSML](./bsml.md) for the UI, and we can use [SiraUtil](./zenject.md) to create our custom text effects
while remaining loosely coupled to in-game functions.

### Creating The Project

The first thing we are going to do is set up the plugin template. Refer to the [setup guide](./setup.md) for more information.
We will name the plugin `MissTextChanger` and add dependencies to `BSML` and `SiraUtil` in the metadata.

This will start from a bare-bones BSIPA template, going step by step through the testing process of making a simple
plugin to help people understand everything. If you're following along, you can also just use the full template, which
has a basic SiraUtil and BSML setup already done.

### Figuring Out The Game

Before going any further, we need to get an understanding of how the game handles miss text normally. First, let's go in
to [ILSpy](./decompiling.md), and search for "ScoreController". This class is responsible for basically everything related
to giving the player score, so we can figure out how misses are handled from here.

In the `Start()` method of the `ScoreController`, we can see the `noteWasMissedEvent` being assigned to which is a part
of the `BeatmapObjectManager`. Let's analyze this event and see what the `add` method of the event is used by. We can now
see the `MissedNoteEffectSpawner` which, as we can assume by its name, is exactly what we're looking for.

![Analyzing BeatmapObjectManager Event](/.assets/images/modding/pc-mod-tutorial-event-analyze.jpg 'Analyzing BeatmapObjectManager Event')

Looking into the `MissedNoteEffectSpawner` we can see all it is doing is taking data from the missed note's `NoteController`
and passing it to a `FlyingSpriteSpawner` to spawn the effect. The sprite spawner manages a
[Zenject Pool](https://github.com/Mathijs-Bakker/Extenject/blob/master/Documentation/MemoryPools.md)
of sprite effects.

If we analyze the `FlyingSpriteEffect.Pool` we can figure out where it is bound by checking where it is used.

![Analyzing FlyingSpriteEffect Pool](/.assets/images/modding/pc-mod-tutorial-pool-analyze.jpg 'Analyzing FlyingSpriteEffect Pool')

Now, looking at the `EffectPoolsManualInstaller.ManualInstallBindings()` method we see a couple different memory pools here.
One that is particularly interesting is the `FlyingTextEffect`, which if we analyze we can see the `FlyingTextSpawner`.

This is surely something we can use to achieve customizable miss text, however, looking at and comparing the spawn
methods for the sprite and text spawners, they are not exactly the same. The `x` of the `targetPos` vector is anchored
in the sprite spawner by its sign, which is why we see miss effects only fly to two locations to the left and right of
the track; there are only two possible values for sign.

Because of this difference, if we wanted to maintain the same visuals, we cannot use the `FlyingTextSpawner` for our needs.
We could use a harmony patch to change how the `SpawnFlyingSprite()` method works, but this may affect other mods that may
want to use this.

### The Solution

Instead of using the game's methods for our needs, let's make a custom effect spawner, and a custom flying object
effect. This should ensure that our mod doesn't conflict with other mods' features, but we're going to have to patch in to
the `MissedNoteEffectSpawner` to replace the base-game's miss effect with our custom one.

Let's start with the `MissTextEffect`, which will inherit `FlyingObjectEffect` like the other effects. For the text, we
will want a `TextMeshPro`.

```c#
internal class MissTextEffect : FlyingObjectEffect
{
    // This is the pool from Zenject
    public class Pool : MonoMemoryPool<MissTextEffect>;

    // We don't have something to use here yet, we will get one later
    private AnimationCurve fadeAnimationCurve;

    // This field is serialized so that it will be included on instantiation
    [SerializeField]
    public TextMeshPro? textMesh;

    private Color color;

    public void InitAndPresent(string text, float duration, Vector3 targetPos,
        Quaternion rotation, Color color, float fontSize, bool shake)
    {
        if (textMesh == null) return;
        this.color = color;
        textMesh.text = text;
        textMesh.fontSize = fontSize;
        InitAndPresent(duration, targetPos, rotation, shake);
    }

    public override void ManualUpdate(float t)
    {
        if (textMesh != null)
            textMesh.color = color with { a = fadeAnimationCurve.Evaluate(t) };
    }
}
```

We have some things to fill in on this object, but we will figure that out a bit later.

Next let's look at the spawner. We will be making sure to match the logic of the sprite spawner so
that the behaviour is the same.

```c#
internal class MissTextEffectSpawner : MonoBehaviour,
                                       IFlyingObjectEffectDidFinishEvent
{
    // There is a lot of data here that needs filling
    private float duration;
    private float xSpread;
    private float targetYPos;
    private float targetZPos;
    private Color color;
    private float fontSize;
    private MissTextEffect.Pool missTextEffectPool;

    public void SpawnText(
        Vector3 pos, Quaternion rotation, Quaternion inverseRotation)
    {
        var text = "CUSTOM MISS";
        var targetPos = rotation * new Vector3(
            Mathf.Sign((inverseRotation * pos).x) * xSpread,
            targetYPos,
            targetZPos);

        var missTextEffect = missTextEffectPool.Spawn();
        missTextEffect.didFinishEvent.Add(this);
        missTextEffect.transform.localPosition = pos;
        missTextEffect.InitAndPresent(
            text, duration, targetPos, rotation, color, fontSize, false);
    }

    public void HandleFlyingObjectEffectDidFinish(
        FlyingObjectEffect flyingObjectEffect)
    {
        flyingObjectEffect.didFinishEvent.Remove(this);
        missTextEffectPool.Despawn((MissTextEffect)flyingObjectEffect);
    }
}
```

All we need to do is register these components in an installer. Let's create a `PlayerInstaller` and
add our bindings.

- Bind the `MissTextEffectSpawner` as a component on a single new game object
- Bind the memory pool for the `MissTextEffect` similar to the other score effects in the
  `EffectPoolsManualInstaller`

```c#
internal class PlayerInstaller : Installer
{
    public override void InstallBindings()
    {
        Container.Bind<MissTextEffectSpawner>()
            .FromNewComponentOnNewGameObject()
            .AsSingle();
        Container.BindMemoryPool<MissTextEffect, MissTextEffect.Pool>()
            .WithInitialSize(20)
            .FromComponentInNewPrefab(GetMissTextEffectPrefab());
    }

    private static MissTextEffect GetMissTextEffectPrefab()
    {
        var prefabObject = new GameObject("MissTextEffect");
        var textEffect = prefabObject.AddComponent<MissTextEffect>();

        var textObject = new GameObject("Text");
        textObject.transform.SetParent(prefabObject.transform, false);

        textEffect.textMesh = textObject.AddComponent<TextMeshPro>();
        textEffect.textMesh.alignment = TextAlignmentOptions.Capline;
        textEffect.textMesh.fontStyle = FontStyles.Bold | FontStyles.Italic;

        return textEffect;
    }
}
```

Creating the `MissTextEffect` prefab here doesn't make much sense and should realistically move to its
own class but for now this is fine to demonstrate what we're doing.

Remember to add the zenjector to the `Plugin` init too.

```c#
zenjector.Install<PlayerInstaller>(Location.Player);
```

Now that we have the main components of the mod outlined, we need to set their fields. There are two ways
we can do this. We can do it manually by loading up a map in-game, opening [Runtime Unity Editor](rue.md),
and looking for the miss effect spawner to see the values. This may work, but we should figure out how to automate
it in case the values aren't constant.

As seen before, we found the prefab for the `FlyingSpriteEffect` in the `EffectPoolsManualInstaller`. This isn't
actually an installer, instead it's a part of the _much_ larger `GameplayCoreInstaller`.

If we were to patch in to the `GameplayCoreInstaller`, we can access the prefabs for the `FlyingTextEffect` and
the instance of the `FlyingSpriteSpawner` to get the fields we need for our custom components.

Since we're using SiraUtil for this mod, let's make an [affinity patch](./zenject.md#affinity-patching)
into the `InstallBindings()` method. We can take the fields from the prefabs and bind their values with an id,
so that we can inject them into our own components.

```c#
internal class GameCoreInstallerHook : IAffinity
{
    [AffinityPrefix]
    [AffinityPatch(typeof(GameplayCoreInstaller), nameof(GameplayCoreInstaller.InstallBindings))]
    private void InstallBindingsPostfix(GameplayCoreInstaller __instance)
    {
        var container = __instance.Container;
        var flyingSpriteSpawner = __instance._missedNoteEffectSpawnerPrefab._missedNoteFlyingSpriteSpawner;
        var flyingTextEffect = __instance._effectPoolsManualInstaller._flyingTextEffectPrefab;

        float duration = flyingSpriteSpawner._duration;
        float spread = flyingSpriteSpawner._xSpread;
        float targetYPos = flyingSpriteSpawner._targetYPos;
        float targetZPos = flyingSpriteSpawner._targetZPos;
        var color = Color.white;
        const float fontSize = 4.5f; // Miss text is a sprite; estimate the font size
        var fadeAnimationCurve = flyingTextEffect._fadeAnimationCurve;
        var moveAnimationCurve = flyingTextEffect._moveAnimationCurve;
        container.BindInstance(duration).WithId("missEffectDuration").AsCached();
        container.BindInstance(spread).WithId("missEffectSpread").AsCached();
        container.BindInstance(targetYPos).WithId("missEffectTargetYPos").AsCached();
        container.BindInstance(targetZPos).WithId("missEffectTargetZPos").AsCached();
        container.BindInstance(color).WithId("missEffectColor").AsCached();
        container.BindInstance(fontSize).WithId("missEffectFontSize").AsCached();
        container.BindInstance(fadeAnimationCurve).WithId("textEffectFadeAnimationCurve").AsCached();
        container.BindInstance(moveAnimationCurve).WithId("textEffectMoveAnimationCurve").AsCached();
    }
}
```

Make sure not to forget to bind this patch. Since we're patching the installer itself, binding it alongside
the installer we are patching won't work because the `InstallBindings` will be called before our patch is applied.
Instead let's make an `AppInstaller`, because that will be applied when the game initializes.

```c#
internal class AppInstaller : Installer
{
    public override void InstallBindings()
    {
        Container.BindInterfacesTo<GameCoreInstallerHook>().AsSingle();
    }
}
```

Remember to add this to the `Plugin` init too.

```c#
zenjector.Install<AppInstaller>(Location.App);
```

And now we add [inject methods](./zenject.md#methods) to our components, starting with the `MissTextEffect`. Note that
the `_moveAnimationCurve` is part of the base class. We need this so that the movement animation matches the base game's
movement.

```c#
[Inject]
public void Init(
    [Inject(Id = "textEffectFadeAnimationCurve")] AnimationCurve fadeAnimationCurve,
    [Inject(Id = "textEffectMoveAnimationCurve")] AnimationCurve moveAnimationCurve)
{
    this.fadeAnimationCurve = fadeAnimationCurve;
    _moveAnimationCurve = moveAnimationCurve;
}
```

And for `MissTextEffectSpawner` there are quite a few properties. Also, remember to inject the `Pool`.

```c#
[Inject]
public void Init(
    [Inject(Id = "missEffectDuration")] float duration,
    [Inject(Id = "missEffectSpread")] float xSpread,
    [Inject(Id = "missEffectTargetYPos")] float targetYPos,
    [Inject(Id = "missEffectTargetZPos")] float targetZPos,
    [Inject(Id = "missEffectColor")] Color color,
    [Inject(Id = "missEffectFontSize")] float fontSize,
    MissTextEffect.Pool missTextEffectPool)
{
    this.duration = duration;
    this.xSpread = xSpread;
    this.targetYPos = targetYPos;
    this.targetZPos = targetZPos;
    this.color = color;
    this.fontSize = fontSize;
    this.missTextEffectPool = missTextEffectPool;
}
```

Now we're all set up to implement our custom text effect. We just need to figure out how to spawn them. Ultimately,
the goal is to replace the game's "MISS" sprite effect with our own, so let's go back to the `MissedNoteEffectSpawner`
and patch it to replace the `FlyingSpriteSpawner` with our spawner by using a patch.

By using an affinity patch we can inject the `MissTextEffectSpawner` and use it within the patch with ease.

```c#
internal class OnMissEffectPatch(MissTextEffectSpawner missTextEffectSpawner) : IAffinity
{
    private readonly MissTextEffectSpawner missTextEffectSpawner = missTextEffectSpawner;

    [AffinityPrefix]
    [AffinityPatch(typeof(MissedNoteEffectSpawner), nameof(MissedNoteEffectSpawner.HandleNoteWasMissed))]
    private bool HandleNoteWasMissedPrefix(MissedNoteEffectSpawner __instance, NoteController noteController)
    {
        if (noteController.hidden
            || noteController.noteData.time + 0.5f < __instance._audioTimeSyncController.songTime
            || noteController.noteData.colorType == ColorType.None)
        {
            // Do nothing
            return false;
        }

        var position = noteController.inverseWorldRotation * noteController.noteTransform.position;
        position.z = __instance._spawnPosZ;

        // Spawn our miss text effect
        missTextEffectSpawner.SpawnText(
            noteController.worldRotation * position,
            noteController.worldRotation,
            noteController.inverseWorldRotation);

        // Cancel the original implementation
        return false;
    }
}
```

Apart from being syntactically different to the original method we can see from the decompiler, the logic is the same.
We can bind this in the `PlayerInstaller` because this method runs during gameplay, and that's where our effect spawner
is bound too.

```c#
Container.BindInterfacesTo<OnMissEffectPatch>().AsSingle();
```

### Testing

At this point we should be able to see this in action. Open the game with [FPFC](./index.md#launch-args) and open any map.
Using No Fail will help.

![Testing Miss Text](/.assets/images/modding/pc-mod-tutorial-test.jpg 'Testing Miss Text')

## Adding Settings

There are many ways to add interactive menus in to the game, which you can see in the [UI section of this wiki](./bsml.md#adding-menus).

For this guide we will be using a [custom flow coordinator](./bsml.md#custom-flow-coordinator) which will provide plenty
of space to add more features to the UI in the future if we need to.

Before creating the UI, let's decide what features we need it to have.

- We want a setting to toggle the mod off and on - this is for the player's convenience and most mods should have one
- We need a way to input text to change the miss text, we can use the [ModalKeyboard](https://monkeymanboy.github.io/BSML-Docs/Tags/ModalKeyboardTag/)
  for this
- As well as the input, we should also have some [Text](https://monkeymanboy.github.io/BSML-Docs/Tags/TextTag/) to show
  the current miss text
- And finally, we need a way to open the modal keyboard. A simple [Button](https://monkeymanboy.github.io/BSML-Docs/Tags/ButtonTag/)
  can do this

### Creating A Config

To make settings that will save between sessions, we can utilize BSIPA's config. Let's create a config class, and
add it to the plugin init. Instead of making a static config, we should pass it as a param of the `AppInstaller`, then bind
it there so we can inject it anywhere.

```c#
[assembly: InternalsVisibleTo(GeneratedStore.AssemblyVisibilityTarget)]
namespace MissTextChanger;

internal class PluginConfig
{
    public virtual bool Enabled { get; set; } = true;
    public virtual string MissText { get; set; } = "MISS";
}
```

Then add it to the `Plugin` class:

```c#
[Init]
public Plugin(Logger log, Config config,
              PluginMetadata metadata, Zenjector zenjector)
{
    var pluginConfig = config.Generated<PluginConfig>();

    zenjector.Install<AppInstaller>(Location.App, pluginConfig);
    /* ... */
```

And in the installer:

```c#
internal class AppInstaller(PluginConfig pluginConfig) : Installer
{
    private readonly PluginConfig pluginConfig = pluginConfig;

    public override void InstallBindings()
    {
        Container.BindInstance(pluginConfig).AsSingle();
        /* ... */
```

### Implementing The Settings

Before we mess around with the UI, let's make sure we can make these new features work. First, inject the config
into the `PlayerInstaller` so we can use it to stop our bindings from being made:

```c#
internal class PlayerInstaller(PluginConfig pluginConfig) : Installer
{
    private readonly PluginConfig pluginConfig = pluginConfig;

    public override void InstallBindings()
    {
        if (!pluginConfig.Enabled) return;
        /* ... */
```

You can go to the config `.json` file in the `UserData` folder and tweak the settings manually to test that this
is working. Next, let's add the config to the `MissTextEffectSpawner` and use the text property in the
`SpawnText()` method.

```c#
public void SpawnText(
    Vector3 pos, Quaternion rotation, Quaternion inverseRotation)
{
    /* ... */
    var text = pluginConfig.MissText;
    missTextEffect.InitAndPresent(text, duration, targetPos, rotation,
                                  color, fontSize, false);
    /* ... */
}
```

That was simple thanks to zenject. Now let's move on to setting up the UI.

### Adding The UI

Now we will set up the flow coordinator so that we can start playing around with the BSML immediately.
Let's start at the end of the dependency tree with the view controller.

```xml
<vertical>
    <toggle-setting value="Enabled" text="Enabled" apply-on-change="true"/>
    <text text="~KeyboardInput" id="MissText" align="Capline" font-size="8"
          italics="true" bold="true"/>
    <button click-event="ShowInputKeyboard" text="change..."
            pref-height="10" pref-width="27"/>
</vertical>
<modal-keyboard value="KeyboardInput" show-event="ShowInputKeyboard"/>
```

And the host for our view:

```c#
[HotReload(RelativePathToLayout = @".\settingsView.bsml")]
[ViewDefinition("MissTextChanger.Menu.settingsView.bsml")]
internal class SettingsViewController : BSMLAutomaticViewController
{
    [Inject] private readonly PluginConfig pluginConfig = null!;

    [UIComponent("MissText")] private readonly TextMeshProUGUI missText = null!;

    [UIAction("#post-parse")]
    private void PostParse() => SetMissTextPreview(pluginConfig.MissText);

    private bool Enabled
    {
        get => pluginConfig.Enabled;
        set => pluginConfig.Enabled = value;
    }

    private string KeyboardInput
    {
        get => pluginConfig.MissText;
        set
        {
            pluginConfig.MissText = value;
            SetMissTextPreview(value);
        }
    }

    private void SetMissTextPreview(string v) =>
        missText.text = string.IsNullOrEmpty(v) ? "<alpha=#AA>No miss text" : v;
}
```

By using the `HotReload` attribute we can get live updates to the view controller when we change the bsml file,
without having to re-build the mod.

Now for the `FlowCoordinator`, which is responsible for managing our view controller.

```c#
internal class MissTextChangerFlowCoordinator : FlowCoordinator
{
    [Inject] private readonly SettingsViewController settingsViewController = null!;

    public event Action? DidFinish;

    protected override void DidActivate(bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling)
    {
        if (firstActivation)
        {
            showBackButton = true;
            SetTitle(nameof(MissTextChanger));
        }

        if (addedToHierarchy)
        {
            ProvideInitialViewControllers(settingsViewController);
        }
    }

    protected override void BackButtonWasPressed(ViewController topViewController) =>
        DidFinish?.Invoke();
}
```

We're using an action here to signal when we are done so that we don't need an extra dependency to handle returning to the
main flow coordinator. This event will be used by our button manager.

```c#
internal class MenuButtonManager : IInitializable, IDisposable
{
    private readonly MainFlowCoordinator mainFlowCoordinator;
    private readonly MissTextChangerFlowCoordinator missTextChangerFlowCoordinator;
    private readonly MenuButtons menuButtons;
    private readonly MenuButton menuButton;

    public MenuButtonManager(MainFlowCoordinator mainFlowCoordinator, MissTextChangerFlowCoordinator missTextChangerFlowCoordinator, MenuButtons menuButtons)
    {
        this.mainFlowCoordinator = mainFlowCoordinator;
        this.missTextChangerFlowCoordinator = missTextChangerFlowCoordinator;
        this.menuButtons = menuButtons;
        menuButton = new(nameof(MissTextChanger), PresentFlowCoordinator);
    }

    public void Initialize()
    {
        menuButtons.RegisterButton(menuButton);
        missTextChangerFlowCoordinator.DidFinish += DismissFlowCoordinator;
    }

    public void Dispose() =>
        missTextChangerFlowCoordinator.DidFinish -= DismissFlowCoordinator;

    private void PresentFlowCoordinator() =>
        mainFlowCoordinator.PresentFlowCoordinator(missTextChangerFlowCoordinator);

    private void DismissFlowCoordinator() =>
        mainFlowCoordinator.DismissFlowCoordinator(missTextChangerFlowCoordinator);
}
```

That's everything we need to create our UI. Now we just need a `MenuInstaller` to create the bindings.

```c#
internal class MenuInstaller : Installer
{
    public override void InstallBindings()
    {
        Container.BindInterfacesTo<MenuButtonManager>().AsSingle();
        Container.Bind<MissTextChangerFlowCoordinator>().FromNewComponentOnNewGameObject().AsSingle();
        Container.Bind<SettingsViewController>().FromNewComponentAsViewController().AsSingle();
    }
}
```

And of course, remember to add this to the `Plugin` init.

```c#
zenjector.Install<MenuInstaller>(Location.Menu);
```

## Closing Remarks

Under construction.
