---
sidebar: auto
---

# Модификации на Quest

## Вступление

- Это руководство подходит как и для Quest 1, так и Quest 2.
- Никто ещё не был заблокирован за модификации.

::: danger ВАЖНОЕ ПРИМЕЧАНИЕ. Если вы решили использовать моды, вы должны помнить следующее:
- Вы можете столкнуться с проблемами, которых нет в версии игры без модификаций. В 99.9% случаев, баги, ошибки и плохая производительность игры связаны с модификациями.
- Модификации могут прекратить работать из-за обновлений игры и это нормально - будьте терпеливыми и понимающими, когда такое происходит, ведь создатели модификаций тоже имеют личную жизнь.
- Beat Games не пытаются специально сломать работу модификаций. Компания иногда работает над кодом игры, из-за чего модификации и перестают работать, но они не пытаются убить возможность модификации.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. В общем, просто не ведите себя как кретин. :::

## Установка

На данный момент единственным способом загрузки сторонних песен и модов это BMBF, загруженный с помощью SideQuest.
* [BMBF apk](https://bmbf.dev/stable) :::warning Установка BMBF и модификация игры отключит возможность играть в сетевой режим с другими игроками, просмотр и загрузку очков на официальную таблицу лидеров. Это происходит потому, что Oculus не идентифицирует модифицированные игры.

Посетите [ScoreSaber](https://new.scoresaber.com/quest) для информации о настройке ScoreSaber, системы рейтинга от сообщества на вашем Quest.  
Примечание: ScoreSaber не заменяет базовую игровую таблицу лидеров, а лишь добавляет рейтинговую систему для пользовательских песен. :::

### Установка BMBF с помощью SideQuest

Если у вас ещё нет приложения SideQuest, установите его по этой ссылке [SideQuest](https://sidequestvr.com/#/setup-howto)

Откройте SideQuest и присоедините ваш Quest к компьютеру. If you've previously modded Beat Saber or have scores you want to backup, go to `My Apps` located in the top bar of the window and find Beat Saber.

Click the cog next to it then press the `BACKUP GAME DATA` button. If you have a modded game you also need to uninstall it by pressing the `UNINSTALL APP` button.

![SideQuestUninstall](~@images/beginners-guide/squninstall.png)

Вы сможете восстановить ваши сохранения из того же меню после модифицирования.

Установите последнюю версию BMBF APK с помощью кнопки `Install APK из папки`, показанной ниже.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

Once they've successfully installed, make sure you have the latest version of Beat Saber installed and unmodded. :::warning Run Beat Saber once and close it before modding! :::

После первого запуска Beat Saber, откройте BMBF из Oculus TV вкладки каналов или из Неизвестных источников в вашей библиотеке. ![UnknownSourced](~@images/beginners-guide/quest_home-menu.jpg)

Follow each step exactly as you're told. Then, you should see [bsaber.com](https://www.bsaber.com). This is where you can download any custom songs available.

If at any point during the install process, you get the `Restore App` popup just click `Close`. This warning is more directed to pirated versions of the game so if you're just modding there will likely be no consequences for ignoring it.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

## Восстановление сохраненных данных

### Восстановление из SideQuest

Вернитесь к тому же меню, которое вы использовали для резервного копирования данных и нажмите кнопку `OPEN BACKUPS`. Также, найдите папку с резервной копией, откройте её, и удалите папку с модификациями (Это поможет предотвратить вылеты игры в связи с несовместимыми или старыми модификациями).

После этого, вернитесь обратно в меню и нажмите на кнопку с стрелками, замкнутыми в круг, напротив вашей последней резервной копией данных. Это восстановит ваши игровые результаты. Кнопка выделена на изображении[здесь](#installing-bmbf-with-sidequest).

## Установка модификаций

### На вашем Quest
:::warning Not all mods are available in QuestBoard!  
If a mod is not seen in here, you should follow the [Using Your PC](#using-your-pc) method instead. :::

Open BMBF in your Quest and go to the `Browser` tab, there you should see a globe icon similar to what's shown below. Click it, then click the `QuestBoard` button.

![globequestboard](~@images/beginners-guide/globequestboard.png)

You should be greeted with the QuestBoard website below. Next, select the `DOWNLOAD MODS` tab.

![questboardhome](~@images/beginners-guide/questboardhome.png)

Scroll down with your thumbsticks. You can now select any mod from the list, seen below, and download it by hitting the download button next to it. Some downloads may redirect you to a website or GitHub page. If so, follow the instructions onscreen, or select the latest `.zip` in the Releases list, respectively.

![questboardmods](~@images/beginners-guide/questboardmods.png)

### Используя ваш ПК
:::warning Make sure your Quest and PC are on the same network! :::

Open BMBF in your Quest and go to the `Tools` tab, there you should see a web address and a version number similar to what's shown below.

![ip](~@images/beginners-guide/ip.png)

On your PC, open your browser and type the address into the search bar.

You should be greeted with this screen below.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Now just drag any Quest compatible mods into the upload box and sync. If the mod was originally made for an older version, then it won't automatically enable. To enable an old mod, go to the `Mods` tab and enable it from there.

If you want to use the same method of downloading songs as you do in BMBF in your Quest, just replace `upload` in the URL with `browser`.

## Установка пользовательских песен

### Inside your Quest
There are 2 sources to getting custom maps inside your Quest using the browser window.
* Если вы ищете кураторские карты или плейлисты, посетите [BeastSaber](https://bsaber.com/)
* Если вам не нравится интерфейс BeastSaber, вы можете попробовать [BeatSaver](https://beatsaver.com/)

Both have a OneClick™ button that easily installs that song onto your Quest. You can switch between these websites using the globe icon in the top right of the browser window.

### Using your PC
If you are unable to install songs inside your Quest, you can install maps using your computer similar to installing mods.
1. Зайдите на [BeastSaber](https://bsaber.com/) или [BeatSaver](https://beatsaver.com/) на вашем ПК
2. Скачайте .zip файл
3. Follow the [Installing mods using your PC](#using-your-pc) steps up to the upload files screen.
4. Перетащите .zip файл карты в окно загрузки. После этого он должен быть установлен!

:::tip If you want to test a map you have created see the [Testing on a Quest](/mapping/#testing-on-a-quest) Section in the Mapping Wiki section for steps on packing it up for testing! :::

## Полезные ссылки и другие руководства

* [Руководство по установке BMBF для Oculus Quest](https://bsaber.com/oculus-quest-custom-songs/)
* [Общее руководство от Sc2ad по изучению основ модифицирования файлов игры](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md)
* [Сборник всех нынешних инструкций по таким модификациям как Мечи и Ноты от RedBrumbler](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki)
* [Qosmetics Community](https://discord.gg/qosmetics) - Server dedicated to making and using sabers, bloqs, and walls for Quest.
* [Qosmetics Creation Guides](https://github.com/RedBrumbler/Qosmetics/wiki) - Guides to create your own custom sabers, bloqs, and walls for Quest.
* [Fixing Out of Sync Audio](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - Внутриигровая таблица лидеров для пользовательских песен

## Устранение проблем
:::warning I watched this video by Elite Eric, but I got stuck/it didn't work. What gives? We at BSMG **strongly** suggest against using any tutorials by Elite Eric. After reviewing much of his content, they contain a large amount of incomplete, erroneous, or straight up incorrect information. Attempts to reach out to him to correct these errors has unfortunately been met with silence and new (also incorrect) tutorials.

Instead, you should follow the written guides here on the wiki or seek out help in the [BSMG Discord](https://discord.gg/beatsabermods). :::
### Adding mods from beatmods.com or models from modelsaber.com does not work
The reason adding mods from [BeatMods](https://beatmods.com/) or models from [ModelSaber](https://modelsaber.com/) doesn't work is because those mods and sabers are for PC Only.

Get Quest compatible Mods from [Questboard](https://www.questmodding.com/) or `#quest-mods` in the Beat Saber Modding Group Discord, with Quest compatible sabers, bloqs, and walls in the [Qosmetics Community](https://discord.gg/qosmetics). Once you have your mod or model zip use the [BMBF Web Interface](#using-your-pc) to install it.
___
### Sideloading BMBF failed
When sideloading BMBF you get the error `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.weloveoculus.BMBF signatures do not match the previously installed version; ignoring!`

You will need to uninstall the BMBF version on your Quest. You can do this from SideQuest's `My Apps` menu.
___
### BMBF web interface not loading
If your BMBF Web Interface is not loading, be sure that you're typing the IP from the tools tab into your browser on your computer that's on the same network. Make sure that: 1) Your IP is not `127.0.0.1`, if that shows up try rebooting your headset and/or router. 2) BMBF is open in the headset 3) There is `http://` at the beginning of the link, not `https://` 4) You have `:50000` at the end of your link 5) Your PC and Quest are on the same wifi network 6) Your IP is still the same as it can change from time to time

If none of these work, restart your Quest and go through the list again.
___
### BMBF not loading configuration after a few minutes
This is likely due to using BMBF on a game version it was not built for. Such as using BMBF for Beat Saber version `1.13.0` when the version of the game installed on the headset is `1.12.2`.  
If the game version matches what the BMBF release page says its built for, try restarting your headset. If it still does not work use the [BMBF Web Interface](#using-your-pc) and click `Quick Fix` in the Tools tab.
___
### Beat Saber is black when I launch it
Open the library on your Quest. Click the three dots next to Beat Saber and then click `Permissions`. In the menu that pops up, enable storage permissions and try launching the game again.
___
### My Sabers and Mods wont enable/work!
This is most likely due to having an outdated BMBF Client, grab the latest [BMBF Release](https://bmbf.dev/stable). If the BMBF version for your Beat Saber is not there then please wait a while for the unicorns to update BMBF.
* If your mod is supposed to be compatible with your version of BMBF, then make sure there is no folder separating the contents of the .zip file.
* If your level doesn't load then try installing mapping extensions from #quest-mods
* If your BMBF is on the latest version and mods wont be enabled in game, uninstall Beat Saber with the uninstall BS button in the BMBF Tools tab then reinstall and remod.
* In very very very rare cases, BMBF does not have file permissions to copy mods into the right location. Check in SideQuest to make sure BMBF has file permissions.
___
### My Beat Saber gets 3 dots when I launch!
If your Beat Saber is getting 3 dots when launching make sure that: 1) You launched and played one song before modding the game 2) You're not using a pirated version of the game 3) Make sure you're using the latest version of BMBF


