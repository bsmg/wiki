# 자주 하는 질문

## 막 게임을 샀는데, 어떻게 시작해야 하나요?
[초보자 가이드](/beginners-guide.md)를 확인해주세요!

## 어떻게 하면 더 많은 곡들을 얻을 수 있나요?
> [BeatSaver](https://beatsaver.com)는 커뮤니티에 의해 만들어진 마스터 저장소입니다. 많은 다른 도구나 사이트들이 커스텀 곡을 다운로드하는 경험을 향상시키기 위해 존재하지만, 그것들은 이 사이트로부터 출발했습니다.

BeatSaver에서 수동으로 맵을 다운받으려는 경우, 받은 맵을 `Beat Saber/Beat Saber_Data/CustomLevels`에 압축을 풀어주세요. 이 경로는 게임이 기본적으로 커스텀 맵을 읽어오는 경로입니다.

### BeastSaber
[Beast Saber](https://www.bsaber.com)는 BeatSaver의 모든 곡들을 평가하는 것을 목표로 하는 리뷰 사이트입니다. 또한 플레이리스트를 다운받거나, 매퍼를 팔로우하거나, 더 많은 분류 기준을 통해 곡을 찾거나 하는 일들이 가능합니다.

### 곡 관리 도구

The following can be used to help you manage custom songs or playlists.

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) is a desktop app to manage custom songs and playlists, maintained by **ranmd9a**.
* [BeaterList](https://syltaris.github.io/beaterlist) is a browser based service by **zexurge** to manage playlists.

## 어떻게 플레이리스트를 설치할 수 있나요?

### PC
[PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) 모드를 설치하셔야 합니다.

그 후, 둘 중 하나의 방법을 선택하세요.

* 모드 어시스턴트에 있는 옵션 탭에서 `Install Playlist` 툴을 사용하시면 됩니다.
* Place the playlist file into `Beat Saber/Playlists`, select the playlist title header in-game, then hit download all songs.

You should see the playlist next to the Custom Levels album's in-game. The mod also supports managing playlists in-game.

### 오큘러스 퀘스트
You can use [Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) to manage the playlists on your Quest. Note that a custom level can only appear once in-game due to a limitation with BMBF.

:::warning WARNING for Quest Users
Reloading your Custom Songs Folder resets all playlist organization.
:::

## 어떻게 하면 저만의 커스텀 레벨을 만들 수 있나요?
[매핑](/mapping/) 문서를 참고하세요!

## 어떻게 모드 어시스턴트에 없는 PC 모드들을 사용하나요?
초보자 가이드의 [이 부분](/pc-modding.md#manual-installation)을 확인해주세요.

## 혹시 멀티플레이가 크로스플레이를 지원하나요?
Cross-play between Quest and PC versions of the game is now available! All players will need to be on the latest version for this to work. Additionally, modifying the game on Quest disables official multiplayer.

The BeatTogether mod is the current solution for cross-platform play between the modded game versions. Join their [Discord server](https://discord.com/invite/gezGrFG4tz) and check the `#install-instructions` channel for more information.

## My game updated and now none of my mods are working
Each time the game updates it is possible *(and very likely)* that your existing mods will stop working and need to be updated. To make sure your install will not break when the game runs on a new update for the first time, everything in the `Plugins` folder is automatically moved into a new folder called `Old 1.xx.x Plugins`. **Leave those plugins/mods in there!** Please do not drag these mods back into the `Plugins` folder, as it is known to cause issues.

To get mods back, simply **run the installer again.**  
The BeatMods repository only includes mods that have been confirmed to work on the latest version of the game!

만약에 혼란스럽다면, [초보자 가이드](/beginners-guide.md)를 확인해주세요.

## 비트세이버의 점수 시스템은 어떻게 계산되나요? 세계 랭킹은 어떻게 작동하나요?
We have sections on the [grips and tricks](/grips-and-tricks.md) page dedicated to the scoring and ranking systems, check them out!

## 제 메뉴가 비어있고 누를 수 있는 버튼이 없어져 버렸어요.
메인 창이 비어있다면, 세이브 파일이 손상된 확률이 높습니다.

다음 폴더로 가시면 고치실 수 있습니다: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

그 안에 있는 Beat Saber 폴더를 삭제하거나, 폴더의 이름을 변경해주세요. When you re-enter the game, it'll recreate the save file and should load the main menu properly.
