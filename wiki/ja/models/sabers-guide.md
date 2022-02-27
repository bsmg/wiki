---
sidebar: "false"
next: ./avatars-guide.md
description: MissRaynor's guide to making Custom Sabers!
---

# カスタムセイバー作成ガイド
_MissRaynorによる、カスタムセイバー作成ガイド_

## はじめに
カスタムセイバーを作るうえでまだ多くの人が問題を抱えているので、現在のチュートリアルを更新したいと思います。 前回のガイド作成においてangeliod0103に感謝を申し上げたいと思います。 BobbieとMdotには追加の説明をいただきました。ありがとうございます。

## 準備
必要なもの

* Unity [2019.3.15f1](https://unity3d.com/get-unity/download/archive)
  * You need to go to the tab that says `Unity 2019.x` and scroll down to 2019.3.15. This has to be installed with [Unity Hub](https://unity3d.com/get-unity/download).
  * Need a guide on how to install? [Check out this Unity guide to Unity Hub.](https://docs.unity3d.com/Manual/LicensesAndActivation.html)
* [The Custom Saber Unity project.](https://cdn.discordapp.com/attachments/468249466865057802/935252103935434762/Unity2019.3.15-CustomSaber-4.3.0.zip)
* お好みの３Dモデルファイル 最も一般的なファイル形式は.objと.fbxです。 Sketchfabやturbosquidなどの3Dモデルサイトからお好みのモデルをダウンロードして使うことも可能です。

任意

* 3Dモデリングソフトウェア: Blenderは無料で使える良いソフトです。ライセンスをお持ちの場合は3dsmaxです(教育ライセンスで構いません)
* 画像編集: [Photoshop](https://www.adobe.com/products/photoshop.html) または [GIMP](https://www.gimp.org/downloads/) が、自分のセイバーのテクスチャを作りたい場合に必要です。
* The saber model used in [this tutorial.](https://bs.assistant.moe/Sabers/resources/Tutorial_Saber.zip)

## 設定
カスタムセイバーのUnityプロジェクトを任意の場所に解凍します。

### Importing and setting Unity version of the project

![Adding Custom Saber project](~@images/models/sabers/01.png)

The Custom saber project should appear on the list. Make sure the Unity version is correct for the project.

![Checking that the project version is correct](~@images/models/sabers/02.png)

![If the Unity version is incorrect, change this to match the project version.](~@images/models/sabers/02-2.png)

### Opening and setting up the project in the Editor

Custom Saberプロジェクトを開くと、次のように表示されます。

![Checking that the project shows up correctly](~@images/models/sabers/03.png)

`window` タブに `Saber Exporter` が表示されることを確認してください。

![Checking that project has a saber exporter](~@images/models/sabers/04.png)

![Checking that the saber exporter works properly](~@images/models/sabers/05.png)

初めのシーンには、 `TemplateSaber` というGameObjectが含まれています。

![Red circle around TemplateSaber](~@images/models/sabers/06.png)

初めてこのプロジェクトを開いた場合、Unityのビューポートはセーバーから非常に遠く離れています。 ビューポートにテンプレートセイバーを表示するには、 `TemplateSaber` GameObjectにダブルクリックします。

`RightSaber` と `LeftSaber` GameObjects の両方をクリックし、 `Event Manager` コンポーネントが添付されていることを確認します。

![Checking that EventManager exists on the RightSaber object](~@images/models/sabers/07.png)

テンプレートセイバーを `CustomSabers` フォルダにエクスポートしてみてください。

![Exporting TemplateSaber](~@images/models/sabers/08.png)

Template Saberが表示され、ゲーム内で正しく動作した場合、セットアップが完了しました。 次のパートへ進みましょう。

## 3Dモデリング
I won’t go into detail about making a 3d model. If you don't have already have a model and want to learn how to make one, you can find tutorials here:

### Blender
<YouTube url='https://www.youtube.com/watch?v=ICBP-7x7Chc' />

### 3DS Max
<YouTube url='https://www.youtube.com/watch?v=DzBTcDY3_Q4' />

Once the saber is done, you can export it by choosing File-Export, choosing the desired file format, and importing it into unity.

::: tip NOTE OBJ is best used for simple sabers. FBX is best used for complex sabers that have rigging or animations. :::

![Exporting saber as FBX](~@images/models/sabers/09.png)

::: tip NOTE You don't have to export both sabers if they both have the exact same shape. If they're identical, exporting one should be good enough. ::: ::: tip NOTE Merging meshes that share the same color/glowing attributes will help a LOT in the long run. :::

## Unityでの操作
モデルをUnityへインポートする方法は、アセットウィンドウにモデルをドラッグアンドドロップするだけです。 その後、モデルをテンプレートセイバーの横に並べます。 動画：

<YouTube url='https://www.youtube.com/watch?v=mphD87zOer4' />

次に、ビートセイバーに互換性のあるマテリアルをセイバーに追加します。

カスタムセイバーには4つの互換性のあるシェーダーが付属しています。 主な違いは次のとおりです。

* Lit glowは点灯し、影があります。 光の向きと強さを変えることができます
* 金属質は材料を少し暗くし、金属反射を加えることができます。
* Unlit glowはlit glowに似ていますが、照明効果はありません。
* Unlighted glow cutout ditherは、unlit glowと同じですが、マテリアルに透明性を追加できます。

使用するマテリアルは、探している特性によって異なります。

::: warning 警告 ビートセイバーと互換性のあるシェーダー*のみ*使用してください。 互換性のないシェーダー(Unity標準シェーダーなど)を使用すると、ゲーム内で白として表示されます。 :::

::: tip 補足 シェーダーの互換性の詳細については、このガイドの高度なシェーダーのプロパティセクションをご覧ください。 :::

マテリアルを適用するビデオ例:

<YouTube url='https://www.youtube.com/watch?v=zKFCNJoQOWk' />

テクスチャスロットに画像ファイルをドラッグすることで、素材にテクスチャを追加できます。

![Adding texture to saber](~@images/models/sabers/10.png)

::: tip NOTE The `Glow` slider modifies how bright the saber glows. Additionally, when the glow is above 0, that material will be affected by the player's custom colors. :::

Once you've completed all of this, you can export your saber. Open up the `Saber Exporter` in the `Window` tab and then fill in the saber's name and author.

![Exporting the saber and adding name + author](~@images/models/sabers/11.png)

Put your sabers in your `CustomSabers` folder and test them out in game. If they look good ingame, you're all done!

::: tip NOTE **Once you've got your new sabers working**, [upload them to ModelSaber](https://modelsaber.com/Upload/) if you want to share them with the world. :::

## Advanced
This section covers things that aren't included in the main tutorial, such as how to add Events and Trails.

Other scripts are contained in `Assets/CustomSaber.dll`. Click on the little arrow to expand it. ![Expanding CustomSaber.dll](~@images/models/sabers/12.png)

### EventManager
This component lets you set up an action when an event condition is met. This includes when you hit a note, miss a note, when you start a level, etc...

To use it, click on the plus button to create a new event, drag the gameobject performing the action in the slot, and then choose the desired action.

If you want more information on events, read the [Events](./avatars-guide.md#events) section in the Custom Avatars guide.

![Adding an event](~@images/models/sabers/13.png)

### Every Nth Combo Filter
This component lets you perform an action every N combo. It works the same as the `Event Manager`, but with the only trigger being every time you hit N combo.

### Custom Trails
This component lets you change the default trail for sabers. For a comprehensive tutorial on how to use custom trails, check out [MDot's custom trail guide](https://mdotamaan.github.io/BeatSaber-CustomTrailsGuide/).

### Animation
If you want your sabers to play a certain animation, you need to use an `Animator` component.This will allow you to better manage what animation you're making, in addition to letting you control how the animation transitions/triggers using the Event Manager. [More information on the animator component can be found in the unity docs here](https://docs.unity3d.com/Manual/class-AnimatorController.html).

### Advanced Shader Properties
If you want to modify your shaders to use Custom Colors without having to change the glow, it is possible to modify them support this.

Add this snippet of code to your shader's `Properties` section. If you have another property named `_Color`, make sure to remove it!

```hlsl
_Color ("Color", Color) = (1,1,1,1)
[MaterialToggle] _CustomColors("Custom Colors", Float) = 0
```

Now your materials should have a nice `Custom Colors` checkbox instead of custom color support depending on the currently set glow.

Similarly, if you want to import a non-beatsaber shader to use it on a saber and want it to display correctly ingame, you need to strip the `Alpha` channel out.

Each shader is different, so there's no universal approach to doing this. If you're not sure exactly how to do this, feel free to discuss the process in #pc-3d-modeling in the [Beat Saber Modding Group](https://discord.gg/beatsabermods).
