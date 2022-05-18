---
sidebar: auto
---

# Linux Modding Guide

## Preface
Most Beat Saber mod installers weren't built to run on Linux, so we have to do some small things to get it to work on Linux.
It is very similar to a Windows install, but you will need some workarounds.

::: warning
Using mods in Linux isn't supported by mod developers, so you might encounter bugs!
:::

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

![Beataroni Beat Saber Installation and Version Select Screen](~@images/modding/beataroni-start.png)

4. Select the mods you want to install then press **continue**. You will need `BSIPA` (at the top of the list)
as it is a dependency for all other mods.

![Beataroni Mod List Screen](~@images/modding/beataroni-mod-list.png)

5. Wait for your mods to finish installing.

![Beataroni Log Screen](~@images/modding/beataroni-end.png)

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

![dotnet472](https://i.imgur.com/r62nmZW.png)

::: warning
There will be multiple install prompts you will have to go through, this is normal!
:::

3. Download a [mod installer](/beginners-guide.md#installers) and put it in your [install folder](/faq/install-folder.md).
  <br/>![Install Folder](https://i.imgur.com/ap2ofvE.png)
4. Move your Beat Saber folder onto your desktop and open a terminal
5. Navigate to your Beat Saber folder in a terminal and run your installer in Wine.

```sh
cd Desktop
cd "Beat Saber"
wine BeatSaberModManager.exe
```

![BeatSaberModManager](https://i.imgur.com/sXUhA8x.png)

4. Direct the installer to your Beat Saber directory
![BeatSaberModManager](https://i.imgur.com/DzEaDaI.png)
5. Install your mods. You should now have a Plugins folder.
6. Close out of the installer and put the Beat Saber folder back into common.
![Beat Saber folder](https://i.imgur.com/xWeN0TT.png)
7. Start Beat Saber and check if the mods are installed. If they aren't you may need to [do a DLL override](#dll-override)

### Using a Virtual Machine
::: danger
**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.
:::

Make sure you have [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads) installed before starting.

1. Download a [Windows 10 ISO](https://www.microsoft.com/en-us/software-download/windows10ISO)
2. Make a new Windows 10 virtual machine and start it.
![VirtualBox](https://i.imgur.com/HJMwMSr.png)
3. When asked, select the Windows 10 ISO. and start it.
![VirtualBox](https://i.imgur.com/af0ikmV.png)
4. After you are finished installing Windows, download a [mod installer](/beginners-guide.md#installers) inside the VM.
![Mod Assistant Install](https://i.imgur.com/juZzw1j.png)
5. Make a shared folder by going to 'Devices > Shared Folders > Shared Folder Settings...'.
Make a new shared folder with the common folder `/.local/share/Steam/steamapps/common/` and turn Auto-mount on.
![Shared Folder](https://i.imgur.com/FoV8BE3.png)
![Shared Folder](https://i.imgur.com/rcpnROc.png)
6. Run the mod installer you have downloaded, and manually select your Beat Saber folder, then install your mods.
7. Exit the VM and start Beat Saber. Your mods should be installed. If they aren't, go to [DLL Override](./linux.md#dll-override)

### DLL Override
Wine doesn’t use DLLs the same way Windows does, so you have to change a few things to make the IPA injection work.

::: danger DANGER
Messing with registry files can be dangerous, make sure you don't touch anything besides what the guide tells you to.  
If you messed up the registry file, either verify your game files or reinstall Beat Saber after backing up your files.
:::

1. Navigate to `/.local/share/Steam/steamapps/compatdata/620980/pfx/` and open `user.reg`
2. Inside the file, navigate to `[Software\\Wine\\DllOverrides]`. Try <kbd>Ctrl + F</kbd> and type DllOverrides
  to get there more quickly
3. Paste `"winhttp"="native,builtin"` on the bottom below the others, and save the file.

![DLL Overrides](https://i.imgur.com/dgemtef.png "DLL Overrides")

## Have questions?
Visit the [FAQ](/faq/) or drop by the `#support` tab in the [BSMG Discord](https://discord.gg/beatsabermods)!
