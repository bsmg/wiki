---
prev: false
next: false
---

# Quest Modding

## Preface

- This guide is for both Quest 1, Quest 2, and Quest 3.

- Nobody has yet been banned for modding.

::: danger DISCLAIMER
By choosing to use mods, you understand that:

- You may experience problems that don't exist in the vanilla game. 99.9% of bugs, crashes, and lag are due to mods.
- Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens,
  as modders are volunteers with real lives.
- Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods,
  but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa -
modders and game developers are two separate groups. Just don't be a jerk ok.
:::

:::warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives?
We at BSMG **strongly** advise against using any video tutorials for modding. Often, we find that they are either
outdated or contain incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods).
:::

:::warning
Modding your game will disable Official Multiplayer as well as viewing and uploading scores on the
base game leaderboards.
If you would like to play modded multiplayer, you need the mods, `Beat Together` and `MultiplayerCore`, which allows
for cross-play between PC and Quest and for custom songs to be used.

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://scoresaber.com/quest) or [BeatLeader](https://beatleader.xyz) mod.
:::

## Requirements

Modding Beat Saber involves installing APKs on your Quest. Therefore, you will need a PC (Windows / Mac / Linux)
or an Android device at least once.

:::tip NOTE
The latest moddable Beat Saber version for Quest is `1.28.0`.

- If you are using BMBF and want to downgrade, refer to the [Downgrading Guide for BMBF](./quest-modding-bmbf.md#downgrading-beat-saber).
- QAVS walks you through the downgrade process automatically.

:::

If you plan to mod using an Android device, visit the [Modding with Android](./support/modding-with-android.md) page.

To use Chromebooks and iOS devices, such as iPhones or iPads, you need to have a
[Raspberry Pi](https://www.raspberrypi.com/). Once you have one, visit [Modding with a Raspberry Pi](./raspi-modding.md)
to get started.

If you want to use a Linux based computer, you can follow the Raspberry Pi guide. Note that it has only been tested
on Raspberry Pi OS (Debian) and the process may be different on other distros.

For Windows and Macs, continue reading below.

## Preparations

### Developer Mode

To mod your game, you'll need to activate Developer Mode on your Quest. If you haven't done this already,
follow the steps below:

1. Go to the [Meta's Developer Website](https://developer.oculus.com/manage/organizations/create/) and log in with the
   Meta account that your Quest is bound to.
2. If you haven't already, set up 2FA (Two-Factor Authentication) on your Meta Account, as it's required to create an Organization.
   ![2FA](/.assets/images/beginners-guide/2fa.png)
3. Return to the [Meta's Developer Website](https://developer.oculus.com/manage/organizations/create/) and create a new
   Organization. The name you choose for it doesn't matter.
   ![DevModeCreateOrg](/.assets/images/beginners-guide/DevModeCreateOrg.png)
4. Open the Meta Quest Phone app and navigate to the Quest's settings. You should find an option to enable
   Developer Mode. Refer to the illustrated guide below:
   ![iOSHowTo](/.assets/images/beginners-guide/EnableDevModeIOS.png)

### SideQuest

This is only required if you mod with a PC (Windows / Mac / Linux). Go to [SideQuest's Download Page](https://sidequestvr.com/setup-howto)
and download the SideQuest Advanced Installer. Once it's finished downloading, install it.

### Backup Save Data using SideQuest

:::tip This is an optional step!
If you are modding for the first time you can skip to [Ways to Mod Beat Saber](#ways-to-mod-beatsaber)
:::

Open SideQuest and connect your Quest to your PC.

Navigate to `sdcard/Android/data/com.beatgames.beatsaber/files` using the SideQuest file explorer.

![SideQuest Files](/.assets/images/beginners-guide/sqfiles.png)

Save the files: `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` into a folder on your PC. Do not lose these, as they
contain your scores and other settings!

### Restoring Save Data using SideQuest

:::tip This is an optional step!
This is only needed if you have [backup save data](#backup-save-data-using-sidequest) you want to restore.
:::

To restore your data, open SideQuest and connect your Quest to your PC.  
Using the SideQuest file explorer, take the 3 files you saved from the [Backup Save Data using SideQuest](#backup-save-data-using-sidequest)
steps `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` and put them in the
`sdcard/Android/data/com.beatgames.beatsaber/files` folder.

## Ways to Mod Beat Saber

Currently, there are three ways to mod your game: you can either use BMBF, QAVS (QuestAppVersionSwitcher), or QuestPatcher.

:::warning Quest 3 Modding Information
Quest 3 modding is only possible using [QuestPatcher](#questpatcher). BMBF and QAVS does not support Quest 3 at this time.
:::

### BMBF

BMBF is generally easier to understand for beginners with a simpler UI compared to QAVS, but lacks a built-in downgrading
option. If you use BMBF to mod, you will need a PC every time you update Beat Saber.

Visit [Modding With BMBF](./quest-modding-bmbf.md) to get started.

### QAVS

QAVS is recommended for people who are using an Android device or don't have access to a computer at all times. It has
built-in downgrading, which means you don't need to use a PC or phone every time you want to update Beat Saber to the
latest moddable version.

Visit [Modding With QAVS](./quest-modding-qavs.md) to get started.

### QuestPatcher

QuestPatcher is a GUI based mod installer for any il2cpp unity app on the Oculus Quest that runs on Windows, Linux, or macOS.

If you have not already, go to [Preparations](./quest-modding.md#preparations) and follow those steps.
You should now have Developer Mode enabled and SideQuest Advanced installed on your PC.
It is recommended to disable the proximity sensor of your quest in the SideQuest device settings.
This prevents it from going into sleep mode during the modding process. Alternatively you can tape
up the sensor between the lenses.

:::warning
Make sure you do not have multiple accounts an your Quest!

Modding currently does not work with multiple accounts.
You will need to temporarily remove all secondary accounts before modding the game.
You can add them back once the modding process is completed.
:::

1. Download and install [QuestPatcher](https://github.com/Lauriethefish/QuestPatcher/releases/latest)
2. When patching, make sure `QuestLoader` is selected, or your mods will not load.
3. Patch Beat Saber (or re-patch in the tools tab if you have already)
4. Install the core mods, and other mods you would like from [this page.](https://computerelite.github.io/tools/Beat_Saber/questmods.html)
