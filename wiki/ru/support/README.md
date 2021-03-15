---
sidebar: auto
---

# Поддержка

## Содержание

0. [Updates](#_0-updates)
1. [No mods?](#_1-no-mods)
2. [Game Issues After Modding](#_2-game-issues-post-modding)
3. [Часто задаваемые вопросы](#_3-common-questions)
4. [Miscellaneous Troubleshooting](#_4-miscellaneous-troubleshooting)
5. [Still Having Issues](#_5-still-having-issues)

## 0. Обновления
After an update, the BSMG discord `#server-announcements` channel should have the most up to date instructions on the status of mods. Ниже приведены более подробные инструкции по наиболее распространенной процедуре.

### Update broke my mods
**Запустите игру один раз** после обновления. Then, reinstall your mods using an installer linked in the [beginner's guide](/beginners-guide), such as Mod Assistant.

## 1. Нет модов?

### Misc Questions

#### 1.1 No mods appear on a fresh copy of the game
Во-первых, убедитесь, что нижеописанные утверждения верны:

* **You ran the game once before installing mods**. BSIPA removes all mods on the first run of a fresh update to prevent broken old mods from loading on a new version. Reinstall mods again if this is the case.
* Steam/Oculus is launching Beat Saber from the **same installation** that mods are in. *e.g. mods are on the D drive but steam is launching from the C drive.* Set the correct install location in your choice of installer.
* If you installed mods manually, make sure you included all the files from the download and put them in the correct folders, as well as their dependencies.

#### 1.2 I had mods installed on an older version, but nothing loads after an update
Если пункты из раздела 1.1 верны, то попробуйте нижеприведенные решения по порядку.

##### Solution 1

* Обновите BSIPA до последней версии (в ModAssistant или вручную)
* Перейдите в свою папку Beat Saber
* Запустите `IPA.exe`

##### Solution 2

* [Verify your game files](#verify-game-files-for-steam) (Steam only, Oculus users refer to Solution 4)
* Update BSIPA to the latest version
* Go into your Beat Saber folder
* Run `IPA.exe`

##### Solution 3

* Перейдите в свою папку Beat Saber
* Создайте резервную копию папки `UserData` (необязательно)
* Удалите папку UserData

::: warning This will reset all plugin settings! :::

##### Solution 4

* Выполните [чистую установку](#clean-installation)

#### 1.2 Mod Assistant doesn't seem to be installing any plugins
The installers download mods to `Beat Saber/IPA/Pending`, BSIPA moves these files to root folder when you launch the game. If your game Plugins folder still is empty afterwards, run `IPA.exe` again and make sure that nothing is preventing it from running, e.g. `Anti-viruses, Admin permissions, etc.`

## 2. Проблемы игры после установки модов

### Game Won't Start

#### 2.1 GetThreadContext Failed Error
If a window pops up saying `GetThreadContext Failed` and/or you hear a Windows error sound, you may have software on your PC that breaks Beat Saber mods. Many third-party anti-cheat software like ESEA and FaceIt disrupt BSIPA from applying mods to Beat Saber, even when not running. Some Anti-Virus software also exhibit similar behavior.

To solve this problem:

1. Удалите описанное выше программное обеспечение.
2. Перезагрузите компьютер.
3. Удостоверьтесь, что остатков программного обеспечения в папках `AppData` больше не осталось.
4. Запустите игру. If problems persist then try the following: `Additional Note: The problem can continue to persist due to lacking permissions or exceptions, any program that can
block BSIPA, or programs marked suspicious can make this problem persist` Steam: [Verify Steam Game Files](#verify-game-files-for-steam) Oculus: Perform a [Clean Installation](#clean-installation)

This should fix the problem.

#### 2.2 Frozen on Startup
If the game is frozen at the Health and Safety screen, or you see an avatar T-posing with no control of the game, [verify your files](#verify-game-files-for-steam) if you have the game on Steam, or reinstall the game on Oculus Home. Refer to [Clean Installation](#clean-installation)

This seems to happen when updating Beat Saber and having mods installed previously, but not to users with clean installs of the game.

### Framerate Issues

#### 2.3 The game stutters unbearably after installing mods
If the game lags so badly that you can barely click the `Continue` button on the Health & Safety screen, then verify files if you have the game on Steam, or reinstall the game on Oculus Home. Do the same if it won't start up at all and shows no error messages when trying to launch the game.

If that didn't solve the issue, then check section [2.4 Improving framerate](#framerate-issues)

#### 2.4 Improving Framerate
If [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) didn't improve your fps, then your PC might simply be struggling to keep up with the stress caused by mods. Here are some things you can do to improve framerate, in no particular order:

* Check to see if NVIDIA GEFORCE EXPERIENCE set the rendering scale for Beat Saber past the default of 1.0. It may have set it to a higher number to 1.4 or 1.8 which significantly increases the GPU load.
* Use a less complex custom avatar.
* The custom saber **Plasma Katanas** have tons of custom events and are known to introduce lag if you miss.
* CameraPlus can be very taxing, especially if you have multiple cameras and increase the FOV.
* Turn down Render Scale, Anti-Aliasing, mirror, fog, etc in the base game settings.
* For Oculus Rift (CV1) players: consider using 2 sensors instead of 3+.
* Reduce your total mod and song count.
* Perform a [Clean Installation](#clean-installation) of the game files.
* Low framerate can also be caused by something going wrong within your application data folder, to fix this refer to [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)
* Disable CountersPlus counters like score counter and swing speed as they can be expensive.
* HTTPStatus mod can cause lag spikes. Test without this mod to see if the lag spikes go away.

VR is very CPU intensive, especially if you add mods. If you're struggling to run the game with the mods you want, consider upgrading your hardware. Note that Beat Saber doesn't utilize the GPU very much as visually it's a fairly simple game.

## 3. Общие вопросы

### Misc

#### 3.1 Blank Menu, No Buttons
If your main window in game is blank, your save file likely got corrupted. To fix this refer to [Delete Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

::: warning This will delete your local scores and statistics. :::

#### 3.2 How do I use `x` mod?
If you're using Mod Assistant, click the mod and hit the "Mod Info" button. [BeatMods](http://beatmods.com) has a "More Info" button on each mod as well.

#### 3.3 Rumble Issues
Gameplay Modifiers Plus had a toggle to enable/disable controller rumble. If you disabled it then removed the mod, you'll need to modify the save data file that it writes to manually. Open `%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` and set `controllersRumbleEnabled` to `true`.

If this isn't the cause of your rumble issues and the following are true regarding your haptics:

* вибрация очень слабая
* вибрации нет при ударе нескольких блоков одновременно
* существует небольшая задержка при касании мечей друг друга
* you are using Oculus touch controllers

Then there is a good chance that Beat Saber is overloading your motherboard's USB controller. Oculus devours your USB controller bandwidth and most motherboards come with a very cheap controller. Beat Saber pushes it harder than any other game, which is why other games and menus might be fine. There is no clear-cut solution, so try the following:

* Попробуйте подключать кабели USB сенсоров и шлема в разные USB порты, пока не достигнете устойчивого хорошего состояния
* Unplug unnecessary USB devices
* Купите USB концентратор, который подключается в разъем PCI-E
* Use `-vrmode oculus` if you're using SteamVR to bypass it and use the Oculus SDK instead

### Custom Avatars

#### 3.4 Custom Avatars (Not) Showing Ingame
Click the **Home** button on your keyboard with the game in focus to toggle visibility in the headset.

#### 3.5 My Avatars Are Broken
Make sure your custom avatars plugin is installed properly and updated, also make sure your dependencies are too. You might have a corrupted/broken avatar, having one avatar break can break all of your avatars likewise with songs and sabers.

### Custom Songs

#### 3.6 My Songs Are Missing
Make sure your songs are in your `CustomLevels` folder, located at `Beat Saber/Beat Saber_Data/`. This is where the game natively reads custom songs from.

**Do not** place songs in the old `Beat Saber/CustomSongs` folder. This location is deprecated as the format for custom songs has changed. If you have maps in the old format (`.json` and `.ogg` files instead of `.dat` and `.egg`), leave them in the old `Beat Saber/CustomSongs` folder. You will need to download them again from BeatSaver.

Alternatively you can manually convert them using [Song Converter](https://github.com/lolPants/songe-converter) however, you will not get any help with this method and need to compile the program yourself.

#### 3.7 Grayed Out Play Button
Click the shiny blue question mark (?) button in the top right corner. This should tell you what mods are required to y the song, which you are missing and should install. If it is still not working, try re-installing the required plugin. Otherwise try a [Clean Install](#clean-installation).

#### 3.8 Map details are infinitely loading
If this only happens on particular maps, you may be missing required mods or those song files are broken. If it happens to all of your maps, delete your `Plugins` folder and reinstall fresh ones.

### CameraPlus

#### 3.9 CameraPlus Isn't Working/Past Health Screen
Make sure the in-game setting for "Smooth Camera" is turned off in your in-game settings. If that does not work, try reinstalling it and associated dependencies.

#### 3.10 My desktop view only takes up a small section of the screen
Your CameraPlus display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader

#### 3.11 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your plugins and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.12 Nothing Showing Up In The More Songs Menu
The probable causes for beatsaver downloader not working are:

1. Сначала убедитесь, что все песни загрузились, иначе кнопка "More Songs" будет неактивной.
2. Ваш антивирус или брандмауэр блокируют доступ к сайту BeatSaver. com.
3. Сайт beatsaver блокирует ваши запросы из-за слишком частого обращения. Подождите немного и попробуйте еще раз.

## 4. Прочие неисправности

### Understanding Logs
If you're on Steam you can go to
> Beat Saber > Properties > Set Launch Options >. Добавьте `--verbose` в текстовое поле ввода

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* This may not show 100% of the time for avatars and sabers, and you may have to remove all your avatars/sabers and try them one by one to see which one breaks the game.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Verify Game Files For Steam
To verify integrity of game files follow these steps:

1. Убедитесь, что SteamVr закрыт, так как он не позволит вам проводить проверку целостности.
2. Перейдите в свою библиотеку игр и найдите Beat Saber
3. Щелкните правой кнопкой мыши и выберите "Properties"
4. Перейдите на вкладку "Local Files" в свойствах
5. Select the "Verify Integrity Of Game Files" option.
6. Подождите пока steam завершит операцию проверки целостности и загрузки недостающих файлов.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Clean Installation

1. (Необязательно) Вы можете создать резеврную копию пользовательского контента (модели\песни), если создадите копии следующих папок:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Delete the ENTIRE Beat Saber Folder.** This is different from uninstalling the game on steam, as those methods will not remove files that did not come with the game.

> Steam: ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Reinstall the game via the Steam or Oculus store
4. **Before modding, launch the game once**
5. Run Mod Assistant, install your mods, and boot up the game.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Deleting Your Save in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Users > "USER" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning Deleting the Appdata folder will also delete your local scores and statistics. :::

#### Desperate Measures
::: warning Disabling your anti-virus involves security risks, be sure to know what you're doing (i.e don't download or open suspicious files while it's turned off) and don't forget to re-enable it as soon as you finished these steps. :::

* Убедитесь, что ваш текущий пользователь **является администратором**
* **Отключите** ваш антивирус (хотя бы временно)
* Ensure that you have permission to create folders and edit files within the disk drive/your pc, (from what I heard a windows update recently caused problems for people)
* Ensure that your drivers are up to date
* Проверьте, что проблема не вызвана вашим Vr шлемом, операционной системой, или другим оборудованием/программным обеспечением
* Проверьте подключение к интернету и убедитесь, что доступ к серверам, связанными с модификацией Beat Saber, а также к Steam и т, д. ничем не блокируется.

## 5. У вас остались проблемы
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:

* Use the correct channels please, `#pc-help` for pc mod support and `#quest-help` for quest mod support. Use `#pc-3d-modeling` and `#quest-3d-modeling` for questions about **making your own avatars, platforms, notes, or sabers**, and `#mapping-discussion` for questions about **making maps.**
* Be polite and respectful
* Подробно описывайте вашу проблему. Сказать "Что-то не работает" - это примерно как сказать врачу, что что-то болит. Что не работает, и какие действия вы предпринимали чтобы это исправить? Есть ли какие-либо сообщения на экране? Весь экран стал кислотно-фиолетовым?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Thank you!

> Thank you to Saber-Chan for their hard work on this page.
