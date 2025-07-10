---
prev: false
next: false
description: 了解如何使用 ModsBeforeFriday 来为Quest上的节奏光剑注入模组！
---

# 使用 ModsBeforeFriday 为 Quest 注入模组

本指南仅适用于Quest2、3及Pro版本的头显设备！

Quest 1 用户请参考 [Quest 1模组](../../quest/modding-quest1.md)指南.

:::warning 警告
适用MBF为游戏添加模组会停用官方的多人游戏及官方排行榜的浏览/上传分数的功能。
如果想要带模组游玩多人游戏，则需要`Beat Together`和`MultiQuestensions`模组，这样就可以在PC和
已注入模组的Quest设备之间跨平台联机，并游玩自制歌曲。这个模组可以在[Beat Saber Modding Group](https://discord.gg/beatsabermods)
的`#quest-mods`频道或[Questboard](https://questmodding.com)上找到。

To get leaderboards on custom songs and to be able to get Performance Points (PP) from ranked songs you need the
[ScoreSaber](https://scoresaber.com/quest) mod. [This link](https://scoresaber.com/quest) will take you to the
ScoreSaber page to set it up.
ScoreSaber并不会替换原本的游戏排行榜，而只是增加一个自制谱面的排行榜。

**Note:** 需要在[ScoreSaber Discord](https://discord.gg/scoresaber)的Update频道检查模组是否在当前游戏版本可用。
:::

## 基本要求

在开始前，确保已经在Quest上安装了最新（原版）节奏光剑。

MBF会自动将游戏降级至可以安装模组的最新游戏版本。

:::warning 浏览器兼容性

MBF需要新版本的Chromium浏览器才能正常工作。例如：

- [Microsoft Edge](https://www.microsoft.com/en-us/edge/download?form=MA13FJ) (Windows操作系统自带)
- [Google Chrome](https://www.google.com/chrome/what-you-make-of-it/), 等等……

其**不支持**火狐或Safari浏览器！

如果浏览器过时或不兼容，则会看到警告信息。
:::

## 为游戏注入模组

跳转至[ModsBeforeFriday网页](https://lauriethefish.github.io/ModsBeforeFriday/)并:

1. 使用USB数据线将Quest设备与PC连接。
2. 点击`Connect to Quest`按钮。会看到类似这样的弹窗：

![MBFDevicesTable](/.assets/images/beginners-guide/mbfSelectDevice.png)

:::tip 注意
如果你使用不同的浏览器，这个弹窗样式可能会有差异！
:::

3. 选择你的设备，点击`Connect`并稍等几秒钟。你会看到类似这样的界面：

![MBFReadyToModPage](/.assets/images/beginners-guide/mbfReadyToMod.png)

:::tip 注意
如果你安装的不是最新版本可注入模组的节奏光剑，则会有游戏降级提示。

这会自动执行，只要正常跟随指引即可！
:::

4. 点击"Mod the app"并等待完成

:::warning 警告
不要在注入模组期间拔出连接线！
:::

5. 完成了！

现在你就可以在游戏中使用SongDownloader这个模组来安装自定义歌曲，这个模组是默认安装的。

## 增加更多模组

MBF有一个内置浏览器，可用于安装更多的模组。

只需点击主菜单上的"Add mods"，并在你想要的模组上点击"Install"即可安装！

![MBFModBrowser](/.assets/images/beginners-guide/mbfModBrowser.png)
