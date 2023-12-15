# Часто задаваемые вопросы (FAQ)

## Я только что приобрел игру, что мне делать дальше?
Прочитайте наше [руководство для начинающих](/beginners-guide.md)!

## Как получить больше песен?
> [BeatSaver](https://beatsaver.com) - это хранилище пользовательских песен, созданных сообществом. Существуют и другие сайты, которые позволяют загружать песни или предоставляют другие интерфейсы для этого, но именно этот является первоначальным источником песен для всех остальных сайтов.

Если вы хотите загрузить карты вручную из BeatSaver, создайте новую папку, распакуйте в нее архив с песней и перенесите эту папку в `Beat Saber/Beat Saber_Data/CustomLevels`. Из этой папки игра изначально читает пользовательские карты.

### BeastSaber
[Beast Saber](https://www.bsaber.com) это сайт с рецензиями, цель которого - более удобная организация всех песен с BeatSaver. Также вы можете скачать плейлисты, подписываться на определенных создателей карт, находить карты с помощью расширенных методов сортировки и многое другое.

### Внешние программы для загрузки и организации карт

The following can be used to help you manage custom songs or playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists, maintained by **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## Как установить плейлисты?

### ПК
Вам нужно установить модификацию [PlaylistManage](https://github.com/rithik-b/PlaylistManager/releases/latest).

Потом вы сможете:

* Use the `Install Playlist` tool in the Options tab of Mod Assistant.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

Теперь вы увидите плейлист после кнопки с альбомом пользовательских песен в игре. Модификация также поддерживает управление плейлистами в игре.

### Quest
Вы можете использовать [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) для управления плейлистами на вашем Quest. Обратите внимание, что пользовательские песни могут появиться в игре только единожды из-за ограничений BMBF.

::warning ПРЕДУПРЕЖДЕНИЕ для пользователей Oculus Quest Перезагрузка папки пользовательских песен сбрасывает все плейлисты. :::

## Как создать свою собственную карту?
Смотрите [руководство по созданию карт](/mapping/)!

## Как установить модификации на ПК, которых нет в Mod Assistant?
Посмотрите [этот раздел](/pc-modding.md#manual-installation) в руководстве для начинающих.

## Поддерживает ли мультиплеер возможность играть с пользователями других платформ?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

Мод BeatTogether - это нынешнее решение для кроссплатформенного мультиплеера между модифицированными версиями игры. Присоединяйтесь к [серверу Discord](https://discord.com/invite/gezGrFG4tz) и посетите канал `#install-instructions` для получения дополнительной информации.

## Моя игра обновилась, и теперь никакие модификации не работают
Каждое игровое обновление с *очень высокой вероятностью* ломает модификации, которые необходимо обновить. Чтобы убедиться, что установка модификаций не сломается, когда игра будет запускаться впервые на новой версии, всё содержимое папки `Plugins` будет автоматически перемещено в новую папку `Old 1.xx.x Plugins`. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

Чтобы вернуть модификации обратно, просто **запустите установщик заново.**  
Репозиторий BeatMods включает в себя только те модификации, которые проверены для работы на последней версии игры!

Если вы запутались с чем-либо, посетите [Руководство для начинающих](/beginners-guide.md).

## Как работает система начисления очков в Beat Saber? Как работает мировой рейтинг?
У нас есть раздел о [хватах и советах](/grips-and-tricks.md), посвященный системе подсчёта очков и рейтинга, рекомендуем ознакомиться!

## Меню игры пустое, и я не могу ни на что нажать
Если главное меню игры пустое, ваш файл сохранения похоже был поврежден.

Чтобы исправить это, перейдите в: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Удалите или переименуйте папку Beat Saber в любое другое название. При повторном входе в игру, игра пересоздаст файл сохранения и загрузит главное меню правильно.
