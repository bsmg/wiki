---
prev: false
next: false
description: Learn how to create your own PC mods!
---

# Testing

It's important to make sure your mod doesn't unintentionally break base game functionality or other mods.
This page contains tips on how to test your mod properly.

## Testing Checklist

- If your mod affects something while playing a map, make sure to test all the modes (Solo, Campaign, Party, Online,
  and Tutorial). There are variations between the modes so a class or an object you expect to exist might not be there
  or could have a different name!
- Check that things still work properly after an internal restart. The easiest way to make the game internally restart
  is to go to Settings and press OK. The game will destroy and recreate various objects when this happens so you need to
  make sure your mod is picking up the new instances properly.
- Try to test with as many publicly available mods installed as you can. There might be some unexpected conflicts!
- Use a debug Unity build while testing as explained below.

## Using a Debug Unity Build

::: warning IMPORTANT
It is **highly recommended** to test your mod by using a debug Unity build, especially if you are doing any kind of
multithreading. It helps identify issues that can result in hard crashes to desktop that are otherwise very hard
to debug since Unity strips a lot of checks on release builds. Mods are tested using a debug build when being reviewed
for approval on [BeatMods](https://beatmods.com) and any exception thrown by Unity is grounds for denial.
:::

First, download the version of Unity the game is using. We highly recommend using
[Unity Hub](https://unity.com/unity-hub) to manage your Unity installations. The game's Unity version won't usually be
available directly in the Hub application since it's usually an older LTS version, but you can find all Unity versions
in [the Unity download archive](https://unity.com/releases/editor/archive). You can find the current version of Unity
the game is using by checking your logs; it'll be right above the list of plugins:

```log
...
[INFO @ 00:00:00 | IPA] Beat Saber
[INFO @ 00:00:00 | IPA] Running on Unity 2022.3.33f1
[INFO @ 00:00:00 | IPA] Game version 1.40.4
[INFO @ 00:00:00 | IPA] -----------------------------
[INFO @ 00:00:00 | IPA] Loading plugins from Plugins and found 1
[INFO @ 00:00:00 | IPA] -----------------------------
...
```

Once you've installed the required version of Unity, navigate to the install folder. In Unity Hub, you can do this
by going to the _Installs_ tab, pressing the cog on the top right corner of the version's box, and pressing
_Show in Explorer_.

![Unity Hub Installs Page](/.assets/images/modding/testing-unity-hub.png)

Once you've opened the folder, navigate to
`Data\PlaybackEngines\windowsstandalonesupport\Variations\win64_player_development_mono`. The contents should look
like below.

![Unity's win64_player_development_mono folder](/.assets/images/modding/testing-unity-playbackengine.png)

Select and copy the `UnityCrashHandler`, `UnityPlayer`, `WindowsPlayer`, and `WinPixEventRuntime` files as shown above,
then paste them into your Beat Saber installation's folder. This will overwrite some files; feel free to move or rename
the files that would be overwritten out if you want to swap between the release & debug builds more easily. Once you've
pasted the new files, delete/rename/move the `Beat Saber.exe` file, and rename `WindowsPlayer.exe` to `Beat Saber.exe`.

::: details Using a Batch script to swap between debug and release
If you want to swap between a release and a debug build often, you can use a batch script like the one below. Simply
add `.bak` to `UnityPlayer.dll`, `UnityCrashHandler64.exe`, and `Beat Saber.exe` (make sure you have file extensions
enabled in Windows Explorer or else this won't work properly), then copy the files from `win64_player_development_mono`
as explained above. Once that's done, create a new file called `debug.bat` (or whatever name you want as long as it
ends in `.bat`) and paste the contents below into that file. Double-click this new file to swap between the release
and debug builds.

```batch
move UnityPlayer.dll UnityPlayer.dll.tmp
move UnityPlayer.dll.bak UnityPlayer.dll
move UnityPlayer.dll.tmp UnityPlayer.dll.bak

move UnityCrashHandler64.exe UnityCrashHandler64.exe.tmp
move UnityCrashHandler64.exe.bak UnityCrashHandler64.exe
move UnityCrashHandler64.exe.tmp UnityCrashHandler64.exe.bak

move "Beat Saber.exe" "Beat Saber.exe.tmp"
move "Beat Saber.exe.bak" "Beat Saber.exe"
move "Beat Saber.exe.tmp" "Beat Saber.exe.bak"
```

:::

That's it! You should now be able to start the game as usual. If all went according to plan, you should see the
"Development Build" text at the bottom right of the screen when in FPFC, and whenever an error occurs the development
console will show up on the game window.

![Beat Saber running a debug build](/.assets/images/modding/testing-beat-saber-debug.jpg)
