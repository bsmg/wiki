---
prev: false
next: false
description: Mod Beat Saber on Quest 2, 3 and Pro using a PC
---

# Quest 2, 3 and Pro Modding using a PC

If you have not already, go to [Preparations](./quest-modding-old#preparations) and follow those steps.
You should now have Developer Mode enabled and SideQuest Advanced installed on your PC.
It is recommended to disable the proximity sensor of your quest in the SideQuest device settings.
This prevents it from going into sleep mode during the modding process. Alternatively you can tape
up the sensor between the lenses.

:::warning
Make sure you do not have multiple accounts on your Quest!

Modding currently does not work with multiple accounts.
You will need to temporarily remove all secondary accounts before modding the game.
You can add them back once the modding process is completed.
:::

Make sure you have an unmodded version of Beat Saber installed on your Quest.

## Downgrading information

Due to changes in Metas authentication system it is no longer possible to download downgraded apks
from OculusDB. Instead, you will have to use Quest App Version Switcher, an App made by the Developer
of OculusDB. It will downgrade the game for you. From here on we will refer to Quest App Version Switcher
as "QAVS"

## Connecting your Quest

Connect your Quest to your PC using a USB cable. A little notification will appear inside the headset.
Click it to allow access to the Quest.

## Downgrading

Make sure Beat Saber is installed\_

1. Download "QuestAppVersionSwitcher" from SideQuest onto your Quest.
2. Open QAVS. If it asks you if you want to start modding, exit the dialog.
3. Go to the Tools tab and Press login. Login with your Meta account which owns Beat Saber.
4. Select Beat Saber as the game you want to manage in the Tools Tab.
5. Go to the Downgrading Tab. Click "Download latest moddable Version" at the top of the Page.
6. Once the downgraded version is installed, close QAVS. **DO NOT PATCH THE GAME WITH IT!**

## Modding Beat Saber

:::warning If you already have Quest Patcher

- Make sure that it's up-to-date
- If you had it open before, restart it, otherwise it will cause issues
  :::

1. Download and install QuestPatcher from [here](https://github.com/Lauriethefish/QuestPatcher/releases/latest)
2. Make sure your Quest is Connected to your PC
3. Open QuestPatcher. It should start loading. In most cases it selects Beat Saber as default.
   If not, you can select Beat Saber inside the Tools tab after it has loaded.

**Note:** depending on your Computers speed loading can take anywhere between 30 seconds and 15 minutes.
This is because it pulls the game from the Quest onto your PC. The game has a size of 2 gigabytes,
so make sure you have enough free storage.

4. It should ask you if you want to patch Beat Saber. If so, select "QuestLoader" as the modloader.
5. Click "Patch my Game" and wait until it's finished. Make sure your Quest doesn't disconnect.
6. Open the [Beat Saber mods Page](https://computerelite.github.io/tools/Beat_Saber/questmods.html) and select
   your game version at the top.
7. Click "Download all Core mods" and install the downloaded file via the mods tab inside Quest Patcher

You are now modded. You can install any mod on that page the same way as the core mods. Make sure that
you only use mods which are made for your version of beatsaber and end in the .qmod extension. Mods
which end in .dll **will not work** as these are pc mods.

You can add new mods at any time by just opening up Quest Patcher again.

## Troubleshooting

If you encounter issues while modding BeatSaber, you can always seek help in the [BSMG Discord](https://discord.gg/beatsabermods).
You can ask any questions in the quest-help channel. Please note that we are all volunteers and there is no on-call
support. So, if no one responds immediately, please be patient. In addition, here are a few troubleshooting steps:

### My Game Does Not Start or Immediately Crashes

There are likely mods causing these issues. Try disabling them one by one to identify which one is causing the problem.

---
