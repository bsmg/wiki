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
如果你用的是Linux系统，请参考[Linux页面](./linux-modding.md)。
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

::: 小提示
在"Top All"（总排行）、"Rating"（评分）、"Downloads"（下载量）或"Plays"（游玩次数）等筛选中的多数谱面，是在优质谱面规范标准订立前诞生的。建议下载2019年末至今发布的新曲目，以获得最佳的自定义歌曲体验。
:::

::: 警告
建议定期备份你的 CustomLevels（自定义歌曲）文件夹，因为游戏更新时有小概率会重置该文件夹！
该文件夹位于游戏安装目录下：
Beat Saber/Beat Saber_Data/CustomLevels
:::

### 从游戏内下载歌曲

你可以通过安装 BeatSaverDownloader 或 BetterSongSearch 模组，直接在游戏内下载谱面。只需在游戏主菜单的 MODS 模组界面点击 MORE SONGS（更多歌曲）按钮，即可从 BeatSaver 平台直接获取自定义地图。(BeatSaver网址 https://beatsaver.com)

:::提示说明
如果你使用的是 BetterSongSearch 模组，菜单按钮可能会显示为 BETTERSONGSEARCH 而不是 MORE SONGS。
:::

### BeatSaver

[BeatSaver](https://beatsaver.com) 是社区自制歌曲的核心资源库。
虽然有许多其他工具和网站能优化自定义歌曲的下载体验，但所有谱面最终都存储于此。

安装方法：

1.手动安装：
下载谱面压缩包 → 解压 → 将文件夹放入
Beat Saber/Beat Saber_Data/CustomLevels
2.自动安装：
·使用游戏内下载模组（如 BeatSaverDownloader）
·通过 BSManager 的 OneClick™ 一键安装功能
·在 BSManager 的 "maps"（谱面） 标签页操作
启用 BSManager 的 OneClick™ 一键安装：
https:///.assets/images/beginners-guide/bsmanager-oneclick.png

### Beast Saber

[Beast Saber](https://www.bsaber.com) 是一个致力于帮助玩家轻松发现优质谱面的平台。
主要功能：
·「近期精选谱面」推荐 
  专业评审团队每日试玩新发布的谱面，精选出符合质量标准且具备"趣味性"的优质内容。  
·「认证谱师」最新作品
  展示经验丰富的谱面作者（Verified Mappers）的最新创作。  
·精选内容合集
  包括每周推荐谱面（Maps of the Week）、官方精选谱包（Curated Packs）和特色歌单（Playlists）。

### Song Management Apps

BSManager 的「谱面管理」功能  
在 BSManager 中，你可以通过 Maps（谱面） 标签页管理特定游戏版本的歌曲：  

1.版本选择  
   ·先选择你的游戏版本  
   ·点击 Maps 标签页进入管理界面  

2.核心功能  
   ·删除歌曲：清理不需要的谱面  
   ·预览功能：试听音频或查看谱面演示  
   ·直播点歌码：获取谱面的 Twitch BSR 代码（用于直播点歌）  

### Playlists

你需要先安装 [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) 模组。
安装后，你可以通过以下两种方式使用歌单：
1.通过BSManager的Maps标签页安装歌单
   ::: 注意
   此功能仅在BSManager的alpha测试版中可用！
   :::
2.手动安装歌单文件
   ·将歌单文件放入 Beat Saber/Playlists 文件夹
   ·在游戏中选中歌单标题
   ·点击"下载全部歌曲"

安装成功后，你可以在游戏的"自定义歌曲"专辑旁边看到这些歌单。PlaylistManager模组还支持在游戏内直接管理歌单。

## Install Folder

游戏安装位置文件夹

### 默认游戏安装路径

|           |                                                                              |
| --------- | ---------------------------------------------------------------------------- |
| Steam     | `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\`                  |
| Oculus    | `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |
| BSManager | `C:\Users\[USERNAME]\BSManager\BSInstances\`                                 |

### 其他位置的情况

若你已将游戏安装目录移动至其他驱动器，可以参考以下路径：
（请将驱动器盘符 F 替换为你实际的游戏安装盘符）
示例:
|           |                                                                |
| --------- | -------------------------------------------------------------- |
| Steam     | `F:\SteamLibrary\steamapps\common\Beat Saber\`                 |
| Oculus    | `F:\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\` |
| BSManager | `F:\BSManager\BSInstances\`                                    |

## 手动安装Mod
**推荐使用模组安装器安装模组**，具体方法请参考[上文](#安装器)章节。  
若你已打过模组补丁，只需安装安装器中未提供的模组，请**直接跳至步骤4**。

::: 模组安装安全警告  
安装未经认证的模组（如来自 `#pc-mods` 频道的模组）存在风险，可能包含伪装成普通模组的恶意软件。  

重要安全须知：  
- **《Beat Saber》永远不会要求你以管理员权限运行**  
- 如果安装模组时出现**用户账户控制（UAC）弹窗**：  
  **立即点击"取消"**  
  并向我们举报该情况  
- 若不确定所安装内容是否安全：  
  **请务必在Discord服务器中咨询确认**  
:::

必备步骤  
在安装模组**前**，请务必：  
**至少完整运行游戏一次**（重新安装游戏后也需执行此操作） 


### 安装 BSIPA

1. 下载 [BSIPA](https://github.com/bsmg/BeatSaber-IPA-Reloaded/releases)。 请确保下载的版本与你的游戏版本兼容。
2. 进入你的[游戏安装目录](#install-folder)，将BSIPA压缩包内的文件解压至此。
   ![干净目录](/.assets/images/beginners-guide/directory-clean.png '干净目录')
   ![IPA目录](/.assets/images/beginners-guide/directory-ipa.png 'IPA目录')
3. 双击运行IPA.exe为游戏打补丁。此后启动游戏时，将自动加载`Plugins`文件夹中的所有模组。
   如果出现错误，可能是步骤2操作有误。
   ![已打补丁目录](/.assets/images/beginners-guide/directory-patched.png '已打补丁目录')

### 安装模组

4. 下载你需要安装的模组，可以从以下渠道获取：
   - [GitHub](https://github.com)
   - [BSMG Discord](https://discord.com/invite/beatsabermods) 的`#pc-mods`频道  
   - [BeatMods](https://beatmods.com/#/mods)  
   - 其他来源  
   **请务必下载模组所需的所有依赖项**  
   ![插件目录](/.assets/images/beginners-guide/directory-plugins.png '插件目录')

5. 部分模组会附带安装说明，部分则没有。通常情况下，你只需：
   - 将压缩包内容直接拖拽至Beat Saber安装目录
   - 文件会自动归类到相应的文件夹中

## 降级

请查看 [BSMG Discord](https://www.discord.gg/beatsabermods) 的 `#modding-announcements` 频道，确认当前最新游戏版本是否支持模组安装。

若需要降级，请参考下面的降级方法：

### 游戏版本

请根据你的游戏购买平台选择对应的降级教程：

**Steam版用户可使用：**  
- [BSManager 降级教程](https://github.com/Zagrios/bs-manager#readme)

**Oculus商店版用户可选择：**  
- [BSManager 降级教程](https://github.com/Zagrios/bs-manager#readme)  
- [OculusDowngrader 专用工具](https://computerelite.github.io/tools/Oculus/OculusDowngraderGuide.html)  

### 历史版本

如果你想降级到`1.37.1`,`1.34.2`,`1.29.1`，可以使用历史版本降级

#### Steam版用户

1. 打开模组安装器，卸载 BSIPA 模组
   - 如果已安装 1.30+ 版本的模组，请卸载所有模组

2. 在游戏库中右键点击 Beat Saber
3. 选择"属性"
4. 在弹出窗口中选择"测试版"
5. 选择你需要的版本：
   - `legacy1.37.1_unity_v2021.3.16f1`
   - `1.34.2_legacy` 
   - `legacy1.29.1_unity_ver2019.4.28f1`
6. 关闭窗口
7. 等待下载完成后运行游戏一次
8. 按照常规模组安装流程操作

![Steam分支设置](/.assets/images/beginners-guide/BetaOptions_SteamBranch.jpg 'Steam分支设置')

#### Oculus商店版用户

1. 打开模组安装器并卸载 BSIPA 模组
   - 如果已安装 1.30+ 版本的模组，请卸载所有模组

2. 前往 Beat Saber 商店页面
3. 滚动至"版本 + 更新说明"部分
4. 点击当前版本号旁的"(LIVE)"字样
5. 选择你需要的版本：
   - `legacy1.37.1_unity_v2021.3.16f1`
   - `1.34.2_legacy`
   - `legacy1.29.1_unity_ver2019.4.28f1`
6. 等待下载完成后运行游戏一次
7. 按照常规模组安装流程操作

![Oculus 分支设置](/.assets/images/beginners-guide/BetaOptions_OculusBranch.jpg 'Oculus 分支设置')

## 怎样卸载模组

可以从 `Plugins` 文件夹中删除对应的 `.dll` 文件的方式卸载，也可以在BSManager点击删除图标来卸载(需要先则对应的游戏版本，再打开模组标签页)

:::tip 注意
若模组是手动安装的，你必须通过从 `Plugins` 文件夹删除相应 `.dll` 文件的方式卸载。
:::

## 接下来可以做什么

- [握法与技巧](./grips-and-tricks.md)
- [制作谱面](/mapping/)
- [自定义光剑](/models/custom-sabers.md)
- [自定义虚拟形象](/models/custom-avatars.md)
- [自定义平台](/models/custom-platforms.md)
- [自定义墙壁](/models/custom-walls.md)
- [多人模式游玩自制内容](https://discord.com/invite/gezGrFG4tz)
- [制作模组](/modding/)

## 遇到问题？

请访问 [BSMG Discord](https://discord.gg/beatsabermods) 的支持频道！

::: tip 注意
拥有 `Support`（支持）和/或 `Mapping Support`（谱面支持）身份的用户是自愿在空闲时间提供帮助的志愿者。
这些支持身份是对他们付出知识和努力的认可，但并不代表他们在线时就一定能够提供帮助。
:::