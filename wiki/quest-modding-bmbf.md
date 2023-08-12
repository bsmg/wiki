---
prev: false
next: false
---

# Quest Modding using BMBF

## Before You Begin

If you haven't already, go to [Preparations](./quest-modding.md#preparations) and follow those steps.
You should now have Developer Mode enabled and SideQuest Advanced installed on your PC.
It's recommended to tape up the proximity sensor between the lenses of your Quest. This prevents it from
going into sleep mode during the modding process.

Make sure you do not have multiple accounts an your Quest! Modding currently doesn't work with multiple accounts.
You can add them back once the modding process is completed.

## Connecting Your Quest to SideQuest

Take a USB cable and connect your Quest to your PC. Inside your Quest, two dialogs should pop up (if you're doing this
step for the first time). One dialog asks for permission for the PC to access the Quest's files. Click "Accept".
The other dialog asks if you want to trust the computer. Click "Always Trust" so it doesn't show up again.

Once you've done that, open SideQuest. Look at the top left corner. If there is a green dot, everything is
working and your Quest is connected. If it is red, try reconnecting the Quest. Alternatively, restart SideQuest
and/or your PC or try a different cable.

## Installing BMBF

Navigate to the SideQuest start page within the app. You should find a search field there. Type "BMBF"
and press Enter. In the search results, you should see a program with a Unicors as the icon. Click the download/sideload
button. You will see a red notification at the top of the app indicating that the app is being installed. Once the installation
is complete, a green notification will appear in the top right corner.

## Downgrading BeatSaber

### Checking the Version

Launch BeatSaber and look at your feet. There should be a version number displayed. If it matches the currently
moddable version, you can skip the downgrading step. You can find the latest moddable version information in the [BSMG Discord](https://discord.gg/beatsabermods).

### Downgrading the Game

#### Uninstalling BeatSaber

Open SideQuest. In the top right of the navigation bar, click the icon with nine squares. This will display all the apps
currently installed on your headset. Locate `com.beatgames.beatsaber` and click the settings icon on the
right. On the page that opens, there should be a button to uninstall BeatSaber. Click it and wait for SideQuest to
confirm the uninstallation. (If you don't have BeatSaber installed, you can skip this Step.)

#### Downloading the Downgraded Version

Visit [OculusDB](https://oculusdb.rui2015.me/id/2448060205267927) and click "Download Latest Moddable Version." If you encounter
a 404 error page, you need to log in with your Meta account [here](https://www.oculus.com/experiences/quest). Save the
downloaded APK file to a location where you can easily locate it.

#### Installing the Downgraded Version

Open SideQuest again and click the Install APK icon (a box with an arrow pointing downward). An explorer window will
appear. Select the APK file you downloaded from OculusDB. Once the installation is complete, you can disconnect the
Quest from your PC.

## Starting the Modding Process

1. Launch BeatSaber and check if the version number at your feet now matches the latest moddable version. If not, repeat
   the steps mentioned above.
2. Go to the app menu in your headset. In the top right corner, you should see a filter option where you can select
   "unknown sources." If "BMBF" doesn't appear there, try installing it via SideQuest again.
3. Open BMBF. It might take up to 1-2 minutes to load. It will prompt you for folder permissions. If it does, click the "Use
   This Folder" button at the bottom. **Do not** navigate to another folder!
4. Follow the steps provided by BMBF. It may also ask for app permissions. If it does, enable the slider and click the
   back arrow in the top left corner.

## Installing Mods, Custom Songs, Models and external sources

:::warning Syncing BMBF
Regardless of what you install using BMBF, remember to sync it with BeatSaber by clicking the "Sync" button in the top right corner.
:::

### Installing Mods

You can install mods directly within BMBF. Before installing any other mods, it's recommended to install CrashReporter first.
CrashReporter is a mod that uploads crash reports to [this site](https://analyzer.questmodding.com/crashes), allowing
you to view logs if your game crashes and you're unable to start it again. Once you've installed CrashReporter, start
your game. In the main menu, press the settings button, then choose "Mod Settings" and select "QuestUI" on the left.
Click on "CrashReporter." A menu will appear where you can configure CrashReporter. Enable full log and set a user ID
that you can remember.

#### Accessing the Mods Page

In BMBF, navigate to the "Browser" tab. This will open a browser where you can see all mods compatible with your version.
Find the mods you want and click the download button. Note: **Do not** download every mod you find. We recommend only
downloading mods that you understand and are familiar with. This can help prevent crashes and troubleshooting.
Wait until BMBF has finished installing all the mods. You will receive notifications once the installation is complete.
Go to the "Mods" tab to verify that all mods were successfully installed.

### Downloading Songs

In the main menu of BeatSaber is a "More Songs" button in the menu on the left. There you can download every Song listed
on [BeatSaver](https://beatsaver.com). It's recommended to install the "BetterSongSearch" mod since it provides more
search features.

### Installing Models

Models for Sabers, Walls and Blocks can be found in the [Qosmetics Discord](https://discord.gg/JNuFC7XMTk). You can
install them over the [BMBF Webinterface](#installing-external-sources-over-bmbfs-webinterface)

### Installing External Sources via BMBF's Web Interface

:::danger Warning
We **strongly** advise against installing mods that do not originate from official mod sites. Unverified mods could
potentially contain viruses. We do not provide support for any such mods.
:::

:::warning PC Mods Do Not Work on Quest!
Only mods with the ".qmod" extension work on Quest. Mods downloaded from sources like BeatMods will not work.
:::

BMBF provides the option to upload files from a PC. To open the web interface, first ensure that your Quest
and PC are connected to the same network; otherwise, it won't work. Navigate to the "Tools and Options" tab in BMBF.
You'll find an IP address that you can enter into your browser (e.g., `http://10.0.0.2:50000`).
Make sure to use `http:` and not `https:` at the beginning.

![BMBFWeb](/.assets/images/beginners-guide/bmbfweb.png)
