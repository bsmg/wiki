# 常见问题

## 我刚安装了游戏，该从哪儿看起？
来看看我们的[入门指南](/beginners-guide.md)！

## 如何获取更多歌曲？
> [BeatSaver](https://beatsaver.com) 是玩家社区建立的自定义歌曲主仓库。 很多其他的工具或者网站提供了更多下载自定义歌曲的功能，但是这个网站就是这些歌曲存储的地方。

如果你从 BeatSaver 手动下载歌曲，请把它解压到一个独立的文件夹并且把文件夹放到 `Beat Saber/Beat Saber_Data/CustomLevels` 目录里。 游戏原生支持从这里读取自定义歌曲。

### BeastSaber
[Beast Saber](https://www.bsaber.com) 是另一个自定义歌曲网站，旨在管理和审核 BeatSaver 上所有歌曲。 您可以下载歌曲列表、关注作者、使用高级搜索等等。

### 歌曲管理工具

下面的工具可以帮助你管理自定义歌曲或播放列表。

* [BeatList](https://github.com/ranmd9a/beatlist/releases/latest) 是一个桌面应用，它可以让您管理自定义歌曲和播放列表。由 **ranmd9a** 维护。
* [BeaterList](https://syltaris.github.io/beaterlist) 是一个由 **zexurge** 提供的网站来让您管理播放列表。

## 如何安装歌曲列表？

### PC
您首先需要安装 [PlaylistManager](https://github.com/rithik-b/PlaylistManager/releases/latest) mod。

接下来你可以：

* 在 Mod Assistant 中找到 "设置 (Options)" 标签页，使用 `安装歌曲列表 (Install Playlist)` 工具。
* 或者手动将歌曲列表文件放入 `Beat Saber/Playlists` 中，然后在游戏里选择播歌曲列表，点击下载所有歌曲。

你应该可以在游戏内的自定义歌曲专辑旁看到播放列表图标。 这个 Mod 也支持在游戏中管理播放列表。

### Quest
您可以使用 [Playlist editor Pro](https://beatsaberquest.com/bmbf/my-tools/playlist-editor-pro/) 来管理您 Quest 上的歌曲列表。 要注意的是，由于 BMBF 的限制，同一自定义歌曲只能在游戏中出现一次。

:::warning Quest 用户请注意
重新加载你的自定义歌曲文件夹，会重置所有的歌曲列表顺序。
:::

## 如何制作自己的自定义歌曲？
查看 [制谱指南](/mapping/)！

## 如何加载 Mod Assistant 中所没有的 PC Mod？
见新手指南中的 [这一节](/pc-modding.md#manual-installation)。

## 多人联机可以跨平台游戏吗？
Quest 和 PC 版节奏光剑之间的联机已经推出！ 所有玩家都使用最新版本，就可以跨版本联机。 另外，在 Quest 端节奏光剑安装 Mod 将会禁用官方多人联机功能。

一起摇摆（BeatTogether） Mod 是目前支持在打了 Mod 的游戏版本间跨平台游戏的解决方法。 加入他们的 [Discord 服务器 ](https://discord.com/invite/gezGrFG4tz)，查看 `#install-instructions` 频道以获得更多信息。

## 游戏更新导致Mod全部失效？
每次游戏更新时，旧版的 Mod 也 *（很可能）* 无法使用并且需要更新。 为了防止游戏在更新后第一次启动时不会发生问题，所有在 `Plugins` 文件夹里的文件会被自动移动到名为 `Old 1.xx.x Plugins` 的新文件中。 ** 将这些插件 / Mod 留在那里！**请不要将这些模组拖回 `Plugins` 文件夹，因为它们很可能造成兼容性问题。

要想重新安装Mod的话，只需要**再次运行安装器。**  
BeatMods 仓库只包括了已经确认可以能运行在最新版游戏的Mod！

如果你对此还有疑惑的话，可以看看 [新手指南](/beginners-guide.md)。

## Beat Saber 是如何计算得分的？ 全球排名是如何排名的？
我们在 [握法和技巧](/grips-and-tricks.md) 页面上详细介绍了计分和排名系统。

## 我的菜单是空白的，什么都没有？
如果游戏界面是空的，那么你的存档很可能损坏了。

要修复这个问题，请到： `%AppData%\..\LocalLow\Hyperbolic Magnistism`

删除或重命名 Beat Saber 文件夹。 当重新进入游戏时，它会重新创建存档并正确加载主菜单。
