---
prev: false
next: false
description: Learn how to mod Beat Saber on your Quest!
---

# Quest Modding

## Preface

- This guide is for Quest 1, Quest 2, Quest Pro, and Quest 3.

- Nobody has yet been banned for modding, however modding does violate Meta's terms of service.

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
for cross-play between PC and Quest and for custom songs to be used. As these are not core mods, if multiplayer is
important to you, ensure those mods are available for your version of Beat Saber before updating to a new version.

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://scoresaber.com/quest) or [BeatLeader](https://beatleader.xyz) mod.
:::

## Requirements

Modding Beat Saber requires accessing your Quest via the Android debug bridge.
Therefore, you will need a PC (Windows / Mac / Linux)
or an Android device.

- If you have a Windows, Mac or Linux computer, visit [Modding on a PC](#preparations)
- If you plan to mod using an Android device, visit the [Modding with Android](./quest/modding-with-android.md) page.
- If you want to use a Linux based computer, you can follow the Raspberry Pi guide. Note that it has only been tested
  on Raspberry Pi OS (Debian) and the process may be different on other distros.
- To use an iOS devices, such as an iPhone or iPad, you need to have a
  [Raspberry Pi](https://www.raspberrypi.com/). Once you have one, visit [Modding with a Raspberry Pi](./quest/modding-with-raspi.md)
  to get started.

::: warning Multiple Accounts
Beat Saber **cannot** be modded if you have multiple accounts on your device!
You will need to temporarily remove any secondary accounts before modding.
:::

::: danger Quest 1 Users
Modding on Quest 1 is only possible on version 1.28 or below of Beat Saber.

Visit the [Modding Quest 1 page](./quest/modding-quest1.md) for modding instructions.
:::

## Preparations

### Developer Mode

To mod your game, you'll need to activate Developer Mode on your Quest.
If you haven't done this already, follow the steps below:

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

:::warning This is an optional step!
SideQuest is not required to mod at this time, but is useful for managing any modded games or other content on your Quest,
so it is good idea to install it.
:::

Go to [SideQuest's Download Page](https://sidequestvr.com/setup-howto)
and download the SideQuest Advanced Installer. Once it's finished downloading, install it.

#### Backup Save Data using SideQuest

:::tip This is an optional step!
If you are modding for the first time you can skip to [Ways to Mod Beat Saber](#ways-to-mod-beat-saber)
:::

Open SideQuest and connect your Quest to your PC.

Navigate to `sdcard/Android/data/com.beatgames.beatsaber/files` using the SideQuest file explorer.

![SideQuest Files](/.assets/images/beginners-guide/sqfiles.png)

Save the files: `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` into a folder on your PC. Do not lose these, as they
contain your scores and other settings!

#### Restoring Save Data using SideQuest

:::tip This is an optional step!
This is only needed if you have [backup save data](#backup-save-data-using-sidequest) you want to restore.
Most mod installers will do this for you, but it's good to have the backup in case something goes wrong!
:::

To restore your data, open SideQuest and connect your Quest to your PC.  
Using the SideQuest file explorer, take the 3 files you saved from the [Backup Save Data using SideQuest](#backup-save-data-using-sidequest)
steps `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` and put them in the
`sdcard/Android/data/com.beatgames.beatsaber/files` folder.

## Ways to Mod Beat Saber

Currently, the easiest way to mod your game is using [ModsBeforeFriday](#modsbeforefriday),
a simple browser app that can get your mods installed in minutes.

[QuestPatcher](#questpatcher) is a more advanced tool that runs as an app on your PC.
It is a good option if your internet connection is unstable
and you need an offline solution to managing your mods,
however it **cannot downgrade Beat Saber** so it might not be possible to use
if the latest Beat Saber version isn't moddable.

If your game has not yet been modded, you should use [ModsBeforeFriday](#modsbeforefriday) to downgrade it if necessary.

:::danger BMBF Deprecation
BMBF no longer works for modding Beat Saber on the Quest 2 or 3!
Do not attempt to mod with BMBF because it **will not work**.
You need to use [ModsBeforeFriday](#modsbeforefriday) instead.
:::

:::warning
QAVS currently cannot be used to correctly downgrade Beat Saber
to the latest moddable version or patch Beat Saber.

This is a temporary situation and may change soon.
You need to downgrade **and patch** with [ModsBeforeFriday](#modsbeforefriday) instead.

If you have been instructed by somebody who knows what they're talking about to use QAVS,
head to [Modding With QAVS](./quest/modding-with-qavs.md) to get started.
:::

### ModsBeforeFriday

ModsBeforeFriday (MBF) is an easy to use tool for modding Beat Saber that runs in your browser.

If you are using a PC or Mac head to [Modding with ModsBeforeFriday](./quest/modding-with-mbf.md) to get started.

Android users should visit [Modding with Android](./quest/modding-with-android.md) instead.

### QuestPatcher

QuestPatcher is a GUI based mod installer for any il2cpp unity app on the Oculus Quest that runs on Windows, Linux, or macOS.

If you have not already, go to [Preparations](./quest-modding.md#preparations) and follow those steps.
You should now have Developer Mode enabled and SideQuest Advanced installed on your PC.

1.  Download and install QuestPatcher from [here](https://github.com/Lauriethefish/QuestPatcher/releases/latest)
    :::danger WARNING
    QuestPatcher **cannot** be used to downgrade your Beat Saber,
    so only use it if you are confident that you already have the latest moddable version installed!
    :::
2.  If you have ever used QuestPatcher before for any purpose, go to tools and click `Quick Fix`.
3.  Patch Beat Saber (or repatch in the tools tab if you have already)
    - Make sure `Scotland2` is selected as the ModLoader.
4.  Install the core mods, and other mods from [this page](https://bsquest.xyz/mods)

### QAVS

::: warning
Due to a software update, QAVS **cannot** be used to patch Beat Saber at this time.
Use [ModsBeforeFriday](./quest/modding-with-mbf.md) instead.
:::
