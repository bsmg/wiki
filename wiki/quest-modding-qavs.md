---
prev: false
next: false
---

# Quest Modding using QAVS

## Before You Begin

If you haven't already, go to [Preparations](./quest-modding.md#preparations) and follow those steps.
You should now have Developer Mode enabled and SideQuest Advanced installed on your PC.
It's recommended to tape up the proximity sensor between the lenses of your Quest. This prevents it from
going into sleep mode during the modding process.

Make sure you do not have multiple accounts an your Quest! Modding currently doesn't work with multiple accounts.
You can add them back once the modding process is completed.

Make sure you have a unmodded version of BeatSaber installed on your Quest.

## Connecting Your Quest to SideQuest

Take a USB cable and connect your Quest to your PC. Inside your Quest, two dialogs should pop up (if you're doing this
step for the first time). One dialog asks for permission for the PC to access the Quest's files. Click "Accept".
The other dialog asks if you want to trust the computer. Click "Always Trust" so it doesn't show up again.

Once you've done that, open SideQuest. Look at the top left corner. If there is a green dot, everything is
working and your Quest is connected. If it is red, try reconnecting the Quest. Alternatively, restart SideQuest
and/or your PC or try a different cable.

## Installing QAVS

Navigate to the SideQuest start page within the app. You should find a search field there. Type "Quest App Version Switcher"
and press Enter. In the search results, you should see a program by ComputerElite. Click the download/sideload button.
You will see a red notification at the top of the app indicating that the app is being installed. Once the installation
is complete, a green notification will appear in the top right corner. Now you can disconnect the Quest from your PC.

## Starting the modding process

Go to the app menu in your headset. In the top right corner, there should be a filter option where you can select
"unknown sources." If "Quest App Version Switcher" doesn't appear there, try installing it via SideQuest again.

Start QAVS. If you have BeatSaber installed, you should see a screen that asks if you want to start
modding BeatSaber. Depending on the latest moddable version, you might be prompted to downgrade. You'll need to log in with
the Meta account on which you purchased the game. (Don't worry, your credentials won't be shared with anyone.)

While modding BeatSaber, QAVS will ask you for app permissions. If it does, enable the slider and press the arrow in
the top left corner. It might also ask you for folder permissions. If so, press the "use this folder" button at the bottom
of the screen. **Do not** navigate into another folder when doing this, as it could cause problems.

Once modding is done, you will be brought to the main menu. It will probably still install dependencys, so don't close it
immediately. You should get a notification once it's finished.

:::warning Restoring Popup
You might encounter a popup that informs you about having an unofficial version of BeatSaber installed. If this happens,
**do not** click on "Restore", as doing so will uninstall the modded version of BeatSaber. The same caution applies to
the "Update App" popup. Clicking "Update" will lead to the same outcome.
:::

## Installing Mods, Custom Songs and Models and external sources

### Installing Mods

You can install mods directly within QAVS. Before installing any other mods, it's recommended to install CrashReporter first.
CrashReporter is a mod that uploads crash reports to [this site](https://analyzer.questmodding.com/crashes), allowing
you to view logs if your game crashes and you're unable to start it again. Once you've installed CrashReporter, start
your game. In the main menu, press the settings button, then choose "Mod Settings" and select "QuestUI" on the left.
Click on "CrashReporter." A menu will appear where you can configure CrashReporter. Enable full log and set a user ID
that you can remember.

#### Accessing the Mods Page

In QAVS, navigate to the "Get Mods and Cosmetics" tab and click "Open BeatSaber Mods Page." This will open a browser
where you can see all mods compatible with your version. Find the mods you want and click the download button. Note:
**Do not** download every mod you find. We recommend only downloading mods that you understand and are familiar with.
This can help prevent crashes and troubleshooting. After downloading the desired mods, click
"Quest App Version Switcher" at the top to return to QAVS. Finally, check if the mods appear in the "Installed Mods" tab.
It might take a moment for them to finish installing.

### Downloading Songs

In the main menu of BeatSaber is a "More Songs" button in the menu on the left. There you can download every Song listed
on [BeatSaver](https://beatsaver.com). It's recommended to install the "BetterSongSearch" mod since it provides more
search features.

### Installing Models

To install models such as Sabers and Walls, go to the "Get Mods and Cosmetics" tab within QAVS. Click "Open Website Hub,"
scroll down, and select the model site. You can download models by clicking on the download link. Once you've downloaded
all the models you want, click "Quest App Version Switcher" at the top to return to QAVS.

### Installing from Your PC

::: danger Warning
We **strongly** advise against installing mods that do not originate from official mod sites. Unverified mods could
potentially contain viruses. We do not provide support for any such mods.
:::

::: warning PC Mods Do Not Work on Quest!
Only mods with the ".qmod" extension work on Quest. Mods downloaded from sources like BeatMods will not work.
:::

QAVS provides a web interface that you can open on your PC. Ensure you're connected to the same network as your Quest;
otherwise, this won't work. In the "Tools and Options" tab of QAVS, you'll find an IP address that you can input into
your browser (e.g., `http://10.0.0.2:50002`). Make sure to use `http:` and not `https:` at the beginning.

If everything is set up correctly, a page should open that resembles QAVS. You can access most of QAVS's features from there
and upload your own files (`.qmod`, `.whacker`, etc.).

## Troubleshooting

If you encounter issues while modding BeatSaber, you can always seek help in the [BSMG Discord](https://discord.gg/beatsabermods).
You can ask any questions in the quest-help channel. Please note that we are all volunteers and there is no on-call
support. So, if no one responds immediately, please be patient. In addition, here are a few troubleshooting steps:

### My Game Doesn't Start or Immediately Crashes

There are likely mods causing these issues. Try disabling them one by one to identify which one is causing the problem.

### I Can't Find the Mod Options in the Game

Something may have gone wrong during the modding process. Go to the "Tools" tab in QAVS and click "Uninstall All Mods."
Then open the mod download page and click "Download Core Mods." If that doesn't resolve the issue, you may need to
restart the modding process.
