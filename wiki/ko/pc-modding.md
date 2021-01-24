---
sidebar: auto
---

# PC 모딩
# 서문

::: danger 위험 고지 사항 모드를 사용함으로써 다음을 이해할 수 있다.
- 기본모드에서 존재하지 않는 문제들을 경험할 수 있습니다. 버그,충돌,지연의 원인은 99.9% 모드입니다.
- 모드는 업데이트로인해 사용이불가능해질수 있으며, 이는 정상적인 현상입니다. 모더들은 바쁜속에서도 봉사해주고있습니다.
- 비트 게임즈는 고의적으로 모드를 망가트리려 하지 않습니다. 그들은 코드베이스에서 작업하기를 원하고 때때로 이것은 모드를 깨뜨리지만 모드를 죽이려는 것은 아닙니다.

Do not attack the game developers for issues related to mods, and vice versa - modders and game developers are two separate groups. 그냥 멍청하게 굴지마세요. :::

비트세이버는 기본적으로 커스텀송을 지원하므로 원하는 곡만 있으면 더 이상 모드가 필요하지 않습니다. 이 모드는 기본 게임 기능을 확장하여 로딩 시간을 개선하고 게임 내 다운로더, 커스텀리더보드, 플레이리스트 등과 같은 다른 모드에 대한 기능을 제공하므로 `SongCore`를 설치하는 것이 현명한 생각입니다.

::: warning 주의 본 가이드는 Windows용 PC 모딩에 대해 다룹니다.  
만약 Quest를 가지고 있다면, [Quest 모드](/quest-modding.md) 페이지를 확인해 주세요.  
만약 Linux를 사용하고 있다면, [Linux 모딩 가이드](/modding/linux.md) 또는 [QBeat](https://github.com/geefr/beatsaber-linux-goodies/blob/master/README.md) 페이지를 확인해 주세요. :::

문제가 발생할 경우 언제든지 지원 페이지로 이동하여 서버에서 문의하기전에 무엇이 잘못되었는지 확인해주세요. 필요한 답은 그 페이지에 있습니다

:::경고 Elite Eric 비디오를 봤는데 꼼짝도 안 해요. 왜 BSMG 에서는 Elite Eric 의 튜토리얼 사용에 대해 강력하게 반대합니다. 그의 많은 내용을 검토한 후, 그것들은 많은 양의 불완전하고, 오류가 있거나, 부정확한 정보를 바로 잡습니다. 이러한 정보를 수정하려고 그에게 연락했지만, 안타깝게도 침묵과 새로운 (또한 잘못된) 정보로 돌아왔습니다.

대신에, 이곳의 가이드 또는 [BSMG Discord](https://discord.gg/beatsabermods)에서 도움을 받으세요. :::

## 설치 프로그램
### 모드 어시스턴트 ( Mod Assistant )
> **현재 권장되는 모드 설치 프로그램입니다.**

__**모드를 설치하기전에 **** 한 번 이상 게임을 실행해주세요! 이것은 게임을 다시 설치하는 것에도 적용됩니다.

모드매니저와 유사하지만 모드 제거 및 버전 확인 과 같은 추가 기능이 있는 간단한 비트세이버 모드 인스톨러! 어시스턴트 GitHub 링크 [>>클릭<<](https://github.com/Assistant/ModAssistant/releases/latest)

![ModAssistant](~@images/beginners-guide/modassistant.png)

## 곡 다운
### 인게임 다운로더 ( In-Game Downloader )
</code>BeatSaver Downloader Plugin</code> 을 사용하면</code>  MODS </code> 메뉴화면의 </code>  More Songs </code> 에서 맵을 다운할수있습니다.  [BeatSaver](https://beatsaver.com) 에서 맵을 가져옵니다

### BeatSaver
[BeatSaver](https://beatsaver.com)는 커뮤니티에 의해 만들어진 커스텀 송 저장소입니다. 다른 도구나 프로그램, 사이트 등이 커스텀 송을 다운로드를 쉽게 할 수있도록 존재하지만, 이 사이트가 근본이 된다고 할 수 있습니다. 이 사이트에서 받은 곡을 설치하는 방법은, 다운로드했던 zip 파일을 압축 해제하고, 이후에 생성된 폴더를 `Beat Saber/Beat Saber_Data/CustomLevels` 경로로 옮겨 넣으면 됩니다.  You can also use the in-game downloader plugin, BeatList, or Mod Assistant's OneClick™ Install feature.

### Beast Saber
[Beast Saber](https://www.bsaber.com) (bsaber.com)는  퐌타스틕한 맵을 찾아 쉽게 플레이할 수 있도록 돕는 사이트다. 비트 세이버에 있는 수천 개의 노래를 분류함으로써 이 작업을 수행할 수 있으며 한 곡의 장르와 다른 여러 속성 태그를 기준으로 정렬할 수 있습니다. 그것은 또한 플레이어들이 노래를 검토하고 그것에 대해 논평할 수 있는 특징을 가지고있습니다. 가장 많이 사용되는 기능 중 하나는 "큐레이터 권장" 기능으로, 팀은 매일 발표되는 대부분의 노래를 재생하고 눈에 띄는 곡을 추천하여 게임 내 이러한 음악을 자동으로 다운로드할 수 있습니다.

### 노래 관리 앱
* [BeatList](https://github.com/Alaanor/beatlist)는 Alaanor 가 플레이리스트와 비트맵을 관리하는 앱입니다.

### 플레이리스트 ( Playlists )
플레이리스트파일을  `Beat Saver/playlist` 에 넣은다음  [BeatList](https://github.com/Alaanor/beatlist) 또는  [Mod Assistant](https://github.com/Assistant/ModAssistant) 를 사용하여 곡을 다운로드하십시오. (참고: 이전 모드는 게임 내 플레이리스트의 의 콘텐츠를 다운로드하는 것을 허용했지만, 현재 이것은 불가능하다.)

## 설치 폴더
_비트세이버 로컬파일 위치 ( 설치 위치 )_

### 기본 위치
|      |                                                                                      |
| ---- | ------------------------------------------------------------------------------------ |
| 스팀   | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| 오큘러스 | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

### 그 외 위치
**설치 폴더를 다른 드라이브로 이동한 경우 아래위치에 있을 수 있습니다.** 드라이브 `:F`를 게임이 설치된 드라이브로 교체하십시오.
|      |                                                                       |
| ---- | --------------------------------------------------------------------- |
| 스팀   | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| 오큘러스 | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |

## 모드를 제거하는 방법
`플러그인` 폴더에서 .dll 파일을 삭제하거나 모드어시스턴트에서 `제거`버튼을 클릭하십시오.

## 수동 설치
모드 설치프로그램은 모드를 설치하는 권장 방법입니다. 참고  [>>자료](#installers). 게임에 패치를 적용했는데 모드 설치프로그램에서 사용할수 없는 플러그인만 설치하면 되는경우 4단계로 건너 뛰십시오.

**모드를 설치하기전에 한 번 이상 게임을 실행해주세요!** 이것은 게임을 다시 설치하는 것에도 적용됩니다.
### BSIPA 설치방법
1. 다운로드 [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases).
2. Navigate to your [install folder.](#install-folder) and extract the contents of BSIPA into it. ![Directory Clean](~@images/beginners-guide/directory-clean.png "Directory Clean") ![Directory Ipa](~@images/beginners-guide/directory-ipa.png "Directory Ipa")
3. IPA.exe를 두번 클릭하여 게임을 패치하십시오. `Plugins` 폴더의 모든 모드는 게임을 시작할 때 로드됩니다. 오류가있을경우 2단계를 올바르게 수행하지 않았을 수 있다. ![Directory Patched](~@images/beginners-guide/directory-patched.png "Directory Patched")

### 모드 설치
4. GitHub, #pc-mods 채널 또는 그 외 소스에서 설치하려는 모드를 다운하십시오. **모드에 요구하는 모든 요소들이 다운로드가 되어있다는걸 확인하십시오** ![Directory Plugins](~@images/beginners-guide/directory-plugins.png "Directory Plugins")
5. 설치 지침서가 있는 모드가 있고, 없는 모드도 있다. 일반적으로 Beat Saber 설치 폴더에 Zip 내용을 드래그 앤 드롭만 하면 해당 폴더에 파일이 저장된다.


## 어디로가야하오..
* [그립 , 팁](./grips-and-tricks.md)
* [맵 만들기](/mapping/)
* [커스텀 세이버](/models/custom-sabers.md)
* [커스텀 아바타](/models/custom-avatars.md)
* [커스텀 플랫폼](/models/custom-platforms.md)
* [멀티플레이어 설정](https://bs.assistant.moe/Multiplayer/)
* [모드 만들기](/modding/)

## 질문있으십니까?
지원 채널 방문[BSMG Discord](https://discord.gg/beatsabermods)!
