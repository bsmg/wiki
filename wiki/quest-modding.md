---
sidebar: auto
---

# Quest Modding

## Preface

- This guide is for both Quest 1 and Quest 2.
- Nobody has yet been banned for modding.

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

## Installation

Currently the only recommended way to install custom songs and mods is BMBF sideloaded with [SideQuest using a PC](#installing-bmbf-with-sidequest).

If you do not have access to a PC you can use an [Android Phone or Tablet](/support/modding-with-android.md).

To use Chromebooks and iOS devices such as iPhones or iPads you need to have a [Raspberry Pi](https://www.raspberrypi.com/).
When you have one, visit [Modding With a Raspberry Pi](./raspi-modding.md) to get started.

:::warning
Installing BMBF and modding your game will disable Official Multiplayer as well as viewing and uploading scores on the
base game leaderboards.
If you would like to play modded multiplayer, you need the mods, `Beat Together` and `MultiplayerCore`, which allows
for cross-play between PC and Quest and for custom songs to be used. These mods should automatically be
installed when setting up BMBF.

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://scoresaber.com/quest) mod. [This link](https://scoresaber.com/quest) will take you to the
ScoreSaber page to set it up.
ScoreSaber does not replace the base game leaderboards, it only adds leaderboards for custom songs.

**Note:** Check the updates channel in the [ScoreSaber Discord](https://discord.gg/WpuDMwU) to see if the mod is available
for the current game version.
:::

### Installing BMBF with SideQuest

If you haven't already, download and install the [SideQuest Easy Installer](https://sidequestvr.com/setup-howto).

**Note:** If you are on iOS, for `Step 4: Enable Developer Mode and Reboot` follow these steps instead

![iOSHowTo](/.assets/images/beginners-guide/EnableDevModeIOS.png)

There are two methods available to obtain BMBF:

- [The SideQuest Store on PC and Mac](#download-from-the-sidequest-store)
- If you do not have a PC, you can use [the SideQuest Store on Android](/support/modding-with-android.md)
  - Chromebooks and iOS devices such as iPhones or iPads are not supported.
    :::tip
    If you've previously modded Beat Saber or have scores you want to backup, [backup your Save Data first!](#backup-save-data-using-sidequest)
    :::

#### Download from the SideQuest Store

1. After setting up SideQuest, search for `BMBF` or locate it in the Games & Apps page in your headset.
2. Click the `Download App (Sideload)` button on the page then the `Install` button when prompted.
3. Wait for BMBF to finish installing onto your headset and allow app installation from unknown sources if needed.

#### BMBF Setup

Once BMBF has been successfully installed, make sure you have the latest supported version of Beat Saber installed and unmodded.
Check the [BSMG](https://discord.gg/beatsabermods) `#modding-announcements` channel or
[QuestBoard](https://www.questmodding.com/) to see which game version this is and for other modding news.

:::warning
Before modding, run Beat Saber once, play a level and immediately fail!

Modding currently does not work if the experimental multi-user feature is in use. You will need to temporarily remove
all secondary accounts before modding the game. You can add them back later once you have installed your desired mods.
:::

After running Beat Saber once, open BMBF from unknown sources as the picture below shows.
![UnknownSources](/.assets/images/beginners-guide/quest_home-menu.jpg)

Once opened, follow each step in BMBF exactly as you're told to mod your game. Once completed, you should see
[QuestBoard](https://www.questmodding.com/) with [BeastSaber](https://www.bsaber.com) loaded inside of the BMBF app.
This is where you can download any custom songs available. You can also click the BeatSaver button to download songs too.

After successfully modding your game, the `Restore App` popup will appear. You can just click `Close`.

When trying to launch Beat Saber after modding it, you will likely get the Restore App popup again. This time, select
Open App instead (hitting Close at this point will do nothing). This warning is more directed to pirated
versions of the game so if you're just modding there will likely be no consequences for ignoring it.

![RestoreApp](/.assets/images/beginners-guide/restoreapp.png)

Continue to the [Core Mods](#core-mods) step of the installation process.

## Manage Save Data

:::warning
To manage your save data you need the SideQuest Advanced Installer. Get and install it from
[the SideQuest site](https://sidequestvr.com/setup-howto) before continuing.
:::

### Backup Save Data using SideQuest

Open SideQuest and connect your Quest to your PC.

Navigate to `sdcard/Android/data/com.beatgames.beatsaber/files` using the SideQuest file explorer.

![SideQuest Files](/.assets/images/beginners-guide/sqfiles.png)

Save the files: `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` into a folder on your PC. Do not lose these, as they
contain your scores and other settings!

### Restoring Save Data using SideQuest

To restore your data, open SideQuest and connect your Quest to your PC.  
Using the SideQuest file explorer, take the 3 files you saved from the [Backup Save Data using SideQuest](#backup-save-data-using-sidequest)
steps `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` and put them in the
`sdcard/Android/data/com.beatgames.beatsaber/files` folder.

## Installing Mods

### Core Mods

Before installing any additional mods look in the top right of the BMBF web interface, you should see a red button that
says, `Sync to Beat Saber`.
Click this and let it finish syncing. Then go to your `mods` tab in BMBF. Make sure that you have the 12 core mods:

- BeatTogether
- MultiplayerCore
- Codegen
- Custom Types
- PlayerData Keeper
- Pink Core
- Playlist Core
- Playlist Manager
- Quest UI
- Song Downloader
- Song Loader
- Mod List

:::danger
Other mods will not work without these Core Mods!

If one of these mods are not listed, try the `Reload Mods` and `Check Core Mod Updates` button in the `Tools` Tab inside
of BMBF.
If it still does not appear, or mods appear but not working in-game, see [Core Mods don't work](#core-mods-don-t-work)
for troubleshooting steps.
:::

### Inside your Quest

:::warning
Not all mods are available on QuestBoard!  
If a mod is not seen in here, you should follow the [Using Your PC](#using-your-pc) method instead.
:::

Open BMBF in your Quest and go to the `Browser` tab. The QuestBoard website should automatically open.  
If not, click `Choose Website` at the top right, then click the `QuestBoard` button.

![globequestboard](/.assets/images/beginners-guide/globequestboard.png)

You should be greeted with the [QuestBoard](https://www.questmodding.com/) website below.
Next, select the `Get Mods` tab.

![questboardhome](/.assets/images/beginners-guide/questboardhome.png)

Scroll down by clicking and dragging the pointer. You can now select any mod from the list, seen below, and download it
by hitting the download button next to it. Some downloads may redirect you to a website or GitHub page. If so, follow the
instructions onscreen, or select the latest `.qmod` in the Releases list, respectively.

![questboardmods](/.assets/images/beginners-guide/questboardmods.png)

### Using your PC

You can find and download other Quest mods from the [BSMG Discord](https://discord.com/invite/beatsabermods) in
the `#quest-mods` channel.

:::warning
Make sure your Quest and PC are on the same network and that you are using http and not https!
:::

Open BMBF in your Quest and go to the `Tools` tab, there you should see a
web address and a version number similar to what's shown below.

![ip](/.assets/images/beginners-guide/ip.png)

On your PC, open your browser and type the address into the search bar.

You should be greeted with this screen below.

If this doesn't work [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

![bmbfweb](/.assets/images/beginners-guide/bmbfweb.png)

Now just drag any Quest compatible mods into the upload box and sync. If the mod was originally made for an older version,
then it won't automatically enable. To enable an old mod, go to the `Mods` tab and enable it from there.

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

![songdownloader](/.assets/images/beginners-guide/songdownloader.png)

### Inside BMBF

There are 2 sources to getting custom maps inside your Quest using the browser window.

- If you are looking for curated maps and playlists visit [BeastSaber](https://bsaber.com/)
- If you don't like the UI of BeastSaber you could also try [BeatSaver](https://beatsaver.com/)

Both have a OneClick™ button that easily installs that song onto your Quest.
You can switch between these websites using the globe icon in the top right of the browser window.

An easy way to download different kinds of songs is to use `SyncSaber`, which you can access by going into BMBF on your Quest
and clicking the tab called `SyncSaber`. Here, you can download songs with a click of a button by choosing from
different "settings". For example, you can download the top 20 songs in [BeatSaver's](https://beatsaver.com/) "hot" section
or the 50 hardest ranked songs.

### Using your PC

If you are unable to install songs inside your Quest, you can install maps using your computer similar to installing mods.

1. Visit [BeastSaber](https://bsaber.com/) or [BeatSaver](https://beatsaver.com/) on your computer
2. Download the zip
3. Follow the [Installing mods using your PC](#using-your-pc) steps up to the upload files screen.
4. Drag and drop the map zip in, and it should be installed!

If the web interface doesn't load [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

:::tip
You can also download playlists in the same way. You can find various playlists on [BeastSaber](https://bsaber.com/category/playlists/)
or various community discords. You can also make your own using [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager).

If you want to test a map you have created see the [Testing on a Quest](/mapping/#testing-on-a-quest) Section in the
Mapping Wiki section for steps on packing it up for testing!
:::

## Installing Models

Join the [Qosmetics Community](https://discord.gg/qosmetics) to change how your sabers, bloqs or walls look in-game!

## Downgrading

Check `#modding-announcements` in [BSMG](https://www.discord.gg/beatsabermods) to see if modding on the latest version
of the game is possible. If mods are not updated for the latest version, you will need to downgrade to be able to mod.

The easiest method to get to the right version, is to go to [OculusDB](https://oculusdb.rui2015.me/guide/quest?game=Beat%20Saber)
by **ComputerElite** and follow the instructions.

With these steps done, you can now start modding your game!

::: tip Something not working?
You can visit the `#quest-help` channel in the [BSMG Discord](https://discord.gg/beatsabermods) and ask.

Remember that only the latest moddable version is supported. Downgrade support to other versions is on a voluntary basis
and not guaranteed.
:::

## Useful Links

- [Qosmetics Community](https://discord.gg/qosmetics) - Server dedicated to making and using
  sabers, bloqs, walls, and more for Quest.
- [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Guides to create your own custom
  sabers, bloqs, and walls for Quest.
- [Quest Mod Development Guide](./modding/#quest-mod-development) - Guides to create your own mods for Quest.
- [QuestBoard website](https://questmodding.com) - A place to get Beat Saber related news and info along with the latest
  mods releases!
- [QuestBoard Discord server](https://discord.gg/P7sUKVnP) - A quest community to hangout and talk about Beat Saber
  related stuff, you can also get a role to get notified when a new mod gets released!
- [Fixing Out of Sync Audio](https://bsaber.com/quest-out-of-sync/)
- [ScoreSaber Mod](https://scoresaber.com/quest) - Get in-game leaderboards for custom songs
- [ScoreSaber](https://scoresaber.com) - The website to view custom song leaderboards outside of the game.

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
Once you have your mod or model qmod use the [BMBF Web Interface](#using-your-pc) to install it.

### Sideloading BMBF failed

When sideloading BMBF and you get the error `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF
signatures do not match the previously installed version; ignoring!`

You will need to uninstall the BMBF version on your Quest. You can do this from SideQuest's `My Apps` menu.

### Core mods don't work

If you are having problems with core mods, please verify that you are not trying to use any outdated mods.
Any mod made for a previous game version is considered outdated. Once you have removed them:

1. Go to `Tools`
2. Click `Delete Mods`
3. Click `Sync to Beat Saber`

If you had mods installed before this, turn them off then on again to reinstall them.

---

### BMBF web interface not loading

If your BMBF Web Interface is not loading, Make sure you are typing the ip from the tools tab in the quest into your browser.
If it still does not load, make sure you are doing the following:

- BMBF is open in the headset and that your headset isn't in sleep mode
- There is http:// at the beginning of the link, not https://
- Your ip hasn't changed, as it changes from time to time
- You have :50000 at the end of your link
- Your pc and your quest are on the same network (keep in mind that ethernet _can_ mess with the connection,
  try wireless or another device if you've tried all other fixes here)
- You are not using a VPN
- Your ip is not 127.0.0.1
  If none of these work restart your quest and try them all again

---

### My Sabers and Mods wont enable/work

This is most likely due to having an outdated BMBF App, grab the latest BMBF Release by downloading it from SideQuest.
If the BMBF version for your Beat Saber is not there then please wait a while for the unicorns to update BMBF.

- If you can't press the Play button on a map press the question mark at the top right to see which mods are missing and
  install them.
- If your BMBF is on the latest version and mods wont be enabled in game, uninstall Beat Saber with the uninstall BS button
  in the BMBF Tools tab then reinstall and remod.

---

### Beat Saber is crashing

If your game is crashing when doing something, disable your mods one by one, running your game each time to see if the
issue is fixed before asking for help in a support channel.

### I only see a white screen when I open BMBF

If you only see a white screen when you open BMBF from unknown sources, try waiting a few seconds.
If that does not work, restart your quest and try opening BMBF again.
