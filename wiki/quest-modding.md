---
sidebar: auto
---
# Quest Modding

## Preface

* This guide is for both Quest 1, Quest 2 and Quest Pro.
* Nobody has yet been banned for modding.

::: danger DISCLAIMER
By choosing to use mods, you understand that:

* You may experience problems that don't exist in the vanilla game. 99.9% of bugs, crashes, and lag are due to mods.
* Mods are subject to being broken by updates and that's normal - be patient and respectful when this happens,
  as modders are volunteers with real lives.
* Beat Games aren't purposefully trying to break mods. They wish to work on the codebase and sometimes this breaks mods,
  but they are not out to kill mods.

Do not attack the game developers for issues related to mods, and vice versa -
modders and game developers are two separate groups. Just don't be a jerk ok.
:::

:::warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives?
We at BSMG **strongly** advise against using any video tutorials for modding. Often, we find that they are either
outdated or contain incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods).
:::

## Installation
Currently the only recommended way to install custom songs and mods is QuestAppVersionSwitcher (QAVS) sideloaded with [SideQuest using a PC](#installing-qavs-with-sidequest).

If you do not have access to a PC you can use an [Android Phone or Tablet](/support/modding-with-android.md).
Chromebooks and iOS devices such as iPhones or iPads are not supported.

:::warning
Installing QAVS and modding your game will disable Official Multiplayer as well as viewing and uploading scores on the base game leaderboards.
If you would like to play modded multiplayer, you need the mod `Beat Together`, which allows
for cross-play between PC and Quest and for custom songs to be used. You'll have to download these mods when you've
modded your game

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://new.scoresaber.com/quest) or [BeatLeader](https://www.beatleader.xyz/) mod.
These do not replace the base game leaderboards, they only adds leaderboards for custom songs.

**Note:** Check the updates channel in the [ScoreSaber Discord](https://discord.gg/WpuDMwU) or [BeatLeader Discord](https://discord.gg/2RG5YVqtG6) to see if the mod is available
for the current game version.
:::

### Installing QAVS with SideQuest
If you haven't already, download and install the [SideQuest Easy Installer](https://sidequestvr.com/setup-howto).

**Note:** If you are on iOS, for `Step 4: Enable Developer Mode and Reboot` follow these steps instead

![iOSHowTo](~@images/beginners-guide/EnableDevModeIOS.png)

There are two methods available to obtain QAVS:

* [The SideQuest Store on PC and Mac](#download-from-the-sidequest-store)
* If you do not have a PC, you can use [the SideQuest Store on Android](/support/modding-with-android.md)
  * Chromebooks and iOS devices such as iPhones or iPads are not supported.
:::tip
If you've previously modded Beat Saber or have scores you want to backup, [backup your Save Data first!](#backup-save-data-using-sidequest)
:::

#### Download from the SideQuest Store

1. After setting up SideQuest, search for `QuestAppVersionSwitcher` or locate it in the Games & Apps page in your headset.
2. Click the `Download App (Sideload)` button on the page then the `Install` button when prompted.
3. Wait for QAVS to finish installing onto your headset and allow app installation from unknown sources if needed.

#### QAVS Setup
:::warning
Modding currently does not work if the experimental multi-user feature is in use. You will need to temporarily remove
all secondary accounts before modding the game. You can add them back later once you have installed your desired mods.
:::

Once QAVS has been successfully installed, open the app like shown below and allow it to manage your storage.
![UnknownSources](~@images/beginners-guide/quest_home-menu.jpg)

Once opened, go to the `Change app` button and select `com.beatgames.beatsaber` (if you can't click it, click outside the list and try again).
After that's done, open the `Get Mods and Cosmetics tab` followed by `Open Beat Saber mods page`.
Now do:
a) You see a list of mods: Continue with [#mod-your-game](Modding your game)
b) You see a prompt saying there are no mods available for your version? Follow along

## Downgrade your game
On the prompt there's a button `Download latest moddable version`. Press that button and follow the instructions.
It'll ask you to log in with your meta account. Do that and then go back to the `Beat Saber mods page`
and press that button again.
You should now be asked to download an old Beat Saber version. Press yes and follow the on screen instructions.

Wait for the download to finish.

After the download is done, go to the `Backups` tab and select the version you just downloaded.
Then press `Restore backup` and follow the on screen instructions. Your game is now downgraded.

## Mod your game
Go to the `Mod my game` tab and press `Patch my game`.
Wait for it to finish and once again follow the on screen instructions.
Your game is now modded.

## Installing Mods

### Inside your Quest

Open QuestAppVersionSwitcher on your Quest and open the `Get mods & more` tab.
Open the `Beat Saber mods page`.
**Press the download all core mods button to download all essential mods!**
You can then download any other mods you want.

:::warning
You currently also need to install the V51 custom types fix by pressing `Get V51 custom types fix` every time you downloaded a mod
:::

### Using your PC
You can find and download other Quest mods from the [BSMG Discord](https://discord.com/invite/beatsabermods) in
the `#quest-mods` channel.

:::warning
Make sure your Quest and PC are on the same network and that you are using http and not https!
:::

Open QuestAppVersionSwitcher in your Quest and go to the `Tools & options` tab, there you should see a
web address at the very bottom

On your PC, open your browser and type the address into the search bar.

You should be greeted with the same interface as in your quest.

If this doesn't work [click here](#qavs-web-interface-not-loading) for some troubleshooting steps.

Now just go to the `Installed mods` tab and install any mods by pressing `Install a mod from disk` and selecting the qmod file.

## Installing Songs
::: tip
Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before
good mapping practices were established. Try downloading songs released between late 2019 and now to get the best
custom levels experience.
:::

### In-Game
You can now download songs in-game using SongDownloader (core mod)
There are a few steps to downloading songs in-game:  

1. Open Beat Saber  
2. On the main menu, look at the Mods screen, on the left.
3. Open the SongDownloader tab
4. Search for a song and download it.

When downloading songs in-game you do not have to restart the game. It automatically loads the song using the SongLoader.

![songdownloader](~@images/beginners-guide/songdownloader.png)


## Installing Models
Join the [Qosmetics Community](https://discord.gg/qosmetics) to change how your sabers, bloqs or walls look in-game!
To install them go to the `Cosmetics & more tab` in QuestAppVersionSwitcher on your PC (similar to installing mods via your PC).
Press `Install a Cosmetic from disk` and select a saber you downloaded. The models will now appear in-game
in the Qosmetics mod

## Manage Save Data

:::warning
To manage your save data you need the SideQuest Advanced Installer. Get and install it from
[the SideQuest site](https://sidequestvr.com/setup-howto) before continuing.
:::

### Backup Save Data using SideQuest

Open SideQuest and connect your Quest to your PC.

Navigate to `sdcard/Android/data/com.beatgames.beatsaber/files` using the SideQuest file explorer.

![SideQuest Files](~@images/beginners-guide/sqfiles.png)

Save the files: `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` into a folder on your PC. Do not lose these, as they
contain your scores and other settings!

### Restoring Save Data using SideQuest

To restore your data, open SideQuest and connect your Quest to your PC.  
Using the SideQuest file explorer, take the 3 files you saved from the [Backup Save Data using SideQuest](#backup-save-data-using-sidequest)
steps `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` and put them in the
`sdcard/Android/data/com.beatgames.beatsaber/files` folder.

## Useful Links

* [Qosmetics Community](https://discord.gg/qosmetics) - Server dedicated to making and using
  sabers, bloqs, walls, and more for Quest.
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Guides to create your own custom
  sabers, bloqs, and walls for Quest.
* [Quest Mod Development Guide](./modding/README.md#quest-mod-development) - Guides to create your own mods for Quest.
* [QuestBoard website](https://questmodding.com) - A place to get Beat Saber related news and info along with the latest
  mods releases!
* [QuestBoard Discord server](https://discord.gg/P7sUKVnP) - A quest community to hangout and talk about Beat Saber
  related stuff, you can also get a role to get notified when a new mod gets released!
* [Fixing Out of Sync Audio](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber Mod](https://new.scoresaber.com/quest) - Get in-game leaderboards for custom songs
* [ScoreSaber](https://scoresaber.com) - The website to view custom song leaderboards outside of the game.

## Troubleshooting
:::warning I watched a video tutorial on YouTube, but I got stuck/it didn't work. What gives?
We at BSMG **strongly** advise against using any video tutorials for modding. Often, we find that they are either
outdated or contain incomplete, erroneous, or straight up incorrect information.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods).
:::

### Adding mods from beatmods.com or models from modelsaber.com does not work
The reason adding mods from [BeatMods](https://beatmods.com/) or models from [ModelSaber](https://modelsaber.com/)
**DO NOT** work is because those mods and models are for PC Only.

Get Quest compatible Mods from [QuestBoard](https://www.questmodding.com/) or `#quest-mods` in the
[Beat Saber Modding Group Discord](https://discord.gg/beatsabermods), with Quest compatible sabers,
bloqs, and walls in the [Qosmetics Community](https://discord.gg/qosmetics).
Once you have your mod or model qmod use the [QAVS Web Interface](#using-your-pc) to install it.

### Sideloading QAVS failed
When sideloading BMBF and you get the error `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.ComputerElite.questappversionswitcher
signatures do not match the previously installed version; ignoring!`

You will need to uninstall the QAVS version on your Quest. You can do this from SideQuest's `My Apps` menu.

### Core mods don't work

If you are having problems with core mods, please verify that you are not trying to use any outdated mods.
Any mod made for a previous game version is considered outdated. Once you have removed them:

1. Go to `Tools & options`
2. Click `Delete Mods`
3. Go to `Get mods & cosmetics`
4. Click `Open Beat Saber mods page`
5. Click `Download all core mods`

If you had mods installed before this, you'll need to download them again

---

### QAVS web interface not loading
If your QAVS Web Interface is not loading, Make sure you are typing the ip from the tools & options tab in the quest into your browser.
If it still does not load, make sure you are doing the following:

* QAVS is open in the headset and that your headset isn't in sleep mode
* There is http:// at the beginning of the link, not https://
* Your ip hasn't changed, as it changes from time to time
* You have :50002 at the end of your link
* Your pc and your quest are on the same network (keep in mind that ethernet *can* mess with the connection,
try wireless or another device if you've tried all other fixes here)
* You are not using a VPN
* Your ip is not 127.0.0.1
If none of these work restart your quest and try them all again

---

### Beat Saber is crashing
If your game is crashing when doing something, disable your mods one by one, running your game each time to see if the
issue is fixed before asking for help in a support channel.

### I only see a white screen when I open BMBF
If you only see a white screen when you open BMBF from unknown sources, try waiting a few seconds.
If that does not work, restart your quest and try opening BMBF again.
