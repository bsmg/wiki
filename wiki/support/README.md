---
sidebar: auto
---
# Support

## Table of Contents

0. [Updates](#_0-updates)
1. [No mods?](#_1-no-mods)
2. [Game Issues After Modding](#_2-game-issues-post-modding)
3. [Common Questions](#_3-common-questions)
4. [Miscellaneous Troubleshooting](#_4-miscellaneous-troubleshooting)
5. [Still Having Issues](#_5-still-having-issues)

## 0. Updates
After an update, the BSMG discord `#modding-announcements` channel should have the most up to date information
on the status of mods. The following are more detailed instructions of the most common procedure.

### Update broke my mods
**Run the game once** on the new update. Then, reinstall your mods using an installer
linked in the [beginner's guide](/beginners-guide), such as Mod Assistant.

## 1. No mods?

### Misc Questions

#### 1.1 No mods appear on a fresh copy of the game
First, make sure that the following are correct:

* **You ran the game once before installing mods**. BSIPA removes all mods on the first run of a fresh update to prevent
  broken old mods from loading on a new version. Reinstall mods again if this is the case.
* Steam/Oculus is launching Beat Saber from the **same installation** that mods are in. *e.g. mods are on the D drive but
  steam is launching from the C drive.* Set the correct install location in your choice of installer.
* If you installed mods manually, make sure you included all the files from the download and put them in the correct
  folders, as well as their dependencies.

#### 1.2 I had mods installed on an older version, but nothing loads after an update
If the details in section 1.1 above are correct, try the solutions below, in descending order.

##### Solution 1

* Update BSIPA to the latest version (in Mod Assistant or manually)
* Go into your Beat Saber folder
* Run `IPA.exe`

##### Solution 2 (Steam Only)

* [Verify your game files](#verify-game-files-for-steam)
* Update BSIPA to the latest version
* Go into your Beat Saber folder
* Run `IPA.exe`

##### Solution 3

* Go into your Beat Saber folder
* Make a backup of the `UserData` folder (optional)
* Delete UserData

::: warning
This will reset all mod settings!
:::

##### Solution 4

* Perform a [Clean Installation](#clean-installation)

#### 1.2 Mod Assistant doesn't seem to be installing any mods
The installers download mods to `Beat Saber/IPA/Pending`, BSIPA moves these files to root folder when you launch the game.
If your game Plugins folder still is empty afterwards, run `IPA.exe` again and make sure that nothing is preventing it
from running, e.g. `Anti-viruses, Admin permissions, etc.`

## 2. Game Issues Post-Modding

### Game Won't Start

#### 2.1 GetThreadContext Failed Error
If a window pops up saying `GetThreadContext Failed` and/or you hear a Windows error sound, you may have software on your
PC that breaks Beat Saber mods. Many third-party anti-cheat software like ESEA and FaceIt disrupt BSIPA from applying mods
to Beat Saber, even when not running. Some Anti-Virus software also exhibit similar behavior.

To solve this problem:

1. Uninstall the anti-cheat software.
2. Reboot your PC.
3. Check if any remnants of the software still exist in your `AppData` folders.
4. Run the game.
  If problems persist then try the following:
  `Additional Note: The problem can continue to persist due to lacking permissions or exceptions, any program that can
  block BSIPA, or programs marked suspicious can make this problem persist`
  Steam: [Verify Steam Game Files](#verify-game-files-for-steam)
  Oculus: Perform a [Clean Installation](#clean-installation)

This should fix the problem.

#### 2.2 Frozen on Startup
If the game is frozen at the Health and Safety screen, or you see an avatar T-posing with no control of the game,
[verify your files](#verify-game-files-for-steam) if you have the game on Steam, or reinstall the game on Oculus Home.
Refer to [Clean Installation](#clean-installation)

This seems to happen when updating Beat Saber and having mods installed previously,
but not to users with clean installs of the game.

### Framerate Issues

#### 2.3 The game stutters unbearably after installing mods
If the game lags so badly that you can barely click the `Continue` button on the Health & Safety screen, then verify files
if you have the game on Steam, or reinstall the game on Oculus Home. Do the same if it won't start up at all and shows
no error messages when trying to launch the game.

If that didn't solve the issue, then check section [2.4 Improving framerate](#_2-4-improving-framerate)

#### 2.4 Improving Framerate
If [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) didn't improve your fps, then your PC might
simply be struggling to keep up with the stress caused by mods. Here are some things you can do to improve
framerate, in no particular order:

* Check to see if NVIDIA GEFORCE EXPERIENCE set the rendering scale for Beat Saber past the default of 1.0.
  It may have set it to a higher number to 1.4 or 1.8 which significantly increases the GPU load.
* Use a less complex custom avatar.
* The custom saber **Plasma Katanas** have tons of custom events and are known to introduce lag if you miss.
* Camera2 and CameraPlus can be very taxing, especially if you have multiple cameras or increase the FOV.
* Turn down Render Scale, Anti-Aliasing, mirror, fog, etc in the base game settings.
* For Oculus Rift (CV1) players: consider using 2 sensors instead of 3+.
* Reduce your total mod and song count.
* Perform a [Clean Installation](#clean-installation) of the game files.
* Low framerate can also be caused by something going wrong within your application data folder,
  refer to [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)
* Disable Counters+ counters like score counter and swing speed as they can be expensive.
* HTTPStatus and DataPuller can cause lag spikes. Test without this mod to see if the lag spikes go away.

VR is very CPU intensive, especially if you add mods. If you're struggling to run the game with the mods you want, consider
upgrading your hardware. Note that Beat Saber doesn't utilize the GPU very much as visually it's a fairly simple game.

## 3. Common Questions

### Misc

#### 3.1 Blank Menu, No Buttons
If your main window in game is blank, your save file likely got corrupted.
To fix this, refer to [Delete Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

::: warning
This will delete your local scores and statistics.
:::

#### 3.2 How do I use `x` mod?
If you're using Mod Assistant, click the mod and hit the "Mod Info" button.
[BeatMods](http://beatmods.com) has a "More Info" button on each mod as well.

#### 3.3 Rumble Issues
Gameplay Modifiers Plus had a toggle to enable/disable controller rumble. If you disabled it then removed the mod,
you'll need to modify the save data file that it writes to manually.
Open `%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` and set `controllersRumbleEnabled` to `true`.

If this isn't the cause of your rumble issues and the following are true regarding your haptics:

* haptics are miniscule
* there is no vibration when hitting multiple blocks
* there is a slight delay when touching sabers together
* you are using Oculus touch controllers

Then there is a good chance that Beat Saber is overloading your motherboard's USB controller. Oculus devours your USB controller
bandwidth and most motherboards come with a very cheap controller. Beat Saber pushes it harder than any other game, which
is why other games and menus might be fine. There is no clear-cut solution, so try the following:

* Shuffle the sensor and HMD USB cables around in different ports
* Unplug unnecessary USB devices
* Buy a PCI-E USB hub
* Use `-vrmode oculus` if you're using SteamVR to bypass it and use the Oculus SDK instead

### Custom Avatars

#### 3.4 Custom Avatars (Not) Showing Ingame
Click the **Home** button on your keyboard with the game in focus to toggle visibility in the headset.

#### 3.5 My Avatars Are Broken
Make sure your custom avatars mod is installed properly and updated, also make sure your dependencies are too.
You might have a corrupted/broken avatar, having one avatar break can break all of your avatars likewise with songs and sabers.

### Custom Songs

#### 3.6 My Songs Are Missing
Make sure your songs are in your `CustomLevels` folder, located at `Beat Saber/Beat Saber_Data/`.
This is where the game natively reads custom songs from.

**Do not** place songs in the old `Beat Saber/CustomSongs` folder. This location is deprecated as the format for custom
songs has changed. If you have maps in the old format (`.json` and `.ogg` files instead of `.dat` and `.egg`),
leave them in the old `Beat Saber/CustomSongs` folder. You will need to download them again from BeatSaver.

Alternatively you can manually convert them using [Song Converter](https://github.com/lolPants/songe-converter) however,
 you will not get any help with this method and need to compile the program yourself.

#### 3.7 Grayed Out Play Button
Click the shiny blue question mark (?) button in the top right corner. This should tell you what mods are required to
y the song, which you are missing and should install. If it is still not working, try re-installing the required mod.
Otherwise try a [Clean Install](#clean-installation).

#### 3.8 Map details are infinitely loading
If this only happens on particular maps, you may be missing required mods or those song files are broken.
 If it happens to all of your maps, delete your `Plugins` folder and reinstall fresh ones.

### CameraPlus

#### 3.9 CameraPlus Isn't Working/Past Health Screen
Make sure the in-game setting for "Smooth Camera" is turned off in your in-game settings.
If that does not work, try reinstalling it and associated dependencies.

#### 3.10 My desktop view only takes up a small section of the screen
Your CameraPlus display isn't filling up your canvas. Either drag the corner to fit the screen,
or right click the window and click "Fit to Canvas".

### BeatSaver Downloader

#### 3.11 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is
greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu.
If your Mods menu isn't there then make sure your mods and dependencies are working and installed properly,
refer to the [No Mods?](#_1-no-mods) section.

#### 3.12 Nothing Showing Up In The More Songs Menu
The probable causes for BeatSaver Downloader not working are:

1. Make sure all of your songs have loaded in before, or else the More Songs button will be greyed out.
2. Your anti-virus or firewall blocking access to BeatSaver.
3. You have hit Beatsaver's rate limit and will have to wait before trying again.

### Multiplayer Error Codes
Here is a list of known error codes, what they mean, and what you can do to fix them.

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->
| Code&nbsp; | Description                                                                          |
|:-------|:---------------------------------------------------------------------------------------|
| CFR-1  | Unknown Error Occurred. Try restarting the game.                                               |
| CFR-2  | The multiplayer connection was canceled.                                                       |
| CFR-3  | Server is not reachable. There may be an issue with your internet connection or with Beat Saber's relay servers. Double check you are not offline and your firewall allows Beat Saber to connect to the internet. <details><summary>**Background Information**</summary>Beat Saber Multiplayer is peer-to-peer where you connect directly with each player in the lobby. When this is not possible Beat Saber starts a "relay" server to send the data. This error means both of these methods failed.</details> &nbsp; This can also be caused by using emojis or special characters in your username. |
| CFR-4  | The server already exists.                                                                     |
| CFR-5  | Server does not exist. The lobby you were connecting to might have closed as you were joining. |
| CFR-6  | The server is full. Choose a different lobby.                                                   |
| CFR-7  | You are on a version of the game that is not supported by the servers.                         |
| CFR-8  | Lobby password is incorrect. Double check you are entering the right password.                 |
| CFR-9  | The matchmaking servers Beat Games run, which keeps track of open public and private lobbies, is offline. Try again later. |
| CFR-10 | Your session key from Steam or Oculus is not valid. If you are playing on Quest and have modded your game, check out this [FAQ answer](/faq/README.md#does-multiplayer-have-crossplay) to work around this. Otherwise you are on a pirated copy of the game which is not supported. |
| CFR-11 | Your internet connection is offline.                                                           |
<!-- markdownlint-enable MD013 -->

## 4. Miscellaneous Troubleshooting

### Understanding Logs
If you're on Steam you can go to
> Beat Saber > Properties > General > Add `--verbose` to the launch options field

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut.
Edit the Target to add "--verbose" to the end of it.
e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* This may not show 100% of the time for avatars and sabers, and you may have to remove all your avatars/sabers and try
  them one by one to see which one breaks the game.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Verify Game Files For Steam
To verify integrity of game files follow these steps:

1. Make sure SteamVR is closed as it wont let you verify your games otherwise.
2. Go to your steam library and find Beat Saber
3. Right click Beat Saber and click on Properties
4. Go to the "Local Files" tab in properties
5. Select the "Verify Integrity Of Game Files" option.
6. Let it finish verifying and downloading any missing files and you should be good to go.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI,
the steps are still the same.
  
### Clean Installation

1. (Optional) Back up your downloaded custom content by making a copy of the following folders:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Delete the ENTIRE Beat Saber Folder.** This is different from uninstalling the game on steam,
  as those methods will not remove files that did not come with the game.

> Steam: `\steamapps\common\Beat Saber\`
> Oculus: `\hyperbolic-magnetism-beat-saber\`

3. Reinstall the game via the Steam or Oculus store
4. **Before modding, launch the game once**
5. Run Mod Assistant, install your mods, and boot up the game.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Deleting Your Save in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Users > "USER" > AppData > LocalLow > Hyperbolic Magnetism > beat saber

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Deleting this folder in Appdata will also delete your local scores and statistics.
:::

#### Desperate Measures
::: warning
Disabling your anti-virus involves security risks, be sure to know what you're doing
(i.e don't download or open suspicious files while it's turned off)
and don't forget to re-enable it as soon as you finished these steps.
:::

* Make sure your current user **is an administrator**
* Turn your anti-virus **Off** (for the meantime at least)
* Ensure that you have permission to create folders and edit files within the disk drive/your pc,
  (from what I heard a windows update recently caused problems for people)
* Ensure that your drivers are up to date
* Check that the problem doesn't lie within your headset, or operating system, or your hardware/software
* Check your internet connection, and that nothing is blocking anything related to beatsaber modding and steam etc.

## 5. Still having issues
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll
have your questions answered, consider the following:

* Use the correct channels please, `#pc-help` for pc mod support and `#quest-help` for quest mod support. Use `#pc-3d-modeling`
  and `#quest-3d-modeling` for questions about **making your own avatars, platforms, notes, or sabers**, and `#mapping-discussion`
  for questions about **making maps.**
* Be polite and respectful
* Describe your problem in detail. "It didn't work" is about as descriptive as telling your doctor you don't feel well.
  What's not working, and what did you try? Are there any messages that come up on screen?
  Did your entire screen turn bright purple?

::: tip NOTE
Those with the `Support` role are volunteers that might choose to help out in their free time.
The support role is in recognition of the knowledge and effort they have put forth, but it doesn't
necessarily mean that they'll be around to help just because they're online.
:::

Credit to Saber-Chan for their hard work on this page.
