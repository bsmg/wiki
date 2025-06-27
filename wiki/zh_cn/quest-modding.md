---
prev: false
next: false
description: 了解如何给你Quest一体机上的节奏光剑添加模组！
---

# Quest模组

:::warning 当前正在浏览的是[原页面](../quest-modding.md)的翻译版本
建议检查页面尾部的最后修改时间，以确保其内容没有过时。
:::

## 前言

- 此指南适用于Quest 1，Quest 2，Quest Pro以及Quest 3.

- 目前尚无玩家因添加模组而被封禁，但添加模组确实违反了Meta的服务条款。

::: danger 免责声明
如果要使用模组，那么你应当理解:

- 你可能会遇到原版游戏中不存在的问题。99.9%的bug、崩溃或缺陷是由于模组引起的。
- 游戏更新会破坏模组，这很正常——当这件事发生时请耐心等待并予以尊重，因为模组开发者都是用爱发电的志愿者，他们也都有自己的生活。
- 游戏开发者Beat Games并不是故意破坏模组的。它们需要开发游戏代码，这可能会让模组无法工作，但他们并非故意去抹除模组。

不要因为模组去攻击游戏开发者，亦或是模组开发者——他们是两个完全没有交集的团体。请保持理智，不要发神经。
:::

:::warning 我在B站/其它地方看了一个视频教程，但现在卡住了/没有用，我该怎么办？
在BSMG，我们**强烈**反对任何有关添加模组的视频教程. 我们经常发现这些东西是过时的，或者是不完整、错误甚至包含误导信息的。

此外，你应该跟着这个wiki上的指南，或者在（英文社区）[BSMG Discord](https://discord.gg/beatsabermods)寻求帮助。
:::

:::warning
为游戏添加模组会停用官方的多人游戏，同时也会无法浏览或上传分数至原版游戏排行榜。

如果你需要带模组游玩多人模式，就要安装这些模组：`Beat Together`和`MultiplayerCore`，它们能够让你跨PC/Quest平台对自制谱面进行多人游戏。
如果你很看重多人游戏，请确保这些模组在你要添加模组的节奏光剑版本上可以使用，因为它们不是核心模组！

如果想要在自制谱面上使用排行榜或者打rank曲目赚取Performance Point(PP)，你需要[ScoreSaber](https://scoresaber.com/quest)或者[BeatLeader](https://beatleader.xyz)模组。
:::

## 前置要求

如果要给节奏光剑添加模组，需要能通过ADB（安卓调试桥）访问Quest设备。
所以你需要提前准备一个PC(Windows / Mac / Linux)或者安卓设备.

- 如果你有一台Windows、Max或者Linux系统的电脑，看[通过PC添加模组](#准备工作)
- 如果你想要用一个安卓设备来给Quest添加模组，看[通过安卓添加模组](../quest/modding-with-android.md)
- 如果你想要用Linux的计算机来添加模组，可以参考树莓派指南。注意这只在Raspberry Pi OS (Debian)上进行过测试，其它系统可能有区别。
- 如果想要用iOS设备，比如iPhone或者iPad，你需要买一个[树莓派](https://www.raspberrypi.com/)。这样就可以参考[通过树莓派添加模组](../quest/modding-with-raspi.md)。

::: warning 多账户
节奏光剑**无法**在有多个账户的设备上添加模组！
你在添加模组前，需要暂时移除掉所有的非主要账户。
:::

::: danger Quest 1用户
在Quest 1上只能给节奏光剑1.28或以下版本添加模组。

前往[为Quest 1添加模组](../quest/modding-quest1.md)阅读说明。
:::

## 准备工作

### 开发者模式

你需要先启用Quest的开发者模式，才能添加模组。
如果没做过，按照以下步骤进行操作：

1. 前往[Meta's Developer Website](https://developer.oculus.com/manage/organizations/create/)并登录与你的Quest绑定的Meta账户。
2. 如果没有的话，开启Meta账户的两步验证2FA (Two-Factor Authentication)，因为要创建组织（Organization）这是必须步骤。
   ![2FA](/.assets/images/beginners-guide/2fa.png)
3. 回到[Meta's Developer Website](https://developer.oculus.com/manage/organizations/create/)然后创建一个新的Organization。名字随意。
   ![DevModeCreateOrg](/.assets/images/beginners-guide/DevModeCreateOrg.png)
4. 打开Meta Quest手机app，并转到Quest的设置页面。就能找到一个启用
   Developer Mode的选项。参考下面的说明：
   ![iOSHowTo](/.assets/images/beginners-guide/EnableDevModeIOS.png)

### SideQuest

:::warning 这个步骤是可以跳过/可选的！
现在添加模组并不要求安装SideQuest，但它可以用于管理打过mod的游戏，或者管理Quest上的内容，所以安装一下也不错。
:::

跳转至[SideQuest下载页面](https://sidequestvr.com/setup-howto)下载并安装SideQuest Advanced Installer。下载完成后安装即可。

#### 使用SideQuest来备份存档数据

:::tip 这个步骤是可以跳过/可选的！
如果你是第一次打mod，可以直接跳转到[为节奏光剑添加模组的方案](#为节奏光剑添加模组的方案)
:::

打开SideQuest并将Quest连接到PC上。

使用SideQuest上的文件浏览器跳转到`sdcard/Android/data/com.beatgames.beatsaber/files`。

![SideQuest Files](/.assets/images/beginners-guide/sqfiles.png)

把这些文件保存到PC上的一个文件夹里：`AvatarData.dat`，`PlayerData.dat`和`settings.cfg`。确保它们不会丢失，这些文件保存了你的分数和其它设置！

#### 使用SideQuest来恢复存档数据

:::tip 这个步骤是可以跳过/可选的！
如果你在[使用SideQuest来备份存档数据](#使用SideQuest来备份存档数据)中备份了一些数据想要恢复，就可以做这一步。
大多数的模组安装工具都会自动帮你做这个，但防范于未然总还是好的！
:::

想恢复数据的话，打开SideQuest然后把Quest连接到PC上。
使用SideQuest的文件浏览器将[使用SideQuest来备份存档数据](#使用SideQuest来备份存档数据)中备份的三个文件`AvatarData.dat`，`PlayerData.dat`以及`settings.cfg`拷贝至
`sdcard/Android/data/com.beatgames.beatsaber/files`文件夹。

## 为节奏光剑添加模组的方案

目前最简单的方式是使用[ModsBeforeFriday](#modsbeforefriday)，
这是一个浏览器应用，只要几分钟就能装好模组。

[QuestPatcher](#questpatcher)是一个能在PC上直接运行的app。
如果网络连接不好的话，这个软件可以用来离线安装或者管理模组，
但是，它**不能降级节奏光剑**，所以如果最新版本的节奏光剑不能注入模组的话，
它可能就无法使用。

如果你现在的游戏版本没办法注入模组，那就应该用[ModsBeforeFriday](#modsbeforefriday)来进行降级。

:::danger BMBF已过时
BMBF已经无法为Quest 2/3上的节奏光剑注入模组！
不要再去尝试使用BMBF了，它**无法使用**。你应该用[ModsBeforeFriday](#modsbeforefriday)。
:::

:::warning
QAVS现在**无法**将节奏光剑降级至最新可打模组的版本。

这是一个临时状况，也可能会很快有变化。This is a temporary situation and may change soon.
你应该用[ModsBeforeFriday](#modsbeforefriday)来降级并**打补丁**。

如果有人告诉你要用QAVS来进行降级，
去看[Modding With QAVS](../quest/modding-with-qavs.md)。
:::

### ModsBeforeFriday

:::tip 译者注
网络需求：这个工具需要你的Quest设备能够访问github网站。
:::

ModsBeforeFriday (MBF)是给节奏光剑注入模组的一个简单易用的浏览器应用。

如果你正在使用PC或者Mac，可以去看[使用ModsBeforeFriday添加模组](../quest/modding-with-mbf.md)。

安卓用户可以参考[使用Android添加模组](../quest/modding-with-android.md)。

### QuestPatcher

QuestPatcher是Oculus Quest上可以为任意基于il2cpp的unity应用添加模组的软件，可以运行在Windows、Linux或macOS上。

如果你没有准备好，去看[准备工作](./quest-modding.md#准备工作)并跟着做。
你现在应该启用了开发者模式，并且在PC上安装了SideQuest Advanced。

1.  在[这里](https://github.com/Lauriethefish/QuestPatcher/releases/latest)下载并安装QuestPatcher。
    :::danger 警告
    QuestPatcher**无法**降级节奏光剑，
    所以你需要确认你已经安装了最新的可以注入模组的游戏版本！
    :::
2.  如果你之前因为任何原因已经用过了QuestPatcher，跳转到tools并点击`Quick Fix`。
3.  给节奏光剑打补丁（或如果之前打过的话，在tools选项卡里repatch重新打补丁）
    - 确保选中了`Scotland2`作为ModLoader。
4.  安装核心模组，以及在[这个页面](https://bsquest.xyz/mods)安装其它模组。

### QAVS

::: warning
由于软件更新，QAVS当前**无法**为节奏光剑添加补丁。
使用[ModsBeforeFriday](../quest/modding-with-mbf.md)进行替代。
:::
