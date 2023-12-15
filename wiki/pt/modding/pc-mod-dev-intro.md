- - -
sidebar: auto description: Learn how to create your own PC mods!
- - -

# PC Mod Development Intro
_Learn how to get started writing your own PC Mods._

## Começando
::: warning This guide is for making mods for the **PC** version of Beat Saber!

If you want to develop mods for the **Quest Standalone** version of the game, visit the [Quest Mod Development Guide](./quest-mod-dev-intro.md)

Make sure your game is modded before trying to make a mod.  
See instructions for [modding Beat Saber on PC.](/pc-modding.md)

This guide assumes you have a basic to intermediate understanding of C# and Unity.  
You may have difficulty understanding what is covered here if you do not have this foundation. :::

Beat Saber is made in Unity 2019.3 using C# with .NET framework 4.6  
You will need to download the latest version of [Visual Studio Community](https://visualstudio.microsoft.com/).

## Configurando as Ferramentas de Modding
We will be using the BeatSaberModdingTools extension in this tutorial, as it comes with modding templates and useful features.  
BeatSaberModdingTools is maintained by Zingabopp. If you find the tools to be useful, consider throwing some support their way.

You can download it on their [GitHub](https://github.com/Zingabopp/BeatSaberTemplates/releases/latest).  
You will need to download `BeatSaberModdingTools.vsix`. (Expand the Assets dropdown if you cannot find it)

Once downloaded, open the `.vsix` and it will install itself as a Visual Studio Plugin.  
If you have any issues, consult the project's [README](https://github.com/Zingabopp/BeatSaberModdingTools#readme) and [WIKI](https://github.com/Zingabopp/BeatSaberModdingTools/wiki).

## Configuração do Template
First, create a new project using the template.  
We are going to use the `BSIPA4 Plugin (Core)` template, and we'll be calling our mod `BSPlugin1`. You should change the name to whatever you want to call your mod.

![Modding Template Select](~@images/modding/modding-template-select.png "Modding Template Select")  
![Modding Template Name](~@images/modding/modding-template-name.png "Modding Template Name")

You will then need to set your Beat Saber Directory in Visual Studio. Follow the instructions [on the template readme](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use), or see the screenshot below.

![Setup Beat Saber Directory](~@images/modding/setup-bs-directory.png "Setup Beat Saber Directory")

At this point, **try and build the project**, and it should automatically find the references for you and the build should succeed.

If your build does not succeed, check that you don't have any missing references.

::: tip BeatSaberModdingTools will automatically handle references. If your references could not be found, [double-check the instructions](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use).

If you need to manually add references, right click on `References` in the Project folder, then `Beat Saber Reference Manager...`. Select your references, then click "Apply".

You can find more information about the reference manager [here](https://github.com/Zingabopp/BeatSaberModdingTools/wiki/Adding-References). :::

## Inspecionando o Código
You should have 5 files open automatically with the template.

| Nome do arquivo          | Sobre                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| `manifest.json`          | Informações sobre o seu mod para o BSIPA.                                                          |
| `Plugin.cs`              | O arquivo principal carregado para o seu mod.                                                      |
| `AssemblyInfo.cs`        | Preenche informações sobre seu mod. Isso é gerenciado principalmente pelas Ferramentas de Modding. |
| `PluginConfig.cs`        | Um modelo para ativar a configuração para o seu mod. Isto está comentado por padrão.               |
| `BSPlugin1Controller.cs` | Um MonoBehaviour genérico para o seu mod.                                                          |

### Editar o manifesto do seu mod
Fill out the `manifest.json` file with your information.  
The `name` and `id` keys are used to identify your mod. The ID should match the ID used when uploading your mod to BeatMods.

::: warning Do **not** remove the dependency on BSIPA. As of BSIPA v4.1 this is required for your mod to load. :::

## Compilando
Build your plugin with `Build -> Build Solution` or <kbd>CTRL + SHIFT + B</kbd>  
Your compiled DLL should automatically be copied to the `Plugins` folder in your Beat Saber directory! This will be done for both debug and release builds.

::: tip NOTE When you are ready to release your mod, select the `Release` option to make a Release build of your mod.

Building in Release mode will generate a packaged `.zip` file ready to upload to BeatMods. :::

## Testando seu mod no jogo
To test if your mod is loaded in-game, you will need to launch Beat Saber with the BSIPA Console enabled. Add `--verbose` as a launch argument and run the game.  
For more information on launch arguments, see [here](./#launch-args).

When you launch the game, you should see BSIPA load your mod in the console window.

![Testing console screenshot](~@images/modding/testing-console.png "Testing console screenshot")

## Próximos passos
Here are some useful resources in continuing your modding career.

* Se você precisar de ajuda para desenvolver mods, você pode perguntar em `#pc-mod-dev` no [Discord do BSMG](https://discord.gg/beatsabermods).
* Se você quiser descompilar o código, confira o [dnSpy](https://github.com/dnSpy/dnSpy/releases)
* Veja a documentação do BSIPA para mais informações sobre o [sistema de configuração](https://bsmg.github.io/BeatSaber-IPA-Reloaded/tags/4.1.3/articles/start-dev.html#configuring-your-plugin).
* Se você precisar aplicar o código do jogo em seu mod, você deve usar o [Harmony](https://github.com/pardeike/Harmony#readme). O `0Harmony.dll` já está instalado para jogos com mods.
* Para desenvolvedores experientes, você pode estar interessado em saber mais sobre o Zenject, a o sistema de Injeção de Dependência usado fortemente no Beat Saber. [SiraUtil](https://github.com/Auros/SiraUtil#readme) é uma biblioteca que permite que você entre facilmente nesse sistema.
