---
prev: false
next: false
description: Learn how to mod Beat Saber on your Quest!
---

# Quest Modding

## Preface

This guide is for the following VR Headsets:

- Quest 1
- Quest 2
- Quest 3
- Quest Pro

_Nobody has yet been banned for modding._

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

**Due to recent Changes it is currently not possible to mod Beat Saber on Quest 2, Quest 3 or Quest Pro without a PC!**

The Quest 1 can still be done with a mobile Phone or Tablet.
**Note:** iOS devices like iPhones or iPads, Apple Watches or the Apple Vision Pro are not supported!

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

This is only required if you mod with a PC or want to back up your data.
Go to [SideQuest's Download Page](https://sidequestvr.com/setup-howto)
and download the SideQuest Advanced Installer. Once it's finished downloading, install it.

### Backup Save Data using SideQuest

:::tip This is an optional step!
If you are modding for the first time you can skip to [Ways to Mod Beat Saber](#ways-to-mod-beat-saber)
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

## Modding BeatSaber

If you want to mod Beat Saber on Quest 1 with an Android Device, follow [this Guide](./support/modding-with-android.md)

If you want to mod Beat Saber on Quest 1 with a PC, follow [this Guide](./quest-one-pc.md)

If you want to mod Beat Saber on Quest 2, 3 or Pro, follow [this Guide](./quest-other.md)
