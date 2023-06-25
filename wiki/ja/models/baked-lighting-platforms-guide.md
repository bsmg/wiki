---
prev: false
next: false
description: Kylonのベイクしたライティングのガイド
---

# ベイクしたライティングプラットフォームのガイド

カスタムプラットフォームの中で Unity のベイクライティングを使えます！

## 最初に

カスタムプラットフォームを作るための Unity のバージョンは [2019.3.15f1](https://unity.com/releases/editor/archive#download-archive-2019). 最初に普通のカスタムプラットフォームのガイドでプラットフォームを作ります [Guide to making Custom Platforms 英語版](../../models/platforms-guide.md).

**ベイクしたライティングで動作する BeatSaber 互換のシェーダをご使用が必要。ビートセイバー Modding Group's (BSMG)の[BS_Shader_Pack (Discord Link)](https://discord.com/channels/441805394323439646/468249466865057802/732620241502339093)にある Custom.shader と GlassRefraction.shader を使用することができます。**

完成すると、プラットフォームの**GameObject**に*CustomPlatform*スクリプトがもう追加してます。

## Unity のベイクしたライティング

この部分で Unity 2019.3 のベイク方法を説明しますので、すでに詳しい読者は[PrefabLightmapping](#prefablightmapping)まで読み飛ばしていただいて結構です。より詳しい情報は、[Unity Documentation on Baked Lighting](https://docs.unity3d.com/ja/2019.3/Manual/LightMode-Baked.html) を参照してください。

### ライトをベイクに設定

シーン内に多くの**Light**を配置してもすべての**Light**が影を落とすでもパフォーマンスに影響を与えません。全ての Unity の 4 種類の**Light**は全部ベイクに使用することができます。

- Directional
- Point
- Spot
- Area

![](/.assets/images/models/baked/01.png)

Inspector でベイクしたいの**Light**を**Mode**を**Baked**に設定します。**Area Light**はベイクのみ使用可能ですから設定が必要はありません。

影が落としたい**Light**の**Shadow Type**を**Soft Shadows**に設定します。

![](/.assets/images/models/baked/02.png)

影を受けるや落とすの**GameObject**には、Inspector で Mesh Renderer の部分でこのオプションを設定する必要があります。

- **Cast Shadows** **On**
- **Receive Shadows** **チェック**
- **Contribute Global Illumination** **チェック**
- **Receive Global Illumination** **Lightmaps**

![](/.assets/images/models/baked/03.png)

### 全部の GameObject にライトマップ UV を追加

Scene 内の全ての**GameObject**の**Prefab**をベイクするには、
[**ライトマップ UV**](https://docs.unity3d.com/ja/current/Manual/LightingGiUvs-GeneratingLightmappingUVs.html)が必要です。

Unity が自動的に生成ように、**Prefab**をクリックし、Inspector の Model タブを選びます、そして**Generate Lightmap UVs**をチェックします。最後に**Apply**をクリックします。複数の Prefab にクリックをしますと全部まとめてに設定を変われます。

![](/.assets/images/models/baked/04.png)

### 全部のライトと GameObject を Static に設定

Static に設定したの**Light**と**GameObject**のみがベイクに使用されます。Hierarchy のリストの中のシーン内の**GameObject**をクリックします。

![](/.assets/images/models/baked/05.png)

そして Inspector で Static をチェックします。

![](/.assets/images/models/baked/06.png)

トップレベルの**GameObject**を Static に設定すると、すべての子**GameObject**も現れるのダイアログボックスで static に簡単に設定ができます。

![](/.assets/images/models/baked/07.png)

### ベイクしたライティング互換の BeatSaber シェーダーを使用する

ビートセイバーと互換性のあるシェーダーが全てベイクしたライティングで動作するわけではありません。今のところ、BSMG の[BS_Shader_Pack (Discord Link)](https://discord.com/channels/441805394323439646/468249466865057802/732620241502339093) にある以下のシェーダーだけが動作することが分かっています。

- Custom.shader
- GlassRefraction.shader

ビートセイバーの「Alpha Glow」問題とベイクしたライティングに対応した他のシェーダを見つけることができるかもしれませんが、この 2 つはほとんどの用途で機能します。

シェーダを Unity プロジェクトにインポートまたはドラッグ＆ドロップします。すべて同時にのまたは個々のマテリアルをクリックします、Custom や BeatSaber/GlassRefraction シェーダを選択します。

![](/.assets/images//models/baked/08.png)

ほとんどの設定が自動にコピーされるはずですが、再度設定を修正する必要があるかもしれません。

### ライトをベイクします

最後に 1 ～ 4 の手順が終わったら、メニューの**Window**->**Rendering**->**Lighting**を選択して、**Lighting**のパネルを開きます。

ビートセイバーのカスタムプラットフォームは「Skybox」をエクスポートして使用することができません。
でも「Environment Lighting」と「Environment Reflections」はベイクしたライティングに影響を与えるので、適切な色や環境マップに設定してください。

Window メニュー -> Rendering -> Light Settings パネルを開きます。

- 「Skybox Material」を「None」に設定
- 「Environment Lighting」を「Color」に設定
- 「Environment Reflections」を「Custom」に設定

![](/.assets/images//models/baked/09.png)

4GB VRAM と OpenCL 1.2 をサポートする GPU が 1 つ以上あれば、**Progressive GPU (Preview)**を使用してベイクしたライティングができます。

ほとんどの設定はデフォルトのままで大丈夫ですが、私は**Lightmap Size**を 2048 に増やします。そして**Auto Generate**をオフにすると変更のたびにベイクが行われるのことを止める。

**Generate Lighting**を押すと**LightMap**を作成します。

![](/.assets/images/models/baked/10.jpg)

**Progressive GPU (Preview)**は時々クラッシュのことがあるから**Enlighten**が使えますけど CPU でベイクするからシーンの複雑に場合 GPU より遅い。どっちでも正しいライトマップができます。

![](/.assets/images/models/baked/11.png)

ベイクが成功すると、シーンのあるフォルダに同じ名前のフォルダができます。 ライトマップのデータファイルは、その中にあります。

- LightingData
- Lightmap-0_comp_dir
- Lightmap-0_comp_light

![](/.assets/images/models/baked/12.png)

## Prefab Lightmapping

次はベイクしたライティングマップを CustomPlatform 内の**Prefab**に保存し、ビートセイバー内で使用してますための手順です。 ライトマップのデータは普通に**Scene**にエクスポートされます（VRChat のように）。 しかし、CustomPlatform は**AssetBundle**内の**Asset**しかエクスポートできないので、全てのデータを**Prefab**に付けます必要があります。

Custom Platform のスクリプトのある**GameObject**に、新しい**Prefab Lightmap Data**コンポーネントを追加します。

![](/.assets/images/models/baked/13.png)

次、メニューから**Assets** -> **Bake Prefab Lightmaps** を選択します。 これが完了すると、**Prefab Lightmap Data** コンポーネントの項目が満たされます。

![](/.assets/images/models/baked/14.png)

これで Custom Platform を**エクスポート**します。

![](/.assets/images/models/baked/15.png)

## ビートセイバーでカスタムプラットフォームをテストします

ベイクしたライティングを使用するには、[Custom Platforms version 6.1.17](https://github.com/affederaffe/CustomPlatforms/releases/tag/v6.1.17)以降が必要です。

また、ベイクしたライティングと干渉する可能性のある Beat Saber のメニューライトを制御するために、[Tweaks55](https://github.com/kinsi55/BeatSaber_Tweaks55/releases/tag/v0.3.8)も必要です。

これらの MOD を Beat Saber/Plugins フォルダにまずインストールします。また、ModAssistant からインストールすることもできます。

エクスポートした Custom Platform の.plat ファイルを Beat Saber/CustomPlatforms フォルダにコピーし、Beat Saber を起動します。

### Tweak55 でメニューライトの色を変更する

ビートセイバーの自身白いメニューライトはベイクしたライティングに干渉するかも。**Tweak55 MOD** の **UI タブ** から **Menu Light Color** を変更します。黒いに設定でライトを無効する、または他の色に設定でプラットフォームを照らす。

![](/.assets/images/models/baked/16.jpg)

### ゲーム内のライトの色を変更する

ゲーム内のライトもベイクしたライティングに干渉するかも。選曲の時左メニューの**Vanilla タブ**をクリック、**Colors**、**Override Default Colors**を選ぶ、色表示の行の横にある変更ボタンをクリックします。ここも黒いに設定でライトを無効する、または他の色に設定でプラットフォームを照らす。

![](/.assets/images/models/baked/17.jpg)

### 他の MOD はプラットフォームに影響を与えるライトを追加できる

他の MOD は新しいライトを追加することができます。新しいライトの「Culling Mask」が「Layer 1」に抜ければならないとベイクしたライティングに干渉する可能性があります。

この画像で VMCAvatar のライトが表示します。この MOD を使えれば、私の MOD[VMCLightDisabler](https://github.com/Kylon99/VMCLightDisabler/releases/tag/0.1.0) でいつもビートセイバーのシーンが変わるとライトに無効します。

![](/.assets/images/models/baked/18.jpg)

### ビートセイバーをプレイする！

新しいプラットフォームおつかれさまでした！

![](/.assets/images/models/baked/19.jpg)
