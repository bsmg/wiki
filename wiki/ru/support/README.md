---
sidebar: auto
---

# Поддержка
## Содержание
0. [Важные примечания](#0-important-notes)
1. [Проблемы установщика](#1-installer-issues)
2. [Проблемы в игре](#2-game-issues-post-modding)
3. [Часто задаваемые вопросы](#3-common-questions)
4. [Устранение неполадок](#4-troubleshooting)
5. [Если ничего не помогло](#5-if-all-else-fails)
6. [У вас остались проблемы](#6-still-having-issues)

## 0. Обновления
После обновления игры discord канал BSMG `#server-announcements` будет иметь наиболее актуальные инструкции о состоянии модов. Ниже приведены более подробные инструкции по наиболее распространенной процедуре.

#### Обновление сломало мои моды
**Запустите игру один раз** после обновления. Then, reinstall your mods using an installer linked in the [beginner's guide](/beginners-guide), such as Mod Assistant.

## 1. Нет модов?

#### 1.1 На чистой копии игры не появляются моды
Во-первых, убедитесь, что нижеописанные утверждения верны:
* **Вы запускали игру перед установкой модов хотя бы раз**. BSIPA удаляет все моды при первом обновленной игры, чтобы предотвратить загрузку старых модов на новую версию. Если это так, то переустановите моды снова.
* Steam/Oculus запускает Beat Saber **из того же места**, в котором находятся моды. *, например, моды находятся на диске D, а Steam запускает игру с привода C.* Установите правильное расположение игры в выбранной программе установки модов.
* Если вы устанавливаете моды вручную, убедитесь, что вы точно взяли все файлы модов и их зависимостей и установили их в правильные места.

#### 1.2 У меня были установлены моды на предыдущей версии, но после обновления моды не загружаются

Если пункты из раздела 1.1 верны, то попробуйте нижеприведенные решения по порядку.

**Решение 1**
- Обновите BSIPA до последней версии (в ModAssistant или вручную)
- Перейдите в свою папку Beat Saber
- Запустите `IPA.exe`

**Решение 2.**
-  [Verify your game files](#verify-game-files-for-steam) (Steam only, Oculus users refer to Solution 4)
- Обновите BSIPA до последней версии
- Перейдите в свою папку Beat Saber
- Запустите `IPA.exe`

**Решение 3.**
- Перейдите в свою папку Beat Saber
- Создайте резервную копию папки `UserData` (необязательно)
- Удалите папку UserData

::: warning предупреждение Это действие сбросит все настройки модов! :::

**Решение 4.**
- Выполните [чистую установку](#clean-installation)

#### 1.2 Похоже, что ModAssistant не устанавливает плагины в папку Plugins
Программа установки скачивает моды в `Beat Saber/IPA/Pending`, а затем BSIPA перемещает эти файлы в корневую папку при запуске игры. Если папка Plugins пустая, запустите `IPA.exe` снова и убедитесь в том, что ничего не препятствует его запуску, например `Антивирусы, права администратора и т.д.`

## 2. Проблемы игры после установки модов
### Игра не запускается

#### 2.1 Появляется ошибка GetThreadContext Failed
Если появляется окно с сообщением `GetThreadContext Failed` и/или вы слышите звук ошибки Windows, то возможно на вашем компьютере установлено программное обеспечение, которое мешает работать модам Beat Saber. Многие сторонние античит программы, такие как ESEA и Faceit anticheat не позволяют BSIPA устанавливать моды на Beat Saber, даже если эти программы в данный момент не запущены. Некоторые антивирусные программы могут вести себя подобным образом.

Как решить эту проблему:
1. Удалите описанное выше программное обеспечение.
2. Перезагрузите компьютер.
3. Удостоверьтесь, что остатков программного обеспечения в папках `AppData` больше не осталось.
4. Запустите игру. Если проблема все еще не решена, попробуйте следующее: `Дополнительное примечание: Проблема может быть вызвана отсутствием разрешений или исключений. Любая программа, которая может блокировать Bsipa, или программы, помеченные как подозрительные, может мешать установке модов.` Steam: [Проверьте целостность игровых файлов](#verify-game-files-for-steam) Oculus: Выполните [Чистую установку](#clean-installation)

Это должно исправить проблему.

#### 2.2 Игра замораживается при запуске
Если игра замораживатеся на экране "Health and Safety", или вы видите ваш аватар в позе T, и не можете дальше управлять игрой, [проверьте целостность файлов игры](#verify-game-files-for-steam) если вы играете в Steam, или переустановите игру, если используете Oculus версию. См. [Чистая установка](#clean-installation) Это может случиться при обновлении игры с установленными до этого модами. Но пользователи с чистой установкой не должны встречаться с этой ошибкой.

### Проблемы с Fps/частотой кадров
#### 2.3 После установки модов игра подлагивает
If the game lags so badly that you can barely click the `Continue` button on the Health & Safety screen, then verify files if you have the game on Steam, or reinstall the game on Oculus Home. Сделайте то же самое, если игра не запускается вообще и не показывает сообщений об ошибках.

Если это не помогло, то посетите раздел [2.4 Повышение Fps/частоты кадров](#framerate-issues)

#### 2.4 Повышение Fps/частоты кадров
Если [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) не улучшил ваш fps, то вашему ПК может просто не хватать мощности, чтобы выдержать дополнительную нагрузку от использования модов. Вот некоторые действия, которые вы можете предпринять для улучшения частоты кадров:

* Check to see if NVIDIA GEFORCE EXPERIENCE set the rendering scale for Beat Saber past the default of 1.0. It may have set it to a higher number to 1.4 or 1.8 which significantly increases the GPU load.
* Use a less complex custom avatar.
* The custom saber **Plasma Katanas** have tons of custom events and are known to introduce lag if you miss.
* CameraPlus can be very taxing, especially if you have multiple cameras and increase the FOV.
* Turn down Render Scale, Anti-Aliasing, mirror, fog, etc in the base game settings.
* For Oculus CV1 or Rift players: consider using 2 sensors instead of 3+.
* Reduce your total mod and song count.
* Perform a [Clean Installation](#clean-installation) of the game files.
* Low framerate can also be caused by something going wrong within your application data folder, to fix this refer to [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)
* Disable CountersPlus counters like score counter and swing speed as they can be expensive.
* HTTPStatus mod can cause lag spikes. Test without this mod to see if the lag spikes go away.

VR is very CPU intensive, especially if you add mods. If you're struggling to run the game with the mods you want, consider upgrading your hardware. Note that Beat Saber doesn't utilize the GPU very much as visually it's a fairly simple game.

## 3. Общие вопросы
#### 3.1 Пустое меню, нет кнопок
If your main window in game is blank, your save file likely got corrupted. To fix this refer to [Delete Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

::: warning This will delete your local scores and statistics. :::

#### 3.2 Как использовать `такой-то` мод?
If you're using Mod Assistant, click the mod and hit the "Mod Info" button. http://beatmods.com has a "More Info" button on each mod as well.

#### Проблемы с вибрацией контроллеров
Gameplay Modifiers Plus adds a toggle to enable/disable controller rumble. If you disabled it then removed the mod, you'll need to modify the save data file that it writes to manually. Open `%appdata%/../locallow/hyperbolic magnetism/beat saber` and set `constrollersRumbleEnabled` to `true`.

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

### Пользовательские модели аватаров
#### 3.4 Пользовательские аватары не показываются в игре
Click the **Home** button on your keyboard with the game in focus to toggle visibility in the headset.

#### 3.5 Мои аватары не работают как надо
Make sure your custom avatars plugin is installed properly and updated, also make sure your dependencies are too. You might have a corrupted/broken avatar, having one avatar break can break all of your avatars likewise with songs and sabers.

### Пользовательские песни

#### 3.6 Песни отсутсвутют
Make sure your songs are in your `CustomLevels` folder, located at `Beat Saber/Beat Saber_Data/`. This is where the game natively reads custom songs from.

**Do not** place songs in the old `Beat Saber/CustomSongs` folder. This location is deprecated as the format for custom songs has changed. If you have maps in the old format (`.json` and `.ogg` files instead of `.dat` and `.egg`), leave them in the old `Beat Saber/CustomSongs` folder. They will then be automatically converted by the SongCore mod.

Alternatively, you can manually convert them using [Song Converter](https://github.com/lolPants/songe-converter)

#### 3.7 Grayed Out Play Button
Click the shiny blue question mark (?) button in the top right corner. This should tell you what mods are required to play the song, which you are missing and should install. If it is still not working, try re-installing the required plugin. Otherwise try a [Clean Install](#clean-installation).

#### 3.8 Информация о песне грузится бесконечно
If this only happens on particular maps, those song files are probably broken. If it happens to all of your maps, delete your `Plugins` folder and reinstall fresh ones.

### Camera Plus
#### 3.9 Мод CameraPlus не работает после нажатия "continue" на экране "Health and Safety"
Make sure the in-game setting for "Smooth Camera" is turned off in your in-game settings. If that does not work, try reinstalling it and associated dependencies.

#### 3.10 Вид камеры занимает только небольшую часть окна
Your CameraPlus display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader
#### 3.11 Кнопка для загрузки новых карт "More Songs" от мода "BeatSaver Downloader"
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your plugins and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.12 Ничего не показывается в меню "More Songs"
The probable causes for beatsaver downloader not working are:
1. Сначала убедитесь, что все песни загрузились, иначе кнопка "More Songs" будет неактивной.
2. Ваш антивирус или брандмауэр блокируют доступ к сайту BeatSaver. com.
3. Сайт beatsaver блокирует ваши запросы из-за слишком частого обращения. Подождите немного и попробуйте еще раз.

## 4. Прочие неисправности
### Чтение логов
If you're on Steam you can go to
> Beat Saber > Properties > Set Launch Options >. Добавьте `--verbose` в текстовое поле ввода

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs
* Если ошибка про мечи\аватары не найдена, то попробуйте удалить все модели и пробуйте устанавливать и проверять по одной модели за раз, чтобы найти проблемную модель.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Проверка целостности игровых файлов Steam версии
To verify integrity of game files follow these steps:
1. Убедитесь, что SteamVr закрыт, так как он не позволит вам проводить проверку целостности.
2. Перейдите в свою библиотеку игр и найдите Beat Saber
3. Щелкните правой кнопкой мыши и выберите "Properties"
4. Перейдите на вкладку "Local Files" в свойствах
5. Select the "Verify Integrity Of Game Files" option.
6. Подождите пока steam завершит операцию проверки целостности и загрузки недостающих файлов.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI the steps are still the same.

### Чистая установка
1. (Необязательно) Вы можете создать резеврную копию пользовательского контента (модели\песни), если создадите копии следующих папок:
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Вручную удалите все папку Beat Saber.** Это не то же самое, что удаление игры с помощью Steam, так как Steam не удаляет файлы, которые не входили в состав игры.
> Steam:     ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Переустановите игру в Steam или Oculus
4. **Запустите игру один раз перед ее модификацией**
5. Запустите ModAssistant, установите моды и запустите игру.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Удаление вашего сохранения в AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Users > "USER" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning Deleting the Appdata folder will also delete your local scores and statistics. :::

#### Когда ничего не помогает
::: warning Disabling your anti-virus involves security risks, be sure to know what you're doing (i.e don't download or open suspicious files while it's turned off) and don't forget to re-enable it as soon as you finished these steps. :::
* Убедитесь, что ваш текущий пользователь **является администратором**
* **Отключите** ваш антивирус (хотя бы временно)
* Убедитесь, что у вас есть разрешение на создание папок и редактирование файлов в папке с игрой (говорят, что обновление Windows может вызывать проблемы с этим)
* Убедитесь, что ваши драйвера обновлены
* Проверьте, что проблема не вызвана вашим Vr шлемом, операционной системой, или другим оборудованием/программным обеспечением
* Проверьте подключение к интернету и убедитесь, что доступ к серверам, связанными с модификацией Beat Saber, а также к Steam и т, д. ничем не блокируется.

## 5. У вас остались проблемы
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:
* Используйте соответствующие каналы, `#pc-help` для поддержки модов pc и `#quest-help` для поддержки модов Oculus Quest. Use  `#pc-3d-modeling` and `#quest-3d-modeling` for questions about **making your own avatars, platforms, notes, or sabers**, and `#mapping-discussion` for questions about **making maps.**
* Будьте вежливы и уважительны
* Подробно описывайте вашу проблему. Сказать "Что-то не работает" - это примерно как сказать врачу, что что-то болит. Что не работает, и какие действия вы предпринимали чтобы это исправить? Есть ли какие-либо сообщения на экране? Весь экран стал кислотно-фиолетовым?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Thank you!

> Спасибо пользователю Saber-Chan за его работу над этой страницей.
