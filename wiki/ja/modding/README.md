# Modを作る

## Modの導入
Beat Saber _**does not**_ have built in mod support.

ほとんどのModは[BSIPA (Beat Saber Illusion Plugin Architecture)](https://github.com/nike4613/BeatSaber-IPA-Reloaded/)を利用してゲームにModを導入しています。そのほかのツールなどもこのソフトを利用しています。

[BepInEx](https://github.com/BepInEx/BepInEx)のほうが好ましいという方がいれば、BepisがBSIPA用の[ロードソフト](https://github.com/BepInEx/BepInEx.BSIPA.Loader)を作成しています。 ビートセイバーのプラグインをBepInEx plugin APIで開発するさいは、こちらの[ガイド](https://bepinex.github.io/bepinex_docs/v5.0/articles/dev_guide/plugin_tutorial/index.html)を参照してください。

## プロジェクトのセットアップ
ビートセイバーのModの作製に興味があるがVisual Studioなどで使うテンプレートを持っていない場合は[はじめのセットアップ](./intro.md)に従ってください。

### 準備はいいですか?
Unityやそのほか関連するツールを以下の[リンク](#other-links)を参照してください。 質問があれば [BSMG Discord](https://discord.gg/beatsabermods)の`#pc-mod-dev`チャンネルでお尋ねください。

## 引数の設定
Modの導入とデバッグをより簡単にする便利な引数を設定します。

<!-- markdownlint-disable MD013 -->
| 引数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 説明                                                                                                                                             |
| -------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                                                      | IPAのログ出力ウィンドウを有効にします。 ここには、Modのデバッグコンソールが表示されます。                                                                                               |
| `fpfc`                                                                           | "First Person Flying Controller（一人称でのコントローラ）"<br /><br />これにより、ゲーム内でWASDとマウスを使用してメニューを操作できます。 ヘッドセットを装着しなくても良くなるため、テストがとても簡単になります！ |
| `-vrmode oculus`                                                                 | BeatSaberをSteamで起動している場合、このオプションによってOculusのヘッドセットでゲームがプレイできます。                                                                                 |
<!-- markdownlint-enable MD013 -->

## その他リンク

* [BeatMods](https://beatmods.com)
* [BeatMod承認ガイドライン（英語）](https://docs.google.com/document/d/15RBVesZdS-U94AvesJ2DJqcnAtgh9E2PZOcbjrQle5Y/edit?usp=sharing)
* [Unity Scripting API](https://docs.unity3d.com/ScriptReference/index.html)
* [dnSpy](https://github.com/0xd4d/dnSpy)
* [Harmony](https://github.com/pardeike/Harmony)
* [Beat Saber IPA](https://bsmg.github.io/BeatSaber-IPA-Reloaded/)
