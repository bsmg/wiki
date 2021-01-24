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
**PC:**  
`PlaylistLoaderLite`모드를 설치해야 합니다. 그 후 아래의 둘 중 하나를 선택하면 됩니다.
* 모드 어시스턴트에 있는 `Install Playlist` 툴을 이용합니다.
* 플레이리스트 파일을 `Beat Saber/Playlists`에 넣고 BeatList에서 선택한 후, download all 버튼을 누릅니다.

이제 플레이리스트를 커스텀 레벨 커버 다음 칸에서 볼 수 있게 됩니다. 만일 플레이리스트에서 누락된 맵이 있다면, Beatsaver 또는 Bsaber에서 수동으로 맵을 다운로드받아야 합니다.

**Quest:**  
[Playlist Editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/)를 이용하여 Quest에서 플레이리스트를 관리할 수 있습니다. 메모 커스텀 레벨은 BMBF에서의 제한으로 인해 인게임에서 한 번만 나타날 수 있습니다.

:::warning Quest 유저를 위한 경고 커스텀 곡 폴더를 다시 로드하면 플레이리스트가 초기화됩니다. :::

## 어떻게 하면 저만의 커스텀 레벨을 만들 수 있나요?
[매핑](/mapping/) 문서를 참고하세요!

## 모드 어시스턴트에 없는 플러그인을 설치하려면 어떻게 해야 하나요?
초보자 가이드의 [이 단락](/pc-modding.md#manual-installation)을 확인하세요.

## 멀티플레이는 크로스플레이를 지원하나요?
공식적으로, 멀티플레이는 구매한 스토어 (오큘러스/스팀) 와 같은 곳에서 구매해야 같이 플레이가 가능합니다. 또한, Quest에서 게임에 모드를 적융했을 경우엔 공식 멀티플레이를 사용할 수 없죠.

BeatTogether 모드는 크로스플랫폼 플레이를 가능하게 해주는 모드입니다. [디스코드 서버](https://discord.com/invite/gezGrFG4tz)에서 `#install-instructions` 채널을 확인하여 더 많은 정보를 확인해주세요.

## 게임이 업데이트되고 모드들이 작동하지 않아요!
게임이 업데이트 될 때 마다 기존의 모드들을 *(높은 확률로)* 사용하지 못하게 됩니다. 개발자들은 이 점을 숙지하고 있으며, 게임을 업데이트한 후에 처음 실행하면 `Plugins` 폴더의 모든 파일들이 `Old 1.xx.x Plugins` 폴더로 옮겨갑니다. **그 플러그인을 옮기지 마세요!**

모드를 되돌리려면, 간단하게 **다시 설치하면 됩니다.**   
BeatMods 저장소는 최신 버전에서 작동하는 모드들만을 저장합니다.

혼란이 있는 경우에는 [초보자 가이드](/beginners-guide.md)를 확인해주세요.

## 비트세이버의 점수 시스템은 어떻게 되어있나요? 세계 랭킹은 어떻게 작동하나요?
[그립과 팁](/grips-and-tricks.md) 페이지에 점수와 랭킹 시스템을 기재해 놓았으니, 확인해주시면 감사하겠습니다!

## 메뉴가 비어있고 클릭할 버튼이 없어졌어요!
게임의 메인 화면이 비어있다면, 높은 확률로 세이브 파일이 망가졌을 것입니다.

고치기 위해서는, 다음 폴더로 가주세요: `%AppData%\..\LocalLow\Hyperbolic Magnetism`

그 안에 Beat Saber라 되어있는 폴더를 삭제하거나 파일명을 변경해주세요. 다시 게임에 접속하면 새로운 세이브 파일을 만들고 정상적으로 메인 메뉴가 로딩될 것입니다.
