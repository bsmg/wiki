---
prev: Setup Guide
next: Decompiling
---

# Object Inspectors

An essential tool for modding is a game object inspector.

## Runtime Unity Editor

[Runtime Unity Editor (RUE)](https://github.com/ManlyMarco/RuntimeUnityEditor) is a tool that we can use to look at different
components in-game while playing. It will allow us to find objects by name, components attached to GameObjects, and
tweak properties of these while the game is running.

It's important to get used to using RUE because figuring out the game through code will take ten times as much trial-and-error.
In order to get RUE, currently, you can download it from a pinned message you will find in the `#pc-mod-dev` channel in the
[BSMG discord](https://discord.gg/beatsabermods).

You will have to [manually install](/wiki/pc-modding.md#manual-installation) RUE by dragging the Libs and Plugins within
the zip into your game. Once installed, you can open the game in FPFC mode, then press `G` to open RUE.

You can configure the keybinding in `/UserData/Runtime Unity Editor (BSIPA).json` which is recommended because `G` is also
the default keybinding for SiraUtil's FPFC toggle feature.

![RUE Screenshot 1](../../.assets/images/modding/pc-mod-rue1.jpg 'RUE Screenshot 1')

![RUE Screenshot 2](../../.assets/images/modding/pc-mod-rue2.jpg 'RUE Screenshot 2')

## UnityExplorer

An alternative to Runtime Unity Editor is [UnityExplorer](https://github.com/yukieiji/UnityExplorer),
which is also regularly used for Beat Saber modding. You can find all details on how to install UnityExplorer
[here](https://github.com/yukieiji/UnityExplorer#standalone), but, because we use BSIPA, you will have to either build
it yourself or search around in BSMG for someone who has already done this.
