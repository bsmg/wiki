---
prev: false
next: false
description: Learn how to mod Beat Saber using Linux!
---

# Linux Modding Guide

## Preface

Most Beat Saber mod installers weren't built to run on Linux, so we have to do some small things to get it to work on Linux.
It is very similar to a Windows install, but you will need some workarounds.

::: warning
Using mods in Linux isn't supported by mod developers, so you might encounter bugs!
:::

:::info
You only need to install one of these mod managers. Installing multiple of these might conflict with each other making
mods not work in game.
:::

### Using BSManager

::: danger
**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.
:::

> **THIS IS CURRENTLY THE RECOMMENDED MOD INSTALLER AND DOWNGRADER.**

1. To install [BSManager](https://github.com/Zagrios/bs-manager) in your specific distro, just follow the
   instructions within the wiki guide located [here](https://github.com/Zagrios/bs-manager/wiki/Linux#installation).

2. Open BSManager and install the latest Beat Saber version with the recommended label. Click on the recommended version
   then click on the `Download` button.

> **NOTE: It's recommended to mod a downloaded Beat Saber version instead of the original Steam version since the Steam might
> update Beat Saber and break some of the mods installed.**

![BSManager Install Version](/.assets/images/beginners-guide/bsmanager.png)

3. Once done downloading, you will see the downloaded version on the left side panel. Click on that version and navigate
   to the `Mods` tab.

> **NOTE: A popup that will appear to warn you about modding the first time you try to install mods, accept this to continue.**

4. Select the mods you want to download and click on the `Install or update` button.

![BSManager Install Mods](/.assets/images/beginners-guide/bsmanager-mods.png)

5. Start Beat Saber from BSManager. Your mods should be installed.

### Using BeatSaberModManager

::: danger
**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.
:::

1. Download BeatSaberModManager from [Github](https://github.com/affederaffe/BeatSaberModManager/releases) and
   extract it to a directory on your system.

2. Run the executable.
3. Read the Intro, then navigate to the `Mods` tab and select the mods you want to install, finally press `Refresh Mods`.

![BeatSaberModManager Mods Tab](/.assets/images/beginners-guide/beatsabermodmanager.png)

4. Wait for your mods to finish installing.
5. Start Beat Saber. Your mods should be installed.

### Using Beataroni

::: danger
**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.
:::

1. Download Beataroni from [GitHub](https://github.com/geefr/beatsaber-linux-goodies/releases) and
   extract it to a directory on your system.

```sh
tar -xzf Beataroni-linux64-1.0.tar.gz
```

2. Run `Beataroni-Linux.sh`.
3. Type in your Beat Saber installation location and select the correct version then press **continue**.

![Beataroni Beat Saber Installation and Version Select Screen](/.assets/images/modding/beataroni-start.png)

4. Select the mods you want to install then press **continue**. You will need `BSIPA` (at the top of the list)
   as it is a dependency for all other mods.

![Beataroni Mod List Screen](/.assets/images/modding/beataroni-mod-list.png)

5. Wait for your mods to finish installing.

![Beataroni Log Screen](/.assets/images/modding/beataroni-end.png)

6. Start Beat Saber. Your mods should be installed.

### Using Wine and Winetricks

::: danger
**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.
:::

Make sure you have [Wine](https://wiki.winehq.org/Download) and [Winetricks](https://github.com/Winetricks/winetricks/blob/master/README.md)
installed before starting.

1. Make a new 32-bit Wine prefix.

```bash
export WINEARCH="win32"
export WINEPREFIX=~/.winemods
wineboot -u
```

2. Install the dotnet472 and d3dcompiler_47 packages using winetricks. If it asks to restart choose 'Restart later'.

```bash
winetricks dotnet472 d3dcompiler_47
```

![dotnet472](/.assets/images/beginners-guide/dotnet472.png)

::: warning
There will be multiple install prompts you will have to go through, this is normal!
:::

3. Download a [mod installer](/pc-modding.md#installers) and put it in your [install folder](/faq/install-folder.md).
   <br/>![Install Folder](/.assets/images/beginners-guide/linuxMAInstall.png)
4. Move your Beat Saber folder onto your desktop and open a terminal
5. Navigate to your Beat Saber folder in a terminal and run your installer in Wine.

```sh
cd (YourSteamLibraryFolder)/steamapps/common
cd "Beat Saber"
wine ModAssistant.exe
```

![ModAssistant](/.assets/images/beginners-guide/linuxRunWine.png)

After running the command, you should then see this error window. Click ok.

![ModAssistant](/.assets/images/beginners-guide/linuxMAnoInstall.png)

4. Direct the installer to your Beat Saber directory

![ModAssistant](/.assets/images/beginners-guide/linuxGameDirectory.png)

5. Install your mods. You should now have a Plugins folder.
6. Close out of the installer and put the Beat Saber folder back into common.

![Beat Saber folder](/.assets/images/beginners-guide/linuxDirectoryCommon.png)

7. Start Beat Saber and check if the mods are installed. If they aren't you may need to [do a DLL override](#dll-override)

### Using a Virtual Machine

::: danger
**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.
:::

Make sure you have [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads) installed before starting.

1. Download a [Windows 10 ISO](https://www.microsoft.com/en-us/software-download/windows10ISO)
2. Make a new Windows 10 virtual machine and start it.
   ![VirtualBox](/.assets/images/beginners-guide/linuxVirtualBox.png)
3. When asked, select the Windows 10 ISO. and start it.
   ![VirtualBox](/.assets/images/beginners-guide/linuxVBwinInstall.png)
4. After you are finished installing Windows, download a [mod installer](/beginners-guide.md#installers) inside the VM.
   ![Mod Assistant Install](/.assets/images/beginners-guide/linuxVBMAdownload.png)
5. Make a shared folder by going to 'Devices > Shared Folders > Shared Folder Settings...'.
   Make a new shared folder with the common folder `/.local/share/Steam/steamapps/common/` and turn Auto-mount on.
   ![Shared Folder](/.assets/images/beginners-guide/linuxVBsharedfolder.png)
   ![Shared Folder](/.assets/images/beginners-guide/linuxVBfolderautomount.png)
6. Run the mod installer you have downloaded, and manually select your Beat Saber folder, then install your mods.
7. Exit the VM and start Beat Saber. Your mods should be installed. If they aren't, go to [DLL Override](#dll-override)

### DLL Override

Wine doesn't use DLLs the same way Windows does, so you have to change a few things to make the IPA injection work.

::: danger DANGER
Messing with registry files can be dangerous, make sure you don't touch anything besides what the guide tells you to.  
If you messed up the registry file, either verify your game files or reinstall Beat Saber after backing up your files.
:::

1. Navigate to `/.local/share/Steam/steamapps/compatdata/620980/pfx/` and open `user.reg`
2. Inside the file, navigate to `[Software\\Wine\\DllOverrides]`. Try <kbd>Ctrl + F</kbd> and type DllOverrides
   to get there more quickly
3. Paste `"winhttp"="native,builtin"` on the bottom below the others, and save the file.

![DLL Overrides](/.assets/images/beginners-guide/linuxDLLoverride.png 'DLL Overrides')

## Have questions?

Visit the [FAQ](/faq/) or drop by the `#pc-help` tab in the [BSMG Discord](https://discord.gg/beatsabermods)!
