# Introdução de Modding
_Aprenda a começar a escrever seus próprios mods para PC_

## Começando
::: warning Aviso Este guia é para fazer mods para a versão de **PC** do Beat Saber!

Certifique-se de que seu jogo está com mods antes de tentar fazer um mod.  
Veja as instruções para [modding Beat Saber on PC.](/pc-modding.md)

Este guia presume que você tem um conhecimento básico a intermédio de C# e Unity.  
Você pode ter dificuldade em entender o que é abordado aqui se não tiver esta base. :::

O Beat Saber é feito na Unity 2019.3 usando C# com o .NET framework 4.6  
Você precisará baixar a última versão do [Visual Studio Community](https://visualstudio.microsoft.com/).

## Configurando as Ferramentas de Modding
Nós usaremos a extensão BeatSaberModdingTools neste tutorial, já que ele vem com templates de mods e recursos úteis.  
BeatSaberModdingTools é mantido por Zingabopp. Se achar estas ferramentas úteis, considere enviar algum apoio para ele.

Você pode baixá-lo no [GitHub](https://github.com/Zingabopp/BeatSaberTemplates/releases/latest).  
Você precisará baixar o `BeatSaberModdingTools.vsix`. (Expande o menu Assets se não o conseguires encontrar)

Uma vez baixado, abra o `.vsix` e ele será instalado como um Plugin Visual Studio.  
Se você tiver quaisquer problemas, consulte o [README](https://github.com/Zingabopp/BeatSaberModdingTools#readme) do projeto e a [WIKI](https://github.com/Zingabopp/BeatSaberModdingTools/wiki).

## Configuração do Template
Primeiro, cria um novo projeto usando o modelo.  
Vamos usar o modelo `BSIPA4 Plugin (Core)`, e vamos chamar o nosso mod de `BSPlugin1`. Deves mudar o nome para o que quiseres chamar ao teu mod.

![Modding Template Select](~@images/modding/modding-template-select.png "Modding Template Select")  
![Modding Template Name](~@images/modding/modding-template-name.png "Modding Template Name")

Depois, vais precisar de definir o teu diretório do Beat Saber no Visual Studio. Segue as instruções no [readme do modelo](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use), ou vê a captura de ecrã abaixo.

![Setup Beat Saber Directory](~@images/modding/setup-bs-directory.png "Setup Beat Saber Directory")

Neste ponto, **tenta compilar o projeto**, e ele deve encontrar automaticamente as referências para ti e a compilação deve ter sucesso.

Se a sua compilação não tiver sucesso, verifique se você não tem nenhuma referência faltando.

::: tip Dica BeatSaberModdingTools irá lidar automaticamente com referências. Se suas referências não forem encontradas, [verifique novamente as instruções](https://github.com/Zingabopp/BeatSaberModdingTools#how-to-use).

Se você precisar de adicionar referências manualmente, clique com o botão direito em `References` na pasta do Projeto, depois `Beat Saber Reference Manager...`. Selecione suas referências e clique em "Apply".

Você pode encontrar mais informações sobre o gerenciador de referências [aqui](https://github.com/Zingabopp/BeatSaberModdingTools/wiki/Adding-References). :::

## Inspecionando o Código
Você deve ter 5 arquivos abertos automaticamente com o template.

| Nome do arquivo          | Sobre                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| `manifest.json`          | Informações sobre o seu mod para o BSIPA.                                                          |
| `Plugin.cs`              | O arquivo principal carregado para o seu mod.                                                      |
| `AssemblyInfo.cs`        | Preenche informações sobre seu mod. Isso é gerenciado principalmente pelas Ferramentas de Modding. |
| `PluginConfig.cs`        | Um modelo para ativar a configuração para o seu mod. Isto está comentado por padrão.               |
| `BSPlugin1Controller.cs` | Um MonoBehaviour genérico para o seu mod.                                                          |

### Editar o manifesto do seu mod
Preencha o arquivo `manifest.json` com as suas informações.  
As chaves `name` e `id` são usadas para identificar o seu mod. O ID deve corresponder ao ID usado quando enviar o seu mod para o BeatMods.

::: warning Aviso **Não** removas a dependência no BSIPA. A partir do BSIPA v4.1 isso é necessário para seu mod carregar. :::

## Compilando
Compila o teu plugin com `Build -> Build Solution` ou <kbd>CTRL + SHIFT + B</kbd>  
O teu DLL compilado deverá ser copiado automaticamente para a pasta `Plugins` no teu diretório do Beat Saber! Isto será feito tanto para versões de depuração como para versões de lançamento.

::: tip NOTA Quando estiver pronto para lançar seu mod, selecione a opção `Release` para fazer uma versão de lançamento de seu mod.

Compilar em modo Release vai criar um ficheiro `.zip` pronto para enviar para o BeatMods. :::

## Testando seu mod no jogo
Para testar se seu mod está carregado no jogo, você precisará iniciar o Beat Saber com o Console BSIPA ativado. Adicione `--verbose` como um argumento de inicialização e execute o jogo.  
Para obter mais informações sobre os argumentos de inicialização, consulte [aqui](./#launch-args).

Ao iniciar o jogo, você deverá ver BSIPA carregar seu mod na janela do console.

![Testing console screenshot](~@images/modding/testing-console.png "Testing console screenshot")

## Próximos passos
Aqui estão alguns recursos úteis para continuar sua carreira de mods.
* Se você precisar de ajuda para desenvolver mods, você pode perguntar em `#pc-mod-dev` no [Discord do BSMG](https://discord.gg/beatsabermods).
* Se você quiser descompilar o código, confira o [dnSpy](https://github.com/dnSpy/dnSpy/releases)
* Veja a documentação do BSIPA para mais informações sobre o [sistema de configuração](https://bsmg.github.io/BeatSaber-IPA-Reloaded/tags/4.1.3/articles/start-dev.html#configuring-your-plugin).
* Se você precisar aplicar o código do jogo em seu mod, você deve usar o [Harmony](https://github.com/pardeike/Harmony#readme). O `0Harmony.dll` já está instalado para jogos com mods.
* Para desenvolvedores experientes, você pode estar interessado em saber mais sobre o Zenject, a o sistema de Injeção de Dependência usado fortemente no Beat Saber. [SiraUtil](https://github.com/Auros/SiraUtil#readme) é uma biblioteca que permite que você entre facilmente nesse sistema.