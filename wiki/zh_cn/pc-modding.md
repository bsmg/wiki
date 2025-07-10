---
prev: false
next: false
description: Learn how to mod Beat Saber on PC!
---

<!-- markdownlint-disable-file MD033 -->
<!-- markdownlint-disable MD041 -->
<LocalizedOutdateHint />

# PC模组

## 前言

::: danger 免责声明
在使用模组之前，你应当先理解:

- 安装模组后，可能会遇到原版游戏中不会出现的问题。游戏中的 bug 、崩溃或卡顿有 99.9% 都是因安装模组而引起的。
- 模组可能会因更新而失效，这是正常现象。当这种情况发生时，请保持耐心。因为模组作者都是为爱发电的志愿者，而并非全职开发者。
- 游戏厂商 Beat Games 并非故意让模组失效。他们致力于优化游戏代码，在此过程中可能会让模组无法正常工作，他们的目的不是封杀模组。

不要因为模组有问题而去攻击游戏厂商与模组作者。请保持理性和最基本的礼貌。
:::

:::warning 在安装模组时确认安全
节奏光剑**从来不会**要求你使用管理员权限启动。

如果你下载并安装的模组触发了用户账户控制（UAC），**不要**允许，请向我们报告这件事情。你正在安装的是有病毒的模组。

如果你不确定你正在安装的东西是否真的有毒，**请询问discord社群中的人**。
:::

节奏光剑原版支持自定义曲目，无需其它模组！
但建议安装`SongCore`模组，它能够加快载入时间，提供一些用于支持其它模组（如游戏内下载器，自定义排行榜，歌单等）的功能。

::: warning 警告
此指南仅适用于 Windows 系统上的 PC 模组。
如果你是Quest设备上的游戏，请参考[Quest模组页面](/quest-modding.md)。  
如果你用的是Linux系统，请参考[Linux页面](../linux-modding.md)。
:::

如果你现在遇到了问题，请先去[支持页](../support/)寻求解决方案，然后再到Discord服务器进行提问。 或许你的问题已经有答案了！

:::warning 我在B站看了一个视频教程，但现在卡住了/不生效，我该怎么办？
BSMG 社区**强烈建议**不要使用任何视频教程来安装模组。很多视频教程可能已经过时，或者包含不完整、有错误或误导他人的信息。

我们建议你使用并遵循本 Wiki 上的指南，或前往 [BSMG Discord ( 英文社区 )](https://discord.gg/beatsabermods)寻求帮助。
:::

:::tip 注意
最新版本的节奏光剑可能无法添加模组，此时你需要先降级至能够添加模组的最近游戏版本。

参考本页[降级](#降级)章节以获取更多信息。
:::

## 安装器

### BSManager

> **这是目前最推荐的模组安装及降级工具。**

\***\*确保你已经在Steam或Oculus(PCVR)上拥有了游戏\*\***，然后再进行降级。

这是一个全能工具，可用于管理节奏光剑的版本、谱面、模组以及更多东西。从[Zagrios的GitHub](https://github.com/Zagrios/bs-manager/releases/latest)获取它。

![BSManager](/.assets/images/beginners-guide/bsmanager.png)

### BeatSaberModManager

\***\*至少运行一次游戏\*\*** 然后再用它添加模组！在重新安装游戏后也要这样做。

另一个节奏光剑的模组安装器，很大程度受到Mod Assistant启发。
其致力于有更好的界面，且同时支持Windows、Linux操作系统，并保留与Mod Assistant一样丰富的功能。在[affederaffe的GitHub](https://github.com/affederaffe/BeatSaberModManager/releases/latest)获取它。

![BeatSaberModManager](/.assets/images/beginners-guide/beatsabermodmanager.png)

### ModAssistant

一个简单的节奏光剑模组安装、管理工具，此外还有移除模组、检查版本等附加功能！在[BSMG的GitHub](https://github.com/bsmg/ModAssistant/releases/latest)获取它。

![Mod Assistant](/.assets/images/beginners-guide/modassistant.png)

## 如何获取更多歌曲?

::: tip
在"Top All"（总排行）、"Rating"（评分）、"Downloads"（下载量）或"Plays"（游玩次数）等筛选中的大部分谱面，是在优质谱面规范标准订立之前制作的。建议下载2019年末至今发布的新曲目，以获得最佳的自定义歌曲体验。
:::

::: warning
建议定期备份你的 `CustomLevels`（自定义歌曲）文件夹，因为游戏更新时有小概率会重置该文件夹！
该文件夹位于游戏安装目录下：`Beat Saber/Beat Saber_Data/CustomLevels`
:::

### 从游戏内下载歌曲

你可以通过安装 `BeatSaverDownloader` 或 `BetterSongSearch` 模组，直接在游戏内下载谱面。只需在游戏主菜单的 MODS 模组界面点击 `MORE SONGS`（更多歌曲）按钮，即可从 [BeatSaver](https://beatsaver.com) 平台直接获取自定义歌曲。

:::tip 注意
如果你使用的是 `BetterSongSearch` 模组，菜单按钮可能会显示为 `BETTERSONGSEARCH` 而非 `MORE SONGS`。
:::

### BeatSaver

[BeatSaver](https://beatsaver.com) 是社区自制谱面的核心仓库。
虽说有一些别的工具和网站能优化自定义歌曲的下载体验，但所有谱面最终都存储在这里。
想要加载从这个网站下载的歌曲，只需要下载并解压到一个文件夹，然后把文件夹放到`Beat Saber/Beat Saber_Data/CustomLevels`。
你也可以用游戏内下载歌曲模组，BSManager的OneClick™ 一键安装功能，或是BSManager的"maps"标签页找歌曲。

开启和使用BSManager的OneClick™ 一键安装功能方法请参考：
![BSManager](/.assets/images/beginners-guide/bsmanager-oneclick.png)

### Beast Saber

[Beast Saber](https://www.bsaber.com) (bsaber.com) 是一个辅助寻找优质谱面的网站。  
其最常用的功能是 “Recently Curated Maps”(近期精选谱面) 推送。这是由精选团队对每天发布的新曲目进行试玩，并对质量合格且主观上具备“有趣程度”的谱面给出的推荐。  
BeastSaber 还设有以下板块：认证谱师的最近发布谱面；每周谱面合集；精选/严选曲目打包/歌单。

### 歌曲管理软件

BSManager 有一个 Maps 选项卡可用于管理指定版本中的歌曲。只需选择版本并点击 Maps 选项卡即可使用。可用于删除歌曲、预览音频或谱面，以及获取对应的 Twitch BSR 代码以便在直播中点歌。

### 歌单

需要安装 [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) 模组。

然后即可选择以下任一方式添加歌单：

- 通过 BSManager 中的 Maps 选项卡添加歌单。
  ::: tip 注意
  此功能仅在 BSManager 的 alpha 版本中可用！
  :::
- 将歌单文件放入 `Beat Saber/Playlists` 文件夹，在游戏中选择歌单标题，然后点击下载全部歌曲。

在游戏中，歌单会显示在 Custom Levels 专辑旁边。该模组还支持在游戏内管理歌单。

## 安装文件夹

_节奏光剑游戏安装在哪里？_

### 默认游戏安装路径

|           |                                                                              |
| --------- | ---------------------------------------------------------------------------- |
| Steam     | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus    | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |
| BSManager | `C:\Users\[USERNAME]\BSManager\BSInstances\`                                 |

### 其它位置

**若你已将游戏安装目录移动至其它驱动器，可以参考以下路径：**
（请将驱动器盘符 `F` 替换为你实际的游戏安装盘符）

|           |                                                                |
| --------- | -------------------------------------------------------------- |
| Steam     | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus    | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |
| BSManager | `F:\BSManager\BSInstances\`                                    |

## 手动安装模组

推荐使用模组安装器安装模组，具体方法请参考[上文](#安装器)章节。  
若你已打过模组补丁，想要安装安装器未提供的模组，请**直接跳至步骤4**。

::: warning 在安装模组时确认安全  
安装未经认证的模组（例如来自 `#pc-mods` 频道的模组）存在风险，包括可能存在伪装成普通模组的恶意软件。

节奏光剑**永远不会**要求使用管理员权限启动自身。

如果你下载并安装的模组触发了用户账户控制（UAC），**不要**允许，请向我们报告这件事情。你正在安装的是有病毒的模组。

如果你不确定你正在安装的东西是否真的有毒，**请询问discord社群中的人**。
:::

在安装模组补丁之前，需要**至少启动一次游戏**！在重新安装游戏之后也需如此操作。

### 安装 BSIPA

1. 下载 [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases)。 需要确保下载的版本与你的游戏版本兼容。
2. 打开[游戏安装目录](#install-folder)，将BSIPA压缩包内的文件解压到此文件夹。
   ![干净目录](/.assets/images/beginners-guide/directory-clean.png '干净目录')
   ![IPA目录](/.assets/images/beginners-guide/directory-ipa.png 'IPA目录')
3. 双击运行 IPA.exe 为游戏打补丁。此后启动游戏时，将自动加载`Plugins`文件夹中的所有模组。
   如果出现错误，可能是步骤2操作有误。
   ![已打补丁目录](/.assets/images/beginners-guide/directory-patched.png '已打补丁目录')

### 安装模组

4. 从某些地方下载你需要安装的模组，包括GitHub、[BSMG Discord](https://discord.com/invite/beatsabermods) 的`#pc-mods`频道、[BeatMods](https://beatmods.com/#/mods) 或者其它来源。
   ![插件目录](/.assets/images/beginners-guide/directory-plugins.png '插件目录')

5. 部分模组会附带安装说明，部分则没有。通常情况下，你只需将压缩包内容拖拽至Beat Saber安装目录，文件会被自动放置在正确位置。

## 降级

请查看 [BSMG Discord](https://www.discord.gg/beatsabermods) 的 `#modding-announcements` 频道，确认当前最新游戏版本是否支持模组安装。

若不支持，则需要根据以下方法对游戏进行降级。

### 游戏管理软件

请根据你的游戏购买平台选择对应的降级教程。

- Steam可以使用：

  - [BSManager](https://github.com/Zagrios/bs-manager#readme)

- Oculus商店版可以用：
  - [BSManager](https://github.com/Zagrios/bs-manager#readme)
  - [OculusDowngrader](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)

### 远古版本

如果你想降级到`1.37.1`,`1.34.2`,`1.29.1`，可以使用远古版本降级方案。

#### Steam用户

1. 打开模组安装器，卸载 BSIPA 模组

- 如果已安装 1.30或更高版本的模组，请卸载所有模组。

2. 在游戏库中右键点击 Beat Saber
3. 选择"属性"
4. 在弹出窗口中选择"测试版"
5. 选择这些分支中的一个：`legacy1.37.1_unity_v2021.3.16f1`、`1.34.2_legacy`或者`legacy1.29.1_unity_ver2019.4.28f1`
6. 关闭窗口
7. 等待下载完成后运行游戏一次
8. 按照常规模组安装流程操作

![Steam分支设置](/.assets/images/beginners-guide/BetaOptions_SteamBranch.jpg 'Steam分支设置')

#### Oculus商店用户

1. 打开模组安装器，卸载 BSIPA 模组

- 如果已安装 1.30或更高版本的模组，请卸载所有模组。

2. 前往 Beat Saber 商店页面
3. 滚动至"Versions + Release Notes"部分
4. 点击当前版本号旁的`(LIVE)`
5. 选择这些分支中的一个：`legacy1.37.1_unity_v2021.3.16f1`、`1.34.2_legacy`或者`legacy1.29.1_unity_ver2019.4.28f1`
6. 等待下载完成后运行游戏一次
7. 按照常规模组安装流程操作

![Oculus 分支设置](/.assets/images/beginners-guide/BetaOptions_OculusBranch.jpg 'Oculus 分支设置')

## 如何卸载模组

可以从 `Plugins` 文件夹中直接删除对应的 `.dll` 文件，也可以在BSManager点击删除图标来卸载(需要先则对应的游戏版本，再打开Mods标签页)

:::tip 注意
若模组是手动安装的，则需要从 `Plugins` 文件夹删除相应 `.dll` 文件来进行卸载。
:::

## 接下来可以做什么

- [握法与技巧](../grips-and-tricks.md)
- [制作谱面](/mapping/)
- [自定义光剑](/models/custom-sabers.md)
- [自定义虚拟形象](/models/custom-avatars.md)
- [自定义平台](/models/custom-platforms.md)
- [自定义墙壁](/models/custom-walls.md)
- [多人模式游玩自制内容](https://discord.com/invite/gezGrFG4tz)
- [制作模组](/modding/)

## 遇到问题？

访问 [BSMG Discord](https://discord.gg/beatsabermods) 的支持频道！

::: tip 注意
拥有 `Support`和/或 `Mapping Support`身份的用户是自愿在空闲时间提供帮助的志愿者。
这些支持身份是对他们付出知识和努力的认可，但并不代表他们在线时就一定能够提供帮助。
:::
