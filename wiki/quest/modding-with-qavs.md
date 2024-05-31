---
prev: false
next: false
description: Learn how to mod Beat Saber on your Quest using QAVS!
---

# Quest Modding using QAVS

## Before You Begin

:::danger Quest Modding Information
QAVS does not support Quest 3 at this time.
Additionally, as of the Quest v63 update, the Quest 2 and Pro are no longer moddable using QAVS.

If you do not know exactly why you want to use QAVS,
head back to [Preparations](./quest-modding.md#Preparations) and choose a different tool.
:::

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

Make sure you have a unmodded version of BeatSaber installed on your Quest.

## Connecting Your Quest to SideQuest

Take a USB cable and connect your Quest to your PC. Inside your Quest, two dialogs should pop up (if you are doing this
step for the first time). One dialog asks for permission for the PC to access the Quest's files. Click "Accept".
The other dialog asks if you want to trust the computer. Click "Always Trust" so it does not show up again.

Once you have done that, open SideQuest and look at the top left corner. If there is a green dot, everything is
working and your Quest is connected.

![SidequestConnected](/.assets/images/beginners-guide/sqConnected.png)

If it is red, try the following troubleshooting options:

- Reconnect the Quest to your PC
- Restart SideQuest and/or your PC
- Try using a different USB cable

## Installing QAVS

Navigate to the SideQuest start page within the app. You should find a search field there. Type "Quest App Version Switcher"
and press Enter.

![sqSearch](/.assets/images/beginners-guide/sqSearch.png)

In the search results, you should see a program by ComputerElite. Click the download/sideload button.
You will see a red notification at the top of the app indicating that the app is being installed. Once the installation
is complete, a green notification will appear in the top right corner. Now you can disconnect the Quest from your PC.

## Starting the modding process

Go to the app menu in your headset. In the top right corner, there should be a filter option where you can select
"unknown sources." If "Quest App Version Switcher" does not appear there, try installing it via SideQuest again.

![UnknownSources](/.assets/images/beginners-guide/quest_home-menu.jpg)

Start QAVS. If you have BeatSaber installed, you should see a screen that asks if you want to start
modding BeatSaber. Depending on the latest moddable version, you might be prompted to downgrade. You will need to log in
with the Meta account on which you purchased the game.

While modding BeatSaber, QAVS will ask you for app permissions. If it does, enable the slider and press the arrow in
the top left corner. It might also ask you for folder permissions. If so, press the "use this folder" button at the bottom
of the screen. **Do not** navigate into another folder when doing this, as it could cause problems.

Once modding is done, you will be brought to the main menu. It will probably still install dependencies, so do not close
it immediately. You should get a notification once it is finished.

:::warning Restoring Popup
You might encounter a popup that informs you about having an unofficial version of BeatSaber installed. If this happens,
**do not** click on "Restore", as doing so will uninstall the modded version of BeatSaber. The same caution applies to
the "Update App" popup. Clicking "Update" will lead to the same outcome.
:::

## Installing Mods, Custom Songs, Models and external sources

### Installing Mods

You can install mods directly within QAVS. Before installing any other mods, it is recommended to install CrashReporter first.
CrashReporter is a mod that uploads crash reports to [this site](https://analyzer.questmodding.com/crashes), allowing
you to view logs if your game crashes and you are unable to start it again.

Once you have installed CrashReporter, start your game. In the main menu, press the settings button, then choose
"Mod Settings" and select "QuestUI" on the left.
Click on "CrashReporter." A menu will appear where you can configure CrashReporter. Enable full log and set a user ID
that you can remember.

#### Accessing the Mods Page

In QAVS, navigate to the "Get Mods and Cosmetics" tab and click "Open BeatSaber Mods Page." This will open a browser
where you can see all mods compatible with your version. Find the mods you want and click the download button.

:::danger DO NOT download every mod you find!
It is recommended to only downloading mods that you understand and are familiar with. This can help prevent crashes and troubleshooting.
:::

After downloading the desired mods, click
"Quest App Version Switcher" at the top to return to QAVS. Finally, check if the mods appear in the "Installed Mods" tab.
It might take a moment for them to finish installing.

### Downloading Songs

In the main menu of BeatSaber is a "More Songs" button in the menu on the left. There you can download every Song listed
on [BeatSaver](https://beatsaver.com). It is recommended to install the "BetterSongSearch" mod since it provides more
search features.

### Installing Models

To install models such as Sabers and Walls, go to the "Get Mods and Cosmetics" tab within QAVS. Click "Open Website Hub,"
scroll down, and select the model site. You can download models by clicking on the download link. Once you have downloaded
all the models you want, click "Quest App Version Switcher" at the top to return to QAVS.

### Installing from Your PC

::: danger Warning
We **strongly** advise against installing mods that do not originate from official mod sites. Unverified mods could
potentially contain viruses. We do not provide support for any such mods.
:::

::: warning PC Mods Do Not Work on Quest!
Only mods with the ".qmod" extension work on Quest. Mods downloaded from sources like BeatMods will not work.
:::

QAVS provides a web interface that you can open on your PC. Ensure you are connected to the same network as your Quest;
otherwise, this will not work. In the "Tools and Options" tab of QAVS, you will find an IP address that you can input into
your browser (e.g., `http://10.0.0.2:50002`). Make sure to use `http:` and not `https:` at the beginning.

If everything is set up correctly, a page should open that resembles QAVS. You can access most of QAVS's features from there
and upload your own files (`.qmod`, `.whacker`, etc.).

## Troubleshooting

If you encounter issues while modding BeatSaber, you can always seek help in the [BSMG Discord](https://discord.gg/beatsabermods).
You can ask any questions in the quest-help channel. Please note that we are all volunteers and there is no on-call
support. So, if no one responds immediately, please be patient. In addition, here are a few troubleshooting steps:

### My Game Does Not Start or Immediately Crashes

There are likely mods causing these issues. Try disabling them one by one to identify which one is causing the problem.

---

### I Can Not Find the Mod Options in the Game

Something may have gone wrong during the modding process. Go to the "Tools" tab in QAVS and click "Uninstall All Mods."
Then open the mod download page and click "Download Core Mods." If that does not resolve the issue, you may need to
restart the modding process.

---

### QAVS Web Interface is Not Loading

If your QAVS Web Interface is not loading, Make sure you are typing the ip from the tools tab in the quest into your browser.
If it still does not load, make sure you are doing the following:

- BMBF is open in the headset and that your headset is not in sleep mode
- There is http:// at the beginning of the link, not https://
- Your ip has not changed, as it changes from time to time
- You have :50002 at the end of your link
- Your pc and your quest are on the same network (keep in mind that ethernet _can_ mess with the connection,
  try wireless or another device if you have tried all other fixes here)
- You are not using a VPN
- Your ip is not 127.0.0.1
  If none of these work restart your quest and try them all again

---

### The Mods Do Not Appear in the Game

After installing mods, be sure to wait for QAVS finishing installing them. Additionally, not all mods have visible
effects. Some mods place their settings on the left side of the main menu, while others can be found in the mod settings
under Quest UI.

---
