---
sidebar: auto
tags:
  - bsmg
  - 节奏光剑
  - wiki
  - 制谱
  - make levels
  - 节奏光剑曲谱制作
  - 自定义关卡
  - 制作自定义地图
  - 自定义谱面
description: |
  太多二次元曲谱？ 想玩的谱面太少？
  用你的双手创造自己的《节奏光剑》谱面吧！
---

# 制谱

太多二次元曲谱？ 想玩的谱面太少？  
用你的双手创造自己的《节奏光剑》谱面吧！

::: tip INFO  
如果你有关于我们如何改进制谱教程的反馈意见，请填写 [问卷](https://docs.google.com/forms/d/e/1FAIpQLSfVS6_EMZOujxthR3lTa2eEwHg5C3x1INouLgnbHhBDpv1M5A/viewform)！

您也可以在 [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) 中的 `#mapping-discord` 频道来参与讨论！ :::

* [制谱术语参考](./glossary.md)

## 快速开始
> Wiki 是你的根基，社区是你的灵感，而你是那一抹不一样的色彩。

厉害的制谱师并非一日练成。 这需要你的奉献，而没有人可以手把手教你。 我们能做的最好的，就是为你提供这个 Wiki，澄清你在制谱生涯中所需要解决的任何问题。

1. 下载制谱必需的工具：一个[音频编辑](https://www.audacityteam.org/)和一个[谱面编辑器](#map-editing-resources)。
2. [准备你的音频文件](#audio-editing-resources)，确认其节拍信息（BPM），然后以 OGG 格式导出。
3. 在你的[谱面编辑器](#map-editing-resources)中配置音乐（具体步骤因编辑器而异）。
4. 开始制作谱面！ 在开始前，看看[基本制谱要领](./basic-mapping.md)。 在早期[试玩](#playtesting)你的作品，并常在制谱过程中检查。
5. 设置灯光！ 看看[基本灯光设计](#lighting-practices)。 简单的手动照明远比你想象中的简单！
6. 确保你已经[试玩](#playtesting)过你的谱面！ 强烈建议在 [BSMG Discord](https://discord.gg/beatsabermods) 中邀请别人测试你的地图，因为这样你能获得中肯的评价，并且绕过你自己的“制谱认知盲区”。
7. 当你正确制作了自己的谱面，并且经过试玩，你就可以[在 BeatSaver 正式发布你的谱面](#publishing-songs)了。

### 视频教程
看不惯大段的文本指南？ 查看这些系列视频！  
:::tip 记住：
这个 Wiki 上的文字教程永远是最新的，因为它更容易更新。
:::

#### 推荐

* [Helen Carnate 制作的制谱教程（英语）](https://www.youtube.com/watch?v=6O3sXmh-kAA) - 17分钟的 MMA2 制谱快速入门教程。
* [Fruhead 制作的 MMA2 制谱快速入门教程（英语）](https://www.youtube.com/playlist?list=PL5F3WJ0s0nscdpqiWlOpM_4tJcF-CnWbm) - 使用 MMA2 制作第一张谱面的全面教程
* [ChroMapper 编辑器指南](https://youtube.com/playlist?list=PLS0PknCDCujE3Tf1pkbkA_uUijkV6v52y) - ChroMapper 编辑器的教程。
* [Cyrix 的地图新手避坑指南](https://www.youtube.com/watch?v=mgGaqZ20Scw) - 涵盖了 [ 地图制作基础 ](./basic-mapping.md) 中讨论的最常见问题。
* [TranquilizeMe 的节奏光剑光照技巧](https://www.youtube.com/watch?v=EDbPRN_u3jc) - 涵盖各种光照技术和小提示。

:::warning 本页面上的教程都已经由 BSMG 审核。 其余视频教程都有一定概率存在非最新（最准确）的信息。风险需要您自行承担。

如果你也有自己的教程并且也想被收录的话，欢迎[联系我们](https://bsmg.dev/contact)。 :::

#### 旧的视频
::: warning 这些系列视频使用的都是旧的编辑器 (Mediocre Mapper 和 EditSaber)。 UI 和一些操作都在编辑器（[MMA2](./mediocre-map-assistant.md)）中发生变化，不过其余的内容也很不错！ :::

* [BennyDaBeast 制作的制谱教程](https://bsaber.com/benny-custom-mapping/)
* [Freeek 的制谱与编辑教程](https://www.youtube.com/playlist?list=PLYeZR6d3zDPgDgWogOwMteL-5SQWAE14b)

## 音频编辑教程
在制谱前，您需要准备好您的音频文件，以便其与您的地图编辑器兼容。 本节将教您如何使用一个叫做 [Audacity](https://www.audacityteam.org/) 的免费软件来编辑您的音频文件。

### [**基本音频设置**](./basic-audio.md)
没有了音频，任何制谱都毫无意义。 学习如何为简单的制谱准备音频！

### [**进阶的音频编辑**](./advanced-audio.md)
更深层的音频调整，比如制作音乐剪辑（Short Edit，音乐的短版剪辑）或使用可变 BPM。

## 制谱教程

### 社区提供的编辑器
::: warning
社区编辑器常常有更多的功能，不需要 VR 头显，但他们可能存在一些问题，因此请谨慎使用。
::: 这些编辑器的键盘快捷键可在它们各自的编辑器菜单中使用，并在它们之间进行交叉引用，[此处提供](./editor-keybinds.md)。

#### ChroMapper
**现已进入 Open Beta 版本！**一个 3D 谱面编辑器，包含了灯光、Chroma、Noodle Extensions、360/90，并与 节奏光剑 共享大量资源，以提供更准确的预览！ 是当前功能最全面的对社区开放的谱面编辑器。

社区鼓励加入 [ChroMapper Discord 服务器](https://discord.gg/wFjZt4z) 以获得插件、脚本和应用程序的帮助和支持（对于制谱，你可以在 BSMG 获得帮助）。

* [ChroMapper 启动器下载](https://cm.topc.at/dl)
* [ChroMapper 首次使用](https://chromapper.atlassian.net/wiki/spaces/UG/pages/917506/First-time+setup)
* [ChroMapper 百科](https://chromapper.atlassian.net/wiki/spaces/UG/overview)

#### Mediocre Map Assistant 2
在 ChroMapper 推出 Open Beta 版本之前，社区的大多数制谱师使用的都是 MMA2。

* [Mediocre Map Assistant 2 下载](https://git.bsmg.wiki/Top_Cat/MediocreMapAssistant2/releases/latest)
* [Mediocre Map Assistant 2 用户手册](./mediocre-map-assistant.md)

#### Beatmapper.app
在浏览器中运行的制谱工具，顾名思义，它可以让所有能打开浏览器的人制作自己的谱面。 他足以胜任基本的制谱工作，同时新的功能也正逐渐被加入。

* [Beatmapper 官网](https://beatmapper.app/)
* [Beatmapper 用户手册](https://beatmapper.app/docs/manual/getting-started)

::: tip 想自己制作一个 谱面编辑器/格式转换工具？ 敬请移步 [地图格式 页面](./map-format.md) and [SongCore 自述文档](https://github.com/Kylemc1413/SongCore/blob/master/README.md)。 :::

### 官方谱面编辑器
官方谱面编辑器是由 Beat Games 开发和支持的，并预先安装在 Steam VR 或 Oculus PC 版本的节奏光剑中。

* [官方谱面编辑器 文档](https://beatsaber.com/documentation.html)

#### 从官方谱面编辑器迁移到社区谱面编辑器
:::warning 注
以下指引仅适用于最古老的2D谱面编辑器，它已于 1.8.0 版本节奏光剑被移除。
:::

我们建议您使用一个 [社区编辑器](#community-editors) 后重新进行一次 [快速开始](#mapping-quick-start)，但是在官方谱面编辑器中转换文件格式也是一个可行的方案。

1. 安装 [社区编辑器](#community-editors)
2. 在您的游戏的 `CustomLevels` 文件夹中找到您的地图文件。
    * Steam 示例位置： `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels`
    * Oculus 示例位置： `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomLevels`
3. 将其移动到您的编辑器的项目文件夹里。 这通常是 `Beat Saber_Data` 中的 `CustomWIPLevel` 文件夹。
    * Steam 示例位置： `C:\Program Files (x86)\Steam\steamapps\common\Beat Saber\Beat Saber_Data\CustomWIPLevels`
    * Oculus 示例位置： `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber_Data\CustomWIPLevels`
4. 如果还没转换，将您的音频文件从 `.wav` 等格式转换为 `.ogg` 格式。
    1. 下载并安装 [Audacity](https://www.audacityteam.org/)
    2. 在 Audacity 中打开您准备的 `.wav` 文件
    2. 依次点击 `File menu -> Export -> Export as OGG`
    3. 将导出文件命名为 `song.ogg` 并点击 <kbd>Save</kbd>。
    4. 将 `song.ogg` 文件放入您的谱面文件夹。
        * 此后，您将不再需要此文件夹中的 `.wav` 歌曲文件
5. 在您的社区编辑器中打开谱面，并将歌曲文件名更改为 `song.ogg`，然后点击保存按钮。

你现在就可以继续制谱了！

### 预防数据丢失和云存储
更新您的游戏可能会删除所有自制谱面的数据。您可以通过 [创建符号链接](https://en.wikipedia.org/wiki/Symbolic_link) 以防止数据丢失。 这允许您将谱面存储在不同的设备上， 例如同步到云存储服务， 并在游戏目录中镜像它们。 如果因更新或卸载游戏导致创建的符号链接被删除，您真正的地图文件并不会被删除。然而，如果您进行递归删除操作，您的地图文件就会被真正删除。

如果您在多台计算机之间切换使用，或者希望为文件提供额外的安全性以防止存储磁盘损坏，那么使用云存储文件夹非常有用。

以下指引适用于Windows 10/11。

1. 移动当前谱面文件夹到您的新位置。 （使用 `Ctrl + x` 剪切文件夹，而不是 `Ctrl + c` 复制）
   * 如果这是一个云存储的文件夹，请确保设置文件夹为离线可用！
2. 打开命令提示符
3. 更改一下标出的参数，然后运行此命令。  
   `mklink /j “Beat Saber安装路径” "新路径"`
    * 这里是一条示例命令：  
      `mklink /j "C:\Program Files (x86)\Steamapps\common\Beat Saber\Beat Saber_Data\CustomLevels" "C:\Users\cmb\CloudStorage\CustomLevels"`

如果它在网络驱动器（云存储挂载点）上，则请用 `/D` 替换 `/j`。 请注意，您需要以管理员身份打开命令提示符才能成功

### 其它制谱工具

* **+1 Rabbit** 制作的[BS Viewer](https://skystudioapps.com/bs-viewer/)  
  一个方便的工具，可以在没有游戏的情况下预览谱面的外观。
* [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit**  
  A suite of tools for mappers that includes:
  * **Schema Fixer:** Easily fix maps made in Mediocre Mapper Mk4.1 and Mk5 for upload to BeatSaver.
  * **Tempo Changer:** Change the BPM of an entire map and shift block placements accordingly.
  * **Offset Remover:** Removes editor offset and snaps notes/obstacles/events to common precisions to try and mitigate floating point error.
  * **Note Sorter:** Sorts unordered notes/obstacles/events in the map file to fix stack spawning.
  * **Copy Timing:** Moves notes in one difficulty based on another within a certain window. Useful to apply small timing changes across all difficulties for specific sounds.
  * **Copy Lighting:** Copies all of the lights, with the option to include/exclude custom events from one difficulty to all other difficulties.
  * **Map Diff:** Compare between two versions of a map. Useful for testplayers and Ranking Team members to see if any changes were made.
* [Parity Checker](https://galaxymaster2.github.io/bs-parity/) by **GalaxyMaster**  
  An error checker tool that focuses on finding issues with parity in a map.
* [Map Check](https://kivalevan.github.io/BeatSaber-MapCheck/) by **Kival Evan**  
  An error checker tool that is much more versatile than the one built into MMA2.
* [noodleLister](https://github.com/bloodcloak/noodleLister#readme) by **Bloodcloak**  
  Easily compile a game playlist from a txt file containing BeatSaver map keys.

#### 旧版工具
这些工具可能不再被支持，与最新的软件不兼容；或者与当前的实践不相关，但仍然可以满足某些特定的使用需求。

* [BeatMerge](https://github.com/ZelonGames/BeatMerge#readme) by **DarkGrisen**  
  Ever thought that it is a lot of annoying work to make big maps with other people or to perfectly cut the audio files so you can merge them manually later? This tool allows you to merge two or more maps into one single super long map.
* [Cinder](https://github.com/zhaey/cinder#readme) by **zhaey**  
  Python program that converts stepmania `.sm` files to Beat Saber `.dat` files for timing notes.
* [BeatMapper Tools](https://beatmappertools.com/) by **Darkuni**  
  A utility for users of Mediocre Mapper and Mediocre Map Assistant 2 to easily convert, test, and package their maps.
* [osu! Editor Timing Tutorial](https://www.youtube.com/watch?v=nIX0koHzW8c&t) by **Fayhe**  
  Video guide on using the timing feature of osu!'s editor to find map bpm.

### 有用的 Mod
这里有一些可以使您的制谱工作更轻松一些的模组。

* [SiraUtil](./basic-lighting.md#in-game-with-fpfc) by **auros**  
  With the First Person Flying Controller (FPFC) launch parameter, this allows you to control the game while a map is playing with your keyboard and mouse without using a headset. See the section in [Basic Lighting](./basic-lighting.md#in-game-with-fpfc) for links to the mods and how to set it up.
* [PracticePlugin](https://github.com/denpadokei/PracticePlugin) by **denpadokei**  
  Mod for Beat Saber to control playback speed, seek through songs and set up looping sections. Install the latest version from [Mod Assistant](https://github.com/Assistant/ModAssistant#readme)!
* [ReLoader](https://github.com/Kylemc1413/ReLoader) by **Kyle1413**  
  Allows you to hot reload beatmaps in practice mode without needing to return to the menu to refresh. Really convenient for wall mapping.

## 制谱实践
> "You have to know the rules before you can break them."  
> \- Uninstaller

There is no holy bible of mapping but this section of the wiki includes a lot of tribal knowledge from the community on best practices at all levels of mapping. Our advice is to follow these rules until you're comfortable with your skills and then get creative, experiment, and innovate!

### [**Basic Mapping**](./basic-mapping.md)
All new mappers need to read this, **no exceptions!**

### [**Intermediate Mapping**](./intermediate-mapping.md)
A more in-depth look at many mapping topics

### [**Downmapping**](./downmapping.md)
A comprehensive guide to making lower difficulties.

### [**Extended Mapping**](./extended-mapping.md)
Mapping Extensions, Extra Characteristics, and 360&deg;/90&deg; mapping

### Mapper Roles
To apply for the **Mapper** role on the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) you must have released three solid/playable maps (collaborations are acceptable) and complete the [Mapper Role Submission Form](https://forms.gle/mj66J3UopTykFJjXA). Your application and maps may take a decent amount of time to be reviewed and approved.

### Curation
Mappers can submit high quality maps, free of [objective issues](https://bsaber.com/getting-started/curation/#donts) to the #curation-request channel on the [BeastSaber Discord](https://discord.gg/VJZHUbt). Maps selected for curation are given extra visibility on the site and included in the Curator Recommended feed.

### Modding & Ranking
Maps that meet specific [Ranking Criteria](https://scoresaber.com/criteria) and go through an intensive review process called "modding" have the potential to become ranked, awarding players Performance Points (PP) toward global leaderboards. More information and an in-depth FAQ is available on the [ScoreSaber Discord](https://discord.gg/WpuDMwU)

* Prior to requesting ranking, mappers should thoroughly review the ranking criteria and [metadata standards](https://docs.google.com/document/d/1ehotupIYMVlc8x41JldO-24m7Am-oTVYnciF9KCRdNM/edit) and have their map modded by a knowledgeable source.

:::tip Want an even more detailed look? Review the [Ranking Criteria](https://scoresaber.com/criteria) for some of the more ambiguous ranking considerations. :::

* Once your map has been modded and revised, it’s ready to be presented to a ranking team member or recruit to review.
* If the ranking team member deems the map acceptable it will be added to the ranking request queue to be voted on by the full ranking team.

### Mapping Anxiety
If you're finding it difficult to muster up the courage to upload your map, or are finding it emotionally taxing coping with a lack of downloads or a lot of dislikes, you're not alone. Many mappers have experienced these feelings. You can read more about it on the [Coping with Mapping Anxiety](./mapping-anxiety.md) page.

## Lighting Practices
A map is not finished until some form of lighting is included. Lighting can range from very basic to incredibly detailed using additional mods to enable more features.

### [**Basic Lighting**](./basic-lighting.md)
Learn the various aspects to lighting your map manually

### [**Intermediate Lighting**](./intermediate-lighting.md)
Take your lighting skills a bit further into strobing, ring spins, and contrast practices

### [**Advanced Lighting**](./advanced-lighting.md)
Advanced and nuanced techniques, lighting for custom platforms, and Chroma RGB **(This page is still a work in progress!)**

### Automated Lights
Not ready to make your own lighting? Here are some programs to do it for you. Keep in mind, creating simple manual lighting is not difficult and will always be better at expressing the atmosphere of the song than using these programs.

* [Lolighter](https://github.com/Loloppe/Lolighter#readme) by **Loloppe#6435** - Standalone program for automated lighting and has other features to modify your map.
* [LiteMapper](https://litemapper.net/) by **ItsOrius** - A website that automatically generates lights based on pacing, emphasis, and note placement. For more information on the algorithm check out the [Readme](https://github.com/ItsOrius/LiteMapper#readme).
* **Lightmap** - It is integrated into Mediocre Map Assistant 2 and can be accessed in the error checker menu.

## Playtesting
Testing your work is a **critical** part of mapping. Testing as you work helps you adjust for major playability issues and get a feel for your map. [Third-party or "outside"](#community-third-party-testing) playtesting is when someone other than yourself tests your pre-release map and provides constructive feedback and is helpful in highlighting issues to which you may be "map blind."

::: danger You **DO NOT** need to upload your map to BeatSaver in order for you or anyone else to test. :::

* If your map is using the 1.0 map format (your files are `.json` and `.ogg`) you must convert your map by **updating your editor**, opening and saving the map. See [Community Editors](.#community-editors) for links to modern editors.
* If your map is using the 2.0 or 3.0 map format (your files are .dat and `.ogg`/`.egg`) you’re ready to test.

### Testing on a PC
Follow these steps to test any of your maps made with a community editor using PC-based VR.

1. If your WIP song folder isn’t already in `Beat Saber_Data\CustomWIPLevels` then place a copy there.
2. Access your map in-game via the CustomWIPLevels category in the song pack menu. Use practice mode to play (the button next to the play button).

**Made changes to your map while the game is open?**  
Click on the game window. Then while you are on the Main Menu or Song Select Menu press <kbd>Ctrl + r</kbd> on your keyboard. Your changes will be loaded without needing to restart the game!

:::tip NOTE

* You will need to have the **SongCore** mod installed in order to see the CustomWIPLevels category and use the <kbd>Ctrl + r</kbd> shortcut.
* Having duplicate map files in `CustomLevels` and `CustomWIPLevels` can cause problems.
* Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be loaded by the game! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way to ensure your map loads in-game. :::

### Testing on a Quest
Follow these steps to test any of your maps made with a community editor using an Oculus Quest. You must have [SideQuest](https://sidequestvr.com) and [BMBF](https://bmbf.dev/stable) installed.

1. Locate your WIP song folder on your PC.
2. Establish a connection to your Quest from your PC with a USB cable.
3. Open SideQuest on your PC and click the folder icon on the top right. ![SideQuest Files](~@images/beginners-guide/sqfiles.png)
4. Navigate to `sdcard/ModData/com.beatgames.beatsaber/Mods/SongLoader/CustomWIPLevels`. If this folder does not exist, you can create it yourself.
5. Upload your WIP song folder from your PC to that folder on your Quest with SideQuest.
    * **NOTE:** You need to upload the actual song folder, not a zip file!
6. Your map will now show up on the CustomWIPLevels song pack inside your game. Keep in mind that you will only be able to play your map using the practice mode, and not with the regular Play button!

:::tip NOTE Using Online Websites to convert audio to `.ogg` may result in your audio file being treated as invalid and will not be loaded by the game! Using Audacity and following the steps in [Basic Audio Setup](./basic-audio.md) is the easiest way to ensure your map loads in-game. :::

### Community / Third Party Testing
The `#testplays` channel in the [Beat Saber Modding Group Discord](https://discord.gg/beatsabermods) makes it easy to have your work checked by knowledgeable mappers. Playtesters will provide constructive feedback on how to improve your map in either video or text format in a DM or in the `#mapping-discussion` channel.

:::warning Some things to note...

* Maps with less than 1 minute done will not get much feedback or be tested. Consider asking in `#mapping-discussion` to see if someone will take a look instead.
* Challenge/Super High difficulty maps may take longer to get feedback since there are not many playtesters at this skill level.
* Please keep to serious posts where you are looking to improve your mapping skills. Meme or Shitpost maps do not belong as they end up wasting the testplayers time.
* Make sure you have run your map through a checker program such as those built-in to your editor or external tools like Parity Checker or Map Check in [Additional Mapping Tools](#additional-mapping-tools) :::

1. Create a compressed .zip file of the individual song files.
    * If you are using [CM](#chromapper), you can press the `Create Zip` button in the Song info Settings to create a compressed `.zip` of your map.  
      ![Create Zip button](~@images/mapping/cm-create-zip.jpg)
    * If you are using [MMA2](./mediocre-map-assistant.md), you can press the `Package Song to Zip` button in the Song Info Settings to create a compressed `.zip` of your map.  
      ![Package Song to Zip button](~@images/mapping/mma2-package-zip.jpg)
    * If you are using [Beatmapper.app](#beatmapper-app), follow their [downloading instructions](https://beatmapper.app/docs/manual/publishing#downloading-your-map).
    * You can manually create the zip by following this [How to Video](https://streamable.com/u20ci) if you are not using a web based editor.
2. Upload your map to `#testplays` using the following format:

* **Map:** The name and artist of your map
* **Length:** The length of the song
* **BPM:** The BPM of the song
* **Difficulty:** Which difficulties are included
* **NPS:** The notes per second of each difficulty available
* **Feedback:** Any requests for feedback (specific difficulties to be tested, things to look for etc.)
* **Status:** What state is the map in? (i.e., First draft complete, no lights; 1:45 mapped; release candidate w/ lighting; etc.)

3. Testers will usually look at your map within 1-7 days and will use a number of reaction emojis (listed in `#testplays` pinned posts) to track testing status.

:::warning Remember: If you make changes after posting or getting feedback React with a 🛑 `:octagonal_sign:` to indicate stop testing this version :::

You can copy and paste the following template into Discord:

```txt
**Map:**
**Length:**
**BPM:**
**Difficulty:**
**NPS:**
**Feedback:**
**Status:**
```

### Help Playtest
Do you like the idea of playing new songs before they are ever released on BeatSaver? Do you want to help shape the mapping community? Consider becoming a testplayer! Check out the [How to Testplay](./how-to-testplay.md) guide to get started!

## Publishing Songs
Once your song has been mapped, lighted, and playtested and it’s a finished product you’re ready to release it to the world!

### BeatSaver
[BeatSaver](https://beatsaver.com/) is the public repository for all custom Beat Saber maps.

#### How to Release a Map

::: danger

* Please **DO NOT** upload an incomplete WIP map to BeatSaver!
  * Uploading to BeatSaver equates to "Putting it on the store shelf" and should **only** be your final version.
  * See the [Playtesting](#playtesting) section for instructions on testing your map. :::

1. [Create an account](https://beatsaver.com/register) on BeatSaver with a username/password or by logging in via Discord.
2. Click the <kbd>+</kbd> icon in the top-right and click <kbd>`Upload Map`</kbd>.
3. Add your BeatSaver map name and map description. Both the title and description are searchable so be sure to include song name, song artist, and other terms that might make it easier to find your map.
    * Use "tags" like (Chroma), (OneSaber), or (Mapping Extensions) if your map uses some special modifications or characteristics you want to highlight.
    * Putting a link to a playthrough video in the map description can help you get more downloads as it is easier to share your map to others and lets people know what to expect.
4. Add your `.zip` file and identify whether your map was human-made or AI-assisted.
    * AI maps intentionally uploaded as human-made will be deleted.
5. Maps are initially uploaded to your unpublished tab. You must explicitly publish them to make them available to the public.

::: tip NOTE
Map files can now be updated on BeatSaver!
If you need to upload a new version of your map you must first recall the map to your unpublished tab before you can
upload a new version. This will retain your map key and statistics but will reset all leaderboards.
:::

### BeatSaver Troubleshooting
Here are solutions for some common errors when uploading a Beatmap.  
Encountered something not listed here? Drop into `#mapping-discussion` for assistance.

:::danger Remember:

* You should have your map [playtested](#playtesting) before uploading!
  * WIP maps will be removed!
* You do not need upload maps created by auto-generation software such as Deepsaber or Beat Sage to install them in your game. If you are on PC, you can unzip the files into your `CustomLevels` folder. If you are on Quest, follow the [Testing on a Quest](#testing-on-a-quest) steps to install the map. :::

---

#### Map already uploaded

* The exact map files were uploaded previously. You must change something small in your map (i.e., remove a light block, save the map, replace the light block, and save again) to be able to upload.

---

#### ``_difficultyBeatmapSets[]._difficultyBeatmaps[].`Difficulty.dat`._version``: Must not be null

* You are using an old, outdated editor that is not compliant with the current data schema. See [Community Editors](#community-editors) for the current options.

---

#### ``_difficultyBeatmapSets[]._difficultyBeatmaps[]`Difficulty.dat`._notes[]_time``: Must be between 0 and x

* Your map contains notes outside of the playable map (usually from a copy and paste error). Remove them and reattempt your upload.

---

#### Internal Server Error
This is the default error message, causes include:

* An upload that is close to or over the actual file size limit of 15 MB. Reduce the audio export quality slightly to make space.
* Unsupported characters are present in a file. Make sure your metadata and bookmarks don't contain special characters such as, Japanese (日本語/にほんご), Kaomoji (٩(◕‿◕｡)۶), Chinese (汉语/漢語), Arabic (اَلْعَرَبِيَّةُ‎), and accented characters (Ä/é/õ/Æ/ø/ß/Œ/Ð/ƒ).
  * [+1 Rabbit's Mapping Tools](https://skystudioapps.com/mapping-tools/) by **+1 Rabbit** may be useful in finding the specific problem.
* Expired web session. If you refresh the page, you should be logged out. Login and try to upload again.

---

#### Could not verify user []

* This error is related to recaptcha. Please reload the page.

---

#### Beatmap zip contains an illegal file! OLD

* Usually caused by extra/unsupported files, such as gifs, in the zip.

---

#### Beatmap does not contain an Info.dat file! OLD

* Usually caused by having the files in a subfolder. You need to zip the files instead of the folder. [How to Video](https://streamable.com/u20ci) Or use the handy export button in your editor instead. **NOTE: MMA2's export button does not include contributor images in the zip.**

---

#### One or more beatmap difficulty files cannot be found! OLD

* You might have forgotten to include all of your difficulty files are in the zip.
* A difficulty's `"_beatmapFilename"` in the `Info.dat` might be using a different file name than what is present in the folder.
* A deleted difficulty is still being referenced in your `Info.dat` file. Check to make sure you do not have unintended difficulties in the `"_difficultyBeatmaps"` cluster of each present characteristic.

---

#### Error in `MapDifficulty.dat`. Root should NOT have additional property: `_time`. OLD

`_time` is the common error for this type of message. However, the same solution applies if a different property is flagged.

* Your files are not compliant the map schema. See [Schema Change](#beatsaver-data-schema-change-october-27-2019) for solutions.

---

#### Beatmap could not be parsed! OLD

* This could be caused by extreme server load. Try again later or ask in `#mapping-discussion`.

---

#### Field `._customData._contributors[]._iconPath` contains an invalid filename. OLD

* Utilizing the contributors field requires all aspects to be included. Make sure all 3 aspects (Role, Name, iconPath) are filled and there is a unique square image for each iconPath entry in your zip.

---

### BeastSaber
[BeastSaber](http://www.bsaber.com) is a song review and curation site with social features including reviewing and commenting on songs. All songs published on BeatSaver are mirrored to BeastSaber within 10-15 minutes. Additionally, maps deleted from BeatSaver may take up to a day to be removed from BeastSaber.

## [Credits](./mapping-credits.md)
Over *thirty* different mapping guides and tutorials have been combined into this wiki so that it can be maintained by the community as a whole. Many many **MANY** thanks to the mappers who blazed this trail and contributed content. Check out the whole list [here!](./mapping-credits.md)
