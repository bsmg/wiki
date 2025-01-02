---
prev: Harmony Patching
next: Zenject Essentials
---

# BeatSaberMarkupLanguage Introduction

[BeatSaberMarkupLanguage (BSML)](https://github.com/monkeymanboy/BeatSaberMarkupLanguage) is the most common way to
create customized UI in Beat Saber. BSML is effectively a tag-based language that mimics the GameObject hierarchy
of Unity. It parses tags into GameObjects, and attaches the relevant Unity and Beat Saber UI elements to them.

The documentation for all BSML components can be found [here](https://monkeymanboy.github.io/BSML-Docs/).

## Getting Set Up

Of course, if you want to add BSML in your mod, make sure that you have it installed in your game, and your project
is referencing BSML.

If you're using Rider, you may have to add a file association for `.bsml` files to get basic syntax highlighting. To
do this, go to `File | Settings | Editor | File Types` and search for `XML`. Add a new file name pattern as `*.bsml`.
This will make Rider accept `.bsml` files as XML files and do highlighting accordingly.

To get autocompletion in a BSML file, you will need to provide a schema. A way to do this is to use the background tag
and add the schema to it:

```xml
<bg xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'
    xsi:noNamespaceSchemaLocation='https://monkeymanboy.github.io/BSML-Docs/BSMLSchema.xsd'>

</bg>
```

Rider may prompt you that the resource is not found. Simply right click on the URL, or press `Alt+Enter`, and select
fetch external resource.

Once set up, you should have basic autocompletion for tags if you start typing inside the `<bg>` tag.

## Running Code in the Menu

There are a couple different ways you can display your BSML in game, however, it is first important to note that
you should not call any of the methods mentioned below outside of the main menu. You should make sure the game has finished
loading the main menu before doing anything.

- The recommended method, if you don't already use SiraUtil, is BSML's own `MainMenuAwaiter` class that has an
  [event](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/) called `MainMenuInitializing`
  that is invoked when the main menu loads
- If you are using SiraUtil, it is recommended to bind a type with a `Location.Menu`, or on the `MainSettingsMenuViewControllersInstaller`
- BS Utils also provides events in `BSEvents` and they are called `earlyMenuSceneLoadedFresh` and `lateMenuSceneLoadedFresh`
- You can use the game's `GameScenesManager` and the `transitionDidFinishEvent`, then check if the output `ScenesTransitionSetupDataSO`
  is a `MenuScenesTransitionSetupDataSO` using a
  [type test expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast)
- If you want to get an event when the main menu loads yourself, you can use Unity's
  [SceneManager](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/SceneManagement.SceneManager.html)
  and check the name of the loaded scene manually, however this is a lot more effort than all of the other methods
- You could also use a Harmony patch into a method that will run every time the menu reinitializes, but this is also unnecessarily
  complicated

## Adding Menus

Once you have code running in the main menu, it's time to decide where you want to display your UI.

### Mod Settings

The mod settings menu is added by BSML and can be accessed from a custom button in the main menu settings. To register
your own tab, check the `BSMLSettings` class.

```c#
private readonly TutorialMenu tutorialMenu = new TutorialMenu();

public void AddSettingsMenu()
{
    BSMLSettings.Instance.AddSettingsMenu(
        name: "Tutorial Mod",
        resource: "TutorialMod.tutorial.bsml",
        host: tutorialMenu);
}
```

![Mod Settings Screenshot](/.assets/images/modding/pc-mod-bsml-settings.jpg 'Mod Settings Screenshot')

### Gameplay Setup

The mods tab is added by BSML in the Gameplay Setup menu, which is found to the left of the song list, where
you can normally find player settings and gameplay modifiers. To register a new tab, check the `GameplaySetup` class.

```c#
private readonly TutorialMenu tutorialMenu = new TutorialMenu();

public void AddTab()
{
    GameplaySetup.Instance.AddTab(
        name: "Tutorial Mod",
        resource: "TutorialMod.tutorial.bsml",
        host: tutorialMenu);
}
```

![Mod Tabs Screenshot](/.assets/images/modding/pc-mod-bsml-tabs.jpg 'Mod Tabs Screenshot')

### Custom Flow Coordinator

BSML gives you a way to create a button in the left screen of the main menu. This button can do anything you want it
to do, but most modders make it present their mod's UI. This is done by using a `FlowCoordinator`, and by adding one
or more `ViewController` objects to it.

BSML provides methods to create both flow coordinators and view controllers, which makes this process a lot cleaner.

BSML has a few choices of view controller types you can inherit; we are going to use the `BSMLAutomaticViewController`
because it has the option of hot reloading the menu when you make changes to the bsml file.

```c#
[ViewDefinition("TutorialMod.tutorial.bsml")]
public class TutorialViewController : BSMLAutomaticViewController
{

}
```

The flow coordinator is responsible for managing view controllers. `FlowCoordinator` has many members that you can use
or override, so it's worth checking out the code for it.

```c#
public class TutorialFlowCoordinator : FlowCoordinator
{
    // Do not call the constructor of the view controller because it is a MonoBehaviour
    private readonly TutorialViewController tutorialViewController = BeatSaberUI.CreateViewController<TutorialViewController>();

    // Called immediately when the flow coordinator is activated
    protected override void DidActivate(bool firstActivation, bool addedToHierarchy, bool screenSystemEnabling)
    {
        if (firstActivation)
        {
            // Sets the title text in the top bar
            SetTitle("Tutorial Mod");
            showBackButton = true;
        }

        if (addedToHierarchy)
        {
            ProvideInitialViewControllers(tutorialViewController);
        }
    }

    protected override void BackButtonWasPressed(ViewController topViewController)
    {
        // Return to the main menu when the back button is pressed
        BeatSaberUI.MainFlowCoordinator.DismissFlowCoordinator(this);
    }
}
```

The code below is related to managing the menu button. We tell the `MainFlowCoordinator` to present our own
flow coordinator. You can also have your own way to dismiss your flow coordinator but, in the example above,
we are relying on the back button to do this.

```c#
private readonly TutorialFlowCoordinator tutorialFlowCoordinator;
private readonly MenuButton menuButton;

public MenuManager()
{
    tutorialFlowCoordinator = BeatSaberUI.CreateFlowCoordinator<TutorialFlowCoordinator>();
    menuButton = new MenuButton("Tutorial Mod", ShowFlowCoordinator);
}

public void AddMenuButton()
{
    MenuButtons.Instance.RegisterButton(menuButton);
}

private void ShowFlowCoordinator()
{
    BeatSaberUI.MainFlowCoordinator.PresentFlowCoordinator(tutorialFlowCoordinator);
}
```

![Mod Buttons Screenshot](/.assets/images/modding/pc-mod-bsml-buttons.jpg 'Mod Buttons Screenshot')

### Floating Screen

A floating screen, which can be placed anywhere and even moved by the player

![Floating Screen Screenshot](/.assets/images/modding/pc-mod-bsml-floating-screen.jpg 'Floating Screen Screenshot')

Under construction.
