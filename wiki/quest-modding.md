---
sidebar: auto
---
# Quest Modding

## Preface

* This guide is for both Quest 1 and Quest 2.
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
Currently the only recommended way to install custom songs and mods is BMBF sideloaded with [SideQuest using a PC](#installing-bmbf-with-sidequest).

If you do not have access to a PC you can use an [Android Phone or Tablet](/support/modding-with-android.md).
iOS devices such as iPhones or iPads are not supported.

:::warning
Installing BMBF and modding your game will disable Official Multiplayer as well as viewing and uploading scores on the
base game leaderboards.
If you would like to play modded multiplayer, you need the mod, `Beat Together`, which allows for cross-play between pc
and quest and allows for custom songs to be used. The mod can be found in the
[Beat Saber Modding Group](discord.gg/beatsabermods) in `#quest-mods` or on the [Questboard](https://questmodding.com) site.

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://new.scoresaber.com/quest) mod. [This link](https://new.scoresaber.com/quest) will take you to the
ScoreSaber page to set it up.
ScoreSaber does not replace the base game leaderboards, it only adds leaderboards for custom songs.

**Note:** Check the updates channel in the [ScoreSaber Discord](https://discord.gg/WpuDMwU) to see if the mod is available
for the current game version.
:::

### Installing BMBF with SideQuest
If you haven't already, download and setup [SideQuest](https://sidequestvr.com/#/setup-howto)

There are three methods available to obtain BMBF:

* [The SideQuest Store on PC](#download-from-the-sidequest-store)
* [The BMBF website](#download-the-from-the-bmbf-website)
* If you do not have a PC, you can use [the SideQuest Store on Android](/support/modding-with-android.md) as a last resort
  * iOS devices such as iPhones or iPads are not supported
:::tip
If you've previously modded Beat Saber or have scores you want to backup, [Backup your Save Data first!](#backup-save-data-using-sidequest)
:::

#### Download from the SideQuest Store

1. Connect your Quest to your PC then go to [BMBF On SideQuest](https://sidequestvr.com/app/747).
2. Click the `Install To Headset` button.
3. Wait for BMBF to finish installing onto your headset.

Once installed skip to the [BMBF Setup](#bmbf-setup) section of the guide.

#### Download the from the BMBF website
First download the [BMBF APK](https://bmbf.dev/stable) on your PC.

Open SideQuest and connect your Quest to your PC.

If you have a modded game you also need to uninstall it by pressing the `UNINSTALL APP` button.
You can later restore your save from the same menu, after modding.

Select the `Install APK from folder` button shown below and find the latest BMBF apk you downloaded and click on it, or
simply drag the BMBF apk into SideQuest.
Either method will install BMBF to your Quest.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

You can now continue to the [BMBF Setup](#bmbf-setup) section of the guide.

#### BMBF Setup

Once it has been successfully installed, make sure you have the latest version of Beat Saber installed and unmodded.

:::warning
Before modding, run Beat Saber once, play a level and immediately fail!

Modding currently does not work if the experimental multi-user feature is in use. You will need to temporarily remove
all secondary accounts before modding the game. You can add them back later once you have installed your desired mods.
:::

After running Beat Saber once, open BMBF from unknown sources as the picture below shows.
![UnknownSources](~@images/beginners-guide/quest_home-menu.jpg)

Once opened, follow each step in BMBF exactly as you're told to mod your game. Once completed, you should see [Bsaber.com](https://www.bsaber.com)
inside of the BMBF app.
This is where you can download any custom songs available. You can also click on the globe icon in the top right and go
to BeatSaver to download songs too.

If at any point during the install process, you get the `Restore App` popup just click `Close`.
This warning is more directed to pirated versions of the game so if you're just modding there will likely be no consequences
for ignoring it.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

Continue to the [Core Mods](#core-mods) step of the installation process.

## Manage Save Data

### Backup Save Data using SideQuest

Open SideQuest and connect your Quest to your PC. Go to `My Apps` located in the top bar of the window and find Beat Saber.

Navigate to `sdcard/Android/data/com.beatgames.beatsaber/files` using the SideQuest file explorer.

Save the files: `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` into a folder on your PC. Do not lose these, as they
contain your scores and other settings!

### Restoring Save Data using SideQuest

To restore your data, open SideQuest and connect your Quest to your PC.
Go to `My Apps` located in the top bar of the window and find Beat Saber.
Using the SideQuest file explorer take the 3 files you saved from the [Backup Save Data using SideQuest](#backup-save-data-using-sidequest)
steps `AvatarData.dat`, `PlayerData.dat` and `settings.cfg` and put them in the
`sdcard/Android/data/com.beatgames.beatsaber/files` folder.

Go back to the menu and press the circular arrows located beside your latest backup.
Your scores and settings should now be restored.

## Installing Mods

### Core Mods
Before installing any additional mods look in the top right of the BMBF web interface, you should see a red button that
says, `Sync to Beat Saber`.
Click this and let it finish syncing. Then go to your `mods` tab in BMBF. Make sure that you have the 7 core mods:

* Custom Types
* Codegen
* SongLoader
* Playlist Manager
* QuestUI
* SongDownloader
* PinkCore

:::danger
Other mods will not work without these Core Mods!

If one of these mods are not listed, try the reinstall button in the `Tools` Tab inside of BMBF.
If it still does not appear, or mods are appear but not working in-game, see [Core Mods don't work](#core-mods-don-t-work)
for troubleshooting steps.
:::

### Inside your Quest
:::warning
Not all mods are available on QuestBoard!  
If a mod is not seen in here, you should follow the [Using Your PC](#using-your-pc) method instead.
:::

Open BMBF in your Quest and go to the `Browser` tab, there you should see a globe icon similar to what's shown below.
Click it, then click the `QuestBoard` button.

![globequestboard](~@images/beginners-guide/globequestboard.png)

You should be greeted with the [QuestBoard](https://www.questmodding.com/) website below.
Next, select the `Released Mods` tab.

![questboardhome](~@images/beginners-guide/questboardhome.png)

Scroll down with your thumbsticks. You can now select any mod from the list, seen below, and download it by hitting the
download button next to it. Some downloads may redirect you to a website or GitHub page. If so, follow the instructions
onscreen, or select the latest `.qmod` in the Releases list, respectively.

![questboardmods](~@images/beginners-guide/questboardmods.png)

### Using your PC
You can find and download other Quest mods from the [BSMG Discord](https://discord.com/invite/beatsabermods) in
the `#quest-mods` channel.

:::warning
Make sure your Quest and PC are on the same network and that you are using http and not https!
:::

Open BMBF in your Quest and go to the `Tools` tab, there you should see a
web address and a version number similar to what's shown below.

![ip](~@images/beginners-guide/ip.png)

On your PC, open your browser and type the address into the search bar.

You should be greeted with this screen below.

If this doesn't work [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Now just drag any Quest compatible mods into the upload box and sync. If the mod was originally made for an older version,
then it won't automatically enable. To enable an old mod, go to the `Mods` tab and enable it from there.

## Installing Songs
::: tip
Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before
good mapping practices were established. Try downloading songs released between late 2019 and now to get the best
custom levels experience.
:::

### In-game
You can now download songs In-game using SongDownloader (CoreMod)
There are a few steps to downloading songs in-game:
    1. Open BeatSaber
    2. Go into ModSettings (Settings -> ModSettings)
    3. Open SongDownloader tab
    4. Search for a song and download it.

When downloading songs in-game you do not have to restart the game. It automatically loads the song using the SongLoader.
![songdownloader](~@images/beginners-guide/songdownloader.png)

### Inside your Quest
There are 2 sources to getting custom maps inside your Quest using the browser window.

* If you are looking for curated maps and playlists visit [BeastSaber](https://bsaber.com/)
* If you don't like the UI of BeastSaber you could also try [BeatSaver](https://beatsaver.com/)

Both have a OneClick™ button that easily installs that song onto your Quest.
You can switch between these websites using the globe icon in the top right of the browser window.

An easy way to download different kinds of songs is to use `Syncsaber` which you can access by going into BMBF on your quest
and clicking the tab called `Syncsaber`. Here you can download songs with a click of a button, you can choose from
different "settings". For example, you can download the top 20 songs in [BeatSaver's](https://beatsaver.com/) "hot" section
or the 50 hardest ranked songs.

Another method is using the `Bookmark` feature on [BeastSaber](https://bsaber.com/). After creating an account you can click
a little bookmark icon on a song and if you later delete all your songs from the Quest you can redownload the ones that
are bookmarked with OneClick™.

### Using your PC
If you are unable to install songs inside your Quest, you can install maps using your computer similar to installing mods.

1. Visit [BeastSaber](https://bsaber.com/) or [BeatSaver](https://beatsaver.com/) on your computer
2. Download the zip
3. Follow the [Installing mods using your PC](#using-your-pc) steps up to the upload files screen.
4. Drag and drop the map zip in, and it should be installed!

If the web interface doesn't load [click here](#bmbf-web-interface-not-loading) for some troubleshooting steps.

:::tip
You can also download playlists in the same way. You can find various playlists on [BeastSaber](https://bsaber.com/category/playlists/)
or various community discords. You can also make your own using [BMBF Manager](https://github.com/ComputerElite/BM#bmbf-manager)
or [Playlist Editor Pro](https://beatsaberquest.com/playlisteditor-pro/).

If you want to test a map you have created see the [Testing on a Quest](/mapping/#testing-on-a-quest) Section in the
Mapping Wiki section for steps on packing it up for testing!
:::

## Installing Models
Join the [Qosmetics Community](https://discord.gg/qosmetics) to change how your <strike>menu title</strike> (doesn't work on 1.16.4, use Qu(e)stomMenuText mod), sabers, bloqs or walls look in-game!

## Useful Links

* [Qosmetics Community](https://discord.gg/qosmetics) - Server dedicated to making and using
  sabers, bloqs, walls, and more for Quest.
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Guides to create your own custom
  sabers, bloqs, and walls for Quest.
* [QuestBoard website](https://questmodding.com) - A place to get Beat Saber related news and info along with the latest
  mods releases!
* [QuestBoard discord server](https://discord.gg/P7sUKVnP) - A quest community to hangout and talk about Beat Saber
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
doesn't work is because those mods and models are for PC Only.

Get Quest compatible Mods from [QuestBoard](https://www.questmodding.com/) or `#quest-mods` in the
Beat Saber Modding Group Discord, with Quest compatible sabers, bloqs, and walls in the [Qosmetics Community](https://discord.gg/qosmetics).
Once you have your mod or model qmod use the [BMBF Web Interface](#using-your-pc) to install it.

### Sideloading BMBF failed
When sideloading BMBF you get the error `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF
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
If your BMBF Web Interface is not loading, be sure that you're typing the IP from the tools tab
into your browser on your computer that's on the same network. Make sure that:

1. Your IP is not `127.0.0.1`, if that shows up try rebooting your headset and/or router.
2. BMBF is open in the headset
3. There is `http://` at the beginning of the link, not `https://`
4. You have `:50000` at the end of your link
5. Your PC and Quest are on the same wifi network
6. Your IP is hasn't changed as it changes from time to time

If none of these work, restart your Quest and go through the list again.

---

### BMBF not loading configuration after a few minutes
This is likely due to using BMBF on a game version it was not built for. Such as using BMBF for Beat Saber version `1.13.0`
when the version of the game installed on the headset is `1.12.2`.  
If the game version matches what the BMBF release page says its built for, try restarting your headset. If it still does
not work use the [BMBF Web Interface](#using-your-pc) and click `Quick Fix` in the Tools tab.

### Beat Saber is black when I launch it
Open the library on your Quest. Click the three dots next to Beat Saber and then click `Permissions`.
In the menu that pops up, enable storage permissions and try launching the game again.

---

### My Sabers and Mods wont enable/work
This is most likely due to having an outdated BMBF App, grab the latest [BMBF Release](https://bmbf.dev/stable).
If the BMBF version for your Beat Saber is not there then please wait a while for the unicorns to update BMBF.  

* If your level doesn't load then try installing mapping extensions from #quest-mods. It may also require the mod Noodle
  Extensions which isn't on Quest yet.
* If your BMBF is on the latest version and mods wont be enabled in game, uninstall Beat Saber with the uninstall BS button
  in the BMBF Tools tab then reinstall and remod.
* In very very very rare cases, BMBF does not have file permissions to copy mods into the right location.
  Check in SideQuest to make sure BMBF has file permissions.

---

### Beat Saber is crashing
If your game is crashing when doing something, disable your mods one by one, running your game each time to see if the
issue is fixed before asking for help in a support channel.

### I only see a white screen when I open BMBF
If you only see a white screen when you open BMBF from unknown sources, try waiting a few secconds.
If that does not work, restart your quest and try opening BMBF again.

### My Beat Saber gets 3 dots when I launch
If your Beat Saber is getting 3 dots when launching make sure that:

1. You launched and played one song before modding the game
2. You're not using a pirated version of the game
3. Make sure you're using the latest version of BMBF
