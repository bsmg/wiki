---
sidebar: auto
---

# 퀘스트 모드 적용

## 서문

- 이 가이드는 퀘스트 1과 2 모두를 위한 가이드입니다.
- 아직 아무도 모드 적용을 금지하지 않았습니다.

::: danger 면책 조항 모드를 사용함에 있어서, 다음을 숙지해야 합니다:
- 바닐라 게임에는 없는 문제를 경험할 수 있습니다. 버그, 크래시, 랙의 99.9%는 모드 때문에 일어납니다.
- 모드는 업데이트로 인하여 사용이 불가능해질 수 있으며, 이는 정상적인 현상입니다. 새로운 버전이 올라올 때 까지 기다려주세요. 모더들은 바쁜 속에서도 봉사해주고 있습니다.
- Beat Games는 고의적으로 모드를 망가트리려 하지 않습니다. 그들은 코드베이스에서 작업하기를 원하고 때때로 이것은 모드를 깨뜨리지만 모드를 죽이려는 것은 아닙니다.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. 처신 잘하시기 바랍니다. :::

## 설치

커스텀 곡과 모드를 설치하기 위해, SideQuest를 통해 BMBF를 설치하는 것을 추천합니다.
* [BMBF apk](https://bmbf.dev/stable) :::warning BMBF를 설치하고 게임에 모드를 적용하면 공식 멀티플레이어, 기본 리더보드에서의 점수 조회 및 업로드가 비활성화 됩니다. 이는 오큘러스가 게임에 모드를 적용하는 것을 공식적으로 인증하지 않았기 때문입니다.

커뮤니티 리더보드 시스템인 [ScoreSaber](https://new.scoresaber.com/quest)를 확인하여 퀘스트에서 ScoreSaber를 적용하는 방법을 확인하세요.  
메모: ScoreSaber는 기존의 리더보드를 대체하지 않습니다. 단지 커스텀 곡에 대한 리더보드를 추가 할 뿐입니다. :::

### SideQuest를 통한 BMBF의 설치

준비가 되었다면, [SideQuest](https://sidequestvr.com/#/setup-howto)를 받아 설치해주세요.

SideQuest를 열고 PC에 퀘스트를 연결하세요. 만약 이전에 비트 세이버에 모드를 적용해본 적이 있거나 점수를 백업하고 싶다면, 상단 바의 `My Apps`로 가서 비트 세이버를 찾아보세요.

Click the cog next to it then press the `BACKUP GAME DATA` button. If you have a modded game you also need to uninstall it by pressing the `UNINSTALL APP` button.

![SideQuestUninstall](~@images/beginners-guide/squninstall.png)

모드가 적용된 후 동일한 메뉴창에서 세이브 파일을 불러올 수 있습니다.

상단 바의 `Install APK from folder` 버튼을 이용해 다운받은 최신 버전의 BMBF apk 파일을 퀘스트에 설치해주세요.

![InstallAPK](~@images/beginners-guide/apkfromfolder.png)

BMBF가 성공적으로 설치됐다면, 모드가 적용되지 않은 최신 버전의 비트 세이버가 퀘스트에 설치되어 있도록 합니다. ::warning 모드를 적용하기 전에 비트 세이버를 한 번 켰다가 꺼주세요! :::

비트 세이버를 한 번 실행하고 난 후에는, Oculus TV 채널이나 라이브러리 - 알 수 없는 출처에서 BMBF를 실행해줍니다.![UnknownSourced](~@images/beginners-guide/quest_home-menu.jpg)

Follow each step exactly as you're told. Then, you should see [bsaber.com](https://www.bsaber.com). This is where you can download any custom songs available.

If at any point during the install process, you get the `Restore App` popup just click `Close`. This warning is more directed to pirated versions of the game so if you're just modding there will likely be no consequences for ignoring it.

![RestoreApp](~@images/beginners-guide/restoreapp.png)

## 백업 데이터 복원

### SideQuest를 통한 복원

이전에 백업했던 것과 같은 메뉴로 가서, `OPEN BACKUPS` 버튼을 눌러주세요. 그곳에서 가장 최신의 백업 폴더를 연 다음, Mods 폴더를 지워주세요. (이는 오래됐거나 호환되지 않는 모드들이 게임을 작동하지 않게 하는 것을 방지하기 위함입니다.)

그 다음, 메뉴로 돌아가 최신 백업 옆에 있는 원형 화살표 버튼을 누릅니다. 이는 플레이했던 점수를 복원하기 위함입니다. 그 버튼은 [이 사진](#installing-bmbf-with-sidequest)에서 강조되어 있는 4번 항목입니다.

## 모드 설치

### 퀘스트 내부
:::warning Not all mods are available in QuestBoard!  
If a mod is not seen in here, you should follow the [Using Your PC](#using-your-pc) method instead. :::

Open BMBF in your Quest and go to the `Browser` tab, there you should see a globe icon similar to what's shown below. Click it, then click the `QuestBoard` button.

![globequestboard](~@images/beginners-guide/globequestboard.png)

You should be greeted with the QuestBoard website below. Next, select the `DOWNLOAD MODS` tab.

![questboardhome](~@images/beginners-guide/questboardhome.png)

Scroll down with your thumbsticks. You can now select any mod from the list, seen below, and download it by hitting the download button next to it. Some downloads may redirect you to a website or GitHub page. If so, follow the instructions onscreen, or select the latest `.zip` in the Releases list, respectively.

![questboardmods](~@images/beginners-guide/questboardmods.png)

### PC 이용
:::warning Make sure your Quest and PC are on the same network! :::

Open BMBF in your Quest and go to the `Tools` tab, there you should see a web address and a version number similar to what's shown below.

![ip](~@images/beginners-guide/ip.png)

On your PC, open your browser and type the address into the search bar.

You should be greeted with this screen below.

![bmbfweb](~@images/beginners-guide/bmbfweb.png)

Now just drag any Quest compatible mods into the upload box and sync. If the mod was originally made for an older version, then it won't automatically enable. To enable an old mod, go to the `Mods` tab and enable it from there.

If you want to use the same method of downloading songs as you do in BMBF in your Quest, just replace `upload` in the URL with `browser`.

## 곡 설치

### Inside your Quest
There are 2 sources to getting custom maps inside your Quest using the browser window.
* [BeastSaber](https://bsaber.com/)에는 평가된 맵들과 플레이리스트가 있습니다.
* BeastSaber의 UI가 맘에 들지 않는다면 [BeatSaver](https://beatsaver.com/)를 이용하세요.

Both have a OneClick™ button that easily installs that song onto your Quest. You can switch between these websites using the globe icon in the top right of the browser window.

### Using your PC
If you are unable to install songs inside your Quest, you can install maps using your computer similar to installing mods.
1. 컴퓨터에서 [BeastSaber](https://bsaber.com/) 또는 [BeatSaver](https://beatsaver.com/)로 이동하세요.
2. zip 파일을 받아주세요.
3. Follow the [Installing mods using your PC](#using-your-pc) steps up to the upload files screen.
4. zip 파일을 드래그 앤 드롭하면 설치됩니다!

:::tip If you want to test a map you have created see the [Testing on a Quest](/mapping/#testing-on-a-quest) Section in the Mapping Wiki section for steps on packing it up for testing! :::

## 유용한 링크와 대체 가이드

* [오큘러스 퀘스트 BMBF 설치 가이드](https://bsaber.com/oculus-quest-custom-songs/)
* [Sc2ad의 에셋 모드 제작을 위한 기본적인 가이드](https://github.com/sc2ad/beat-saber-community-wiki/blob/master/asset-modding-guide.md)
* [RedBrumbler의 에셋 모드 (세이버, 노트 등) 를 위한 가이드 모음](https://github.com/RedBrumbler/BMBFCustomSabers/wiki/RedBrumblers-Asset-Mod-Guide-Wiki)
* [Qosmetics Community](https://discord.gg/qosmetics) - Server dedicated to making and using sabers, bloqs, and walls for Quest.
* [Qosmetics 제작 가이드](https://github.com/RedBrumbler/Qosmetics/wiki) - 퀘스트를 위한 세이버, 노트, 벽을 만드는 가이드.
* [오디오 싱크 맞추기](https://bsaber.com/quest-out-of-sync/)
* [ScoreSaber](https://new.scoresaber.com/quest) - 커스텀 곡을 위한 인게임 리더보드

## 문제 해결
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
* 모드가 BMBF 버전과 호환되어야 하는 경우, .zip 파일의 내용을 나누는 폴더가 없는지 확인하세요.
* 만일 곡이 로딩되지 않는다면 #quest-mods 채널에서 mapping extensions 모드를 설치해보세요.
* If your BMBF is on the latest version and mods wont be enabled in game, uninstall Beat Saber with the uninstall BS button in the BMBF Tools tab then reinstall and remod.
* In very very very rare cases, BMBF does not have file permissions to copy mods into the right location. Check in SideQuest to make sure BMBF has file permissions.
___
### My Beat Saber gets 3 dots when I launch!
If your Beat Saber is getting 3 dots when launching make sure that: 1) You launched and played one song before modding the game 2) You're not using a pirated version of the game 3) Make sure you're using the latest version of BMBF


