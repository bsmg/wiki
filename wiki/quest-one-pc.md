---
prev: false
next: false
description: Mod Beat Saber on Quest 1 using a PC
---

# Quest 1 Modding using a PC

:::danger Quest Modding Information
This Guide **does not work** for Quest 2, Quest 3 or Quest Pro!
:::

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

## Downgrading and Modding information

Due to changes in Metas authentication system it is no longer possible to download downgraded apks
from OculusDB. Instead, you will have to use Quest App Version Switcher, an App made by the Developer
of OculusDB. It will downgrade the game for you. From here on we will refer to Quest App Version Switcher
as "QAVS"

There are two ways to mod Beat Saber on Quest 1.

- Option 1: You Follow QAVS setup assistant and let it patch the game for you. QAVS is capable of installing
  mods, models, etc. and has most features BMBF has.

- Option 2: You only downgrade the game using QAVS and mod with BMBF.

## Downgrading and Modding with QAVS

Make sure Beat Saber is installed\_

1. Download "QuestAppVersionSwitcher" from SideQuest onto your Quest.
2. Open QAVS. If you have Beat Saber installed, it will most likely ask you if you want to start modding.
   Click Start. It will take you step by step through the modding process.

**Note:** QAVS asks you to log in with your Meta account. Make sure to use the account which owns Beat Saber,
otherwise downgrading will not work. This is **required** to authenticate with Meta allowing you to download
older versions.

If QAVS doesn't ask you to start modding Beat Saber, go to the "Tools & Options" tab, select Beat Saber as the
App to manage and then press the "Start setup assistant" button.

3. Go to the "Get Mods" tab and click "open mods page". On that Page you can find all mods currently compatible
   with the version of Beat Saber. Click "Download all Core mods" at the top.

:::danger Do not use BMBF to manage Mods
When modding with QAVS and installing mods with it, switching to BMBF is **not** possible unless you uninstall
all mods installed with QAVS first. Then you can go to BMBF and install them again. Not doing so can and will
lead to problems!
:::

## Downgrading using QAVS and modding using BMBF

Make sure Beat Saber is installed\_

1. Download "QuestAppVersionSwitcher" from SideQuest onto your Quest.
2. Open QAVS. If it asks you if you want to start modding, exit the dialog.
3. Go to the Tools tab and Press login. Login with your Meta account which owns Beat Saber.
4. Select Beat Saber as the game you want to manage in the Tools Tab.
5. Go to the Downgrading Tab. Click "Download latest moddable Version" at the top of the Page.

:::danger Mod Support for Versions after 1.28 is dropped on Quest 1
The latest moddable version on Quest 1 is 1.28. The Quest 1 **does not** support any newer versions.
:::

6. Once the downgraded version is installed, close QAVS and patch the game using BMBF.

## Troubleshooting

If you encounter issues while modding BeatSaber, you can always seek help in the [BSMG Discord](https://discord.gg/beatsabermods).
You can ask any questions in the quest-help channel. Please note that we are all volunteers and there is no on-call
support. So, if no one responds immediately, please be patient. In addition, here are a few troubleshooting steps:

### My Game Does Not Start or Immediately Crashes

There are likely mods causing these issues. Try disabling them one by one to identify which one is causing the problem.

---

### I Can Not Find the Mod Options in the Game

Something may have gone wrong during the modding process. Go to the "Tools" tab in QAVS or BMBF and click
"Uninstall All Mods."
Then open the mod download page and click "Download Core Mods." on QAVS or reinstall core mods in the Tools tab of BMBF.
If that does not resolve the issue, you may need to restart the modding process.

---

### QAVS / BMBF Web Interface is Not Loading

If your QAVS Web Interface is not loading, Make sure you are typing the ip from the tools tab in the quest into your browser.
If it still does not load, make sure you are doing the following:

- BMBF is open in the headset and that your headset is not in sleep mode
- There is http:// at the beginning of the link, not https://
- Your ip has not changed, as it changes from time to time
- You have :50002(QAVS) and :50000(BMBF) at the end of your link
- Your pc and your quest are on the same network (keep in mind that ethernet _can_ mess with the connection,
  try wireless or another device if you have tried all other fixes here)
- You are not using a VPN
- Your ip is not 127.0.0.1
  If none of these work restart your quest and try them all again

---
