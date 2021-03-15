# 자주 하는 질문

## 막 게임을 샀는데, 어떻게 시작해야 하나요?
[초보자 가이드](/beginners-guide.md)를 확인해주세요!

## 어떻게 하면 더 많은 곡들을 얻을 수 있나요?
> [BeatSaver](https://beatsaver.com)는 커뮤니티에 의해 만들어진 마스터 저장소입니다. 많은 다른 도구나 사이트들이 커스텀 곡을 다운로드하는 경험을 향상시키기 위해 존재하지만, 그것들은 이 사이트로부터 출발했습니다.

BeatSaver에서 수동으로 맵을 다운받으려는 경우, 받은 맵을 `Beat Saber/Beat Saber_Data/CustomLevels`에 압축을 풀어주세요. 이 경로는 게임이 기본적으로 커스텀 맵을 읽어오는 경로입니다.

### BeastSaber
[Beast Saber](https://www.bsaber.com)는 BeatSaver의 모든 곡들을 평가하는 것을 목표로 하는 리뷰 사이트입니다. 또한 플레이리스트를 다운받거나, 매퍼를 팔로우하거나, 더 많은 분류 기준을 통해 곡을 찾거나 하는 일들이 가능합니다.

### 곡 관리 도구
아래의 프로그램들은 데스크탑 환경에서 커스텀 곡을 받는 것을 도와줍니다. 또한 다른 기능들도 존재합니다.

* [Beat Saber Downloader](https://drive.google.com/file/d/1QWedF77hWYbqcigIWa2UcpXlhqGTjwR1/view)는 Sturdyfool0이 만든 맵 다운로더입니다.
* [BeatList](https://github.com/Alaanor/beatlist)는 Alannor이 만든 플레이리스트와 맵을 관리하는 응용 프로그램입니다.

## 어떻게 플레이리스트를 설치할 수 있나요?

### PC
You need to install the [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod.

Then you can either:

* 모드 어시스턴트에 있는 `Install Playlist` 툴을 이용합니다.
* Place the playlist file into `Beat Saber/Playlists`, select it in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### Quest
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users Reloading your Custom Songs Folder resets all playlist organization. :::

## 어떻게 하면 저만의 커스텀 레벨을 만들 수 있나요?
See [mapping](/mapping/)!

## 모드 어시스턴트에 없는 플러그인을 설치하려면 어떻게 해야 하나요?
See [this section](/pc-modding.md#manual-installation) in the beginners guide.

## 멀티플레이는 크로스플레이를 지원하나요?
Officially, multiplayer is limited to playing with other people in the store version (Oculus/Steam) you purchased. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. The game developers realized this, so when the game updates and you run it for the first time, everything in the `Plugins` folder is moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins in there!**

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

If you're confused by any of this, visit [Beginners Guide](/beginners-guide.md).

## 비트세이버의 점수 시스템은 어떻게 되어있나요? 세계 랭킹은 어떻게 작동하나요?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## My menus are blank and I have nothing to click on
If the main window in your game is blank, your save file likely got corrupted.

To fix it, navigate to: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

Delete or rename the Beat Saber folder to something else. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
