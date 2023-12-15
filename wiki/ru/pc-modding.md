---
sidebar: auto
---

# Модификация PC версии

## Вступление

::: danger ДИСКЛЕЙМЕР Если вы хотите использовать моды, вы должны понимать, что:

* Вы можете столкнуться с проблемами, которых нет в версии игры без модификаций. В 99.9% случаев, баги, ошибки и плохая производительность игры связаны с модификациями.
* Модификации могут быть сломаны в результате обновления игры и это нормально. Будьте терпеливы, когда это происходит, потому что создатели модов - это добровольцы с реальной жизнью.
* Beat Games не пытаются целенаправленно ломать работу модификаций. Они просто работают над своей игрой и иногда это приводит к поломке модификаций. Beat Games не ставит перед собой цели специально вредить модификациям.

Не атакуйте разработчиков игры по вопросам, связанных с модификациями, и наоборот. Создатели модификаций и разработчики игры - разные команды. Просто ведите себя достойно, ок. :::

:::warning СОБЛЮДАЙТЕ ПРАВИЛА БЕЗОПАСНОСТИ, КОГДА УСТАНАВЛИВАЕТЕ МОДИФИКАЦИИ Beat Saber **НИКОГДА** не должен запускаться от имени администратора.

Если вы скачали и установили модификацию, которая просит дать доступ к вашей учетной записи, **НЕ** делайте этого. Сообщите нам об этом. То, что вы установили, является вредоносной модификацией!

Исключение - это активация/деактивация OneClick™ Installer в Mod Assistant. Права администратора необходимы, чтобы зарегистрировать программу на компьютере для работы со ссылками OneClick™ Install.

Если вы не уверены, что что-то установленное вами не является вредоносным, ***спросите кого-нибудь в нашем Discord***. :::

Beat Saber уже поддерживает пользовательские песни, так что если вы не ищете большего, вам не нужны дополнительные моды! Не лишним будет установить `SongCore`, так как этот мод расширяет функционал основной игры, улучшая время загрузки и обеспечивая функциональность других модов, таких как внутриигровой загрузчик песен, пользовательские списки лидеров и т. д.

::: warning This guide is for PC-modding on Windows.  
If you have a Quest, see the [Quest Modding page](/quest-modding.md).  
If you're on Linux, check out the [Linux page](./linux-modding.md) :::

If you run into problems at any point, please head to the [support page](./support/) and see if you can identify what went wrong before asking in the Discord server. Скорее всего, там уже есть решение!

::: warning Я посмотрел видео-туториал на YouTube, но что-то не получилось или я запутался. В чём дело? Мы в BSMG **категорически** рекомендуем избегать любые видео-туториалы по модифицированию. Часто случается, что они устарели, содержат неполную или неверную информацию.

Так что вы должны следовать руководствам здесь, на вики, или обратиться за помощью в [BSMG Discord](https://discord.gg/beatsabermods). :::

## Установщики модификаций

### Mod Assistant
> **ЭТО РЕКОМЕНДОВАННЫЙ УСТАНОВЩИК МОДОВ.**

__**Запустите игру хотя бы один раз****, прежде чем пытаться её модифицировать! Это относится и к переустановке игры.

Это простой установщик модов для Beat Saber, похожий на менеджер для них, но с дополнительными возможностями, такими как удаление и проверка версий! Вы можете скачать его на [GitHub'е Assistant'а](https://github.com/Assistant/ModAssistant/releases/latest).

![Mod Assistant](~@images/beginners-guide/modassistant.png)

### BeatSaberModManager

__**Run the game at least once**** before trying to mod the game! This applies to reinstalling your game too.

Yet another mod installer for Beat Saber, heavily inspired by ModAssistant. It strives to look more visually appealing and support both Windows and Linux, while still being as feature-rich as ModAssistant. Get it on [affederaffe's GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)

![BeatSaberModManager](~@images/beginners-guide/beatsabermodmanager.png)

## Как получить больше песен
::: tip
Most maps in the "Top All", "Rating", "Downloads" or "Plays" sort filters were created before
good mapping practices were established. Try downloading songs released between late 2019 and now to get the best
custom levels experience.
:::

::: warning It is a good idea to backup your `CustomLevels` folder periodically as there is a small chance it will be reset if the game updates!

This folder is located in your game install: `Beat Saber/Beat Saber_Data/CustomLevels` :::

### In-game Downloader
The `BeatSaver Downloader` mod allows you to download maps in-game using the `MORE SONGS` menu button on the `MODS` menu screen. This pulls maps directly from [BeatSaver](https://beatsaver.com)

### BeatSaver
[BeatSaver](https://beatsaver.com) is the master repository of custom songs made by the community. Many other tools and sites enhance the experience of downloading custom songs, but this site is where they are stored. To install songs downloaded from the site, unzip them into a folder and place it into `Beat Saber/Beat Saber_Data/CustomLevels`. You can also use the in-game downloader mod, or Mod Assistant's OneClick™ Install feature.

To enable and use Mod Assistant's OneClick™ Install see the picture below: ![Mod Assistant](~@images/beginners-guide/modassistant-oneclick.png)

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com) is a site that tries to help make finding fantastic maps to play easier. It does this by categorizing the thousands of songs on BeatSaver and lets you sort by a song's genre and many other attribute tags. It also has a full social feature where players can review songs and comment on them. One of the most used features is the "Curator Recommended" feature where a team plays through most songs released each day and recommends the ones that stand out, letting you [automatically download these in-game](https://bsaber.com/beatsync/).

### Song Management Apps

There are no working song management apps available at this time.

### Playlists
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* Использовать функцию `Установить плейлист` во вкладке Настройки в Mod Assistant.
* Или поместите файл плейлиста в папку `Beat Saber/Playlists`, выберите в игре и нажмите кнопку "Скачать все песни".

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

## Папка установки
_Where is Beat Saber installed?_

### Default Location
|        |                                                                                      |
| ------ | ------------------------------------------------------------------------------------ |
| Steam  | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### Other Locations
**If you have moved your install folder to a different drive, it might be in the location below.** Replace the drive letter `F` with the drive your game is installed on.
|        |                                                                       |
| ------ | --------------------------------------------------------------------- |
| Steam  | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## Ручная установка
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

::: warning STAY SAFE WHEN INSTALLING MODS Modding your game with unverified mods such as mods found in the `#pc-mods` channel comes with risks, including the possibility for malicious software that acts like a regular mod.

Beat Saber will **NEVER** ask you to run it as Administrator.

If you've downloaded and installed a mod and you get the User Account Control prompt, **DO NOT** click accept, and please report this. If you're unsure if something you installed is malware or not, ***please ask someone in our discord***. :::

**Run the game at least once** before trying to mod the game! This applies to reinstalling your game too.

### Install BSIPA

1. Скачайте [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Перейдите в папку [установки](#install-folder) и распакуйте в нее содержимое BSIPA. ![Директория очищена](~@images/beginners-guide/directory-clean.png "Директория очищена") ![Директория Ipa](~@images/beginners-guide/directory-ipa.png "Директория Ipa")
3. Дважды нажмите на IPA.exe для модификации игры. Все моды из папки `Plugins` теперь будут загружены при запуске игры. Если вы видите какие-то ошибки, то вы, вероятно, не выполнили шаг 2 правильно. ![Папка изменена](~@images/beginners-guide/directory-patched.png "Папка изменена")

### Install Mods

4. Скачайте модификацию(и), который(ые) вы хотите установить, будь то с GitHub, [BSMG Discord](https://discord.com/invite/beatsabermods) `#pc-mods`,  [BeatMods](https://beatmods.com/#/mods) или из других источников. **Убедитесь, что вы скачали всё нужное, которое требуются для работы модификации.** ![Каталог плагинов](~@images/beginners-guide/directory-plugins.png "Каталог плагинов")
5. Некоторые модификации имеют инструкции по их установке, а некоторые нет. В общем случае, вы можете просто перетащить содержимое архива в папку Beat Saber, и тогда файлы сами попадут в правильные папки.

## Откат

Check `#modding-announcements` in [BSMG](https://www.discord.gg/beatsabermods) to see if the latest version is moddable. If it is not, you can follow these tutorials to downgrade to a moddable version.

Click on these links corresponding to where you own the game to see the tutorials.

* [Oculus Store](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)
* Для Steam у вас есть несколько способов отката. Оба поддерживаются [BSLG](https://discord.gg/MrwMx5e).
  * [BSLegacyLauncher](https://www.youtube.com/watch?v=qjNU5aENHRU)
  * [LegacyInstaller](https://github.com/Goobwabber/LegacyInstaller#readme)

## Как удалить моды?
Either remove the dll from the `Plugins` folder, or click the `Uninstall` button in Mod Assistant.

## Что можно посмотреть ещё

* [Уловки и хитрости](./grips-and-tricks.md)
* [Создание карт](/mapping/)
* [Пользовательские мечи](/models/custom-sabers.md)
* [Пользовательские аватары](/models/custom-avatars.md)
* [Пользовательские платформы](/models/custom-platforms.md)
* [Игра с пользовательскими песнями в мультиплеере](https://discord.com/invite/gezGrFG4tz)
* [Создание модов](/modding/)

## Остались вопросы?
Visit the support channels in the [BSMG Discord](https://discord.gg/beatsabermods)!
