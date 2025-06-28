---
prev: false
next: false
description: 了解如何给你Quest一体机上的节奏光剑添加模组！
---

<!-- markdownlint-disable-file MD033 -->
<!-- markdownlint-disable MD041 -->
<LocalizedOutdateHint />

# Quest模组

## 前言

- 此指南适用于Quest 1，Quest 2，Quest Pro以及Quest 3.

- 目前还没有人因添加模组而被封禁，但添加模组确实违反了Meta的服务条款。

::: danger 免责声明
如果要使用模组，那么你应当理解:

- 你可能会遇到原版游戏中不存在的问题。99.9%的bug、崩溃或卡顿都是由于模组引起的。
- 游戏更新可能会导致模组失效，这很正常 — 当这种情况发生时，请保持耐心与尊重，因为模组开发者都是用爱发电的志愿者，他们也都有自己的生活。
- 游戏厂商Beat Games并非故意让模组失效。他们致力于优化游戏代码，而这可能会让模组无法工作，他们的目的并不是去封杀模组。

不要因为模组有问题而去责怪游戏开发者 —— 反之亦然，不要犯病。
:::

:::warning 我在B站看了一个视频教程，但现在卡住了/没有用，我该怎么办？
在BSMG，我们**强烈建议**不要使用任何视频教程来安装模组. 我们经常发现这些教程要么已经过时，要么包含不完整、有错误或误导他人的信息。

相反，你应当遵循本wiki上的指南，或前往 [BSMG Discord (英文社区)](https://discord.gg/beatsabermods)寻求帮助。
:::

:::warning 警告
为游戏安装模组会导致你无法使用官方的联机功能，也无法浏览或上传分数至游戏的官方排行榜。

如果你有安装模组后联机的需求，则需要安装`Beat Together`和`MultiplayerCore`这两个模组

> 这些模组支持PC和Quest跨平台联机，或使用自行导入的歌曲

如果联机对你来说非常重要，则请确保这些模组兼容你当前版本的节奏光剑，因为它们并非主要mod。

如果想要在自制谱面上获得排名，或者在rank曲目中获得表现积分(Performance Point,PP)，  
则需要安装 [ScoreSaber](https://scoresaber.com/quest)  
或者 [BeatLeader](https://beatleader.xyz) 模组。
:::

## 前置要求

安装模组需要能够使用 ADB（安卓调试桥）访问Quest设备。
因此你需要一台Windows/Mac/Linux系统的电脑或一台安卓设备.

- 如果你使用Windows、Macos或者Linux系统的电脑，请看[使用电脑添加模组](#准备工作)

> Linux的电脑也可以参考[通过树莓派添加模组](../quest/modding-with-raspi.md)来添加模组。但这只在Raspberry Pi OS (基于Debian) 上进行过测试，其它系统可能有区别。

- 如果你打算用安卓设备来给Quest上的节奏光剑添加模组，请看[使用安卓设备添加模组](../quest/modding-with-android.md)
- 如果你只有iOS设备，比如iPhone或者iPad，你需要买一块[树莓派](https://www.raspberrypi.com/)。并参考[通过树莓派添加模组](../quest/modding-with-raspi.md)。

> 此处仅为直译原文，以中国大陆的环境来说更建议购买一台安卓备用机。

::: warning 多账户须知
无法为同时登录多个账户的Quest安装模组！在添加模组前请移除全部的次要账户。
:::

::: danger Quest 1 用户需注意
在Quest 1上只能给1.28或以下版本的节奏光剑添加模组。

前往 [为 Quest 1 添加模组](../quest/modding-quest1.md) 阅读说明。
:::

## 准备工作

### 开发者模式

你需要先启用Quest的开发者模式后才能添加模组。

如果尚未启用，请提前按照以下步骤进行操作：

1. 前往 [Meta's Developer Website](https://developer.oculus.com/manage/organizations/create/) 并登录与你的 Quest 绑定的 Meta 账户。
2. 请提前开启开启 Meta 账户的两步验证 ( Two-Factor Authentication , 2FA ) ，这是创建组织 (Organization) 的必须前提。
   ![2FA](/.assets/images/beginners-guide/2fa.png)
3. 回到 [Meta's Developer Website](https://developer.oculus.com/manage/organizations/create/) 并创建一个新的组织，再随便起个名字。
   ![DevModeCreateOrg](/.assets/images/beginners-guide/DevModeCreateOrg.png)
4. 打开Quest的手机app，并点开Quest的设置页面，可以找到一个启用开发者模式的选项。可参考以下图片指南：
   ![iOSHowTo](/.assets/images/beginners-guide/EnableDevModeIOS.png)

### SideQuest

:::warning 这是一个可选步骤！
目前安装模组不强制需要安装SideQuest，但它在管理打过模组的游戏，或管理Quest上的内容时非常实用，因此安装他是个好主意。
:::

前往 [SideQuest下载页面](https://sidequestvr.com/setup-howto) 下载SideQuest的安装程序，然后按提示安装即可。

#### 使用 SideQuest 备份存档数据

:::tip 可选步骤
如果这是你首次安装模组，可以跳过此部分，直接前往 [**为节奏光剑安装模组的方案**](#为节奏光剑安装模组的方案)
:::

打开SideQuest，并将Quest连接到电脑。

使用SideQuest上的文件管理器跳转到 `sdcard/Android/data/com.beatgames.beatsaber/files` 路径。

![SideQuest Files](/.assets/images/beginners-guide/sqfiles.png)

并把 `AvatarData.dat` ，`PlayerData.dat` ，`settings.cfg` 这些文件保存至电脑的某个文件夹里。

**请确保不会丢失它们，这些文件里保存了你的分数和其它设置**。

#### 使用 SideQuest 恢复存档数据

:::tip 可选步骤
若你在 [使用 SideQuest 备份存档数据](#使用-sidequest-备份存档数据) 中备份了一些数据需要恢复，则请执行这一步骤。
大多数的模组安装工具都会自动帮你恢复数据，但仍建议保留备份来以防万一。
:::

如需恢复游戏存档，请打开SideQuest并将Quest连接至电脑。
使用SideQuest的文件管理器将在  
[使用 SideQuest 来备份存档数据](#使用-sidequest-备份存档数据)  
中备份的三个文件 `AvatarData.dat`，`PlayerData.dat`和`settings.cfg` 拷贝至
`sdcard/Android/data/com.beatgames.beatsaber/files`路径。

## 为节奏光剑安装模组的方案

- 目前为节奏光剑安装模组，最简单的方式是使用 [ModsBeforeFriday](#modsbeforefriday) 工具，
  这是一个运行于浏览器网页的应用，只用几分钟完成模组的安装。

- 其次，若需要更高级的管理功能，也可选择 [QuestPatcher](#questpatcher) ，此工具运行于Windows、Macos或者Linux系统的电脑。

  这个软件可以用来在网络不好的情况下 离线安装或者管理模组。

  但是，它**无法降级节奏光剑**。因此如果当前游戏版本不支持安装模组，可能无法使用该工具。

如果你没有安装过模组，或当前版本需要降级，则请先使用 [ModsBeforeFriday](#modsbeforefriday) 完成降级操作。

:::danger BMBF 已被废弃
BMBF已不再适用于为 Quest2 或 Quest3 上的节奏光剑安装模组！
请不要再去使用BMBF了，它**无法正常工作**。你应该用 [ModsBeforeFriday](#modsbeforefriday)。
:::

:::warning 关于 QAVS
你可能在某些地方看到过使用QAVS进行降级操作的教程

目前，QAVS**无法**将节奏光剑降级至最新可安装模组的版本，也无法对其打补丁。

这是一个暂时性的问题，在未来可能恢复。

你应该用[ModsBeforeFriday](#modsbeforefriday)来降级并**打补丁**。

如果有人让你用QAVS来进行降级，请前往 [Modding With QAVS](../quest/modding-with-qavs.md)。
:::

### ModsBeforeFriday

:::tip 注意
在中国大陆的某些环境下，可能无法直接使用此工具。**请为PC/Quest设备开启代理以访问github。**
:::

ModsBeforeFriday (MBF) 是一个运行于浏览器网页的节奏光剑模组工具。

若你正在使用电脑，请前往 [使用ModsBeforeFriday添加模组](../quest/modding-with-mbf.md)。

安卓用户请参考 [使用Android添加模组](../quest/modding-with-android.md)。

### QuestPatcher

QuestPatcher是一款运行于Windows、Linux或macOS上的模组安装程序，适用于Quest上任何基于il2cpp的unity应用。

在使用此工具前，请确保已阅读并完成 [准备工作](./quest-modding.md#准备工作) 其中的步骤。

你应提前启用开发者模式，并在电脑上安装 SideQuest 。

1. [点击这个页面](https://github.com/Lauriethefish/QuestPatcher/releases/latest) 后下载并安装QuestPatcher。
   :::danger 警告
   QuestPatcher**无法**降级你的节奏光剑，
   因此你需要确保你已经安装了支持安装模组的游戏版本。

   如果你以前用过 QuestPatcher，请先跳转到工具并点击 `Quick Fix` 以修复软件
   :::

2. 修补节奏光剑（若曾修补过软件，请先进行修复）
   - 确保在菜单内选择了 `Scotland2` 作为 ModLoader。
3. 安装核心模组，以及在 [这个页面内](https://bsquest.xyz/mods)安装其它模组。

### QAVS

::: warning
由于软件更新后的限制，目前 QAVS **无法**为节奏光剑添加补丁。
请使用 [ModsBeforeFriday](../quest/modding-with-mbf.md) 进行替代。
:::
