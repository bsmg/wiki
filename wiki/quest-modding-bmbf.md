---
prev: false
next: false
---

# Quest Modding using BMBF

## Before You Begin

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

## Installing BMBF

Navigate to the SideQuest start page within the app. You should find a search field there. Type "BMBF"
and press Enter.

![sqSearch](/.assets/images/beginners-guide/sqSearch.png)

In the search results, you should see a program with a Unicorn as the icon. Click the download/sideload
button. You will see a red notification at the top of the app indicating that the app is being installed. Once the installation
is complete, a green notification will appear in the top right corner.

## Downgrading Beat Saber

### Checking the Version

Launch Beat Saber and look at your feet. There should be a version number displayed. If it matches the currently
moddable version, you can skip the downgrading step. You can find the latest moddable version information in the [BSMG Discord](https://discord.gg/beatsabermods).

If you do not have Beat Saber installed you can skip to [Download the Downgraded Version](#download-the-downgraded-version)

### Uninstall Beat Saber

Open SideQuest. In the top right of the navigation bar, click the icon with nine squares. This will display all the apps
currently installed on your headset. Locate `Beat Saber` and click the settings icon on the
right.

On the page that opens, there should be a button to uninstall Beat Saber. Click it and wait for SideQuest to
confirm the game has been uninstalled.

![sqUninstall](/.assets/images/beginners-guide/sqUninstall.png)

### Download the Downgraded Version

Visit [OculusDB](https://oculusdb.rui2015.me/id/2448060205267927) and click "Download Latest Moddable Version." If you encounter
a 404 error page, you need to log in with your Meta account [here](https://developer.oculus.com/manage). Save the
downloaded APK file to a location where you can easily locate it.

### Install the Downgraded Version

Open SideQuest again and click the Install APK icon (a box with an arrow pointing downward). An explorer window will
appear. Select the APK file you downloaded from OculusDB. Once the installation is complete, you can disconnect the
Quest from your PC.

![apkfromfolder](/.assets/images/beginners-guide/apkfromfolder.png)

## Starting the Modding Process

1. Launch Beat Saber and check if the version number at your feet now matches the latest moddable version. If not, repeat
   the steps mentioned above.
2. Go to the app menu in your headset. In the top right corner, you should see a filter option where you can select
   "unknown sources." If "BMBF" does not appear there, try installing it via SideQuest again.
   ![UnknownSources](/.assets/images/beginners-guide/quest_home-menu.jpg)
3. Open BMBF. It might take up to 1-2 minutes to load. It will prompt you for folder permissions. If it does, click the "Use
   This Folder" button at the bottom. **Do not** navigate to another folder!
4. Follow the steps provided by BMBF. It may also ask for app permissions. If it does, enable the slider and click the
   back arrow in the top left corner.

## Installing Mods, Custom Songs, Models and external sources

:::warning Syncing BMBF
Regardless of what you install using BMBF, remember to sync it with Beat Saber by clicking the "Sync" button in the top
right corner.
:::

### Installing Mods

You can install mods directly within BMBF. Before installing any other mods, it is recommended to install CrashReporter first.
CrashReporter is a mod that uploads crash reports to [this site](https://analyzer.questmodding.com/crashes), allowing
you to view logs if your game crashes and you are unable to start it again.

Once you have installed CrashReporter, start your game. In the main menu, press the settings button, then choose
"Mod Settings" and select "QuestUI" on the left.
Click on "CrashReporter." A menu will appear where you can configure CrashReporter. Enable full log and set a user ID
that you can remember.

#### Accessing the Mods Page

In BMBF, navigate to the "Browser" tab. This will open a browser where you can see all mods compatible with your version.
Find the mods you want and click the download button.

:::danger DO NOT download every mod you find!
It is recommended to only downloading mods that you understand and are familiar with. This can help prevent crashes and troubleshooting.
:::

Wait until BMBF has finished installing all the mods. You will receive notifications once the installation is complete.
Go to the "Mods" tab to verify that all mods were successfully installed.

### Downloading Songs

In the main menu of Beat Saber is a "More Songs" button in the menu on the left. There you can download every Song listed
on [BeatSaver](https://beatsaver.com). It is recommended to install the "BetterSongSearch" mod since it provides more
search features.

### Installing Models

Models for Sabers, Walls and Blocks can be found in the [Qosmetics Discord](https://discord.gg/JNuFC7XMTk). You can
install them over the [BMBF Web Interface](#installing-external-sources-over-bmbfs-webinterface)

### Installing External Sources via BMBF's Web Interface

:::danger Warning
We **strongly** advise against installing mods that do not originate from official mod sites. Unverified mods could
potentially contain viruses. We do not provide support for any such mods.
:::

:::warning PC Mods Do Not Work on Quest!
Only mods with the ".qmod" extension work on Quest. Mods downloaded from sources like BeatMods will not work.
:::

BMBF provides the option to upload files from a PC. To open the web interface, first ensure that your Quest
and PC are connected to the same network; otherwise, it will not work. Navigate to the "Tools and Options" tab in BMBF.
You will find an IP address that you can enter into your browser (e.g., `http://10.0.0.2:50000`).
Make sure to use `http:` and not `https:` at the beginning.

![BMBFWeb](/.assets/images/beginners-guide/bmbfweb.png)

## Troubleshooting

If you encounter issues while modding Beat Saber, you can always seek help in the [BSMG Discord](https://discord.gg/beatsabermods).
You can ask any questions in the quest-help channel. Please note that we are all volunteers and there is no on-call
support. So, if no one responds immediately, please be patient. In addition, here are a few troubleshooting steps:

### Sideloading BMBF Failed

When sideloading BMBF and you get the error `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF
signatures do not match the previously installed version; ignoring!`

You will need to uninstall the BMBF version on your Quest. You can do this from SideQuest's `My Apps` menu.

---

### Core Mods Do Not Work

If you are having problems with core mods, please verify that you are not trying to use any outdated mods.
Any mod made for a previous game version is considered outdated. Once you have removed them:

1. Go to `Tools`
2. Click `Delete Mods`
3. Click `Sync to Beat Saber`

If you had mods installed before this, turn them off then on again to reinstall them.

---

### BMBF Web Interface is Not Loading

If your BMBF Web Interface is not loading, Make sure you are typing the ip from the tools tab in the quest into your browser.
If it still does not load, make sure you are doing the following:

- BMBF is open in the headset and that your headset is not in sleep mode
- There is http:// at the beginning of the link, not https://
- Your ip has not changed, as it changes from time to time
- You have :50000 at the end of your link
- Your pc and your quest are on the same network (keep in mind that ethernet _can_ mess with the connection,
  try wireless or another device if you have tried all other fixes here)
- You are not using a VPN
- Your ip is not 127.0.0.1
  If none of these work restart your quest and try them all again

---

### My Sabers and Mods Do Not Enable or Work

This is most likely due to having an outdated BMBF App, grab the latest BMBF Release by downloading it from SideQuest.
If the BMBF version for your Beat Saber is not there then please wait a while for the unicorns to update BMBF.

- If you can not press the Play button on a map press the question mark at the top right to see which mods are missing and
  install them.
- If your BMBF is on the latest version and mods wont be enabled in game, uninstall Beat Saber with the uninstall BS button
  in the BMBF Tools tab then reinstall and remod.

---

### Beat Saber is Crashing

If your game is crashing when doing something, disable your mods one by one, running your game each time to see if the
issue is fixed before asking for help in a support channel.

---

### I Only See a White Screen When I Open BMBF

If you only see a white screen when you open BMBF from unknown sources, try waiting a few seconds.
If that does not work, restart your quest and try opening BMBF again.

---

### The Mods Do Not Appear in the Game

After installing mods, be sure to press the "Sync" button in BMBF. Additionally, not all mods have visible effects. Some
mods place their settings on the left side of the main menu, while others can be found in the mod settings under Quest UI.

---
