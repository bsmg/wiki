---
sidebar: "false"
---

# サポート
## 目次
0. [重要な注意事項](#0-important-notes)
1. [インストーラの問題](#1-installer-issues)
2. [ゲーム内の問題](#2-game-issues-post-modding)
3. [よくある質問](#3-common-questions)
4. [トラブルシューティング](#4-troubleshooting)
5. [そのほかの問題](#5-if-all-else-fails)
6. [まだ問題が解決しませんか？](#6-still-having-issues)

## 0. 更新情報
アップデート後、BSMGのディスコードチャンネル `#server-announcements` は、Modのステータスに関する最新の情報があります。 以下に、最も一般的な手順の詳細な手順を示します。

#### アップデートがModを停止させました。
**新しいアップデートで** 一度ゲームを実行します。 次に、Mod アシスタントなど、 [初心者ガイド](/beginners-guide)にリンクされているインストーラを使用して Mod を再インストールします。

## 1. Modがありませんか？

#### 1.1 Mod が表示されません
まず、以下を確認してください:
* **Modをインストールする前に一度ゲームを実行します**. BSIPAは、古いModが新しいバージョンにロードされないように、新たなアップデート後の最初の実行時にすべてのModを削除します。 この場合は Mod を再インストールしてください。
* Steam/OculusはModと **同じドライブ** からBeat Saberを起動します。 *例）DドライブにModがあるが、steamはCドライブからゲームを起動する場合* 正しくドライブの場所を設定してください。
* Modを手動でインストールした場合は、ダウンロードしたすべてのファイルが含まれていることを確認し、正しいフォルダに入れてください。 依存関係も同様です

#### 1.2 古いバージョンで Mod をインストールしましたが、アップデート後は何もインストールしていません

上記のセクション1.1を確認した場合は、以下の解決策を番号順に試してみてください。

**解決策1**
- BSIPAを最新のバージョンに更新する(ModAssistantまたは手動で)
- Beat Saberフォルダに移動
- `IPA.exe` を実行する

**解決策2**
-  [ゲームファイルを確認する](#verify-game-files-for-steam) (Oculus ユーザーは 解決策4 を参照)
- BSIPAを最新のバージョンに更新する
- Beat Saberフォルダに移動
- `IPA.exe` を実行する

**解決策3**
- Beat Saberフォルダに移動
- `UserData` フォルダのバックアップを作成します(任意)
- `UserData`を削除する

or contribute to translation effort [here](https://github.com/bsmg/wiki). :::

**解決策4**
- [クリーンインストール](#clean-installation)を実行する

#### 1.2 Mod Assistantがプラグインをインストールしていません
インストーラーはModを `Beat Saber/IPA/Pending`にダウンロードし、ゲームを起動するとBSIPAはこれらのファイルをルートフォルダに移動します。 ゲームプラグインフォルダがまだ空の場合は、 `IPA.exe` を再度実行し、実行を妨げるものがないことを確認してください。例： アンチウイルス、管理者権限など。

## 2. Modによるゲーム自体の問題
### ゲームが起動しません

#### 2.1 GetThreadContext のエラー
`GetThreadContext` のウィンドウが表示された場合、または Windows のエラー音が聞こえた場合。 Beat SaberのModを阻害するソフトウェアがあるかもしれません。 ESEAやFaceltのような多くのサードパーティのアンチチートソフトウェアは、実行していない場合でも、BSIPがBeat SaberにModを適用することを妨げます。 アンチウイルスソフトウェアも同様にBSIPの動作を妨げる場合があります。

この問題を解決するには
1. アンチチートソフトウェアをアンインストールします。
2. PCを再起動します。
3. `AppData` フォルダにソフトウェアが存在しないかを確認します。
4. ゲームを起動します。 それでも問題が残る場合は以下のように対処してください: `追記:Bsipaをブロックするプログラムや疑問視するプログラムがある場合、不許可や不承認の問題が残る場合があります。` Steam: [Verify Steam Game Files](#verify-game-files-for-steam) Oculus: [クリーンインストール](#clean-installation)を実行する

これで問題が解決するはずです。

#### 2.2 起動時にフリーズしました
ゲームがHealth and Safetyの画面でフリーズしたり、コントロールできないTポーズのアバターが表示された場合、 Steamプレイヤーは[ファイルを有効にする](#verify-game-files-for-steam) でファイルを確認してください。もしくはOculus Homeでゲームを再インストールしてください。 [Clean Installation](#clean-installation)を参照してください これはModをインストールした後にBeat Saberを更新した場合に発生するようです。クリーンインストールを使ったユーザーは例外です

### フレームレートの問題
#### 2.3 Modをインストールした後、ゲームの音ズレに我慢できない。
ゲームのラグがひどすぎて、Health & Safetyの画面で `Continue` ボタンをクリックすることができなくなった場合、 Steamでゲームをプレイしている場合はファイルを確認するか、Oculus Homeでゲームを再インストールしてください。 ゲームを起動しようとしたときにエラーメッセージが表示されない場合やゲームが起動されないときは同様に対応します。

問題が解決しなかった場合は、セクション [2.4 フレームレートの改善](#framerate-issues) を確認してください。

#### 2.4 フレームレートの改善
[2.3](#2-3-the-game-stutters-unbearably-after-installing-mods) でFPSが改善しなかった場合、お使いのPCがModによるストレスによって単純に重くなっている可能性があります。 フレームレートを向上させるために、いくつかの方法があります。

* NVIDIA GEFORCE EXPERIENCE で Beat Saber のレンダリングスケールがデフォルト設定の1.0を超えていないかを確認します。 GPUの負荷が大幅に増加する1.4または1.8に設定されている可能性があります。
* あまり複雑でないカスタムアバターを使用します。
* カスタムセイバー **Plasma Katanas** には多くのカスタムイベントがあり、あなたがミスをしたときににラグが発生することが知られています。
* CameraPlusはとても重たくなりやすいです。特に複数のカメラを表示したり、FOVを大きくすると非常に重たくなりやすいです。
* ゲーム内の設定でレンダリングスケールやアンチエイリアシングをさげ、ミラー、霧の効果などをオフにします。
* Oculus CV1やRiftプレーヤー: 3+の代わりに2つのセンサーを使用することを検討してください。
* Modと曲を減らします。
* [クリーンインストール](#clean-installation)を実行する.
* 低フレームレートは、アプリケーションデータフォルダ内で問題が発生する場合もあります。 これを修正するには、 [AppData内のBeatsaberフォルダの削除](#deleting-your-save-in-appdata)を参照してください。
* 重たい原因になりやすいので、score counterやswing speedのようなCountersPlusカウンターを無効にします。
* HTTPStatus mod はラグを引き起こす可能性があります。 このMODを無効にしてラグが消えるかどうかをテストします。

VRはModを追加する場合は特に、非常にCPU負荷がかかります。 あなたが望み通りのMODでゲームを実行するのに苦労している場合は、ハードウェアのアップグレードを検討してください。 Beat Saberは、視覚的にはかなりシンプルなゲームであるため、GPUをあまり利用していません。

## 3. よくある質問
#### 3.1 メニューやボタンが表示されない
If your main window in game is blank, your save file likely got corrupted. To fix this refer to [Delete Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

::: warning This will delete your local scores and statistics. :::

#### 3.2 `xxxx` modはどのように使えばいいですか?
If you're using Mod Assistant, click the mod and hit the "Mod Info" button. http://beatmods.com has a "More Info" button on each mod as well.

#### 3.3 Rumble Issues
Gameplay Modifiers Plus adds a toggle to enable/disable controller rumble. If you disabled it then removed the mod, you'll need to modify the save data file that it writes to manually. Open `%appdata%/../locallow/hyperbolic magnetism/beat saber` and set `constrollersRumbleEnabled` to `true`.

If this isn't the cause of your rumble issues and the following are true regarding your haptics:
* haptics are miniscule
* there is no vibration when hitting multiple blocks
* there is a slight delay when touching sabers together
* you are using Oculus touch controllers

Then there is a good chance that Beat Saber is overloading your motherboard's USB controller. Oculus devours your USB controller bandwidth and most motherboards come with a very cheap controller. Beat Saber pushes it harder than any other game, which is why other games and menus might be fine. There is no clear-cut solution, so try the following:
* Shuffle the sensor and HMD USB cables around in different ports
* Unplug unnecessary USB devices
* Buy a PCI-E USB hub
* Use `-vrmode oculus` if you're using SteamVR to bypass it and use the Oculus SDK instead

### Custom Avatars
#### 3.4 Custom Avatars (Not) Showing Ingame
Click the **Home** button on your keyboard with the game in focus to toggle visibility in the headset.

#### 3.5 My Avatars Are Broken
Make sure your custom avatars plugin is installed properly and updated, also make sure your dependencies are too. You might have a corrupted/broken avatar, having one avatar break can break all of your avatars likewise with songs and sabers.

### Custom Songs

#### 3.6 My Songs Are Missing
Make sure your songs are in your `CustomLevels` folder, located at `Beat Saber/Beat Saber_Data/`. This is where the game natively reads custom songs from.

**Do not** place songs in the old `Beat Saber/CustomSongs` folder. This location is deprecated as the format for custom songs has changed. If you have maps in the old format (`.json` and `.ogg` files instead of `.dat` and `.egg`), leave them in the old `Beat Saber/CustomSongs` folder. They will then be automatically converted by the SongCore mod.

Alternatively, you can manually convert them using [Song Converter](https://github.com/lolPants/songe-converter)

#### 3.7 Grayed Out Play Button
Click the shiny blue question mark (?) button in the top right corner. This should tell you what mods are required to play the song, which you are missing and should install. If it is still not working, try re-installing the required plugin. Otherwise try a [Clean Install](#clean-installation).

#### 3.8 Map details are infinitely loading
If this only happens on particular maps, those song files are probably broken. If it happens to all of your maps, delete your `Plugins` folder and reinstall fresh ones.

### Camera Plus
#### 3.9 Camera Plus Isn't Working/Past Health Screen
Make sure the in-game setting for "Smooth Camera" is turned off in your in-game settings. If that does not work, try reinstalling it and associated dependencies.

#### 3.10 My desktop view only takes up a small section of the screen
Your CameraPlus display isn't filling up your canvas. Either drag the corner to fit the screen, or right click the window and click "Fit to Canvas".

### BeatSaver Downloader
#### 3.11 BeatSaver Downloader More Songs Button
**The More Songs button is located in the main menu to the left under the Mods text.** If the button for More Songs is greyed out then make sure all your songs loaded first, as seen in by the rainbow progress bar on the main menu. If your Mods menu isn't there then make sure your plugins and dependencies are working and installed properly, refer to the [No Mods?](#_1-no-mods) section.

#### 3.12 More Songsメニューに表示されません
The probable causes for beatsaver downloader not working are:
1. Make sure all of your songs have loaded in before, or else the More Songs button will be greyed out.
2. Your anti-virus or firewall blocking access to BeatSaver.
3. You have hit Beatsaver's rate limit and will have to wait before trying again.

## 4. Miscellaneous Troubleshooting
### Understanding Logs
If you're on Steam you can go to
> Beat Saber > Properties > Set Launch Options > Add `--verbose` to the text field that appears

If you're on Oculus then you will have to Right click on Beat Saber.exe and create a shortcut. Edit the Target to add "--verbose" to the end of it. e.g. `C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber\Beat Saber.exe" --verbose`

After adding verbose to your game hopefully it will display any errors regarding your avatars, sabers, and songs
* This may not show 100% of the time for avatars and sabers, and you may have to remove all your avatars/sabers and try them one by one to see which one breaks the game.

These messages are also written to `Beat Saber/Logs`.

A list of common exceptions can be found [here](./exceptions.md).

### Verify Game Files For Steam
To verify integrity of game files follow these steps:
1. Make sure steamvr is closed as it wont let you verify your games otherwise.
2. Go to your steam library and find Beat Saber
3. Right click Beat Saber and click on Properties
4. Go to the "Local Files" tab in properties
5. Select the "Verify Integrity Of Game Files" option.
6. Let it finish verifying and downloading any missing files and you should be good to go.

Here is a [Video Guide](https://www.youtube.com/watch?v=EBFfT4-ZiIc) although it is on the old steam UI the steps are still the same.

### クリーンインストール
1. (Optional) Back up your downloaded custom content by making a copy of the following folders:
* `Beat Saber\Beat Saber_Data\CustomLevels`
* `Beat Saber\CustomSabers`
* `Beat Saber\CustomPlatforms`
* `Beat Saber\CustomNotes`
* `Beat Saber\CustomAvatars`

2. **Delete the ENTIRE Beat Saber Folder.** This is different from uninstalling the game on steam, as those methods will not remove files that did not come with the game.
> Steam:     ``\steamapps\common\Beat Saber\`
  Oculus:``\hyperbolic-magnetism-beat-saber\`

3. Reinstall the game via the Steam or Oculus store
4. **Before modding, launch the game once**
5. Run Mod Assistant, install your mods, and boot up the game.

(Optional) If you want to take it one step further, refer To: [Deleting The Beatsaber Folder Within Your AppData](#deleting-your-save-in-appdata)

### Deleting Your Save in AppData
This will delete your scores and local data, but not your custom leaderboard/ScoreSaber stats. You can find the folder at
> `%appdata%/../locallow/hyperbolic magnetism/beat saber`

Copy and paste everything from inside the bar above and paste it to your address bar in file explorer and delete it.

You can also get to this folder by showing hidden items and navigating to your
> Users > "USER" > AppData > Local Low > Hyperbolic-magnetism

<YouTube url='https://youtu.be/ONxJcD3Ir3Q' />

::: warning Deleting the Appdata folder will also delete your local scores and statistics. :::

#### Desperate Measures
::: warning Disabling your anti-virus involves security risks, be sure to know what you're doing (i.e don't download or open suspicious files while it's turned off) and don't forget to re-enable it as soon as you finished these steps. :::
* Make sure your current user **is an administrator**
* Turn your anti-virus **Off** (for the meantime at least)
* Ensure that you have permission to create folders and edit files within the disk drive/your pc, (from what I heard a windows update recently caused problems for people)
* Ensure that your drivers are up to date
* Check that the problem doesn't lie within your headset, or operating system, or your hardware/software
* Check your internet connection, and that nothing is blocking anything related to beatsaber modding and steam etc.

## 5. まだ問題が解決しませんか？
If this page doesn't cover the bases, then feel free to ask a question in the discord! To increase the chance that you'll have your questions answered, consider the following:
* Use the correct channels please, `#pc-help` for pc mod support and `#quest-help` for quest mod support. Use  `#pc-3d-modeling` and `#quest-3d-modeling` for questions about **making your own avatars, platforms, notes, or sabers**, and `#mapping-discussion` for questions about **making maps.**
* Be polite and respectful
* Describe your problem in detail. "It didn't work" is about as descriptive as telling your doctor you don't feel well. What's not working, and what did you try? Are there any messages that come up on screen? Did your entire screen turn bright purple?

::: tip NOTE Those with the `Support` role are volunteers that might choose to help out in their free time. The support role is in recognition of the knowledge and effort they have put forth, but it doesn't necessarily mean that they'll be around to help just because they're online. :::

Thank you!

> Thank you to Saber-Chan for their hard work on this page.
