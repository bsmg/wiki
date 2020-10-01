---
sidebar: auto
---
# Quest Modding

## Installation 

Currently the only recommended way to install custom songs and mods is BMBF sideloaded with SideQuest.
* [BMBF apk](https://bmbf.dev/stable)
:::warning
Installing BMBF and modding your game will disable viewing and uploading scores on base game leaderboards. This is because Oculus does not authenticate scores from modded games. See [Scoresaber](https://new.scoresaber.com/quest) for information on setting up ScoreSaber, the community leaderboard system on your Quest. 

Note: Scoresaber does not replace the base game leaderboards, it only adds leaderboards for custom songs.
:::
### Installing BMBF with SideQuest

If you haven't already, download and setup [SideQuest](https://sidequestvr.com/#/setup-howto)

Open SideQuest and connect your Quest to your PC. If you've previously modded Beat Saber or have scores you want to backup, go to `My Apps` located in the top bar of the window and find Beat Saber.

Click the cog next to it then press the `BACKUP GAME DATA` button, if you have a modded game you also need to uninstall it by pressing the `UNINSTALL APP` button.

![SideQuestUninstall](~@images/beginners-guide/squninstall.png)

You can later restore your save from the same menu, after modding.

Install the latest BMBF apk via the `Install APK from folder` button shown below.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

Once they've successfully installed, make sure you have the latest version of Beat Saber installed and unmodded. 
:::warning
Run Beat Saber once and close it before modding!
:::

After running Beat Saber once, open BMBF from Oculus TV channels tab or Unknown Sources in your library. Follow each step exactly as you're told, and then you should see [bsaber.com](https://www.bsaber.com). This is where you can download any custom songs available.

If, at any point during the install process, you get the `Restore App` popup just click `Close`, the warning is more directed to pirated versions of the game so if you're just modding there will likely be no consequences for ignoring it.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

## Restoring save data

### Restoring from SideQuest

Go back to the same menu you used to backup your data and click the `OPEN BACKUPS` button.
From there, find your newest backup folder, open it, and delete the Mods folder (this is to prevent potentially old or incompatible mods from breaking your game).

Afterwards, go back to the menu and press the circular arrows located beside your latest backup. This is to restore your scores.
The button is highlighted in the image [here](#installing-bmbf-with-sidequest).

## Installing mods

:::warning
Make sure your Quest and PC are on the same network!
:::

Open BMBF in your Quest and go to the `Tools` tab, there you should see a web address and a version number similar to what's show below.

![ip](~@images/beginners-guide/ip.png)

On your PC, open your browser and type the address into the search bar.

You should be greeted with this screen below.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Now just drag any Quest compatible mods into the upload box and sync. If the mod was originally made for an older version, then it won't automatically enable. To enable an old mod, go to the `Mods` tab and enable it from there.

If you want to use the same method of downloading songs as you do in BMBF in your Quest, just replace `upload` in the URL with `browser`.

## Installing songs

### Inside your Quest
There are 2 sources to getting custom maps inside your Quest using the browser window.
* If you are looking for curated maps and playlists visit [BeastSaber](https://bsaber.com/)
* If you don't like the UI of BeastSaber you could also try [BeatSaver](https://beatsaver.com/)

Both have a 1click button that easily installs that song onto your Quest. You can switch between these websites using the globe icon in the top right of the browser window.

### Using your PC
If you are unable to install songs inside your Quest, you can install maps using your computer similar to installing mods. 
1. Visit [BeastSaber](https://bsaber.com/) or [BeatSaver](https://beatsaver.com/) on your computer
2. Download the zip
3. Follow the [Installing mods](#installing-mods) steps up to the upload files screen.
4. Drag and drop the map zip in and it should be installed!

:::tip 
If you want to test a map you have created see the [Testing on a Quest](/mapping/#testing-on-a-quest) Section in the Mapping Wiki section for steps on packing it up for testing!
:::

## Useful links and alternative guides

* [Oculus Quest BMBF Installation Guide](https://bsaber.com/oculus-quest-custom-songs/)
* [General Guide by Sc2ad for Learning The Basics of Asset Modding](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md)
* [Collection of All Current Guides for Asset Mods Such As Sabers and Notes Made by RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki)
* [QuestSaber Community](https://discord.gg/NXnPYEh) - Server dedicated to making and using Quest Sabers
* [Guide on creating Qsabers](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/Creating-Qsabers) - Quest specific sabers that would be compatible between game updates
* [Fixing Out of Sync Audio](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber - Leaderboards for Custom Songs](https://new.scoresaber.com/quest)

## Troubleshooting
### Adding mods from the headset/bsaber.com doesn't work
The reason adding mods and sabers from [BeastSaber](https://bsaber.com/) doesn't work is because those mods and sabers are intended for PC Only. To add mods and sabers for the quest use the BMBF Web Interface [How To Access BMBF Web Interface](https://bsmg.wiki/quest-modding.html#installing-mods) 

Get Quest compatible Sabers and Mods from `#quest-mods` or `#quest-assets` in the Beat Saber Modding Group Discord, or you can find Quest compatible sabers on [RedBrumbler's GitHub](https://github.com/RedBrumbler/BMBFCustomSabers), or [QuestSaber Community](https://discord.gg/NXnPYEh). Once you have your mod zip use the [BMBF Web Interface](#installing-mods) to install it.
___
### Sideloading BMBF failed
When sideloading BMBF you get the error `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!"`

You will need to uninstall the BMBF version on your Quest. You can do this from SideQuest's `My Apps` menu.
___
### BMBF web interface not loading
If your BMBF Web Interface is not loading be sure that you're typing the ip from the tools tab into your browser on your computer thats on the same network.
Make sure that:
1) Your IP is not `127.0.0.1`, if that shows up try rebooting your headset and/or router.
2) BMBF is open in the headset
3) There is `http://` at the beginning of the link, not `https://`
4) You have `:50000` at the end of your link
5) Your PC and Quest are on the same wifi network
6) Your IP is still the same as it can change from time to time

If none of these work, restart your Quest and go through the list again.
___
### BMBF not loading configuration after a few minutes
This is likely due to using an outdated version of Beat Saber being used with BMBF.
If you are not using an outdated version then try restarting your headset, and if it continues use the BMBF Web Interface to click Quick Fix. 
___
### My Sabers and Mods wont enable/work!
This is most likely due to having an outdated BMBF Client, grab the latest [BMBF Release](https://bmbf.dev/stable). If the BMBF version for your Beat Saber is not there then please wait a while for the unicorns to update BMBF.  
* If your mod is supposed to be compatible with your version of BMBF, then make sure there is no folder separating the contents of the .zip file. 
* If your level doesn't load then try installing mapping extensions from #quest-mods
* If your BMBF is on the latest version and mods wont be enabled in game then uninstall Beat Saber with the uninstall BS button in the BMBF Tools tab and reinstall and remod.
___
### My Beat Saber gets 3 dots when I launch!
If your Beat Saber is getting 3 dots when launching make sure that:
1) You launched and played one song before modding the game
2) You're not using a pirated version of the game
3) Make sure you're using the latest version of BMBF


