---
sidebar: auto
---

# Поддержка

## Содержание

0. [Обновления](#_0-updates)
1. [Нет модификаций?](#_1-no-mods)
2. [Проблемы с игрой после установки модификаций](#_2-game-issues-post-modding)
3. [Часто задаваемые вопросы](#_3-common-questions)
4. [Другие неисправности](#_4-miscellaneous-troubleshooting)
5. [У вас остались проблемы?](#_5-still-having-issues)

## 0. Обновления
After an update, the BSMG discord [#modding-announcements](https://discord.com/channels/441805394323439646/612468002243477505) channel should have the most up to date information on the status of mods. Ниже приведены более подробные инструкции по наиболее распространенной процедуре.

### Обновление сломало мои модификации
**Запустите игру один раз** после обновления. Затем, переустановите ваши модификации с помощью установщика, указанный в [Руководстве для начинающих](/beginners-guide), например Mod Assistant.

## 1. Нет модификаций?

### Различные вопросы

#### 1.1 На свежей копии игры не появились модификации
Во-первых, убедитесь, что нижеописанные утверждения верны:

* **Вы запустили игру перед установкой модификаций хотя бы раз**. BSIPA удаляет все модификации при первом запуске обновленной игры, чтобы предотвратить загрузку старых модификаций на новой версии. Если это так, то переустановите модификации снова.
* Steam/Oculus запускат Beat Saber из **того же места**, в котором находятся модификации. *например модификации расположены на диске D, но steam запускается с диска C.* Установите правильное расположение игры в выбранном вами установщике модификаций.
* Если вы устанавливаете модификации вручную, убедитесь, что вы точно взяли все файлы модификации и их составляющих, и установили их в правильные папки.

#### 1.2 У меня были установлены модификации на предыдущей версии, но после обновления они не загружаются
Если пункты из раздела 1.1 верны, то попробуйте нижеприведенные решения по порядку.

##### Решение 1

* Обновите BSIPA до последней версии (в Mod Assistant или вручную)
* Перейдите в свою папку Beat Saber
* Запустите `IPA.exe`

##### Решение 2 (только для Steam)

* [Проверьте целостность ваших файлов игры](#verify-game-files-for-steam)
* Обновите BSIPA до последней версии
* Перейдите в папку с Beat Saber
* Запустите `IPA.exe`

##### Решение 3

* Перейдите в свою папку Beat Saber
* Создайте резервную копию папки `UserData` (необязательно)
* Удалите папку UserData

::: warning Предупреждение
Это действие сбросит все настройки модификаций!
:::

##### Решение 4

* Выполните [чистую установку](#clean-installation)

#### 1.2 Mod Assistant не устанавливает какие-либо модификации
Установщик скачивает модификации в `Beat Saber/IPA/Pending`, а затем BSIPA перемещает эти файлы в корневую папку при запуске игры. Если папка Plugins все равно пустая, запустите `IPA.exe` снова и убедитесь в том, что ничего не препятствует его запуску, например `Антивирусы, права администратора и т.д.`

## 2. Проблемы игры после установки модификаций

### Игра не запускается

#### 2.1 Появляется ошибка GetThreadContext Failed
Если появляется окно с сообщением `GetThreadContext Failed` и/или вы слышите звук ошибки Windows, то возможно на вашем компьютере установлено программное обеспечение, которое мешает работать модификациям Beat Saber. Многие сторонние античит программы, такие как ESEA и Faceit не позволяют BSIPA устанавливать модификации на Beat Saber, даже если эти программы в данный момент не запущены. Некоторые антивирусные программы могут вести себя подобным же образом.

Для решения этой проблемы:

1. Удалите описанное выше программное обеспечение.
2. Перезагрузите компьютер.
3. Удостоверьтесь, что остатков программного обеспечения в папках `AppData` больше не осталось.
4. Запустите игру. Если проблема все еще не решена, попробуйте следующее: `Дополнительное примечание: Проблема может быть вызвана отсутствием разрешений или исключений. Любая программа, которая может блокировать BSIPA, или программы, помеченные как подозрительные, может мешать установке модификаций.` Steam: [Проверьте целостность игровых файлов](#verify-game-files-for-steam) Oculus: Выполните [Чистую установку](#clean-installation)

Это должно исправить проблему.

#### 2.2 Игра замораживается при запуске
Если игра замораживается на экране "Health and Safety", или вы видите ваш аватар в Т-позе, и не можете дальше управлять игрой, [проверьте целостность файлов игры](#verify-game-files-for-steam) если вы играете в Steam, или переустановите игру, если используете Oculus версию. Выполните [чистую установку](#clean-installation)

Похоже, что это происходит при обновлении Beat Saber, и при наличии ранее установленных модификаций, но не для пользователей с чистой установкой игры.

### Проблемы с FPS/частотой кадров

#### 2.3 После установки модификаций игра тормозит
Если игра тормозит настолько сильно, что вы едва можете нажать кнопку `Continue` на экране Health and Safety, то проверьте целостность файлов игры в случае Steam версии, или переустановите игру в случае Oculus версии. Сделайте то же самое, если игра не запускается вообще и не показывает сообщений об ошибках.

Если это не помогло, то посетите раздел [2.4 Повышение Fps/частоты кадров](#_2-4-improving-framerate)

#### 2.4 Повышение FPS/частоты кадров
Если [2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) не улучшил вашу частоту кадров (FPS), то вашему ПК может просто не хватать мощности, чтобы выдержать дополнительную нагрузку от использования модификаций. Вот некоторые действия, которые вы можете предпринять для улучшения частоты кадров:

* Проверьте, что NVIDIA GEFORCE EXPERIENCE установил масштаб рендеринга для Beat Saber по умолчанию на 1.0. Он может установить его на более высокое значение до 1.4 или 1.8, что значительно увеличивает нагрузку GPU.
* Используйте менее сложный пользовательский аватар.
* Модель мечей **Plasma Katanas** содержит множество событий и знаменита вызовом лагов при промахах.
* Модификации Camera2 и CameraPlus могут серьезно влиять на производительность, особенно если вы используете несколько камер и увеличенное значение FOV.
* Установите меньшие значения настроек "Render Scale", "Anti-Aliasing", "Mirror", "Fog" и т. д. в базовых настройках игры.
* Для пользователей Oculus Rift (CV1): попробуйте использовать 2 сенсора вместо 3 или более.
* Уменьшите общее количество модификаций и песен.
* Выполните [чистую установку](#clean-installation).
* Низкая частота кадров также может быть вызван ошибками в папках AppData. Чтобы исправить это, смотрите [Удаление папки Beatsaber внутри папки AppData](#deleting-your-save-in-appdata)
* Некоторые счетчики модификации CountersPlus, такие как scorecounter и swing speed могут негативно влиять на производительность.
* Модификации HTTPStatus и DataPuller могут вызывать лаги. Попробуйте сыграть без этих модификаций, чтобы проверить, что именно вызывает лаги.

VR игры очень требовательны к производительности ЦП, особенно если вы добавляете модификации. Если игра с установленными модификациями работает недостаточно стабильно, задумайтесь об обновлении вашего ПК. Имейте в виду, что Beat Saber не очень требователен к производительности видеокарты, так как игра достаточно проста в плане графики.

## 3. Общие вопросы

### Прочее

#### 3.1 Пустое меню, нет кнопок
Если главное меню игры пустое, ваш файл сохранения похоже был поврежден. Чтобы исправить это, смотрите [Удаление папки Beatsaber внутри AppData](#deleting-your-save-in-appdata)

::: warning предупреждение
Это удалит ваши локальные результаты и статистику.
:::

#### 3.2 Как использовать `xxxx` модификацию?
Если вы используете ModAssistant, выберите модификацию и нажмите кнопку "Mod info". [BeatMods](http://beatmods.com) также имеет кнопку "Подробнее" на каждой модификации.

#### 3.3 Проблемы с вибрацией контроллеров
Модификация "Gameplay Modifiers Plus" добавляет настройку для включения\выключения вибрации контроллеров. Если вы отключили вибрацию таким способом и затем удалили модификацию, то вам нужно изменить конфигурационный файл, который был изменен модификацией, вручную. Откройте `%appdata%\..\LocalLow\Hyperbolic Magnetism\Beat Saber\settings.cfg` и установите `controllersRumbleEnabled` на `true`.

Если это не является причиной ваших проблем с вибрацией, и следующие утверждения верны:

* вибрация очень слабая
* вибрации нет при ударе нескольких блоков одновременно
* существует небольшая задержка при касании мечей друг друга
* Вы используете контроллеры Oculus touch

Тогда есть большая вероятность, что Beat Saber просто перегружает USB-контроллер материнской платы. Oculus требует большой пропускной способности USB-контроллера, при этом большинство материнских плат поставляется с очень дешевым контроллером. В процессе игры Beat Saber требуется больше данных, чем остальным играм. В игровом процессе других игр, при этом, вибрация может работать вполне нормально. Определенного решения этой проблемы не существует, попробуйте следующее:

* Попробуйте подключать кабели USB сенсоров и шлема в разные USB порты, пока не достигнете устойчивого хорошего состояния
* Отключите ненужные USB устройства
* Купите USB концентратор, который подключается в разъем PCI-E
* Используйте `-vrmode oculus`, если вы используете Steam версию, чтобы не запускать SteamVR и использовать вместо этого Oculus SDK

### Пользовательские модели аватаров

#### 3.4 Пользовательские аватары не показываются в игре
Нажмите кнопку **Home** на клавиатуре (при этом окно с игрой должно быть активным) для переключения видимости аватара внутри VR.

#### 3.5 Мои аватары не работают как надо
Убедитесь, что ваша модификация "Custom Avatars", а также его компоненты, установлены правильно и обновлены. Возможно, у вас установлен поврежденный/сломанный аватар. Одна плохая модель аватара может сломать все остальные аватары. С песнями и мечами та же история.

### Пользовательские песни

#### 3.6 Песни отсутствуют
Убедитесь, что ваши песни находятся в папке `CustomLevels`, расположенной в `Beat Saber/Beat Saber_Data/`. Из этой папки игра изначально читает пользовательские песни.

**Не храните** песни по устаревшему пути `Beat Saber/CustomSongs`. Это местоположение устарело, так как изменился формат пользовательских песен. Если у вас есть карты в старом формате (`.json` и `.ogg` файлы вместо `.dat` и `.egg`), оставьте их в старой папке `Beat Saber/CustomSongs`. Вам нужно будет загрузить их снова с BeatSaver.

Кроме того, вы можете вручную преобразовать их, используя [Song Converter](https://github.com/lolPants/songe-converter), однако, вы не получите никакой помощи с этим методом и должны скомпилировать программу самостоятельно.

#### 3.7 Серая кнопка "Играть"
Нажмите на блестящий синий вопросительный знак (?) в правом верхнем углу. This should tell you what mods are required to play the song, which you are missing and should install. Если все еще не работает, попробуйте переустановить необходимую модификацию. Также попробуйте [чистую установку](#clean-installation).

#### 3.8 Информация о песне грузится бесконечно
Если это происходит только на некоторых картах, это может означать отсутствие необходимых модификаций или файлы песен испорчены. Если это происходит со всеми картами, то удалите папку `Plugins` и переустановите их заново.

### Camera2

#### 3.9 My desktop view only takes up a small section of the screen
Your Camera2 display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader

#### 3.10 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your mods and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.11 Nothing Showing Up In The More Songs Menu
The probable causes for BeatSaver Downloader not working are:

1. Сначала убедитесь, что все песни загрузились, иначе кнопка "More Songs" будет неактивной.
2. Ваш антивирус или брандмауэр блокируют доступ к сайту BeatSaver.
3. Сайт beatsaver блокирует ваши запросы из-за слишком частого обращения. Подождите немного и попробуйте еще раз.

### Коды ошибок в Multiplayer
Here is a list of known error codes, what they mean, and what you can do to fix them.

<!-- Disable line length rule because of table -->
<!-- markdownlint-disable MD013 -->
| Code&nbsp; | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CFR-1      | Unknown Error Occurred. Try restarting the game.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| CFR-2      | The multiplayer connection was canceled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFR-3      | Server is not reachable. There may be an issue with your internet connection or with Beat Saber's relay servers. Double check you are not offline and your firewall allows Beat Saber to connect to the internet. <details><summary>**Background Information**</summary>Beat Saber Multiplayer is peer-to-peer where you connect directly with each player in the lobby. When this is not possible Beat Saber starts a "relay" server to send the data. This error means both of these methods failed.</details> &nbsp; This can also be caused by using emojis or special characters in your username. |
| CFR-4      | The server already exists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-5      | Server does not exist. The lobby you were connecting to might have closed as you were joining.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-6      | The server is full. Choose a different lobby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CFR-7      | You are on a version of the game that is not supported by the servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| CFR-8      | Lobby password is incorrect. Double check you are entering the right password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CFR-9      | The matchmaking servers Beat Games run, which keeps track of open public and private lobbies, is offline. Try again later.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CFR-10     | Your session key from Steam or Oculus is not valid. If you are playing on Quest and have modded your game, check out this [FAQ answer](/faq/README.md#does-multiplayer-have-crossplay) to work around this. Otherwise you are on a pirated copy of the game which is not supported.                                                                                                                                                                                                                                                                                                 |
| CFR-11     | Your internet connection is offline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
<!-- markdownlint-enable MD013 -->

## 4. Прочие неисправности

### Чтение логов
If you're on Steam you can go to
> Beat Saber > Properties > General > Add `--verbose` в поле "параметры запуска"

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs

* Это может быть не точно на 100% для аватаров или мечей, и вероятно придётся удалить все модели, и устанавливать, и проверять по одной модели за раз, чтобы найти проблемную.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Проверка целостности игровых файлов Steam версии
To verify integrity of game files follow these steps:

1. Убедитесь, что SteamVR закрыт, так как он не позволит вам провести проверку целостности.
2. Перейдите в свою библиотеку игр и найдите Beat Saber
3. Щелкните правой кнопкой мыши и выберите "Properties"
4. Перейдите на вкладку "Local Files" в свойствах
5. Выберите опцию "Проверка целостности игровых файлов".
6. Подождите пока steam завершит операцию проверки целостности и загрузки недостающих файлов.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI, the steps are still the same.

### Чистая установка

1. (Необязательно) Вы можете создать резеврную копию пользовательского контента (модели\песни), если создадите копии следующих папок:

* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Вручную удалите всю папку Beat Saber.** Это не то же самое, что удаление игры с помощью Steam, так как Steam не удаляет файлы, которые не входили в состав игры.

> Steam: ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Переустановите игру в Steam или Oculus
4. **Запустите игру один раз перед ее модификацией**
5. Запустите Mod Assistant, установите модификации и запустите игру.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Удаление вашего сохранения в AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Пользователи > "ПОЛЬЗОВАТЕЛЬ" > AppData > LocalLow > Hyperbolic Magnetism > beat saber

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning
Deleting this folder in Appdata will also delete your local scores and statistics.
:::

#### Desperate Measures
::: warning
Disabling your anti-virus involves security risks, be sure to know what you're doing
(i.e don't download or open suspicious files while it's turned off)
and don't forget to re-enable it as soon as you finished these steps.
:::

* Убедитесь, что ваш текущий пользователь **является администратором**
* **Отключите** ваш антивирус (хотя бы временно)
* Убедитесь, что у вас есть разрешение на создание папок и редактирование файлов в папке с игрой (говорят, что обновление Windows может вызывать проблемы с этим)
* Убедитесь, что ваши драйвера обновлены
* Проверьте, что проблема не вызвана вашим VR шлемом, операционной системой, или другим оборудованием/программным обеспечением
* Проверьте подключение к интернету и убедитесь, что доступ к серверам, связанными с модификацией Beat Saber, а также к Steam и т, д. ничем не блокируется.

## 5. У вас остались проблемы
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:

* Используйте соответствующие каналы, `#pc-help` для поддержки модификаций ПК и `#quest-help` для поддержки модификаций Oculus Quest. Используйте `#pc-3d-modeling` и `#quest-3d-modeling` по вопросам **создания своих собственных аватаров, платформ, нот или мечей**, и `#mapping-discussion` по вопросам **создания карт.**
* Будьте вежливы и уважительны к другим
* Подробно опишите вашу проблему.  Сказать "Что-то не работает" - это примерно как сказать врачу, что что-то болит. Что не работает, и какие действия вы предпринимали чтобы это исправить? Есть ли какие-либо сообщения на экране? Весь экран стал кислотно-фиолетовым?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Credit to Saber-Chan for their hard work on this page.
