---
sidebar: auto
---
# Support
::: danger NOTE
This page is exclusive to the PC version of the game.  
For help with the Quest version, please visit `#quest-mod-support` on the [BSMG Discord](https://discord.gg/beatsabermods).
:::

## Table of Contents
[[toc]]

---

## Game Updates
After the game updates, mods may be broken. The `#server-announcements` channel on the BSMG Discord will have up-to-date information on the status of mods. If your favorite mod is broken, wait a few days and somebody will likely update it.

### Broken mods after an update
When the game updates, mods are automatically disabled to prevent outdated mods from breaking your game. To fix, simply reinstall your mods using [ModAssistant](/beginners-guide.md#mod-assistant).

::: warning TIP
Make sure to only install mods for the current game version! You can see which version is selected in the bottom-right of the ModAssistant UI
:::

## Missing Mods


## Game Won't Start


## Framerate Issues
Running VR is a CPU intensive task, and installing many mods only makes the issue worse. Consider removing mods you don't need to improve your framerate.

Additionally, some mods have specific functions that can decrease performance on lower end hardware. Disabling these can help boost performance.
| Mod&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Remedy |
| - | :- |
| Custom Avatars | Some avatars have complex models. These are more taxing on the GPU to render. Consider using a simpler model if you're noticing performance issues. |
| Custom Sabers | The *Plasma Katana* sabers that ship with the Custom Sabers mod contain a lot of custom scripts that cause performance issues. Consider using a simpler saber. |
| CameraPlus | Higher FOV values and more cameras will significantly impact performance. CameraPlus is only useful to those recording or streaming their game window.<br /><br /> If you are only playing the game locally, you do not need this mod. |
| HTTP Status | HTTP Status has been known to cause lag spikes. Try testing with and without the mod installed to see if the problem is affecting you. |


### Constantly Low Framerate
Low framerates are generally caused by the GPU being overworked. Try using the [SteamVR performance test](https://store.steampowered.com/app/323910/) to make sure your PC can handle VR.

To help alleviate the problem, you can turn down the graphical fidelity of the game to boost performance.


### Fixing Stutters

## Common Problems
### Main Menu is Blank


### Controller Rumble is Not Working


### Custom Avatars Not Showing In-Game


### Corrupted Avatars


### Missing Custom Songs


### Play Button is Red


### Map Details Loading Indefinitely


### CameraPlus Not Working past Health and Safety


### Desktop View Not Taking Up Entire View


### Missing "More Songs" Button


### More Songs Menu is Blank


## Troubleshooting
### Verifying Game Files


### Performing a Clean Installation


### Deleting Save Data


## Still Having Issues

---

## 1. No mods?

#### 1.1 No mods appear on a fresh copy of the game
First, make sure that the following are correct:
* **You ran the game once before installing mods**. BSIPA removes all mods on the first run of a fresh update to prevent broken old mods from loading on a new version. Reinstall mods again if this is the case.
* Steam/Oculus is launching Beat Saber from the **same installation** that mods are in. *e.g. mods are on the D drive but steam is launching from the C drive.* Set the correct install location in your choice of installer.
* If you installed mods manually, make sure you included all the files from the download and put them in the correct folders, as well as their dependencies.

#### 1.2 I had mods installed on an older version, but nothing loads after an update
If the details in section 1.1 above are correct, try the solutions below, in descending order.

**Solution 1**
- Update BSIPA to the latest version (in ModAssistant or manually)
- Go into your Beat Saber folder
- Run `IPA.exe`

**Solution 2.**
-  [Verify your game files](#verify-game-files-for-steam) (Steam only, oculus users refer to Solution 4)
- Update BSIPA to the latest version
- Go into your Beat Saber folder
- Run `IPA.exe`

**Solution 3.**
- Go into your Beat Saber folder
- Make a backup of the `UserData` folder (optional)
- Delete UserData

::: warning
This will reset all plugin settings!
:::

**Solution 4.**
- Perform a [Clean Installation](#clean-installation)

#### 1.2 Mod Assistant doesn't seem to be installing any plugins
The installers download mods to `Beat Saber/IPA/Pending`, BSIPA moves these files to root folder when you launch the game. If your game Plugins folder still is empty afterwards, run `IPA.exe` again and make sure that nothing is preventing it from running, e.g. `Anti-viruses, Admin permissions, etc.`

## 2. Game Issues Post-Modding
### Game Won't Start

#### 2.1 GetThreadContext Failed Error
If a window pops up saying `GetThreadContext Failed` and/or you hear a Windows error sound, you may have software on your PC that breaks Beat Saber mods. Many third-party anti-cheat software like ESEA and FaceIt disrupt BSIPA from applying mods to Beat Saber, even when not running. Some Anti-Virus software also exhibit similar behavior. 

To solve this problem:
1. Uninstall the anti-cheat software.
2. Reboot your PC.
3. Check if any remnants of the software still exist in your `AppData` folders.
4. Run the game.

If problems persist then try the following:
::: tip NOTE
The problem can continue to persist due to lacking permissions or exceptions. Any program that can block BSIPA, or programs marked suspicious can make this problem persist.
:::

* Steam: [Verify Steam Game Files](#verify-game-files-for-steam)
* Oculus: Perform a [Clean Installation](#clean-installation)

This should fix the problem.

#### 2.2 Frozen on Startup
If the game is frozen at the Health and Safety screen, or you see an avatar T-posing with no control of the game, [verify your files](#verify-game-files-for-steam) if you have the game on Steam, or reinstall the game on Oculus Home. Refer to [Clean Installation](#clean-installation)
This seems to happen when updating Beat Saber and having mods installed previously, but not to users with clean installs of the game.

### Framerate Issues
#### 2.3 The game stutters unbearably after installing mods
If the game lags so badly that you can barely click the `Continue` button on the Health & Saftey screen, then verify files if you have the game on Steam, or reinstall the game on Oculus Home. 
Do the same if it won't start up at all and shows no error messages when trying to launch the game.

If that didn't solve the issue, then check section [2.4 Improving framerate](#framerate-issues)

#### 2.4 Improving Framerate
If [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) didn't improve your fps, then your PC might simply be struggling to keep up with the stress caused by mods. Here are some things you can do to improve framerate, in no particular order:

::: danger NOTE
NVidia GeForce Experience now attempts to optimse Beat Saber. It will sometimes set the game's render scale higher than 1x. This is a common reason for framerate issues.
:::

* Turn down Render Scale, Anti-Aliasing, mirror, fog, etc in the base game settings.
* For Oculus players: consider using 2 sensors instead of 3+. 
* Reduce your total mod and song count. 
* Perform a clean reinstall of the game files. [Clean Installation](#clean-installation)
* Low framerate can also be caused by something going wrong within your application data folder, to fix this refer to [Deleting The Beatsaber Folder Within Your App Data](#deleting-your-beat-saber-saves-in-app-data)
* CountersPlus counters like scorecounter and swing speed can be expensive. [See this github wiki page on performance with Counters+](https://github.com/Caeden117/CountersPlus/wiki/Performance-and-Optimization)

VR is very CPU intensive, especially if you add mods. If you're struggling to run the game with the mods you want, consider upgrading your hardware. 
Note that Beat Saber doesn't utilize the GPU very much as visually it's a fairly simple game.

## 3. Common Questions
#### 3.1 Blank Menu, No Buttons
If your main window in game is blank, your save file likely got corrupted.
To fix this refer to [Delete Beatsaber Folder Within Your App Data](#deleting-your-save-in-app-data)

::: warning
This will delete your local scores and statistics.
:::

#### 3.2 How do I use `x` mod?
If you're using Mod Assistant, click the mod and hit the "Mod Info" button. [BeatMods](http://beatmods.com) has a "More Info" button on each mod as well.

#### 3.3 Rumble Issues
Gameplay Modifiers Plus adds a toggle to enable/disable controller rumble. If you disabled it then removed the mod, you'll need to modify the configuration file that it writes to manually. Open `%appdata%/../locallow/hyperbolic magnetism/beat saber` and set `controllerRumbleEnabled` to `true`.

If this isn't the cause of your rumble issues and the following are true regarding your haptics:
* haptics are miniscule
* there is no vibration when hitting multiple blocks
* there is a slight delay when touching sabers together
* you are using oculus touch controllers

Then there is a good chance that Beat Saber is overloading your motherboard's USB controller. Oculus devours your USB controller bandwidth and most motherboards come with a very cheap controller. Beat Saber pushes it harder than any other game, which is why other games and menus might be fine. There is no clear-cut solution, so try the following:
* Shuffle the sensor and HMD USB cables around in different ports
* Unplug unecessary USB devices
* Buy a PCI-E USB hub
* Use `-vrmode oculus` if you're using SteamVR to bypass it and use the oculus SDK instead

### Custom Avatars
#### 3.4 Custom Avatars (Not) Showing Ingame
Click the **Home** button on your keyboard with the game in focus to toggle visibility in the headset.

#### 3.5 My Avatars Are Broken
Make sure your custom avatars plugin is installed properly and updated, also make sure your dependencies are too.
You might have a corrupted/broken avatar, having one avatar break can break all of your avatars likewise with songs and sabers.
Refer to [Finding Broken Content](#4-2-finding-broken-content) if you think you have corrupted avatars or if you've made sure your mods and dependencies are updated but avatars still are broken.

### Custom Songs
#### 3.6 My Songs Are Missing
Make sure your songs are in your `CustomLevels` folder, located at `Beat Saber/Beat Saber_Data/`. This is where the game natively reads custom songs from.

**Do not** place songs in the old `Beat Saber/CustomSongs` folder. This location is deprecated as the format for custom songs has changed. If you have maps in the old format (`.json` and `.ogg` files instead of `.dat` and `.egg`), convert them first using [Songe Converter](https://github.com/lolPants/songe-converter)

#### 3.6 Red Play Button
Click the red (?) button in the top right corner. This should tell you what mods are required to play the song, which you are missing.
Also try re-installing the plugin again, if that doesn't work reinstall your game, [Clean Install](#clean-installation)

#### 3.7 Map details are loading infinitely
If this only happens on particular maps, those song files are probably broken. If it happens to all of your maps, delete your `Plugins` folder and reinstall fresh ones.

### Camera Plus
#### 3.8 Camera Plus Isn't Working/Past Health Screen
Make sure the setting for "Smooth Camera" is turned off in your ingame settings,
If that doesn't work make sure you have the mod installed properly try reinstalling it, and all of its dependencies.

#### 3.9 My desktop view only takes up a small section of the screen
Your CameraPlus display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### Beatsaver Downloader
#### 3.10 Beatsaver Downloader More Songs Button
**The More Songs button is located in the Mods button in the main menu**. If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in the bar on the main menu
If your Mods button isn't there then kindly make sure your plugins and dependencies are working and installed properly, refer to [No Mods In Game](#1-4-no-mods-in-game).

#### 3.11 Nothing Showing Up In The More Songs Menu
The probable causes for beatsaver downloader not working are:
1. Make sure all of your songs have loaded in before, or else the More Songs button will be greyed out.
2. Your anti-virus or firewall blocking access to beatsaver.

## 4. Miscellaneous Troubleshooting
### Understanding Logs
If you're on Steam you can go to 
> Beat Saber > Properties > Set Launch Options > Add `--verbose` to the text field that appears

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. 
e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs 
* This may not show 100% of the time for avatars and sabers, and you may have to remove all your avatars/sabers and try them one by one to see which one breaks the game.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](/support/exceptions.md).

### Verify Game Files For Steam
Steam Verify Game Files
To verify your game files on steam follow these steps:
1. Make sure steamvr is closed as it wont let you verify your games otherwise. 
2. Go to your steam library and find Beat Saber
3. Right click Beat Saber and click on Properties
4. Go to the "Local Files" tab in properties
5. Select the last option "Verify Integrity Of Game Files"
6. Let it finish verifying and downloading any missing files and you should be good to go.

<YouTube url='https://www.youtube.com/watch?v=EBFfT4-ZiIc' />

### Clean Installation
1. (Optional) Back up your downloaded custom content by making a copy of the following folders:
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Delete the ENTIRE Beat Saber Folder.** This is different from uninstalling the game on steam, as those methods will not remove files that did not come with the game. 
> Steam: 	`\steamapps\common\Beat Saber\`  
> Oculus: 	`\hyperbolic-magnetism-beat-saber\`

3. Reinstall the game via the Steam or Oculus store
4. **Before modding, launch the game once** 
5. Run Mod Assistant, install your mods, and boot up the game.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your App Data](#deleting-your-save-in-app-data)

### Deleting Your Save in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at 
>`%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
>Users > "USER" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Deleting the Appdata folder will also delete your local scores and statistics.
:::

#### Desperate Measures
* Make sure your current user **is an administrator**
* Turn your anti-virus **Off** (for the meantime at least)
* Ensure that you have permission to create folders and edit files within the disk drive/your pc, (from what I heard a windows update recently caused problems for people)
* Ensure that your drivers are up to date
* Check that the problem doesn't lie within your headset, or operating system, or your hardware/software
* Check your internet connection, and that nothing is blocking anything related to beatsaber modding and steam etc.

## 5. Still having issues
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:
* Use the correct channels please, most likely one of the 2 `#support` channels for mod troubleshooting. Use  `#model-discussion` for questions about **making your own avatars, platforms, notes, or sabers**, and `#mapping-discussion` for questions about **making maps.**
* Be polite and respectful
* Describe your problem in detail. "It didn't work" is about as descriptive as telling your doctor you don't feel well. What's not working, and what did you try? Are there any messages that come up on screen? Did your entire screen turn bright purple? 

::: warning NOTE
Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online.
:::

---

> Thank you to Saber-Chan for their hard work on this page.
