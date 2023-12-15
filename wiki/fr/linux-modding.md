- - -
prev: false next: false description: Learn how to mod Beat Saber using Linux!
- - -

# Guide du modding sur Linux

## Préambule

La plupart des installateurs de mods Beat Saber ne sont pas conçus pour fonctionner sous Linux, il faut donc préparer certains éléments pour faire fonctionner l'ensemble. Bien que similaire à une installation sous Windows, il est nécessaire d'user de certaines techniques.

::: warning L'utilisation de mods sous Linux n'est pas prévue par leur(s) développeur(s) respectif(s). Vous pourriez donc rencontrer des bugs !
:::

### Utilisation de BeatSaberModManager

::: danger **Exécutez le jeu au moins une fois** avant d'essayer de modder votre jeu ! Ceci s'applique à chaque réinstallation du jeu. :::

1. Téléchargez BeatSaberModManager via [GitHub](https://github.com/affederaffe/BeatSaberModManager/releases) et extrayez-le sur votre système.

2. Démarrez le fichier exécutable.
3. Lisez l'introduction puis accédez à l'onglet `Mods` et sélectionnez les mods que vous souhaitez installer. Enfin, appuyez sur `Rafraîchir les mods`.

![BeatSaberModManager Mods Tab](/.assets/images/beginners-guide/beatsabermodmanager.png)

4. Attendez que vos mods finissent de s'installer.
5. Démarrez Beat Saber. Vos mods devraient être installés.

### Utilisation de Beataroni

::: danger **Démarrez le jeu au moins une fois** avant d'essayer de modder votre jeu ! Ceci s'applique à chaque réinstallation du jeu. :::

1. Téléchargez BeatSaberModManager via [GitHub](https://github.com/geefr/beatsaber-linux-goodies/releases) et extrayez-le sur votre système.

```sh
tar -xzf Beataroni-linux64-1.0.tar.gz
```

2. Exécutez `Beataroni-Linux.sh`.
3. Entrez l'emplacement de votre installation Beat Saber puis sélectionnez la bonne version et appuyez sur **continuer**.

![Beataroni Beat Saber Installation and Version Select Screen](/.assets/images/modding/beataroni-start.png)

4. Sélectionnez les mods que vous souhaitez installer puis appuyez sur **continuer**. Vous aurez besoin de `BSIPA` (en haut de la liste) car il s'agit d'une dépendance pour tous les autres mods.

![Beataroni Mod List Screen](/.assets/images/modding/beataroni-mod-list.png)

5. Attendez que vos mods finissent de s'installer.

![Beataroni Log Screen](/.assets/images/modding/beataroni-end.png)

6. Démarrez Beat Saber. Vos mods devraient être installés.

### Utilisation de Wine et Winetricks

::: danger **Démarrez le jeu au moins une fois** avant d'essayer de modder votre jeu ! Ceci s'applique à chaque réinstallation du jeu. :::

Assurez-vous d'avoir installé [Wine](https://wiki.winehq.org/Download) et [Winetricks](https://github.com/Winetricks/winetricks/blob/master/README.md) avant de commencer.

1. Créez un nouveau préfixe Wine 32 bits.

```bash
export WINEARCH="win32"
export WINEPREFIX=~/.winemods
wineboot -u
```

2. Installez les paquets dotnet472 et d3dcompiler_47 en utilisant winetricks. S'il demande à redémarrer, choisissez "Redémarrer plus tard" ou "Restart later".

```bash
winetricks dotnet472 d3dcompiler_47
```

![dotnet472](/.assets/images/beginners-guide/dotnet472.png)

::: warning Vous allez devoir passer par plusieurs installateurs, c'est normal !
:::

3. Download a [mod installer](/pc-modding.md#installers) and put it in your [install folder](/faq/install-folder.md). <br/>![Install Folder](/.assets/images/beginners-guide/linuxMAInstall.png)
4. Déplacez votre dossier Beat Saber sur le bureau et ouvrez le terminal
5. Accédez à votre dossier Beat Saber dans le terminal et exécutez l'installateur via Wine.

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

### Utilisation d'une machine virtuelle

::: danger **Run the game at least once** before trying to mod the game! This applies to reinstalling your game too. :::

Make sure you have [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads) installed before starting.

1. Download a [Windows 10 ISO](https://www.microsoft.com/en-us/software-download/windows10ISO)
2. Make a new Windows 10 virtual machine and start it. ![VirtualBox](/.assets/images/beginners-guide/linuxVirtualBox.png)
3. When asked, select the Windows 10 ISO. and start it. ![VirtualBox](/.assets/images/beginners-guide/linuxVBwinInstall.png)
4. After you are finished installing Windows, download a [mod installer](/beginners-guide.md#installers) inside the VM. ![Mod Assistant Install](/.assets/images/beginners-guide/linuxVBMAdownload.png)
5. Make a shared folder by going to 'Devices > Shared Folders > Shared Folder Settings...'. Make a new shared folder with the common folder `/.local/share/Steam/steamapps/common/` and turn Auto-mount on. ![Shared Folder](/.assets/images/beginners-guide/linuxVBsharedfolder.png) ![Shared Folder](/.assets/images/beginners-guide/linuxVBfolderautomount.png)
6. Run the mod installer you have downloaded, and manually select your Beat Saber folder, then install your mods.
7. Exit the VM and start Beat Saber. Your mods should be installed. If they aren't, go to [DLL Override](#dll-override)

### DLL Override

Wine doesn't use DLLs the same way Windows does, so you have to change a few things to make the IPA injection work.

::: danger DANGER Messing with registry files can be dangerous, make sure you don't touch anything besides what the guide tells you to.  
If you messed up the registry file, either verify your game files or reinstall Beat Saber after backing up your files. :::

1. Navigate to `/.local/share/Steam/steamapps/compatdata/620980/pfx/` and open `user.reg`
2. Inside the file, navigate to `[Software\\Wine\\DllOverrides]`. Try <kbd>Ctrl + F</kbd> and type DllOverrides to get there more quickly
3. Paste `"winhttp"="native,builtin"` on the bottom below the others, and save the file.

![DLL Overrides](/.assets/images/beginners-guide/linuxDLLoverride.png "DLL Overrides")

## Have questions?

Visit the [FAQ](/faq/) or drop by the `#pc-help` tab in the [BSMG Discord](https://discord.gg/beatsabermods)!
